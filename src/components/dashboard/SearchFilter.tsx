import React from 'react';

interface SearchFilterProps {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedCategory: string;
    onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    categories: string[];
}

const SearchFilter: React.FC<SearchFilterProps> = ({
    searchTerm,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    categories,
}) => (
    <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={onSearchChange}
                className="mb-2 sm:mb-0 sm:mr-2 p-2 border rounded w-full sm:w-96"
            />
            <select
                value={selectedCategory}
                onChange={onCategoryChange}
                className="p-2 border rounded w-full sm:w-64"
            >
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    </div>
);

export default SearchFilter;