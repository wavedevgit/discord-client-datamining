// modules/guilds_bar/native/GuildsBarPendingGuild.tsx
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
    var8 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.getGuildIconSource;
    var _closure1_slot5 = var9;
    var3 = var3.getGuildIconURL;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.GUILD_ITEM_SIZE;
    var _closure1_slot8 = var10;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var7 = var8.create;
    var3 = {};
    var9 = {};
    var9.width = var10;
    var9.height = var10;
    var3.guildIcon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: GuildsBarPendingGuild, environment: var1
        _fun101502: for (var _fun101502_ip = 0;;) switch (_fun101502_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.guildId;
                var _closure2_slot0 = var13;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var18 = 7;
                var0 = var4[var18];
                var3 = undefined;
                var1 = var5.bind(var3)(var0);
                var0 = var1.useGuildsBarAnimatedWrapperStyles;
                var11 = true;
                var6 = var0.bind(var1)(var11, var11);
                var1 = 8;
                var0 = var4[var1];
                var12 = var5.bind(var3)(var0);
                var10 = var12.useStateFromStores;
                var0 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var0;
                var7 = new Array(1);
                var7[0] = var13;
                var0 = function() { // Environment: var2
                    var1 = _closure1_slot7;
                    var0 = var1.getGuildId;
                    var1 = var0.bind(var1)();
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var10 = var10.bind(var12)(var9, var0, var7);
                var _closure2_slot1 = var10;
                var0 = var4[var1];
                var15 = var5.bind(var3)(var0);
                var14 = var15.useStateFromStores;
                var0 = _closure1_slot4;
                var12 = new Array(1);
                var12[0] = var0;
                var9 = new Array(1);
                var9[0] = var13;
                var7 = function() { // Environment: var2
                    var2 = _closure1_slot4;
                    var1 = var2.getRequest;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var14.bind(var15)(var12, var7, var9);
                var _closure2_slot2 = var17;
                var1 = var4[var1];
                var14 = var5.bind(var3)(var1);
                var12 = var14.useStateFromStores;
                var9 = new Array(1);
                var9[0] = var0;
                var7 = new Array(2);
                var7[0] = var13;
                var7[1] = var10;
                var1 = _closure1_slot1;
                var0 = 10;
                var0 = var4[var0];
                var20 = var1.bind(var3)(var0);
                var22 = function() { // Environment: var2
                    _fun101505: for (var _fun101505_ip = 0;;) switch (_fun101505_ip) {
                        case 0:
                            var4 = _closure1_slot4;
                            var1 = var4.getJoinRequestGuild;
                            var0 = _closure2_slot0;
                            var6 = var1.bind(var4)(var0);
                            var4 = null;
                            var0 = var4 != var6;
                            var5 = undefined;
                            var1 = undefined;
                            if (!var0) {
                                _fun101505_ip = 57;
                                continue _fun101505
                            }
                        case 38:
                            var8 = _closure1_slot6;
                            var7 = _closure1_slot8;
                            var0 = _closure2_slot1;
                            var1 = var8.bind(var5)(var6, var7, var0);
                        case 57:
                            var0 = {};
                            var8 = var4 == var6;
                            var7 = undefined;
                            if (var8) {
                                _fun101505_ip = 73;
                                continue _fun101505
                            }
                        case 68:
                            var7 = var6.name;
                        case 73:
                            var0.guildName = var7;
                            var0.icon = var1;
                            var7 = var4 != var1;
                            var1 = undefined;
                            if (!var7) {
                                _fun101505_ip = 166;
                                continue _fun101505
                            }
                        case 91:
                            var4 = var4 != var6;
                            var1 = undefined;
                            if (!var4) {
                                _fun101505_ip = 166;
                                continue _fun101505
                            }
                        case 100:
                            var4 = _closure1_slot5;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 9;
                            var7 = var9[var3];
                            var7 = var8.bind(var5)(var7);
                            var7 = var7.ImageSizes;
                            var3 = var9[var3];
                            var3 = var8.bind(var5)(var3);
                            var3 = var3.GuildIconSizes;
                            var3 = var3.LARGE;
                            var3 = var7[var3];
                            var2 = _closure2_slot1;
                            var1 = var4.bind(var5)(var6, var3, var2);
                        case 166:
                            var0.asset = var1;
                            return var0;
                    }
                };
                var24 = var14;
                var23 = var9;
                var21 = var7;
                var0 = var24[var12](var23, var22, var21, var20, var19);
                var16 = var0.asset;
                var14 = var0.icon;
                var12 = var0.guildName;
                var0 = 11;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = 0;
                var0.mentionCount = var4;
                var4 = null;
                var7 = var4 == var17;
                var5 = undefined;
                if (var7) {
                    _fun101502_ip = 285;
                    continue _fun101502
                }
            case 279:
                var5 = var17.applicationStatus;
            case 285:
                var0.joinRequestState = var5;
                var0 = var1.bind(var3)(var0);
                var5 = var0.badge;
                var15 = var0.cutouts;
                var9 = _closure1_slot3;
                var7 = var9.useMemo;
                var1 = new Array(2);
                var1[0] = var13;
                var19 = var4 == var17;
                var0 = undefined;
                if (var19) {
                    _fun101502_ip = 339;
                    continue _fun101502
                }
            case 333:
                var0 = var17.applicationStatus;
            case 339:
                var1[1] = var0;
                var0 = function() { // Environment: var2
                    var0 = {};
                    var1 = function() { // Original name: onPress, environment: var1
                        _fun101507: for (var _fun101507_ip = 0;;) switch (_fun101507_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var0 = null;
                                var2 = var0 == var2;
                                var0 = undefined;
                                var4 = undefined;
                                if (var2) {
                                    _fun101507_ip = 30;
                                    continue _fun101507
                                }
                            case 20:
                                var2 = _closure2_slot2;
                                var4 = var2.applicationStatus;
                            case 30:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var6 = 12;
                                var3 = var3[var6];
                                var3 = var5.bind(var0)(var3);
                                var3 = var3.GuildJoinRequestApplicationStatuses;
                                var3 = var3.STARTED;
                                if (!(var3 !== var4)) {
                                    _fun101507_ip = 295;
                                    continue _fun101507
                                }
                            case 72:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var6];
                                var3 = var5.bind(var0)(var3);
                                var3 = var3.GuildJoinRequestApplicationStatuses;
                                var3 = var3.SUBMITTED;
                                if (!(var3 !== var4)) {
                                    _fun101507_ip = 258;
                                    continue _fun101507
                                }
                            case 108:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var6];
                                var3 = var5.bind(var0)(var3);
                                var3 = var3.GuildJoinRequestApplicationStatuses;
                                var3 = var3.APPROVED;
                                if (!(var3 !== var4)) {
                                    _fun101507_ip = 227;
                                    continue _fun101507
                                }
                            case 141:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var6];
                                var3 = var5.bind(var0)(var3);
                                var3 = var3.GuildJoinRequestApplicationStatuses;
                                var3 = var3.REJECTED;
                                if (!(var3 === var4)) {
                                    _fun101507_ip = 330;
                                    continue _fun101507
                                }
                            case 177:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 13;
                                var3 = var5[var3];
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.openMemberVerificationRejectedAlert;
                                var3 = {};
                                var6 = _closure2_slot0;
                                var3.guildId = var6;
                                var6 = true;
                                var3.canWithdraw = var6;
                                var3 = var4.bind(var5)(var3);
                                _fun101507_ip = 330;
                                continue _fun101507;
                            case 227:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 14;
                                var3 = var5[var3];
                                var4 = var4.bind(var0)(var3);
                                var3 = _closure2_slot0;
                                var3 = var4.bind(var0)(var3);
                                _fun101507_ip = 330;
                                continue _fun101507;
                            case 258:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 13;
                                var3 = var5[var3];
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.openMemberVerificationPendingAlert;
                                var3 = _closure2_slot0;
                                var3 = var4.bind(var5)(var3);
                                _fun101507_ip = 330;
                                continue _fun101507;
                            case 295:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 13;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.openMemberVerificationIncompleteAlert;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1);
                            case 330:
                                return var0;
                        }
                    };
                    var0.onPress = var1;
                    return var0;
                };
                var7 = var7.bind(var9)(var0, var1);
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var9 = 15;
                var9 = var0[var9];
                var9 = var1.bind(var3)(var9);
                var9 = var9.bind(var3)(var13, var14, var16);
                var17 = _closure1_slot3;
                var16 = var17.useMemo;
                var14 = new Array(1);
                var14[0] = var13;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 16;
                    var0 = var3[var0];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var0);
                    var0 = _closure2_slot0;
                    var4 = var2.bind(var3)(var0);
                    var _closure3_slot0 = var4;
                    var0 = {};
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.label;
                        var0.name = var2;
                        var1 = var1.label;
                        var0.label = var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.accessibilityActions = var2;
                    var1 = function(arg0) { // Original name: onAccessibilityAction, environment: var1
                        _fun101510: for (var _fun101510_ip = 0;;) switch (_fun101510_ip) {
                            case 0:
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var2 = _closure3_slot0;
                                var1 = var2.find;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.label;
                                    var0 = _closure4_slot0;
                                    var0 = var0.nativeEvent;
                                    var0 = var0.actionName;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var1 = var1.bind(var2)(var0);
                                var3 = null;
                                var0 = var3 == var1;
                                if (var0) {
                                    _fun101510_ip = 51;
                                    continue _fun101510
                                }
                            case 42:
                                var2 = var1.action;
                                var0 = var3 == var2;
                            case 51:
                                if (var0) {
                                    _fun101510_ip = 63;
                                    continue _fun101510
                                }
                            case 54:
                                var0 = var1.action;
                                var0 = var0.bind(var1)();
                            case 63:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onAccessibilityAction = var1;
                    return var0;
                };
                var2 = var16.bind(var17)(var2, var14);
                var17 = var2.accessibilityActions;
                var16 = var2.onAccessibilityAction;
                var14 = _closure1_slot0;
                var2 = 17;
                var2 = var0[var2];
                var14 = var14.bind(var3)(var2);
                var2 = var14.useSharedValue;
                var14 = var2.bind(var14)(var13);
                var2 = _closure1_slot9;
                var0 = var0[var18];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.id = var13;
                var0.accessibilityActions = var17;
                var0.onAccessibilityAction = var16;
                var0.cutouts = var15;
                var0.selected = var10;
                var0.sharedId = var14;
                var14 = !var10;
                var0.circle = var14;
                var0.overState = var3;
                var14 = false;
                var0.unread = var14;
                var15 = var4 != var12;
                var14 = '';
                if (!var15) {
                    _fun101502_ip = 530;
                    continue _fun101502
                }
            case 527:
                var14 = var12;
            case 530:
                var0.label = var14;
                var0.config = var7;
                var0.styles = var6;
                var0.externalChildren = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var14 = _closure1_slot2;
                var5 = 18;
                var5 = var14[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.guildId = var13;
                var5.disableSubtitle = var11;
                var5 = var7.bind(var3)(var6, var5);
                var0.expandedChildren = var5;
                if (!(var4 == var9)) {
                    _fun101502_ip = 675;
                    continue _fun101502
                }
            case 598:
                var6 = _closure1_slot9;
                var5 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 9;
                var4 = var11[var7];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.value = var12;
                var4.selected = var10;
                var4.animate = var10;
                var10 = _closure1_slot0;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.GuildIconSizes;
                var7 = var7.LARGE;
                var4.size = var7;
                var4 = var6.bind(var3)(var5, var4);
                _fun101502_ip = 725;
                continue _fun101502;
            case 675:
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 19;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.source = var9;
                var8 = _closure1_slot10;
                var8 = var8.guildIcon;
                var5.style = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 725:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBarPendingGuild.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3173, 1416, 3172, 13125, 33, 13136, 566, 7353, 13158, 13138, 3175, 7380, 13150, 13166, 13127, 3677, 13167, 4660, 2]);