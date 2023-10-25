function CourseCard({ course }) {
  return (
    <div className="course-item">
      <div className="course-item__img">
        <img src={course.imageUrl} alt={course.title} />
      </div>
      <div className="course-item__detail">
        <CourseCartBody
          title={course.title}
          description={course.description}
          rate={course.rate}
        />
        <CourseCartFooter
          tags={course.tags}
          start={course.start}
          status={course.status}
        />
      </div>
    </div>
  );
}

export default CourseCard;

function CourseCartBody({ title, description, rate }) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title}</p>
        <p>{description}</p>
      </div>
      <span className="rate">{rate}</span>
    </div>
  );
}

function CourseCartFooter({ tags, start, status }) {
  return (
    <div className="course-item__footer">
      <div className="tags">
        {tags.map((t) => (
          <span key={t} className="badge badge--secondary">
            {t}
          </span>
        ))}
      </div>
      <div className="caption">
        <p className="date">
          {new Date(start).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <span className="badge badge--secondary">{status}</span>
      </div>
    </div>
  );
}
