import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div className="item-list-container">
            <h1>Items</h1>
            <ul className="item-list">
                {items.map(item => (
                    <li key={item.id} className="item">

                        <div className="item-details">
                        <span>{item.first_name} :</span>
                        <span>{item.middle_name} :</span> 
                        <span>{item.last_name} :</span>
                        <span>{item.address} :</span> 
                        <span>{item.email} :</span> 
                        <span>{item.phone} </span> 
                        <span>{item.employement_status} :</span> 
                        <span>{item.name_ext} :</span> 
                        <span>{item.date_of_birth} :</span> 
                        <span>{item.place_of_birth} :</span> 
                        <span>{item.sex} :</span> 
                        <span>{item.civil_status} :</span> 
                        <span>{item.citizenship} :</span> 
                        <span>{item.house_no} :</span> 
                        <span>{item.street} :</span> 
                        <span>{item.subd} :</span> 
                        <span>{item.brgy} :</span> 
                        <span>{item.city} :</span> 
                        <span>{item.province} :</span> 
                        <span>{item.zipcode} :</span> 
                        <span>{item.father_surname} :</span> 
                        <span>{item.father_first_name} :</span> 
                        <span>{item.father_middle_name} :</span> 
                        <span>{item.father_name_ext} :</span> 
                        <span>{item.mother_surname} :</span>
                        <span>{item.mother_first_name} :</span>
                        <span>{item.mother_middle_name} :</span>
                        <span>{item.mother_name_ext} :</span>
                        <span>{item.elementary} :</span>
                        <span>{item.secondary} :</span>
                        <span>{item.vocational_tradecourse} :</span>
                        <span>{item.college}</span>
                        </div>

                        <div className="item-actions">
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;