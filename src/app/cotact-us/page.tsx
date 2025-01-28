import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-orange-300 to-white p-10 flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-6">
        {/* Contact Info */}
        <Card className="w-full md:w-1/3 bg-white shadow-lg p-6">
          <CardContent className="space-y-4">
            <h2 className="text-xl font-bold">Get In Touch!</h2>
            <p>Fill up the form and our team will get back to you within 24 hours.</p>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-5 h-5 text-orange-500" />
              <span>+25 365 248 1768</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-5 h-5 text-orange-500" />
              <span>contact@digital.com</span>
            </div>
          </CardContent>
        </Card>
        
        {/* Form */}
        <Card className="w-full md:w-2/3 bg-white shadow-lg p-6">
          <CardContent className="space-y-4">
            <Input placeholder="Name and Surname" className="w-full" />
            <Input placeholder="Email Address" className="w-full" />
            <Textarea placeholder="Message" className="w-full" rows={4} />
            <Button className="w-full bg-orange-500 hover:bg-orange-600">Send Message</Button>
          </CardContent>
        </Card>
      </div>
      
      {/* Map Section */}
      <Card className="w-full h-96 mt-10 shadow-lg">
        <CardContent className="w-full h-full">
        </CardContent>
      </Card>
    </div>
  );
}