// modules/search/native/components/tabs/pages/RecentScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun105600: for (var _fun105600_ip = 0;;) switch (_fun105600_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun105600_ip = 45;
                    continue _fun105600
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun105600_ip = 54;
                    continue _fun105600
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun105600_ip = 344;
                    continue _fun105600
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun105600_ip = 322;
                    continue _fun105600
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun105600_ip = 282;
                    continue _fun105600
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun105600_ip = 269;
                    continue _fun105600
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun105600_ip = 162;
                    continue _fun105600
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun105600_ip = 178;
                    continue _fun105600
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun105600_ip = 248;
                    continue _fun105600
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun105600_ip = 248;
                    continue _fun105600
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun105600_ip = 233;
                    continue _fun105600
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun105600_ip = 246;
                    continue _fun105600
                }
            case 233:
                var8 = _closure1_slot24;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun105600_ip = 264;
                continue _fun105600;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun105600_ip = 282;
                continue _fun105600;
            case 269:
                var6 = _closure1_slot24;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun105600_ip = 322;
                    continue _fun105600
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun105600_ip = 329;
                    continue _fun105600
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun105601: for (var _fun105601_ip = 0;;) switch (_fun105601_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun105601_ip = 56;
                                continue _fun105601
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun105601_ip = 67;
                            continue _fun105601;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun105602: for (var _fun105602_ip = 0;;) switch (_fun105602_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun105602_ip = 23;
                    continue _fun105602
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun105602_ip = 33;
                    continue _fun105602
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun105602_ip = 70;
                    continue _fun105602
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun105602_ip = 55;
                    continue _fun105602
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
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
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
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
    var7 = var3.EMPTY_SEARCH_QUERY_STRING;
    var _closure1_slot10 = var7;
    var7 = var3.MESSAGE_PLACEHOLDER_ITEM_SIZE;
    var _closure1_slot11 = var7;
    var7 = var3.RECENTS_ESTIMATED_ITEM_SIZE;
    var _closure1_slot12 = var7;
    var7 = var3.SearchListItemTypes;
    var _closure1_slot13 = var7;
    var3 = var3.SearchTabs;
    var _closure1_slot14 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMPTY_MEDIA_RESULTS;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchTypes;
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot17 = var3;
    var3 = function(arg0) { // Original name: ClearAllHistory, environment: var1
        var0 = arg0;
        var0 = var0.searchContext;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot17;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 11;
        var0 = var10[var0];
        var2 = undefined;
        var0 = var9.bind(var2)(var0);
        var1 = var0.PressableHighlight;
        var0 = {
            'onPress': null,
            'accessibilityRole': 'button',
            'unstable_pressDelay': 130
        };
        var4 = function() { // Original name: onPress, environment: var4
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.clearSearchHistory;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.onPress = var4;
        var6 = 13;
        var4 = var10[var6];
        var4 = var9.bind(var2)(var4);
        var7 = var4.intl;
        var5 = var7.string;
        var4 = var10[var6];
        var4 = var9.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.LFTAUp;
        var4 = var5.bind(var7)(var4);
        var0.accessibilityLabel = var4;
        var4 = 14;
        var4 = var10[var4];
        var4 = var9.bind(var2)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'text-sm/semibold',
            'color': 'text-brand'
        };
        var7 = var10[var6];
        var7 = var9.bind(var2)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var2)(var6);
        var6 = var6.t;
        var6 = var6.LFTAUp;
        var6 = var7.bind(var8)(var6);
        var4.children = var6;
        var4 = var3.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var3;
    var3 = function(arg0) { // Original name: ViewAll, environment: var1
        var0 = arg0;
        var4 = var0.onJumpToMedia;
        var3 = _closure1_slot17;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 11;
        var0 = var10[var0];
        var2 = undefined;
        var0 = var9.bind(var2)(var0);
        var1 = var0.PressableHighlight;
        var0 = {
            'onPress': null,
            'accessibilityRole': 'button',
            'unstable_pressDelay': 130
        };
        var0.onPress = var4;
        var6 = 13;
        var4 = var10[var6];
        var4 = var9.bind(var2)(var4);
        var7 = var4.intl;
        var5 = var7.string;
        var4 = var10[var6];
        var4 = var9.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.Ofpgwh;
        var4 = var5.bind(var7)(var4);
        var0.accessibilityLabel = var4;
        var4 = 14;
        var4 = var10[var4];
        var4 = var9.bind(var2)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'text-sm/semibold',
            'color': 'text-brand'
        };
        var7 = var10[var6];
        var7 = var9.bind(var2)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var2)(var6);
        var6 = var6.t;
        var6 = var6.Ofpgwh;
        var6 = var7.bind(var8)(var6);
        var4.children = var6;
        var4 = var3.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        var1 = arg0;
        var12 = var1.searchContext;
        var _closure2_slot0 = var12;
        var14 = var1.onJumpToMedia;
        var _closure2_slot1 = var14;
        var2 = var1.suggestedData;
        var _closure2_slot2 = var2;
        var16 = _closure1_slot9;
        var3 = var16.useState;
        var1 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.getSearchResultsQuery;
            var0 = var0.bind(var1)();
            return var0;
        };
        var10 = var3.bind(var16)(var12, var1);
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 19;
        var4 = var7[var1];
        var3 = undefined;
        var9 = var5.bind(var3)(var4);
        var8 = var9.getSearchTabFetchId;
        var4 = _closure1_slot14;
        var4 = var4.MEDIA;
        var4 = var8.bind(var9)(var12, var4, var10);
        var _closure2_slot3 = var4;
        var8 = 20;
        var4 = var7[var8];
        var13 = var5.bind(var3)(var4);
        var11 = var13.useStateFromStores;
        var4 = _closure1_slot6;
        var10 = new Array(1);
        var10[0] = var4;
        var9 = function() { // Environment: var0
            var2 = _closure1_slot6;
            var1 = var2.getMessages;
            var0 = _closure2_slot3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var18 = var11.bind(var13)(var10, var9);
        var _closure2_slot4 = var18;
        var8 = var7[var8];
        var10 = var5.bind(var3)(var8);
        var9 = var10.useStateFromStores;
        var8 = new Array(1);
        var8[0] = var4;
        var4 = function() { // Environment: var0
            var2 = _closure1_slot6;
            var1 = var2.getIsInitialFetchComplete;
            var0 = _closure2_slot3;
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var10 = var9.bind(var10)(var8, var4);
        var _closure2_slot5 = var10;
        var1 = var7[var1];
        var4 = var5.bind(var3)(var1);
        var1 = var4.getSearchContextId;
        var4 = var1.bind(var4)(var12);
        var1 = function(arg0) { // Original name: useSearchHistory, environment: var0
            var7 = arg0;
            var _closure3_slot0 = var7;
            var6 = _closure1_slot5;
            var3 = var6.useState;
            var0 = function() { // Environment: var1
                var2 = _closure1_slot8;
                var1 = var2.getSearchHistory;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var5 = var3.bind(var6)(var0);
            var3 = _closure1_slot3;
            var4 = undefined;
            var0 = 2;
            var5 = var3.bind(var4)(var5, var0);
            var0 = 0;
            var0 = var5[var0];
            var3 = 1;
            var3 = var5[var3];
            var _closure3_slot1 = var3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 21;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useFocusEffect;
            var5 = var6.useCallback;
            var4 = new Array(1);
            var4[0] = var7;
            var1 = function() { // Environment: var1
                var3 = function() { // Original name: handleChange, environment: var0
                    var2 = _closure3_slot1;
                    var3 = _closure1_slot8;
                    var1 = var3.getSearchHistory;
                    var0 = _closure3_slot0;
                    var1 = var1.bind(var3)(var0);
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var _closure4_slot0 = var3;
                var1 = undefined;
                var1 = var3.bind(var1)();
                var2 = _closure1_slot8;
                var1 = var2.addReactChangeListener;
                var1 = var1.bind(var2)(var3);
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.removeReactChangeListener;
                    var0 = _closure4_slot0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                return var0;
            };
            var1 = var5.bind(var6)(var1, var4);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var11 = var1.bind(var3)(var4);
        var _closure2_slot6 = var11;
        var1 = _closure1_slot1;
        var4 = 22;
        var4 = var7[var4];
        var4 = var1.bind(var3)(var4);
        var9 = var4.bind(var3)();
        var _closure2_slot7 = var9;
        var8 = _closure1_slot5;
        var15 = var8.useMemo;
        var13 = new Array(2);
        var13[0] = var18;
        var13[1] = var12;
        var4 = function() { // Environment: var0
            _fun105615: for (var _fun105615_ip = 0;;) switch (_fun105615_ip) {
                case 0:
                    var1 = _closure2_slot4;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun105615_ip = 169;
                        continue _fun105615
                    }
                case 18:
                    var0 = _closure2_slot4;
                    var1 = var0.length;
                    var0 = 0;
                    if (!(var0 !== var1)) {
                        _fun105615_ip = 169;
                        continue _fun105615
                    }
                case 36:
                    var0 = new Array(0);
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot23;
                    var1 = _closure2_slot4;
                    var6 = undefined;
                    var5 = var2.bind(var6)(var1);
                    var2 = var5.bind(var6)();
                    var1 = var2.done;
                    var4 = 23;
                    var3 = 9;
                    if (var1) {
                        _fun105615_ip = 167;
                        continue _fun105615
                    }
                case 80:
                    var13 = var2.value;
                    var10 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var4];
                    var12 = var10.bind(var6)(var1);
                    var11 = var12.getMedia;
                    var10 = _closure2_slot0;
                    var1 = new Array(1);
                    var1[0] = var13;
                    var11 = var11.bind(var12)(var10, var1);
                    var10 = var11.forEach;
                    var1 = function(arg0) { // Environment: var9
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var10.bind(var11)(var1);
                    var1 = var0.length;
                    if (!(!(var1 >= var3))) {
                        _fun105615_ip = 167;
                        continue _fun105615
                    }
                case 152:
                    var10 = var5.bind(var6)();
                    var1 = var10.done;
                    var2 = var10;
                    if (!var1) {
                        _fun105615_ip = 80;
                        continue _fun105615
                    }
                case 167:
                    return var0;
                case 169:
                    var0 = _closure1_slot15;
                    return var0;
            }
        };
        var15 = var15.bind(var8)(var4, var13);
        var _closure2_slot8 = var15;
        var4 = 16;
        var4 = var7[var4];
        var17 = var5.bind(var3)(var4);
        var13 = var17.useOnPressMediaItem;
        var4 = {};
        var4.searchContext = var12;
        var4.allMediaResults = var15;
        var4 = var13.bind(var17)(var4);
        var _closure2_slot9 = var4;
        var17 = var8.useCallback;
        var13 = new Array(2);
        var13[0] = var18;
        var13[1] = var4;
        var4 = function(arg0) { // Environment: var0
            _fun105617: for (var _fun105617_ip = 0;;) switch (_fun105617_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.media;
                    var _closure3_slot0 = var3;
                    var2 = var0.originView;
                    var5 = _closure2_slot4;
                    var0 = null;
                    var5 = var0 == var5;
                    var0 = undefined;
                    var7 = undefined;
                    if (var5) {
                        _fun105617_ip = 62;
                        continue _fun105617
                    }
                case 41:
                    var6 = _closure2_slot4;
                    var5 = var6.find;
                    var4 = function(arg0) { // Environment: var4
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var0.messageId;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var7 = var5.bind(var6)(var4);
                case 62:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 24;
                    var5 = var8[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.shouldAgeVerifyForSearchMedia;
                    var5 = var5.bind(var6)(var3, var7);
                    if (var5) {
                        _fun105617_ip = 112;
                        continue _fun105617
                    }
                case 100:
                    var1 = _closure2_slot9;
                    var1 = var1.bind(var0)(var3, var2);
                    _fun105617_ip = 178;
                    continue _fun105617;
                case 112:
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 25;
                    var1 = var6[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showAgeVerificationGetStartedModal;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 26;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.AgeVerificationModalEntryPoint;
                    var4 = var4.SEARCH_MEDIA_PREVIEW;
                    var1.entryPoint = var4;
                    var1 = var2.bind(var3)(var1);
                case 178:
                    return var0;
            }
        };
        var17 = var17.bind(var8)(var4, var13);
        var _closure2_slot10 = var17;
        var13 = var16.useState;
        var4 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.isInitialSearchQuery;
            var0 = var0.bind(var1)();
            return var0;
        };
        var16 = var13.bind(var16)(var12, var4);
        var _closure2_slot11 = var16;
        var4 = 27;
        var4 = var7[var4];
        var13 = var5.bind(var3)(var4);
        var5 = var13.useFullscreenPlaceholderCount;
        var4 = {};
        var18 = _closure1_slot11;
        var4.placeholderHeight = var18;
        var18 = 1;
        var4.numColumns = var18;
        var13 = var5.bind(var13)(var4);
        var _closure2_slot12 = var13;
        var5 = var8.useMemo;
        var4 = new Array(9);
        var4[0] = var17;
        var4[1] = var16;
        var4[2] = var15;
        var4[3] = var9;
        var4[4] = var14;
        var4[5] = var13;
        var4[6] = var12;
        var4[7] = var11;
        var4[8] = var2;
        var2 = function() { // Environment: var0
            _fun105620: for (var _fun105620_ip = 0;;) switch (_fun105620_ip) {
                case 0:
                    var0 = new Array(0);
                    var _closure3_slot0 = var0;
                    var2 = _closure2_slot11;
                    if (var2) {
                        _fun105620_ip = 114;
                        continue _fun105620
                    }
                case 20:
                    var2 = var0.length;
                    var7 = 0;
                    if (!(var7 === var2)) {
                        _fun105620_ip = 114;
                        continue _fun105620
                    }
                case 31:
                    var2 = _closure2_slot12;
                    var2 = var7 < var2;
                    var5 = global;
                    var3 = 'message-placeholder-';
                    var7 = 0;
                    if (!var2) {
                        _fun105620_ip = 112;
                        continue _fun105620
                    }
                case 55:
                    var8 = var0.push;
                    var2 = {};
                    var9 = _closure1_slot13;
                    var9 = var9.MESSAGE_PLACEHOLDER;
                    var2.type = var9;
                    var9 = var5.HermesInternal;
                    var9 = var9.concat;
                    var9 = var9.bind(var3)(var7);
                    var2.key = var9;
                    var2 = var8.bind(var0)(var2);
                    var7 = var7 + 1;
                    var2 = _closure2_slot12;
                    if (var7 < var2) {
                        _fun105620_ip = 55;
                        continue _fun105620
                    }
                case 112:
                    return var0;
                case 114:
                    var2 = _closure2_slot6;
                    var2 = var2.length;
                    var8 = 0;
                    if (!(var2 > var8)) {
                        _fun105620_ip = 281;
                        continue _fun105620
                    }
                case 132:
                    var3 = var0.push;
                    var2 = {};
                    var5 = _closure1_slot13;
                    var5 = var5.SECTION;
                    var2.type = var5;
                    var5 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 13;
                    var9 = var13[var7];
                    var10 = undefined;
                    var9 = var12.bind(var10)(var9);
                    var11 = var9.intl;
                    var9 = var11.string;
                    var7 = var13[var7];
                    var7 = var12.bind(var10)(var7);
                    var7 = var7.t;
                    var7 = var7.ZZpBr4;
                    var7 = var9.bind(var11)(var7);
                    var5.title = var7;
                    var9 = _closure1_slot17;
                    var7 = _closure1_slot18;
                    var6 = {};
                    var11 = _closure2_slot0;
                    var6.searchContext = var11;
                    var6 = var9.bind(var10)(var7, var6);
                    var5.trailing = var6;
                    var2.props = var5;
                    var2 = var3.bind(var0)(var2);
                    var5 = _closure2_slot6;
                    var3 = var5.forEach;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var0 = {};
                        var3 = _closure1_slot13;
                        var3 = var3.SEARCH_HISTORY_ITEM;
                        var0.type = var3;
                        var3 = {};
                        var4 = arg0;
                        var3.searchHistoryItem = var4;
                        var4 = _closure2_slot0;
                        var3.searchContext = var4;
                        var0.props = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var3.bind(var5)(var2);
                case 281:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun105620_ip = 312;
                        continue _fun105620
                    }
                case 291:
                    var3 = _closure2_slot2;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                case 312:
                    var1 = _closure2_slot8;
                    var1 = var1.length;
                    if (!(var1 > var8)) {
                        _fun105620_ip = 529;
                        continue _fun105620
                    }
                case 328:
                    var2 = var0.push;
                    var1 = {};
                    var3 = _closure1_slot13;
                    var5 = var3.SECTION;
                    var1.type = var5;
                    var5 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 13;
                    var9 = var13[var7];
                    var10 = undefined;
                    var9 = var12.bind(var10)(var9);
                    var11 = var9.intl;
                    var9 = var11.string;
                    var7 = var13[var7];
                    var7 = var12.bind(var10)(var7);
                    var7 = var7.t;
                    var7 = var7.LBYpDH;
                    var7 = var9.bind(var11)(var7);
                    var5.title = var7;
                    var9 = _closure1_slot17;
                    var7 = _closure1_slot19;
                    var6 = {};
                    var11 = _closure2_slot1;
                    var6.onJumpToMedia = var11;
                    var6 = var9.bind(var10)(var7, var6);
                    var5.trailing = var6;
                    var1.props = var5;
                    var1 = var2.bind(var0)(var1);
                    var2 = var0.push;
                    var1 = {};
                    var3 = var3.MEDIA_GRID;
                    var1.type = var3;
                    var3 = {};
                    var7 = _closure2_slot8;
                    var6 = var7.slice;
                    var5 = 9;
                    var5 = var6.bind(var7)(var8, var5);
                    var3.media = var5;
                    var5 = _closure2_slot7;
                    var3.mediaSize = var5;
                    var4 = _closure2_slot10;
                    var3.onPress = var4;
                    var4 = true;
                    var3.animate = var4;
                    var1.props = var3;
                    var1 = var2.bind(var0)(var1);
                case 529:
                    return var0;
            }
        };
        var5 = var5.bind(var8)(var2, var4);
        var4 = var8.useMemo;
        var2 = new Array(2);
        var2[0] = var10;
        var2[1] = var9;
        var0 = function() { // Environment: var0
            _fun105623: for (var _fun105623_ip = 0;;) switch (_fun105623_ip) {
                case 0:
                    var1 = _closure2_slot5;
                    var0 = null;
                    if (!var1) {
                        _fun105623_ip = 21;
                        continue _fun105623
                    }
                case 12:
                    var0 = function() { // Environment: var1
                        var3 = _closure1_slot17;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 28;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var1.bind(var2)(var0);
                        var1 = var0.RecentsMediaGridPlaceholder;
                        var0 = {
                            'numRows': 3,
                            'visible': true
                        };
                        var4 = _closure2_slot7;
                        var0.size = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                case 21:
                    return var0;
            }
        };
        var4 = var4.bind(var8)(var0, var2);
        var2 = _closure1_slot17;
        var0 = 29;
        var0 = var7[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var6 = _closure1_slot12;
        var0.estimatedItemSize = var6;
        var0.data = var5;
        var0.ListFooterComponent = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot20 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        var4 = arg0;
        var1 = {};
        var0 = var4.searchContext;
        var1.searchContext = var0;
        var0 = function(arg0) { // Original name: useSuggestedUsersData, environment: var0
            var1 = arg0;
            var6 = var1.searchContext;
            var _closure3_slot0 = var6;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = {
                'query': null,
                'withGuildMembers': false,
                'withAffinitySuggestions': true,
                'affinitySuggestionsLimit': 3,
                'withFriends': false,
                'withFriendSuggestions': false,
                'withFriendRequests': false,
                'withFriendRequestsIncoming': false,
                'withFriendRequestsOutgoing': false,
                'excludeCurrentUser': true
            };
            var5 = _closure1_slot10;
            var3.query = var5;
            var4 = var4.bind(var2)(var3);
            var _closure3_slot1 = var4;
            var5 = _closure1_slot0;
            var3 = 16;
            var3 = var7[var3];
            var7 = var5.bind(var2)(var3);
            var5 = var7.useOnPressDMItem;
            var3 = {};
            var3.searchContext = var6;
            var7 = var5.bind(var7)(var3);
            var _closure3_slot2 = var7;
            var3 = _closure1_slot5;
            var5 = var3.useCallback;
            var1 = function() { // Environment: var0
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = function*(arg0) { // Environment: var0
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun105629: for (var _fun105629_ip = 0;;) switch (_fun105629_ip) {
                            case 0:
                                StartGenerator();
                                var4 = arg0;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun105629_ip = 121;
                                    continue _fun105629
                                }
                            case 10:
                                var5 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 17;
                                var1 = var2[var1];
                                var2 = undefined;
                                var5 = var5.bind(var2)(var1);
                                var1 = var5.getOrEnsurePrivateChannel;
                                var1 = var1.bind(var5)(var4);
                                SaveGenerator(address = 50);
                            case 48:
                                return var1;
                            case 50:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun105629_ip = 118;
                                    continue _fun105629
                                }
                            case 56:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var3 = 18;
                                var3 = var6[var3];
                                var7 = var5.bind(var2)(var3);
                                var6 = var7.trackSuggestedSearchClicked;
                                var5 = {};
                                var8 = _closure3_slot0;
                                var5.searchContext = var8;
                                var5.channelId = var1;
                                var5 = var6.bind(var7)(var5);
                                var3 = _closure3_slot2;
                                var3 = var3.bind(var2)(var4, var1);
                                return var2;
                            case 118:
                                return var1;
                            case 121:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var3.bind(var2)(var1);
                var _closure4_slot0 = var1;
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    var3 = _closure4_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                return var0;
            };
            var2 = var1.bind(var2)();
            var1 = new Array(2);
            var1[0] = var7;
            var1[1] = var6;
            var5 = var5.bind(var3)(var2, var1);
            var _closure3_slot3 = var5;
            var2 = var3.useMemo;
            var1 = new Array(2);
            var1[0] = var5;
            var1[1] = var4;
            var0 = function() { // Environment: var0
                _fun105631: for (var _fun105631_ip = 0;;) switch (_fun105631_ip) {
                    case 0:
                        var0 = new Array(0);
                        var _closure4_slot0 = var0;
                        var3 = _closure3_slot1;
                        var4 = var3.length;
                        var3 = 0;
                        if (!(var3 !== var4)) {
                            _fun105631_ip = 49;
                            continue _fun105631
                        }
                    case 28:
                        var3 = _closure3_slot1;
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            _fun105632: for (var _fun105632_ip = 0;;) switch (_fun105632_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = var0.title;
                                    var2 = var0.items;
                                    var1 = var2.length;
                                    var0 = 0;
                                    var0 = var0 !== var1;
                                    if (!var0) {
                                        _fun105632_ip = 34;
                                        continue _fun105632
                                    }
                                case 28:
                                    var1 = null;
                                    var0 = var1 != var5;
                                case 34:
                                    if (!var0) {
                                        _fun105632_ip = 102;
                                        continue _fun105632
                                    }
                                case 37:
                                    var3 = _closure4_slot0;
                                    var1 = var3.push;
                                    var0 = {};
                                    var4 = _closure1_slot13;
                                    var4 = var4.SECTION;
                                    var0.type = var4;
                                    var4 = {};
                                    var4.title = var5;
                                    var0.props = var4;
                                    var0 = var1.bind(var3)(var0);
                                    var1 = var2.forEach;
                                    var0 = function(arg0) { // Environment: var0
                                        var2 = _closure4_slot0;
                                        var1 = var2.push;
                                        var0 = {};
                                        var3 = _closure1_slot13;
                                        var3 = var3.DM;
                                        var0.type = var3;
                                        var3 = {};
                                        var4 = arg0;
                                        var4 = var4.user;
                                        var3.user = var4;
                                        var4 = _closure3_slot3;
                                        var3.onPress = var4;
                                        var0.props = var3;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 102:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                    case 49:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var3 = undefined;
        var5 = var0.bind(var3)(var1);
        var2 = _closure1_slot17;
        var1 = _closure1_slot20;
        var0 = {};
        var7 = var0;
        var6 = var4;
        var4 = copyDataProperties(var7, var6);
        var4 = 'suggestedData';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot21 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        var4 = arg0;
        var1 = {};
        var0 = var4.searchContext;
        var1.searchContext = var0;
        var0 = function(arg0) { // Original name: useSuggestedChannelsData, environment: var0
            var1 = arg0;
            var1 = var1.searchContext;
            var _closure3_slot0 = var1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 19;
            var2 = var7[var2];
            var5 = undefined;
            var4 = var6.bind(var5)(var2);
            var2 = var4.getSearchContextId;
            var2 = var2.bind(var4)(var1);
            var _closure3_slot1 = var2;
            var2 = 20;
            var2 = var7[var2];
            var9 = var6.bind(var5)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() { // Environment: var0
                var2 = _closure1_slot7;
                var1 = var2.getTextChannels;
                var0 = _closure3_slot1;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var8.bind(var9)(var4, var2);
            var _closure3_slot2 = var2;
            var4 = 16;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var5 = var6.useOnPressGuildTextChannel;
            var4 = {};
            var4.searchContext = var1;
            var6 = var5.bind(var6)(var4);
            var _closure3_slot3 = var6;
            var3 = _closure1_slot5;
            var5 = var3.useMemo;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() { // Environment: var0
                var3 = _closure3_slot2;
                var2 = var3.slice;
                var1 = 0;
                var0 = 3;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var4 = var5.bind(var3)(var2, var4);
            var _closure3_slot4 = var4;
            var5 = var3.useCallback;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var1;
            var1 = function(arg0) { // Environment: var0
                var2 = arg0;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 18;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var1);
                var4 = var5.trackSuggestedSearchClicked;
                var3 = {};
                var6 = _closure3_slot0;
                var3.searchContext = var6;
                var3.channelId = var2;
                var3 = var4.bind(var5)(var3);
                var1 = _closure3_slot3;
                var1 = var1.bind(var0)(var2);
                return var0;
            };
            var5 = var5.bind(var3)(var1, var2);
            var _closure3_slot5 = var5;
            var2 = var3.useMemo;
            var1 = new Array(2);
            var1[0] = var5;
            var1[1] = var4;
            var0 = function() { // Environment: var0
                _fun105639: for (var _fun105639_ip = 0;;) switch (_fun105639_ip) {
                    case 0:
                        var0 = new Array(0);
                        var _closure4_slot0 = var0;
                        var3 = _closure3_slot4;
                        var4 = var3.length;
                        var3 = 0;
                        if (!(var3 !== var4)) {
                            _fun105639_ip = 145;
                            continue _fun105639
                        }
                    case 28:
                        var4 = var0.push;
                        var3 = {};
                        var5 = _closure1_slot13;
                        var5 = var5.SECTION;
                        var3.type = var5;
                        var5 = {};
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var6 = 13;
                        var7 = var11[var6];
                        var9 = undefined;
                        var7 = var10.bind(var9)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var11[var6];
                        var6 = var10.bind(var9)(var6);
                        var6 = var6.t;
                        var6 = var6.HbJ7eD;
                        var6 = var7.bind(var8)(var6);
                        var5.title = var6;
                        var3.props = var5;
                        var3 = var4.bind(var0)(var3);
                        var3 = _closure3_slot4;
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            var4 = arg0;
                            var2 = _closure4_slot0;
                            var1 = var2.push;
                            var0 = {};
                            var3 = _closure1_slot13;
                            var3 = var3.GUILD_TEXT_CHANNEL;
                            var0.type = var3;
                            var3 = {};
                            var5 = var4.channel;
                            var3.channel = var5;
                            var4 = var4.lastMessageId;
                            var3.lastMessageId = var4;
                            var4 = _closure3_slot5;
                            var3.onPress = var4;
                            var0.props = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                    case 145:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var3 = undefined;
        var5 = var0.bind(var3)(var1);
        var2 = _closure1_slot17;
        var1 = _closure1_slot20;
        var0 = {};
        var7 = var0;
        var6 = var4;
        var4 = copyDataProperties(var7, var6);
        var4 = 'suggestedData';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot22 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: RecentScreenContainer, environment: var1
        _fun105641: for (var _fun105641_ip = 0;;) switch (_fun105641_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.searchContext;
                var0 = var0.onJumpToMedia;
                var3 = var4.type;
                var2 = _closure1_slot16;
                var2 = var2.DMS;
                if (!(var2 !== var3)) {
                    _fun105641_ip = 143;
                    continue _fun105641
                }
            case 37:
                var2 = _closure1_slot16;
                var2 = var2.GUILD;
                if (!(var2 !== var3)) {
                    _fun105641_ip = 113;
                    continue _fun105641
                }
            case 51:
                var2 = _closure1_slot16;
                var2 = var2.GUILD_CHANNEL;
                if (!(var2 !== var3)) {
                    _fun105641_ip = 83;
                    continue _fun105641
                }
            case 65:
                var2 = _closure1_slot16;
                var2 = var2.CHANNEL;
                if (!(var2 !== var3)) {
                    _fun105641_ip = 83;
                    continue _fun105641
                }
            case 79:
                var2 = null;
                return var2;
            case 83:
                var6 = _closure1_slot17;
                var5 = _closure1_slot20;
                var3 = {};
                var3.searchContext = var4;
                var3.onJumpToMedia = var0;
                var2 = undefined;
                var2 = var6.bind(var2)(var5, var3);
                return var2;
            case 113:
                var6 = _closure1_slot17;
                var5 = _closure1_slot22;
                var3 = {};
                var3.searchContext = var4;
                var3.onJumpToMedia = var0;
                var2 = undefined;
                var2 = var6.bind(var2)(var5, var3);
                return var2;
            case 143:
                var3 = _closure1_slot17;
                var2 = _closure1_slot21;
                var1 = {};
                var1.searchContext = var4;
                var1.onJumpToMedia = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/pages/RecentScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 4184, 13721, 13722, 8921, 8857, 11672, 660, 33, 4858, 13723, 1234, 3895, 11296, 13724, 3899, 8920, 8923, 566, 1470, 13727, 11671, 10322, 5890, 4512, 13728, 13729, 13732, 2]);