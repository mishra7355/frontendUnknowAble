import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "Unknowable transformed our business operations completely. Their expertise and dedication helped us scale from 10 to 100 employees in just 18 months.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechVision Inc.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b9c3c995?w=64&h=64&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "The team's strategic insights and implementation support were instrumental in our successful Series A funding. Highly recommend their services.",
      author: "Michael Chen",
      role: "CTO",
      company: "DataFlow Solutions",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      rating: 5,
    },
    {
      quote:
        "Outstanding results! Their consulting helped us optimize our processes and increase revenue by 300% within the first year of partnership.",
      author: "Emily Rodriguez",
      role: "Founder",
      company: "GrowthLabs",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See how we've helped businesses
            like yours achieve exceptional growth and success.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border border-border p-8 md:p-12 text-center">
            {/* Quote */}
            <div className="mb-8">
              <Icon
                name="Quote"
                size={40}
                color="var(--color-primary)"
                className="mx-auto mb-6 opacity-60"
              />
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                "{testimonials[activeTestimonial]?.quote}"
              </p>
            </div>

            {/* Author Info */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                <Icon
                  name="User"
                  size={24}
                  color="var(--color-muted-foreground)"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  {testimonials[activeTestimonial]?.author}
                </h4>
                <p className="text-muted-foreground">
                  {testimonials[activeTestimonial]?.role},{" "}
                  {testimonials[activeTestimonial]?.company}
                </p>
              </div>

              {/* Rating */}
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Icon
                    key={index}
                    name="Star"
                    size={16}
                    color={
                      index < testimonials[activeTestimonial]?.rating
                        ? "var(--color-accent)"
                        : "var(--color-muted)"
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === activeTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
