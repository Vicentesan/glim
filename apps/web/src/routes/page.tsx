import { createFileRoute } from '@tanstack/react-router'

import { BellIcon } from '@/components/icons/bell-icon'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center py-2 pr-2 rounded-sm">
      <div className="flex flex-col w-full h-full bg-neutral-50 border border-neutral-200 rounded-sm">
        <div className="flex flex-row items-center justify-between p-3 w-full">
          <div className="flex gap-1 items-center">
            <div className="flex bg-white border border-neutral-200 rounded-sm p-px">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.1609 2.66667H7.83913C7.30249 2.66666 6.85958 2.66666 6.49878 2.69614C6.12405 2.72675 5.77958 2.79246 5.45603 2.95732C4.95426 3.21298 4.54631 3.62093 4.29065 4.1227C4.12579 4.44626 4.06008 4.79072 4.02946 5.16546C3.99999 5.52625 3.99999 5.96915 4 6.5058V13.4942C3.99999 14.0308 3.99999 14.4738 4.02946 14.8346C4.06008 15.2093 4.12579 15.5538 4.29065 15.8773C4.54631 16.3791 4.95426 16.787 5.45603 17.0427C5.77958 17.2076 6.12405 17.2733 6.49878 17.3039C6.85958 17.3334 7.30248 17.3333 7.83912 17.3333H12.1609C12.6975 17.3333 13.1404 17.3334 13.5012 17.3039C13.8759 17.2733 14.2204 17.2076 14.544 17.0427C15.0457 16.787 15.4537 16.3791 15.7094 15.8773C15.8742 15.5538 15.9399 15.2093 15.9705 14.8346C16 14.4738 16 14.0309 16 13.4942V6.50579C16 5.96915 16 5.52625 15.9705 5.16546C15.9399 4.79072 15.8742 4.44626 15.7094 4.1227C15.4537 3.62093 15.0457 3.21298 14.544 2.95732C14.2204 2.79246 13.8759 2.72675 13.5012 2.69614C13.1404 2.66666 12.6975 2.66666 12.1609 2.66667ZM7.33333 6.00001C6.96514 6.00001 6.66667 6.29848 6.66667 6.66667C6.66667 7.03486 6.96514 7.33334 7.33333 7.33334H12.6667C13.0349 7.33334 13.3333 7.03486 13.3333 6.66667C13.3333 6.29848 13.0349 6.00001 12.6667 6.00001H7.33333ZM6.66667 9.33334C6.66667 8.96515 6.96514 8.66667 7.33333 8.66667H11.3333C11.7015 8.66667 12 8.96515 12 9.33334C12 9.70153 11.7015 10 11.3333 10H7.33333C6.96514 10 6.66667 9.70153 6.66667 9.33334ZM6.66667 12C6.66667 11.6318 6.96514 11.3333 7.33333 11.3333H8.66667C9.03486 11.3333 9.33333 11.6318 9.33333 12C9.33333 12.3682 9.03486 12.6667 8.66667 12.6667H7.33333C6.96514 12.6667 6.66667 12.3682 6.66667 12Z"
                  fill="#D97706"
                />
              </svg>
            </div>

            <span className="text-sm font-medium">Zeitword CMS</span>
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="text-neutral-700">
              Filters
            </Button>
            <Button variant="outline" size="sm" className="text-neutral-700">
              Share
            </Button>
            <Button variant="ghost" size="icon">
              <BellIcon className="size-4 flex-shrink-0 text-neutral-500" />
            </Button>
          </div>
        </div>

        <div className="flex h-full">i</div>
      </div>
    </div>
  )
}
