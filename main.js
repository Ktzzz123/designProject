var name="Tieu Thi Kieu Tien"
console.log(name);
// // confirm("xac nhan anh yeu em nhieu nham");
// // prompt("yeu nhieu hem");
// // setTimeout(function() {
// //     alert("thong bao: day la thong bao" + Math.random)
// // },3000);
// // setInterval(function(){
// //     console.log('day la thong bao'+ Math.random)
// // },3000)
// // var a = 1+2;
// // console.log(a);
// // var fullname=name;
// // var b=2;
// // if (a>b&&a>0){
// //     console.log("a>b"+a+">"+b)
// // };
// // var name='tien';
// // name+=' Tieu'
// // console.log(name);
// // var is=true;
// // var IS='true';
// // console.log(is);
// // console.log(IS);
// var myfunction=function(){
// //     var a=0;
// //     b=0;
// // }
// // // Object types
// // var myObject={
// // name: 'Tieu Kieu Tien',
// // age:21,
// // adress:'tayninh'
// // }
// // console.log('myObject',myObject);
// // // array
// // var myArray =[
// //     'hi',
// //     'my name is tien',
// //     'hello',
// //     'gau gau'
// // ]
// // console.log(myArray);
// // console.log(typeof myArray);

// // compareator operator
// // var a ='1';
// // var b=1;
// // console.log(a===b) 
// // ////
// // var result = 'a'||'a'||true;
// // console.log(result)
// // tạo chuỗi. video 20
// var fullName='tieu thi kieu tien';
// console.log(typeof fullName)
// var fullLame = new String('hiiiiiiiiiiiiii')
// console.log(typeof fullLame)
// var vdbackslash ='hi ban \'yeu\'';
// console.log(vdbackslash)
// console.log('day la dau backlash \\')
// console.log(fullLame.length)
// //xuong dong: nối chuỗi
// var vdxuongdong="hom nay toi buon mot minh"
// // +" buon vi ko co tien"
// // +" buon vi nguoi yeu ngu"
// // +" buon vi ko co meo nuoi";
// // console.log(vdxuongdong)
// // // 5. template string ES6
// // var firstname = 'tieu'
// // var lastname = 'tien'
// // console.log(`toi la: ${firstname} ${lastname}`)
// //// video 21: làm việc với chuỗi

// var mystring = '     hoc tr lap trinh tr  javascrip tr'
// console.log(mystring.length)
// // find string
// console.log(mystring.indexOf('tr',10))
// console.log(mystring.search(/tr/g))
// // **cut string
// console.log(mystring.slice(-2))
// ///** replace
// console.log(mystring.replace(/tr/g,'chuoi'))
// //**con ver to upercase/lowercase */
// console.log(mystring.toLocaleUpperCase());
// console.log(mystring.toLocaleLowerCase());
// // **trim
// console.log(mystring.trim())
// // split
// var languages='java, php, ruby'
// console.log(languages.split(''))
// // get a chracter by index
// // const mystring2 = 'son dang';
// // // console.log(mystring.charAt(5))
// // // console.log(mystring2[2])


// // //video22 number.
// // var Pi =3.614;
// // var age =21;
// // var result=20/'asmkdaas';
// // console.log(result);
// // console.log(isNaN(result));
// // console.log(Pi.toString())
// // console.log(typeof Pi.toString)

// // console.log(Pi.toFixed())// làm tròn số
// // console.log(Pi.toFixed(2))//lấy số sau dấu phẩy
// // video 23 string
// var languages=[
//     'java',
//     'php',
//     'c#',
//     'ruby',
//     'dảk',
//     null,
//     8,
//     function(){}
// ]
// console.log(Array.isArray(languages))
// console.log(languages.length)
// console.log(languages[6])
// video 24: làm việc với Array/Array methods
var languages=[
    'java',
    'php',
    'c#',
   
]
// console.log(languages.toString())// chuyển array sang chuỗi.
// console.log(languages.join(', '))// đưa dấu cách giữa vào mảng
// console.log(languages.pop())//xóa phần tử cuối mảng và trả về phần tử đã xóa
// console.log(languages)
// console.log(languages.push('dart','javascrip'))
// console.log(languages)
// console.log(languages.shift())
// console.log(languages.shift())
// // console.log(languages.shift())
// // console.log(languages.shift())
// // console.log(languages)
// console.log(languages.unshift('java','dart'))//chèn vafp trước mảng
// console.log(languages)

// languages.splice(2,2)//xóa
// console.log(languages)

// languages.splice(2,5,'chèn')
// console.log(languages)
// var languages2=[
//     'php',
//     'c#',
//     'ruby',
//     'dảk',
// ]
// // console.log(languages.concat(languages2))
// // console.log(languages2.slice(-2,-1))
// // video 25: function
// //tạo hàm
// // cách đặt tên hàm: a-z A-Z 0-9 và dấu $
// function showDialog(){
//     alert("hi xin chao cac ban");
// }
// //methods call
// showDialog();

// //video 26; tham số
// function writelog(){
//     var mystring=''
//     for(var param of arguments){

//    mystring+=`${param} - `
//     }
//     console.log(mystring)
// }
// writelog(1, 2,3,4,5);
///tính private(tương tự như local variable and global variabe)
// video 27: return
// function cong(a,b){
//     return a+b;
// }
// result = cong(25,10);
// console.log(confirm('hello'))
// console.log(result)
// video 29: các loại function..
// //declaration function:
// showmessage()
// //showmessage2()
// function showmessage(){
//     console.log("declaration function")
// }
// // expression function
// var showmessage2 = function(){
//     console.log('expression function')
// }
// showmessage()
// showmessage2()

// Polyfill? tương thích
// //object
// var email = 'email'
// var myinfo={
//     name: 'tien',//property:thuộc tính
//     age:21,
//     adress:'tay ninh',
//     [email] :'email@gmail.con',
//     getName:function(){// method:phương thức
//         return this.name;
//     }
// }

// // myinfo.school='UIT'
// // console.log(myinfo)
// // console.log(myinfo.age)
// // var mykey= 'school'
// // console.log(myinfo[mykey])
// delete myinfo.email;
// console.log(myinfo.getName())

// //Object constructor

// function user(firstName, lastName, avatar){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.avatar=avatar;
//     this.getName = function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// var author=new user('sơn',"đặng",'Avatar')
// author.title='chia sẻ đi';
// console.log(author.getName())
// // Object prototype-Basic: thêm thuộc tính vào hàm tạo

// user.prototype.className = 'F8'
// user.prototype.getClassName = function(){
//     return this.className;
// }
// console.log(author.getClassName())

//đối tượng date

// var date = new Date()//object
// console.log(date)
// var date2 = Date(); //chỉ là string đơn thuần'
// console.log(typeof date2)
//for loop
// for (var i=1 ;i<10; i++)
// {
//     console.log(i)
// }
// var aL=languages.length;
// for(var i =0; i<aL;i++)
// {
//     console.log(languages[i])
// }
/// video 42 for in
var myInfor={
    name: 'Kieu Tien',
    age:18,
    address:'Ha Noi,Vn'
}

// for(var key in myInfor){
//     console.log(key);
//     console.log(myInfor[key]);
// }
// for(var key in languages){
//     console.log(key);
//     console.log(languages[key])
// }
// var myString ='javascrip'
// for(var key in myString){
//     console.log(key);
//     console.log(myString[key])
// }
// video 42: for/of
// for(var value of languages){
//     console.log(value);
// }
// for (var value of Object.keys(myInfor)){
//     console.log(myInfor[value])
// }
// // video 43: while loop
// var i=0;

// while(i<=languages.length){
//     console.log(languages[i])
//     i++;
// }
// //video 44: do/while loop
// var i=0;
// do{
//     i++
//     console.log(i)

// }while(i<10)
// var isSuccess = false;
// do{
//     i++;
//     console.log('nap the lan '+i );
//     if(false){
//         isSuccess=true;
//     }
// }while(!isSuccess && i <= 3)
//video 46: break and continue
// for(var i = 0; i<10;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i)
// }
// //video 47: nested loop
// var myArray=[
//     [1,1],
//     [1,2],
//     [1,3]
// ];
// for (var i =0;i<myArray.length; i++){
//     for(var j=0; j<myArray[i].length;j++){
//         console.log(myArray[i][j]);
//     }
    
// }
//video 49: get similar with array
var courses=[
    {
        id:1,
        name:'Math',
        coin: 0
    },
    {
        id:2,
        name:'languages',
        coin:200
    },
    {
        id:3,
        name:'english',
        coin:500
    },{
        id:4,
        name:'english',
        coin:500
    }
]
// courses.forEach(function(course,index){
//     console.log(index,course);
    
// });//call back
// every();
// some()
//find()
//fillter()
//map()
// var isFree = courses.filter(function(course,index){
//    return course.name ==='english';
    
// });
// console.log(isFree);
function coursehandler(courses,index,originArray){
    //console.log(courses);
    return{
      
        name:`<h2>Khoa hoc: ${courses.name}</h2.`,
       
    }
}
var newCourses = courses.map(coursehandler);
console.log(newCourses.join(''));