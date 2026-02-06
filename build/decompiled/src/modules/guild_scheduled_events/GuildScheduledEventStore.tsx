// modules/guild_scheduled_events/GuildScheduledEventStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var10;
    var0 = function() {
        _fun28774: for (var _fun28774_ip = 0;;) switch (_fun28774_ip) {
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
                _fun28774_ip = 74;
                continue _fun28774;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1() {
        _fun28777: for (var _fun28777_ip = 0;;) switch (_fun28777_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun28777_ip = 46;
                    continue _fun28777
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun28777_ip = 55;
                    continue _fun28777
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun28777_ip = 343;
                    continue _fun28777
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun28777_ip = 323;
                    continue _fun28777
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun28777_ip = 283;
                    continue _fun28777
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun28777_ip = 270;
                    continue _fun28777
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
                    _fun28777_ip = 163;
                    continue _fun28777
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun28777_ip = 179;
                    continue _fun28777
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun28777_ip = 249;
                    continue _fun28777
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun28777_ip = 249;
                    continue _fun28777
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun28777_ip = 234;
                    continue _fun28777
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun28777_ip = 247;
                    continue _fun28777
                }
            case 234:
                var8 = _closure1_slot21;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun28777_ip = 265;
                continue _fun28777;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun28777_ip = 283;
                continue _fun28777;
            case 270:
                var6 = _closure1_slot21;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun28777_ip = 323;
                    continue _fun28777
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
                    _fun28777_ip = 330;
                    continue _fun28777
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun28778: for (var _fun28778_ip = 0;;) switch (_fun28778_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun28778_ip = 56;
                                continue _fun28778
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
                            _fun28778_ip = 67;
                            continue _fun28778;
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
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1() {
        _fun28779: for (var _fun28779_ip = 0;;) switch (_fun28779_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun28779_ip = 23;
                    continue _fun28779
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun28779_ip = 33;
                    continue _fun28779
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
                    _fun28779_ip = 70;
                    continue _fun28779
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun28779_ip = 55;
                    continue _fun28779
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var5 = function arg0() {
        _fun28780: for (var _fun28780_ip = 0;;) switch (_fun28780_ip) {
            case 0:
                var2 = arg0;
                var5 = var2.id;
                var3 = var2.scheduled_start_time;
                var1 = _closure1_slot29;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                var4 = '\x01';
                if (!var0) {
                    _fun28780_ip = 43;
                    continue _fun28780
                }
            case 37:
                var4 = '\x00';
            case 43:
                var0 = global;
                var1 = var0.Date;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var11 = var2;
                var10 = var3;
                var1 = new var11[var1](var10, var9);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = var2.getTime;
                var8 = var1.bind(var2)();
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var11 = '';
                var0 = '-';
                var10 = var4;
                var9 = var0;
                var7 = var0;
                var6 = var5;
                var0 = var11[var2](var10, var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var0 = function arg0() {
        var4 = arg0;
        var3 = _closure1_slot13;
        var2 = var3.set;
        var0 = var4.id;
        var0 = var2.bind(var3)(var0, var4);
        var2 = _closure1_slot14;
        var0 = 1;
        var0 = var2 + var0;
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun28782: for (var _fun28782_ip = 0;;) switch (_fun28782_ip) {
            case 0:
                var3 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun28782_ip = 14;
                    continue _fun28782
                }
            case 12:
                var1 = true;
            case 14:
                var5 = _closure1_slot13;
                var4 = var5.delete;
                var4 = var4.bind(var5)(var3);
                var4 = _closure1_slot17;
                var4 = delete var4[var3];
                if (!var1) {
                    _fun28782_ip = 50;
                    continue _fun28782
                }
            case 42:
                var1 = _closure1_slot18;
                var1 = delete var1[var3];
            case 50:
                var3 = _closure1_slot14;
                var1 = 1;
                var1 = var3 + var1;
                _closure1_slot14 = var1;
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun28783: for (var _fun28783_ip = 0;;) switch (_fun28783_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun28783_ip = 16;
                    continue _fun28783
                }
            case 9:
                var0 = _closure1_slot16;
            case 16:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun28784: for (var _fun28784_ip = 0;;) switch (_fun28784_ip) {
            case 0:
                var4 = arg0;
                var3 = arguments[1];
                var1 = arguments[2];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun28784_ip = 17;
                    continue _fun28784
                }
            case 15:
                var3 = true;
            case 17:
                if (!(var1 === var0)) {
                    _fun28784_ip = 23;
                    continue _fun28784
                }
            case 21:
                var1 = true;
            case 23:
                var8 = var4.guild_scheduled_event_id;
                var5 = _closure1_slot17;
                var6 = var5[var8];
                var5 = null;
                if (!(var5 == var6)) {
                    _fun28784_ip = 56;
                    continue _fun28784
                }
            case 46:
                var7 = _closure1_slot17;
                var6 = {};
                var7[var8] = var6;
            case 56:
                var7 = _closure1_slot24;
                var6 = var4.guild_scheduled_event_exception_id;
                var7 = var7.bind(var0)(var6);
                var6 = _closure1_slot17;
                var6 = var6[var8];
                var6 = var6[var7];
                if (!(var5 == var6)) {
                    _fun28784_ip = 101;
                    continue _fun28784
                }
            case 87:
                var6 = _closure1_slot17;
                var9 = var6[var8];
                var6 = {};
                var9[var7] = var6;
            case 101:
                var6 = _closure1_slot17;
                var6 = var6[var8];
                var7 = var6[var7];
                var6 = var4.user_id;
                var7[var6] = var4;
                if (!var3) {
                    _fun28784_ip = 288;
                    continue _fun28784
                }
            case 129:
                var6 = _closure1_slot24;
                var3 = var4.guild_scheduled_event_exception_id;
                var7 = var6.bind(var0)(var3);
                var6 = _closure1_slot18;
                var3 = var4.guild_scheduled_event_id;
                var6 = var6[var3];
                var8 = var5 == var6;
                var3 = undefined;
                if (var8) {
                    _fun28784_ip = 171;
                    continue _fun28784
                }
            case 167:
                var3 = var6[var7];
            case 171:
                var6 = var5 != var3;
                var7 = 0;
                if (!var6) {
                    _fun28784_ip = 183;
                    continue _fun28784
                }
            case 180:
                var7 = var3;
            case 183:
                var3 = var4.guild_scheduled_event_exception_id;
                if (!(var5 != var3)) {
                    _fun28784_ip = 213;
                    continue _fun28784
                }
            case 193:
                var6 = var4.response;
                var3 = _closure1_slot11;
                var3 = var3.UNINTERESTED;
                if (!(var6 !== var3)) {
                    _fun28784_ip = 258;
                    continue _fun28784
                }
            case 213:
                var3 = var4.guild_scheduled_event_exception_id;
                var5 = var5 == var3;
                var8 = -1;
                var3 = var8;
                if (!var5) {
                    _fun28784_ip = 261;
                    continue _fun28784
                }
            case 235:
                var6 = var4.response;
                var5 = _closure1_slot11;
                var5 = var5.INTERESTED;
                var3 = var8;
                if (!(var6 === var5)) {
                    _fun28784_ip = 261;
                    continue _fun28784
                }
            case 258:
                var3 = 1;
            case 261:
                var6 = _closure1_slot27;
                var5 = var4.guild_scheduled_event_id;
                var4 = var4.guild_scheduled_event_exception_id;
                var3 = var7 + var3;
                var3 = var6.bind(var0)(var5, var4, var3);
            case 288:
                if (!var1) {
                    _fun28784_ip = 306;
                    continue _fun28784
                }
            case 291:
                var3 = _closure1_slot14;
                var1 = 1;
                var1 = var3 + var1;
                _closure1_slot14 = var1;
            case 306:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun28785: for (var _fun28785_ip = 0;;) switch (_fun28785_ip) {
            case 0:
                var4 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun28785_ip = 14;
                    continue _fun28785
                }
            case 12:
                var1 = true;
            case 14:
                var5 = _closure1_slot24;
                var3 = var4.guild_scheduled_event_exception_id;
                var8 = var5.bind(var0)(var3);
                var5 = _closure1_slot17;
                var3 = var4.guild_scheduled_event_id;
                var6 = var5[var3];
                var5 = null;
                var7 = var5 == var6;
                var3 = undefined;
                if (var7) {
                    _fun28785_ip = 80;
                    continue _fun28785
                }
            case 57:
                var7 = var6[var8];
                var6 = var5 == var7;
                var3 = undefined;
                if (var6) {
                    _fun28785_ip = 80;
                    continue _fun28785
                }
            case 70:
                var6 = var4.user_id;
                var3 = var7[var6];
            case 80:
                var7 = var5 != var3;
                var6 = var4.user_id;
                var9 = _closure1_slot7;
                var3 = var9.getId;
                var3 = var3.bind(var9)();
                var6 = var6 === var3;
                var3 = !var7;
                if (var7) {
                    _fun28785_ip = 117;
                    continue _fun28785
                }
            case 114:
                var3 = var6;
            case 117:
                if (var3) {
                    _fun28785_ip = 348;
                    continue _fun28785
                }
            case 123:
                var6 = _closure1_slot17;
                var3 = var4.guild_scheduled_event_id;
                var7 = var6[var3];
                var3 = var5 == var7;
                var6 = var7;
                if (var3) {
                    _fun28785_ip = 158;
                    continue _fun28785
                }
            case 147:
                var7 = var7[var8];
                var3 = var5 == var7;
                var6 = var7;
            case 158:
                if (var3) {
                    _fun28785_ip = 171;
                    continue _fun28785
                }
            case 161:
                var3 = var4.user_id;
                var3 = delete var6[var3];
            case 171:
                var6 = _closure1_slot24;
                var3 = var4.guild_scheduled_event_exception_id;
                var7 = var6.bind(var0)(var3);
                var6 = _closure1_slot18;
                var3 = var4.guild_scheduled_event_id;
                var6 = var6[var3];
                var8 = var5 == var6;
                var3 = undefined;
                if (var8) {
                    _fun28785_ip = 213;
                    continue _fun28785
                }
            case 209:
                var3 = var6[var7];
            case 213:
                var6 = var5 != var3;
                var7 = 0;
                if (!var6) {
                    _fun28785_ip = 225;
                    continue _fun28785
                }
            case 222:
                var7 = var3;
            case 225:
                var3 = var4.guild_scheduled_event_exception_id;
                if (!(var5 != var3)) {
                    _fun28785_ip = 255;
                    continue _fun28785
                }
            case 235:
                var6 = var4.response;
                var3 = _closure1_slot11;
                var3 = var3.UNINTERESTED;
                if (!(var6 !== var3)) {
                    _fun28785_ip = 297;
                    continue _fun28785
                }
            case 255:
                var3 = var4.guild_scheduled_event_exception_id;
                var5 = var5 == var3;
                var8 = 1;
                var3 = var8;
                if (!var5) {
                    _fun28785_ip = 303;
                    continue _fun28785
                }
            case 274:
                var6 = var4.response;
                var5 = _closure1_slot11;
                var5 = var5.INTERESTED;
                var3 = var8;
                if (!(var6 === var5)) {
                    _fun28785_ip = 303;
                    continue _fun28785
                }
            case 297:
                var3 = -1;
            case 303:
                var6 = _closure1_slot27;
                var5 = var4.guild_scheduled_event_id;
                var4 = var4.guild_scheduled_event_exception_id;
                var3 = var7 + var3;
                var3 = var6.bind(var0)(var5, var4, var3);
                if (!var1) {
                    _fun28785_ip = 348;
                    continue _fun28785
                }
            case 333:
                var3 = _closure1_slot14;
                var1 = 1;
                var1 = var3 + var1;
                _closure1_slot14 = var1;
            case 348:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun28786: for (var _fun28786_ip = 0;;) switch (_fun28786_ip) {
            case 0:
                var2 = arg0;
                var4 = _closure1_slot24;
                var0 = undefined;
                var3 = arg1;
                var3 = var4.bind(var0)(var3);
                var4 = _closure1_slot18;
                var5 = var4[var2];
                var4 = null;
                if (!(var4 == var5)) {
                    _fun28786_ip = 44;
                    continue _fun28786
                }
            case 34:
                var5 = _closure1_slot18;
                var4 = {};
                var5[var2] = var4;
            case 44:
                var1 = _closure1_slot18;
                var2 = var1[var2];
                var1 = arg2;
                var2[var3] = var1;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0, arg1() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot13;
        var2 = var3.values;
        var5 = _closure1_slot12;
        var4 = var5.GUILD_EVENT;
        var1 = arg0;
        var1 = var4.bind(var5)(var1);
        var2 = var2.bind(var3)(var1);
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot23;
            var0 = arg0;
            var2 = var0.id;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot28 = var0;
    var13 = function arg0() {
        var0 = arg0;
        var2 = var0.guildScheduledEvent;
        var1 = _closure1_slot22;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        var0 = true;
        return var0;
    };
    var8 = function arg0() {
        _fun28790: for (var _fun28790_ip = 0;;) switch (_fun28790_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.eventException;
                var _closure2_slot0 = var4;
                var5 = _closure1_slot13;
                var3 = var5.get;
                var0 = var4.event_id;
                var0 = var3.bind(var5)(var0);
                var3 = null;
                if (!(var3 != var0)) {
                    _fun28790_ip = 143;
                    continue _fun28790
                }
            case 44:
                var5 = var0.guild_scheduled_event_exceptions;
                var3 = var5.findIndex;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.event_exception_id;
                    var0 = _closure2_slot0;
                    var0 = var0.event_exception_id;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var3.bind(var5)(var2);
                var8 = var0.guild_scheduled_event_exceptions;
                var3 = new Array(0);
                var5 = 0;
                var9 = var3;
                var7 = 0;
                var6 = arraySpread(var9, var8, var7);
                if (!(!(var2 < var5))) {
                    _fun28790_ip = 97;
                    continue _fun28790
                }
            case 91:
                var3[var2] = var4;
                _fun28790_ip = 107;
                continue _fun28790;
            case 97:
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
            case 107:
                var2 = _closure1_slot22;
                var1 = {};
                var9 = var1;
                var8 = var0;
                var0 = copyDataProperties(var9, var8);
                var0 = 'guild_scheduled_event_exceptions';
                var1[var0] = var3;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = true;
                return var0;
            case 143:
                var0 = false;
                return var0;
        }
    };
    var4 = function arg0() {
        _fun28792: for (var _fun28792_ip = 0;;) switch (_fun28792_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                var0 = var2 != var1;
                if (!var0) {
                    _fun28792_ip = 43;
                    continue _fun28792
                }
            case 12:
                var3 = var2 == var1;
                var2 = undefined;
                if (var3) {
                    _fun28792_ip = 26;
                    continue _fun28792
                }
            case 21:
                var2 = var1.status;
            case 26:
                var1 = _closure1_slot9;
                var1 = var1.ACTIVE;
                var0 = var2 === var1;
            case 43:
                return var0;
        }
    };
    var _closure1_slot29 = var4;
    var3 = function arg0() {
        var2 = _closure1_slot10;
        var1 = var2.has;
        var0 = arg0;
        var0 = var0.status;
        var0 = var1.bind(var2)(var0);
        var0 = !var0;
        return var0;
    };
    var _closure1_slot30 = var3;
    var0 = global;
    var12 = var0.Object;
    var7 = var12.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var12)(var2, var0, var6);
    var7 = 0;
    var6 = var10[var7];
    var0 = undefined;
    var6 = var11.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var10[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var10[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var10[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var10[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var10[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var10[var6];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 7;
    var6 = var10[var6];
    var6 = var9.bind(var0)(var6);
    var12 = var6.GuildScheduledEventStatus;
    var _closure1_slot9 = var12;
    var12 = var6.GuildScheduledEventStatusDone;
    var _closure1_slot10 = var12;
    var6 = var6.GuildScheduledEventUserResponses;
    var _closure1_slot11 = var6;
    var6 = {
        'EVENT': 'event',
        'EVENT_ACTIVE': 'active',
        'EVENT_UPCOMING': 'event-upcoming'
    };
    var12 = function arg0() {
        var0 = _closure1_slot12;
        var4 = var0.EVENT;
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = '';
        var1 = arg0;
        var0 = '-';
        var0 = var3.bind(var2)(var1, var0, var4);
        return var0;
    };
    var6.GUILD_EVENT = var12;
    var12 = function arg0() {
        var0 = _closure1_slot12;
        var4 = var0.EVENT_ACTIVE;
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = '';
        var1 = arg0;
        var0 = '-';
        var0 = var3.bind(var2)(var1, var0, var4);
        return var0;
    };
    var6.GUILD_EVENT_ACTIVE = var12;
    var12 = function arg0() {
        var0 = _closure1_slot12;
        var4 = var0.EVENT_UPCOMING;
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = '';
        var1 = arg0;
        var0 = '-';
        var0 = var3.bind(var2)(var1, var0, var4);
        return var0;
    };
    var6.GUILD_EVENT_UPCOMING = var12;
    var12 = function arg0() {
        var0 = _closure1_slot12;
        var4 = var0.EVENT;
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = '';
        var1 = arg0;
        var0 = '-';
        var0 = var3.bind(var2)(var1, var0, var4);
        return var0;
    };
    var6.CHANNEL_EVENT = var12;
    var12 = function arg0() {
        var0 = _closure1_slot12;
        var4 = var0.EVENT_ACTIVE;
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = '';
        var1 = arg0;
        var0 = '-';
        var0 = var3.bind(var2)(var1, var0, var4);
        return var0;
    };
    var6.CHANNEL_EVENT_ACTIVE = var12;
    var12 = function arg0() {
        var0 = _closure1_slot12;
        var4 = var0.EVENT_UPCOMING;
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = '';
        var1 = arg0;
        var0 = '-';
        var0 = var3.bind(var2)(var1, var0, var4);
        return var0;
    };
    var6.CHANNEL_EVENT_UPCOMING = var12;
    var _closure1_slot12 = var6;
    var12 = 8;
    var12 = var10[var12];
    var12 = var9.bind(var0)(var12);
    var15 = var12.SecondaryIndexMap;
    var12 = var15.prototype;
    var14 = Object.create(var12, {
        constructor: {
            value: var15
        }
    });
    var18 = function(arg0) { // Environment: var1
        _fun28800: for (var _fun28800_ip = 0;;) switch (_fun28800_ip) {
            case 0:
                var6 = arg0;
                var7 = var6.guild_id;
                var3 = var6.entity_id;
                var4 = var6.channel_id;
                var0 = new Array(1);
                var0[0] = var7;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun28800_ip = 43;
                    continue _fun28800
                }
            case 33:
                var1 = var0.push;
                var1 = var1.bind(var0)(var3);
            case 43:
                var5 = var0.push;
                var8 = _closure1_slot12;
                var3 = var8.GUILD_EVENT;
                var3 = var3.bind(var8)(var7);
                var3 = var5.bind(var0)(var3);
                if (!(var2 != var4)) {
                    _fun28800_ip = 100;
                    continue _fun28800
                }
            case 75:
                var5 = var0.push;
                var8 = _closure1_slot12;
                var3 = var8.CHANNEL_EVENT;
                var3 = var3.bind(var8)(var4);
                var3 = var5.bind(var0)(var3);
            case 100:
                var3 = _closure1_slot29;
                var5 = undefined;
                var3 = var3.bind(var5)(var6);
                if (!var3) {
                    _fun28800_ip = 188;
                    continue _fun28800
                }
            case 114:
                var8 = var0.push;
                var3 = _closure1_slot12;
                var3 = var3.EVENT_ACTIVE;
                var3 = var8.bind(var0)(var3);
                var8 = var0.push;
                var9 = _closure1_slot12;
                var3 = var9.GUILD_EVENT_ACTIVE;
                var3 = var3.bind(var9)(var7);
                var3 = var8.bind(var0)(var3);
                if (!(var2 != var4)) {
                    _fun28800_ip = 188;
                    continue _fun28800
                }
            case 163:
                var8 = var0.push;
                var9 = _closure1_slot12;
                var3 = var9.CHANNEL_EVENT_ACTIVE;
                var3 = var3.bind(var9)(var4);
                var3 = var8.bind(var0)(var3);
            case 188:
                var3 = _closure1_slot30;
                var3 = var3.bind(var5)(var6);
                if (!var3) {
                    _fun28800_ip = 274;
                    continue _fun28800
                }
            case 200:
                var5 = var0.push;
                var3 = _closure1_slot12;
                var3 = var3.EVENT_UPCOMING;
                var3 = var5.bind(var0)(var3);
                var5 = var0.push;
                var6 = _closure1_slot12;
                var3 = var6.GUILD_EVENT_UPCOMING;
                var3 = var3.bind(var6)(var7);
                var3 = var5.bind(var0)(var3);
                if (!(var2 != var4)) {
                    _fun28800_ip = 274;
                    continue _fun28800
                }
            case 249:
                var2 = var0.push;
                var3 = _closure1_slot12;
                var1 = var3.CHANNEL_EVENT_UPCOMING;
                var1 = var1.bind(var3)(var4);
                var1 = var2.bind(var0)(var1);
            case 274:
                return var0;
        }
    };
    var19 = var14;
    var17 = var5;
    var12 = new var19[var15](var18, var17, var16);
    var12 = var12 instanceof Object ? var12 : var14;
    var _closure1_slot13 = var12;
    var _closure1_slot14 = var7;
    var7 = new Array(0);
    var _closure1_slot15 = var7;
    var7 = 'SERIES';
    var _closure1_slot16 = var7;
    var7 = {};
    var _closure1_slot17 = var7;
    var7 = {};
    var _closure1_slot18 = var7;
    var7 = 11;
    var7 = var10[var7];
    var7 = var11.bind(var0)(var7);
    var12 = var7.Store;
    var7 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun28802: for (var _fun28802_ip = 0;;) switch (_fun28802_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun28802_ip = 69;
                        continue _fun28802
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun28802_ip = 105;
                    continue _fun28802;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot7;
            var0 = _closure1_slot8;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(13);
        var0[0] = var4;
        var4 = {};
        var6 = 'getGuildScheduledEvent';
        var4.key = var6;
        var6 = function arg0() {
            _fun28804: for (var _fun28804_ip = 0;;) switch (_fun28804_ip) {
                case 0:
                    var4 = arg0;
                    var1 = null;
                    var2 = var1 == var4;
                    var0 = null;
                    if (var2) {
                        _fun28804_ip = 46;
                        continue _fun28804
                    }
                case 14:
                    var3 = _closure1_slot13;
                    var2 = var3.get;
                    var2 = var2.bind(var3)(var4);
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun28804_ip = 43;
                        continue _fun28804
                    }
                case 40:
                    var1 = var2;
                case 43:
                    var0 = var1;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGuildEventCountByIndex';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot13;
            var1 = var2.size;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getGuildScheduledEventsForGuild';
        var4.key = var6;
        var6 = function arg0() {
            _fun28806: for (var _fun28806_ip = 0;;) switch (_fun28806_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun28806_ip = 28;
                        continue _fun28806
                    }
                case 9:
                    var1 = _closure1_slot13;
                    var0 = var1.values;
                    var0 = var0.bind(var1)(var2);
                    _fun28806_ip = 32;
                    continue _fun28806;
                case 28:
                    var0 = new Array(0);
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getGuildScheduledEventsByIndex';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot13;
            var1 = var2.values;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getRsvpVersion';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getRsvp';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun28809: for (var _fun28809_ip = 0;;) switch (_fun28809_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun28809_ip = 65;
                        continue _fun28809
                    }
                case 9:
                    var5 = _closure1_slot24;
                    var4 = undefined;
                    var3 = arg1;
                    var3 = var5.bind(var4)(var3);
                    var1 = _closure1_slot17;
                    var2 = var1[var2];
                    var5 = var0 == var2;
                    var1 = undefined;
                    if (var5) {
                        _fun28809_ip = 63;
                        continue _fun28809
                    }
                case 43:
                    var3 = var2[var3];
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun28809_ip = 63;
                        continue _fun28809
                    }
                case 56:
                    var2 = arg2;
                    var1 = var3[var2];
                case 63:
                    return var1;
                case 65:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isInterestedInEventRecurrence';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun28810: for (var _fun28810_ip = 0;;) switch (_fun28810_ip) {
                case 0:
                    var7 = arg0;
                    var6 = this;
                    var1 = _closure1_slot7;
                    var0 = var1.getId;
                    var4 = var0.bind(var1)();
                    var0 = var6.getRsvp;
                    var5 = null;
                    var0 = var0.bind(var6)(var7, var5, var4);
                    var3 = var6.getRsvp;
                    var1 = arg1;
                    var4 = var3.bind(var6)(var7, var1, var4);
                    var6 = var5 == var0;
                    var1 = undefined;
                    if (var6) {
                        _fun28810_ip = 69;
                        continue _fun28810
                    }
                case 63:
                    var1 = var0.response;
                case 69:
                    var0 = _closure1_slot11;
                    var0 = var0.INTERESTED;
                    var0 = var1 === var0;
                    var1 = var5 == var4;
                    var6 = undefined;
                    if (var1) {
                        _fun28810_ip = 98;
                        continue _fun28810
                    }
                case 92:
                    var6 = var4.response;
                case 98:
                    var1 = _closure1_slot11;
                    var1 = var1.INTERESTED;
                    var1 = var6 === var1;
                    var5 = var5 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun28810_ip = 127;
                        continue _fun28810
                    }
                case 121:
                    var3 = var4.response;
                case 127:
                    var2 = _closure1_slot11;
                    var2 = var2.UNINTERESTED;
                    if (!var0) {
                        _fun28810_ip = 147;
                        continue _fun28810
                    }
                case 140:
                    var2 = var3 === var2;
                    var0 = !var2;
                case 147:
                    if (var0) {
                        _fun28810_ip = 153;
                        continue _fun28810
                    }
                case 150:
                    var0 = var1;
                case 153:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getUserCount';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun28811: for (var _fun28811_ip = 0;;) switch (_fun28811_ip) {
                case 0:
                    var7 = arg0;
                    var6 = arg1;
                    var4 = null;
                    if (!(var4 != var7)) {
                        _fun28811_ip = 98;
                        continue _fun28811
                    }
                case 12:
                    var0 = _closure1_slot18;
                    var2 = var0[var7];
                    var1 = var4 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun28811_ip = 40;
                        continue _fun28811
                    }
                case 32:
                    var1 = _closure1_slot16;
                    var0 = var2[var1];
                case 40:
                    var8 = var4 != var0;
                    var1 = 0;
                    if (!var8) {
                        _fun28811_ip = 52;
                        continue _fun28811
                    }
                case 49:
                    var1 = var0;
                case 52:
                    var0 = var1;
                    if (!(var4 != var6)) {
                        _fun28811_ip = 96;
                        continue _fun28811
                    }
                case 59:
                    var5 = _closure1_slot18;
                    var5 = var5[var7];
                    var7 = var4 == var5;
                    var3 = undefined;
                    if (var7) {
                        _fun28811_ip = 80;
                        continue _fun28811
                    }
                case 76:
                    var3 = var5[var6];
                case 80:
                    var4 = var4 != var3;
                    var2 = 0;
                    if (!var4) {
                        _fun28811_ip = 92;
                        continue _fun28811
                    }
                case 89:
                    var2 = var3;
                case 92:
                    var0 = var1 - var2;
                case 96:
                    return var0;
                case 98:
                    var0 = 0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'hasUserCount';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun28812: for (var _fun28812_ip = 0;;) switch (_fun28812_ip) {
                case 0:
                    var3 = _closure1_slot24;
                    var0 = undefined;
                    var2 = arg1;
                    var3 = var3.bind(var0)(var2);
                    var2 = _closure1_slot18;
                    var1 = arg0;
                    var2 = var2[var1];
                    var1 = null;
                    var4 = var1 == var2;
                    if (var4) {
                        _fun28812_ip = 41;
                        continue _fun28812
                    }
                case 37:
                    var0 = var2[var3];
                case 41:
                    var0 = var1 != var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'isActive';
        var4.key = var6;
        var6 = function arg0() {
            _fun28813: for (var _fun28813_ip = 0;;) switch (_fun28813_ip) {
                case 0:
                    var4 = arg0;
                    var0 = null;
                    var0 = var0 != var4;
                    if (!var0) {
                        _fun28813_ip = 40;
                        continue _fun28813
                    }
                case 12:
                    var3 = _closure1_slot29;
                    var2 = _closure1_slot13;
                    var1 = var2.get;
                    var2 = var1.bind(var2)(var4);
                    var1 = undefined;
                    var0 = var3.bind(var1)(var2);
                case 40:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getActiveEventByChannel';
        var4.key = var6;
        var6 = function arg0() {
            _fun28814: for (var _fun28814_ip = 0;;) switch (_fun28814_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var0 = null;
                    if (!(var0 == var4)) {
                        _fun28814_ip = 16;
                        continue _fun28814
                    }
                case 12:
                    var0 = undefined;
                    return var0;
                case 16:
                    var1 = var2.getGuildScheduledEventsByIndex;
                    var3 = _closure1_slot12;
                    var0 = var3.CHANNEL_EVENT_ACTIVE;
                    var0 = var0.bind(var3)(var4);
                    var1 = var1.bind(var2)(var0);
                    var0 = 0;
                    var0 = var1[var0];
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getUsersForGuildEvent';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun28815: for (var _fun28815_ip = 0;;) switch (_fun28815_ip) {
                case 0:
                    var4 = arg0;
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun28815_ip = 53;
                        continue _fun28815
                    }
                case 9:
                    var5 = _closure1_slot24;
                    var0 = undefined;
                    var3 = arg1;
                    var3 = var5.bind(var0)(var3);
                    var2 = _closure1_slot17;
                    var2 = var2[var4];
                    var4 = var1 == var2;
                    if (var4) {
                        _fun28815_ip = 45;
                        continue _fun28815
                    }
                case 41:
                    var0 = var2[var3];
                case 45:
                    if (!(var1 == var0)) {
                        _fun28815_ip = 51;
                        continue _fun28815
                    }
                case 49:
                    var0 = {};
                case 51:
                    return var0;
                case 53:
                    var0 = {};
                    return var0;
            }
        };
        var4.value = var5;
        var0[12] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var12 = var7.bind(var0)(var12);
    var7 = 'GuildScheduledEventStore';
    var12.displayName = var7;
    var7 = 12;
    var7 = var10[var7];
    var18 = var11.bind(var0)(var7);
    var7 = {};
    var14 = function arg0() {
        var0 = arg0;
        var2 = var0.guilds;
        var3 = _closure1_slot13;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = 0;
        _closure1_slot14 = var1;
        var1 = {};
        _closure1_slot17 = var1;
        var1 = {};
        _closure1_slot18 = var1;
        var3 = _closure1_slot15;
        var1 = var3.forEach;
        var0 = _closure1_slot22;
        var0 = var1.bind(var3)(var0);
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.guild_scheduled_events;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot22;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = true;
        return var0;
    };
    var7.CONNECTION_OPEN = var14;
    var14 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var4 = _closure1_slot28;
        var3 = var0.id;
        var2 = undefined;
        var1 = false;
        var1 = var4.bind(var2)(var3, var1);
        var2 = var0.guild_scheduled_events;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot22;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = true;
        return var0;
    };
    var7.GUILD_CREATE = var14;
    var14 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var3 = _closure1_slot28;
        var2 = var0.id;
        var1 = undefined;
        var0 = true;
        var1 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var7.GUILD_DELETE = var14;
    var14 = function arg0() {
        var0 = arg0;
        var2 = var0.guildScheduledEvent;
        var1 = _closure1_slot22;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var7.FETCH_GUILD_EVENT = var14;
    var14 = function arg0() {
        _fun28823: for (var _fun28823_ip = 0;;) switch (_fun28823_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guildId;
                var2 = var0.guildScheduledEvents;
                var6 = _closure1_slot13;
                var4 = var6.values;
                var3 = _closure1_slot12;
                var0 = var3.GUILD_EVENT;
                var3 = var0.bind(var3)(var7);
                var0 = true;
                var6 = var4.bind(var6)(var3, var0);
                var4 = var6.map;
                var3 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var8 = var4.bind(var6)(var3);
                var4 = var2.map;
                var3 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var7 = var4.bind(var2)(var3);
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 9;
                var3 = var4[var3];
                var4 = undefined;
                var6 = var6.bind(var4)(var3);
                var3 = var6.difference;
                var6 = var3.bind(var6)(var8, var7);
                var3 = var6.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot23;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var3.bind(var6)(var1);
                var1 = _closure1_slot20;
                var3 = var1.bind(var4)(var2);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if (var1) {
                    _fun28823_ip = 180;
                    continue _fun28823
                }
            case 151:
                var6 = _closure1_slot22;
                var1 = var2.value;
                var1 = var6.bind(var4)(var1);
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun28823_ip = 151;
                    continue _fun28823
                }
            case 180:
                return var0;
        }
    };
    var7.FETCH_GUILD_EVENTS_FOR_GUILD = var14;
    var7.GUILD_SCHEDULED_EVENT_CREATE = var13;
    var7.GUILD_SCHEDULED_EVENT_UPDATE = var13;
    var13 = function arg0() {
        var0 = arg0;
        var0 = var0.guildScheduledEvent;
        var2 = _closure1_slot23;
        var1 = var0.id;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = true;
        return var0;
    };
    var7.GUILD_SCHEDULED_EVENT_DELETE = var13;
    var13 = function arg0() {
        _fun28828: for (var _fun28828_ip = 0;;) switch (_fun28828_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.userId;
                var7 = var0.guildEventId;
                var9 = var0.guildId;
                var4 = var0.guildEventExceptionId;
                var3 = var0.response;
                var1 = _closure1_slot24;
                var2 = undefined;
                var6 = var1.bind(var2)(var4);
                var1 = _closure1_slot17;
                var1 = var1[var7];
                var5 = null;
                var11 = var5 == var1;
                var10 = undefined;
                if (var11) {
                    _fun28828_ip = 81;
                    continue _fun28828
                }
            case 64:
                var1 = var1[var6];
                var6 = var5 == var1;
                var10 = undefined;
                if (var6) {
                    _fun28828_ip = 81;
                    continue _fun28828
                }
            case 77:
                var10 = var1[var8];
            case 81:
                if (!(var5 != var10)) {
                    _fun28828_ip = 97;
                    continue _fun28828
                }
            case 85:
                var6 = _closure1_slot26;
                var1 = false;
                var1 = var6.bind(var2)(var10, var1);
            case 97:
                var6 = _closure1_slot8;
                var1 = var6.getMember;
                var6 = var1.bind(var6)(var9, var8);
                var1 = _closure1_slot25;
                var0 = {};
                var0.user_id = var8;
                var0.guild_scheduled_event_id = var7;
                var7 = var5 != var6;
                var5 = undefined;
                if (!var7) {
                    _fun28828_ip = 141;
                    continue _fun28828
                }
            case 138:
                var5 = var6;
            case 141:
                var0.member = var5;
                var0.guild_scheduled_event_exception_id = var4;
                var0.response = var3;
                var0 = var1.bind(var2)(var0);
                var0 = true;
                return var0;
        }
    };
    var7.GUILD_SCHEDULED_EVENT_USER_ADD = var13;
    var13 = function arg0() {
        var0 = arg0;
        var5 = var0.userId;
        var4 = var0.guildEventId;
        var3 = var0.guildEventExceptionId;
        var0 = var0.response;
        var2 = _closure1_slot26;
        var1 = {};
        var1.user_id = var5;
        var1.guild_scheduled_event_id = var4;
        var1.guild_scheduled_event_exception_id = var3;
        var1.response = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var7.GUILD_SCHEDULED_EVENT_USER_REMOVE = var13;
    var13 = function arg0() {
        var0 = arg0;
        var2 = var0.guildScheduledEventUsers;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot25;
            var0 = undefined;
            var2 = arg0;
            var1 = false;
            var1 = var3.bind(var0)(var2, var1, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var2 = _closure1_slot14;
        var0 = 1;
        var0 = var2 + var0;
        _closure1_slot14 = var0;
        var0 = true;
        return var0;
    };
    var7.GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS = var13;
    var13 = function arg0() {
        var0 = arg0;
        var2 = var0.guildScheduledEventUsers;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot25;
            var0 = undefined;
            var2 = arg0;
            var1 = false;
            var1 = var3.bind(var0)(var2, var1, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var2 = _closure1_slot14;
        var0 = 1;
        var0 = var2 + var0;
        _closure1_slot14 = var0;
        var0 = true;
        return var0;
    };
    var7.GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS = var13;
    var13 = function arg0() {
        var0 = arg0;
        var7 = var0.eventId;
        var _closure2_slot0 = var7;
        var2 = var0.counts;
        var _closure2_slot1 = var2;
        var6 = _closure1_slot27;
        var5 = var2.eventCount;
        var0 = undefined;
        var4 = null;
        var4 = var6.bind(var0)(var7, var4, var5);
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var3 = 10;
        var3 = var5[var3];
        var4 = var4.bind(var0)(var3);
        var3 = var4.forEachKey;
        var2 = var2.recurrenceCounts;
        var1 = function(arg0) { // Environment: var1
            var4 = arg0;
            var3 = _closure1_slot27;
            var2 = _closure2_slot0;
            var0 = _closure2_slot1;
            var1 = var0.eventCount;
            var0 = var0.recurrenceCounts;
            var0 = var0[var4];
            var1 = var1 - var0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var4, var1);
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var7.GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS = var13;
    var13 = function arg0() {
        _fun28836: for (var _fun28836_ip = 0;;) switch (_fun28836_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.invite;
                var3 = var0.guild_scheduled_event;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun28836_ip = 40;
                    continue _fun28836
                }
            case 24:
                var2 = _closure1_slot22;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                var0 = true;
            case 40:
                return var0;
        }
    };
    var7.INVITE_RESOLVE_SUCCESS = var13;
    var7.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE = var8;
    var7.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE = var8;
    var8 = function arg0() {
        _fun28837: for (var _fun28837_ip = 0;;) switch (_fun28837_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.eventException;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot13;
                var3 = var4.get;
                var0 = var0.event_id;
                var0 = var3.bind(var4)(var0);
                var3 = null;
                if (!(var3 != var0)) {
                    _fun28837_ip = 101;
                    continue _fun28837
                }
            case 44:
                var4 = var0.guild_scheduled_event_exceptions;
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.event_exception_id;
                    var0 = _closure2_slot0;
                    var0 = var0.event_exception_id;
                    var0 = var1 !== var0;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = _closure1_slot22;
                var1 = {};
                var6 = var1;
                var5 = var0;
                var0 = copyDataProperties(var6, var5);
                var0 = 'guild_scheduled_event_exceptions';
                var1[var0] = var3;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = true;
                return var0;
            case 101:
                var0 = false;
                return var0;
        }
    };
    var7.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE = var8;
    var8 = function arg0() {
        _fun28839: for (var _fun28839_ip = 0;;) switch (_fun28839_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.eventId;
                var1 = _closure1_slot13;
                var0 = var1.get;
                var1 = var0.bind(var1)(var3);
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun28839_ip = 73;
                    continue _fun28839
                }
            case 35:
                var3 = _closure1_slot22;
                var2 = {};
                var6 = var2;
                var5 = var1;
                var1 = copyDataProperties(var6, var5);
                var4 = new Array(0);
                var1 = 'guild_scheduled_event_exceptions';
                var2[var1] = var4;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var0 = true;
            case 73:
                return var0;
        }
    };
    var7.GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE = var8;
    var8 = function() {
        var1 = _closure1_slot13;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = true;
        return var0;
    };
    var7.LOGOUT = var8;
    var8 = var12.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var12
        }
    });
    var19 = var8;
    var17 = var7;
    var7 = new var19[var12](var18, var17, var16);
    var7 = var7 instanceof Object ? var7 : var8;
    var8 = 13;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/guild_scheduled_events/GuildScheduledEventStore.tsx';
    var8 = var9.bind(var10)(var8);
    var2.default = var7;
    var2.StaticGuildEventIndexes = var6;
    var2.scheduledEventSort = var5;
    var2.isGuildScheduledEventActive = var4;
    var2.isEventUpcoming = var3;
    var3 = function arg0, arg1() {
        var0 = global;
        var3 = var0.Date;
        var1 = arg0;
        var4 = var1.scheduled_start_time;
        var2 = var3.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var3
            }
        });
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = var2.getTime;
        var1 = var1.bind(var2)();
        var2 = var0.Date;
        var0 = var2.now;
        var2 = var0.bind(var2)();
        var3 = 1000;
        var0 = arg1;
        var0 = var3 * var0;
        var0 = var2 + var0;
        var0 = var1 < var0;
        return var0;
    };
    var2.eventScheduledToStartWithin = var3;
    var1 = function arg0() {
        _fun28842: for (var _fun28842_ip = 0;;) switch (_fun28842_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun28842_ip = 34;
                    continue _fun28842
                }
            case 12:
                var3 = _closure1_slot10;
                var2 = var3.has;
                var1 = var1.status;
                var0 = var2.bind(var3)(var1);
            case 34:
                return var0;
        }
    };
    var2.isGuildEventEnded = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 1681, 1378, 3089, 22, 21, 566, 806, 2]);