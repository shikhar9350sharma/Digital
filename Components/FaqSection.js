import React from "react"
import { Plus, Minus } from "lucide-react" // Import the icons
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FaqSection = () => {
  return (
    <section className="w-93.75 h-auto flex flex-col gap-15 pt-15 px-5 pb-15 mx-auto md:w-360 md:h-auto md:flex-row md:items-start md:gap-20 md:pt-30 md:px-20 md:pb-30
    ">
      
      {/* Left Column */}
      <div className="flex flex-col gap-6 md:w-1/2 md:sticky md:top-20">
        <h2 className="font-inter font-medium text-[36px] leading-12 md:text-[64px] md:leading-18 tracking-[0%] text-[#12161D]">
          Frequently Asked <br className="hidden md:block" /> Questions
        </h2>
        <p className="text-[#61656E] font-inter font-normal text-[18px] leading-6.5 tracking-[0%] md:max-w-110">
          If there are questions you want to ask. We will answer all your questions.
        </p>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2">
        <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
          
          {/* Item 1 */}
          <AccordionItem value="item-1" className="border rounded-xl px-6 py-2 shadow-sm">
            <AccordionTrigger className="font-inter font-medium text-[20px] leading-7 text-left hover:no-underline [&>svg]:hidden">
              <span className="flex-1">What is cluster housing perumnas?</span>
    
              <div className="shrink-0 text-[#12161D]">
                 <Plus className="h-5 w-5 block group-data-[state=open]:hidden" />
                 <Minus className="h-5 w-5 hidden group-data-[state=open]:block" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="font-inter font-normal text-[18px] leading-6.5 text-[#61656E] pt-4">
              Cluster housing perumnas is a housing concept that consists of several houses in a gated cluster. Cluster housing perumnas offers comfortable, secure, and affordable housing and modern facilities.
            </AccordionContent>
          </AccordionItem>

          {/* Item 2 */}
          <AccordionItem value="item-2" className="border rounded-xl px-6 py-2 shadow-sm">
            <AccordionTrigger className="font-inter font-medium text-[20px] leading-7 text-left hover:no-underline [&>svg]:hidden">
              <span className="flex-1">Where is the location of cluster housing perumnas?</span>
              <div className="shrink-0 text-[#12161D]">
                 <Plus className="h-5 w-5 block group-data-[state=open]:hidden" />
                 <Minus className="h-5 w-5 hidden group-data-[state=open]:block" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="font-inter font-normal text-[18px] leading-6.5 text-[#61656E] pt-4">
              Our locations are strategically chosen for easy access to city centers, airports, and public transportation hubs.
            </AccordionContent>
          </AccordionItem>

          {/* Item 3 */}
          <AccordionItem value="item-3" className="border rounded-xl px-6 py-2 shadow-sm">
            <AccordionTrigger className="font-inter font-medium text-[20px] leading-7 text-left hover:no-underline [&>svg]:hidden">
              
              <span className="flex-1">How much are the prices and types of houses in cluster housing perumnas?</span>
              <div className="shrink-0 text-[#12161D]">
                 <Plus className="h-5 w-5 block group-data-[state=open]:hidden" />
                 <Minus className="h-5 w-5 hidden group-data-[state=open]:block" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="font-inter font-normal text-[18px] leading-6.5 text-[#61656E] pt-4">
              Prices vary based on house type and location. We offer a range of options from affordable starters to premium family homes.
            </AccordionContent>
          </AccordionItem>

          {/* Item 4  */}
          <AccordionItem value="item-4" className="border rounded-xl px-6 py-2 shadow-sm">
            <AccordionTrigger className="font-inter font-medium text-[20px] leading-7 text-left hover:no-underline [&>svg]:hidden">
              <span className="flex-1">What are the facilities provided in cluster housing perumnas?</span>
              <div className="shrink-0 text-[#12161D]">
                 <Plus className="h-5 w-5 block group-data-[state=open]:hidden" />
                 <Minus className="h-5 w-5 hidden group-data-[state=open]:block" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="font-inter font-normal text-[18px] leading-6.5 text-[#61656E] pt-4">
              We provide 24/7 security, community parks, jogging tracks, and easy access to local amenities like schools and shopping centers.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  )
}

export default FaqSection