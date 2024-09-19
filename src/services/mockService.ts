import { User, Entry } from '../components/constants/user.interfaces'

export const users: User[] = [
    { id: 1, username: 'user1', password: 'user1123', role: 'Admin' },
    { id: 2, username: 'user2', password: 'user2123', role: 'User' },
];

export const entries: Entry[] = [
    { id: 1, title: 'Entry 1', description: 'Description 1', category: 'Category A' },
    { id: 2, title: 'Entry 2', description: 'Description 2', category: 'Category B' },
    { id: 3, title: 'Entry 3', description: 'Description 3', category: 'Category A' },
    { id: 4, title: 'Entry 4', description: 'Description 4', category: 'Category C' },
]
const getUserData = async (username: string, password: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //just for mock data not the real solution
            const user = users.find((u) => u.username === username);
            console.log('user---->', user)
            console.log('pw---->', `${username}123`)
            if (user && password === `${username}123`) {
                resolve(user);
            } else {
                reject(new Error('Invalid username or password'));
            }
        }, 1000);
    });
}

export {
    getUserData
}
