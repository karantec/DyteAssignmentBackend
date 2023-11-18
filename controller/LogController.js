import Log from "../models/LogModel.js";

export const create = async (req, res) => {
    try {
        const logData = new Log(req.body); // Correct instantiation

        if (!logData) {
            return res.status(404).json({ msg: "Log not ingested successfully" });
        }

        await logData.save();
         // Correct save method

         io.emit('logIngested', newLog);


        res.status(200).json({ msg: "Log ingested successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message }); // Send error message for better debugging
    }
}


export const getAll = async (req, res) => {
    try {
        const logData = await Log.find();

        if (!logData || logData.length === 0) {
            return res.status(404).json({ msg: "Log data not found" });
        }

        res.status(200).json(logData); // Corrected variable name

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const getOne = async (req, res) => {
    try {
         const {
      level, message, resourceId, timestamp, traceId, spanId, commit, parentResourceId
    } = req.query;
    const filter = {};

    if (level) filter.level = level;
    if (message) filter.message = { $regex: message, $options: 'i' };
    if (resourceId) filter.resourceId = resourceId;
    if (timestamp) filter.timestamp = timestamp;
    if (traceId) filter.traceId = traceId;
    if (spanId) filter.spanId = spanId;
    if (commit) filter.commit = commit;
    if (parentResourceId) filter['metadata.parentResourceId'] = parentResourceId;

    const logs = await Log.find(filter);
    res.status(200).json(logs);
  } catch (error) {
    console.error('Error filtering logs', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// export const update = async(req, res) =>{
//     try {

//         const id = req.params.id;
//         const userExist = await User.findById(id);
//         if(!userExist){
//             return res.status(401).json({msg:"User not found"});
//         }

//         const updatedData = await User.findByIdAndUpdate(id, req.body, {new:true});
//         res.status(200).json({msg: "User updated successfully"});
        
//     } catch (error) {
//         res.status(500).json({error: error});
//     }
// }


// export const deleteUser = async(req, res) =>{
//     try {

//         const id = req.params.id;
//         const userExist = await User.findById(id);
//         if(!userExist){
//             return res.status(404).json({msg: "User not exist"});
//         }
//         await User.findByIdAndDelete(id);
//         res.status(200).json({msg: "User deleted successfully"});
        
//     } catch (error) {
//         res.status(500).json({error: error});
//     }
// }