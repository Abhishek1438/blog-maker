import BlogDashboard from './components/BlogDashboard';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="dashboardContainer">
        <h2>Your Blogs</h2>
        <BlogDashboard />
        <BlogDashboard />
        <BlogDashboard />
        <BlogDashboard />
        <BlogDashboard />
      </div>

      <Link href="/compose" className="createNewLink">
        <button className="createNew">Create New Blog</button>
      </Link>
    </main>
  );
}
