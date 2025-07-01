"use client";
import { useState } from 'react';

export default function ReportBug() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/report-bug', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Failed to send bug report. Please try again.');
      }
    } catch (err) {
      setError('Failed to send bug report. Please try again.');
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e9e7d1]">
        <div className="bg-[#b0d6e9] p-8 rounded-2xl shadow-xl border-2 border-black max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#2d3e1c]">Thank you!</h2>
          <p>Your bug report has been submitted.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e9e7d1]">
      <form onSubmit={handleSubmit} className="bg-[#b0d6e9] p-8 rounded-2xl shadow-xl border-2 border-black max-w-md w-full space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-[#2d3e1c]">Report a Bug</h2>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <div>
          <label className="block font-semibold mb-1">Name (optional)</label>
          <input name="name" type="text" className="w-full bg-white border border-[#8a9a5b] rounded p-2" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email (optional)</label>
          <input name="email" type="email" className="w-full bg-white border border-[#8a9a5b] rounded p-2" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Bug Description *</label>
          <textarea name="description" required className="w-full bg-white border border-[#8a9a5b] rounded p-2 min-h-[100px]" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Screenshot (optional)</label>
          <input name="screenshot" type="file" accept="image/*" className="w-full bg-white border border-[#8a9a5b] rounded p-2" />
        </div>
        <button type="submit" className="bg-[#4a6a2c] text-[#e9e7d1] px-6 py-2 rounded-xl border-2 border-black font-bold hover:bg-[#2d3e1c] transition-all w-full" disabled={loading}>
          {loading ? 'Sending...' : 'Submit Bug Report'}
        </button>
      </form>
    </div>
  );
} 