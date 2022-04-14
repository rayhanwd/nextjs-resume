export default function service(req, res) {
    res.status(200).json([
        {
            "id":1,
            "name":"frontend",
            "title":"Frontend Development",
            "dec":"Make a frontend application with react js and next js"
        },
        {
            "id":2,
            "name":"backend",
            "title":"Backend Development",
            "dec":"dec"
        },
        {
            "id":3,
            "name":"database",
            "title":"Database Management",
            "dec":"dec"
        },
        {
            "id":4,
            "name":"design",
            "title":"Frontend UI Design",
            "dec":"dec"
        }
    ]
    )
  }