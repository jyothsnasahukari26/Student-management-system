import { useParams, useNavigate }
from 'react-router-dom';

const studentData = [
  {
    id: 1,
    name: 'Jyo',
    course: 'BSC',
    email: 'jyo@mail.com'
  },
  {
    id: 2,
    name: 'Hema',
    course: 'BSC',
    email: 'hema@mail.com'
  },
  {
    id: 3,
    name: 'Ramya',
    course: 'BSC',
    email: 'ramya@mail.com'
  },
  {
    id: 4,
    name: 'Teja',
    course: 'BSC',
    email: 'teja@mail.com'
  }
];

export default function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = studentData.find(
    (s) => s.id === parseInt(id)
  );

  if (!student)
    return <h2>Student Not Found</h2>;

  return (
    <div style={{ padding:'20px' }}>
      <h2>Student Detail</h2>

      <p>
        <strong>Name:</strong>
        {' '}
        {student.name}
      </p>

      <p>
        <strong>Course:</strong>
        {' '}
        {student.course}
      </p>

      <p>
        <strong>Email:</strong>
        {' '}
        {student.email}
      </p>

      <button
        onClick={() =>
          navigate('/students')
        }
      >
        Back to List
      </button>
    </div>
  );
}