import { type PropType } from 'vue';
import { type ProFormSchema } from '../../core/index';
declare var __VLS_11: string, __VLS_12: {
    schema: ProFormSchema;
    values: Record<string, unknown>;
    setFieldValue: (field: string, value: unknown) => void;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_11>]?: (props: typeof __VLS_12) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<Record<string, unknown>>;
        required: true;
    };
    schemas: {
        type: PropType<ProFormSchema[]>;
        required: true;
    };
    cols: {
        type: PropType<string | number>;
        default: string;
    };
    xGap: {
        type: NumberConstructor;
        default: number;
    };
    yGap: {
        type: NumberConstructor;
        default: number;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: Record<string, unknown>) => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<Record<string, unknown>>;
        required: true;
    };
    schemas: {
        type: PropType<ProFormSchema[]>;
        required: true;
    };
    cols: {
        type: PropType<string | number>;
        default: string;
    };
    xGap: {
        type: NumberConstructor;
        default: number;
    };
    yGap: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((value: Record<string, unknown>) => any) | undefined;
}>, {
    cols: string | number;
    xGap: number;
    yGap: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
