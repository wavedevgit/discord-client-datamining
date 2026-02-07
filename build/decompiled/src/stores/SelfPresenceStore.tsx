// stores/SelfPresenceStore.tsx
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
        _fun50854: for (var _fun50854_ip = 0;;) switch (_fun50854_ip) {
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
                _fun50854_ip = 74;
                continue _fun50854;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot32 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function arg0, arg1() {
        _fun50857: for (var _fun50857_ip = 0;;) switch (_fun50857_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun50857_ip = 46;
                    continue _fun50857
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun50857_ip = 55;
                    continue _fun50857
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun50857_ip = 343;
                    continue _fun50857
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun50857_ip = 323;
                    continue _fun50857
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun50857_ip = 283;
                    continue _fun50857
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun50857_ip = 270;
                    continue _fun50857
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
                    _fun50857_ip = 163;
                    continue _fun50857
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun50857_ip = 179;
                    continue _fun50857
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun50857_ip = 249;
                    continue _fun50857
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun50857_ip = 249;
                    continue _fun50857
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun50857_ip = 234;
                    continue _fun50857
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun50857_ip = 247;
                    continue _fun50857
                }
            case 234:
                var8 = _closure1_slot34;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun50857_ip = 265;
                continue _fun50857;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun50857_ip = 283;
                continue _fun50857;
            case 270:
                var6 = _closure1_slot34;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun50857_ip = 323;
                    continue _fun50857
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
                    _fun50857_ip = 330;
                    continue _fun50857
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun50858: for (var _fun50858_ip = 0;;) switch (_fun50858_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun50858_ip = 56;
                                continue _fun50858
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
                            _fun50858_ip = 67;
                            continue _fun50858;
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
    var _closure1_slot33 = var0;
    var0 = function arg0, arg1() {
        _fun50859: for (var _fun50859_ip = 0;;) switch (_fun50859_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun50859_ip = 23;
                    continue _fun50859
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun50859_ip = 33;
                    continue _fun50859
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
                    _fun50859_ip = 70;
                    continue _fun50859
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun50859_ip = 55;
                    continue _fun50859
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        _fun50860: for (var _fun50860_ip = 0;;) switch (_fun50860_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.length;
                var6 = 0;
                if (!(var6 !== var1)) {
                    _fun50860_ip = 212;
                    continue _fun50860
                }
            case 17:
                var2 = new Array(0);
                var3 = new Array(0);
                var4 = _closure1_slot33;
                var8 = undefined;
                var7 = var4.bind(var8)(var0);
                var5 = var7.bind(var8)();
                var4 = var5.done;
                if (var4) {
                    _fun50860_ip = 112;
                    continue _fun50860
                }
            case 51:
                var9 = var5.value;
                var10 = var9.type;
                var4 = _closure1_slot19;
                var4 = var4.PLAYING;
                if (!(var10 !== var4)) {
                    _fun50860_ip = 87;
                    continue _fun50860
                }
            case 75:
                var4 = var2.push;
                var4 = var4.bind(var2)(var9);
                _fun50860_ip = 97;
                continue _fun50860;
            case 87:
                var4 = var3.push;
                var4 = var4.bind(var3)(var9);
            case 97:
                var9 = var7.bind(var8)();
                var4 = var9.done;
                var5 = var9;
                if (!var4) {
                    _fun50860_ip = 51;
                    continue _fun50860
                }
            case 112:
                var4 = var3.length;
                if (!(var6 !== var4)) {
                    _fun50860_ip = 210;
                    continue _fun50860
                }
            case 121:
                var5 = var3.length;
                var4 = 1;
                if (!(var4 !== var5)) {
                    _fun50860_ip = 208;
                    continue _fun50860
                }
            case 133:
                var7 = new Array(0);
                var13 = var7;
                var12 = var3;
                var11 = 0;
                var3 = arraySpread(var13, var12, var11);
                var5 = var7.sort;
                var3 = _closure1_slot15;
                var3 = var5.bind(var7)(var3);
                var5 = var3[var6];
                var3 = new Array(1);
                var13 = var3;
                var12 = var2;
                var2 = arraySpread(var13, var12, var11);
                var3[var2] = var5;
                var2 = var2 + var4;
                var2 = var3.sort;
                var1 = _closure1_slot15;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 208:
                return var0;
            case 210:
                return var0;
            case 212:
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 14;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.shouldShareApplicationActivity;
        var1 = _closure1_slot12;
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        _fun50862: for (var _fun50862_ip = 0;;) switch (_fun50862_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 16;
                var0 = var4[var0];
                var4 = undefined;
                var7 = var3.bind(var4)(var0);
                var6 = var7.hasFlag;
                var0 = var2.flags;
                var3 = null;
                var8 = var3 != var0;
                var5 = 0;
                if (!var8) {
                    _fun50862_ip = 53;
                    continue _fun50862
                }
            case 50:
                var5 = var0;
            case 53:
                var0 = _closure1_slot18;
                var0 = var0.CONTEXTLESS;
                var0 = var6.bind(var7)(var5, var0);
                if (var0) {
                    _fun50862_ip = 344;
                    continue _fun50862
                }
            case 75:
                var5 = var2.type;
                var0 = _closure1_slot19;
                var0 = var0.LISTENING;
                if (!(var0 !== var5)) {
                    _fun50862_ip = 270;
                    continue _fun50862
                }
            case 97:
                var0 = _closure1_slot19;
                var0 = var0.PLAYING;
                if (!(var0 !== var5)) {
                    _fun50862_ip = 165;
                    continue _fun50862
                }
            case 111:
                var0 = _closure1_slot19;
                var0 = var0.STREAMING;
                if (!(var0 !== var5)) {
                    _fun50862_ip = 135;
                    continue _fun50862
                }
            case 125:
                var0 = _closure1_slot19;
                var0 = var0.WATCHING;
            case 135:
                var0 = var2.application_id;
                var0 = var3 == var0;
                if (var0) {
                    _fun50862_ip = 163;
                    continue _fun50862
                }
            case 148:
                var6 = _closure1_slot36;
                var5 = var2.application_id;
                var0 = var6.bind(var4)(var5);
            case 163:
                return var0;
            case 165:
                var0 = var2.application_id;
                if (!(var3 == var0)) {
                    _fun50862_ip = 253;
                    continue _fun50862
                }
            case 175:
                var6 = var2.name;
                var5 = _closure1_slot10;
                var0 = var5.getGameByName;
                var5 = var0.bind(var5)(var6);
                if (!(var3 == var5)) {
                    _fun50862_ip = 237;
                    continue _fun50862
                }
            case 199:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 15;
                var0 = var7[var0];
                var0 = var6.bind(var4)(var0);
                var6 = var0.ShowCurrentGame;
                var0 = var6.getSetting;
                var0 = var0.bind(var6)();
                _fun50862_ip = 251;
                continue _fun50862;
            case 237:
                var6 = _closure1_slot36;
                var5 = var5.id;
                var0 = var6.bind(var4)(var5);
            case 251:
                _fun50862_ip = 268;
                continue _fun50862;
            case 253:
                var6 = _closure1_slot36;
                var5 = var2.application_id;
                var0 = var6.bind(var4)(var5);
            case 268:
                return var0;
            case 270:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 17;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.bind(var4)(var2);
                if (var0) {
                    _fun50862_ip = 328;
                    continue _fun50862
                }
            case 298:
                var0 = var2.application_id;
                var0 = var3 != var0;
                if (!var0) {
                    _fun50862_ip = 326;
                    continue _fun50862
                }
            case 311:
                var3 = _closure1_slot36;
                var2 = var2.application_id;
                var0 = var3.bind(var4)(var2);
            case 326:
                _fun50862_ip = 342;
                continue _fun50862;
            case 328:
                var2 = _closure1_slot8;
                var1 = var2.shouldShowActivity;
                var0 = var1.bind(var2)();
            case 342:
                return var0;
            case 344:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var8 = function() {
        _fun50863: for (var _fun50863_ip = 0;;) switch (_fun50863_ip) {
            case 0:
                var3 = _closure1_slot11;
                var0 = var3.getIdleSince;
                var3 = var0.bind(var3)();
                var0 = null;
                var4 = var0 != var3;
                var5 = 0;
                var0 = 0;
                if (!var4) {
                    _fun50863_ip = 35;
                    continue _fun50863
                }
            case 32:
                var0 = var3;
            case 35:
                _closure1_slot23 = var0;
                var3 = _closure1_slot11;
                var0 = var3.isAFK;
                var0 = var0.bind(var3)();
                _closure1_slot26 = var0;
                var0 = _closure1_slot27;
                if (var0) {
                    _fun50863_ip = 155;
                    continue _fun50863
                }
            case 64:
                var0 = _closure1_slot20;
                if (var0) {
                    _fun50863_ip = 139;
                    continue _fun50863
                }
            case 71:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 15;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var3 = var0.StatusSetting;
                var0 = var3.getSetting;
                var0 = var0.bind(var3)();
                var3 = _closure1_slot17;
                var3 = var3.UNKNOWN;
                if (!(var0 === var3)) {
                    _fun50863_ip = 133;
                    continue _fun50863
                }
            case 123:
                var3 = _closure1_slot17;
                var0 = var3.ONLINE;
            case 133:
                _closure1_slot21 = var0;
                _fun50863_ip = 163;
                continue _fun50863;
            case 139:
                var0 = _closure1_slot17;
                var0 = var0.INVISIBLE;
                _closure1_slot21 = var0;
                _fun50863_ip = 163;
                continue _fun50863;
            case 155:
                var0 = _closure1_slot22;
                _closure1_slot21 = var0;
            case 163:
                var3 = _closure1_slot21;
                var0 = _closure1_slot17;
                var0 = var0.ONLINE;
                var0 = var3 === var0;
                if (!var0) {
                    _fun50863_ip = 192;
                    continue _fun50863
                }
            case 184:
                var3 = _closure1_slot23;
                var0 = var3 > var5;
            case 192:
                if (!var0) {
                    _fun50863_ip = 209;
                    continue _fun50863
                }
            case 195:
                var0 = _closure1_slot17;
                var0 = var0.IDLE;
                _closure1_slot21 = var0;
            case 209:
                var0 = _closure1_slot27;
                if (var0) {
                    _fun50863_ip = 264;
                    continue _fun50863
                }
            case 216:
                var3 = _closure1_slot21;
                var0 = _closure1_slot17;
                var0 = var0.INVISIBLE;
                if (!(var3 !== var0)) {
                    _fun50863_ip = 264;
                    continue _fun50863
                }
            case 234:
                var3 = _closure1_slot13;
                var0 = var3.getActivities;
                var4 = var0.bind(var3)();
                var3 = var4.filter;
                var0 = _closure1_slot37;
                var6 = var3.bind(var4)(var0);
                _fun50863_ip = 268;
                continue _fun50863;
            case 264:
                var6 = new Array(0);
            case 268:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 18;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = _closure1_slot24;
                var4 = var4.bind(var0)(var3, var6);
                var3 = false;
                if (var4) {
                    _fun50863_ip = 324;
                    continue _fun50863
                }
            case 305:
                _closure1_slot24 = var6;
                var4 = _closure1_slot35;
                var4 = var4.bind(var0)(var6);
                _closure1_slot25 = var4;
                var3 = true;
            case 324:
                var6 = _closure1_slot16;
                var4 = var6.getRemoteActivities;
                var4 = var4.bind(var6)();
                var6 = _closure1_slot28;
                if (!(var6 !== var4)) {
                    _fun50863_ip = 352;
                    continue _fun50863
                }
            case 346:
                _closure1_slot28 = var4;
                var3 = true;
            case 352:
                var6 = _closure1_slot16;
                var4 = var6.getHiddenActivities;
                var4 = var4.bind(var6)();
                var6 = _closure1_slot29;
                if (!(var6 !== var4)) {
                    _fun50863_ip = 378;
                    continue _fun50863
                }
            case 374:
                _closure1_slot29 = var4;
            case 378:
                if (!var3) {
                    _fun50863_ip = 509;
                    continue _fun50863
                }
            case 384:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 19;
                var3 = var6[var3];
                var4 = var4.bind(var0)(var3);
                var10 = _closure1_slot24;
                var6 = new Array(0);
                var11 = var6;
                var9 = 0;
                var9 = arraySpread(var11, var10, var9);
                var8 = _closure1_slot28;
                var7 = var8.filter;
                var3 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot19;
                    var0 = var0.CUSTOM_STATUS;
                    var0 = var1 !== var0;
                    return var0;
                };
                var10 = var7.bind(var8)(var3);
                var11 = var6;
                var3 = arraySpread(var11, var10, var9);
                var5 = var6.sort;
                var3 = _closure1_slot15;
                var3 = var5.bind(var6)(var3);
                var4 = var4.bind(var0)(var3);
                var3 = var4.uniqBy;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var10 = var0.type;
                    var8 = var0.application_id;
                    var6 = var0.name;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var11 = '';
                    var0 = ':';
                    var9 = var0;
                    var7 = var0;
                    var0 = var11[var2](var10, var9, var8, var7, var6, var5);
                    return var0;
                };
                var3 = var3.bind(var4)(var1);
                var1 = var3.value;
                var3 = var1.bind(var3)();
                _closure1_slot30 = var3;
                var1 = _closure1_slot35;
                var1 = var1.bind(var0)(var3);
                _closure1_slot31 = var1;
            case 509:
                return var0;
        }
    };
    var _closure1_slot38 = var8;
    var9 = function() {
        var0 = false;
        _closure1_slot27 = var0;
        var0 = _closure1_slot17;
        var0 = var0.UNKNOWN;
        _closure1_slot22 = var0;
        var2 = _closure1_slot38;
        var0 = undefined;
        var2 = var2.bind(var0)();
        var4 = _closure1_slot14;
        var3 = var4.setCurrentUserOnConnectionOpen;
        var2 = _closure1_slot21;
        var1 = _closure1_slot30;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot39 = var9;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var10 = {};
    var7 = true;
    var10.value = var7;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var10);
    var11 = 0;
    var10 = var5[var11];
    var0 = undefined;
    var10 = var6.bind(var0)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot4 = var10;
    var10 = 2;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot5 = var10;
    var10 = 3;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot6 = var10;
    var10 = 4;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot7 = var10;
    var10 = 5;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot8 = var10;
    var10 = 6;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot9 = var10;
    var10 = 7;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot10 = var10;
    var10 = 8;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot11 = var10;
    var10 = 9;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot12 = var10;
    var10 = 10;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot13 = var10;
    var10 = 11;
    var12 = var5[var10];
    var12 = var6.bind(var0)(var12);
    var _closure1_slot14 = var12;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.sortActivity;
    var _closure1_slot15 = var10;
    var10 = 12;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot16 = var10;
    var10 = 13;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var12 = var10.StatusTypes;
    var _closure1_slot17 = var12;
    var13 = var10.ActivityFlags;
    var _closure1_slot18 = var13;
    var10 = var10.ActivityTypes;
    var _closure1_slot19 = var10;
    var10 = false;
    var _closure1_slot20 = var10;
    var13 = var12.ONLINE;
    var _closure1_slot21 = var13;
    var12 = var12.UNKNOWN;
    var _closure1_slot22 = var12;
    var _closure1_slot23 = var11;
    var11 = new Array(0);
    var _closure1_slot24 = var11;
    var11 = new Array(0);
    var _closure1_slot25 = var11;
    var _closure1_slot26 = var10;
    var _closure1_slot27 = var7;
    var11 = var1.Object;
    var10 = var11.freeze;
    var7 = new Array(0);
    var7 = var10.bind(var11)(var7);
    var _closure1_slot28 = var7;
    var10 = var1.Object;
    var7 = var10.freeze;
    var1 = new Array(0);
    var1 = var7.bind(var10)(var1);
    var _closure1_slot29 = var1;
    var1 = new Array(0);
    var _closure1_slot30 = var1;
    var1 = new Array(0);
    var _closure1_slot31 = var1;
    var1 = 20;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun50868: for (var _fun50868_ip = 0;;) switch (_fun50868_ip) {
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
                    var0 = _closure1_slot32;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun50868_ip = 69;
                        continue _fun50868
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun50868_ip = 105;
                    continue _fun50868;
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
            var3 = this;
            var10 = var3.waitFor;
            var18 = _closure1_slot10;
            var17 = _closure1_slot11;
            var16 = _closure1_slot12;
            var15 = _closure1_slot13;
            var14 = _closure1_slot14;
            var13 = _closure1_slot16;
            var12 = _closure1_slot8;
            var11 = _closure1_slot9;
            var19 = var3;
            var1 = var19[var10](var18, var17, var16, var15, var14, var13, var12, var11, var10);
            var2 = var3.syncWith;
            var4 = _closure1_slot13;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot38;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'getLocalPresence';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var2 = _closure1_slot21;
            var0.status = var2;
            var2 = _closure1_slot23;
            var0.since = var2;
            var2 = _closure1_slot25;
            var0.activities = var2;
            var1 = _closure1_slot26;
            var0.afk = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getStatus';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot21;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getActivities';
        var4.key = var6;
        var6 = function() {
            _fun50872: for (var _fun50872_ip = 0;;) switch (_fun50872_ip) {
                case 0:
                    var0 = arguments[0];
                    var1 = undefined;
                    if (!(var0 === var1)) {
                        _fun50872_ip = 11;
                        continue _fun50872
                    }
                case 9:
                    var0 = true;
                case 11:
                    if (var0) {
                        _fun50872_ip = 23;
                        continue _fun50872
                    }
                case 17:
                    var0 = _closure1_slot25;
                    _fun50872_ip = 27;
                    continue _fun50872;
                case 23:
                    var0 = _closure1_slot31;
                case 27:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getUnfilteredActivities';
        var4.key = var6;
        var6 = function() {
            _fun50873: for (var _fun50873_ip = 0;;) switch (_fun50873_ip) {
                case 0:
                    var0 = arguments[0];
                    var1 = undefined;
                    if (!(var0 === var1)) {
                        _fun50873_ip = 11;
                        continue _fun50873
                    }
                case 9:
                    var0 = true;
                case 11:
                    if (var0) {
                        _fun50873_ip = 23;
                        continue _fun50873
                    }
                case 17:
                    var0 = _closure1_slot24;
                    _fun50873_ip = 27;
                    continue _fun50873;
                case 23:
                    var0 = _closure1_slot30;
                case 27:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getHiddenActivities';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot29;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getPrimaryActivity';
        var4.key = var6;
        var6 = function() {
            _fun50875: for (var _fun50875_ip = 0;;) switch (_fun50875_ip) {
                case 0:
                    var2 = arguments[0];
                    var1 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun50875_ip = 14;
                        continue _fun50875
                    }
                case 12:
                    var2 = true;
                case 14:
                    var0 = var1.getActivities;
                    var1 = var0.bind(var1)(var2);
                    var0 = 0;
                    var0 = var1[var0];
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getApplicationActivity';
        var4.key = var6;
        var6 = function arg0() {
            _fun50876: for (var _fun50876_ip = 0;;) switch (_fun50876_ip) {
                case 0:
                    var3 = arguments[1];
                    var2 = this;
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = undefined;
                    if (!(var3 === var1)) {
                        _fun50876_ip = 23;
                        continue _fun50876
                    }
                case 21:
                    var3 = true;
                case 23:
                    var1 = var2.findActivity;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.application_id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'findActivity';
        var4.key = var6;
        var5 = function arg0() {
            _fun50878: for (var _fun50878_ip = 0;;) switch (_fun50878_ip) {
                case 0:
                    var2 = arguments[1];
                    var1 = this;
                    var0 = undefined;
                    if (!(var2 === var0)) {
                        _fun50878_ip = 14;
                        continue _fun50878
                    }
                case 12:
                    var2 = true;
                case 14:
                    var0 = var1.getActivities;
                    var2 = var0.bind(var1)(var2);
                    var1 = var2.find;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'SelfPresenceStore';
    var7.displayName = var1;
    var1 = 21;
    var1 = var5[var1];
    var16 = var6.bind(var0)(var1);
    var1 = {};
    var1.START_SESSION = var8;
    var10 = function() {
        var1 = _closure1_slot39;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.CONNECTION_OPEN = var10;
    var1.CONNECTION_OPEN_SUPPLEMENTAL = var9;
    var1.OVERLAY_INITIALIZE = var9;
    var1.CONNECTION_CLOSED = var8;
    var1.IDLE = var8;
    var1.AFK = var8;
    var1.RUNNING_GAMES_CHANGE = var8;
    var1.STREAMING_UPDATE = var8;
    var1.USER_SETTINGS_PROTO_UPDATE = var8;
    var1.LOCAL_ACTIVITY_UPDATE = var8;
    var1.SPOTIFY_PLAYER_STATE = var8;
    var1.SPOTIFY_PLAYER_PLAY = var8;
    var1.USER_CONNECTIONS_UPDATE = var8;
    var1.SESSIONS_REPLACE = var8;
    var1.RPC_APP_DISCONNECTED = var8;
    var1.LIBRARY_FETCH_SUCCESS = var8;
    var1.LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS = var8;
    var8 = function() {
        var1 = true;
        _closure1_slot27 = var1;
        var1 = _closure1_slot21;
        _closure1_slot22 = var1;
        var1 = _closure1_slot38;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.LOGOUT = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.invisible;
        _closure1_slot20 = var1;
        var1 = _closure1_slot38;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.FORCE_INVISIBLE = var8;
    var3 = function() {
        var1 = false;
        _closure1_slot20 = var1;
        var1 = _closure1_slot38;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.WINDOW_FOCUS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var17 = var3;
    var15 = var1;
    var1 = new var17[var7](var16, var15, var14);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/SelfPresenceStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5699, 1310, 3485, 4229, 3490, 5709, 3611, 3521, 660, 3499, 1348, 1384, 5723, 644, 22, 566, 806, 2]);