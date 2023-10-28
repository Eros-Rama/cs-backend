"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default () => {
  const onlyCoverts = useSearchParams().get("onlyCoverts") === "true";

  const router = useRouter();
  return (
    <div className="flex items-center gap-1">
      <input
        className="h-4 w-4 accent-neutral-800"
        type="checkbox"
        id="onlyCovertsCheckbox"
        defaultChecked={onlyCoverts}
        onChange={() => {
          if (onlyCoverts) return router.replace("?");
          router.replace(`?onlyCoverts=${!onlyCoverts}`);
        }}
      />
      <label className="text-lg" htmlFor="onlyCovertsCheckbox">
        Show only coverts
      </label>
    </div>
  );
};
