"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Star, ChefHat, Users, MessageCircle, HelpCircle, Calendar, Instagram, Linkedin, Twitter, Globe } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Team", id: "team" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bella Vista"
          logoSrc="https://images.pexels.com/photos/34450955/pexels-photo-34450955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Authentic Italian Dining Experience"
          description="Discover the finest traditional Italian cuisine crafted with passion and served with warmth. Every dish tells a story of heritage and flavor."
          tag="Fine Dining"
          tagIcon={Award}
          buttons={[
            { text: "Reserve Table", href: "contact" },
            { text: "View Menu", href: "menu" }
          ]}
          imageSrc="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant modern bar with lush indoor greenery and stylish furnishings in Baghdad."
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded in 1987 by the Rossi family, Bella Vista has been serving authentic Italian cuisine for over three decades.",
            "Our passion for traditional recipes, combined with the freshest local ingredients, creates an unforgettable dining experience that brings families together."
          ]}
          buttons={[
            { text: "Learn More", href: "team" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Why Choose Bella Vista"
          description="Experience the perfect blend of authentic Italian traditions and modern culinary excellence"
          tag="Excellence"
          tagIcon={Star}
          features={[
            {
              id: "01",
              title: "Romantic Ambiance",
              description: "Intimate lighting and elegant décor create the perfect atmosphere for memorable dining experiences",
              imageSrc: "https://images.pexels.com/photos/6670664/pexels-photo-6670664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "An intimate candlelit dinner setting with hands holding glasses of red wine, creating a warm ambiance."
            },
            {
              id: "02",
              title: "Authentic Cuisine",
              description: "Traditional Italian recipes passed down through generations, prepared with the finest imported ingredients",
              imageSrc: "https://images.pexels.com/photos/34450950/pexels-photo-34450950.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Free stock photo of artistic, birthday, cake"
            },
            {
              id: "03",
              title: "Exceptional Service",
              description: "Our dedicated staff provides attentive, personalized service to make every visit extraordinary",
              imageSrc: "https://images.pexels.com/photos/15761595/pexels-photo-15761595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A waiter serves gourmet appetizers, including mini burgers, to patrons inside a bustling restaurant."
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Signature Dishes"
          description="Explore our carefully curated selection of traditional Italian favorites"
          tag="Menu"
          tagIcon={ChefHat}
          products={[
            {
              id: "1",
              name: "Osso Buco alla Milanese",
              price: "$42",
              imageSrc: "https://images.pexels.com/photos/34434634/pexels-photo-34434634.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Close-up of a person holding a seafood pasta dish while seated, dressed in a stylish pinstripe suit."
            },
            {
              id: "2",
              name: "Bistecca alla Fiorentina",
              price: "$58",
              imageSrc: "https://images.pexels.com/photos/5713763/pexels-photo-5713763.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Appetizing gourmet wraps filled with fresh vegetables on a stylish plate."
            },
            {
              id: "3",
              name: "Tiramisu della Casa",
              price: "$14",
              imageSrc: "https://images.pexels.com/photos/33033816/pexels-photo-33033816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A selection of gourmet dishes beautifully presented in a Tokyo restaurant."
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Culinary Team"
          description="The passionate professionals who bring authentic Italian flavors to your table"
          tag="Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Executive Chef",
              description: "Third-generation chef with 25 years of experience in traditional Italian cuisine. Trained in Bologna and Tuscany.",
              imageSrc: "https://images.pexels.com/photos/34490382/pexels-photo-34490382.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant display of gourmet Argentine appetizers on a black slate with artistic garnishing.",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/chef.marco" },
                { icon: Linkedin, url: "https://linkedin.com/in/marcorossi" }
              ]
            },
            {
              id: "2",
              name: "Sofia Benedetti",
              role: "Wine Director",
              description: "Certified sommelier specializing in Italian wines. Curates our extensive collection of regional vintages.",
              imageSrc: "https://images.pexels.com/photos/8775456/pexels-photo-8775456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Profile of a man tasting white wine against a dark background, highlighting elegance.",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/sofia_wines" },
                { icon: Globe, url: "https://sofiawines.com" }
              ]
            },
            {
              id: "3",
              name: "Antonio Marino",
              role: "Restaurant Manager",
              description: "Hospitality expert ensuring every guest receives exceptional service and an unforgettable dining experience.",
              imageSrc: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Smiling waiter stands in an elegant restaurant interior, exuding warmth and professionalism.",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/antoniomarino" }
              ]
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Real reviews from customers who have experienced our authentic Italian hospitality"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Food Critic",
              company: "City Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4350101/pexels-photo-4350101.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A joyful group of diverse women enjoying a meal together at a cozy café, engaging in cheerful conversation."
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Local Resident",
              company: "Neighborhood Regular",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8775064/pexels-photo-8775064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A refined dinner scene with friends selecting wine in a cozy ambiance."
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Anniversary Diner",
              company: "Special Occasion Guest",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3184177/pexels-photo-3184177.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A happy group of friends and family enjoying a meal together indoors. Perfect for themes of togetherness and joy."
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Executive",
              company: "Corporate Events",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8921562/pexels-photo-8921562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A sophisticated group enjoying a luxurious dinner with attentive waiter service in an upscale restaurant."
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about dining at Bella Vista"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "Do you accept reservations?",
              content: "Yes, we highly recommend making reservations, especially for dinner and weekends. You can book online or call us directly."
            },
            {
              id: "2",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely! We offer gluten-free pasta options, vegetarian dishes, and can accommodate most dietary needs. Please inform us when making your reservation."
            },
            {
              id: "3",
              title: "What are your hours of operation?",
              content: "We are open Tuesday through Sunday. Lunch: 11:30 AM - 3:00 PM, Dinner: 5:30 PM - 10:00 PM. Closed Mondays."
            },
            {
              id: "4",
              title: "Do you offer private dining?",
              content: "Yes, we have a private dining room for special occasions and corporate events. Contact us for availability and pricing."
            }
          ]}
          imageSrc="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Chef preparing meal in a modern kitchen with various cookware."
          mediaPosition="left"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reservations"
          tagIcon={Calendar}
          title="Make Your Reservation"
          description="Join us for an unforgettable Italian dining experience. Reserve your table today and let us create magical moments for you and your loved ones."
          inputPlaceholder="Enter your email"
          buttonText="Book Table"
          termsText="By submitting your information, you agree to receive reservation confirmations and special offers from Bella Vista."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Bella Vista"
          columns={[
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Menu", href: "menu" },
                { label: "Private Dining", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Gift Cards", href: "https://bellavista.com/gift-cards" },
                { label: "Events", href: "https://bellavista.com/events" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Location", href: "https://maps.google.com" },
                { label: "Hours", href: "faq" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}