import Nat "mo:base/Nat";
actor {
  public query func greets(name: Text, age: Nat, color: Text, movie: Text) : async Text {
    let greeting = "Hello " # name # ",\n";
    let ageText = "You are " # Nat.toText(age) # " years old.\n";
    let colorAndMovie = "Your favorite color is " # color # ", and your favorite movie is " # movie # ".\n";
    return greeting # ageText # colorAndMovie # "Glad to see you.\n";

  }
};