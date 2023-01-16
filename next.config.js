/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: "http://localhost:3000",
    MONGODB_URL: "mongodb://localhost:27017/nextjs-ecommerce",
    ACCESS_TOKEN_SECRET: "Lc8ud5m-<FvuT;w6}9h&`?YLw>m3Fjj4,@][:nV?:Sd.Dj3%K",
    REFRESH_TOKEN_SECRET:
      "b-R{#h$=]9+>%{${r}t!ZEarRB>P%)wF)VrD~b(^k^MJVF2FRAPQ5&4vu}6c2@:QJ%B*U&%s5?F_aqDa",
  },
};

module.exports = nextConfig;
