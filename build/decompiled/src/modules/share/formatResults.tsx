// modules/share/formatResults.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun54916: for (var _fun54916_ip = 0;;) switch (_fun54916_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun54916_ip = 46;
                    continue _fun54916
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun54916_ip = 55;
                    continue _fun54916
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun54916_ip = 343;
                    continue _fun54916
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun54916_ip = 323;
                    continue _fun54916
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun54916_ip = 283;
                    continue _fun54916
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun54916_ip = 270;
                    continue _fun54916
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
                    _fun54916_ip = 163;
                    continue _fun54916
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun54916_ip = 179;
                    continue _fun54916
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun54916_ip = 249;
                    continue _fun54916
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun54916_ip = 249;
                    continue _fun54916
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun54916_ip = 234;
                    continue _fun54916
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun54916_ip = 247;
                    continue _fun54916
                }
            case 234:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun54916_ip = 265;
                continue _fun54916;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun54916_ip = 283;
                continue _fun54916;
            case 270:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun54916_ip = 323;
                    continue _fun54916
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
                    _fun54916_ip = 330;
                    continue _fun54916
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun54917: for (var _fun54917_ip = 0;;) switch (_fun54917_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun54917_ip = 56;
                                continue _fun54917
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
                            _fun54917_ip = 67;
                            continue _fun54917;
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
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun54918: for (var _fun54918_ip = 0;;) switch (_fun54918_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun54918_ip = 23;
                    continue _fun54918
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun54918_ip = 33;
                    continue _fun54918
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
                    _fun54918_ip = 70;
                    continue _fun54918
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun54918_ip = 55;
                    continue _fun54918
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var3 = function arg0() {
        _fun54919: for (var _fun54919_ip = 0;;) switch (_fun54919_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = 'channel';
                if (!(var1 !== var2)) {
                    _fun54919_ip = 55;
                    continue _fun54919
                }
            case 16:
                var3 = _closure1_slot5;
                var2 = var3.getDMFromUserId;
                var1 = var0.id;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                var1 = undefined;
                if (!var3) {
                    _fun54919_ip = 53;
                    continue _fun54919
                }
            case 50:
                var1 = var2;
            case 53:
                return var1;
            case 55:
                var0 = var0.id;
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun54922: for (var _fun54922_ip = 0;;) switch (_fun54922_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun54922_ip = 112;
                            continue _fun54922
                        }
                    case 10:
                        var3 = var5;
                        var1 = _closure1_slot13;
                        var2 = undefined;
                        var1 = var1.bind(var2)(var5);
                        var5 = null;
                        if (!(var5 == var1)) {
                            _fun54922_ip = 109;
                            continue _fun54922
                        }
                    case 33:
                        var5 = var3;
                        var6 = var5.type;
                        var5 = 'user';
                        if (!(var5 !== var6)) {
                            _fun54922_ip = 52;
                            continue _fun54922
                        }
                    case 49:
                        return var2;
                    case 52: // try_start_0
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 7;
                        var4 = var6[var4];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.getOrEnsurePrivateChannel;
                        var3 = var3.id;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 92);
                    case 90:
                        return var3;
                    case 92:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun54922_ip = 101;
                            continue _fun54922
                        }
                    case 98: // try_end0
                        return var3;
                    case 101:
                        return var3;
                    case 104: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        return var2;
                    case 109:
                        return var1;
                    case 112:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun54923: for (var _fun54923_ip = 0;;) switch (_fun54923_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = 'user';
                if (!(var1 !== var2)) {
                    _fun54923_ip = 53;
                    continue _fun54923
                }
            case 16:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var0.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 53:
                var2 = _closure1_slot7;
                var1 = var2.getUser;
                var0 = var0.id;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                var1 = var0 != var2;
                if (!var1) {
                    _fun54923_ip = 140;
                    continue _fun54923
                }
            case 85:
                var1 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.AutocompleterResultTypes;
                var3 = var3.USER;
                var1.type = var3;
                var1.record = var2;
                var2 = 0;
                var1.score = var2;
                var0 = var1;
            case 140:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun54924: for (var _fun54924_ip = 0;;) switch (_fun54924_ip) {
            case 0:
                var1 = arg1;
                var0 = global;
                var0 = var0.Set;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var17 = var2;
                var0 = new var17[var0](var16);
                var10 = var0 instanceof Object ? var0 : var2;
                var9 = null;
                if (!(var9 != var1)) {
                    _fun54924_ip = 93;
                    continue _fun54924
                }
            case 37:
                var0 = _closure1_slot11;
                var3 = undefined;
                var2 = var0.bind(var3)(var1);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun54924_ip = 93;
                    continue _fun54924
                }
            case 63:
                var4 = var1.value;
                var0 = var10.add;
                var0 = var0.bind(var10)(var4);
                var4 = var2.bind(var3)();
                var0 = var4.done;
                var1 = var4;
                if (!var0) {
                    _fun54924_ip = 63;
                    continue _fun54924
                }
            case 93:
                var0 = new Array(0);
                var2 = _closure1_slot11;
                var7 = undefined;
                var1 = arg0;
                var6 = var2.bind(var7)(var1);
                var2 = var6.bind(var7)();
                var1 = var2.done;
                var5 = 8;
                var4 = undefined;
                var3 = var2;
                var2 = undefined;
                if (var1) {
                    _fun54924_ip = 297;
                    continue _fun54924
                }
            case 139:
                var15 = var3.value;
                var13 = var4;
                var11 = var2;
                if (!(var9 != var15)) {
                    _fun54924_ip = 273;
                    continue _fun54924
                }
            case 154:
                var12 = var15.type;
                var14 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var14.bind(var7)(var1);
                var1 = var1.AutocompleterResultTypes;
                var1 = var1.HEADER;
                var13 = var15;
                var11 = var2;
                if (!(var12 !== var1)) {
                    _fun54924_ip = 273;
                    continue _fun54924
                }
            case 198:
                var1 = var15.record;
                var1 = var1.id;
                var12 = var10.has;
                var12 = var12.bind(var10)(var1);
                var13 = var4;
                var11 = var1;
                if (var12) {
                    _fun54924_ip = 273;
                    continue _fun54924
                }
            case 228:
                var12 = var10.add;
                var12 = var12.bind(var10)(var1);
                var12 = var4;
                if (!(var9 != var4)) {
                    _fun54924_ip = 257;
                    continue _fun54924
                }
            case 245:
                var14 = var0.push;
                var14 = var14.bind(var0)(var4);
                var12 = undefined;
            case 257:
                var14 = var0.push;
                var14 = var14.bind(var0)(var15);
                var13 = var12;
                var11 = var1;
            case 273:
                var12 = var6.bind(var7)();
                var1 = var12.done;
                var4 = var13;
                var2 = var11;
                var3 = var12;
                if (!var1) {
                    _fun54924_ip = 139;
                    continue _fun54924
                }
            case 297:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun54925: for (var _fun54925_ip = 0;;) switch (_fun54925_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun54925_ip = 154;
                    continue _fun54925
                }
            case 12:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var8 = undefined;
                var1 = var3.bind(var8)(var1);
                var3 = var1.bind(var8)(var2);
                var2 = var0 == var3;
                var1 = null;
                if (var2) {
                    _fun54925_ip = 152;
                    continue _fun54925
                }
            case 51:
                var2 = _closure1_slot8;
                var4 = var2.bind(var8)(var3);
                var2 = null;
                if (!var4) {
                    _fun54925_ip = 149;
                    continue _fun54925
                }
            case 65:
                var6 = var3.type;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 8;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.AutocompleterResultTypes;
                var4 = var4.USER;
                var4 = var6 === var4;
                if (var4) {
                    _fun54925_ip = 141;
                    continue _fun54925
                }
            case 109:
                var8 = _closure1_slot6;
                var7 = var8.can;
                var5 = _closure1_slot9;
                var6 = var5.VIEW_CHANNEL;
                var5 = var3.record;
                var4 = var7.bind(var8)(var6, var5);
            case 141:
                var2 = null;
                if (!var4) {
                    _fun54925_ip = 149;
                    continue _fun54925
                }
            case 146:
                var2 = var3;
            case 149:
                var1 = var2;
            case 152:
                return var1;
            case 154:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0, arg1() {
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun54927: for (var _fun54927_ip = 0;;) switch (_fun54927_ip) {
                case 0:
                    var5 = arg0;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var0 = var2[var0];
                    var9 = undefined;
                    var1 = var1.bind(var9)(var0);
                    var0 = var1.isNotNullish;
                    var0 = var0.bind(var1)(var5);
                    if (!var0) {
                        _fun54927_ip = 374;
                        continue _fun54927
                    }
                case 45:
                    var2 = var5.type;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var10 = 8;
                    var1 = var1[var10];
                    var1 = var3.bind(var9)(var1);
                    var1 = var1.AutocompleterResultTypes;
                    var1 = var1.HEADER;
                    var1 = var2 === var1;
                    if (var1) {
                        _fun54927_ip = 371;
                        continue _fun54927
                    }
                case 92:
                    var2 = _closure1_slot8;
                    var2 = var2.bind(var9)(var5);
                    if (!var2) {
                        _fun54927_ip = 368;
                        continue _fun54927
                    }
                case 107:
                    var4 = _closure2_slot0;
                    var7 = var5.type;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var10];
                    var3 = var8.bind(var9)(var3);
                    var3 = var3.AutocompleterResultTypes;
                    var3 = var3.USER;
                    if (!(var7 !== var3)) {
                        _fun54927_ip = 327;
                        continue _fun54927
                    }
                case 155:
                    var7 = var5.type;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var10];
                    var3 = var8.bind(var9)(var3);
                    var3 = var3.AutocompleterResultTypes;
                    var3 = var3.GROUP_DM;
                    var3 = var7 === var3;
                    if (var3) {
                        _fun54927_ip = 325;
                        continue _fun54927
                    }
                case 199:
                    var7 = var5.record;
                    var8 = var7.type;
                    var7 = _closure1_slot10;
                    var7 = var7.GUILD_FORUM;
                    var7 = var8 !== var7;
                    if (!var7) {
                        _fun54927_ip = 252;
                        continue _fun54927
                    }
                case 227:
                    var8 = var5.record;
                    var9 = var8.type;
                    var8 = _closure1_slot10;
                    var8 = var8.GUILD_MEDIA;
                    var7 = var9 !== var8;
                case 252:
                    if (!var7) {
                        _fun54927_ip = 287;
                        continue _fun54927
                    }
                case 255:
                    var11 = _closure1_slot6;
                    var10 = var11.can;
                    var8 = _closure1_slot9;
                    var9 = var8.VIEW_CHANNEL;
                    var8 = var5.record;
                    var7 = var10.bind(var11)(var9, var8);
                case 287:
                    if (!var7) {
                        _fun54927_ip = 322;
                        continue _fun54927
                    }
                case 290:
                    var11 = _closure1_slot6;
                    var10 = var11.can;
                    var8 = _closure1_slot9;
                    var9 = var8.SEND_MESSAGES;
                    var8 = var5.record;
                    var7 = var10.bind(var11)(var9, var8);
                case 322:
                    var3 = var7;
                case 325:
                    _fun54927_ip = 365;
                    continue _fun54927;
                case 327:
                    if (var4) {
                        _fun54927_ip = 362;
                        continue _fun54927
                    }
                case 330:
                    var7 = _closure1_slot5;
                    var6 = var7.getDMChannelFromUserId;
                    var5 = var5.record;
                    var5 = var5.id;
                    var6 = var6.bind(var7)(var5);
                    var5 = null;
                    var4 = var5 != var6;
                case 362:
                    var3 = var4;
                case 365:
                    var2 = var3;
                case 368:
                    var1 = var2;
                case 371:
                    var0 = var1;
                case 374:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.isAllowedType;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Permissions;
    var _closure1_slot9 = var7;
    var4 = var4.ChannelTypes;
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/share/formatResults.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun54928: for (var _fun54928_ip = 0;;) switch (_fun54928_ip) {
            case 0:
                var2 = arg0;
                var4 = var2.results;
                var0 = var2.hasQuery;
                var8 = var2.queryMode;
                var _closure2_slot0 = var8;
                var14 = var2.frequentChannels;
                var17 = var2.targetDestination;
                var13 = var2.selectedDestinations;
                var9 = var2.pinnedDestinations;
                var6 = var2.originDestination;
                var _closure2_slot1 = var6;
                var3 = var2.includeMissingDMs;
                if (var0) {
                    _fun54928_ip = 380;
                    continue _fun54928
                }
            case 73:
                var0 = null;
                if (!(var0 != var9)) {
                    _fun54928_ip = 90;
                    continue _fun54928
                }
            case 79:
                var5 = var9.length;
                var2 = 0;
                if (!(!(var5 > var2))) {
                    _fun54928_ip = 96;
                    continue _fun54928
                }
            case 90:
                var5 = new Array(0);
                _fun54928_ip = 111;
                continue _fun54928;
            case 96:
                var7 = var9.map;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot15;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var5 = var7.bind(var9)(var2);
            case 111:
                var9 = _closure1_slot4;
                var7 = var9.getChannelHistory;
                var11 = var7.bind(var9)();
                var7 = var11.length;
                var9 = 0;
                if (!(!(var7 > var9))) {
                    _fun54928_ip = 145;
                    continue _fun54928
                }
            case 139:
                var12 = new Array(0);
                _fun54928_ip = 160;
                continue _fun54928;
            case 145:
                var10 = var11.map;
                var7 = function(arg0) { // Environment: var1
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var10.bind(var11)(var7);
            case 160:
                var7 = var14.length;
                if (!(!(var7 > var9))) {
                    _fun54928_ip = 175;
                    continue _fun54928
                }
            case 169:
                var11 = new Array(0);
                _fun54928_ip = 190;
                continue _fun54928;
            case 175:
                var10 = var14.map;
                var7 = function(arg0) { // Environment: var1
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var10.bind(var14)(var7);
            case 190:
                var10 = _closure1_slot18;
                var7 = new Array(1);
                var20 = var7;
                var19 = var5;
                var18 = 0;
                var14 = arraySpread(var20, var19, var18);
                var15 = var0 != var17;
                var5 = null;
                if (!var15) {
                    _fun54928_ip = 230;
                    continue _fun54928
                }
            case 219:
                var16 = _closure1_slot15;
                var15 = undefined;
                var5 = var16.bind(var15)(var17);
            case 230:
                var7[var14] = var5;
                var5 = 1;
                var18 = var14 + var5;
                var20 = var7;
                var19 = var12;
                var18 = arraySpread(var20, var19, var18);
                var20 = var7;
                var19 = var11;
                var5 = arraySpread(var20, var19, var18);
                var5 = undefined;
                var7 = var10.bind(var5)(var7, var3);
                var11 = var0 == var13;
                var10 = undefined;
                if (var11) {
                    _fun54928_ip = 294;
                    continue _fun54928
                }
            case 279:
                var12 = var13.find;
                var11 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.isEqual;
                    var1 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var10 = var12.bind(var13)(var11);
            case 294:
                var10 = var0 != var10;
                if (!(var0 != var6)) {
                    _fun54928_ip = 320;
                    continue _fun54928
                }
            case 302:
                if (var10) {
                    _fun54928_ip = 320;
                    continue _fun54928
                }
            case 305:
                var10 = var6.id;
                var6 = new Array(1);
                var6[0] = var10;
                _fun54928_ip = 324;
                continue _fun54928;
            case 320:
                var6 = new Array(0);
            case 324:
                if (!(var0 == var8)) {
                    _fun54928_ip = 354;
                    continue _fun54928
                }
            case 328:
                var0 = _closure1_slot16;
                var8 = var0.bind(var5)(var7, var6);
                var6 = var8.slice;
                var0 = 15;
                var0 = var6.bind(var8)(var9, var0);
                _fun54928_ip = 378;
                continue _fun54928;
            case 354:
                var2 = _closure1_slot16;
                var6 = var7.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var6.bind(var7)(var1);
                var0 = var2.bind(var5)(var1);
            case 378:
                return var0;
            case 380:
                var2 = _closure1_slot16;
                var0 = _closure1_slot18;
                var1 = undefined;
                var0 = var0.bind(var1)(var4, var3);
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var2.default = var4;
    var4 = function arg0() {
        _fun54934: for (var _fun54934_ip = 0;;) switch (_fun54934_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var2 = var2.bind(var3)(var1);
                var3 = null;
                var4 = var3 == var2;
                var3 = undefined;
                if (var4) {
                    _fun54934_ip = 36;
                    continue _fun54934
                }
            case 31:
                var3 = var2.type;
            case 36:
                var0 = _closure1_slot10;
                var0 = var0.DM;
                if (!(var3 !== var0)) {
                    _fun54934_ip = 66;
                    continue _fun54934
                }
            case 50:
                var0 = {};
                var3 = 'channel';
                var0.type = var3;
                var0.id = var1;
                _fun54934_ip = 95;
                continue _fun54934;
            case 66:
                var1 = {};
                var3 = 'user';
                var1.type = var3;
                var3 = var2.recipients;
                var2 = 0;
                var2 = var3[var2];
                var1.id = var2;
                var0 = var1;
            case 95:
                return var0;
        }
    };
    var2.getDestinationIdFromChannelId = var4;
    var4 = function arg0() {
        var0 = arg0;
        var4 = var0.type;
        var3 = var0.id;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = '-';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var2.destinationKey = var4;
    var2.getChannelIdFromDestinationId = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getOrResolveChannelIdFromDestinationId = var3;
    var1 = function arg0() {
        _fun54937: for (var _fun54937_ip = 0;;) switch (_fun54937_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.results;
                var1 = var0.selectedResult;
                var5 = var0.hasNonEmptyQuery;
                var11 = var0.queryMode;
                var _closure2_slot0 = var11;
                var9 = var0.selectedChannelId;
                var12 = var0.frequentChannels;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun54937_ip = 61;
                    continue _fun54937
                }
            case 55:
                var4 = new Array(0);
                _fun54937_ip = 83;
                continue _fun54937;
            case 61:
                var1 = var1.record;
                var2 = var1.id;
                var1 = new Array(1);
                var1[0] = var2;
                var4 = var1;
            case 83:
                var17 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 8;
                var10 = var2[var7];
                var3 = undefined;
                var13 = var17.bind(var3)(var10);
                var10 = var13.createHeaderResult;
                var15 = 10;
                var14 = var2[var15];
                var14 = var17.bind(var3)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var2 = var2[var15];
                var2 = var17.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.qm9dSj;
                var2 = var14.bind(var16)(var2);
                var2 = var10.bind(var13)(var2);
                if (var5) {
                    _fun54937_ip = 403;
                    continue _fun54937
                }
            case 174:
                var10 = var12.map;
                var5 = function(arg0) { // Environment: var8
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var10.bind(var12)(var5);
                var10 = var12.filter;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 11;
                var5 = var14[var5];
                var5 = var13.bind(var3)(var5);
                var5 = var5.isNotNullish;
                var12 = var10.bind(var12)(var5);
                var10 = var12.filter;
                var5 = _closure1_slot8;
                var10 = var10.bind(var12)(var5);
                var5 = _closure1_slot16;
                if (!(var0 == var11)) {
                    _fun54937_ip = 359;
                    continue _fun54937
                }
            case 247:
                var14 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = var0[var7];
                var11 = var14.bind(var3)(var7);
                var7 = var11.createHeaderResult;
                var12 = var0[var15];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var0 = var0[var15];
                var0 = var14.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["80lOZ1"];
                var0 = var12.bind(var13)(var0);
                var7 = var7.bind(var11)(var0);
                var0 = new Array(3);
                var0[0] = var7;
                var7 = _closure1_slot17;
                var7 = var7.bind(var3)(var9);
                var0[1] = var7;
                var0[2] = var2;
                var18 = 3;
                var20 = var0;
                var19 = var10;
                var7 = arraySpread(var20, var19, var18);
                _fun54937_ip = 395;
                continue _fun54937;
            case 359:
                var7 = new Array(1);
                var7[0] = var2;
                var9 = var10.filter;
                var8 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var19 = var9.bind(var10)(var8);
                var18 = 1;
                var20 = var7;
                var8 = arraySpread(var20, var19, var18);
                var0 = var7;
            case 395:
                var0 = var5.bind(var3)(var0, var4);
                return var0;
            case 403:
                var0 = new Array(1);
                var0[0] = var2;
                var2 = _closure1_slot16;
                var5 = var6.filter;
                var1 = _closure1_slot8;
                var1 = var5.bind(var6)(var1);
                var19 = var2.bind(var3)(var1, var4);
                var18 = 1;
                var20 = var0;
                var1 = arraySpread(var20, var19, var18);
                return var0;
        }
    };
    var2.formatResultsWithHeaders = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6624, 1372, 3091, 1621, 6635, 660, 3945, 6625, 6633, 1234, 1304, 22, 2]);