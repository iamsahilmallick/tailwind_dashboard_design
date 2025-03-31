import Wrapper from "@/layout/Wrapper/Wrapper";
import React from "react";
import { useState } from "react";
import {
  Save,
  Globe,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Upload,
  Trash2,
  Info,
  AlertTriangle,
  Check,
  X,
} from "lucide-react";

const index = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "AI Admin Dashboard",
    siteDescription: "Professional admin dashboard with AI chat interface",
    siteUrl: "https://example.com",
    adminEmail: "admin@example.com",
    timezone: "UTC",
    dateFormat: "MM/DD/YYYY",
    timeFormat: "12h",
  });

  const [contactSettings, setContactSettings] = useState({
    email: "contact@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, San Francisco, CA 94105",
    supportEmail: "support@example.com",
    supportPhone: "+1 (555) 987-6543",
  });

  const [socialSettings, setSocialSettings] = useState({
    facebook: "https://facebook.com/aiadmin",
    twitter: "https://twitter.com/aiadmin",
    instagram: "https://instagram.com/aiadmin",
    linkedin: "https://linkedin.com/company/aiadmin",
    youtube: "",
  });

  const [seoSettings, setSeoSettings] = useState({
    metaTitle: "AI Admin Dashboard | Professional Admin Interface",
    metaDescription:
      "AI-powered admin dashboard with chat interface, user management, and analytics.",
    metaKeywords: "AI, admin, dashboard, chat, analytics",
    ogImage: "/images/placeholder.svg?height=600&width=1200",
    twitterHandle: "@aiadmin",
    googleAnalyticsId: "UA-XXXXXXXXX-X",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSaveSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <Wrapper>
      <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Website Settings
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Manage your website configuration and preferences
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <button
                onClick={handleSave}
                disabled={isLoading}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Success message */}
          {saveSuccess && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md text-green-600 dark:text-green-400 flex items-center">
              <Check className="h-5 w-5 mr-2" />
              <span>Settings saved successfully!</span>
              <button
                onClick={() => setSaveSuccess(false)}
                className="ml-auto text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* Tabs */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex overflow-x-auto">
                <button
                  onClick={() => setActiveTab("general")}
                  className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "general"
                      ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  General
                </button>
                <button
                  onClick={() => setActiveTab("contact")}
                  className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "contact"
                      ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  Contact Information
                </button>
                <button
                  onClick={() => setActiveTab("social")}
                  className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "social"
                      ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  Social Media
                </button>
                <button
                  onClick={() => setActiveTab("seo")}
                  className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
                    activeTab === "seo"
                      ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  SEO & Analytics
                </button>
              </nav>
            </div>

            {/* Tab content */}
            <div className="p-6">
              {/* General Settings */}
              {activeTab === "general" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="site-name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Site Name
                      </label>
                      <input
                        id="site-name"
                        type="text"
                        value={generalSettings.siteName}
                        onChange={(e) =>
                          setGeneralSettings({
                            ...generalSettings,
                            siteName: e.target.value,
                          })
                        }
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="site-url"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Site URL
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 sm:text-sm">
                          <Globe className="h-4 w-4" />
                        </span>
                        <input
                          id="site-url"
                          type="url"
                          value={generalSettings.siteUrl}
                          onChange={(e) =>
                            setGeneralSettings({
                              ...generalSettings,
                              siteUrl: e.target.value,
                            })
                          }
                          className="flex-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-none rounded-r-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="site-description"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Site Description
                    </label>
                    <textarea
                      id="site-description"
                      rows={3}
                      value={generalSettings.siteDescription}
                      onChange={(e) =>
                        setGeneralSettings({
                          ...generalSettings,
                          siteDescription: e.target.value,
                        })
                      }
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="admin-email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Admin Email
                      </label>
                      <input
                        id="admin-email"
                        type="email"
                        value={generalSettings.adminEmail}
                        onChange={(e) =>
                          setGeneralSettings({
                            ...generalSettings,
                            adminEmail: e.target.value,
                          })
                        }
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="timezone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Timezone
                      </label>
                      <select
                        id="timezone"
                        value={generalSettings.timezone}
                        onChange={(e) =>
                          setGeneralSettings({
                            ...generalSettings,
                            timezone: e.target.value,
                          })
                        }
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      >
                        <option value="UTC">UTC</option>
                        <option value="America/New_York">
                          Eastern Time (ET)
                        </option>
                        <option value="America/Chicago">
                          Central Time (CT)
                        </option>
                        <option value="America/Denver">
                          Mountain Time (MT)
                        </option>
                        <option value="America/Los_Angeles">
                          Pacific Time (PT)
                        </option>
                        <option value="Europe/London">London</option>
                        <option value="Europe/Paris">Paris</option>
                        <option value="Asia/Tokyo">Tokyo</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="date-format"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Date Format
                      </label>
                      <select
                        id="date-format"
                        value={generalSettings.dateFormat}
                        onChange={(e) =>
                          setGeneralSettings({
                            ...generalSettings,
                            dateFormat: e.target.value,
                          })
                        }
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      >
                        <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                        <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                        <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="time-format"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Time Format
                      </label>
                      <select
                        id="time-format"
                        value={generalSettings.timeFormat}
                        onChange={(e) =>
                          setGeneralSettings({
                            ...generalSettings,
                            timeFormat: e.target.value,
                          })
                        }
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      >
                        <option value="12h">12-hour (1:30 PM)</option>
                        <option value="24h">24-hour (13:30)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Information */}
              {activeTab === "contact" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Contact Email
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 sm:text-sm">
                          <Mail className="h-4 w-4" />
                        </span>
                        <input
                          id="contact-email"
                          type="email"
                          value={contactSettings.email}
                          onChange={(e) =>
                            setContactSettings({
                              ...contactSettings,
                              email: e.target.value,
                            })
                          }
                          className="flex-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-none rounded-r-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Contact Phone
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 sm:text-sm">
                          <Phone className="h-4 w-4" />
                        </span>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={contactSettings.phone}
                          onChange={(e) =>
                            setContactSettings({
                              ...contactSettings,
                              phone: e.target.value,
                            })
                          }
                          className="flex-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-none rounded-r-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Address
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 sm:text-sm">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <input
                        id="address"
                        type="text"
                        value={contactSettings.address}
                        onChange={(e) =>
                          setContactSettings({
                            ...contactSettings,
                            address: e.target.value,
                          })
                        }
                        className="flex-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-none rounded-r-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="support-email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Support Email
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 sm:text-sm">
                          <Mail className="h-4 w-4" />
                        </span>
                        <input
                          id="support-email"
                          type="email"
                          value={contactSettings.supportEmail}
                          onChange={(e) =>
                            setContactSettings({
                              ...contactSettings,
                              supportEmail: e.target.value,
                            })
                          }
                          className="flex-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-none rounded-r-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="support-phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Support Phone
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 sm:text-sm">
                          <Phone className="h-4 w-4" />
                        </span>
                        <input
                          id="support-phone"
                          type="tel"
                          value={contactSettings.supportPhone}
                          onChange={(e) =>
                            setContactSettings({
                              ...contactSettings,
                              supportPhone: e.target.value,
                            })
                          }
                          className="flex-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-none rounded-r-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Info className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">
                          Contact Information
                        </h3>
                        <div className="mt-2 text-sm text-blue-700 dark:text-blue-400">
                          <p>
                            This information will be displayed on your website's
                            contact page and may be used by visitors to get in
                            touch with your organization.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Social Media */}
              {activeTab === "social" && (
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="facebook"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Facebook
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 sm:text-sm">
                        <Facebook className="h-4 w-4" />
                      </span>
                      <input
                        id="facebook"
                        type="url"
                        value={socialSettings.facebook}
                        onChange={(e) =>
                          setSocialSettings({
                            ...socialSettings,
                            facebook: e.target.value,
                          })
                        }
                        placeholder="https://facebook.com/yourusername"
                        className="flex-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-none rounded-r-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="twitter"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Twitter
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 sm:text-sm">
                        <Twitter className="h-4 w-4" />
                      </span>
                      <input
                        id="twitter"
                        type="url"
                        value={socialSettings.twitter}
                        onChange={(e) =>
                          setSocialSettings({
                            ...socialSettings,
                            twitter: e.target.value,
                          })
                        }
                        placeholder="https://twitter.com/yourusername"
                        className="flex-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-none rounded-r-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="instagram"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Instagram
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 sm:text-sm">
                        <Instagram className="h-4 w-4" />
                      </span>
                      <input
                        id="instagram"
                        type="url"
                        value={socialSettings.instagram}
                        onChange={(e) =>
                          setSocialSettings({
                            ...socialSettings,
                            instagram: e.target.value,
                          })
                        }
                        placeholder="https://instagram.com/yourusername"
                        className="flex-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-none rounded-r-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      LinkedIn
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 sm:text-sm">
                        <Linkedin className="h-4 w-4" />
                      </span>
                      <input
                        id="linkedin"
                        type="url"
                        value={socialSettings.linkedin}
                        onChange={(e) =>
                          setSocialSettings({
                            ...socialSettings,
                            linkedin: e.target.value,
                          })
                        }
                        placeholder="https://linkedin.com/company/yourcompany"
                        className="flex-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-none rounded-r-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="youtube"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      YouTube
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 sm:text-sm">
                        <Youtube className="h-4 w-4" />
                      </span>
                      <input
                        id="youtube"
                        type="url"
                        value={socialSettings.youtube}
                        onChange={(e) =>
                          setSocialSettings({
                            ...socialSettings,
                            youtube: e.target.value,
                          })
                        }
                        placeholder="https://youtube.com/c/yourchannel"
                        className="flex-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-none rounded-r-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      />
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                          Social Media Links
                        </h3>
                        <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-400">
                          <p>
                            Leave any field blank if you don't want to display
                            that social media link on your website. Make sure to
                            enter the full URL including https://.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SEO & Analytics */}
              {activeTab === "seo" && (
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="meta-title"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Meta Title
                    </label>
                    <input
                      id="meta-title"
                      type="text"
                      value={seoSettings.metaTitle}
                      onChange={(e) =>
                        setSeoSettings({
                          ...seoSettings,
                          metaTitle: e.target.value,
                        })
                      }
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                    />
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {seoSettings.metaTitle.length}/60 characters
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="meta-description"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Meta Description
                    </label>
                    <textarea
                      id="meta-description"
                      rows={3}
                      value={seoSettings.metaDescription}
                      onChange={(e) =>
                        setSeoSettings({
                          ...seoSettings,
                          metaDescription: e.target.value,
                        })
                      }
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                    />
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {seoSettings.metaDescription.length}/160 characters
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="meta-keywords"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Meta Keywords
                    </label>
                    <input
                      id="meta-keywords"
                      type="text"
                      value={seoSettings.metaKeywords}
                      onChange={(e) =>
                        setSeoSettings({
                          ...seoSettings,
                          metaKeywords: e.target.value,
                        })
                      }
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                    />
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Separate keywords with commas
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="og-image"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Open Graph Image
                    </label>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 h-24 w-24 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700">
                        <img
                          src={seoSettings.ogImage || "/images/placeholder.svg"}
                          alt="Open Graph preview"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Upload Image
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove
                          </button>
                        </div>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          Recommended size: 1200 x 630 pixels
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="twitter-handle"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Twitter Handle
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 sm:text-sm">
                        @
                      </span>
                      <input
                        id="twitter-handle"
                        type="text"
                        value={seoSettings.twitterHandle.replace("@", "")}
                        onChange={(e) =>
                          setSeoSettings({
                            ...seoSettings,
                            twitterHandle:
                              "@" + e.target.value.replace("@", ""),
                          })
                        }
                        className="flex-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-none rounded-r-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="google-analytics"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Google Analytics ID
                    </label>
                    <input
                      id="google-analytics"
                      type="text"
                      value={seoSettings.googleAnalyticsId}
                      onChange={(e) =>
                        setSeoSettings({
                          ...seoSettings,
                          googleAnalyticsId: e.target.value,
                        })
                      }
                      placeholder="UA-XXXXXXXXX-X or G-XXXXXXXXXX"
                      className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default index;
