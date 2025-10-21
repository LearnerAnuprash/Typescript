// TODO ***** Defining Interfaces + Extending Interface *****//

interface User {
  // Defining an interface
  email: string;
  phone: BigInteger;
  name: string;
}

interface Admin extends User {
  // Extending another interface so that it has values of
  // previous interface and the current interface extended to !
  isAdmin: boolean;
}

function abcd(obj: Admin) {
  // Try to access obj.isAdmin which is extended interface
  obj.isAdmin;
}

// TODO ******* Fundamentals of Type Aliases *****//

type sankhya = number;
let num: sankhya;

// Another example to this :

type value = string | boolean;

function efgh(obj: value) {}

// TODO ******** Union & Intersection ( Intersection Types ) *********** //

type UserAuthority = {
  name: string;
  permission: boolean;
};

type AdminAuthority = UserAuthority & {
  privilege: boolean;
};

function server(arg: AdminAuthority) {
  arg.privilege;
}

// TODO ( Difference between interface and type : )
// ? Interface = blue color ;
//    Type = Green color ;

//? Interface is used to create shape of object / define it
// Type is used to define just the type i.e number , string , bool , etc.

//? Same type of code in interface and type:
//? Interface :    interface abcd{ a:number }
//?                interface abcd{ b:string }
//? => The above code works and the two interface with the same name
//?    get merged .

// Type:    type abcd = number ;
//          type abcd = sting;
// ==> Two types of same name throws error .
