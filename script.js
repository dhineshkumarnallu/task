class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio =studio;
        if(rating==undefined){
            this.rating ="pg"
        }
        else{
            this.rating =rating;
        }
    }
} 
var res=new Movie("abc","marvel");
var res1=new Movie("xyz","dc","pg15");
console.log(res,res1);

// out put 

// Movie {title: 'abc', studio: 'marvel', rating: 'pg'}      rating: "pg"studio: "marvel"title: "abc"
// -----------------------------------------------------------------------------------------------------------------------

class Movie{
    constructor(title,studio,rating){
        this.title = title;
        this.studio =studio;
        if(rating==undefined){
            this.rating ="pg"
        }
        else{
            this.rating =rating;
        }
    }
    getpg(array){
        var result = [];
        for(var i=0;i<array.length;i++){
            if(array[i].rating=="pg"){
                result.push(array[i]);
            }
    }
    return result;
} 

}

var obj=new Movie("abc","marvel");
var obj1=new Movie("xyz","dc","pg15");
var obj2=new Movie("reo","rr","pg45");
var obj3=new Movie("rmo","gt");

var res=[obj,obj1,obj2,obj3];
console.log(obj2.getpg(res))
  
// output
// (2) [Movie, Movie]
// 0
// : 
// Movie {title: 'abc', studio: 'marvel', rating: 'pg'}
// 1
// : 
// Movie {title: 'rmo', studio: 'gt', rating: 'pg'}
// length
// : 
// 2
//  ------------------------------------------------------
class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    get radiusCircle() {
      return this.radius;
    }
    get colorCircle() {
      return this.color;
    }
    set radiusCircle(radius) {
      this.radius = radius;
    }
    set colorCircle(color) {
      this.color = color;
    }
    get toString() {
      return `"Circle[radius=${this.radius}, color=${this.color}]"`;
    }
    get areaCircle() {
      return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle() {
      return 2 * Math.PI * this.radius;
    }
  }
  var obj1 = new Circle(1.0, "red");
  console.log(obj1.radiusCircle); 
  
  obj1.radiusCircle = 2.2;
  console.log(obj1.radiusCircle);