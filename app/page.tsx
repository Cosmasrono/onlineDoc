'use client';
import CounselorList from '@/components/CouncellorList';
import Head from 'next/head';
// import Header from '../components/Header';
// import CounselorList from '../components/CounselorList';

export default function Home() {
  return (
    <div>
      

       <main>
        <h1>Welcome to our Online Counseling Platform</h1>
        <CounselorList />
       </main>
    </div>
  );
}
