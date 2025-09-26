import Head from 'next/head';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

const Hero = styled.section`
  background: linear-gradient(90deg, #1a237e 0%, #3949ab 100%);
  color: #fff;
  padding: 80px 0 60px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: 0;
    height: 14px;
    background: linear-gradient(90deg, #64b5f6 0%, #1a237e 100%);
    animation: ${pulse} 7s linear infinite alternate;
    z-index: 0;
  }
`;

const Logo = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  margin-bottom: 22px;
  background: linear-gradient(90deg, #64b5f6 30%, #1a237e 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Tagline = styled.p`
  font-size: 1.25rem;
  margin-bottom: 35px;
  font-weight: 400;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #fff;
  color: #1a237e;
  font-weight: 700;
  padding: 16px 34px;
  border-radius: 32px;
  font-size: 1.1rem;
  box-shadow: 0 6px 24px rgba(26,35,126,0.08);
  transition: background 0.2s;
  &:hover {
    background: #e3f2fd;
    color: #3949ab;
  }
`;

const Section = styled.section`
  background: ${props => props.alt ? '#f5f7fa' : '#fff'};
  padding: 70px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  color: #1a237e;
  text-align: center;
  margin-bottom: 32px;
  font-weight: 800;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
  gap: 34px;
  margin-top: 30px;
`;

const ServiceCard = styled.div`
  background: #fff;
  box-shadow: 0 2px 12px rgba(26,35,126,0.07);
  border-radius: 20px;
  padding: 36px 28px;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 6px 20px rgba(26,35,126,0.18);
    transform: translateY(-6px);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #3949ab;
`;

const ServiceDesc = styled.p`
  font-size: 1rem;
  color: #333;
  opacity: 0.86;
`;

const ClientsBar = styled.div`
  background: #e3f2fd;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 38px;
  flex-wrap: wrap;
`;

const ClientLogo = styled.span`
  font-size: 2rem;
  font-weight: 800;
  color: #1a237e;
  background: #fff;
  border-radius: 10px;
  padding: 12px 30px;
  box-shadow: 0 2px 10px rgba(26,35,126,0.08);
  letter-spacing: 1px;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
  gap: 30px;
  margin-top: 30px;
`;

const TestimonialCard = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(26,35,126,0.11);
  padding: 28px;
  font-size: 1.05rem;
  color: #333;
  position: relative;
  &:before {
    content: "❝";
    position: absolute;
    top: 12px; left: 16px;
    font-size: 2.1rem;
    color: #64b5f6;
    opacity: 0.25;
  }
`;

const TestimonialAuthor = styled.div`
  margin-top: 18px;
  font-weight: 700;
  color: #1a237e;
  font-size: 1rem;
`;

const ContactSection = styled.section`
  padding: 70px 0;
  background: #f5f7fa;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #1a237e;
  margin-bottom: 18px;
`;

const ContactText = styled.p`
  font-size: 1.13rem;
  color: #333;
  margin-bottom: 14px;
`;

const ContactEmail = styled.a`
  font-size: 1.2rem;
  color: #3949ab;
  font-weight: 700;
  text-decoration: underline;
  background: #fff;
  border-radius: 8px;
  padding: 7px 16px;
  transition: background 0.2s;
  &:hover {
    background: #e3f2fd;
  }
`;

const Footer = styled.footer`
  background: #1a237e;
  color: #fff;
  text-align: center;
  padding: 32px 0 18px 0;
  font-size: 1rem;
  letter-spacing: 0.5px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>iTsoluTions | Technology Solutions for Modern Enterprises</title>
        <meta name="description" content="iTsoluTions — Trusted technology solutions for enterprise clients. Cloud, AI, security, development, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>
        <Logo>iTsoluTions</Logo>
        <Tagline>
          Transforming business with cutting-edge technology solutions.<br />
          Trusted by global enterprises.
        </Tagline>
        <CTAButton href="#contact">Let’s Talk</CTAButton>
      </Hero>

      <ClientsBar>
        <ClientLogo>Acme Corp</ClientLogo>
        <ClientLogo>GloboTech</ClientLogo>
        <ClientLogo>Finova</ClientLogo>
        <ClientLogo>HealthNet</ClientLogo>
        <ClientLogo>UrbanGrid</ClientLogo>
      </ClientsBar>

      <Section>
        <SectionTitle>Our Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceTitle>Cloud Architecture & Migration</ServiceTitle>
            <ServiceDesc>
              Architect, migrate, and optimize your infrastructure for AWS, Azure, and Google Cloud. Secure, scalable, and cost-effective cloud transitions.
            </ServiceDesc>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>AI & Data Solutions</ServiceTitle>
            <ServiceDesc>
              Build intelligent applications with custom ML models, advanced analytics, and real-time dashboards. Unlock insights and automate decisions.
            </ServiceDesc>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Cybersecurity & Compliance</ServiceTitle>
            <ServiceDesc>
              Enterprise-grade security audits, threat detection, and compliance (GDPR, HIPAA, PCI). Protect your data and reputation.
            </ServiceDesc>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Full Stack Development</ServiceTitle>
            <ServiceDesc>
              Web, mobile, and API development using modern frameworks. From MVP to enterprise platforms — we deliver robust solutions.
            </ServiceDesc>
          </ServiceCard>
          <ServiceCard>
            <ServiceTitle>Digital Transformation Consulting</ServiceTitle>
            <ServiceDesc>
              Strategy, process automation, and legacy modernization. Partner with us to accelerate business outcomes.
            </ServiceDesc>
          </ServiceCard>
        </ServicesGrid>
      </Section>

      <Section alt>
        <SectionTitle>Client Stories</SectionTitle>
        <TestimonialsGrid>
          <TestimonialCard>
            “iTsoluTions transformed our legacy systems. Productivity soared by 40% and downtime disappeared.”
            <TestimonialAuthor>— Jane Wu, CTO, Acme Corp</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            “The AI dashboard delivered by iTsoluTions provides real-time insights we never thought possible.”
            <TestimonialAuthor>— Rajesh Kumar, Head of Analytics, Finova</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            “Migration to Azure was seamless and secure. The team’s expertise is unmatched.”
            <TestimonialAuthor>— Simon Lee, CIO, GloboTech</TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsGrid>
      </Section>

      <ContactSection id="contact">
        <ContactTitle>Contact</ContactTitle>
        <ContactText>
          Ready to modernize your enterprise or have a project in mind? <br />
          Reach out to us — we reply within 1 business day.
        </ContactText>
        <ContactEmail href="mailto:iTsolutions@vercel.app">
          iTsolutions@vercel.app
        </ContactEmail>
      </ContactSection>

      <Footer>
        &copy; {new Date().getFullYear()} iTsoluTions. All rights reserved. | Technology Solutions for Modern Enterprises
      </Footer>
    </>
  );
}
