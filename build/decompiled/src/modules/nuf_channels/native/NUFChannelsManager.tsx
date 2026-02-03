// modules/nuf_channels/native/NUFChannelsManager.tsx
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
        _fun91476: for (var _fun91476_ip = 0;;) switch (_fun91476_ip) {
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
                _fun91476_ip = 76;
                continue _fun91476;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildMemberFlags;
    var _closure1_slot13 = var3;
    var3 = function() {
        _fun91479: for (var _fun91479_ip = 0;;) switch (_fun91479_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var3 = var0.Storage;
                var2 = var3.get;
                var0 = '2020_02_nuf_channels';
                var0 = var2.bind(var3)(var0);
                var0 = !var0;
                if (!var0) {
                    _fun91479_ip = 97;
                    continue _fun91479
                }
            case 53:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isNewUser;
                var4 = _closure1_slot11;
                var1 = var4.getCurrentUser;
                var1 = var1.bind(var4)();
                var0 = var2.bind(var3)(var1);
            case 97:
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun91481: for (var _fun91481_ip = 0;;) switch (_fun91481_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
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
                        _fun91481_ip = 86;
                        continue _fun91481
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun91481_ip = 120;
                    continue _fun91481;
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
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.clear;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.LOGOUT = var3;
                    var0.actions = var2;
                    var2 = function() { // Environment: var1
                        _fun91483: for (var _fun91483_ip = 0;;) switch (_fun91483_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 13;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.getCurrentNavigationRouteName;
                                var3 = var2.bind(var3)();
                                var2 = 'guilds';
                                if (!(var2 === var3)) {
                                    _fun91483_ip = 475;
                                    continue _fun91483
                                }
                            case 46:
                                var3 = _closure1_slot10;
                                var2 = var3.getGuildId;
                                var2 = var2.bind(var3)();
                                var4 = _closure1_slot9;
                                var3 = var4.getGuild;
                                var4 = var3.bind(var4)(var2);
                                var5 = null;
                                var2 = var5 != var2;
                                if (!var2) {
                                    _fun91483_ip = 119;
                                    continue _fun91483
                                }
                            case 83:
                                var3 = var5 != var4;
                                if (!var3) {
                                    _fun91483_ip = 116;
                                    continue _fun91483
                                }
                            case 90:
                                var8 = var4.features;
                                var7 = var8.has;
                                var6 = _closure1_slot12;
                                var6 = var6.HUB;
                                var3 = var7.bind(var8)(var6);
                            case 116:
                                var2 = !var3;
                            case 119:
                                var3 = var5 != var4;
                                var8 = null;
                                if (!var3) {
                                    _fun91483_ip = 148;
                                    continue _fun91483
                                }
                            case 128:
                                var7 = _closure1_slot8;
                                var6 = var7.getSelfMember;
                                var3 = var4.id;
                                var8 = var6.bind(var7)(var3);
                            case 148:
                                var3 = var5 != var4;
                                if (!var3) {
                                    _fun91483_ip = 181;
                                    continue _fun91483
                                }
                            case 155:
                                var7 = var4.features;
                                var6 = var7.has;
                                var4 = _closure1_slot12;
                                var4 = var4.GUILD_ONBOARDING;
                                var3 = var6.bind(var7)(var4);
                            case 181:
                                if (!var3) {
                                    _fun91483_ip = 252;
                                    continue _fun91483
                                }
                            case 184:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 14;
                                var4 = var7[var4];
                                var9 = var6.bind(var0)(var4);
                                var7 = var9.hasFlag;
                                var6 = var5 == var8;
                                var4 = undefined;
                                if (var6) {
                                    _fun91483_ip = 224;
                                    continue _fun91483
                                }
                            case 219:
                                var4 = var8.flags;
                            case 224:
                                var10 = var5 != var4;
                                var6 = 0;
                                if (!var10) {
                                    _fun91483_ip = 236;
                                    continue _fun91483
                                }
                            case 233:
                                var6 = var4;
                            case 236:
                                var4 = _closure1_slot13;
                                var4 = var4.STARTED_ONBOARDING;
                                var3 = var7.bind(var9)(var6, var4);
                            case 252:
                                if (!var3) {
                                    _fun91483_ip = 326;
                                    continue _fun91483
                                }
                            case 255:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 14;
                                var4 = var7[var4];
                                var7 = var6.bind(var0)(var4);
                                var6 = var7.hasFlag;
                                var9 = var5 == var8;
                                var4 = undefined;
                                if (var9) {
                                    _fun91483_ip = 295;
                                    continue _fun91483
                                }
                            case 290:
                                var4 = var8.flags;
                            case 295:
                                var8 = var5 != var4;
                                var5 = 0;
                                if (!var8) {
                                    _fun91483_ip = 307;
                                    continue _fun91483
                                }
                            case 304:
                                var5 = var4;
                            case 307:
                                var4 = _closure1_slot13;
                                var4 = var4.COMPLETED_ONBOARDING;
                                var4 = var6.bind(var7)(var5, var4);
                                var3 = !var4;
                            case 326:
                                if (!var2) {
                                    _fun91483_ip = 332;
                                    continue _fun91483
                                }
                            case 329:
                                var2 = !var3;
                            case 332:
                                if (!var2) {
                                    _fun91483_ip = 475;
                                    continue _fun91483
                                }
                            case 338:
                                var2 = _closure1_slot14;
                                var2 = var2.bind(var0)();
                                if (!var2) {
                                    _fun91483_ip = 458;
                                    continue _fun91483
                                }
                            case 349:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 15;
                                var2 = var3[var2];
                                var6 = var4.bind(var0)(var2);
                                var5 = var6.openLazy;
                                var2 = _closure1_slot0;
                                var1 = 17;
                                var1 = var3[var1];
                                var7 = var2.bind(var0)(var1);
                                var1 = 16;
                                var4 = var3[var1];
                                var1 = var3.paths;
                                var4 = var7.bind(var0)(var4, var1);
                                var1 = 'NUFChannelsActionSheet';
                                var1 = var5.bind(var6)(var4, var1);
                                var1 = 11;
                                var1 = var3[var1];
                                var1 = var2.bind(var0)(var1);
                                var4 = var1.Storage;
                                var3 = var4.set;
                                var2 = '2020_02_nuf_channels';
                                var1 = true;
                                var1 = var3.bind(var4)(var2, var1);
                            case 458:
                                var2 = _closure3_slot0;
                                var1 = var2.terminate;
                                var1 = var1.bind(var2)();
                            case 475:
                                return var0;
                        }
                    };
                    var0.handleNavigationStateChanged = var2;
                    var2 = function() { // Environment: var1
                        _fun91484: for (var _fun91484_ip = 0;;) switch (_fun91484_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 11;
                                var0 = var3[var0];
                                var4 = undefined;
                                var0 = var2.bind(var4)(var0);
                                var3 = var0.Storage;
                                var2 = var3.get;
                                var0 = '2020_02_nuf_voice_channels';
                                var0 = var2.bind(var3)(var0);
                                var0 = !var0;
                                if (!var0) {
                                    _fun91484_ip = 97;
                                    continue _fun91484
                                }
                            case 53:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 12;
                                var2 = var5[var2];
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.isNewUser;
                                var4 = _closure1_slot11;
                                var1 = var4.getCurrentUser;
                                var1 = var1.bind(var4)();
                                var0 = var2.bind(var3)(var1);
                            case 97:
                                return var0;
                        }
                    };
                    var0.requiresVoiceChannelsOnboard = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 11;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var4 = var1.Storage;
                        var3 = var4.set;
                        var2 = '2020_02_nuf_voice_channels';
                        var1 = true;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0.handleVoiceChannelsOnboard = var2;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 11;
                        var4 = var3[var1];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var4);
                        var6 = var4.Storage;
                        var5 = var6.remove;
                        var4 = '2020_02_nuf_channels';
                        var4 = var5.bind(var6)(var4);
                        var1 = var3[var1];
                        var1 = var2.bind(var0)(var1);
                        var3 = var1.Storage;
                        var2 = var3.remove;
                        var1 = '2020_02_nuf_voice_channels';
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.clear = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            _fun91487: for (var _fun91487_ip = 0;;) switch (_fun91487_ip) {
                case 0:
                    var2 = _closure1_slot14;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    if (!var2) {
                        _fun91487_ip = 77;
                        continue _fun91487
                    }
                case 16:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 18;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun91487_ip = 77;
                        continue _fun91487
                    }
                case 52:
                    var3 = var4.addListener;
                    var1 = this;
                    var2 = var1.handleNavigationStateChanged;
                    var1 = 'state';
                    var1 = var3.bind(var4)(var1, var2);
                case 77:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            _fun91488: for (var _fun91488_ip = 0;;) switch (_fun91488_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun91488_ip = 66;
                        continue _fun91488
                    }
                case 41:
                    var3 = var4.removeListener;
                    var1 = this;
                    var2 = var1.handleNavigationStateChanged;
                    var1 = 'state';
                    var1 = var3.bind(var4)(var1, var2);
                case 66:
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
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
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nuf_channels/native/NUFChannelsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1672, 1410, 3204, 1613, 660, 3070, 587, 3227, 3910, 1384, 3269, 11884, 1307, 3911, 4295, 2]);