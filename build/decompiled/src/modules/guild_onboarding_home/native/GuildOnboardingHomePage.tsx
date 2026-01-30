// modules/guild_onboarding_home/native/GuildOnboardingHomePage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: GuildOnboardingHomePage, environment: var1
        _fun105413: for (var _fun105413_ip = 0;;) switch (_fun105413_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.guildId;
                var _closure2_slot0 = var14;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var6 = var2.bind(var4)(var1);
                var5 = var6.useSharedValue;
                var1 = -999;
                var5 = var5.bind(var6)(var1);
                var1 = 7;
                var1 = var3[var1];
                var7 = var2.bind(var4)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getSettings;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var6.bind(var7)(var2, var1);
                var _closure2_slot1 = var8;
                var2 = _closure1_slot1;
                var1 = 8;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var6 = var1.bind(var4)(var14);
                var1 = !var6;
                if (!var1) {
                    _fun105413_ip = 182;
                    continue _fun105413
                }
            case 133:
                var2 = null;
                var3 = var2 == var8;
                var7 = undefined;
                if (var3) {
                    _fun105413_ip = 164;
                    continue _fun105413
                }
            case 144:
                var3 = var8.resourceChannels;
                var9 = var2 == var3;
                var7 = undefined;
                if (var9) {
                    _fun105413_ip = 164;
                    continue _fun105413
                }
            case 159:
                var7 = var3.length;
            case 164:
                var9 = var2 != var7;
                var3 = 0;
                var2 = 0;
                if (!var9) {
                    _fun105413_ip = 178;
                    continue _fun105413
                }
            case 175:
                var2 = var7;
            case 178:
                var1 = var3 === var2;
            case 182:
                _closure2_slot2 = var1;
                var9 = _closure1_slot3;
                var7 = var9.useEffect;
                var3 = new Array(3);
                var3[0] = var14;
                var3[1] = var8;
                var3[2] = var1;
                var2 = function() { // Environment: var0
                    _fun105415: for (var _fun105415_ip = 0;;) switch (_fun105415_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot6;
                            if (!(var3 !== var2)) {
                                _fun105415_ip = 272;
                                continue _fun105415
                            }
                        case 21:
                            var2 = _closure2_slot1;
                            var8 = null;
                            if (!(var8 != var2)) {
                                _fun105415_ip = 309;
                                continue _fun105415
                            }
                        case 34:
                            var3 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var2 = 10;
                            var2 = var10[var2];
                            var6 = undefined;
                            var5 = var3.bind(var6)(var2);
                            var4 = var5.track;
                            var2 = _closure1_slot8;
                            var3 = var2.SERVER_GUIDE_VIEWED;
                            var2 = {};
                            var9 = _closure1_slot0;
                            var7 = 11;
                            var7 = var10[var7];
                            var10 = var9.bind(var6)(var7);
                            var9 = var10.collectGuildAnalyticsMetadata;
                            var7 = _closure2_slot0;
                            var14 = var9.bind(var10)(var7);
                            var15 = var2;
                            var7 = copyDataProperties(var15, var14);
                            var7 = _closure2_slot1;
                            var7 = var7.newMemberActions;
                            var10 = var8 == var7;
                            var9 = undefined;
                            if (var10) {
                                _fun105415_ip = 135;
                                continue _fun105415
                            }
                        case 130:
                            var9 = var7.length;
                        case 135:
                            var11 = var8 != var9;
                            var10 = 0;
                            if (!var11) {
                                _fun105415_ip = 147;
                                continue _fun105415
                            }
                        case 144:
                            var10 = var9;
                        case 147:
                            var9 = 'num_member_actions';
                            var2[var9] = var10;
                            var9 = global;
                            var11 = var9.Object;
                            var10 = var11.keys;
                            var13 = _closure1_slot7;
                            var12 = var13.getCompletedActions;
                            var9 = _closure2_slot0;
                            var9 = var12.bind(var13)(var9);
                            if (!(var8 == var9)) {
                                _fun105415_ip = 196;
                                continue _fun105415
                            }
                        case 194:
                            var9 = {};
                        case 196:
                            var9 = var10.bind(var11)(var9);
                            var10 = var9.length;
                            var9 = 'num_member_actions_completed';
                            var2[var9] = var10;
                            var9 = _closure2_slot1;
                            var9 = var9.resourceChannels;
                            var10 = var8 == var9;
                            var6 = undefined;
                            if (var10) {
                                _fun105415_ip = 241;
                                continue _fun105415
                            }
                        case 236:
                            var6 = var9.length;
                        case 241:
                            var8 = var8 != var6;
                            var7 = 0;
                            if (!var8) {
                                _fun105415_ip = 253;
                                continue _fun105415
                            }
                        case 250:
                            var7 = var6;
                        case 253:
                            var6 = 'num_resource_channels';
                            var2[var6] = var7;
                            var2 = var4.bind(var5)(var3, var2);
                            _fun105415_ip = 309;
                            continue _fun105415;
                        case 272:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.fetchGuildHomeSettings;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 309:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var9)(var2, var3);
                var7 = _closure1_slot3;
                var3 = var7.useEffect;
                var2 = new Array(3);
                var2[0] = var14;
                var2[1] = var1;
                var2[2] = var8;
                var0 = function() { // Environment: var0
                    _fun105416: for (var _fun105416_ip = 0;;) switch (_fun105416_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun105416_ip = 25;
                                continue _fun105416
                            }
                        case 10:
                            var3 = _closure2_slot1;
                            var2 = _closure1_slot6;
                            var1 = var3 !== var2;
                        case 25:
                            if (!var1) {
                                _fun105416_ip = 68;
                                continue _fun105416
                            }
                        case 28:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.escapeToDefaultChannel;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 68:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var3.bind(var7)(var0, var2);
                var0 = null;
                if (var1) {
                    _fun105413_ip = 532;
                    continue _fun105413
                }
            case 270:
                var3 = _closure1_slot11;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 13;
                var1 = var9[var1];
                var2 = var7.bind(var4)(var1);
                var1 = {};
                var1.guildId = var14;
                var1.scrollValue = var5;
                var8 = _closure1_slot9;
                var5 = 14;
                var5 = var9[var5];
                var7 = var7.bind(var4)(var5);
                var5 = {};
                var5.guildId = var14;
                var5.hideDescription = var6;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                if (var6) {
                    _fun105413_ip = 390;
                    continue _fun105413
                }
            case 349:
                var8 = _closure1_slot9;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 18;
                var6 = var9[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var6.guildId = var14;
                var6 = var8.bind(var4)(var7, var6);
                _fun105413_ip = 518;
                continue _fun105413;
            case 390:
                var9 = _closure1_slot11;
                var8 = _closure1_slot10;
                var7 = {};
                var16 = _closure1_slot9;
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var10 = 15;
                var10 = var15[var10];
                var13 = var12.bind(var4)(var10);
                var10 = {};
                var10.guildId = var14;
                var13 = var16.bind(var4)(var13, var10);
                var10 = new Array(3);
                var10[0] = var13;
                var17 = _closure1_slot9;
                var13 = 16;
                var13 = var15[var13];
                var16 = var12.bind(var4)(var13);
                var13 = {};
                var13.guildId = var14;
                var13 = var17.bind(var4)(var16, var13);
                var10[1] = var13;
                var13 = _closure1_slot9;
                var11 = 17;
                var11 = var15[var11];
                var12 = var12.bind(var4)(var11);
                var11 = {};
                var11.guildId = var14;
                var11 = var13.bind(var4)(var12, var11);
                var10[2] = var11;
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 518:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 532:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NO_SETTINGS;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var6 = var3.Fragment;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/native/GuildOnboardingHomePage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GuildOnboardingHomePageGuard, environment: var1
        var0 = arg0;
        var4 = var0.guildId;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 7;
        var2 = var6[var2];
        var3 = undefined;
        var9 = var5.bind(var3)(var2);
        var8 = var9.useStateFromStores;
        var2 = _closure1_slot4;
        var7 = new Array(1);
        var7[0] = var2;
        var2 = function() { // Environment: var1
            var0 = _closure1_slot4;
            var0 = var0.hasLoadedExperiments;
            return var0;
        };
        var8 = var8.bind(var9)(var7, var2);
        var _closure2_slot1 = var8;
        var2 = 19;
        var2 = var6[var2];
        var5 = var5.bind(var3)(var2);
        var2 = var5.useCanSeeOnboardingHome;
        var7 = var2.bind(var5)(var4);
        var _closure2_slot2 = var7;
        var6 = _closure1_slot3;
        var5 = var6.useEffect;
        var2 = new Array(3);
        var2[0] = var4;
        var2[1] = var8;
        var2[2] = var7;
        var1 = function() { // Environment: var1
            _fun105419: for (var _fun105419_ip = 0;;) switch (_fun105419_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (!var1) {
                        _fun105419_ip = 57;
                        continue _fun105419
                    }
                case 10:
                    var1 = _closure2_slot2;
                    if (var1) {
                        _fun105419_ip = 57;
                        continue _fun105419
                    }
                case 17:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.escapeToDefaultChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 57:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var5.bind(var6)(var1, var2);
        var2 = _closure1_slot9;
        var1 = _closure1_slot12;
        var0 = {};
        var0.guildId = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1590, 4271, 4272, 660, 33, 3679, 566, 4544, 11676, 795, 4265, 4641, 13693, 13694, 13698, 13702, 13703, 13705, 4543, 2]);