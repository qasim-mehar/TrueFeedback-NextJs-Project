import mongoose, { Schema, Document } from "mongoose";
import * as z from "zod";
export interface Message extends Document {
  content: string;
  createdAt: Date;
}
const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User {
  // identifier: string;
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAccepting: boolean;
  messages: Message[];
}
const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    unique: true,
    trim: true,
    match: [/^[a-zA-Z0-9]*$/, "Special symbols are not acceptable"],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "please enter correct email",
    ],
  },
  password: {
    type: String,
    required: true,
    match: [
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "at least 8 characters must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number Can contain special characters",
    ],
  },
  verifyCode: {
    type: String,
    required: [true, "Verify code is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Code expiry date is required."],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAccepting: {
    type: Boolean,
    default: true,
  },
  messages: [MessageSchema],
});
