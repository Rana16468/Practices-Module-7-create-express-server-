"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// json type data handeling process
app.use(express_1.default.json());
//isLogin Middelware
const isLogin = (req, res, next) => {
    let isLogger = true;
    if (isLogger) {
        const afterLogin = {
            url: req.url,
            hostName: req.hostname,
            method: req.method
        };
        console.log('Login Successfully Completed', afterLogin);
    }
    else {
        console.log('something went wrong , Login Not Successful');
    }
    next();
};
// router 
const useRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
// requested path
app.use('/api/v1/user-details', useRouter);
app.use('/api/v1/courseDetails', courseRouter);
// create requested function metnod in user Router path 
useRouter.post('/loginUser', isLogin, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        console.log(user);
        res.send({ success: true, message: 'create account successfully', user });
    }
    catch (error) {
        next(error);
    }
}));
// requested fuction working with course Router 
courseRouter.get('/getCourse', isLogin, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courseInformation = [
        { courseName: 'Next Level Web Development', InstractorName: 'Mazba parshian', courseDetails: 'details',
            courseStudentDetails: {
                FirstName: 'Ali Mohammad',
                LastName: 'Sohel Rana',
                gender: 'male',
                address: 'Thakurgoan',
                phoneNumber: '01722305054',
                isMarried: false,
                email: 'amsr215019@gmail.com'
            },
            learningTopic: ['Node JS', 'Next JS', 'Type Script', 'Prisma']
        },
        { courseName: 'Next Level Web Development', InstractorName: 'Mazba parshian', courseDetails: 'details',
            courseStudentDetails: {
                FirstName: 'Ali Mohammad',
                LastName: 'Sohel Rana',
                gender: 'male',
                address: 'Thakurgoan',
                phoneNumber: '01722305054',
                isMarried: false,
                email: 'amsr215019@gmail.com'
            },
            learningTopic: ['Node JS', 'Next JS', 'Type Script', 'Prisma']
        },
        { courseName: 'Next Level Web Development', InstractorName: 'Mazba parshian', courseDetails: 'details',
            courseStudentDetails: {
                FirstName: 'Ali Mohammad',
                LastName: 'Sohel Rana',
                gender: 'male',
                address: 'Thakurgoan',
                phoneNumber: '01722305054',
                isMarried: false,
                email: 'amsr215019@gmail.com'
            },
            learningTopic: ['Node JS', 'Next JS', 'Type Script', 'Prisma']
        }
    ];
    res.send({ sucees: true, message: 'successfuly get all data', courseInformation });
}));
app.get('/', (req, res) => {
    const str = 'Hellow ! we come come to 3001 server 5855';
    res.send(str);
});
// golbal any types of error handeling 
app.all('*', (req, res) => {
    res.json({
        success: false,
        message: 'Route Not Found'
    });
});
//global error handeling process 
app.use((error, req, res, next) => {
    if (error) {
        res.status(500).json({
            success: false,
            message: 'Something went Wrong',
            error
        });
    }
});
exports.default = app;
