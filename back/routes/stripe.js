const router = require("express").Router();

const stripe = require("stripe")(
  "sk_test_51KpqSyKnswb4GhL5vHjjuqisCSnK46SJCttWfKyYiy3VdyZ6rmEL66YhePtHsVG0iuuGpEHUm13yOpMi7r684Rtk00mklFThv5"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
