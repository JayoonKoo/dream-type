// Java: Exception
// Javascript: Error

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {}

const fileName = "not exist!";
try {
  console.log(readFile(fileName));
} catch (error) {
  console.log("catached!!");
} finally {
  closeFile(fileName);
  console.log("finally");
}
console.log("!!!");
