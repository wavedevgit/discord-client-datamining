// stores/ReadStateStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var0 = function() {
        _fun35491: for (var _fun35491_ip = 0;;) switch (_fun35491_ip) {
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
                _fun35491_ip = 74;
                continue _fun35491;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot81 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot81 = var0;
    var0 = function arg0, arg1() {
        _fun35494: for (var _fun35494_ip = 0;;) switch (_fun35494_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun35494_ip = 46;
                    continue _fun35494
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun35494_ip = 55;
                    continue _fun35494
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun35494_ip = 343;
                    continue _fun35494
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun35494_ip = 323;
                    continue _fun35494
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun35494_ip = 283;
                    continue _fun35494
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun35494_ip = 270;
                    continue _fun35494
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
                    _fun35494_ip = 163;
                    continue _fun35494
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun35494_ip = 179;
                    continue _fun35494
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun35494_ip = 249;
                    continue _fun35494
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun35494_ip = 249;
                    continue _fun35494
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun35494_ip = 234;
                    continue _fun35494
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun35494_ip = 247;
                    continue _fun35494
                }
            case 234:
                var8 = _closure1_slot83;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun35494_ip = 265;
                continue _fun35494;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun35494_ip = 283;
                continue _fun35494;
            case 270:
                var6 = _closure1_slot83;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun35494_ip = 323;
                    continue _fun35494
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
                    _fun35494_ip = 330;
                    continue _fun35494
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun35495: for (var _fun35495_ip = 0;;) switch (_fun35495_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun35495_ip = 56;
                                continue _fun35495
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
                            _fun35495_ip = 67;
                            continue _fun35495;
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
    var _closure1_slot82 = var0;
    var0 = function arg0, arg1() {
        _fun35496: for (var _fun35496_ip = 0;;) switch (_fun35496_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun35496_ip = 23;
                    continue _fun35496
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun35496_ip = 33;
                    continue _fun35496
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
                    _fun35496_ip = 70;
                    continue _fun35496
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun35496_ip = 55;
                    continue _fun35496
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot83 = var0;
    var0 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 40;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.fromTimestamp;
        var3 = global;
        var4 = var3.Date;
        var3 = var4.now;
        var3 = var3.bind(var4)();
        var0 = _closure1_slot73;
        var0 = var3 - var0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot84 = var0;
    var8 = function() {
        var4 = global;
        var1 = var4.Date;
        var0 = var1.now;
        var7 = var0.bind(var1)();
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 41;
        var6 = var5[var1];
        var0 = undefined;
        var6 = var3.bind(var0)(var6);
        var6 = var6.Millis;
        var8 = var6.DAY;
        var6 = 7;
        var6 = var6 * var8;
        var6 = var7 - var6;
        _closure1_slot74 = var6;
        var7 = var4.Date;
        var6 = var7.now;
        var7 = var6.bind(var7)();
        var6 = var5[var1];
        var6 = var3.bind(var0)(var6);
        var6 = var6.Millis;
        var8 = var6.DAY;
        var6 = 3;
        var6 = var6 * var8;
        var6 = var7 - var6;
        _closure1_slot75 = var6;
        var7 = var4.clearTimeout;
        var6 = _closure1_slot76;
        var6 = var7.bind(var0)(var6);
        var4 = var4.setTimeout;
        var1 = var5[var1];
        var1 = var3.bind(var0)(var1);
        var1 = var1.Millis;
        var3 = var1.HOUR;
        var1 = 1;
        var3 = var1 * var3;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 42;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'DECAY_READ_STATES';
            var1.type = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var4.bind(var0)(var1, var3);
        _closure1_slot76 = var1;
        return var0;
    };
    var _closure1_slot85 = var8;
    var0 = function arg0() {
        _fun35500: for (var _fun35500_ip = 0;;) switch (_fun35500_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun35500_ip = 51;
                    continue _fun35500
                }
            case 9:
                var0 = global;
                var2 = var0.Date;
                var1 = var2.parse;
                var1 = var1.bind(var2)(var3);
                var2 = var0.isNaN;
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var0 = 0;
                if (var2) {
                    _fun35500_ip = 49;
                    continue _fun35500
                }
            case 46:
                var0 = var1;
            case 49:
                return var0;
            case 51:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot86 = var0;
    var3 = function arg0, arg1() {
        _fun35501: for (var _fun35501_ip = 0;;) switch (_fun35501_ip) {
            case 0:
                var7 = arg0;
                var2 = _closure1_slot29;
                var1 = var2.getChannel;
                var0 = var7.channel_id;
                var5 = var1.bind(var2)(var0);
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun35501_ip = 186;
                    continue _fun35501
                }
            case 37:
                var2 = _closure1_slot36;
                var1 = var2.isBlockedOrIgnoredForMessage;
                var1 = var1.bind(var2)(var7);
                var1 = !var1;
                if (!var1) {
                    _fun35501_ip = 183;
                    continue _fun35501
                }
            case 61:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 43;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var6.bind(var4)(var2);
                var2 = {};
                var2.message = var7;
                var7 = arg1;
                var7 = var7.id;
                var2.userId = var7;
                var9 = _closure1_slot38;
                var8 = var9.isSuppressEveryoneEnabled;
                var7 = var5.guild_id;
                var7 = var8.bind(var9)(var7);
                var2.suppressEveryone = var7;
                var9 = _closure1_slot38;
                var8 = var9.isSuppressRolesEnabled;
                var7 = var5.guild_id;
                var7 = var8.bind(var9)(var7);
                var2.suppressRoles = var7;
                var2 = var6.bind(var4)(var2);
                var6 = !var2;
                var2 = !var6;
                if (!var6) {
                    _fun35501_ip = 180;
                    continue _fun35501
                }
            case 165:
                var3 = _closure1_slot88;
                var3 = var3.bind(var4)(var5);
                var3 = !var3;
                var2 = !var3;
            case 180:
                var1 = var2;
            case 183:
                var0 = var1;
            case 186:
                return var0;
        }
    };
    var _closure1_slot87 = var3;
    var0 = function arg0() {
        _fun35502: for (var _fun35502_ip = 0;;) switch (_fun35502_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun35502_ip = 22;
                    continue _fun35502
                }
            case 12:
                var2 = var1.isPrivate;
                var0 = var2.bind(var1)();
            case 22:
                if (!var0) {
                    _fun35502_ip = 57;
                    continue _fun35502
                }
            case 25:
                var4 = _closure1_slot38;
                var3 = var4.isGuildOrCategoryOrChannelMuted;
                var2 = var1.guild_id;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                var0 = !var1;
            case 57:
                return var0;
        }
    };
    var _closure1_slot88 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot90;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot89 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun35506: for (var _fun35506_ip = 0;;) switch (_fun35506_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun35506_ip = 181;
                            continue _fun35506
                        }
                    case 15:
                        var2 = undefined;
                        var _closure4_slot0 = var2;
                        var5 = _closure1_slot69;
                        var5 = var5.length;
                        var8 = 0;
                        if (!(var8 !== var5)) {
                            _fun35506_ip = 157;
                            continue _fun35506
                        }
                    case 39:
                        var5 = true;
                        _closure1_slot70 = var5;
                        var7 = _closure1_slot69;
                        var6 = var7.splice;
                        var5 = 100;
                        var5 = var6.bind(var7)(var8, var5);
                        _closure4_slot0 = var5;
                        var5 = _closure1_slot91;
                        var1 = function() { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 44;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var2 = var0.HTTP;
                            var1 = var2.post;
                            var0 = {};
                            var3 = _closure1_slot44;
                            var3 = var3.BULK_ACK;
                            var0.url = var3;
                            var3 = {};
                            var4 = _closure4_slot0;
                            var3.read_states = var4;
                            var0.body = var3;
                            var3 = true;
                            var0.oldFormErrors = var3;
                            var3 = false;
                            var0.rejectWithError = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var1 = var5.bind(var2)(var1);
                        SaveGenerator(address = 86);
                    case 84:
                        return var1;
                    case 86:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun35506_ip = 154;
                            continue _fun35506
                        }
                    case 92:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 45;
                        var5 = var7[var5];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.timeoutPromise;
                        var5 = 1000;
                        var5 = var6.bind(var7)(var5);
                        SaveGenerator(address = 133);
                    case 131:
                        return var5;
                    case 133:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun35506_ip = 151;
                            continue _fun35506
                        }
                    case 139:
                        var6 = _closure1_slot89;
                        var6 = var6.bind(var2)(var3);
                        return var2;
                    case 151:
                        return var5;
                    case 154:
                        return var1;
                    case 157:
                        var1 = false;
                        _closure1_slot70 = var1;
                        var1 = null;
                        var1 = var1 == var3;
                        if (var1) {
                            _fun35506_ip = 176;
                            continue _fun35506
                        }
                    case 172:
                        var1 = var3.bind(var2)();
                    case 176:
                        var1 = undefined;
                        return var1;
                    case 181:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot90 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot90 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot92;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot91 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun35511: for (var _fun35511_ip = 0;;) switch (_fun35511_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun35511_ip = 300;
                            continue _fun35511
                        }
                    case 10:
                        var12 = arg0;
                        var3 = undefined;
                        var13 = undefined;
                        var14 = undefined;
                        var2 = _closure1_slot27;
                        var1 = var2.getId;
                        var13 = var1.bind(var2)();
                        var14 = 0;
                        var10 = 3;
                        var9 = 46;
                        var8 = 45;
                        var7 = 1;
                        var6 = 2000;
                        var5 = '';
                    case 60: // try_start_0
                        var1 = var12;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 71);
                    case 69:
                        return var1;
                    case 71:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun35511_ip = 80;
                            continue _fun35511
                        }
                    case 77: // try_end0
                        return var1;
                    case 80:
                        return var1;
                    case 83: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var2 = _closure1_slot63;
                        var1 = var2.error;
                        var1 = var1.bind(var2)(var5, var4);
                        var1 = var14;
                        var1 = var1 + var7;
                        if (!(var1 < var10)) {
                            _fun35511_ip = 221;
                            continue _fun35511
                        }
                    case 111:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var8];
                        var4 = var2.bind(var3)(var1);
                        var2 = var4.timeoutPromise;
                        var1 = var14;
                        var1 = var1 + var7;
                        var1 = var6 * var1;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 154);
                    case 152:
                        return var1;
                    case 154:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun35511_ip = 297;
                            continue _fun35511
                        }
                    case 163:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var9];
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.awaitOnline;
                        var2 = var2.bind(var4)();
                        SaveGenerator(address = 194);
                    case 192:
                        return var2;
                    case 194:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun35511_ip = 294;
                            continue _fun35511
                        }
                    case 200:
                        var15 = var13;
                        var16 = _closure1_slot27;
                        var4 = var16.getId;
                        var4 = var4.bind(var16)();
                        if (!(var15 === var4)) {
                            _fun35511_ip = 240;
                            continue _fun35511
                        }
                    case 221:
                        var4 = var14;
                        var4 = var4 + 1;
                        var14 = var4;
                        if (var4 < var10) {
                            _fun35511_ip = 60;
                            continue _fun35511
                        }
                    case 237:
                        return var3;
                    case 240:
                        var3 = global;
                        var5 = var3.Promise;
                        var4 = var5.reject;
                        var7 = var3.Error;
                        var3 = var7.prototype;
                        var6 = Object.create(var3, {
                            constructor: {
                                value: var7
                            }
                        });
                        var18 = 'User changed.';
                        var19 = var6;
                        var3 = new var19[var7](var18, var17);
                        var3 = var3 instanceof Object ? var3 : var6;
                        var3 = var4.bind(var5)(var3);
                        return var3;
                    case 294:
                        return var2;
                    case 297:
                        return var1;
                    case 300:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot92 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot92 = var0;
    var0 = function arg0, arg1() {
        _fun35512: for (var _fun35512_ip = 0;;) switch (_fun35512_ip) {
            case 0:
                var2 = _closure1_slot39;
                var1 = var2.getCurrentUser;
                var3 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun35512_ip = 35;
                    continue _fun35512
                }
            case 25:
                var2 = var3.hasAnyStaffLevel;
                var1 = var2.bind(var3)();
            case 35:
                if (!var1) {
                    _fun35512_ip = 71;
                    continue _fun35512
                }
            case 38:
                var4 = _closure1_slot63;
                var3 = var4.log;
                var0 = arg0;
                var2 = var0.channelId;
                var1 = 'STAFF-ACK-LOG:';
                var0 = arg1;
                var0 = var3.bind(var4)(var1, var0, var2);
            case 71:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot93 = var0;
    var0 = function arg0() {
        _fun35513: for (var _fun35513_ip = 0;;) switch (_fun35513_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot93;
                var2 = undefined;
                var1 = 'shouldAutomaticallyAck called';
                var1 = var4.bind(var2)(var3, var1);
                var4 = var3.type;
                var1 = _closure1_slot61;
                var1 = var1.CHANNEL;
                if (!(var4 === var1)) {
                    _fun35513_ip = 738;
                    continue _fun35513
                }
            case 46:
                var5 = _closure1_slot29;
                var4 = var5.getChannel;
                var1 = var3.channelId;
                var8 = var4.bind(var5)(var1);
                var5 = null;
                var1 = var5 != var8;
                if (!var1) {
                    _fun35513_ip = 84;
                    continue _fun35513
                }
            case 74:
                var4 = var8.isForumPost;
                var1 = var4.bind(var8)();
            case 84:
                var6 = _closure1_slot10;
                var4 = var6.getConnectedActivityLocation;
                var4 = var4.bind(var6)();
                if (!(var5 != var4)) {
                    _fun35513_ip = 161;
                    continue _fun35513
                }
            case 102:
                var6 = _closure1_slot10;
                var4 = var6.getActivityPanelMode;
                var6 = var4.bind(var6)();
                var4 = _closure1_slot56;
                var4 = var4.PANEL;
                if (!(var6 === var4)) {
                    _fun35513_ip = 161;
                    continue _fun35513
                }
            case 130:
                var6 = _closure1_slot10;
                var4 = var6.getFocusedLayout;
                var6 = var4.bind(var6)();
                var4 = _closure1_slot57;
                var4 = var4.NO_CHAT;
                if (!(var6 !== var4)) {
                    _fun35513_ip = 718;
                    continue _fun35513
                }
            case 161:
                var6 = _closure1_slot33;
                var4 = var6.isIdle;
                var4 = var4.bind(var6)();
                if (var4) {
                    _fun35513_ip = 698;
                    continue _fun35513
                }
            case 181:
                var4 = var3.canTrackUnreads;
                var4 = var4.bind(var3)();
                if (var4) {
                    _fun35513_ip = 214;
                    continue _fun35513
                }
            case 194:
                var6 = _closure1_slot93;
                var4 = 'Cannot track unreads';
                var4 = var6.bind(var2)(var3, var4);
                var4 = false;
                return var4;
            case 214:
                var4 = var5 == var8;
                var6 = undefined;
                if (var4) {
                    _fun35513_ip = 233;
                    continue _fun35513
                }
            case 223:
                var4 = var8.isForumLikeChannel;
                var6 = var4.bind(var8)();
            case 233:
                var4 = true;
                if (!(var4 !== var6)) {
                    _fun35513_ip = 286;
                    continue _fun35513
                }
            case 239:
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 47;
                var6 = var9[var6];
                var7 = var7.bind(var2)(var6);
                var6 = var7.getState;
                var7 = var6.bind(var7)();
                var6 = _closure1_slot55;
                var6 = var6.ACTIVE;
                if (!(var7 === var6)) {
                    _fun35513_ip = 678;
                    continue _fun35513
                }
            case 286:
                if (!var1) {
                    _fun35513_ip = 316;
                    continue _fun35513
                }
            case 289:
                var6 = var3._persisted;
                if (var6) {
                    _fun35513_ip = 316;
                    continue _fun35513
                }
            case 298:
                var7 = _closure1_slot93;
                var6 = 'unpersisted forum post';
                var6 = var7.bind(var2)(var3, var6);
                return var4;
            case 316:
                var6 = var3.hasUnreadOrMentions;
                var6 = var6.bind(var3)();
                if (var6) {
                    _fun35513_ip = 349;
                    continue _fun35513
                }
            case 329:
                var7 = _closure1_slot93;
                var6 = 'No unread or mentions';
                var6 = var7.bind(var2)(var3, var6);
                var6 = false;
                return var6;
            case 349:
                var7 = var5 == var8;
                var6 = undefined;
                if (var7) {
                    _fun35513_ip = 368;
                    continue _fun35513
                }
            case 358:
                var7 = var8.isForumLikeChannel;
                var6 = var7.bind(var8)();
            case 368:
                if (!(var4 !== var6)) {
                    _fun35513_ip = 658;
                    continue _fun35513
                }
            case 375:
                if (!var1) {
                    _fun35513_ip = 387;
                    continue _fun35513
                }
            case 378:
                var1 = var3._isJoinedThread;
                if (!var1) {
                    _fun35513_ip = 430;
                    continue _fun35513
                }
            case 387:
                var7 = _closure1_slot30;
                var6 = var7.isAtBottom;
                var1 = var3.channelId;
                var1 = var6.bind(var7)(var1);
                if (var1) {
                    _fun35513_ip = 430;
                    continue _fun35513
                }
            case 410:
                var6 = _closure1_slot93;
                var1 = 'Not at bottom';
                var1 = var6.bind(var2)(var3, var1);
                var1 = false;
                return var1;
            case 430:
                var7 = _closure1_slot11;
                var6 = var7.getLayout;
                var1 = var3.channelId;
                var6 = var6.bind(var7)(var1);
                var8 = _closure1_slot11;
                var7 = var8.getChatOpen;
                var1 = var3.channelId;
                var1 = var7.bind(var8)(var1);
                if (var1) {
                    _fun35513_ip = 521;
                    continue _fun35513
                }
            case 473:
                var1 = _closure1_slot45;
                var1 = var1.NO_CHAT;
                if (!(var6 !== var1)) {
                    _fun35513_ip = 501;
                    continue _fun35513
                }
            case 487:
                var1 = _closure1_slot45;
                var1 = var1.FULL_SCREEN;
                if (!(var6 === var1)) {
                    _fun35513_ip = 521;
                    continue _fun35513
                }
            case 501:
                var6 = _closure1_slot93;
                var1 = 'Fullscreen video';
                var1 = var6.bind(var2)(var3, var1);
                var1 = false;
                return var1;
            case 521:
                var7 = _closure1_slot34;
                var6 = var7.getMessages;
                var1 = var3.channelId;
                var1 = var6.bind(var7)(var1);
                if (!(var5 != var1)) {
                    _fun35513_ip = 638;
                    continue _fun35513
                }
            case 545:
                var5 = var1.ready;
                if (!var5) {
                    _fun35513_ip = 638;
                    continue _fun35513
                }
            case 554:
                var1 = var1.loadingMore;
                if (var1) {
                    _fun35513_ip = 638;
                    continue _fun35513
                }
            case 563:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 48;
                var1 = var6[var1];
                var6 = var5.bind(var2)(var1);
                var5 = var6.isChannelFocusedForReadStateAck;
                var1 = var3.channelId;
                var1 = var5.bind(var6)(var1);
                var6 = _closure1_slot93;
                if (var1) {
                    _fun35513_ip = 622;
                    continue _fun35513
                }
            case 606:
                var1 = 'Chat not focused';
                var1 = var6.bind(var2)(var3, var1);
                var1 = false;
                _fun35513_ip = 636;
                continue _fun35513;
            case 622:
                var5 = 'Acked';
                var5 = var6.bind(var2)(var3, var5);
                var1 = true;
            case 636:
                _fun35513_ip = 656;
                continue _fun35513;
            case 638:
                var5 = _closure1_slot93;
                var4 = 'Still loading messages';
                var4 = var5.bind(var2)(var3, var4);
                var1 = false;
            case 656:
                return var1;
            case 658:
                var4 = _closure1_slot93;
                var1 = 'Forum-like channel';
                var1 = var4.bind(var2)(var3, var1);
                var1 = false;
                return var1;
            case 678:
                var4 = _closure1_slot93;
                var1 = 'App not active';
                var1 = var4.bind(var2)(var3, var1);
                var1 = false;
                return var1;
            case 698:
                var4 = _closure1_slot93;
                var1 = 'Is idle';
                var1 = var4.bind(var2)(var3, var1);
                var1 = false;
                return var1;
            case 718:
                var4 = _closure1_slot93;
                var1 = 'In activity';
                var1 = var4.bind(var2)(var3, var1);
                var1 = false;
                return var1;
            case 738:
                var1 = _closure1_slot93;
                var0 = 'not channel read state';
                var0 = var1.bind(var2)(var3, var0);
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot94 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun35515: for (var _fun35515_ip = 0;;) switch (_fun35515_ip) {
                case 0:
                    var1 = arg0;
                    var4 = _closure1_slot22;
                    var2 = var1.type;
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    if (!var2) {
                        _fun35515_ip = 150;
                        continue _fun35515
                    }
                case 28:
                    var5 = _closure1_slot78;
                    var4 = var5.get;
                    var2 = var1.id;
                    var2 = var4.bind(var5)(var2);
                    var4 = var1.guild_id;
                    var2._guildId = var4;
                    var4 = var1.lastMessageId;
                    var2.lastMessageId = var4;
                    var5 = _closure1_slot86;
                    var4 = var1.lastPinTimestamp;
                    var4 = var5.bind(var0)(var4);
                    var2.lastPinTimestamp = var4;
                    var5 = var1.hasFlag;
                    var4 = _closure1_slot58;
                    var4 = var4.IS_GUILD_RESOURCE_CHANNEL;
                    var4 = var5.bind(var1)(var4);
                    var2._isResourceChannel = var4;
                    var4 = _closure1_slot26;
                    var3 = var4.has;
                    var1 = var1.type;
                    var1 = var3.bind(var4)(var1);
                    if (!var1) {
                        _fun35515_ip = 150;
                        continue _fun35515
                    }
                case 140:
                    var1 = var2.syncThreadSettings;
                    var1 = var1.bind(var2)();
                case 150:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot95 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun35517: for (var _fun35517_ip = 0;;) switch (_fun35517_ip) {
                case 0:
                    var1 = arg0;
                    var4 = _closure1_slot22;
                    var2 = var1.type;
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    if (!var2) {
                        _fun35517_ip = 179;
                        continue _fun35517
                    }
                case 28:
                    var5 = _closure1_slot78;
                    var4 = var5.get;
                    var2 = var1.id;
                    var2 = var4.bind(var5)(var2);
                    var4 = var1.last_message_id;
                    var2.lastMessageId = var4;
                    var5 = _closure1_slot86;
                    var4 = var1.last_pin_timestamp;
                    var4 = var5.bind(var0)(var4);
                    var2.lastPinTimestamp = var4;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 55;
                    var4 = var6[var4];
                    var7 = var5.bind(var0)(var4);
                    var6 = var7.hasFlag;
                    var4 = var1.flags;
                    var5 = null;
                    var8 = var5 != var4;
                    var5 = 0;
                    if (!var8) {
                        _fun35517_ip = 125;
                        continue _fun35517
                    }
                case 122:
                    var5 = var4;
                case 125:
                    var4 = _closure1_slot58;
                    var4 = var4.IS_GUILD_RESOURCE_CHANNEL;
                    var4 = var6.bind(var7)(var5, var4);
                    var2._isResourceChannel = var4;
                    var4 = _closure1_slot26;
                    var3 = var4.has;
                    var1 = var1.type;
                    var1 = var3.bind(var4)(var1);
                    if (!var1) {
                        _fun35517_ip = 179;
                        continue _fun35517
                    }
                case 169:
                    var1 = var2.syncThreadSettings;
                    var1 = var1.bind(var2)();
                case 179:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot96 = var0;
    var0 = function arg0() {
        _fun35518: for (var _fun35518_ip = 0;;) switch (_fun35518_ip) {
            case 0:
                var2 = arg0;
                var3 = function arg0() {
                    _fun35519: for (var _fun35519_ip = 0;;) switch (_fun35519_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var2 = var1.threads;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun35519_ip = 36;
                                continue _fun35519
                            }
                        case 21:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun35520: for (var _fun35520_ip = 0;;) switch (_fun35520_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var4 = _closure1_slot25;
                                        var3 = var4.has;
                                        var1 = var0.type;
                                        var1 = var3.bind(var4)(var1);
                                        if (!var1) {
                                            _fun35520_ip = 234;
                                            continue _fun35520
                                        }
                                    case 31:
                                        var4 = _closure1_slot78;
                                        var3 = var4.get;
                                        var1 = var0.id;
                                        var1 = var3.bind(var4)(var1);
                                        var3 = var0.lastMessageId;
                                        var1.lastMessageId = var3;
                                        var5 = _closure1_slot86;
                                        var3 = var0.lastPinTimestamp;
                                        var4 = undefined;
                                        var3 = var5.bind(var4)(var3);
                                        var1.lastPinTimestamp = var3;
                                        var3 = true;
                                        var1._isThread = var3;
                                        var1._isActiveThread = var3;
                                        var3 = var0.member;
                                        var5 = null;
                                        var3 = var5 != var3;
                                        var1._isJoinedThread = var3;
                                        var3 = var1.ackMessageId;
                                        if (!(var5 == var3)) {
                                            _fun35520_ip = 191;
                                            continue _fun35520
                                        }
                                    case 127:
                                        var6 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var3 = 40;
                                        var3 = var7[var3];
                                        var7 = var6.bind(var4)(var3);
                                        var6 = var7.fromTimestamp;
                                        var9 = _closure1_slot99;
                                        var3 = _closure3_slot0;
                                        var8 = var3.id;
                                        var3 = var0.id;
                                        var3 = var9.bind(var4)(var8, var3);
                                        var3 = var6.bind(var7)(var3);
                                        var1.ackMessageId = var3;
                                    case 191:
                                        var3 = var1.ackPinTimestamp;
                                        if (!(var5 == var3)) {
                                            _fun35520_ip = 234;
                                            continue _fun35520
                                        }
                                    case 201:
                                        var3 = _closure1_slot99;
                                        var2 = _closure3_slot0;
                                        var2 = var2.id;
                                        var0 = var0.id;
                                        var0 = var3.bind(var4)(var2, var0);
                                        var1.ackPinTimestamp = var0;
                                    case 234:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 36:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var1 = function arg0() {
                    _fun35521: for (var _fun35521_ip = 0;;) switch (_fun35521_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = var3.guild_scheduled_events;
                            var6 = null;
                            var5 = var6 == var4;
                            var0 = undefined;
                            var2 = undefined;
                            if (var5) {
                                _fun35521_ip = 29;
                                continue _fun35521
                            }
                        case 24:
                            var2 = var4.length;
                        case 29:
                            var4 = 0;
                            if (!(var4 === var2)) {
                                _fun35521_ip = 76;
                                continue _fun35521
                            }
                        case 35:
                            var8 = _closure1_slot78;
                            var7 = var8.getIfExists;
                            var5 = var3.id;
                            var2 = _closure1_slot61;
                            var2 = var2.GUILD_EVENT;
                            var2 = var7.bind(var8)(var5, var2);
                            if (!(var6 != var2)) {
                                _fun35521_ip = 226;
                                continue _fun35521
                            }
                        case 76:
                            var9 = _closure1_slot78;
                            var8 = var9.get;
                            var7 = var3.id;
                            var2 = _closure1_slot61;
                            var2 = var2.GUILD_EVENT;
                            var2 = var8.bind(var9)(var7, var2);
                            var7 = var3.id;
                            var2._guildId = var7;
                            var _closure3_slot0 = var4;
                            var _closure3_slot1 = var6;
                            var4 = var2._ackMessageId;
                            if (!(var6 == var4)) {
                                _fun35521_ip = 179;
                                continue _fun35521
                            }
                        case 138:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 40;
                            var5 = var7[var5];
                            var7 = var6.bind(var0)(var5);
                            var6 = var7.fromTimestamp;
                            var5 = var2.getAckTimestamp;
                            var5 = var5.bind(var2)();
                            var4 = var6.bind(var7)(var5);
                        case 179:
                            var _closure3_slot2 = var4;
                            var5 = var3.guild_scheduled_events;
                            var4 = var5.forEach;
                            var3 = function(arg0) { // Environment: var1
                                _fun35522: for (var _fun35522_ip = 0;;) switch (_fun35522_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var3 = _closure1_slot1;
                                        var0 = _closure1_slot2;
                                        var6 = 40;
                                        var2 = var0[var6];
                                        var0 = undefined;
                                        var8 = var3.bind(var0)(var2);
                                        var7 = var8.compare;
                                        var5 = var1.id;
                                        var3 = _closure3_slot1;
                                        var5 = var7.bind(var8)(var5, var3);
                                        var3 = 0;
                                        if (!(var5 > var3)) {
                                            _fun35522_ip = 67;
                                            continue _fun35522
                                        }
                                    case 58:
                                        var5 = var1.id;
                                        _closure3_slot1 = var5;
                                    case 67:
                                        var5 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var4 = var4[var6];
                                        var6 = var5.bind(var0)(var4);
                                        var5 = var6.compare;
                                        var4 = var1.id;
                                        var1 = _closure3_slot2;
                                        var1 = var5.bind(var6)(var4, var1);
                                        if (!(var1 > var3)) {
                                            _fun35522_ip = 120;
                                            continue _fun35522
                                        }
                                    case 109:
                                        var1 = _closure3_slot0;
                                        var1 = var1 + 1;
                                        _closure3_slot0 = var1;
                                    case 120:
                                        return var0;
                                }
                            };
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure3_slot1;
                            var2.lastMessageId = var3;
                            var1 = _closure3_slot0;
                            var2.mentionCount = var1;
                            return var0;
                        case 226:
                            return var0;
                    }
                };
                var1 = var1.bind(var0)(var2);
                var6 = _closure1_slot78;
                var5 = var6.get;
                var4 = var2.id;
                var3 = _closure1_slot61;
                var3 = var3.GUILD_HOME;
                var4 = var5.bind(var6)(var4, var3);
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 40;
                var3 = var8[var3];
                var6 = var7.bind(var0)(var3);
                var5 = var6.fromTimestamp;
                var3 = 56;
                var3 = var8[var3];
                var7 = var7.bind(var0)(var3);
                var3 = global;
                var8 = var3.Date;
                var3 = var8.now;
                var3 = var3.bind(var8)();
                var9 = var7.bind(var0)(var3);
                var8 = var9.subtract;
                var7 = 24;
                var3 = 'h';
                var7 = var8.bind(var9)(var7, var3);
                var3 = var7.valueOf;
                var3 = var3.bind(var7)();
                var3 = var5.bind(var6)(var3);
                var4.lastMessageId = var3;
                var4 = _closure1_slot32;
                var3 = var4.getGuild;
                var2 = var2.id;
                var3 = var3.bind(var4)(var2);
                var4 = null;
                if (!(var4 != var3)) {
                    _fun35518_ip = 250;
                    continue _fun35518
                }
            case 184:
                var5 = var4 == var3;
                var2 = undefined;
                if (var5) {
                    _fun35518_ip = 199;
                    continue _fun35518
                }
            case 193:
                var2 = var3.latestOnboardingQuestionId;
            case 199:
                if (!(var4 != var2)) {
                    _fun35518_ip = 250;
                    continue _fun35518
                }
            case 203:
                var6 = _closure1_slot78;
                var5 = var6.get;
                var4 = var3.id;
                var1 = _closure1_slot61;
                var1 = var1.GUILD_ONBOARDING_QUESTION;
                var1 = var5.bind(var6)(var4, var1);
                var3 = var3.id;
                var1._guildId = var3;
                var1.lastMessageId = var2;
            case 250:
                return var0;
        }
    };
    var _closure1_slot97 = var0;
    var0 = function arg0() {
        var2 = function arg0() {
            _fun35524: for (var _fun35524_ip = 0;;) switch (_fun35524_ip) {
                case 0:
                    var2 = arg0;
                    var4 = _closure1_slot39;
                    var3 = var4.getCurrentUser;
                    var3 = var3.bind(var4)();
                    var4 = null;
                    if (!(var4 != var3)) {
                        _fun35524_ip = 80;
                        continue _fun35524
                    }
                case 27:
                    var5 = _closure1_slot78;
                    var4 = var5.get;
                    var3 = var3.id;
                    var1 = _closure1_slot61;
                    var1 = var1.NOTIFICATION_CENTER;
                    var1 = var4.bind(var5)(var3, var1);
                    var _closure3_slot0 = var1;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun35525: for (var _fun35525_ip = 0;;) switch (_fun35525_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.since;
                                var4 = null;
                                if (!(var4 != var0)) {
                                    _fun35525_ip = 218;
                                    continue _fun35525
                                }
                            case 18:
                                var3 = var1.type;
                                var2 = _closure1_slot51;
                                var2 = var2.PENDING_INCOMING;
                                if (!(var3 === var2)) {
                                    _fun35525_ip = 218;
                                    continue _fun35525
                                }
                            case 43:
                                var2 = global;
                                var3 = var2.Date;
                                var7 = var1.since;
                                var2 = var3.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var8 = var2;
                                var1 = new var8[var3](var7, var6);
                                var2 = var1 instanceof Object ? var1 : var2;
                                var1 = var2.getTime;
                                var3 = var1.bind(var2)();
                                var2 = _closure3_slot0;
                                var2 = var2.ackMessageId;
                                var4 = var4 != var2;
                                var2 = 0;
                                if (!var4) {
                                    _fun35525_ip = 152;
                                    continue _fun35525
                                }
                            case 109:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var4 = 40;
                                var5 = var5[var4];
                                var4 = undefined;
                                var6 = var6.bind(var4)(var5);
                                var5 = var6.extractTimestamp;
                                var4 = _closure3_slot0;
                                var4 = var4.ackMessageId;
                                var2 = var5.bind(var6)(var4);
                            case 152:
                                if (!(var2 < var3)) {
                                    _fun35525_ip = 218;
                                    continue _fun35525
                                }
                            case 156:
                                var4 = _closure3_slot0;
                                var2 = var4.mentionCount;
                                var2 = var2 + 1;
                                var4.mentionCount = var2;
                                var1 = _closure3_slot0;
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 40;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var4.bind(var0)(var2);
                                var0 = var2.fromTimestamp;
                                var0 = var0.bind(var2)(var3);
                                var1.lastMessageId = var0;
                            case 218:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                case 80:
                    var0 = false;
                    return var0;
            }
        };
        var0 = undefined;
        var1 = arg0;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot98 = var0;
    var0 = function arg0, arg1() {
        _fun35526: for (var _fun35526_ip = 0;;) switch (_fun35526_ip) {
            case 0:
                var2 = arg0;
                var7 = arg1;
                var1 = _closure1_slot29;
                var0 = var1.getChannel;
                var6 = var0.bind(var1)(var7);
                var1 = _closure1_slot32;
                var0 = var1.getGuild;
                var3 = null;
                if (!(var3 == var2)) {
                    _fun35526_ip = 55;
                    continue _fun35526
                }
            case 38:
                var8 = var3 == var6;
                var4 = undefined;
                if (var8) {
                    _fun35526_ip = 52;
                    continue _fun35526
                }
            case 47:
                var4 = var6.guild_id;
            case 52:
                var2 = var4;
            case 55:
                var2 = var0.bind(var1)(var2);
                if (!(var3 != var6)) {
                    _fun35526_ip = 79;
                    continue _fun35526
                }
            case 64:
                var0 = var6.isForumPost;
                var0 = var0.bind(var6)();
                var4 = 0;
                if (var0) {
                    _fun35526_ip = 90;
                    continue _fun35526
                }
            case 79:
                var1 = _closure1_slot100;
                var0 = undefined;
                var4 = var1.bind(var0)(var2);
            case 90:
                var1 = _closure1_slot20;
                var0 = var1.joinTimestamp;
                var8 = var0.bind(var1)(var7);
                var0 = var3 == var8;
                var2 = undefined;
                var1 = undefined;
                if (var0) {
                    _fun35526_ip = 126;
                    continue _fun35526
                }
            case 116:
                var0 = var8.getTime;
                var1 = var0.bind(var8)();
            case 126:
                var9 = var3 != var1;
                var0 = 0;
                var8 = 0;
                if (!var9) {
                    _fun35526_ip = 140;
                    continue _fun35526
                }
            case 137:
                var8 = var1;
            case 140:
                var1 = 5000;
                var9 = var8 - var1;
                var1 = global;
                var8 = var1.isNaN;
                var8 = var8.bind(var2)(var9);
                if (!var8) {
                    _fun35526_ip = 172;
                    continue _fun35526
                }
            case 166:
                var9 = -5000;
            case 172:
                var8 = var3 == var6;
                var10 = undefined;
                if (var8) {
                    _fun35526_ip = 202;
                    continue _fun35526
                }
            case 181:
                var6 = var6.threadMetadata;
                var8 = var3 == var6;
                var10 = undefined;
                if (var8) {
                    _fun35526_ip = 202;
                    continue _fun35526
                }
            case 196:
                var10 = var6.archiveTimestamp;
            case 202:
                var3 = var3 != var10;
                var6 = 0;
                if (!var3) {
                    _fun35526_ip = 257;
                    continue _fun35526
                }
            case 211:
                var3 = var1.Date;
                var8 = var3.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var3
                    }
                });
                var13 = var8;
                var12 = var10;
                var3 = new var13[var3](var12, var11);
                var8 = var3 instanceof Object ? var3 : var8;
                var3 = var8.getTime;
                var8 = var3.bind(var8)();
                var3 = 1;
                var6 = var8 - var3;
            case 257:
                var3 = var1.isNaN;
                var3 = var3.bind(var2)(var6);
                var8 = var6;
                if (!var3) {
                    _fun35526_ip = 276;
                    continue _fun35526
                }
            case 274:
                var8 = 0;
            case 276:
                var6 = var1.Math;
                var3 = var6.max;
                var3 = var3.bind(var6)(var9, var8);
                if (!(var3 <= var0)) {
                    _fun35526_ip = 335;
                    continue _fun35526
                }
            case 297:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 40;
                var5 = var8[var5];
                var6 = var6.bind(var2)(var5);
                var5 = var6.extractTimestamp;
                var6 = var5.bind(var6)(var7);
                var5 = 1;
                var3 = var6 - var5;
            case 335:
                var5 = var1.isNaN;
                var5 = var5.bind(var2)(var3);
                if (var5) {
                    _fun35526_ip = 353;
                    continue _fun35526
                }
            case 349:
                var5 = var3 <= var0;
            case 353:
                if (!var5) {
                    _fun35526_ip = 358;
                    continue _fun35526
                }
            case 356:
                var3 = 0;
            case 358:
                var0 = var1.isNaN;
                var2 = var0.bind(var2)(var4);
                var0 = var3;
                if (var2) {
                    _fun35526_ip = 392;
                    continue _fun35526
                }
            case 375:
                var2 = var1.Math;
                var1 = var2.max;
                var0 = var1.bind(var2)(var4, var3);
            case 392:
                return var0;
        }
    };
    var _closure1_slot99 = var0;
    var0 = function arg0() {
        _fun35527: for (var _fun35527_ip = 0;;) switch (_fun35527_ip) {
            case 0:
                var0 = arg0;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun35527_ip = 198;
                    continue _fun35527
                }
            case 12:
                var1 = var0.joinedAt;
                if (!(var2 != var1)) {
                    _fun35527_ip = 198;
                    continue _fun35527
                }
            case 25:
                var3 = var0.joinedAt;
                var1 = global;
                var2 = var1.Date;
                var3 = var3 instanceof var2;
                var2 = var0.joinedAt;
                if (var3) {
                    _fun35527_ip = 170;
                    continue _fun35527
                }
            case 52:
                var4 = 'string';
                var3 = typeof var2;
                if (!(var4 !== var3)) {
                    _fun35527_ip = 110;
                    continue _fun35527
                }
            case 63:
                var3 = var0.joinedAt;
                var4 = 'number';
                var3 = typeof var3;
                if (!(var4 === var3)) {
                    _fun35527_ip = 198;
                    continue _fun35527
                }
            case 80:
                var5 = var1.isNaN;
                var4 = var0.joinedAt;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                if (var3) {
                    _fun35527_ip = 198;
                    continue _fun35527
                }
            case 102:
                var3 = var0.joinedAt;
                return var3;
            case 110:
                var4 = var1.Date;
                var6 = var0.joinedAt;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = var3;
                var0 = new var7[var4](var6, var5);
                var3 = var0 instanceof Object ? var0 : var3;
                var0 = var3.getTime;
                var0 = var0.bind(var3)();
                var4 = var1.isNaN;
                var3 = undefined;
                var3 = var4.bind(var3)(var0);
                if (var3) {
                    _fun35527_ip = 198;
                    continue _fun35527
                }
            case 168:
                return var0;
            case 170:
                var0 = var2.getTime;
                var0 = var0.bind(var2)();
                var2 = var1.isNaN;
                var1 = undefined;
                var1 = var2.bind(var1)(var0);
                if (var1) {
                    _fun35527_ip = 198;
                    continue _fun35527
                }
            case 196:
                return var0;
            case 198:
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot100 = var0;
    var0 = function arg0, arg1() {
        _fun35528: for (var _fun35528_ip = 0;;) switch (_fun35528_ip) {
            case 0:
                var4 = arg0;
                var8 = arg1;
                var0 = var4.mentionCount;
                var5 = 0;
                var0 = var0 > var5;
                if (var0) {
                    _fun35528_ip = 197;
                    continue _fun35528
                }
            case 24:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var10 = 40;
                var1 = var1[var10];
                var9 = undefined;
                var3 = var2.bind(var9)(var1);
                var2 = var3.compare;
                var1 = var4.channelId;
                var1 = var2.bind(var3)(var1, var8);
                var2 = var1 > var5;
                var1 = !var2;
                if (var2) {
                    _fun35528_ip = 194;
                    continue _fun35528
                }
            case 76:
                var2 = var4._ackMessageId;
                var7 = null;
                var3 = var7 != var2;
                if (!var3) {
                    _fun35528_ip = 130;
                    continue _fun35528
                }
            case 91:
                var11 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var12 = var11.bind(var9)(var2);
                var11 = var12.compare;
                var2 = var4._ackMessageId;
                var2 = var11.bind(var12)(var2, var8);
                var3 = var2 > var5;
            case 130:
                var2 = !var3;
                if (var3) {
                    _fun35528_ip = 191;
                    continue _fun35528
                }
            case 136:
                var3 = var4._lastMessageId;
                var3 = var7 != var3;
                if (!var3) {
                    _fun35528_ip = 188;
                    continue _fun35528
                }
            case 149:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var7 = var7.bind(var9)(var6);
                var6 = var7.compare;
                var4 = var4._lastMessageId;
                var4 = var6.bind(var7)(var4, var8);
                var3 = var4 > var5;
            case 188:
                var2 = !var3;
            case 191:
                var1 = var2;
            case 194:
                var0 = var1;
            case 197:
                return var0;
        }
    };
    var _closure1_slot101 = var0;
    var0 = function arg0, arg1() {
        _fun35529: for (var _fun35529_ip = 0;;) switch (_fun35529_ip) {
            case 0:
                var3 = arg1;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun35529_ip = 75;
                    continue _fun35529
                }
            case 9:
                var2 = _closure1_slot78;
                var1 = var2.get;
                var3 = var1.bind(var2)(var3);
                var1 = _closure1_slot94;
                var0 = undefined;
                var1 = var1.bind(var0)(var3);
                var0 = !var1;
                var0 = !var0;
                if (!var1) {
                    _fun35529_ip = 73;
                    continue _fun35529
                }
            case 46:
                var2 = var3.ack;
                var1 = {};
                var4 = true;
                var1.trackAnalytics = var4;
                var4 = arg0;
                var1.location = var4;
                var0 = var2.bind(var3)(var1);
            case 73:
                return var0;
            case 75:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot102 = var0;
    var0 = function arg0() {
        _fun35530: for (var _fun35530_ip = 0;;) switch (_fun35530_ip) {
            case 0:
                var5 = arg0;
                var2 = null;
                if (!(var2 != var5)) {
                    _fun35530_ip = 297;
                    continue _fun35530
                }
            case 14:
                var3 = _closure1_slot78;
                var0 = var3.get;
                var0 = var0.bind(var3)(var5);
                var5 = var0.type;
                var3 = _closure1_slot61;
                var3 = var3.CHANNEL;
                if (!(var5 === var3)) {
                    _fun35530_ip = 297;
                    continue _fun35530
                }
            case 53:
                var5 = _closure1_slot29;
                var3 = var5.getChannel;
                var0 = var0.channelId;
                var3 = var3.bind(var5)(var0);
                if (!(var2 != var3)) {
                    _fun35530_ip = 297;
                    continue _fun35530
                }
            case 79:
                var0 = var3.isForumPost;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun35530_ip = 297;
                    continue _fun35530
                }
            case 95:
                var0 = var3.parent_id;
                if (!(var2 != var0)) {
                    _fun35530_ip = 297;
                    continue _fun35530
                }
            case 108:
                var9 = var3.parent_id;
                var2 = _closure1_slot78;
                var0 = var2.get;
                var2 = var0.bind(var2)(var9);
                var _closure2_slot0 = var2;
                var6 = _closure1_slot19;
                var5 = var6.hasLoaded;
                var0 = var3.guild_id;
                var0 = var5.bind(var6)(var0);
                if (!var0) {
                    _fun35530_ip = 224;
                    continue _fun35530
                }
            case 155:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 40;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.keys;
                var8 = _closure1_slot19;
                var7 = var8.getThreadsForParent;
                var3 = var3.guild_id;
                var3 = var7.bind(var8)(var3, var9);
                var5 = var5.bind(var6)(var3);
                var3 = var5.every;
                var1 = function(arg0) { // Environment: var1
                    _fun35531: for (var _fun35531_ip = 0;;) switch (_fun35531_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = _closure1_slot80;
                            var0 = var2.hasOpenedThread;
                            var0 = var0.bind(var2)(var4);
                            if (var0) {
                                _fun35531_ip = 77;
                                continue _fun35531
                            }
                        case 24:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 40;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.compare;
                            var1 = _closure2_slot0;
                            var1 = var1.ackMessageId;
                            var2 = var2.bind(var3)(var4, var1);
                            var1 = 0;
                            var0 = var2 < var1;
                        case 77:
                            return var0;
                    }
                };
                var0 = var3.bind(var5)(var1);
            case 224:
                if (!var0) {
                    _fun35530_ip = 297;
                    continue _fun35530
                }
            case 227:
                var1 = var2.ack;
                var0 = {};
                var3 = true;
                var0.trackAnalytics = var3;
                var3 = {};
                var5 = _closure1_slot43;
                var5 = var5.CHANNEL;
                var3.section = var5;
                var5 = _closure1_slot42;
                var5 = var5.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS;
                var3.object = var5;
                var4 = _closure1_slot41;
                var4 = var4.ACK_AUTOMATIC;
                var3.objectType = var4;
                var0.location = var3;
                var0 = var1.bind(var2)(var0);
            case 297:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot103 = var0;
    var17 = function() {
        _fun35532: for (var _fun35532_ip = 0;;) switch (_fun35532_ip) {
            case 0:
                var2 = _closure1_slot71;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun35532_ip = 32;
                    continue _fun35532
                }
            case 13:
                var1 = global;
                var2 = var1.clearTimeout;
                var1 = _closure1_slot71;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 32:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot104 = var17;
    var0 = function arg0() {
        _fun35533: for (var _fun35533_ip = 0;;) switch (_fun35533_ip) {
            case 0:
                var2 = _closure1_slot82;
                var0 = undefined;
                var1 = arg0;
                var4 = var2.bind(var0)(var1);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = null;
                if (var1) {
                    _fun35533_ip = 123;
                    continue _fun35533
                }
            case 31:
                var1 = var2.value;
                var8 = _closure1_slot78;
                var7 = var8.get;
                var6 = var1.id;
                var6 = var7.bind(var8)(var6);
                var7 = var1.last_message_id;
                if (!(var3 != var7)) {
                    _fun35533_ip = 77;
                    continue _fun35533
                }
            case 65:
                var7 = var1.last_message_id;
                var6.lastMessageId = var7;
            case 77:
                var7 = var1.last_pin_timestamp;
                if (!(var3 != var7)) {
                    _fun35533_ip = 108;
                    continue _fun35533
                }
            case 87:
                var7 = _closure1_slot86;
                var1 = var1.last_pin_timestamp;
                var1 = var7.bind(var0)(var1);
                var6.lastPinTimestamp = var1;
            case 108:
                var6 = var4.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun35533_ip = 31;
                    continue _fun35533
                }
            case 123:
                return var0;
        }
    };
    var _closure1_slot105 = var0;
    var16 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot78;
        var0 = var1.get;
        var1 = var0.bind(var1)(var2);
        var0 = var1.rebuildChannelState;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var14 = function arg0() {
        var0 = arg0;
        var2 = var0.threads;
        var1 = _closure1_slot96;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var13 = function arg0() {
        var0 = arg0;
        var2 = var0.data;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var3 = var0.messages;
            var2 = var0.threads;
            var1 = var3.forEach;
            var0 = function(arg0) { // Environment: var0
                var4 = arg0;
                var2 = _closure1_slot96;
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.thread;
                    return var0;
                };
                var4 = var3.bind(var4)(var1);
                var3 = var4.filter;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 58;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var5.bind(var0)(var1);
                var1 = var1.isNotNullish;
                var1 = var3.bind(var4)(var1);
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var3)(var0);
            var1 = _closure1_slot96;
            var0 = undefined;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var0 = function arg0() {
        _fun35540: for (var _fun35540_ip = 0;;) switch (_fun35540_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot39;
                var0 = var1.getCurrentUser;
                var1 = var0.bind(var1)();
                var0 = var2.creator_id;
                var3 = null;
                var0 = var3 != var0;
                if (!var0) {
                    _fun35540_ip = 38;
                    continue _fun35540
                }
            case 34:
                var0 = var3 != var1;
            case 38:
                if (!var0) {
                    _fun35540_ip = 56;
                    continue _fun35540
                }
            case 41:
                var2 = var2.creator_id;
                var1 = var1.id;
                var0 = var2 === var1;
            case 56:
                return var0;
        }
    };
    var _closure1_slot106 = var0;
    var12 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var2 = _closure1_slot78;
        var1 = var2.clear;
        var0 = var0.id;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0 = function() {
        _fun35542: for (var _fun35542_ip = 0;;) switch (_fun35542_ip) {
            case 0:
                var2 = _closure1_slot28;
                var1 = var2.getCurrentSidebarChannelId;
                var0 = _closure1_slot65;
                var2 = var1.bind(var2)(var0);
                var0 = _closure1_slot66;
                if (!(var0 === var2)) {
                    _fun35542_ip = 95;
                    continue _fun35542
                }
            case 30:
                var4 = _closure1_slot102;
                var1 = {};
                var0 = _closure1_slot43;
                var0 = var0.CHANNEL;
                var1.section = var0;
                var0 = _closure1_slot42;
                var0 = var0.ACK_CHANNEL_SECTION_STORE_UPDATE;
                var1.object = var0;
                var0 = _closure1_slot41;
                var0 = var0.ACK_AUTOMATIC;
                var1.objectType = var0;
                var0 = undefined;
                var0 = var4.bind(var0)(var1, var2);
                if (var0) {
                    _fun35542_ip = 93;
                    continue _fun35542
                }
            case 91:
                var0 = false;
            case 93:
                _fun35542_ip = 114;
                continue _fun35542;
            case 95:
                var5 = _closure1_slot109;
                var4 = _closure1_slot66;
                var1 = undefined;
                var0 = var5.bind(var1)(var4);
                _closure1_slot66 = var2;
            case 114:
                return var0;
        }
    };
    var _closure1_slot107 = var0;
    var0 = function arg0() {
        _fun35543: for (var _fun35543_ip = 0;;) switch (_fun35543_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun35543_ip = 34;
                    continue _fun35543
                }
            case 9:
                var1 = _closure1_slot78;
                var0 = var1.get;
                var1 = var0.bind(var1)(var2);
                var0 = false;
                var1.isManualAck = var0;
            case 34:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot108 = var0;
    var0 = function arg0() {
        _fun35544: for (var _fun35544_ip = 0;;) switch (_fun35544_ip) {
            case 0:
                var3 = arg0;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun35544_ip = 52;
                    continue _fun35544
                }
            case 9:
                var1 = _closure1_slot78;
                var0 = var1.get;
                var1 = var0.bind(var1)(var3);
                var0 = var1.hasUnread;
                var0 = var0.bind(var1)();
                var0 = !var0;
                if (!var0) {
                    _fun35544_ip = 50;
                    continue _fun35544
                }
            case 42:
                var1.oldestUnreadMessageId = var2;
                var0 = true;
            case 50:
                return var0;
            case 52:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot109 = var0;
    var15 = function arg0() {
        _fun35545: for (var _fun35545_ip = 0;;) switch (_fun35545_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.channelId;
                var5 = var1.messageId;
                var0 = var1.manual;
                var4 = var1.newMentionCount;
                var2 = _closure1_slot78;
                var1 = var2.get;
                var3 = var1.bind(var2)(var3);
                if (var0) {
                    _fun35545_ip = 91;
                    continue _fun35545
                }
            case 45:
                var0 = var3._ackMessageId;
                var0 = var5 !== var0;
                if (!var0) {
                    _fun35545_ip = 89;
                    continue _fun35545
                }
            case 58:
                var2 = var3.ack;
                var1 = {
                    'messageId': null,
                    'local': true,
                    'trackAnalytics': false
                };
                var1.messageId = var5;
                var0 = var2.bind(var3)(var1);
            case 89:
                _fun35545_ip = 118;
                continue _fun35545;
            case 91:
                var2 = var3.rebuildChannelState;
                var1 = true;
                var2 = var2.bind(var3)(var5, var1, var4);
                var2 = var3.clearOutgoingAck;
                var2 = var2.bind(var3)();
                var0 = true;
            case 118:
                return var0;
        }
    };
    var _closure1_slot110 = var15;
    var11 = function arg0() {
        var0 = arg0;
        var9 = var0.id;
        var8 = var0.ackType;
        var7 = var0.ackedId;
        var6 = var0.local;
        var1 = _closure1_slot112;
        var10 = undefined;
        var0 = var10[var1](var9, var8, var7, var6, var5);
        return var0;
    };
    var _closure1_slot111 = var11;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun35547: for (var _fun35547_ip = 0;;) switch (_fun35547_ip) {
            case 0:
                var7 = arg2;
                var6 = arg3;
                var4 = _closure1_slot78;
                var3 = var4.get;
                var1 = arg0;
                var0 = arg1;
                var4 = var3.bind(var4)(var1, var0);
                var0 = var4.ackMessageId;
                var0 = var7 !== var0;
                if (!var0) {
                    _fun35547_ip = 59;
                    continue _fun35547
                }
            case 43:
                var3 = var4.lastMessageId;
                var1 = var4.ackMessageId;
                var0 = var3 !== var1;
            case 59:
                if (!var0) {
                    _fun35547_ip = 194;
                    continue _fun35547
                }
            case 65:
                var1 = var4.lastMessageId;
                var5 = null;
                var1 = var5 != var1;
                if (var1) {
                    _fun35547_ip = 92;
                    continue _fun35547
                }
            case 80:
                var8 = var4.mentionCount;
                var3 = 0;
                var1 = var3 !== var8;
            case 92:
                if (!var1) {
                    _fun35547_ip = 191;
                    continue _fun35547
                }
            case 95:
                if (!(var5 == var7)) {
                    _fun35547_ip = 105;
                    continue _fun35547
                }
            case 99:
                var7 = var4.lastMessageId;
            case 105:
                if (!(var5 == var7)) {
                    _fun35547_ip = 152;
                    continue _fun35547
                }
            case 109:
                var8 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 40;
                var3 = var3[var2];
                var2 = undefined;
                var8 = var8.bind(var2)(var3);
                var3 = var8.fromTimestamp;
                var2 = var4.getAckTimestamp;
                var2 = var2.bind(var4)();
                var7 = var3.bind(var8)(var2);
            case 152:
                var3 = var4.ack;
                var2 = {};
                var2.messageId = var7;
                var5 = var5 == var6;
                if (var5) {
                    _fun35547_ip = 174;
                    continue _fun35547
                }
            case 171:
                var5 = var6;
            case 174:
                var2.local = var5;
                var5 = false;
                var2.trackAnalytics = var5;
                var1 = var3.bind(var4)(var2);
            case 191:
                var0 = var1;
            case 194:
                return var0;
        }
    };
    var _closure1_slot112 = var0;
    var10 = global;
    var18 = var10.Object;
    var4 = var18.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var18)(var2, var0, var1);
    var18 = 0;
    var1 = var7[var18];
    var0 = undefined;
    var1 = var9.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var21 = 1;
    var1 = var7[var21];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var20 = 2;
    var1 = var7[var20];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var19 = 4;
    var1 = var7[var19];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 11;
    var4 = var7[var1];
    var4 = var9.bind(var0)(var4);
    var _closure1_slot14 = var4;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.isEventUpcoming;
    var _closure1_slot15 = var1;
    var1 = 12;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot16 = var1;
    var1 = 13;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot17 = var1;
    var1 = 14;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot18 = var1;
    var1 = 15;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot19 = var1;
    var1 = 16;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot20 = var1;
    var1 = 17;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot21 = var1;
    var1 = 18;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var4 = var1.isReadableType;
    var _closure1_slot22 = var4;
    var4 = var1.isThread;
    var _closure1_slot23 = var4;
    var4 = var1.isPrivate;
    var _closure1_slot24 = var4;
    var4 = var1.ALL_CHANNEL_TYPES;
    var _closure1_slot25 = var4;
    var1 = var1.THREAD_CHANNEL_TYPES;
    var _closure1_slot26 = var1;
    var1 = 19;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot27 = var1;
    var1 = 20;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot28 = var1;
    var1 = 21;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot29 = var1;
    var1 = 22;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot30 = var1;
    var1 = 23;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot31 = var1;
    var1 = 24;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot32 = var1;
    var1 = 25;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot33 = var1;
    var1 = 26;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot34 = var1;
    var1 = 27;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot35 = var1;
    var1 = 28;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot36 = var1;
    var1 = 29;
    var1 = var7[var1];
    var22 = var9.bind(var0)(var1);
    var _closure1_slot37 = var22;
    var23 = 30;
    var1 = var7[var23];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot38 = var1;
    var1 = 31;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot39 = var1;
    var1 = 32;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot40 = var1;
    var1 = 33;
    var1 = var7[var1];
    var4 = var6.bind(var0)(var1);
    var1 = var4.AnalyticsObjectTypes;
    var _closure1_slot41 = var1;
    var1 = var4.AnalyticsObjects;
    var _closure1_slot42 = var1;
    var1 = var4.AnalyticsSections;
    var _closure1_slot43 = var1;
    var1 = var4.Endpoints;
    var _closure1_slot44 = var1;
    var1 = var4.ChannelLayouts;
    var _closure1_slot45 = var1;
    var1 = var4.OverlayWidgets;
    var1 = var4.CURRENT_APP_CONTEXT;
    var _closure1_slot46 = var1;
    var1 = var4.ChannelTypes;
    var _closure1_slot47 = var1;
    var1 = var4.BasicPermissions;
    var _closure1_slot48 = var1;
    var24 = var4.Permissions;
    var _closure1_slot49 = var24;
    var24 = var4.MessageTypes;
    var _closure1_slot50 = var24;
    var24 = var4.RelationshipTypes;
    var _closure1_slot51 = var24;
    var24 = var4.ChannelTypesSets;
    var _closure1_slot52 = var24;
    var24 = var4.UserNotificationSettings;
    var _closure1_slot53 = var24;
    var24 = var4.MessageTypesSets;
    var _closure1_slot54 = var24;
    var4 = var4.AppStates;
    var _closure1_slot55 = var4;
    var4 = 34;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var24 = var4.ActivityPanelModes;
    var _closure1_slot56 = var24;
    var4 = var4.FocusedActivityLayouts;
    var _closure1_slot57 = var4;
    var4 = 35;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var24 = var4.ChannelFlags;
    var _closure1_slot58 = var24;
    var4 = var4.isStaticChannelRoute;
    var _closure1_slot59 = var4;
    var4 = 36;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.GuildScheduledEventStatus;
    var _closure1_slot60 = var4;
    var4 = 37;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.ReadStateTypes;
    var _closure1_slot61 = var4;
    var4 = 38;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.ThreadMemberFlags;
    var _closure1_slot62 = var4;
    var4 = 39;
    var4 = var7[var4];
    var24 = var9.bind(var0)(var4);
    var4 = var24.prototype;
    var25 = Object.create(var4, {
        constructor: {
            value: var24
        }
    });
    var4 = 'ReadStateStore';
    var29 = var25;
    var28 = var4;
    var24 = new var29[var24](var28, var27);
    var24 = var24 instanceof Object ? var24 : var25;
    var _closure1_slot63 = var24;
    var24 = var1.VIEW_CHANNEL;
    var1 = var1.READ_MESSAGE_HISTORY;
    var1 = var24 | var1;
    var _closure1_slot64 = var1;
    var1 = var22.getChannelId;
    var1 = var1.bind(var22)();
    var _closure1_slot65 = var1;
    var1 = null;
    var _closure1_slot66 = var1;
    var _closure1_slot67 = var1;
    var22 = false;
    var _closure1_slot68 = var22;
    var24 = new Array(0);
    var _closure1_slot69 = var24;
    var _closure1_slot70 = var22;
    var _closure1_slot71 = var1;
    var22 = function() { // Environment: var5
        var3 = _closure1_slot9;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot8;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = {};
            var2.channelWindowIds = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'addWindowId';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun35550: for (var _fun35550_ip = 0;;) switch (_fun35550_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0.channelWindowIds;
                    var3 = var2[var1];
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun35550_ip = 60;
                        continue _fun35550
                    }
                case 22:
                    var3 = var0.channelWindowIds;
                    var2 = global;
                    var2 = var2.Set;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = var4;
                    var2 = new var6[var2](var5);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var3[var1] = var2;
                case 60:
                    var0 = var0.channelWindowIds;
                    var2 = var0[var1];
                    var1 = var2.add;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(8);
        var1[0] = var0;
        var0 = {};
        var5 = 'hasWindowId';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun35551: for (var _fun35551_ip = 0;;) switch (_fun35551_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var1.channelWindowIds;
                    var3 = var0[var2];
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun35551_ip = 48;
                        continue _fun35551
                    }
                case 25:
                    var1 = var1.channelWindowIds;
                    var3 = var1[var2];
                    var2 = var3.has;
                    var1 = arg1;
                    var0 = var2.bind(var3)(var1);
                case 48:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isChannelAckable';
        var0.key = var5;
        var5 = function arg0() {
            _fun35552: for (var _fun35552_ip = 0;;) switch (_fun35552_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var1.channelWindowIds;
                    var3 = var0[var2];
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun35552_ip = 46;
                        continue _fun35552
                    }
                case 25:
                    var1 = var1.channelWindowIds;
                    var1 = var1[var2];
                    var2 = var1.size;
                    var1 = 0;
                    var0 = var2 > var1;
                case 46:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getAllWindowIds';
        var0.key = var5;
        var5 = function arg0() {
            _fun35553: for (var _fun35553_ip = 0;;) switch (_fun35553_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var1 = var0.channelWindowIds;
                    var2 = var1[var3];
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun35553_ip = 52;
                        continue _fun35553
                    }
                case 22:
                    var1 = global;
                    var2 = var1.Array;
                    var1 = var2.from;
                    var0 = var0.channelWindowIds;
                    var0 = var0[var3];
                    var0 = var1.bind(var2)(var0);
                    _fun35553_ip = 56;
                    continue _fun35553;
                case 52:
                    var0 = new Array(0);
                case 56:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getAllChannelIdsForWindowId';
        var0.key = var5;
        var5 = function arg0() {
            _fun35554: for (var _fun35554_ip = 0;;) switch (_fun35554_ip) {
                case 0:
                    var10 = arg0;
                    var0 = global;
                    var1 = var0.Set;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var15 = var2;
                    var1 = new var15[var1](var14);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var3 = _closure1_slot82;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 40;
                    var1 = var5[var1];
                    var8 = undefined;
                    var5 = var4.bind(var8)(var1);
                    var4 = var5.entries;
                    var1 = this;
                    var1 = var1.channelWindowIds;
                    var1 = var4.bind(var5)(var1);
                    var7 = var3.bind(var8)(var1);
                    var3 = var7.bind(var8)();
                    var1 = var3.done;
                    var6 = 2;
                    var5 = 0;
                    var4 = 1;
                    if (var1) {
                        _fun35554_ip = 166;
                        continue _fun35554
                    }
                case 105:
                    var11 = var3.value;
                    var1 = _closure1_slot7;
                    var1 = var1.bind(var8)(var11, var6);
                    var11 = var1[var5];
                    var12 = var1[var4];
                    var1 = var12.has;
                    var1 = var1.bind(var12)(var10);
                    if (!var1) {
                        _fun35554_ip = 151;
                        continue _fun35554
                    }
                case 141:
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var11);
                case 151:
                    var11 = var7.bind(var8)();
                    var1 = var11.done;
                    var3 = var11;
                    if (!var1) {
                        _fun35554_ip = 105;
                        continue _fun35554
                    }
                case 166:
                    var1 = var0.Array;
                    var0 = var1.from;
                    var0 = var0.bind(var1)(var2);
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'isAnyWindowFocused';
        var0.key = var5;
        var5 = function arg0() {
            _fun35555: for (var _fun35555_ip = 0;;) switch (_fun35555_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.channelWindowIds;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun35555_ip = 96;
                        continue _fun35555
                    }
                case 22:
                    var0 = _closure1_slot82;
                    var3 = undefined;
                    var2 = var0.bind(var3)(var1);
                    var1 = var2.bind(var3)();
                    var0 = var1.done;
                    if (var0) {
                        _fun35555_ip = 92;
                        continue _fun35555
                    }
                case 48:
                    var6 = var1.value;
                    var5 = _closure1_slot40;
                    var0 = var5.isFocused;
                    var0 = var0.bind(var5)(var6);
                    if (var0) {
                        _fun35555_ip = 88;
                        continue _fun35555
                    }
                case 71:
                    var5 = var2.bind(var3)();
                    var0 = var5.done;
                    var1 = var5;
                    if (var0) {
                        _fun35555_ip = 92;
                        continue _fun35555
                    }
                case 86:
                    _fun35555_ip = 48;
                    continue _fun35555;
                case 88:
                    var0 = true;
                    return var0;
                case 92:
                    var0 = false;
                    return var0;
                case 96:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'removeWindowId';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun35556: for (var _fun35556_ip = 0;;) switch (_fun35556_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0.channelWindowIds;
                    var3 = var2[var1];
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun35556_ip = 76;
                        continue _fun35556
                    }
                case 22:
                    var2 = var0.channelWindowIds;
                    var4 = var2[var1];
                    var3 = var4.delete;
                    var2 = arg1;
                    var2 = var3.bind(var4)(var2);
                    var2 = var0.channelWindowIds;
                    var2 = var2[var1];
                    var3 = var2.size;
                    var2 = 0;
                    if (!(var2 === var3)) {
                        _fun35556_ip = 76;
                        continue _fun35556
                    }
                case 66:
                    var0 = var0.channelWindowIds;
                    var0 = delete var0[var1];
                case 76:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'forEachChannel';
        var0.key = var5;
        var4 = function arg0() {
            _fun35557: for (var _fun35557_ip = 0;;) switch (_fun35557_ip) {
                case 0:
                    var8 = arg0;
                    var2 = _closure1_slot82;
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 40;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var1);
                    var3 = var4.entries;
                    var1 = this;
                    var1 = var1.channelWindowIds;
                    var1 = var3.bind(var4)(var1);
                    var6 = var2.bind(var0)(var1);
                    var2 = var6.bind(var0)();
                    var1 = var2.done;
                    var5 = 2;
                    var4 = 0;
                    var3 = 1;
                    if (var1) {
                        _fun35557_ip = 121;
                        continue _fun35557
                    }
                case 77:
                    var9 = var2.value;
                    var1 = _closure1_slot7;
                    var1 = var1.bind(var0)(var9, var5);
                    var9 = var1[var4];
                    var1 = var1[var3];
                    var1 = var8.bind(var0)(var9, var1);
                    var9 = var6.bind(var0)();
                    var1 = var9.done;
                    var2 = var9;
                    if (!var1) {
                        _fun35557_ip = 77;
                        continue _fun35557
                    }
                case 121:
                    return var0;
            }
        };
        var0.value = var4;
        var1[7] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var22 = var22.bind(var0)();
    var24 = var22.prototype;
    var24 = Object.create(var24, {
        constructor: {
            value: var22
        }
    });
    var29 = var24;
    var22 = new var29[var22](var28);
    var22 = var22 instanceof Object ? var22 : var24;
    var _closure1_slot72 = var22;
    var22 = 41;
    var22 = var7[var22];
    var22 = var9.bind(var0)(var22);
    var22 = var22.Millis;
    var22 = var22.DAY;
    var22 = var23 * var22;
    var _closure1_slot73 = var22;
    var _closure1_slot74 = var18;
    var _closure1_slot75 = var18;
    var _closure1_slot76 = var1;
    var1 = {};
    var1.IS_GUILD_CHANNEL = var21;
    var18 = 'IS_GUILD_CHANNEL';
    var1[var21] = var18;
    var1.IS_THREAD = var20;
    var18 = 'IS_THREAD';
    var1[var20] = var18;
    var1.IS_MENTION_LOW_IMPORTANCE = var19;
    var18 = 'IS_MENTION_LOW_IMPORTANCE';
    var1[var19] = var18;
    var _closure1_slot77 = var1;
    var1 = function() { // Environment: var5
        var4 = function arg0() {
            _fun35559: for (var _fun35559_ip = 0;;) switch (_fun35559_ip) {
                case 0:
                    var3 = arguments[1];
                    var2 = this;
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun35559_ip = 25;
                        continue _fun35559
                    }
                case 12:
                    var1 = _closure1_slot61;
                    var3 = var1.CHANNEL;
                case 25:
                    var5 = _closure1_slot8;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var0)(var2, var4);
                    var1 = _closure1_slot61;
                    var1 = var1.CHANNEL;
                    var2.type = var1;
                    var1 = null;
                    var2.outgoingAckTimer = var1;
                    var2.ackMessageIdAtChannelSelect = var1;
                    var2.ackedWhileCached = var0;
                    var4 = arg0;
                    var2.channelId = var4;
                    var2.type = var3;
                    var2._guildId = var1;
                    var4 = false;
                    var2._isThread = var4;
                    var2._isActiveThread = var4;
                    var2._isJoinedThread = var4;
                    var2._isResourceChannel = var4;
                    var2._persisted = var4;
                    var2.loadedMessages = var4;
                    var2._lastMessageId = var1;
                    var3 = 0;
                    var2._lastMessageTimestamp = var3;
                    var2._ackMessageId = var1;
                    var2._ackMessageTimestamp = var3;
                    var2.isManualAck = var4;
                    var2.ackPinTimestamp = var3;
                    var2.lastPinTimestamp = var3;
                    var2._oldestUnreadMessageId = var1;
                    var2.oldestUnreadMessageIdStale = var4;
                    var2.estimated = var4;
                    var2._unreadCount = var3;
                    var2._mentionCount = var3;
                    var2.outgoingAck = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot9;
        var0 = {};
        var1 = 'serialize';
        var0.key = var1;
        var1 = function arg0() {
            _fun35560: for (var _fun35560_ip = 0;;) switch (_fun35560_ip) {
                case 0:
                    var0 = this;
                    var21 = var0.channelId;
                    var20 = var0.type;
                    var19 = var0._guildId;
                    var18 = var0._isThread;
                    var17 = var0._isActiveThread;
                    var16 = var0._isJoinedThread;
                    var15 = var0._persisted;
                    var14 = var0.loadedMessages;
                    var13 = var0._lastMessageId;
                    var12 = var0._lastMessageTimestamp;
                    var11 = var0._ackMessageId;
                    var10 = var0._ackMessageTimestamp;
                    var9 = var0.ackPinTimestamp;
                    var8 = var0.isManualAck;
                    var7 = var0.lastPinTimestamp;
                    var6 = var0._oldestUnreadMessageId;
                    var5 = var0.oldestUnreadMessageIdStale;
                    var4 = var0.estimated;
                    var3 = var0._mentionCount;
                    var2 = var0.flags;
                    var1 = var0.lastViewed;
                    var0 = arg0;
                    if (var0) {
                        _fun35560_ip = 238;
                        continue _fun35560
                    }
                case 132:
                    var0 = {};
                    var0.channelId = var21;
                    var0.type = var20;
                    var0._guildId = var19;
                    var0._persisted = var15;
                    var0._lastMessageId = var13;
                    var0._lastMessageTimestamp = var12;
                    var0._ackMessageId = var11;
                    var0._ackMessageTimestamp = var10;
                    var0.ackPinTimestamp = var9;
                    var0.lastPinTimestamp = var7;
                    var0._mentionCount = var3;
                    var0.flags = var2;
                    var22 = null;
                    var22 = var22 != var1;
                    if (!var22) {
                        _fun35560_ip = 206;
                        continue _fun35560
                    }
                case 200:
                    var23 = 0;
                    var22 = var1 > var23;
                case 206:
                    if (!var22) {
                        _fun35560_ip = 215;
                        continue _fun35560
                    }
                case 209:
                    var0.lastViewed = var1;
                case 215:
                    if (!var18) {
                        _fun35560_ip = 236;
                        continue _fun35560
                    }
                case 218:
                    var0._isThread = var18;
                    var0._isActiveThread = var17;
                    var0._isJoinedThread = var16;
                case 236:
                    return var0;
                case 238:
                    var0 = {};
                    var0.channelId = var21;
                    var0.type = var20;
                    var0._guildId = var19;
                    var0._isThread = var18;
                    var0._isActiveThread = var17;
                    var0._isJoinedThread = var16;
                    var0._persisted = var15;
                    var0.loadedMessages = var14;
                    var0._lastMessageId = var13;
                    var0._lastMessageTimestamp = var12;
                    var0._ackMessageId = var11;
                    var0._ackMessageTimestamp = var10;
                    var0.ackPinTimestamp = var9;
                    var0.isManualAck = var8;
                    var0.lastPinTimestamp = var7;
                    var0._oldestUnreadMessageId = var6;
                    var0.oldestUnreadMessageIdStale = var5;
                    var0.estimated = var4;
                    var0._mentionCount = var3;
                    var0.flags = var2;
                    var0.lastViewed = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var2 = new Array(39);
        var2[0] = var0;
        var0 = {};
        var1 = 'deserializeForOverlay';
        var0.key = var1;
        var1 = function arg0() {
            _fun35561: for (var _fun35561_ip = 0;;) switch (_fun35561_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var3 = var1.channelId;
                    var23 = var1.type;
                    var19 = var1._guildId;
                    var22 = var1._isThread;
                    var16 = var1._isActiveJoinedThread;
                    var21 = var1._isActiveThread;
                    var20 = var1._isJoinedThread;
                    var18 = var1._persisted;
                    var17 = var1.loadedMessages;
                    var15 = var1._lastMessageId;
                    var14 = var1._lastMessageTimestamp;
                    var13 = var1._ackMessageId;
                    var12 = var1._ackMessageTimestamp;
                    var10 = var1.ackPinTimestamp;
                    var11 = var1.isManualAck;
                    var9 = var1.lastPinTimestamp;
                    var5 = var1._oldestUnreadMessageId;
                    var8 = var1.oldestUnreadMessageIdStale;
                    var7 = var1.estimated;
                    var6 = var1._unreadCount;
                    var4 = var1._mentionCount;
                    var2 = var1.flags;
                    var1 = var1.lastViewed;
                    var0.channelId = var3;
                    var3 = null;
                    if (!(var3 == var23)) {
                        _fun35561_ip = 168;
                        continue _fun35561
                    }
                case 155:
                    var24 = _closure1_slot61;
                    var23 = var24.CHANNEL;
                case 168:
                    var0.type = var23;
                    var0._guildId = var19;
                    var19 = var3 != var22;
                    if (!var19) {
                        _fun35561_ip = 190;
                        continue _fun35561
                    }
                case 187:
                    var19 = var22;
                case 190:
                    var0._isThread = var19;
                    if (!(var3 == var16)) {
                        _fun35561_ip = 234;
                        continue _fun35561
                    }
                case 200:
                    var19 = var3 != var21;
                    if (!var19) {
                        _fun35561_ip = 210;
                        continue _fun35561
                    }
                case 207:
                    var19 = var21;
                case 210:
                    var0._isActiveThread = var19;
                    var19 = var3 != var20;
                    if (!var19) {
                        _fun35561_ip = 226;
                        continue _fun35561
                    }
                case 223:
                    var19 = var20;
                case 226:
                    var0._isJoinedThread = var19;
                    _fun35561_ip = 246;
                    continue _fun35561;
                case 234:
                    var0._isActiveThread = var16;
                    var0._isJoinedThread = var16;
                case 246:
                    var16 = false;
                    var16 = var16 !== var18;
                    var0._persisted = var16;
                    var16 = var3 != var17;
                    if (!var16) {
                        _fun35561_ip = 268;
                        continue _fun35561
                    }
                case 265:
                    var16 = var17;
                case 268:
                    var0.loadedMessages = var16;
                    var0._lastMessageId = var15;
                    var0._lastMessageTimestamp = var14;
                    var0._ackMessageId = var13;
                    var0._ackMessageTimestamp = var12;
                    var0.ackPinTimestamp = var10;
                    var10 = var3 != var11;
                    if (!var10) {
                        _fun35561_ip = 314;
                        continue _fun35561
                    }
                case 311:
                    var10 = var11;
                case 314:
                    var0.isManualAck = var10;
                    var0.lastPinTimestamp = var9;
                    var0._oldestUnreadMessageId = var5;
                    var5 = var3 != var8;
                    if (!var5) {
                        _fun35561_ip = 342;
                        continue _fun35561
                    }
                case 339:
                    var5 = var8;
                case 342:
                    var0.oldestUnreadMessageIdStale = var5;
                    var5 = var3 != var7;
                    if (!var5) {
                        _fun35561_ip = 358;
                        continue _fun35561
                    }
                case 355:
                    var5 = var7;
                case 358:
                    var0.estimated = var5;
                    var7 = var3 != var6;
                    var3 = 0;
                    var5 = 0;
                    if (!var7) {
                        _fun35561_ip = 378;
                        continue _fun35561
                    }
                case 375:
                    var5 = var6;
                case 378:
                    var0._unreadCount = var5;
                    var0._mentionCount = var4;
                    var0.flags = var2;
                    var0.lastViewed = var1;
                    var2 = _closure2_slot0;
                    var5 = var2._mentionChannels;
                    var4 = var5.delete;
                    var2 = var0.channelId;
                    var2 = var4.bind(var5)(var2);
                    var2 = var0._mentionCount;
                    var2 = var2 > var3;
                    if (!var2) {
                        _fun35561_ip = 453;
                        continue _fun35561
                    }
                case 443:
                    var3 = var0.canHaveMentions;
                    var2 = var3.bind(var0)();
                case 453:
                    if (!var2) {
                        _fun35561_ip = 481;
                        continue _fun35561
                    }
                case 456:
                    var1 = _closure2_slot0;
                    var2 = var1._mentionChannels;
                    var1 = var2.add;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                case 481:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var2[1] = var0;
        var0 = {};
        var1 = 'incrementGuildUnreadsSentinel';
        var0.key = var1;
        var1 = function() {
            _fun35562: for (var _fun35562_ip = 0;;) switch (_fun35562_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._guildId;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun35562_ip = 54;
                        continue _fun35562
                    }
                case 15:
                    var2 = _closure2_slot0;
                    var1 = var2.getGuildSentinels;
                    var0 = var0._guildId;
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.unreadsSentinel;
                    var0 = var0 + 1;
                    var1.unreadsSentinel = var0;
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var2[2] = var0;
        var0 = {};
        var1 = 'oldestUnreadMessageId';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._oldestUnreadMessageId;
            return var0;
        };
        var0.get = var1;
        var1 = function arg0() {
            var1 = this;
            var0 = arg0;
            var1._oldestUnreadMessageId = var0;
            var0 = false;
            var1.oldestUnreadMessageIdStale = var0;
            var0 = undefined;
            return var0;
        };
        var0.set = var1;
        var2[3] = var0;
        var0 = {};
        var1 = 'lastMessageId';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._lastMessageId;
            return var0;
        };
        var0.get = var1;
        var1 = function arg0() {
            _fun35566: for (var _fun35566_ip = 0;;) switch (_fun35566_ip) {
                case 0:
                    var4 = arg0;
                    var1 = this;
                    var1._lastMessageId = var4;
                    var0 = null;
                    var2 = var0 != var4;
                    var0 = 0;
                    if (!var2) {
                        _fun35566_ip = 59;
                        continue _fun35566
                    }
                case 23:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 40;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.extractTimestamp;
                    var0 = var2.bind(var3)(var4);
                case 59:
                    var1._lastMessageTimestamp = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.set = var1;
        var2[4] = var0;
        var0 = {};
        var1 = 'lastMessageTimestamp';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._lastMessageTimestamp;
            return var0;
        };
        var0.get = var1;
        var2[5] = var0;
        var0 = {};
        var1 = 'ackMessageId';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._ackMessageId;
            return var0;
        };
        var0.get = var1;
        var1 = function arg0() {
            _fun35569: for (var _fun35569_ip = 0;;) switch (_fun35569_ip) {
                case 0:
                    var4 = arg0;
                    var1 = this;
                    var1._ackMessageId = var4;
                    var0 = null;
                    var2 = var0 != var4;
                    var0 = 0;
                    if (!var2) {
                        _fun35569_ip = 59;
                        continue _fun35569
                    }
                case 23:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 40;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.extractTimestamp;
                    var0 = var2.bind(var3)(var4);
                case 59:
                    var1._ackMessageTimestamp = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.set = var1;
        var2[6] = var0;
        var0 = {};
        var1 = 'unreadCount';
        var0.key = var1;
        var1 = function() {
            _fun35570: for (var _fun35570_ip = 0;;) switch (_fun35570_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._unreadCount;
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun35570_ip = 23;
                        continue _fun35570
                    }
                case 20:
                    var0 = var1;
                case 23:
                    return var0;
            }
        };
        var0.get = var1;
        var1 = function arg0() {
            _fun35571: for (var _fun35571_ip = 0;;) switch (_fun35571_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var3 = var1._unreadCount;
                    var0 = undefined;
                    var3 = var0 !== var3;
                    if (!var3) {
                        _fun35571_ip = 33;
                        continue _fun35571
                    }
                case 21:
                    var5 = var1._unreadCount;
                    var4 = 0;
                    var3 = var4 !== var5;
                case 33:
                    if (!var3) {
                        _fun35571_ip = 42;
                        continue _fun35571
                    }
                case 36:
                    var4 = 0;
                    var3 = var4 !== var2;
                case 42:
                    if (var3) {
                        _fun35571_ip = 55;
                        continue _fun35571
                    }
                case 45:
                    var3 = var1.incrementGuildUnreadsSentinel;
                    var3 = var3.bind(var1)();
                case 55:
                    var1._unreadCount = var2;
                    return var0;
            }
        };
        var0.set = var1;
        var2[7] = var0;
        var0 = {};
        var1 = 'mentionCount';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._mentionCount;
            return var0;
        };
        var0.get = var1;
        var1 = function arg0() {
            _fun35573: for (var _fun35573_ip = 0;;) switch (_fun35573_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0._mentionCount;
                    var3 = 0;
                    var2 = var3 !== var2;
                    if (!var2) {
                        _fun35573_ip = 25;
                        continue _fun35573
                    }
                case 21:
                    var2 = var3 !== var1;
                case 25:
                    if (var2) {
                        _fun35573_ip = 38;
                        continue _fun35573
                    }
                case 28:
                    var4 = var0._mentionCount;
                    var2 = var4 === var1;
                case 38:
                    if (var2) {
                        _fun35573_ip = 51;
                        continue _fun35573
                    }
                case 41:
                    var2 = var0.incrementGuildUnreadsSentinel;
                    var2 = var2.bind(var0)();
                case 51:
                    var0._mentionCount = var1;
                    var2 = _closure2_slot0;
                    var5 = var2._mentionChannels;
                    var4 = var5.delete;
                    var2 = var0.channelId;
                    var2 = var4.bind(var5)(var2);
                    var2 = var0._mentionCount;
                    var2 = var2 > var3;
                    if (!var2) {
                        _fun35573_ip = 108;
                        continue _fun35573
                    }
                case 98:
                    var3 = var0.canHaveMentions;
                    var2 = var3.bind(var0)();
                case 108:
                    if (!var2) {
                        _fun35573_ip = 136;
                        continue _fun35573
                    }
                case 111:
                    var1 = _closure2_slot0;
                    var2 = var1._mentionChannels;
                    var1 = var2.add;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                case 136:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.set = var1;
        var2[8] = var0;
        var0 = {};
        var1 = 'isMentionLowImportance';
        var0.key = var1;
        var1 = function() {
            _fun35574: for (var _fun35574_ip = 0;;) switch (_fun35574_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.flags;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun35574_ip = 49;
                        continue _fun35574
                    }
                case 17:
                    var3 = var1.flags;
                    var1 = _closure1_slot77;
                    var2 = var1.IS_MENTION_LOW_IMPORTANCE;
                    var2 = var3 & var2;
                    var1 = var1.IS_MENTION_LOW_IMPORTANCE;
                    var0 = var2 === var1;
                case 49:
                    return var0;
            }
        };
        var0.get = var1;
        var1 = function arg0() {
            _fun35575: for (var _fun35575_ip = 0;;) switch (_fun35575_ip) {
                case 0:
                    var1 = this;
                    var0 = arg0;
                    if (var0) {
                        _fun35575_ip = 70;
                        continue _fun35575
                    }
                case 9:
                    var2 = var1.flags;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun35575_ip = 34;
                        continue _fun35575
                    }
                case 23:
                    var3 = var1.flags;
                    var2 = 0;
                    var0 = var2 !== var3;
                case 34:
                    if (!var0) {
                        _fun35575_ip = 124;
                        continue _fun35575
                    }
                case 37:
                    var2 = var1.flags;
                    var0 = _closure1_slot77;
                    var0 = var0.IS_MENTION_LOW_IMPORTANCE;
                    var0 = ~var0;
                    var0 = var2 & var0;
                    var1.flags = var0;
                    _fun35575_ip = 124;
                    continue _fun35575;
                case 70:
                    var0 = var1._mentionCount;
                    var2 = 0;
                    if (!(var2 === var0)) {
                        _fun35575_ip = 124;
                        continue _fun35575
                    }
                case 82:
                    var0 = var1.flags;
                    var3 = null;
                    var3 = var3 != var0;
                    var2 = 0;
                    if (!var3) {
                        _fun35575_ip = 101;
                        continue _fun35575
                    }
                case 98:
                    var2 = var0;
                case 101:
                    var0 = _closure1_slot77;
                    var0 = var0.IS_MENTION_LOW_IMPORTANCE;
                    var0 = var2 | var0;
                    var1.flags = var0;
                case 124:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.set = var1;
        var2[9] = var0;
        var0 = {};
        var1 = 'guessAckMessageId';
        var0.key = var1;
        var1 = function() {
            _fun35576: for (var _fun35576_ip = 0;;) switch (_fun35576_ip) {
                case 0:
                    var0 = this;
                    var5 = _closure1_slot34;
                    var4 = var5.getMessages;
                    var3 = var0.channelId;
                    var5 = var4.bind(var5)(var3);
                    var4 = var0.ackMessageId;
                    var3 = null;
                    if (!(var3 == var4)) {
                        _fun35576_ip = 139;
                        continue _fun35576
                    }
                case 40:
                    var4 = var0.isPrivate;
                    var4 = var4.bind(var0)();
                    if (!var4) {
                        _fun35576_ip = 139;
                        continue _fun35576
                    }
                case 53:
                    var4 = var5.hasMoreAfter;
                    if (var4) {
                        _fun35576_ip = 139;
                        continue _fun35576
                    }
                case 62:
                    var4 = var0.hasMentions;
                    var4 = var4.bind(var0)();
                    if (var4) {
                        _fun35576_ip = 83;
                        continue _fun35576
                    }
                case 75:
                    var4 = var0.lastMessageId;
                    return var4;
                case 83:
                    var _closure3_slot0 = var3;
                    var3 = var0.mentionCount;
                    var _closure3_slot1 = var3;
                    var3 = _closure1_slot39;
                    var2 = var3.getCurrentUser;
                    var2 = var2.bind(var3)();
                    var _closure3_slot2 = var2;
                    var4 = var5.forEach;
                    var3 = function(arg0) { // Environment: var1
                        _fun35577: for (var _fun35577_ip = 0;;) switch (_fun35577_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = _closure3_slot1;
                                var3 = 0;
                                if (!(var2 > var3)) {
                                    _fun35577_ip = 55;
                                    continue _fun35577
                                }
                            case 16:
                                var2 = var0.author;
                                var4 = var2.id;
                                var5 = _closure3_slot2;
                                var2 = null;
                                var5 = var2 == var5;
                                var2 = undefined;
                                if (var5) {
                                    _fun35577_ip = 51;
                                    continue _fun35577
                                }
                            case 42:
                                var5 = _closure3_slot2;
                                var2 = var5.id;
                            case 51:
                                if (!(var4 === var2)) {
                                    _fun35577_ip = 76;
                                    continue _fun35577
                                }
                            case 55:
                                var2 = _closure3_slot1;
                                if (!(var3 === var2)) {
                                    _fun35577_ip = 87;
                                    continue _fun35577
                                }
                            case 63:
                                var0 = var0.id;
                                _closure3_slot0 = var0;
                                var0 = false;
                                return var0;
                            case 76:
                                var0 = _closure3_slot1;
                                var0 = var0 - 1;
                                _closure3_slot1 = var0;
                            case 87:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = true;
                    var2 = var4.bind(var5)(var3, var0, var2);
                    var1 = _closure3_slot0;
                    return var1;
                case 139:
                    var0 = var0.ackMessageId;
                    return var0;
            }
        };
        var0.value = var1;
        var2[10] = var0;
        var0 = {};
        var1 = 'guildId';
        var0.key = var1;
        var1 = function() {
            _fun35578: for (var _fun35578_ip = 0;;) switch (_fun35578_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._guildId;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun35578_ip = 64;
                        continue _fun35578
                    }
                case 15:
                    var4 = _closure1_slot29;
                    var3 = var4.getChannel;
                    var2 = var0.channelId;
                    var3 = var3.bind(var4)(var2);
                    var2 = var1 != var3;
                    var1 = null;
                    if (!var2) {
                        _fun35578_ip = 56;
                        continue _fun35578
                    }
                case 46:
                    var2 = var3.getGuildId;
                    var1 = var2.bind(var3)();
                case 56:
                    var0._guildId = var1;
                    return var1;
                case 64:
                    var0 = var0._guildId;
                    return var0;
            }
        };
        var0.get = var1;
        var2[11] = var0;
        var0 = {};
        var1 = 'isPrivate';
        var0.key = var1;
        var1 = function() {
            _fun35579: for (var _fun35579_ip = 0;;) switch (_fun35579_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.type;
                    var2 = _closure1_slot61;
                    var2 = var2.CHANNEL;
                    if (!(var3 === var2)) {
                        _fun35579_ip = 65;
                        continue _fun35579
                    }
                case 25:
                    var2 = _closure1_slot29;
                    var1 = var2.getChannel;
                    var0 = var0.channelId;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun35579_ip = 63;
                        continue _fun35579
                    }
                case 53:
                    var1 = var2.isPrivate;
                    var0 = var1.bind(var2)();
                case 63:
                    return var0;
                case 65:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var1;
        var2[12] = var0;
        var0 = {};
        var1 = 'rebuildChannelState';
        var0.key = var1;
        var1 = function arg0() {
            _fun35580: for (var _fun35580_ip = 0;;) switch (_fun35580_ip) {
                case 0:
                    var4 = arg0;
                    var7 = arguments[1];
                    var2 = arguments[2];
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var0 = undefined;
                    if (!(var7 === var0)) {
                        _fun35580_ip = 26;
                        continue _fun35580
                    }
                case 24:
                    var7 = false;
                case 26:
                    var _closure3_slot1 = var7;
                    var _closure3_slot2 = var0;
                    var _closure3_slot3 = var0;
                    var _closure3_slot4 = var0;
                    var _closure3_slot5 = var0;
                    var _closure3_slot6 = var0;
                    var3 = null;
                    var6 = var4;
                    if (!(var3 == var6)) {
                        _fun35580_ip = 65;
                        continue _fun35580
                    }
                case 59:
                    var6 = var1._ackMessageId;
                case 65:
                    if (!(var3 == var6)) {
                        _fun35580_ip = 81;
                        continue _fun35580
                    }
                case 69:
                    var8 = var1.guessAckMessageId;
                    var6 = var8.bind(var1)();
                case 81:
                    var1.ackMessageId = var6;
                    var4 = var3 != var4;
                    var1.isManualAck = var4;
                    var1.oldestUnreadMessageId = var3;
                    var6 = false;
                    var1.estimated = var6;
                    var4 = 0;
                    var1.unreadCount = var4;
                    if (!var7) {
                        _fun35580_ip = 128;
                        continue _fun35580
                    }
                case 122:
                    var1.mentionCount = var4;
                case 128:
                    var4 = var1.hasUnread;
                    var4 = var4.bind(var1)();
                    if (!var4) {
                        _fun35580_ip = 303;
                        continue _fun35580
                    }
                case 144:
                    var8 = _closure1_slot39;
                    var7 = var8.getCurrentUser;
                    var7 = var7.bind(var8)();
                    _closure3_slot2 = var7;
                    var7 = var1.getAckTimestamp;
                    var7 = var7.bind(var1)();
                    _closure3_slot3 = var7;
                    _closure3_slot4 = var6;
                    _closure3_slot5 = var6;
                    _closure3_slot6 = var3;
                    var7 = _closure1_slot34;
                    var6 = var7.getMessages;
                    var4 = var1.channelId;
                    var7 = var6.bind(var7)(var4);
                    var6 = var7.forAll;
                    var4 = function(arg0) { // Environment: var5
                        _fun35581: for (var _fun35581_ip = 0;;) switch (_fun35581_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = _closure3_slot4;
                                if (var0) {
                                    _fun35581_ip = 38;
                                    continue _fun35581
                                }
                            case 13:
                                var3 = var1.id;
                                var0 = _closure3_slot0;
                                var0 = var0._ackMessageId;
                                var0 = var3 === var0;
                                _closure3_slot4 = var0;
                                _fun35581_ip = 65;
                                continue _fun35581;
                            case 38:
                                var3 = _closure3_slot0;
                                var0 = var3._oldestUnreadMessageId;
                                var4 = null;
                                if (!(var4 == var0)) {
                                    _fun35581_ip = 59;
                                    continue _fun35581
                                }
                            case 54:
                                var0 = var1.id;
                            case 59:
                                var3.oldestUnreadMessageId = var0;
                            case 65:
                                var5 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var0 = 40;
                                var3 = var3[var0];
                                var0 = undefined;
                                var6 = var5.bind(var0)(var3);
                                var5 = var6.extractTimestamp;
                                var3 = var1.id;
                                var5 = var5.bind(var6)(var3);
                                var3 = _closure3_slot3;
                                if (!(!(var5 > var3))) {
                                    _fun35581_ip = 122;
                                    continue _fun35581
                                }
                            case 114:
                                var3 = true;
                                _closure3_slot5 = var3;
                                _fun35581_ip = 209;
                                continue _fun35581;
                            case 122:
                                var5 = _closure3_slot0;
                                var3 = var5.unreadCount;
                                var3 = var3 + 1;
                                var5.unreadCount = var3;
                                var3 = _closure3_slot1;
                                if (!var3) {
                                    _fun35581_ip = 162;
                                    continue _fun35581
                                }
                            case 148:
                                var5 = _closure1_slot87;
                                var4 = _closure3_slot2;
                                var3 = var5.bind(var0)(var1, var4);
                            case 162:
                                if (!var3) {
                                    _fun35581_ip = 184;
                                    continue _fun35581
                                }
                            case 165:
                                var4 = _closure3_slot0;
                                var3 = var4.mentionCount;
                                var3 = var3 + 1;
                                var4.mentionCount = var3;
                            case 184:
                                var4 = _closure3_slot6;
                                var3 = null;
                                if (!(var3 == var4)) {
                                    _fun35581_ip = 201;
                                    continue _fun35581
                                }
                            case 194:
                                var1 = var1.id;
                                _fun35581_ip = 205;
                                continue _fun35581;
                            case 201:
                                var1 = _closure3_slot6;
                            case 205:
                                _closure3_slot6 = var1;
                            case 209:
                                return var0;
                        }
                    };
                    var4 = var6.bind(var7)(var4);
                    var4 = var7.hasPresent;
                    var4 = var4.bind(var7)();
                    var4 = !var4;
                    if (var4) {
                        _fun35580_ip = 277;
                        continue _fun35580
                    }
                case 242:
                    var8 = _closure3_slot4;
                    if (var8) {
                        _fun35580_ip = 253;
                        continue _fun35580
                    }
                case 249:
                    var8 = _closure3_slot5;
                case 253:
                    var6 = !var8;
                    if (var8) {
                        _fun35580_ip = 274;
                        continue _fun35580
                    }
                case 259:
                    var8 = var7.length;
                    var7 = var1.unreadCount;
                    var6 = var8 === var7;
                case 274:
                    var4 = var6;
                case 277:
                    var1.estimated = var4;
                    var4 = var1._oldestUnreadMessageId;
                    if (!(var3 == var4)) {
                        _fun35580_ip = 297;
                        continue _fun35580
                    }
                case 293:
                    var4 = _closure3_slot6;
                case 297:
                    var1.oldestUnreadMessageId = var4;
                case 303:
                    if (!(var3 != var2)) {
                        _fun35580_ip = 313;
                        continue _fun35580
                    }
                case 307:
                    var1.mentionCount = var2;
                case 313:
                    return var0;
            }
        };
        var0.value = var1;
        var2[13] = var0;
        var0 = {};
        var1 = 'handleGuildEventRemoval';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun35582: for (var _fun35582_ip = 0;;) switch (_fun35582_ip) {
                case 0:
                    var2 = this;
                    var4 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var10 = 40;
                    var3 = var0[var10];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.compare;
                    var4 = var2.ackMessageId;
                    var3 = arg1;
                    var4 = var5.bind(var6)(var4, var3);
                    var3 = 0;
                    if (!(!(var4 >= var3))) {
                        _fun35582_ip = 191;
                        continue _fun35582
                    }
                case 60:
                    var6 = _closure1_slot14;
                    var5 = var6.getGuildScheduledEventsForGuild;
                    var4 = arg0;
                    var5 = var5.bind(var6)(var4);
                    var4 = var2.getAckTimestamp;
                    var9 = var4.bind(var2)();
                    var4 = global;
                    var4 = var4.isNaN;
                    var4 = var4.bind(var0)(var9);
                    if (var4) {
                        _fun35582_ip = 191;
                        continue _fun35582
                    }
                case 104:
                    var6 = var2._ackMessageId;
                    var4 = null;
                    if (!(var4 == var6)) {
                        _fun35582_ip = 144;
                        continue _fun35582
                    }
                case 116:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var10];
                    var8 = var8.bind(var0)(var7);
                    var7 = var8.fromTimestamp;
                    var6 = var7.bind(var8)(var9);
                case 144:
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var4;
                    var _closure3_slot2 = var3;
                    var4 = var5.forEach;
                    var3 = function(arg0) { // Environment: var1
                        _fun35583: for (var _fun35583_ip = 0;;) switch (_fun35583_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = _closure1_slot15;
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                if (!var2) {
                                    _fun35583_ip = 132;
                                    continue _fun35583
                                }
                            case 20:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var6 = 40;
                                var2 = var2[var6];
                                var8 = var3.bind(var0)(var2);
                                var7 = var8.compare;
                                var5 = var1.id;
                                var3 = _closure3_slot1;
                                var5 = var7.bind(var8)(var5, var3);
                                var3 = 0;
                                if (!(var5 > var3)) {
                                    _fun35583_ip = 79;
                                    continue _fun35583
                                }
                            case 70:
                                var5 = var1.id;
                                _closure3_slot1 = var5;
                            case 79:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var4 = var4[var6];
                                var6 = var5.bind(var0)(var4);
                                var5 = var6.compare;
                                var4 = var1.id;
                                var1 = _closure3_slot0;
                                var1 = var5.bind(var6)(var4, var1);
                                if (!(var1 > var3)) {
                                    _fun35583_ip = 132;
                                    continue _fun35583
                                }
                            case 121:
                                var1 = _closure3_slot2;
                                var1 = var1 + 1;
                                _closure3_slot2 = var1;
                            case 132:
                                return var0;
                        }
                    };
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure3_slot1;
                    var2.lastMessageId = var3;
                    var1 = _closure3_slot2;
                    var2.mentionCount = var1;
                case 191:
                    return var0;
            }
        };
        var0.value = var1;
        var2[14] = var0;
        var0 = {};
        var1 = 'canTrackUnreads';
        var0.key = var1;
        var1 = function() {
            _fun35584: for (var _fun35584_ip = 0;;) switch (_fun35584_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.type;
                    var0 = _closure1_slot61;
                    var0 = var0.CHANNEL;
                    if (!(var3 === var0)) {
                        _fun35584_ip = 223;
                        continue _fun35584
                    }
                case 28:
                    var0 = var1._isThread;
                    if (!var0) {
                        _fun35584_ip = 50;
                        continue _fun35584
                    }
                case 37:
                    var0 = var1._isActiveThread;
                    if (var0) {
                        _fun35584_ip = 50;
                        continue _fun35584
                    }
                case 46:
                    var0 = false;
                    return var0;
                case 50:
                    var0 = var1._isResourceChannel;
                    if (var0) {
                        _fun35584_ip = 219;
                        continue _fun35584
                    }
                case 62:
                    var4 = _closure1_slot29;
                    var3 = var4.getBasicChannel;
                    var0 = var1.channelId;
                    var3 = var3.bind(var4)(var0);
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun35584_ip = 217;
                        continue _fun35584
                    }
                case 94:
                    var4 = 'basicPermissions';
                    var4 = var4 in var3;
                    if (var4) {
                        _fun35584_ip = 165;
                        continue _fun35584
                    }
                case 105:
                    var6 = _closure1_slot12;
                    var5 = var6.isChannelGated;
                    var4 = var1.guildId;
                    var1 = var1.channelId;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = !var1;
                    if (var1) {
                        _fun35584_ip = 163;
                        continue _fun35584
                    }
                case 137:
                    var6 = _closure1_slot35;
                    var5 = var6.can;
                    var4 = _closure1_slot49;
                    var4 = var4.VIEW_CHANNEL;
                    var1 = var5.bind(var6)(var4, var3);
                case 163:
                    _fun35584_ip = 214;
                    continue _fun35584;
                case 165:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 49;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.has;
                    var3 = var3.basicPermissions;
                    var2 = _closure1_slot48;
                    var2 = var2.VIEW_CHANNEL;
                    var1 = var4.bind(var5)(var3, var2);
                case 214:
                    var0 = var1;
                case 217:
                    return var0;
                case 219:
                    var0 = false;
                    return var0;
                case 223:
                    var0 = true;
                    return var0;
            }
        };
        var0.value = var1;
        var2[15] = var0;
        var0 = {};
        var1 = 'canBeUnread';
        var0.key = var1;
        var1 = function() {
            _fun35585: for (var _fun35585_ip = 0;;) switch (_fun35585_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._isThread;
                    if (!var0) {
                        _fun35585_ip = 25;
                        continue _fun35585
                    }
                case 12:
                    var0 = var1._isJoinedThread;
                    if (var0) {
                        _fun35585_ip = 25;
                        continue _fun35585
                    }
                case 21:
                    var0 = false;
                    return var0;
                case 25:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 50;
                    var2 = var4[var2];
                    var4 = undefined;
                    var6 = var3.bind(var4)(var2);
                    var5 = var6.isMessageRequestOrSpamRequest;
                    var3 = var1.channelId;
                    var7 = _closure1_slot16;
                    var2 = new Array(2);
                    var2[0] = var7;
                    var7 = _closure1_slot17;
                    var2[1] = var7;
                    var2 = var5.bind(var6)(var3, var2);
                    if (var2) {
                        _fun35585_ip = 232;
                        continue _fun35585
                    }
                case 93:
                    var2 = var1._isThread;
                    if (var2) {
                        _fun35585_ip = 220;
                        continue _fun35585
                    }
                case 102:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 51;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.isOptInEnabledForGuild;
                    var2 = var1._guildId;
                    var2 = var3.bind(var4)(var2);
                    if (!var2) {
                        _fun35585_ip = 220;
                        continue _fun35585
                    }
                case 142:
                    var3 = var1._lastMessageTimestamp;
                    var2 = _closure1_slot74;
                    if (!(!(var3 < var2))) {
                        _fun35585_ip = 216;
                        continue _fun35585
                    }
                case 156:
                    var4 = _closure1_slot38;
                    var3 = var4.isChannelOrParentOptedIn;
                    var2 = var1._guildId;
                    var0 = var1.channelId;
                    var0 = var3.bind(var4)(var2, var0);
                    if (var0) {
                        _fun35585_ip = 220;
                        continue _fun35585
                    }
                case 186:
                    var0 = var1.hasRecentlyVisitedAndRead;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun35585_ip = 220;
                        continue _fun35585
                    }
                case 199:
                    var0 = var1.hasMentions;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun35585_ip = 220;
                        continue _fun35585
                    }
                case 212:
                    var0 = false;
                    return var0;
                case 216:
                    var0 = false;
                    return var0;
                case 220:
                    var0 = var1.canTrackUnreads;
                    var0 = var0.bind(var1)();
                    return var0;
                case 232:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var1;
        var2[16] = var0;
        var0 = {};
        var1 = 'canHaveMentions';
        var0.key = var1;
        var1 = function() {
            _fun35586: for (var _fun35586_ip = 0;;) switch (_fun35586_ip) {
                case 0:
                    var5 = this;
                    var1 = var5.mentionCount;
                    var0 = 0;
                    var0 = var0 !== var1;
                    if (!var0) {
                        _fun35586_ip = 195;
                        continue _fun35586
                    }
                case 21:
                    var1 = var5._isThread;
                    if (!var1) {
                        _fun35586_ip = 39;
                        continue _fun35586
                    }
                case 30:
                    var2 = var5._isJoinedThread;
                    var1 = !var2;
                case 39:
                    var1 = !var1;
                    if (!var1) {
                        _fun35586_ip = 192;
                        continue _fun35586
                    }
                case 48:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 50;
                    var2 = var6[var2];
                    var7 = undefined;
                    var8 = var3.bind(var7)(var2);
                    var6 = var8.isMessageRequestOrSpamRequest;
                    var3 = var5.channelId;
                    var9 = _closure1_slot16;
                    var2 = new Array(2);
                    var2[0] = var9;
                    var9 = _closure1_slot17;
                    var2[1] = var9;
                    var2 = var6.bind(var8)(var3, var2);
                    var2 = !var2;
                    if (!var2) {
                        _fun35586_ip = 189;
                        continue _fun35586
                    }
                case 116:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 51;
                    var3 = var8[var3];
                    var7 = var6.bind(var7)(var3);
                    var6 = var7.isOptInEnabledForGuild;
                    var3 = var5._guildId;
                    var3 = var6.bind(var7)(var3);
                    if (!var3) {
                        _fun35586_ip = 170;
                        continue _fun35586
                    }
                case 156:
                    var6 = var5._lastMessageTimestamp;
                    var4 = _closure1_slot74;
                    var3 = var6 < var4;
                case 170:
                    var3 = !var3;
                    if (!var3) {
                        _fun35586_ip = 186;
                        continue _fun35586
                    }
                case 176:
                    var4 = var5.canTrackUnreads;
                    var3 = var4.bind(var5)();
                case 186:
                    var2 = var3;
                case 189:
                    var1 = var2;
                case 192:
                    var0 = var1;
                case 195:
                    return var0;
            }
        };
        var0.value = var1;
        var2[17] = var0;
        var0 = {};
        var1 = 'getGuildChannelUnreadState';
        var0.key = var1;
        var1 = function arg0, arg1, arg2, arg3, arg4() {
            _fun35587: for (var _fun35587_ip = 0;;) switch (_fun35587_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var0 = arg1;
                    if (!var0) {
                        _fun35587_ip = 91;
                        continue _fun35587
                    }
                case 12:
                    var4 = var2._lastMessageTimestamp;
                    var3 = _closure1_slot74;
                    if (!(!(var4 < var3))) {
                        _fun35587_ip = 346;
                        continue _fun35587
                    }
                case 32:
                    var3 = _closure1_slot38;
                    var0 = var3.isChannelRecordOrParentOptedIn;
                    var0 = var0.bind(var3)(var1);
                    if (var0) {
                        _fun35587_ip = 91;
                        continue _fun35587
                    }
                case 50:
                    var0 = var2.hasRecentlyVisitedAndRead;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun35587_ip = 91;
                        continue _fun35587
                    }
                case 63:
                    var3 = var2.mentionCount;
                    var0 = 0;
                    if (!(var3 <= var0)) {
                        _fun35587_ip = 91;
                        continue _fun35587
                    }
                case 75:
                    var0 = {
                        'mentionCount': 0,
                        'unread': false,
                        'isMentionLowImportance': false
                    };
                    return var0;
                case 91:
                    var0 = 'basicPermissions';
                    var3 = var0 in var1;
                    if (var3) {
                        _fun35587_ip = 179;
                        continue _fun35587
                    }
                case 105:
                    var6 = _closure1_slot12;
                    var5 = var6.isChannelGated;
                    var4 = var2.guildId;
                    var3 = var2.channelId;
                    var3 = var5.bind(var6)(var4, var3);
                    if (!var3) {
                        _fun35587_ip = 247;
                        continue _fun35587
                    }
                case 134:
                    var5 = _closure1_slot35;
                    var4 = var5.can;
                    var3 = _closure1_slot49;
                    var3 = var3.VIEW_CHANNEL;
                    var3 = var4.bind(var5)(var3, var1);
                    if (var3) {
                        _fun35587_ip = 247;
                        continue _fun35587
                    }
                case 163:
                    var3 = {
                        'mentionCount': 0,
                        'unread': false,
                        'isMentionLowImportance': false
                    };
                    return var3;
                case 179:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 49;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.has;
                    var1 = var1.basicPermissions;
                    var0 = _closure1_slot48;
                    var0 = var0.VIEW_CHANNEL;
                    var0 = var3.bind(var4)(var1, var0);
                    if (var0) {
                        _fun35587_ip = 247;
                        continue _fun35587
                    }
                case 231:
                    var0 = {
                        'mentionCount': 0,
                        'unread': false,
                        'isMentionLowImportance': false
                    };
                    return var0;
                case 247:
                    var0 = arg3;
                    if (var0) {
                        _fun35587_ip = 310;
                        continue _fun35587
                    }
                case 253:
                    var0 = arg4;
                    if (var0) {
                        _fun35587_ip = 310;
                        continue _fun35587
                    }
                case 259:
                    var0 = {};
                    var1 = var2.mentionCount;
                    var0.mentionCount = var1;
                    var1 = var2.getAckTimestamp;
                    var3 = var1.bind(var2)();
                    var1 = var2._lastMessageTimestamp;
                    var1 = var3 < var1;
                    var0.unread = var1;
                    var1 = var2.isMentionLowImportance;
                    var0.isMentionLowImportance = var1;
                    _fun35587_ip = 344;
                    continue _fun35587;
                case 310:
                    var1 = {};
                    var3 = var2.mentionCount;
                    var1.mentionCount = var3;
                    var3 = false;
                    var1.unread = var3;
                    var2 = var2.isMentionLowImportance;
                    var1.isMentionLowImportance = var2;
                    var0 = var1;
                case 344:
                    return var0;
                case 346:
                    var0 = {
                        'mentionCount': 0,
                        'unread': false,
                        'isMentionLowImportance': false
                    };
                    return var0;
            }
        };
        var0.value = var1;
        var2[18] = var0;
        var0 = {};
        var1 = 'hasUnread';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var1 = var0.getAckTimestamp;
            var1 = var1.bind(var0)();
            var0 = var0._lastMessageTimestamp;
            var0 = var1 < var0;
            return var0;
        };
        var0.value = var1;
        var2[19] = var0;
        var0 = {};
        var1 = 'hasRecentlyVisitedAndRead';
        var0.key = var1;
        var1 = function() {
            _fun35589: for (var _fun35589_ip = 0;;) switch (_fun35589_ip) {
                case 0:
                    var3 = this;
                    var1 = var3._lastMessageTimestamp;
                    var0 = 0;
                    var0 = var1 > var0;
                    if (!var0) {
                        _fun35589_ip = 30;
                        continue _fun35589
                    }
                case 18:
                    var2 = var3._ackMessageId;
                    var1 = null;
                    var0 = var1 != var2;
                case 30:
                    if (!var0) {
                        _fun35589_ip = 54;
                        continue _fun35589
                    }
                case 33:
                    var1 = var3.getAckTimestamp;
                    var2 = var1.bind(var3)();
                    var1 = _closure1_slot75;
                    var0 = var2 > var1;
                case 54:
                    if (!var0) {
                        _fun35589_ip = 95;
                        continue _fun35589
                    }
                case 57:
                    var4 = _closure1_slot21;
                    var2 = var4.getGuildRecentsDismissedAt;
                    var1 = var3._guildId;
                    var2 = var2.bind(var4)(var1);
                    var1 = var3.getAckTimestamp;
                    var1 = var1.bind(var3)();
                    var0 = var2 < var1;
                case 95:
                    return var0;
            }
        };
        var0.value = var1;
        var2[20] = var0;
        var0 = {};
        var1 = 'isForumPostUnread';
        var0.key = var1;
        var1 = function() {
            _fun35590: for (var _fun35590_ip = 0;;) switch (_fun35590_ip) {
                case 0:
                    var2 = this;
                    var0 = var2._isActiveThread;
                    var1 = !var0;
                    var0 = !var1;
                    if (var1) {
                        _fun35590_ip = 28;
                        continue _fun35590
                    }
                case 18:
                    var1 = var2.hasUnread;
                    var0 = var1.bind(var2)();
                case 28:
                    return var0;
            }
        };
        var0.value = var1;
        var2[21] = var0;
        var0 = {};
        var1 = 'hasMentions';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var0 = var1.getMentionCount;
            var1 = var0.bind(var1)();
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var0.value = var1;
        var2[22] = var0;
        var0 = {};
        var1 = 'getMentionCount';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0.mentionCount;
            return var0;
        };
        var0.value = var1;
        var2[23] = var0;
        var0 = {};
        var1 = 'hasUnreadOrMentions';
        var0.key = var1;
        var1 = function() {
            _fun35593: for (var _fun35593_ip = 0;;) switch (_fun35593_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.hasMentions;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun35593_ip = 26;
                        continue _fun35593
                    }
                case 16:
                    var1 = var2.hasUnread;
                    var0 = var1.bind(var2)();
                case 26:
                    return var0;
            }
        };
        var0.value = var1;
        var2[24] = var0;
        var0 = {};
        var1 = 'ackPins';
        var0.key = var1;
        var1 = function() {
            _fun35594: for (var _fun35594_ip = 0;;) switch (_fun35594_ip) {
                case 0:
                    var3 = arguments[0];
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun35594_ip = 20;
                        continue _fun35594
                    }
                case 18:
                    var3 = null;
                case 20:
                    var6 = var1.type;
                    var5 = _closure1_slot61;
                    var5 = var5.CHANNEL;
                    if (!(var6 === var5)) {
                        _fun35594_ip = 138;
                        continue _fun35594
                    }
                case 42:
                    var5 = var1.canTrackUnreads;
                    var5 = var5.bind(var1)();
                    if (var5) {
                        _fun35594_ip = 59;
                        continue _fun35594
                    }
                case 55:
                    var5 = false;
                    return var5;
                case 59:
                    var5 = null;
                    if (!(var5 == var3)) {
                        _fun35594_ip = 103;
                        continue _fun35594
                    }
                case 65:
                    var6 = var1.lastPinTimestamp;
                    var5 = var1.ackPinTimestamp;
                    if (!(var6 !== var5)) {
                        _fun35594_ip = 134;
                        continue _fun35594
                    }
                case 81:
                    var5 = true;
                    var1._persisted = var5;
                    var5 = _closure1_slot91;
                    var4 = function() { // Environment: var4
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 44;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var2 = var0.HTTP;
                        var1 = var2.post;
                        var0 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var5 = _closure1_slot44;
                        var4 = var5.PINS_ACK;
                        var3 = _closure3_slot0;
                        var3 = var3.channelId;
                        var3 = var4.bind(var5)(var3);
                        var0.url = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4 = var5.bind(var2)(var4);
                case 103:
                    var0 = _closure1_slot86;
                    var0 = var0.bind(var2)(var3);
                    var2 = 0;
                    if (!(var2 === var0)) {
                        _fun35594_ip = 124;
                        continue _fun35594
                    }
                case 118:
                    var0 = var1.lastPinTimestamp;
                case 124:
                    var1.ackPinTimestamp = var0;
                    var0 = true;
                    return var0;
                case 134:
                    var0 = false;
                    return var0;
                case 138:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var1;
        var2[25] = var0;
        var0 = {};
        var1 = 'ack';
        var0.key = var1;
        var1 = function arg0() {
            _fun35596: for (var _fun35596_ip = 0;;) switch (_fun35596_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var4 = var1.messageId;
                    var0 = var1.location;
                    var _closure3_slot1 = var0;
                    var0 = var1.trackAnalytics;
                    var _closure3_slot2 = var0;
                    var7 = var1.local;
                    var8 = undefined;
                    if (!(var7 === var8)) {
                        _fun35596_ip = 50;
                        continue _fun35596
                    }
                case 48:
                    var7 = false;
                case 50:
                    var10 = var1.immediate;
                    if (!(var10 === var8)) {
                        _fun35596_ip = 62;
                        continue _fun35596
                    }
                case 60:
                    var10 = false;
                case 62:
                    var0 = var1.force;
                    if (!(var0 === var8)) {
                        _fun35596_ip = 74;
                        continue _fun35596
                    }
                case 72:
                    var0 = false;
                case 74:
                    var2 = var1.isExplicitUserAction;
                    if (!(var2 === var8)) {
                        _fun35596_ip = 86;
                        continue _fun35596
                    }
                case 84:
                    var2 = false;
                case 86:
                    var1 = var3._shouldAck;
                    var1 = var1.bind(var3)(var0, var7, var2);
                    if (var1) {
                        _fun35596_ip = 108;
                        continue _fun35596
                    }
                case 104:
                    var1 = false;
                    return var1;
                case 108:
                    if (var0) {
                        _fun35596_ip = 128;
                        continue _fun35596
                    }
                case 111:
                    var0 = var3.canTrackUnreads;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun35596_ip = 128;
                        continue _fun35596
                    }
                case 124:
                    var0 = false;
                    return var0;
                case 128:
                    var0 = var3.hasMentions;
                    var6 = var0.bind(var3)();
                    var1 = false;
                    var3.estimated = var1;
                    var0 = var3.takeSnapshot;
                    var0 = var0.bind(var3)();
                    var3.snapshot = var0;
                    var9 = 0;
                    var3.unreadCount = var9;
                    var3.mentionCount = var9;
                    var3.isMentionLowImportance = var1;
                    var2 = null;
                    var0 = var2 != var4;
                    if (var0) {
                        _fun35596_ip = 204;
                        continue _fun35596
                    }
                case 191:
                    var11 = var3.lastMessageId;
                    var0 = var2 != var11;
                    var4 = var11;
                case 204:
                    if (!var0) {
                        _fun35596_ip = 327;
                        continue _fun35596
                    }
                case 207:
                    var3.ackMessageId = var4;
                    var3.isManualAck = var1;
                    var1 = true;
                    var3._persisted = var1;
                    var12 = _closure1_slot68;
                    if (!var12) {
                        _fun35596_ip = 243;
                        continue _fun35596
                    }
                case 237:
                    var3.ackedWhileCached = var1;
                case 243:
                    var12 = _closure1_slot103;
                    var11 = var3.channelId;
                    var11 = var12.bind(var8)(var11);
                    if (var7) {
                        _fun35596_ip = 319;
                        continue _fun35596
                    }
                case 260:
                    var7 = var3.outgoingAck;
                    if (!(var2 == var7)) {
                        _fun35596_ip = 309;
                        continue _fun35596
                    }
                case 270:
                    var7 = global;
                    var7 = var7.setTimeout;
                    if (var6) {
                        _fun35596_ip = 290;
                        continue _fun35596
                    }
                case 281:
                    var6 = 3000;
                    if (!var10) {
                        _fun35596_ip = 292;
                        continue _fun35596
                    }
                case 290:
                    var6 = 0;
                case 292:
                    var5 = function() { // Environment: var5
                        _fun35597: for (var _fun35597_ip = 0;;) switch (_fun35597_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = var1.type;
                                var1 = _closure1_slot61;
                                var1 = var1.CHANNEL;
                                if (!(var2 !== var1)) {
                                    _fun35597_ip = 47;
                                    continue _fun35597
                                }
                            case 29:
                                var2 = _closure3_slot0;
                                var1 = var2._nonChannelAck;
                                var1 = var1.bind(var2)();
                                _fun35597_ip = 73;
                                continue _fun35597;
                            case 47:
                                var4 = _closure3_slot0;
                                var3 = var4._ack;
                                var2 = _closure3_slot1;
                                var1 = _closure3_slot2;
                                var1 = var3.bind(var4)(var2, var1);
                            case 73:
                                var1 = _closure3_slot0;
                                var0 = null;
                                var1.outgoingAck = var0;
                                var1.outgoingAckTimer = var0;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var5 = var7.bind(var8)(var5, var6);
                    var3.outgoingAckTimer = var5;
                case 309:
                    var3.outgoingAck = var4;
                    var0 = true;
                    _fun35596_ip = 327;
                    continue _fun35596;
                case 319:
                    var3.oldestUnreadMessageId = var2;
                    var0 = true;
                case 327:
                    return var0;
            }
        };
        var0.value = var1;
        var2[26] = var0;
        var0 = {};
        var1 = 'takeSnapshot';
        var0.key = var1;
        var1 = function() {
            _fun35598: for (var _fun35598_ip = 0;;) switch (_fun35598_ip) {
                case 0:
                    var1 = this;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 52;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var4 = var0.default;
                    var3 = var1.guildId;
                    var0 = {};
                    var2 = var1.hasUnread;
                    var2 = var2.bind(var1)();
                    var0.unread = var2;
                    var1 = var1.mentionCount;
                    var0.mentionCount = var1;
                    var1 = null;
                    var5 = var1 == var3;
                    var2 = null;
                    if (var5) {
                        _fun35598_ip = 88;
                        continue _fun35598
                    }
                case 77:
                    var5 = var4.hasUnread;
                    var2 = var5.bind(var4)(var3);
                case 88:
                    var0.guildUnread = var2;
                    var2 = var1 == var3;
                    var1 = null;
                    if (var2) {
                        _fun35598_ip = 113;
                        continue _fun35598
                    }
                case 102:
                    var2 = var4.getMentionCount;
                    var1 = var2.bind(var4)(var3);
                case 113:
                    var0.guildMentionCount = var1;
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var1 = var1.bind(var2)();
                    var0.takenAt = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var2[27] = var0;
        var0 = {};
        var1 = 'clearOutgoingAck';
        var0.key = var1;
        var1 = function() {
            _fun35599: for (var _fun35599_ip = 0;;) switch (_fun35599_ip) {
                case 0:
                    var1 = this;
                    var0 = null;
                    var1.outgoingAck = var0;
                    var2 = var1.outgoingAckTimer;
                    if (!(var0 != var2)) {
                        _fun35599_ip = 48;
                        continue _fun35599
                    }
                case 21:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1.outgoingAckTimer;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.outgoingAckTimer = var0;
                case 48:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var2[28] = var0;
        var0 = {};
        var1 = '_shouldAck';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            _fun35600: for (var _fun35600_ip = 0;;) switch (_fun35600_ip) {
                case 0:
                    var5 = this;
                    var0 = arg0;
                    var1 = !var0;
                    var0 = !var1;
                    if (!var1) {
                        _fun35600_ip = 144;
                        continue _fun35600
                    }
                case 18:
                    var1 = arg2;
                    var2 = !var1;
                    var1 = !var2;
                    if (!var2) {
                        _fun35600_ip = 141;
                        continue _fun35600
                    }
                case 30:
                    var2 = arg1;
                    var3 = !var2;
                    var2 = !var3;
                    if (!var3) {
                        _fun35600_ip = 138;
                        continue _fun35600
                    }
                case 42:
                    var3 = var5.isManualAck;
                    var3 = !var3;
                    if (!var3) {
                        _fun35600_ip = 135;
                        continue _fun35600
                    }
                case 54:
                    var7 = var5.type;
                    var4 = _closure1_slot61;
                    var4 = var4.CHANNEL;
                    var4 = var7 !== var4;
                    if (var4) {
                        _fun35600_ip = 85;
                        continue _fun35600
                    }
                case 79:
                    var4 = var5.loadedMessages;
                case 85:
                    if (var4) {
                        _fun35600_ip = 129;
                        continue _fun35600
                    }
                case 88:
                    var7 = _closure1_slot29;
                    var6 = var7.getChannel;
                    var5 = var5.channelId;
                    var7 = var6.bind(var7)(var5);
                    var5 = null;
                    var5 = var5 != var7;
                    if (!var5) {
                        _fun35600_ip = 126;
                        continue _fun35600
                    }
                case 116:
                    var6 = var7.isForumLikeChannel;
                    var5 = var6.bind(var7)();
                case 126:
                    var4 = var5;
                case 129:
                    var4 = !var4;
                    var3 = !var4;
                case 135:
                    var2 = var3;
                case 138:
                    var1 = var2;
                case 141:
                    var0 = var1;
                case 144:
                    return var0;
            }
        };
        var0.value = var1;
        var2[29] = var0;
        var0 = {};
        var1 = '_ack';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun35601: for (var _fun35601_ip = 0;;) switch (_fun35601_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var1 = arg0;
                    var _closure3_slot1 = var1;
                    var1 = arg1;
                    var _closure3_slot2 = var1;
                    var3 = var2.outgoingAck;
                    var _closure3_slot3 = var3;
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun35601_ip = 137;
                        continue _fun35601
                    }
                case 39:
                    var4 = _closure1_slot27;
                    var3 = var4.getId;
                    var3 = var3.bind(var4)();
                    var _closure3_slot4 = var3;
                    var3 = _closure1_slot67;
                    var _closure3_slot5 = var3;
                    var3 = true;
                    var2._persisted = var3;
                    var3 = var2.recalculateFlags;
                    var4 = var3.bind(var2)();
                    var5 = var2.flags;
                    var3 = undefined;
                    var2 = undefined;
                    if (!(var4 !== var5)) {
                        _fun35601_ip = 104;
                        continue _fun35601
                    }
                case 101:
                    var2 = var4;
                case 104:
                    var _closure3_slot6 = var2;
                    var2 = _closure1_slot91;
                    var1 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 44;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var2 = var0.HTTP;
                        var1 = var2.post;
                        var0 = {};
                        var9 = _closure1_slot44;
                        var8 = var9.MESSAGE_ACK;
                        var5 = _closure3_slot0;
                        var7 = var5.channelId;
                        var3 = _closure3_slot3;
                        var3 = var8.bind(var9)(var7, var3);
                        var0.url = var3;
                        var3 = {};
                        var6 = _closure1_slot67;
                        var3.token = var6;
                        var5 = var5.lastViewed;
                        var3.last_viewed = var5;
                        var4 = _closure3_slot6;
                        var3.flags = var4;
                        var0.body = var3;
                        var3 = true;
                        var0.oldFormErrors = var3;
                        var0.rejectWithError = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        _fun35603: for (var _fun35603_ip = 0;;) switch (_fun35603_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun35603_ip = 179;
                                    continue _fun35603
                                }
                            case 12:
                                var4 = _closure1_slot67;
                                var3 = _closure3_slot5;
                                var3 = var4 === var3;
                                if (!var3) {
                                    _fun35603_ip = 55;
                                    continue _fun35603
                                }
                            case 33:
                                var5 = _closure3_slot4;
                                var6 = _closure1_slot27;
                                var4 = var6.getId;
                                var4 = var4.bind(var6)();
                                var3 = var5 === var4;
                            case 55:
                                if (!var3) {
                                    _fun35603_ip = 73;
                                    continue _fun35603
                                }
                            case 58:
                                var2 = var2.body;
                                var2 = var2.token;
                                _closure1_slot67 = var2;
                            case 73:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 42;
                                var2 = var3[var2];
                                var3 = undefined;
                                var5 = var4.bind(var3)(var2);
                                var4 = var5.dispatch;
                                var2 = {};
                                var6 = 'MESSAGE_ACKED';
                                var2.type = var6;
                                var2 = var4.bind(var5)(var2);
                                var1 = _closure3_slot2;
                                if (!var1) {
                                    _fun35603_ip = 179;
                                    continue _fun35603
                                }
                            case 124:
                                var2 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var1 = 54;
                                var1 = var0[var1];
                                var2 = var2.bind(var3)(var1);
                                var1 = 53;
                                var1 = var0[var1];
                                var0 = var0.paths;
                                var2 = var2.bind(var3)(var1, var0);
                                var1 = var2.then;
                                var0 = function(arg0) { // Environment: var0
                                    _fun35604: for (var _fun35604_ip = 0;;) switch (_fun35604_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = var0.default;
                                            var1 = _closure3_slot0;
                                            var2 = var1.channelId;
                                            var4 = _closure3_slot1;
                                            var1 = null;
                                            if (!(var1 == var4)) {
                                                _fun35604_ip = 34;
                                                continue _fun35604
                                            }
                                        case 30:
                                            var1 = {};
                                            _fun35604_ip = 38;
                                            continue _fun35604;
                                        case 34:
                                            var1 = _closure3_slot1;
                                        case 38:
                                            var0 = undefined;
                                            var1 = var3.bind(var0)(var2, var1);
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                            case 179:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 137:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var2[30] = var0;
        var0 = {};
        var1 = 'recalculateFlags';
        var0.key = var1;
        var1 = function() {
            _fun35605: for (var _fun35605_ip = 0;;) switch (_fun35605_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.type;
                    var2 = _closure1_slot61;
                    var2 = var2.CHANNEL;
                    if (!(var3 === var2)) {
                        _fun35605_ip = 50;
                        continue _fun35605
                    }
                case 25:
                    var3 = _closure1_slot29;
                    var2 = var3.getChannel;
                    var0 = var0.channelId;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun35605_ip = 54;
                        continue _fun35605
                    }
                case 50:
                    var3 = undefined;
                    return var3;
                case 54:
                    var3 = var0.isThread;
                    var3 = var3.bind(var0)();
                    if (var3) {
                        _fun35605_ip = 93;
                        continue _fun35605
                    }
                case 67:
                    var0 = var0.guild_id;
                    var2 = var2 != var0;
                    var0 = 0;
                    if (!var2) {
                        _fun35605_ip = 91;
                        continue _fun35605
                    }
                case 81:
                    var2 = _closure1_slot77;
                    var0 = var2.IS_GUILD_CHANNEL;
                case 91:
                    _fun35605_ip = 103;
                    continue _fun35605;
                case 93:
                    var1 = _closure1_slot77;
                    var0 = var1.IS_THREAD;
                case 103:
                    return var0;
            }
        };
        var0.value = var1;
        var2[31] = var0;
        var0 = {};
        var1 = '_nonChannelAck';
        var0.key = var1;
        var1 = function() {
            _fun35606: for (var _fun35606_ip = 0;;) switch (_fun35606_ip) {
                case 0:
                    var3 = this;
                    var7 = var3.outgoingAck;
                    var6 = var3.channelId;
                    var5 = var3.type;
                    var1 = null;
                    if (!(var1 != var7)) {
                        _fun35606_ip = 174;
                        continue _fun35606
                    }
                case 30:
                    var2 = _closure1_slot61;
                    var2 = var2.GUILD_HOME;
                    if (!(var2 !== var5)) {
                        _fun35606_ip = 129;
                        continue _fun35606
                    }
                case 47:
                    var2 = _closure1_slot61;
                    var2 = var2.GUILD_EVENT;
                    if (!(var2 !== var5)) {
                        _fun35606_ip = 129;
                        continue _fun35606
                    }
                case 61:
                    var2 = _closure1_slot61;
                    var2 = var2.GUILD_ONBOARDING_QUESTION;
                    if (!(var2 !== var5)) {
                        _fun35606_ip = 129;
                        continue _fun35606
                    }
                case 75:
                    var2 = _closure1_slot61;
                    var2 = var2.NOTIFICATION_CENTER;
                    if (!(var2 !== var5)) {
                        _fun35606_ip = 107;
                        continue _fun35606
                    }
                case 89:
                    var2 = _closure1_slot61;
                    var2 = var2.MESSAGE_REQUESTS;
                    if (!(var2 !== var5)) {
                        _fun35606_ip = 107;
                        continue _fun35606
                    }
                case 103:
                    var2 = undefined;
                    return var2;
                case 107:
                    var4 = _closure1_slot44;
                    var2 = var4.USER_NON_CHANNEL_ACK;
                    var2 = var2.bind(var4)(var7, var5);
                    var _closure3_slot0 = var2;
                    _fun35606_ip = 150;
                    continue _fun35606;
                case 129:
                    var4 = _closure1_slot44;
                    var2 = var4.GUILD_FEATURE_ACK;
                    var2 = var2.bind(var4)(var6, var7, var5);
                    _closure3_slot0 = var2;
                case 150:
                    var2 = true;
                    var3._persisted = var2;
                    var2 = _closure1_slot91;
                    var1 = undefined;
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 44;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var2 = var0.HTTP;
                        var1 = var2.post;
                        var0 = {};
                        var3 = _closure3_slot0;
                        var0.url = var3;
                        var3 = {};
                        var0.body = var3;
                        var3 = true;
                        var0.oldFormErrors = var3;
                        var0.rejectWithError = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var2.bind(var1)(var0);
                case 174:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var2[32] = var0;
        var0 = {};
        var1 = 'delete';
        var0.key = var1;
        var1 = function() {
            _fun35608: for (var _fun35608_ip = 0;;) switch (_fun35608_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun35608_ip = 14;
                        continue _fun35608
                    }
                case 12:
                    var2 = true;
                case 14:
                    var5 = _closure1_slot29;
                    var4 = var5.getBasicChannel;
                    var3 = var1.channelId;
                    var11 = var4.bind(var5)(var3);
                    var10 = _closure1_slot63;
                    var9 = var10.log;
                    var8 = var1.channelId;
                    var7 = var1.type;
                    var5 = {};
                    var5.remote = var2;
                    var3 = var1._persisted;
                    var5.persisted = var3;
                    var3 = null;
                    var4 = var3 == var11;
                    var5.channelMissing = var4;
                    var12 = _closure1_slot101;
                    var4 = _closure1_slot84;
                    var4 = var4.bind(var0)();
                    var4 = var12.bind(var0)(var1, var4);
                    var5.isOld = var4;
                    var4 = var3 != var11;
                    if (!var4) {
                        _fun35608_ip = 138;
                        continue _fun35608
                    }
                case 119:
                    var14 = _closure1_slot25;
                    var13 = var14.has;
                    var12 = var11.type;
                    var4 = var13.bind(var14)(var12);
                case 138:
                    var5.validType = var4;
                    var4 = var3 != var11;
                    if (!var4) {
                        _fun35608_ip = 166;
                        continue _fun35608
                    }
                case 152:
                    var12 = _closure1_slot22;
                    var11 = var11.type;
                    var4 = var12.bind(var0)(var11);
                case 166:
                    var5.readableType = var4;
                    var4 = _closure1_slot84;
                    var4 = var4.bind(var0)();
                    var5.oldThreadCutoff = var4;
                    var4 = var1.mentionCount;
                    var5.mentionCount = var4;
                    var4 = var1.channelId;
                    var5.channelId = var4;
                    var4 = var1._ackMessageId;
                    var5.ackMessageId = var4;
                    var4 = var1._lastMessageId;
                    var5.lastMessageId = var4;
                    var18 = 'Deleting ReadState';
                    var19 = var10;
                    var17 = var8;
                    var16 = var7;
                    var15 = var5;
                    var4 = var19[var9](var18, var17, var16, var15, var14);
                    if (!var2) {
                        _fun35608_ip = 261;
                        continue _fun35608
                    }
                case 255:
                    var2 = var1._persisted;
                case 261:
                    if (!var2) {
                        _fun35608_ip = 361;
                        continue _fun35608
                    }
                case 264:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 44;
                    var2 = var5[var2];
                    var2 = var4.bind(var0)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.del;
                    var2 = {};
                    var8 = _closure1_slot44;
                    var7 = var8.CHANNEL_ACK;
                    var6 = var1.channelId;
                    var6 = var7.bind(var8)(var6);
                    var2.url = var6;
                    var6 = {};
                    var7 = 2;
                    var6.version = var7;
                    var7 = var1.type;
                    var6.read_state_type = var7;
                    var2.body = var6;
                    var6 = true;
                    var2.oldFormErrors = var6;
                    var2.rejectWithError = var6;
                    var2 = var4.bind(var5)(var2);
                case 361:
                    var4 = _closure2_slot0;
                    var6 = var4._readStates;
                    var5 = var6.get;
                    var4 = var1.type;
                    var5 = var5.bind(var6)(var4);
                    if (!(var3 != var5)) {
                        _fun35608_ip = 408;
                        continue _fun35608
                    }
                case 393:
                    var4 = var5.delete;
                    var3 = var1.channelId;
                    var3 = var4.bind(var5)(var3);
                case 408:
                    var2 = _closure2_slot0;
                    var3 = var2._mentionChannels;
                    var2 = var3.delete;
                    var1 = var1.channelId;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.value = var1;
        var2[33] = var0;
        var0 = {};
        var1 = 'shouldDeleteReadState';
        var0.key = var1;
        var1 = function arg0() {
            _fun35609: for (var _fun35609_ip = 0;;) switch (_fun35609_ip) {
                case 0:
                    var6 = arg0;
                    var1 = this;
                    var0 = _closure1_slot31;
                    var0 = var0.totalUnavailableGuilds;
                    var9 = 0;
                    if (!(var9 === var0)) {
                        _fun35609_ip = 487;
                        continue _fun35609
                    }
                case 28:
                    var0 = var1.type;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun35609_ip = 61;
                        continue _fun35609
                    }
                case 39:
                    var4 = var1.type;
                    var0 = _closure1_slot61;
                    var0 = var0.CHANNEL;
                    if (!(var4 === var0)) {
                        _fun35609_ip = 327;
                        continue _fun35609
                    }
                case 61:
                    var5 = _closure1_slot29;
                    var4 = var5.getBasicChannel;
                    var0 = var1.channelId;
                    var12 = var4.bind(var5)(var0);
                    if (!(var2 != var12)) {
                        _fun35609_ip = 307;
                        continue _fun35609
                    }
                case 88:
                    var5 = _closure1_slot25;
                    var4 = var5.has;
                    var0 = var12.type;
                    var0 = var4.bind(var5)(var0);
                    var4 = !var0;
                    var0 = !var4;
                    if (var4) {
                        _fun35609_ip = 305;
                        continue _fun35609
                    }
                case 119:
                    var5 = _closure1_slot22;
                    var4 = var12.type;
                    var11 = undefined;
                    var4 = var5.bind(var11)(var4);
                    var4 = !var4;
                    if (var4) {
                        _fun35609_ip = 302;
                        continue _fun35609
                    }
                case 144:
                    var7 = _closure1_slot24;
                    var5 = var12.type;
                    var5 = var7.bind(var11)(var5);
                    var5 = !var5;
                    if (!var5) {
                        _fun35609_ip = 299;
                        continue _fun35609
                    }
                case 167:
                    var10 = _closure1_slot26;
                    var8 = var10.has;
                    var7 = var12.type;
                    var7 = var8.bind(var10)(var7);
                    var8 = !var7;
                    if (var8) {
                        _fun35609_ip = 251;
                        continue _fun35609
                    }
                case 192:
                    var16 = var1.guildId;
                    var7 = var2 != var16;
                    if (!var7) {
                        _fun35609_ip = 232;
                        continue _fun35609
                    }
                case 204:
                    var15 = _closure1_slot19;
                    var14 = var15.isActive;
                    var13 = var12.parent_id;
                    var10 = var1.channelId;
                    var7 = var14.bind(var15)(var16, var13, var10);
                case 232:
                    var7 = !var7;
                    if (!var7) {
                        _fun35609_ip = 248;
                        continue _fun35609
                    }
                case 238:
                    var10 = _closure1_slot101;
                    var7 = var10.bind(var11)(var1, var6);
                case 248:
                    var8 = !var7;
                case 251:
                    var7 = !var8;
                    if (!var8) {
                        _fun35609_ip = 296;
                        continue _fun35609
                    }
                case 257:
                    var8 = var1.mentionCount;
                    var8 = var8 > var9;
                    if (!var8) {
                        _fun35609_ip = 293;
                        continue _fun35609
                    }
                case 270:
                    var11 = _closure1_slot35;
                    var10 = var11.canBasicChannel;
                    var9 = _closure1_slot64;
                    var9 = var10.bind(var11)(var9, var12);
                    var8 = !var9;
                case 293:
                    var7 = var8;
                case 296:
                    var5 = var7;
                case 299:
                    var4 = var5;
                case 302:
                    var0 = var4;
                case 305:
                    _fun35609_ip = 325;
                    continue _fun35609;
                case 307:
                    var5 = _closure1_slot101;
                    var4 = undefined;
                    var4 = var5.bind(var4)(var1, var6);
                    var4 = !var4;
                    var0 = !var4;
                case 325:
                    return var0;
                case 327:
                    var5 = var1.type;
                    var0 = _closure1_slot61;
                    var0 = var0.GUILD_HOME;
                    if (!(var0 !== var5)) {
                        _fun35609_ip = 459;
                        continue _fun35609
                    }
                case 346:
                    var0 = _closure1_slot61;
                    var0 = var0.GUILD_EVENT;
                    if (!(var0 !== var5)) {
                        _fun35609_ip = 459;
                        continue _fun35609
                    }
                case 360:
                    var0 = _closure1_slot61;
                    var0 = var0.GUILD_ONBOARDING_QUESTION;
                    if (!(var0 !== var5)) {
                        _fun35609_ip = 459;
                        continue _fun35609
                    }
                case 374:
                    var0 = _closure1_slot61;
                    var4 = var0.NOTIFICATION_CENTER;
                    var0 = true;
                    if (!(var4 === var5)) {
                        _fun35609_ip = 482;
                        continue _fun35609
                    }
                case 390:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 40;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.cast;
                    var8 = _closure1_slot39;
                    var7 = var8.getCurrentUser;
                    var7 = var7.bind(var8)();
                    var8 = var2 == var7;
                    if (var8) {
                        _fun35609_ip = 443;
                        continue _fun35609
                    }
                case 438:
                    var4 = var7.id;
                case 443:
                    var5 = var5.bind(var6)(var4);
                    var4 = var1.channelId;
                    var0 = var5 === var4;
                    _fun35609_ip = 482;
                    continue _fun35609;
                case 459:
                    var4 = _closure1_slot32;
                    var3 = var4.getGuild;
                    var1 = var1.channelId;
                    var1 = var3.bind(var4)(var1);
                    var0 = var2 != var1;
                case 482:
                    var0 = !var0;
                    return var0;
                case 487:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var1;
        var2[34] = var0;
        var0 = {};
        var1 = 'getAckTimestamp';
        var0.key = var1;
        var1 = function() {
            _fun35610: for (var _fun35610_ip = 0;;) switch (_fun35610_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._ackMessageTimestamp;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun35610_ip = 47;
                        continue _fun35610
                    }
                case 15:
                    var1 = global;
                    var3 = var1.isNaN;
                    var2 = var0._ackMessageTimestamp;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    if (var1) {
                        _fun35610_ip = 47;
                        continue _fun35610
                    }
                case 39:
                    var1 = var0._ackMessageTimestamp;
                    return var1;
                case 47:
                    var2 = var0._isThread;
                    if (var2) {
                        _fun35610_ip = 335;
                        continue _fun35610
                    }
                case 62:
                    var3 = var0.type;
                    var2 = _closure1_slot61;
                    var2 = var2.GUILD_EVENT;
                    if (!(var3 !== var2)) {
                        _fun35610_ip = 196;
                        continue _fun35610
                    }
                case 81:
                    var3 = var0.type;
                    var2 = _closure1_slot61;
                    var2 = var2.GUILD_ONBOARDING_QUESTION;
                    if (!(var3 !== var2)) {
                        _fun35610_ip = 196;
                        continue _fun35610
                    }
                case 100:
                    var3 = _closure1_slot59;
                    var2 = var0.channelId;
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    if (var2) {
                        _fun35610_ip = 175;
                        continue _fun35610
                    }
                case 119:
                    var5 = _closure1_slot29;
                    var3 = var5.getChannel;
                    var2 = var0.channelId;
                    var3 = var3.bind(var5)(var2);
                    var2 = null;
                    var2 = var2 != var3;
                    var4 = undefined;
                    if (!var2) {
                        _fun35610_ip = 215;
                        continue _fun35610
                    }
                case 149:
                    var2 = var3.getGuildId;
                    var5 = var2.bind(var3)();
                    var3 = _closure1_slot32;
                    var2 = var3.getGuild;
                    var4 = var2.bind(var3)(var5);
                    _fun35610_ip = 215;
                    continue _fun35610;
                case 175:
                    var5 = _closure1_slot32;
                    var3 = var5.getGuild;
                    var2 = var0.guildId;
                    var4 = var3.bind(var5)(var2);
                    _fun35610_ip = 215;
                    continue _fun35610;
                case 196:
                    var5 = _closure1_slot32;
                    var3 = var5.getGuild;
                    var2 = var0.channelId;
                    var4 = var3.bind(var5)(var2);
                case 215:
                    var2 = null;
                    if (!(var2 == var4)) {
                        _fun35610_ip = 261;
                        continue _fun35610
                    }
                case 221:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 40;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.extractTimestamp;
                    var2 = var0.channelId;
                    var2 = var3.bind(var5)(var2);
                    _fun35610_ip = 327;
                    continue _fun35610;
                case 261:
                    var3 = _closure1_slot100;
                    var5 = undefined;
                    var4 = var3.bind(var5)(var4);
                    var3 = global;
                    var3 = var3.isNaN;
                    var3 = var3.bind(var5)(var4);
                    var2 = var4;
                    if (!var3) {
                        _fun35610_ip = 327;
                        continue _fun35610
                    }
                case 291:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 40;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.extractTimestamp;
                    var3 = var0.channelId;
                    var2 = var4.bind(var5)(var3);
                case 327:
                    var0._ackMessageTimestamp = var2;
                    return var2;
                case 335:
                    var5 = _closure1_slot99;
                    var4 = var0.guildId;
                    var2 = var0.channelId;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var4, var2);
                    var0._ackMessageTimestamp = var2;
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 40;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.fromTimestamp;
                    var1 = var0._ackMessageTimestamp;
                    var1 = var2.bind(var3)(var1);
                    var0._ackMessageId = var1;
                    var0 = var0._ackMessageTimestamp;
                    return var0;
            }
        };
        var0.value = var1;
        var2[35] = var0;
        var0 = {};
        var1 = 'oldestUnreadTimestamp';
        var0.key = var1;
        var1 = function() {
            _fun35611: for (var _fun35611_ip = 0;;) switch (_fun35611_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.oldestUnreadMessageId;
                    var0 = null;
                    var2 = var0 != var2;
                    var0 = 0;
                    if (!var2) {
                        _fun35611_ip = 62;
                        continue _fun35611
                    }
                case 20:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 40;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.extractTimestamp;
                    var1 = var1.oldestUnreadMessageId;
                    var0 = var2.bind(var3)(var1);
                case 62:
                    return var0;
            }
        };
        var0.get = var1;
        var2[36] = var0;
        var0 = {};
        var1 = 'syncThreadSettings';
        var0.key = var1;
        var1 = function() {
            _fun35612: for (var _fun35612_ip = 0;;) switch (_fun35612_ip) {
                case 0:
                    var0 = this;
                    var3 = true;
                    var0._isThread = var3;
                    var5 = _closure1_slot29;
                    var4 = var5.getChannel;
                    var2 = var0.channelId;
                    var2 = var4.bind(var5)(var2);
                    var4 = null;
                    if (!(var4 != var2)) {
                        _fun35612_ip = 141;
                        continue _fun35612
                    }
                case 39:
                    var8 = var0.guildId;
                    var5 = var4 != var8;
                    if (!var5) {
                        _fun35612_ip = 79;
                        continue _fun35612
                    }
                case 51:
                    var7 = _closure1_slot19;
                    var6 = var7.isActive;
                    var4 = var2.parent_id;
                    var2 = var0.channelId;
                    var5 = var6.bind(var7)(var8, var4, var2);
                case 79:
                    var6 = _closure1_slot20;
                    var4 = var6.hasJoined;
                    var2 = var0.channelId;
                    var4 = var4.bind(var6)(var2);
                    var2 = var0._isActiveThread;
                    var2 = var2 !== var5;
                    if (var2) {
                        _fun35612_ip = 122;
                        continue _fun35612
                    }
                case 112:
                    var6 = var0._isJoinedThread;
                    var2 = var6 !== var4;
                case 122:
                    if (!var2) {
                        _fun35612_ip = 139;
                        continue _fun35612
                    }
                case 125:
                    var0._isActiveThread = var5;
                    var0._isJoinedThread = var4;
                    var2 = true;
                case 139:
                    return var2;
                case 141:
                    var2 = _closure1_slot63;
                    var1 = var2.warn;
                    var4 = var0.channelId;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var0 = 'syncThreadSettings called with channel not in memory ';
                    var0 = var3.bind(var0)(var4);
                    var0 = var1.bind(var2)(var0);
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var1;
        var2[37] = var0;
        var0 = {};
        var1 = 'recordLastViewedTime';
        var0.key = var1;
        var1 = function() {
            _fun35613: for (var _fun35613_ip = 0;;) switch (_fun35613_ip) {
                case 0:
                    var3 = this;
                    var0 = global;
                    var4 = var0.Math;
                    var2 = var4.ceil;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var6 = var0.bind(var1)();
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 40;
                    var5 = var7[var0];
                    var0 = undefined;
                    var5 = var8.bind(var0)(var5);
                    var5 = var5.DISCORD_EPOCH;
                    var5 = var6 - var5;
                    var6 = _closure1_slot1;
                    var1 = 41;
                    var1 = var7[var1];
                    var1 = var6.bind(var0)(var1);
                    var1 = var1.Millis;
                    var1 = var1.DAY;
                    var1 = var5 / var1;
                    var1 = var2.bind(var4)(var1);
                    var2 = var3.lastViewed;
                    if (!(var1 !== var2)) {
                        _fun35613_ip = 174;
                        continue _fun35613
                    }
                case 114:
                    var3.lastViewed = var1;
                    var1 = var3.canTrackUnreads;
                    var1 = var1.bind(var3)();
                    if (!var1) {
                        _fun35613_ip = 146;
                        continue _fun35613
                    }
                case 133:
                    var2 = var3.hasUnread;
                    var2 = var2.bind(var3)();
                    var1 = !var2;
                case 146:
                    if (!var1) {
                        _fun35613_ip = 174;
                        continue _fun35613
                    }
                case 149:
                    var2 = var3.ack;
                    var1 = {
                        'force': true,
                        'trackAnalytics': false
                    };
                    var1 = var2.bind(var3)(var1);
                case 174:
                    return var0;
            }
        };
        var0.value = var1;
        var2[38] = var0;
        var0 = {};
        var1 = 'forEach';
        var0.key = var1;
        var1 = function arg0() {
            _fun35614: for (var _fun35614_ip = 0;;) switch (_fun35614_ip) {
                case 0:
                    var6 = arg0;
                    var2 = _closure1_slot82;
                    var0 = _closure2_slot0;
                    var1 = var0._readStates;
                    var0 = var1.values;
                    var1 = var0.bind(var1)();
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var2 = var4.bind(var0)();
                    var1 = var2.done;
                    var3 = false;
                    if (var1) {
                        _fun35614_ip = 132;
                        continue _fun35614
                    }
                case 53:
                    var7 = _closure1_slot82;
                    var8 = var2.value;
                    var1 = var8.values;
                    var1 = var1.bind(var8)();
                    var8 = var7.bind(var0)(var1);
                    var7 = var8.bind(var0)();
                    var1 = var7.done;
                    if (var1) {
                        _fun35614_ip = 117;
                        continue _fun35614
                    }
                case 88:
                    var1 = var7.value;
                    var1 = var6.bind(var0)(var1);
                    if (!(var3 !== var1)) {
                        _fun35614_ip = 117;
                        continue _fun35614
                    }
                case 102:
                    var9 = var8.bind(var0)();
                    var1 = var9.done;
                    var7 = var9;
                    if (!var1) {
                        _fun35614_ip = 88;
                        continue _fun35614
                    }
                case 117:
                    var7 = var4.bind(var0)();
                    var1 = var7.done;
                    var2 = var7;
                    if (!var1) {
                        _fun35614_ip = 53;
                        continue _fun35614
                    }
                case 132:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(9);
        var1[0] = var0;
        var0 = {};
        var6 = 'get';
        var0.key = var6;
        var6 = function arg0() {
            _fun35615: for (var _fun35615_ip = 0;;) switch (_fun35615_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35615_ip = 25;
                        continue _fun35615
                    }
                case 12:
                    var1 = _closure1_slot61;
                    var5 = var1.CHANNEL;
                case 25:
                    var1 = _closure2_slot0;
                    var3 = var1._readStates;
                    var1 = var3.get;
                    var4 = var1.bind(var3)(var5);
                    var3 = null;
                    var1 = var3 == var4;
                    var0 = undefined;
                    if (var1) {
                        _fun35615_ip = 69;
                        continue _fun35615
                    }
                case 59:
                    var1 = var4.get;
                    var0 = var1.bind(var4)(var6);
                case 69:
                    if (!(var3 == var0)) {
                        _fun35615_ip = 215;
                        continue _fun35615
                    }
                case 76:
                    var4 = _closure2_slot0;
                    var1 = var4.prototype;
                    var7 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var10 = var7;
                    var9 = var6;
                    var8 = var5;
                    var1 = new var10[var4](var9, var8, var7);
                    var1 = var1 instanceof Object ? var1 : var7;
                    var7 = var4._readStates;
                    var4 = var7.get;
                    var4 = var4.bind(var7)(var5);
                    if (!(var3 == var4)) {
                        _fun35615_ip = 154;
                        continue _fun35615
                    }
                case 126:
                    var3 = global;
                    var3 = var3.Map;
                    var7 = var3.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var3
                        }
                    });
                    var10 = var7;
                    var3 = new var10[var3](var9);
                    var4 = var3 instanceof Object ? var3 : var7;
                case 154:
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var6, var1);
                    var3 = _closure2_slot0;
                    var6 = var3._readStates;
                    var3 = var6.has;
                    var3 = var3.bind(var6)(var5);
                    var0 = var1;
                    if (var3) {
                        _fun35615_ip = 215;
                        continue _fun35615
                    }
                case 191:
                    var2 = _closure2_slot0;
                    var3 = var2._readStates;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var5, var4);
                    var0 = var1;
                case 215:
                    return var0;
            }
        };
        var0.value = var6;
        var1[1] = var0;
        var0 = {};
        var6 = 'getGuildSentinels';
        var0.key = var6;
        var6 = function arg0() {
            _fun35616: for (var _fun35616_ip = 0;;) switch (_fun35616_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0._guildReadStateSentinels;
                    var3 = var2[var1];
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun35616_ip = 41;
                        continue _fun35616
                    }
                case 22:
                    var3 = var0._guildReadStateSentinels;
                    var2 = {};
                    var4 = 0;
                    var2.unreadsSentinel = var4;
                    var3[var1] = var2;
                case 41:
                    var0 = var0._guildReadStateSentinels;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var0.value = var6;
        var1[2] = var0;
        var0 = {};
        var6 = 'resetGuildSentinels';
        var0.key = var6;
        var6 = function() {
            var1 = {};
            var0 = this;
            var0._guildReadStateSentinels = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var6;
        var1[3] = var0;
        var0 = {};
        var6 = 'getIfExists';
        var0.key = var6;
        var6 = function arg0() {
            _fun35618: for (var _fun35618_ip = 0;;) switch (_fun35618_ip) {
                case 0:
                    var3 = arguments[1];
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun35618_ip = 22;
                        continue _fun35618
                    }
                case 9:
                    var1 = _closure1_slot61;
                    var3 = var1.CHANNEL;
                case 22:
                    var1 = _closure2_slot0;
                    var2 = var1._readStates;
                    var1 = var2.get;
                    var3 = var1.bind(var2)(var3);
                    var1 = null;
                    var1 = var1 == var3;
                    var0 = undefined;
                    if (var1) {
                        _fun35618_ip = 69;
                        continue _fun35618
                    }
                case 56:
                    var2 = var3.get;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 69:
                    return var0;
            }
        };
        var0.value = var6;
        var1[4] = var0;
        var0 = {};
        var6 = 'getMentionChannelIds';
        var0.key = var6;
        var6 = function() {
            _fun35619: for (var _fun35619_ip = 0;;) switch (_fun35619_ip) {
                case 0:
                    var0 = new Array(0);
                    var2 = _closure1_slot82;
                    var1 = _closure2_slot0;
                    var1 = var1._mentionChannels;
                    var5 = undefined;
                    var4 = var2.bind(var5)(var1);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var3 = null;
                    if (var1) {
                        _fun35619_ip = 129;
                        continue _fun35619
                    }
                case 45:
                    var7 = var2.value;
                    var8 = _closure2_slot0;
                    var1 = var8.getIfExists;
                    var8 = var1.bind(var8)(var7);
                    if (!(var3 != var8)) {
                        _fun35619_ip = 82;
                        continue _fun35619
                    }
                case 69:
                    var1 = var8.canHaveMentions;
                    var1 = var1.bind(var8)();
                    if (var1) {
                        _fun35619_ip = 104;
                        continue _fun35619
                    }
                case 82:
                    var1 = _closure2_slot0;
                    var8 = var1._mentionChannels;
                    var1 = var8.delete;
                    var1 = var1.bind(var8)(var7);
                    _fun35619_ip = 114;
                    continue _fun35619;
                case 104:
                    var1 = var0.push;
                    var1 = var1.bind(var0)(var7);
                case 114:
                    var7 = var4.bind(var5)();
                    var1 = var7.done;
                    var2 = var7;
                    if (!var1) {
                        _fun35619_ip = 45;
                        continue _fun35619
                    }
                case 129:
                    return var0;
            }
        };
        var0.value = var6;
        var1[5] = var0;
        var0 = {};
        var6 = 'getValue';
        var0.key = var6;
        var6 = function arg0() {
            _fun35620: for (var _fun35620_ip = 0;;) switch (_fun35620_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = arguments[3];
                    var4 = this;
                    var3 = undefined;
                    if (!(var5 === var3)) {
                        _fun35620_ip = 28;
                        continue _fun35620
                    }
                case 15:
                    var1 = _closure1_slot61;
                    var5 = var1.CHANNEL;
                case 28:
                    var2 = var4.getIfExists;
                    var1 = arg0;
                    var2 = var2.bind(var4)(var1, var5);
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun35620_ip = 57;
                        continue _fun35620
                    }
                case 49:
                    var1 = arguments[2];
                    var0 = var1.bind(var3)(var2);
                case 57:
                    return var0;
            }
        };
        var0.value = var6;
        var1[6] = var0;
        var0 = {};
        var6 = 'clear';
        var0.key = var6;
        var6 = function arg0() {
            _fun35621: for (var _fun35621_ip = 0;;) switch (_fun35621_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arguments[1];
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun35621_ip = 25;
                        continue _fun35621
                    }
                case 12:
                    var0 = _closure1_slot61;
                    var4 = var0.CHANNEL;
                case 25:
                    var0 = _closure2_slot0;
                    var2 = var0._readStates;
                    var0 = var2.get;
                    var2 = var0.bind(var2)(var4);
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun35621_ip = 89;
                        continue _fun35621
                    }
                case 54:
                    var0 = var2.delete;
                    var0 = var0.bind(var2)(var3);
                    if (!var0) {
                        _fun35621_ip = 87;
                        continue _fun35621
                    }
                case 67:
                    var1 = _closure2_slot0;
                    var2 = var1._mentionChannels;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var3);
                case 87:
                    return var0;
                case 89:
                    var0 = false;
                    return var0;
            }
        };
        var0.value = var6;
        var1[7] = var0;
        var0 = {};
        var6 = 'clearAll';
        var0.key = var6;
        var5 = function() {
            var0 = _closure2_slot0;
            var2 = var0._readStates;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = var0._mentionChannels;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot78 = var1;
    var18 = {};
    var1._guildReadStateSentinels = var18;
    var18 = var10.Map;
    var19 = var18.prototype;
    var19 = Object.create(var19, {
        constructor: {
            value: var18
        }
    });
    var29 = var19;
    var18 = new var29[var18](var28);
    var18 = var18 instanceof Object ? var18 : var19;
    var1._readStates = var18;
    var10 = var10.Set;
    var18 = var10.prototype;
    var18 = Object.create(var18, {
        constructor: {
            value: var10
        }
    });
    var29 = var18;
    var10 = new var29[var10](var28);
    var10 = var10 instanceof Object ? var10 : var18;
    var1._mentionChannels = var10;
    var10 = 57;
    var10 = var7[var10];
    var20 = var6.bind(var0)(var10);
    var19 = var20.throttle;
    var18 = function(arg0) { // Environment: var5
        var1 = arg0;
        var0 = var1.delete;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var10 = 100;
    var10 = var19.bind(var20)(var18, var10);
    var _closure1_slot79 = var10;
    var10 = 65;
    var10 = var7[var10];
    var10 = var9.bind(var0)(var10);
    var18 = var10.Store;
    var10 = function(arg0) { // Environment: var5
        var3 = function() {
            _fun35625: for (var _fun35625_ip = 0;;) switch (_fun35625_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot8;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot4;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot81;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun35625_ip = 69;
                        continue _fun35625
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun35625_ip = 105;
                    continue _fun35625;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot4;
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
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot9;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var4 = this;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 63;
            var2 = var2[var0];
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var5 = var2.default;
            var2 = _closure1_slot30;
            var3 = new Array(21);
            var3[0] = var2;
            var2 = _closure1_slot39;
            var3[1] = var2;
            var2 = _closure1_slot32;
            var3[2] = var2;
            var25 = _closure1_slot31;
            var3[3] = var25;
            var2 = _closure1_slot29;
            var3[4] = var2;
            var24 = _closure1_slot37;
            var3[5] = var24;
            var2 = _closure1_slot34;
            var3[6] = var2;
            var23 = _closure1_slot35;
            var3[7] = var23;
            var2 = _closure1_slot11;
            var3[8] = var2;
            var2 = _closure1_slot19;
            var3[9] = var2;
            var2 = _closure1_slot20;
            var3[10] = var2;
            var2 = _closure1_slot28;
            var3[11] = var2;
            var22 = _closure1_slot14;
            var3[12] = var22;
            var2 = _closure1_slot13;
            var3[13] = var2;
            var21 = _closure1_slot12;
            var3[14] = var21;
            var2 = _closure1_slot38;
            var3[15] = var2;
            var20 = _closure1_slot40;
            var3[16] = var20;
            var19 = _closure1_slot18;
            var3[17] = var19;
            var2 = _closure1_slot16;
            var3[18] = var2;
            var18 = _closure1_slot21;
            var3[19] = var18;
            var2 = _closure1_slot17;
            var3[20] = var2;
            var2 = var3.push;
            var2 = var2.bind(var3)(var5);
            var17 = var4.waitFor;
            var47 = _closure1_slot19;
            var46 = _closure1_slot27;
            var45 = _closure1_slot11;
            var44 = _closure1_slot28;
            var43 = _closure1_slot29;
            var42 = _closure1_slot30;
            var41 = _closure1_slot10;
            var37 = _closure1_slot32;
            var36 = _closure1_slot33;
            var35 = _closure1_slot20;
            var34 = _closure1_slot34;
            var31 = _closure1_slot36;
            var29 = _closure1_slot38;
            var27 = _closure1_slot39;
            var48 = var4;
            var40 = var21;
            var39 = var25;
            var38 = var22;
            var33 = var19;
            var32 = var23;
            var30 = var24;
            var28 = var18;
            var26 = var20;
            var2 = var48[var17](var47, var46, var45, var44, var43, var42, var41, var40, var39, var38, var37, var36, var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25);
            var3 = var4.syncWith;
            var5 = _closure1_slot28;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot107;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(30);
        var0[0] = var4;
        var4 = {};
        var6 = 'getReadStatesByChannel';
        var4.key = var6;
        var6 = function() {
            _fun35627: for (var _fun35627_ip = 0;;) switch (_fun35627_ip) {
                case 0:
                    var1 = _closure1_slot78;
                    var2 = var1._readStates;
                    var1 = var2.get;
                    var0 = _closure1_slot61;
                    var0 = var0.CHANNEL;
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun35627_ip = 67;
                        continue _fun35627
                    }
                case 39:
                    var1 = global;
                    var1 = var1.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var4 = var2;
                    var1 = new var4[var1](var3);
                    var0 = var1 instanceof Object ? var1 : var2;
                case 67:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getForDebugging';
        var4.key = var6;
        var6 = function arg0() {
            _fun35628: for (var _fun35628_ip = 0;;) switch (_fun35628_ip) {
                case 0:
                    var3 = arguments[1];
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun35628_ip = 22;
                        continue _fun35628
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var3 = var0.CHANNEL;
                case 22:
                    var2 = _closure1_slot78;
                    var1 = var2.getIfExists;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getNotifCenterReadState';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot78;
            var2 = var3.getIfExists;
            var0 = _closure1_slot61;
            var1 = var0.NOTIFICATION_CENTER;
            var0 = arg0;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasUnread';
        var4.key = var6;
        var6 = function arg0() {
            _fun35630: for (var _fun35630_ip = 0;;) switch (_fun35630_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35630_ip = 22;
                        continue _fun35630
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var5 = var0.CHANNEL;
                case 22:
                    var4 = _closure1_slot78;
                    var3 = var4.getValue;
                    var9 = arg0;
                    var7 = function(arg0) { // Environment: var0
                        _fun35631: for (var _fun35631_ip = 0;;) switch (_fun35631_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = var2.canBeUnread;
                                var0 = var0.bind(var2)();
                                if (!var0) {
                                    _fun35631_ip = 26;
                                    continue _fun35631
                                }
                            case 16:
                                var1 = var2.hasUnread;
                                var0 = var1.bind(var2)();
                            case 26:
                                return var0;
                        }
                    };
                    var6 = false;
                    var10 = var4;
                    var8 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'hasUnreadOrMentions';
        var4.key = var6;
        var6 = function arg0() {
            _fun35632: for (var _fun35632_ip = 0;;) switch (_fun35632_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35632_ip = 22;
                        continue _fun35632
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var5 = var0.CHANNEL;
                case 22:
                    var4 = _closure1_slot78;
                    var3 = var4.getValue;
                    var9 = arg0;
                    var7 = function(arg0) { // Environment: var0
                        _fun35633: for (var _fun35633_ip = 0;;) switch (_fun35633_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = var2.canBeUnread;
                                var0 = var0.bind(var2)();
                                if (!var0) {
                                    _fun35633_ip = 26;
                                    continue _fun35633
                                }
                            case 16:
                                var1 = var2.hasUnreadOrMentions;
                                var0 = var1.bind(var2)();
                            case 26:
                                return var0;
                        }
                    };
                    var6 = false;
                    var10 = var4;
                    var8 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'hasTrackedUnread';
        var4.key = var6;
        var6 = function arg0() {
            _fun35634: for (var _fun35634_ip = 0;;) switch (_fun35634_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35634_ip = 22;
                        continue _fun35634
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var5 = var0.CHANNEL;
                case 22:
                    var4 = _closure1_slot78;
                    var3 = var4.getValue;
                    var9 = arg0;
                    var7 = function(arg0) { // Environment: var0
                        _fun35635: for (var _fun35635_ip = 0;;) switch (_fun35635_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = var2.canTrackUnreads;
                                var0 = var0.bind(var2)();
                                if (!var0) {
                                    _fun35635_ip = 26;
                                    continue _fun35635
                                }
                            case 16:
                                var1 = var2.hasUnread;
                                var0 = var1.bind(var2)();
                            case 26:
                                return var0;
                        }
                    };
                    var6 = false;
                    var10 = var4;
                    var8 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isForumPostUnread';
        var4.key = var6;
        var6 = function arg0() {
            _fun35636: for (var _fun35636_ip = 0;;) switch (_fun35636_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35636_ip = 22;
                        continue _fun35636
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var5 = var0.CHANNEL;
                case 22:
                    var4 = _closure1_slot78;
                    var3 = var4.getValue;
                    var9 = arg0;
                    var7 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = var1.isForumPostUnread;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var6 = false;
                    var10 = var4;
                    var8 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getUnreadCount';
        var4.key = var6;
        var6 = function arg0() {
            _fun35638: for (var _fun35638_ip = 0;;) switch (_fun35638_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35638_ip = 22;
                        continue _fun35638
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var5 = var0.CHANNEL;
                case 22:
                    var4 = _closure1_slot78;
                    var3 = var4.getValue;
                    var9 = arg0;
                    var7 = function(arg0) { // Environment: var0
                        _fun35639: for (var _fun35639_ip = 0;;) switch (_fun35639_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.canBeUnread;
                                var2 = var0.bind(var1)();
                                var0 = 0;
                                if (!var2) {
                                    _fun35639_ip = 24;
                                    continue _fun35639
                                }
                            case 18:
                                var0 = var1.unreadCount;
                            case 24:
                                return var0;
                        }
                    };
                    var6 = 0;
                    var10 = var4;
                    var8 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getMentionCount';
        var4.key = var6;
        var6 = function arg0() {
            _fun35640: for (var _fun35640_ip = 0;;) switch (_fun35640_ip) {
                case 0:
                    var4 = arg0;
                    var7 = arguments[1];
                    var3 = undefined;
                    if (!(var7 === var3)) {
                        _fun35640_ip = 25;
                        continue _fun35640
                    }
                case 12:
                    var0 = _closure1_slot61;
                    var7 = var0.CHANNEL;
                case 25:
                    var6 = _closure1_slot78;
                    var5 = var6.getValue;
                    var9 = function(arg0) { // Environment: var0
                        _fun35641: for (var _fun35641_ip = 0;;) switch (_fun35641_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = var2.canHaveMentions;
                                var1 = var0.bind(var2)();
                                var0 = 0;
                                if (!var1) {
                                    _fun35641_ip = 28;
                                    continue _fun35641
                                }
                            case 18:
                                var1 = var2.getMentionCount;
                                var0 = var1.bind(var2)();
                            case 28:
                                return var0;
                        }
                    };
                    var0 = 0;
                    var12 = var6;
                    var11 = var4;
                    var10 = var7;
                    var8 = 0;
                    var1 = var12[var5](var11, var10, var9, var8, var7);
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 64;
                    var2 = var6[var2];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.bind(var3)(var4);
                    if (!var2) {
                        _fun35640_ip = 100;
                        continue _fun35640
                    }
                case 90:
                    var2 = var1 > var0;
                    var0 = 1;
                    if (var2) {
                        _fun35640_ip = 103;
                        continue _fun35640
                    }
                case 100:
                    var0 = var1;
                case 103:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getIsMentionLowImportance';
        var4.key = var6;
        var6 = function arg0() {
            _fun35642: for (var _fun35642_ip = 0;;) switch (_fun35642_ip) {
                case 0:
                    var6 = arguments[1];
                    var0 = undefined;
                    if (!(var6 === var0)) {
                        _fun35642_ip = 22;
                        continue _fun35642
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var6 = var0.CHANNEL;
                case 22:
                    var0 = _closure1_slot61;
                    var0 = var0.CHANNEL;
                    var0 = var6 === var0;
                    if (!var0) {
                        _fun35642_ip = 74;
                        continue _fun35642
                    }
                case 42:
                    var5 = _closure1_slot78;
                    var4 = var5.getValue;
                    var10 = arg0;
                    var8 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.isMentionLowImportance;
                        return var0;
                    };
                    var7 = false;
                    var11 = var5;
                    var9 = var6;
                    var0 = var11[var4](var10, var9, var8, var7, var6);
                case 74:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getGuildChannelUnreadState';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3, arg4() {
            var2 = arg0;
            var _closure3_slot0 = var2;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var1 = arg2;
            var _closure3_slot2 = var1;
            var1 = arg3;
            var _closure3_slot3 = var1;
            var1 = arg4;
            var _closure3_slot4 = var1;
            var5 = _closure1_slot78;
            var4 = var5.getValue;
            var9 = var2.id;
            var1 = _closure1_slot61;
            var8 = var1.CHANNEL;
            var7 = function(arg0) { // Environment: var0
                var6 = arg0;
                var5 = var6.getGuildChannelUnreadState;
                var11 = _closure3_slot0;
                var10 = _closure3_slot1;
                var9 = _closure3_slot2;
                var8 = _closure3_slot3;
                var7 = _closure3_slot4;
                var12 = var6;
                var0 = var12[var5](var11, var10, var9, var8, var7, var6);
                return var0;
            };
            var6 = {
                'mentionCount': 0,
                'unread': false,
                'isMentionLowImportance': false
            };
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'hasRecentlyVisitedAndRead';
        var4.key = var6;
        var6 = function arg0() {
            _fun35646: for (var _fun35646_ip = 0;;) switch (_fun35646_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35646_ip = 22;
                        continue _fun35646
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var5 = var0.CHANNEL;
                case 22:
                    var4 = _closure1_slot78;
                    var3 = var4.getValue;
                    var9 = arg0;
                    var7 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = var1.hasRecentlyVisitedAndRead;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var6 = false;
                    var10 = var4;
                    var8 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'ackMessageId';
        var4.key = var6;
        var6 = function arg0() {
            _fun35648: for (var _fun35648_ip = 0;;) switch (_fun35648_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35648_ip = 22;
                        continue _fun35648
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var5 = var0.CHANNEL;
                case 22:
                    var4 = _closure1_slot78;
                    var3 = var4.getValue;
                    var9 = arg0;
                    var7 = function(arg0) { // Environment: var0
                        _fun35649: for (var _fun35649_ip = 0;;) switch (_fun35649_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.canBeUnread;
                                var2 = var0.bind(var1)();
                                var0 = null;
                                if (!var2) {
                                    _fun35649_ip = 24;
                                    continue _fun35649
                                }
                            case 18:
                                var0 = var1.ackMessageId;
                            case 24:
                                return var0;
                        }
                    };
                    var6 = null;
                    var10 = var4;
                    var8 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getTrackedAckMessageId';
        var4.key = var6;
        var6 = function arg0() {
            _fun35650: for (var _fun35650_ip = 0;;) switch (_fun35650_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35650_ip = 22;
                        continue _fun35650
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var5 = var0.CHANNEL;
                case 22:
                    var4 = _closure1_slot78;
                    var3 = var4.getValue;
                    var9 = arg0;
                    var7 = function(arg0) { // Environment: var0
                        _fun35651: for (var _fun35651_ip = 0;;) switch (_fun35651_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.canTrackUnreads;
                                var2 = var0.bind(var1)();
                                var0 = null;
                                if (!var2) {
                                    _fun35651_ip = 24;
                                    continue _fun35651
                                }
                            case 18:
                                var0 = var1._ackMessageId;
                            case 24:
                                return var0;
                        }
                    };
                    var6 = null;
                    var10 = var4;
                    var8 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'lastMessageId';
        var4.key = var6;
        var6 = function arg0() {
            _fun35652: for (var _fun35652_ip = 0;;) switch (_fun35652_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35652_ip = 22;
                        continue _fun35652
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var5 = var0.CHANNEL;
                case 22:
                    var4 = _closure1_slot78;
                    var3 = var4.getValue;
                    var9 = arg0;
                    var7 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.lastMessageId;
                        return var0;
                    };
                    var6 = null;
                    var10 = var4;
                    var8 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'lastMessageTimestamp';
        var4.key = var6;
        var6 = function arg0() {
            _fun35654: for (var _fun35654_ip = 0;;) switch (_fun35654_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35654_ip = 22;
                        continue _fun35654
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var5 = var0.CHANNEL;
                case 22:
                    var4 = _closure1_slot78;
                    var3 = var4.getValue;
                    var9 = arg0;
                    var7 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.lastMessageTimestamp;
                        return var0;
                    };
                    var6 = 0;
                    var10 = var4;
                    var8 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'lastPinTimestamp';
        var4.key = var6;
        var6 = function arg0() {
            var5 = _closure1_slot78;
            var4 = var5.getValue;
            var0 = _closure1_slot61;
            var8 = var0.CHANNEL;
            var9 = arg0;
            var7 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.lastPinTimestamp;
                return var0;
            };
            var6 = null;
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getOldestUnreadMessageId';
        var4.key = var6;
        var6 = function arg0() {
            _fun35658: for (var _fun35658_ip = 0;;) switch (_fun35658_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35658_ip = 22;
                        continue _fun35658
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var5 = var0.CHANNEL;
                case 22:
                    var4 = _closure1_slot78;
                    var3 = var4.getValue;
                    var9 = arg0;
                    var7 = function(arg0) { // Environment: var0
                        _fun35659: for (var _fun35659_ip = 0;;) switch (_fun35659_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.canTrackUnreads;
                                var2 = var0.bind(var1)();
                                var0 = null;
                                if (!var2) {
                                    _fun35659_ip = 24;
                                    continue _fun35659
                                }
                            case 18:
                                var0 = var1.oldestUnreadMessageId;
                            case 24:
                                return var0;
                        }
                    };
                    var6 = null;
                    var10 = var4;
                    var8 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getOldestUnreadTimestamp';
        var4.key = var6;
        var6 = function arg0() {
            _fun35660: for (var _fun35660_ip = 0;;) switch (_fun35660_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35660_ip = 22;
                        continue _fun35660
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var5 = var0.CHANNEL;
                case 22:
                    var4 = _closure1_slot78;
                    var3 = var4.getValue;
                    var9 = arg0;
                    var7 = function(arg0) { // Environment: var0
                        _fun35661: for (var _fun35661_ip = 0;;) switch (_fun35661_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.canTrackUnreads;
                                var2 = var0.bind(var1)();
                                var0 = 0;
                                if (!var2) {
                                    _fun35661_ip = 24;
                                    continue _fun35661
                                }
                            case 18:
                                var0 = var1.oldestUnreadTimestamp;
                            case 24:
                                return var0;
                        }
                    };
                    var6 = 0;
                    var10 = var4;
                    var8 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'isEstimated';
        var4.key = var6;
        var6 = function arg0() {
            _fun35662: for (var _fun35662_ip = 0;;) switch (_fun35662_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35662_ip = 22;
                        continue _fun35662
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var5 = var0.CHANNEL;
                case 22:
                    var4 = _closure1_slot78;
                    var3 = var4.getValue;
                    var9 = arg0;
                    var7 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.estimated;
                        return var0;
                    };
                    var6 = false;
                    var10 = var4;
                    var8 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'hasOpenedThread';
        var4.key = var6;
        var6 = function arg0() {
            _fun35664: for (var _fun35664_ip = 0;;) switch (_fun35664_ip) {
                case 0:
                    var5 = arguments[1];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun35664_ip = 22;
                        continue _fun35664
                    }
                case 9:
                    var0 = _closure1_slot61;
                    var5 = var0.CHANNEL;
                case 22:
                    var4 = _closure1_slot78;
                    var3 = var4.getValue;
                    var9 = arg0;
                    var7 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0._persisted;
                        return var0;
                    };
                    var6 = false;
                    var10 = var4;
                    var8 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
            }
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'hasUnreadPins';
        var4.key = var6;
        var6 = function arg0() {
            var5 = _closure1_slot78;
            var4 = var5.getValue;
            var0 = _closure1_slot61;
            var8 = var0.CHANNEL;
            var9 = arg0;
            var7 = function(arg0) { // Environment: var0
                _fun35667: for (var _fun35667_ip = 0;;) switch (_fun35667_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.canBeUnread;
                        var0 = var0.bind(var1)();
                        if (!var0) {
                            _fun35667_ip = 32;
                            continue _fun35667
                        }
                    case 16:
                        var2 = var1.lastPinTimestamp;
                        var1 = var1.ackPinTimestamp;
                        var0 = var2 > var1;
                    case 32:
                        return var0;
                }
            };
            var6 = false;
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            return var0;
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'isNewForumThread';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun35668: for (var _fun35668_ip = 0;;) switch (_fun35668_ip) {
                case 0:
                    var3 = arg0;
                    var4 = _closure1_slot78;
                    var2 = var4.get;
                    var1 = arg1;
                    var1 = var2.bind(var4)(var1);
                    var4 = _closure1_slot78;
                    var2 = var4.get;
                    var2 = var2.bind(var4)(var3);
                    var4 = var2._persisted;
                    var2 = true;
                    if (!(var2 !== var4)) {
                        _fun35668_ip = 153;
                        continue _fun35668
                    }
                case 49:
                    var4 = var1.ackMessageIdAtChannelSelect;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun35668_ip = 153;
                        continue _fun35668
                    }
                case 61:
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 40;
                    var2 = var2[var5];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var2);
                    var2 = var6.compare;
                    var1 = var1.ackMessageIdAtChannelSelect;
                    var2 = var2.bind(var6)(var3, var1);
                    var1 = 0;
                    if (!(!(var2 <= var1))) {
                        _fun35668_ip = 153;
                        continue _fun35668
                    }
                case 107:
                    var2 = _closure1_slot100;
                    var1 = arg2;
                    var1 = var2.bind(var4)(var1);
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var0 = var0[var5];
                    var2 = var2.bind(var4)(var0);
                    var0 = var2.extractTimestamp;
                    var0 = var0.bind(var2)(var3);
                    var0 = var0 > var1;
                    return var0;
                case 153:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'getAllReadStates';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = new Array(0);
            var _closure3_slot1 = var0;
            var3 = _closure1_slot78;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                _fun35670: for (var _fun35670_ip = 0;;) switch (_fun35670_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = var4.type;
                        var1 = _closure1_slot61;
                        var1 = var1.GUILD_HOME;
                        if (!(var1 !== var2)) {
                            _fun35670_ip = 230;
                            continue _fun35670
                        }
                    case 28:
                        var1 = _closure1_slot61;
                        var1 = var1.GUILD_EVENT;
                        if (!(var1 !== var2)) {
                            _fun35670_ip = 230;
                            continue _fun35670
                        }
                    case 45:
                        var1 = _closure1_slot61;
                        var1 = var1.GUILD_ONBOARDING_QUESTION;
                        if (!(var1 !== var2)) {
                            _fun35670_ip = 230;
                            continue _fun35670
                        }
                    case 62:
                        var1 = _closure1_slot61;
                        var1 = var1.NOTIFICATION_CENTER;
                        if (!(var1 !== var2)) {
                            _fun35670_ip = 127;
                            continue _fun35670
                        }
                    case 76:
                        var1 = _closure1_slot61;
                        var1 = var1.MESSAGE_REQUESTS;
                        if (!(var1 !== var2)) {
                            _fun35670_ip = 127;
                            continue _fun35670
                        }
                    case 90:
                        var3 = _closure3_slot1;
                        var2 = var3.push;
                        var5 = var4.serialize;
                        var1 = _closure3_slot0;
                        var1 = var5.bind(var4)(var1);
                        var1 = var2.bind(var3)(var1);
                        _fun35670_ip = 287;
                        continue _fun35670;
                    case 127:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 40;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.cast;
                        var6 = _closure1_slot39;
                        var5 = var6.getCurrentUser;
                        var5 = var5.bind(var6)();
                        var6 = null;
                        var6 = var6 == var5;
                        if (var6) {
                            _fun35670_ip = 182;
                            continue _fun35670
                        }
                    case 177:
                        var1 = var5.id;
                    case 182:
                        var2 = var2.bind(var3)(var1);
                        var1 = var4.channelId;
                        if (!(var2 === var1)) {
                            _fun35670_ip = 287;
                            continue _fun35670
                        }
                    case 196:
                        var3 = _closure3_slot1;
                        var2 = var3.push;
                        var5 = var4.serialize;
                        var1 = _closure3_slot0;
                        var1 = var5.bind(var4)(var1);
                        var1 = var2.bind(var3)(var1);
                        _fun35670_ip = 287;
                        continue _fun35670;
                    case 230:
                        var2 = _closure1_slot32;
                        var1 = var2.getGuild;
                        var0 = var4.channelId;
                        var1 = var1.bind(var2)(var0);
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun35670_ip = 287;
                            continue _fun35670
                        }
                    case 255:
                        var2 = _closure3_slot1;
                        var1 = var2.push;
                        var3 = var4.serialize;
                        var0 = _closure3_slot0;
                        var0 = var3.bind(var4)(var0);
                        var0 = var1.bind(var2)(var0);
                    case 287:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'getGuildUnreadsSentinel';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot78;
            var1 = var2.getGuildSentinels;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = var0.unreadsSentinel;
            return var0;
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'getMentionChannelIds';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot78;
            var0 = var1.getMentionChannelIds;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'getNonChannelAckId';
        var4.key = var6;
        var6 = function arg0() {
            _fun35673: for (var _fun35673_ip = 0;;) switch (_fun35673_ip) {
                case 0:
                    var2 = _closure1_slot39;
                    var0 = var2.getCurrentUser;
                    var2 = var0.bind(var2)();
                    var0 = null;
                    var3 = var0 == var2;
                    var4 = undefined;
                    if (var3) {
                        _fun35673_ip = 32;
                        continue _fun35673
                    }
                case 27:
                    var4 = var2.id;
                case 32:
                    var2 = var0 == var4;
                    var0 = null;
                    if (var2) {
                        _fun35673_ip = 65;
                        continue _fun35673
                    }
                case 41:
                    var3 = _closure1_slot78;
                    var2 = var3.get;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var4, var1);
                    var0 = var1.ackMessageId;
                case 65:
                    return var0;
            }
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'getSnapshot';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun35674: for (var _fun35674_ip = 0;;) switch (_fun35674_ip) {
                case 0:
                    var2 = _closure1_slot78;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.snapshot;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun35674_ip = 80;
                        continue _fun35674
                    }
                case 32:
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var1 = var0.bind(var1)();
                    var0 = var2.snapshot;
                    var0 = var0.takenAt;
                    var1 = var1 - var0;
                    var0 = arg1;
                    if (!(!(var1 > var0))) {
                        _fun35674_ip = 80;
                        continue _fun35674
                    }
                case 72:
                    var0 = var2.snapshot;
                    _fun35674_ip = 90;
                    continue _fun35674;
                case 80:
                    var1 = var2.takeSnapshot;
                    var0 = var1.bind(var2)();
                case 90:
                    return var0;
            }
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'getChannelIdsForWindowId';
        var4.key = var6;
        var5 = function arg0() {
            var2 = _closure1_slot72;
            var1 = var2.getAllChannelIdsForWindowId;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[29] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var10 = var10.bind(var0)(var18);
    var10.displayName = var4;
    var4 = 42;
    var4 = var7[var4];
    var28 = var9.bind(var0)(var4);
    var4 = {};
    var18 = function arg0() {
        _fun35676: for (var _fun35676_ip = 0;;) switch (_fun35676_ip) {
            case 0:
                var0 = arg0;
                var23 = var0.changesByChannelId;
                var21 = var23;
                var0 = undefined;
                var16 = 58;
                var15 = 40;
                var14 = 1;
                var13 = null;
                var12 = 0;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                for (var18 in var21)
                    case 51: {
                        case 63: var4 = var18;
                        var1 = var23[var4];
                        var3 = _closure1_slot78;
                        var2 = var3.getIfExists;
                        var6 = var2.bind(var3)(var4);
                        if (var13 == var6) {
                            _fun35676_ip = 51;
                            continue _fun35676
                        }
                        case 89: var2 = _closure1_slot82;
                        var5 = var1.new_messages;
                        var4 = var13 == var5;
                        var3 = undefined;
                        if (var4) {
                            _fun35676_ip = 112;
                            continue _fun35676
                        }
                        case 108: var3 = var5[var12];
                        case 112: var24 = new Array(1);
                        var24[0] = var3;
                        var3 = var24.concat;
                        var4 = var1.modified_messages;
                        var1 = var4;
                        if (!(var13 == var1)) {
                            _fun35676_ip = 142;
                            continue _fun35676
                        }
                        case 138: var1 = new Array(0);
                        case 142: var24 = var3.bind(var24)(var1);
                        var3 = var24.filter;
                        var25 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var16];
                        var1 = var25.bind(var0)(var1);
                        var1 = var1.isNotNullish;
                        var1 = var3.bind(var24)(var1);
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.bind(var0)();
                        var1 = var2.done;
                        var11 = var5;
                        var10 = var4;
                        var9 = var2;
                        var8 = var3;
                        var2 = var9;
                        if (var1) {
                            _fun35676_ip = 51;
                            continue _fun35676
                        }
                        case 215: var7 = var2.value;
                        var24 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var15];
                        var26 = var24.bind(var0)(var1);
                        var25 = var26.compare;
                        var24 = var7.id;
                        var1 = var6.lastMessageId;
                        var1 = var25.bind(var26)(var24, var1);
                        if (!(var14 === var1)) {
                            _fun35676_ip = 275;
                            continue _fun35676
                        }
                        case 264: var1 = var7.id;
                        var6.lastMessageId = var1;
                        case 275: var24 = var3.bind(var0)();
                        var1 = var24.done;
                        var11 = var5;
                        var10 = var4;
                        var9 = var24;
                        var8 = var3;
                        var2 = var9;
                        if (var1) {
                            _fun35676_ip = 51;
                            continue _fun35676
                        }
                        case 305: _fun35676_ip = 215;
                        continue _fun35676;
                    }
            case 307:
                return var0;
        }
    };
    var4.BACKGROUND_SYNC_CHANNEL_MESSAGES = var18;
    var18 = function arg0() {
        _fun35677: for (var _fun35677_ip = 0;;) switch (_fun35677_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guilds;
                var6 = var0.relationships;
                var5 = var0.initialPrivateChannels;
                var3 = var0.readState;
                var _closure2_slot0 = var3;
                var7 = _closure1_slot85;
                var0 = undefined;
                var7 = var7.bind(var0)();
                var7 = null;
                _closure1_slot67 = var7;
                var8 = _closure1_slot68;
                if (var8) {
                    _fun35677_ip = 65;
                    continue _fun35677
                }
            case 59:
                var8 = var3.partial;
            case 65:
                if (var8) {
                    _fun35677_ip = 82;
                    continue _fun35677
                }
            case 68:
                var9 = _closure1_slot78;
                var8 = var9.clearAll;
                var8 = var8.bind(var9)();
            case 82:
                var8 = false;
                _closure1_slot68 = var8;
                var9 = var3.entries;
                var8 = var9.forEach;
                var3 = function(arg0) { // Environment: var1
                    _fun35678: for (var _fun35678_ip = 0;;) switch (_fun35678_ip) {
                        case 0:
                            var1 = arg0;
                            var5 = var1.read_state_type;
                            var6 = null;
                            if (!(var6 == var5)) {
                                _fun35678_ip = 28;
                                continue _fun35678
                            }
                        case 15:
                            var0 = _closure1_slot61;
                            var5 = var0.CHANNEL;
                        case 28:
                            var0 = _closure1_slot61;
                            var0 = var0.CHANNEL;
                            var3 = var1;
                            if (!(var5 !== var0)) {
                                _fun35678_ip = 99;
                                continue _fun35678
                            }
                        case 48:
                            var0 = {};
                            var4 = var1.id;
                            var0.id = var4;
                            var4 = var1.read_state_type;
                            var0.read_state_type = var4;
                            var4 = var1.badge_count;
                            var0.mention_count = var4;
                            var1 = var1.last_acked_id;
                            var0.last_message_id = var1;
                            var3 = var0;
                        case 99:
                            var4 = _closure1_slot78;
                            var1 = var4.get;
                            var0 = var3.id;
                            var1 = var1.bind(var4)(var0, var5);
                            var0 = true;
                            var1._persisted = var0;
                            var5 = var3.mention_count;
                            var7 = var6 != var5;
                            var4 = 0;
                            var0 = 0;
                            if (!var7) {
                                _fun35678_ip = 147;
                                continue _fun35678
                            }
                        case 144:
                            var0 = var5;
                        case 147:
                            var1._mentionCount = var0;
                            var0 = var3.flags;
                            var1.flags = var0;
                            var0 = var3.last_viewed;
                            var1.lastViewed = var0;
                            var7 = _closure1_slot29;
                            var5 = var7.getBasicChannel;
                            var0 = var3.id;
                            var0 = var5.bind(var7)(var0);
                            if (!(var6 != var0)) {
                                _fun35678_ip = 298;
                                continue _fun35678
                            }
                        case 200:
                            var7 = _closure1_slot23;
                            var5 = var0.type;
                            var9 = undefined;
                            var5 = var7.bind(var9)(var5);
                            if (!var5) {
                                _fun35678_ip = 298;
                                continue _fun35678
                            }
                        case 219:
                            var5 = var3.last_message_id;
                            if (!(var6 != var5)) {
                                _fun35678_ip = 239;
                                continue _fun35678
                            }
                        case 229:
                            var5 = var3.last_message_id;
                            if (!(var4 === var5)) {
                                _fun35678_ip = 298;
                                continue _fun35678
                            }
                        case 239:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 40;
                            var5 = var7[var5];
                            var6 = var6.bind(var9)(var5);
                            var5 = var6.fromTimestamp;
                            var8 = _closure1_slot99;
                            var7 = var0.guild_id;
                            var0 = var0.id;
                            var0 = var8.bind(var9)(var7, var0);
                            var0 = var5.bind(var6)(var0);
                            var1.ackMessageId = var0;
                            _fun35678_ip = 389;
                            continue _fun35678;
                        case 298:
                            var0 = var1.ackedWhileCached;
                            if (var0) {
                                _fun35678_ip = 321;
                                continue _fun35678
                            }
                        case 307:
                            var0 = var3.last_message_id;
                            var1.ackMessageId = var0;
                            _fun35678_ip = 389;
                            continue _fun35678;
                        case 321:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 40;
                            var5 = var5[var0];
                            var0 = undefined;
                            var7 = var6.bind(var0)(var5);
                            var6 = var7.compare;
                            var5 = var1.ackMessageId;
                            var0 = var3.last_message_id;
                            var5 = var6.bind(var7)(var5, var0);
                            var0 = -1;
                            if (!(var0 === var5)) {
                                _fun35678_ip = 389;
                                continue _fun35678
                            }
                        case 377:
                            var0 = var3.last_message_id;
                            var1.ackMessageId = var0;
                        case 389:
                            var0 = undefined;
                            var1.ackedWhileCached = var0;
                            var5 = _closure1_slot86;
                            var3 = var3.last_pin_timestamp;
                            var3 = var5.bind(var0)(var3);
                            var1.ackPinTimestamp = var3;
                            var3 = _closure1_slot78;
                            var6 = var3._mentionChannels;
                            var5 = var6.delete;
                            var3 = var1.channelId;
                            var3 = var5.bind(var6)(var3);
                            var3 = var1._mentionCount;
                            var3 = var3 > var4;
                            if (!var3) {
                                _fun35678_ip = 466;
                                continue _fun35678
                            }
                        case 456:
                            var4 = var1.canHaveMentions;
                            var3 = var4.bind(var1)();
                        case 466:
                            if (!var3) {
                                _fun35678_ip = 494;
                                continue _fun35678
                            }
                        case 469:
                            var2 = _closure1_slot78;
                            var3 = var2._mentionChannels;
                            var2 = var3.add;
                            var1 = var1.channelId;
                            var1 = var2.bind(var3)(var1);
                        case 494:
                            return var0;
                    }
                };
                var3 = var8.bind(var9)(var3);
                var8 = _closure1_slot78;
                var3 = var8.resetGuildSentinels;
                var3 = var3.bind(var8)();
                var8 = _closure1_slot39;
                var3 = var8.getCurrentUser;
                var3 = var3.bind(var8)();
                var8 = var7 == var3;
                var10 = undefined;
                if (var8) {
                    _fun35677_ip = 152;
                    continue _fun35677
                }
            case 147:
                var10 = var3.id;
            case 152:
                if (!(var7 != var10)) {
                    _fun35677_ip = 235;
                    continue _fun35677
                }
            case 156:
                var9 = _closure1_slot78;
                var8 = var9.get;
                var3 = _closure1_slot61;
                var3 = var3.NOTIFICATION_CENTER;
                var8 = var8.bind(var9)(var10, var3);
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var3 = 40;
                var3 = var10[var3];
                var10 = var9.bind(var0)(var3);
                var9 = var10.fromTimestamp;
                var3 = global;
                var11 = var3.Date;
                var3 = var11.now;
                var3 = var3.bind(var11)();
                var3 = var9.bind(var10)(var3);
                var8.lastMessageId = var3;
            case 235:
                var3 = _closure1_slot98;
                var3 = var3.bind(var0)(var6);
                var3 = _closure1_slot95;
                var3 = var3.bind(var0)(var5);
                var3 = _closure1_slot82;
                var6 = var3.bind(var0)(var4);
                var4 = var6.bind(var0)();
                var3 = var4.done;
                var5 = 'full_sync';
                if (var3) {
                    _fun35677_ip = 383;
                    continue _fun35677
                }
            case 280:
                var8 = var4.value;
                var9 = _closure1_slot95;
                var3 = var8.channels;
                var3 = var3.op;
                if (!(var5 !== var3)) {
                    _fun35677_ip = 318;
                    continue _fun35677
                }
            case 304:
                var3 = var8.channels;
                var3 = var3.writes;
                _fun35677_ip = 329;
                continue _fun35677;
            case 318:
                var10 = var8.channels;
                var3 = var10.items;
            case 329:
                var3 = var9.bind(var0)(var3);
                var3 = var8.channelTimestampUpdates;
                if (!(var7 != var3)) {
                    _fun35677_ip = 359;
                    continue _fun35677
                }
            case 344:
                var9 = _closure1_slot105;
                var3 = var8.channelTimestampUpdates;
                var3 = var9.bind(var0)(var3);
            case 359:
                var3 = _closure1_slot97;
                var3 = var3.bind(var0)(var8);
                var8 = var6.bind(var0)();
                var3 = var8.done;
                var4 = var8;
                if (!var3) {
                    _fun35677_ip = 280;
                    continue _fun35677
                }
            case 383:
                var3 = _closure1_slot104;
                var3 = var3.bind(var0)();
                var3 = global;
                var4 = var3.setTimeout;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 41;
                var3 = var6[var3];
                var3 = var5.bind(var0)(var3);
                var3 = var3.Millis;
                var5 = var3.SECOND;
                var3 = 10;
                var3 = var3 * var5;
                var1 = function() { // Environment: var1
                    _fun35679: for (var _fun35679_ip = 0;;) switch (_fun35679_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.entries;
                            var1 = _closure1_slot84;
                            var0 = undefined;
                            var5 = var1.bind(var0)();
                            var1 = _closure1_slot82;
                            var4 = var1.bind(var0)(var2);
                            var2 = var4.bind(var0)();
                            var1 = var2.done;
                            var3 = null;
                            if (var1) {
                                _fun35679_ip = 132;
                                continue _fun35679
                            }
                        case 49:
                            var1 = var2.value;
                            var9 = var1.read_state_type;
                            if (!(var3 == var9)) {
                                _fun35679_ip = 74;
                                continue _fun35679
                            }
                        case 64:
                            var7 = _closure1_slot61;
                            var9 = var7.CHANNEL;
                        case 74:
                            var8 = _closure1_slot78;
                            var7 = var8.get;
                            var1 = var1.id;
                            var7 = var7.bind(var8)(var1, var9);
                            var1 = var7.shouldDeleteReadState;
                            var1 = var1.bind(var7)(var5);
                            if (!var1) {
                                _fun35679_ip = 117;
                                continue _fun35679
                            }
                        case 108:
                            var1 = _closure1_slot79;
                            var1 = var1.bind(var0)(var7);
                        case 117:
                            var7 = var4.bind(var0)();
                            var1 = var7.done;
                            var2 = var7;
                            if (!var1) {
                                _fun35679_ip = 49;
                                continue _fun35679
                            }
                        case 132:
                            return var0;
                    }
                };
                var1 = var4.bind(var0)(var1, var3);
                _closure1_slot71 = var1;
                return var0;
        }
    };
    var4.CONNECTION_OPEN = var18;
    var18 = function arg0() {
        var0 = arg0;
        var2 = var0.lazyPrivateChannels;
        var1 = _closure1_slot95;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var4.CONNECTION_OPEN_SUPPLEMENTAL = var18;
    var4.LOGOUT = var17;
    var17 = function arg0() {
        var0 = arg0;
        var3 = var0.readStates;
        var2 = var0.selectedChannelId;
        var4 = _closure1_slot85;
        var0 = undefined;
        var4 = var4.bind(var0)();
        var4 = null;
        _closure1_slot67 = var4;
        _closure1_slot65 = var2;
        var5 = _closure1_slot28;
        var4 = var5.getCurrentSidebarChannelId;
        var2 = _closure1_slot65;
        var2 = var4.bind(var5)(var2);
        _closure1_slot66 = var2;
        var2 = _closure1_slot78;
        var1 = var2.clearAll;
        var1 = var1.bind(var2)();
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun35682: for (var _fun35682_ip = 0;;) switch (_fun35682_ip) {
                case 0:
                    var3 = arg0;
                    var4 = _closure1_slot78;
                    var2 = var4.get;
                    var1 = var3.channelId;
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.deserializeForOverlay;
                    var2 = var2.bind(var1)(var3);
                    var2 = var1.type;
                    var0 = _closure1_slot61;
                    var0 = var0.CHANNEL;
                    if (!(var2 === var0)) {
                        _fun35682_ip = 67;
                        continue _fun35682
                    }
                case 57:
                    var0 = var1.rebuildChannelState;
                    var0 = var0.bind(var1)();
                case 67:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var4.OVERLAY_INITIALIZE = var17;
    var17 = function arg0() {
        var0 = arg0;
        var3 = var0.readStates;
        var1 = true;
        _closure1_slot68 = var1;
        var1 = _closure1_slot85;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun35684: for (var _fun35684_ip = 0;;) switch (_fun35684_ip) {
                case 0:
                    var9 = arg0;
                    var3 = var9.type;
                    var0 = null;
                    if (!(var0 == var3)) {
                        _fun35684_ip = 27;
                        continue _fun35684
                    }
                case 14:
                    var1 = _closure1_slot61;
                    var3 = var1.CHANNEL;
                case 27:
                    var9.type = var3;
                    var2 = _closure1_slot78;
                    var4 = var2._readStates;
                    var2 = var4.get;
                    var2 = var2.bind(var4)(var3);
                    var4 = var3;
                    var3 = var2;
                    if (!(var0 == var3)) {
                        _fun35684_ip = 94;
                        continue _fun35684
                    }
                case 66:
                    var0 = global;
                    var0 = var0.Map;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var12 = var2;
                    var0 = new var12[var0](var11);
                    var3 = var0 instanceof Object ? var0 : var2;
                case 94:
                    var6 = var3.set;
                    var5 = var9.channelId;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 62;
                    var2 = var2[var0];
                    var0 = undefined;
                    var8 = var7.bind(var0)(var2);
                    var7 = var8.dangerouslyCast;
                    var2 = _closure1_slot78;
                    var2 = var7.bind(var8)(var9, var2);
                    var2 = var6.bind(var3)(var5, var2);
                    var2 = _closure1_slot78;
                    var5 = var2._readStates;
                    var2 = var5.has;
                    var2 = var2.bind(var5)(var4);
                    if (var2) {
                        _fun35684_ip = 192;
                        continue _fun35684
                    }
                case 171:
                    var1 = _closure1_slot78;
                    var2 = var1._readStates;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var4, var3);
                case 192:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var4.CACHE_LOADED = var17;
    var17 = function arg0() {
        _fun35685: for (var _fun35685_ip = 0;;) switch (_fun35685_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guild;
                var _closure2_slot0 = var2;
                var4 = _closure1_slot84;
                var0 = undefined;
                var4 = var4.bind(var0)();
                var _closure2_slot1 = var4;
                var5 = _closure1_slot78;
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var3
                    _fun35686: for (var _fun35686_ip = 0;;) switch (_fun35686_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.guildId;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun35686_ip = 42;
                                continue _fun35686
                            }
                        case 27:
                            var3 = var2.shouldDeleteReadState;
                            var1 = _closure2_slot1;
                            var0 = var3.bind(var2)(var1);
                        case 42:
                            if (!var0) {
                                _fun35686_ip = 57;
                                continue _fun35686
                            }
                        case 45:
                            var1 = var2.delete;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot95;
                var3 = var2.channels;
                var5 = var3.op;
                var3 = 'full_sync';
                if (!(var3 !== var5)) {
                    _fun35685_ip = 89;
                    continue _fun35685
                }
            case 75:
                var3 = var2.channels;
                var3 = var3.writes;
                _fun35685_ip = 100;
                continue _fun35685;
            case 89:
                var5 = var2.channels;
                var3 = var5.items;
            case 100:
                var3 = var4.bind(var0)(var3);
                var4 = var2.channelTimestampUpdates;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun35685_ip = 132;
                    continue _fun35685
                }
            case 117:
                var4 = _closure1_slot105;
                var3 = var2.channelTimestampUpdates;
                var3 = var4.bind(var0)(var3);
            case 132:
                var1 = _closure1_slot97;
                var1 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var4.GUILD_CREATE = var17;
    var17 = function arg0() {
        _fun35687: for (var _fun35687_ip = 0;;) switch (_fun35687_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channelId;
                var1 = var0.isAfter;
                var4 = var0.messages;
                var3 = _closure1_slot78;
                var2 = var3.get;
                var2 = var2.bind(var3)(var6);
                var8 = true;
                var2.loadedMessages = var8;
                var5 = _closure1_slot34;
                var3 = var5.getMessages;
                var7 = var3.bind(var5)(var6);
                var3 = null;
                if (!(var3 != var7)) {
                    _fun35687_ip = 264;
                    continue _fun35687
                }
            case 69:
                var5 = var4.length;
                var6 = 0;
                if (!(var5 > var6)) {
                    _fun35687_ip = 146;
                    continue _fun35687
                }
            case 80:
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 40;
                var9 = var9[var5];
                var5 = undefined;
                var11 = var10.bind(var5)(var9);
                var10 = var11.compare;
                var5 = var4[var6];
                var9 = var5.id;
                var5 = var2.ackMessageId;
                var9 = var10.bind(var11)(var9, var5);
                var5 = 1;
                if (!(var5 === var9)) {
                    _fun35687_ip = 146;
                    continue _fun35687
                }
            case 136:
                var5 = var2.unreadCount;
                if (!(var6 !== var5)) {
                    _fun35687_ip = 254;
                    continue _fun35687
                }
            case 146:
                var5 = var7.hasPresent;
                var5 = var5.bind(var7)();
                if (var5) {
                    _fun35687_ip = 254;
                    continue _fun35687
                }
            case 159:
                var6 = var7.jumpTargetId;
                var5 = var2.ackMessageId;
                if (!(var6 !== var5)) {
                    _fun35687_ip = 254;
                    continue _fun35687
                }
            case 175:
                if (!var1) {
                    _fun35687_ip = 188;
                    continue _fun35687
                }
            case 178:
                var5 = var2.ackMessageId;
                var1 = var3 != var5;
            case 188:
                if (!var1) {
                    _fun35687_ip = 208;
                    continue _fun35687
                }
            case 191:
                var6 = var7.has;
                var5 = var2.ackMessageId;
                var1 = var6.bind(var7)(var5, var8);
            case 208:
                if (!var1) {
                    _fun35687_ip = 264;
                    continue _fun35687
                }
            case 211:
                var5 = var2.unreadCount;
                var1 = var4.length;
                var1 = var5 + var1;
                var2.unreadCount = var1;
                var1 = var2.oldestUnreadMessageId;
                if (!(var3 == var1)) {
                    _fun35687_ip = 264;
                    continue _fun35687
                }
            case 242:
                var1 = var2.rebuildChannelState;
                var1 = var1.bind(var2)();
                _fun35687_ip = 264;
                continue _fun35687;
            case 254:
                var1 = var2.rebuildChannelState;
                var1 = var1.bind(var2)();
            case 264:
                var2 = _closure1_slot96;
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.thread;
                    return var0;
                };
                var4 = var3.bind(var4)(var1);
                var3 = var4.filter;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 58;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var5.bind(var0)(var1);
                var1 = var1.isNotNullish;
                var1 = var3.bind(var4)(var1);
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var4.LOAD_MESSAGES_SUCCESS = var17;
    var17 = function arg0() {
        _fun35689: for (var _fun35689_ip = 0;;) switch (_fun35689_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.channelId;
                var3 = var0.message;
                var9 = var0.isPushNotification;
                var2 = _closure1_slot78;
                var0 = var2.get;
                var6 = var0.bind(var2)(var10);
                var0 = var6.hasUnread;
                var8 = var0.bind(var6)();
                var0 = var6.lastMessageId;
                var4 = null;
                var7 = var4 != var0;
                if (!var7) {
                    _fun35689_ip = 76;
                    continue _fun35689
                }
            case 61:
                var2 = var6.lastMessageId;
                var0 = var3.id;
                var7 = var2 >= var0;
            case 76:
                var0 = var3.id;
                var6.lastMessageId = var0;
                var2 = _closure1_slot39;
                var0 = var2.getCurrentUser;
                var2 = var0.bind(var2)();
                var5 = _closure1_slot29;
                var0 = var5.getBasicChannel;
                var5 = var0.bind(var5)(var10);
                var0 = var3.author;
                if (!(var4 != var0)) {
                    _fun35689_ip = 232;
                    continue _fun35689
                }
            case 125:
                if (!(var4 != var2)) {
                    _fun35689_ip = 232;
                    continue _fun35689
                }
            case 129:
                var0 = var3.author;
                var11 = var0.id;
                var0 = var2.id;
                if (!(var11 === var0)) {
                    _fun35689_ip = 232;
                    continue _fun35689
                }
            case 149:
                var0 = _closure1_slot54;
                var12 = var0.SELF_MENTIONABLE_SYSTEM;
                var11 = var12.has;
                var0 = var3.type;
                var0 = var11.bind(var12)(var0);
                if (var0) {
                    _fun35689_ip = 232;
                    continue _fun35689
                }
            case 177:
                var0 = var6.outgoingAck;
                if (!(var4 != var0)) {
                    _fun35689_ip = 197;
                    continue _fun35689
                }
            case 187:
                var0 = var6.clearOutgoingAck;
                var0 = var0.bind(var6)();
            case 197:
                var12 = _closure1_slot110;
                var11 = {};
                var11.channelId = var10;
                var0 = var3.id;
                var11.messageId = var0;
                var0 = false;
                var11.manual = var0;
                var0 = undefined;
                var0 = var12.bind(var0)(var11);
                return var0;
            case 232:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 59;
                var11 = var11[var0];
                var0 = undefined;
                var12 = var12.bind(var0)(var11);
                var11 = var12.getRootNavigationRef;
                var15 = var11.bind(var12)();
                var12 = var4 == var15;
                var11 = undefined;
                if (var12) {
                    _fun35689_ip = 283;
                    continue _fun35689
                }
            case 273:
                var12 = var15.isReady;
                var11 = var12.bind(var15)();
            case 283:
                var12 = true;
                if (!(var12 !== var11)) {
                    _fun35689_ip = 340;
                    continue _fun35689
                }
            case 289:
                var14 = var4 == var15;
                var11 = undefined;
                var13 = undefined;
                if (!var14) {
                    _fun35689_ip = 470;
                    continue _fun35689
                }
            case 303:
                var16 = _closure1_slot37;
                var14 = var16.getChannelId;
                var16 = var14.bind(var16)();
                var17 = _closure1_slot28;
                var14 = var17.getCurrentSidebarChannelId;
                var13 = var14.bind(var17)(var16);
                var11 = var16;
                _fun35689_ip = 470;
                continue _fun35689;
            case 340:
                var14 = var15.getCurrentRoute;
                var14 = var14.bind(var15)();
                var17 = _closure1_slot11;
                var16 = var17.getChatOpen;
                var15 = var6.channelId;
                var15 = var16.bind(var17)(var15);
                if (var15) {
                    _fun35689_ip = 463;
                    continue _fun35689
                }
            case 373:
                var15 = var4 == var14;
                var16 = undefined;
                if (var15) {
                    _fun35689_ip = 387;
                    continue _fun35689
                }
            case 382:
                var16 = var14.name;
            case 387:
                var15 = 'channel';
                if (!(var15 !== var16)) {
                    _fun35689_ip = 448;
                    continue _fun35689
                }
            case 395:
                var15 = var4 == var14;
                var16 = undefined;
                if (var15) {
                    _fun35689_ip = 409;
                    continue _fun35689
                }
            case 404:
                var16 = var14.name;
            case 409:
                var15 = 'guilds';
                var11 = undefined;
                var13 = undefined;
                if (!(var15 === var16)) {
                    _fun35689_ip = 470;
                    continue _fun35689
                }
            case 421:
                var16 = var14.params;
                var17 = var4 == var16;
                var15 = undefined;
                if (var17) {
                    _fun35689_ip = 441;
                    continue _fun35689
                }
            case 436:
                var15 = var16.channelId;
            case 441:
                var11 = var15;
                var13 = undefined;
                _fun35689_ip = 470;
                continue _fun35689;
            case 448:
                var14 = var14.params;
                var11 = var14.channelId;
                var13 = undefined;
                _fun35689_ip = 470;
                continue _fun35689;
            case 463:
                var11 = var6.channelId;
                var13 = undefined;
            case 470:
                var11 = var11 === var10;
                if (var11) {
                    _fun35689_ip = 481;
                    continue _fun35689
                }
            case 477:
                var11 = var13 === var10;
            case 481:
                if (!var11) {
                    _fun35689_ip = 578;
                    continue _fun35689
                }
            case 484:
                var11 = _closure1_slot94;
                var11 = var11.bind(var0)(var6);
                if (!var11) {
                    _fun35689_ip = 578;
                    continue _fun35689
                }
            case 496:
                if (var9) {
                    _fun35689_ip = 578;
                    continue _fun35689
                }
            case 499:
                var11 = var6.ack;
                var9 = {};
                var13 = var3.id;
                var9.messageId = var13;
                var9.trackAnalytics = var12;
                var12 = {};
                var13 = _closure1_slot43;
                var13 = var13.CHANNEL;
                var12.section = var13;
                var13 = _closure1_slot42;
                var13 = var13.ACK_INCOMING_MESSAGE;
                var12.object = var13;
                var13 = _closure1_slot41;
                var13 = var13.ACK_AUTOMATIC;
                var12.objectType = var13;
                var9.location = var12;
                var9 = var11.bind(var6)(var9);
                return var9;
            case 578:
                var9 = var6.oldestUnreadMessageId;
                if (!(var4 != var9)) {
                    _fun35689_ip = 650;
                    continue _fun35689
                }
            case 588:
                var9 = var6.oldestUnreadMessageIdStale;
                if (var9) {
                    _fun35689_ip = 650;
                    continue _fun35689
                }
            case 597:
                if (var8) {
                    _fun35689_ip = 634;
                    continue _fun35689
                }
            case 600:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 48;
                var9 = var12[var9];
                var11 = var11.bind(var0)(var9);
                var9 = var11.getFocusedChannelId;
                var9 = var9.bind(var11)();
                var8 = var9 === var10;
            case 634:
                if (var8) {
                    _fun35689_ip = 661;
                    continue _fun35689
                }
            case 637:
                var8 = var3.id;
                var6.oldestUnreadMessageId = var8;
                _fun35689_ip = 661;
                continue _fun35689;
            case 650:
                var8 = var3.id;
                var6.oldestUnreadMessageId = var8;
            case 661:
                if (var7) {
                    _fun35689_ip = 679;
                    continue _fun35689
                }
            case 664:
                var7 = var6.unreadCount;
                var7 = var7 + 1;
                var6.unreadCount = var7;
            case 679:
                var8 = _closure1_slot36;
                var7 = var8.isBlockedOrIgnoredForMessage;
                var7 = var7.bind(var8)(var3);
                if (var7) {
                    _fun35689_ip = 1246;
                    continue _fun35689
                }
            case 700:
                var8 = var3.type;
                var7 = _closure1_slot50;
                var7 = var7.RECIPIENT_REMOVE;
                if (!(var8 === var7)) {
                    _fun35689_ip = 750;
                    continue _fun35689
                }
            case 719:
                var8 = var4 == var5;
                var7 = undefined;
                if (var8) {
                    _fun35689_ip = 733;
                    continue _fun35689
                }
            case 728:
                var7 = var5.type;
            case 733:
                var5 = _closure1_slot47;
                var5 = var5.GROUP_DM;
                if (!(var7 !== var5)) {
                    _fun35689_ip = 1246;
                    continue _fun35689
                }
            case 750:
                if (!(var4 != var2)) {
                    _fun35689_ip = 857;
                    continue _fun35689
                }
            case 754:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 43;
                var5 = var8[var5];
                var8 = var7.bind(var0)(var5);
                var7 = var8.isRawMessageMentioned;
                var5 = {};
                var5.rawMessage = var3;
                var9 = var2.id;
                var5.userId = var9;
                var11 = _closure1_slot38;
                var10 = var11.isSuppressEveryoneEnabled;
                var9 = var6.guildId;
                var9 = var10.bind(var11)(var9);
                var5.suppressEveryone = var9;
                var11 = _closure1_slot38;
                var10 = var11.isSuppressRolesEnabled;
                var9 = var6.guildId;
                var9 = var10.bind(var11)(var9);
                var5.suppressRoles = var9;
                var5 = var7.bind(var8)(var5);
                if (var5) {
                    _fun35689_ip = 1109;
                    continue _fun35689
                }
            case 857:
                var8 = _closure1_slot29;
                var7 = var8.getChannel;
                var5 = var3.channel_id;
                var9 = var7.bind(var8)(var5);
                var5 = _closure1_slot88;
                var5 = var5.bind(var0)(var9);
                if (var5) {
                    _fun35689_ip = 1093;
                    continue _fun35689
                }
            case 891:
                var5 = _closure1_slot38;
                var5 = var5.mentionOnAllMessages;
                if (!var5) {
                    _fun35689_ip = 1061;
                    continue _fun35689
                }
            case 909:
                if (!(var4 != var9)) {
                    _fun35689_ip = 1061;
                    continue _fun35689
                }
            case 916:
                var5 = var9.isThread;
                var5 = var5.bind(var9)();
                if (var5) {
                    _fun35689_ip = 1016;
                    continue _fun35689
                }
            case 929:
                var5 = var9.isVocal;
                var5 = var5.bind(var9)();
                if (var5) {
                    _fun35689_ip = 1061;
                    continue _fun35689
                }
            case 942:
                var10 = _closure1_slot38;
                var8 = var10.isChannelMuted;
                var7 = var9.guild_id;
                var5 = var9.id;
                var5 = var8.bind(var10)(var7, var5);
                if (var5) {
                    _fun35689_ip = 1061;
                    continue _fun35689
                }
            case 971:
                var7 = _closure1_slot38;
                var5 = var7.resolvedMessageNotifications;
                var7 = var5.bind(var7)(var9);
                var5 = _closure1_slot53;
                var5 = var5.ALL_MESSAGES;
                if (!(var7 === var5)) {
                    _fun35689_ip = 1061;
                    continue _fun35689
                }
            case 1000:
                var5 = {
                    'shouldMention': true,
                    'isMentionLowImportance': true
                };
                _fun35689_ip = 1123;
                continue _fun35689;
            case 1016:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 60;
                var7 = var10[var7];
                var8 = var8.bind(var0)(var7);
                var7 = var8.computeThreadNotificationSetting;
                var8 = var7.bind(var8)(var9);
                var7 = _closure1_slot62;
                var7 = var7.ALL_MESSAGES;
                if (!(var8 !== var7)) {
                    _fun35689_ip = 1077;
                    continue _fun35689
                }
            case 1061:
                var5 = {
                    'shouldMention': false,
                    'isMentionLowImportance': false
                };
                _fun35689_ip = 1123;
                continue _fun35689;
            case 1077:
                var5 = {
                    'shouldMention': true,
                    'isMentionLowImportance': true
                };
                _fun35689_ip = 1123;
                continue _fun35689;
            case 1093:
                var5 = {
                    'shouldMention': true,
                    'isMentionLowImportance': false
                };
                _fun35689_ip = 1123;
                continue _fun35689;
            case 1109:
                var5 = {
                    'shouldMention': true,
                    'isMentionLowImportance': false
                };
            case 1123:
                var7 = var5.shouldMention;
                var5 = var5.isMentionLowImportance;
                if (!var7) {
                    _fun35689_ip = 1246;
                    continue _fun35689
                }
            case 1138:
                var6.isMentionLowImportance = var5;
                var5 = var6.mentionCount;
                var5 = var5 + 1;
                var6.mentionCount = var5;
                if (!(var4 != var2)) {
                    _fun35689_ip = 1246;
                    continue _fun35689
                }
            case 1163:
                var7 = _closure1_slot78;
                var6 = var7.get;
                var5 = var2.id;
                var4 = _closure1_slot61;
                var4 = var4.NOTIFICATION_CENTER;
                var4 = var6.bind(var7)(var5, var4);
                var3 = var3.id;
                var4.lastMessageId = var3;
                var3 = _closure1_slot18;
                var3 = var3.tabFocused;
                if (!var3) {
                    _fun35689_ip = 1246;
                    continue _fun35689
                }
            case 1217:
                var4 = _closure1_slot112;
                var21 = var2.id;
                var1 = _closure1_slot61;
                var20 = var1.NOTIFICATION_CENTER;
                var18 = false;
                var22 = undefined;
                var19 = undefined;
                var1 = var22[var4](var21, var20, var19, var18, var17);
            case 1246:
                return var0;
        }
    };
    var4.MESSAGE_CREATE = var17;
    var4.MESSAGE_DELETE = var16;
    var4.MESSAGE_DELETE_BULK = var16;
    var4.MESSAGE_ACK = var15;
    var15 = function arg0() {
        _fun35690: for (var _fun35690_ip = 0;;) switch (_fun35690_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var4 = var0.messageId;
                var6 = var0.immediate;
                var2 = undefined;
                if (!(var6 === var2)) {
                    _fun35690_ip = 27;
                    continue _fun35690
                }
            case 25:
                var6 = false;
            case 27:
                var1 = var0.force;
                if (!(var1 === var2)) {
                    _fun35690_ip = 39;
                    continue _fun35690
                }
            case 37:
                var1 = false;
            case 39:
                var8 = var0.context;
                var5 = var0.location;
                var2 = _closure1_slot78;
                var0 = var2.get;
                var3 = var0.bind(var2)(var3);
                var2 = var3.ack;
                var0 = {};
                var0.messageId = var4;
                var7 = _closure1_slot46;
                var7 = var8 !== var7;
                var0.local = var7;
                var0.immediate = var6;
                var0.force = var1;
                var1 = true;
                var0.isExplicitUserAction = var1;
                var0.location = var5;
                var0.trackAnalytics = var1;
                var0 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 != var4)) {
                    _fun35690_ip = 140;
                    continue _fun35690
                }
            case 128:
                var2 = var3.rebuildChannelState;
                var2 = var2.bind(var3)();
                var0 = true;
            case 140:
                return var0;
        }
    };
    var4.CHANNEL_ACK = var15;
    var15 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot78;
        var0 = var1.get;
        var2 = var0.bind(var1)(var2);
        var1 = var2.ack;
        var0 = {
            'messageId': null,
            'local': true,
            'immediate': null,
            'force': null,
            'isExplicitUserAction': true,
            'trackAnalytics': false
        };
        var3 = undefined;
        var0.messageId = var3;
        var0.immediate = var3;
        var0.force = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var4.CHANNEL_LOCAL_ACK = var15;
    var15 = function arg0() {
        var0 = arg0;
        var3 = var0.channelId;
        var2 = var0.timestamp;
        var1 = _closure1_slot78;
        var0 = var1.get;
        var1 = var0.bind(var1)(var3);
        var0 = var1.ackPins;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var4.CHANNEL_PINS_ACK = var15;
    var15 = function arg0() {
        _fun35693: for (var _fun35693_ip = 0;;) switch (_fun35693_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var3 = var0.lastPinTimestamp;
                var2 = _closure1_slot78;
                var1 = var2.get;
                var2 = var1.bind(var2)(var4);
                var1 = _closure1_slot86;
                var0 = undefined;
                var1 = var1.bind(var0)(var3);
                var0 = var2.lastPinTimestamp;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun35693_ip = 63;
                    continue _fun35693
                }
            case 55:
                var2.lastPinTimestamp = var1;
                var0 = true;
            case 63:
                return var0;
        }
    };
    var4.CHANNEL_PINS_UPDATE = var15;
    var15 = function arg0() {
        _fun35694: for (var _fun35694_ip = 0;;) switch (_fun35694_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var1 = _closure1_slot28;
                var0 = var1.getCurrentSidebarChannelId;
                var1 = var0.bind(var1)(var3);
                var4 = _closure1_slot29;
                var0 = var4.getChannel;
                var6 = var0.bind(var4)(var3);
                var8 = null;
                if (!(var8 != var6)) {
                    _fun35694_ip = 136;
                    continue _fun35694
                }
            case 46:
                var5 = _closure1_slot78;
                var4 = var5.get;
                var0 = var6.id;
                var4 = var4.bind(var5)(var0);
                var0 = var4.ackMessageId;
                if (!(var8 == var0)) {
                    _fun35694_ip = 118;
                    continue _fun35694
                }
            case 75:
                var9 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 40;
                var7 = var7[var5];
                var5 = undefined;
                var9 = var9.bind(var5)(var7);
                var7 = var9.fromTimestamp;
                var5 = var4.getAckTimestamp;
                var5 = var5.bind(var4)();
                var0 = var7.bind(var9)(var5);
            case 118:
                var4.ackMessageIdAtChannelSelect = var0;
                var0 = var4.recordLastViewedTime;
                var0 = var0.bind(var4)();
            case 136:
                var4 = _closure1_slot108;
                var0 = _closure1_slot65;
                var7 = undefined;
                var0 = var4.bind(var7)(var0);
                var0 = _closure1_slot66;
                var0 = var4.bind(var7)(var0);
                var5 = _closure1_slot65;
                var4 = false;
                if (!(var5 !== var3)) {
                    _fun35694_ip = 210;
                    continue _fun35694
                }
            case 170:
                var9 = _closure1_slot109;
                var5 = _closure1_slot65;
                var5 = var9.bind(var7)(var5);
                if (var5) {
                    _fun35694_ip = 188;
                    continue _fun35694
                }
            case 186:
                var5 = false;
            case 188:
                var9 = _closure1_slot109;
                var0 = _closure1_slot66;
                var0 = var9.bind(var7)(var0);
                if (var0) {
                    _fun35694_ip = 207;
                    continue _fun35694
                }
            case 204:
                var0 = var5;
            case 207:
                var4 = var0;
            case 210:
                var0 = _closure1_slot65;
                var0 = var0 === var3;
                if (var0) {
                    _fun35694_ip = 270;
                    continue _fun35694
                }
            case 221:
                var9 = var8 == var6;
                var5 = undefined;
                if (var9) {
                    _fun35694_ip = 235;
                    continue _fun35694
                }
            case 230:
                var5 = var6.type;
            case 235:
                var5 = var8 != var5;
                if (!var5) {
                    _fun35694_ip = 267;
                    continue _fun35694
                }
            case 242:
                var8 = _closure1_slot52;
                var9 = var8.GUILD_THREADS_ONLY;
                var8 = var9.has;
                var6 = var6.type;
                var5 = var8.bind(var9)(var6);
            case 267:
                var0 = var5;
            case 270:
                var5 = var4;
                if (!var0) {
                    _fun35694_ip = 341;
                    continue _fun35694
                }
            case 276:
                var6 = _closure1_slot102;
                var0 = {};
                var8 = _closure1_slot43;
                var8 = var8.CHANNEL;
                var0.section = var8;
                var8 = _closure1_slot42;
                var8 = var8.ACK_CHANNEL_SELECT_SAME_CHANNEL;
                var0.object = var8;
                var8 = _closure1_slot41;
                var8 = var8.ACK_AUTOMATIC;
                var0.objectType = var8;
                var0 = var6.bind(var7)(var0, var3);
                if (var0) {
                    _fun35694_ip = 338;
                    continue _fun35694
                }
            case 335:
                var0 = var4;
            case 338:
                var5 = var0;
            case 341:
                var4 = _closure1_slot65;
                var0 = var5;
                if (!(var4 === var3)) {
                    _fun35694_ip = 417;
                    continue _fun35694
                }
            case 352:
                var6 = _closure1_slot102;
                var4 = {};
                var8 = _closure1_slot43;
                var8 = var8.CHANNEL;
                var4.section = var8;
                var8 = _closure1_slot42;
                var8 = var8.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR;
                var4.object = var8;
                var8 = _closure1_slot41;
                var8 = var8.ACK_AUTOMATIC;
                var4.objectType = var8;
                var4 = var6.bind(var7)(var4, var1);
                if (var4) {
                    _fun35694_ip = 414;
                    continue _fun35694
                }
            case 411:
                var4 = var5;
            case 414:
                var0 = var4;
            case 417:
                _closure1_slot65 = var3;
                _closure1_slot66 = var1;
                return var0;
        }
    };
    var4.CHANNEL_SELECT = var15;
    var15 = function arg0() {
        _fun35695: for (var _fun35695_ip = 0;;) switch (_fun35695_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun35695_ip = 127;
                    continue _fun35695
                }
            case 14:
                var2 = _closure1_slot78;
                var1 = var2.get;
                var2 = var1.bind(var2)(var3);
                var1 = var2.hasMentions;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun35695_ip = 127;
                    continue _fun35695
                }
            case 44:
                var2.oldestUnreadMessageId = var0;
                var1 = var2.ack;
                var0 = {
                    'isExplicitUserAction': true,
                    'trackAnalytics': true
                };
                var3 = {};
                var5 = _closure1_slot43;
                var5 = var5.CHANNEL;
                var3.section = var5;
                var5 = _closure1_slot42;
                var5 = var5.ACK_VOICE_CHANNEL_SELECT;
                var3.object = var5;
                var4 = _closure1_slot41;
                var4 = var4.ACK_SEMI_AUTOMATIC;
                var3.objectType = var4;
                var0.location = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 127:
                var0 = undefined;
                return var0;
        }
    };
    var4.VOICE_CHANNEL_SELECT = var15;
    var15 = function arg0() {
        _fun35696: for (var _fun35696_ip = 0;;) switch (_fun35696_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var4 = _closure1_slot22;
                var2 = var1.type;
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                if (var2) {
                    _fun35696_ip = 34;
                    continue _fun35696
                }
            case 30:
                var2 = false;
                return var2;
            case 34:
                var5 = _closure1_slot78;
                var4 = var5.get;
                var2 = var1.id;
                var2 = var4.bind(var5)(var2);
                var4 = var1.lastMessageId;
                var2.lastMessageId = var4;
                var3 = _closure1_slot86;
                var1 = var1.lastPinTimestamp;
                var1 = var3.bind(var0)(var1);
                var2.lastPinTimestamp = var1;
                return var0;
        }
    };
    var4.CHANNEL_CREATE = var15;
    var15 = function arg0() {
        _fun35697: for (var _fun35697_ip = 0;;) switch (_fun35697_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channel;
                var4 = _closure1_slot25;
                var2 = var4.has;
                var0 = var3.type;
                var0 = var2.bind(var4)(var0);
                if (!var0) {
                    _fun35697_ip = 129;
                    continue _fun35697
                }
            case 33:
                var4 = _closure1_slot78;
                var2 = var4.get;
                var0 = var3.id;
                var2 = var2.bind(var4)(var0);
                var0 = var3.lastMessageId;
                var2.lastMessageId = var0;
                var5 = _closure1_slot86;
                var4 = var3.lastPinTimestamp;
                var0 = undefined;
                var0 = var5.bind(var0)(var4);
                var2.lastPinTimestamp = var0;
                var0 = var2.syncThreadSettings;
                var0 = var0.bind(var2)();
                var4 = var3.ownerId;
                var5 = _closure1_slot27;
                var0 = var5.getId;
                var0 = var0.bind(var5)();
                if (!(var4 === var0)) {
                    _fun35697_ip = 129;
                    continue _fun35697
                }
            case 121:
                var0 = true;
                var2.loadedMessages = var0;
            case 129:
                var4 = var3.parent_id;
                var2 = _closure1_slot78;
                var0 = var2.get;
                var2 = var0.bind(var2)(var4);
                var0 = var3.id;
                var2.lastMessageId = var0;
                var2 = _closure1_slot39;
                var0 = var2.getCurrentUser;
                var6 = var0.bind(var2)();
                var5 = var3.ownerId;
                var0 = null;
                var7 = var0 == var6;
                var0 = undefined;
                var2 = undefined;
                if (var7) {
                    _fun35697_ip = 197;
                    continue _fun35697
                }
            case 192:
                var2 = var6.id;
            case 197:
                if (!(var5 === var2)) {
                    _fun35697_ip = 259;
                    continue _fun35697
                }
            case 201:
                var6 = _closure1_slot78;
                var5 = var6.get;
                var2 = var3.id;
                var5 = var5.bind(var6)(var2);
                var2 = true;
                var5._persisted = var2;
                var2 = _closure1_slot110;
                var1 = {};
                var1.channelId = var4;
                var3 = var3.id;
                var1.messageId = var3;
                var3 = false;
                var1.manual = var3;
                var1 = var2.bind(var0)(var1);
            case 259:
                return var0;
        }
    };
    var4.THREAD_CREATE = var15;
    var15 = function arg0() {
        _fun35698: for (var _fun35698_ip = 0;;) switch (_fun35698_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var4 = _closure1_slot25;
                var3 = var4.has;
                var0 = var1.type;
                var0 = var3.bind(var4)(var0);
                var3 = !var0;
                var0 = !var3;
                if (var3) {
                    _fun35698_ip = 68;
                    continue _fun35698
                }
            case 39:
                var3 = _closure1_slot78;
                var2 = var3.get;
                var1 = var1.id;
                var2 = var2.bind(var3)(var1);
                var1 = var2.syncThreadSettings;
                var0 = var1.bind(var2)();
            case 68:
                return var0;
        }
    };
    var4.THREAD_UPDATE = var15;
    var15 = function arg0() {
        var0 = arg0;
        var2 = var0.threads;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun35700: for (var _fun35700_ip = 0;;) switch (_fun35700_ip) {
                case 0:
                    var0 = arg0;
                    var4 = _closure1_slot25;
                    var3 = var4.has;
                    var1 = var0.type;
                    var1 = var3.bind(var4)(var1);
                    if (!var1) {
                        _fun35700_ip = 218;
                        continue _fun35700
                    }
                case 31:
                    var4 = _closure1_slot78;
                    var3 = var4.get;
                    var1 = var0.id;
                    var3 = var3.bind(var4)(var1);
                    var1 = var0.lastMessageId;
                    var3.lastMessageId = var1;
                    var5 = _closure1_slot86;
                    var1 = var0.lastPinTimestamp;
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var3.lastPinTimestamp = var1;
                    var1 = true;
                    var3._isThread = var1;
                    var3._isActiveThread = var1;
                    var6 = _closure1_slot20;
                    var5 = var6.hasJoined;
                    var1 = var0.id;
                    var1 = var5.bind(var6)(var1);
                    var3._isJoinedThread = var1;
                    var1 = var0.isForumPost;
                    var1 = var1.bind(var0)();
                    if (!var1) {
                        _fun35700_ip = 218;
                        continue _fun35700
                    }
                case 138:
                    var5 = _closure1_slot78;
                    var3 = var5.get;
                    var1 = var0.parent_id;
                    var1 = var3.bind(var5)(var1);
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 40;
                    var2 = var5[var2];
                    var5 = var3.bind(var4)(var2);
                    var4 = var5.compare;
                    var3 = var1.lastMessageId;
                    var2 = var0.id;
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = 0;
                    if (!(var3 < var2)) {
                        _fun35700_ip = 218;
                        continue _fun35700
                    }
                case 207:
                    var0 = var0.id;
                    var1.lastMessageId = var0;
                case 218:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var4.THREAD_LIST_SYNC = var15;
    var4.LOAD_THREADS_SUCCESS = var14;
    var4.LOAD_ARCHIVED_THREADS_SUCCESS = var14;
    var4.SEARCH_MESSAGES_SUCCESS = var13;
    var4.MOD_VIEW_SEARCH_MESSAGES_SUCCESS = var13;
    var13 = function arg0() {
        var0 = arg0;
        var2 = var0.id;
        var1 = _closure1_slot78;
        var0 = var1.get;
        var1 = var0.bind(var1)(var2);
        var0 = var1.syncThreadSettings;
        var0 = var0.bind(var1)();
        return var0;
    };
    var4.THREAD_MEMBER_UPDATE = var13;
    var13 = function arg0() {
        _fun35702: for (var _fun35702_ip = 0;;) switch (_fun35702_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 61;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var0 = var3.doesThreadMembersActionAffectMe;
                var0 = var0.bind(var3)(var1);
                if (!var0) {
                    _fun35702_ip = 71;
                    continue _fun35702
                }
            case 42:
                var3 = _closure1_slot78;
                var2 = var3.get;
                var1 = var1.id;
                var2 = var2.bind(var3)(var1);
                var1 = var2.syncThreadSettings;
                var0 = var1.bind(var2)();
            case 71:
                return var0;
        }
    };
    var4.THREAD_MEMBERS_UPDATE = var13;
    var4.CHANNEL_DELETE = var12;
    var4.THREAD_DELETE = var12;
    var12 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = false;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot72;
        var2 = var3.forEachChannel;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun35704: for (var _fun35704_ip = 0;;) switch (_fun35704_ip) {
                case 0:
                    var5 = arg0;
                    var3 = arg1;
                    var2 = var3.has;
                    var0 = _closure2_slot0;
                    var0 = var0.windowId;
                    var0 = var2.bind(var3)(var0);
                    if (!var0) {
                        _fun35704_ip = 166;
                        continue _fun35704
                    }
                case 35:
                    var0 = _closure2_slot0;
                    var3 = var0.focused;
                    var0 = null;
                    var2 = var0 == var5;
                    var0 = false;
                    if (var2) {
                        _fun35704_ip = 155;
                        continue _fun35704
                    }
                case 56:
                    var6 = _closure1_slot78;
                    var4 = var6.get;
                    var4 = var4.bind(var6)(var5);
                    if (var3) {
                        _fun35704_ip = 86;
                        continue _fun35704
                    }
                case 76:
                    var6 = var4.hasUnread;
                    var3 = var6.bind(var4)();
                case 86:
                    if (var3) {
                        _fun35704_ip = 97;
                        continue _fun35704
                    }
                case 89:
                    var3 = true;
                    var4.oldestUnreadMessageIdStale = var3;
                case 97:
                    var4 = _closure1_slot102;
                    var3 = {};
                    var6 = _closure1_slot43;
                    var6 = var6.CHANNEL;
                    var3.section = var6;
                    var6 = _closure1_slot42;
                    var6 = var6.ACK_WINDOW_FOCUS;
                    var3.object = var6;
                    var2 = _closure1_slot41;
                    var2 = var2.ACK_AUTOMATIC;
                    var3.objectType = var2;
                    var2 = undefined;
                    var0 = var4.bind(var2)(var3, var5);
                case 155:
                    if (var0) {
                        _fun35704_ip = 162;
                        continue _fun35704
                    }
                case 158:
                    var0 = _closure2_slot1;
                case 162:
                    _closure2_slot1 = var0;
                case 166:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var0 = _closure2_slot1;
        return var0;
    };
    var4.WINDOW_FOCUS = var12;
    var12 = function arg0() {
        var0 = arg0;
        var3 = var0.channelId;
        var2 = _closure1_slot102;
        var1 = {};
        var4 = _closure1_slot43;
        var4 = var4.CHANNEL;
        var1.section = var4;
        var4 = _closure1_slot42;
        var4 = var4.ACK_CHANNEL_SCROLL;
        var1.object = var4;
        var0 = _closure1_slot41;
        var0 = var0.ACK_AUTOMATIC;
        var1.objectType = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1, var3);
        return var0;
    };
    var4.UPDATE_CHANNEL_DIMENSIONS = var12;
    var12 = function() {
        var0 = null;
        _closure1_slot67 = var0;
        var0 = undefined;
        return var0;
    };
    var4.CURRENT_USER_UPDATE = var12;
    var12 = function arg0() {
        var1 = arg0;
        var5 = var1.channels;
        var4 = var1.context;
        var3 = var1.onFinished;
        var2 = var5.filter;
        var1 = function(arg0) { // Environment: var0
            _fun35711: for (var _fun35711_ip = 0;;) switch (_fun35711_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.messageId;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun35711_ip = 47;
                        continue _fun35711
                    }
                case 17:
                    var4 = _closure1_slot80;
                    var3 = var4.hasUnreadOrMentions;
                    var2 = var1.channelId;
                    var1 = var1.readStateType;
                    var0 = var3.bind(var4)(var2, var1);
                case 47:
                    return var0;
            }
        };
        var2 = var2.bind(var5)(var1);
        var1 = function arg0, arg1, arg2() {
            _fun35708: for (var _fun35708_ip = 0;;) switch (_fun35708_ip) {
                case 0:
                    var5 = arg0;
                    var2 = var5.forEach;
                    var0 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var4 = var1.channelId;
                        var0 = var1.messageId;
                        var3 = var1.readStateType;
                        var2 = _closure1_slot78;
                        var1 = var2.get;
                        var3 = var1.bind(var2)(var4, var3);
                        var2 = var3.ack;
                        var1 = {
                            'messageId': null,
                            'local': true,
                            'immediate': null,
                            'force': null,
                            'isExplicitUserAction': true,
                            'trackAnalytics': false
                        };
                        var1.messageId = var0;
                        var0 = undefined;
                        var1.immediate = var0;
                        var1.force = var0;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0 = var2.bind(var5)(var0);
                    var3 = _closure1_slot46;
                    var2 = arg1;
                    if (!(var2 === var3)) {
                        _fun35708_ip = 105;
                        continue _fun35708
                    }
                case 34:
                    var3 = _closure1_slot69;
                    var2 = var3.push;
                    var4 = var5.map;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.channelId;
                        var0.channel_id = var2;
                        var2 = var1.messageId;
                        var0.message_id = var2;
                        var1 = var1.readStateType;
                        var0.read_state_type = var1;
                        return var0;
                    };
                    var7 = var4.bind(var5)(var1);
                    var1 = new Array(0);
                    var6 = 0;
                    var8 = var1;
                    var4 = arraySpread(var8, var7, var6);
                    var8 = var2;
                    var7 = var1;
                    var6 = var3;
                    var1 = apply(var8, var7, var6);
                    var1 = _closure1_slot70;
                    if (var1) {
                        _fun35708_ip = 105;
                        continue _fun35708
                    }
                case 91:
                    var2 = _closure1_slot89;
                    var1 = undefined;
                    var0 = arg2;
                    var0 = var2.bind(var1)(var0);
                case 105:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = undefined;
        var1 = var1.bind(var0)(var2, var4, var3);
        return var0;
    };
    var4.BULK_ACK = var12;
    var12 = function arg0() {
        var0 = arg0;
        var1 = var0.channelId;
        var0 = var0.windowId;
        var0 = false;
        return var0;
    };
    var4.ENABLE_AUTOMATIC_ACK = var12;
    var12 = function arg0() {
        var0 = arg0;
        var1 = var0.channelId;
        var0 = var0.windowId;
        var0 = false;
        return var0;
    };
    var4.DISABLE_AUTOMATIC_ACK = var12;
    var4.GUILD_FEATURE_ACK = var11;
    var11 = function arg0() {
        _fun35714: for (var _fun35714_ip = 0;;) switch (_fun35714_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildScheduledEvent;
                var5 = var3.guild_id;
                var6 = _closure1_slot78;
                var2 = var6.get;
                var1 = var3.guild_id;
                var0 = _closure1_slot61;
                var0 = var0.GUILD_EVENT;
                var2 = var2.bind(var6)(var1, var0);
                var0 = var3.id;
                var2.lastMessageId = var0;
                var1 = _closure1_slot106;
                var0 = undefined;
                var1 = var1.bind(var0)(var3);
                if (var1) {
                    _fun35714_ip = 107;
                    continue _fun35714
                }
            case 72:
                var6 = _closure1_slot38;
                var1 = var6.isMuteScheduledEventsEnabled;
                var1 = var1.bind(var6)(var5);
                if (var1) {
                    _fun35714_ip = 162;
                    continue _fun35714
                }
            case 90:
                var1 = var2.mentionCount;
                var1 = var1 + 1;
                var2.mentionCount = var1;
                _fun35714_ip = 162;
                continue _fun35714;
            case 107:
                var2 = _closure1_slot111;
                var1 = {};
                var6 = 'GUILD_FEATURE_ACK';
                var1.type = var6;
                var1.id = var5;
                var4 = _closure1_slot61;
                var4 = var4.GUILD_EVENT;
                var1.ackType = var4;
                var3 = var3.id;
                var1.ackedId = var3;
                var3 = false;
                var1.local = var3;
                var1 = var2.bind(var0)(var1);
            case 162:
                return var0;
        }
    };
    var4.GUILD_SCHEDULED_EVENT_CREATE = var11;
    var11 = function arg0() {
        _fun35715: for (var _fun35715_ip = 0;;) switch (_fun35715_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildScheduledEvent;
                var5 = var2.guild_id;
                var1 = _closure1_slot106;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                var0 = !var1;
                if (var1) {
                    _fun35715_ip = 133;
                    continue _fun35715
                }
            case 34:
                var1 = _closure1_slot60;
                var4 = var1.CANCELED;
                var6 = new Array(2);
                var6[0] = var4;
                var1 = var1.COMPLETED;
                var6[1] = var1;
                var4 = var6.includes;
                var1 = var2.status;
                var1 = var4.bind(var6)(var1);
                var4 = !var1;
                var1 = !var4;
                if (var4) {
                    _fun35715_ip = 130;
                    continue _fun35715
                }
            case 86:
                var6 = _closure1_slot78;
                var4 = var6.get;
                var3 = _closure1_slot61;
                var3 = var3.GUILD_EVENT;
                var4 = var4.bind(var6)(var5, var3);
                var3 = var4.handleGuildEventRemoval;
                var2 = var2.id;
                var2 = var3.bind(var4)(var5, var2);
                var1 = undefined;
            case 130:
                var0 = var1;
            case 133:
                return var0;
        }
    };
    var4.GUILD_SCHEDULED_EVENT_UPDATE = var11;
    var11 = function arg0() {
        _fun35716: for (var _fun35716_ip = 0;;) switch (_fun35716_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildScheduledEvent;
                var4 = var1.guild_id;
                var3 = _closure1_slot106;
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                if (var3) {
                    _fun35716_ip = 80;
                    continue _fun35716
                }
            case 31:
                var6 = _closure1_slot78;
                var5 = var6.get;
                var3 = var1.guild_id;
                var2 = _closure1_slot61;
                var2 = var2.GUILD_EVENT;
                var3 = var5.bind(var6)(var3, var2);
                var2 = var3.handleGuildEventRemoval;
                var1 = var1.id;
                var1 = var2.bind(var3)(var4, var1);
                return var0;
            case 80:
                var0 = false;
                return var0;
        }
    };
    var4.GUILD_SCHEDULED_EVENT_DELETE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var1 = var0.guild;
        var3 = _closure1_slot78;
        var2 = var3.clear;
        var1 = var1.id;
        var0 = _closure1_slot61;
        var0 = var0.GUILD_EVENT;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var4.GUILD_DELETE = var11;
    var11 = function arg0() {
        _fun35718: for (var _fun35718_ip = 0;;) switch (_fun35718_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guild;
                var1 = var2.latest_onboarding_question_id;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun35718_ip = 70;
                    continue _fun35718
                }
            case 20:
                var5 = _closure1_slot78;
                var4 = var5.get;
                var3 = var2.id;
                var0 = _closure1_slot61;
                var0 = var0.GUILD_ONBOARDING_QUESTION;
                var0 = var4.bind(var5)(var3, var0);
                var2 = var2.id;
                var0._guildId = var2;
                var0.lastMessageId = var1;
            case 70:
                var0 = undefined;
                return var0;
        }
    };
    var4.GUILD_UPDATE = var11;
    var11 = function arg0() {
        var0 = arg0;
        var3 = var0.channelId;
        var2 = _closure1_slot102;
        var1 = {};
        var4 = _closure1_slot43;
        var4 = var4.CHANNEL;
        var1.section = var4;
        var4 = _closure1_slot42;
        var4 = var4.ACK_RESORT_THREADS;
        var1.object = var4;
        var0 = _closure1_slot41;
        var0 = var0.ACK_AUTOMATIC;
        var1.objectType = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1, var3);
        return var0;
    };
    var4.RESORT_THREADS = var11;
    var11 = function arg0() {
        _fun35720: for (var _fun35720_ip = 0;;) switch (_fun35720_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var0 = var0.chatOpen;
                if (var0) {
                    _fun35720_ip = 21;
                    continue _fun35720
                }
            case 17:
                var0 = undefined;
                return var0;
            case 21:
                var2 = _closure1_slot102;
                var1 = {};
                var4 = _closure1_slot43;
                var4 = var4.CHANNEL;
                var1.section = var4;
                var4 = _closure1_slot42;
                var4 = var4.ACK_CHANNEL_RTC_UPDATE_CHAT_OPEN;
                var1.object = var4;
                var0 = _closure1_slot41;
                var0 = var0.ACK_AUTOMATIC;
                var1.objectType = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1, var3);
                return var0;
        }
    };
    var4.CHANNEL_RTC_UPDATE_CHAT_OPEN = var11;
    var4.DECAY_READ_STATES = var8;
    var8 = function arg0() {
        _fun35721: for (var _fun35721_ip = 0;;) switch (_fun35721_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.item;
                var3 = _closure1_slot39;
                var0 = var3.getCurrentUser;
                var4 = var0.bind(var3)();
                var3 = null;
                var6 = var3 == var4;
                var0 = undefined;
                var5 = undefined;
                if (var6) {
                    _fun35721_ip = 42;
                    continue _fun35721
                }
            case 37:
                var5 = var4.id;
            case 42:
                if (!(var3 != var5)) {
                    _fun35721_ip = 144;
                    continue _fun35721
                }
            case 46:
                var6 = _closure1_slot78;
                var4 = var6.get;
                var3 = _closure1_slot61;
                var3 = var3.NOTIFICATION_CENTER;
                var4 = var4.bind(var6)(var5, var3);
                var3 = var1.id;
                var4.lastMessageId = var3;
                var3 = _closure1_slot18;
                var3 = var3.tabFocused;
                if (var3) {
                    _fun35721_ip = 112;
                    continue _fun35721
                }
            case 95:
                var3 = var4.mentionCount;
                var3 = var3 + 1;
                var4.mentionCount = var3;
                _fun35721_ip = 142;
                continue _fun35721;
            case 112:
                var4 = _closure1_slot112;
                var2 = _closure1_slot61;
                var9 = var2.NOTIFICATION_CENTER;
                var8 = var1.id;
                var7 = false;
                var11 = undefined;
                var10 = var5;
                var1 = var11[var4](var10, var9, var8, var7, var6);
            case 142:
                return var0;
            case 144:
                var0 = false;
                return var0;
        }
    };
    var4.NOTIFICATION_CENTER_ITEM_CREATE = var8;
    var8 = function arg0() {
        _fun35722: for (var _fun35722_ip = 0;;) switch (_fun35722_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot39;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                var4 = null;
                if (!(var4 != var1)) {
                    _fun35722_ip = 437;
                    continue _fun35722
                }
            case 28:
                var2 = var6.relationship;
                var2 = var2.since;
                if (!(var4 != var2)) {
                    _fun35722_ip = 433;
                    continue _fun35722
                }
            case 47:
                var2 = var6.relationship;
                var3 = var2.type;
                var2 = _closure1_slot51;
                var2 = var2.PENDING_INCOMING;
                if (!(var3 !== var2)) {
                    _fun35722_ip = 100;
                    continue _fun35722
                }
            case 72:
                var2 = var6.relationship;
                var3 = var2.type;
                var2 = _closure1_slot51;
                var2 = var2.FRIEND;
                if (!(var3 === var2)) {
                    _fun35722_ip = 429;
                    continue _fun35722
                }
            case 100:
                var7 = _closure1_slot78;
                var5 = var7.get;
                var3 = var1.id;
                var2 = _closure1_slot61;
                var2 = var2.NOTIFICATION_CENTER;
                var3 = var5.bind(var7)(var3, var2);
                var2 = var6.relationship;
                var5 = var2.type;
                var2 = _closure1_slot51;
                var2 = var2.FRIEND;
                var5 = var5 === var2;
                var2 = global;
                var8 = var2.Date;
                if (var5) {
                    _fun35722_ip = 210;
                    continue _fun35722
                }
            case 166:
                var6 = var6.relationship;
                var12 = var6.since;
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var13 = var7;
                var6 = new var13[var8](var12, var11);
                var7 = var6 instanceof Object ? var6 : var7;
                var6 = var7.getTime;
                var7 = var6.bind(var7)();
                _fun35722_ip = 255;
                continue _fun35722;
            case 210:
                var6 = var2.Date;
                var2 = var6.now;
                var12 = var2.bind(var6)();
                var6 = var8.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var8
                    }
                });
                var13 = var6;
                var2 = new var13[var8](var12, var11);
                var6 = var2 instanceof Object ? var2 : var6;
                var2 = var6.getTime;
                var7 = var2.bind(var6)();
            case 255:
                var2 = var3.ackMessageId;
                var4 = var4 != var2;
                var2 = 0;
                if (!var4) {
                    _fun35722_ip = 309;
                    continue _fun35722
                }
            case 270:
                var8 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 40;
                var6 = var6[var4];
                var4 = undefined;
                var8 = var8.bind(var4)(var6);
                var6 = var8.extractTimestamp;
                var4 = var3.ackMessageId;
                var2 = var6.bind(var8)(var4);
            case 309:
                if (!(var2 < var7)) {
                    _fun35722_ip = 425;
                    continue _fun35722
                }
            case 313:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 40;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var6.bind(var4)(var2);
                var2 = var6.fromTimestamp;
                var2 = var2.bind(var6)(var7);
                var3.lastMessageId = var2;
                var2 = _closure1_slot18;
                var2 = var2.tabFocused;
                if (var2) {
                    _fun35722_ip = 396;
                    continue _fun35722
                }
            case 365:
                var2 = var3.mentionCount;
                if (var5) {
                    _fun35722_ip = 385;
                    continue _fun35722
                }
            case 374:
                var5 = var2 + 1;
                var3.mentionCount = var5;
                _fun35722_ip = 425;
                continue _fun35722;
            case 385:
                var2 = var2 - 1;
                var3.mentionCount = var2;
                _fun35722_ip = 425;
                continue _fun35722;
            case 396:
                var3 = _closure1_slot112;
                var12 = var1.id;
                var0 = _closure1_slot61;
                var11 = var0.NOTIFICATION_CENTER;
                var9 = false;
                var13 = undefined;
                var10 = undefined;
                var0 = var13[var3](var12, var11, var10, var9, var8);
            case 425:
                var0 = undefined;
                return var0;
            case 429:
                var0 = false;
                return var0;
            case 433:
                var0 = false;
                return var0;
            case 437:
                var0 = false;
                return var0;
        }
    };
    var4.RELATIONSHIP_ADD = var8;
    var8 = function arg0() {
        _fun35723: for (var _fun35723_ip = 0;;) switch (_fun35723_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot39;
                var0 = var1.getCurrentUser;
                var0 = var0.bind(var1)();
                var4 = null;
                if (!(var4 != var0)) {
                    _fun35723_ip = 263;
                    continue _fun35723
                }
            case 28:
                var1 = var2.relationship;
                var1 = var1.since;
                if (!(var4 != var1)) {
                    _fun35723_ip = 259;
                    continue _fun35723
                }
            case 47:
                var1 = var2.relationship;
                var3 = var1.type;
                var1 = _closure1_slot51;
                var1 = var1.PENDING_INCOMING;
                if (!(var3 === var1)) {
                    _fun35723_ip = 255;
                    continue _fun35723
                }
            case 75:
                var6 = _closure1_slot78;
                var3 = var6.get;
                var1 = var0.id;
                var0 = _closure1_slot61;
                var0 = var0.NOTIFICATION_CENTER;
                var1 = var3.bind(var6)(var1, var0);
                var0 = global;
                var6 = var0.Date;
                var2 = var2.relationship;
                var9 = var2.since;
                var3 = var6.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var6
                    }
                });
                var10 = var3;
                var2 = new var10[var6](var9, var8);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = var3.getTime;
                var3 = var2.bind(var3)();
                var2 = var1.ackMessageId;
                var6 = var4 != var2;
                var4 = 0;
                var2 = 0;
                if (!var6) {
                    _fun35723_ip = 211;
                    continue _fun35723
                }
            case 172:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 40;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.extractTimestamp;
                var5 = var1.ackMessageId;
                var2 = var6.bind(var7)(var5);
            case 211:
                if (!(var2 <= var3)) {
                    _fun35723_ip = 251;
                    continue _fun35723
                }
            case 215:
                var3 = var0.Math;
                var2 = var3.max;
                var5 = var1.mentionCount;
                var0 = 1;
                var0 = var5 - var0;
                var0 = var2.bind(var3)(var4, var0);
                var1.mentionCount = var0;
            case 251:
                var0 = undefined;
                return var0;
            case 255:
                var0 = false;
                return var0;
            case 259:
                var0 = false;
                return var0;
            case 263:
                var0 = false;
                return var0;
        }
    };
    var4.RELATIONSHIP_REMOVE = var8;
    var8 = function arg0() {
        _fun35724: for (var _fun35724_ip = 0;;) switch (_fun35724_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.ids;
                var2 = var0.optimistic;
                var0 = undefined;
                var _closure2_slot0 = var0;
                if (var2) {
                    _fun35724_ip = 125;
                    continue _fun35724
                }
            case 26:
                var4 = _closure1_slot18;
                var4 = var4.active;
                if (var4) {
                    _fun35724_ip = 125;
                    continue _fun35724
                }
            case 42:
                var5 = _closure1_slot39;
                var4 = var5.getCurrentUser;
                var5 = var4.bind(var5)();
                var4 = null;
                var7 = var4 == var5;
                var6 = undefined;
                if (var7) {
                    _fun35724_ip = 71;
                    continue _fun35724
                }
            case 66:
                var6 = var5.id;
            case 71:
                if (!(var4 != var6)) {
                    _fun35724_ip = 121;
                    continue _fun35724
                }
            case 75:
                var5 = _closure1_slot78;
                var4 = var5.get;
                var2 = _closure1_slot61;
                var2 = var2.NOTIFICATION_CENTER;
                var2 = var4.bind(var5)(var6, var2);
                _closure2_slot0 = var2;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun35725: for (var _fun35725_ip = 0;;) switch (_fun35725_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 40;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var2.bind(var0)(var1);
                            var4 = var5.compare;
                            var2 = _closure2_slot0;
                            var3 = var2.ackMessageId;
                            var2 = arg0;
                            var2 = var4.bind(var5)(var3, var2);
                            var5 = 0;
                            if (!(var2 < var5)) {
                                _fun35725_ip = 105;
                                continue _fun35725
                            }
                        case 59:
                            var2 = _closure2_slot0;
                            var3 = global;
                            var4 = var3.Math;
                            var3 = var4.max;
                            var1 = _closure2_slot0;
                            var6 = var1.mentionCount;
                            var1 = 1;
                            var1 = var6 - var1;
                            var1 = var3.bind(var4)(var1, var5);
                            var2.mentionCount = var1;
                        case 105:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            case 121:
                var0 = false;
                return var0;
            case 125:
                var0 = false;
                return var0;
        }
    };
    var4.NOTIFICATION_CENTER_ITEMS_ACK = var8;
    var8 = function arg0() {
        _fun35726: for (var _fun35726_ip = 0;;) switch (_fun35726_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.ackType;
                var5 = var0.ackedId;
                var4 = var0.local;
                var2 = _closure1_slot39;
                var0 = var2.getCurrentUser;
                var7 = var0.bind(var2)();
                var0 = null;
                var8 = var0 == var7;
                var2 = undefined;
                if (var8) {
                    _fun35726_ip = 53;
                    continue _fun35726
                }
            case 48:
                var2 = var7.id;
            case 53:
                var0 = var0 != var2;
                if (!var0) {
                    _fun35726_ip = 82;
                    continue _fun35726
                }
            case 60:
                var1 = _closure1_slot112;
                var13 = undefined;
                var12 = var2;
                var11 = var6;
                var10 = var5;
                var9 = var4;
                var0 = var13[var1](var12, var11, var10, var9, var8);
            case 82:
                return var0;
        }
    };
    var4.USER_NON_CHANNEL_ACK = var8;
    var8 = function arg0() {
        _fun35727: for (var _fun35727_ip = 0;;) switch (_fun35727_ip) {
            case 0:
                var1 = _closure1_slot82;
                var0 = arg0;
                var0 = var0.channels;
                var6 = undefined;
                var5 = var1.bind(var6)(var0);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun35727_ip = 151;
                    continue _fun35727
                }
            case 42:
                var9 = var3.value;
                var10 = _closure1_slot78;
                var8 = var10.get;
                var1 = var9.id;
                var8 = var8.bind(var10)(var1);
                var10 = _closure1_slot86;
                var1 = var9.lastPinTimestamp;
                var1 = var10.bind(var6)(var1);
                var11 = var8.lastMessageId;
                var10 = var9.lastMessageId;
                var10 = var11 === var10;
                if (!var10) {
                    _fun35727_ip = 110;
                    continue _fun35727
                }
            case 100:
                var11 = var8.lastPinTimestamp;
                var10 = var11 === var1;
            case 110:
                if (var10) {
                    _fun35727_ip = 133;
                    continue _fun35727
                }
            case 113:
                var9 = var9.lastMessageId;
                var8.lastMessageId = var9;
                var8.lastPinTimestamp = var1;
                var2 = true;
            case 133:
                var9 = var5.bind(var6)();
                var1 = var9.done;
                var3 = var9;
                var0 = var2;
                if (!var1) {
                    _fun35727_ip = 42;
                    continue _fun35727
                }
            case 151:
                return var0;
        }
    };
    var4.PASSIVE_UPDATE_V2 = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot109;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        return var0;
    };
    var4.CLEAR_OLDEST_UNREAD_MESSAGE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.channelId;
        var2 = var0.location;
        var1 = _closure1_slot102;
        var0 = undefined;
        var0 = var1.bind(var0)(var2, var3);
        return var0;
    };
    var4.TRY_ACK = var8;
    var8 = function arg0() {
        _fun35730: for (var _fun35730_ip = 0;;) switch (_fun35730_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.ackedId;
                var2 = _closure1_slot39;
                var0 = var2.getCurrentUser;
                var3 = var0.bind(var2)();
                var2 = null;
                var6 = var2 == var3;
                var0 = undefined;
                var5 = undefined;
                if (var6) {
                    _fun35730_ip = 43;
                    continue _fun35730
                }
            case 38:
                var5 = var3.id;
            case 43:
                if (!(var2 != var5)) {
                    _fun35730_ip = 125;
                    continue _fun35730
                }
            case 47:
                var3 = _closure1_slot78;
                var2 = var3.get;
                var1 = _closure1_slot61;
                var1 = var1.MESSAGE_REQUESTS;
                var3 = var2.bind(var3)(var5, var1);
                var1 = var3.ackMessageId;
                if (!(var4 !== var1)) {
                    _fun35730_ip = 121;
                    continue _fun35730
                }
            case 82:
                var3.ackMessageId = var4;
                var2 = var3.ack;
                var1 = {
                    'messageId': null,
                    'isExplicitUserAction': true,
                    'trackAnalytics': false
                };
                var1.messageId = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            case 121:
                var0 = false;
                return var0;
            case 125:
                var0 = false;
                return var0;
        }
    };
    var4.MESSAGE_REQUEST_ACK = var8;
    var8 = function() {
        _fun35731: for (var _fun35731_ip = 0;;) switch (_fun35731_ip) {
            case 0:
                var2 = _closure1_slot39;
                var0 = var2.getCurrentUser;
                var2 = var0.bind(var2)();
                var3 = null;
                var4 = var3 == var2;
                var0 = undefined;
                var5 = undefined;
                if (var4) {
                    _fun35731_ip = 34;
                    continue _fun35731
                }
            case 29:
                var5 = var2.id;
            case 34:
                if (!(var3 != var5)) {
                    _fun35731_ip = 85;
                    continue _fun35731
                }
            case 38:
                var4 = _closure1_slot78;
                var2 = var4.get;
                var1 = _closure1_slot61;
                var1 = var1.MESSAGE_REQUESTS;
                var1 = var2.bind(var4)(var5, var1);
                var2 = var1.ackMessageId;
                if (!(var3 != var2)) {
                    _fun35731_ip = 81;
                    continue _fun35731
                }
            case 73:
                var1.ackMessageId = var0;
                return var0;
            case 81:
                var0 = false;
                return var0;
            case 85:
                var0 = false;
                return var0;
        }
    };
    var4.MESSAGE_REQUEST_CLEAR_ACK = var8;
    var8 = function arg0() {
        _fun35732: for (var _fun35732_ip = 0;;) switch (_fun35732_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.state;
                var0 = _closure1_slot55;
                var0 = var0.ACTIVE;
                var0 = var2 === var0;
                if (!var0) {
                    _fun35732_ip = 100;
                    continue _fun35732
                }
            case 28:
                var4 = _closure1_slot102;
                var3 = {};
                var2 = _closure1_slot43;
                var2 = var2.CHANNEL;
                var3.section = var2;
                var2 = _closure1_slot42;
                var2 = var2.ACK_APP_FOREGROUND;
                var3.object = var2;
                var2 = _closure1_slot41;
                var2 = var2.ACK_AUTOMATIC;
                var3.objectType = var2;
                var2 = _closure1_slot37;
                var1 = var2.getChannelId;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 100:
                return var0;
        }
    };
    var4.APP_STATE_UPDATE = var8;
    var8 = var10.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var10
        }
    });
    var29 = var8;
    var27 = var4;
    var4 = new var29[var10](var28, var27, var26);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot80 = var4;
    var5 = 66;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/ReadStateStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.shouldBadgeMessage = var3;
    var2.ReadState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 5, 57, 6, 7, 1371, 3907, 1663, 1590, 3293, 3923, 3928, 3929, 4188, 3052, 1310, 1376, 1216, 4189, 1372, 4192, 3961, 1410, 4193, 4213, 3050, 3059, 1661, 4267, 1613, 12184, 660, 7876, 1379, 1378, 4268, 1233, 3, 21, 667, 806, 3949, 507, 3589, 1444, 5245, 8686, 3058, 12185, 4543, 8585, 12186, 1307, 1384, 3004, 22, 1304, 3879, 8682, 3057, 1385, 5246, 5856, 566, 2]);