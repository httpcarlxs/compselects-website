import React from 'react';
import SubmissionGuide from './components/submissionGuide/submissionGuide';
import SubmissionForm from './components/submissionForm/submissionForm';
import EditorialPolicy from './components/editorialPolicy/editorialPolicy';
import './styles/Submission.css';

function Submissions() {
  return (
    <div className="submissions-page">
      <SubmissionGuide />
      <SubmissionForm />
      <EditorialPolicy />
    </div>
  );
}

export default Submissions;
