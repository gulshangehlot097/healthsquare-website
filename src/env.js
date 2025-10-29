const IS_LOCAL = typeof window !== "undefined"
  ? window.location.hostname.includes("localhost") || window.location.hostname.startsWith("192.")
  : false;
const constant = {
  USER: "",
  EMAIL_ID: "",

  COOKIE: {
    HEADER: "@#$%^AZ##",
  },

  ROUTES: {
    INDEX: "/",
    // add more routes here
  },
  BASE_URL: IS_LOCAL
    ? "http://192.168.1.35:3001"        
    : "https://healthsquare-website.vercel.app/",     

  //  SOFTWARE_URL: "https://insurance.digibima.com/",

  API: {
    USER: {
      SENDOTP: "/api/user/sendotp",
      VERIFYOTP: "/api/user/verifyotp",
      //  SENDOTP: "/api/sendotp",
      // VERIFYOTP: "/api/verifyotp",
       PINCODE: "/api/acpincode",
      USERINQUIRE: "/api/user/inquiry",
      USERLOGIN: "/api/motor/vehicle-type-select",
    },

    ADMIN: {
      ADMINLOGIN: "/api/adminpnlx/admin-login",
      SENDOTP: "/api/adminpnlx/sendotp",
      VERIFYOTP: "/api/adminpnlx/verifyotp",
    },
    BLOG:"/api/user/blog",
    SINGLEBLOG:"/api/user/blog-show",
    DELETEBLOG:"/api/user/delete",
    TRASHBLOG:"/api/user/trash"
  },
};

export default constant;
