import express from 'express'
import mongoose from 'mongoose';
import investment from "../models/investment.js";

export const createinvestment =async (req ,res)=>{
    console.log(req.body);
    const post=req.body;
    const newpost= new investment(post);
    try{
        await newpost.save();
        res.send("saved");

    }catch(error){
        res.send(error);
    }
}

export const getinvestment=async(req,res)=>{
    try{
        const post=await investment.find();
        res.send(post);
    }catch(error){
        res.send(error);
    }
}