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

class paymentUser extends User{
    constructor(user, creditinfo){
        super(user.firstName, user.lastName, user.gender, user.age, user.addresse, user.eMail)
        this.creditinfo = creditinfo;
    }
}

class freeuser extends User {
    constructor(user, trialperiode){
        super(user.firstName, user.lastName, user.gender, user.age, user.addresse, user.eMail)
        this.trialperiode = trialperiode;

    } 
}

// jeg har undladet at sætte min user i min constructor, da alle skal have mulighed for at vedhæfte sit creditkort, hvis det nu skulle være en anden person som betalte for vores ydelse. 
class creditcard extends paymentuser extends user{
constructor(cardHolder, cardNumber, CVVCode, experationDate){
    this.cardHolder = cardHolder;
    this.cardNumber = cardNumber;
    this.CVVCode = CVVCode;
    this.experationDate = experationDate;   
    }   
}

class interest extends user{
    constructor(user, interest){
        super(user.firstName, user.lastName, user.gender, user.age, user.addresse, user.eMail)
        this.interest = interest;
        this.interest = interest;
    }  
}

class match extends user{
    constructor(user, match){
        super(user.firstName, user.lastName, user.gender, user.age, user.addresse, user.eMail)
        this.match = match;
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
var creditcard = new creditcard("Mikkel Andersen", "1000 4304 2394 0900", "123", "10/22")
var mikkel = new paymentuser(user1, interest_mikkel, creditcard) 
var interst_mikkel = new interest(mikkel, "Football, handball, fashion, computer")

var user2 = new user("Sofia", "dalgera", "female", "21", "vesterbro", "SofiaDalgera@gmail.com", image2)
var sofia = new freeuser(user2, interest_sofia) 
var interest_sofia = new interest("sofia", "fashion", "squats and training", "make-up")

