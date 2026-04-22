"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, Building } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team will respond within 24 hours",
    value: "hello@edwinsplatform.com",
    link: "mailto:hello@edwinsplatform.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm EST",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our HQ",
    value: "123 Music Avenue, New York, NY 10001",
    link: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "We're here to help",
    value: "Monday - Friday: 9am - 6pm EST",
    link: null,
  },
]

const departments = [
  {
    icon: Headphones,
    title: "Support",
    description: "Get help with your account, auditions, or technical issues",
    email: "support@edwinsplatform.com",
  },
  {
    icon: MessageSquare,
    title: "Artists Relations",
    description: "Questions about partnerships or featured opportunities",
    email: "artists@edwinsplatform.com",
  },
  {
    icon: Building,
    title: "Business Inquiries",
    description: "Sponsorships, venue partnerships, and corporate events",
    email: "business@edwinsplatform.com",
  },
]

const faqs = [
  {
    question: "How do I submit an audition?",
    answer: "Visit our Auditions page, select an open audition, and fill out the submission form with your media files and portfolio links.",
  },
  {
    question: "What are the accepted file formats?",
    answer: "We accept MP3 and WAV for audio files, and MP4 for video submissions. Maximum file size is 100MB.",
  },
  {
    question: "How long does the review process take?",
    answer: "Audition reviews typically take 1-2 weeks. You'll receive an email notification once your submission has been reviewed.",
  },
  {
    question: "Can I edit my submission after submitting?",
    answer: "Yes, you can update your submission until the audition deadline. Log into your account and navigate to your submissions.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              We&apos;d Love to Hear From You
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about auditions, performances, or partnerships? 
              Our team is here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <Card key={info.title} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{info.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{info.description}</p>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-sm text-primary hover:underline break-words"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-sm text-foreground">{info.value}</span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as soon as possible
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
                        <FieldLabel>Department</FieldLabel>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="artists">Artists Relations</SelectItem>
                            <SelectItem value="business">Business Inquiries</SelectItem>
                            <SelectItem value="press">Press & Media</SelectItem>
                          </SelectContent>
                        </Select>
                      </Field>
                    </FieldGroup>

                    <FieldGroup>
                      <Field>
                        <FieldLabel>Subject</FieldLabel>
                        <Input placeholder="How can we help you?" />
                      </Field>
                    </FieldGroup>

                    <FieldGroup>
                      <Field>
                        <FieldLabel>Message</FieldLabel>
                        <Textarea 
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                        />
                      </Field>
                    </FieldGroup>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Departments */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Contact by Department</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {departments.map((dept) => (
                    <div key={dept.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <dept.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{dept.title}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{dept.description}</p>
                        <a href={`mailto:${dept.email}`} className="text-xs text-primary hover:underline">
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                      <h4 className="font-medium text-sm mb-2">{faq.question}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="bg-card border-border overflow-hidden">
            <div className="aspect-[21/9] bg-secondary flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
                <p className="text-sm text-muted-foreground">123 Music Avenue, New York, NY 10001</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
