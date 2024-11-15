import { useState } from 'react';

const AddStudent = ({ handleAddStudent }) => {
	const [student, setStudent] = useState({
		fullName: '',
		email: '',
		phone: '',
		program: '',
		image: '',
		graduationYear: 2023,
		graduated: false,
	});

	const addStudent = e => {
		e.preventDefault();
		handleAddStudent(student);
	};

	return (
		<div>
			{/* FORM */}
			<form onSubmit={addStudent}>
				<span>Add a Student</span>
				<div>
					<label>
						Full Name
						<input
							name='fullName'
							type='text'
							placeholder='Full Name'
							value={student.fullName}
							onChange={e =>
								setStudent({ ...student, fullName: e.target.value })
							}
						/>
					</label>

					<label>
						Profile Image
						<input
							name='image'
							type='url'
							placeholder='Profile Image'
							value={student.image}
							onChange={e => setStudent({ ...student, image: e.target.value })}
						/>
					</label>

					<label>
						Phone
						<input
							name='phone'
							type='tel'
							placeholder='Phone'
							value={student.phone}
							onChange={e => setStudent({ ...student, phone: e.target.value })}
						/>
					</label>

					<label>
						Email
						<input
							name='email'
							type='email'
							placeholder='Email'
							value={student.email}
							onChange={e => setStudent({ ...student, email: e.target.value })}
						/>
					</label>
				</div>

				<div>
					<label>
						Program
						<select
							name='program'
							value={student.program}
							onChange={e =>
								setStudent({ ...student, program: e.target.value })
							}
						>
							<option value=''>-- None --</option>
							<option value='Web Dev'>Web Dev</option>
							<option value='UXUI'>UXUI</option>
							<option value='Data'>Data</option>
						</select>
					</label>

					<label>
						Graduation Year
						<input
							name='graduationYear'
							type='number'
							placeholder='Graduation Year'
							minLength={4}
							maxLength={4}
							min={2023}
							max={2030}
							value={student.graduationYear}
							onChange={e =>
								setStudent({ ...student, graduationYear: e.target.value })
							}
						/>
					</label>

					<label>
						Graduated
						<input
							name='graduated'
							type='checkbox'
							checked={student.graduated}
							onChange={e =>
								setStudent({ ...student, graduated: e.target.checked })
							}
						/>
					</label>

					<button type='submit'>Add Student</button>
				</div>
			</form>
			{/* FORM END */}
		</div>
	);
};

export default AddStudent;
