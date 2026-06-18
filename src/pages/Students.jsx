import { Link } from 'react-router-dom';

const studentData = [
  { id: 1, name: 'Jyo', course: 'BSC' },
  { id: 2, name: 'Hema', course: 'BSc' },
  { id: 3, name: 'Ramya', course: 'BSC' },
  { id: 4, name: 'Teja', course: 'BSC' },
];

export default function Students() {
  return (
    <div style={{ padding:'20px' }}>
      <h2>Student List</h2>

      {studentData.map((s) => (
        <div key={s.id}>
          <Link to={`/students/${s.id}`}>
            {s.name} – {s.course}
          </Link>
        </div>
      ))}
    </div>
  );
}