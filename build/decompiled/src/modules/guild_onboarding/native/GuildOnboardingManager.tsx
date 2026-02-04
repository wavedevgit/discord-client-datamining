// modules/guild_onboarding/native/GuildOnboardingManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun113264: for (var _fun113264_ip = 0;;) switch (_fun113264_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun113264_ip = 76;
                continue _fun113264;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildMemberFlags;
    var _closure1_slot12 = var3;
    var3 = null;
    var _closure1_slot13 = var3;
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun113268: for (var _fun113268_ip = 0;;) switch (_fun113268_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113268_ip = 86;
                        continue _fun113268
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113268_ip = 120;
                    continue _fun113268;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleChannelSelect;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.CHANNEL_SELECT = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleGuildDelete;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.GUILD_DELETE = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.POST_CONNECTION_OPEN = var3;
                    var0.actions = var2;
                    var2 = function() { // Environment: var1
                        _fun113272: for (var _fun113272_ip = 0;;) switch (_fun113272_ip) {
                            case 0:
                                var1 = _closure1_slot13;
                                var2 = null;
                                if (!(var2 == var1)) {
                                    _fun113272_ip = 29;
                                    continue _fun113272
                                }
                            case 13:
                                var3 = _closure1_slot10;
                                var1 = var3.getGuildId;
                                var3 = var1.bind(var3)();
                                _fun113272_ip = 33;
                                continue _fun113272;
                            case 29:
                                var3 = _closure1_slot13;
                            case 33:
                                var4 = var2 != var3;
                                var1 = null;
                                if (!var4) {
                                    _fun113272_ip = 45;
                                    continue _fun113272
                                }
                            case 42:
                                var1 = var3;
                            case 45:
                                _closure1_slot13 = var1;
                                if (!(var2 != var1)) {
                                    _fun113272_ip = 75;
                                    continue _fun113272
                                }
                            case 53:
                                var2 = _closure3_slot0;
                                var1 = var2._openOnboardingIfIncomplete;
                                var0 = _closure1_slot13;
                                var0 = var1.bind(var2)(var0);
                            case 75:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleConnectionOpen = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun113273: for (var _fun113273_ip = 0;;) switch (_fun113273_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.guildId;
                                var4 = var0.channelId;
                                var1 = _closure1_slot13;
                                var1 = var1 === var3;
                                if (!var1) {
                                    _fun113273_ip = 35;
                                    continue _fun113273
                                }
                            case 27:
                                var2 = _closure1_slot14;
                                var1 = var2 === var4;
                            case 35:
                                if (var1) {
                                    _fun113273_ip = 98;
                                    continue _fun113273
                                }
                            case 38:
                                var2 = null;
                                var5 = var2 != var4;
                                var1 = null;
                                if (!var5) {
                                    _fun113273_ip = 52;
                                    continue _fun113273
                                }
                            case 49:
                                var1 = var4;
                            case 52:
                                _closure1_slot14 = var1;
                                var4 = var2 != var3;
                                var1 = null;
                                if (!var4) {
                                    _fun113273_ip = 68;
                                    continue _fun113273
                                }
                            case 65:
                                var1 = var3;
                            case 68:
                                _closure1_slot13 = var1;
                                if (!(var2 != var1)) {
                                    _fun113273_ip = 98;
                                    continue _fun113273
                                }
                            case 76:
                                var2 = _closure3_slot0;
                                var1 = var2._openOnboardingIfIncomplete;
                                var0 = _closure1_slot13;
                                var0 = var1.bind(var2)(var0);
                            case 98:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleChannelSelect = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.guild;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 10;
                        var2 = var2[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.discardOnboardingPromise;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleGuildDelete = var2;
                    var1 = function(arg0) { // Environment: var1
                        _fun113275: for (var _fun113275_ip = 0;;) switch (_fun113275_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure1_slot9;
                                var1 = var2.getGuild;
                                var1 = var1.bind(var2)(var3);
                                var4 = null;
                                if (!(var4 != var1)) {
                                    _fun113275_ip = 247;
                                    continue _fun113275
                                }
                            case 29:
                                var5 = var1.features;
                                var2 = var5.has;
                                var1 = _closure1_slot11;
                                var1 = var1.GUILD_ONBOARDING;
                                var1 = var2.bind(var5)(var1);
                                if (!var1) {
                                    _fun113275_ip = 247;
                                    continue _fun113275
                                }
                            case 61:
                                var2 = _closure1_slot8;
                                var1 = var2.getSelfMember;
                                var2 = var1.bind(var2)(var3);
                                var1 = var4 != var2;
                                if (!var1) {
                                    _fun113275_ip = 147;
                                    continue _fun113275
                                }
                            case 83:
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var5 = 11;
                                var6 = var6[var5];
                                var5 = undefined;
                                var8 = var7.bind(var5)(var6);
                                var7 = var8.hasFlag;
                                var5 = var2.flags;
                                var9 = var4 != var5;
                                var6 = 0;
                                if (!var9) {
                                    _fun113275_ip = 128;
                                    continue _fun113275
                                }
                            case 125:
                                var6 = var5;
                            case 128:
                                var5 = _closure1_slot12;
                                var5 = var5.COMPLETED_ONBOARDING;
                                var5 = var7.bind(var8)(var6, var5);
                                var1 = !var5;
                            case 147:
                                if (!var1) {
                                    _fun113275_ip = 211;
                                    continue _fun113275
                                }
                            case 150:
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var5 = 11;
                                var6 = var6[var5];
                                var5 = undefined;
                                var6 = var7.bind(var5)(var6);
                                var5 = var6.hasFlag;
                                var2 = var2.flags;
                                var7 = var4 != var2;
                                var4 = 0;
                                if (!var7) {
                                    _fun113275_ip = 195;
                                    continue _fun113275
                                }
                            case 192:
                                var4 = var2;
                            case 195:
                                var2 = _closure1_slot12;
                                var2 = var2.STARTED_ONBOARDING;
                                var1 = var5.bind(var6)(var4, var2);
                            case 211:
                                if (!var1) {
                                    _fun113275_ip = 247;
                                    continue _fun113275
                                }
                            case 214:
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 10;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var0.guildId = var3;
                                var0 = var1.bind(var2)(var0);
                            case 247:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._openOnboardingIfIncomplete = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/native/GuildOnboardingManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 1681, 1410, 3213, 660, 3079, 4683, 1384, 4299, 2]);