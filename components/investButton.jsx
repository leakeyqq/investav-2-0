"use client";
import { useState } from 'react';
import InvestDialog from './investDialog';
import { Button } from "@/components/ui/button"; // Using your existing UI button

export default function InvestButton({ fundId }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button 
        size="lg" 
        onClick={() => setIsDialogOpen(true)}
      >
        Invest now
      </Button>
      
      <InvestDialog 
        fundId={fundId} 
        open={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </>
  );
}