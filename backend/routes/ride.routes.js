import express from "express";
import { body, query } from "express-validator";
import { authUser, authCaptain } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post(
    "/create",
    authUser,
    body("pickup").isString().isLength({ min: 3 }).withMessage("Invalid pickup address"),
    body("destination").isString().isLength({ min: 3 }).withMessage("Invalid destination address"),
    body("vehicleType").isString().isIn(["auto", "car", "moto"]).withMessage("Invalid vehicle type"),
    (req, res, next) => import("../controllers/ride.controller.js").then(module => module.createRide(req, res, next))
);

router.get(
    "/get-fare",
    authUser,
    query("pickup").isString().isLength({ min: 3 }).withMessage("Invalid pickup address"),
    query("destination").isString().isLength({ min: 3 }).withMessage("Invalid destination address"),
    (req, res, next) => import("../controllers/ride.controller.js").then(module => module.getFare(req, res, next))
);

router.post(
    "/confirm",
    authCaptain,
    body("rideId").isMongoId().withMessage("Invalid ride id"),
    (req, res, next) => import("../controllers/ride.controller.js").then(module => module.confirmRide(req, res, next))
);

router.get(
    "/start-ride",
    authCaptain,
    query("rideId").isMongoId().withMessage("Invalid ride id"),
    query("otp").isString().isLength({ min: 6, max: 6 }).withMessage("Invalid OTP"),
    (req, res, next) => import("../controllers/ride.controller.js").then(module => module.startRide(req, res, next))
);

router.post(
    "/end-ride",
    authCaptain,
    body("rideId").isMongoId().withMessage("Invalid ride id"),
    (req, res, next) => import("../controllers/ride.controller.js").then(module => module.endRide(req, res, next))
);

export default router;
