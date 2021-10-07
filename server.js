var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({"origin": "http://localhost:3000"}));

app.use(express.static('public'));

var logger = require('./public/logger.js');
app.use(logger);

var data = require("./public/data.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.param('name', function (req, res, next){
    req.lowerName = req.params.name.toLowerCase();
    next();
});

var classid = 0;
var teachers = [];
var learners = [];
var timesA = [];
var classroom = [];
var subject = [];
var meetLink = [];

app.get('/', (req, res) => {
    res.send(__dirname + '/public/index.html');
});

app.get('/home', function (req, res) {
    res.redirect(301, '/');
});

app.get('/api/classes', function(req, res){
    res.json(data.classes);
});

app.get('/api/class', function(req, res){

    var classParameter= +req.query.class;
    console.log(classParameter);

    if(classParameter !== ""){
        for(var i=0; i < data.classes.length; i++){
            if(data.classes[i].id === classParameter){
                classid = classParameter;
                console.log(classid)
            }
        };
    }else{
        res.status(404).json("Cannot find any classes with the id ");
    };

    for(var i=0;i<data.teachers.length;i++){
        var teacherClasses = data.teachers[i].classes;
    
        // console.log(teacherClasses);
    
        for(var j=0;j<teacherClasses.length;j++){
            // console.log(teacherClasses[j]);
    
            if(teacherClasses[j]===classid){
                var indexPoint=i;
                 teachers.push(data.teachers[indexPoint].name);
            }
        }
    
        };

        console.log(teachers);

        for(var i=0;i<data.learners.length;i++){
            var learnersClasses = data.learners[i].classes;
        
            for(var j=0;j<learnersClasses.length;j++){
        
                if(learnersClasses[j]===classid){
                    var indexPoint=i;
                     learners.push(data.learners[indexPoint].name);
            }
            }
            };
            console.log(learners);


            var slotNum= data.classes[classid-1].slot;
            //   console.log(slotNum);
        
            for(var i=0;i<data.slots.length;i++){
        
                if(data.slots[i].slot===slotNum){
                    timesA.push(data.slots[i].times);
                } 
        };
        console.log(timesA);
        

        var classroomNum= data.classes[classid-1].classroom;
        //console.log(classroomNum);
            classroom.push(classroomNum);
                 console.log(classroom);

        var subjectNum= data.classes[classid-1].subject;
            subject.push(subjectNum);
                 console.log(subject);

        var linkNum= data.classes[classid-1].link;
        meetLink.push(linkNum);
             console.log(meetLink);



             if(classParameter !== ""){
                for(var i=0; i < data.classes.length; i++){
                    if(data.classes[i].id === classParameter){
                        var concetenate=[data.classes[i], "Teacher :"+teachers, "Learner:" + learners, {timesA}, "Classroom:" + classroom, "Subject" + subject, "Google meet link" + meetLink];
                        res.json(concetenate);
                    }
                };
            }else{
                res.status(404).json("Cannot find any classes with the id ");
            };

            meetLink = [];
            subject = [];
            classroom = [];
            timesA = [];
            learners =[];
            teachers = [];
});

var teacherClasses = [];


app.get('/api/teacher/:name', function(req, res){
    var teacherid = null;

    for (var i=0;i<data.teachers.length; i++){
      
        
        if(data.teachers[i].name === req.params.name){

            teacherid = data.teachers[i].classes;
            for(var j=0; j < teacherid.length;j++){
                teacherClasses.push(data.classes[data.teachers[i].classes[j]-1]);
                
               
            };
            res.json(teacherClasses);
        };

    //    console.log(teacherClasses);
    };
    if(teacherid === null){
        res.status(404).json("No teacher with name:'" + req.params.name + "' found.")
    };
    teacherClasses = [];
});


// list of classes taken by one learner

var learnerClasses = [];
var teacherClasses2 = []


app.get('/api/learners/:name', function(req, res){
    var learnerid = null;

    for (var i=0;i<data.learners.length; i++){
      
        
        if(data.learners[i].name === req.params.name){

            learnerid = data.learners[i].classes;
            for(var j=0; j < learnerid.length;j++){
                learnerClasses.push(data.classes[data.learners[i].classes[j]-1]);
                
               
            };
            res.json(learnerClasses);
        };

    //    console.log(teacherClasses);
    };
    if(learnerid === null){
        res.status(404).json("No student with name:'" + req.params.name + "' found.")
    };
    learnerClasses = [];
});

app.get('/api/learners/id/:id', function(req, res){
    var learnerid = null;

    for (var i=0;i<data.learners.length; i++){

        if(data.learners[i].id == req.params.id){
           
            console.log(data.learners[i].id);

            learnerid = data.learners[i].classes;
            for(var j=0; j < learnerid.length;j++){
                learnerClasses.push(data.classes[data.learners[i].classes[j]-1]);

            };
            res.json(learnerClasses);
            
        };

    };
    if(learnerid === null){
        res.status(404).json("No learner with name:'" + req.params.id + "' found.")
    };

    learnerClasses=[];

}); 


app.get('/api/teacher/id/:id', function(req, res){
    var teacherid = null;

    for (var i=0;i<data.teachers.length; i++){

        if(data.teachers[i].id == req.params.id){
           
            console.log(data.teachers[i].id);

            teacherid = data.teachers[i].classes;
            for(var j=0; j < teacherid.length;j++){
                teacherClasses2.push(data.classes[data.teachers[i].classes[j]-1]);

            };
            res.json(teacherClasses2);
        };

    };
    if(teacherid === null){
        res.status(404).json("No teacher with id:'" + req.params.id + "' found.")
    };

    teacherClasses2=[];

}); 


//user id for valid email and password

app.get("/api/users/", function(req, res){

    var allUsers={"teachers":data.teachers, "learners":data.learners}
    res.json(allUsers);
});


app.get('/api/slots', function(req, res){
    res.json(data.slots);
});

app.get('/api/teachers', function(req, res){
    res.json(data.teachers);
});

app.get('/api/learners', function(req, res){
    res.json(data.learners);
});

app.get('/api/user/:email/:password', function(req, res){
    userid = null;

    for (var i=0;i<data.teachers.length; i++){
        
        if(data.teachers[i].email === req.params.email && data.teachers[i].password === req.params.password){
            userid = data.teachers[i].id;
            res.json("userid:" + userid);

    };
}; 
for (var i=0;i<data.learners.length; i++){
        
    if(data.learners[i].email === req.params.email && data.learners[i].password === req.params.password){
        userid = data.learners[i].id;
        res.json("userid:" + userid);

};

        if(userid === null){
        res.status(404).json("No user with pw and email:'" + req.params.email+ " and " +req.params.password + "' found.");
        };
    };



});


app.put('/api/classes/:id', (req,res) =>{
    var id = req.params.id;
    var slot = req.body.slot;
    var subject = req.body.subject ;
    var group = req.body.group ;
    var classroom = req.body.classroom;
    var link =  req.body.link;


    var classesIndex = null;
    for(var i=0; i< data.classes.length; i++){
        if (data.classes[i].id === parseInt(id)) {
            classesIndex = i;
        }
    }

    if (classesIndex == null) {
        res.status(404).json("No class with id " + id + " found");
    }
    else if(classesIndex !== null){
        if (slot != "") {
            data.classes[classesIndex].slot = slot;
        }

        if (subject != "") {
            data.classes[classesIndex].subject = subject;
        }
        
        if (group != "") {
            data.classes[classesIndex].group = group;
        }

        if (classroom != "") {
            data.classes[classesIndex].classroom = classroom;
        }

        if (link != "") {
            data.classes[classesIndex].link = link;
        }
    }

});

app.get('/test', cors(), function(req, res, next) {
    res.json({msg: 'CORS-enabled for single route'});
});

app.listen(8000, function() {
    console.log('listening on port 8000')
});