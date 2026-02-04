// modules/forums/native/composer/horizontal_autocomplete/hooks/useHorizontalAutocompleteResults.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AutoCompleteResultTypes;
    var _closure1_slot4 = var6;
    var3 = var3.ChannelTypes;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/composer/horizontal_autocomplete/hooks/useHorizontalAutocompleteResults.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.channel;
        var _closure2_slot0 = var2;
        var1 = var0.selection;
        var _closure2_slot1 = var1;
        var10 = var0.text;
        var _closure2_slot2 = var10;
        var6 = _closure1_slot3;
        var5 = var6.useState;
        var0 = new Array(0);
        var0 = var5.bind(var6)(var0);
        var11 = _closure1_slot2;
        var8 = undefined;
        var5 = 2;
        var4 = var11.bind(var8)(var0, var5);
        var0 = 0;
        var7 = var4[var0];
        var _closure2_slot3 = var7;
        var9 = 1;
        var4 = var4[var9];
        var _closure2_slot4 = var4;
        var12 = var6.useMemo;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var3
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.getAutocompleteOptions;
            var1 = _closure2_slot0;
            var0 = false;
            var0 = var2.bind(var3)(var1, var0, var0);
            return var0;
        };
        var4 = var12.bind(var6)(var2, var4);
        var _closure2_slot5 = var4;
        var12 = var6.useState;
        var2 = {};
        var2.text = var10;
        var13 = var1.start;
        var2.selectionStart = var13;
        var13 = var1.end;
        var2.selectionEnd = var13;
        var2 = var12.bind(var6)(var2);
        var2 = var11.bind(var8)(var2, var5);
        var5 = var2[var0];
        var0 = var5.text;
        var _closure2_slot6 = var0;
        var8 = var5.selectionStart;
        var _closure2_slot7 = var8;
        var5 = var5.selectionEnd;
        var _closure2_slot8 = var5;
        var2 = var2[var9];
        var _closure2_slot9 = var2;
        var9 = var6.useEffect;
        var2 = new Array(2);
        var2[0] = var10;
        var2[1] = var1;
        var1 = function() { // Environment: var3
            var1 = global;
            var4 = var1.setTimeout;
            var3 = undefined;
            var2 = function() { // Environment: var0
                var2 = _closure2_slot9;
                var1 = {};
                var3 = _closure2_slot2;
                var1.text = var3;
                var0 = _closure2_slot1;
                var3 = var0.start;
                var1.selectionStart = var3;
                var0 = var0.end;
                var1.selectionEnd = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = 16;
            var1 = var4.bind(var3)(var2, var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = global;
                var2 = var0.clearTimeout;
                var1 = _closure3_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            return var0;
        };
        var1 = var9.bind(var6)(var1, var2);
        var2 = var6.useMemo;
        var1 = new Array(4);
        var1[0] = var8;
        var1[1] = var5;
        var1[2] = var0;
        var1[3] = var4;
        var0 = function() { // Environment: var3
            _fun74728: for (var _fun74728_ip = 0;;) switch (_fun74728_ip) {
                case 0:
                    var12 = _closure2_slot7;
                    var _closure3_slot2 = var12;
                    var0 = _closure2_slot6;
                    var11 = null;
                    if (!(var11 != var0)) {
                        _fun74728_ip = 350;
                        continue _fun74728
                    }
                case 26:
                    var1 = _closure2_slot6;
                    var0 = var1.trim;
                    var0 = var0.bind(var1)();
                    var1 = var0.length;
                    var10 = undefined;
                    var9 = 0;
                    var8 = 1;
                    var7 = global;
                    var6 = 4;
                    var5 = undefined;
                    var0 = undefined;
                    if (!(var9 !== var1)) {
                        _fun74728_ip = 350;
                        continue _fun74728
                    }
                case 71:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var6];
                    var1 = var3.bind(var10)(var1);
                    var4 = var1.WHITESPACE_RE;
                    var3 = var4.test;
                    var15 = _closure2_slot6;
                    var1 = var12 - var8;
                    var1 = var15[var1];
                    var1 = var3.bind(var4)(var1);
                    if (!(var9 !== var12)) {
                        _fun74728_ip = 123;
                        continue _fun74728
                    }
                case 120:
                    if (!var1) {
                        _fun74728_ip = 238;
                        continue _fun74728
                    }
                case 123:
                    var4 = _closure2_slot6;
                    var3 = var4.slice;
                    var15 = _closure2_slot8;
                    var1 = var12;
                    if (!(var11 != var15)) {
                        _fun74728_ip = 147;
                        continue _fun74728
                    }
                case 143:
                    var1 = _closure2_slot8;
                case 147:
                    var3 = var3.bind(var4)(var12, var1);
                    var1 = var3[var9];
                    var _closure3_slot0 = var1;
                    var1 = var3.slice;
                    var3 = var1.bind(var3)(var8);
                    var1 = var3.toLowerCase;
                    var1 = var1.bind(var3)();
                    var _closure3_slot1 = var1;
                    var15 = var7.Object;
                    var4 = var15.keys;
                    var3 = _closure2_slot5;
                    var15 = var4.bind(var15)(var3);
                    var4 = var15.find;
                    var3 = function(arg0) { // Environment: var14
                        _fun74729: for (var _fun74729_ip = 0;;) switch (_fun74729_ip) {
                            case 0:
                                var1 = _closure2_slot5;
                                var0 = arg0;
                                var5 = var1[var0];
                                var0 = _closure3_slot0;
                                var3 = undefined;
                                var0 = var3 !== var0;
                                if (!var0) {
                                    _fun74729_ip = 38;
                                    continue _fun74729
                                }
                            case 30:
                                var2 = _closure3_slot1;
                                var0 = var3 !== var2;
                            case 38:
                                if (!var0) {
                                    _fun74729_ip = 66;
                                    continue _fun74729
                                }
                            case 41:
                                var4 = var5.matches;
                                var3 = _closure3_slot0;
                                var2 = _closure3_slot1;
                                var1 = _closure3_slot2;
                                var0 = var4.bind(var5)(var3, var2, var1);
                            case 66:
                                return var0;
                        }
                    };
                    var5 = var4.bind(var15)(var3);
                    var0 = var1;
                    var4 = var0;
                    var1 = var12;
                    var3 = var5;
                    if (!(var11 == var3)) {
                        _fun74728_ip = 264;
                        continue _fun74728
                    }
                case 238:
                    var15 = var12 - 1;
                    _closure3_slot2 = var15;
                    var12 = var15;
                    var3 = var5;
                    var4 = var0;
                    var1 = var12;
                    if (var1 >= var9) {
                        _fun74728_ip = 71;
                        continue _fun74728
                    }
                case 264:
                    var0 = {};
                    var0.query = var4;
                    var0.autocompleteType = var3;
                    var0.autocompleteSelectionStart = var1;
                    var1 = {};
                    var3 = false;
                    var1.includeEmojiPremiumUpsell = var3;
                    var3 = _closure1_slot5;
                    var4 = var3.GUILD_FORUM;
                    var2 = new Array(4);
                    var2[0] = var4;
                    var4 = var3.GUILD_MEDIA;
                    var2[1] = var4;
                    var4 = var3.GUILD_TEXT;
                    var2[2] = var4;
                    var3 = var3.GUILD_ANNOUNCEMENT;
                    var2[3] = var3;
                    var1.channelTypes = var2;
                    var0.queryOptions = var1;
                    return var0;
                case 350:
                    var0 = {
                        'query': null,
                        'autocompleteType': null,
                        'autocompleteSelectionStart': null
                    };
                    return var0;
            }
        };
        var2 = var2.bind(var6)(var0, var1);
        var9 = var2.autocompleteType;
        var _closure2_slot10 = var9;
        var1 = var2.query;
        var _closure2_slot11 = var1;
        var0 = var2.queryOptions;
        var _closure2_slot12 = var0;
        var2 = var2.autocompleteSelectionStart;
        var8 = var6.useCallback;
        var5 = new Array(4);
        var5[0] = var9;
        var5[1] = var1;
        var5[2] = var0;
        var5[3] = var4;
        var0 = function(arg0) { // Environment: var3
            _fun74730: for (var _fun74730_ip = 0;;) switch (_fun74730_ip) {
                case 0:
                    var1 = _closure2_slot10;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun74730_ip = 21;
                        continue _fun74730
                    }
                case 13:
                    var1 = _closure2_slot11;
                    if (!(var2 == var1)) {
                        _fun74730_ip = 38;
                        continue _fun74730
                    }
                case 21:
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = new Array(0);
                    var1 = var3.bind(var2)(var1);
                    _fun74730_ip = 85;
                    continue _fun74730;
                case 38:
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot10;
                    var5 = var2[var1];
                    var2 = _closure2_slot4;
                    var4 = var5.queryResults;
                    var3 = _closure2_slot11;
                    var1 = _closure2_slot12;
                    var0 = arg0;
                    var1 = var4.bind(var5)(var3, var1, var0);
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 85:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var8.bind(var6)(var0, var5);
        var _closure2_slot13 = var0;
        var8 = var6.useEffect;
        var5 = new Array(3);
        var5[0] = var9;
        var5[1] = var0;
        var5[2] = var4;
        var4 = function() { // Environment: var3
            _fun74731: for (var _fun74731_ip = 0;;) switch (_fun74731_ip) {
                case 0:
                    var2 = _closure2_slot10;
                    var1 = null;
                    var2 = var1 != var2;
                    var4 = null;
                    if (!var2) {
                        _fun74731_ip = 54;
                        continue _fun74731
                    }
                case 20:
                    var2 = _closure2_slot5;
                    var5 = var1 == var2;
                    var2 = undefined;
                    if (var5) {
                        _fun74731_ip = 51;
                        continue _fun74731
                    }
                case 33:
                    var5 = _closure2_slot5;
                    var3 = _closure2_slot10;
                    var3 = var5[var3];
                    var2 = var3.stores;
                case 51:
                    var4 = var2;
                case 54:
                    if (!(var1 == var4)) {
                        _fun74731_ip = 62;
                        continue _fun74731
                    }
                case 58:
                    var1 = undefined;
                    return var1;
                case 62:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.BatchedStoreListener;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var6 = function() { // Environment: var0
                        var2 = _closure2_slot13;
                        var1 = undefined;
                        var0 = false;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var8 = var2;
                    var7 = var4;
                    var1 = new var8[var3](var7, var6, var5);
                    var3 = var1 instanceof Object ? var1 : var2;
                    var _closure3_slot0 = var3;
                    var2 = var3.attach;
                    var1 = 'useHorizontalAutocompleteResults';
                    var1 = var2.bind(var3)(var1);
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.detach;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    return var0;
            }
        };
        var4 = var8.bind(var6)(var4, var5);
        var5 = var6.useEffect;
        var4 = new Array(1);
        var4[0] = var0;
        var0 = function() { // Environment: var3
            var2 = _closure2_slot13;
            var0 = undefined;
            var1 = true;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var5.bind(var6)(var0, var4);
        var0 = {};
        var5 = var6.useMemo;
        var4 = new Array(1);
        var4[0] = var7;
        var3 = function() { // Environment: var3
            var2 = _closure2_slot3;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun74736: for (var _fun74736_ip = 0;;) switch (_fun74736_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.type;
                        var0 = _closure1_slot4;
                        var0 = var0.USER;
                        var0 = var2 === var0;
                        if (var0) {
                            _fun74736_ip = 42;
                            continue _fun74736
                        }
                    case 28:
                        var3 = _closure1_slot4;
                        var3 = var3.ROLE;
                        var0 = var2 === var3;
                    case 42:
                        if (var0) {
                            _fun74736_ip = 59;
                            continue _fun74736
                        }
                    case 45:
                        var3 = _closure1_slot4;
                        var3 = var3.CHANNEL;
                        var0 = var2 === var3;
                    case 59:
                        if (var0) {
                            _fun74736_ip = 76;
                            continue _fun74736
                        }
                    case 62:
                        var1 = _closure1_slot4;
                        var1 = var1.EMOJI;
                        var0 = var2 === var1;
                    case 76:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var3 = var5.bind(var6)(var3, var4);
        var0.results = var3;
        var0.autocompleteSelectionStart = var2;
        var0.query = var1;
        return var0;
    };
    var2.useHorizontalAutocompleteResults = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 660, 9408, 670, 566, 2]);