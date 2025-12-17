import { cn } from "@/lib/utils";

interface AdSlotProps {
  type: "header" | "sidebar" | "mid-content" | "footer" | "in-content";
  className?: string;
  showLabel?: boolean;
}

export function AdSlot({ type, className, showLabel = true }: AdSlotProps) {
  const getAdDimensions = () => {
    switch (type) {
      case "header":
        return "w-full h-[90px] md:h-[250px]";
      case "sidebar":
        return "w-[300px] h-[250px] md:h-[600px]";
      case "mid-content":
        return "w-full h-[250px] md:h-[300px]";
      case "footer":
        return "w-full h-[90px] md:h-[250px]";
      case "in-content":
        return "w-full h-[250px] md:h-[300px]";
      default:
        return "w-[300px] h-[250px]";
    }
  };

  const getAdSenseCode = () => {
    // This would be replaced with actual AdSense code
    return `
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXX"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    `;
  };

  return (
    <div className={cn(
      "flex flex-col items-center justify-center bg-muted/20 border-2 border-dashed border-muted-foreground/20 rounded-lg overflow-hidden",
      getAdDimensions(),
      className
    )}>
      {showLabel && (
        <div className="text-center p-4 w-full">
          <p className="text-xs text-muted-foreground font-medium">Advertisement</p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            AdSense Slot: {type.replace('-', ' ')}
          </p>
        </div>
      )}
      
      {/* Actual AdSense code would go here */}
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Ad Space</p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            {type === 'header' && '728x90 or 320x50'}
            {type === 'sidebar' && '300x250 or 300x600'}
            {type === 'mid-content' && '728x90 or 300x250'}
            {type === 'footer' && '728x90 or 320x50'}
            {type === 'in-content' && 'Responsive'}
          </p>
        </div>
      </div>
    </div>
  );
}

// Pre-configured ad slot components for easy use
export function HeaderAd({ className }: { className?: string }) {
  return <AdSlot type="header" className={className} />;
}

export function SidebarAd({ className }: { className?: string }) {
  return <AdSlot type="sidebar" className={className} />;
}

export function MidContentAd({ className }: { className?: string }) {
  return <AdSlot type="mid-content" className={className} />;
}

export function FooterAd({ className }: { className?: string }) {
  return <AdSlot type="footer" className={className} />;
}

export function InContentAd({ className }: { className?: string }) {
  return <AdSlot type="in-content" className={className} showLabel={false} />;
}