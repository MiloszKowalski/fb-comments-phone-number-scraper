// Predefined regex for phone numbers, accepting various lengths
// NOTE: You may want to change it depending on your needs and also
// change it to search for other type of data in the comments
const phoneRegex = /[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{6,16}/gm;

// NOTE: Comment class as of 2020-03-27, you may want to update it to
// your needs, as well as the child nodes order in the arrays
const comments = document.querySelectorAll('._72vr');
let contacts = "";

for(let i = 0; i < comments.length; i++) {
  const name = comments[i].childNodes[0].innerText;
  const number = comments[i].childNodes[comments[i].childNodes.length - 1].innerText;
  if(number.match(phoneRegex)) {
    // Console.log to make sure parsing went well and names aren't mismatched with numbers
    console.log(name + ': ' + number.match(phoneRegex)[0])
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const secondName = nameParts.length > 2 ? nameParts[1] : "";
    const surname = nameParts[nameParts.length - 1];
    contacts += "BEGIN:VCARD\n";
    contacts += "VERSION:3.0\n";
    contacts += "N:" + surname + ";" + firstName + ";" + secondName + ";;" + "\n";
    contacts += "FN:" + name + "\n";
    contacts += "TEL;TYPE=CELL:" + number.match(phoneRegex)[0] + "\n";
    contacts += "END:VCARD\n";
  }
}

// Console.log the final .vcf file content result
console.log(contacts);