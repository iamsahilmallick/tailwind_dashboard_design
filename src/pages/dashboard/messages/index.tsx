import Wrapper from "@/layout/Wrapper/Wrapper";
import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  Search,
  Archive,
  Star,
  Filter,
  ChevronDown,
  MoreVertical,
  Phone,
  Video,
  Image,
  Send,
  Paperclip,
  Smile,
  Mic,
  Download,
  Copy,
  Bookmark,
  Share2,
  Pin,
  AlertCircle,
  Trash2,
} from "lucide-react";

type MessagePreview = {
  id: string;
  sender: string;
  avatar: string;
  preview: string;
  time: string;
  unread: boolean;
  pinned?: boolean;
  isActive?: boolean;
};

type DetailedMessage = {
  id: string;
  role: "user" | "system";
  content: string;
  timestamp: string;
  media?: {
    type: "image" | "video";
    url: string;
    caption?: string;
  }[];
  status?: "sent" | "delivered" | "read";
};

type Conversation = {
  id: string;
  title: string;
  messages: DetailedMessage[];
  recipient: {
    name: string;
    avatar: string;
    status: "online" | "offline" | "away";
    lastSeen?: string;
  };
};

const Messages = () => {
  // Update the conversation previews to include more details
  const [conversations, setConversations] = useState<MessagePreview[]>([
    {
      id: "conv-1",
      sender: "AI Assistant",
      avatar: "/images/placeholder.svg?height=40&width=40",
      preview:
        "Here are the latest user statistics and analytics data you requested. The growth trend shows a 15% increase in active users.",
      time: "11:59 AM",
      unread: false,
      isActive: true,
    },
    {
      id: "conv-2",
      sender: "Sarah Williams",
      avatar: "/images/placeholder.svg?height=40&width=40",
      preview:
        "Can you help me with the new user onboarding process? I'm having trouble with the email verification step.",
      time: "10:23 AM",
      unread: true,
      pinned: true,
    },
    {
      id: "conv-3",
      sender: "Data Analytics Bot",
      avatar: "/images//placeholder.svg?height=40&width=40",
      preview:
        "Monthly report is ready. Here's the summary of user activity: 1,243 active users, 87 new signups, and 15 minutes average session time.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: "conv-4",
      sender: "Michael Chen",
      avatar: "/images//placeholder.svg?height=40&width=40",
      preview:
        "I've updated the permissions for the new team members. They should now have access to the dashboard and reporting tools.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: "conv-5",
      sender: "Support Team",
      avatar: "/images//placeholder.svg?height=40&width=40",
      preview:
        "New ticket assigned: #4392 - API integration issue with third-party service. Priority: High. Please review ASAP.",
      time: "2 days ago",
      unread: false,
    },
    {
      id: "conv-6",
      sender: "Emily Johnson",
      avatar: "/images//placeholder.svg?height=40&width=40",
      preview:
        "When will the new dashboard features be ready? Our client is asking for an ETA on the analytics module.",
      time: "3 days ago",
      unread: false,
    },
    {
      id: "conv-7",
      sender: "Security Alert",
      avatar: "/images//placeholder.svg?height=40&width=40",
      preview:
        "New login detected from an unrecognized device in San Francisco, CA. IP: 192.168.1.1. Browser: Chrome 112.0.",
      time: "1 week ago",
      unread: false,
    },
    {
      id: "conv-8",
      sender: "System Notification",
      avatar: "/images//placeholder.svg?height=40&width=40",
      preview:
        "Scheduled maintenance completed successfully. All systems operational. Next maintenance window: June 15, 2023.",
      time: "1 week ago",
      unread: false,
    },
  ]);

  // Update the active conversation with more detailed messages
  const [activeConversation, setActiveConversation] = useState<Conversation>({
    id: "conv-1",
    title: "AI Assistant",
    recipient: {
      name: "AI Assistant",
      avatar: "/images//placeholder.svg?height=200&width=200",
      status: "online",
      lastSeen: "Active now",
    },
    messages: [
      {
        id: "msg-1",
        role: "system",
        content:
          "Welcome to the AI Chat Admin Dashboard. How can I help you today?",
        timestamp: "11:55 AM",
      },
      {
        id: "msg-2",
        role: "user",
        content: "Show me the latest user statistics",
        timestamp: "11:59 AM",
        status: "read",
      },
      {
        id: "msg-3",
        role: "system",
        content:
          "Here are the latest user statistics:\n\n- Total users: 12,543\n- Active today: 1,243\n- New signups: 87\n- Average session time: 15 minutes\n\nThe user growth rate is 15% higher than last month. Would you like me to generate a detailed report?",
        timestamp: "11:59 AM",
        media: [
          {
            type: "image",
            url: "/images//placeholder.svg?height=300&width=500",
            caption: "User statistics chart - May 2023",
          },
        ],
      },
      {
        id: "msg-4",
        role: "user",
        content:
          "Yes, please generate a detailed report and include information about user engagement metrics",
        timestamp: "12:01 PM",
        status: "read",
      },
      {
        id: "msg-5",
        role: "system",
        content:
          "I've generated a detailed report with user engagement metrics. Here are the key findings:\n\n1. **Session Duration**: Average 15 minutes, up 12% from last month\n2. **Retention Rate**: 78% of users return within 7 days\n3. **Feature Usage**: Dashboard (65%), Chat (42%), Reports (38%)\n4. **User Satisfaction**: 4.7/5 based on feedback surveys\n\nThe full report has been saved to your documents folder. Would you like me to analyze any specific metric in more detail?",
        timestamp: "12:03 PM",
        media: [
          {
            type: "image",
            url: "/images//placeholder.svg?height=300&width=500",
            caption: "User engagement metrics - May 2023",
          },
        ],
      },
    ],
  });
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeConversation.messages]);

  // Filter conversations by search term
  const filteredConversations = conversations.filter(
    (conv) =>
      conv.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.preview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSetActive = (id: string) => {
    // Update active status in conversations list
    setConversations(
      conversations.map((conv) => ({
        ...conv,
        isActive: conv.id === id,
      }))
    );

    // In a real app, you would fetch the conversation details here
    // For now, just simulate switching conversations
    const newConversation = {
      ...activeConversation,
      id,
      title: conversations.find((c) => c.id === id)?.sender || "Conversation",
    };
    setActiveConversation(newConversation);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message to the active conversation
    const newUserMessage: DetailedMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "sent",
    };

    setActiveConversation((prev) => ({
      ...prev,
      messages: [...prev.messages, newUserMessage],
    }));

    setInputValue("");

    // Simulate AI response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);

      const aiResponse: DetailedMessage = {
        id: `msg-${Date.now() + 1}`,
        role: "system",
        content: `I've processed your request: "${inputValue}". This is a simulated response from the AI system.`,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setActiveConversation((prev) => ({
        ...prev,
        messages: [...prev.messages, aiResponse],
      }));
    }, 2000);
  };

  const toggleMessageOptions = (messageId: string) => {
    setSelectedMessage(selectedMessage === messageId ? null : messageId);
  };
  return (
    <Wrapper>
      <div className="flex-1 flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 h-full w-full overflow-hidden">
        {/* Messages List Panel - Make it responsive */}
        <div className="w-full md:w-80 lg:max-w-80 flex-shrink-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col h-full md:h-auto overflow-hidden">
          {/* Search and filters */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <input
                type="text"
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-gray-800 dark:text-gray-200"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            <div className="flex mt-3 justify-between">
              <div className="flex gap-2">
                <button className="flex items-center gap-1 py-1 px-2 text-xs font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Archive className="h-3.5 w-3.5" />
                  Archived
                </button>
                <button className="flex items-center gap-1 py-1 px-2 text-xs font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Star className="h-3.5 w-3.5" />
                  Starred
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="flex items-center gap-1 py-1 px-2 text-xs font-medium rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Filter className="h-3.5 w-3.5" />
                  Filter
                  <ChevronDown className="h-3 w-3" />
                </button>

                {filterOpen && (
                  <div className="absolute right-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-10">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      All messages
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Unread
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Flagged
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      With attachments
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Conversation list - Enhance with more details */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => handleSetActive(conversation.id)}
                className={`w-full flex items-start p-4 gap-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 relative ${
                  conversation.isActive
                    ? "bg-indigo-50 dark:bg-indigo-900/20"
                    : ""
                }`}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={conversation.avatar || "/placeholder.svg"}
                    alt={conversation.sender}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span
                    className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-gray-800 ${
                      conversation.id === "conv-1" ||
                      conversation.id === "conv-2"
                        ? "bg-green-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  ></span>
                </div>

                <div className="flex-1 min-w-0 text-left">
                  <div className="flex justify-between items-start">
                    <p
                      className={`text-sm font-medium truncate ${
                        conversation.unread
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {conversation.sender}
                    </p>
                    <span
                      className={`text-xs ${
                        conversation.unread
                          ? "text-indigo-600 dark:text-indigo-400 font-medium"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {conversation.time}
                    </span>
                  </div>

                  <p
                    className={`text-xs truncate mt-1 ${
                      conversation.unread
                        ? "text-gray-800 dark:text-gray-200"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {conversation.preview}
                  </p>

                  {/* Add message metadata indicators */}
                  <div className="flex items-center mt-1 gap-2">
                    {conversation.id === "conv-5" && (
                      <span className="px-1.5 py-0.5 text-xs rounded bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400">
                        High Priority
                      </span>
                    )}
                    {conversation.id === "conv-3" && (
                      <span className="px-1.5 py-0.5 text-xs rounded bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400">
                        Report
                      </span>
                    )}
                    {conversation.id === "conv-7" && (
                      <span className="px-1.5 py-0.5 text-xs rounded bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400">
                        Security
                      </span>
                    )}
                  </div>
                </div>

                {conversation.unread && (
                  <span className="h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400 flex-shrink-0 mt-2"></span>
                )}

                {conversation.pinned && (
                  <span className="absolute top-2 right-2 text-gray-400 dark:text-gray-500">
                    <Pin className="h-3 w-3" />
                  </span>
                )}
              </button>
            ))}

            {filteredConversations.length === 0 && (
              <div className="py-8 flex flex-col items-center justify-center text-center px-4">
                <AlertCircle className="h-8 w-8 text-gray-300 dark:text-gray-600 mb-2" />
                <p className="text-gray-500 dark:text-gray-400">
                  No conversations found
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                  Try adjusting your search
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Conversation Detail Panel - Improve responsiveness */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Conversation header - Enhanced with more details */}
          <div className="px-4 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center shadow-sm">
            <div className="flex items-center">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-medium">
                  {activeConversation.recipient.name.charAt(0)}
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-800"></span>
              </div>
              <div className="ml-3">
                <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                  {activeConversation.recipient.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
                  Active now • GPT-4o
                </p>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hidden md:flex">
                <Phone className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hidden md:flex">
                <Video className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Image className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages area - Enhanced with better styling */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto space-y-6">
              {/* Date separator */}
              <div className="flex justify-center">
                <div className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-500 dark:text-gray-400">
                  Today
                </div>
              </div>

              {/* Messages with improved styling */}
              {activeConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  } group`}
                >
                  {message.role === "system" && (
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-medium mr-3 mt-1 flex-shrink-0">
                      AI
                    </div>
                  )}

                  <div className="relative max-w-[85%] md:max-w-[70%]">
                    <div
                      className={`
                      rounded-2xl px-4 py-3 shadow-sm
                      ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-tr-none"
                          : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-tl-none"
                      }
                    `}
                    >
                      {/* Message content with markdown-like formatting */}
                      <div className="whitespace-pre-wrap">
                        {message.content.split("\n\n").map((paragraph, idx) => (
                          <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                            {paragraph.includes("**")
                              ? paragraph
                                  .split("**")
                                  .map((part, i) =>
                                    i % 2 === 1 ? (
                                      <strong key={i}>{part}</strong>
                                    ) : (
                                      part
                                    )
                                  )
                              : paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Media attachments with improved styling */}
                      {message.media && message.media.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {message.media.map((media, idx) => (
                            <div
                              key={idx}
                              className="rounded-lg overflow-hidden max-w-[300px] border border-gray-200 dark:border-gray-700"
                            >
                              {media.type === "image" ? (
                                <div className="relative">
                                  <img
                                    src={media.url || "/placeholder.svg"}
                                    alt={media.caption || "Image"}
                                    className="w-full h-auto rounded-t-lg object-cover"
                                    style={{ maxHeight: "200px" }}
                                  />
                                  {media.caption && (
                                    <div className="py-2 px-3 text-xs bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
                                      {media.caption}
                                    </div>
                                  )}
                                </div>
                              ) : (
                                <div className="relative">
                                  <video
                                    src={media.url}
                                    controls
                                    className="w-full h-auto rounded-t-lg"
                                    style={{ maxHeight: "200px" }}
                                  />
                                  {media.caption && (
                                    <div className="py-2 px-3 text-xs bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
                                      {media.caption}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Message metadata */}
                      <div
                        className={`text-xs mt-1 flex items-center ${
                          message.role === "user"
                            ? "text-indigo-100 justify-end"
                            : "text-gray-400"
                        }`}
                      >
                        {message.timestamp}
                        {message.role === "user" && message.status && (
                          <span className="ml-1">
                            {message.status === "sent" && "✓"}
                            {message.status === "delivered" && "✓✓"}
                            {message.status === "read" && (
                              <span className="text-blue-300">✓✓</span>
                            )}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message actions with improved positioning */}
                    <div
                      className={`
                      absolute top-2 ${
                        message.role === "user"
                          ? "left-0 -translate-x-[110%]"
                          : "right-0 translate-x-[110%]"
                      }
                      opacity-0 group-hover:opacity-100 transition-opacity
                    `}
                    >
                      <button
                        onClick={() => toggleMessageOptions(message.id)}
                        className="p-1 rounded-full bg-white dark:bg-gray-700 shadow-md text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>

                      {/* Message options dropdown with enhanced options */}
                      {selectedMessage === message.id && (
                        <div
                          className={`
                          absolute z-50 ${
                            message.role === "user"
                              ? "left-0 top-8"
                              : "right-0 top-8"
                          }
                          w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1
                        `}
                        >
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                            <Copy className="h-4 w-4 mr-2" />
                            Copy text
                          </button>
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                            <Bookmark className="h-4 w-4 mr-2" />
                            Save message
                          </button>
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                            <Share2 className="h-4 w-4 mr-2" />
                            Forward
                          </button>
                          {message.media && (
                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                              <Download className="h-4 w-4 mr-2" />
                              Download media
                            </button>
                          )}
                          <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                          <button className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {message.role === "user" && (
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-medium ml-3 mt-1 flex-shrink-0">
                      You
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator with improved animation */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-medium mr-3 mt-1">
                    AI
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl px-4 py-3 shadow-sm rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce"></div>
                      <div
                        className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Message input with enhanced features */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800 w-full">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative">
                <div className="flex items-center bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 focus-within:ring-2 focus-within:ring-indigo-500 dark:focus-within:ring-indigo-400 focus-within:border-transparent">
                  {/* Attachment button */}
                  <button
                    type="button"
                    className="p-3 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Paperclip className="h-5 w-5" />
                  </button>

                  {/* Input field */}
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 py-3 px-2 text-gray-800 dark:text-white"
                  />

                  {/* Emoji button */}
                  <button
                    type="button"
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className="p-3 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Smile className="h-5 w-5" />
                  </button>

                  {/* Mic button */}
                  <button
                    type="button"
                    className="p-3 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Mic className="h-5 w-5" />
                  </button>

                  {/* Send button */}
                  <button
                    type="submit"
                    className="p-3 rounded-r-2xl bg-gradient-to-r from-indigo-600 to-purple-700 text-white disabled:opacity-50"
                    disabled={!inputValue.trim()}
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>

                {/* Emoji picker (enhanced) */}
                {showEmojiPicker && (
                  <div className="absolute bottom-full mb-2 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2 w-64 h-48 overflow-y-auto z-50">
                    <div className="grid grid-cols-8 gap-1">
                      {[
                        "😀",
                        "😂",
                        "😊",
                        "😍",
                        "🥰",
                        "😎",
                        "🤔",
                        "🙄",
                        "😴",
                        "😭",
                        "😱",
                        "😡",
                        "🥳",
                        "🤯",
                        "🤗",
                        "👍",
                        "👎",
                        "👏",
                        "🙏",
                        "💪",
                        "🤝",
                        "💯",
                        "❤️",
                        "🔥",
                        "👋",
                        "🤞",
                        "✌️",
                        "🤟",
                        "🤙",
                        "👌",
                        "👉",
                        "👈",
                        "🙌",
                        "🤲",
                        "👐",
                        "🤦",
                        "🤷",
                        "💁",
                        "🙆",
                        "🙅",
                        "🎉",
                        "🎊",
                        "🎁",
                        "🎈",
                        "🎂",
                        "🍕",
                        "🍔",
                        "🍟",
                      ].map((emoji, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setInputValue((prev) => prev + emoji);
                            setShowEmojiPicker(false);
                          }}
                          className="text-2xl p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                AI Assistant may produce inaccurate information about people,
                places, or facts.
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Messages;
