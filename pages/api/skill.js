export default function skill(req, res) {
    res.status(200).json([
        {
            "id":1,
            "name":"Javascript",
            "ability":"280"
        },
        {
            "id":2,
            "name":"React js",
            "ability":"281"
        },
        {
            "id":3,
            "name":"Next js",
            "ability":"277"
        },
        {
            "id":4,
            "name":"Node js",
            "ability":"278"
        },
        {
            "id":5,
            "name":"Mongodb",
            "ability":"276"
        },
        {
            "id":6,
            "name":"Mongoose",
            "ability":"275"
        },
        {
            "id":7,
            "name":"Express js",
            "ability":"277"
        }
    ]
    )
  }