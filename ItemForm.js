import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [nameExt, setNameExt] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [sex, setSex] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [houseNo, setHouseNo] = useState('');
    const [street, setStreet] = useState('');
    const [subd, setSubd] = useState('');
    const [brgy, setBrgy] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [fatherSurname, setFatherSurname] = useState('');
    const [fatherFirstName, setFatherFirstName] = useState('');
    const [fatherMiddleName, setFatherMiddleName] = useState('');
    const [fatherNameExt, setFatherNameExt] = useState('');
    const [motherSurname, setMotherSurname] = useState('');
    const [motherFirstName, setMotherFirstName] = useState('');
    const [motherMiddleName, setMotherMiddleName] = useState('');
    const [motherNameExt, setMotherNameExt] = useState('');
    const [elementary, setElementary] = useState('');
    const [secondary, setSecondary] = useState('');
    const [vocationalTradeCourse, setVocationalTradeCourse] = useState('');
    const [college, setCollege] = useState('');

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setAddress(item.address);
            setEmail(item.email);
            setPhone(item.phone);
            setEmploymentStatus(item.employment_status);
            setNameExt(item.name_ext);
            setDateOfBirth(item.date_of_birth);
            setPlaceOfBirth(item.place_of_birth);
            setSex(item.sex);
            setCivilStatus(item.civil_status);
            setCitizenship(item.citizenship);
            setHouseNo(item.house_no);
            setStreet(item.street);
            setSubd(item.subd);
            setBrgy(item.brgy);
            setCity(item.city);
            setProvince(item.province);
            setZipcode(item.zipcode);
            setFatherSurname(item.father_surname);
            setFatherFirstName(item.father_first_name);
            setFatherMiddleName(item.father_middle_name);
            setFatherNameExt(item.father_name_ext);
            setMotherSurname(item.mother_surname);
            setMotherFirstName(item.mother_first_name);
            setMotherMiddleName(item.mother_middle_name);
            setMotherNameExt(item.mother_name_ext);
            setElementary(item.elementary);
            setSecondary(item.secondary);
            setVocationalTradeCourse(item.vocational_tradecourse);
            setCollege(item.college);
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const data = {
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            address: address,
            email: email,
            phone: phone,
            employment_status: employmentStatus,
            name_ext: nameExt,
            date_of_birth: dateOfBirth,
            place_of_birth: placeOfBirth,
            sex: sex,
            civil_status: civilStatus,
            citizenship: citizenship,
            house_no: houseNo,
            street: street,
            subd: subd,
            brgy: brgy,
            city: city,
            province: province,
            zipcode: zipcode,
            father_surname: fatherSurname,
            father_first_name: fatherFirstName,
            father_middle_name: fatherMiddleName,
            father_name_ext: fatherNameExt,
            mother_surname: motherSurname,
            mother_first_name: motherFirstName,
            mother_middle_name: motherMiddleName,
            mother_name_ext: motherNameExt,
            elementary: elementary,
            secondary: secondary,
            vocational_tradecourse: vocationalTradeCourse,
            college: college,
        };

        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Employment Status:</label>
                <input type="text" value={employmentStatus} onChange={(e) => setEmploymentStatus(e.target.value)} />
            </div>
            <div>
                <label>Name Extension:</label>
                <input type="text" value={nameExt} onChange={(e) => setNameExt(e.target.value)} />
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
            </div>
            <div>
                <label>Place of Birth:</label>
                <input type="text" value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
            </div>
            <div>
                <label>Sex:</label>
                <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div>
                <label>Civil Status:</label>
                <input type="text" value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)} />
            </div>
            <div>
                <label>Citizenship:</label>
                <input type="text" value={citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>
            <div>
                <label>House No:</label>
                <input type="text" value={houseNo} onChange={(e) => setHouseNo(e.target.value)} />
            </div>
            <div>
                <label>Street:</label>
                <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
            </div>
            <div>
                <label>Subdivision:</label>
                <input type="text" value={subd} onChange={(e) => setSubd(e.target.value)} />
            </div>
            <div>
                <label>Barangay:</label>
                <input type="text" value={brgy} onChange={(e) => setBrgy(e.target.value)} />
            </div>
            <div>
                <label>City:</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div>
                <label>Province:</label>
                <input type="text" value={province} onChange={(e) => setProvince(e.target.value)} />
            </div>
            <div>
                <label>Zip Code:</label>
                <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
            </div>
            <div>
                <label>Father's Surname:</label>
                <input type="text" value={fatherSurname} onChange={(e) => setFatherSurname(e.target.value)} />
            </div>
            <div>
                <label>Father's First Name:</label>
                <input type="text" value={fatherFirstName} onChange={(e) => setFatherFirstName(e.target.value)} />
            </div>
            <div>
                <label>Father's Middle Name:</label>
                <input type="text" value={fatherMiddleName} onChange={(e) => setFatherMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Father's Name Extension:</label>
                <input type="text" value={fatherNameExt} onChange={(e) => setFatherNameExt(e.target.value)} />
            </div>
            <div>
                <label>Mother's Surname:</label>
                <input type="text" value={motherSurname} onChange={(e) => setMotherSurname(e.target.value)} />
            </div>
            <div>
                <label>Mother's First Name:</label>
                <input type="text" value={motherFirstName} onChange={(e) => setMotherFirstName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Middle Name:</label>
                <input type="text" value={motherMiddleName} onChange={(e) => setMotherMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Mother's Name Extension:</label>
                <input type="text" value={motherNameExt} onChange={(e) => setMotherNameExt(e.target.value)} />
            </div>
            <div>
                <label>Elementary School:</label>
                <input type="text" value={elementary} onChange={(e) => setElementary(e.target.value)} />
            </div>
            <div>
                <label>Secondary School:</label>
                <input type="text" value={secondary} onChange={(e) => setSecondary(e.target.value)} />
            </div>
            <div>
                <label>Vocational Trade Course:</label>
                <input type="text" value={vocationalTradeCourse} onChange={(e) => setVocationalTradeCourse(e.target.value)} />
            </div>
            <div>
                <label>College:</label>
                <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ItemForm;
