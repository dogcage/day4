let names = ["Stephane", "Amber", "Valerie", "Nnaemeka"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let name of names) {
  console.log(name);
}

// the forEach() method executes a provided function once for each array element
names.forEach(function(name) {
  console.log(name);
});

names.forEach(function(name, idx) {   // optional second parm (index)
  console.log(name, idx);
});
