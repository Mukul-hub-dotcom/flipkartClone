import User from "../model/user-schema.js";

export const userSignup = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return res.status(401).json({ message: "username already exist" });
    }
    const user = req.body;
    const newUser = new User(user);
    console.log(newUser)
    await newUser.save();
    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const userLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
   let user= await User.findOne({email:email,password:password})
   if(user){
    return res.status(200).json({data:user});
       }
   else{
    return res.status(401).json('Invalid login')
   }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
