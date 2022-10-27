import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({

    society:{
        type: String,
        required: true
    },
    eventDesc:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: false
    },
    time_Start:{
        type: String,
        required: true
    },
    time_End:{
        type: String,
        required: true
    },
    issuer:{
        type: String,
        required: true
    },
    document:{
        type: String               //documents ka type ekk baar check kar lena
    },
    euipment:{
        type: [String]             // isse bhi review kar lena uss video se.. actually iska data enetr karne pe bhi show nhi vo raha jab mane api test kiya tha
    },
    status:{
        type: String,
        default: "Pending"
    },
    venue:{
        type:[],
        required: true
    }
    
});

export default mongoose.model("Event", EventSchema)

/*

venuename:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    equipments:{
        type: [String],
        required: false
    },
    photos:{
        type: [String],
        required: false
    },
    status:{
        type: String,
        default: "Pending"
    }


photos:{
    type: [String],
    required: false
},
status:{
    type: String,
    default: "Pending"
}

*/