const ncOpts = {
  onError: function (error, req, res, next) {
    console.log(error);
    res.status(500).json({ error });
  },
  onNoMatch: function (req, res) {
    res.status(400).send("Not Found");
  },
};
export default ncOpts;
