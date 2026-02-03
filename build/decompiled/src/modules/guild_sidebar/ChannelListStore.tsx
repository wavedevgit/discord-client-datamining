// modules/guild_sidebar/ChannelListStore.tsx
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
        _fun40965: for (var _fun40965_ip = 0;;) switch (_fun40965_ip) {
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
                _fun40965_ip = 74;
                continue _fun40965;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot27 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0, arg1() {
        _fun40968: for (var _fun40968_ip = 0;;) switch (_fun40968_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun40968_ip = 46;
                    continue _fun40968
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun40968_ip = 55;
                    continue _fun40968
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun40968_ip = 343;
                    continue _fun40968
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun40968_ip = 323;
                    continue _fun40968
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun40968_ip = 283;
                    continue _fun40968
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun40968_ip = 270;
                    continue _fun40968
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun40968_ip = 163;
                    continue _fun40968
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun40968_ip = 179;
                    continue _fun40968
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun40968_ip = 249;
                    continue _fun40968
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun40968_ip = 249;
                    continue _fun40968
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun40968_ip = 234;
                    continue _fun40968
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun40968_ip = 247;
                    continue _fun40968
                }
            case 234:
                var8 = _closure1_slot29;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun40968_ip = 265;
                continue _fun40968;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun40968_ip = 283;
                continue _fun40968;
            case 270:
                var6 = _closure1_slot29;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun40968_ip = 323;
                    continue _fun40968
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun40968_ip = 330;
                    continue _fun40968
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun40969: for (var _fun40969_ip = 0;;) switch (_fun40969_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun40969_ip = 56;
                                continue _fun40969
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun40969_ip = 67;
                            continue _fun40969;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1() {
        _fun40970: for (var _fun40970_ip = 0;;) switch (_fun40970_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun40970_ip = 23;
                    continue _fun40970
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun40970_ip = 33;
                    continue _fun40970
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun40970_ip = 70;
                    continue _fun40970
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun40970_ip = 55;
                    continue _fun40970
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var14 = function() {
        var2 = _closure1_slot21;
        var1 = var2.getChannelId;
        var2 = var1.bind(var2)();
        var3 = _closure1_slot21;
        var1 = var3.getVoiceChannelId;
        var1 = var1.bind(var3)();
        _closure1_slot24 = var2;
        _closure1_slot25 = var1;
        var1 = _closure1_slot26;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        return var0;
    };
    var15 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var2 = var0.id;
        var1 = _closure1_slot26;
        var0 = var1.clearGuildId;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var18 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var2 = var0.guild_id;
        var1 = _closure1_slot26;
        var0 = var1.clearGuildId;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot26;
        var0 = var1.clearGuildId;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var11 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot26;
        var0 = var1.nonPositionalChannelIdUpdate;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var12 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var2 = _closure1_slot26;
        var1 = var2.nonPositionalChannelIdUpdate;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var13 = function arg0() {
        var0 = arg0;
        var2 = var0.id;
        var1 = _closure1_slot26;
        var0 = var1.nonPositionalChannelIdUpdate;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var8 = function() {
        _fun40978: for (var _fun40978_ip = 0;;) switch (_fun40978_ip) {
            case 0:
                var1 = _closure1_slot21;
                var0 = var1.getChannelId;
                var3 = var0.bind(var1)();
                var1 = _closure1_slot21;
                var0 = var1.getVoiceChannelId;
                var1 = var0.bind(var1)();
                var0 = _closure1_slot24;
                var4 = var0 !== var3;
                if (var4) {
                    _fun40978_ip = 50;
                    continue _fun40978
                }
            case 42:
                var0 = _closure1_slot25;
                var4 = var0 !== var1;
            case 50:
                var0 = !var4;
                var0 = !var0;
                if (!var4) {
                    _fun40978_ip = 151;
                    continue _fun40978
                }
            case 59:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 22;
                var4 = var6[var4];
                var6 = undefined;
                var5 = var5.bind(var6)(var4);
                var7 = _closure1_slot24;
                var4 = new Array(4);
                var4[0] = var7;
                var7 = _closure1_slot25;
                var4[1] = var7;
                var4[2] = var3;
                var4[3] = var1;
                var5 = var5.bind(var6)(var4);
                var4 = var5.uniq;
                var6 = var4.bind(var5)();
                var5 = var6.forEach;
                var4 = function(arg0) { // Environment: var4
                    _fun40979: for (var _fun40979_ip = 0;;) switch (_fun40979_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun40979_ip = 27;
                                continue _fun40979
                            }
                        case 9:
                            var1 = _closure1_slot26;
                            var0 = var1.nonPositionalChannelIdUpdate;
                            var0 = var0.bind(var1)(var2);
                        case 27:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                _closure1_slot24 = var3;
                _closure1_slot25 = var1;
                var0 = true;
            case 151:
                return var0;
        }
    };
    var _closure1_slot30 = var8;
    var19 = function arg0() {
        _fun40980: for (var _fun40980_ip = 0;;) switch (_fun40980_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.id;
                var2 = _closure1_slot16;
                var0 = var2.getChannel;
                var0 = var0.bind(var2)(var3);
                var2 = null;
                if (!(var2 != var0)) {
                    _fun40980_ip = 53;
                    continue _fun40980
                }
            case 31:
                var4 = _closure1_slot26;
                var2 = var4.clearGuildId;
                var0 = var0.guild_id;
                var0 = var2.bind(var4)(var0);
                _fun40980_ip = 68;
                continue _fun40980;
            case 53:
                var2 = _closure1_slot26;
                var1 = var2.clearGuildId;
                var0 = var1.bind(var2)(var3);
            case 68:
                return var0;
        }
    };
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot26;
        var0 = var1.clearGuildId;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var17 = function() {
        var1 = _closure1_slot26;
        var0 = var1.updateSubtitles;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot31 = var17;
    var16 = function arg0() {
        var0 = arg0;
        var0 = var0.guildScheduledEvent;
        var2 = _closure1_slot26;
        var1 = var2.updateSubtitles;
        var0 = var0.guild_id;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0 = global;
    var20 = var0.Object;
    var7 = var20.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var20)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot16 = var1;
    var1 = 14;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot17 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot18 = var1;
    var1 = 16;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot19 = var1;
    var1 = 17;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot20 = var1;
    var1 = 18;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot21 = var1;
    var1 = 19;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot22 = var1;
    var1 = 20;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.UserSettingsTypes;
    var _closure1_slot23 = var1;
    var1 = null;
    var _closure1_slot24 = var1;
    var _closure1_slot25 = var1;
    var1 = 21;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var24 = var7;
    var1 = new var24[var1](var23);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot26 = var1;
    var1 = 26;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun40985: for (var _fun40985_ip = 0;;) switch (_fun40985_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot27;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun40985_ip = 69;
                        continue _fun40985
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun40985_ip = 105;
                    continue _fun40985;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var16 = this;
            var15 = var16.waitFor;
            var31 = _closure1_slot11;
            var30 = _closure1_slot14;
            var29 = _closure1_slot15;
            var28 = _closure1_slot16;
            var27 = _closure1_slot17;
            var26 = _closure1_slot8;
            var25 = _closure1_slot18;
            var24 = _closure1_slot9;
            var23 = _closure1_slot10;
            var22 = _closure1_slot12;
            var21 = _closure1_slot19;
            var20 = _closure1_slot20;
            var19 = _closure1_slot21;
            var18 = _closure1_slot22;
            var17 = _closure1_slot13;
            var32 = var16;
            var0 = var32[var15](var31, var30, var29, var28, var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getGuild';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun40987: for (var _fun40987_ip = 0;;) switch (_fun40987_ip) {
                case 0:
                    var5 = arg1;
                    var4 = _closure1_slot26;
                    var3 = var4.getGuild;
                    var0 = null;
                    var6 = var0 == var5;
                    var1 = undefined;
                    if (var6) {
                        _fun40987_ip = 32;
                        continue _fun40987
                    }
                case 26:
                    var1 = var5.guildActionRows;
                case 32:
                    if (!(var0 == var1)) {
                        _fun40987_ip = 40;
                        continue _fun40987
                    }
                case 36:
                    var1 = new Array(0);
                case 40:
                    var6 = var0 == var5;
                    var2 = undefined;
                    if (var6) {
                        _fun40987_ip = 55;
                        continue _fun40987
                    }
                case 49:
                    var2 = var5.channelNoticeRows;
                case 55:
                    if (!(var0 == var2)) {
                        _fun40987_ip = 63;
                        continue _fun40987
                    }
                case 59:
                    var2 = new Array(0);
                case 63:
                    var0 = arg0;
                    var1 = var3.bind(var4)(var0, var1, var2);
                    var0 = {};
                    var2 = var1.version;
                    var0.guildChannelsVersion = var2;
                    var0.guildChannels = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGuildWithoutChangingGuildActionRows';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot26;
            var1 = var2.getGuildChannelRowsOnly;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var2 = var1.version;
            var0.guildChannelsVersion = var2;
            var0.guildChannels = var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'recentsChannelCount';
        var4.key = var6;
        var5 = function arg0() {
            _fun40989: for (var _fun40989_ip = 0;;) switch (_fun40989_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun40989_ip = 61;
                        continue _fun40989
                    }
                case 9:
                    var1 = _closure1_slot26;
                    var0 = var1.getGuildChannelRowsOnly;
                    var2 = var0.bind(var1)(var2);
                    var1 = var2.getCategoryFromSection;
                    var0 = var2.recentsSectionNumber;
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.getShownChannelIds;
                    var0 = var0.bind(var1)();
                    var0 = var0.length;
                    return var0;
                case 61:
                    var0 = 0;
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ChannelListStore';
    var7.displayName = var1;
    var1 = 27;
    var1 = var5[var1];
    var23 = var6.bind(var0)(var1);
    var1 = {};
    var1.APPLICATION_FETCH_FAIL = var17;
    var1.APPLICATION_FETCH_SUCCESS = var17;
    var1.APPLICATION_FETCH = var17;
    var1.APPLICATIONS_FETCH_FAIL = var17;
    var1.APPLICATIONS_FETCH_SUCCESS = var17;
    var1.APPLICATIONS_FETCH = var17;
    var1.BACKGROUND_SYNC = var14;
    var20 = function arg0() {
        var1 = arg0;
        var3 = var1.channels;
        var1 = false;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 22;
        var2 = var6[var2];
        var5 = undefined;
        var2 = var4.bind(var5)(var2);
        var4 = var2.bind(var5)(var3);
        var3 = var4.map;
        var2 = function(arg0) { // Environment: var0
            _fun40991: for (var _fun40991_ip = 0;;) switch (_fun40991_ip) {
                case 0:
                    var2 = _closure1_slot16;
                    var1 = var2.getChannel;
                    var0 = arg0;
                    var0 = var0.channelId;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun40991_ip = 41;
                        continue _fun40991
                    }
                case 36:
                    var0 = var1.guild_id;
                case 41:
                    return var0;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.filter;
        var4 = _closure1_slot0;
        var1 = 23;
        var1 = var6[var1];
        var1 = var4.bind(var5)(var1);
        var1 = var1.isNotNullish;
        var2 = var2.bind(var3)(var1);
        var1 = var2.uniq;
        var3 = var1.bind(var2)();
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun40992: for (var _fun40992_ip = 0;;) switch (_fun40992_ip) {
                case 0:
                    var2 = _closure1_slot26;
                    var1 = var2.clearGuildId;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    if (!var0) {
                        _fun40992_ip = 33;
                        continue _fun40992
                    }
                case 24:
                    var0 = true;
                    _closure2_slot0 = var0;
                case 33:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var1.BULK_ACK = var20;
    var1.BULK_CLEAR_RECENTS = var10;
    var1.CACHE_LOADED_LAZY = var14;
    var1.CATEGORY_COLLAPSE_ALL = var10;
    var1.CATEGORY_COLLAPSE = var19;
    var1.CATEGORY_EXPAND_ALL = var10;
    var1.CATEGORY_EXPAND = var19;
    var1.CHANNEL_ACK = var11;
    var19 = function arg0() {
        _fun40993: for (var _fun40993_ip = 0;;) switch (_fun40993_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var2 = _closure1_slot26;
                var1 = var2.clearGuildId;
                var3 = _closure1_slot16;
                var0 = var3.getChannel;
                var3 = var0.bind(var3)(var4);
                var0 = null;
                var4 = var0 == var3;
                var0 = undefined;
                if (var4) {
                    _fun40993_ip = 51;
                    continue _fun40993
                }
            case 46:
                var0 = var3.guild_id;
            case 51:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var1.CHANNEL_COLLAPSE = var19;
    var1.CHANNEL_CREATE = var18;
    var1.CHANNEL_DELETE = var18;
    var1.CHANNEL_LOCAL_ACK = var11;
    var1.CHANNEL_MUTE_EXPIRED = var10;
    var1.CHANNEL_RTC_UPDATE_CHAT_OPEN = var11;
    var1.CHANNEL_SELECT = var8;
    var18 = function arg0() {
        var2 = _closure1_slot26;
        var1 = var2.clearGuildId;
        var0 = arg0;
        var0 = var0.guildId;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.CHANNEL_STATUSES = var18;
    var18 = function arg0() {
        var1 = arg0;
        var3 = var1.channels;
        var1 = false;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 22;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var3 = var1.bind(var2)(var3);
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.guild_id;
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.uniq;
        var3 = var1.bind(var2)();
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            _fun40997: for (var _fun40997_ip = 0;;) switch (_fun40997_ip) {
                case 0:
                    var2 = _closure1_slot26;
                    var1 = var2.clearGuildId;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    if (!var0) {
                        _fun40997_ip = 33;
                        continue _fun40997
                    }
                case 24:
                    var0 = true;
                    _closure2_slot0 = var0;
                case 33:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot0;
        return var0;
    };
    var1.CHANNEL_UPDATES = var18;
    var1.CONNECTION_OPEN_SUPPLEMENTAL = var17;
    var1.CONNECTION_OPEN = var14;
    var1.CURRENT_USER_UPDATE = var14;
    var1.DECAY_READ_STATES = var14;
    var1.DEV_TOOLS_DESIGN_TOGGLE_SET = var14;
    var1.DISABLE_AUTOMATIC_ACK = var11;
    var18 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot26;
        var0 = var1.nonPositionalChannelIdUpdate;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.DISMISS_FAVORITE_SUGGESTION = var18;
    var18 = function arg0() {
        var0 = arg0;
        var5 = var0.location;
        var3 = _closure1_slot26;
        var2 = var3.updateSubtitles;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 24;
        var1 = var7[var0];
        var4 = undefined;
        var8 = var6.bind(var4)(var1);
        var1 = var8.getEmbeddedActivityLocationGuildId;
        var1 = var1.bind(var8)(var5);
        var0 = var7[var0];
        var4 = var6.bind(var4)(var0);
        var0 = var4.getEmbeddedActivityLocationChannelId;
        var0 = var0.bind(var4)(var5);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.EMBEDDED_ACTIVITY_UPDATE_V2 = var18;
    var18 = function() {
        var1 = _closure1_slot31;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.EMBEDDED_ACTIVITY_LAUNCH_START = var18;
    var1.EMBEDDED_ACTIVITY_LAUNCH_SUCCESS = var17;
    var1.ENABLE_AUTOMATIC_ACK = var11;
    var18 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot26;
        var0 = var1.updateSubtitles;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.FETCH_GUILD_EVENTS_FOR_GUILD = var18;
    var1.GAMES_DATABASE_FETCH_FAIL = var17;
    var1.GAMES_DATABASE_FETCH = var17;
    var1.GAMES_DATABASE_UPDATE = var17;
    var1.GUILD_APPLICATIONS_FETCH_SUCCESS = var17;
    var1.GUILD_CREATE = var15;
    var1.GUILD_DELETE = var15;
    var17 = function arg0() {
        _fun41002: for (var _fun41002_ip = 0;;) switch (_fun41002_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var0 = var0.user;
                var4 = _closure1_slot14;
                var2 = var4.getId;
                var2 = var2.bind(var4)();
                var0 = var0.id;
                var0 = var2 === var0;
                if (!var0) {
                    _fun41002_ip = 57;
                    continue _fun41002
                }
            case 42:
                var2 = _closure1_slot26;
                var1 = var2.clearGuildId;
                var0 = var1.bind(var2)(var3);
            case 57:
                return var0;
        }
    };
    var1.GUILD_MEMBER_UPDATE = var17;
    var1.GUILD_MUTE_EXPIRED = var10;
    var1.GUILD_ROLE_CREATE = var10;
    var1.GUILD_ROLE_DELETE = var10;
    var1.GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE = var10;
    var1.GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS = var10;
    var1.GUILD_ROLE_UPDATE = var10;
    var1.GUILD_SCHEDULED_EVENT_CREATE = var16;
    var1.GUILD_SCHEDULED_EVENT_DELETE = var16;
    var1.GUILD_SCHEDULED_EVENT_UPDATE = var16;
    var1.GUILD_TOGGLE_COLLAPSE_MUTED = var10;
    var1.GUILD_UPDATE = var15;
    var1.IMPERSONATE_STOP = var10;
    var1.IMPERSONATE_UPDATE = var10;
    var15 = function arg0() {
        var0 = arg0;
        var2 = var0.channels;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.guildId;
            var1 = _closure1_slot26;
            var0 = var1.clearGuildId;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.LOAD_CHANNELS = var15;
    var1.LOAD_MESSAGES_SUCCESS = var11;
    var1.MESSAGE_ACK = var11;
    var15 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot26;
        var0 = var1.nonPositionalChannelIdUpdate;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.MESSAGE_CREATE = var15;
    var1.MESSAGE_DELETE_BULK = var11;
    var1.MESSAGE_DELETE = var11;
    var1.NOTIFICATION_SETTINGS_UPDATE = var14;
    var1.OVERLAY_INITIALIZE = var14;
    var15 = function arg0() {
        var2 = _closure1_slot26;
        var1 = var2.clearGuildId;
        var0 = arg0;
        var0 = var0.guildId;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.PASSIVE_UPDATE_V2 = var15;
    var1.RECOMPUTE_READ_STATES = var14;
    var1.RESORT_THREADS = var11;
    var1.SET_RECENTLY_ACTIVE_COLLAPSED = var14;
    var1.THREAD_CREATE = var12;
    var14 = function arg0() {
        var0 = arg0;
        var2 = var0.channel;
        var1 = _closure1_slot26;
        var0 = var1.nonPositionalChannelUpdate;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.THREAD_DELETE = var14;
    var1.THREAD_LIST_SYNC = var10;
    var1.THREAD_MEMBER_UPDATE = var13;
    var1.THREAD_MEMBERS_UPDATE = var13;
    var1.THREAD_UPDATE = var12;
    var1.TRY_ACK = var11;
    var1.UPDATE_CHANNEL_DIMENSIONS = var11;
    var11 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot26;
        var0 = var1.updateSubtitles;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.UPDATE_CHANNEL_LIST_SUBTITLES = var11;
    var1.USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK = var10;
    var1.USER_GUILD_SETTINGS_CHANNEL_UPDATE = var10;
    var11 = function arg0() {
        var0 = arg0;
        var2 = var0.userGuildSettings;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.guild_id;
            var1 = _closure1_slot26;
            var0 = var1.clearGuildId;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.USER_GUILD_SETTINGS_FULL_UPDATE = var11;
    var1.USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE = var10;
    var1.USER_GUILD_SETTINGS_GUILD_UPDATE = var10;
    var10 = function arg0() {
        _fun41011: for (var _fun41011_ip = 0;;) switch (_fun41011_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.settings;
                var4 = undefined;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var4;
                var5 = var2.type;
                var3 = _closure1_slot23;
                var3 = var3.PRELOADED_USER_SETTINGS;
                if (!(var5 === var3)) {
                    _fun41011_ip = 137;
                    continue _fun41011
                }
            case 43:
                var2 = var2.proto;
                var5 = var2.guilds;
                var2 = null;
                var6 = var2 == var5;
                var3 = undefined;
                if (var6) {
                    _fun41011_ip = 72;
                    continue _fun41011
                }
            case 66:
                var3 = var5.guilds;
            case 72:
                _closure2_slot0 = var3;
                var5 = false;
                _closure2_slot1 = var5;
                if (!(var2 != var3)) {
                    _fun41011_ip = 131;
                    continue _fun41011
                }
            case 86:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 25;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.keys;
                var3 = var1.bind(var2)(var3);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun41012: for (var _fun41012_ip = 0;;) switch (_fun41012_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot0;
                            var0 = var0[var3];
                            var2 = var0.guildRecentsDismissedAt;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun41012_ip = 55;
                                continue _fun41012
                            }
                        case 26:
                            var2 = _closure1_slot26;
                            var0 = var2.updateRecentsCategory;
                            var0 = var0.bind(var2)(var3);
                            if (var0) {
                                _fun41012_ip = 51;
                                continue _fun41012
                            }
                        case 47:
                            var0 = _closure2_slot1;
                        case 51:
                            _closure2_slot1 = var0;
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 131:
                var0 = _closure2_slot1;
                return var0;
            case 137:
                var0 = false;
                return var0;
        }
    };
    var1.USER_SETTINGS_PROTO_UPDATE = var10;
    var1.VOICE_CATEGORY_COLLAPSE = var9;
    var1.VOICE_CATEGORY_EXPAND = var9;
    var1.VOICE_CHANNEL_SELECT = var8;
    var8 = function arg0() {
        var2 = _closure1_slot26;
        var1 = var2.nonPositionalChannelIdUpdate;
        var0 = arg0;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.VOICE_CHANNEL_STATUS_UPDATE = var8;
    var8 = function arg0() {
        _fun41014: for (var _fun41014_ip = 0;;) switch (_fun41014_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.voiceStates;
                var0 = _closure1_slot30;
                var8 = undefined;
                var0 = var0.bind(var8)();
                var1 = global;
                var1 = var1.Set;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var15 = var3;
                var1 = new var15[var1](var14);
                var7 = var1 instanceof Object ? var1 : var3;
                var1 = _closure1_slot28;
                var6 = var1.bind(var8)(var2);
                var2 = var6.bind(var8)();
                var1 = var2.done;
                var4 = null;
                var3 = var2;
                var2 = var0;
                var0 = var2;
                if (var1) {
                    _fun41014_ip = 237;
                    continue _fun41014
                }
            case 85:
                var1 = var3.value;
                var12 = var1.channelId;
                var11 = var1.oldChannelId;
                var10 = var4 == var11;
                if (var10) {
                    _fun41014_ip = 118;
                    continue _fun41014
                }
            case 108:
                var1 = var7.has;
                var10 = var1.bind(var7)(var11);
            case 118:
                var1 = var2;
                if (var10) {
                    _fun41014_ip = 157;
                    continue _fun41014
                }
            case 124:
                var13 = _closure1_slot26;
                var10 = var13.nonPositionalChannelIdUpdate;
                var10 = var10.bind(var13)(var11);
                if (!var10) {
                    _fun41014_ip = 144;
                    continue _fun41014
                }
            case 142:
                var2 = true;
            case 144:
                var10 = var7.add;
                var10 = var10.bind(var7)(var11);
                var1 = var2;
            case 157:
                var11 = var4 == var12;
                if (var11) {
                    _fun41014_ip = 174;
                    continue _fun41014
                }
            case 164:
                var10 = var7.has;
                var11 = var10.bind(var7)(var12);
            case 174:
                var10 = var1;
                if (var11) {
                    _fun41014_ip = 213;
                    continue _fun41014
                }
            case 180:
                var13 = _closure1_slot26;
                var11 = var13.nonPositionalChannelIdUpdate;
                var11 = var11.bind(var13)(var12);
                if (!var11) {
                    _fun41014_ip = 200;
                    continue _fun41014
                }
            case 198:
                var1 = true;
            case 200:
                var11 = var7.add;
                var11 = var11.bind(var7)(var12);
                var10 = var1;
            case 213:
                var11 = var6.bind(var8)();
                var1 = var11.done;
                var2 = var10;
                var3 = var11;
                var0 = var2;
                if (!var1) {
                    _fun41014_ip = 85;
                    continue _fun41014
                }
            case 237:
                return var0;
        }
    };
    var1.VOICE_STATE_UPDATES = var8;
    var3 = function() {
        _fun41015: for (var _fun41015_ip = 0;;) switch (_fun41015_ip) {
            case 0:
                var2 = _closure1_slot24;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun41015_ip = 35;
                    continue _fun41015
                }
            case 16:
                var3 = _closure1_slot26;
                var2 = var3.nonPositionalChannelIdUpdate;
                var1 = _closure1_slot24;
                var0 = var2.bind(var3)(var1);
            case 35:
                return var0;
        }
    };
    var1.WINDOW_FOCUS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var24 = var3;
    var22 = var1;
    var1 = new var24[var7](var23, var22, var21);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_sidebar/ChannelListStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1371, 1663, 3325, 4546, 3084, 1310, 1216, 4563, 1372, 4564, 3475, 3082, 3938, 1661, 4299, 665, 4565, 22, 1304, 3072, 21, 566, 806, 2]);