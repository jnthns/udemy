const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1,2,3])
    }, 2000)
})

// .then() allows us to continue a function if it succeeds
doWorkPromise.then((result) => {
    console.log('Success!', result)
})
