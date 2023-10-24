function CourseCard() {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src="/public/images/img1.jpg" alt="image-1" />
      </div>
      <div className="course-item__detail">
        <div className="course-item__body">
          <div>
            <p className="title">English Lecture</p>
            <p>language lessons with the most popular teachers</p>
          </div>
          <span className="rate">4</span>
        </div>

        <div className="course-item__footer">
          <div className="tags">
            <span className="badge badge--secondary">React.js</span>
          </div>
          <div className="caption">
            <p className="date">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <span className="badge badge--secondary">Complated</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;





