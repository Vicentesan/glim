import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

import { BookmarkIcon } from './icons/bookmark-icon'
import { ChevronUpDownIcon } from './icons/chevron-up-down-icon'
import { EditIcon } from './icons/edit-icon'
import { InboxIcon } from './icons/inbox-icon'
import { SettingsIcon } from './icons/settings-icon'
import { Button } from './ui/button'

type NavigationItem = 'inbox' | 'drafts' | 'assigned-to-me'

export function Sidebar() {
  const [active, setActive] = useState<NavigationItem>('inbox')
  const [highlightStyle, setHighlightStyle] = useState({
    top: 0,
    height: 0,
  })

  const inboxRef = useRef<HTMLButtonElement>(null)
  const draftsRef = useRef<HTMLButtonElement>(null)
  const assignedRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let currentRef = null

    if (active === 'inbox' && inboxRef.current) {
      currentRef = inboxRef.current
    } else if (active === 'drafts' && draftsRef.current) {
      currentRef = draftsRef.current
    } else if (active === 'assigned-to-me' && assignedRef.current) {
      currentRef = assignedRef.current
    }

    if (currentRef) {
      setHighlightStyle({
        top: currentRef.offsetTop,
        height: currentRef.offsetHeight,
      })
    }
  }, [active])

  return (
    <div className="gap-3 px-3 py-4 flex flex-col h-full justify-between items-start w-[270px]">
      <div className="flex flex-col gap-4.5 w-full">
        <div className="flex flex-row justify-between items-center w-full bg-neutral-200 p-2 rounded-md">
          <div className="flex flex-row gap-2 items-center overflow-hidden">
            <img
              src="/logo.svg"
              alt="logo"
              width={32}
              height={32}
              className="flex-shrink-0"
            />

            <span className="font-medium text-sm truncate">Acme GmbH</span>
          </div>

          <ChevronUpDownIcon className="size-4 flex-shrink-0 ml-2" />
        </div>

        <div className="flex flex-col gap-2 relative">
          <div
            className="absolute w-full bg-neutral-200 rounded-md z-0"
            style={{
              top: `${highlightStyle.top}px`,
              height: `${highlightStyle.height}px`,
            }}
          />

          <Button
            ref={inboxRef}
            variant="ghost"
            size="sm"
            className={cn(
              'w-full items-center flex justify-start relative z-10',
              active === 'inbox' && 'font-medium',
            )}
            onClick={() => setActive('inbox')}
          >
            <InboxIcon className="size-4 flex-shrink-0" />
            <span className="truncate">Inbox</span>
          </Button>

          <Button
            ref={draftsRef}
            variant="ghost"
            size="sm"
            className={cn(
              'w-full items-center flex justify-start relative z-10',
              active === 'drafts' && 'font-medium',
            )}
            onClick={() => setActive('drafts')}
          >
            <EditIcon className="size-4 flex-shrink-0" />
            <span className="truncate">Drafts</span>
          </Button>

          <Button
            ref={assignedRef}
            variant="ghost"
            size="sm"
            className={cn(
              'w-full items-center flex justify-start relative z-10',
              active === 'assigned-to-me' && 'font-medium',
            )}
            onClick={() => setActive('assigned-to-me')}
          >
            <BookmarkIcon className="size-4 flex-shrink-0" />
            <span className="truncate">Assigned to me</span>
          </Button>
        </div>
      </div>

      <Button
        variant="ghost"
        size="sm"
        className="w-full items-center flex justify-start"
      >
        <SettingsIcon className="size-4 flex-shrink-0" />
        <span className="truncate">Logout</span>
      </Button>
    </div>
  )
}
