// stores/UserGuildSettingsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var7;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var5
        _fun39374: for (var _fun39374_ip = 0;;) switch (_fun39374_ip) {
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
            case 70: // try_end0
                _fun39374_ip = 74;
                continue _fun39374;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot35 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function(arg0, arg1) { // Original name: updateUserGuildSettingsInternal, environment: var5
        _fun39377: for (var _fun39377_ip = 0;;) switch (_fun39377_ip) {
            case 0:
                var2 = arg0;
                var6 = arg1;
                var0 = _closure1_slot21;
                var8 = var0[var2];
                var5 = null;
                var3 = var5 == var8;
                var0 = undefined;
                var12 = undefined;
                if (var3) {
                    _fun39377_ip = 38;
                    continue _fun39377
                }
            case 32:
                var12 = var8.channel_overrides;
            case 38:
                if (!(var5 == var12)) {
                    _fun39377_ip = 44;
                    continue _fun39377
                }
            case 42:
                var12 = {};
            case 44:
                var7 = _closure1_slot44;
                var3 = var6.channel_overrides;
                var7 = var7.bind(var0)(var3);
                var3 = {};
                var9 = _closure1_slot43;
                var17 = var9.bind(var0)(var2);
                var18 = var3;
                var9 = copyDataProperties(var18, var17);
                var18 = var3;
                var17 = var8;
                var8 = copyDataProperties(var18, var17);
                var18 = var3;
                var17 = var6;
                var6 = copyDataProperties(var18, var17);
                var6 = 'channel_overrides';
                var3[var6] = var7;
                var7 = _closure1_slot26;
                var6 = var7.clearTimer;
                var6 = var6.bind(var7)(var2);
                var7 = _closure1_slot1;
                var8 = _closure1_slot3;
                var6 = 16;
                var9 = var8[var6];
                var11 = var7.bind(var0)(var9);
                var10 = var11.forEach;
                var9 = function(arg0) { // Environment: var4
                    var2 = _closure1_slot27;
                    var1 = var2.clearTimer;
                    var0 = arg0;
                    var0 = var0.channel_id;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var9 = var10.bind(var11)(var12, var9);
                var9 = _closure1_slot37;
                var9 = var9.bind(var0)(var2, var3);
                var9 = _closure1_slot21;
                var9[var2] = var3;
                var10 = _closure1_slot29;
                var11 = _closure1_slot47;
                var9 = _closure1_slot21;
                var9 = var9[var2];
                var9 = var11.bind(var0)(var9);
                var10[var2] = var9;
                var6 = var8[var6];
                var8 = var7.bind(var0)(var6);
                var7 = var8.filter;
                var6 = var3.channel_overrides;
                var3 = function(arg0) { // Environment: var4
                    _fun39379: for (var _fun39379_ip = 0;;) switch (_fun39379_ip) {
                        case 0:
                            var3 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var1 = 17;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.hasFlag;
                            var1 = arg0;
                            var4 = var1.flags;
                            var1 = null;
                            var5 = var1 != var4;
                            var1 = 0;
                            if (!var5) {
                                _fun39379_ip = 53;
                                continue _fun39379
                            }
                        case 50:
                            var1 = var4;
                        case 53:
                            var0 = _closure1_slot19;
                            var0 = var0.OPT_IN_ENABLED;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var9 = var7.bind(var8)(var6, var3);
                var6 = _closure1_slot30;
                var3 = global;
                var8 = var3.Set;
                var7 = var9.map;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.channel_id;
                    return var0;
                };
                var18 = var7.bind(var9)(var4);
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var19 = var7;
                var4 = new var19[var8](var18, var17);
                var4 = var4 instanceof Object ? var4 : var7;
                var6[var2] = var4;
                if (!(var5 != var2)) {
                    _fun39377_ip = 483;
                    continue _fun39377
                }
            case 289:
                var7 = var3.Set;
                var4 = _closure1_slot30;
                var18 = var4[var2];
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var19 = var6;
                var4 = new var19[var7](var18, var17);
                var4 = var4 instanceof Object ? var4 : var6;
                var6 = _closure1_slot33;
                var6 = var6[var2];
                if (!(var5 == var6)) {
                    _fun39377_ip = 337;
                    continue _fun39377
                }
            case 335:
                var6 = {};
            case 337:
                var10 = var6;
                var5 = 17;
                for (var7 in var10)
                    case 351: {
                        case 360: var13 = var7;
                        var12 = var6[var13];
                        var15 = _closure1_slot2;
                        var14 = _closure1_slot3;
                        var14 = var14[var5];
                        var16 = var15.bind(var0)(var14);
                        var15 = var16.hasFlag;
                        var14 = var12.flags;
                        var12 = _closure1_slot19;
                        var12 = var12.OPT_IN_ENABLED;
                        var12 = var15.bind(var16)(var14, var12);
                        if (var12) {
                            _fun39377_ip = 426;
                            continue _fun39377
                        }
                        case 414: var12 = var4.delete;
                        var12 = var12.bind(var4)(var13);
                        _fun39377_ip = 351;
                        continue _fun39377;
                        case 426: var12 = var4.add;
                        var12 = var12.bind(var4)(var13);
                        _fun39377_ip = 351;
                        continue _fun39377;
                    }
            case 438:
                var5 = var3.Object;
                var3 = var5.keys;
                var3 = var3.bind(var5)(var6);
                var5 = var3.length;
                var3 = 0;
                if (!(!(var5 > var3))) {
                    _fun39377_ip = 475;
                    continue _fun39377
                }
            case 465:
                var3 = _closure1_slot34;
                var3 = delete var3[var2];
                _fun39377_ip = 483;
                continue _fun39377;
            case 475:
                var3 = _closure1_slot34;
                var3[var2] = var4;
            case 483:
                var1 = _closure1_slot22;
                var1 = delete var1[var2];
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function(arg0, arg1) { // Original name: setMuteTimers, environment: var5
        _fun39381: for (var _fun39381_ip = 0;;) switch (_fun39381_ip) {
            case 0:
                var6 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var6;
                var3 = var2.muted;
                var0 = true;
                if (!(var0 === var3)) {
                    _fun39381_ip = 66;
                    continue _fun39381
                }
            case 24:
                var5 = _closure1_slot26;
                var4 = var5.setTimer;
                var3 = var2.mute_config;
                var0 = function() { // Environment: var1
                    var3 = _closure1_slot38;
                    var4 = _closure2_slot0;
                    var2 = {};
                    var0 = false;
                    var2.muted = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var4, var2);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 18;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'GUILD_MUTE_EXPIRED';
                    var1.type = var5;
                    var1.guildId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var4.bind(var5)(var6, var3, var0);
                if (!var0) {
                    _fun39381_ip = 66;
                    continue _fun39381
                }
            case 58:
                var0 = false;
                var2.muted = var0;
            case 66:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var0 = 16;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.forEach;
                var2 = var2.channel_overrides;
                var1 = function(arg0) { // Environment: var1
                    _fun39383: for (var _fun39383_ip = 0;;) switch (_fun39383_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var3 = var1.muted;
                            var2 = true;
                            if (!(var2 === var3)) {
                                _fun39383_ip = 68;
                                continue _fun39383
                            }
                        case 21:
                            var5 = _closure1_slot27;
                            var4 = var5.setTimer;
                            var3 = var1.channel_id;
                            var2 = var1.mute_config;
                            var0 = function() { // Environment: var0
                                var6 = _closure1_slot39;
                                var5 = _closure2_slot0;
                                var4 = _closure3_slot0;
                                var3 = var4.channel_id;
                                var2 = {};
                                var0 = false;
                                var2.muted = var0;
                                var0 = undefined;
                                var2 = var6.bind(var0)(var5, var3, var2);
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var1 = 18;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.dispatch;
                                var1 = {};
                                var6 = 'CHANNEL_MUTE_EXPIRED';
                                var1.type = var6;
                                var1.guildId = var5;
                                var4 = var4.channel_id;
                                var1.channelId = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var0 = var4.bind(var5)(var3, var2, var0);
                            if (!var0) {
                                _fun39383_ip = 68;
                                continue _fun39383
                            }
                        case 60:
                            var0 = false;
                            var1.muted = var0;
                        case 68:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function(arg0, arg1) { // Original name: updateUserGuildSettings, environment: var5
        _fun39385: for (var _fun39385_ip = 0;;) switch (_fun39385_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot21;
                var6 = var1[var3];
                var2 = _closure1_slot36;
                var1 = {};
                var5 = null;
                var7 = var5 == var6;
                var0 = undefined;
                var4 = undefined;
                if (var7) {
                    _fun39385_ip = 39;
                    continue _fun39385
                }
            case 33:
                var4 = var6.channel_overrides;
            case 39:
                if (!(var5 == var4)) {
                    _fun39385_ip = 45;
                    continue _fun39385
                }
            case 43:
                var4 = {};
            case 45:
                var1.channel_overrides = var4;
                var8 = arg1;
                var9 = var1;
                var4 = copyDataProperties(var9, var8);
                var1 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: updateUserGuildChannelSettings, environment: var5
        var3 = arg0;
        var5 = arg1;
        var4 = _closure1_slot42;
        var0 = undefined;
        var2 = arg2;
        var4 = var4.bind(var0)(var3, var5, var2);
        var2 = _closure1_slot41;
        var1 = {};
        var1[var5] = var4;
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var _closure1_slot39 = var0;
    var0 = function(arg0, arg1) { // Original name: updateUserGuildChannelSettingsBulk, environment: var5
        _fun39387: for (var _fun39387_ip = 0;;) switch (_fun39387_ip) {
            case 0:
                var3 = arg0;
                var9 = arg1;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var9;
                var2 = {};
                var _closure2_slot2 = var2;
                var4 = null;
                var0 = var4 != var3;
                var6 = null;
                if (!var0) {
                    _fun39387_ip = 44;
                    continue _fun39387
                }
            case 33:
                var0 = _closure1_slot33;
                var6 = var0[var3];
            case 44:
                if (!(var4 == var6)) {
                    _fun39387_ip = 50;
                    continue _fun39387
                }
            case 48:
                var6 = {};
            case 50:
                var _closure2_slot3 = var6;
                var8 = _closure1_slot1;
                var7 = _closure1_slot3;
                var0 = 19;
                var7 = var7[var0];
                var0 = undefined;
                var8 = var8.bind(var0)(var7);
                var7 = var8.keys;
                var8 = var7.bind(var8)(var9);
                var7 = var8.forEach;
                var5 = function(arg0) { // Environment: var5
                    _fun39388: for (var _fun39388_ip = 0;;) switch (_fun39388_ip) {
                        case 0:
                            var3 = arg0;
                            var5 = _closure1_slot42;
                            var4 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var2 = var0[var3];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var4, var3, var2);
                            var2 = _closure2_slot2;
                            var2[var3] = var4;
                            var2 = _closure2_slot3;
                            var1 = {};
                            var5 = var4.flags;
                            var4 = null;
                            var6 = var4 != var5;
                            var4 = 0;
                            if (!var6) {
                                _fun39388_ip = 67;
                                continue _fun39388
                            }
                        case 64:
                            var4 = var5;
                        case 67:
                            var1.flags = var4;
                            var2[var3] = var1;
                            return var0;
                    }
                };
                var5 = var7.bind(var8)(var5);
                if (!(var4 != var3)) {
                    _fun39387_ip = 139;
                    continue _fun39387
                }
            case 108:
                var5 = _closure1_slot33;
                var4 = {};
                var10 = var5[var3];
                var11 = var4;
                var7 = copyDataProperties(var11, var10);
                var11 = var4;
                var10 = var6;
                var6 = copyDataProperties(var11, var10);
                var5[var3] = var4;
            case 139:
                var1 = _closure1_slot41;
                var1 = var1.bind(var0)(var3, var2);
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function(arg0, arg1) { // Original name: updateMultipleChannels, environment: var5
        _fun39389: for (var _fun39389_ip = 0;;) switch (_fun39389_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var0 = _closure1_slot21;
                var8 = var0[var3];
                var5 = null;
                var2 = var5 == var8;
                var0 = undefined;
                var7 = undefined;
                if (var2) {
                    _fun39389_ip = 36;
                    continue _fun39389
                }
            case 30:
                var7 = var8.channel_overrides;
            case 36:
                if (!(var5 == var7)) {
                    _fun39389_ip = 42;
                    continue _fun39389
                }
            case 40:
                var7 = {};
            case 42:
                var2 = _closure1_slot36;
                var1 = {};
                var4 = var6;
                if (!(var5 != var8)) {
                    _fun39389_ip = 80;
                    continue _fun39389
                }
            case 55:
                var5 = {};
                var10 = var5;
                var9 = var7;
                var7 = copyDataProperties(var10, var9);
                var10 = var5;
                var9 = var6;
                var6 = copyDataProperties(var10, var9);
                var4 = var5;
            case 80:
                var1.channel_overrides = var4;
                var1 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: computeNewChannelSettings, environment: var5
        _fun39390: for (var _fun39390_ip = 0;;) switch (_fun39390_ip) {
            case 0:
                var2 = arg1;
                var1 = _closure1_slot21;
                var0 = arg0;
                var4 = var1[var0];
                var0 = {};
                var0.channel_id = var2;
                var1 = false;
                var0.muted = var1;
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if (var5) {
                    _fun39390_ip = 47;
                    continue _fun39390
                }
            case 41:
                var1 = var4.channel_overrides;
            case 47:
                if (!(var3 == var1)) {
                    _fun39390_ip = 53;
                    continue _fun39390
                }
            case 51:
                var1 = {};
            case 53:
                var6 = var1[var2];
                var7 = var0;
                var1 = copyDataProperties(var7, var6);
                var6 = arg2;
                var7 = var0;
                var1 = copyDataProperties(var7, var6);
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var3 = function(arg0) { // Original name: getGuildDefaults, environment: var5
        _fun39391: for (var _fun39391_ip = 0;;) switch (_fun39391_ip) {
            case 0:
                var3 = _closure1_slot14;
                var2 = var3.getGuild;
                var1 = arg0;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                if (!(var1 == var2)) {
                    _fun39391_ip = 38;
                    continue _fun39391
                }
            case 26:
                var1 = _closure1_slot16;
                var1 = var1.ALL_MESSAGES;
                _fun39391_ip = 44;
                continue _fun39391;
            case 38:
                var1 = var2.defaultMessageNotifications;
            case 44:
                var0 = _closure1_slot28;
                var0 = var0[var1];
                return var0;
        }
    };
    var _closure1_slot43 = var3;
    var1 = function() { // Original name: convertChannelOverridesToMap, environment: var5
        _fun39392: for (var _fun39392_ip = 0;;) switch (_fun39392_ip) {
            case 0:
                var4 = arguments[0];
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun39392_ip = 11;
                    continue _fun39392
                }
            case 9:
                var4 = {};
            case 11:
                var0 = global;
                var0 = var0.Array;
                var1 = var4 instanceof var0;
                var0 = var4;
                if (!var1) {
                    _fun39392_ip = 68;
                    continue _fun39392
                }
            case 29:
                var2 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 16;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.keyBy;
                var1 = 'channel_id';
                var0 = var2.bind(var3)(var4, var1);
            case 68:
                return var0;
        }
    };
    var _closure1_slot44 = var1;
    var0 = function(arg0) { // Original name: getGuildSettings, environment: var5
        _fun39393: for (var _fun39393_ip = 0;;) switch (_fun39393_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot21;
                var0 = var0[var3];
                var2 = null;
                if (!(var2 == var0)) {
                    _fun39393_ip = 31;
                    continue _fun39393
                }
            case 20:
                var2 = _closure1_slot43;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 31:
                return var0;
        }
    };
    var _closure1_slot45 = var0;
    var0 = function(arg0) { // Original name: processAccountNotificationSettings, environment: var5
        var2 = arg0;
        var4 = _closure1_slot2;
        var5 = _closure1_slot3;
        var3 = 17;
        var6 = var5[var3];
        var0 = undefined;
        var9 = var4.bind(var0)(var6);
        var8 = var9.hasFlag;
        var7 = var2.flags;
        var6 = _closure1_slot17;
        var6 = var6.USE_NEW_NOTIFICATIONS;
        var6 = var8.bind(var9)(var7, var6);
        _closure1_slot23 = var6;
        var3 = var5[var3];
        var6 = var4.bind(var0)(var3);
        var5 = var6.hasFlag;
        var4 = var2.flags;
        var3 = _closure1_slot17;
        var3 = var3.MENTION_ON_ALL_MESSAGES;
        var3 = var5.bind(var6)(var4, var3);
        _closure1_slot24 = var3;
        _closure1_slot25 = var2;
        return var0;
    };
    var _closure1_slot46 = var0;
    var0 = function(arg0) { // Original name: mutedChannelsForGuild, environment: var5
        _fun39395: for (var _fun39395_ip = 0;;) switch (_fun39395_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var2 = var0.Set;
                var4 = var3.channel_overrides;
                var0 = null;
                var4 = var0 != var4;
                if (!var4) {
                    _fun39395_ip = 103;
                    continue _fun39395
                }
            case 28:
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var4 = 16;
                var4 = var5[var4];
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                var3 = var3.channel_overrides;
                var5 = var4.bind(var5)(var3);
                var4 = var5.filter;
                var3 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.computeIsMuted;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var4.bind(var5)(var3);
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.channel_id;
                    return var0;
                };
                var3 = var3.bind(var4)(var1);
                var1 = var3.value;
                var0 = var1.bind(var3)();
            case 103:
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = var1;
                var7 = var0;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot47 = var0;
    var10 = function() { // Original name: handleGuildUpdate, environment: var5
        var0 = true;
        return var0;
    };
    var0 = function() { // Original name: shouldUseNewUnreadBehavior, environment: var5
        var0 = _closure1_slot23;
        return var0;
    };
    var _closure1_slot48 = var0;
    var4 = global;
    var12 = var4.Object;
    var11 = var12.defineProperty;
    var9 = {};
    var0 = true;
    var9.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var9);
    var12 = 0;
    var9 = var7[var12];
    var0 = undefined;
    var9 = var8.bind(var0)(var9);
    var _closure1_slot4 = var9;
    var9 = 1;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot5 = var9;
    var9 = 2;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot6 = var9;
    var9 = 3;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot7 = var9;
    var9 = 4;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot8 = var9;
    var9 = 5;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot9 = var9;
    var9 = 6;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot10 = var9;
    var9 = 7;
    var9 = var7[var9];
    var9 = var6.bind(var0)(var9);
    var11 = var9.THREAD_CHANNEL_TYPES;
    var _closure1_slot11 = var11;
    var9 = var9.isPrivate;
    var _closure1_slot12 = var9;
    var9 = 8;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot13 = var9;
    var9 = 9;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot14 = var9;
    var9 = 10;
    var9 = var7[var9];
    var9 = var8.bind(var0)(var9);
    var _closure1_slot15 = var9;
    var9 = 11;
    var9 = var7[var9];
    var11 = var6.bind(var0)(var9);
    var9 = var11.HighlightSettings;
    var13 = var11.UserNotificationSettings;
    var _closure1_slot16 = var13;
    var11 = 12;
    var11 = var7[var11];
    var11 = var6.bind(var0)(var11);
    var11 = var11.AccountNotificationFlags;
    var _closure1_slot17 = var11;
    var11 = 13;
    var11 = var7[var11];
    var11 = var6.bind(var0)(var11);
    var11 = var11.UnreadSetting;
    var _closure1_slot18 = var11;
    var11 = 14;
    var11 = var7[var11];
    var11 = var6.bind(var0)(var11);
    var14 = var11.ChannelNotificationSettingsFlags;
    var _closure1_slot19 = var14;
    var11 = var11.GuildNotificationSettingsFlags;
    var _closure1_slot20 = var11;
    var11 = {};
    var _closure1_slot21 = var11;
    var11 = {};
    var _closure1_slot22 = var11;
    var11 = false;
    var _closure1_slot23 = var11;
    var _closure1_slot24 = var11;
    var11 = {};
    var11.flags = var12;
    var _closure1_slot25 = var11;
    var11 = 15;
    var12 = var7[var11];
    var12 = var8.bind(var0)(var12);
    var14 = var12.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var12
        }
    });
    var20 = var14;
    var12 = new var20[var12](var19);
    var12 = var12 instanceof Object ? var12 : var14;
    var _closure1_slot26 = var12;
    var11 = var7[var11];
    var11 = var8.bind(var0)(var11);
    var12 = var11.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var11
        }
    });
    var20 = var12;
    var11 = new var20[var11](var19);
    var11 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot27 = var11;
    var15 = {
        'suppress_everyone': false,
        'suppress_roles': false,
        'mute_scheduled_events': false,
        'mobile_push': true,
        'muted': false,
        'message_notifications': null,
        'flags': 0,
        'channel_overrides': null,
        'notify_highlights': null,
        'hide_muted_channels': false,
        'version': 4294967295,
        'mute_config': null
    };
    var11 = var13.ALL_MESSAGES;
    var15.message_notifications = var11;
    var11 = {};
    var15.channel_overrides = var11;
    var9 = var9.NULL;
    var15.notify_highlights = var9;
    var9 = {};
    var12 = var13.ALL_MESSAGES;
    var11 = {};
    var19 = var11;
    var18 = var15;
    var14 = copyDataProperties(var19, var18);
    var16 = var13.ALL_MESSAGES;
    var14 = 'message_notifications';
    var11[var14] = var16;
    var9[var12] = var11;
    var12 = var13.ONLY_MENTIONS;
    var11 = {};
    var19 = var11;
    var18 = var15;
    var15 = copyDataProperties(var19, var18);
    var13 = var13.ONLY_MENTIONS;
    var11[var14] = var13;
    var9[var12] = var11;
    var _closure1_slot28 = var9;
    var9 = {};
    var _closure1_slot29 = var9;
    var9 = {};
    var _closure1_slot30 = var9;
    var9 = var4.Set;
    var11 = var9.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var9
        }
    });
    var20 = var11;
    var9 = new var20[var9](var19);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot31 = var9;
    var4 = var4.Set;
    var9 = var4.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var4
        }
    });
    var20 = var9;
    var4 = new var20[var4](var19);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot32 = var4;
    var4 = {};
    var _closure1_slot33 = var4;
    var4 = {};
    var _closure1_slot34 = var4;
    var4 = 20;
    var4 = var7[var4];
    var4 = var8.bind(var0)(var4);
    var9 = var4.PersistedStore;
    var4 = function(arg0) { // Environment: var5
        var3 = function() { // Original name: UserGuildSettingsStoreClass, environment: var5
            _fun39401: for (var _fun39401_ip = 0;;) switch (_fun39401_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot35;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun39401_ip = 69;
                        continue _fun39401
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun39401_ip = 105;
                    continue _fun39401;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun39402: for (var _fun39402_ip = 0;;) switch (_fun39402_ip) {
                case 0:
                    var3 = arg0;
                    var9 = this;
                    var8 = var9.waitFor;
                    var14 = _closure1_slot13;
                    var13 = _closure1_slot14;
                    var12 = _closure1_slot9;
                    var11 = _closure1_slot10;
                    var10 = _closure1_slot15;
                    var15 = var9;
                    var2 = var15[var8](var14, var13, var12, var11, var10, var9);
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun39402_ip = 186;
                        continue _fun39402
                    }
                case 53:
                    var5 = var3.useNewNotifications;
                    var4 = var2 != var5;
                    if (!var4) {
                        _fun39402_ip = 69;
                        continue _fun39402
                    }
                case 66:
                    var4 = var5;
                case 69:
                    _closure1_slot23 = var4;
                    var4 = 'userGuildSettings';
                    var4 = var4 in var3;
                    if (!var4) {
                        _fun39402_ip = 186;
                        continue _fun39402
                    }
                case 84:
                    var4 = var3.userGuildSettings;
                    _closure1_slot21 = var4;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var5 = 16;
                    var6 = var4[var5];
                    var4 = undefined;
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.mapValues;
                    var3 = var3.optedInChannelsByGuild;
                    if (!(var2 == var3)) {
                        _fun39402_ip = 134;
                        continue _fun39402
                    }
                case 132:
                    var3 = {};
                case 134:
                    var2 = function(arg0) { // Environment: var0
                        var0 = global;
                        var2 = var0.Set;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var3 = arg0;
                        var4 = var1;
                        var0 = new var4[var2](var3, var2);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var2 = var6.bind(var7)(var3, var2);
                    _closure1_slot30 = var2;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var2 = var2[var5];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.forEach;
                    var1 = _closure1_slot21;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var3 = _closure1_slot29;
                        var2 = _closure1_slot47;
                        var0 = undefined;
                        var1 = arg0;
                        var2 = var2.bind(var0)(var1);
                        var1 = arg1;
                        var3[var1] = var2;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                case 186:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(47);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var1 = _closure1_slot23;
            var0.useNewNotifications = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'mentionOnAllMessages';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot24;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isSuppressEveryoneEnabled';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot45;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.suppress_everyone;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isSuppressRolesEnabled';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot45;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.suppress_roles;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isMuteScheduledEventsEnabled';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot45;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.mute_scheduled_events;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isMobilePushEnabled';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot45;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.mobile_push;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isMuted';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot45;
            var3 = undefined;
            var1 = arg0;
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot0;
            var4 = _closure1_slot3;
            var0 = 15;
            var0 = var4[var0];
            var1 = var1.bind(var3)(var0);
            var0 = var1.computeIsMuted;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'isTemporarilyMuted';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot45;
            var3 = undefined;
            var1 = arg0;
            var2 = var2.bind(var3)(var1);
            var1 = _closure1_slot0;
            var4 = _closure1_slot3;
            var0 = 15;
            var0 = var4[var0];
            var1 = var1.bind(var3)(var0);
            var0 = var1.isTemporarilyMuted;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getMuteConfig';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot45;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.mute_config;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getMessageNotifications';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot45;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.message_notifications;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getChannelOverrides';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39415: for (var _fun39415_ip = 0;;) switch (_fun39415_ip) {
                case 0:
                    var2 = _closure1_slot45;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    var0 = var0.channel_overrides;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun39415_ip = 31;
                        continue _fun39415
                    }
                case 29:
                    var0 = {};
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getNotifyHighlights';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot45;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.notify_highlights;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getGuildFlags';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot45;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            var0 = var0.flags;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getChannelMessageNotifications';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39418: for (var _fun39418_ip = 0;;) switch (_fun39418_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getChannelOverrides;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg1;
                    var0 = var1[var0];
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun39418_ip = 48;
                        continue _fun39418
                    }
                case 30:
                    var1 = var0.message_notifications;
                    if (!(var2 != var1)) {
                        _fun39418_ip = 48;
                        continue _fun39418
                    }
                case 40:
                    var0 = var0.message_notifications;
                    _fun39418_ip = 61;
                    continue _fun39418;
                case 48:
                    var1 = _closure1_slot16;
                    var0 = var1.NULL;
                case 61:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getChannelMuteConfig';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39419: for (var _fun39419_ip = 0;;) switch (_fun39419_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getChannelOverrides;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg1;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun39419_ip = 39;
                        continue _fun39419
                    }
                case 33:
                    var0 = var1.mute_config;
                case 39:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getMutedChannels';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39420: for (var _fun39420_ip = 0;;) switch (_fun39420_ip) {
                case 0:
                    var2 = _closure1_slot29;
                    var0 = arg0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun39420_ip = 24;
                        continue _fun39420
                    }
                case 20:
                    var0 = _closure1_slot31;
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'isChannelMuted';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39421: for (var _fun39421_ip = 0;;) switch (_fun39421_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var4 = _closure1_slot13;
                    var0 = var4.getChannel;
                    var6 = var0.bind(var4)(var2);
                    var4 = null;
                    var5 = var4 == var6;
                    var0 = undefined;
                    if (var5) {
                        _fun39421_ip = 47;
                        continue _fun39421
                    }
                case 37:
                    var5 = var6.getGuildId;
                    var0 = var5.bind(var6)();
                case 47:
                    if (!(var4 != var0)) {
                        _fun39421_ip = 54;
                        continue _fun39421
                    }
                case 51:
                    var3 = var0;
                case 54:
                    var0 = var1.getMutedChannels;
                    var1 = var0.bind(var1)(var3);
                    var0 = var1.has;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'isCategoryMuted';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39422: for (var _fun39422_ip = 0;;) switch (_fun39422_ip) {
                case 0:
                    var4 = this;
                    var2 = _closure1_slot13;
                    var1 = var2.getChannel;
                    var0 = arg1;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun39422_ip = 68;
                        continue _fun39422
                    }
                case 29:
                    var3 = var1.parent_id;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun39422_ip = 66;
                        continue _fun39422
                    }
                case 42:
                    var2 = var4.getMutedChannels;
                    var1 = arg0;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.has;
                    var0 = var1.bind(var2)(var3);
                case 66:
                    return var0;
                case 68:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'resolvedMessageNotifications';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39423: for (var _fun39423_ip = 0;;) switch (_fun39423_ip) {
                case 0:
                    var2 = arg0;
                    var4 = this;
                    var3 = var4.getChannelMessageNotifications;
                    var1 = var2.guild_id;
                    var0 = var2.id;
                    var0 = var3.bind(var4)(var1, var0);
                    var1 = _closure1_slot16;
                    var1 = var1.NULL;
                    if (!(var0 === var1)) {
                        _fun39423_ip = 114;
                        continue _fun39423
                    }
                case 45:
                    var5 = var2.parent_id;
                    var1 = null;
                    if (!(var1 != var5)) {
                        _fun39423_ip = 94;
                        continue _fun39423
                    }
                case 57:
                    var6 = var4.getChannelMessageNotifications;
                    var5 = var2.guild_id;
                    var1 = var2.parent_id;
                    var1 = var6.bind(var4)(var5, var1);
                    var3 = _closure1_slot16;
                    var3 = var3.NULL;
                    if (!(var1 === var3)) {
                        _fun39423_ip = 112;
                        continue _fun39423
                    }
                case 94:
                    var3 = var4.getMessageNotifications;
                    var2 = var2.guild_id;
                    var2 = var3.bind(var4)(var2);
                    return var2;
                case 112:
                    return var1;
                case 114:
                    return var0;
            }
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'resolveUnreadSetting';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39424: for (var _fun39424_ip = 0;;) switch (_fun39424_ip) {
                case 0:
                    var6 = arg0;
                    var5 = this;
                    var3 = _closure1_slot11;
                    var2 = var3.has;
                    var1 = var6.type;
                    var1 = var2.bind(var3)(var1);
                    if (var1) {
                        _fun39424_ip = 265;
                        continue _fun39424
                    }
                case 34:
                    var3 = _closure1_slot12;
                    var1 = var6.type;
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    if (var1) {
                        _fun39424_ip = 253;
                        continue _fun39424
                    }
                case 56:
                    var1 = _closure1_slot48;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun39424_ip = 79;
                        continue _fun39424
                    }
                case 67:
                    var1 = _closure1_slot18;
                    var1 = var1.ALL_MESSAGES;
                    return var1;
                case 79:
                    var3 = var5.getChannelUnreadSetting;
                    var2 = var6.guild_id;
                    var1 = var6.id;
                    var1 = var3.bind(var5)(var2, var1);
                    var2 = _closure1_slot18;
                    var2 = var2.UNSET;
                    if (!(var1 === var2)) {
                        _fun39424_ip = 251;
                        continue _fun39424
                    }
                case 118:
                    var3 = var6.parent_id;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun39424_ip = 167;
                        continue _fun39424
                    }
                case 130:
                    var4 = var5.getChannelUnreadSetting;
                    var3 = var6.guild_id;
                    var2 = var6.parent_id;
                    var2 = var4.bind(var5)(var3, var2);
                    var3 = _closure1_slot18;
                    var3 = var3.UNSET;
                    if (!(var2 === var3)) {
                        _fun39424_ip = 249;
                        continue _fun39424
                    }
                case 167:
                    var4 = var5.getGuildUnreadSetting;
                    var3 = var6.guild_id;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure1_slot18;
                    var4 = var4.UNSET;
                    if (!(var3 === var4)) {
                        _fun39424_ip = 247;
                        continue _fun39424
                    }
                case 197:
                    var4 = var5.resolvedMessageNotifications;
                    var5 = var4.bind(var5)(var6);
                    var4 = _closure1_slot16;
                    var4 = var4.ALL_MESSAGES;
                    if (!(var5 !== var4)) {
                        _fun39424_ip = 234;
                        continue _fun39424
                    }
                case 222:
                    var4 = _closure1_slot18;
                    var4 = var4.ONLY_MENTIONS;
                    _fun39424_ip = 244;
                    continue _fun39424;
                case 234:
                    var5 = _closure1_slot18;
                    var4 = var5.ALL_MESSAGES;
                case 244:
                    var3 = var4;
                case 247:
                    return var3;
                case 249:
                    return var2;
                case 251:
                    return var1;
                case 253:
                    var1 = _closure1_slot18;
                    var1 = var1.ALL_MESSAGES;
                    return var1;
                case 265:
                    var0 = _closure1_slot18;
                    var0 = var0.ALL_MESSAGES;
                    return var0;
            }
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'isGuildOrCategoryOrChannelMuted';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39425: for (var _fun39425_ip = 0;;) switch (_fun39425_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var2 = this;
                    var0 = var2.isMuted;
                    var0 = var0.bind(var2)(var4);
                    if (var0) {
                        _fun39425_ip = 37;
                        continue _fun39425
                    }
                case 23:
                    var1 = var2.isCategoryMuted;
                    var0 = var1.bind(var2)(var4, var3);
                case 37:
                    if (var0) {
                        _fun39425_ip = 52;
                        continue _fun39425
                    }
                case 40:
                    var1 = var2.isChannelMuted;
                    var0 = var1.bind(var2)(var4, var3);
                case 52:
                    return var0;
            }
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'allowNoMessages';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39426: for (var _fun39426_ip = 0;;) switch (_fun39426_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var2 = var3.isGuildOrCategoryOrChannelMuted;
                    var1 = var4.guild_id;
                    var0 = var4.id;
                    var0 = var2.bind(var3)(var1, var0);
                    if (var0) {
                        _fun39426_ip = 59;
                        continue _fun39426
                    }
                case 31:
                    var1 = var3.resolvedMessageNotifications;
                    var2 = var1.bind(var3)(var4);
                    var1 = _closure1_slot16;
                    var1 = var1.NO_MESSAGES;
                    var0 = var2 === var1;
                case 59:
                    if (var0) {
                        _fun39426_ip = 98;
                        continue _fun39426
                    }
                case 62:
                    var2 = var3.isOptInEnabled;
                    var1 = var4.guild_id;
                    var1 = var2.bind(var3)(var1);
                    if (!var1) {
                        _fun39426_ip = 95;
                        continue _fun39426
                    }
                case 81:
                    var2 = var3.isChannelRecordOrParentOptedIn;
                    var2 = var2.bind(var3)(var4);
                    var1 = !var2;
                case 95:
                    var0 = var1;
                case 98:
                    return var0;
            }
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'allowAllMessages';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39427: for (var _fun39427_ip = 0;;) switch (_fun39427_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var2 = var3.isGuildOrCategoryOrChannelMuted;
                    var1 = var4.guild_id;
                    var0 = var4.id;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = !var0;
                    if (!var0) {
                        _fun39427_ip = 62;
                        continue _fun39427
                    }
                case 34:
                    var1 = var3.resolvedMessageNotifications;
                    var2 = var1.bind(var3)(var4);
                    var1 = _closure1_slot16;
                    var1 = var1.ALL_MESSAGES;
                    var0 = var2 === var1;
                case 62:
                    if (!var0) {
                        _fun39427_ip = 101;
                        continue _fun39427
                    }
                case 65:
                    var2 = var3.isOptInEnabled;
                    var1 = var4.guild_id;
                    var1 = var2.bind(var3)(var1);
                    var1 = !var1;
                    if (var1) {
                        _fun39427_ip = 98;
                        continue _fun39427
                    }
                case 87:
                    var2 = var3.isChannelRecordOrParentOptedIn;
                    var1 = var2.bind(var3)(var4);
                case 98:
                    var0 = var1;
                case 101:
                    return var0;
            }
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'isGuildCollapsed';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39428: for (var _fun39428_ip = 0;;) switch (_fun39428_ip) {
                case 0:
                    var1 = _closure1_slot21;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = null;
                    var2 = var1 == var0;
                    var1 = undefined;
                    if (var2) {
                        _fun39428_ip = 31;
                        continue _fun39428
                    }
                case 25:
                    var1 = var0.hide_muted_channels;
                case 31:
                    var0 = true;
                    var0 = var0 === var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'getAllSettings';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var2 = _closure1_slot21;
            var0.userGuildSettings = var2;
            var2 = _closure1_slot29;
            var0.mutedChannels = var2;
            var1 = _closure1_slot30;
            var0.optedInChannelsByGuild = var1;
            return var0;
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'getChannelIdFlags';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39430: for (var _fun39430_ip = 0;;) switch (_fun39430_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getChannelOverrides;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg1;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun39430_ip = 40;
                        continue _fun39430
                    }
                case 35:
                    var1 = var2.flags;
                case 40:
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun39430_ip = 52;
                        continue _fun39430
                    }
                case 49:
                    var0 = var1;
                case 52:
                    return var0;
            }
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'getChannelFlags';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = arg0;
            var3 = this;
            var2 = var3.getChannelIdFlags;
            var1 = var0.guild_id;
            var0 = var0.id;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'getNewForumThreadsCreated';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39432: for (var _fun39432_ip = 0;;) switch (_fun39432_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var3 = var1.getChannelOverrides;
                    var0 = var2.guild_id;
                    var3 = var3.bind(var1)(var0);
                    var0 = var2.id;
                    var3 = var3[var0];
                    var4 = null;
                    if (!(var4 != var3)) {
                        _fun39432_ip = 148;
                        continue _fun39432
                    }
                case 37:
                    var0 = var3.flags;
                    if (!(var4 != var0)) {
                        _fun39432_ip = 148;
                        continue _fun39432
                    }
                case 46:
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var7 = 17;
                    var4 = var4[var7];
                    var6 = undefined;
                    var9 = var5.bind(var6)(var4);
                    var8 = var9.hasFlag;
                    var5 = var3.flags;
                    var4 = _closure1_slot19;
                    var4 = var4.NEW_FORUM_THREADS_ON;
                    var4 = var8.bind(var9)(var5, var4);
                    if (var4) {
                        _fun39432_ip = 182;
                        continue _fun39432
                    }
                case 101:
                    var5 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var4 = var4[var7];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.hasFlag;
                    var3 = var3.flags;
                    var0 = _closure1_slot19;
                    var0 = var0.NEW_FORUM_THREADS_OFF;
                    var0 = var4.bind(var5)(var3, var0);
                    if (var0) {
                        _fun39432_ip = 178;
                        continue _fun39432
                    }
                case 148:
                    var0 = var1.resolvedMessageNotifications;
                    var1 = var0.bind(var1)(var2);
                    var0 = _closure1_slot16;
                    var0 = var0.ALL_MESSAGES;
                    var0 = var1 === var0;
                    return var0;
                case 178:
                    var0 = false;
                    return var0;
                case 182:
                    var0 = true;
                    return var0;
            }
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'isOptInEnabled';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39433: for (var _fun39433_ip = 0;;) switch (_fun39433_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = null;
                    var0 = var0 != var4;
                    if (!var0) {
                        _fun39433_ip = 111;
                        continue _fun39433
                    }
                case 15:
                    var5 = _closure1_slot9;
                    var1 = var5.isFullServerPreview;
                    var1 = var1.bind(var5)(var4);
                    if (var1) {
                        _fun39433_ip = 93;
                        continue _fun39433
                    }
                case 36:
                    var6 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var1 = 17;
                    var5 = var5[var1];
                    var1 = undefined;
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.hasFlag;
                    var1 = var3.getGuildFlags;
                    var3 = var1.bind(var3)(var4);
                    var1 = _closure1_slot20;
                    var1 = var1.OPT_IN_CHANNELS_ON;
                    var1 = var5.bind(var6)(var3, var1);
                    _fun39433_ip = 108;
                    continue _fun39433;
                case 93:
                    var3 = _closure1_slot9;
                    var2 = var3.isOptInEnabled;
                    var1 = var2.bind(var3)(var4);
                case 108:
                    var0 = var1;
                case 111:
                    return var0;
            }
        };
        var4.value = var6;
        var0[29] = var4;
        var4 = {};
        var6 = 'isChannelRecordOrParentOptedIn';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39434: for (var _fun39434_ip = 0;;) switch (_fun39434_ip) {
                case 0:
                    var3 = arg0;
                    var7 = arg1;
                    var6 = this;
                    var4 = null;
                    var0 = var4 != var3;
                    if (!var0) {
                        _fun39434_ip = 27;
                        continue _fun39434
                    }
                case 18:
                    var1 = var3.guild_id;
                    var0 = var4 != var1;
                case 27:
                    if (!var0) {
                        _fun39434_ip = 99;
                        continue _fun39434
                    }
                case 30:
                    var5 = var6.isChannelOptedIn;
                    var2 = var3.guild_id;
                    var1 = var3.id;
                    var1 = var5.bind(var6)(var2, var1, var7);
                    if (var1) {
                        _fun39434_ip = 96;
                        continue _fun39434
                    }
                case 56:
                    var2 = var3.parent_id;
                    var2 = var4 != var2;
                    if (!var2) {
                        _fun39434_ip = 93;
                        continue _fun39434
                    }
                case 69:
                    var5 = var6.isChannelOptedIn;
                    var4 = var3.guild_id;
                    var3 = var3.parent_id;
                    var2 = var5.bind(var6)(var4, var3, var7);
                case 93:
                    var1 = var2;
                case 96:
                    var0 = var1;
                case 99:
                    return var0;
            }
        };
        var4.value = var6;
        var0[30] = var4;
        var4 = {};
        var6 = 'isChannelOrParentOptedIn';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            var3 = this;
            var2 = var3.isChannelRecordOrParentOptedIn;
            var4 = _closure1_slot13;
            var1 = var4.getChannel;
            var0 = arg1;
            var1 = var1.bind(var4)(var0);
            var0 = arg2;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[31] = var4;
        var4 = {};
        var6 = 'isChannelOptedIn';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39436: for (var _fun39436_ip = 0;;) switch (_fun39436_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = arguments[2];
                    var6 = this;
                    var5 = undefined;
                    if (!(var1 === var5)) {
                        _fun39436_ip = 20;
                        continue _fun39436
                    }
                case 18:
                    var1 = false;
                case 20:
                    var4 = null;
                    if (!(var4 != var3)) {
                        _fun39436_ip = 188;
                        continue _fun39436
                    }
                case 29:
                    var8 = _closure1_slot9;
                    var7 = var8.isFullServerPreview;
                    var7 = var7.bind(var8)(var3);
                    if (var7) {
                        _fun39436_ip = 170;
                        continue _fun39436
                    }
                case 50:
                    if (!var1) {
                        _fun39436_ip = 65;
                        continue _fun39436
                    }
                case 53:
                    var1 = _closure1_slot34;
                    var1 = var1[var3];
                    if (!(var4 == var1)) {
                        _fun39436_ip = 150;
                        continue _fun39436
                    }
                case 65:
                    var1 = var6.getChannelOverrides;
                    var1 = var1.bind(var6)(var3);
                    var6 = var1[var2];
                    var7 = var4 == var6;
                    var1 = undefined;
                    if (var7) {
                        _fun39436_ip = 94;
                        continue _fun39436
                    }
                case 89:
                    var1 = var6.flags;
                case 94:
                    var4 = var4 != var1;
                    var6 = 0;
                    if (!var4) {
                        _fun39436_ip = 106;
                        continue _fun39436
                    }
                case 103:
                    var6 = var1;
                case 106:
                    var4 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var1 = 17;
                    var1 = var7[var1];
                    var5 = var4.bind(var5)(var1);
                    var4 = var5.hasFlag;
                    var1 = _closure1_slot19;
                    var1 = var1.OPT_IN_ENABLED;
                    var1 = var4.bind(var5)(var6, var1);
                    return var1;
                case 150:
                    var1 = _closure1_slot34;
                    var4 = var1[var3];
                    var1 = var4.has;
                    var1 = var1.bind(var4)(var2);
                    return var1;
                case 170:
                    var1 = _closure1_slot9;
                    var0 = var1.isChannelOptedIn;
                    var0 = var0.bind(var1)(var3, var2);
                    return var0;
                case 188:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[32] = var4;
        var4 = {};
        var6 = 'getOptedInChannels';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39437: for (var _fun39437_ip = 0;;) switch (_fun39437_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure1_slot9;
                    var0 = var1.isFullServerPreview;
                    var0 = var0.bind(var1)(var4);
                    if (var0) {
                        _fun39437_ip = 44;
                        continue _fun39437
                    }
                case 24:
                    var0 = _closure1_slot30;
                    var0 = var0[var4];
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun39437_ip = 42;
                        continue _fun39437
                    }
                case 38:
                    var0 = _closure1_slot32;
                case 42:
                    _fun39437_ip = 72;
                    continue _fun39437;
                case 44:
                    var3 = _closure1_slot9;
                    var1 = var3.getViewingChannels;
                    var1 = var1.bind(var3)(var4);
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun39437_ip = 69;
                        continue _fun39437
                    }
                case 65:
                    var1 = _closure1_slot32;
                case 69:
                    var0 = var1;
                case 72:
                    return var0;
            }
        };
        var4.value = var6;
        var0[33] = var4;
        var4 = {};
        var6 = 'getOptedInChannelsWithPendingUpdates';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot34;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[34] = var4;
        var4 = {};
        var6 = 'getPendingChannelUpdates';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot33;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[35] = var4;
        var4 = {};
        var6 = 'getGuildFavorites';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39440: for (var _fun39440_ip = 0;;) switch (_fun39440_ip) {
                case 0:
                    var2 = arg0;
                    var5 = this;
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot9;
                    var0 = var4.isFullServerPreview;
                    var4 = var0.bind(var4)(var2);
                    var0 = null;
                    if (var4) {
                        _fun39440_ip = 129;
                        continue _fun39440
                    }
                case 35:
                    var4 = _closure1_slot22;
                    var4 = var4[var2];
                    if (!(var0 == var4)) {
                        _fun39440_ip = 119;
                        continue _fun39440
                    }
                case 47:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 16;
                    var6 = var6[var4];
                    var4 = undefined;
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.filter;
                    var4 = var5.getChannelOverrides;
                    var5 = var4.bind(var5)(var2);
                    var4 = function(arg0) { // Environment: var3
                        _fun39441: for (var _fun39441_ip = 0;;) switch (_fun39441_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure1_slot2;
                                var2 = _closure1_slot3;
                                var0 = 17;
                                var0 = var2[var0];
                                var2 = undefined;
                                var7 = var3.bind(var2)(var0);
                                var6 = var7.hasFlag;
                                var0 = var1.flags;
                                var3 = null;
                                var8 = var3 != var0;
                                var5 = 0;
                                if (!var8) {
                                    _fun39441_ip = 53;
                                    continue _fun39441
                                }
                            case 50:
                                var5 = var0;
                            case 53:
                                var0 = _closure1_slot19;
                                var0 = var0.FAVORITED;
                                var0 = var6.bind(var7)(var5, var0);
                                if (!var0) {
                                    _fun39441_ip = 116;
                                    continue _fun39441
                                }
                            case 72:
                                var5 = _closure1_slot13;
                                var4 = var5.getChannel;
                                var1 = var1.channel_id;
                                var1 = var4.bind(var5)(var1);
                                var3 = var3 == var1;
                                var2 = undefined;
                                if (var3) {
                                    _fun39441_ip = 105;
                                    continue _fun39441
                                }
                            case 100:
                                var2 = var1.guild_id;
                            case 105:
                                var1 = _closure3_slot0;
                                var0 = var2 === var1;
                            case 116:
                                return var0;
                        }
                    };
                    var6 = var6.bind(var7)(var5, var4);
                    var4 = _closure1_slot22;
                    var5 = var6.map;
                    var3 = function(arg0) { // Environment: var3
                        var0 = arg0;
                        var0 = var0.channel_id;
                        return var0;
                    };
                    var3 = var5.bind(var6)(var3);
                    var4[var2] = var3;
                case 119:
                    var1 = _closure1_slot22;
                    var1 = var1[var2];
                    return var1;
                case 129:
                    return var0;
            }
        };
        var4.value = var6;
        var0[36] = var4;
        var4 = {};
        var6 = 'isFavorite';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39443: for (var _fun39443_ip = 0;;) switch (_fun39443_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var1 = _closure1_slot9;
                    var0 = var1.isFullServerPreview;
                    var0 = var0.bind(var1)(var3);
                    var0 = !var0;
                    if (!var0) {
                        _fun39443_ip = 71;
                        continue _fun39443
                    }
                case 30:
                    var1 = var2.getGuildFavorites;
                    var4 = var1.bind(var2)(var3);
                    var1 = null;
                    var1 = var1 == var4;
                    var2 = undefined;
                    if (var1) {
                        _fun39443_ip = 65;
                        continue _fun39443
                    }
                case 52:
                    var3 = var4.includes;
                    var1 = arg1;
                    var2 = var3.bind(var4)(var1);
                case 65:
                    var1 = true;
                    var0 = var1 === var2;
                case 71:
                    return var0;
            }
        };
        var4.value = var6;
        var0[37] = var4;
        var4 = {};
        var6 = 'isMessagesFavorite';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39444: for (var _fun39444_ip = 0;;) switch (_fun39444_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.getChannelOverrides;
                    var1 = null;
                    var2 = var0.bind(var2)(var1);
                    var0 = arg0;
                    var2 = var2[var0];
                    var3 = var1 == var2;
                    var4 = undefined;
                    var0 = undefined;
                    if (var3) {
                        _fun39444_ip = 39;
                        continue _fun39444
                    }
                case 34:
                    var0 = var2.flags;
                case 39:
                    var1 = var1 != var0;
                    var3 = 0;
                    if (!var1) {
                        _fun39444_ip = 51;
                        continue _fun39444
                    }
                case 48:
                    var3 = var0;
                case 51:
                    var2 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var1 = 17;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.hasFlag;
                    var0 = _closure1_slot19;
                    var0 = var0.FAVORITED;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[38] = var4;
        var4 = {};
        var6 = 'isAddedToMessages';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39445: for (var _fun39445_ip = 0;;) switch (_fun39445_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.getChannelOverrides;
                    var1 = null;
                    var2 = var0.bind(var2)(var1);
                    var0 = arg0;
                    var2 = var2[var0];
                    var3 = var1 == var2;
                    var4 = undefined;
                    var0 = undefined;
                    if (var3) {
                        _fun39445_ip = 39;
                        continue _fun39445
                    }
                case 34:
                    var0 = var2.flags;
                case 39:
                    var1 = var1 != var0;
                    var3 = 0;
                    if (!var1) {
                        _fun39445_ip = 51;
                        continue _fun39445
                    }
                case 48:
                    var3 = var0;
                case 51:
                    var2 = _closure1_slot2;
                    var5 = _closure1_slot3;
                    var1 = 17;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.hasFlag;
                    var0 = _closure1_slot19;
                    var0 = var0.OPT_IN_ENABLED;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[39] = var4;
        var4 = {};
        var6 = 'getAddedToMessages';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun39446: for (var _fun39446_ip = 0;;) switch (_fun39446_ip) {
                case 0:
                    var0 = _closure1_slot30;
                    var0 = var0.null;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun39446_ip = 23;
                        continue _fun39446
                    }
                case 19:
                    var0 = _closure1_slot32;
                case 23:
                    return var0;
            }
        };
        var4.value = var6;
        var0[40] = var4;
        var4 = {};
        var6 = 'accountNotificationSettings';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot25;
            return var0;
        };
        var4.get = var6;
        var0[41] = var4;
        var4 = {};
        var6 = 'useNewNotifications';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot23;
            return var0;
        };
        var4.get = var6;
        var0[42] = var4;
        var4 = {};
        var6 = 'getGuildUnreadSetting';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39449: for (var _fun39449_ip = 0;;) switch (_fun39449_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot48;
                    var3 = undefined;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun39449_ip = 31;
                        continue _fun39449
                    }
                case 19:
                    var0 = _closure1_slot18;
                    var0 = var0.ALL_MESSAGES;
                    return var0;
                case 31:
                    var2 = var4.getGuildFlags;
                    var0 = arg0;
                    var4 = var2.bind(var4)(var0);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot3;
                    var5 = 17;
                    var0 = var0[var5];
                    var6 = var2.bind(var3)(var0);
                    var2 = var6.hasFlag;
                    var0 = _closure1_slot20;
                    var0 = var0.UNREADS_ALL_MESSAGES;
                    var0 = var2.bind(var6)(var4, var0);
                    if (var0) {
                        _fun39449_ip = 152;
                        continue _fun39449
                    }
                case 90:
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot3;
                    var0 = var0[var5];
                    var3 = var2.bind(var3)(var0);
                    var2 = var3.hasFlag;
                    var0 = _closure1_slot20;
                    var0 = var0.UNREADS_ONLY_MENTIONS;
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = _closure1_slot18;
                    if (var0) {
                        _fun39449_ip = 144;
                        continue _fun39449
                    }
                case 136:
                    var0 = var2.UNSET;
                    _fun39449_ip = 150;
                    continue _fun39449;
                case 144:
                    var0 = var2.ONLY_MENTIONS;
                case 150:
                    _fun39449_ip = 162;
                    continue _fun39449;
                case 152:
                    var1 = _closure1_slot18;
                    var0 = var1.ALL_MESSAGES;
                case 162:
                    return var0;
            }
        };
        var4.value = var6;
        var0[43] = var4;
        var4 = {};
        var6 = 'resolveGuildUnreadSetting';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39450: for (var _fun39450_ip = 0;;) switch (_fun39450_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var2 = var3.getGuildFlags;
                    var0 = var1.id;
                    var6 = var2.bind(var3)(var0);
                    var0 = _closure1_slot48;
                    var5 = undefined;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun39450_ip = 53;
                        continue _fun39450
                    }
                case 38:
                    var0 = _closure1_slot18;
                    var0 = var0.ALL_MESSAGES;
                    _fun39450_ip = 209;
                    continue _fun39450;
                case 53:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var7 = 17;
                    var3 = var3[var7];
                    var8 = var4.bind(var5)(var3);
                    var4 = var8.hasFlag;
                    var3 = _closure1_slot20;
                    var3 = var3.UNREADS_ALL_MESSAGES;
                    var3 = var4.bind(var8)(var6, var3);
                    if (var3) {
                        _fun39450_ip = 196;
                        continue _fun39450
                    }
                case 98:
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.hasFlag;
                    var3 = _closure1_slot20;
                    var3 = var3.UNREADS_ONLY_MENTIONS;
                    var3 = var4.bind(var5)(var6, var3);
                    if (var3) {
                        _fun39450_ip = 184;
                        continue _fun39450
                    }
                case 140:
                    var3 = var1.defaultMessageNotifications;
                    var1 = _closure1_slot16;
                    var1 = var1.ALL_MESSAGES;
                    if (!(var3 !== var1)) {
                        _fun39450_ip = 172;
                        continue _fun39450
                    }
                case 160:
                    var1 = _closure1_slot18;
                    var1 = var1.ONLY_MENTIONS;
                    _fun39450_ip = 182;
                    continue _fun39450;
                case 172:
                    var3 = _closure1_slot18;
                    var1 = var3.ALL_MESSAGES;
                case 182:
                    _fun39450_ip = 194;
                    continue _fun39450;
                case 184:
                    var3 = _closure1_slot18;
                    var1 = var3.ONLY_MENTIONS;
                case 194:
                    _fun39450_ip = 206;
                    continue _fun39450;
                case 196:
                    var2 = _closure1_slot18;
                    var1 = var2.ALL_MESSAGES;
                case 206:
                    var0 = var1;
                case 209:
                    return var0;
            }
        };
        var4.value = var6;
        var0[44] = var4;
        var4 = {};
        var6 = 'getChannelRecordUnreadSetting';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var0 = arg0;
            var3 = this;
            var2 = var3.getChannelUnreadSetting;
            var1 = var0.guild_id;
            var0 = var0.id;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[45] = var4;
        var4 = {};
        var6 = 'getChannelUnreadSetting';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39452: for (var _fun39452_ip = 0;;) switch (_fun39452_ip) {
                case 0:
                    var3 = this;
                    var2 = var3.getChannelIdFlags;
                    var1 = arg0;
                    var0 = arg1;
                    var4 = var2.bind(var3)(var1, var0);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot3;
                    var5 = 17;
                    var0 = var0[var5];
                    var3 = undefined;
                    var6 = var2.bind(var3)(var0);
                    var2 = var6.hasFlag;
                    var0 = _closure1_slot19;
                    var0 = var0.UNREADS_ALL_MESSAGES;
                    var0 = var2.bind(var6)(var4, var0);
                    if (var0) {
                        _fun39452_ip = 133;
                        continue _fun39452
                    }
                case 71:
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot3;
                    var0 = var0[var5];
                    var3 = var2.bind(var3)(var0);
                    var2 = var3.hasFlag;
                    var0 = _closure1_slot19;
                    var0 = var0.UNREADS_ONLY_MENTIONS;
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = _closure1_slot18;
                    if (var0) {
                        _fun39452_ip = 125;
                        continue _fun39452
                    }
                case 117:
                    var0 = var2.UNSET;
                    _fun39452_ip = 131;
                    continue _fun39452;
                case 125:
                    var0 = var2.ONLY_MENTIONS;
                case 131:
                    _fun39452_ip = 143;
                    continue _fun39452;
                case 133:
                    var1 = _closure1_slot18;
                    var0 = var1.ALL_MESSAGES;
                case 143:
                    return var0;
            }
        };
        var4.value = var5;
        var0[46] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var4.bind(var0)(var9);
    var4 = 'UserGuildSettingsStore';
    var9.displayName = var4;
    var4 = 'collapsedGuilds';
    var9.persistKey = var4;
    var4 = 18;
    var4 = var7[var4];
    var19 = var8.bind(var0)(var4);
    var4 = {};
    var11 = function(arg0) { // Original name: handleUserGuildSettingsFullUpdate, environment: var5
        var0 = arg0;
        var2 = var0.userGuildSettings;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var3 = _closure1_slot36;
            var2 = var0.guild_id;
            var1 = {};
            var4 = {};
            var1.channel_overrides = var4;
            var6 = var1;
            var5 = var0;
            var0 = copyDataProperties(var6, var5);
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var4.USER_GUILD_SETTINGS_FULL_UPDATE = var11;
    var11 = function(arg0) { // Original name: handleUserGuildSettingsGuildUpdate, environment: var5
        var0 = arg0;
        var3 = var0.guildId;
        var2 = var0.settings;
        var1 = _closure1_slot38;
        var0 = undefined;
        var1 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var4.USER_GUILD_SETTINGS_GUILD_UPDATE = var11;
    var11 = function(arg0) { // Original name: handleUserGuildSettingsGuildAndChannelsUpdate, environment: var5
        var0 = arg0;
        var3 = var0.guildId;
        var1 = var0.settings;
        var4 = _closure1_slot38;
        var0 = undefined;
        var4 = var4.bind(var0)(var3, var1);
        var2 = _closure1_slot40;
        var1 = var1.channel_overrides;
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var4.USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE = var11;
    var11 = function(arg0) { // Original name: handleUserGuildSettingsChannelUpdate, environment: var5
        _fun39457: for (var _fun39457_ip = 0;;) switch (_fun39457_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var3 = var0.channelId;
                var2 = var0.settings;
                var5 = null;
                var0 = var5 != var4;
                if (!var0) {
                    _fun39457_ip = 37;
                    continue _fun39457
                }
            case 28:
                var1 = var2.flags;
                var0 = var5 != var1;
            case 37:
                if (!var0) {
                    _fun39457_ip = 80;
                    continue _fun39457
                }
            case 40:
                var1 = _closure1_slot33;
                var0 = {};
                var8 = var1[var4];
                var9 = var0;
                var5 = copyDataProperties(var9, var8);
                var5 = {};
                var6 = var2.flags;
                var5.flags = var6;
                var0[var3] = var5;
                var1[var4] = var0;
            case 80:
                var1 = _closure1_slot39;
                var0 = undefined;
                var1 = var1.bind(var0)(var4, var3, var2);
                return var0;
        }
    };
    var4.USER_GUILD_SETTINGS_CHANNEL_UPDATE = var11;
    var11 = function(arg0) { // Original name: handleUserGuildSettingsChannelUpdateBulk, environment: var5
        _fun39458: for (var _fun39458_ip = 0;;) switch (_fun39458_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var3 = var0.overrides;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun39458_ip = 44;
                    continue _fun39458
                }
            case 23:
                var2 = _closure1_slot9;
                var1 = var2.isFullServerPreview;
                var1 = var1.bind(var2)(var4);
                var0 = !var1;
            case 44:
                if (!var0) {
                    _fun39458_ip = 64;
                    continue _fun39458
                }
            case 47:
                var2 = _closure1_slot40;
                var1 = undefined;
                var1 = var2.bind(var1)(var4, var3);
                var0 = true;
            case 64:
                return var0;
        }
    };
    var4.USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK = var11;
    var11 = function(arg0) { // Original name: handleConnectionOpen, environment: var5
        _fun39459: for (var _fun39459_ip = 0;;) switch (_fun39459_ip) {
            case 0:
                var8 = arg0;
                var3 = _closure1_slot46;
                var2 = var8.notificationSettings;
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var3 = _closure1_slot26;
                var2 = var3.reset;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot27;
                var2 = var3.reset;
                var2 = var2.bind(var3)();
                var2 = var8.userGuildSettings;
                var2 = var2.partial;
                if (var2) {
                    _fun39459_ip = 86;
                    continue _fun39459
                }
            case 68:
                var2 = {};
                _closure1_slot21 = var2;
                var2 = {};
                _closure1_slot29 = var2;
                var2 = {};
                _closure1_slot30 = var2;
            case 86:
                var2 = global;
                var2 = var2.Set;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = var3;
                var2 = new var13[var2](var12);
                var6 = var2 instanceof Object ? var2 : var3;
                var _closure2_slot0 = var6;
                var8 = var8.userGuildSettings;
                var9 = var8.entries;
                var8 = var9.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun39460: for (var _fun39460_ip = 0;;) switch (_fun39460_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = 'channel_overrides';
                            var0 = var0 in var1;
                            if (var0) {
                                _fun39460_ip = 22;
                                continue _fun39460
                            }
                        case 14:
                            var0 = {};
                            var1.channel_overrides = var0;
                        case 22:
                            var3 = _closure1_slot36;
                            var2 = var1.guild_id;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2, var1);
                            var3 = var1.guild_id;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun39460_ip = 75;
                                continue _fun39460
                            }
                        case 53:
                            var3 = _closure2_slot0;
                            var2 = var3.add;
                            var1 = var1.guild_id;
                            var1 = var2.bind(var3)(var1);
                        case 75:
                            return var0;
                    }
                };
                var1 = var8.bind(var9)(var1);
                var4 = _closure1_slot21;
                for (var1 in var4)
                    case 157: {
                        case 166: var10 = var1;
                        var8 = var6.has;
                        var8 = var8.bind(var6)(var10);
                        if (var8) {
                            _fun39459_ip = 157;
                            continue _fun39459
                        }
                        case 182: var9 = _closure1_slot37;
                        var8 = _closure1_slot21;
                        var8 = var8[var10];
                        var8 = var9.bind(var0)(var10, var8);
                        _fun39459_ip = 157;
                        continue _fun39459;
                    }
            case 202:
                return var0;
        }
    };
    var4.CONNECTION_OPEN = var11;
    var11 = function(arg0) { // Original name: handleCacheLoaded, environment: var5
        _fun39461: for (var _fun39461_ip = 0;;) switch (_fun39461_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userGuildSettings;
                var1 = null;
                var1 = var1 != var2;
                if (!var1) {
                    _fun39461_ip = 35;
                    continue _fun39461
                }
            case 18:
                var2 = var0.userGuildSettings;
                var3 = var2.length;
                var2 = 0;
                var1 = var2 !== var3;
            case 35:
                if (!var1) {
                    _fun39461_ip = 82;
                    continue _fun39461
                }
            case 38:
                var1 = {};
                _closure1_slot21 = var1;
                var1 = {};
                _closure1_slot29 = var1;
                var1 = {};
                _closure1_slot30 = var1;
                var2 = var0.userGuildSettings;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun39462: for (var _fun39462_ip = 0;;) switch (_fun39462_ip) {
                        case 0:
                            var14 = arg0;
                            var3 = var14.guild_id;
                            var0 = _closure1_slot21;
                            var0[var3] = var14;
                            var0 = global;
                            var2 = var0.Set;
                            var4 = var2.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var23 = var4;
                            var2 = new var23[var2](var22);
                            var5 = var2 instanceof Object ? var2 : var4;
                            var0 = var0.Set;
                            var2 = var0.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var23 = var2;
                            var0 = new var23[var0](var22);
                            var2 = var0 instanceof Object ? var0 : var2;
                            var12 = var14.channel_overrides;
                            var8 = 17;
                            var0 = undefined;
                            var7 = null;
                            var4 = 15;
                            for (var9 in var12)
                                case 100: {
                                    case 112: var16 = var9;
                                    var15 = var14.channel_overrides;
                                    var15 = var15[var16];
                                    var18 = _closure1_slot0;
                                    var17 = _closure1_slot3;
                                    var17 = var17[var4];
                                    var18 = var18.bind(var0)(var17);
                                    var17 = var18.computeIsMuted;
                                    var17 = var17.bind(var18)(var15);
                                    if (!var17) {
                                        _fun39462_ip = 166;
                                        continue _fun39462
                                    }
                                    case 156: var17 = var5.add;
                                    var17 = var17.bind(var5)(var16);
                                    case 166: var18 = _closure1_slot2;
                                    var17 = _closure1_slot3;
                                    var17 = var17[var8];
                                    var19 = var18.bind(var0)(var17);
                                    var18 = var19.hasFlag;
                                    var15 = var15.flags;
                                    var20 = var7 != var15;
                                    var17 = 0;
                                    if (!var20) {
                                        _fun39462_ip = 206;
                                        continue _fun39462
                                    }
                                    case 203: var17 = var15;
                                    case 206: var15 = _closure1_slot19;
                                    var15 = var15.OPT_IN_ENABLED;
                                    var15 = var18.bind(var19)(var17, var15);
                                    if (!var15) {
                                        _fun39462_ip = 100;
                                        continue _fun39462
                                    }
                                    case 225: var15 = var2.add;
                                    var15 = var15.bind(var2)(var16);
                                    _fun39462_ip = 100;
                                    continue _fun39462;
                                }
                        case 240:
                            var4 = _closure1_slot29;
                            var4[var3] = var5;
                            var1 = _closure1_slot30;
                            var1[var3] = var2;
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 82:
                var0 = undefined;
                return var0;
        }
    };
    var4.CACHE_LOADED = var11;
    var11 = function(arg0) { // Original name: handleOverlayInitialize, environment: var5
        var0 = arg0;
        var2 = var0.allUserGuildSettings;
        var9 = var2.userGuildSettings;
        var8 = var2.mutedChannels;
        var _closure2_slot0 = var8;
        var4 = var2.optedInChannelsByGuild;
        var _closure2_slot1 = var4;
        var2 = {};
        var10 = var2;
        var0 = copyDataProperties(var10, var9);
        _closure1_slot21 = var2;
        var2 = {};
        _closure1_slot29 = var2;
        var2 = {};
        _closure1_slot30 = var2;
        var3 = _closure1_slot1;
        var5 = _closure1_slot3;
        var2 = 19;
        var6 = var5[var2];
        var0 = undefined;
        var7 = var3.bind(var0)(var6);
        var6 = var7.keys;
        var8 = var6.bind(var7)(var8);
        var7 = var8.forEach;
        var6 = function(arg0) { // Environment: var1
            var2 = arg0;
            var1 = _closure1_slot29;
            var0 = global;
            var4 = var0.Set;
            var0 = _closure2_slot0;
            var5 = var0[var2];
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var1[var2] = var0;
            var0 = undefined;
            return var0;
        };
        var6 = var7.bind(var8)(var6);
        var2 = var5[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.keys;
        var3 = var2.bind(var3)(var4);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var2 = arg0;
            var1 = _closure1_slot30;
            var0 = global;
            var4 = var0.Set;
            var0 = _closure2_slot1;
            var5 = var0[var2];
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var1[var2] = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var4.OVERLAY_INITIALIZE = var11;
    var4.GUILD_CREATE = var10;
    var4.GUILD_UPDATE = var10;
    var11 = function(arg0) { // Original name: handleToggleCollapseMuted, environment: var5
        _fun39466: for (var _fun39466_ip = 0;;) switch (_fun39466_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var1 = _closure1_slot21;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 != var3)) {
                    _fun39466_ip = 35;
                    continue _fun39466
                }
            case 25:
                var1 = _closure1_slot21;
                var3 = var1[var2];
                _fun39466_ip = 46;
                continue _fun39466;
            case 35:
                var4 = _closure1_slot43;
                var1 = undefined;
                var3 = var4.bind(var1)(var2);
            case 46:
                var1 = _closure1_slot21;
                var0 = {};
                var6 = var0;
                var5 = var3;
                var4 = copyDataProperties(var6, var5);
                var4 = 'guild_id';
                var0[var4] = var2;
                var4 = var3.hide_muted_channels;
                var3 = true;
                var3 = var3 === var4;
                var4 = !var3;
                var3 = 'hide_muted_channels';
                var0[var3] = var4;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var4.GUILD_TOGGLE_COLLAPSE_MUTED = var11;
    var4.IMPERSONATE_UPDATE = var10;
    var4.IMPERSONATE_STOP = var10;
    var10 = function(arg0) { // Original name: handleRemovePendingUpdates, environment: var5
        _fun39467: for (var _fun39467_ip = 0;;) switch (_fun39467_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var9 = var0.updates;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun39467_ip = 115;
                    continue _fun39467
                }
            case 20:
                var1 = _closure1_slot33;
                var7 = var1[var2];
                if (!(var0 != var7)) {
                    _fun39467_ip = 111;
                    continue _fun39467
                }
            case 35:
                var5 = var9;
                var1 = 16;
                var0 = undefined;
                for (var2 in var5)
                    case 51: {
                        case 60: var10 = var2;
                        var12 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var11 = var11[var1];
                        var14 = var12.bind(var0)(var11);
                        var13 = var14.isEqual;
                        var12 = var9[var10];
                        var11 = var7[var10];
                        var11 = var13.bind(var14)(var12, var11);
                        if (!var11) {
                            _fun39467_ip = 51;
                            continue _fun39467
                        }
                        case 103: var10 = delete var7[var10];
                        _fun39467_ip = 51;
                        continue _fun39467;
                    }
            case 109:
                return var0;
            case 111:
                var0 = false;
                return var0;
            case 115:
                var0 = false;
                return var0;
        }
    };
    var4.USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES = var10;
    var10 = function(arg0) { // Original name: handleClearPendingUpdates, environment: var5
        _fun39468: for (var _fun39468_ip = 0;;) switch (_fun39468_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun39468_ip = 37;
                    continue _fun39468
                }
            case 14:
                var2 = _closure1_slot33;
                var2 = delete var2[var1];
                var0 = _closure1_slot34;
                var0 = delete var0[var1];
                var0 = undefined;
                return var0;
            case 37:
                var0 = false;
                return var0;
        }
    };
    var4.CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES = var10;
    var10 = function(arg0) { // Original name: handleNotificationSettingsUpdate, environment: var5
        var0 = arg0;
        var2 = var0.settings;
        var1 = _closure1_slot46;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var4.NOTIFICATION_SETTINGS_UPDATE = var10;
    var10 = function() { // Original name: GUILD_MUTE_EXPIRED, environment: var5
        var0 = true;
        return var0;
    };
    var4.GUILD_MUTE_EXPIRED = var10;
    var5 = function() { // Original name: CHANNEL_MUTE_EXPIRED, environment: var5
        var0 = true;
        return var0;
    };
    var4.CHANNEL_MUTE_EXPIRED = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var9
        }
    });
    var20 = var5;
    var18 = var4;
    var4 = new var20[var9](var19, var18, var17);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/UserGuildSettingsStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.getGuildDefaults = var3;
    var2.convertChannelOverridesToMap = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1664, 3052, 1376, 1372, 1410, 1613, 660, 3062, 4261, 665, 3053, 22, 1384, 806, 21, 566, 2]);