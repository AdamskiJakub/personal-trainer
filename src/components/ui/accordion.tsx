"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

/**
 * Accordion oparty o Radix UI (shadcn/ui), dostylowany do monochromatycznego,
 * editorialnego designu strony — bez kart, cieni i zaokrąglonych pudełek.
 * Wiersze rozdzielone cienkimi liniami, wskaźnik +/−.
 */

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={`border-b border-line ${className ?? ""}`}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={`group flex flex-1 cursor-pointer items-center justify-between gap-6 py-6 text-left transition-colors hover:text-paper md:py-7 ${className ?? ""}`}
      {...props}
    >
      {children}
      <span
        className="relative flex h-6 w-6 shrink-0 items-center justify-center text-muted transition-transform duration-300 group-data-[state=open]:rotate-45"
        aria-hidden="true"
      >
        <span className="absolute h-px w-4 bg-current" />
        <span className="absolute h-4 w-px bg-current" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={`pb-7 md:pb-8 ${className ?? ""}`}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
