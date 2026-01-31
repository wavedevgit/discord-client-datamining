// components_native/channel_settings/ChannelSettingsInstantInvites.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelSettingsSections;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var12;
    var8.flex = var11;
    var3.content = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.height = var9;
    var3.gap = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/channel_settings/ChannelSettingsInstantInvites.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: ConnectedChannelSettingsInstantInvites, environment: var1
        _fun108930: for (var _fun108930_ip = 0;;) switch (_fun108930_ip) {
            case 0:
                var1 = _closure1_slot11;
                var5 = undefined;
                var6 = var1.bind(var5)();
                var _closure2_slot0 = var6;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 9;
                var1 = var7[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.bind(var5)();
                var9 = var1.bottom;
                var4 = _closure1_slot4;
                var1 = var4.useState;
                var3 = var1.bind(var4)(var5);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var5)(var3, var1);
                var13 = 0;
                var14 = var2[var13];
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot1 = var1;
                var3 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var0 = var0.gap;
                    var1 = var0.height;
                    var0 = arg0;
                    var1 = var0 + var1;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = var3.bind(var4)(var1, var2);
                var3 = _closure1_slot0;
                var2 = 10;
                var1 = var7[var2];
                var16 = var3.bind(var5)(var1);
                var15 = var16.useStateFromStores;
                var1 = _closure1_slot6;
                var12 = new Array(1);
                var12[0] = var1;
                var10 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getChannel;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var15.bind(var16)(var12, var10);
                var _closure2_slot2 = var10;
                var10 = var7[var2];
                var15 = var3.bind(var5)(var10);
                var12 = var15.useStateFromStoresObject;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getInvites;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var12.bind(var15)(var10, var1);
                var10 = var1.invites;
                var _closure2_slot3 = var10;
                var1 = var1.loading;
                var15 = var4.useMemo;
                var12 = new Array(1);
                var12[0] = var10;
                var10 = function() { // Environment: var0
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.values;
                    var0 = _closure2_slot3;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun108935: for (var _fun108935_ip = 0;;) switch (_fun108935_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.inviter;
                                var3 = null;
                                var4 = var3 == var1;
                                var2 = undefined;
                                if (var4) {
                                    _fun108935_ip = 25;
                                    continue _fun108935
                                }
                            case 20:
                                var2 = var1.username;
                            case 25:
                                var5 = var3 != var2;
                                var1 = '';
                                var4 = var1;
                                if (!var5) {
                                    _fun108935_ip = 42;
                                    continue _fun108935
                                }
                            case 39:
                                var4 = var2;
                            case 42:
                                var2 = var4.toLowerCase;
                                var2 = var2.bind(var4)();
                                var4 = arg1;
                                var4 = var4.inviter;
                                var5 = var3 == var4;
                                var0 = undefined;
                                if (var5) {
                                    _fun108935_ip = 75;
                                    continue _fun108935
                                }
                            case 70:
                                var0 = var4.username;
                            case 75:
                                var3 = var3 != var0;
                                if (!var3) {
                                    _fun108935_ip = 85;
                                    continue _fun108935
                                }
                            case 82:
                                var1 = var0;
                            case 85:
                                var0 = var1.toLowerCase;
                                var1 = var0.bind(var1)();
                                var0 = var2.localeCompare;
                                var0 = var0.bind(var2)(var1);
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var15.bind(var4)(var10, var12);
                var _closure2_slot4 = var10;
                var2 = var7[var2];
                var12 = var3.bind(var5)(var2);
                var7 = var12.useStateFromStoresArray;
                var2 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun108936: for (var _fun108936_ip = 0;;) switch (_fun108936_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun108936_ip = 19;
                                continue _fun108936
                            }
                        case 13:
                            var0 = new Array(0);
                            _fun108936_ip = 65;
                            continue _fun108936;
                        case 19:
                            var3 = _closure1_slot7;
                            var2 = var3.getSortedLinkedChannelsForGuild;
                            var1 = _closure2_slot2;
                            var1 = var1.guild_id;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = _closure2_slot2;
                                var0 = var0.id;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 65:
                            return var0;
                    }
                };
                var2 = var7.bind(var12)(var3, var2);
                var _closure2_slot5 = var2;
                var7 = var4.useMemo;
                var3 = new Array(2);
                var3[0] = var10;
                var3[1] = var2;
                var2 = function() { // Environment: var0
                    var4 = _closure2_slot4;
                    var2 = var4.map;
                    var0 = function(arg0) { // Environment: var1
                        var0 = {};
                        var1 = 'invite';
                        var0.type = var1;
                        var1 = arg0;
                        var0.data = var1;
                        return var0;
                    };
                    var6 = var2.bind(var4)(var0);
                    var0 = new Array(0);
                    var5 = 0;
                    var7 = var0;
                    var5 = arraySpread(var7, var6, var5);
                    var4 = _closure2_slot5;
                    var3 = var4.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = {};
                        var1 = 'channel';
                        var0.type = var1;
                        var1 = arg0;
                        var0.data = var1;
                        return var0;
                    };
                    var6 = var3.bind(var4)(var1);
                    var7 = var0;
                    var1 = arraySpread(var7, var6, var5);
                    return var0;
                };
                var12 = var7.bind(var4)(var2, var3);
                var _closure2_slot6 = var12;
                var2 = var12.length;
                var15 = new Array(1);
                var15[0] = var2;
                var7 = var4.useEffect;
                var3 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.setSection;
                    var1 = _closure1_slot8;
                    var1 = var1.INSTANT_INVITES;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var2 = var7.bind(var4)(var3, var2);
                var3 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var12;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun108942: for (var _fun108942_ip = 0;;) switch (_fun108942_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var0 = arg1;
                            var5 = var1[var0];
                            var1 = var5.type;
                            var0 = 'invite';
                            if (!(var0 !== var1)) {
                                _fun108942_ip = 81;
                                continue _fun108942
                            }
                        case 27:
                            var3 = _closure1_slot9;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 12;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.LinkedChannelInvite;
                            var0 = {};
                            var4 = var5.data;
                            var0.channel = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            _fun108942_ip = 128;
                            continue _fun108942;
                        case 81:
                            var4 = _closure1_slot9;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 12;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var5 = var5.data;
                            var1.invite = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 128:
                            return var0;
                    }
                };
                var10 = var3.bind(var4)(var0, var2);
                if (var1) {
                    _fun108930_ip = 581;
                    continue _fun108930
                }
            case 395:
                var0 = var12.length;
                if (!(var13 === var0)) {
                    _fun108930_ip = 581;
                    continue _fun108930
                }
            case 407:
                var3 = _closure1_slot9;
                var7 = _closure1_slot1;
                var18 = _closure1_slot2;
                var0 = 13;
                var0 = var18[var0];
                var2 = var7.bind(var5)(var0);
                var0 = {};
                var4 = 14;
                var4 = var18[var4];
                var4 = var7.bind(var5)(var4);
                var0.lightSource = var4;
                var4 = 15;
                var4 = var18[var4];
                var4 = var7.bind(var5)(var4);
                var0.darkSource = var4;
                var17 = _closure1_slot0;
                var4 = 16;
                var7 = var18[var4];
                var7 = var17.bind(var5)(var7);
                var19 = var7.intl;
                var16 = var19.string;
                var7 = var18[var4];
                var7 = var17.bind(var5)(var7);
                var7 = var7.t;
                var7 = var7["+nLJkZ"];
                var7 = var16.bind(var19)(var7);
                var0.title = var7;
                var7 = var18[var4];
                var7 = var17.bind(var5)(var7);
                var16 = var7.intl;
                var7 = var16.string;
                var4 = var18[var4];
                var4 = var17.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.F53CAc;
                var4 = var7.bind(var16)(var4);
                var0.body = var4;
                var0 = var3.bind(var5)(var2, var0);
                _fun108930_ip = 837;
                continue _fun108930;
            case 581:
                if (var1) {
                    _fun108930_ip = 696;
                    continue _fun108930
                }
            case 584:
                var1 = null;
                if (!(var1 != var14)) {
                    _fun108930_ip = 696;
                    continue _fun108930
                }
            case 590:
                var3 = _closure1_slot9;
                var2 = _closure1_slot5;
                var1 = {};
                var4 = var6.content;
                var1.style = var4;
                var7 = _closure1_slot1;
                var16 = _closure1_slot2;
                var4 = 19;
                var4 = var16[var4];
                var7 = var7.bind(var5)(var4);
                var4 = {};
                var4.sections = var15;
                var15 = 'windowSize';
                var4.estimatedListSize = var15;
                var4.itemSize = var14;
                var4.renderItem = var10;
                var10 = var6.gap;
                var10 = var10.height;
                var4.insetStart = var10;
                var4.insetEnd = var9;
                var4 = var3.bind(var5)(var7, var4);
                var1.children = var4;
                var1 = var3.bind(var5)(var2, var1);
                _fun108930_ip = 834;
                continue _fun108930;
            case 696:
                var4 = _closure1_slot10;
                var3 = _closure1_slot5;
                var2 = {};
                var6 = var6.content;
                var2.style = var6;
                var9 = _closure1_slot9;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 17;
                var6 = var10[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.SceneLoadingIndicator;
                var6 = {};
                var7 = var9.bind(var5)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = var12.length;
                var9 = var7 > var13;
                var7 = null;
                if (!var9) {
                    _fun108930_ip = 820;
                    continue _fun108930
                }
            case 775:
                var10 = _closure1_slot9;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var8 = 18;
                var8 = var14[var8];
                var9 = var9.bind(var5)(var8);
                var8 = {};
                var12 = var12[var13];
                var8.item = var12;
                var8.onMeasured = var11;
                var7 = var10.bind(var5)(var9, var8);
            case 820:
                var6[1] = var7;
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 834:
                var0 = var1;
            case 837:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 6428, 1372, 660, 33, 1297, 671, 1568, 566, 6427, 9082, 7320, 9102, 9103, 1234, 5814, 13994, 7524, 2]);