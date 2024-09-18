import { User, Entry } from '../components/constants/user.interfaces'

export const users: User[] = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
];

export const entries: Entry[] = [
    { id: 1, title: 'Entry 1', description: 'Description 1', category: 'Category A' },
    { id: 2, title: 'Entry 2', description: 'Description 2', category: 'Category B' },
    { id: 3, title: 'Entry 3', description: 'Description 3', category: 'Category A' },
    { id: 4, title: 'Entry 4', description: 'Description 4', category: 'Category C' },
]
const getUserData = async () => {
    try {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(users);
            }, 5000)
        })
    } catch (error) {
        console.error('Error fetching tasks', error)
        throw error
    }
}

export {
    getUserData
}
