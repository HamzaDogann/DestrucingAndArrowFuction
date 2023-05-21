function yazdir(){
    console.log("Merhaba!");
}
yazdir();

//ARROW FUCTİON

const yazdir = () =>{
    console.log("Merhaba");
}
yazdir();

//parametreli

const yazdir = (firstname,lastname)=>{ 
    console.log("Merhaba",firstname,lastname);
};
yazdir("hamza","dogan"); //! Yazdığımız bu değerler geri döndü ve firstname ve lastname yerine geçti.

//todo : Eğer tek bir parametre çalıştıracaksak üstteki örnek bu şekilde de olabilir;

const yazdir2=(firstname2,lastname2)=> console.log("Merhaba",firstname2,lastname2);

//todo Aynı sonucu alırız.

const kupal= (x)=>{
    return x*x*x
}
console.log("Değer", kupal(3));  