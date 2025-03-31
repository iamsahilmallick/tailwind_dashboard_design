import Wrapper from "@/layout/Wrapper/Wrapper";
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  Download,
  Edit,
  ExternalLink,
  Eye,
  EyeOff,
  Info,
  Lock,
  Mail,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { useState } from "react";

const Components = () => {
  const [activeTab, setActiveTab] = useState("buttons");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState<Record<string, boolean>>({
    "accordion-1": true,
    "accordion-2": false,
    "accordion-3": false,
  });
  const [selectedOption, setSelectedOption] = useState("option1");
  const [multiSelectOptions, setMultiSelectOptions] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);

  const toggleAccordion = (id: string) => {
    setAccordionOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleMultiSelectChange = (option: string) => {
    if (multiSelectOptions.includes(option)) {
      setMultiSelectOptions(
        multiSelectOptions.filter((item) => item !== option)
      );
    } else {
      setMultiSelectOptions([...multiSelectOptions, option]);
    }
  };
  return (
    <Wrapper>
      <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Component Showcase
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              A collection of UI components for your dashboard
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex overflow-x-auto">
                {["buttons", "modals", "forms", "accordions", "selects"].map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
                        activeTab === tab
                          ? "border-indigo-500 text-indigo-600 dark:text-indigo-400"
                          : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  )
                )}
              </nav>
            </div>
            <div className="p-6">
              {/* Buttons */}
              {activeTab === "buttons" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Button Variants
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Primary
                      </button>
                      <button className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Secondary
                      </button>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                        Success
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        Danger
                      </button>
                      <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                        Warning
                      </button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Info
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Button Sizes
                    </h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <button className="px-2.5 py-1.5 text-xs bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Extra Small
                      </button>
                      <button className="px-3 py-2 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Small
                      </button>
                      <button className="px-4 py-2 text-base bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Medium
                      </button>
                      <button className="px-6 py-3 text-base bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Large
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Button with Icons
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <button className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <Plus className="h-4 w-4 mr-2" />
                        Add New
                      </button>
                      <button className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </button>
                      <button className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </button>
                      <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </button>
                      <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Site
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Icon Buttons
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <button className="p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <Plus className="h-5 w-5" />
                      </button>
                      <button className="p-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <Edit className="h-5 w-5" />
                      </button>
                      <button className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                        <Trash2 className="h-5 w-5" />
                      </button>
                      <button className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <Download className="h-5 w-5" />
                      </button>
                      <button className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Button States
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Normal
                      </button>
                      <button className="px-4 py-2 bg-indigo-700 text-white rounded-md cursor-default">
                        Hover
                      </button>
                      <button className="px-4 py-2 bg-indigo-800 text-white rounded-md shadow-inner cursor-default">
                        Active
                      </button>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md opacity-50 cursor-not-allowed">
                        Disabled
                      </button>
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-default">
                        Focus
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Button Groups
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="inline-flex rounded-md shadow-sm">
                        <button className="px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                          Day
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-white dark:bg-gray-700 border-t border-b border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                          Week
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-r-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                          Month
                        </button>
                      </div>

                      <div className="inline-flex rounded-md shadow-sm">
                        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded-l-md hover:bg-indigo-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                          Save
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border-t border-b border-indigo-600 hover:bg-indigo-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                          Apply
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded-r-md hover:bg-indigo-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Modals */}
              {activeTab === "modals" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Modal Examples
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Open Modal
                      </button>
                      <button
                        onClick={() => setIsAlertOpen(true)}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        Open Alert Dialog
                      </button>
                    </div>

                    {/* Standard Modal */}
                    {isModalOpen && (
                      <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                          <div
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            onClick={() => setIsModalOpen(false)}
                          ></div>

                          <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white dark:bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                              <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 sm:mx-0 sm:h-10 sm:w-10">
                                  <Info className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                  <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                    Modal Title
                                  </h3>
                                  <div className="mt-2">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                      This is an example modal dialog. You can
                                      include any content here, such as forms,
                                      tables, or other UI elements.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                              <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                                onClick={() => setIsModalOpen(false)}
                              >
                                Confirm
                              </button>
                              <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 sm:mt-0 sm:w-auto"
                                onClick={() => setIsModalOpen(false)}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Alert Dialog */}
                    {isAlertOpen && (
                      <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                          <div
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            onClick={() => setIsAlertOpen(false)}
                          ></div>

                          <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white dark:bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                              <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900 sm:mx-0 sm:h-10 sm:w-10">
                                  <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                  <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                    Delete Item
                                  </h3>
                                  <div className="mt-2">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                      Are you sure you want to delete this item?
                                      This action cannot be undone and all
                                      associated data will be permanently
                                      removed.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                              <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                onClick={() => setIsAlertOpen(false)}
                              >
                                Delete
                              </button>
                              <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 sm:mt-0 sm:w-auto"
                                onClick={() => setIsAlertOpen(false)}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Notification Examples
                    </h3>
                    <div className="space-y-4">
                      <div className="rounded-md bg-green-50 dark:bg-green-900/20 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-green-800 dark:text-green-300">
                              Success Notification
                            </h3>
                            <div className="mt-2 text-sm text-green-700 dark:text-green-400">
                              <p>Your changes have been saved successfully.</p>
                            </div>
                            <div className="mt-4">
                              <div className="-mx-2 -my-1.5 flex">
                                <button
                                  type="button"
                                  className="rounded-md bg-green-50 dark:bg-green-900/30 px-2 py-1.5 text-sm font-medium text-green-800 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/40 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                                >
                                  View status
                                </button>
                                <button
                                  type="button"
                                  className="ml-3 rounded-md bg-green-50 dark:bg-green-900/30 px-2 py-1.5 text-sm font-medium text-green-800 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/40 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                                >
                                  Dismiss
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-md bg-red-50 dark:bg-red-900/20 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <X className="h-5 w-5 text-red-400" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800 dark:text-red-300">
                              Error Notification
                            </h3>
                            <div className="mt-2 text-sm text-red-700 dark:text-red-400">
                              <p>
                                There was an error processing your request.
                                Please try again.
                              </p>
                            </div>
                            <div className="mt-4">
                              <div className="-mx-2 -my-1.5 flex">
                                <button
                                  type="button"
                                  className="rounded-md bg-red-50 dark:bg-red-900/30 px-2 py-1.5 text-sm font-medium text-red-800 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/40 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
                                >
                                  Try again
                                </button>
                                <button
                                  type="button"
                                  className="ml-3 rounded-md bg-red-50 dark:bg-red-900/30 px-2 py-1.5 text-sm font-medium text-red-800 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/40 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
                                >
                                  Dismiss
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-md bg-blue-50 dark:bg-blue-900/20 p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <Info className="h-5 w-5 text-blue-400" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">
                              Information Notification
                            </h3>
                            <div className="mt-2 text-sm text-blue-700 dark:text-blue-400">
                              <p>
                                A new update is available for your application.
                              </p>
                            </div>
                            <div className="mt-4">
                              <div className="-mx-2 -my-1.5 flex">
                                <button
                                  type="button"
                                  className="rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1.5 text-sm font-medium text-blue-800 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50"
                                >
                                  Update now
                                </button>
                                <button
                                  type="button"
                                  className="ml-3 rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1.5 text-sm font-medium text-blue-800 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50"
                                >
                                  Dismiss
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Forms */}
              {activeTab === "forms" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Form Elements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="text-input"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Text Input
                        </label>
                        <input
                          id="text-input"
                          type="text"
                          className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                          placeholder="Enter text"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email-input"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Email Input
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="email-input"
                            type="email"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="password-input"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Password Input
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="password-input"
                            type={showPassword ? "text" : "password"}
                            className="block w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                            placeholder="••••••••"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Eye className="h-5 w-5 text-gray-400" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="number-input"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Number Input
                        </label>
                        <input
                          id="number-input"
                          type="number"
                          className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                          placeholder="0"
                          min="0"
                          max="100"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="date-input"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Date Input
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="date-input"
                            type="date"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="time-input"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Time Input
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Clock className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            id="time-input"
                            type="time"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Text Areas & Checkboxes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label
                          htmlFor="textarea"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Text Area
                        </label>
                        <textarea
                          id="textarea"
                          rows={4}
                          className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                          placeholder="Enter your message here"
                        ></textarea>
                      </div>

                      <div>
                        <fieldset>
                          <legend className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Checkboxes
                          </legend>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <input
                                id="checkbox-1"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="checkbox-1"
                                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                              >
                                Option 1
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="checkbox-2"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="checkbox-2"
                                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                              >
                                Option 2
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="checkbox-3"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="checkbox-3"
                                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                              >
                                Option 3
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>

                      <div>
                        <fieldset>
                          <legend className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Radio Buttons
                          </legend>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <input
                                id="radio-1"
                                name="radio-group"
                                type="radio"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                              />
                              <label
                                htmlFor="radio-1"
                                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                              >
                                Option 1
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="radio-2"
                                name="radio-group"
                                type="radio"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                              />
                              <label
                                htmlFor="radio-2"
                                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                              >
                                Option 2
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="radio-3"
                                name="radio-group"
                                type="radio"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                              />
                              <label
                                htmlFor="radio-3"
                                className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                              >
                                Option 3
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Form Layout Example
                    </h3>
                    <form className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                              First Name
                            </label>
                            <input
                              id="first-name"
                              type="text"
                              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                              Last Name
                            </label>
                            <input
                              id="last-name"
                              type="text"
                              className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                          >
                            Email Address
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                          ></textarea>
                        </div>

                        <div className="flex items-center">
                          <input
                            id="terms"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                          <label
                            htmlFor="terms"
                            className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                          >
                            I agree to the terms and conditions
                          </label>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              {/* Accordions */}
              {activeTab === "accordions" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Basic Accordion
                    </h3>
                    <div className="space-y-2 rounded-md border border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
                      <div>
                        <button
                          onClick={() => toggleAccordion("accordion-1")}
                          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white"
                        >
                          <span>Accordion Item 1</span>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${
                              accordionOpen["accordion-1"]
                                ? "transform rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {accordionOpen["accordion-1"] && (
                          <div className="px-4 pb-3 pt-0">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut pretium pretium tempor. Ut eget imperdiet
                              neque. In volutpat ante semper diam molestie, et
                              aliquam erat laoreet.
                            </p>
                          </div>
                        )}
                      </div>

                      <div>
                        <button
                          onClick={() => toggleAccordion("accordion-2")}
                          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white"
                        >
                          <span>Accordion Item 2</span>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${
                              accordionOpen["accordion-2"]
                                ? "transform rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {accordionOpen["accordion-2"] && (
                          <div className="px-4 pb-3 pt-0">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Vivamus luctus eros aliquet convallis ultricies.
                              Mauris augue massa, ultricies non ligula.
                              Suspendisse imperdiet. Vivamus luctus eros aliquet
                              convallis ultricies.
                            </p>
                          </div>
                        )}
                      </div>

                      <div>
                        <button
                          onClick={() => toggleAccordion("accordion-3")}
                          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white"
                        >
                          <span>Accordion Item 3</span>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${
                              accordionOpen["accordion-3"]
                                ? "transform rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {accordionOpen["accordion-3"] && (
                          <div className="px-4 pb-3 pt-0">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Styled Accordion
                    </h3>
                    <div className="space-y-4">
                      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
                        <button
                          onClick={() => toggleAccordion("styled-1")}
                          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white rounded-t-lg bg-gray-50 dark:bg-gray-700"
                        >
                          <div className="flex items-center">
                            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 mr-3">
                              1
                            </span>
                            <span>Getting Started</span>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${
                              accordionOpen["styled-1"]
                                ? "transform rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {accordionOpen["styled-1"] && (
                          <div className="px-4 py-3">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut pretium pretium tempor. Ut eget imperdiet
                              neque. In volutpat ante semper diam molestie, et
                              aliquam erat laoreet.
                            </p>
                            <div className="mt-4 flex">
                              <a
                                href="#"
                                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                              >
                                Learn more <span aria-hidden="true">→</span>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
                        <button
                          onClick={() => toggleAccordion("styled-2")}
                          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white rounded-t-lg bg-gray-50 dark:bg-gray-700"
                        >
                          <div className="flex items-center">
                            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 mr-3">
                              2
                            </span>
                            <span>Configuration</span>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${
                              accordionOpen["styled-2"]
                                ? "transform rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {accordionOpen["styled-2"] && (
                          <div className="px-4 py-3">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Vivamus luctus eros aliquet convallis ultricies.
                              Mauris augue massa, ultricies non ligula.
                              Suspendisse imperdiet. Vivamus luctus eros aliquet
                              convallis ultricies.
                            </p>
                            <div className="mt-4 flex">
                              <a
                                href="#"
                                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                              >
                                Learn more <span aria-hidden="true">→</span>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
                        <button
                          onClick={() => toggleAccordion("styled-3")}
                          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white rounded-t-lg bg-gray-50 dark:bg-gray-700"
                        >
                          <div className="flex items-center">
                            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 mr-3">
                              3
                            </span>
                            <span>Deployment</span>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${
                              accordionOpen["styled-3"]
                                ? "transform rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {accordionOpen["styled-3"] && (
                          <div className="px-4 py-3">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <div className="mt-4 flex">
                              <a
                                href="#"
                                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                              >
                                Learn more <span aria-hidden="true">→</span>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Selects */}
              {activeTab === "selects" && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Basic Select
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="basic-select"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Select Option
                        </label>
                        <select
                          id="basic-select"
                          className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                        >
                          <option value="">Select an option</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="disabled-select"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Disabled Select
                        </label>
                        <select
                          id="disabled-select"
                          disabled
                          className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                        >
                          <option value="">Select an option</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Custom Radio Select
                    </h3>
                    <div className="space-y-2">
                      <div
                        className={`relative block cursor-pointer rounded-lg border ${
                          selectedOption === "option1"
                            ? "border-indigo-500 ring-2 ring-indigo-500"
                            : "border-gray-300 dark:border-gray-600"
                        } bg-white dark:bg-gray-800 px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between`}
                        onClick={() => setSelectedOption("option1")}
                      >
                        <span className="flex items-center">
                          <span className="flex flex-col text-sm">
                            <span className="font-medium text-gray-900 dark:text-white">
                              Basic Plan
                            </span>
                            <span className="text-gray-500 dark:text-gray-400">
                              $10/month
                            </span>
                          </span>
                        </span>
                        <span className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right">
                          <span className="font-medium text-indigo-600 dark:text-indigo-400">
                            Up to 10 users
                          </span>
                          <span className="ml-1 text-gray-500 dark:text-gray-400 sm:ml-0">
                            <span className="hidden sm:inline">-</span> 10GB
                            storage
                          </span>
                        </span>
                        <span
                          className={`absolute -inset-px rounded-lg border-2 pointer-events-none ${
                            selectedOption === "option1"
                              ? "border-indigo-500"
                              : "border-transparent"
                          }`}
                          aria-hidden="true"
                        ></span>
                      </div>

                      <div
                        className={`relative block cursor-pointer rounded-lg border ${
                          selectedOption === "option2"
                            ? "border-indigo-500 ring-2 ring-indigo-500"
                            : "border-gray-300 dark:border-gray-600"
                        } bg-white dark:bg-gray-800 px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between`}
                        onClick={() => setSelectedOption("option2")}
                      >
                        <span className="flex items-center">
                          <span className="flex flex-col text-sm">
                            <span className="font-medium text-gray-900 dark:text-white">
                              Pro Plan
                            </span>
                            <span className="text-gray-500 dark:text-gray-400">
                              $25/month
                            </span>
                          </span>
                        </span>
                        <span className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right">
                          <span className="font-medium text-indigo-600 dark:text-indigo-400">
                            Up to 50 users
                          </span>
                          <span className="ml-1 text-gray-500 dark:text-gray-400 sm:ml-0">
                            <span className="hidden sm:inline">-</span> 50GB
                            storage
                          </span>
                        </span>
                        <span
                          className={`absolute -inset-px rounded-lg border-2 pointer-events-none ${
                            selectedOption === "option2"
                              ? "border-indigo-500"
                              : "border-transparent"
                          }`}
                          aria-hidden="true"
                        ></span>
                      </div>

                      <div
                        className={`relative block cursor-pointer rounded-lg border ${
                          selectedOption === "option3"
                            ? "border-indigo-500 ring-2 ring-indigo-500"
                            : "border-gray-300 dark:border-gray-600"
                        } bg-white dark:bg-gray-800 px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between`}
                        onClick={() => setSelectedOption("option3")}
                      >
                        <span className="flex items-center">
                          <span className="flex flex-col text-sm">
                            <span className="font-medium text-gray-900 dark:text-white">
                              Enterprise Plan
                            </span>
                            <span className="text-gray-500 dark:text-gray-400">
                              $50/month
                            </span>
                          </span>
                        </span>
                        <span className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right">
                          <span className="font-medium text-indigo-600 dark:text-indigo-400">
                            Unlimited users
                          </span>
                          <span className="ml-1 text-gray-500 dark:text-gray-400 sm:ml-0">
                            <span className="hidden sm:inline">-</span> 100GB
                            storage
                          </span>
                        </span>
                        <span
                          className={`absolute -inset-px rounded-lg border-2 pointer-events-none ${
                            selectedOption === "option3"
                              ? "border-indigo-500"
                              : "border-transparent"
                          }`}
                          aria-hidden="true"
                        ></span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      Multi-Select
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="multi-select-1"
                          type="checkbox"
                          checked={multiSelectOptions.includes("option1")}
                          onChange={() => handleMultiSelectChange("option1")}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="multi-select-1"
                          className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                        >
                          Option 1
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="multi-select-2"
                          type="checkbox"
                          checked={multiSelectOptions.includes("option2")}
                          onChange={() => handleMultiSelectChange("option2")}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="multi-select-2"
                          className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                        >
                          Option 2
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="multi-select-3"
                          type="checkbox"
                          checked={multiSelectOptions.includes("option3")}
                          onChange={() => handleMultiSelectChange("option3")}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="multi-select-3"
                          className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                        >
                          Option 3
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="multi-select-4"
                          type="checkbox"
                          checked={multiSelectOptions.includes("option4")}
                          onChange={() => handleMultiSelectChange("option4")}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="multi-select-4"
                          className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                        >
                          Option 4
                        </label>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Selected options:{" "}
                        {multiSelectOptions.length
                          ? multiSelectOptions.join(", ")
                          : "None"}
                      </p>
                    </div>
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

export default Components;
