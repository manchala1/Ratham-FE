import React from 'react';
import { Link } from 'react-router-dom';

function Page1() {
  return (
    <div>
      <h1>Enter into Student Info System</h1>
      <Link to="/enroll">
        <button>Enroll Now</button>
      </Link>
    </div>
  );
}

export default Page1;