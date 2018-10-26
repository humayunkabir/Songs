import React from 'react';

const NotFound404 = props => {
  return(
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-auto">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{props.message}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound404