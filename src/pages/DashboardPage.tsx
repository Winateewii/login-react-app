import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getMockItemsData } from '../services/mockService';
import { Entry } from '../components/constants/user.interfaces';
import Loading from '../components/utils/Loading';
import NavBar from '../components/dashboard/NavBar';
import SearchFilter from '../components/dashboard/SearchFilter';
import ItemTable from '../components/dashboard/ItemTable';
import ItemModal from '../components/dashboard/ItemModal';

const Dashboard: React.FC = () => {
    const { user, logout, isLoading, setIsLoading } = useAuth();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [items, setItems] = useState<Entry[]>([]);
    const [filteredItems, setFilteredItems] = useState<Entry[]>([]);
    const [selectedItem, setSelectedItem] = useState<Entry | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const fetchItems = async () => {
            setIsLoading(true);
            try {
                const itemList = await getMockItemsData();
                setItems(itemList);
            } catch (error) {
                console.error('Error fetching items:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchItems();
    }, []);

    useEffect(() => {
        const filtered = items.filter(
            (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (selectedCategory === '' || item.category === selectedCategory)
        );
        setFilteredItems(filtered);
    }, [searchTerm, selectedCategory, items]);

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar username={user.username} onLogout={logout} />
            <main className="max-w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <SearchFilter
                    searchTerm={searchTerm}
                    onSearchChange={(e) => setSearchTerm(e.target.value)}
                    selectedCategory={selectedCategory}
                    onCategoryChange={(e) => setSelectedCategory(e.target.value)}
                    categories={Array.from(new Set(items.map((item) => item.category)))}
                />
                <ItemTable items={filteredItems} setIsModalOpen={setIsModalOpen} setSelectedItem={setSelectedItem} />
            </main>
            {isModalOpen && selectedItem && <ItemModal item={selectedItem} onClose={() => setIsModalOpen(false)} />}
            {isLoading && <Loading />}
        </div>
    );
};

export default Dashboard;