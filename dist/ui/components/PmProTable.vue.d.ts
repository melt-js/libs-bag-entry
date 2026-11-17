import { type DataTableColumns } from 'naive-ui';
export interface ProTableRequestParams {
    page: number;
    pageSize: number;
    [key: string]: unknown;
}
export interface ProTableRequestResult<T = Record<string, unknown>> {
    list: T[];
    total: number;
}
export type TableRowKey<TData extends Record<string, unknown>> = Extract<keyof TData, string> | ((row: TData) => string | number);
export interface Props<TData extends Record<string, unknown>> {
    title?: string;
    columns: DataTableColumns<TData>;
    request: (params: ProTableRequestParams) => Promise<ProTableRequestResult<TData>>;
    params?: Record<string, unknown>;
    rowKey?: TableRowKey<TData>;
    immediate?: boolean;
    showToolbar?: boolean;
    showRefresh?: boolean;
}
declare const _default: <T extends Record<string, unknown> = Record<string, unknown>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>, never> & Props<T> & Partial<{}>> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        reload: (options?: {
            resetPage?: boolean;
        }) => void;
        reset: () => void;
    }>): void;
    attrs: any;
    slots: {
        search?: (props: {
            reload: (options?: {
                resetPage?: boolean;
            }) => void;
            reset: () => void;
        }) => any;
    } & {
        'toolbar-prefix'?: (props: {}) => any;
    } & {
        toolbar?: (props: {
            reload: (options?: {
                resetPage?: boolean;
            }) => void;
            loading: boolean;
        }) => any;
    };
    emit: {};
}>) => import("vue").VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
