// modules/opt_in_channels/OptInOnboardingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function arg0() {
        _fun78038: for (var _fun78038_ip = 0;;) switch (_fun78038_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var6 = undefined;
                var2 = var2.bind(var6)(var0);
                var0 = var2.isOptInEnabledForGuild;
                var0 = var0.bind(var2)(var5);
                var3 = _closure1_slot7;
                var2 = var3.getSelfMember;
                var4 = var2.bind(var3)(var5);
                var3 = null;
                var7 = var3 == var4;
                var2 = undefined;
                if (var7) {
                    _fun78038_ip = 70;
                    continue _fun78038
                }
            case 65:
                var2 = var4.flags;
            case 70:
                var4 = var3 != var2;
                var3 = 0;
                var7 = 0;
                if (!var4) {
                    _fun78038_ip = 84;
                    continue _fun78038
                }
            case 81:
                var7 = var2;
            case 84:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 6;
                var2 = var8[var2];
                var6 = var4.bind(var6)(var2);
                var4 = var6.hasFlag;
                var2 = _closure1_slot9;
                var2 = var2.COMPLETED_ONBOARDING;
                var2 = var4.bind(var6)(var7, var2);
                var4 = _closure1_slot8;
                var1 = var4.getOptedInChannels;
                var1 = var1.bind(var4)(var5);
                var1 = var1.size;
                var1 = var1 > var3;
                var0 = !var0;
                if (!var0) {
                    _fun78038_ip = 159;
                    continue _fun78038
                }
            case 156:
                var0 = !var2;
            case 159:
                if (!var0) {
                    _fun78038_ip = 165;
                    continue _fun78038
                }
            case 162:
                var0 = !var1;
            case 165:
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var3 = function arg0() {
        _fun78039: for (var _fun78039_ip = 0;;) switch (_fun78039_ip) {
            case 0:
                var4 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun78039_ip = 16;
                    continue _fun78039
                }
            case 14:
                var1 = {};
            case 16:
                var5 = var1.include;
                if (!(var5 === var0)) {
                    _fun78039_ip = 54;
                    continue _fun78039
                }
            case 26:
                var3 = global;
                var3 = var3.Set;
                var6 = var3.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = var6;
                var3 = new var12[var3](var11);
                var5 = var3 instanceof Object ? var3 : var6;
            case 54:
                var1 = var1.exclude;
                if (!(var1 === var0)) {
                    _fun78039_ip = 92;
                    continue _fun78039
                }
            case 64:
                var3 = global;
                var3 = var3.Set;
                var6 = var3.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = var6;
                var3 = new var12[var3](var11);
                var1 = var3 instanceof Object ? var3 : var6;
            case 92:
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var0;
                var6 = _closure1_slot6;
                var3 = var6.getChannels;
                var8 = var3.bind(var6)(var4);
                var3 = _closure1_slot4;
                var10 = var8[var3];
                var7 = new Array(0);
                var9 = 0;
                var11 = var7;
                var9 = arraySpread(var11, var10, var9);
                var3 = _closure1_slot5;
                var10 = var8[var3];
                var11 = var7;
                var3 = arraySpread(var11, var10, var9);
                var6 = var7.filter;
                var3 = function(arg0) { // Environment: var2
                    _fun78040: for (var _fun78040_ip = 0;;) switch (_fun78040_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.channel;
                            var0 = var1.isThread;
                            var0 = var0.bind(var1)();
                            var0 = !var0;
                            if (!var0) {
                                _fun78040_ip = 49;
                                continue _fun78040
                            }
                        case 24:
                            var3 = _closure2_slot0;
                            var2 = var3.has;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var0 = !var1;
                        case 49:
                            return var0;
                    }
                };
                var7 = var6.bind(var7)(var3);
                var6 = var7.map;
                var3 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.channel;
                    var0 = var0.id;
                    return var0;
                };
                var6 = var6.bind(var7)(var3);
                _closure2_slot1 = var6;
                var3 = var5.forEach;
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var5)(var2);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.onboardExistingMember;
                var1 = global;
                var1 = var1.Set;
                var5 = var1.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var1
                    }
                });
                var12 = var5;
                var11 = var6;
                var1 = new var12[var1](var11, var10);
                var1 = var1 instanceof Object ? var1 : var5;
                var1 = var2.bind(var3)(var4, var1);
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var9 = var6.bind(var0)(var9);
    var10 = var9.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot4 = var10;
    var9 = var9.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot5 = var9;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.GuildMemberFlags;
    var _closure1_slot9 = var5;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/opt_in_channels/OptInOnboardingUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.hasNotSetUpChannelOptIn = var4;
    var4 = function arg0() {
        _fun78043: for (var _fun78043_ip = 0;;) switch (_fun78043_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot10;
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                if (var3) {
                    _fun78043_ip = 80;
                    continue _fun78043
                }
            case 20:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 5;
                var3 = var6[var3];
                var4 = var5.bind(var0)(var3);
                var3 = var4.isOptInEnabledForGuild;
                var3 = var3.bind(var4)(var2);
                var4 = 7;
                var4 = var6[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.setGuildOptIn;
                var3 = !var3;
                var3 = var4.bind(var5)(var2, var3);
                _fun78043_ip = 89;
                continue _fun78043;
            case 80:
                var1 = _closure1_slot11;
                var1 = var1.bind(var0)(var2);
            case 89:
                return var0;
        }
    };
    var2.toggleShowAllChannels = var4;
    var2.optIntoAllChannelsForExistingMember = var3;
    var1 = function arg0() {
        _fun78044: for (var _fun78044_ip = 0;;) switch (_fun78044_ip) {
            case 0:
                var8 = arg0;
                var5 = arguments[1];
                var6 = undefined;
                if (!(var5 === var6)) {
                    _fun78044_ip = 19;
                    continue _fun78044
                }
            case 12:
                var5 = _closure1_slot3;
            case 19:
                var2 = null;
                var0 = var2 != var8;
                if (!var0) {
                    _fun78044_ip = 156;
                    continue _fun78044
                }
            case 31:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 6;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.hasFlag;
                var5 = var5.settings;
                var7 = var5.guilds;
                var9 = var2 == var7;
                var5 = undefined;
                if (var9) {
                    _fun78044_ip = 106;
                    continue _fun78044
                }
            case 81:
                var7 = var7.guilds;
                var7 = var7[var8];
                var8 = var2 == var7;
                var5 = undefined;
                if (var8) {
                    _fun78044_ip = 106;
                    continue _fun78044
                }
            case 100:
                var5 = var7.guildOnboardingProgress;
            case 106:
                var7 = var2 != var5;
                var2 = 0;
                if (!var7) {
                    _fun78044_ip = 118;
                    continue _fun78044
                }
            case 115:
                var2 = var5;
            case 118:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 9;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.GuildOnboardingProgress;
                var1 = var1.GUILD_NOTICE_CLEARED;
                var0 = var3.bind(var4)(var2, var1);
            case 156:
                return var0;
        }
    };
    var2.hasClearedGuildOnboardingNotice = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1310, 1671, 1681, 4303, 3079, 4579, 1384, 4694, 4691, 1311, 2]);