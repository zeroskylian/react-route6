import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Headers() {
  const navigate = useNavigate();
  return (
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header">
          <h2>React Router Demo</h2>
          <button
            onClick={() => {
              navigate(-1);
            }}>
            Back
          </button>
          <button
            onClick={() => {
              navigate(1);
            }}>
            forward
          </button>
          <button
            onClick={() => {
              navigate('/about', { replace: false });
            }}>
            到 About
          </button>
        </div>
      </div>
    </div>
  );
}
