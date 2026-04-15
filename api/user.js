export default function handler(req, res) {
  res.status(200).json({
    success: true,
    users: [
      {
        id: 1,
        name: "Hasan",
        email: "hasan@gmail.com",
      },
      {
        id: 2,
        name: "Rahim",
        email: "rahim@gmail.com",
      },
    ],
  });
}
