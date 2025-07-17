import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import Icon from "../../../components/AppIcon";
import { contactAPI, apiUtils } from "../../../services/api";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    serviceInterest: "",
    projectTimeline: "",
    budgetRange: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    { value: "web-development", label: "Web Development" },
    { value: "mobile-app", label: "Mobile App Development" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "consulting", label: "Business Consulting" },
    { value: "other", label: "Other Services" },
  ];

  const timelineOptions = [
    { value: "asap", label: "ASAP" },
    { value: "1-month", label: "Within 1 Month" },
    { value: "2-3-months", label: "2-3 Months" },
    { value: "3-6-months", label: "3-6 Months" },
    { value: "6-months-plus", label: "6+ Months" },
    { value: "flexible", label: "Flexible Timeline" },
  ];

  const budgetOptions = [
    { value: "under-5k", label: "Under $5,000" },
    { value: "5k-15k", label: "$5,000 - $15,000" },
    { value: "15k-50k", label: "$15,000 - $50,000" },
    { value: "50k-100k", label: "$50,000 - $100,000" },
    { value: "over-100k", label: "Over $100,000" },
    { value: "discuss", label: "Let's Discuss" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user makes selection
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = "Please select a service";
    }

    if (!formData.projectTimeline) {
      newErrors.projectTimeline = "Please select a timeline";
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = "Please select a budget range";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await contactAPI.submitForm(formData);

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          serviceInterest: "",
          projectTimeline: "",
          budgetRange: "",
          message: "",
        });
      } else {
        // Handle validation errors from backend
        if (apiUtils.isValidationError(result)) {
          const backendErrors = {};
          result.details.forEach((detail) => {
            backendErrors[detail.param || detail.field] =
              detail.message || detail.msg;
          });
          setErrors(backendErrors);
        } else {
          setSubmitStatus("error");
          console.error("Form submission error:", result.error);
        }
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRetry = () => {
    setSubmitStatus(null);
    setErrors({});
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-card rounded-lg border border-border p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} color="var(--color-success)" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Thank You for Your Inquiry!
        </h3>
        <p className="text-muted-foreground mb-6">
          We've received your message and will get back to you within 24 hours.
          Our team is excited to discuss your project!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            onClick={() => setSubmitStatus(null)}
            iconName="Plus"
            iconPosition="left"
          >
            Submit Another Inquiry
          </Button>
          <Button variant="default" iconName="Calendar" iconPosition="left">
            Schedule a Call Instead
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Get in Touch
        </h2>
        <p className="text-muted-foreground">
          Ready to start your project? Fill out the form below and we'll get
          back to you within 24 hours.
        </p>
      </div>

      {submitStatus === "error" && (
        <div className="bg-error/10 border border-error/20 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="AlertCircle" size={20} color="var(--color-error)" />
            <h4 className="font-medium text-error">Submission Failed</h4>
          </div>
          <p className="text-error/80 text-sm mb-3">
            There was an error submitting your form. Please try again or contact
            us directly.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRetry}
            iconName="RefreshCw"
            iconPosition="left"
          >
            Try Again
          </Button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
            required
          />
          <Input
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
            required
          />
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="your.email@company.com"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
            required
          />
        </div>

        {/* Company */}
        <Input
          label="Company Name"
          type="text"
          name="company"
          placeholder="Your Company Name"
          value={formData.company}
          onChange={handleInputChange}
          error={errors.company}
          required
        />

        {/* Service Interest */}
        <Select
          label="Service Interest"
          placeholder="Select the service you're interested in"
          options={serviceOptions}
          value={formData.serviceInterest}
          onChange={(value) => handleSelectChange("serviceInterest", value)}
          error={errors.serviceInterest}
          required
        />

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Project Timeline"
            placeholder="When do you need this completed?"
            options={timelineOptions}
            value={formData.projectTimeline}
            onChange={(value) => handleSelectChange("projectTimeline", value)}
            error={errors.projectTimeline}
            required
          />
          <Select
            label="Budget Range"
            placeholder="Select your budget range"
            options={budgetOptions}
            value={formData.budgetRange}
            onChange={(value) => handleSelectChange("budgetRange", value)}
            error={errors.budgetRange}
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Project Details <span className="text-error">*</span>
          </label>
          <textarea
            name="message"
            rows={6}
            placeholder="Tell us about your project, goals, and any specific requirements..."
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md text-sm transition-smooth resize-none ${
              errors.message
                ? "border-error focus:border-error focus:ring-error/20"
                : "border-border focus:border-primary focus:ring-primary/20"
            } focus:outline-none focus:ring-2`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-error">{errors.message}</p>
          )}
          <p className="mt-1 text-xs text-muted-foreground">
            Minimum 20 characters required
          </p>
        </div>

        {/* Privacy Notice */}
        <div className="bg-muted/50 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <Icon
              name="Shield"
              size={16}
              color="var(--color-primary)"
              className="mt-0.5"
            />
            <div className="text-sm">
              <p className="text-foreground font-medium mb-1">
                Privacy Protected
              </p>
              <p className="text-muted-foreground">
                Your information is secure and will only be used to respond to
                your inquiry. We never share your data with third parties.
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            loading={isSubmitting}
            iconName="Send"
            iconPosition="left"
            className="flex-1"
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            className="flex-1 sm:flex-none"
          >
            <Link to="/meeting-scheduling-integration">
              Schedule Call Instead
            </Link>
          </Button>
        </div>

        {/* Response Time */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            <Icon name="Clock" size={14} className="inline mr-1" />
            We typically respond within 2-4 hours during business hours
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
