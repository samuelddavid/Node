const yargs = require('yargs');
yargs.command({
  command: 'greet',
  describe: 'Greet the user',
  builder: {
    name: {
      describe: 'Name of the user',
      demandOption: true, // Name is required
      type: 'string'
    }
  },
  handler(argv) {
    console.log(`Hello, ${argv.name}!`);
  }
});

// Parse the command-line arguments
yargs.parse();


//to run in terminal
//node "/Users/david/Desktop/CODING/Node/pg5.js" greet --name=Samuel
