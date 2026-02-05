// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActiveChannel.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var10 = 2;
    var3 = var5[var10];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MAX_STORED_MESSAGES;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HappeningNowCardTrackingType;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot11 = var7;
    var3 = var3.Routes;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot13 = var7;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexShrink': 1,
        'marginLeft': 4,
        'gap': 2
    };
    var3.content = var9;
    var9 = {};
    var9.marginBottom = var10;
    var3.avatarsWrapper = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot15 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun101751: for (var _fun101751_ip = 0;;) switch (_fun101751_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.index;
                var _closure2_slot0 = var6;
                var18 = var1.guildId;
                var _closure2_slot1 = var18;
                var7 = var1.channelId;
                var _closure2_slot2 = var7;
                var8 = var1.fullwidth;
                var5 = var1.panelVariant;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun101751_ip = 52;
                    continue _fun101751
                }
            case 50:
                var5 = false;
            case 52:
                var _closure2_slot3 = var4;
                var1 = _closure1_slot15;
                var10 = var1.bind(var4)();
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 10;
                var1 = var14[var2];
                var12 = var13.bind(var4)(var1);
                var11 = var12.useStateFromStores;
                var1 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var11.bind(var12)(var3, var1);
                var1 = var14[var2];
                var16 = var13.bind(var4)(var1);
                var15 = var16.useStateFromStores;
                var1 = _closure1_slot8;
                var11 = new Array(2);
                var11[0] = var1;
                var1 = _closure1_slot9;
                var11[1] = var1;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 11;
                    var1 = var5[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var2 = var3.keys;
                    var7 = _closure1_slot8;
                    var6 = var7.getTypingUsers;
                    var1 = _closure2_slot2;
                    var1 = var6.bind(var7)(var1);
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot9;
                        var1 = var2.getUser;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.filter;
                    var3 = _closure1_slot0;
                    var0 = 12;
                    var0 = var5[var0];
                    var0 = var3.bind(var4)(var0);
                    var0 = var0.isNotNullish;
                    var1 = var1.bind(var2)(var0);
                    var0 = 0;
                    var0 = var1[var0];
                    return var0;
                };
                var19 = var15.bind(var16)(var11, var3);
                var3 = var14[var2];
                var16 = var13.bind(var4)(var3);
                var15 = var16.useStateFromStoresArray;
                var3 = _closure1_slot5;
                var11 = new Array(1);
                var11[0] = var3;
                var3 = function() { // Environment: var0
                    _fun101755: for (var _fun101755_ip = 0;;) switch (_fun101755_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getChannelMessageData;
                            var0 = _closure2_slot2;
                            var0 = var1.bind(var2)(var0);
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun101755_ip = 37;
                                continue _fun101755
                            }
                        case 33:
                            var0 = new Array(0);
                        case 37:
                            return var0;
                    }
                };
                var11 = var15.bind(var16)(var11, var3);
                _closure2_slot3 = var11;
                var3 = _closure1_slot3;
                var17 = var3.useMemo;
                var16 = new Array(1);
                var16[0] = var11;
                var15 = function() { // Environment: var0
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 13;
                    var2 = var5[var1];
                    var4 = undefined;
                    var3 = var6.bind(var4)(var2);
                    var2 = var3.uniq;
                    var1 = var5[var1];
                    var8 = var6.bind(var4)(var1);
                    var7 = var8.map;
                    var6 = _closure2_slot3;
                    var1 = 'userId';
                    var1 = var7.bind(var8)(var6, var1);
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.filter;
                    var3 = _closure1_slot0;
                    var0 = 12;
                    var0 = var5[var0];
                    var0 = var3.bind(var4)(var0);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var17.bind(var3)(var15, var16);
                var15 = 14;
                var15 = var14[var15];
                var16 = var13.bind(var4)(var15);
                var15 = var16.useEnsureHydratedUsers;
                var15 = var15.bind(var16)(var18, var17);
                var2 = var14[var2];
                var14 = var13.bind(var4)(var2);
                var13 = var14.useStateFromStoresArray;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 13;
                    var2 = var5[var1];
                    var4 = undefined;
                    var3 = var6.bind(var4)(var2);
                    var2 = var3.uniq;
                    var1 = var5[var1];
                    var8 = var6.bind(var4)(var1);
                    var7 = var8.map;
                    var6 = _closure2_slot3;
                    var1 = 'userId';
                    var1 = var7.bind(var8)(var6, var1);
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot9;
                        var1 = var2.getUser;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.filter;
                    var3 = _closure1_slot0;
                    var0 = 12;
                    var0 = var5[var0];
                    var0 = var3.bind(var4)(var0);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var13.bind(var14)(var2, var1);
                var2 = var3.useCallback;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var18;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 15;
                    var2 = var4[var0];
                    var0 = undefined;
                    var8 = var3.bind(var0)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot11;
                    var3 = var2.ACTIVITY_CARD_CLICKED;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2.order = var6;
                    var6 = _closure2_slot1;
                    var2.guild_id = var6;
                    var9 = _closure1_slot10;
                    var9 = var9.ACTIVE_CHANNEL_CARD;
                    var2.type = var9;
                    var5 = _closure2_slot2;
                    var2.destination_channel_id = var5;
                    var2 = var7.bind(var8)(var3, var2);
                    var3 = _closure1_slot0;
                    var2 = 16;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.transitionTo;
                    var4 = _closure1_slot12;
                    var1 = var4.CHANNEL;
                    var1 = var1.bind(var4)(var6, var5);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7 = var2.bind(var3)(var0, var1);
                var0 = null;
                if (!(var0 != var12)) {
                    _fun101751_ip = 792;
                    continue _fun101751
                }
            case 341:
                var2 = var11.length;
                var1 = _closure1_slot6;
                if (!(!(var2 < var1))) {
                    _fun101751_ip = 413;
                    continue _fun101751
                }
            case 354:
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 17;
                var2 = var13[var1];
                var2 = var6.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var13[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.LCutYV;
                var16 = var2.bind(var3)(var1);
                _fun101751_ip = 483;
                continue _fun101751;
            case 413:
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 17;
                var3 = var13[var1];
                var3 = var2.bind(var4)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var1 = var13[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1.VdpclX;
                var1 = {};
                var11 = var11.length;
                var1.count = var11;
                var16 = var3.bind(var6)(var2, var1);
            case 483:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 18;
                var2 = var1[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getChannelIconComponent;
                var6 = var2.bind(var3)(var12);
                var3 = _closure1_slot13;
                var2 = _closure1_slot1;
                var13 = 19;
                var1 = var1[var13];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.onPress = var7;
                var7 = 'medium';
                if (!var8) {
                    _fun101751_ip = 551;
                    continue _fun101751
                }
            case 547:
                var7 = 'full';
            case 551:
                var1.width = var7;
                var1.IconComponent = var6;
                var1.panelVariant = var5;
                var7 = _closure1_slot14;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var10.content;
                var5.style = var8;
                var11 = _closure1_slot13;
                var8 = {};
                var10 = var10.avatarsWrapper;
                var8.style = var10;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var14 = 20;
                var14 = var9[var14];
                var14 = var10.bind(var4)(var14);
                var15 = var14.HappeningNowAvatarStack;
                var14 = {};
                var19 = var0 != var19;
                var14.isTyping = var19;
                var19 = 3;
                var14.userLimit = var19;
                var14.users = var17;
                var19 = var17.length;
                var14.userCount = var19;
                var14.guildId = var18;
                var14 = var11.bind(var4)(var15, var14);
                var8.children = var14;
                var14 = var11.bind(var4)(var6, var8);
                var8 = new Array(3);
                var8[0] = var14;
                var14 = var9[var13];
                var14 = var10.bind(var4)(var14);
                var15 = var14.HappeningNowCardHeader;
                var14 = {};
                var18 = var17.length;
                var17 = 0;
                var17 = var18 > var17;
                var14.noMargin = var17;
                var14.children = var16;
                var14 = var11.bind(var4)(var15, var14);
                var8[1] = var14;
                var9 = var9[var13];
                var9 = var10.bind(var4)(var9);
                var10 = var9.HappeningNowCardSubtitle;
                var9 = {};
                var12 = var12.name;
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 792:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActiveChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 12492, 1372, 11656, 1621, 10920, 660, 33, 1297, 566, 21, 1304, 22, 13276, 795, 1220, 1234, 4809, 10921, 13270, 2]);