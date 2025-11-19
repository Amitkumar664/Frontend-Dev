// sync
for (let i = 0; i < 5; i++) {
    console.log(`i: ${i}`);
}

// async
setTimeout(() => {
    console.log("Inside timeout");
}, 0);
