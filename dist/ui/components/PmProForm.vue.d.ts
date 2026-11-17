import { type PropType } from 'vue';
import type { ProFormSchema, ProFormSubmitContext } from '../../core/index';
declare var __VLS_1: {
    values: Record<string, unknown>;
}, __VLS_13: string, __VLS_14: {
    schema: ProFormSchema;
    values: Record<string, unknown>;
    setFieldValue: (field: string, value: unknown) => void;
}, __VLS_16: {
    values: Record<string, unknown>;
    submit: () => Promise<void>;
    reset: () => void;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_13>]?: (props: typeof __VLS_14) => any;
} & {
    extra?: (props: typeof __VLS_1) => any;
} & {
    actions?: (props: typeof __VLS_16) => any;
};
declare const __VLS_component: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<Record<string, unknown>>;
        default: () => {};
    };
    schemas: {
        type: PropType<ProFormSchema[]>;
        required: true;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
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
    showActions: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSubmit: {
        type: BooleanConstructor;
        default: boolean;
    };
    showReset: {
        type: BooleanConstructor;
        default: boolean;
    };
    submitText: {
        type: StringConstructor;
        default: string;
    };
    resetText: {
        type: StringConstructor;
        default: string;
    };
    submitLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelPlacement: {
        type: PropType<"left" | "top">;
        default: string;
    };
    requireMarkPlacement: {
        type: PropType<"left" | "right" | "right-hanging">;
        default: string;
    };
    actionsAlign: {
        type: PropType<"left" | "right">;
        default: string;
    };
}>, {
    validate: () => Promise<boolean>;
    reset: () => void;
    setValues: (values: Record<string, unknown>) => void;
    getValues: () => Record<string, unknown>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    reset: (value: Record<string, unknown>) => any;
    submit: (context: ProFormSubmitContext) => any;
    "update:modelValue": (value: Record<string, unknown>) => any;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<Record<string, unknown>>;
        default: () => {};
    };
    schemas: {
        type: PropType<ProFormSchema[]>;
        required: true;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
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
    showActions: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSubmit: {
        type: BooleanConstructor;
        default: boolean;
    };
    showReset: {
        type: BooleanConstructor;
        default: boolean;
    };
    submitText: {
        type: StringConstructor;
        default: string;
    };
    resetText: {
        type: StringConstructor;
        default: string;
    };
    submitLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelPlacement: {
        type: PropType<"left" | "top">;
        default: string;
    };
    requireMarkPlacement: {
        type: PropType<"left" | "right" | "right-hanging">;
        default: string;
    };
    actionsAlign: {
        type: PropType<"left" | "right">;
        default: string;
    };
}>> & Readonly<{
    onReset?: ((value: Record<string, unknown>) => any) | undefined;
    onSubmit?: ((context: ProFormSubmitContext) => any) | undefined;
    "onUpdate:modelValue"?: ((value: Record<string, unknown>) => any) | undefined;
}>, {
    title: string;
    modelValue: Record<string, unknown>;
    cols: string | number;
    xGap: number;
    yGap: number;
    labelPlacement: "left" | "top";
    requireMarkPlacement: "left" | "right" | "right-hanging";
    description: string;
    showActions: boolean;
    showSubmit: boolean;
    showReset: boolean;
    submitText: string;
    resetText: string;
    submitLoading: boolean;
    actionsAlign: "left" | "right";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
