import React, { useState, useEffect } from "react";
import "./form.css"; // Ensure you have this CSS file

function EmployeeForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        birthDate: "",
        email: "",
        phoneNumber: "",
        gender: "",
        startTime: "",
        endTime: "",
        jobPosition: "",
        team: "",
        designation: "",
        billableHours: "",
        isBillable: false,
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (submitted) {
            const newErrors = {};

            if (!formData.firstName) newErrors.firstName = "First Name is required";
            if (!formData.lastName) newErrors.lastName = "Last Name is required";
            if (!formData.birthDate) newErrors.birthDate = "Date is required";
            if (!formData.email) newErrors.email = "Email is required";
            if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
            if (!formData.gender) newErrors.gender = "Gender is required";
            if (!formData.startTime) newErrors.startTime = "Start Time is required";
            if (!formData.endTime) newErrors.endTime = "End Time is required";
            if (!formData.jobPosition) newErrors.jobPosition = "Job Position is required";
            if (!formData.team) newErrors.team = "Required";
            if (!formData.designation) newErrors.designation = "Required";
            if (!formData.billableHours || formData.billableHours <= 0) {
                newErrors.billableHours = "Billable Hours is required and must be a positive number";
            }

            setErrors(newErrors);
        }
    }, [submitted, formData]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Additional logic if the form passes validation
        if (Object.keys(errors).length === 0) {
            console.log("Form data:", formData);
            // Handle the submission
        }
    };

    return (
        <form className="employee-form" onSubmit={handleSubmit}>
            <div className={`form-field ${errors.firstName ? 'error' : ''}`}>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <span>{errors.firstName}</span>}
            </div>
            <div className="form-field">
                <label>Middle Name</label>
                <input
                    type="text"
                    name="middleName"
                    placeholder="Enter your Middle Name"
                    value={formData.middleName}
                    onChange={handleChange}
                />
            </div>
            <div className={`form-field ${errors.lastName ? 'error' : ''}`}>
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                {errors.lastName && <span>{errors.lastName}</span>}
            </div>
            <div className={`form-field ${errors.birthDate ? 'error' : ''}`}>
                <label>Birth Date</label>
                <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                />
                {errors.birthDate && <span>{errors.birthDate}</span>}
            </div>
            <div className={`form-field ${errors.email ? 'error' : ''}`}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
            </div>
            <div className={`form-field ${errors.phoneNumber ? 'error' : ''}`}>
                <label>Phone Number</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
            </div>
            <div className={`form-field ${errors.gender ? 'error' : ''}`}>
                <label>Select Gender</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                >
                    <option value="">Choose Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender && <span>{errors.gender}</span>}
            </div>
            <div className={`form-field ${errors.startTime ? 'error' : ''}`}>
                <label>Start Time</label>
                <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                />
                {errors.startTime && <span>{errors.startTime}</span>}
            </div>
            <div className={`form-field ${errors.endTime ? 'error' : ''}`}>
                <label>End Time</label>
                <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                />
                {errors.endTime && <span>{errors.endTime}</span>}
            </div>
            <div className={`form-field ${errors.jobPosition ? 'error' : ''}`}>
                <label>Job Position</label>
                <input
                    type="text"
                    name="jobPosition"
                    placeholder="Enter the job position"
                    value={formData.jobPosition}
                    onChange={handleChange}
                />
                {errors.jobPosition && <span>{errors.jobPosition}</span>}
            </div>
            <div className={`form-field ${errors.team ? 'error' : ''}`}>
                <label>Select Teams</label>
                <select
                    name="team"
                    value={formData.team}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    <option value="teamA">Team A</option>
                    <option value="teamB">Team B</option>
                    <option value="teamC">Team C</option>
                </select>
                {errors.team && <span>{errors.team}</span>}
            </div>
            <div className={`form-field ${errors.designation ? 'error' : ''}`}>
                <label>Select Designation</label>
                <select
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                    <option value="lead">Lead</option>
                </select>
                {errors.designation && <span>{errors.designation}</span>}
            </div>
            <div className={`form-field ${errors.billableHours ? 'error' : ''}`}>
                <label>Billable Hours</label>
                <input
                    type="number"
                    name="billableHours"
                    placeholder="Enter the billable hours"
                    value={formData.billableHours}
                    onChange={handleChange}
                />
                {errors.billableHours && <span>{errors.billableHours}</span>}
            </div>
            <div className="form-field">
                <label>Is Billable?</label>
                <input
                    type="checkbox"
                    name="isBillable"
                    checked={formData.isBillable}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default EmployeeForm;
