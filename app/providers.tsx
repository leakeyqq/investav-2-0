  "use client";

  import { ThirdwebProvider } from "@thirdweb-dev/react";
  import { Hedera } from "@thirdweb-dev/chains";

  export function Providers({ children }: { children: React.ReactNode }) {
    return <ThirdwebProvider
    activeChain={Hedera}
    clientId="870fb72b2fc1f747cf42a34629486955">
      {children}
      </ThirdwebProvider>;
  }