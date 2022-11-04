import Event from "../models/Event.js"

export const createEvent = async (req,res,next)=>{
    const newEvent = new Event(req.body)
    try{
        const savedEvent = await newEvent.save()
        res.status(200).json(savedEvent)
    } catch(err){
        next(err);
    } 
};

export const updateEvent = async (req,res,next)=>{
    try{
        const updateEvent = await Event.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateEvent)
    } catch(err){
        next(err);
    }
};

export const deleteEvent = async (req,res,next)=>{
    try{
        await Event.findByIdAndDelete(req.params.id);
        res.status(200).json("Event deleted")
    } catch(err){
        next(err);
    }
};

export const getEvent = async (req,res,next)=>{
    try{
        const event = await Event.findById(req.params.id);
        res.status(200).json(event);
    } catch(err){
        next(err);
    }
};

export const getallEvent = async (req,res,next)=>{
    try{
        const events = await Event.find(req.query);
        res.status(200).json(events);
    } catch(err){
        next(err);
    }
};