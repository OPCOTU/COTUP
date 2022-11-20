require("dotenv").config();

module.exports = {
  token: process.env.TOKEN, // your bot token
  clientID: process.env.CLIENT_ID, // your bot client id
  prefix: process.env.PREFIX || "a!", // bot prefix
  ownerID: process.env.OWNERID, //your discord id
  SpotifyID: process.env.SPOTIFYID,
  SpotifySecret: process.env.SPOTIFYSECRET,
  mongourl: process.env.MONGO_URI, // MongoDb URL
  embedColor: process.env.COlOR || 0x303236, // embed colour
  logs: process.env.LOGS, // channel id for guild create and delete logs
  links: {
    img:
      process.env.IMG ||
      "https://cdn.discordapp.com/icons/905075946426613760/b4d47f7be31abeb7bb5c871a13de8610.webp", //setup system background image
    support: process.env.SUPPORT || "https://discord.gg/ZrNzZYc7Dv", //support server invite link
    invite:
      process.env.INVITE, //bot invite link
  },
  nodes: [
    {
      host: process.env.NODE_HOST || "lavalink.oops.wtf",
      port: parseInt(process.env.NODE_PORT || "2000"),
      password: process.env.NODE_PASSWORD || "www.freelavalink.ga",
      secure: parseBoolean(process.env.NODE_SECURE || "false"),
    },
  ],
};

function parseBoolean(value) {
  if (typeof value === "string") {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}
