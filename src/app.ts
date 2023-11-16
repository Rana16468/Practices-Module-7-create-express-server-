import express, { NextFunction, Request, Response } from 'express'
const app = express()

// json type data handeling process
app.use(express.json());

//isLogin Middelware
const isLogin=(req:Request,res:Response,next:NextFunction)=>{

  let isLogger:boolean=true;
  if(isLogger)
  {

    const afterLogin={
      url: req.url,
     hostName: req.hostname,
     method: req.method}
     console.log('Login Successfully Completed',afterLogin);
  }
  else{
    console.log('something went wrong , Login Not Successful');
  }
  next();

 

}
// create fake course data
interface courseDataType{
      courseName:string,
      InstractorName:string;
      courseDetails:string;
      courseStudentDetails:{
        FirstName:string,
        LastName:string,
        gender: 'male' | 'female',
        address:string,
        phoneNumber:string,
        isMarried:boolean,
        email:string
      },
      learningTopic:string[]
}


// router 
const useRouter=express.Router();
const courseRouter=express.Router();
 // requested path
app.use('/api/v1/user-details',useRouter);
app.use('/api/v1/courseDetails',courseRouter);

// create requested function metnod in user Router path 
useRouter.post('/loginUser',isLogin,async(req:Request,res:Response, next:NextFunction)=>{

       try{
        const user=req.body;
       console.log(user);
       res.send({success:true,message:'create account successfully',user});
       }
       catch(error){
        next(error);
       }
});

// requested fuction working with course Router 
courseRouter.get('/getCourse', isLogin,async(req:Request,res:Response)=>{


    const courseInformation:Array<courseDataType>=[
    { courseName:'Next Level Web Development',InstractorName:'Mazba parshian', courseDetails:'details',
    courseStudentDetails:{
      FirstName:'Ali Mohammad',
      LastName:'Sohel Rana',
      gender:'male',
      address:'Thakurgoan',
      phoneNumber:'01722305054',
      isMarried:false,
      email:'amsr215019@gmail.com'
    },
    learningTopic:['Node JS','Next JS','Type Script','Prisma']
                                                  },
    { courseName:'Next Level Web Development',InstractorName:'Mazba parshian', courseDetails:'details',
                                                  courseStudentDetails:{
                                                    FirstName:'Ali Mohammad',
                                                    LastName:'Sohel Rana',
                                                    gender:'male',
                                                    address:'Thakurgoan',
                                                    phoneNumber:'01722305054',
                                                    isMarried:false,
                                                    email:'amsr215019@gmail.com'
                                                  },
                                                  learningTopic:['Node JS','Next JS','Type Script','Prisma']
                                                                                                },
     { courseName:'Next Level Web Development',InstractorName:'Mazba parshian', courseDetails:'details',
                                                                                                courseStudentDetails:{
                                                                                                  FirstName:'Ali Mohammad',
                                                                                                  LastName:'Sohel Rana',
                                                                                                  gender:'male',
                                                                                                  address:'Thakurgoan',
                                                                                                  phoneNumber:'01722305054',
                                                                                                  isMarried:false,
                                                                                                  email:'amsr215019@gmail.com'
                                                                                                },
                                                                                                learningTopic:['Node JS','Next JS','Type Script','Prisma']
                                                                                                                                              }


]



 res.send({sucees:true,message:'successfuly get all data',courseInformation});


});



app.get('/',(req:Request, res:Response) => {
    const str:string='Hellow ! we come come to 3001 server 5855';
    
  res.send(str);
});

// golbal any types of error handeling 

app.all('*',(req:Request,res:Response)=>{

  res.json({
      success:false,
      message:'Route Not Found'
  })

})

//global error handeling process 
app.use((error:any,req:Request,res:Response,next:NextFunction)=>{

  if(error)
  {
    res.status(500).json({
       success:false,
       message:'Something went Wrong',
       error
    })
  }

})



export default app;

