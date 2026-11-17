import type { MenuConfig } from '../../core/index';
export declare const useMenuStore: import("pinia").StoreDefinition<"menu", {
    menus: MenuConfig[];
    collapsed: boolean;
    expandedKeys: string[];
    mobileDrawerOpen: boolean;
}, {}, {
    setMenus(menus: MenuConfig[]): void;
    toggleCollapsed(): void;
    setCollapsed(val: boolean): void;
    toggleMobileDrawer(): void;
    setMobileDrawer(val: boolean): void;
    setExpandedKeys(keys: string[]): void;
}>;
