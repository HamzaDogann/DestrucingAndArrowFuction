// Destrucing kullanımı

let langs = ["c","c#","javascript","python"]

let lang1,lang2,lang3,lang4;

// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3];

// [lang1,lang2,lang3,lang4] = langs;

console.log(lang1,lang2,lang3,lang4);


const hesapla = (a,b)=>{
  const toplam =a+b;
  const cikar = a-b;
  const carp = a*b;
  const bol = a/b;

  const dizi=[toplam,cikar,carp,bol];
  return dizi;

}

let[a,b,c,d] = hesapla(10,2);
console.log(a,b,c,d);




const person ={
    firstname:"Hamza",
    lastname :"Dogan",
    salary : "5000",
    age :"19"
}


// isim = person.firstname;
// soyisim = person.lastname;
// maas = person.salary;
// yas = person.age;   //! Uzun yoldur daha basit bir yöntemi var destrucing yöntemi ile

let {firstname:isim, lastname:soyisim , salary:maas ,age:yas} = person;

console.log(isim,soyisim,maas,yas);