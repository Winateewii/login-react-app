import React from 'react';
import { Entry } from '../constants/user.interfaces';

interface ItemModalProps {
    item: Entry;
    onClose: () => void;
}

const ItemModal: React.FC<ItemModalProps> = ({ item, onClose }) => (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{item.name}</h3>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">{item.description}</p>
                        <p className="text-sm text-gray-500 mt-2">Category: {item.category}</p>
                        <p className="text-sm text-gray-500 mt-2">Price: ${item.price.toFixed(2)}</p>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default ItemModal;