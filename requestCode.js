console.log("   "+"************WELCOME TO SARAL COURSE************");
const input = require('readline-sync');    //taking user input form user 
function firstApi(saralUrl){
    const axios = require('axios');    // require axios library hit  the api and getting the data from api
    let response=axios.get(saralUrl);   //using axios library it is getting data from url
    return(response)
}
url="http://saral.navgurukul.org/api/courses"  // saral url 
var dataResponse=firstApi(url);  //getting the response from api
// console.log(dataResponse) 


var promise=new Promise((resolve,reject)=>{
    {
        resolve(dataResponse); 
    }{
        reject(none); 
        } 
    });
    promise.then((courses)=>{        
        coursesIdList=[]  
        var  count=0
        insideData=(courses["data"]["availableCourses"])   //getting the saral courses and id 
        for (var index  of insideData){
            console.log(count,index["name"],index["id"])
            coursesIdList.push(index["id"])
            count++
        }
    return(coursesIdList);
    }).
    catch((error)=>{  
        console.log("some error has occured") 
})
    .then((coursesIdList)=>{  
        var user = input.question("enter your courses number \n");
        coursesDataId=coursesIdList[user] 
        for (var index of insideData){
            if (index["id"]===coursesDataId){           //compairing the courses id and userinput
                console.log(index["name"])
                
        var parentAndchildUrl="http://saral.navgurukul.org/api/courses/"+coursesDataId+"/exercises" //getting the parentExercise and childExercise
        
        responseparentAndchildUrl=firstApi(parentAndchildUrl)
        return(responseparentAndchildUrl);
        }
    }
})
    .then((responseUrl2)=>{      
        parentExercise=responseUrl2["data"]["data"]
        count=0
        parentId=[]
        for (var i in parentExercise){
            console.log(count,parentExercise[i]["name"])
            parentId.push(parentExercise[i]["id"])
            count++
            
            count1=0
            childExercise=parentExercise[i]["childExercises"]
            for (var j in childExercise){
                console.log("\t",count1,childExercise[j]["name"])
                count1++
            }
        }
    return(parentId) 
})
    .then((parentId)=>{
        var user1 = input.question("enter your exerciseId \n");
        count=0
        var dic={}
        var slugList=[]
        var slugidList=[]
        for (var i in parentExercise){
            if (parentExercise[i]["id"]===parentId[user1]){
                console.log(count,parentExercise[i]["name"]) 
                slugidList.push(parentExercise[i]["id"])
                slugList.push(parentExercise[i]["slug"])
                count++
                
                childExercise=parentExercise[i]["childExercises"]
                count1=1
                for (var j in childExercise){
                    console.log("\t",count1,childExercise[j]["name"])
                    slugidList.push(childExercise[j]["id"])
                    slugList.push(childExercise[j]["slug"])
                    count1++ 
        
                }
            }
        }
        dic["slug"]=(slugList)
        dic["child_id"]=(slugidList)
        return(dic)
})
    .then((dic)=>{
        let user2 = input.question("enter your slugindex \n");
        let slug=dic["slug"][user2]
        let slug_id=dic["child_id"][user2]
    var contentUrl="http://saral.navgurukul.org/api/courses/"+(slug_id)+"/exercise/getBySlug?slug="+(slug) //getting the content from url
    url3=firstApi(contentUrl)
    return(url3)
})
    .then((url3)=>{
        console.log(url3["data"]["content"]) // data is a key , getting content from data key

}) 


