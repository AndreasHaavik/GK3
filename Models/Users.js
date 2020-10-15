class user {
        constructor(firstName, lastName, gender, age, location, eMail){
            this.firstName = firstName;
            this.lastName = lastName;
            this.gender = gender;
            this.age = age; 
            this.location = location;
            this.eMail = eMail;
        }
}

class paymentuser extends user{
    constructor(user, creditinfo){
        super(user.firstName, user.lastName, user.gender, user.age, user.addresse, user.eMail)
        this.creditinfo = creditinfo;
    }
}

class freeuser extends user {
    constructor(user, trialperiode){
        super(user.firstName, user.lastName, user.gender, user.age, user.addresse, user.eMail)
        this.trialperiode = trialperiode;

    } 
}

// jeg har undladet at sætte min user i min constructor, da alle skal have mulighed for at vedhæfte sit creditkort, hvis det nu skulle være en anden person som betalte for vores ydelse. 
class creditcard extends paymentuser {
constructor(paymentuser, cardHolder, cardNumber, CVVCode, experationDate){
    super(paymentuser, paymentuser.creditinfo)
    this.cardHolder = cardHolder;
    this.cardNumber = cardNumber;
    this.CVVCode = CVVCode;
    this.experationDate = experationDate;   
    }   
}

class interest extends user{
    constructor(user, interest){
        super(user)
        user.interest = interest;
    }  
}

class match extends user{
    constructor(match1, match2){
        this.match1 = match1;
        this.match2 = match2;
    }
}

// vi har lavet en class image class som ikke extender til vores user, da vi skriver image ind vores objekt under vores user class
class image {
    constructor(imageType, imageSize, author, path,){
        this.imageType = imageType;
        this.imageSize = imageSize;
        this.author = author;
        this.path = path;
    }
}





// de efterfølgende tre class, nemlig image, interest og match extender vi til User da user extender til både 
// freeuser og paynemtuser 

var image1 = new image("png", "450MG", "user1", "User/MikkelAndersen/Photos/Myphoto")
var image2 = new image("png", "342KB", "user2","User/SofiaDalgera/Photos/Myphoto")

var user1 = new user("Mikkel", "Andersen", "Male", "22", "Østerbro", "mikkel_a@mail.dk", image1)
var credit = new creditcard("Mikkel Andersen", "1000 4304 2394 0900", "123", "10/22")
var mikkel = new paymentuser(user1, interest_mikkel, creditcard) 
var interest_mikkel = new interest(user1,"Fodbold")

var user2 = new user("Sofia", "dalgera", "female", "21", "vesterbro", "SofiaDalgera@gmail.com", image2)

new interest(user2,"Golf, Fitness, Fashion, Cars, Food")
new interest(user1,"Fashion, Make-up, Music, Arcitecture")

 

console.log(user1.firstName)

var testmatch1 = new match(user1.firstName, user2.firstName)
var testmatch2 = new match("Mikkel", "Sofia")

var userArray = [];
userArray = [user1, user2];

var interestArray = [];
intersestArray = [user1.interest, user2.interest];

var matchArray = [];
matchArray = [testmatch1,testmatch2];



module.exports = {userArray,interestArray,matchArray};

