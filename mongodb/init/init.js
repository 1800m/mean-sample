rs.initiate({
  _id: 'replset',
  members: [
    {
      _id: 0,
      host: "mongodb:27017",
      priority: 100
    }
  ],
});