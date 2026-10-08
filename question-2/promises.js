// Question 2: Promises
// Promise versions of delayedSuccess and delayedException from callbacks.js

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = { message: 'delayed success!' }
            resolve(success)
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let failure = { error: 'delayed exception!' }
            reject(failure)
        }, 500)
    })
}

// Call both promises separately and handle the results

resolvedPromise()
    .then((result) => console.log(result))
    .catch((err) => console.error(err))

rejectedPromise()
    .then((result) => console.log(result))
    .catch((err) => console.error(err))
