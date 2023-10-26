const courseStatus = ["all", "active", "upcoming", "completed"];

function Header() {
  return (
    <div>
      <h1>my courses (3)</h1>
      <div className="course-status">
        {courseStatus.map((s) => (
          <div key={s}>{s}</div>
        ))}
      </div>
    </div>
  );
}

export default Header;
