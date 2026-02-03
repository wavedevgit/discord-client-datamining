// modules/notification_settings/native/NotificationSettingChannelOverrides.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildReadableType;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ChannelTypes;
    var _closure1_slot10 = var7;
    var3 = var3.NotificationSettingsSections;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot12 = var7;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 10;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.marginHorizontal = var13;
    var9.flex = var12;
    var3.container = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.paddingVertical = var10;
    var3.searchContainer = var9;
    var9 = {
        'height': 16,
        'width': 16,
        'opacity': 0.6
    };
    var3.channelIcon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun117042: for (var _fun117042_ip = 0;;) switch (_fun117042_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var8 = var1.navigation;
                var _closure2_slot1 = var8;
                var1 = _closure1_slot14;
                var3 = undefined;
                var13 = var1.bind(var3)();
                var _closure2_slot2 = var13;
                var21 = _closure1_slot0;
                var18 = _closure1_slot2;
                var1 = 11;
                var1 = var18[var1];
                var5 = var21.bind(var3)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getCategories;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var4.bind(var5)(var2, var1);
                var _closure2_slot3 = var4;
                var1 = _closure1_slot1;
                var2 = 12;
                var2 = var18[var2];
                var2 = var1.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var9 = var2.insets;
                var7 = _closure1_slot4;
                var5 = var7.useState;
                var2 = '';
                var6 = var5.bind(var7)(var2);
                var5 = _closure1_slot3;
                var2 = 2;
                var11 = var5.bind(var3)(var6, var2);
                var6 = 0;
                var2 = var11[var6];
                var _closure2_slot4 = var2;
                var5 = 1;
                var17 = var11[var5];
                var11 = var7.useMemo;
                var5 = new Array(2);
                var5[0] = var4;
                var5[1] = var2;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var3 = _closure2_slot3;
                    var2 = var3._categories;
                    var1 = function(arg0) { // Environment: var0
                        _fun117045: for (var _fun117045_ip = 0;;) switch (_fun117045_ip) {
                            case 0:
                                var0 = arg0;
                                var9 = var0.channel;
                                var1 = _closure1_slot6;
                                var0 = var9.type;
                                var4 = undefined;
                                var0 = var1.bind(var4)(var0);
                                if (var0) {
                                    _fun117045_ip = 107;
                                    continue _fun117045
                                }
                            case 30:
                                var3 = var9.type;
                                var1 = _closure1_slot10;
                                var1 = var1.GUILD_CATEGORY;
                                var1 = var3 === var1;
                                if (!var1) {
                                    _fun117045_ip = 74;
                                    continue _fun117045
                                }
                            case 52:
                                var5 = _closure2_slot3;
                                var3 = var9.id;
                                var5 = var5[var3];
                                var3 = null;
                                var1 = var3 != var5;
                            case 74:
                                if (!var1) {
                                    _fun117045_ip = 104;
                                    continue _fun117045
                                }
                            case 77:
                                var5 = _closure2_slot3;
                                var3 = var9.id;
                                var3 = var5[var3];
                                var5 = var3.length;
                                var3 = 0;
                                var1 = var5 > var3;
                            case 104:
                                var0 = var1;
                            case 107:
                                if (var0) {
                                    _fun117045_ip = 114;
                                    continue _fun117045
                                }
                            case 110:
                                var1 = false;
                                return var1;
                            case 114:
                                var5 = _closure2_slot4;
                                var3 = '';
                                if (!(var3 !== var5)) {
                                    _fun117045_ip = 228;
                                    continue _fun117045
                                }
                            case 129:
                                var5 = _closure2_slot4;
                                var3 = null;
                                if (!(var3 != var5)) {
                                    _fun117045_ip = 228;
                                    continue _fun117045
                                }
                            case 139:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 14;
                                var3 = var6[var3];
                                var8 = var5.bind(var4)(var3);
                                var7 = var8.computeChannelName;
                                var5 = _closure1_slot9;
                                var3 = _closure1_slot8;
                                var5 = var7.bind(var8)(var9, var5, var3);
                                var3 = var5.toLowerCase;
                                var3 = var3.bind(var5)();
                                var5 = _closure1_slot1;
                                var2 = 15;
                                var2 = var6[var2];
                                var2 = var5.bind(var4)(var2);
                                var5 = _closure2_slot4;
                                var1 = var5.toLowerCase;
                                var1 = var1.bind(var5)();
                                var1 = var2.bind(var4)(var1, var3);
                                return var1;
                            case 228:
                                return var0;
                        }
                    };
                    var2 = var4.bind(var5)(var2, var3, var1);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.channel;
                        return var0;
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0.channels = var1;
                    var2 = var1.length;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.sections = var1;
                    return var0;
                };
                var4 = var11.bind(var7)(var4, var5);
                var5 = var4.channels;
                var _closure2_slot5 = var5;
                var14 = var4.sections;
                var11 = var7.useEffect;
                var4 = new Array(2);
                var4[0] = var5;
                var4[1] = var2;
                var2 = function() { // Environment: var0
                    _fun117047: for (var _fun117047_ip = 0;;) switch (_fun117047_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun117047_ip = 218;
                                continue _fun117047
                            }
                        case 16:
                            var2 = _closure2_slot4;
                            var1 = '';
                            if (!(var1 !== var2)) {
                                _fun117047_ip = 218;
                                continue _fun117047
                            }
                        case 31:
                            var0 = _closure2_slot5;
                            var5 = var0.length;
                            var0 = 0;
                            if (!(!(var5 > var0))) {
                                _fun117047_ip = 108;
                                continue _fun117047
                            }
                        case 46:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 16;
                            var1 = var6[var0];
                            var3 = undefined;
                            var1 = var4.bind(var3)(var1);
                            var2 = var1.intl;
                            var1 = var2.string;
                            var0 = var6[var0];
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.t;
                            var0 = var0.f5cMAg;
                            var2 = var1.bind(var2)(var0);
                            _fun117047_ip = 176;
                            continue _fun117047;
                        case 108:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 16;
                            var3 = var7[var0];
                            var1 = undefined;
                            var3 = var6.bind(var1)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var0 = var7[var0];
                            var0 = var6.bind(var1)(var0);
                            var0 = var0.t;
                            var1 = var0.ZGVL3g;
                            var0 = {};
                            var0.count = var5;
                            var2 = var3.bind(var4)(var1, var0);
                        case 176:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var1);
                            var1 = var0.AccessibilityAnnouncer;
                            var0 = var1.announce;
                            var0 = var0.bind(var1)(var2);
                        case 218:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var11.bind(var7)(var2, var4);
                var2 = 18;
                var2 = var18[var2];
                var2 = var1.bind(var3)(var2);
                var11 = var2.bind(var3)();
                var4 = var7.useCallback;
                var2 = new Array(3);
                var2[0] = var5;
                var2[1] = var8;
                var2[2] = var13;
                var0 = function(arg0, arg1) { // Environment: var0
                    var10 = arg1;
                    var5 = _closure2_slot5;
                    var12 = var5[var10];
                    var _closure3_slot0 = var12;
                    var3 = _closure1_slot12;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 19;
                    var0 = var7[var0];
                    var2 = undefined;
                    var0 = var6.bind(var2)(var0);
                    var1 = var0.TableRow;
                    var0 = {};
                    var15 = _closure1_slot1;
                    var14 = 20;
                    var9 = var7[var14];
                    var11 = var15.bind(var2)(var9);
                    var9 = {};
                    var14 = var7[var14];
                    var14 = var15.bind(var2)(var14);
                    var14 = var14.Sizes;
                    var14 = var14.CUSTOM;
                    var9.size = var14;
                    var14 = 21;
                    var14 = var7[var14];
                    var15 = var6.bind(var2)(var14);
                    var14 = var15.getChannelIcon;
                    var14 = var14.bind(var15)(var12);
                    var9.source = var14;
                    var13 = _closure2_slot2;
                    var13 = var13.channelIcon;
                    var9.style = var13;
                    var9 = var3.bind(var2)(var11, var9);
                    var0.icon = var9;
                    var9 = 0;
                    var9 = var9 === var10;
                    var0.start = var9;
                    var9 = var5.length;
                    var5 = 1;
                    var9 = var9 - var5;
                    var9 = var10 === var9;
                    var0.end = var9;
                    var9 = 14;
                    var9 = var7[var9];
                    var11 = var6.bind(var2)(var9);
                    var10 = var11.computeChannelName;
                    var9 = _closure1_slot9;
                    var8 = _closure1_slot8;
                    var8 = var10.bind(var11)(var12, var9, var8);
                    var0.label = var8;
                    var0.labelLineClamp = var5;
                    var5 = 22;
                    var5 = var7[var5];
                    var5 = var6.bind(var2)(var5);
                    var5 = var5.FormRow;
                    var6 = var5.Arrow;
                    var5 = {};
                    var5 = var3.bind(var2)(var6, var5);
                    var0.trailing = var5;
                    var4 = function() {
                        var3 = _closure2_slot1;
                        var2 = var3.push;
                        var0 = _closure1_slot11;
                        var1 = var0.CHANNEL_OVERRIDE;
                        var0 = {};
                        var4 = _closure3_slot0;
                        var4 = var4.id;
                        var0.channelId = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.onPress = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var12 = var4.bind(var7)(var0, var2);
                var0 = 23;
                var0 = var18[var0];
                var0 = var1.bind(var3)(var0);
                var8 = var0.bind(var3)();
                var2 = _closure1_slot13;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var13.container;
                var0.style = var4;
                var7 = _closure1_slot12;
                var4 = {};
                var13 = var13.searchContainer;
                var4.style = var13;
                var13 = 24;
                var13 = var18[var13];
                var13 = var21.bind(var3)(var13);
                var16 = var13.SearchField;
                var15 = {};
                var13 = 16;
                var19 = var18[var13];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var18[var13];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["5h0QOP"];
                var18 = var19.bind(var20)(var18);
                var15.placeholder = var18;
                var15.onChange = var17;
                var15 = var7.bind(var3)(var16, var15);
                var4.children = var15;
                var7 = var7.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var5 = var5.length;
                if (!(var6 !== var5)) {
                    _fun117042_ip = 539;
                    continue _fun117042
                }
            case 456:
                var7 = _closure1_slot12;
                var6 = _closure1_slot1;
                var15 = _closure1_slot2;
                var5 = 27;
                var5 = var15[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.sections = var14;
                var5.renderItem = var12;
                var5.itemSize = var11;
                var9 = var9.bottom;
                var5.insetEnd = var9;
                var9 = 'windowSize';
                var5.estimatedListSize = var9;
                var5.placeholderConfig = var8;
                var8 = true;
                var5.wrapChildren = var8;
                var5 = var7.bind(var3)(var6, var5);
                _fun117042_ip = 694;
                continue _fun117042;
            case 539:
                var8 = _closure1_slot12;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 25;
                var6 = var9[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var12 = _closure1_slot0;
                var10 = 26;
                var10 = var9[var10];
                var10 = var12.bind(var3)(var10);
                var10 = var10.NoResults;
                var6.Illustration = var10;
                var10 = var9[var13];
                var10 = var12.bind(var3)(var10);
                var14 = var10.intl;
                var11 = var14.string;
                var10 = var9[var13];
                var10 = var12.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.wM7uRI;
                var10 = var11.bind(var14)(var10);
                var6.title = var10;
                var10 = var9[var13];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.f5cMAg;
                var9 = var10.bind(var11)(var9);
                var6.body = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 694:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_settings/native/NotificationSettingChannelOverrides.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1376, 4571, 3091, 1613, 660, 33, 1297, 671, 566, 4888, 4572, 4787, 5597, 1234, 3151, 7554, 4893, 4077, 4802, 5373, 9079, 7004, 7353, 7354, 7557, 2]);