'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { TrainIcon, SearchIcon, AlertTriangleIcon, CheckCircleIcon, ClockIcon, BarChartIcon, MessageSquareIcon, UserIcon, TrendingUpIcon, BrainCircuitIcon, CameraIcon, MicIcon } from 'lucide-react'

// Mock data for demonstration
const complaints = [
  { id: 'RM123456', category: 'Cleanliness', urgency: 'High', status: 'Open', timestamp: '2023-05-15 10:30', aiConfidence: 95, mediaType: 'image' },
  { id: 'RM123457', category: 'Staff Behavior', urgency: 'Medium', status: 'In Progress', timestamp: '2023-05-15 11:45', aiConfidence: 88, mediaType: 'video' },
  { id: 'RM123458', category: 'Delay', urgency: 'Low', status: 'Resolved', timestamp: '2023-05-14 09:15', aiConfidence: 92, mediaType: 'text' },
  { id: 'RM123459', category: 'Amenities', urgency: 'Medium', status: 'Open', timestamp: '2023-05-14 14:20', aiConfidence: 85, mediaType: 'audio' },
  { id: 'RM123460', category: 'Safety', urgency: 'High', status: 'In Progress', timestamp: '2023-05-13 16:55', aiConfidence: 97, mediaType: 'image' },
]

const categoryData = [
  { name: 'Cleanliness', value: 35 },
  { name: 'Staff Behavior', value: 25 },
  { name: 'Delay', value: 20 },
  { name: 'Amenities', value: 15 },
  { name: 'Safety', value: 5 },
]

const trendData = [
  { name: 'Week 1', complaints: 120, resolutionTime: 3.2 },
  { name: 'Week 2', complaints: 132, resolutionTime: 2.9 },
  { name: 'Week 3', complaints: 101, resolutionTime: 3.1 },
  { name: 'Week 4', complaints: 134, resolutionTime: 2.7 },
  { name: 'Week 5', complaints: 90, resolutionTime: 2.5 },
]

const aiAccuracyData = [
  { name: 'Correct', value: 85 },
  { name: 'Incorrect', value: 15 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function AdvancedAdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('All')

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open':
        return <AlertTriangleIcon className="h-4 w-4 text-red-500" />
      case 'In Progress':
        return <ClockIcon className="h-4 w-4 text-yellow-500" />
      case 'Resolved':
        return <CheckCircleIcon className="h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  const getMediaIcon = (mediaType: string) => {
    switch (mediaType) {
      case 'image':
        return <CameraIcon className="h-4 w-4" />
      case 'video':
        return <CameraIcon className="h-4 w-4" />
      case 'audio':
        return <MicIcon className="h-4 w-4" />
      default:
        return null
    }
  }

  const filteredComplaints = complaints.filter(complaint =>
    (complaint.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    complaint.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterCategory === 'All' || complaint.category === filterCategory)
  )

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="bg-blue-600 text-white p-6 rounded-lg flex items-center space-x-4 mb-8">
          <TrainIcon className="h-10 w-10" />
          <div>
            <h1 className="text-2xl font-bold">Rail Madad AI Admin Dashboard</h1>
            <p>Advanced Intelligent Complaint Management System</p>
          </div>
        </header>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="complaints">Complaints</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="ai-performance">AI Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Complaints</CardTitle>
                  <MessageSquareIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Resolution Time</CardTitle>
                  <ClockIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.5 days</div>
                  <p className="text-xs text-muted-foreground">-10% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">AI Accuracy</CardTitle>
                  <BrainCircuitIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">95%</div>
                  <p className="text-xs text-muted-foreground">+3% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">User Satisfaction</CardTitle>
                  <UserIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.7/5</div>
                  <p className="text-xs text-muted-foreground">Based on 500 reviews</p>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Complaint Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="complaints" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey="resolutionTime" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="complaints">
            <Card>
              <CardHeader>
                <CardTitle>Recent Complaints</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Search complaints..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="max-w-sm"
                    />
                    <Select value={filterCategory} onValueChange={setFilterCategory}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All Categories</SelectItem>
                        <SelectItem value="Cleanliness">Cleanliness</SelectItem>
                        <SelectItem value="Staff Behavior">Staff Behavior</SelectItem>
                        <SelectItem value="Delay">Delay</SelectItem>
                        <SelectItem value="Amenities">Amenities</SelectItem>
                        <SelectItem value="Safety">Safety</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button>
                    <SearchIcon className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Urgency</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>AI Confidence</TableHead>
                      <TableHead>Media</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredComplaints.map((complaint) => (
                      <TableRow key={complaint.id}>
                        <TableCell>{complaint.id}</TableCell>
                        <TableCell>{complaint.category}</TableCell>
                        <TableCell>
                          <Badge variant={complaint.urgency === 'High' ? 'destructive' : complaint.urgency === 'Medium' ? 'default' : 'secondary'}>
                            {complaint.urgency}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {getStatusIcon(complaint.status)}
                            <span className="ml-2">{complaint.status}</span>
                          </div>
                        </TableCell>
                        <TableCell>{complaint.timestamp}</TableCell>
                        <TableCell>
                          <Badge variant={complaint.aiConfidence >= 90 ? 'default' : 'secondary'}>
                            {complaint.aiConfidence}%
                          </Badge>
                        </TableCell>
                        <TableCell>{getMediaIcon(complaint.mediaType)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Complaint Categories Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Resolution Time by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={categoryData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>User Satisfaction by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={cell-${index}} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ai-performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>AI Accuracy Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="complaints" stroke="#8884d8" name="AI Accuracy %" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>AI Categorization Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={aiAccuracyData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {aiAccuracyData.map((entry, index) => (
                          <Cell key={cell-${index}} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AI Performance by Media Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={[
                      { name: 'Image', accuracy: 96 },
                      { name: 'Video', accuracy: 92 },
                      { name: 'Audio', accuracy: 88 },
                      { name: 'Text', accuracy: 98 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="accuracy" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}