function divide(addition){
    console.log(addition/10);
}

function multiply(addition){
    console.log(addition*10);
}

function addNum(a,b,callThem){
    var addition=a+b;
    callThem(addition);
}

addNum(20,30,divide);
addNum(40,50,multiply);

var obj = {
  data: {
    name: "Baskar",
    surname: "Manickaraj",
    contact: {
      email: "",
      phone: [
        { isPrimary: true, number: "7904852282" },
        { isPrimary: false, number: "7904852282" },
      ],
    },
  },
};
function func1(primaryNum, secondaryNum) {
  for (var num in obj.data.contact.phone) {
    console.log(num);
    if (obj.data.contact.phone[num].isPrimary === true) {
      console.log(obj.data.contact.phone[num].number);
      obj.data.contact.phone[num].number = primaryNum;
    } else {
      console.log(obj.data.contact.phone[num].number);
      obj.data.contact.phone[num].number = secondaryNum;
    }
  }
  console.log(obj.data.contact);
}
func1(874562398, 8475123698);
function func2(primaryNum, secondaryNum) {
  for (var num of obj.data.contact.phone) {
    console.log(num);
    if (num.isPrimary === true) {
      console.log(obj.data.contact.phone[num]);
      num.number = primaryNum;
    } else {
      console.log(obj.data.contact.phone[num]);
      num.number = secondaryNum;
    }
  }
  console.log(obj.data.contact);
}
func2(874562398, 8475123698);