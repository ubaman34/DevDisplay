import React from 'react';

const shareContent = (url) => {
  if (navigator.share) {
    navigator
      .share({
        title: 'Check out this job opportunity!',
        text: 'I found this amazing job opportunity for a Senior Product Designer at TechCorp Inc.',
        url: url,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};

const Jobs1 = () => {
  const cardUrl = 'https://www.devdisplay.org/Jobs#Google-SDE-YouTube';
  return (
    <div id="Google-SDE-YouTube" className="group relative mx-auto w-full max-w-[30rem]">
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/10">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="relative p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br to-teal-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
                <img src="/assets/Company/Google.png" alt="Custom Icon" className="h-15 w-15" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Software Engineer, YouTube</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-slate-400">Google</span>
                  <span className="inline-block h-1 w-1 rounded-full bg-slate-400" />
                  <span className="text-sm text-slate-400">YouTube</span>
                  {/* <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-slate-400">4.9</span>
                  </div> */}
                </div>
              </div>
            </div>
            <button className="group/save flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 transition-colors hover:bg-slate-800">
              <svg
                className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17l6-6 4 4 8-8" />
              </svg>
              {/* <span className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500">
                🔥
              </span> */}
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {/* <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              $120k - $150k
            </span> */}
            {/* <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg> */}
            <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zM12 10a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
              Bengaluru, Karnataka, India
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-500/10 px-3 py-1 text-sm text-indigo-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Full-time
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Bachelor’s degree or equivalent practical experience.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                1 year of experience with software development in one or more programming languages (e.g., Python, C,
                C++, Java, JavaScript).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Master's degree or PhD in Computer Science or related technical field.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">Experience developing accessible technologies.</p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <a
              href="https://www.google.com/about/careers/applications/jobs/results/80134030950834886-software-engineer-youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-px font-semibold text-white"
            >
              <div className="relative rounded-xl bg-slate-950 px-4 py-3 transition-all duration-300 group-hover/btn:bg-opacity-0">
                <span className="relative flex items-center justify-center gap-2">
                  Apply Now
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
            <button
              onClick={() => shareContent(cardUrl)}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Jobs2 = () => {
  const cardUrl = 'https://www.devdisplay.org/Jobs#Adove-SDE';
  return (
    <div id="Adove-SDE" className="group relative mx-auto w-full max-w-[30rem]">
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/10">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="relative p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br to-teal-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
                <img src="/assets/Company/Adobe.png" alt="Custom Icon" className="h-15 w-15" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Software Development Engineer</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-slate-400">Adobe</span>
                  <span className="inline-block h-1 w-1 rounded-full bg-slate-400" />
                  {/* <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-slate-400">4.9</span>
                  </div> */}
                </div>
              </div>
            </div>
            <button className="group/save flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 transition-colors hover:bg-slate-800">
              <svg
                className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17l6-6 4 4 8-8" />
              </svg>
              {/* <span className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500">
                🔥
              </span> */}
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {/* <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              $120k - $150k
            </span> */}
            {/* <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg> */}
            <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zM12 10a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
              Bangalore, Karnataka, India
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-500/10 px-3 py-1 text-sm text-indigo-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Full-time
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                The candidate should be well versed in advanced c++ (c++17).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Good to have knowledge in template meta programming.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">Testing infrastructure development.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                The candidate should take ownership of the existing testing infrastructure  and its maintenance
                including monitoring the unit test failures in CI across the ecosystem
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <a
              href="https://careers.adobe.com/us/en/apply?jobSeqNo=ADOBUSR154908EXTERNALENUS"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-px font-semibold text-white"
            >
              <div className="relative rounded-xl bg-slate-950 px-4 py-3 transition-all duration-300 group-hover/btn:bg-opacity-0">
                <span className="relative flex items-center justify-center gap-2">
                  Apply Now
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
            <button
              onClick={() => shareContent(cardUrl)}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Jobs3 = () => {
  const cardUrl = 'https://www.devdisplay.org/Jobs#YouTube-UX-Designer';
  return (
    <div id="YouTube-UX-Designer" className="group relative mx-auto w-full max-w-[30rem]">
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/10">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="relative p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br to-teal-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
                <img src="/assets/Company/YouTube.png" alt="Custom Icon" className="h-15 w-15" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">UX Designer, YouTube</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-slate-400">YouTube</span>
                  <span className="inline-block h-1 w-1 rounded-full bg-slate-400" />
                  {/* <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-slate-400">4.9</span>
                  </div> */}
                </div>
              </div>
            </div>
            <button className="group/save flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 transition-colors hover:bg-slate-800">
              <svg
                className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17l6-6 4 4 8-8" />
              </svg>
              {/* <span className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500">
                🔥
              </span> */}
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {/* <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              $120k - $150k
            </span> */}
            {/* <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg> */}
            <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zM12 10a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
              Bengaluru, Karnataka, India
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-500/10 px-3 py-1 text-sm text-indigo-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Full-time
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Bachelor’s degree or equivalent practical experience.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">4 years of experience in product design or UX.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Experience designing across multiple platforms, working with technical/design teams to create user
                flows, wireframes, and building user interface mockups and prototypes.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Include a portfolio, website, or any other link to your work in your resume (providing a viewable link
                or access instructions).
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <a
              href="https://www.google.com/about/careers/applications/jobs/results/90460444392596166-ux-designer-youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-px font-semibold text-white"
            >
              <div className="relative rounded-xl bg-slate-950 px-4 py-3 transition-all duration-300 group-hover/btn:bg-opacity-0">
                <span className="relative flex items-center justify-center gap-2">
                  Apply Now
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
            <button
              onClick={() => shareContent(cardUrl)}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Jobs4 = () => {
  const cardUrl = 'https://www.devdisplay.org/Jobs#Google-YouTube-UX-Writer-Content-Designer';
  return (
    <div id="Google-YouTube-UX-Writer-Content-Designer" className="group relative mx-auto w-full max-w-[30rem]">
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/10">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="relative p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br to-teal-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
                <img src="/assets/Company/Google.png" alt="Custom Icon" className="h-15 w-15" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">UX Writer and Content Designer</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-slate-400">Google</span>
                  <span className="inline-block h-1 w-1 rounded-full bg-slate-400" />
                  <span className="text-sm text-slate-400">YouTube</span>
                  {/* <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-slate-400">4.9</span>
                  </div> */}
                </div>
              </div>
            </div>
            <button className="group/save flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 transition-colors hover:bg-slate-800">
              <svg
                className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17l6-6 4 4 8-8" />
              </svg>
              {/* <span className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500">
                🔥
              </span> */}
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {/* <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              $120k - $150k
            </span> */}
            {/* <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg> */}
            <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zM12 10a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
              Bengaluru, Karnataka, India
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-500/10 px-3 py-1 text-sm text-indigo-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Full-time
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Bachelor's degree in English, Journalism, Communication, Literature, Business, Marketing, a related
                field, or equivalent practical experience.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                4 years of experience in writing, editorial, marketing, UX writing, content design, or related, as well
                as leading content strategy projects.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Experience writing and designing User Interface UI for products.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <a
              href="https://www.google.com/about/careers/applications/jobs/results/74096962592219846-ux-writer-and-content-designer-youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-px font-semibold text-white"
            >
              <div className="relative rounded-xl bg-slate-950 px-4 py-3 transition-all duration-300 group-hover/btn:bg-opacity-0">
                <span className="relative flex items-center justify-center gap-2">
                  Apply Now
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
            <button
              onClick={() => shareContent(cardUrl)}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Jobs5 = () => {
  const cardUrl = 'https://www.devdisplay.org/Jobs#Google-SDE-Corp-Eng';
  return (
    <div id="Google-SDE-Corp-Eng" className="group relative mx-auto w-full max-w-[30rem]">
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/10">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="relative p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br to-teal-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
                <img src="/assets/Company/Google.png" alt="Custom Icon" className="h-15 w-15" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Software Engineer, Corp Eng</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-slate-400">Google</span>
                  <span className="inline-block h-1 w-1 rounded-full bg-slate-400" />
                  {/* <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-slate-400">4.9</span>
                  </div> */}
                </div>
              </div>
            </div>
            <button className="group/save flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 transition-colors hover:bg-slate-800">
              <svg
                className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17l6-6 4 4 8-8" />
              </svg>
              {/* <span className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500">
                🔥
              </span> */}
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {/* <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              $120k - $150k
            </span> */}
            {/* <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg> */}
            <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zM12 10a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
              Hyderabad, Telangana, India
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-500/10 px-3 py-1 text-sm text-indigo-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Full-time
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Bachelor’s degree or equivalent practical experience.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                1 year of experience with software development in one or more programming languages (e.g., Python, C,
                C++, Java, JavaScript).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Master's degree or PhD in Computer Science or related technical field.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">Experience developing accessible technologies.</p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <a
              href="https://www.google.com/about/careers/applications/jobs/results/80228109793534662-software-engineer-corp-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-px font-semibold text-white"
            >
              <div className="relative rounded-xl bg-slate-950 px-4 py-3 transition-all duration-300 group-hover/btn:bg-opacity-0">
                <span className="relative flex items-center justify-center gap-2">
                  Apply Now
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
            <button
              onClick={() => shareContent(cardUrl)}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Jobs6 = () => {
  const cardUrl = 'https://www.devdisplay.org/Jobs#Google-Web-Solutions-Engineer-University-Graduate-2025';
  return (
    <div
      id="Google-Web-Solutions-Engineer-University-Graduate-2025"
      className="group relative mx-auto w-full max-w-[30rem]"
    >
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/10">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="relative p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br to-teal-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
                <img src="/assets/Company/Google.png" alt="Custom Icon" className="h-15 w-15" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Web Solutions Engineer, University Graduate, 2025</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-slate-400">Google</span>
                  <span className="inline-block h-1 w-1 rounded-full bg-slate-400" />
                  {/* <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-slate-400">4.9</span>
                  </div> */}
                </div>
              </div>
            </div>
            <button className="group/save flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 transition-colors hover:bg-slate-800">
              <svg
                className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17l6-6 4 4 8-8" />
              </svg>
              {/* <span className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500">
                🔥
              </span> */}
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {/* <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              $120k - $150k
            </span> */}
            {/* <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg> */}
            <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zM12 10a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
              Hyderabad, Bengaluru & Gurgaon, India
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-500/10 px-3 py-1 text-sm text-indigo-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Full-time
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Bachelor's degree or equivalent practical experience.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Experience in coding using either Java, C++, or Python.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Experience in SQL, Technical Design, Web Technologies, Troubleshooting, and Stakeholder Management.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Excellent written and verbal business communication skills.
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <a
              href="https://www.google.com/about/careers/applications/jobs/results/91553827034931910-web-solutions-engineer-university-graduate-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-px font-semibold text-white"
            >
              <div className="relative rounded-xl bg-slate-950 px-4 py-3 transition-all duration-300 group-hover/btn:bg-opacity-0">
                <span className="relative flex items-center justify-center gap-2">
                  Apply Now
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
            <button
              onClick={() => shareContent(cardUrl)}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Jobs7 = () => {
  const cardUrl = 'https://www.devdisplay.org/Jobs#Quest-Global-Java-Developer';
  return (
    <div id="Quest-Global-Java-Developer" className="group relative mx-auto w-full max-w-[30rem]">
      <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-emerald-500/10">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
        <div className="relative p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br to-teal-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
                <img src="/assets/LocalCompany/QuestGlobal.jpg" alt="Custom Icon" className="h-15 w-15" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Java Developer</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-sm text-slate-400">Quest Global</span>
                  <span className="inline-block h-1 w-1 rounded-full bg-slate-400" />
                  {/* <div className="flex items-center gap-1">
                    <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-slate-400">4.9</span>
                  </div> */}
                </div>
              </div>
            </div>
            <button className="group/save flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 transition-colors hover:bg-slate-800">
              <svg
                className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 17l6-6 4 4 8-8" />
              </svg>
              {/* <span className="h-5 w-5 text-slate-400 transition-colors group-hover/save:text-emerald-500">
                🔥
              </span> */}
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {/* <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              $120k - $150k
            </span> */}
            <span className="inline-flex items-center gap-1 rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zM12 10a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
              Pune & Bangalore, India
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-500/10 px-3 py-1 text-sm text-indigo-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Full-time
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                We are currently seeking a highly skilled and experienced Java Developer to join our team on a
                full-time, regular basis. As a Java Developer, you will be responsible for developing and maintaining
                high-quality software applications using Java programming language.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Bachelor's degree in computer science engineering, or a related field
              </p>
            </div>
            {/*<div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Expertise in Figma, Adobe Creative Suite, and prototyping tools
              </p>
            </div> */}
          </div>
          <div className="mt-8 flex gap-3">
            <a
              href="https://careers.quest-global.com/global/en/job/P-101869/Java-Developer"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex-1 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-px font-semibold text-white"
            >
              <div className="relative rounded-xl bg-slate-950 px-4 py-3 transition-all duration-300 group-hover/btn:bg-opacity-0">
                <span className="relative flex items-center justify-center gap-2">
                  Apply Now
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
            <button
              onClick={() => shareContent(cardUrl)}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const JobsList = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 px-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Jobs1 />
        <Jobs2 />
        <Jobs3 />
        <Jobs4 />
        <Jobs5 />
        <Jobs6 />
        <Jobs7 />
      </div>
    </>
  );
};

export default JobsList;
