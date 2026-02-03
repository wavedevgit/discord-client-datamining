// modules/guild_onboarding_home/OnboardingHomeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun41610: for (var _fun41610_ip = 0;;) switch (_fun41610_ip) {
            case 0:
                var3 = arg0;
                var5 = var3.id;
                var2 = _closure1_slot6;
                var0 = var2.getNewMemberActions;
                var0 = var0.bind(var2)(var5);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun41610_ip = 36;
                    continue _fun41610
                }
            case 32:
                var0 = new Array(0);
            case 36:
                var2 = var0.length;
                var0 = 0;
                var0 = var2 > var0;
                var4 = _closure1_slot6;
                var2 = var4.getEnabled;
                var2 = var2.bind(var4)(var5);
                if (!var0) {
                    _fun41610_ip = 91;
                    continue _fun41610
                }
            case 65:
                var6 = var3.features;
                var5 = var6.has;
                var4 = _closure1_slot8;
                var4 = var4.COMMUNITY;
                var0 = var5.bind(var6)(var4);
            case 91:
                if (!var0) {
                    _fun41610_ip = 129;
                    continue _fun41610
                }
            case 94:
                var4 = var3.features;
                var3 = var4.has;
                var1 = _closure1_slot8;
                var1 = var1.GUILD_ONBOARDING;
                var1 = var3.bind(var4)(var1);
                if (!var1) {
                    _fun41610_ip = 126;
                    continue _fun41610
                }
            case 123:
                var1 = !var2;
            case 126:
                var0 = !var1;
            case 129:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun41611: for (var _fun41611_ip = 0;;) switch (_fun41611_ip) {
            case 0:
                var2 = arg1;
                var1 = var2.getMutableGuildChannelsForGuild;
                var0 = arg0;
                var7 = var1.bind(var2)(var0);
                var5 = var7;
                for (var2 in var5)
                    case 31: {
                        case 40: var0 = var2;
                        var9 = var7[var0];
                        var8 = var9.hasFlag;
                        var0 = _closure1_slot10;
                        var0 = var0.IS_GUILD_RESOURCE_CHANNEL;
                        var0 = var8.bind(var9)(var0);
                        if (!var0) {
                            _fun41611_ip = 31;
                            continue _fun41611
                        }
                        case 71: var0 = true;
                        return var0;
                    }
            case 75:
                var0 = false;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.FAVORITES;
    var _closure1_slot7 = var6;
    var6 = var3.GuildFeatures;
    var _closure1_slot8 = var6;
    var3 = var3.ME;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelFlags;
    var _closure1_slot10 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/OnboardingHomeUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var3 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 6;
        var2 = var7[var2];
        var4 = undefined;
        var2 = var3.bind(var4)(var2);
        var5 = var2.bind(var4)(var6);
        var _closure2_slot1 = var5;
        var3 = _closure1_slot0;
        var2 = 7;
        var2 = var7[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.useStateFromStores;
        var7 = _closure1_slot4;
        var2 = new Array(3);
        var2[0] = var7;
        var7 = _closure1_slot5;
        var2[1] = var7;
        var1 = _closure1_slot3;
        var2[2] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            _fun41613: for (var _fun41613_ip = 0;;) switch (_fun41613_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = _closure1_slot9;
                    if (!(var1 !== var0)) {
                        _fun41613_ip = 243;
                        continue _fun41613
                    }
                case 21:
                    var1 = _closure2_slot0;
                    var0 = _closure1_slot7;
                    if (!(var1 !== var0)) {
                        _fun41613_ip = 243;
                        continue _fun41613
                    }
                case 36:
                    var3 = _closure1_slot5;
                    var1 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var4 = var1.bind(var3)(var0);
                    var0 = null;
                    var1 = var0 == var4;
                    if (var1) {
                        _fun41613_ip = 92;
                        continue _fun41613
                    }
                case 63:
                    var6 = var4.features;
                    var3 = var6.has;
                    var0 = _closure1_slot8;
                    var0 = var0.COMMUNITY;
                    var0 = var3.bind(var6)(var0);
                    var1 = !var0;
                case 92:
                    var0 = !var1;
                    if (var1) {
                        _fun41613_ip = 241;
                        continue _fun41613
                    }
                case 101:
                    var6 = _closure1_slot3;
                    var3 = var6.isFullServerPreview;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var6)(var1);
                    if (var1) {
                        _fun41613_ip = 227;
                        continue _fun41613
                    }
                case 123:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var1 = var6[var1];
                    var8 = undefined;
                    var6 = var3.bind(var8)(var1);
                    var3 = var6.isGuildOnboardingSettingsAvailable;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var6)(var1);
                    if (var1) {
                        _fun41613_ip = 194;
                        continue _fun41613
                    }
                case 163:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var3 = 9;
                    var3 = var7[var3];
                    var3 = var6.bind(var8)(var3);
                    var3 = var3.bind(var8)(var4);
                    var3 = !var3;
                    var1 = !var3;
                case 194:
                    if (!var1) {
                        _fun41613_ip = 225;
                        continue _fun41613
                    }
                case 197:
                    var3 = _closure2_slot1;
                    if (var3) {
                        _fun41613_ip = 222;
                        continue _fun41613
                    }
                case 204:
                    var7 = _closure1_slot12;
                    var6 = _closure2_slot0;
                    var5 = _closure1_slot4;
                    var3 = var7.bind(var8)(var6, var5);
                case 222:
                    var1 = var3;
                case 225:
                    _fun41613_ip = 238;
                    continue _fun41613;
                case 227:
                    var3 = _closure1_slot11;
                    var2 = undefined;
                    var1 = var3.bind(var2)(var4);
                case 238:
                    var0 = var1;
                case 241:
                    return var0;
                case 243:
                    var0 = false;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useCanSeeOnboardingHome = var3;
    var1 = function arg0() {
        _fun41614: for (var _fun41614_ip = 0;;) switch (_fun41614_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot5;
                var1 = var2.getGuild;
                var2 = var1.bind(var2)(var4);
                var3 = _closure1_slot3;
                var1 = var3.isFullServerPreview;
                var1 = var1.bind(var3)(var4);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun41614_ip = 272;
                    continue _fun41614
                }
            case 44:
                var3 = _closure1_slot9;
                if (!(var4 !== var3)) {
                    _fun41614_ip = 268;
                    continue _fun41614
                }
            case 55:
                var3 = _closure1_slot7;
                if (!(var4 !== var3)) {
                    _fun41614_ip = 268;
                    continue _fun41614
                }
            case 66:
                if (var1) {
                    _fun41614_ip = 255;
                    continue _fun41614
                }
            case 72:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var1 = var3.isGuildOnboardingSettingsAvailable;
                var3 = var1.bind(var3)(var4);
                if (!var3) {
                    _fun41614_ip = 134;
                    continue _fun41614
                }
            case 108:
                var5 = var2.features;
                var4 = var5.has;
                var1 = _closure1_slot8;
                var1 = var1.GUILD_ONBOARDING;
                var3 = var4.bind(var5)(var1);
            case 134:
                if (!var3) {
                    _fun41614_ip = 163;
                    continue _fun41614
                }
            case 137:
                var5 = var2.features;
                var4 = var5.has;
                var1 = _closure1_slot8;
                var1 = var1.GUILD_SERVER_GUIDE;
                var3 = var4.bind(var5)(var1);
            case 163:
                var5 = var2.features;
                var4 = var5.has;
                var1 = _closure1_slot8;
                var1 = var1.GUILD_ONBOARDING;
                var1 = var4.bind(var5)(var1);
                if (!var1) {
                    _fun41614_ip = 218;
                    continue _fun41614
                }
            case 192:
                var6 = var2.features;
                var5 = var6.has;
                var4 = _closure1_slot8;
                var4 = var4.GUILD_SERVER_GUIDE;
                var1 = var5.bind(var6)(var4);
            case 218:
                if (var1) {
                    _fun41614_ip = 224;
                    continue _fun41614
                }
            case 221:
                var1 = var3;
            case 224:
                if (!var1) {
                    _fun41614_ip = 253;
                    continue _fun41614
                }
            case 227:
                var5 = var2.features;
                var4 = var5.has;
                var3 = _closure1_slot8;
                var3 = var3.COMMUNITY;
                var1 = var4.bind(var5)(var3);
            case 253:
                return var1;
            case 255:
                var1 = _closure1_slot11;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
            case 268:
                var0 = false;
                return var0;
            case 272:
                var0 = false;
                return var0;
        }
    };
    var2.canSeeOnboardingHome = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1664, 1372, 1410, 4304, 660, 1379, 4577, 632, 4578, 4306, 2]);