function greet(name) {
  return `Hi ${name} from app-1`;
}

module.exports = { greet };

if (require.main === module) {
  console.log(greet('world'));
}
