"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Upload, Calendar, Clock, MapPin, Users, CheckCircle, ArrowRight, Mic2, Music, Video } from "lucide-react"
import { useState } from "react"

const openAuditions = [
  {
    id: 1,
    title: "Summer Music Festival 2026",
    organizer: "Global Music Events",
    deadline: "May 15, 2026",
    location: "Los Angeles, CA",
    genre: "All Genres",
    slots: 50,
    filled: 32,
    description: "Join the biggest summer music festival of the year. All genres welcome.",
  },
  {
    id: 2,
    title: "Jazz Ensemble Auditions",
    organizer: "Blue Note Records",
    deadline: "April 25, 2026",
    location: "New York, NY",
    genre: "Jazz",
    slots: 10,
    filled: 7,
    description: "Looking for talented jazz musicians to join our ensemble for a national tour.",
  },
  {
    id: 3,
    title: "R&B Showcase Night",
    organizer: "Soul Sessions",
    deadline: "April 30, 2026",
    location: "Atlanta, GA",
    genre: "R&B / Soul",
    slots: 20,
    filled: 12,
    description: "Showcase your R&B talents at our monthly artist showcase event.",
  },
  {
    id: 4,
    title: "Hip Hop Battle Royale",
    organizer: "Urban Beats",
    deadline: "May 5, 2026",
    location: "Chicago, IL",
    genre: "Hip Hop",
    slots: 30,
    filled: 25,
    description: "Compete against the best hip hop artists in this ultimate battle.",
  },
]

const requirements = [
  { icon: Mic2, title: "Audio Recording", description: "Submit at least 2 original tracks or covers" },
  { icon: Video, title: "Video Demo", description: "Optional but recommended performance video" },
  { icon: Music, title: "Portfolio", description: "Links to your music on streaming platforms" },
]

export default function AuditionsPage() {
  const [submissionType, setSubmissionType] = useState<string>("")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Audition Portal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Your Stage Awaits
            </h1>
            <p className="text-lg text-muted-foreground">
              Submit your auditions for upcoming events, showcases, and opportunities. 
              Get discovered by industry professionals and take your career to the next level.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="browse" className="w-full">
            <TabsList className="bg-card border border-border mb-8">
              <TabsTrigger value="browse" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Browse Auditions
              </TabsTrigger>
              <TabsTrigger value="submit" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Submit Audition
              </TabsTrigger>
            </TabsList>

            {/* Browse Auditions */}
            <TabsContent value="browse">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6">Open Auditions</h2>
                  <div className="space-y-4">
                    {openAuditions.map((audition) => (
                      <Card key={audition.id} className="bg-card border-border hover:border-primary/50 transition-colors">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline">{audition.genre}</Badge>
                                <span className="text-xs text-muted-foreground">
                                  by {audition.organizer}
                                </span>
                              </div>
                              <h3 className="text-xl font-semibold mb-2">{audition.title}</h3>
                              <p className="text-muted-foreground text-sm mb-4">
                                {audition.description}
                              </p>
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  {audition.deadline}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {audition.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  {audition.filled}/{audition.slots} spots filled
                                </span>
                              </div>
                            </div>
                            <Button className="shrink-0">
                              Apply Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                          <div className="mt-4">
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary rounded-full transition-all"
                                style={{ width: `${(audition.filled / audition.slots) * 100}%` }}
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle>Submission Requirements</CardTitle>
                      <CardDescription>
                        Make sure your audition meets these criteria
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {requirements.map((req) => (
                        <div key={req.title} className="flex gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <req.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{req.title}</h4>
                            <p className="text-xs text-muted-foreground">{req.description}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/10 border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Need Help?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Our team is here to help you with your audition submission.
                      </p>
                      <Button variant="outline" className="w-full">
                        Contact Support
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Submit Audition */}
            <TabsContent value="submit">
              <div className="max-w-2xl mx-auto">
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle>Submit Your Audition</CardTitle>
                    <CardDescription>
                      Fill out the form below to submit your audition for review
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <FieldGroup>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Field>
                            <FieldLabel>First Name</FieldLabel>
                            <Input placeholder="John" />
                          </Field>
                          <Field>
                            <FieldLabel>Last Name</FieldLabel>
                            <Input placeholder="Doe" />
                          </Field>
                        </div>
                      </FieldGroup>

                      <FieldGroup>
                        <Field>
                          <FieldLabel>Email Address</FieldLabel>
                          <Input type="email" placeholder="john@example.com" />
                        </Field>
                      </FieldGroup>

                      <FieldGroup>
                        <Field>
                          <FieldLabel>Select Audition</FieldLabel>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose an audition" />
                            </SelectTrigger>
                            <SelectContent>
                              {openAuditions.map((audition) => (
                                <SelectItem key={audition.id} value={audition.id.toString()}>
                                  {audition.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </Field>
                      </FieldGroup>

                      <FieldGroup>
                        <Field>
                          <FieldLabel>Genre / Style</FieldLabel>
                          <Select value={submissionType} onValueChange={setSubmissionType}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your genre" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pop">Pop</SelectItem>
                              <SelectItem value="rnb">R&B / Soul</SelectItem>
                              <SelectItem value="hiphop">Hip Hop</SelectItem>
                              <SelectItem value="jazz">Jazz</SelectItem>
                              <SelectItem value="rock">Rock</SelectItem>
                              <SelectItem value="electronic">Electronic</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </Field>
                      </FieldGroup>

                      <FieldGroup>
                        <Field>
                          <FieldLabel>About You</FieldLabel>
                          <Textarea 
                            placeholder="Tell us about yourself, your musical background, and what makes you unique..."
                            rows={4}
                          />
                        </Field>
                      </FieldGroup>

                      <FieldGroup>
                        <Field>
                          <FieldLabel>Upload Media</FieldLabel>
                          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                            <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                            <p className="text-sm text-muted-foreground mb-2">
                              Drag and drop your files here, or click to browse
                            </p>
                            <p className="text-xs text-muted-foreground">
                              MP3, WAV, MP4 files up to 100MB
                            </p>
                          </div>
                        </Field>
                      </FieldGroup>

                      <FieldGroup>
                        <Field>
                          <FieldLabel>Links to Your Music</FieldLabel>
                          <Input placeholder="Spotify, SoundCloud, YouTube links..." />
                        </Field>
                      </FieldGroup>

                      <Button type="submit" size="lg" className="w-full">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Submit Audition
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}
