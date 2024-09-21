import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Home from '../src/components/Home';
import ChooseUser from './components/ChooseUser';
import AdminSignIn from '../src/components/AdminSignin';
import StudentSignIn from '../src/components/StudentSignin';
import TeacherSignIn from '../src/components/TeacherSignin';
import AdminDashboard from '../src/pages/admin/Dashboard';
import StudentDashboard from '../src/pages/student/Dashboard';
import TeacherDashboard from '../src/pages/teacher/Dashboard';

// for Admin Section 
import Classes from '../src/pages/admin/Classes';
import Exam from '../src/pages/admin/Exam';
import Attendance from '../src/pages/admin/Attendance';
import Performance from '../src/pages/admin/Performance';
import Teachers from '../src/pages/admin/Teachers';
import Students from '../src/pages/admin/Students';
import Assignments from '../src/pages/admin/Assignment';
import Library from '../src/pages/admin/Library';
import EventCalender from '../src/pages/admin/EventCalender';
import SettingsProfile from '../src/pages/admin/SettingsProfiles';
import Announcement from '../src/pages/admin/Announcement';

//for Student Section
import StudentAssignments from '../src/pages/student/Assignments';
import ExamSection from '../src/pages/student/Exams';
import PerformanceSection from '../src/pages/student/Performance';
import AttendanceSection from '../src/pages/student/Attendance';
import LibrarySection from '../src/pages/student/Library';
import AnnouncementSection from '../src/pages/student/Announcement';
import ProfileSection from '../src/pages/student/Profile';

// for Teacher  Section
import ClassSection from '../src/pages/teacher/Classes';
import StudentSection from '../src/pages/teacher/Students';
import TeacherSection from '../src/pages/teacher/Teachers';
import CheckPerformanceSection from '../src/pages/teacher/Performance';
import EventSection from '../src/pages/teacher/Events';
import TeacherProfileSection from '../src/pages/teacher/Profile';
import CheckAnnouncementSection from '../src/pages/teacher/Announcement';
import AssignmentSection from '../src/pages/teacher/Assignments';
import CheckAttendanceSection from '../src/pages/teacher/Attendance';
import CheckExamSection from '../src/pages/teacher/Exams';


function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='choose-user' element={<ChooseUser/>}/>

      {/* for all the  sign-in page/routes */}
      <Route exact path="/admin-signIn" element={<AdminSignIn />} />
      <Route exact path="/student-signIn" element={<StudentSignIn />} />
      <Route exact path="/teacher-signIn" element={<TeacherSignIn />} />

      {/* Forall the dashboard routes */}
      <Route exact path="/admin/dashboard" element={<AdminDashboard/>} />
      <Route exact path="/teacher/dashboard" element={<TeacherDashboard/>} />        
      <Route exact path="/student/dashboard" element={<StudentDashboard/>} />

       
      {/* for admin section */}
      <Route exact path="/admin/classes" element={<Classes />} />
      <Route exact path="/admin/exams" element={<Exam/>} />
      <Route exact path="/admin/attendance" element={<Attendance />} />
      <Route exact path="/admin/performance" element={<Performance />} />
      <Route exact path="/admin/teachers" element={<Teachers />} />
      <Route exact path="/admin/students" element={<Students />} />
      <Route exact path="/admin/assignments" element={<Assignments />} />
      <Route exact path="/admin/library" element={<Library />} />
      <Route exact path="/admin/communication" element={<Announcement/>} />
      <Route exact path="/admin/events" element={<EventCalender />} />
      <Route exact path="/admin/settings" element={<SettingsProfile />} />

        
      {/* for student section */}
      <Route exact path="/student/assignments" element={<StudentAssignments />} />
      <Route exact path="/student/exams" element={<ExamSection/>} />
      <Route exact path="/student/performance" element={<PerformanceSection />} />
      <Route exact path="/student/attendance" element={<AttendanceSection/>} />
      <Route exact path="/student/library" element={<LibrarySection />} />
      <Route exact path="/student/communication" element={<AnnouncementSection/>} />
      <Route exact path="/student/settings" element={<ProfileSection />} />

        {/*for teacher section  */}
      <Route exact path="/teacher/classes" element={<ClassSection />} />
      <Route exact path="/teacher/students" element={<StudentSection />} />
      <Route exact path="/teacher/teachers" element={<TeacherSection />} />
      <Route exact path="/teacher/assignments" element={<AssignmentSection />} />
      <Route exact path="/teacher/exams" element={<CheckExamSection />} />
      <Route exact path="/teacher/performance" element={<CheckPerformanceSection />} />
      <Route exact path="/teacher/attendance" element={<CheckAttendanceSection />} />
      <Route exact path="/teacher/communication" element={<CheckAnnouncementSection />} />
      <Route exact path="/teacher/events" element={<EventSection />} />
      <Route exact path="/teacher/settings" element={<TeacherProfileSection/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
