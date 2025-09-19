export function getallnotes (req,res){
    res.send("you just fetched the notes ");
}

export function createnote(req,res){
    res.status(201).json({messge : "notes create sucessfully"});
}


export function updatenote(req,res){
    res.status(200).json({messge : "notes updated  sucessfully"});
}

export function deletenote(req,res){
    res.status(200).json({messge : "notes deleted sucessfully"});
} 