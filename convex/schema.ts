import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        username: v.string(),
        fullname: v.string(),
        email: v.string(),
        bio: v.optional(v.string()),
        image:v.string(),
        followers: v.number(),
        following: v.number(),
        posts: v.number(),
        clerkId: v.string(),

    }).index('by_clerk_id', ['clerkId']),
    posts: defineTable({
        userId: v.id("users"),
        imageUrl: v.string(),
        storageId: v.id("_storage"),//need it when we delete a post 
        caption: v.optional(v.string()),
        likes: v.number(),
        comments: v.number(),
    }).index('by_user', ['userId']),

    likes: defineTable({
        userId: v.id("users"),
        postId: v.id("posts"),
    }).index('by_post', ['postId']).index('by_user_and_post', ['userId', 'postId']),

    comments: defineTable({
        userId: v.id("users"),
        postId: v.id("posts"),
        content: v.string(),
    }).index('by_post', ['postId']),



});