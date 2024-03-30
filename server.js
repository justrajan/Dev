


/* then*/

//load env vars from .env file



app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/webcode/index.html")
})
app.post("/register" ,async (req , res)=>{
    try{
        const{name,email,password}=req.body;
        const databsedata = new databasemodelname({
            name,
            email,
            password
        
        });
        await databsedata.save();
        res.redirect("/sucess")
    }
    catch(error){
        console.log("ERROR HAS BEEN OCCURED")
        res.redirect("/error")

    }
})

app.get("/sucess", (req , res)=>{
    res.sendFile(__dirname + "/webcode/sucess.html")
})

app.get("/error", (req , res)=>{
    res.sendFile(__dirname + "/webcode/error.html")
})


const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.pksslgh.mongodb.net/RegistrationFormDb`)
useNewUrlParser : true,

const databasedsnaname = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const databasemodelname =mongoose.Model("databasemodelname" , atabasedsnaname);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const existinguser = await databasemodelname.FindOne({email:email});
if(!existinguser){
    const databsedata = new databasemodelname({
    name,
    email,
    password
    });
    await databsedata.save();
    res.redirect("/sucess");
}
else
console.log("THIS USER ALREADY EXISTS IN OUR DATABASE")
res.redirect("/error");








