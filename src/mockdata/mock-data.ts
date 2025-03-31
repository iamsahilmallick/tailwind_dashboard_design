export const UserProfileMock = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    role: "Administrator",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    website: "https://example.com",
    bio: "AI enthusiast and technology advocate with over 10 years of experience in software development and machine learning.",
    avatar: "/placeholder.svg?height=200&width=200",
    stats: {
      conversations: 245,
      aiModelsUsed: 8,
      tokensUsed: "1.2M",
      savedResponses: 42,
    },
    recentActivity: [
      {
        id: 1,
        type: "conversation",
        title: "Data analysis project",
        date: "2 hours ago",
      },
      {
        id: 2,
        type: "settings",
        title: "Updated security preferences",
        date: "1 day ago",
      },
      { id: 3, type: "model", title: "Tried GPT-4o model", date: "3 days ago" },
      {
        id: 4,
        type: "conversation",
        title: "Marketing strategy brainstorm",
        date: "1 week ago",
      },
    ],
  };

  export const todoItems = [
    { id: 1, title: "Review new user signups", priority: "high", dueDate: "Today", completed:false },
    { id: 2, title: "Update AI model parameters", priority: "medium", dueDate: "Tomorrow" ,completed:false},
    { id: 3, title: "Prepare monthly analytics report", priority: "high", dueDate: "In 2 days",completed:false },
    { id: 4, title: "Schedule system maintenance", priority: "low", dueDate: "Next week",completed:false },
    { id: 5, title: "Review API documentation", priority: "medium", dueDate: "Friday",completed:false },
  ]

  export const dashboardMetrics = {
    activeUsers: 1243,
    totalConversations: 8765,
    aiResponseTime: "1.2s",
    userSatisfaction: "94%",
    newUsers: 87,
    totalTokensUsed: "1.2M",
    activeModels: 5,
    errorRate: "0.3%",
  }

  export const mockNotifications = [
    { id: 1, message: "New message from John Doe", read: false, userImg: "/images/placeholder.svg" },
    { id: 2, message: "Your report has been approved", read: true, userImg: "/images/placeholder.svg" },
    { id: 3, message: "Reminder: Meeting at 3 PM", read: false, userImg: "/images/placeholder.svg" },
    { id: 4, message: "New comment on your post", read: true, userImg: "/images/placeholder.svg" },
    { id: 5, message: "Invoice #456 has been paid", read: false, userImg: "/images/placeholder.svg" },
    { id: 6, message: "Password changed successfully", read: true, userImg: "/images/placeholder.svg" },
    { id: 7, message: "Your subscription expires soon", read: false, userImg: "/images/placeholder.svg" },
    { id: 8, message: "New friend request received", read: false, userImg: "/images/placeholder.svg" },
    { id: 9, message: "Your post got 5 new likes", read: true, userImg: "/images/placeholder.svg" },
    { id: 10, message: "System update completed", read: false, userImg: "/images/placeholder.svg" },
  ];