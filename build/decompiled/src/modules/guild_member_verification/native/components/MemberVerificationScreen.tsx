// modules/guild_member_verification/native/components/MemberVerificationScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        var3 = _closure1_slot11;
        var1 = _closure1_slot1;
        var2 = _closure1_slot3;
        var0 = 9;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var5 = arg0;
        var6 = var0;
        var4 = copyDataProperties(var6, var5);
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun107085: for (var _fun107085_ip = 0;;) switch (_fun107085_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.guildId;
                var _closure2_slot0 = var10;
                var9 = var0.onClose;
                var _closure2_slot1 = var9;
                var1 = var0.children;
                var5 = _closure1_slot0;
                var7 = _closure1_slot3;
                var2 = 10;
                var6 = var7[var2];
                var3 = undefined;
                var12 = var5.bind(var3)(var6);
                var11 = var12.useStateFromStores;
                var6 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var4
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var11.bind(var12)(var8, var6);
                var _closure2_slot2 = var11;
                var6 = var7[var2];
                var14 = var5.bind(var3)(var6);
                var13 = var14.useStateFromStores;
                var6 = _closure1_slot7;
                var12 = new Array(1);
                var12[0] = var6;
                var8 = new Array(1);
                var8[0] = var11;
                var6 = function() { // Environment: var4
                    _fun107087: for (var _fun107087_ip = 0;;) switch (_fun107087_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var1 = null;
                            var3 = var1 != var0;
                            var0 = null;
                            if (!var3) {
                                _fun107087_ip = 62;
                                continue _fun107087
                            }
                        case 18:
                            var4 = _closure1_slot7;
                            var3 = var4.getDefaultChannel;
                            var2 = _closure2_slot2;
                            var2 = var2.id;
                            var2 = var3.bind(var4)(var2);
                            var3 = var1 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun107087_ip = 59;
                                continue _fun107087
                            }
                        case 54:
                            var1 = var2.id;
                        case 59:
                            var0 = var1;
                        case 62:
                            return var0;
                    }
                };
                var8 = var13.bind(var14)(var12, var6, var8);
                var _closure2_slot3 = var8;
                var2 = var7[var2];
                var12 = var5.bind(var3)(var2);
                var6 = var12.useStateFromStores;
                var2 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var4
                    var2 = _closure1_slot9;
                    var1 = var2.getRequest;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var6.bind(var12)(var5, var2);
                var6 = _closure1_slot1;
                var2 = 11;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.bind(var3)(var5);
                var _closure2_slot4 = var2;
                var12 = _closure1_slot4;
                var7 = var12.useEffect;
                var6 = new Array(3);
                var6[0] = var10;
                var6[1] = var2;
                var6[2] = var9;
                var5 = function() { // Environment: var4
                    _fun107089: for (var _fun107089_ip = 0;;) switch (_fun107089_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            var4 = undefined;
                            if (var2) {
                                _fun107089_ip = 30;
                                continue _fun107089
                            }
                        case 20:
                            var2 = _closure2_slot4;
                            var4 = var2.applicationStatus;
                        case 30:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var6 = 12;
                            var3 = var3[var6];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.GuildJoinRequestApplicationStatuses;
                            var3 = var3.SUBMITTED;
                            if (!(var3 !== var4)) {
                                _fun107089_ip = 160;
                                continue _fun107089
                            }
                        case 69:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var6];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.GuildJoinRequestApplicationStatuses;
                            var3 = var3.REJECTED;
                            if (!(var3 === var4)) {
                                _fun107089_ip = 203;
                                continue _fun107089
                            }
                        case 102:
                            var3 = _closure2_slot1;
                            var3 = var3.bind(var0)();
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
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
                            _fun107089_ip = 203;
                            continue _fun107089;
                        case 160:
                            var3 = _closure2_slot1;
                            var3 = var3.bind(var0)();
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 13;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.openMemberVerificationPendingAlert;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                        case 203:
                            return var0;
                    }
                };
                var5 = var7.bind(var12)(var5, var6);
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var5 = new Array(4);
                var5[0] = var11;
                var5[1] = var10;
                var5[2] = var9;
                var5[3] = var8;
                var4 = function() { // Environment: var4
                    _fun107090: for (var _fun107090_ip = 0;;) switch (_fun107090_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun107090_ip = 29;
                                continue _fun107090
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            if (!(var2 != var1)) {
                                _fun107090_ip = 29;
                                continue _fun107090
                            }
                        case 21:
                            var1 = _closure2_slot3;
                            if (!(var2 == var1)) {
                                _fun107090_ip = 49;
                                continue _fun107090
                            }
                        case 29:
                            var1 = _closure2_slot0;
                            if (!(var2 == var1)) {
                                _fun107090_ip = 109;
                                continue _fun107090
                            }
                        case 37:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun107090_ip = 109;
                            continue _fun107090;
                        case 49:
                            var4 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var1 = 14;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.transitionTo;
                            var5 = _closure1_slot10;
                            var4 = var5.CHANNEL;
                            var3 = _closure2_slot0;
                            var0 = _closure2_slot3;
                            var0 = var4.bind(var5)(var3, var0);
                            var0 = var1.bind(var2)(var0);
                        case 109:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var4, var5);
                var4 = null;
                var5 = var4 == var2;
                var4 = undefined;
                if (var5) {
                    _fun107085_ip = 301;
                    continue _fun107085
                }
            case 295:
                var4 = var2.applicationStatus;
            case 301:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var6 = 12;
                var2 = var2[var6];
                var2 = var5.bind(var3)(var2);
                var2 = var2.GuildJoinRequestApplicationStatuses;
                var2 = var2.SUBMITTED;
                if (!(var2 !== var4)) {
                    _fun107085_ip = 405;
                    continue _fun107085
                }
            case 337:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var6];
                var2 = var5.bind(var3)(var2);
                var2 = var2.GuildJoinRequestApplicationStatuses;
                var2 = var2.APPROVED;
                if (!(var2 !== var4)) {
                    _fun107085_ip = 405;
                    continue _fun107085
                }
            case 370:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var6];
                var2 = var5.bind(var3)(var2);
                var2 = var2.GuildJoinRequestApplicationStatuses;
                var2 = var2.REJECTED;
                if (!(var2 !== var4)) {
                    _fun107085_ip = 405;
                    continue _fun107085
                }
            case 403:
                return var1;
            case 405:
                var2 = _closure1_slot11;
                var1 = _closure1_slot13;
                var0 = {};
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ActivityIndicator;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var11;
    var3.flex = var8;
    var8 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 8;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var3.flexLoading = var8;
    var8 = {};
    var8.flex = var11;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var3.container = var8;
    var8 = {};
    var8.flex = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.scrollContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = function() {
        var0 = _closure1_slot12;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot11;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var4.flexLoading;
        var0.style = var4;
        var6 = _closure1_slot11;
        var5 = _closure1_slot6;
        var4 = {
            'animating': true,
            'color': null,
            'size': 'large'
        };
        var8 = _closure1_slot1;
        var9 = _closure1_slot3;
        var7 = 8;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.unsafe_rawColors;
        var7 = var7.BRAND_500;
        var4.color = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var3;
    var3 = 17;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.makeAuthenticated;
    var1 = function arg0() {
        _fun107092: for (var _fun107092_ip = 0;;) switch (_fun107092_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.navigation;
                var _closure2_slot0 = var6;
                var1 = var1.route;
                var1 = var1.params;
                var12 = var1.guildId;
                var2 = _closure1_slot12;
                var4 = undefined;
                var8 = var2.bind(var4)();
                var5 = _closure1_slot4;
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    _fun107093: for (var _fun107093_ip = 0;;) switch (_fun107093_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.getState;
                            var1 = var1.bind(var2)();
                            var8 = var1.routes;
                            var4 = var1.index;
                            var2 = var8.length;
                            var1 = 1;
                            if (!(!(var2 > var1))) {
                                _fun107093_ip = 92;
                                continue _fun107093
                            }
                        case 40:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 15;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var5.bind(var2)(var3);
                            var3 = var5.navigateToRootTab;
                            var2 = {};
                            var6 = 'messages';
                            var2.screen = var6;
                            var2 = var3.bind(var5)(var2);
                            _fun107093_ip = 220;
                            continue _fun107093;
                        case 92:
                            var1 = var4 - var1;
                            var2 = var8[var1];
                            var7 = null;
                            var3 = var7 == var2;
                            var5 = undefined;
                            var1 = undefined;
                            if (var3) {
                                _fun107093_ip = 118;
                                continue _fun107093
                            }
                        case 113:
                            var1 = var2.name;
                        case 118:
                            var6 = 'member-verification';
                            if (!(var6 === var1)) {
                                _fun107093_ip = 206;
                                continue _fun107093
                            }
                        case 128:
                            var3 = 0;
                            var2 = var4;
                            if (!(var2 >= var3)) {
                                _fun107093_ip = 220;
                                continue _fun107093
                            }
                        case 137:
                            var9 = var8[var2];
                            var1 = var2;
                            if (!(var7 != var9)) {
                                _fun107093_ip = 220;
                                continue _fun107093
                            }
                        case 148:
                            var9 = var9.name;
                            if (!(var6 === var9)) {
                                _fun107093_ip = 166;
                                continue _fun107093
                            }
                        case 157:
                            var2 = var1 - 1;
                            if (var2 >= var3) {
                                _fun107093_ip = 137;
                                continue _fun107093
                            }
                        case 164:
                            _fun107093_ip = 220;
                            continue _fun107093;
                        case 166:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var2 = 15;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.popScreens;
                            var1 = var4 - var1;
                            var1 = var2.bind(var3)(var1);
                            _fun107093_ip = 220;
                            continue _fun107093;
                        case 206:
                            var1 = _closure2_slot0;
                            var0 = var1.goBack;
                            var0 = var0.bind(var1)();
                        case 220:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var3.bind(var5)(var0, var2);
                var0 = null;
                if (!(var0 != var12)) {
                    _fun107092_ip = 182;
                    continue _fun107092
                }
            case 81:
                var3 = _closure1_slot11;
                var2 = _closure1_slot15;
                var0 = {};
                var0.guildId = var12;
                var0.onClose = var11;
                var7 = _closure1_slot11;
                var6 = _closure1_slot1;
                var9 = _closure1_slot3;
                var5 = 16;
                var5 = var9[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var8 = var8.flex;
                var5.style = var8;
                var10 = _closure1_slot11;
                var9 = _closure1_slot14;
                var8 = {};
                var8.guildId = var12;
                var8.onClose = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun107092_ip = 198;
                continue _fun107092;
            case 182:
                var3 = _closure1_slot11;
                var2 = _closure1_slot13;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 198:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/MemberVerificationScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1662, 1410, 3173, 660, 33, 1297, 671, 7407, 566, 4891, 3175, 7382, 1220, 3878, 5734, 13796, 2]);