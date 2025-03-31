import React from "react";
import { useState } from "react";
import {
  BarChart3,
  Users,
  MessageSquare,
  Clock,
  Database,
  Zap,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Plus,
  X,
  CheckSquare,
  Square,
} from "lucide-react";
import { dashboardMetrics, todoItems } from "@/mockdata/mock-data";
import Wrapper from "@/layout/Wrapper/Wrapper";

interface TodoItem {
  id: number;
  title: string;
  priority: "high" | "medium" | "low";
  dueDate: string;
  completed: boolean;
}


const WebSetting = () => {
  const [todos, setTodos] = useState(todoItems);
  const [newTodo, setNewTodo] = useState("");
  const [newTodoPriority, setNewTodoPriority] = useState<
    "high" | "medium" | "low"
  >("medium");
  const [showAddTodo, setShowAddTodo] = useState(false);

  const toggleTodoComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = () => {
    if (!newTodo.trim()) return;

    const newTodoItem: TodoItem = {
      id: Date.now(),
      title: newTodo,
      priority: newTodoPriority,
      dueDate: "Today",
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
    setShowAddTodo(false);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Wrapper>
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Welcome section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Welcome back, Admin
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Here`s what's happening with your AI platform today.
            </p>
          </div>

          {/* Metrics cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <Users className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Active Users
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {dashboardMetrics.activeUsers.toLocaleString()}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                    <ChevronUp className="h-3 w-3 mr-1" />
                    <span>12% from last week</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Conversations
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {dashboardMetrics.totalConversations.toLocaleString()}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                    <ChevronUp className="h-3 w-3 mr-1" />
                    <span>8% from last week</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Response Time
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {dashboardMetrics.aiResponseTime}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                    <ChevronDown className="h-3 w-3 mr-1" />
                    <span>5% improvement</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Satisfaction
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {dashboardMetrics.userSatisfaction}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                    <ChevronUp className="h-3 w-3 mr-1" />
                    <span>2% from last week</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary dashboardMetrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  New Users
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {dashboardMetrics.newUsers}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                <Users className="h-5 w-5" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Tokens Used
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {dashboardMetrics.totalTokensUsed}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                <Zap className="h-5 w-5" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Active Models
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {dashboardMetrics.activeModels}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                <Database className="h-5 w-5" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Error Rate
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {dashboardMetrics.errorRate}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                <AlertTriangle className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart section */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Usage Analytics
                </h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1.5 text-sm bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-md">
                    Day
                  </button>
                  <button className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    Week
                  </button>
                  <button className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    Month
                  </button>
                </div>
              </div>

              {/* Placeholder for chart */}
              <div className="h-64 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-12 w-12 text-gray-400 dark:text-gray-500" />
                <p className="ml-3 text-gray-500 dark:text-gray-400">
                  Usage analytics chart
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Total Queries
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    12,543
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Avg. Response
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    1.2s
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Success Rate
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    99.7%
                  </p>
                </div>
              </div>
            </div>

            {/* To-do list */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  To-Do List
                </h3>
                <button
                  onClick={() => setShowAddTodo(!showAddTodo)}
                  className="p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>

              {/* Add todo form */}
              {showAddTodo && (
                <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new task..."
                    className="w-full p-2 mb-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md text-sm"
                  />
                  <div className="flex justify-between">
                    <select
                      value={newTodoPriority}
                      onChange={(e) =>
                        setNewTodoPriority(
                          e.target.value as "high" | "medium" | "low"
                        )
                      }
                      className="p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md text-sm"
                    >
                      <option value="high">High Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="low">Low Priority</option>
                    </select>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setShowAddTodo(false)}
                        className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={addTodo}
                        className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    className={`p-3 rounded-lg border ${
                      todo.completed
                        ? "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30"
                        : todo.priority === "high"
                        ? "border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/10"
                        : todo.priority === "medium"
                        ? "border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-900/10"
                        : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30"
                    }`}
                  >
                    <div className="flex items-start">
                      <button
                        onClick={() => toggleTodoComplete(todo.id)}
                        className="mt-0.5 flex-shrink-0 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        {todo.completed ? (
                          <CheckSquare className="h-5 w-5" />
                        ) : (
                          <Square className="h-5 w-5" />
                        )}
                      </button>
                      <div className="ml-3 flex-1">
                        <p
                          className={`text-sm font-medium ${
                            todo.completed
                              ? "text-gray-500 dark:text-gray-400 line-through"
                              : "text-gray-800 dark:text-white"
                          }`}
                        >
                          {todo.title}
                        </p>
                        <div className="flex items-center mt-1">
                          <span
                            className={`text-xs ${
                              todo.priority === "high"
                                ? "text-red-600 dark:text-red-400"
                                : todo.priority === "medium"
                                ? "text-amber-600 dark:text-amber-400"
                                : "text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {todo.priority.charAt(0).toUpperCase() +
                              todo.priority.slice(1)}{" "}
                            Priority
                          </span>
                          <span className="mx-2 text-gray-300 dark:text-gray-600">
                            •
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            Due: {todo.dueDate}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeTodo(todo.id)}
                        className="p-1 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {todos.length === 0 && (
                <div className="py-6 flex flex-col items-center justify-center text-center">
                  <CheckCircle className="h-10 w-10 text-gray-300 dark:text-gray-600 mb-2" />
                  <p className="text-gray-500 dark:text-gray-400">
                    All tasks completed!
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">
                    Add a new task to get started
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default WebSetting;
