// modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.SearchListItemTypes;
    var _closure1_slot10 = var7;
    var7 = var3.SearchQueryTagTypes;
    var _closure1_slot11 = var7;
    var3 = var3.USER_ESTIMATED_ITEM_SIZE;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.SearchPopoutModes;
    var _closure1_slot13 = var7;
    var3 = var3.SearchTokenTypes;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot15 = var3;
    var3 = new Array(0);
    var _closure1_slot16 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun106966: for (var _fun106966_ip = 0;;) switch (_fun106966_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.searchContext;
                var _closure2_slot0 = var9;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 10;
                var2 = var8[var0];
                var4 = undefined;
                var11 = var6.bind(var4)(var2);
                var10 = var11.useStateFromStores;
                var2 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var2;
                var3 = new Array(1);
                var3[0] = var9;
                var0 = var8[var0];
                var0 = var6.bind(var4)(var0);
                var18 = var0.statesWillNeverBeEqual;
                var20 = function() { // Environment: var5
                    var2 = _closure1_slot8;
                    var1 = var2.getState;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var22 = var11;
                var21 = var7;
                var19 = var3;
                var15 = var22[var10](var21, var20, var19, var18, var17);
                var _closure2_slot1 = var15;
                var11 = _closure1_slot4;
                var2 = var11.useState;
                var0 = false;
                var3 = var2.bind(var11)(var0);
                var2 = _closure1_slot3;
                var0 = 2;
                var2 = var2.bind(var4)(var3, var0);
                var3 = 0;
                var0 = var2[var3];
                var _closure2_slot2 = var0;
                var13 = 1;
                var2 = var2[var13];
                var _closure2_slot3 = var2;
                var10 = _closure1_slot9;
                var7 = var10.useState;
                var2 = function(arg0) { // Environment: var5
                    var1 = arg0;
                    var0 = var1.isTextInputValueEmpty;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var7.bind(var10)(var9, var2);
                var7 = 11;
                var7 = var8[var7];
                var12 = var6.bind(var4)(var7);
                var10 = var12.useFullscreenPlaceholderCount;
                var7 = {};
                var14 = _closure1_slot12;
                var7.placeholderHeight = var14;
                var7.numColumns = var13;
                var16 = var10.bind(var12)(var7);
                var _closure2_slot4 = var16;
                var12 = var11.useCallback;
                var10 = new Array(1);
                var10[0] = var9;
                var7 = function() { // Environment: var5
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var3 = var4[var1];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var3);
                    var5 = var6.syncAutocomplete;
                    var3 = _closure2_slot0;
                    var5 = var5.bind(var6)(var3);
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.fetchInitialMessages;
                    var1 = var1.bind(var2)(var3);
                    return var0;
                };
                var7 = var12.bind(var11)(var7, var10);
                var _closure2_slot5 = var7;
                var13 = var11.useCallback;
                var12 = new Array(2);
                var12[0] = var7;
                var12[1] = var9;
                var10 = function(arg0) { // Environment: var5
                    _fun106970: for (var _fun106970_ip = 0;;) switch (_fun106970_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var6 = _closure1_slot9;
                            var5 = var6.getState;
                            var4 = _closure2_slot0;
                            var3 = function(arg0) { // Environment: var2
                                var1 = arg0;
                                var0 = var1.getPrefixTag;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var5 = var5.bind(var6)(var4, var3);
                            var3 = null;
                            if (!(var3 != var5)) {
                                _fun106970_ip = 143;
                                continue _fun106970
                            }
                        case 48:
                            var4 = _closure1_slot9;
                            var3 = var4.setState;
                            var6 = _closure2_slot0;
                            var2 = function(arg0) { // Environment: var2
                                var2 = arg0;
                                var1 = var2.setTextInputValue;
                                var0 = '';
                                var0 = var1.bind(var2)(var0);
                                var1 = var2.addTag;
                                var0 = {};
                                var3 = _closure1_slot11;
                                var3 = var3.ANSWER;
                                var0.type = var3;
                                var3 = _closure3_slot0;
                                var0.text = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var2 = var3.bind(var4)(var6, var2);
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.trackSearchFilterAdd;
                            var2 = {};
                            var2.searchContext = var6;
                            var6 = var5.searchTokenType;
                            var2.searchTokenType = var6;
                            var5 = var5.location;
                            var2.location = var5;
                            var2 = var3.bind(var4)(var2);
                            var0 = _closure2_slot5;
                            var0 = var0.bind(var1)();
                        case 143:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12 = var13.bind(var11)(var10, var12);
                var _closure2_slot6 = var12;
                var14 = var11.useCallback;
                var13 = new Array(2);
                var13[0] = var7;
                var13[1] = var9;
                var10 = function(arg0) { // Environment: var5
                    _fun106973: for (var _fun106973_ip = 0;;) switch (_fun106973_ip) {
                        case 0:
                            var4 = _closure1_slot7;
                            var3 = var4.getUser;
                            var0 = arg0;
                            var0 = var3.bind(var4)(var0);
                            var _closure3_slot0 = var0;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun106973_ip = 165;
                                continue _fun106973
                            }
                        case 36:
                            var7 = _closure1_slot9;
                            var6 = var7.getState;
                            var5 = _closure2_slot0;
                            var4 = function(arg0) { // Environment: var2
                                var1 = arg0;
                                var0 = var1.getPrefixTag;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var5 = var6.bind(var7)(var5, var4);
                            if (!(var3 != var5)) {
                                _fun106973_ip = 165;
                                continue _fun106973
                            }
                        case 70:
                            var4 = _closure1_slot9;
                            var3 = var4.setState;
                            var6 = _closure2_slot0;
                            var2 = function(arg0) { // Environment: var2
                                var3 = arg0;
                                var1 = var3.setTextInputValue;
                                var0 = '';
                                var0 = var1.bind(var3)(var0);
                                var2 = var3.addTag;
                                var1 = {};
                                var4 = _closure1_slot11;
                                var4 = var4.ANSWER;
                                var1.type = var4;
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var0 = 14;
                                var4 = var4[var0];
                                var0 = undefined;
                                var6 = var5.bind(var0)(var4);
                                var5 = var6.getUserTag;
                                var4 = _closure3_slot0;
                                var5 = var5.bind(var6)(var4);
                                var1.text = var5;
                                var4 = var4.id;
                                var1.userId = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var2 = var3.bind(var4)(var6, var2);
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.trackSearchFilterAdd;
                            var2 = {};
                            var2.searchContext = var6;
                            var6 = var5.searchTokenType;
                            var2.searchTokenType = var6;
                            var5 = var5.location;
                            var2.location = var5;
                            var2 = var3.bind(var4)(var2);
                            var0 = _closure2_slot5;
                            var0 = var0.bind(var1)();
                        case 165:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var14.bind(var11)(var10, var13);
                var _closure2_slot7 = var14;
                var13 = var11.useCallback;
                var10 = new Array(2);
                var10[0] = var7;
                var10[1] = var9;
                var7 = function(arg0) { // Environment: var5
                    _fun106976: for (var _fun106976_ip = 0;;) switch (_fun106976_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var3 = _closure1_slot5;
                            var0 = var3.getChannel;
                            var8 = var0.bind(var3)(var4);
                            var3 = null;
                            if (!(var3 != var8)) {
                                _fun106976_ip = 321;
                                continue _fun106976
                            }
                        case 35:
                            var7 = _closure1_slot9;
                            var6 = var7.getState;
                            var5 = _closure2_slot0;
                            var4 = function(arg0) { // Environment: var2
                                var1 = arg0;
                                var0 = var1.getPrefixTag;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var5 = var6.bind(var7)(var5, var4);
                            if (!(var3 != var5)) {
                                _fun106976_ip = 321;
                                continue _fun106976
                            }
                        case 72:
                            var4 = var8.name;
                            var _closure3_slot1 = var4;
                            var4 = var8.isGroupDM;
                            var4 = var4.bind(var8)();
                            if (var4) {
                                _fun106976_ip = 179;
                                continue _fun106976
                            }
                        case 94:
                            var4 = var8.isDM;
                            var4 = var4.bind(var8)();
                            if (!var4) {
                                _fun106976_ip = 226;
                                continue _fun106976
                            }
                        case 107:
                            var4 = var8.getRecipientId;
                            var7 = var4.bind(var8)();
                            var6 = _closure1_slot7;
                            var4 = var6.getUser;
                            var6 = var4.bind(var6)(var7);
                            if (!(var3 != var6)) {
                                _fun106976_ip = 175;
                                continue _fun106976
                            }
                        case 136:
                            var7 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 14;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var7.bind(var3)(var4);
                            var3 = var4.getUserTag;
                            var3 = var3.bind(var4)(var6);
                            _closure3_slot1 = var3;
                            _fun106976_ip = 226;
                            continue _fun106976;
                        case 175:
                            var3 = undefined;
                            return var3;
                        case 179:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 15;
                            var4 = var4[var3];
                            var3 = undefined;
                            var7 = var6.bind(var3)(var4);
                            var6 = var7.computeChannelName;
                            var4 = _closure1_slot7;
                            var3 = _closure1_slot6;
                            var3 = var6.bind(var7)(var8, var4, var3);
                            _closure3_slot1 = var3;
                        case 226:
                            var4 = _closure1_slot9;
                            var3 = var4.setState;
                            var6 = _closure2_slot0;
                            var2 = function(arg0) { // Environment: var2
                                var3 = arg0;
                                var1 = var3.setTextInputValue;
                                var0 = '';
                                var0 = var1.bind(var3)(var0);
                                var2 = var3.addTag;
                                var1 = {};
                                var4 = _closure1_slot11;
                                var4 = var4.ANSWER;
                                var1.type = var4;
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 16;
                                var4 = var4[var0];
                                var0 = undefined;
                                var7 = var5.bind(var0)(var4);
                                var6 = var7.quoteChannelName;
                                var5 = _closure3_slot1;
                                var5 = var6.bind(var7)(var5);
                                var1.text = var5;
                                var4 = _closure3_slot0;
                                var1.channelId = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var2 = var3.bind(var4)(var6, var2);
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.trackSearchFilterAdd;
                            var2 = {};
                            var2.searchContext = var6;
                            var6 = var5.searchTokenType;
                            var2.searchTokenType = var6;
                            var5 = var5.location;
                            var2.location = var5;
                            var2 = var3.bind(var4)(var2);
                            var0 = _closure2_slot5;
                            var0 = var0.bind(var1)();
                        case 321:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var13.bind(var11)(var7, var10);
                var _closure2_slot8 = var13;
                var17 = var11.useEffect;
                var10 = new Array(4);
                var10[0] = var9;
                var10[1] = var13;
                var10[2] = var12;
                var10[3] = var14;
                var7 = function() { // Environment: var5
                    var5 = _closure1_slot9;
                    var4 = var5.subscribeState;
                    var9 = _closure2_slot0;
                    var2 = {};
                    var1 = true;
                    var2.fireImmediately = var1;
                    var8 = function(arg0) { // Environment: var0
                        _fun106980: for (var _fun106980_ip = 0;;) switch (_fun106980_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = {};
                                var1 = var2.isAutocompleteVisible;
                                var1 = var1.bind(var2)();
                                var0.isAutocompleteVisible = var1;
                                var1 = var2.getTextInputValue;
                                var1 = var1.bind(var2)();
                                var0.textInputValue = var1;
                                var1 = var2.getPrefixTag;
                                var2 = var1.bind(var2)();
                                var1 = null;
                                var3 = var1 != var2;
                                if (!var3) {
                                    _fun106980_ip = 57;
                                    continue _fun106980
                                }
                            case 54:
                                var1 = var2;
                            case 57:
                                var0.prefixTag = var1;
                                return var0;
                        }
                    };
                    var7 = function(arg0, arg1) { // Environment: var0
                        _fun106981: for (var _fun106981_ip = 0;;) switch (_fun106981_ip) {
                            case 0:
                                var0 = arg0;
                                var6 = arg1;
                                var1 = null;
                                if (!(var1 != var0)) {
                                    _fun106981_ip = 93;
                                    continue _fun106981
                                }
                            case 12:
                                var4 = var0.textInputValue;
                                var3 = var0.prefixTag;
                                var5 = var0.isAutocompleteVisible;
                                var7 = var1 == var6;
                                var2 = undefined;
                                var0 = undefined;
                                if (var7) {
                                    _fun106981_ip = 47;
                                    continue _fun106981
                                }
                            case 41:
                                var0 = var6.textInputValue;
                            case 47:
                                var7 = var1 == var6;
                                var1 = undefined;
                                if (var7) {
                                    _fun106981_ip = 62;
                                    continue _fun106981
                                }
                            case 56:
                                var1 = var6.prefixTag;
                            case 62:
                                if (!var5) {
                                    _fun106981_ip = 93;
                                    continue _fun106981
                                }
                            case 65:
                                var0 = var4 === var0;
                                if (!var0) {
                                    _fun106981_ip = 76;
                                    continue _fun106981
                                }
                            case 72:
                                var0 = var3 === var1;
                            case 76:
                                if (var0) {
                                    _fun106981_ip = 93;
                                    continue _fun106981
                                }
                            case 79:
                                var1 = _closure2_slot3;
                                var0 = true;
                                var0 = var1.bind(var2)(var0);
                            case 93:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var10 = var5;
                    var6 = var2;
                    var0 = var10[var4](var9, var8, var7, var6, var5);
                    return var0;
                };
                var7 = var17.bind(var11)(var7, var10);
                var17 = var11.useEffect;
                var7 = var15.autocompletes;
                var10 = new Array(1);
                var10[0] = var7;
                var7 = function() { // Environment: var5
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7 = var17.bind(var11)(var7, var10);
                var10 = var11.useMemo;
                var7 = new Array(7);
                var7[0] = var0;
                var7[1] = var9;
                var7[2] = var16;
                var7[3] = var15;
                var7[4] = var14;
                var7[5] = var13;
                var7[6] = var12;
                var5 = function() { // Environment: var5
                    _fun106983: for (var _fun106983_ip = 0;;) switch (_fun106983_ip) {
                        case 0:
                            var0 = new Array(0);
                            var _closure3_slot0 = var0;
                            var2 = _closure2_slot2;
                            if (var2) {
                                _fun106983_ip = 598;
                                continue _fun106983
                            }
                        case 23:
                            var5 = global;
                            var11 = var5.Set;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var12 = 17;
                            var7 = var3[var12];
                            var9 = undefined;
                            var10 = var4.bind(var9)(var7);
                            var8 = var10.getSearchQueryUserIds;
                            var7 = _closure2_slot0;
                            var16 = var8.bind(var10)(var7);
                            var10 = var11.prototype;
                            var10 = Object.create(var10, {
                                constructor: {
                                    value: var11
                                }
                            });
                            var17 = var10;
                            var8 = new var17[var11](var16, var15);
                            var8 = var8 instanceof Object ? var8 : var10;
                            var _closure3_slot1 = var8;
                            var5 = var5.Set;
                            var3 = var3[var12];
                            var4 = var4.bind(var9)(var3);
                            var3 = var4.getSearchQueryChannelIds;
                            var16 = var3.bind(var4)(var7);
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var17 = var4;
                            var3 = new var17[var5](var16, var15);
                            var3 = var3 instanceof Object ? var3 : var4;
                            var _closure3_slot2 = var3;
                            var10 = function arg0, arg1() {
                                _fun106984: for (var _fun106984_ip = 0;;) switch (_fun106984_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var2 = arg1;
                                        var1 = null;
                                        var0 = var1 == var2;
                                        if (var0) {
                                            _fun106984_ip = 19;
                                            continue _fun106984
                                        }
                                    case 15:
                                        var0 = var1 == var4;
                                    case 19:
                                        if (var0) {
                                            _fun106984_ip = 39;
                                            continue _fun106984
                                        }
                                    case 22:
                                        var3 = _closure3_slot1;
                                        var1 = var3.has;
                                        var0 = var1.bind(var3)(var4);
                                    case 39:
                                        if (var0) {
                                            _fun106984_ip = 60;
                                            continue _fun106984
                                        }
                                    case 42:
                                        var3 = _closure1_slot6;
                                        var1 = var3.isBlockedOrIgnored;
                                        var0 = var1.bind(var3)(var4);
                                    case 60:
                                        if (var0) {
                                            _fun106984_ip = 94;
                                            continue _fun106984
                                        }
                                    case 63:
                                        var3 = _closure3_slot1;
                                        var1 = var3.add;
                                        var1 = var1.bind(var3)(var4);
                                        var1 = _closure3_slot0;
                                        var0 = var1.push;
                                        var0 = var0.bind(var1)(var2);
                                    case 94:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot3 = var10;
                            var3 = function arg0, arg1() {
                                _fun106985: for (var _fun106985_ip = 0;;) switch (_fun106985_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var2 = arg1;
                                        var1 = null;
                                        var0 = var1 == var2;
                                        if (var0) {
                                            _fun106985_ip = 19;
                                            continue _fun106985
                                        }
                                    case 15:
                                        var0 = var1 == var4;
                                    case 19:
                                        if (var0) {
                                            _fun106985_ip = 39;
                                            continue _fun106985
                                        }
                                    case 22:
                                        var3 = _closure3_slot2;
                                        var1 = var3.has;
                                        var0 = var1.bind(var3)(var4);
                                    case 39:
                                        if (var0) {
                                            _fun106985_ip = 73;
                                            continue _fun106985
                                        }
                                    case 42:
                                        var3 = _closure3_slot2;
                                        var1 = var3.add;
                                        var1 = var1.bind(var3)(var4);
                                        var1 = _closure3_slot0;
                                        var0 = var1.push;
                                        var0 = var0.bind(var1)(var2);
                                    case 73:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot4 = var3;
                            var3 = _closure2_slot1;
                            var8 = var3.autocompletes;
                            var5 = var3.tokens;
                            var3 = var3.mode;
                            var _closure3_slot5 = var3;
                            var7 = var8.forEach;
                            var4 = function(arg0) { // Environment: var1
                                _fun106986: for (var _fun106986_ip = 0;;) switch (_fun106986_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = _closure3_slot5;
                                        var3 = var2.type;
                                        var2 = _closure1_slot13;
                                        var2 = var2.FILTER;
                                        if (!(var3 === var2)) {
                                            _fun106986_ip = 78;
                                            continue _fun106986
                                        }
                                    case 34:
                                        var2 = var1.results;
                                        var1 = var1.group;
                                        var _closure4_slot0 = var1;
                                        var3 = var2.length;
                                        var1 = 0;
                                        if (!(var1 !== var3)) {
                                            _fun106986_ip = 78;
                                            continue _fun106986
                                        }
                                    case 61:
                                        var1 = var2.forEach;
                                        var0 = function(arg0) { // Environment: var0
                                            _fun106987: for (var _fun106987_ip = 0;;) switch (_fun106987_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var11 = var0.user;
                                                    var10 = var0.channel;
                                                    var8 = var0.text;
                                                    var2 = _closure1_slot0;
                                                    var0 = _closure1_slot2;
                                                    var9 = 17;
                                                    var1 = var0[var9];
                                                    var0 = undefined;
                                                    var4 = var2.bind(var0)(var1);
                                                    var3 = var4.toSearchListUserItem;
                                                    var2 = _closure2_slot0;
                                                    var1 = _closure2_slot7;
                                                    var7 = var3.bind(var4)(var2, var11, var1);
                                                    var4 = _closure3_slot3;
                                                    var3 = null;
                                                    var12 = var3 == var11;
                                                    var2 = undefined;
                                                    if (var12) {
                                                        _fun106987_ip = 90;
                                                        continue _fun106987
                                                    }
                                                case 85:
                                                    var2 = var11.id;
                                                case 90:
                                                    var2 = var4.bind(var0)(var2, var7);
                                                    var4 = _closure1_slot0;
                                                    var2 = _closure1_slot2;
                                                    var2 = var2[var9];
                                                    var7 = var4.bind(var0)(var2);
                                                    var4 = var7.toSearchListChannelItem;
                                                    var2 = _closure2_slot8;
                                                    var7 = var4.bind(var7)(var10, var2);
                                                    var4 = _closure3_slot4;
                                                    var11 = var3 == var10;
                                                    var2 = undefined;
                                                    if (var11) {
                                                        _fun106987_ip = 147;
                                                        continue _fun106987
                                                    }
                                                case 142:
                                                    var2 = var10.id;
                                                case 147:
                                                    var2 = var4.bind(var0)(var2, var7);
                                                    var7 = _closure4_slot0;
                                                    var4 = _closure1_slot14;
                                                    var4 = var4.FILTER_HAS;
                                                    var4 = var7 === var4;
                                                    if (!var4) {
                                                        _fun106987_ip = 181;
                                                        continue _fun106987
                                                    }
                                                case 177:
                                                    var4 = var3 != var8;
                                                case 181:
                                                    if (!var4) {
                                                        _fun106987_ip = 264;
                                                        continue _fun106987
                                                    }
                                                case 184:
                                                    var10 = _closure3_slot0;
                                                    var7 = var10.push;
                                                    var4 = {};
                                                    var11 = _closure1_slot10;
                                                    var11 = var11.GENERIC;
                                                    var4.type = var11;
                                                    var11 = {};
                                                    var11.text = var8;
                                                    var13 = _closure1_slot0;
                                                    var12 = _closure1_slot2;
                                                    var12 = var12[var9];
                                                    var13 = var13.bind(var0)(var12);
                                                    var12 = var13.getSearchFilterHasIcon;
                                                    var12 = var12.bind(var13)(var8);
                                                    var11.icon = var12;
                                                    var12 = _closure2_slot6;
                                                    var11.onPress = var12;
                                                    var4.props = var11;
                                                    var4 = var7.bind(var10)(var4);
                                                case 264:
                                                    var4 = _closure4_slot0;
                                                    var2 = _closure1_slot14;
                                                    var2 = var2.FILTER_AUTHOR_TYPE;
                                                    var2 = var4 === var2;
                                                    if (!var2) {
                                                        _fun106987_ip = 289;
                                                        continue _fun106987
                                                    }
                                                case 285:
                                                    var2 = var3 != var8;
                                                case 289:
                                                    if (!var2) {
                                                        _fun106987_ip = 372;
                                                        continue _fun106987
                                                    }
                                                case 292:
                                                    var3 = _closure3_slot0;
                                                    var2 = var3.push;
                                                    var1 = {};
                                                    var4 = _closure1_slot10;
                                                    var4 = var4.GENERIC;
                                                    var1.type = var4;
                                                    var4 = {};
                                                    var4.text = var8;
                                                    var7 = _closure1_slot0;
                                                    var6 = _closure1_slot2;
                                                    var6 = var6[var9];
                                                    var7 = var7.bind(var0)(var6);
                                                    var6 = var7.getSearchFilterAuthorTypeIcon;
                                                    var6 = var6.bind(var7)(var8);
                                                    var4.icon = var6;
                                                    var5 = _closure2_slot6;
                                                    var4.onPress = var5;
                                                    var1.props = var4;
                                                    var1 = var2.bind(var3)(var1);
                                                case 372:
                                                    return var0;
                                            }
                                        };
                                        var0 = var1.bind(var2)(var0);
                                    case 78:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4 = var7.bind(var8)(var4);
                            var7 = var0.length;
                            var4 = 0;
                            if (!(var4 === var7)) {
                                _fun106983_ip = 580;
                                continue _fun106983
                            }
                        case 223:
                            var7 = var3.type;
                            var3 = _closure1_slot13;
                            var3 = var3.FILTER;
                            if (!(var7 !== var3)) {
                                _fun106983_ip = 580;
                                continue _fun106983
                            }
                        case 245:
                            var7 = var5.length;
                            var3 = 1;
                            var3 = var7 - var3;
                            var8 = var5[var3];
                            var3 = null;
                            if (!(var3 != var8)) {
                                _fun106983_ip = 580;
                                continue _fun106983
                            }
                        case 270:
                            var7 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 18;
                            var5 = var11[var5];
                            var5 = var7.bind(var9)(var5);
                            var5 = var5.Token;
                            var7 = var5.prototype;
                            var7 = Object.create(var7, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var17 = var7;
                            var16 = var8;
                            var5 = new var17[var5](var16, var15);
                            var8 = var5 instanceof Object ? var5 : var7;
                            var7 = var8.type;
                            var5 = _closure1_slot14;
                            var5 = var5.ANSWER_USERNAME_FROM;
                            if (!(var7 !== var5)) {
                                _fun106983_ip = 360;
                                continue _fun106983
                            }
                        case 338:
                            var7 = var8.type;
                            var5 = _closure1_slot14;
                            var5 = var5.ANSWER_USERNAME_MENTIONS;
                            if (!(var7 === var5)) {
                                _fun106983_ip = 486;
                                continue _fun106983
                            }
                        case 360:
                            var7 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 19;
                            var5 = var11[var5];
                            var7 = var7.bind(var9)(var5);
                            var5 = var7.isValidUserAutocomplete;
                            var5 = var5.bind(var7)(var8);
                            if (!var5) {
                                _fun106983_ip = 486;
                                continue _fun106983
                            }
                        case 394:
                            var7 = var8.getData;
                            var5 = 'userId';
                            var11 = var7.bind(var8)(var5);
                            if (!(var3 != var11)) {
                                _fun106983_ip = 486;
                                continue _fun106983
                            }
                        case 413:
                            var7 = _closure1_slot7;
                            var5 = var7.getUser;
                            var11 = var5.bind(var7)(var11);
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var12];
                            var13 = var7.bind(var9)(var5);
                            var12 = var13.toSearchListUserItem;
                            var7 = _closure2_slot0;
                            var5 = _closure2_slot7;
                            var7 = var12.bind(var13)(var7, var11, var5);
                            var12 = var3 == var11;
                            var5 = undefined;
                            if (var12) {
                                _fun106983_ip = 480;
                                continue _fun106983
                            }
                        case 475:
                            var5 = var11.id;
                        case 480:
                            var5 = var10.bind(var9)(var5, var7);
                        case 486:
                            var7 = var8.type;
                            var5 = _closure1_slot14;
                            var5 = var5.ANSWER_IN;
                            if (!(var7 === var5)) {
                                _fun106983_ip = 580;
                                continue _fun106983
                            }
                        case 505:
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 19;
                            var5 = var10[var5];
                            var9 = var7.bind(var9)(var5);
                            var7 = var9.isValidChannelAutocomplete;
                            var5 = _closure2_slot0;
                            var5 = var7.bind(var9)(var8, var5);
                            if (!var5) {
                                _fun106983_ip = 580;
                                continue _fun106983
                            }
                        case 544:
                            var7 = var8.getData;
                            var5 = 'channelIds';
                            var5 = var7.bind(var8)(var5);
                            if (!(var3 != var5)) {
                                _fun106983_ip = 580;
                                continue _fun106983
                            }
                        case 563:
                            var3 = var5.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun106988: for (var _fun106988_ip = 0;;) switch (_fun106988_ip) {
                                    case 0:
                                        var3 = _closure1_slot5;
                                        var2 = var3.getChannel;
                                        var1 = arg0;
                                        var4 = var2.bind(var3)(var1);
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 17;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.toSearchListChannelItem;
                                        var1 = _closure2_slot8;
                                        var3 = var2.bind(var3)(var4, var1);
                                        var2 = _closure3_slot4;
                                        var1 = null;
                                        var5 = var1 == var4;
                                        var1 = undefined;
                                        if (var5) {
                                            _fun106988_ip = 84;
                                            continue _fun106988
                                        }
                                    case 79:
                                        var1 = var4.id;
                                    case 84:
                                        var1 = var2.bind(var0)(var1, var3);
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var5)(var1);
                        case 580:
                            var3 = var0.length;
                            var1 = var0;
                            if (!(!(var3 > var4))) {
                                _fun106983_ip = 596;
                                continue _fun106983
                            }
                        case 592:
                            var1 = _closure1_slot16;
                        case 596:
                            return var1;
                        case 598:
                            var1 = _closure2_slot4;
                            var5 = 0;
                            var1 = var5 < var1;
                            var3 = global;
                            var2 = 'message-placeholder-';
                            if (!var1) {
                                _fun106983_ip = 679;
                                continue _fun106983
                            }
                        case 622:
                            var7 = var0.push;
                            var1 = {};
                            var8 = _closure1_slot10;
                            var8 = var8.MESSAGE_PLACEHOLDER;
                            var1.type = var8;
                            var8 = var3.HermesInternal;
                            var8 = var8.concat;
                            var8 = var8.bind(var2)(var5);
                            var1.key = var8;
                            var1 = var7.bind(var0)(var1);
                            var5 = var5 + 1;
                            var1 = _closure2_slot4;
                            if (var5 < var1) {
                                _fun106983_ip = 622;
                                continue _fun106983
                            }
                        case 679:
                            return var0;
                    }
                };
                var7 = var10.bind(var11)(var5, var7);
                var5 = 20;
                var5 = var8[var5];
                var8 = var6.bind(var4)(var5);
                var6 = var8.useMessageTabCountsErrorText;
                var5 = {};
                var5.searchContext = var9;
                var5 = var6.bind(var8)(var5);
                var6 = null;
                if (!(var6 == var5)) {
                    _fun106966_ip = 769;
                    continue _fun106966
                }
            case 510:
                if (!var2) {
                    _fun106966_ip = 525;
                    continue _fun106966
                }
            case 513:
                var6 = var7.length;
                if (!(var3 !== var6)) {
                    _fun106966_ip = 678;
                    continue _fun106966
                }
            case 525:
                if (var2) {
                    _fun106966_ip = 631;
                    continue _fun106966
                }
            case 528:
                var2 = var7.length;
                if (!(var3 === var2)) {
                    _fun106966_ip = 631;
                    continue _fun106966
                }
            case 537:
                if (var0) {
                    _fun106966_ip = 631;
                    continue _fun106966
                }
            case 540:
                var3 = _closure1_slot15;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 21;
                var0 = var11[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var10 = _closure1_slot0;
                var6 = 22;
                var8 = var11[var6];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var11[var6];
                var6 = var10.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.Dr1vko;
                var6 = var8.bind(var9)(var6);
                var0.text = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun106966_ip = 676;
                continue _fun106966;
            case 631:
                var6 = _closure1_slot15;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 23;
                var2 = var8[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var8 = _closure1_slot12;
                var2.estimatedItemSize = var8;
                var2.data = var7;
                var0 = var6.bind(var4)(var3, var2);
            case 676:
                _fun106966_ip = 767;
                continue _fun106966;
            case 678:
                var6 = _closure1_slot15;
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 21;
                var2 = var11[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var10 = _closure1_slot0;
                var7 = 22;
                var8 = var11[var7];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7["E4HqQ+"];
                var7 = var8.bind(var9)(var7);
                var2.text = var7;
                var0 = var6.bind(var4)(var3, var2);
            case 767:
                _fun106966_ip = 805;
                continue _fun106966;
            case 769:
                var3 = _closure1_slot15;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 21;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.text = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 805:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/layout/autocomplete/AutocompleteScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1372, 3100, 1621, 8985, 8981, 8917, 660, 33, 566, 13725, 11676, 8980, 3236, 4792, 8983, 13826, 8989, 8984, 13778, 13715, 1234, 13729, 2]);