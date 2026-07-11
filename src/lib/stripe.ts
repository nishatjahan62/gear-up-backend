import Stripe from "stripe";
import config from "../config/index";

const stripe = new Stripe(config.stripeSecretKey);

export default stripe;