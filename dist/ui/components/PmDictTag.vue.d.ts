import { type PropType } from 'vue';
import { type DictionaryValue } from '../../core/index';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    code: {
        type: StringConstructor;
        required: true;
    };
    value: {
        type: PropType<DictionaryValue>;
        required: true;
    };
    fallback: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    code: {
        type: StringConstructor;
        required: true;
    };
    value: {
        type: PropType<DictionaryValue>;
        required: true;
    };
    fallback: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    fallback: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
