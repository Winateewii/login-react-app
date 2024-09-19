import { User, Entry } from '../components/constants/user.interfaces'

export const users: User[] = [
    { id: 1, username: 'user1', password: 'user1123', role: 'Admin' },
    { id: 2, username: 'user2', password: 'user2123', role: 'User' },
];

const mockItems: Entry[] = [
    { id: 1, name: 'Item 1', category: 'Category A', description: 'Detailed description for Item 1', price: 10.99 },
    { id: 2, name: 'Item 2', category: 'Category B', description: 'Detailed description for Item 2', price: 15.99 },
    { id: 3, name: 'Item 3', category: 'Category A', description: 'Detailed description for Item 3', price: 12.99 },
    { id: 4, name: 'Item 4', category: 'Category C', description: 'Detailed description for Item 4', price: 8.99 },
    { id: 5, name: 'Item 5', category: 'Category B', description: 'Detailed description for Item 5', price: 19.99 },
]
const getUserData = async (username: string, password: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //just for mock data not the real solution
            const user = users.find((u) => u.username === username);
            if (user && password === `${username}123`) {
                resolve(user);
            } else {
                reject(new Error('Invalid username or password'));
            }
        }, 1000);
    });
}

const getMockItemsData = async (): Promise<Entry[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockItems)
        }, 1000)
    })
}

export {
    getUserData,
    getMockItemsData
}
