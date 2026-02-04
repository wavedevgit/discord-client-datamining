// modules/search/native/components/tabs/pages/PeopleScreen.tsx
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
    var3 = var4.bind(var0)(var3);
    var7 = var3.SearchListItemTypes;
    var _closure1_slot7 = var7;
    var3 = var3.USER_ESTIMATED_ITEM_SIZE;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchResultContentEntityTypes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun105641: for (var _fun105641_ip = 0;;) switch (_fun105641_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.searchContext;
                var _closure2_slot0 = var5;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = 7;
                var6 = var3[var4];
                var4 = undefined;
                var7 = var2.bind(var4)(var6);
                var6 = var7.getSearchContextId;
                var6 = var6.bind(var7)(var5);
                var _closure2_slot1 = var6;
                var6 = 8;
                var6 = var3[var6];
                var9 = var2.bind(var4)(var6);
                var8 = var9.useStateFromStores;
                var6 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getResults;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var8.bind(var9)(var7, var6);
                var _closure2_slot2 = var9;
                var8 = _closure1_slot6;
                var7 = var8.useState;
                var6 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.isInitialSearchQuery;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var11 = var7.bind(var8)(var5, var6);
                var _closure2_slot3 = var11;
                var6 = 9;
                var6 = var3[var6];
                var8 = var2.bind(var4)(var6);
                var7 = var8.useFullscreenPlaceholderCount;
                var6 = {};
                var10 = _closure1_slot8;
                var6.placeholderHeight = var10;
                var10 = 1;
                var6.numColumns = var10;
                var10 = var7.bind(var8)(var6);
                var _closure2_slot4 = var10;
                var7 = 10;
                var6 = var3[var7];
                var12 = var2.bind(var4)(var6);
                var8 = var12.useOnPressGroupDMItem;
                var6 = {};
                var6.searchContext = var5;
                var6 = var8.bind(var12)(var6);
                var _closure2_slot5 = var6;
                var7 = var3[var7];
                var12 = var2.bind(var4)(var7);
                var8 = var12.useOnPressDMItem;
                var7 = {};
                var7.searchContext = var5;
                var14 = var8.bind(var12)(var7);
                var _closure2_slot6 = var14;
                var8 = _closure1_slot4;
                var13 = var8.useCallback;
                var7 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0, arg1) { // Environment: var0
                        var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                            _fun105646: for (var _fun105646_ip = 0;;) switch (_fun105646_ip) {
                                case 0:
                                    StartGenerator();
                                    var4 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun105646_ip = 150;
                                        continue _fun105646
                                    }
                                case 13:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 11;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var3 = var3.bind(var2)(var1);
                                    var1 = var3.getOrEnsurePrivateChannel;
                                    var1 = var1.bind(var3)(var4);
                                    SaveGenerator(address = 53);
                                case 51:
                                    return var1;
                                case 53:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun105646_ip = 147;
                                        continue _fun105646
                                    }
                                case 59:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 12;
                                    var3 = var6[var3];
                                    var7 = var5.bind(var2)(var3);
                                    var6 = var7.trackSearchResultClicked;
                                    var5 = {};
                                    var9 = _closure2_slot0;
                                    var5.searchContext = var9;
                                    var5.userId = var4;
                                    var5.channelId = var1;
                                    var9 = arg1;
                                    var5.index = var9;
                                    var8 = _closure1_slot9;
                                    var8 = var8.CHANNEL;
                                    var5.entityType = var8;
                                    var5 = var6.bind(var7)(var5);
                                    var3 = _closure2_slot6;
                                    var3 = var3.bind(var2)(var4, var1);
                                    return var2;
                                case 147:
                                    return var1;
                                case 150:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var12 = var7.bind(var4)();
                var7 = new Array(2);
                var7[0] = var14;
                var7[1] = var5;
                var13 = var13.bind(var8)(var12, var7);
                var _closure2_slot7 = var13;
                var12 = var8.useCallback;
                var7 = new Array(2);
                var7[0] = var6;
                var7[1] = var5;
                var6 = function(arg0, arg1) { // Environment: var0
                    var2 = arg0;
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var1);
                    var4 = var5.trackSearchResultClicked;
                    var3 = {};
                    var7 = _closure2_slot0;
                    var3.searchContext = var7;
                    var3.channelId = var2;
                    var7 = arg1;
                    var3.index = var7;
                    var6 = _closure1_slot9;
                    var6 = var6.CHANNEL;
                    var3.entityType = var6;
                    var3 = var4.bind(var5)(var3);
                    var1 = _closure2_slot5;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var12 = var12.bind(var8)(var6, var7);
                var _closure2_slot8 = var12;
                var7 = var8.useMemo;
                var6 = new Array(5);
                var6[0] = var13;
                var6[1] = var12;
                var6[2] = var11;
                var6[3] = var10;
                var6[4] = var9;
                var0 = function() { // Environment: var0
                    _fun105649: for (var _fun105649_ip = 0;;) switch (_fun105649_ip) {
                        case 0:
                            var0 = new Array(0);
                            var _closure3_slot0 = var0;
                            var3 = _closure2_slot2;
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun105650: for (var _fun105650_ip = 0;;) switch (_fun105650_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var3 = var1.title;
                                        var _closure4_slot0 = var3;
                                        var2 = var1.items;
                                        var1 = null;
                                        if (!(var1 != var3)) {
                                            _fun105650_ip = 82;
                                            continue _fun105650
                                        }
                                    case 25:
                                        var4 = var2.length;
                                        var1 = 0;
                                        if (!(var4 > var1)) {
                                            _fun105650_ip = 82;
                                            continue _fun105650
                                        }
                                    case 36:
                                        var4 = {};
                                        var1 = _closure1_slot7;
                                        var1 = var1.SECTION;
                                        var4.type = var1;
                                        var1 = {};
                                        var1.title = var3;
                                        var4.props = var1;
                                        var3 = _closure3_slot0;
                                        var1 = var3.push;
                                        var1 = var1.bind(var3)(var4);
                                    case 82:
                                        var1 = var2.forEach;
                                        var0 = function(arg0, arg1) { // Environment: var0
                                            _fun105651: for (var _fun105651_ip = 0;;) switch (_fun105651_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var0 = arg1;
                                                    var _closure5_slot0 = var0;
                                                    var0 = 'user';
                                                    var2 = var0 in var1;
                                                    if (var2) {
                                                        _fun105651_ip = 93;
                                                        continue _fun105651
                                                    }
                                                case 26:
                                                    var5 = _closure3_slot0;
                                                    var3 = var5.push;
                                                    var2 = {};
                                                    var6 = _closure1_slot7;
                                                    var6 = var6.GROUP_DM;
                                                    var2.type = var6;
                                                    var6 = _closure4_slot0;
                                                    var2.section = var6;
                                                    var6 = {};
                                                    var6.channel = var1;
                                                    var7 = function arg0() {
                                                        var3 = _closure2_slot8;
                                                        var2 = _closure5_slot0;
                                                        var1 = undefined;
                                                        var0 = arg0;
                                                        var0 = var3.bind(var1)(var0, var2);
                                                        return var0;
                                                    };
                                                    var6.onPress = var7;
                                                    var2.props = var6;
                                                    var2 = var3.bind(var5)(var2);
                                                    _fun105651_ip = 197;
                                                    continue _fun105651;
                                                case 93:
                                                    var7 = var1.type;
                                                    var5 = var1.user;
                                                    var6 = var1.firstMatch;
                                                    var2 = _closure3_slot0;
                                                    var1 = var2.push;
                                                    var0 = {};
                                                    var3 = _closure1_slot7;
                                                    var3 = var3.DM;
                                                    var0.type = var3;
                                                    var3 = _closure4_slot0;
                                                    var0.section = var3;
                                                    var3 = {};
                                                    var3.type = var7;
                                                    var3.user = var5;
                                                    var7 = var5.username;
                                                    var5 = undefined;
                                                    if (!(var7 !== var6)) {
                                                        _fun105651_ip = 172;
                                                        continue _fun105651
                                                    }
                                                case 169:
                                                    var5 = var6;
                                                case 172:
                                                    var3.nickname = var5;
                                                    var4 = function arg0() {
                                                        var3 = _closure2_slot7;
                                                        var2 = _closure5_slot0;
                                                        var1 = undefined;
                                                        var0 = arg0;
                                                        var0 = var3.bind(var1)(var0, var2);
                                                        return var0;
                                                    };
                                                    var3.onPress = var4;
                                                    var0.props = var3;
                                                    var0 = var1.bind(var2)(var0);
                                                case 197:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun105649_ip = 133;
                                continue _fun105649
                            }
                        case 41:
                            var1 = var0.length;
                            var5 = 0;
                            if (!(var5 === var1)) {
                                _fun105649_ip = 133;
                                continue _fun105649
                            }
                        case 52:
                            var1 = _closure2_slot4;
                            var1 = var5 < var1;
                            var3 = global;
                            var2 = 'message-placeholder-';
                            var5 = 0;
                            if (!var1) {
                                _fun105649_ip = 133;
                                continue _fun105649
                            }
                        case 76:
                            var7 = var0.push;
                            var1 = {};
                            var8 = _closure1_slot7;
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
                                _fun105649_ip = 76;
                                continue _fun105649
                            }
                        case 133:
                            return var0;
                    }
                };
                var6 = var7.bind(var8)(var0, var6);
                var0 = 13;
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var2 = var3.useMessageTabCountsErrorText;
                var0 = {};
                var0.searchContext = var5;
                var5 = var2.bind(var3)(var0);
                var0 = null;
                if (!(var0 == var5)) {
                    _fun105641_ip = 439;
                    continue _fun105641
                }
            case 392:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 15;
                var0 = var7[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var7 = _closure1_slot8;
                var0.estimatedItemSize = var7;
                var0.data = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun105641_ip = 475;
                continue _fun105641;
            case 439:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 14;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.text = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 475:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/pages/PeopleScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 13773, 8981, 8917, 8916, 33, 8983, 566, 13725, 13721, 3945, 8980, 13778, 13715, 13729, 2]);