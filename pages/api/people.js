// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    {
      name: "Kane",
      age: 43,
      country: "Indonesia"
    },
    {
      name: "Jane",
      age: 21,
      country: "Malaysia"
    },
    {
      name: "Bane",
      age: 21,
      country: "Egypt"
    },
    {
      name: "Mane",
      age: 10,
      country: "Indonesia"
    },
  ])
}