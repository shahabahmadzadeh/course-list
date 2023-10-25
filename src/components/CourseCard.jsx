function CourseCard(props) {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src="/public/images/img1.jpg" alt="image-1" />
      </div>
      <div className="course-item__detail">
        <div className="course-item__body">
          <div>
            <p className="title">{props.course.title}</p>
            <p>{props.course.description}</p>
          </div>
          <span className="rate">{props.course.rate}</span>
        </div>

        <div className="course-item__footer">
          <div className="tags">
            {props.course.tags.map((t) => (
              <span key={t} className="badge badge--secondary">
                React.js
              </span>
            ))}
          </div>
          <div className="caption">
            <p className="date">
              {new Date(props.course.start).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <span className="badge badge--secondary">
              {props.course.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
