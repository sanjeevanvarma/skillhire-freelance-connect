
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, User, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Join = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("client");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up attempt with:", { name, email, phone, password, userType });
    // In a real app, you'd handle registration here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-skill-gray-light p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold text-skill-purple">SkillHire</h1>
          </Link>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
            <CardDescription className="text-center">
              Join our community of professionals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="client" className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger 
                  value="client" 
                  onClick={() => setUserType("client")}
                  className="flex items-center justify-center"
                >
                  <User className="w-4 h-4 mr-2" />
                  <span>I'm a Client</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="freelancer" 
                  onClick={() => setUserType("freelancer")}
                  className="flex items-center justify-center"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>I'm a Freelancer</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="client">
                <p className="text-sm text-skill-gray-neutral mt-2">
                  Sign up as a client to hire talented professionals for your projects.
                </p>
              </TabsContent>
              <TabsContent value="freelancer">
                <p className="text-sm text-skill-gray-neutral mt-2">
                  Sign up as a freelancer to offer your professional services and skills.
                </p>
              </TabsContent>
            </Tabs>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <p className="text-xs text-skill-gray-neutral mt-1">
                    Password must be at least 8 characters long with at least one uppercase letter, number, and special character.
                  </p>
                </div>
                
                <div className="pt-2">
                  <Button type="submit" className="w-full btn-primary">
                    Create Account
                  </Button>
                </div>
              </div>
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-skill-gray-neutral">
                    Or sign up with
                  </span>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  Facebook
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-skill-gray-neutral">
              Already have an account?{" "}
              <Link to="/signin" className="text-skill-purple hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Join;
