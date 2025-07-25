import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/Hero";
import { featuresData, howItWorksData, statsData, testimonialsData } from "../../data/landing";
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link";



export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-bold text-4xl text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="contianer mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything you need to manage your finances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card key={index} className={'p-6'}>
                <CardContent className={'space-y-4 pt-4'}>
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="contianer mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((work, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">{work.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{work.title}</h3>
                <p className="text-gray-600">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="contianer mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {testimonialsData.map((testis, index) => (
              <Card key={index} className={'p-6'}>
                <CardContent className={'space-y-4 pt-4'}>
                  <div className="flex items-center mb-4">
                    <Image src={testis.image} alt={testis.name} width={40} height={40} className="rounded-full" />
                    <div className="ml-4">
                      <div className="font-semibold ">{testis.name}</div>
                      <div className="text-sm text-gray-600">{testis.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testis.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-blue-400">
        <div className="contianer mx-auto px-4 text-center">
          <h2 className="text-3xl text-white font-bold text-center mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of user who are managing their finances smarter with Welth</p>
          <Link href={'/dashboard'}><Button size={'lg'} className={'bg-white text-blue-600 hover:bg-blue-50 animate-bounce'}>Start Free Trial</Button></Link>
        </div>
      </section>
    </div>
  );
}
