import Link from "next/link";
import { Book, Users, Calendar, MessageSquare, BarChart, Settings, GraduationCap, School, User, Lock, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Student Management",
    description: "Comprehensive student profile management with academic records and attendance tracking",
  },
  {
    icon: GraduationCap,
    title: "Teacher Portal",
    description: "Dedicated interface for teachers to manage classes, assignments, and grades",
  },
  {
    icon: Calendar,
    title: "Academic Calendar",
    description: "School-wide calendar with events, holidays, and important academic dates",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Secure messaging system for teachers, students, and parents",
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Data visualization and reporting tools for school administrators",
  },
  {
    icon: Settings,
    title: "Admin Controls",
    description: "Comprehensive administrative tools for system management and configuration",
  },
];

const roles = [
  {
    name: "Administrators",
    description: "Full access to system configuration, user management, and reporting tools",
    icon: School,
    link: "/admin",
    linkText: "Admin Dashboard"
  },
  {
    name: "Teachers",
    description: "Classroom management, gradebook, and student progress tracking",
    icon: GraduationCap,
    link: "/teacher-portal",
    linkText: "Teacher Portal"
  },
  {
    name: "Students",
    description: "Access to academic records, assignments, and school resources",
    icon: User,
    link: "/student-portal",
    linkText: "Student Portal"
  },
  {
    name: "Parents",
    description: "Monitor student progress, view announcements, and communicate with teachers",
    icon: Users,
    link: "/parent-portal",
    linkText: "Parent Portal"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 text-center bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                EmamAliMIS School Management System
              </h1>
              <p className="mx-auto max-w-[700px] text-primary-100 md:text-xl">
                A comprehensive platform for managing all aspects of school operations, academic records, and communication
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/login"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-primary-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
            <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive tools for managing all aspects of school operations
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="p-3 rounded-full bg-primary-100">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Role-Based Access</h2>
            <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tailored interfaces for each user type in the school ecosystem
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {roles.map((role) => (
              <div key={role.name} className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-primary-100 mb-3">
                    <role.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-center">{role.name}</h3>
                  <p className="text-sm text-gray-500 text-center mt-2">{role.description}</p>
                </div>
                <Link
                  href={role.link}
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary-600 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500"
                >
                  {role.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[58rem] flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to transform your school management?</h2>
            <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join Emam Ali School's comprehensive management system today
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}