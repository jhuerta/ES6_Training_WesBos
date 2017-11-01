function differenceVarAndLet() {
  const age = 100;
  const tmp = 10;

  if (age > 12) {
    const tmp = 20;
    const dogYears = age * 7;
    alert('yo are ${dogYears} old');
  }
}

function scopeOfLet() {
  const name = 'Juan';
  console.log(`Before block: ${name}`); {
    // This throws an error (no name defined in this block)
    // console.log('Before: ' + name);

    const name = 'name declred nside scope';
    console.log(`After: ${name}`);
  }
}

function usingLetInLoops() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  // This throws an error, no i out of loop
  // console.log(i);

  for (var j = 0; j < 10; j++) {
    console.log(`var - Right after assigned: ${j}`);
    setTimeout(() => {
      console.log(`var - After 1 second:${j}`);
    }, 1000);
  }

  setTimeout(() => {
    for (let j = 0; j < 10; j++) {
      console.log(`let - Right after assigned: ${j}`);
      setTimeout(() => {
        console.log(`let - After 1 second:${j}`);
      }, 1000);
    }
  }, 3000);


  // This throws an error, no i out of loop
  console.log(`Using var in loop: ${j}`);
}

function deadZone() {
  // This throws an error (it is not defined)
  // console.log(nodefined);

  // This displays undefined, but no error displayed
  console.log(varnodefined);

  // This throws an error (it is not defined)
  // console.log(letnodefined);

  // This throws an error (it is not defined)
  // console.log(constnodefined);

  var varnodefined = 'this is varnodefined';
  const letnodefined = 'this is letnodefined';
  const constnodefined = 'this is constnodefined';

  // None of these below will throw an error
  console.log(varnodefined);
  console.log(letnodefined);
  console.log(constnodefined);
}

function arrowFunctions() {
  const names = ['Juan', 'Pedro', 'Miguel'];
  const fullNames = names.map(name => `${name}lux`);

  const fullNames2 = names.map(name => `${name}lux2`);

  // More concise, using implicit return and no parenthesis for arguments
  const fullNames3 = names.map(name => `${name}lux3`);

  // Without parameters
  const fullNames4 = names.map(() => 'no parameters');

  console.log(fullNames);
  console.log(fullNames2);
  console.log(fullNames3);
  console.log(fullNames4);

  const outputToConsole = (msg) => { console.log(`Using declarative: ${msg}`); };
  outputToConsole('From anonymous arrow function with params');

  console.log('Using implicit return, without return but returning an object (using therefore parenthesis');
  const racers = ['Zero', 'One', 'Two', 'Three'];
  const racerObjects = racers.map((r, index) => (
    	{
    		Name: r,
    		Race: '100m',
    		Pos: index,
    	}
  ));

    // racerObjects.map((r) => {console.log(r)});
  console.log('using cool table log');

  console.table(racerObjects);
}

function usingFilter() {
  const numbers = [1, 4, 7, 9, 123, 23, 23234, 234, 345, 45, 564];
  const oddNubmers = numbers.filter(n => n % 2);
  console.log('Using filter instead of map function');
  console.log(oddNubmers);
}

usingFilter();

function modifyingConst() {
  alert(tmp);

  // Modifying const?
  const person = {
    name: 'Juan',
  };

  alert('before');

  // This will throw an error
  // person = {
  // 	name: 'Pedro'
  // }

  // No error here
  person.name = 'Pedro';

  alert('other');
}
