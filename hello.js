// let fs = require('fs');

// //READ FILES SYNC
// // let readFileS = fs.readFileSync('myfile.txt','utf-8');
// // console.log(readFileS);

// // if we dont write utf -8  a hexadecimal string will be see called buffer

// // const hexString = '3c62723e6e657720636f6e74656e743c62723e';
// // const convertedString = Buffer.from(hexString, 'hex').toString();
// // console.log(convertedString);


// // WRITE FILES SYNC

// // const writeFiles = `Hello Ji: ${readFileS} \n ${Date.now()}`;
// // fs.writeFileSync('myfile1.txt',writeFiles);
// // console.log("done");










// //READ FILES ASYNC

// // let readFileS = fs.readFile('myfile.txt','utf-8',(err,data) => {
// //     if(err){
// //         console.log(err);
// //     }

// //     else{
// //         console.log(data);
// //     }
// // });


// // if we dont write utf -8  a hexadecimal string will be see called buffer

// // const hexString = '3c62723e6e657720636f6e74656e743c62723e';
// // const convertedString = Buffer.from(hexString, 'hex').toString();
// // console.log(convertedString);


// // WRITE FILES ASYNC

// // fs.writeFile('myfile1.txt',"writeFiles",(err,data)=>{
// //     if(err){
// //         console.log(err);
// //     }

// //     else{
// //         fs.readFile('myfile1.txt','utf-8',(err,data)=>{
// //             console.log(data)
// //         });
// //     }
// // });














// // EXAMPLE OF A
// // File path
// var filePath = 'append_example.txt';

// // Open the file in 'a' mode (append)
// fs.open(filePath, 'a', (err, fileDescriptor) => {
//     if (err) {
//         console.error('Error opening file:', err);
//         return;
//     }

//     const dataToAppend = 'This data will be appended.';

//     // Use fs.write to append data to the file
//     fs.write(fileDescriptor, dataToAppend, (writeErr) => {
//         if (writeErr) {
//             console.error('Error appending data:', writeErr);
//         } else {
//             console.log('Data appended successfully.');
//         }

//         // Close the file after appending
//         fs.close(fileDescriptor, (closeErr) => {
//             if (closeErr) {
//                 console.error('Error closing file:', closeErr);
//             } else {
//                 console.log('File closed');
//             }
//         });
//     });
// });








// // EXAMPLE OF A+


// // File path
// var filePath = 'append_and_read_example.txt';

// // Open the file in 'a+' mode (append and read)
// fs.open(filePath, 'a+', (err, fileDescriptor) => {
//     if (err) {
//         console.error('Error opening file:', err);
//         return;
//     }

//     const dataToAppend = 'This data will be appended.';

//     // Use fs.write to append data to the file
//     fs.write(fileDescriptor, dataToAppend, (writeErr) => {
//         if (writeErr) {
//             console.error('Error appending data:', writeErr);
//         } else {
//             console.log('Data appended successfully.');

//             // Move the file cursor to the beginning for reading
//             fs.read(fileDescriptor, Buffer.alloc(1024), 0, 1024, 0, (readErr, bytesRead, buffer) => {
//                 if (readErr) {
//                     console.error('Error reading from file:', readErr);
//                 } else {
//                     console.log('Read data:', buffer.toString('utf-8', 0, bytesRead));
//                 }

//                 // Close the file after appending and reading
//                 fs.close(fileDescriptor, (closeErr) => {
//                     if (closeErr) {
//                         console.error('Error closing file:', closeErr);
//                     } else {
//                         console.log('File closed');
//                     }
//                 });
//             });
//         }
//     });
// });







// //EXAMPLE OF W
// // File path
// var filePath = 'write_example.txt';

// // Open the file in 'w' mode (write, create a new file or truncate an existing one)
// fs.open(filePath, 'w', (err, fileDescriptor) => {
//     if (err) {
//         console.error('Error opening file:', err);
//         return;
//     }

//     const dataToWrite = 'This data will be written to the file.';

//     // Use fs.write to write data to the file
//     fs.write(fileDescriptor, dataToWrite, (writeErr) => {
//         if (writeErr) {
//             console.error('Error writing data:', writeErr);
//         } else {
//             console.log('Data written successfully.');
//         }

//         // Close the file after writing
//         fs.close(fileDescriptor, (closeErr) => {
//             if (closeErr) {
//                 console.error('Error closing file:', closeErr);
//             } else {
//                 console.log('File closed');
//             }
//         });
//     });
// });





// // EXAMPLE OF W+

// // File path
// var filePath = 'write_and_read_example.txt';

// // Open the file in 'w+' mode (write and read, create a new file or truncate an existing one)
// fs.open(filePath, 'w+', (err, fileDescriptor) => {
//     if (err) {
//         console.error('Error opening file:', err);
//         return;
//     }

//     const dataToWrite = 'This data will be written to the file.';

//     // Use fs.write to write data to the file
//     fs.write(fileDescriptor, dataToWrite, (writeErr) => {
//         if (writeErr) {
//             console.error('Error writing data:', writeErr);
//         } else {
//             console.log('Data written successfully.');

//             // Move the file cursor to the beginning for reading
//             fs.read(fileDescriptor, Buffer.alloc(1024), 0, 1024, 0, (readErr, bytesRead, buffer) => {
//                 if (readErr) {
//                     console.error('Error reading from file:', readErr);
//                 } else {
//                     console.log('Read data:', buffer.toString('utf-8', 0, bytesRead));
//                 }

//                 // Close the file after writing and reading
//                 fs.close(fileDescriptor, (closeErr) => {
//                     if (closeErr) {
//                         console.error('Error closing file:', closeErr);
//                     } else {
//                         console.log('File closed');
//                     }
//                 });
//             });
//         }
//     });
// });





// // EXAMPLE OF R

// // File path
// const filePath = 'read_example.txt';

// // Open the file in 'r' mode (read-only)
// fs.open(filePath, 'r', (err, fileDescriptor) => {
//     if (err) {
//         console.error('Error opening file:', err);
//         return;
//     }

//     const buffer = Buffer.alloc(1024); // Allocate a buffer

//     // Use fs.read to read data from the file into the buffer
//     fs.read(fileDescriptor, buffer, 0, buffer.length, null, (readErr, bytesRead, buffer) => {
//         if (readErr) {
//             console.error('Error reading from file:', readErr);
//         } else {
//             console.log('Bytes Read:', bytesRead);
//             console.log('Read data:', buffer.toString('utf-8', 0, bytesRead));
//         }

//         // Close the file after reading
//         fs.close(fileDescriptor, (closeErr) => {
//             if (closeErr) {
//                 console.error('Error closing file:', closeErr);
//             } else {
//                 console.log('File closed');
//             }
//         });
//     });
// });




// //EXAMPLE OF R+
// const fs = require('fs');

// // File path
// const filePath = 'read_and_write_example.txt';

// // Open the file in 'r+' mode (read and write)
// fs.open(filePath, 'r+', (err, fileDescriptor) => {
//     if (err) {
//         console.error('Error opening file:', err);
//         return;
//     }

//     const buffer = Buffer.alloc(1024); // Allocate a buffer

//     // Use fs.read to read data from the file into the buffer
//     fs.read(fileDescriptor, buffer, 0, buffer.length, null, (readErr, bytesRead, buffer) => {
//         if (readErr) {
//             console.error('Error reading from file:', readErr);
//         } else {
//             console.log('Bytes Read:', bytesRead);
//             console.log('Read data:', buffer.toString('utf-8', 0, bytesRead));

//             // Move the file cursor to the beginning for writing
//             fs.write(fileDescriptor, 'This is new data.', (writeErr) => {
//                 if (writeErr) {
//                     console.error('Error writing data:', writeErr);
//                 } else {
//                     console.log('Data written successfully.');
//                 }

//                 // Close the file after reading and writing
//                 fs.close(fileDescriptor, (closeErr) => {
//                     if (closeErr) {
//                         console.error('Error closing file:', closeErr);
//                     } else {
//                         console.log('File closed');
//                     }
//                 });
//             });
//         }
//     });
// });



var http = require('http');

http.createServer((req,res)=>{
    console.log(req);
    res.end("Hello from server");
}).listen(3000);