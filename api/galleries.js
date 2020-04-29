const axios = require('axios');
const cors = require('./_middleware/cors');
const { graphql, buildSchema } = require('graphql');

const {
  TUMBLR_API,
  TUMBLR_KEY,
} = process.env;

const API_URL = `${TUMBLR_API}/posts`;

const schema = buildSchema(`
  type QueryParams {
    tag: String
    offset: String
    page_number: String
  }

  type Next {
    href: String
    method: String
    query_params: QueryParams
  }

  type Links {
    next: Next
  }

  type AltSizes {
    url: String
    width: Int
    height: Int
  }

  type OriginalSize {
    url: String
    width: Int
    height: Int
  }

  type Photos {
    caption: String
    alt_sizes: [AltSizes]
    original_size: OriginalSize
  }

  type Reblog {
    comment: String
    tree_html: String
  }

  type Posts {
    type: String
    blog_name: String
    id: String
    id_string: String
    post_url: String
    slug: String
    date: String
    timestamp: Int
    state: String
    format: String
    reblog_key: String
    short_url: String
    summary: String
    should_open_in_legacy: Boolean
    recommended_source: String
    recommended_color: String
    note_count: Int
    caption: String
    photoset_layout: String
    can_like: Boolean
    can_reblog: Boolean
    can_send_in_message: Boolean
    can_reply: Boolean
    display_avatar: Boolean
    photos: [Photos]
    trail: [String]
    reblog: Reblog
    tags: [String]
    blog: Blog
  }

  type Theme {
    header_full_width: Int
    header_full_height: Int
    header_focus_width: Int
    header_focus_height: Int
    avatar_shape: String
    background_color: String
    body_font: String
    header_bounds: String
    header_image: String
    header_image_focused: String
    header_image_poster: String
    header_image_scaled: String
    header_stretch: Boolean
    link_color: String
    show_avatar: Boolean
    show_description: Boolean
    show_header_image: Boolean
    show_title: Boolean
    title_color: String
    title_font: String
    title_font_weight: String
  }

  type Avatar {
    width: Int
    height: Int
    url: String
  }

  type Blog {
    ask: Boolean
    ask_anon: Boolean
    ask_page_title: String
    can_chat: Boolean
    can_subscribe: Boolean
    description: String
    is_nsfw: Boolean
    likes: Int
    name: String
    posts: Int
    share_likes: Boolean
    subscribed: Boolean
    title: String
    total_posts: Int
    updated: Int
    url: String
    uuid: String
    is_optout_ads: Boolean
    theme: Theme
    avatar: [Avatar]
  }

  type Response {
    total_posts: Int
    _links: Links
    posts: [Posts]
    blog: Blog
  }

  type Meta {
    status: Int
    msg: String
  }

  type Query {
    response: Response
    meta: Meta
  }
`);

module.exports = async (req, res) => {
  cors(req, res);

  const isFull = typeof req.query.full === 'string';

  const params = {
    api_key: TUMBLR_KEY,
    tag: 'type:gallery',
  };

  let data;
  try {
    data = (await axios(API_URL, { params })).data;
  } catch (err) {
    res.json(err.response.data);
  }

  if (isFull) {
    res.json(data);
  } else {
    let photos = [];

    let resp;
    try {
      resp = await graphql(schema, '{ response { posts { id photos { caption alt_sizes { url } } } }}', data);
    } catch (err) {
      res.json(err.response.data);
    }

    resp.data.response.posts.forEach(post => {
      post.photos.forEach(photo => {
        photos.push({
          caption: photo.caption,
          src: photo.alt_sizes[3].url,
        });
      });
    })

    res.json(photos);
  }
};
