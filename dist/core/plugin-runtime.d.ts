import type { AdminPlugin } from './types/plugin';
export interface PluginRuntimeItem {
    id: string;
    name: string;
    version: string;
    order: number;
    enabledByConfig: boolean;
    enabled: boolean;
    dependsOn: string[];
    routeCount: number;
    menuCount: number;
    permissionCount: number;
    settingCount: number;
    contributionCount: number;
}
export interface PluginStateProvider {
    getDisabledPluginIds: () => string[];
    setPluginEnabledState: (pluginId: string, enabled: boolean) => void;
}
export declare const registerRuntimePlugins: (plugins: AdminPlugin[]) => void;
export declare const setPluginStateProvider: (provider: PluginStateProvider) => void;
export declare const resetPluginStateProvider: () => void;
export declare const getStoredDisabledPluginIds: () => string[];
export declare const isPluginEnabled: (plugin: AdminPlugin) => boolean;
export declare const setPluginEnabledState: (pluginId: string, enabled: boolean) => void;
export declare const listRuntimePlugins: () => PluginRuntimeItem[];
