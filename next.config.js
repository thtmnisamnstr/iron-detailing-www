module.exports = {
  // Next.js redirects to point site to the maintenance page / take it off line
  async redirects() {
    return [
      {
        source: "/",
        destination: "/maintenance/",
        permanent: false,
      },
      {
        source: "/services",
        destination: "/maintenance/",
        permanent: false,
      },
      {
        source: "/team",
        destination: "/maintenance/",
        permanent: false,
      },
    ];
  },
};