export const userLogin = async ({email, password}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        fetch('http://localhost:4567/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                username: email,
                password: password
            })
        }).then(response => response.json())
            .then(response => {
                if (response.success === "true") {
                    resolve(
                        {
                            "username":response.username,
                            "semester": response.semester,
                            "previousCourses": response.previousCourses
                        }
                    );
                } else {
                    reject();
                }
            })
        }, 3000)
    });
};