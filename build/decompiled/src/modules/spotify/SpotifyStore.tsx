// modules/spotify/SpotifyStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun50107: for (var _fun50107_ip = 0;;) switch (_fun50107_ip) {
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
                _fun50107_ip = 74;
                continue _fun50107;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot52 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot52 = var0;
    var0 = function arg0, arg1() {
        _fun50110: for (var _fun50110_ip = 0;;) switch (_fun50110_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun50110_ip = 46;
                    continue _fun50110
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun50110_ip = 55;
                    continue _fun50110
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun50110_ip = 343;
                    continue _fun50110
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun50110_ip = 323;
                    continue _fun50110
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun50110_ip = 283;
                    continue _fun50110
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun50110_ip = 270;
                    continue _fun50110
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
                    _fun50110_ip = 163;
                    continue _fun50110
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun50110_ip = 179;
                    continue _fun50110
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun50110_ip = 249;
                    continue _fun50110
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun50110_ip = 249;
                    continue _fun50110
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun50110_ip = 234;
                    continue _fun50110
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun50110_ip = 247;
                    continue _fun50110
                }
            case 234:
                var8 = _closure1_slot54;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun50110_ip = 265;
                continue _fun50110;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun50110_ip = 283;
                continue _fun50110;
            case 270:
                var6 = _closure1_slot54;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun50110_ip = 323;
                    continue _fun50110
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
                    _fun50110_ip = 330;
                    continue _fun50110
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun50111: for (var _fun50111_ip = 0;;) switch (_fun50111_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun50111_ip = 56;
                                continue _fun50111
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
                            _fun50111_ip = 67;
                            continue _fun50111;
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
    var _closure1_slot53 = var0;
    var0 = function arg0, arg1() {
        _fun50112: for (var _fun50112_ip = 0;;) switch (_fun50112_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun50112_ip = 23;
                    continue _fun50112
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun50112_ip = 33;
                    continue _fun50112
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
                    _fun50112_ip = 70;
                    continue _fun50112
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun50112_ip = 55;
                    continue _fun50112
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot54 = var0;
    var0 = function() {
        _fun50113: for (var _fun50113_ip = 0;;) switch (_fun50113_ip) {
            case 0:
                var9 = _closure1_slot44;
                var0 = undefined;
                var4 = null;
                var1 = undefined;
                for (var5 in var9)
                    case 23: {
                        case 32: var12 = var5;
                        var2 = _closure1_slot44;
                        var3 = var2[var12];
                        var2 = var3.connected;
                        if (!var2) {
                            _fun50113_ip = 23;
                            continue _fun50113
                        }
                        case 52: var2 = _closure1_slot45;
                        var2 = var2[var12];
                        if (var4 == var2) {
                            _fun50113_ip = 23;
                            continue _fun50113
                        }
                        case 64: var2 = _closure1_slot45;
                        var13 = var2[var12];
                        var12 = var13.find;
                        var2 = function(arg0) { // Environment: var11
                            var0 = arg0;
                            var0 = var0.is_active;
                            return var0;
                        };
                        var2 = var12.bind(var13)(var2);
                        var1 = var2;
                        if (var4 == var1) {
                            _fun50113_ip = 23;
                            continue _fun50113
                        }
                        case 94: var1 = {};
                        var1.socket = var3;
                        var1.device = var2;
                        return var1;
                    }
            case 108:
                return var0;
        }
    };
    var _closure1_slot55 = var0;
    var0 = function arg0, arg1() {
        _fun50115: for (var _fun50115_ip = 0;;) switch (_fun50115_ip) {
            case 0:
                var1 = arg0;
                var2 = global;
                var3 = var2.Date;
                var0 = var3.now;
                var3 = var0.bind(var3)();
                var0 = null;
                var4 = var0 != var1;
                var0 = 0;
                if (!var4) {
                    _fun50115_ip = 37;
                    continue _fun50115
                }
            case 31:
                var0 = var1.startTime;
            case 37:
                var1 = arg1;
                var1 = var3 - var1;
                var4 = var2.Math;
                var3 = var4.abs;
                var2 = var1 - var0;
                var3 = var3.bind(var4)(var2);
                var2 = _closure1_slot31;
                if (!(var3 > var2)) {
                    _fun50115_ip = 79;
                    continue _fun50115
                }
            case 76:
                var0 = var1;
            case 79:
                return var0;
        }
    };
    var _closure1_slot56 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 18;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {
            'type': 'SPOTIFY_PLAYER_STATE',
            'accountId': null,
            'track': null,
            'volumePercent': 0,
            'isPlaying': false,
            'repeat': false,
            'position': 0,
            'context': null
        };
        var4 = arg0;
        var1.accountId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot57 = var0;
    var0 = function arg0() {
        var3 = _closure1_slot12;
        var2 = var3.findActivity;
        var1 = arg0;
        var0 = function(arg0) { // Environment: var0
            _fun50118: for (var _fun50118_ip = 0;;) switch (_fun50118_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1.party;
                    var3 = null;
                    var0 = var3 != var0;
                    if (!var0) {
                        _fun50118_ip = 33;
                        continue _fun50118
                    }
                case 18:
                    var2 = var1.party;
                    var2 = var2.id;
                    var0 = var3 != var2;
                case 33:
                    if (!var0) {
                        _fun50118_ip = 61;
                        continue _fun50118
                    }
                case 36:
                    var3 = _closure1_slot16;
                    var1 = var1.party;
                    var2 = var1.id;
                    var1 = undefined;
                    var0 = var3.bind(var1)(var2);
                case 61:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot58 = var0;
    var0 = function arg0, arg1() {
        _fun50119: for (var _fun50119_ip = 0;;) switch (_fun50119_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var1 = _closure1_slot44;
                var3 = var4 in var1;
                var1 = _closure1_slot44;
                if (var3) {
                    _fun50119_ip = 99;
                    continue _fun50119
                }
            case 24:
                var3 = _closure1_slot50;
                var5 = var3.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = var5;
                var9 = var4;
                var8 = var2;
                var3 = new var10[var3](var9, var8, var7);
                var3 = var3 instanceof Object ? var3 : var5;
                var1[var4] = var3;
                var6 = _closure1_slot38;
                var5 = var6.info;
                var3 = global;
                var3 = var3.HermesInternal;
                var7 = var3.concat;
                var3 = 'Added account: ';
                var3 = var7.bind(var3)(var4);
                var3 = var5.bind(var6)(var3);
                _fun50119_ip = 148;
                continue _fun50119;
            case 99:
                var1 = var1[var4];
                var1.accessToken = var2;
                var2 = _closure1_slot38;
                var1 = var2.info;
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var0 = 'Updated account access token: ';
                var0 = var3.bind(var0)(var4);
                var0 = var1.bind(var2)(var0);
            case 148:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot59 = var0;
    var0 = function arg0() {
        _fun50120: for (var _fun50120_ip = 0;;) switch (_fun50120_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot44;
                var1 = var4 in var1;
                if (!var1) {
                    _fun50120_ip = 156;
                    continue _fun50120
                }
            case 20:
                var1 = _closure1_slot44;
                var2 = var1[var4];
                var1 = var2.disconnect;
                var1 = var1.bind(var2)();
                var1 = _closure1_slot44;
                var1 = delete var1[var4];
                var1 = _closure1_slot46;
                var3 = var1[var4];
                var1 = null;
                var2 = var1 != var3;
                if (!var2) {
                    _fun50120_ip = 71;
                    continue _fun50120
                }
            case 63:
                var5 = _closure1_slot23;
                var2 = var1 != var5;
            case 71:
                if (!var2) {
                    _fun50120_ip = 102;
                    continue _fun50120
                }
            case 74:
                var3 = var3.track;
                var5 = var3.id;
                var3 = _closure1_slot23;
                var3 = var3.track;
                var3 = var3.id;
                var2 = var5 === var3;
            case 102:
                if (!var2) {
                    _fun50120_ip = 109;
                    continue _fun50120
                }
            case 105:
                var _closure1_slot23 = var1;
            case 109:
                var1 = _closure1_slot46;
                var1 = delete var1[var4];
                var2 = _closure1_slot38;
                var1 = var2.info;
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var0 = 'Removed account: ';
                var0 = var3.bind(var0)(var4);
                var0 = var1.bind(var2)(var0);
            case 156:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot60 = var0;
    var0 = function arg0, arg1() {
        _fun50121: for (var _fun50121_ip = 0;;) switch (_fun50121_ip) {
            case 0:
                var4 = arg1;
                var2 = _closure1_slot53;
                var1 = _closure1_slot45;
                var0 = arg0;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.bind(var0)();
                var1 = var2.done;
                if (var1) {
                    _fun50121_ip = 75;
                    continue _fun50121
                }
            case 40:
                var5 = var2.value;
                var1 = var5.id;
                var1 = var1 === var4;
                var5.is_active = var1;
                var5 = var3.bind(var0)();
                var1 = var5.done;
                var2 = var5;
                if (!var1) {
                    _fun50121_ip = 40;
                    continue _fun50121
                }
            case 75:
                return var0;
        }
    };
    var _closure1_slot61 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun50122: for (var _fun50122_ip = 0;;) switch (_fun50122_ip) {
            case 0:
                var13 = arg0;
                var7 = arg1;
                var1 = _closure1_slot55;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var3 = null;
                if (!(var3 != var1)) {
                    _fun50122_ip = 539;
                    continue _fun50122
                }
            case 28:
                var5 = var1.socket;
                var4 = var1.device;
                var12 = var7.sync_id;
                var9 = var7.party;
                var1 = var7.timestamps;
                if (!(var3 != var12)) {
                    _fun50122_ip = 535;
                    continue _fun50122
                }
            case 65:
                if (!(var3 != var9)) {
                    _fun50122_ip = 535;
                    continue _fun50122
                }
            case 72:
                var6 = var9.id;
                if (!(var3 != var6)) {
                    _fun50122_ip = 535;
                    continue _fun50122
                }
            case 84:
                var8 = _closure1_slot16;
                var6 = var9.id;
                var6 = var8.bind(var0)(var6);
                if (!var6) {
                    _fun50122_ip = 535;
                    continue _fun50122
                }
            case 104:
                if (!(var3 != var1)) {
                    _fun50122_ip = 117;
                    continue _fun50122
                }
            case 108:
                var6 = var1.start;
                if (!(var3 == var6)) {
                    _fun50122_ip = 136;
                    continue _fun50122
                }
            case 117:
                var6 = global;
                var8 = var6.Date;
                var6 = var8.now;
                var6 = var6.bind(var8)();
                _fun50122_ip = 141;
                continue _fun50122;
            case 136:
                var6 = var1.start;
            case 141:
                var1 = global;
                var14 = var1.Math;
                var11 = var14.max;
                var10 = var1.Date;
                var8 = var10.now;
                var8 = var8.bind(var10)();
                var10 = var8 - var6;
                var8 = 0;
                var16 = var11.bind(var14)(var8, var10);
                var10 = _closure1_slot46;
                var8 = var5.accountId;
                var10 = var10[var8];
                var8 = var3 != var10;
                if (!var8) {
                    _fun50122_ip = 214;
                    continue _fun50122
                }
            case 202:
                var11 = var10.repeat;
                var10 = false;
                var8 = var10 === var11;
            case 214:
                var15 = false;
                if (!var8) {
                    _fun50122_ip = 221;
                    continue _fun50122
                }
            case 219:
                var15 = null;
            case 221:
                var8 = _closure1_slot15;
                var10 = var7.metadata;
                var11 = var3 == var10;
                var7 = undefined;
                if (var11) {
                    _fun50122_ip = 245;
                    continue _fun50122
                }
            case 240:
                var7 = var10.type;
            case 245:
                if (!(var3 == var7)) {
                    _fun50122_ip = 259;
                    continue _fun50122
                }
            case 249:
                var10 = _closure1_slot19;
                var7 = var10.TRACK;
            case 259:
                var14 = var8.bind(var0)(var7);
                if (!(var3 != var14)) {
                    _fun50122_ip = 533;
                    continue _fun50122
                }
            case 271:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 20;
                var3 = var8[var3];
                var11 = var7.bind(var0)(var3);
                var10 = var11.play;
                var25 = var5.accountId;
                var24 = var5.accessToken;
                var3 = {};
                var16 = var16 - 0;
                var3.position = var16;
                var16 = var4.id;
                var3.deviceId = var16;
                var3.repeat = var15;
                var26 = var11;
                var23 = var12;
                var22 = var14;
                var21 = var3;
                var3 = var26[var10](var25, var24, var23, var22, var21, var20);
                var3 = {};
                var3.userId = var13;
                var7 = var9.id;
                var3.partyId = var7;
                var3.trackId = var12;
                var3.startTime = var6;
                var _closure1_slot24 = var3;
                var11 = 'presence change';
                var3 = arg2;
                if (!var3) {
                    _fun50122_ip = 453;
                    continue _fun50122
                }
            case 391:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 22;
                var3 = var7[var3];
                var8 = var6.bind(var0)(var3);
                var7 = var8.track;
                var3 = _closure1_slot22;
                var6 = var3.SPOTIFY_LISTEN_ALONG_STARTED;
                var3 = {};
                var9 = var9.id;
                var3.party_id = var9;
                var3.other_user_id = var13;
                var3 = var7.bind(var8)(var6, var3);
                var11 = 'started';
            case 453:
                var3 = _closure1_slot38;
                var2 = var3.info;
                var23 = var5.accountId;
                var17 = var4.name;
                var1 = var1.HermesInternal;
                var8 = var1.concat;
                var26 = 'Listen along ';
                var24 = ': ';
                var22 = ' to ';
                var20 = ' playing ';
                var18 = ' on ';
                var25 = var11;
                var21 = var13;
                var19 = var12;
                var1 = var26[var8](var25, var24, var23, var22, var21, var20, var19, var18, var17, var16);
                var1 = var2.bind(var3)(var1);
            case 533:
                return var0;
            case 535:
                var0 = false;
                return var0;
            case 539:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot62 = var0;
    var7 = function() {
        _fun50123: for (var _fun50123_ip = 0;;) switch (_fun50123_ip) {
            case 0:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 22;
                var1 = var1[var0];
                var0 = undefined;
                var6 = var3.bind(var0)(var1);
                var5 = var6.track;
                var1 = _closure1_slot22;
                var4 = var1.SPOTIFY_LISTEN_ALONG_ENDED;
                var1 = {};
                var7 = _closure1_slot24;
                var3 = null;
                var8 = var3 != var7;
                var7 = null;
                if (!var8) {
                    _fun50123_ip = 67;
                    continue _fun50123
                }
            case 57:
                var8 = _closure1_slot24;
                var7 = var8.partyId;
            case 67:
                var1.party_id = var7;
                var7 = _closure1_slot24;
                var8 = var3 != var7;
                var7 = null;
                if (!var8) {
                    _fun50123_ip = 94;
                    continue _fun50123
                }
            case 85:
                var8 = _closure1_slot24;
                var7 = var8.userId;
            case 94:
                var1.other_user_id = var7;
                var1 = var5.bind(var6)(var4, var1);
                var1 = _closure1_slot24;
                var1 = var3 != var1;
                var5 = null;
                if (!var1) {
                    _fun50123_ip = 128;
                    continue _fun50123
                }
            case 118:
                var1 = _closure1_slot24;
                var5 = var1.trackId;
            case 128:
                _closure1_slot24 = var3;
                var6 = _closure1_slot38;
                var4 = var6.info;
                var1 = 'Listen along stopped';
                var1 = var4.bind(var6)(var1);
                var1 = _closure1_slot55;
                var1 = var1.bind(var0)();
                if (!(var3 != var1)) {
                    _fun50123_ip = 253;
                    continue _fun50123
                }
            case 165:
                var1 = var1.socket;
                var6 = _closure1_slot46;
                var4 = var1.accountId;
                var4 = var6[var4];
                var3 = var3 != var4;
                if (!var3) {
                    _fun50123_ip = 206;
                    continue _fun50123
                }
            case 192:
                var4 = var4.track;
                var4 = var4.id;
                var3 = var4 === var5;
            case 206:
                if (!var3) {
                    _fun50123_ip = 253;
                    continue _fun50123
                }
            case 209:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 20;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.pause;
                var2 = var1.accountId;
                var1 = var1.accessToken;
                var1 = var3.bind(var4)(var2, var1);
            case 253:
                return var0;
        }
    };
    var _closure1_slot63 = var7;
    var10 = function() {
        _fun50124: for (var _fun50124_ip = 0;;) switch (_fun50124_ip) {
            case 0:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var1 = _closure1_slot44;
                var9 = var2.bind(var3)(var1);
                var2 = _closure1_slot10;
                var1 = var2.getAccounts;
                var3 = var1.bind(var2)();
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot20;
                    var0 = var0.SPOTIFY;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var8 = null;
                if (!(var8 != var1)) {
                    _fun50124_ip = 336;
                    continue _fun50124
                }
            case 65:
                var2 = var1.map;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var3 = var2.bind(var1)(var0);
                var0 = var9.length;
                var2 = 0;
                var0 = var2 < var0;
                var7 = undefined;
                if (!var0) {
                    _fun50124_ip = 134;
                    continue _fun50124
                }
            case 96:
                var4 = var9[var2];
                var0 = var3.includes;
                var0 = var0.bind(var3)(var4);
                if (var0) {
                    _fun50124_ip = 122;
                    continue _fun50124
                }
            case 113:
                var0 = _closure1_slot60;
                var0 = var0.bind(var7)(var4);
            case 122:
                var2 = var2 + 1;
                var0 = var9.length;
                if (var2 < var0) {
                    _fun50124_ip = 96;
                    continue _fun50124
                }
            case 134:
                var0 = _closure1_slot53;
                var6 = var0.bind(var7)(var1);
                var2 = var6.bind(var7)();
                var1 = var2.done;
                var5 = 20;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun50124_ip = 334;
                    continue _fun50124
                }
            case 168:
                var1 = var3.value;
                var11 = _closure1_slot23;
                var11 = var8 != var11;
                if (!var11) {
                    _fun50124_ip = 208;
                    continue _fun50124
                }
            case 184:
                var12 = _closure1_slot23;
                var12 = var12.account;
                var13 = var12.id;
                var12 = var1.id;
                var11 = var13 === var12;
            case 208:
                if (!var11) {
                    _fun50124_ip = 223;
                    continue _fun50124
                }
            case 211:
                var11 = _closure1_slot23;
                var11.account = var1;
                var2 = true;
            case 223:
                var12 = var9.includes;
                var11 = var1.id;
                var12 = var12.bind(var9)(var11);
                var11 = var2;
                if (var12) {
                    _fun50124_ip = 310;
                    continue _fun50124
                }
            case 244:
                var12 = var1.accessToken;
                if (!(var8 != var12)) {
                    _fun50124_ip = 277;
                    continue _fun50124
                }
            case 254:
                var14 = _closure1_slot59;
                var13 = var1.id;
                var12 = var1.accessToken;
                var12 = var14.bind(var7)(var13, var12);
                _fun50124_ip = 310;
                continue _fun50124;
            case 277:
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var5];
                var13 = var13.bind(var7)(var12);
                var12 = var13.getAccessToken;
                var1 = var1.id;
                var1 = var12.bind(var13)(var1);
            case 310:
                var12 = var6.bind(var7)();
                var1 = var12.done;
                var3 = var12;
                var2 = var11;
                var0 = var2;
                if (!var1) {
                    _fun50124_ip = 168;
                    continue _fun50124
                }
            case 334:
                return var0;
            case 336:
                var0 = false;
                return var0;
        }
    };
    var0 = function() {
        _fun50127: for (var _fun50127_ip = 0;;) switch (_fun50127_ip) {
            case 0:
                var1 = _closure1_slot23;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun50127_ip = 143;
                    continue _fun50127
                }
            case 16:
                var1 = _closure1_slot55;
                var3 = undefined;
                var1 = var1.bind(var3)();
                if (!(var2 != var1)) {
                    _fun50127_ip = 143;
                    continue _fun50127
                }
            case 30:
                var1 = var1.socket;
                var2 = true;
                _closure1_slot47 = var2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 20;
                var2 = var4[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.pause;
                var2 = var1.accountId;
                var1 = var1.accessToken;
                var1 = var5.bind(var6)(var2, var1);
                var2 = _closure1_slot1;
                var1 = 22;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.track;
                var1 = _closure1_slot22;
                var1 = var1.SPOTIFY_AUTO_PAUSED;
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot38;
                var1 = var2.info;
                var0 = 'Playback auto paused';
                var0 = var1.bind(var2)(var0);
            case 143:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot64 = var0;
    var0 = function arg0() {
        _fun50128: for (var _fun50128_ip = 0;;) switch (_fun50128_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot9;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                if (!(var5 === var1)) {
                    _fun50128_ip = 178;
                    continue _fun50128
                }
            case 27:
                var2 = _closure1_slot14;
                var1 = var2.isCurrentClientInVoiceChannel;
                var2 = var1.bind(var2)();
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 25;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.getIsSpeaking;
                var1 = {
                    'userId': null,
                    'checkSoundSharing': true,
                    'checkSoundboardSounds': false
                };
                var1.userId = var5;
                var5 = false;
                var1 = var3.bind(var4)(var1);
                if (!var2) {
                    _fun50128_ip = 112;
                    continue _fun50128
                }
            case 99:
                if (!var1) {
                    _fun50128_ip = 112;
                    continue _fun50128
                }
            case 102:
                var2 = _closure1_slot23;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun50128_ip = 140;
                    continue _fun50128
                }
            case 112:
                var4 = _closure1_slot40;
                var3 = var4.start;
                var2 = 100;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot39;
                    var0 = var1.stop;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1, var5);
                _fun50128_ip = 178;
                continue _fun50128;
            case 140:
                var4 = _closure1_slot39;
                var3 = var4.start;
                var2 = _closure1_slot28;
                var1 = _closure1_slot64;
                var1 = var3.bind(var4)(var2, var1, var5);
                var1 = _closure1_slot40;
                var0 = var1.stop;
                var0 = var0.bind(var1)();
            case 178:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot65 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun50130: for (var _fun50130_ip = 0;;) switch (_fun50130_ip) {
            case 0:
                var8 = arg0;
                var1 = arg2;
                var _closure2_slot0 = var8;
                var2 = var1.device;
                var _closure2_slot1 = var2;
                var3 = var1.progress_ms;
                var _closure2_slot2 = var3;
                var3 = var1.is_playing;
                var _closure2_slot3 = var3;
                var3 = var1.repeat_state;
                var _closure2_slot4 = var3;
                var3 = var1.item;
                var6 = var1.context;
                var5 = undefined;
                var _closure2_slot5 = var5;
                var7 = null;
                if (!(var7 != var3)) {
                    _fun50130_ip = 105;
                    continue _fun50130
                }
            case 80:
                var4 = var3.type;
                var1 = _closure1_slot19;
                var1 = var1.TRACK;
                if (!(var4 !== var1)) {
                    _fun50130_ip = 358;
                    continue _fun50130
                }
            case 105:
                if (!(var7 != var3)) {
                    _fun50130_ip = 677;
                    continue _fun50130
                }
            case 112:
                var4 = var3.type;
                var1 = _closure1_slot19;
                var1 = var1.EPISODE;
                if (!(var4 === var1)) {
                    _fun50130_ip = 677;
                    continue _fun50130
                }
            case 137:
                var4 = var3.id;
                var1 = {};
                var1.id = var4;
                var4 = var3.name;
                var1.name = var4;
                var4 = var3.duration_ms;
                var1.duration = var4;
                var4 = _closure1_slot19;
                var4 = var4.EPISODE;
                var1.type = var4;
                var4 = {};
                var9 = var3.show;
                var12 = var7 == var9;
                var13 = undefined;
                if (var12) {
                    _fun50130_ip = 203;
                    continue _fun50130
                }
            case 198:
                var13 = var9.id;
            case 203:
                var14 = var7 != var13;
                var9 = '';
                var12 = var9;
                if (!var14) {
                    _fun50130_ip = 220;
                    continue _fun50130
                }
            case 217:
                var12 = var13;
            case 220:
                var4.id = var12;
                var13 = var3.show;
                var14 = var7 == var13;
                var12 = undefined;
                if (var14) {
                    _fun50130_ip = 244;
                    continue _fun50130
                }
            case 239:
                var12 = var13.name;
            case 244:
                var13 = var7 != var12;
                if (!var13) {
                    _fun50130_ip = 254;
                    continue _fun50130
                }
            case 251:
                var9 = var12;
            case 254:
                var4.name = var9;
                var12 = var3.show;
                var13 = var7 == var12;
                var9 = undefined;
                if (var13) {
                    _fun50130_ip = 285;
                    continue _fun50130
                }
            case 273:
                var13 = var12.images;
                var12 = 0;
                var9 = var13[var12];
            case 285:
                var4.image = var9;
                var12 = var3.album;
                var13 = var7 == var12;
                var9 = undefined;
                if (var13) {
                    _fun50130_ip = 310;
                    continue _fun50130
                }
            case 305:
                var9 = var12.type;
            case 310:
                if (!(var7 == var9)) {
                    _fun50130_ip = 324;
                    continue _fun50130
                }
            case 314:
                var11 = _closure1_slot19;
                var9 = var11.SHOW;
            case 324:
                var4.type = var9;
                var1.album = var4;
                var4 = new Array(0);
                var1.artists = var4;
                var4 = false;
                var1.isLocal = var4;
                _closure2_slot5 = var1;
                _fun50130_ip = 677;
                continue _fun50130;
            case 358:
                var4 = var3.id;
                var1 = var3.linked_from;
                var1 = var7 != var1;
                if (!var1) {
                    _fun50130_ip = 391;
                    continue _fun50130
                }
            case 376:
                var9 = var3.linked_from;
                var9 = var9.id;
                var1 = var7 != var9;
            case 391:
                if (!var1) {
                    _fun50130_ip = 405;
                    continue _fun50130
                }
            case 394:
                var1 = var3.linked_from;
                var4 = var1.id;
            case 405:
                var1 = {};
                var1.id = var4;
                var4 = var3.name;
                var1.name = var4;
                var4 = var3.duration_ms;
                var1.duration = var4;
                var4 = _closure1_slot19;
                var4 = var4.TRACK;
                var1.type = var4;
                var4 = {};
                var9 = var3.album;
                var11 = var7 == var9;
                var12 = undefined;
                if (var11) {
                    _fun50130_ip = 466;
                    continue _fun50130
                }
            case 461:
                var12 = var9.id;
            case 466:
                var13 = var7 != var12;
                var9 = '';
                var11 = var9;
                if (!var13) {
                    _fun50130_ip = 483;
                    continue _fun50130
                }
            case 480:
                var11 = var12;
            case 483:
                var4.id = var11;
                var12 = var3.album;
                var13 = var7 == var12;
                var11 = undefined;
                if (var13) {
                    _fun50130_ip = 507;
                    continue _fun50130
                }
            case 502:
                var11 = var12.name;
            case 507:
                var12 = var7 != var11;
                if (!var12) {
                    _fun50130_ip = 517;
                    continue _fun50130
                }
            case 514:
                var9 = var11;
            case 517:
                var4.name = var9;
                var11 = var3.album;
                var12 = var7 == var11;
                var9 = undefined;
                if (var12) {
                    _fun50130_ip = 548;
                    continue _fun50130
                }
            case 536:
                var12 = var11.images;
                var11 = 0;
                var9 = var12[var11];
            case 548:
                var4.image = var9;
                var11 = var3.album;
                var12 = var7 == var11;
                var9 = undefined;
                if (var12) {
                    _fun50130_ip = 573;
                    continue _fun50130
                }
            case 568:
                var9 = var11.type;
            case 573:
                if (!(var7 == var9)) {
                    _fun50130_ip = 587;
                    continue _fun50130
                }
            case 577:
                var10 = _closure1_slot19;
                var9 = var10.ALBUM;
            case 587:
                var4.type = var9;
                var1.album = var4;
                var4 = global;
                var10 = var4.Array;
                var9 = var10.isArray;
                var4 = var3.artists;
                var4 = var9.bind(var10)(var4);
                if (var4) {
                    _fun50130_ip = 629;
                    continue _fun50130
                }
            case 623:
                var4 = new Array(0);
                _fun50130_ip = 650;
                continue _fun50130;
            case 629:
                var11 = var3.artists;
                var10 = var11.filter;
                var9 = function(arg0) { // Environment: var0
                    _fun50131: for (var _fun50131_ip = 0;;) switch (_fun50131_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 26;
                            var0 = var0[var5];
                            var4 = undefined;
                            var6 = var3.bind(var4)(var0);
                            var3 = var6.isNotNullish;
                            var0 = var1.id;
                            var0 = var3.bind(var6)(var0);
                            if (!var0) {
                                _fun50131_ip = 80;
                                continue _fun50131
                            }
                        case 47:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var5];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.isNotNullish;
                            var1 = var1.name;
                            var0 = var2.bind(var3)(var1);
                        case 80:
                            return var0;
                    }
                };
                var4 = var10.bind(var11)(var9);
            case 650:
                var1.artists = var4;
                var3 = var3.is_local;
                if (var3) {
                    _fun50130_ip = 668;
                    continue _fun50130
                }
            case 666:
                var3 = false;
            case 668:
                var1.isLocal = var3;
                _closure2_slot5 = var1;
            case 677:
                var1 = var7 != var2;
                if (!var1) {
                    _fun50130_ip = 696;
                    continue _fun50130
                }
            case 684:
                var4 = var2.is_active;
                var3 = true;
                var1 = var3 !== var4;
            case 696:
                if (!var1) {
                    _fun50130_ip = 726;
                    continue _fun50130
                }
            case 699:
                var1 = {};
                var17 = var1;
                var16 = var2;
                var2 = copyDataProperties(var17, var16);
                var3 = true;
                var2 = 'is_active';
                var1[var2] = var3;
                _closure2_slot1 = var1;
            case 726:
                if (!(var7 != var6)) {
                    _fun50130_ip = 783;
                    continue _fun50130
                }
            case 730:
                var2 = _closure1_slot19;
                var2 = var2.PLAYLIST;
                var4 = new Array(2);
                var4[0] = var2;
                var2 = _closure1_slot19;
                var2 = var2.ALBUM;
                var4[1] = var2;
                var3 = var4.includes;
                var2 = var6.type;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun50130_ip = 807;
                    continue _fun50130
                }
            case 783:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.resolve;
                var2 = var2.bind(var3)(var5);
                _fun50130_ip = 1012;
                continue _fun50130;
            case 807:
                var4 = _closure1_slot51;
                var3 = var4.getPlayerState;
                var3 = var3.bind(var4)(var8);
                if (!(var7 != var3)) {
                    _fun50130_ip = 859;
                    continue _fun50130
                }
            case 828:
                var4 = var3.context;
                if (!(var7 != var4)) {
                    _fun50130_ip = 859;
                    continue _fun50130
                }
            case 837:
                var4 = var3.context;
                var7 = var4.uri;
                var4 = var6.uri;
                if (!(var7 !== var4)) {
                    _fun50130_ip = 985;
                    continue _fun50130
                }
            case 859:
                var7 = var6.type;
                var4 = _closure1_slot19;
                var4 = var4.ALBUM;
                if (!(var7 !== var4)) {
                    _fun50130_ip = 964;
                    continue _fun50130
                }
            case 878:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 20;
                var1 = var7[var1];
                var1 = var4.bind(var5)(var1);
                var7 = var1.SpotifyAPI;
                var5 = var7.get;
                var4 = {};
                var1 = var6.href;
                var4.url = var1;
                var1 = arg1;
                var5 = var5.bind(var7)(var8, var1, var4);
                var4 = var5.then;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.body;
                    return var0;
                };
                var5 = var4.bind(var5)(var1);
                var4 = var5.catch;
                var1 = function(arg0) { // Environment: var0
                    _fun50133: for (var _fun50133_ip = 0;;) switch (_fun50133_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun50133_ip = 21;
                                continue _fun50133
                            }
                        case 6:
                            var2 = var0.status;
                            var1 = 404;
                            if (!(var1 !== var2)) {
                                _fun50133_ip = 23;
                                continue _fun50133
                            }
                        case 21:
                            throw var0;
                        case 23:
                            var0 = null;
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1);
                _fun50130_ip = 983;
                continue _fun50130;
            case 964:
                var4 = global;
                var5 = var4.Promise;
                var4 = var5.resolve;
                var1 = var4.bind(var5)(var6);
            case 983:
                _fun50130_ip = 1009;
                continue _fun50130;
            case 985:
                var4 = global;
                var5 = var4.Promise;
                var4 = var5.resolve;
                var3 = var3.context;
                var1 = var4.bind(var5)(var3);
            case 1009:
                var2 = var1;
            case 1012:
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    _fun50134: for (var _fun50134_ip = 0;;) switch (_fun50134_ip) {
                        case 0:
                            var5 = arg0;
                            var7 = null;
                            var0 = var7 == var5;
                            if (var0) {
                                _fun50134_ip = 34;
                                continue _fun50134
                            }
                        case 12:
                            var2 = var5.type;
                            var1 = _closure1_slot19;
                            var1 = var1.PLAYLIST;
                            var0 = var2 !== var1;
                        case 34:
                            if (var0) {
                                _fun50134_ip = 45;
                                continue _fun50134
                            }
                        case 37:
                            var0 = var5.public;
                        case 45:
                            if (var0) {
                                _fun50134_ip = 50;
                                continue _fun50134
                            }
                        case 48:
                            var5 = null;
                        case 50:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'SPOTIFY_PLAYER_STATE';
                            var1.type = var4;
                            var6 = _closure2_slot0;
                            var1.accountId = var6;
                            var6 = _closure2_slot5;
                            var1.track = var6;
                            var6 = _closure2_slot1;
                            var7 = var7 != var6;
                            var6 = 0;
                            if (!var7) {
                                _fun50134_ip = 135;
                                continue _fun50134
                            }
                        case 123:
                            var7 = _closure2_slot1;
                            var6 = var7.volume_percent;
                        case 135:
                            var1.volumePercent = var6;
                            var6 = _closure2_slot3;
                            var1.isPlaying = var6;
                            var7 = _closure2_slot4;
                            var6 = 'off';
                            var6 = var6 !== var7;
                            var1.repeat = var6;
                            var6 = _closure2_slot2;
                            var1.position = var6;
                            var1.context = var5;
                            var4 = _closure2_slot1;
                            var1.device = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot66 = var0;
    var0 = function arg0, arg1() {
        var5 = arg0;
        var4 = arg1;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 20;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.SpotifyAPI;
        var2 = var3.get;
        var1 = {};
        var6 = _closure1_slot18;
        var6 = var6.PLAYER;
        var1.url = var6;
        var6 = {};
        var8 = _closure1_slot19;
        var11 = var8.TRACK;
        var7 = _closure1_slot19;
        var10 = var7.EPISODE;
        var7 = global;
        var7 = var7.HermesInternal;
        var9 = var7.concat;
        var8 = '';
        var7 = ',';
        var7 = var9.bind(var8)(var11, var7, var10);
        var6.additional_types = var7;
        var1.query = var6;
        var6 = true;
        var1.onlyRetryOnAuthorizationErrors = var6;
        var3 = var2.bind(var3)(var5, var4, var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var0
            _fun50136: for (var _fun50136_ip = 0;;) switch (_fun50136_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var5 = var1.body;
                    var1 = null;
                    if (!(var1 == var5)) {
                        _fun50136_ip = 43;
                        continue _fun50136
                    }
                case 20:
                    var3 = _closure1_slot57;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    _fun50136_ip = 85;
                    continue _fun50136;
                case 43:
                    var4 = _closure1_slot66;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var4.bind(var1)(var3, var2, var5);
                    var1 = var2.then;
                    var0 = function() { // Environment: var0
                        var0 = _closure3_slot0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 85:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.catch;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot57;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot67 = var0;
    var3 = global;
    var11 = var3.Object;
    var9 = var11.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var11)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var12 = 1;
    var1 = var6[var12];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var9 = 3;
    var1 = var6[var9];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var13 = 5;
    var1 = var6[var13];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 12;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var11 = var1.getSpotifyResourceType;
    var _closure1_slot15 = var11;
    var11 = var1.isSpotifyParty;
    var _closure1_slot16 = var11;
    var11 = var1.SPOTIFY_PARTY_PREFIX;
    var _closure1_slot17 = var11;
    var11 = var1.SpotifyEndpoints;
    var _closure1_slot18 = var11;
    var1 = var1.SpotifyResourceTypes;
    var _closure1_slot19 = var1;
    var1 = 13;
    var1 = var6[var1];
    var11 = var5.bind(var0)(var1);
    var1 = var11.PlatformTypes;
    var _closure1_slot20 = var1;
    var14 = var11.ActivityFlags;
    var _closure1_slot21 = var14;
    var11 = var11.AnalyticEvents;
    var _closure1_slot22 = var11;
    var11 = 14;
    var11 = var6[var11];
    var14 = var8.bind(var0)(var11);
    var11 = var14.get;
    var1 = var1.SPOTIFY;
    var1 = var11.bind(var14)(var1);
    var _closure1_slot26 = var1;
    var1 = 15;
    var11 = var6[var1];
    var11 = var8.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.SECOND;
    var14 = 30;
    var11 = var14 * var11;
    var _closure1_slot27 = var11;
    var11 = var6[var1];
    var11 = var8.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.SECOND;
    var11 = var14 * var11;
    var _closure1_slot28 = var11;
    var11 = var6[var1];
    var11 = var8.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.MINUTE;
    var11 = var13 * var11;
    var _closure1_slot29 = var11;
    var11 = var6[var1];
    var11 = var8.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.SECOND;
    var11 = var13 * var11;
    var _closure1_slot30 = var11;
    var11 = var6[var1];
    var11 = var8.bind(var0)(var11);
    var11 = var11.Millis;
    var13 = var11.SECOND;
    var11 = 1.5;
    var11 = var11 * var13;
    var _closure1_slot31 = var11;
    var11 = var6[var1];
    var11 = var8.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.MINUTE;
    var11 = var12 * var11;
    var _closure1_slot32 = var11;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.SECOND;
    var1 = var9 * var1;
    var _closure1_slot33 = var1;
    var1 = {};
    var9 = 'PLAYER_STATE_CHANGED';
    var1.PLAYER_STATE_CHANGED = var9;
    var9 = 'DEVICE_STATE_CHANGED';
    var1.DEVICE_STATE_CHANGED = var9;
    var _closure1_slot34 = var1;
    var1 = 'message';
    var _closure1_slot35 = var1;
    var1 = 'ping';
    var _closure1_slot36 = var1;
    var1 = 'single';
    var _closure1_slot37 = var1;
    var1 = 16;
    var1 = var6[var1];
    var11 = var8.bind(var0)(var1);
    var1 = var11.prototype;
    var9 = Object.create(var1, {
        constructor: {
            value: var11
        }
    });
    var17 = 'Spotify';
    var18 = var9;
    var1 = new var18[var11](var17, var16);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot38 = var1;
    var1 = 17;
    var9 = var6[var1];
    var9 = var5.bind(var0)(var9);
    var9 = var9.Timeout;
    var11 = var9.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var9
        }
    });
    var18 = var11;
    var9 = new var18[var9](var17);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot39 = var9;
    var9 = var6[var1];
    var9 = var5.bind(var0)(var9);
    var9 = var9.Timeout;
    var11 = var9.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var9
        }
    });
    var18 = var11;
    var9 = new var18[var9](var17);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot40 = var9;
    var9 = var6[var1];
    var9 = var5.bind(var0)(var9);
    var9 = var9.Timeout;
    var11 = var9.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var9
        }
    });
    var18 = var11;
    var9 = new var18[var9](var17);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot41 = var9;
    var9 = var6[var1];
    var9 = var5.bind(var0)(var9);
    var9 = var9.Timeout;
    var11 = var9.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var9
        }
    });
    var18 = var11;
    var9 = new var18[var9](var17);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot42 = var9;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.Timeout;
    var9 = var1.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var1
        }
    });
    var18 = var9;
    var1 = new var18[var1](var17);
    var1 = var1 instanceof Object ? var1 : var9;
    var _closure1_slot43 = var1;
    var1 = {};
    var _closure1_slot44 = var1;
    var1 = {};
    var _closure1_slot45 = var1;
    var1 = {};
    var _closure1_slot46 = var1;
    var1 = false;
    var _closure1_slot47 = var1;
    var1 = null;
    var _closure1_slot48 = var1;
    var9 = var3.Set;
    var1 = var3.WebSocket;
    var11 = var1.CONNECTING;
    var1 = new Array(2);
    var1[0] = var11;
    var3 = var3.WebSocket;
    var3 = var3.OPEN;
    var1[1] = var3;
    var3 = var9.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var9
        }
    });
    var18 = var3;
    var17 = var1;
    var1 = new var18[var9](var17, var16);
    var1 = var1 instanceof Object ? var1 : var3;
    var _closure1_slot49 = var1;
    var1 = function() { // Environment: var4
        var3 = _closure1_slot7;
        var2 = function arg0, arg1() {
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot6;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = false;
            var2._requestedDisconnect = var4;
            var2._requestedConnect = var4;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var6 = 19;
            var6 = var5[var6];
            var8 = var4.bind(var0)(var6);
            var7 = var8.throttle;
            var6 = _closure1_slot33;
            var3 = function() { // Environment: var3
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 20;
                var1 = var1[var0];
                var0 = undefined;
                var6 = var3.bind(var0)(var1);
                var5 = var6.getDevices;
                var1 = _closure3_slot0;
                var4 = var1.accountId;
                var3 = var1.accessToken;
                var3 = var5.bind(var6)(var4, var3);
                var3 = _closure1_slot67;
                var2 = var1.accountId;
                var1 = var1.accessToken;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var3 = var7.bind(var8)(var3, var6);
            var2.handleDeviceStateChange = var3;
            var3 = arg0;
            var2.accountId = var3;
            var3 = arg1;
            var2.accessToken = var3;
            var6 = _closure1_slot0;
            var3 = 17;
            var3 = var5[var3];
            var3 = var6.bind(var0)(var3);
            var3 = var3.Interval;
            var6 = var3.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var3
                }
            });
            var11 = var6;
            var3 = new var11[var3](var10);
            var3 = var3 instanceof Object ? var3 : var6;
            var2.pingInterval = var3;
            var3 = 21;
            var3 = var5[var3];
            var4 = var4.bind(var0)(var3);
            var9 = _closure1_slot32;
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var11 = var3;
            var10 = undefined;
            var1 = new var11[var4](var10, var9, var8);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.backoff = var1;
            var1 = var2.connect;
            var1 = var1.bind(var2)();
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'connected';
        var0.key = var1;
        var1 = function() {
            _fun50142: for (var _fun50142_ip = 0;;) switch (_fun50142_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.socket;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun50142_ip = 47;
                        continue _fun50142
                    }
                case 18:
                    var3 = _closure1_slot49;
                    var2 = var3.has;
                    var1 = var1.socket;
                    var1 = var1.readyState;
                    var0 = var2.bind(var3)(var1);
                case 47:
                    return var0;
            }
        };
        var0.get = var1;
        var1 = new Array(8);
        var1[0] = var0;
        var0 = {};
        var5 = 'connect';
        var0.key = var5;
        var5 = function() {
            _fun50143: for (var _fun50143_ip = 0;;) switch (_fun50143_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1.connected;
                    if (var2) {
                        _fun50143_ip = 24;
                        continue _fun50143
                    }
                case 18:
                    var2 = var1._requestedConnect;
                case 24:
                    if (var2) {
                        _fun50143_ip = 122;
                        continue _fun50143
                    }
                case 27:
                    var5 = _closure1_slot38;
                    var4 = var5.info;
                    var3 = 'WS Connecting';
                    var3 = var4.bind(var5)(var3);
                    var3 = false;
                    var1._requestedDisconnect = var3;
                    var3 = true;
                    var1._requestedConnect = var3;
                    var4 = _closure1_slot67;
                    var3 = var1.accountId;
                    var2 = var1.accessToken;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3, var2);
                    var2 = var3.then;
                    var1 = function() { // Environment: var0
                        var4 = _closure3_slot0;
                        var0 = false;
                        var4._requestedConnect = var0;
                        var0 = global;
                        var2 = var0.WebSocket;
                        var3 = var4.accessToken;
                        var0 = var0.HermesInternal;
                        var1 = var0.concat;
                        var0 = 'wss://dealer.spotify.com/?access_token=';
                        var5 = var1.bind(var0)(var3);
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var6 = var1;
                        var0 = new var6[var2](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        var4.socket = var0;
                        var1 = var4.socket;
                        var2 = var4.handleOpen;
                        var0 = var2.bind;
                        var0 = var0.bind(var2)(var4);
                        var1.onopen = var0;
                        var1 = var4.socket;
                        var2 = var4.handleMessage;
                        var0 = var2.bind;
                        var0 = var0.bind(var2)(var4);
                        var1.onmessage = var0;
                        var1 = var4.socket;
                        var2 = var4.socket;
                        var3 = var4.handleClose;
                        var0 = var3.bind;
                        var0 = var0.bind(var3)(var4);
                        var2.onerror = var0;
                        var1.onclose = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.catch;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot38;
                        var1 = var2.error;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var1 = _closure3_slot0;
                        var0 = false;
                        var1._requestedConnect = var0;
                        var0 = var1.handleClose;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 122:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'disconnect';
        var0.key = var5;
        var5 = function() {
            _fun50146: for (var _fun50146_ip = 0;;) switch (_fun50146_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var1 = undefined;
                    var3 = true;
                    var2._requestedDisconnect = var3;
                    var4 = var2.backoff;
                    var3 = var4.cancel;
                    var3 = var3.bind(var4)();
                case 31: // try_start_0
                    var3 = var2.socket;
                    var1 = var3;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun50146_ip = 59;
                        continue _fun50146
                    }
                case 46:
                    var2 = var1;
                    var1 = var2.close;
                    var1 = var1.bind(var2)();
                case 59: // try_end0
                    _fun50146_ip = 63;
                    continue _fun50146;
                case 61: // catch_target0
                    CatchBlockStart(arg_register = 1);
                case 63:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'ping';
        var0.key = var5;
        var5 = function() {
            _fun50147: for (var _fun50147_ip = 0;;) switch (_fun50147_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.connected;
                    if (!var1) {
                        _fun50147_ip = 67;
                        continue _fun50147
                    }
                case 12:
                    var2 = var0.socket;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun50147_ip = 67;
                        continue _fun50147
                    }
                case 24:
                    var1 = var2.send;
                    var0 = global;
                    var4 = var0.JSON;
                    var3 = var4.stringify;
                    var0 = {};
                    var5 = _closure1_slot36;
                    var0.type = var5;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                case 67:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'handleOpen';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot38;
            var4 = var5.info;
            var3 = 'WS Connected';
            var3 = var4.bind(var5)(var3);
            var4 = var1.backoff;
            var3 = var4.succeed;
            var3 = var3.bind(var4)();
            var5 = var1.pingInterval;
            var4 = var5.start;
            var3 = _closure1_slot27;
            var2 = function() { // Environment: var2
                var1 = _closure3_slot0;
                var0 = var1.ping;
                var0 = var0.bind(var1)();
                return var0;
            };
            var2 = var4.bind(var5)(var3, var2);
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 20;
            var5 = var4[var2];
            var0 = undefined;
            var8 = var3.bind(var0)(var5);
            var7 = var8.getProfile;
            var6 = var1.accountId;
            var5 = var1.accessToken;
            var5 = var7.bind(var8)(var6, var5);
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.getDevices;
            var2 = var1.accountId;
            var1 = var1.accessToken;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'handleMessage';
        var0.key = var5;
        var5 = function arg0() {
            _fun50150: for (var _fun50150_ip = 0;;) switch (_fun50150_ip) {
                case 0:
                    var0 = this;
                    var1 = arg0;
                    var5 = var1.data;
                    var4 = 'string';
                    var1 = typeof var5;
                    if (!(var4 === var1)) {
                        _fun50150_ip = 349;
                        continue _fun50150
                    }
                case 25:
                    var2 = global;
                    var3 = var2.JSON;
                    var1 = var3.parse;
                    var1 = var1.bind(var3)(var5);
                    var7 = var1.type;
                    var5 = var1.uri;
                    var6 = var1.payloads;
                    var3 = _closure1_slot35;
                    if (!(var7 === var3)) {
                        _fun50150_ip = 349;
                        continue _fun50150
                    }
                case 76:
                    var3 = typeof var5;
                    if (!(var4 === var3)) {
                        _fun50150_ip = 106;
                        continue _fun50150
                    }
                case 83:
                    var4 = var5.startsWith;
                    var3 = 'hm://pusher/v1/connections/';
                    var4 = var4.bind(var5)(var3);
                    if (var4) {
                        _fun50150_ip = 262;
                        continue _fun50150
                    }
                case 106:
                    var7 = var2.Array;
                    var4 = var7.isArray;
                    var4 = var4.bind(var7)(var6);
                    if (!var4) {
                        _fun50150_ip = 349;
                        continue _fun50150
                    }
                case 128:
                    var4 = _closure1_slot53;
                    var11 = undefined;
                    var10 = var4.bind(var11)(var6);
                    var6 = var10.bind(var11)();
                    var4 = var6.done;
                    var9 = null;
                    var8 = var6;
                    var7 = undefined;
                    var6 = undefined;
                    if (var4) {
                        _fun50150_ip = 349;
                        continue _fun50150
                    }
                case 163:
                    var4 = var8.value;
                    var12 = var4.events;
                    if (!(var9 != var12)) {
                        _fun50150_ip = 245;
                        continue _fun50150
                    }
                case 178:
                    var4 = _closure1_slot53;
                    var13 = var4.bind(var11)(var12);
                    var14 = var13.bind(var11)();
                    var4 = var14.done;
                    var12 = var14;
                    var7 = var12;
                    var6 = var13;
                    if (var4) {
                        _fun50150_ip = 245;
                        continue _fun50150
                    }
                case 208:
                    var14 = var12.value;
                    var4 = var0.handleEvent;
                    var4 = var4.bind(var0)(var14);
                    var14 = var13.bind(var11)();
                    var4 = var14.done;
                    var12 = var14;
                    var7 = var12;
                    var6 = var13;
                    if (!var4) {
                        _fun50150_ip = 208;
                        continue _fun50150
                    }
                case 245:
                    var12 = var10.bind(var11)();
                    var4 = var12.done;
                    var8 = var12;
                    if (var4) {
                        _fun50150_ip = 349;
                        continue _fun50150
                    }
                case 260:
                    _fun50150_ip = 163;
                    continue _fun50150;
                case 262:
                    var4 = var2.decodeURIComponent;
                    var2 = var5.split;
                    var3 = var2.bind(var5)(var3);
                    var2 = 1;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var0.connectionId = var2;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 20;
                    var1 = var4[var1];
                    var4 = var2.bind(var3)(var1);
                    var3 = var4.subscribePlayerStateNotifications;
                    var2 = var0.accountId;
                    var1 = var0.accessToken;
                    var0 = var0.connectionId;
                    var0 = var3.bind(var4)(var2, var1, var0);
                case 349:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'handleClose';
        var0.key = var5;
        var5 = function() {
            _fun50151: for (var _fun50151_ip = 0;;) switch (_fun50151_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var3 = var1.pingInterval;
                    var2 = var3.stop;
                    var2 = var2.bind(var3)();
                    var2 = var1._requestedDisconnect;
                    if (var2) {
                        _fun50151_ip = 123;
                        continue _fun50151
                    }
                case 34: // try_start_0
                    var2 = var1.backoff;
                    var1 = var2.fail;
                    var0 = function() { // Environment: var0
                        _fun50152: for (var _fun50152_ip = 0;;) switch (_fun50152_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1._requestedDisconnect;
                                if (var1) {
                                    _fun50152_ip = 30;
                                    continue _fun50152
                                }
                            case 16:
                                var1 = _closure3_slot0;
                                var0 = var1.connect;
                                var0 = var0.bind(var1)();
                            case 30:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var5 = var1.bind(var2)(var0);
                    var2 = _closure1_slot38;
                    var1 = var2.info;
                    var0 = global;
                    var4 = var0.Math;
                    var3 = var4.round;
                    var5 = var3.bind(var4)(var5);
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var3 = 'WS Disconnected. Next retry in ';
                    var0 = 'ms';
                    var0 = var4.bind(var3)(var5, var0);
                    var0 = var1.bind(var2)(var0);
                case 119: // try_end0
                    _fun50151_ip = 123;
                    continue _fun50151;
                case 121: // catch_target0
                    CatchBlockStart(arg_register = 0);
                case 123:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'handleEvent';
        var0.key = var5;
        var4 = function arg0() {
            _fun50153: for (var _fun50153_ip = 0;;) switch (_fun50153_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var4 = var0.type;
                    var0 = var0.event;
                    var3 = _closure1_slot34;
                    var3 = var3.PLAYER_STATE_CHANGED;
                    if (!(var3 !== var4)) {
                        _fun50153_ip = 60;
                        continue _fun50153
                    }
                case 34:
                    var3 = _closure1_slot34;
                    var3 = var3.DEVICE_STATE_CHANGED;
                    if (!(var3 === var4)) {
                        _fun50153_ip = 111;
                        continue _fun50153
                    }
                case 48:
                    var3 = var1.handleDeviceStateChange;
                    var3 = var3.bind(var1)();
                    _fun50153_ip = 111;
                    continue _fun50153;
                case 60:
                    var5 = null;
                    var3 = var5 != var0;
                    if (!var3) {
                        _fun50153_ip = 78;
                        continue _fun50153
                    }
                case 69:
                    var4 = var0.state;
                    var3 = var5 != var4;
                case 78:
                    if (!var3) {
                        _fun50153_ip = 111;
                        continue _fun50153
                    }
                case 81:
                    var4 = _closure1_slot66;
                    var3 = var1.accountId;
                    var2 = var1.accessToken;
                    var1 = var0.state;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                case 111:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[7] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot50 = var1;
    var3 = 28;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var9 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun50155: for (var _fun50155_ip = 0;;) switch (_fun50155_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot6;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot4;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot52;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun50155_ip = 69;
                        continue _fun50155
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun50155_ip = 105;
                    continue _fun50155;
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
        var1 = _closure1_slot7;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var4 = this;
            var9 = var4.waitFor;
            var16 = _closure1_slot9;
            var15 = _closure1_slot10;
            var14 = _closure1_slot11;
            var13 = _closure1_slot12;
            var12 = _closure1_slot8;
            var11 = _closure1_slot13;
            var10 = _closure1_slot14;
            var17 = var4;
            var1 = var17[var9](var16, var15, var14, var13, var12, var11, var10, var9);
            var3 = var4.syncWith;
            var1 = _closure1_slot12;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() { // Environment: var1
                var1 = function() {
                    _fun50158: for (var _fun50158_ip = 0;;) switch (_fun50158_ip) {
                        case 0:
                            var3 = _closure1_slot24;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun50158_ip = 244;
                                continue _fun50158
                            }
                        case 18:
                            var3 = _closure1_slot55;
                            var7 = undefined;
                            var3 = var3.bind(var7)();
                            if (!(var2 != var3)) {
                                _fun50158_ip = 240;
                                continue _fun50158
                            }
                        case 35:
                            var3 = _closure1_slot24;
                            var6 = var3.userId;
                            var _closure5_slot0 = var6;
                            var3 = _closure1_slot58;
                            var5 = var3.bind(var7)(var6);
                            if (!(var2 != var5)) {
                                _fun50158_ip = 212;
                                continue _fun50158
                            }
                        case 64:
                            var4 = _closure1_slot41;
                            var3 = var4.stop;
                            var3 = var3.bind(var4)();
                            var10 = var5.sync_id;
                            var9 = var5.timestamps;
                            var3 = var5.party;
                            var8 = var2 != var10;
                            if (!var8) {
                                _fun50158_ip = 117;
                                continue _fun50158
                            }
                        case 103:
                            var4 = _closure1_slot24;
                            var4 = var4.trackId;
                            var8 = var4 !== var10;
                        case 117:
                            var4 = var2 != var9;
                            if (!var4) {
                                _fun50158_ip = 143;
                                continue _fun50158
                            }
                        case 124:
                            var10 = _closure1_slot24;
                            var10 = var10.startTime;
                            var9 = var9.start;
                            var4 = var10 !== var9;
                        case 143:
                            if (var8) {
                                _fun50158_ip = 197;
                                continue _fun50158
                            }
                        case 146:
                            if (var4) {
                                _fun50158_ip = 197;
                                continue _fun50158
                            }
                        case 149:
                            var2 = var2 != var3;
                            if (!var2) {
                                _fun50158_ip = 175;
                                continue _fun50158
                            }
                        case 156:
                            var8 = var3.id;
                            var4 = _closure1_slot24;
                            var4 = var4.partyId;
                            var2 = var8 !== var4;
                        case 175:
                            if (!var2) {
                                _fun50158_ip = 195;
                                continue _fun50158
                            }
                        case 178:
                            var4 = _closure1_slot24;
                            var3 = var3.id;
                            var4.partyId = var3;
                            var2 = true;
                        case 195:
                            _fun50158_ip = 210;
                            continue _fun50158;
                        case 197:
                            var4 = _closure1_slot62;
                            var3 = false;
                            var2 = var4.bind(var7)(var6, var5, var3);
                        case 210:
                            return var2;
                        case 212:
                            var3 = _closure1_slot41;
                            var2 = var3.start;
                            var1 = _closure1_slot29;
                            var0 = function() { // Environment: var0
                                _fun50159: for (var _fun50159_ip = 0;;) switch (_fun50159_ip) {
                                    case 0:
                                        var2 = _closure1_slot24;
                                        var1 = null;
                                        var1 = var1 != var2;
                                        if (!var1) {
                                            _fun50159_ip = 36;
                                            continue _fun50159
                                        }
                                    case 16:
                                        var2 = _closure1_slot24;
                                        var3 = var2.userId;
                                        var2 = _closure5_slot0;
                                        var1 = var3 === var2;
                                    case 36:
                                        if (!var1) {
                                            _fun50159_ip = 65;
                                            continue _fun50159
                                        }
                                    case 39:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 24;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var0 = var2.bind(var1)(var0);
                                        var0 = var0.bind(var1)();
                                    case 65:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = false;
                            return var0;
                        case 240:
                            var0 = false;
                            return var0;
                        case 244:
                            var0 = false;
                            return var0;
                    }
                };
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 20;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.fetchIsSpotifyProtocolRegistered;
            var1 = var1.bind(var2)();
            return var0;
        };
        var4.value = var0;
        var0 = new Array(12);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasConnectedAccount';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.keys;
            var0 = _closure1_slot44;
            var0 = var1.bind(var2)(var0);
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getActiveSocketAndDevice';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot55;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getPlayableComputerDevices';
        var4.key = var6;
        var6 = function() {
            _fun50162: for (var _fun50162_ip = 0;;) switch (_fun50162_ip) {
                case 0:
                    var0 = new Array(0);
                    var7 = _closure1_slot44;
                    var1 = null;
                    var2 = undefined;
                    for (var3 in var7)
                        case 25: {
                            case 34: var11 = var3;
                            var10 = _closure1_slot44;
                            var13 = var10[var11];
                            var10 = var13.connected;
                            if (!var10) {
                                _fun50162_ip = 25;
                                continue _fun50162
                            }
                            case 54: var10 = _closure1_slot45;
                            var10 = var10[var11];
                            if (var1 == var10) {
                                _fun50162_ip = 25;
                                continue _fun50162
                            }
                            case 66: var10 = _closure1_slot45;
                            var12 = var10[var11];
                            var11 = var12.find;
                            var10 = function(arg0) { // Environment: var9
                                _fun50163: for (var _fun50163_ip = 0;;) switch (_fun50163_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.is_restricted;
                                        var0 = !var0;
                                        if (!var0) {
                                            _fun50163_ip = 32;
                                            continue _fun50163
                                        }
                                    case 17:
                                        var2 = var1.type;
                                        var1 = 'Computer';
                                        var0 = var1 === var2;
                                    case 32:
                                        return var0;
                                }
                            };
                            var10 = var11.bind(var12)(var10);
                            var2 = var10;
                            if (var1 == var2) {
                                _fun50162_ip = 25;
                                continue _fun50162
                            }
                            case 96: var12 = var0.push;
                            var11 = {};
                            var11.socket = var13;
                            var11.device = var10;
                            var11 = var12.bind(var0)(var11);
                            var2 = var10;
                            _fun50162_ip = 25;
                            continue _fun50162;
                        }
                case 123:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'canPlay';
        var4.key = var6;
        var6 = function arg0() {
            _fun50164: for (var _fun50164_ip = 0;;) switch (_fun50164_ip) {
                case 0:
                    var0 = arg0;
                    var4 = var0.sync_id;
                    var1 = var0.party;
                    var0 = _closure1_slot55;
                    var3 = undefined;
                    var0 = var0.bind(var3)();
                    var5 = null;
                    var0 = var5 != var0;
                    if (!var0) {
                        _fun50164_ip = 41;
                        continue _fun50164
                    }
                case 37:
                    var0 = var5 != var4;
                case 41:
                    if (!var0) {
                        _fun50164_ip = 48;
                        continue _fun50164
                    }
                case 44:
                    var0 = var5 != var1;
                case 48:
                    if (!var0) {
                        _fun50164_ip = 60;
                        continue _fun50164
                    }
                case 51:
                    var4 = var1.id;
                    var0 = var5 != var4;
                case 60:
                    if (!var0) {
                        _fun50164_ip = 77;
                        continue _fun50164
                    }
                case 63:
                    var2 = _closure1_slot16;
                    var1 = var1.id;
                    var0 = var2.bind(var3)(var1);
                case 77:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getSyncingWith';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot24;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'wasAutoPaused';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot47;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getLastPlayedTrackId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getTrack';
        var4.key = var6;
        var6 = function() {
            _fun50168: for (var _fun50168_ip = 0;;) switch (_fun50168_ip) {
                case 0:
                    var2 = _closure1_slot23;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun50168_ip = 25;
                        continue _fun50168
                    }
                case 16:
                    var1 = _closure1_slot23;
                    var0 = var1.track;
                case 25:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getPlayerState';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot46;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'shouldShowActivity';
        var4.key = var6;
        var6 = function() {
            _fun50170: for (var _fun50170_ip = 0;;) switch (_fun50170_ip) {
                case 0:
                    var2 = _closure1_slot23;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun50170_ip = 32;
                        continue _fun50170
                    }
                case 16:
                    var2 = _closure1_slot23;
                    var2 = var2.account;
                    var0 = var2.showActivity;
                case 32:
                    if (!var0) {
                        _fun50170_ip = 52;
                        continue _fun50170
                    }
                case 35:
                    var2 = _closure1_slot11;
                    var1 = var2.isIdle;
                    var1 = var1.bind(var2)();
                    var0 = !var1;
                case 52:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getActivity';
        var4.key = var6;
        var5 = function() {
            _fun50171: for (var _fun50171_ip = 0;;) switch (_fun50171_ip) {
                case 0:
                    var2 = _closure1_slot23;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun50171_ip = 540;
                        continue _fun50171
                    }
                case 18:
                    var3 = _closure1_slot23;
                    var2 = var3.track;
                    var6 = var2.artists;
                    var13 = var2.album;
                    var18 = var2.name;
                    var4 = var2.id;
                    var9 = var2.duration;
                    var5 = var2.isLocal;
                    var2 = var2.type;
                    var8 = var3.startTime;
                    var3 = var3.context;
                    var10 = var6.slice;
                    var17 = 0;
                    var7 = 5;
                    var14 = var10.bind(var6)(var17, var7);
                    var6 = var6.length;
                    var7 = var6 > var17;
                    var10 = undefined;
                    var6 = undefined;
                    if (!var7) {
                        _fun50171_ip = 139;
                        continue _fun50171
                    }
                case 108:
                    var11 = var14.map;
                    var7 = function(arg0) { // Environment: var12
                        var0 = arg0;
                        var3 = var0.name;
                        var2 = var3.replace;
                        var1 = /;/g;
                        var0 = '';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var15 = var11.bind(var14)(var7);
                    var11 = var15.join;
                    var7 = '; ';
                    var6 = var11.bind(var15)(var7);
                case 139:
                    var11 = {};
                    var7 = var13.image;
                    var15 = var0 != var7;
                    var7 = null;
                    if (!var15) {
                        _fun50171_ip = 209;
                        continue _fun50171
                    }
                case 156:
                    var16 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var15 = 27;
                    var15 = var19[var15];
                    var20 = var16.bind(var10)(var15);
                    var19 = var20.getAssetFromImageURL;
                    var15 = _closure1_slot20;
                    var16 = var15.SPOTIFY;
                    var15 = var13.image;
                    var15 = var15.url;
                    var7 = var19.bind(var20)(var16, var15);
                case 209:
                    var15 = var13.image;
                    var15 = var0 != var15;
                    if (!var15) {
                        _fun50171_ip = 226;
                        continue _fun50171
                    }
                case 222:
                    var15 = var0 != var7;
                case 226:
                    if (!var15) {
                        _fun50171_ip = 235;
                        continue _fun50171
                    }
                case 229:
                    var11.large_image = var7;
                case 235:
                    var15 = var13.type;
                    var7 = _closure1_slot37;
                    if (!(var15 !== var7)) {
                        _fun50171_ip = 259;
                        continue _fun50171
                    }
                case 248:
                    var7 = var13.name;
                    var11.large_text = var7;
                case 259:
                    var7 = var0 != var3;
                    var15 = undefined;
                    if (!var7) {
                        _fun50171_ip = 273;
                        continue _fun50171
                    }
                case 268:
                    var15 = var3.uri;
                case 273:
                    var3 = _closure1_slot24;
                    if (!(var0 != var3)) {
                        _fun50171_ip = 295;
                        continue _fun50171
                    }
                case 281:
                    var3 = _closure1_slot24;
                    var3 = var3.partyId;
                    if (!(var0 == var3)) {
                        _fun50171_ip = 338;
                        continue _fun50171
                    }
                case 295:
                    var16 = _closure1_slot17;
                    var7 = _closure1_slot9;
                    var3 = var7.getId;
                    var10 = var3.bind(var7)();
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var3 = '';
                    var7 = var7.bind(var3)(var16, var10);
                    _fun50171_ip = 348;
                    continue _fun50171;
                case 338:
                    var3 = _closure1_slot24;
                    var7 = var3.partyId;
                case 348:
                    var16 = var18.length;
                    var3 = 128;
                    var10 = var18;
                    if (!(var16 > var3)) {
                        _fun50171_ip = 388;
                        continue _fun50171
                    }
                case 363:
                    var16 = var18.substring;
                    var3 = 125;
                    var16 = var16.bind(var18)(var17, var3);
                    var3 = '...';
                    var10 = var16 + var3;
                case 388:
                    var3 = {};
                    var3.context_uri = var15;
                    var13 = var13.id;
                    var3.album_id = var13;
                    var13 = var14.map;
                    var12 = function(arg0) { // Environment: var12
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var12 = var13.bind(var14)(var12);
                    var3.artist_ids = var12;
                    var3.type = var2;
                    var2 = new Array(0);
                    var3.button_urls = var2;
                    var2 = {};
                    var12 = _closure1_slot26;
                    var12 = var12.name;
                    var2.name = var12;
                    var2.assets = var11;
                    var2.details = var10;
                    var2.state = var6;
                    var6 = {};
                    var6.start = var8;
                    var8 = var8 + var9;
                    var6.end = var8;
                    var2.timestamps = var6;
                    var6 = {};
                    var6.id = var7;
                    var2.party = var6;
                    if (var5) {
                        _fun50171_ip = 538;
                        continue _fun50171
                    }
                case 500:
                    var2.sync_id = var4;
                    var4 = _closure1_slot21;
                    var5 = var4.PLAY;
                    var4 = var4.SYNC;
                    var4 = var5 | var4;
                    var2.flags = var4;
                    var2.metadata = var3;
                case 538:
                    return var2;
                case 540:
                    var2 = _closure1_slot24;
                    var2 = var0 != var2;
                    var0 = null;
                    if (!var2) {
                        _fun50171_ip = 573;
                        continue _fun50171
                    }
                case 553:
                    var3 = _closure1_slot58;
                    var1 = _closure1_slot24;
                    var2 = var1.userId;
                    var1 = undefined;
                    var0 = var3.bind(var1)(var2);
                case 573:
                    return var0;
            }
        };
        var4.value = var5;
        var0[11] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var9 = var3.bind(var0)(var9);
    var3 = 'SpotifyStore';
    var9.displayName = var3;
    var3 = 18;
    var3 = var6[var3];
    var17 = var8.bind(var0)(var3);
    var3 = {};
    var3.USER_CONNECTIONS_UPDATE = var10;
    var3.CONNECTION_OPEN = var10;
    var10 = function arg0() {
        var0 = arg0;
        var3 = var0.accountId;
        var2 = var0.accessToken;
        var1 = _closure1_slot59;
        var0 = undefined;
        var0 = var1.bind(var0)(var3, var2);
        var0 = false;
        return var0;
    };
    var3.SPOTIFY_ACCOUNT_ACCESS_TOKEN = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.accountId;
        var1 = _closure1_slot60;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var3.SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE = var10;
    var10 = function arg0() {
        _fun50176: for (var _fun50176_ip = 0;;) switch (_fun50176_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.accountId;
                var5 = var0.isPremium;
                var1 = _closure1_slot44;
                var1 = var1[var6];
                var2 = null;
                if (!(var2 != var1)) {
                    _fun50176_ip = 89;
                    continue _fun50176
                }
            case 32:
                var1.isPremium = var5;
                var2 = _closure1_slot38;
                var1 = var2.info;
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = 'Profile updated for ';
                var0 = ': isPremium = ';
                var0 = var4.bind(var3)(var6, var0, var5);
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            case 89:
                var0 = false;
                return var0;
        }
    };
    var3.SPOTIFY_PROFILE_UPDATE = var10;
    var10 = function arg0() {
        _fun50177: for (var _fun50177_ip = 0;;) switch (_fun50177_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.accountId;
                var6 = var0.isPlaying;
                var13 = var0.repeat;
                var3 = var0.track;
                var11 = var0.position;
                var1 = var0.device;
                var _closure2_slot0 = var1;
                var14 = var0.context;
                var5 = undefined;
                var _closure2_slot1 = var5;
                var2 = null;
                var8 = var2 != var1;
                var0 = false;
                if (!var8) {
                    _fun50177_ip = 222;
                    continue _fun50177
                }
            case 68:
                var9 = _closure1_slot45;
                var9 = var9[var12];
                if (!(var2 == var9)) {
                    _fun50177_ip = 103;
                    continue _fun50177
                }
            case 83:
                var10 = _closure1_slot45;
                var9 = new Array(1);
                var9[0] = var1;
                var10[var12] = var9;
                var0 = true;
                _fun50177_ip = 222;
                continue _fun50177;
            case 103:
                var9 = _closure1_slot45;
                var15 = var9[var12];
                var10 = var15.find;
                var9 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var15 = var10.bind(var15)(var9);
                if (!(var2 != var15)) {
                    _fun50177_ip = 184;
                    continue _fun50177
                }
            case 130:
                var10 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 23;
                var9 = var16[var9];
                var9 = var10.bind(var5)(var9);
                var9 = var9.bind(var5)(var15, var1);
                var4 = false;
                if (var9) {
                    _fun50177_ip = 204;
                    continue _fun50177
                }
            case 161:
                var9 = global;
                var10 = var9.Object;
                var9 = var10.assign;
                var9 = var9.bind(var10)(var15, var1);
                var4 = true;
                _fun50177_ip = 204;
                continue _fun50177;
            case 184:
                var9 = _closure1_slot45;
                var10 = var9[var12];
                var9 = var10.push;
                var9 = var9.bind(var10)(var1);
                var4 = true;
            case 204:
                var9 = _closure1_slot61;
                var8 = var1.id;
                var8 = var9.bind(var5)(var12, var8);
                var0 = var4;
            case 222:
                var16 = _closure1_slot48;
                if (var6) {
                    _fun50177_ip = 255;
                    continue _fun50177
                }
            case 232:
                var4 = var2 == var16;
                var8 = null;
                if (var4) {
                    _fun50177_ip = 284;
                    continue _fun50177
                }
            case 241:
                var4 = var16.stop;
                var4 = var4.bind(var16)();
                var8 = null;
                _fun50177_ip = 284;
                continue _fun50177;
            case 255:
                var8 = var3;
                if (!(var2 != var16)) {
                    _fun50177_ip = 284;
                    continue _fun50177
                }
            case 262:
                var15 = var16.start;
                var10 = _closure1_slot28;
                var4 = _closure1_slot64;
                var4 = var15.bind(var16)(var10, var4);
                var8 = var3;
            case 284:
                var10 = _closure1_slot10;
                var4 = var10.getAccount;
                var3 = _closure1_slot20;
                var3 = var3.SPOTIFY;
                var15 = var4.bind(var10)(var12, var3);
                _closure2_slot1 = var15;
                if (!(var2 != var15)) {
                    _fun50177_ip = 1041;
                    continue _fun50177
                }
            case 321:
                var3 = _closure1_slot46;
                var4 = var3[var12];
                var10 = var2 != var8;
                var3 = null;
                if (!var10) {
                    _fun50177_ip = 376;
                    continue _fun50177
                }
            case 338:
                var10 = {};
                var10.account = var15;
                var10.track = var8;
                var15 = _closure1_slot56;
                var15 = var15.bind(var5)(var4, var11);
                var10.startTime = var15;
                var10.context = var14;
                var10.repeat = var13;
                var3 = var10;
            case 376:
                var13 = var2 != var1;
                if (!var13) {
                    _fun50177_ip = 391;
                    continue _fun50177
                }
            case 383:
                var10 = _closure1_slot24;
                var13 = var2 != var10;
            case 391:
                if (!var13) {
                    _fun50177_ip = 400;
                    continue _fun50177
                }
            case 394:
                var10 = 0;
                var13 = var10 === var11;
            case 400:
                if (!var13) {
                    _fun50177_ip = 406;
                    continue _fun50177
                }
            case 403:
                var13 = !var6;
            case 406:
                if (var13) {
                    _fun50177_ip = 417;
                    continue _fun50177
                }
            case 409:
                var10 = _closure1_slot46;
                var10[var12] = var3;
            case 417:
                var10 = _closure1_slot23;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var14 = 19;
                var14 = var16[var14];
                var16 = var15.bind(var5)(var14);
                var15 = var16.values;
                var14 = _closure1_slot46;
                var16 = var15.bind(var16)(var14);
                var15 = var16.find;
                var14 = function(arg0) { // Environment: var7
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 != var0;
                    return var0;
                };
                var14 = var15.bind(var16)(var14);
                _closure1_slot23 = var14;
                var15 = _closure1_slot65;
                var16 = _closure1_slot9;
                var14 = var16.getId;
                var14 = var14.bind(var16)();
                var14 = var15.bind(var5)(var14);
                if (!(var2 != var8)) {
                    _fun50177_ip = 543;
                    continue _fun50177
                }
            case 501:
                if (var13) {
                    _fun50177_ip = 543;
                    continue _fun50177
                }
            case 504:
                var16 = _closure1_slot42;
                var15 = var16.start;
                var13 = var8.duration;
                var14 = var13 - var11;
                var13 = _closure1_slot30;
                var14 = var14 + var13;
                var13 = function() { // Environment: var7
                    var2 = _closure1_slot57;
                    var0 = _closure2_slot1;
                    var1 = var0.id;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var13 = var15.bind(var16)(var14, var13);
                _fun50177_ip = 557;
                continue _fun50177;
            case 543:
                var14 = _closure1_slot42;
                var13 = var14.stop;
                var13 = var13.bind(var14)();
            case 557:
                var13 = _closure1_slot24;
                if (!(var2 != var13)) {
                    _fun50177_ip = 606;
                    continue _fun50177
                }
            case 565:
                if (var6) {
                    _fun50177_ip = 574;
                    continue _fun50177
                }
            case 568:
                var6 = 0;
                if (!(!(var11 > var6))) {
                    _fun50177_ip = 660;
                    continue _fun50177
                }
            case 574:
                if (!(var2 != var1)) {
                    _fun50177_ip = 660;
                    continue _fun50177
                }
            case 578:
                if (!(var2 != var3)) {
                    _fun50177_ip = 606;
                    continue _fun50177
                }
            case 582:
                var1 = _closure1_slot24;
                var6 = var1.trackId;
                var1 = var3.track;
                var1 = var1.id;
                if (!(var6 === var1)) {
                    _fun50177_ip = 660;
                    continue _fun50177
                }
            case 606:
                var6 = _closure1_slot43;
                var1 = var6.isStarted;
                var1 = var1.bind(var6)();
                if (!var1) {
                    _fun50177_ip = 728;
                    continue _fun50177
                }
            case 623:
                var11 = _closure1_slot38;
                var6 = var11.info;
                var1 = 'Listen along stop cancelled as playback of track resumed';
                var1 = var6.bind(var11)(var1);
                var6 = _closure1_slot43;
                var1 = var6.stop;
                var1 = var1.bind(var6)();
                _fun50177_ip = 728;
                continue _fun50177;
            case 660:
                var11 = _closure1_slot38;
                var6 = var11.info;
                var13 = _closure1_slot30;
                var1 = global;
                var1 = var1.HermesInternal;
                var15 = var1.concat;
                var14 = 'Listen along active but playback stopped or track changed. Stopping listen along in ';
                var1 = 'ms';
                var1 = var15.bind(var14)(var13, var1);
                var1 = var6.bind(var11)(var1);
                var11 = _closure1_slot43;
                var6 = var11.start;
                var1 = function() { // Environment: var7
                    var3 = _closure1_slot38;
                    var2 = var3.info;
                    var0 = 'Stopping listening along';
                    var0 = var2.bind(var3)(var0);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 24;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.bind(var0)();
                    var2 = _closure1_slot57;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var6.bind(var11)(var13, var1);
            case 728:
                var6 = _closure1_slot23;
                var1 = var0;
                if (!(var10 !== var6)) {
                    _fun50177_ip = 1039;
                    continue _fun50177
                }
            case 742:
                if (!(var2 == var4)) {
                    _fun50177_ip = 756;
                    continue _fun50177
                }
            case 746:
                var1 = var0;
                if (!(var2 != var3)) {
                    _fun50177_ip = 1039;
                    continue _fun50177
                }
            case 756:
                if (!(var2 != var4)) {
                    _fun50177_ip = 810;
                    continue _fun50177
                }
            case 760:
                if (!(var2 != var3)) {
                    _fun50177_ip = 810;
                    continue _fun50177
                }
            case 764:
                var6 = var4.track;
                var10 = var6.id;
                var6 = var3.track;
                var6 = var6.id;
                if (!(var10 === var6)) {
                    _fun50177_ip = 810;
                    continue _fun50177
                }
            case 788:
                var4 = var4.startTime;
                var3 = var3.startTime;
                var1 = var0;
                if (!(var4 !== var3)) {
                    _fun50177_ip = 1039;
                    continue _fun50177
                }
            case 810:
                var2 = var2 != var8;
                if (!var2) {
                    _fun50177_ip = 1037;
                    continue _fun50177
                }
            case 820:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 18;
                var3 = var6[var3];
                var11 = var4.bind(var5)(var3);
                var10 = var11.dispatch;
                var3 = {};
                var13 = 'SPOTIFY_NEW_TRACK';
                var3.type = var13;
                var3.track = var8;
                var3.connectionId = var12;
                var3 = var10.bind(var11)(var3);
                var3 = 22;
                var3 = var6[var3];
                var6 = var4.bind(var5)(var3);
                var5 = var6.track;
                var3 = _closure1_slot22;
                var4 = var3.ACTIVITY_UPDATED;
                var3 = {};
                var9 = _closure1_slot20;
                var9 = var9.SPOTIFY;
                var3.party_platform = var9;
                var9 = var8.id;
                var3.track_id = var9;
                var9 = true;
                var3.has_images = var9;
                var9 = var8.album;
                var9 = var9.name;
                var3.details = var9;
                var9 = var8.name;
                var3.state = var9;
                var9 = var8.album;
                var9 = var9.id;
                var3.album_id = var9;
                var11 = var8.artists;
                var10 = var11.map;
                var9 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                var3.author_ids = var9;
                var9 = var8.artists;
                var8 = var9.map;
                var7 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var0 = var0.name;
                    return var0;
                };
                var7 = var8.bind(var9)(var7);
                var3.author_names = var7;
                var2 = var5.bind(var6)(var4, var3);
            case 1037:
                var1 = undefined;
            case 1039:
                return var1;
            case 1041:
                return var0;
        }
    };
    var3.SPOTIFY_PLAYER_STATE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var1 = var0.id;
        var _closure1_slot25 = var1;
        var0 = undefined;
        return var0;
    };
    var3.SPOTIFY_PLAYER_PLAY = var10;
    var10 = function arg0() {
        _fun50185: for (var _fun50185_ip = 0;;) switch (_fun50185_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.activity;
                var6 = var1.metadata;
                var1 = _closure1_slot55;
                var9 = undefined;
                var1 = var1.bind(var9)();
                var4 = null;
                if (!(var4 != var1)) {
                    _fun50185_ip = 321;
                    continue _fun50185
                }
            case 37:
                var5 = var1.socket;
                var2 = var1.device;
                var10 = var0.sync_id;
                var0 = var0.party;
                var1 = var4 == var10;
                if (var1) {
                    _fun50185_ip = 72;
                    continue _fun50185
                }
            case 68:
                var1 = var4 == var0;
            case 72:
                if (var1) {
                    _fun50185_ip = 84;
                    continue _fun50185
                }
            case 75:
                var7 = var0.id;
                var1 = var4 == var7;
            case 84:
                if (var1) {
                    _fun50185_ip = 104;
                    continue _fun50185
                }
            case 87:
                var7 = _closure1_slot16;
                var0 = var0.id;
                var0 = var7.bind(var9)(var0);
                var1 = !var0;
            case 104:
                var0 = !var1;
                if (var1) {
                    _fun50185_ip = 319;
                    continue _fun50185
                }
            case 113:
                var1 = var4 != var6;
                var12 = undefined;
                if (!var1) {
                    _fun50185_ip = 128;
                    continue _fun50185
                }
            case 122:
                var12 = var6.context_uri;
            case 128:
                var1 = _closure1_slot24;
                if (!(var4 != var1)) {
                    _fun50185_ip = 144;
                    continue _fun50185
                }
            case 136:
                var1 = _closure1_slot63;
                var1 = var1.bind(var9)();
            case 144:
                var1 = var4 != var6;
                if (!var1) {
                    _fun50185_ip = 316;
                    continue _fun50185
                }
            case 154:
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 20;
                var7 = var11[var7];
                var11 = var8.bind(var9)(var7);
                var9 = var11.play;
                var8 = var5.accountId;
                var7 = var5.accessToken;
                var6 = var6.type;
                if (!(var4 == var6)) {
                    _fun50185_ip = 211;
                    continue _fun50185
                }
            case 201:
                var4 = _closure1_slot19;
                var6 = var4.TRACK;
            case 211:
                var4 = {};
                var4.contextUri = var12;
                var12 = var2.id;
                var4.deviceId = var12;
                var18 = var11;
                var17 = var8;
                var16 = var7;
                var15 = var10;
                var14 = var6;
                var13 = var4;
                var4 = var18[var9](var17, var16, var15, var14, var13, var12);
                var4 = _closure1_slot38;
                var3 = var4.info;
                var17 = var5.accountId;
                var13 = var2.name;
                var2 = global;
                var2 = var2.HermesInternal;
                var7 = var2.concat;
                var18 = 'Play started: ';
                var16 = ' playing ';
                var14 = ' on ';
                var15 = var10;
                var2 = var18[var7](var17, var16, var15, var14, var13, var12);
                var2 = var3.bind(var4)(var2);
                var1 = undefined;
            case 316:
                var0 = var1;
            case 319:
                return var0;
            case 321:
                var0 = false;
                return var0;
        }
    };
    var3.ACTIVITY_PLAY = var10;
    var10 = function arg0() {
        var0 = arg0;
        var4 = var0.activity;
        var3 = var0.userId;
        var2 = _closure1_slot62;
        var1 = undefined;
        var0 = true;
        var0 = var2.bind(var1)(var3, var4, var0);
        return var0;
    };
    var3.ACTIVITY_SYNC = var10;
    var3.ACTIVITY_SYNC_STOP = var7;
    var7 = function arg0() {
        var0 = arg0;
        var6 = var0.accountId;
        var3 = var0.devices;
        var1 = _closure1_slot45;
        var1[var6] = var3;
        var2 = _closure1_slot38;
        var1 = var2.info;
        var0 = global;
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var4 = 'Devices updated for ';
        var0 = ':';
        var0 = var5.bind(var4)(var6, var0);
        var0 = var1.bind(var2)(var0, var3);
        var0 = undefined;
        return var0;
    };
    var3.SPOTIFY_SET_DEVICES = var7;
    var7 = function arg0() {
        var0 = arg0;
        var3 = var0.accountId;
        var2 = var0.deviceId;
        var1 = _closure1_slot61;
        var0 = undefined;
        var1 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var3.SPOTIFY_SET_ACTIVE_DEVICE = var7;
    var7 = function arg0() {
        var0 = arg0;
        var2 = var0.userId;
        var1 = _closure1_slot65;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        var0 = false;
        return var0;
    };
    var3.SPEAKING = var7;
    var7 = function arg0() {
        var0 = arg0;
        var3 = var0.voiceStates;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            var0 = arg1;
            var2 = var0.userId;
            var1 = _closure1_slot65;
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            var0 = arg0;
            return var0;
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.VOICE_STATE_UPDATES = var7;
    var7 = function arg0() {
        _fun50192: for (var _fun50192_ip = 0;;) switch (_fun50192_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.settings;
                var2 = null;
                var3 = var2 == var4;
                var0 = undefined;
                var1 = undefined;
                if (var3) {
                    _fun50192_ip = 28;
                    continue _fun50192
                }
            case 22:
                var1 = var4.desktopSettings;
            case 28:
                if (!(var2 == var1)) {
                    _fun50192_ip = 69;
                    continue _fun50192
                }
            case 32:
                if (!(var2 == var4)) {
                    _fun50192_ip = 247;
                    continue _fun50192
                }
            case 39:
                var5 = _closure1_slot48;
                if (!(var2 != var5)) {
                    _fun50192_ip = 60;
                    continue _fun50192
                }
            case 50:
                var3 = var5.stop;
                var3 = var3.bind(var5)();
            case 60:
                _closure1_slot48 = var2;
                _fun50192_ip = 247;
                continue _fun50192;
            case 69:
                var5 = _closure1_slot48;
                if (!(var2 != var5)) {
                    _fun50192_ip = 90;
                    continue _fun50192
                }
            case 80:
                var3 = var5.stop;
                var3 = var3.bind(var5)();
            case 90:
                var5 = var2 == var4;
                var3 = undefined;
                if (var5) {
                    _fun50192_ip = 105;
                    continue _fun50192
                }
            case 99:
                var3 = var4.desktopSettings;
            case 105:
                var6 = var3.sourceId;
                var3 = var3.sound;
                if (!(var2 != var6)) {
                    _fun50192_ip = 154;
                    continue _fun50192
                }
            case 121:
                var5 = _closure1_slot8;
                var4 = var5.getObservedAppNameForWindow;
                var5 = var4.bind(var5)(var6);
                var4 = _closure1_slot26;
                var4 = var4.name;
                if (!(var5 === var4)) {
                    _fun50192_ip = 154;
                    continue _fun50192
                }
            case 151:
                if (var3) {
                    _fun50192_ip = 178;
                    continue _fun50192
                }
            case 154:
                var4 = _closure1_slot48;
                if (!(var2 != var4)) {
                    _fun50192_ip = 172;
                    continue _fun50192
                }
            case 162:
                var3 = var4.stop;
                var3 = var3.bind(var4)();
            case 172:
                _closure1_slot48 = var2;
                _fun50192_ip = 247;
                continue _fun50192;
            case 178:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 17;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var2 = var2.Interval;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var9 = var3;
                var2 = new var9[var2](var8);
                var4 = var2 instanceof Object ? var2 : var3;
                _closure1_slot48 = var4;
                var3 = var4.start;
                var2 = _closure1_slot28;
                var1 = _closure1_slot64;
                var1 = var3.bind(var4)(var2, var1);
            case 247:
                return var0;
        }
    };
    var3.MEDIA_ENGINE_SET_GO_LIVE_SOURCE = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var18 = var7;
    var16 = var3;
    var3 = new var18[var9](var17, var16, var15);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot51 = var3;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/spotify/SpotifyStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.SpotifySocket = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 3485, 1216, 4520, 4230, 3612, 3951, 3523, 5653, 660, 4396, 667, 3, 3632, 806, 22, 5654, 561, 795, 628, 5657, 3956, 1304, 5658, 566, 2]);