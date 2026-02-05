// modules/search/native/stores/SearchQueryStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var0 = arg1;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot8 = var0;
    var6 = function arg0, arg1, arg2, arg3() {
        _fun71797: for (var _fun71797_ip = 0;;) switch (_fun71797_ip) {
            case 0:
                var6 = arg3;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var4 = _closure1_slot7;
                var3 = var4.subscribe;
                var2 = {};
                var1 = null;
                var9 = var1 == var6;
                var5 = undefined;
                var7 = undefined;
                if (var9) {
                    _fun71797_ip = 53;
                    continue _fun71797
                }
            case 47:
                var7 = var6.equalityFn;
            case 53:
                if (!(var1 == var7)) {
                    _fun71797_ip = 83;
                    continue _fun71797
                }
            case 57:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 7;
                var8 = var10[var8];
                var8 = var9.bind(var5)(var8);
                var7 = var8.shallow;
            case 83:
                var2.equalityFn = var7;
                var7 = var1 == var6;
                var5 = undefined;
                if (var7) {
                    _fun71797_ip = 103;
                    continue _fun71797
                }
            case 97:
                var5 = var6.fireImmediately;
            case 103:
                var1 = var1 != var5;
                if (!var1) {
                    _fun71797_ip = 113;
                    continue _fun71797
                }
            case 110:
                var1 = var5;
            case 113:
                var2.fireImmediately = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun71798: for (var _fun71798_ip = 0;;) switch (_fun71798_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.states;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var0 = var2[var0];
                            var3 = undefined;
                            var5 = var1.bind(var3)(var0);
                            var2 = var5.getSearchContextId;
                            var0 = _closure2_slot0;
                            var2 = var2.bind(var5)(var0);
                            var0 = var4.get;
                            var2 = var0.bind(var4)(var2);
                            var0 = null;
                            var4 = var0 != var2;
                            if (!var4) {
                                _fun71798_ip = 80;
                                continue _fun71798
                            }
                        case 71:
                            var1 = _closure2_slot1;
                            var0 = var1.bind(var3)(var2);
                        case 80:
                            return var0;
                    }
                };
                var0 = arg2;
                var0 = var3.bind(var4)(var1, var0, var2);
                return var0;
        }
    };
    var _closure1_slot9 = var6;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var8 = var7.bind(var0)(var1);
    var1 = 1;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var7 = var5[var1];
    var1 = arg3;
    var1 = var1.bind(var0)(var7);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.createZustandStore;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.EMPTY_SEARCH_QUERY_STRING;
    var _closure1_slot5 = var1;
    var1 = function arg0() {
        var2 = this;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot3;
        var4 = _closure1_slot10;
        var0 = undefined;
        var4 = var5.bind(var0)(var2, var4);
        var4 = function() { // Environment: var3
            _fun71800: for (var _fun71800_ip = 0;;) switch (_fun71800_ip) {
                case 0:
                    var3 = arguments[0];
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun71800_ip = 11;
                        continue _fun71800
                    }
                case 9:
                    var3 = false;
                case 11:
                    var0 = _closure2_slot0;
                    var2 = var0.tagsManager;
                    var0 = var2.getQueryString;
                    var5 = var0.bind(var2)(var3);
                    var2 = var5.length;
                    var0 = 0;
                    if (!(var0 === var2)) {
                        _fun71800_ip = 58;
                        continue _fun71800
                    }
                case 46:
                    var0 = _closure2_slot0;
                    var0 = var0.textInputValue;
                    _fun71800_ip = 98;
                    continue _fun71800;
                case 58:
                    var1 = _closure2_slot0;
                    var4 = var1.textInputValue;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var3 = var1.concat;
                    var2 = '';
                    var1 = ' ';
                    var0 = var3.bind(var2)(var5, var1, var4);
                case 98:
                    return var0;
            }
        };
        var2.getQueryString = var4;
        var4 = function() { // Environment: var3
            var0 = _closure2_slot0;
            var0 = var0.textInputValue;
            return var0;
        };
        var2.getTextInputValue = var4;
        var4 = function(arg0) { // Environment: var3
            _fun71802: for (var _fun71802_ip = 0;;) switch (_fun71802_ip) {
                case 0:
                    var2 = arguments[1];
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun71802_ip = 11;
                        continue _fun71802
                    }
                case 9:
                    var2 = false;
                case 11:
                    var1 = _closure2_slot0;
                    var3 = arg0;
                    var1.textInputValue = var3;
                    var1.textInputChangedFromInput = var2;
                    return var0;
            }
        };
        var2.setTextInputValue = var4;
        var4 = function() { // Environment: var3
            _fun71803: for (var _fun71803_ip = 0;;) switch (_fun71803_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = var0.textInputValue;
                    var0 = var2.trim;
                    var0 = var0.bind(var2)();
                    var2 = var0.length;
                    var0 = 0;
                    var0 = var0 === var2;
                    if (!var0) {
                        _fun71803_ip = 60;
                        continue _fun71803
                    }
                case 37:
                    var1 = _closure2_slot0;
                    var2 = var1.tagsManager;
                    var1 = var2.hasUserAddedTags;
                    var1 = var1.bind(var2)();
                    var0 = !var1;
                case 60:
                    return var0;
            }
        };
        var2.isInitialSearchQuery = var4;
        var4 = function() { // Environment: var3
            var0 = _closure2_slot0;
            var0 = var0.searchResultsQuery;
            return var0;
        };
        var2.getSearchResultsQuery = var4;
        var4 = function(arg0) { // Environment: var3
            var1 = _closure2_slot0;
            var0 = arg0;
            var1.searchResultsQuery = var0;
            var0 = undefined;
            return var0;
        };
        var2.setSearchResultsQuery = var4;
        var4 = function() { // Environment: var3
            var0 = _closure2_slot0;
            var1 = var0.textInputValue;
            var0 = var1.trim;
            var0 = var0.bind(var1)();
            var1 = var0.length;
            var0 = 0;
            var0 = var0 === var1;
            return var0;
        };
        var2.isTextInputValueEmpty = var4;
        var4 = function() { // Environment: var3
            var0 = _closure2_slot0;
            var0 = var0.textInputChangedFromInput;
            return var0;
        };
        var2.getTextValueChangedFromInput = var4;
        var4 = function() { // Environment: var3
            var0 = _closure2_slot0;
            var1 = var0.tagsManager;
            var0 = var1.hasUserAddedTags;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2.hasUserAddedTags = var4;
        var4 = function() { // Environment: var3
            var0 = _closure2_slot0;
            var1 = var0.tagsManager;
            var0 = var1.get;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2.getTags = var4;
        var4 = function() { // Environment: var3
            var0 = _closure2_slot0;
            var1 = var0.tagsManager;
            var0 = var1.getPrefixTag;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2.getPrefixTag = var4;
        var4 = function() { // Environment: var3
            var1 = _closure2_slot0;
            var0 = var1.getPrefixTag;
            var1 = var0.bind(var1)();
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var2.isAutocompleteVisible = var4;
        var4 = function(arg0) { // Environment: var3
            var0 = _closure2_slot0;
            var2 = var0.tagsManager;
            var1 = var2.set;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var2.setTags = var4;
        var4 = function(arg0) { // Environment: var3
            var0 = _closure2_slot0;
            var2 = var0.tagsManager;
            var1 = var2.add;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var2.addTag = var4;
        var4 = function(arg0) { // Environment: var3
            var0 = _closure2_slot0;
            var2 = var0.tagsManager;
            var1 = var2.removeAtIndex;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var2.removeTag = var4;
        var4 = function() { // Environment: var3
            var0 = _closure2_slot0;
            var1 = var0.tagsManager;
            var0 = var1.removeAnyPrefixTags;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var2.removePrefixTags = var4;
        var4 = function() { // Environment: var3
            var0 = _closure2_slot0;
            var1 = var0.tagsManager;
            var0 = var1.getChannelIds;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2.getChannelIds = var4;
        var4 = function(arg0) { // Environment: var3
            var0 = _closure2_slot0;
            var2 = var0.tagsManager;
            var1 = var2.getUserIds;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2.getUserIds = var4;
        var4 = function() { // Environment: var3
            var0 = _closure2_slot0;
            var1 = var0.tagsManager;
            var0 = var1.isEmpty;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2.isTagsEmpty = var4;
        var3 = function() { // Environment: var3
            var0 = _closure2_slot0;
            var1 = _closure1_slot5;
            var0.textInputValue = var1;
            var2 = false;
            var0.textInputChangedFromInput = var2;
            var0.searchResultsQuery = var1;
            var1 = var0.tagsManager;
            var0 = var1.reset;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var2.reset = var3;
        var3 = _closure1_slot5;
        var2.textInputValue = var3;
        var4 = false;
        var2.textInputChangedFromInput = var4;
        var2.searchResultsQuery = var3;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 5;
        var1 = var4[var1];
        var4 = var3.bind(var0)(var1);
        var1 = var4.prototype;
        var3 = Object.create(var1, {
            constructor: {
                value: var4
            }
        });
        var7 = arg0;
        var8 = var3;
        var1 = new var8[var4](var7, var6);
        var1 = var1 instanceof Object ? var1 : var3;
        var2.tagsManager = var1;
        return var0;
    };
    var _closure1_slot10 = var1;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = function() { // Environment: var3
        var0 = {};
        var1 = global;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var3 = var2;
        var1 = new var3[var1](var2);
        var1 = var1 instanceof Object ? var1 : var2;
        var0.states = var1;
        return var0;
    };
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = {};
    var7 = function arg0, arg1() {
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function(arg0) { // Environment: var1
            _fun71822: for (var _fun71822_ip = 0;;) switch (_fun71822_ip) {
                case 0:
                    var0 = arg0;
                    var5 = var0.states;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var2 = undefined;
                    var6 = var1.bind(var2)(var0);
                    var4 = var6.getSearchContextId;
                    var1 = _closure2_slot0;
                    var4 = var4.bind(var6)(var1);
                    var1 = var5.get;
                    var1 = var1.bind(var5)(var4);
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun71822_ip = 96;
                        continue _fun71822
                    }
                case 68:
                    var5 = _closure1_slot6;
                    var7 = _closure2_slot0;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var8 = var4;
                    var3 = new var8[var5](var7, var6);
                    var1 = var3 instanceof Object ? var3 : var4;
                case 96:
                    var0 = _closure2_slot1;
                    var0 = var0.bind(var2)(var1);
                    return var0;
            }
        };
        var3 = var3.bind(var4)(var1, var2);
        var2 = _closure1_slot7;
        var1 = var2.useState;
        var0 = _closure1_slot8;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1.useState = var7;
    var7 = function arg0, arg1() {
        _fun71823: for (var _fun71823_ip = 0;;) switch (_fun71823_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 6;
                var1 = var2[var1];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.getSearchContextId;
                var5 = var1.bind(var3)(var4);
                var6 = _closure1_slot7;
                var3 = var6.getState;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.states;
                    return var0;
                };
                var3 = var3.bind(var6)(var1);
                var1 = var3.get;
                var1 = var1.bind(var3)(var5);
                var3 = null;
                if (!(var3 == var1)) {
                    _fun71823_ip = 106;
                    continue _fun71823
                }
            case 79:
                var0 = _closure1_slot6;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var3;
                var7 = var4;
                var0 = new var8[var0](var7, var6);
                var1 = var0 instanceof Object ? var0 : var3;
            case 106:
                var0 = arg1;
                var0 = var0.bind(var2)(var1);
                return var0;
        }
    };
    var1.getState = var7;
    var7 = function arg0, arg1() {
        _fun71825: for (var _fun71825_ip = 0;;) switch (_fun71825_ip) {
            case 0:
                var7 = arg0;
                var3 = _closure1_slot7;
                var2 = var3.getState;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.states;
                    return var0;
                };
                var6 = var2.bind(var3)(var0);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getSearchContextId;
                var5 = var2.bind(var3)(var7);
                var2 = var6.get;
                var3 = var2.bind(var6)(var5);
                var2 = null;
                if (!(var2 == var3)) {
                    _fun71825_ip = 106;
                    continue _fun71825
                }
            case 79:
                var2 = _closure1_slot6;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var4;
                var9 = var7;
                var2 = new var10[var2](var9, var8);
                var3 = var2 instanceof Object ? var2 : var4;
            case 106:
                var2 = arg1;
                var2 = var2.bind(var0)(var3);
                var2 = global;
                var2 = var2.Map;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var4;
                var9 = var6;
                var2 = new var10[var2](var9, var8);
                var4 = var2 instanceof Object ? var2 : var4;
                var2 = var4.set;
                var2 = var2.bind(var4)(var5, var3);
                var3 = _closure1_slot7;
                var2 = var3.setState;
                var1 = {};
                var1.states = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.setState = var7;
    var7 = function arg0() {
        _fun71827: for (var _fun71827_ip = 0;;) switch (_fun71827_ip) {
            case 0:
                var3 = _closure1_slot7;
                var2 = var3.getState;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.states;
                    return var0;
                };
                var5 = var2.bind(var3)(var0);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.getSearchContextId;
                var2 = arg0;
                var3 = var3.bind(var4)(var2);
                var2 = var5.has;
                var2 = var2.bind(var5)(var3);
                if (!var2) {
                    _fun71827_ip = 139;
                    continue _fun71827
                }
            case 76:
                var2 = global;
                var2 = var2.Map;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var4;
                var6 = var5;
                var2 = new var7[var2](var6, var5);
                var4 = var2 instanceof Object ? var2 : var4;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var3);
                var3 = _closure1_slot7;
                var2 = var3.setState;
                var1 = {};
                var1.states = var4;
                var1 = var2.bind(var3)(var1);
            case 139:
                return var0;
        }
    };
    var1.deleteState = var7;
    var1.subscribeState = var6;
    var3 = function arg0, arg1, arg2() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot9;
        var10 = undefined;
        var9 = arg0;
        var8 = function(arg0) { // Environment: var0
            var2 = arg0;
            var0 = {};
            var1 = var2.getTextInputValue;
            var1 = var1.bind(var2)();
            var0.textInputValue = var1;
            var1 = var2.getTextValueChangedFromInput;
            var1 = var1.bind(var2)();
            var0.textInputChangedFromInput = var1;
            return var0;
        };
        var7 = function(arg0, arg1) { // Environment: var0
            _fun71831: for (var _fun71831_ip = 0;;) switch (_fun71831_ip) {
                case 0:
                    var0 = arg0;
                    var5 = arg1;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun71831_ip = 55;
                        continue _fun71831
                    }
                case 12:
                    var4 = _closure2_slot0;
                    var3 = var0.textInputValue;
                    var6 = var1 == var5;
                    var2 = undefined;
                    var1 = undefined;
                    if (var6) {
                        _fun71831_ip = 42;
                        continue _fun71831
                    }
                case 36:
                    var1 = var5.textInputValue;
                case 42:
                    var0 = var0.textInputChangedFromInput;
                    var0 = var4.bind(var2)(var3, var1, var0);
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var6 = arg2;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var1.subscribeTextInputValue = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/stores/SearchQueryStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 31, 3916, 8935, 9000, 9001, 3076, 2]);