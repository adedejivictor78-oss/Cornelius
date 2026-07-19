'use client'
export default function PlatformSignup() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-bg">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-[420px]">
        <h1 className="text-2xl font-bold text-navy text-center">Create Platform Owner</h1>
        <input placeholder="Your Email" className="w-full p-3 mt-6 border rounded-xl"/>
        <input placeholder="Create Password" type="password" className="w-full p-3 mt-3 border rounded-xl"/>
        <button className="w-full p-3 mt-4 bg-royal text-white rounded-xl font-semibold">Sign Up</button>
      </div>
    </main>
  )
}
