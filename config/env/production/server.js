module.exports = ({ env }) => ({
  proxy: true,
  url: env("MY_HEROKU_URL"),
  app: {
    keys: env.array("APP_KEYS", [
      "byIio9e+oBImGPlRmq1Chw==",
      "SdO0255QoeJvYEVVINV+pw==",
      "u7E21pzZ+dajAGIGGyI7Gw==",
      "Qaj4bbjl/JBSZA7f2fA6Ug==",
    ]),
  },
});
