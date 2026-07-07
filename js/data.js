const TABS = [
    { id: "overview", label: "Overview", icon: "fa-solid fa-house" },
    { id: "grades", label: "Grades", icon: "fa-solid fa-chart-column" },
    { id: "schedule", label: "Schedule", icon: "fa-solid fa-calendar-days" },
    { id: "tasks", label: "Tasks", icon: "fa-solid fa-list-check" },
    { id: "profile", label: "Profile", icon: "fa-solid fa-user" }
];

const ICONS = [
    { icon: "fa-solid fa-bolt-lightning" },
    { icon: "fa-solid fa-chart-bar" },
    { icon: "fa-solid fa-calendar" },
    { icon: "fa-solid fa-credit-card" },
]

const STUDENT = {
    id: 1,
    studentId: "CS2026001",
    fullName: "Aziz Karimov",
    age: 20,
    email: "aziz.karimov@student.edu",
    phone: "+998 90 123 45 67",
    university: "Tashkent University of Information Technologies",
    location: "Samarkand, Uzbekistan",
    faculty: "Computer Engineering",
    course: 2,
    year: "2nd Year",
    group: "SE-2204",
    advisor: "Dr. Emily Johnson",
    avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    gpa: 3.82,
    attendance: 94,
    completedCredits: 72,
    totalCredits: 120,
    status: "Active",
    level: "Intermediate",
    joined: "2024-09-01"
}
const SUBJECTS = [
    {
        id: 1,
        name: "JavaScript",
        teacher: "John Anderson",
        room: "B-204",
        progress: 87,
        lessons: 32,
        completedLessons: 28,
        color: "#f7df1e",
        icon: "🟨"
    },
    {
        id: 2,
        name: "HTML & CSS",
        teacher: "Emily Brown",
        room: "A-105",
        progress: 100,
        lessons: 24,
        completedLessons: 24,
        color: "#e34c26",
        icon: "🌐"
    },
    {
        id: 3,
        name: "React",
        teacher: "Michael Lee",
        room: "C-301",
        progress: 64,
        lessons: 28,
        completedLessons: 18,
        color: "#61dafb",
        icon: "⚛️"
    },
    {
        id: 4,
        name: "Data Structures",
        teacher: "Sarah Wilson",
        room: "D-110",
        progress: 58,
        lessons: 30,
        completedLessons: 17,
        color: "#6c63ff",
        icon: "📚"
    },
    {
        id: 5,
        name: "Database Systems",
        teacher: "David Clark",
        room: "B-112",
        progress: 74,
        lessons: 26,
        completedLessons: 20,
        color: "#00b894",
        icon: "🗄️"
    },
    {
        id: 6,
        name: "Algorithms",
        teacher: "Anna Miller",
        room: "C-210",
        progress: 69,
        lessons: 30,
        completedLessons: 21,
        color: "#ff7675",
        icon: "🧩"
    },
    {
        id: 7,
        name: 'Design System',
        teacher: 'Rami Lawson',
        room: "C-212",
        progress: 45,
        lessons: 20,
        completedLessons: 10,
        color: "#fdfcdc",
        icon: "🏜️"
    }
];
const GRADES = [
    {
        id: 1,
        subjectId: 1,
        score: 50,
        grade: "A",
        exam: "Midterm",
        date: "2026-03-14",
        status: "passed"
    },
    {
        id: 2,
        subjectId: 2,
        score: 100,
        grade: "A+",
        exam: "Final",
        date: "2026-05-20",
        status: "passed"
    },
    {
        id: 3,
        subjectId: 3,
        score: 89,
        grade: "B+",
        exam: "Project",
        date: "2026-04-02",
        status: "passed"
    },
    {
        id: 4,
        subjectId: 4,
        score: 82,
        grade: "B",
        exam: "Quiz",
        date: "2026-03-29",
        status: "retake"
    },
    {
        id: 5,
        subjectId: 5,
        score: 91,
        grade: "A-",
        exam: "Assignment",
        date: "2026-04-10",
        status: "passed"
    },
    {
        id: 6,
        subjectId: 6,
        score: 85,
        grade: "B+",
        exam: "Midterm",
        date: "2026-04-21",
        status: "retake"
    }
];
const SCHEDULE = [
    {
        id: 1,
        subjectId: 1,
        day: "Monday",
        time: "09:00 - 10:30",
        teacher: "John Anderson",
        room: "B-204"
    },
    {
        id: 2,
        subjectId: 3,
        day: "Monday",
        time: "11:00 - 12:30",
        teacher: "Michael Lee",
        room: "C-301"
    },
    {
        id: 3,
        subjectId: 5,
        day: "Tuesday",
        time: "10:00 - 11:30",
        teacher: "David Clark",
        room: "B-112"
    },
    {
        id: 4,
        subjectId: 6,
        day: "Wednesday",
        time: "09:00 - 10:30",
        teacher: "Anna Miller",
        room: "C-210"
    },
    {
        id: 5,
        subjectId: 4,
        day: "Thursday",
        time: "13:00 - 14:30",
        teacher: "Sarah Wilson",
        room: "D-110"
    },
    {
        id: 6,
        subjectId: 1,
        day: "Friday",
        time: "15:00 - 16:30",
        teacher: "John Anderson",
        room: "Lab-3"
    }
];
const TASKS = [
    {
        id: 1,
        subjectId: 3,
        title: "Finish React Dashboard",
        due: "2026-07-03",
        priority: "High",
        completed: false
    },
    {
        id: 2,
        subjectId: 6,
        title: "Read Graph Algorithms",
        due: "2026-07-04",
        priority: "Medium",
        completed: false
    },
    {
        id: 3,
        subjectId: 5,
        title: "Database Normalization Homework",
        due: "2026-07-02",
        priority: "High",
        completed: true
    },
    {
        id: 4,
        subjectId: 1,
        title: "JavaScript Closures Practice",
        due: "2026-07-05",
        priority: "Medium",
        completed: true
    },
    {
        id: 5,
        subjectId: 2,
        title: "Responsive Landing Page",
        due: "2026-07-06",
        priority: "Low",
        completed: true
    },
    {
        id: 6,
        subjectId: 4,
        title: "Binary Tree Assignment",
        due: "2026-07-07",
        priority: "Medium",
        completed: false
    }
];
const COURSES = [
    {
        id: 1,
        subjectId: 2,
        title: "Introduction to Web Development",
        description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript",
        instructor: "Emily Brown",
        duration: "12 weeks",
        level: "Beginner",
        priority: 'high',
        students: 45,
        status: "completed",
        progress: 100,
        rating: 4.8,
        icon: "🌐"
    },
    {
        id: 2,
        subjectId: 1,
        title: "Advanced JavaScript & ES6",
        description: "Master advanced JavaScript concepts and modern ES6+ features",
        instructor: "John Anderson",
        duration: "10 weeks",
        level: "Intermediate",
        priority: "medium",
        students: 32,
        status: "in-progress",
        progress: 87,
        rating: 4.9,
        icon: "🟨"
    },
    {
        id: 3,
        subjectId: 3,
        title: "React.js Fundamentals",
        description: "Build interactive user interfaces with React",
        instructor: "Michael Lee",
        duration: "8 weeks",
        level: "Intermediate",
        priority: "high",
        students: 28,
        status: "in-progress",
        progress: 64,
        rating: 4.7,
        icon: "⚛️"
    },
    {
        id: 4,
        subjectId: 4,
        title: "Data Structures & Algorithms",
        description: "Understand core data structures and algorithm design patterns",
        instructor: "Sarah Wilson",
        duration: "14 weeks",
        level: "Advanced",
        priority: "low",
        students: 24,
        status: "in-progress",
        progress: 58,
        rating: 4.6,
        icon: "📚"
    },
    {
        id: 5,
        subjectId: 5,
        title: "Database Design & SQL",
        description: "Design efficient databases and master SQL queries",
        instructor: "David Clark",
        duration: "10 weeks",
        level: "Intermediate",
        priority: "low",
        students: 31,
        status: "todo",
        progress: 74,
        rating: 4.8,
        icon: "🗄️"
    },
    {
        id: 6,
        subjectId: 6,
        title: "Full-Stack Web Development",
        description: "Build complete web applications from frontend to backend",
        instructor: "Anna Miller",
        duration: "16 weeks",
        level: "Advanced",
        priority: "low",
        students: 19,
        status: "upcoming",
        progress: 0,
        rating: 4.9,
        icon: "🔧"
    },
    {
        id: 7,
        title: "UI/UX Design Principles",
        description: "Create beautiful and user-friendly interface designs",
        instructor: "Rami Lawson",
        duration: "8 weeks",
        level: "Beginner",
        priority: "medium",
        students: 42,
        status: "in-progress",
        progress: 45,
        rating: 4.5,
        icon: "🎨"
    }
]