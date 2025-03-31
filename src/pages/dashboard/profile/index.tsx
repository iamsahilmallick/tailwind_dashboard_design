import Wrapper from "@/layout/Wrapper/Wrapper";
import React from "react";
import { useState } from "react";
import {
  Camera,
  Edit,
  Mail,
  MapPin,
  Calendar,
  Link,
  Settings,
  Bell,
  Key,
  Download,
  Upload,
  Trash2,
  CheckCircle,
  Clock,
  BarChart2,
  MessageSquare,
  Database,
  Bookmark,
} from "lucide-react";
import { UserProfileMock } from "@/mockdata/mock-data";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Wrapper>
      <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Profile header */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
            <div className="px-6 py-4 sm:px-8 sm:py-6">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex sm:space-x-5">
                  <div className="flex-shrink-0">
                    <div className="relative -mt-16">
                      <img
                        src="/images/placeholder.svg"
                        alt="Tony Stark"
                        className="h-24 w-24 rounded-full ring-4 ring-white dark:ring-gray-800 object-cover"
                      />
                      <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-indigo-600 text-white shadow-lg">
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:pt-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                        Tony Stark
                      </h2>
                      <span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                        Software Developer
                      </span>
                    </div>
                    <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
                      <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Mail className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                        tonystark@yopmail.com
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                        kolkata, 70050
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                        Joined February 2025
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Link className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                        <a
                          href="#"
                          className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                          example.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-0 flex justify-center sm:justify-start">
                  <button className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </button>
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-700 dark:text-gray-300">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deserunt repudiandae aliquam officia in. Quas adipisci, non
                  magni dignissimos voluptatibus ad, amet nobis tenetur
                  laboriosam veniam odio reprehenderit possimus esse, facilis
                  temporibus. Illum cupiditate vero velit est unde dolores
                  labore harum maxime facilis, fugit nam architecto ipsam
                  eligendi repudiandae animi tempore quia exercitationem a. Iste
                  molestiae incidunt, iusto molestias doloremque omnis eos fuga
                  quam quibusdam porro odit veniam consectetur nostrum quidem
                  vel libero! Quisquam quas unde explicabo nesciunt quaerat
                  architecto pariatur itaque esse, odio, autem aliquam
                  asperiores nulla voluptatibus sunt est, beatae magni
                  recusandae rerum corporis earum? Incidunt iste minima debitis.
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-t border-gray-200 dark:border-gray-700">
              <nav className="flex overflow-x-auto">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "overview"
                      ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("activity")}
                  className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "activity"
                      ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  Activity
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "security"
                      ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  Security
                </button>
                <button
                  onClick={() => setActiveTab("preferences")}
                  className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "preferences"
                      ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  Preferences
                </button>
                <button
                  onClick={() => setActiveTab("data")}
                  className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "data"
                      ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  Data & Privacy
                </button>
              </nav>
            </div>
          </div>

          {/* Tab content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main content */}
            <div className="md:col-span-2 space-y-6">
              {activeTab === "overview" && (
                <>
                  {/* Stats cards */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Usage Statistics
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <div className="flex items-center">
                          <div className="p-2 rounded-md bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400">
                            <MessageSquare className="h-5 w-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              Conversations
                            </p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                              250
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <div className="flex items-center">
                          <div className="p-2 rounded-md bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400">
                            <Database className="h-5 w-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              AI Models
                            </p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                              150
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <div className="flex items-center">
                          <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                            <BarChart2 className="h-5 w-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              Tokens Used
                            </p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                              100
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                        <div className="flex items-center">
                          <div className="p-2 rounded-md bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
                            <Bookmark className="h-5 w-5" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              Saved
                            </p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                              500
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent activity */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Recent Activity
                    </h3>
                    <div className="space-y-4">
                      {UserProfileMock.recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start">
                          <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                            {activity.type === "conversation" && (
                              <MessageSquare className="h-5 w-5" />
                            )}
                            {activity.type === "settings" && (
                              <Settings className="h-5 w-5" />
                            )}
                            {activity.type === "model" && (
                              <Database className="h-5 w-5" />
                            )}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {activity.title}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {activity.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 text-center">
                      <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                        View all activity
                      </button>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "activity" && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Activity Timeline
                  </h3>
                  <div className="relative">
                    <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                    <div className="space-y-6">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="relative flex items-start">
                          <div className="absolute left-0 mt-1 h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                            <Clock className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div className="ml-12">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                              {i === 0
                                ? "Started a new conversation"
                                : i === 1
                                ? "Updated profile information"
                                : i === 2
                                ? "Generated an AI response"
                                : i === 3
                                ? "Changed password"
                                : "Logged in from new device"}
                            </div>
                            <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                              {i === 0
                                ? "2 hours ago"
                                : i === 1
                                ? "Yesterday at 4:30 PM"
                                : i === 2
                                ? "2 days ago"
                                : i === 3
                                ? "Last week"
                                : "2 weeks ago"}
                            </div>
                            <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                              {i === 0
                                ? "Started a new conversation about data analysis techniques."
                                : i === 1
                                ? "Updated profile bio and location information."
                                : i === 2
                                ? "Generated a response about machine learning algorithms."
                                : i === 3
                                ? "Changed account password for security reasons."
                                : "Logged in from a new Windows device in San Francisco."}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Security Settings
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-base font-medium text-gray-900 dark:text-white">
                          Password
                        </h4>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Last changed 3 months ago
                        </p>
                      </div>
                      <button className="px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                        Change
                      </button>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-base font-medium text-gray-900 dark:text-white">
                            Two-Factor Authentication
                          </h4>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-3 text-sm font-medium text-green-600 dark:text-green-400">
                            Enabled
                          </span>
                          <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-green-500 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span className="translate-x-5 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
                              <span className="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity opacity-0 duration-100 ease-out">
                                <svg
                                  className="h-3 w-3 text-gray-400"
                                  fill="none"
                                  viewBox="0 0 12 12"
                                >
                                  <path
                                    d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              <span className="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity opacity-100 duration-200 ease-in">
                                <svg
                                  className="h-3 w-3 text-green-600"
                                  fill="currentColor"
                                  viewBox="0 0 12 12"
                                >
                                  <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                                </svg>
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-base font-medium text-gray-900 dark:text-white">
                            Active Sessions
                          </h4>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Manage your active sessions across devices
                          </p>
                        </div>
                        <button className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                          Manage
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "preferences" && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Preferences
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-base font-medium text-gray-900 dark:text-white">
                          Theme
                        </h4>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Choose your preferred theme
                        </p>
                      </div>
                      <select className="rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                        <option>System Default</option>
                        <option>Light</option>
                        <option>Dark</option>
                      </select>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-base font-medium text-gray-900 dark:text-white">
                            Language
                          </h4>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Select your preferred language
                          </p>
                        </div>
                        <select className="rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                          <option>English (US)</option>
                          <option>Spanish</option>
                          <option>French</option>
                          <option>German</option>
                          <option>Japanese</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-base font-medium text-gray-900 dark:text-white">
                            Notifications
                          </h4>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Manage your notification preferences
                          </p>
                        </div>
                        <button className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                          Configure
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "data" && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Data & Privacy
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-base font-medium text-gray-900 dark:text-white">
                          Download Your Data
                        </h4>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Download a copy of your data
                        </p>
                      </div>
                      <button className="flex items-center px-3 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </button>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-base font-medium text-gray-900 dark:text-white">
                            Data Retention
                          </h4>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Control how long your data is stored
                          </p>
                        </div>
                        <select className="rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                          <option>30 days</option>
                          <option>90 days</option>
                          <option>1 year</option>
                          <option>Forever</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-base font-medium text-gray-900 dark:text-white">
                            Delete Account
                          </h4>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Permanently delete your account and all data
                          </p>
                        </div>
                        <button className="flex items-center px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 border border-red-600 dark:border-red-400 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Account status */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h3 className="text-base font-medium text-gray-900 dark:text-white mb-4">
                  Account Status
                </h3>
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Account Active
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Premium Plan
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Plan Renewal
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      June 15, 2023
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h3 className="text-base font-medium text-gray-900 dark:text-white mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Settings className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    Account Settings
                  </button>
                  <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Bell className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    Notification Preferences
                  </button>
                  <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Key className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    Security Settings
                  </button>
                  <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600">
                    <Upload className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    Upload Profile Picture
                  </button>
                </div>
              </div>

              {/* System info */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h3 className="text-base font-medium text-gray-900 dark:text-white mb-4">
                  System Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Last Login
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Today, 10:30 AM
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      IP Address
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      192.168.1.1
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Browser
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Chrome 112.0
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Operating System
                    </p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      macOS 13.4
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
