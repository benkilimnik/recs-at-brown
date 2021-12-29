export const userSignUp = async ({email, password, semesterLevel, previousCourses}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('http://localhost:4567/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify({
                    username: email,
                    password: password,
                    semesterLevel: semesterLevel,
                    previousCourses: previousCourses
                })
            }).then(response => response.json())
                .then(response => {
                    if (response.success) {
                        resolve(
                            {
                                // "email": response.email,
                                // "password": response.password,
                                // "semesterLevel": response.semesterLevel,
                                // "previousCourses": response.previousCourses
                                "success": response.success
                            }
                        );
                    } else {
                        reject();
                    }
                })
        }, 3000)
    });
};