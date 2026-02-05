// modules/search/native/components/list/rows/SearchHistoryRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var6 = var1.searchContext;
        var _closure2_slot0 = var6;
        var5 = var1.searchHistoryItem;
        var _closure2_slot1 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.removeSearchHistoryItem;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var6 = var2.bind(var3)(var0, var1);
        var3 = _closure1_slot10;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 11;
        var0 = var7[var0];
        var2 = undefined;
        var0 = var5.bind(var2)(var0);
        var1 = var0.PressableHighlight;
        var0 = {
            'onPress': null,
            'accessibilityRole': 'button',
            'unstable_pressDelay': 130
        };
        var0.onPress = var6;
        var6 = {};
        var8 = 16;
        var6.marginLeft = var8;
        var0.style = var6;
        var6 = {
            'bottom': 16,
            'left': 16,
            'right': 16,
            'top': 16
        };
        var0.hitSlop = var6;
        var6 = _closure1_slot10;
        var4 = 12;
        var4 = var7[var4];
        var4 = var5.bind(var2)(var4);
        var5 = var4.XSmallIcon;
        var4 = {
            'size': 'sm',
            'color': 'interactive-text-default'
        };
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun105489: for (var _fun105489_ip = 0;;) switch (_fun105489_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.searchContext;
                var _closure2_slot0 = var12;
                var11 = var0.searchHistoryItem;
                var _closure2_slot1 = var11;
                var0 = _closure1_slot12;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var _closure2_slot2 = var9;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 13;
                var0 = var5[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useOnPressSearchHistoryText;
                var0 = {};
                var0.searchContext = var12;
                var0 = var2.bind(var4)(var0);
                var _closure2_slot3 = var0;
                var6 = _closure1_slot4;
                var4 = var6.useCallback;
                var2 = new Array(5);
                var2[0] = var0;
                var2[1] = var12;
                var0 = var11.tags;
                var2[2] = var0;
                var0 = var11.text;
                var2[3] = var0;
                var0 = var11.type;
                var2[4] = var0;
                var0 = function() { // Environment: var10
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.trackSearchHistoryClicked;
                    var3 = {};
                    var1 = _closure2_slot0;
                    var3.searchContext = var1;
                    var1 = _closure2_slot1;
                    var6 = var1.type;
                    var3.searchHistoryItemType = var6;
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure2_slot3;
                    var2 = var1.text;
                    var1 = var1.tags;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4 = var4.bind(var6)(var0, var2);
                var2 = _closure1_slot10;
                var0 = 15;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.SearchListRow;
                var0 = {};
                var13 = _closure1_slot11;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var9.textContainer;
                var5.style = var8;
                var15 = var11.tags;
                var8 = null;
                var14 = var8 == var15;
                var8 = undefined;
                if (var14) {
                    _fun105489_ip = 224;
                    continue _fun105489
                }
            case 207:
                var14 = var15.map;
                var10 = function(arg0) { // Environment: var10
                    var0 = arg0;
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var5 = 'button';
                    var2.accessibilityRole = var5;
                    var5 = _closure2_slot2;
                    var5 = var5.tag;
                    var2.style = var5;
                    var7 = _closure1_slot10;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 16;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.Text;
                    var5 = {
                        'lineClamp': 1,
                        'variant': 'text-sm/semibold',
                        'color': 'mobile-text-heading-primary'
                    };
                    var8 = var0.text;
                    var5.children = var8;
                    var5 = var7.bind(var1)(var6, var5);
                    var2.children = var5;
                    var0 = var0.text;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var8 = var14.bind(var15)(var10);
            case 224:
                var14 = new Array(2);
                var14[0] = var8;
                var17 = _closure1_slot10;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var15 = 16;
                var15 = var10[var15];
                var15 = var8.bind(var3)(var15);
                var16 = var15.Text;
                var15 = {
                    'lineClamp': 1,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var18 = var9.text;
                var15.style = var18;
                var18 = var11.text;
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var5.children = var14;
                var5 = var13.bind(var3)(var6, var5);
                var0.label = var5;
                var0.onPress = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot14;
                var4 = {};
                var4.searchContext = var12;
                var4.searchHistoryItem = var11;
                var4 = var6.bind(var3)(var5, var4);
                var0.trailing = var4;
                var4 = var9.textIconContainer;
                var0.iconContainerStyle = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot5;
                var4 = {};
                var9 = var9.iconContainer;
                var4.style = var9;
                var9 = _closure1_slot10;
                var7 = 17;
                var7 = var10[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.MagnifyingGlassIcon;
                var7 = {
                    'size': 'sm',
                    'color': 'interactive-text-default'
                };
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.icon = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun105492: for (var _fun105492_ip = 0;;) switch (_fun105492_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.searchContext;
                var _closure2_slot0 = var3;
                var2 = var1.searchHistoryItem;
                var _closure2_slot1 = var2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 18;
                var5 = var7[var4];
                var4 = undefined;
                var10 = var6.bind(var4)(var5);
                var9 = var10.useStateFromStores;
                var5 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var9.bind(var10)(var8, var5);
                var _closure2_slot2 = var9;
                var11 = _closure1_slot4;
                var10 = var11.useEffect;
                var8 = new Array(3);
                var8[0] = var9;
                var8[1] = var3;
                var8[2] = var2;
                var5 = function() { // Environment: var0
                    _fun105494: for (var _fun105494_ip = 0;;) switch (_fun105494_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun105494_ip = 58;
                                continue _fun105494
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.removeSearchHistoryItem;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1, var0);
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var10.bind(var11)(var5, var8);
                var5 = 13;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.useOnPressGroupDMItem;
                var5 = {};
                var5.searchContext = var3;
                var8 = var6.bind(var7)(var5);
                var _closure2_slot3 = var8;
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var5 = new Array(3);
                var5[0] = var8;
                var5[1] = var3;
                var8 = var2.type;
                var5[2] = var8;
                var0 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var1);
                    var4 = var5.trackSearchHistoryClicked;
                    var3 = {};
                    var6 = _closure2_slot0;
                    var3.searchContext = var6;
                    var3.channelId = var2;
                    var6 = _closure2_slot1;
                    var6 = var6.type;
                    var3.searchHistoryItemType = var6;
                    var3 = var4.bind(var5)(var3);
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var8 = var6.bind(var7)(var0, var5);
                var0 = _closure1_slot20;
                var0 = var0.bind(var4)(var3, var2);
                var5 = var0.trailing;
                var7 = var0.accessibilityActions;
                var6 = var0.onAccessibilityAction;
                var0 = null;
                var2 = var0 == var9;
                if (var2) {
                    _fun105492_ip = 291;
                    continue _fun105492
                }
            case 236:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 19;
                var1 = var10[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.channel = var9;
                var1.onPress = var8;
                var1.accessibilityActions = var7;
                var1.onAccessibilityAction = var6;
                var1.trailing = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 291:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun105496: for (var _fun105496_ip = 0;;) switch (_fun105496_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.searchContext;
                var _closure2_slot0 = var3;
                var2 = var1.searchHistoryItem;
                var _closure2_slot1 = var2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 18;
                var5 = var7[var4];
                var4 = undefined;
                var10 = var6.bind(var4)(var5);
                var9 = var10.useStateFromStores;
                var5 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getUser;
                    var0 = _closure2_slot1;
                    var0 = var0.userId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var9.bind(var10)(var8, var5);
                var11 = _closure1_slot4;
                var10 = var11.useEffect;
                var5 = var2.userId;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getUser;
                    var1 = _closure2_slot1;
                    var1 = var1.userId;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var10.bind(var11)(var5, var8);
                var5 = 13;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.useOnPressDMItem;
                var5 = {};
                var5.searchContext = var3;
                var8 = var6.bind(var7)(var5);
                var _closure2_slot2 = var8;
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun105501: for (var _fun105501_ip = 0;;) switch (_fun105501_ip) {
                                case 0:
                                    StartGenerator();
                                    var4 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun105501_ip = 138;
                                        continue _fun105501
                                    }
                                case 13:
                                    var5 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 21;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var5 = var5.bind(var2)(var1);
                                    var1 = var5.getOrEnsurePrivateChannel;
                                    var1 = var1.bind(var5)(var4);
                                    SaveGenerator(address = 53);
                                case 51:
                                    return var1;
                                case 53:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun105501_ip = 135;
                                        continue _fun105501
                                    }
                                case 59:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 14;
                                    var3 = var6[var3];
                                    var7 = var5.bind(var2)(var3);
                                    var6 = var7.trackSearchHistoryClicked;
                                    var5 = {};
                                    var8 = _closure2_slot0;
                                    var5.searchContext = var8;
                                    var5.channelId = var1;
                                    var8 = _closure2_slot1;
                                    var8 = var8.type;
                                    var5.searchHistoryItemType = var8;
                                    var5 = var6.bind(var7)(var5);
                                    var3 = _closure2_slot2;
                                    var3 = var3.bind(var2)(var4, var1);
                                    return var2;
                                case 135:
                                    return var1;
                                case 138:
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
                var5 = var0.bind(var4)();
                var0 = new Array(3);
                var0[0] = var8;
                var0[1] = var3;
                var8 = var2.type;
                var0[2] = var8;
                var8 = var6.bind(var7)(var5, var0);
                var0 = _closure1_slot20;
                var0 = var0.bind(var4)(var3, var2);
                var5 = var0.trailing;
                var7 = var0.accessibilityActions;
                var6 = var0.onAccessibilityAction;
                var0 = null;
                var2 = var0 == var9;
                if (var2) {
                    _fun105496_ip = 288;
                    continue _fun105496
                }
            case 233:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 22;
                var1 = var10[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.user = var9;
                var1.onPress = var8;
                var1.accessibilityActions = var7;
                var1.onAccessibilityAction = var6;
                var1.trailing = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 288:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun105503: for (var _fun105503_ip = 0;;) switch (_fun105503_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.searchContext;
                var _closure2_slot0 = var10;
                var9 = var1.searchHistoryItem;
                var _closure2_slot1 = var9;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var4 = undefined;
                var8 = var2.bind(var4)(var1);
                var7 = var8.useStateFromStores;
                var1 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var8)(var5, var1);
                var _closure2_slot2 = var7;
                var11 = _closure1_slot4;
                var8 = var11.useEffect;
                var5 = new Array(3);
                var5[0] = var7;
                var5[1] = var10;
                var5[2] = var9;
                var1 = function() { // Environment: var0
                    _fun105505: for (var _fun105505_ip = 0;;) switch (_fun105505_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun105505_ip = 58;
                                continue _fun105505
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.removeSearchHistoryItem;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1, var0);
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var8.bind(var11)(var1, var5);
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useOnPressGuildVoiceChannel;
                var1 = {};
                var1.searchContext = var10;
                var5 = var2.bind(var3)(var1);
                var _closure2_slot3 = var5;
                var3 = _closure1_slot4;
                var2 = var3.useCallback;
                var1 = new Array(3);
                var1[0] = var5;
                var1[1] = var10;
                var5 = var9.type;
                var1[2] = var5;
                var0 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var1);
                    var4 = var5.trackSearchHistoryClicked;
                    var3 = {};
                    var6 = _closure2_slot0;
                    var3.searchContext = var6;
                    var3.channelId = var2;
                    var6 = _closure2_slot1;
                    var6 = var6.type;
                    var3.searchHistoryItemType = var6;
                    var3 = var4.bind(var5)(var3);
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var5 = var2.bind(var3)(var0, var1);
                var0 = null;
                var1 = var0 == var7;
                if (var1) {
                    _fun105503_ip = 297;
                    continue _fun105503
                }
            case 208:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 23;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.channel = var7;
                var7 = _closure1_slot13;
                var1.voiceStates = var7;
                var7 = _closure1_slot13;
                var1.speakerVoiceStates = var7;
                var8 = _closure1_slot10;
                var7 = _closure1_slot14;
                var6 = {};
                var6.searchContext = var10;
                var6.searchHistoryItem = var9;
                var6 = var8.bind(var4)(var7, var6);
                var1.trailing = var6;
                var1.onPress = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 297:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun105507: for (var _fun105507_ip = 0;;) switch (_fun105507_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.searchContext;
                var _closure2_slot0 = var3;
                var2 = var1.searchHistoryItem;
                var _closure2_slot1 = var2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 18;
                var8 = var7[var5];
                var4 = undefined;
                var11 = var6.bind(var4)(var8);
                var10 = var11.useStateFromStores;
                var8 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var10.bind(var11)(var9, var8);
                var _closure2_slot2 = var10;
                var12 = _closure1_slot4;
                var11 = var12.useEffect;
                var9 = new Array(3);
                var9[0] = var10;
                var9[1] = var3;
                var9[2] = var2;
                var8 = function() { // Environment: var0
                    _fun105509: for (var _fun105509_ip = 0;;) switch (_fun105509_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun105509_ip = 58;
                                continue _fun105509
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.removeSearchHistoryItem;
                            var1 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1, var0);
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var11.bind(var12)(var8, var9);
                var5 = var7[var5];
                var11 = var6.bind(var4)(var5);
                var9 = var11.useStateFromStores;
                var5 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var0
                    _fun105510: for (var _fun105510_ip = 0;;) switch (_fun105510_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = var2.lastMessageId;
                            var0 = _closure2_slot1;
                            var0 = var0.channelId;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun105510_ip = 62;
                                continue _fun105510
                            }
                        case 36:
                            var2 = _closure2_slot2;
                            var4 = var0 == var2;
                            var2 = undefined;
                            if (var4) {
                                _fun105510_ip = 59;
                                continue _fun105510
                            }
                        case 49:
                            var3 = _closure2_slot2;
                            var2 = var3.lastMessageId;
                        case 59:
                            var1 = var2;
                        case 62:
                            var2 = var0 != var1;
                            var0 = null;
                            if (!var2) {
                                _fun105510_ip = 74;
                                continue _fun105510
                            }
                        case 71:
                            var0 = var1;
                        case 74:
                            return var0;
                    }
                };
                var9 = var9.bind(var11)(var8, var5);
                var5 = 13;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.useOnPressGuildTextChannel;
                var5 = {};
                var5.searchContext = var3;
                var8 = var6.bind(var7)(var5);
                var _closure2_slot3 = var8;
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var5 = new Array(3);
                var5[0] = var8;
                var5[1] = var3;
                var8 = var2.type;
                var5[2] = var8;
                var0 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var1);
                    var4 = var5.trackSearchHistoryClicked;
                    var3 = {};
                    var6 = _closure2_slot0;
                    var3.searchContext = var6;
                    var3.channelId = var2;
                    var6 = _closure2_slot1;
                    var6 = var6.type;
                    var3.searchHistoryItemType = var6;
                    var3 = var4.bind(var5)(var3);
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var8 = var6.bind(var7)(var0, var5);
                var0 = _closure1_slot20;
                var0 = var0.bind(var4)(var3, var2);
                var5 = var0.trailing;
                var7 = var0.accessibilityActions;
                var6 = var0.onAccessibilityAction;
                var0 = null;
                var2 = var0 == var10;
                if (var2) {
                    _fun105507_ip = 335;
                    continue _fun105507
                }
            case 275:
                var3 = _closure1_slot10;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 24;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.channel = var10;
                var1.lastMessageId = var9;
                var1.onPress = var8;
                var1.accessibilityActions = var7;
                var1.onAccessibilityAction = var6;
                var1.trailing = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 335:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1() {
        var5 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var1;
        var0 = {};
        var8 = _closure1_slot4;
        var7 = var8.useMemo;
        var6 = function() { // Environment: var3
            var1 = {};
            var0 = 'remove';
            var1.name = var0;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var0 = 25;
            var2 = var6[var0];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var0 = var6[var0];
            var0 = var5.bind(var4)(var0);
            var0 = var0.t;
            var0 = var0.Ov3VO7;
            var0 = var2.bind(var3)(var0);
            var1.label = var0;
            var0 = new Array(1);
            var0[0] = var1;
            return var0;
        };
        var4 = new Array(0);
        var4 = var7.bind(var8)(var6, var4);
        var0.accessibilityActions = var4;
        var7 = _closure1_slot4;
        var6 = var7.useCallback;
        var4 = new Array(2);
        var4[0] = var5;
        var4[1] = var1;
        var3 = function(arg0) { // Environment: var3
            _fun105514: for (var _fun105514_ip = 0;;) switch (_fun105514_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var1 = var0.actionName;
                    var0 = 'remove';
                    if (!(var0 === var1)) {
                        _fun105514_ip = 71;
                        continue _fun105514
                    }
                case 23:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.removeSearchHistoryItem;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                case 71:
                    var0 = undefined;
                    return var0;
            }
        };
        var3 = var6.bind(var7)(var3, var4);
        var0.onAccessibilityAction = var3;
        var4 = _closure1_slot10;
        var3 = _closure1_slot14;
        var2 = {};
        var2.searchContext = var5;
        var2.searchHistoryItem = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        var0.trailing = var1;
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchHistoryItemTypes;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'height': 48,
        'width': 48,
        'borderRadius': null,
        'backgroundColor': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var10 = 9;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xl;
    var9.borderRadius = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_BACKGROUND_DEFAULT;
    var9.backgroundColor = var13;
    var3.iconContainer = var9;
    var9 = {};
    var9.flexShrink = var12;
    var3.text = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'flexWrap': 'wrap',
        'gap': 2
    };
    var3.textContainer = var9;
    var9 = {};
    var12 = 'flex-start';
    var9.alignSelf = var12;
    var3.textIconContainer = var9;
    var9 = {
        'paddingHorizontal': 8,
        'paddingVertical': 4,
        'borderRadius': null,
        'overflow': 'hidden',
        'margin': 2,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var9.borderRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var10;
    var3.tag = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = new Array(0);
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun105515: for (var _fun105515_ip = 0;;) switch (_fun105515_ip) {
            case 0:
                var3 = arg0;
                var4 = var3.searchHistoryItem;
                var2 = null;
                var1 = Object.create(var2);
                var0 = 0;
                var1.searchHistoryItem = var0;
                var9 = {};
                var8 = var3;
                var7 = var1;
                var0 = copyDataProperties(var9, var8, var7);
                var5 = var4.type;
                var3 = _closure1_slot9;
                var3 = var3.GROUP_DM;
                if (!(var3 !== var5)) {
                    _fun105515_ip = 275;
                    continue _fun105515
                }
            case 58:
                var3 = _closure1_slot9;
                var3 = var3.DM;
                if (!(var3 !== var5)) {
                    _fun105515_ip = 236;
                    continue _fun105515
                }
            case 75:
                var3 = _closure1_slot9;
                var3 = var3.TEXT;
                if (!(var3 !== var5)) {
                    _fun105515_ip = 197;
                    continue _fun105515
                }
            case 89:
                var3 = _closure1_slot9;
                var3 = var3.GUILD_TEXT_CHANNEL;
                if (!(var3 !== var5)) {
                    _fun105515_ip = 158;
                    continue _fun105515
                }
            case 103:
                var3 = _closure1_slot9;
                var3 = var3.GUILD_VOICE_CHANNEL;
                if (!(var3 !== var5)) {
                    _fun105515_ip = 119;
                    continue _fun105515
                }
            case 117:
                return var2;
            case 119:
                var6 = _closure1_slot10;
                var5 = _closure1_slot18;
                var3 = {};
                var9 = var3;
                var8 = var0;
                var2 = copyDataProperties(var9, var8);
                var2 = 'searchHistoryItem';
                var3[var2] = var4;
                var2 = undefined;
                var2 = var6.bind(var2)(var5, var3);
                return var2;
            case 158:
                var6 = _closure1_slot10;
                var5 = _closure1_slot19;
                var3 = {};
                var9 = var3;
                var8 = var0;
                var2 = copyDataProperties(var9, var8);
                var2 = 'searchHistoryItem';
                var3[var2] = var4;
                var2 = undefined;
                var2 = var6.bind(var2)(var5, var3);
                return var2;
            case 197:
                var6 = _closure1_slot10;
                var5 = _closure1_slot15;
                var3 = {};
                var9 = var3;
                var8 = var0;
                var2 = copyDataProperties(var9, var8);
                var2 = 'searchHistoryItem';
                var3[var2] = var4;
                var2 = undefined;
                var2 = var6.bind(var2)(var5, var3);
                return var2;
            case 236:
                var6 = _closure1_slot10;
                var5 = _closure1_slot17;
                var3 = {};
                var9 = var3;
                var8 = var0;
                var2 = copyDataProperties(var9, var8);
                var2 = 'searchHistoryItem';
                var3[var2] = var4;
                var2 = undefined;
                var2 = var6.bind(var2)(var5, var3);
                return var2;
            case 275:
                var3 = _closure1_slot10;
                var2 = _closure1_slot16;
                var1 = {};
                var9 = var1;
                var8 = var0;
                var0 = copyDataProperties(var9, var8);
                var0 = 'searchHistoryItem';
                var1[var0] = var4;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/list/rows/SearchHistoryRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 1372, 3947, 1621, 8935, 33, 1297, 671, 13742, 4904, 4734, 13743, 8998, 13753, 3941, 7033, 632, 13754, 6978, 3945, 13752, 13756, 13771, 1234, 2]);