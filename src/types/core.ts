import FabSelectize from "../fab-selectize";
import { escape_html } from "../utils";

export interface FabInput extends HTMLElement {
    fabselectize?: FabSelectize;
    disabled: boolean;
    required: boolean;
    value: string;
    type: string;
    validity: ValidityState;
}

export type FabArgObject = {
    silent?: boolean;
};

export type FabOption = { [key: string]: any };

export type FabOptions = { [key: string]: FabOption };

export type FabCreateFilter = (input: string) => boolean;

export type FabCreateCallback = (data?: FabOption) => void;

export type FabCreate = (input: string, create: FabCreateCallback) => boolean;

export interface FabItem extends HTMLElement {
    dataset: {
        value: string;
    };
}

export type FabLoadCallback = FabSelectize["loadCallback"];

export type FabTemplate = (data: FabOption, escape: typeof escape_html) => string | HTMLElement;
export type FabTemplateNull = (data: FabOption, escape: typeof escape_html) => null | string | HTMLElement;

export type FabTemplates = {
    dropdown: FabTemplate;
    optgroup: FabTemplate;
    optgroup_header: FabTemplate;
    option: FabTemplate;
    item: FabTemplate;
    option_create: FabTemplate;
    no_results: FabTemplate;
    loading: FabTemplate;
    not_loading: FabTemplateNull;
    loading_more: FabTemplateNull;
    no_more_results: FabTemplateNull;
};

export type FabTemplateNames = keyof FabTemplates;

export type FabClearFilter = (option: FabOption, value: string) => boolean;

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
