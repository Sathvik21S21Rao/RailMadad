
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { TrainIcon, CameraIcon, AudioLinesIcon, SendIcon, Loader2Icon, AlertTriangleIcon, ThumbsUpIcon, BellIcon } from 'lucide-react'

export default function InteractiveComplaintForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [complaintId, setComplaintId] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setComplaintId('RM' + Math.floor(100000 + Math.random() * 900000))
    setIsSubmitting(false)
    setStep(4)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <Label htmlFor="complaint">What's your complaint?</Label>
            <Textarea id="complaint" placeholder="Type your complaint here..." className="h-32" required />
            <Button onClick={() => setStep(2)} className="w-full">Next</Button>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <Label>Attach evidence (optional)</Label>
            <div className="flex space-x-2">
              <Button type="button" variant="outline" size="icon">
                <CameraIcon className="h-4 w-4" />
              </Button>
              <Button type="button" variant="outline" size="icon">
                <AudioLinesIcon className="h-4 w-4" />
              </Button>
              <Input id="media" type="file" accept="image/,video/,audio/*" className="flex-1" />
            </div>
            <div className="flex space-x-2">
              <Button onClick={() => setStep(1)} variant="outline" className="w-1/2">Back</Button>
              <Button onClick={() => setStep(3)} className="w-1/2">Next</Button>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <Label>How urgent is your complaint?</Label>
            <RadioGroup defaultValue="medium">
              <div className="flex items-center space-x-2 p-2 bg-green-100 rounded">
                <RadioGroupItem value="low" id="low" />
                <Label htmlFor="low">Low <ThumbsUpIcon className="inline h-4 w-4 ml-2" /></Label>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-yellow-100 rounded">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">Medium <BellIcon className="inline h-4 w-4 ml-2" /></Label>
              </div>
              <div className="flex items-center space-x-2 p-2 bg-red-100 rounded">
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high">High <AlertTriangleIcon className="inline h-4 w-4 ml-2" /></Label>
              </div>
            </RadioGroup>
            <div className="flex space-x-2">
              <Button onClick={() => setStep(2)} variant="outline" className="w-1/2">Back</Button>
              <Button onClick={handleSubmit} className="w-1/2" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                    Processing
                  </>
                ) : (
                  <>
                    <SendIcon className="mr-2 h-4 w-4" />
                    Submit
                  </>
                )}
              </Button>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="text-center space-y-4">
            <div className="text-2xl font-bold text-green-600">Complaint Registered!</div>
            <div>Your complaint ID: <span className="font-bold">{complaintId}</span></div>
            <Button onClick={() => setStep(1)} className="w-full">New Complaint</Button>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-blue-600 text-white p-6 rounded-t-lg flex items-center space-x-4">
          <TrainIcon className="h-10 w-10" />
          <div>
            <h1 className="text-2xl font-bold">Rail Madad AI</h1>
            <p>Interactive Complaint System</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-b-lg shadow-md">
          <div className="mb-6 flex justify-between">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {i}
              </div>
            ))}
          </div>
          {renderStep()}
        </div>
      </div>
    </div>
  )
}