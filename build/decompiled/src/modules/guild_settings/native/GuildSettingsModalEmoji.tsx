// modules/guild_settings/native/GuildSettingsModalEmoji.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function arg0() {
        _fun115243: for (var _fun115243_ip = 0;;) switch (_fun115243_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.computeEmojiItems;
                var7 = var0.contentContainerStyle;
                var8 = var0.disabled;
                var4 = undefined;
                if (!(var8 === var4)) {
                    _fun115243_ip = 30;
                    continue _fun115243
                }
            case 28:
                var8 = false;
            case 30:
                var _closure2_slot0 = var8;
                var15 = var0.guild;
                var _closure2_slot1 = var15;
                var14 = var0.headerDescription;
                var _closure2_slot2 = var14;
                var13 = var0.onSelectRolesForEmoji;
                var _closure2_slot3 = var13;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 13;
                var0 = var3[var0];
                var5 = var1.bind(var4)(var0);
                var3 = var5.useStateFromStoresObject;
                var0 = _closure1_slot9;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var2
                    var0 = {};
                    var5 = _closure1_slot9;
                    var4 = var5.getEmojis;
                    var1 = _closure2_slot1;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.emojis = var3;
                    var3 = _closure1_slot9;
                    var2 = var3.getEmojiRevision;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.revision = var1;
                    return var0;
                };
                var0 = var3.bind(var5)(var1, var0);
                var1 = var0.emojis;
                _closure2_slot4 = var1;
                var3 = var0.revision;
                _closure2_slot5 = var3;
                var0 = null;
                var5 = var1;
                if (!(var0 == var5)) {
                    _fun115243_ip = 170;
                    continue _fun115243
                }
            case 166:
                var5 = new Array(0);
            case 170:
                var9 = var9.bind(var4)(var5, var15);
                _closure2_slot6 = var9;
                var5 = _closure1_slot14;
                var5 = var5.bind(var4)();
                _closure2_slot7 = var5;
                var11 = _closure1_slot4;
                var10 = var11.useRef;
                var10 = var10.bind(var11)(var3);
                _closure2_slot8 = var10;
                var16 = _closure1_slot4;
                var12 = var16.useEffect;
                var10 = var15.id;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = function() { // Environment: var2
                    var2 = _closure1_slot13;
                    var0 = _closure2_slot1;
                    var1 = var0.id;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var10 = var12.bind(var16)(var10, var11);
                var12 = _closure1_slot4;
                var11 = var12.useEffect;
                var16 = var15.id;
                var10 = new Array(2);
                var10[0] = var16;
                var10[1] = var3;
                var3 = function() { // Environment: var2
                    _fun115246: for (var _fun115246_ip = 0;;) switch (_fun115246_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            var2 = var1.current;
                            var1 = _closure2_slot5;
                            if (!(var2 < var1)) {
                                _fun115246_ip = 43;
                                continue _fun115246
                            }
                        case 20:
                            var3 = _closure1_slot13;
                            var1 = _closure2_slot1;
                            var2 = var1.id;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                        case 43:
                            var1 = _closure2_slot8;
                            var0 = _closure2_slot5;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var11.bind(var12)(var3, var10);
                var12 = _closure1_slot4;
                var11 = var12.useCallback;
                var3 = var15.id;
                var10 = new Array(5);
                var10[0] = var3;
                var10[1] = var8;
                var10[2] = var9;
                var10[3] = var5;
                var10[4] = var13;
                var3 = function(arg0) { // Environment: var2
                    _fun115247: for (var _fun115247_ip = 0;;) switch (_fun115247_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.item;
                            var1 = var0.index;
                            var2 = var4.type;
                            var7 = 'SECTION';
                            if (!(var7 !== var2)) {
                                _fun115247_ip = 241;
                                continue _fun115247
                            }
                        case 29:
                            var0 = 'EMOJI';
                            if (!(var0 !== var2)) {
                                _fun115247_ip = 41;
                                continue _fun115247
                            }
                        case 37:
                            var0 = null;
                            return var0;
                        case 41:
                            var3 = _closure2_slot6;
                            var2 = 1;
                            var0 = var1 - var2;
                            var5 = var3[var0];
                            var0 = null;
                            var9 = var0 == var5;
                            var3 = undefined;
                            var6 = undefined;
                            if (var9) {
                                _fun115247_ip = 77;
                                continue _fun115247
                            }
                        case 72:
                            var6 = var5.type;
                        case 77:
                            var9 = _closure2_slot6;
                            var5 = var1 + var2;
                            var5 = var9[var5];
                            var9 = var0 == var5;
                            var0 = undefined;
                            if (var9) {
                                _fun115247_ip = 103;
                                continue _fun115247
                            }
                        case 98:
                            var0 = var5.type;
                        case 103:
                            var5 = var7 === var0;
                            if (var5) {
                                _fun115247_ip = 127;
                                continue _fun115247
                            }
                        case 110:
                            var0 = _closure2_slot6;
                            var0 = var0.length;
                            var0 = var0 - var2;
                            var5 = var1 === var0;
                        case 127:
                            var2 = _closure1_slot10;
                            var1 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var0 = 15;
                            var0 = var9[var0];
                            var0 = var1.bind(var3)(var0);
                            var1 = var0.EmojiRow;
                            var0 = {};
                            var9 = var4.emoji;
                            var0.emoji = var9;
                            var9 = _closure2_slot1;
                            var9 = var9.id;
                            var0.guildId = var9;
                            var9 = _closure2_slot0;
                            if (var9) {
                                _fun115247_ip = 208;
                                continue _fun115247
                            }
                        case 193:
                            var10 = var4.emoji;
                            var10 = var10.available;
                            var9 = !var10;
                        case 208:
                            var0.disabled = var9;
                            var8 = _closure2_slot3;
                            var0.onSelectRolesForEmoji = var8;
                            var6 = var7 === var6;
                            var0.start = var6;
                            var0.end = var5;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 241:
                            var3 = _closure1_slot10;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 14;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.Text;
                            var0 = {
                                'style': null,
                                'variant': 'text-xs/bold',
                                'color': 'text-default'
                            };
                            var5 = _closure2_slot7;
                            var5 = var5.section;
                            var0.style = var5;
                            var4 = var4.section;
                            var0.children = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var3 = var11.bind(var12)(var3, var10);
                var12 = _closure1_slot4;
                var11 = var12.useCallback;
                var10 = new Array(5);
                var10[0] = var15;
                var16 = var0 == var1;
                var15 = undefined;
                if (var16) {
                    _fun115243_ip = 366;
                    continue _fun115243
                }
            case 361:
                var15 = var1.length;
            case 366:
                var10[1] = var15;
                var10[2] = var14;
                var10[3] = var13;
                var10[4] = var8;
                var8 = function() { // Environment: var2
                    _fun115248: for (var _fun115248_ip = 0;;) switch (_fun115248_ip) {
                        case 0:
                            var3 = _closure1_slot10;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 16;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ConnectedHeaderRow;
                            var0 = {};
                            var5 = _closure2_slot1;
                            var0.guild = var5;
                            var6 = _closure2_slot4;
                            var5 = null;
                            var7 = var5 == var6;
                            var6 = undefined;
                            if (var7) {
                                _fun115248_ip = 72;
                                continue _fun115248
                            }
                        case 63:
                            var7 = _closure2_slot4;
                            var6 = var7.length;
                        case 72:
                            var7 = var5 != var6;
                            var5 = 0;
                            if (!var7) {
                                _fun115248_ip = 84;
                                continue _fun115248
                            }
                        case 81:
                            var5 = var6;
                        case 84:
                            var0.emojisLength = var5;
                            var5 = _closure2_slot2;
                            var0.description = var5;
                            var5 = _closure2_slot3;
                            var0.onSelectRolesForEmoji = var5;
                            var4 = _closure2_slot0;
                            var0.uploadDisabled = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var11 = var11.bind(var12)(var8, var10);
                var13 = _closure1_slot4;
                var12 = var13.useCallback;
                var10 = new Array(1);
                var10[0] = var5;
                var8 = function() { // Environment: var2
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 17;
                    var0 = var8[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var7 = _closure1_slot0;
                    var4 = 18;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.EmptyServerSettingsEmoji;
                    var0.Illustration = var4;
                    var4 = _closure2_slot7;
                    var4 = var4.emptyState;
                    var0.style = var4;
                    var4 = 10;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var9 = var5.intl;
                    var6 = var9.string;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var5 = var5.t;
                    var5 = var5.lxsmBd;
                    var5 = var6.bind(var9)(var5);
                    var0.title = var5;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.RBbtMy;
                    var4 = var5.bind(var6)(var4);
                    var0.body = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var10 = var12.bind(var13)(var8, var10);
                var13 = _closure1_slot4;
                var12 = var13.useCallback;
                var8 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.key;
                    return var0;
                };
                var2 = new Array(0);
                var8 = var12.bind(var13)(var8, var2);
                if (!(var0 != var1)) {
                    _fun115243_ip = 539;
                    continue _fun115243
                }
            case 455:
                var2 = _closure1_slot10;
                var1 = _closure1_slot7;
                var0 = {};
                var12 = 12;
                var0.initialNumToRender = var12;
                var0.ListHeaderComponent = var11;
                var0.ListEmptyComponent = var10;
                var10 = 4;
                var0.windowSize = var10;
                var0.data = var9;
                var0.keyExtractor = var8;
                var0.renderItem = var3;
                var3 = new Array(2);
                var3[0] = var7;
                var7 = var5.list;
                var3[1] = var7;
                var0.contentContainerStyle = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun115243_ip = 680;
                continue _fun115243;
            case 539:
                var3 = _closure1_slot11;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var5.loadingContainer;
                var1.style = var5;
                var8 = _closure1_slot10;
                var7 = _closure1_slot6;
                var5 = {
                    'animating': true,
                    'color': null,
                    'size': 'large'
                };
                var11 = _closure1_slot1;
                var9 = _closure1_slot2;
                var10 = 9;
                var10 = var9[var10];
                var10 = var11.bind(var4)(var10);
                var10 = var10.unsafe_rawColors;
                var10 = var10.BRAND_500;
                var5.color = var10;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot10;
                var7 = _closure1_slot0;
                var6 = 19;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.NavScrim;
                var6 = {};
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 680:
                return var0;
        }
    };
    var _closure1_slot18 = var1;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var9.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var4 = var8[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var4 = var3.View;
    var _closure1_slot5 = var4;
    var4 = var3.ActivityIndicator;
    var _closure1_slot6 = var4;
    var3 = var3.FlatList;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var8[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var8[var3];
    var3 = var9.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot10 = var4;
    var4 = var3.jsxs;
    var _closure1_slot11 = var4;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var6 = 6;
    var3 = var8[var6];
    var11 = var9.bind(var0)(var3);
    var10 = var11.throttle;
    var3 = 7;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var4 = var3.fetchEmoji;
    var3 = 1000;
    var3 = var10.bind(var11)(var4, var3);
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var8[var3];
    var10 = var7.bind(var0)(var3);
    var4 = var10.createStyles;
    var3 = {};
    var11 = {
        'flex': 1,
        'paddingTop': 40
    };
    var3.loadingContainer = var11;
    var11 = {};
    var12 = 30;
    var11.paddingTop = var12;
    var3.emptyState = var11;
    var11 = {};
    var12 = 9;
    var13 = var8[var12];
    var13 = var9.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var11.paddingHorizontal = var13;
    var3.list = var11;
    var11 = {};
    var12 = var8[var12];
    var12 = var9.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var11.paddingVertical = var12;
    var3.section = var11;
    var11 = {
        'paddingLeft': 16,
        'paddingRight': 16
    };
    var3.titleContainer = var11;
    var3 = var4.bind(var10)(var3);
    var _closure1_slot14 = var3;
    var4 = function arg0, arg1, arg2() {
        var0 = global;
        var4 = var0.Math;
        var3 = var4.max;
        var2 = arg2;
        var1 = arg1;
        var2 = var2 - var1;
        var1 = 0;
        var5 = var3.bind(var4)(var2, var1);
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 10;
        var3 = var7[var1];
        var2 = undefined;
        var3 = var6.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.formatToPlainString;
        var1 = var7[var1];
        var1 = var6.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.sgL8sI;
        var1 = {};
        var1.count = var5;
        var4 = var3.bind(var4)(var2, var1);
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = '';
        var1 = arg0;
        var0 = ' - ';
        var1 = var3.bind(var2)(var1, var0, var4);
        var0 = var1.toUpperCase;
        var1 = var0.bind(var1)();
        var0 = {};
        var2 = 'SECTION';
        var0.type = var2;
        var0.key = var1;
        var0.section = var1;
        return var0;
    };
    var _closure1_slot15 = var4;
    var3 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = 'EMOJI';
        var0.type = var2;
        var2 = var1.id;
        var0.key = var2;
        var0.emoji = var1;
        return var0;
    };
    var _closure1_slot16 = var3;
    var6 = var8[var6];
    var10 = var9.bind(var0)(var6);
    var9 = var10.memoize;
    var6 = function(arg0, arg1) { // Environment: var5
        _fun115253: for (var _fun115253_ip = 0;;) switch (_fun115253_ip) {
            case 0:
                var3 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var5;
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.isRoleSubscriptionEmoji;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    var0 = !var0;
                    return var0;
                };
                var4 = var2.bind(var3)(var0);
                var3 = var4.map;
                var2 = _closure1_slot16;
                var3 = var3.bind(var4)(var2);
                var2 = var3.reverse;
                var4 = var2.bind(var3)();
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 12;
                var2 = var12[var2];
                var9 = undefined;
                var3 = var11.bind(var9)(var2);
                var2 = var3.getMaxEmojiSlots;
                var8 = var2.bind(var3)(var5);
                var3 = _closure1_slot1;
                var2 = 6;
                var2 = var12[var2];
                var3 = var3.bind(var9)(var2);
                var2 = var3.partition;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.emoji;
                    var0 = var0.animated;
                    var0 = !var0;
                    return var0;
                };
                var3 = var2.bind(var3)(var4, var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var1 = var2.bind(var9)(var3, var1);
                var3 = 0;
                var2 = var1[var3];
                var5 = 1;
                var4 = var1[var5];
                var6 = _closure1_slot15;
                var0 = 10;
                var1 = var12[var0];
                var1 = var11.bind(var9)(var1);
                var10 = var1.intl;
                var7 = var10.string;
                var1 = var12[var0];
                var1 = var11.bind(var9)(var1);
                var1 = var1.t;
                var1 = var1.sMOuuS;
                var7 = var7.bind(var10)(var1);
                var1 = var2.length;
                var7 = var6.bind(var9)(var7, var1, var8);
                var1 = var12[var0];
                var1 = var11.bind(var9)(var1);
                var10 = var1.intl;
                var1 = var10.string;
                var0 = var12[var0];
                var0 = var11.bind(var9)(var0);
                var0 = var0.t;
                var0 = var0.wWjQye;
                var1 = var1.bind(var10)(var0);
                var0 = var4.length;
                var6 = var6.bind(var9)(var1, var0, var8);
                var0 = var2.length;
                if (!(!(var0 > var3))) {
                    _fun115253_ip = 286;
                    continue _fun115253
                }
            case 280:
                var1 = new Array(0);
                _fun115253_ip = 310;
                continue _fun115253;
            case 286:
                var0 = new Array(1);
                var0[0] = var7;
                var15 = var0;
                var14 = var2;
                var13 = var5;
                var2 = arraySpread(var15, var14, var13);
                var1 = var0;
            case 310:
                var0 = new Array(0);
                var15 = var0;
                var14 = var1;
                var13 = 0;
                var2 = arraySpread(var15, var14, var13);
                var1 = var4.length;
                if (!(!(var1 > var3))) {
                    _fun115253_ip = 341;
                    continue _fun115253
                }
            case 335:
                var1 = new Array(0);
                _fun115253_ip = 365;
                continue _fun115253;
            case 341:
                var3 = new Array(1);
                var3[0] = var6;
                var15 = var3;
                var14 = var4;
                var13 = var5;
                var4 = arraySpread(var15, var14, var13);
                var1 = var3;
            case 365:
                var15 = var0;
                var14 = var1;
                var13 = var2;
                var1 = arraySpread(var15, var14, var13);
                return var0;
        }
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot17 = var6;
    var6 = 22;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guild_settings/native/GuildSettingsModalEmoji.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function arg0() {
        _fun115256: for (var _fun115256_ip = 0;;) switch (_fun115256_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var11 = var1.contentContainerStyle;
                var7 = var1.isLandingScreen;
                var _closure2_slot1 = var7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var4 = undefined;
                var9 = var2.bind(var4)(var1);
                var8 = var9.useStateFromStores;
                var1 = _closure1_slot8;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var8.bind(var9)(var5, var1);
                var _closure2_slot2 = var13;
                var1 = 20;
                var1 = var3[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useNavigation;
                var8 = var1.bind(var2)();
                var _closure2_slot3 = var8;
                var1 = _closure1_slot14;
                var5 = var1.bind(var4)();
                var _closure2_slot4 = var5;
                var3 = _closure1_slot4;
                var2 = var3.useLayoutEffect;
                var1 = new Array(4);
                var1[0] = var8;
                var1[1] = var13;
                var1[2] = var7;
                var1[3] = var5;
                var0 = function() { // Environment: var0
                    _fun115258: for (var _fun115258_ip = 0;;) switch (_fun115258_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun115258_ip = 20;
                                continue _fun115258
                            }
                        case 10:
                            var3 = _closure2_slot2;
                            var2 = undefined;
                            var1 = var2 !== var3;
                        case 20:
                            if (!var1) {
                                _fun115258_ip = 54;
                                continue _fun115258
                            }
                        case 23:
                            var2 = _closure2_slot3;
                            var1 = var2.setOptions;
                            var0 = {};
                            var3 = function() {
                                var3 = _closure1_slot10;
                                var2 = _closure1_slot5;
                                var1 = {};
                                var4 = _closure2_slot4;
                                var4 = var4.titleContainer;
                                var1.style = var4;
                                var6 = _closure1_slot10;
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 21;
                                var4 = var4[var0];
                                var0 = undefined;
                                var4 = var5.bind(var0)(var4);
                                var5 = var4.NavigatorHeader;
                                var4 = {};
                                var7 = _closure2_slot2;
                                var7 = var7.name;
                                var4.title = var7;
                                var4 = var6.bind(var0)(var5, var4);
                                var1.children = var4;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var0.headerTitle = var3;
                            var0 = var1.bind(var2)(var0);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                var0 = null;
                if (!(var0 != var13)) {
                    _fun115256_ip = 372;
                    continue _fun115256
                }
            case 181:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 12;
                var1 = var9[var1];
                var2 = var7.bind(var4)(var1);
                var1 = var2.getMaxEmojiSlots;
                var8 = var1.bind(var2)(var13);
                var1 = 10;
                var2 = var9[var1];
                var2 = var7.bind(var4)(var2);
                var5 = var2.intl;
                var3 = var5.formatToPlainString;
                var1 = var9[var1];
                var1 = var7.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1.TA1BR0;
                var1 = {};
                var1.count = var8;
                var12 = var3.bind(var5)(var2, var1);
                var3 = _closure1_slot11;
                var2 = _closure1_slot12;
                var1 = {};
                var10 = _closure1_slot10;
                var8 = _closure1_slot18;
                var5 = {};
                var5.guild = var13;
                var5.headerDescription = var12;
                var12 = _closure1_slot17;
                var5.computeEmojiItems = var12;
                var5.contentContainerStyle = var11;
                var8 = var10.bind(var4)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = _closure1_slot10;
                var6 = 19;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.NavScrim;
                var6 = {};
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 372:
                return var0;
        }
    };
    var2.default = var5;
    var2.computeSectionItem = var4;
    var2.computeEmojiItem = var3;
    var2.ManageEmojisModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 14713, 33, 22, 9239, 1297, 671, 1234, 4742, 6707, 566, 3941, 14715, 14719, 7358, 14720, 5204, 1469, 4705, 2]);