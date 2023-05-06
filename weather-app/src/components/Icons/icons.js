
function ImportAll(r) {
 const images = {};
 r.keys().forEach((key) => (images[key] = r(key)));
 return images;
}

export default ImportAll;

// In this example, we define the importAll function in a module called icons.js. The function takes a context r and uses r.keys() to get an array of all the image paths in the folder. We loop through the array of paths and use r(key) to import each image and add it to an images object, using the path as the key. Finally, we return the images object.