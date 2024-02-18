export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const error_page_img ="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const USER_AVATAR = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"

export const API_OPTION = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    }
  };
  export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name:"English" },
    { identifier: "hindi", name:"Hindi" },
    { identifier: "spanish", name:"Spanish" }
  ];
  export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg";
  export const IMG_CDN = "https://image.tmdb.org/t/p/w780";

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;