import React from 'react'
import { Search, CheckSquare, Map, FileText } from 'lucide-react'


function AppInterface() {
  return (
    <div>
        {/* App Interface Mockup */}
        <div className="relative max-w-6xl w-full">
          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
            {/* App Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">Search anything...</span>
                <kbd className="px-2 py-1 text-xs bg-slate-800 rounded border border-slate-600">⌘K</kbd>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">April 2023</span>
                <div className="flex gap-1">
                  <button className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center">
                    <span className="text-xs text-gray-400">‹</span>
                  </button>
                  <button className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center">
                    <span className="text-xs text-gray-400">›</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="w-64 bg-slate-900/50 border-r border-slate-700 p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 text-purple-400 bg-purple-500/10 rounded-lg">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">Daily notes</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">All notes</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer">
                    <CheckSquare className="w-4 h-4" />
                    <span className="text-sm">Tasks</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 text-gray-400 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer">
                    <Map className="w-4 h-4" />
                    <span className="text-sm">Map</span>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex">
                {/* Notes Content */}
                <div className="flex-1 p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">Sun, April 2nd, 2023</h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <div className="flex items-start gap-2">
                        <span className="text-purple-400">•</span>
                        <div>
                          <span>Today I started using </span>
                          <span className="text-purple-400">Reflect</span>
                        </div>
                      </div>
                      <div className="ml-4 space-y-2 text-gray-400">
                        <div className="flex items-start gap-2">
                          <span className="text-gray-500">◦</span>
                          <span>What is Reflect?</span>
                        </div>
                        <div className="ml-4 space-y-1 text-xs">
                          <div className="flex items-start gap-2">
                            <span className="text-gray-600">▪</span>
                            <span>A note-taking tool designed to mirror the way we think</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-gray-600">▪</span>
                            <span>
                              Our brains remember things through associations. Reflect mimics this by backlinking notes
                              to each other (read more on backlinking here).
                            </span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-gray-500">◦</span>
                          <span>
                            Over time, this gives you a _____ graph you can recall skills. Reflect becomes an extension
                            of your brain.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calendar */}
                <div className="w-80 border-l border-slate-700 p-4">
                  <div className="text-center mb-4">
                    <h4 className="font-semibold">April 2023</h4>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-xs">
                    {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                      <div key={day} className="text-center p-2 text-gray-500 font-medium">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 30 }, (_, i) => (
                      <div
                        key={i + 1}
                        className={`text-center p-2 rounded cursor-pointer ${
                          i + 1 === 2 ? "bg-purple-600 text-white" : "text-gray-400 hover:bg-slate-800"
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AppInterface