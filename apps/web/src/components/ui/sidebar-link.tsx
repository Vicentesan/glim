import { Link, useLocation } from '@tanstack/react-router';
import React, { useMemo } from 'react';
import UiHover from './hover';
import UiIcon from './icon';

type DSidebarLinkProps = {
  name: string;
  link?: string;
  icon?: React.ComponentType<{ className: string }>;
  iconName?: string;
  color?: string;
  exact?: boolean;
};

export default function DSidebarLink({ 
  name, 
  link, 
  icon: Icon, 
  iconName, 
  color,
  exact = false
}: DSidebarLinkProps) {
  const location = useLocation();
  
  const isActive = useMemo(() => {
    if (!link) return false;
    
    if (link === '/') {
      return location.pathname === '/';
    }
    
    return exact 
      ? location.pathname === link
      : location.pathname.startsWith(link);
  }, [link, location.pathname, exact]);

  const className = "flex h-8 w-full items-center gap-2 px-2 text-sm font-medium text-neutral transition-all cursor-pointer relative group focus-visible:ring-neutral-300 focus-visible:ring-2 outline-none rounded-md";
  
  const content = (
    <>
      <UiHover isActive={isActive} />
      <div className="flex gap-2 z-10">
        <div className="size-5 grid place-items-center">
          {Icon && <Icon className={`size-4 ${color ? `text-${color}-600` : 'text-neutral-subtle'}`} />}
          {!Icon && iconName && <UiIcon name={iconName} className="size-4" color={color} />}
        </div>
        {name}
      </div>
    </>
  );

  return link ? (
    <Link to={link} className={className}>{content}</Link>
  ) : (
    <button className={className}>{content}</button>
  );
}
