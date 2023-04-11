import { FabCreateFilter, FabCreate, FabLoadCallback, FabTemplates, FabOption } from "./index";

import { TPluginItem, TPluginHash } from "../contrib/microplugin";
import * as SifterTypes from "@orchidjs/sifter/dist/types/types";

export type FabSettings = {
    options?: any[];
    optgroups?: any[];
    items?: string[];

    plugins: string[] | TPluginItem[] | TPluginHash;
    delimiter: string;
    splitOn: RegExp | string; // regexp or string for splitting up values from a paste command
    persist: boolean;
    diacritics: boolean;
    create: boolean | FabCreate;
    createOnBlur: boolean;
    createFilter: RegExp | string | FabCreateFilter;
    highlight: boolean;
    openOnFocus: boolean;
    shouldOpen: boolean;
    maxOptions: number;
    maxItems: null | number;
    hideSelected: boolean;
    duplicates: boolean;
    addPrecedence: boolean;
    selectOnTab: boolean;
    preload: boolean | string;
    allowEmptyOption: boolean;
    closeAfterSelect: boolean;

    loadThrottle: number;
    loadingClass: string;

    dataAttr: string; //'data-data',
    optgroupField: string;
    valueField: string;
    labelField: string;
    disabledField: string;
    optgroupLabelField: string;
    optgroupValueField: string;
    lockOptgroupOrder: boolean;

    sortField: string | SifterTypes.Sort[] | SifterTypes.SortFn;
    searchField: string[];
    searchConjunction: string;
    nesting: boolean;

    mode: string;
    wrapperClass: string;
    controlClass: string;
    dropdownClass: string;
    dropdownContentClass: string;
    itemClass: string;
    optionClass: string;

    dropdownParent: string;
    controlInput: string | HTMLInputElement;

    copyClassesToDropdown: boolean;

    placeholder: string;
    hidePlaceholder: boolean;

    load: (value: string, callback: FabLoadCallback) => void;
    score?: (query: string) => () => any;
    shouldLoad: (query: string) => boolean;
    onInitialize: () => void;
    onChange: (value: string | number) => void;
    onItemAdd: (value: string | number, item: HTMLDivElement) => void;
    onItemRemove: (value: string | number, item: HTMLDivElement) => void;
    onClear: () => void;
    onOptionAdd: (value: string | number, data: FabOption) => void;
    onOptionRemove: (value: string | number) => void;
    onOptionClear: () => void;
    onOptionGroupAdd: (value: string | number, data: FabOption) => void;
    onOptionGroupRemove: (value: string | number) => void;
    onOptionGroupClear: () => void;
    onDropdownOpen: (dropdown: HTMLDivElement) => void;
    onDropdownClose: (dropdown: HTMLDivElement) => void;
    onType: (str: string) => void;
    onLoad: (options: FabOption[], optgroups: FabOption[]) => void;
    onFocus: () => void;
    onBlur: () => void;
    onDelete: (values: string[], evt: KeyboardEvent | MouseEvent) => boolean;

    render: FabTemplates;

    // virtual scroll plugin
    firstUrl: (query: string) => any;
    shouldLoadMore: () => boolean;
};
