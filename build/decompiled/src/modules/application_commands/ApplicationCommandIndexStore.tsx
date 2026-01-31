// modules/application_commands/ApplicationCommandIndexStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var21 = metroImportDefault;
    var12 = metroImportAll;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var21;
    var _closure1_slot2 = var12;
    var _closure1_slot3 = var10;
    var0 = function() {
        _fun42890: for (var _fun42890_ip = 0;;) switch (_fun42890_ip) {
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
                _fun42890_ip = 74;
                continue _fun42890;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot37 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function arg0, arg1() {
        _fun42893: for (var _fun42893_ip = 0;;) switch (_fun42893_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun42893_ip = 46;
                    continue _fun42893
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun42893_ip = 55;
                    continue _fun42893
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun42893_ip = 343;
                    continue _fun42893
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun42893_ip = 323;
                    continue _fun42893
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun42893_ip = 283;
                    continue _fun42893
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun42893_ip = 270;
                    continue _fun42893
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
                    _fun42893_ip = 163;
                    continue _fun42893
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun42893_ip = 179;
                    continue _fun42893
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun42893_ip = 249;
                    continue _fun42893
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun42893_ip = 249;
                    continue _fun42893
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun42893_ip = 234;
                    continue _fun42893
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun42893_ip = 247;
                    continue _fun42893
                }
            case 234:
                var8 = _closure1_slot39;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun42893_ip = 265;
                continue _fun42893;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun42893_ip = 283;
                continue _fun42893;
            case 270:
                var6 = _closure1_slot39;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun42893_ip = 323;
                    continue _fun42893
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
                    _fun42893_ip = 330;
                    continue _fun42893
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun42894: for (var _fun42894_ip = 0;;) switch (_fun42894_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun42894_ip = 56;
                                continue _fun42894
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
                            _fun42894_ip = 67;
                            continue _fun42894;
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
    var _closure1_slot38 = var0;
    var0 = function arg0, arg1() {
        _fun42895: for (var _fun42895_ip = 0;;) switch (_fun42895_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun42895_ip = 23;
                    continue _fun42895
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun42895_ip = 33;
                    continue _fun42895
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
                    _fun42895_ip = 70;
                    continue _fun42895
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun42895_ip = 55;
                    continue _fun42895
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function arg0() {
        _fun42896: for (var _fun42896_ip = 0;;) switch (_fun42896_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = 'guild';
                if (!(var1 !== var2)) {
                    _fun42896_ip = 67;
                    continue _fun42896
                }
            case 16:
                var1 = 'channel';
                if (!(var1 !== var2)) {
                    _fun42896_ip = 60;
                    continue _fun42896
                }
            case 24:
                var1 = 'user';
                if (!(var1 !== var2)) {
                    _fun42896_ip = 51;
                    continue _fun42896
                }
            case 32:
                var1 = 'application';
                if (!(var1 !== var2)) {
                    _fun42896_ip = 44;
                    continue _fun42896
                }
            case 40:
                var1 = undefined;
                return var1;
            case 44:
                var1 = var0.applicationId;
                return var1;
            case 51:
                var1 = _closure1_slot25;
                return var1;
            case 60:
                var1 = var0.channelId;
                return var1;
            case 67:
                var0 = var0.guildId;
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = function arg0, arg1() {
        _fun42897: for (var _fun42897_ip = 0;;) switch (_fun42897_ip) {
            case 0:
                var2 = arg0;
                var7 = arg1;
                var6 = arguments[2];
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun42897_ip = 17;
                    continue _fun42897
                }
            case 15:
                var6 = false;
            case 17:
                var0 = _closure1_slot40;
                var5 = var0.bind(var3)(var2);
                var0 = _closure1_slot34;
                var0 = var0.indices;
                var0 = var0[var5];
                var4 = null;
                if (!(var4 == var0)) {
                    _fun42897_ip = 94;
                    continue _fun42897
                }
            case 49:
                var4 = undefined;
                if (!var6) {
                    _fun42897_ip = 167;
                    continue _fun42897
                }
            case 54:
                var6 = {};
                var8 = _closure1_slot26;
                var6.serverVersion = var8;
                var8 = {};
                var9 = false;
                var8.fetching = var9;
                var6.fetchState = var8;
                var11 = var6;
                var10 = var7;
                var8 = copyDataProperties(var11, var10);
                var4 = var6;
                _fun42897_ip = 167;
                continue _fun42897;
            case 94:
                var6 = 'fetchState';
                var6 = var6 in var7;
                if (!var6) {
                    _fun42897_ip = 117;
                    continue _fun42897
                }
            case 105:
                var8 = var0.fetchState;
                var6 = var8.fetching;
            case 117:
                if (!var6) {
                    _fun42897_ip = 142;
                    continue _fun42897
                }
            case 120:
                var6 = var0.fetchState;
                var8 = var6.abort;
                var6 = var8.abort;
                var6 = var6.bind(var8)();
            case 142:
                var6 = {};
                var11 = var6;
                var10 = var0;
                var8 = copyDataProperties(var11, var10);
                var11 = var6;
                var10 = var7;
                var7 = copyDataProperties(var11, var10);
                var4 = var6;
            case 167:
                if (!(var3 !== var4)) {
                    _fun42897_ip = 242;
                    continue _fun42897
                }
            case 171:
                var3 = _closure1_slot34;
                var3 = var3.indices;
                var3[var5] = var4;
                var3 = var2.type;
                var2 = 'application';
                if (!(var2 === var3)) {
                    _fun42897_ip = 242;
                    continue _fun42897
                }
            case 198:
                var2 = _closure1_slot34;
                var3 = var2.applicationIndices;
                var2 = var3.set;
                var2 = var2.bind(var3)(var5, var4);
                var2 = _closure1_slot34;
                var3 = var2.applicationIndicesVersion;
                var1 = 1;
                var1 = var3 + var1;
                var2.applicationIndicesVersion = var1;
            case 242:
                return var0;
        }
    };
    var _closure1_slot41 = var0;
    var0 = function arg0() {
        _fun42898: for (var _fun42898_ip = 0;;) switch (_fun42898_ip) {
            case 0:
                var3 = _closure1_slot40;
                var0 = undefined;
                var2 = arg0;
                var2 = var3.bind(var0)(var2);
                var3 = _closure1_slot34;
                var3 = var3.indices;
                var3 = var3[var2];
                var4 = null;
                var4 = var4 != var3;
                if (!var4) {
                    _fun42898_ip = 52;
                    continue _fun42898
                }
            case 40:
                var5 = var3.fetchState;
                var4 = var5.fetching;
            case 52:
                if (!var4) {
                    _fun42898_ip = 77;
                    continue _fun42898
                }
            case 55:
                var3 = var3.fetchState;
                var4 = var3.abort;
                var3 = var4.abort;
                var3 = var3.bind(var4)();
            case 77:
                var1 = _closure1_slot34;
                var1 = var1.indices;
                var1 = delete var1[var2];
                return var0;
        }
    };
    var _closure1_slot42 = var0;
    var24 = function() {
        _fun42899: for (var _fun42899_ip = 0;;) switch (_fun42899_ip) {
            case 0:
                var0 = global;
                var3 = var0.Object;
                var2 = var3.values;
                var1 = _closure1_slot34;
                var1 = var1.indices;
                var3 = var2.bind(var3)(var1);
                var1 = var3.length;
                var2 = 0;
                var1 = var2 < var1;
                if (!var1) {
                    _fun42899_ip = 98;
                    continue _fun42899
                }
            case 45:
                var1 = var3[var2];
                var4 = var1.fetchState;
                var4 = var4.fetching;
                if (!var4) {
                    _fun42899_ip = 86;
                    continue _fun42899
                }
            case 64:
                var1 = var1.fetchState;
                var4 = var1.abort;
                var1 = var4.abort;
                var1 = var1.bind(var4)();
            case 86:
                var2 = var2 + 1;
                var1 = var3.length;
                if (var2 < var1) {
                    _fun42899_ip = 45;
                    continue _fun42899
                }
            case 98:
                var1 = _closure1_slot34;
                var0 = {};
                var1.indices = var0;
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot43 = var24;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun42902: for (var _fun42902_ip = 0;;) switch (_fun42902_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun42902_ip = 178;
                            continue _fun42902
                        }
                    case 13:
                        var1 = _closure1_slot40;
                        var2 = undefined;
                        var5 = var1.bind(var2)(var6);
                        var1 = _closure1_slot34;
                        var1 = var1.indices;
                        var1 = var1[var5];
                        var4 = null;
                        if (!(var4 == var1)) {
                            _fun42902_ip = 51;
                            continue _fun42902
                        }
                    case 47:
                        var1 = _closure1_slot30;
                    case 51:
                        var7 = _closure1_slot55;
                        var7 = var7.bind(var2)(var1);
                        if (var7) {
                            _fun42902_ip = 131;
                            continue _fun42902
                        }
                    case 63:
                        var7 = var1.fetchState;
                        var7 = var7.fetching;
                        if (var7) {
                            _fun42902_ip = 81;
                            continue _fun42902
                        }
                    case 78:
                        return var1;
                    case 81:
                        var1 = var1.fetchState;
                        var1 = var1.promise;
                        SaveGenerator(address = 97);
                    case 95:
                        return var1;
                    case 97:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun42902_ip = 128;
                            continue _fun42902
                        }
                    case 103:
                        var7 = _closure1_slot34;
                        var7 = var7.indices;
                        var7 = var7[var5];
                        if (!(var4 == var7)) {
                            _fun42902_ip = 125;
                            continue _fun42902
                        }
                    case 121:
                        var7 = _closure1_slot30;
                    case 125:
                        return var7;
                    case 128:
                        return var1;
                    case 131:
                        var1 = _closure1_slot45;
                        var1 = var1.bind(var2)(var6);
                        SaveGenerator(address = 144);
                    case 142:
                        return var1;
                    case 144:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun42902_ip = 175;
                            continue _fun42902
                        }
                    case 150:
                        var2 = _closure1_slot34;
                        var2 = var2.indices;
                        var2 = var2[var5];
                        if (!(var4 == var2)) {
                            _fun42902_ip = 172;
                            continue _fun42902
                        }
                    case 168:
                        var2 = _closure1_slot30;
                    case 172:
                        return var2;
                    case 175:
                        return var1;
                    case 178:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot44 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot44 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot46;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot45 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun42906: for (var _fun42906_ip = 0;;) switch (_fun42906_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun42906_ip = 208;
                            continue _fun42906
                        }
                    case 13:
                        var1 = global;
                        var1 = var1.AbortController;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var15 = var2;
                        var1 = new var15[var1](var14);
                        var5 = var1 instanceof Object ? var1 : var2;
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var1 = 19;
                        var1 = var7[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var1 = var1.Future;
                        var8 = var1.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var1
                            }
                        });
                        var15 = var8;
                        var1 = new var15[var1](var14);
                        var1 = var1 instanceof Object ? var1 : var8;
                        var9 = _closure1_slot41;
                        var8 = {};
                        var10 = {};
                        var3 = true;
                        var10.fetching = var3;
                        var10.abort = var5;
                        var11 = var1.promise;
                        var10.promise = var11;
                        var8.fetchState = var10;
                        var3 = var9.bind(var2)(var6, var8, var3);
                        var3 = 20;
                        var3 = var7[var3];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.fetchApplicationCommandIndex;
                        var5 = var3.bind(var4)(var6, var5);
                        var4 = var5.then;
                        var3 = var1.resolve;
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.catch;
                        var1 = var1.reject;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 196);
                    case 194:
                        return var1;
                    case 196:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun42906_ip = 205;
                            continue _fun42906
                        }
                    case 202:
                        return var2;
                    case 205:
                        return var1;
                    case 208:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot46 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot46 = var0;
    var23 = function arg0() {
        _fun42907: for (var _fun42907_ip = 0;;) switch (_fun42907_ip) {
            case 0:
                var2 = arg0;
                var6 = arguments[1];
                var1 = undefined;
                if (!(var6 === var1)) {
                    _fun42907_ip = 16;
                    continue _fun42907
                }
            case 14:
                var6 = false;
            case 16:
                var _closure2_slot0 = var1;
                var5 = var2.target;
                var4 = var2.index;
                var8 = _closure1_slot18;
                var3 = var8.getCurrentUser;
                var8 = var3.bind(var8)();
                var3 = null;
                var9 = var3 == var8;
                var20 = undefined;
                if (var9) {
                    _fun42907_ip = 63;
                    continue _fun42907
                }
            case 58:
                var20 = var8.id;
            case 63:
                _closure2_slot0 = var20;
                if (!(var3 != var20)) {
                    _fun42907_ip = 750;
                    continue _fun42907
                }
            case 74:
                var11 = {};
                var10 = {};
                var8 = global;
                var8 = var8.Set;
                var9 = var8.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var8
                    }
                });
                var32 = var9;
                var8 = new var32[var8](var31);
                var17 = var8 instanceof Object ? var8 : var9;
                var9 = _closure1_slot38;
                var8 = var4.applications;
                var19 = var9.bind(var1)(var8);
                var12 = var19.bind(var1)();
                var9 = var12.done;
                var18 = 'permissions';
                var16 = 'botId';
                var15 = 22;
                var14 = 21;
                var8 = false;
                var13 = var12;
                var12 = undefined;
                if (var9) {
                    _fun42907_ip = 456;
                    continue _fun42907
                }
            case 157:
                var9 = var13.value;
                var21 = var9.bot;
                if (!(var3 == var21)) {
                    _fun42907_ip = 182;
                    continue _fun42907
                }
            case 172:
                var21 = var9.bot_id;
                if (!(var3 == var21)) {
                    _fun42907_ip = 220;
                    continue _fun42907
                }
            case 182:
                var22 = var9.bot;
                var21 = var12;
                if (!(var3 != var22)) {
                    _fun42907_ip = 290;
                    continue _fun42907
                }
            case 195:
                var22 = var9.bot;
                var23 = var22.id;
                var22 = var9.id;
                var10[var23] = var22;
                var21 = var12;
                _fun42907_ip = 290;
                continue _fun42907;
            case 220:
                var23 = var9.bot_id;
                var22 = var9.id;
                var10[var23] = var22;
                var24 = _closure1_slot18;
                var23 = var24.getUser;
                var22 = var9.bot_id;
                var22 = var23.bind(var24)(var22);
                if (!(var3 == var22)) {
                    _fun42907_ip = 281;
                    continue _fun42907
                }
            case 260:
                var24 = var17.add;
                var23 = var9.bot_id;
                var23 = var24.bind(var17)(var23);
                var21 = var22;
                _fun42907_ip = 290;
                continue _fun42907;
            case 281:
                var9.bot = var22;
                var21 = var22;
            case 290:
                var22 = {};
                var23 = {};
                var25 = _closure1_slot0;
                var24 = _closure1_slot3;
                var24 = var24[var14];
                var26 = var25.bind(var1)(var24);
                var25 = var26.getApplicationCommandSection;
                var24 = _closure1_slot57;
                var24 = var24.bind(var1)(var9);
                var30 = var25.bind(var26)(var24, var8);
                var31 = var23;
                var24 = copyDataProperties(var31, var30);
                var24 = var9.permissions;
                var25 = var3 != var24;
                var24 = undefined;
                if (!var25) {
                    _fun42907_ip = 398;
                    continue _fun42907
                }
            case 354:
                var26 = _closure1_slot0;
                var25 = _closure1_slot3;
                var25 = var25[var15];
                var27 = var26.bind(var1)(var25);
                var26 = var27.keyPermissions;
                var28 = _closure1_slot60;
                var25 = var9.permissions;
                var25 = var28.bind(var1)(var25, var20);
                var24 = var26.bind(var27)(var25);
            case 398:
                var23[var18] = var24;
                var24 = var9.bot_id;
                var23[var16] = var24;
                var22.descriptor = var23;
                var23 = {};
                var22.commands = var23;
                var9 = var9.id;
                var11[var9] = var22;
                var22 = var19.bind(var1)();
                var9 = var22.done;
                var13 = var22;
                var12 = var21;
                if (!var9) {
                    _fun42907_ip = 157;
                    continue _fun42907
                }
            case 456:
                var12 = var5.type;
                var9 = 'guild';
                var9 = var9 === var12;
                if (!var9) {
                    _fun42907_ip = 483;
                    continue _fun42907
                }
            case 472:
                var13 = var17.size;
                var12 = 0;
                var9 = var13 > var12;
            case 483:
                if (!var9) {
                    _fun42907_ip = 539;
                    continue _fun42907
                }
            case 486:
                var12 = _closure1_slot1;
                var13 = _closure1_slot3;
                var9 = 23;
                var9 = var13[var9];
                var15 = var12.bind(var1)(var9);
                var13 = var15.requestMembersById;
                var12 = var5.guildId;
                var9 = new Array(0);
                var29 = 0;
                var31 = var9;
                var30 = var17;
                var16 = arraySpread(var31, var30, var29);
                var9 = var13.bind(var15)(var12, var9);
            case 539:
                var9 = _closure1_slot38;
                var13 = _closure1_slot0;
                var12 = _closure1_slot3;
                var12 = var12[var14];
                var14 = var13.bind(var1)(var12);
                var13 = var14.buildApplicationCommands;
                var15 = var4.application_commands;
                var12 = var15.map;
                var7 = function(arg0) { // Environment: var7
                    _fun42908: for (var _fun42908_ip = 0;;) switch (_fun42908_ip) {
                        case 0:
                            var1 = arg0;
                            var6 = _closure2_slot0;
                            var0 = {};
                            var10 = var0;
                            var9 = var1;
                            var2 = copyDataProperties(var10, var9);
                            var2 = var1.description_default;
                            var3 = null;
                            if (!(var3 == var2)) {
                                _fun42908_ip = 39;
                                continue _fun42908
                            }
                        case 34:
                            var2 = var1.description;
                        case 39:
                            var5 = var3 != var2;
                            var4 = '';
                            if (!var5) {
                                _fun42908_ip = 53;
                                continue _fun42908
                            }
                        case 50:
                            var4 = var2;
                        case 53:
                            var2 = 'description';
                            var0[var2] = var4;
                            var4 = var1.dm_permission;
                            var2 = 'dm_permission';
                            var0[var2] = var4;
                            var4 = var1.name_default;
                            if (!(var3 == var4)) {
                                _fun42908_ip = 92;
                                continue _fun42908
                            }
                        case 87:
                            var4 = var1.name;
                        case 92:
                            var2 = 'name';
                            var0[var2] = var4;
                            var8 = var1.options;
                            var2 = var3 == var8;
                            var5 = undefined;
                            var4 = undefined;
                            if (var2) {
                                _fun42908_ip = 134;
                                continue _fun42908
                            }
                        case 117:
                            var7 = var8.map;
                            var2 = _closure1_slot58;
                            var4 = var7.bind(var8)(var2);
                        case 134:
                            if (!(var3 == var4)) {
                                _fun42908_ip = 142;
                                continue _fun42908
                            }
                        case 138:
                            var4 = new Array(0);
                        case 142:
                            var2 = 'options';
                            var0[var2] = var4;
                            var2 = var1.permissions;
                            var2 = var3 != var2;
                            var3 = undefined;
                            if (!var2) {
                                _fun42908_ip = 185;
                                continue _fun42908
                            }
                        case 166:
                            var4 = _closure1_slot60;
                            var2 = var1.permissions;
                            var3 = var4.bind(var5)(var2, var6);
                        case 185:
                            var2 = 'permissions';
                            var0[var2] = var3;
                            var3 = var1.description;
                            var2 = var1.description_default;
                            if (!(var3 !== var2)) {
                                _fun42908_ip = 220;
                                continue _fun42908
                            }
                        case 209:
                            var2 = var1.description;
                            var0.description_localized = var2;
                        case 220:
                            var3 = var1.name;
                            var2 = var1.name_default;
                            if (!(var3 !== var2)) {
                                _fun42908_ip = 246;
                                continue _fun42908
                            }
                        case 235:
                            var1 = var1.name;
                            var0.name_localized = var1;
                        case 246:
                            return var0;
                    }
                };
                var12 = var12.bind(var15)(var7);
                var7 = true;
                var7 = var13.bind(var14)(var12, var7);
                var13 = var9.bind(var1)(var7);
                var9 = var13.bind(var1)();
                var7 = var9.done;
                var12 = 'Command has no matching application';
                if (var7) {
                    _fun42907_ip = 682;
                    continue _fun42907
                }
            case 618:
                var15 = var9.value;
                var7 = var15.applicationId;
                var7 = var11[var7];
                if (!(var3 == var7)) {
                    _fun42907_ip = 652;
                    continue _fun42907
                }
            case 636:
                var16 = _closure1_slot24;
                var14 = var16.error;
                var14 = var14.bind(var16)(var12);
                _fun42907_ip = 667;
                continue _fun42907;
            case 652:
                var14 = var7.commands;
                var7 = var15.id;
                var14[var7] = var15;
            case 667:
                var14 = var13.bind(var1)();
                var7 = var14.done;
                var9 = var14;
                if (!var7) {
                    _fun42907_ip = 618;
                    continue _fun42907
                }
            case 682:
                var9 = var4.version;
                if (!(var3 == var9)) {
                    _fun42907_ip = 696;
                    continue _fun42907
                }
            case 692:
                var9 = _closure1_slot27;
            case 696:
                var4 = _closure1_slot41;
                var3 = {};
                var3.serverVersion = var9;
                var7 = {};
                var7.sections = var11;
                var7.sectionIdsByBotId = var10;
                var7.version = var9;
                var3.result = var7;
                var7 = {};
                var7.fetching = var8;
                var3.fetchState = var7;
                var3 = var4.bind(var1)(var5, var3, var6);
                return var1;
            case 750:
                var1 = _closure1_slot32;
                if (var1) {
                    _fun42907_ip = 771;
                    continue _fun42907
                }
            case 757:
                var1 = _closure1_slot33;
                var0 = var1.push;
                var0 = var0.bind(var1)(var2);
            case 771:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot47 = var23;
    var0 = function arg0, arg1() {
        _fun42909: for (var _fun42909_ip = 0;;) switch (_fun42909_ip) {
            case 0:
                var3 = arg1;
                var5 = _closure1_slot40;
                var4 = {};
                var1 = 'guild';
                var4.type = var1;
                var1 = arg0;
                var4.guildId = var1;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var2 = _closure1_slot34;
                var2 = var2.indices;
                var4 = var2[var4];
                var2 = null;
                var5 = var2 == var4;
                if (var5) {
                    _fun42909_ip = 65;
                    continue _fun42909
                }
            case 59:
                var1 = var4.result;
            case 65:
                var _closure2_slot0 = var1;
                if (!(var2 != var1)) {
                    _fun42909_ip = 100;
                    continue _fun42909
                }
            case 73:
                var1 = false;
                var _closure2_slot1 = var1;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun42910: for (var _fun42910_ip = 0;;) switch (_fun42910_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = var0.user;
                            var6 = var0.nick;
                            var0 = var7.bot;
                            if (!var0) {
                                _fun42910_ip = 245;
                                continue _fun42910
                            }
                        case 26:
                            var0 = _closure2_slot0;
                            var2 = var0.sectionIdsByBotId;
                            var0 = var7.id;
                            var2 = var2[var0];
                            var8 = null;
                            if (!(var8 != var2)) {
                                _fun42910_ip = 245;
                                continue _fun42910
                            }
                        case 57:
                            var0 = _closure2_slot0;
                            var0 = var0.sections;
                            var2 = var0[var2];
                            var9 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var3 = 24;
                            var10 = var5[var3];
                            var4 = undefined;
                            var12 = var9.bind(var4)(var10);
                            var11 = var8 != var2;
                            var10 = 'Bot has no matching index section';
                            var10 = var12.bind(var4)(var11, var10);
                            var3 = var5[var3];
                            var9 = var9.bind(var4)(var3);
                            var3 = var2.descriptor;
                            var3 = var3.application;
                            var8 = var8 != var3;
                            var3 = "Bot's index section has no application info";
                            var3 = var9.bind(var4)(var8, var3);
                            var3 = _closure1_slot0;
                            var0 = 21;
                            var0 = var5[var0];
                            var5 = var3.bind(var4)(var0);
                            var4 = var5.getApplicationCommandSection;
                            var3 = {};
                            var0 = var2.descriptor;
                            var14 = var0.application;
                            var15 = var3;
                            var0 = copyDataProperties(var15, var14);
                            var0 = 'bot';
                            var3[var0] = var7;
                            var0 = false;
                            var3 = var4.bind(var5)(var3, var0, var6);
                            var0 = {};
                            var14 = var2.descriptor;
                            var15 = var0;
                            var4 = copyDataProperties(var15, var14);
                            var15 = var0;
                            var14 = var3;
                            var3 = copyDataProperties(var15, var14);
                            var2.descriptor = var0;
                            var0 = true;
                            _closure2_slot1 = var0;
                        case 245:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var0 = _closure2_slot1;
                return var0;
            case 100:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot48 = var0;
    var11 = function() {
        var3 = _closure1_slot41;
        var2 = {};
        var1 = 'user';
        var2.type = var1;
        var1 = {};
        var0 = _closure1_slot26;
        var1.serverVersion = var0;
        var0 = undefined;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var6 = function arg0, arg1, arg2() {
        var7 = arg0;
        var6 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var _closure2_slot2 = var8;
        var4 = _closure1_slot11;
        var3 = var4.useState;
        var0 = true;
        var5 = var3.bind(var4)(var0);
        var3 = _closure1_slot4;
        var4 = undefined;
        var0 = 2;
        var3 = var3.bind(var4)(var5, var0);
        var0 = 0;
        var5 = var3[var0];
        var _closure2_slot3 = var5;
        var0 = 1;
        var0 = var3[var0];
        var _closure2_slot4 = var0;
        var3 = _closure1_slot0;
        var9 = _closure1_slot3;
        var0 = 29;
        var0 = var9[var0];
        var9 = var3.bind(var4)(var0);
        var4 = var9.useStateFromStoresObject;
        var0 = _closure1_slot34;
        var3 = new Array(1);
        var3[0] = var0;
        var0 = function() { // Environment: var1
            _fun42913: for (var _fun42913_ip = 0;;) switch (_fun42913_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = var0.type;
                    var0 = 'channel';
                    if (!(var0 !== var2)) {
                        _fun42913_ip = 39;
                        continue _fun42913
                    }
                case 20:
                    var2 = _closure1_slot34;
                    var0 = var2.getUserState;
                    var0 = var0.bind(var2)();
                    _fun42913_ip = 61;
                    continue _fun42913;
                case 39:
                    var3 = _closure1_slot34;
                    var2 = var3.getContextState;
                    var1 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1);
                case 61:
                    return var0;
            }
        };
        var0 = var4.bind(var9)(var3, var0);
        var _closure2_slot5 = var0;
        var4 = _closure1_slot11;
        var3 = var4.useEffect;
        var2 = new Array(5);
        var2[0] = var0;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2[4] = var5;
        var1 = function() { // Environment: var1
            _fun42914: for (var _fun42914_ip = 0;;) switch (_fun42914_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    if (!var1) {
                        _fun42914_ip = 432;
                        continue _fun42914
                    }
                case 13:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var1 = 'contextless';
                    if (!(var1 === var2)) {
                        _fun42914_ip = 114;
                        continue _fun42914
                    }
                case 32:
                    var1 = _closure2_slot2;
                    if (!var1) {
                        _fun42914_ip = 57;
                        continue _fun42914
                    }
                case 39:
                    var4 = _closure1_slot55;
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
                case 57:
                    if (!var1) {
                        _fun42914_ip = 432;
                        continue _fun42914
                    }
                case 63:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.requestApplicationCommandIndex;
                    var1 = {};
                    var4 = 'user';
                    var1.type = var4;
                    var1 = var2.bind(var3)(var1);
                    _fun42914_ip = 432;
                    continue _fun42914;
                case 114:
                    var1 = _closure2_slot2;
                    if (!var1) {
                        _fun42914_ip = 419;
                        continue _fun42914
                    }
                case 124:
                    var1 = _closure2_slot1;
                    if (!var1) {
                        _fun42914_ip = 154;
                        continue _fun42914
                    }
                case 131:
                    var4 = _closure1_slot54;
                    var2 = _closure2_slot0;
                    var3 = var2.channel;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
                case 154:
                    if (!var1) {
                        _fun42914_ip = 419;
                        continue _fun42914
                    }
                case 160:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 26;
                    var2 = var3[var2];
                    var3 = undefined;
                    var8 = var4.bind(var3)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot22;
                    var6 = var2.APPLICATION_COMMAND_CACHE_FETCH;
                    var2 = {};
                    var5 = _closure2_slot5;
                    var9 = var5.result;
                    var4 = null;
                    var9 = var4 == var9;
                    var2.miss = var9;
                    var9 = global;
                    var11 = var9.Object;
                    var10 = var11.keys;
                    var9 = _closure1_slot34;
                    var9 = var9.indices;
                    var9 = var10.bind(var11)(var9);
                    var9 = var9.length;
                    var2.size = var9;
                    var2 = var7.bind(var8)(var6, var2);
                    var2 = _closure1_slot55;
                    var2 = var2.bind(var3)(var5);
                    if (!var2) {
                        _fun42914_ip = 419;
                        continue _fun42914
                    }
                case 281:
                    var2 = _closure2_slot0;
                    var2 = var2.channel;
                    var2 = var2.guild_id;
                    if (!(var4 == var2)) {
                        _fun42914_ip = 360;
                        continue _fun42914
                    }
                case 299:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var2 = 20;
                    var2 = var5[var2];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.requestApplicationCommandIndex;
                    var2 = {};
                    var6 = 'channel';
                    var2.type = var6;
                    var6 = _closure2_slot0;
                    var6 = var6.channel;
                    var6 = var6.id;
                    var2.channelId = var6;
                    var2 = var4.bind(var5)(var2);
                    _fun42914_ip = 419;
                    continue _fun42914;
                case 360:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 20;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.requestApplicationCommandIndex;
                    var1 = {};
                    var4 = 'guild';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var4 = var4.channel;
                    var4 = var4.guild_id;
                    var1.guildId = var4;
                    var1 = var2.bind(var3)(var1);
                case 419:
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                case 432:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot49 = var6;
    var5 = function arg0, arg1() {
        var6 = arg0;
        var7 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var4 = _closure1_slot11;
        var3 = var4.useState;
        var0 = true;
        var5 = var3.bind(var4)(var0);
        var3 = _closure1_slot4;
        var4 = undefined;
        var0 = 2;
        var3 = var3.bind(var4)(var5, var0);
        var0 = 0;
        var5 = var3[var0];
        var _closure2_slot2 = var5;
        var0 = 1;
        var0 = var3[var0];
        var _closure2_slot3 = var0;
        var3 = _closure1_slot0;
        var8 = _closure1_slot3;
        var0 = 29;
        var0 = var8[var0];
        var8 = var3.bind(var4)(var0);
        var4 = var8.useStateFromStoresObject;
        var0 = _closure1_slot34;
        var3 = new Array(1);
        var3[0] = var0;
        var0 = function() { // Environment: var1
            var1 = _closure1_slot34;
            var0 = var1.getUserState;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var4.bind(var8)(var3, var0);
        var _closure2_slot4 = var0;
        var4 = _closure1_slot11;
        var3 = var4.useEffect;
        var2 = new Array(4);
        var2[0] = var0;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() { // Environment: var1
            _fun42917: for (var _fun42917_ip = 0;;) switch (_fun42917_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    if (!var1) {
                        _fun42917_ip = 104;
                        continue _fun42917
                    }
                case 10:
                    var1 = _closure2_slot1;
                    if (!var1) {
                        _fun42917_ip = 35;
                        continue _fun42917
                    }
                case 17:
                    var4 = _closure1_slot55;
                    var3 = _closure2_slot4;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3);
                case 35:
                    if (!var1) {
                        _fun42917_ip = 42;
                        continue _fun42917
                    }
                case 38:
                    var1 = _closure2_slot0;
                case 42:
                    if (!var1) {
                        _fun42917_ip = 91;
                        continue _fun42917
                    }
                case 45:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.requestApplicationCommandIndex;
                    var1 = {};
                    var4 = 'user';
                    var1.type = var4;
                    var1 = var2.bind(var3)(var1);
                case 91:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                case 104:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot50 = var5;
    var4 = function arg0, arg1, arg2() {
        _fun42918: for (var _fun42918_ip = 0;;) switch (_fun42918_ip) {
            case 0:
                var6 = arg0;
                var11 = arg1;
                var9 = arg2;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var11;
                var _closure2_slot2 = var9;
                var2 = var6.type;
                var14 = undefined;
                var1 = 'channel';
                var5 = undefined;
                if (!(var1 === var2)) {
                    _fun42918_ip = 45;
                    continue _fun42918
                }
            case 40:
                var5 = var6.channel;
            case 45:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 25;
                var2 = var4[var2];
                var4 = var3.bind(var14)(var2);
                var3 = var4.usePermissionContext;
                var2 = var11.commandTypes;
                var12 = var3.bind(var4)(var5, var2);
                var _closure2_slot3 = var12;
                var3 = var11.applicationCommands;
                var2 = false;
                var10 = var2 !== var3;
                var _closure2_slot4 = var10;
                var3 = _closure1_slot49;
                var2 = var9.allowFetch;
                var8 = var3.bind(var14)(var6, var10, var2);
                var _closure2_slot5 = var8;
                var3 = _closure1_slot50;
                var2 = var9.allowFetch;
                var7 = var3.bind(var14)(var10, var2);
                var _closure2_slot6 = var7;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.useStateFromStores;
                    var0 = _closure1_slot34;
                    var1 = new Array(1);
                    var1[0] = var0;
                    var0 = function() { // Environment: var0
                        var1 = _closure1_slot34;
                        var0 = var1.getApplicationStates;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5 = var2.bind(var14)();
                var _closure2_slot7 = var5;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 29;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.useStateFromStores;
                    var0 = _closure1_slot34;
                    var1 = new Array(1);
                    var1[0] = var0;
                    var0 = function() { // Environment: var0
                        var0 = _closure1_slot34;
                        var0 = var0.applicationIndicesVersion;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4 = var2.bind(var14)();
                var13 = var9.applicationId;
                var3 = var9.allowFetch;
                var2 = function arg0, arg1() {
                    var7 = arg0;
                    var8 = arg1;
                    var _closure3_slot0 = var7;
                    var _closure3_slot1 = var8;
                    var4 = _closure1_slot11;
                    var3 = var4.useState;
                    var0 = true;
                    var5 = var3.bind(var4)(var0);
                    var4 = _closure1_slot4;
                    var0 = undefined;
                    var3 = 2;
                    var4 = var4.bind(var0)(var5, var3);
                    var3 = 0;
                    var5 = var4[var3];
                    var _closure3_slot2 = var5;
                    var3 = 1;
                    var3 = var4[var3];
                    var _closure3_slot3 = var3;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 29;
                    var3 = var6[var3];
                    var9 = var4.bind(var0)(var3);
                    var6 = var9.useStateFromStores;
                    var3 = _closure1_slot34;
                    var4 = new Array(1);
                    var4[0] = var3;
                    var3 = function() { // Environment: var1
                        var2 = _closure1_slot34;
                        var1 = var2.getApplicationState;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6 = var6.bind(var9)(var4, var3);
                    var _closure3_slot4 = var6;
                    var4 = _closure1_slot11;
                    var3 = var4.useEffect;
                    var2 = new Array(4);
                    var2[0] = var8;
                    var2[1] = var7;
                    var2[2] = var6;
                    var2[3] = var5;
                    var1 = function() { // Environment: var1
                        _fun42925: for (var _fun42925_ip = 0;;) switch (_fun42925_ip) {
                            case 0:
                                var1 = _closure3_slot2;
                                if (!var1) {
                                    _fun42925_ip = 118;
                                    continue _fun42925
                                }
                            case 10:
                                var1 = _closure3_slot1;
                                if (!var1) {
                                    _fun42925_ip = 35;
                                    continue _fun42925
                                }
                            case 17:
                                var4 = _closure1_slot55;
                                var3 = _closure3_slot4;
                                var2 = undefined;
                                var1 = var4.bind(var2)(var3);
                            case 35:
                                if (!var1) {
                                    _fun42925_ip = 48;
                                    continue _fun42925
                                }
                            case 38:
                                var3 = _closure3_slot0;
                                var2 = null;
                                var1 = var2 != var3;
                            case 48:
                                if (!var1) {
                                    _fun42925_ip = 105;
                                    continue _fun42925
                                }
                            case 51:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 20;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.requestApplicationCommandIndex;
                                var1 = {};
                                var4 = 'application';
                                var1.type = var4;
                                var4 = _closure3_slot0;
                                var1.applicationId = var4;
                                var1 = var2.bind(var3)(var1);
                            case 105:
                                var2 = _closure3_slot3;
                                var1 = undefined;
                                var0 = false;
                                var0 = var2.bind(var1)(var0);
                            case 118:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var2 = var2.bind(var14)(var13, var3);
                var3 = _closure1_slot11;
                var2 = var3.useMemo;
                var1 = new Array(15);
                var1[0] = var12;
                var12 = var11.text;
                var1[1] = var12;
                var11 = var11.builtIns;
                var1[2] = var11;
                var1[3] = var10;
                var10 = var9.scoreMethod;
                var1[4] = var10;
                var10 = var9.allowEmptySections;
                var1[5] = var10;
                var10 = var9.sortOptions;
                var1[6] = var10;
                var10 = var9.allowApplicationState;
                var1[7] = var10;
                var10 = var9.applicationId;
                var1[8] = var10;
                var9 = var9.installOnDemand;
                var1[9] = var9;
                var1[10] = var8;
                var1[11] = var7;
                var1[12] = var6;
                var1[13] = var5;
                var1[14] = var4;
                var0 = function() { // Environment: var0
                    _fun42926: for (var _fun42926_ip = 0;;) switch (_fun42926_ip) {
                        case 0:
                            var2 = _closure1_slot52;
                            var1 = {};
                            var3 = _closure2_slot3;
                            var1.permissionContext = var3;
                            var3 = _closure2_slot1;
                            var4 = var3.text;
                            var1.text = var4;
                            var4 = _closure2_slot4;
                            var1.allowApplicationCommands = var4;
                            var3 = var3.builtIns;
                            var1.builtIns = var3;
                            var3 = _closure2_slot2;
                            var4 = var3.scoreMethod;
                            var1.scoreMethod = var4;
                            var4 = var3.allowEmptySections;
                            var1.allowEmptySections = var4;
                            var4 = _closure2_slot5;
                            var1.contextState = var4;
                            var4 = _closure2_slot6;
                            var1.userState = var4;
                            var4 = _closure2_slot0;
                            var1.launcherContext = var4;
                            var3 = var3.allowApplicationState;
                            if (var3) {
                                _fun42926_ip = 148;
                                continue _fun42926
                            }
                        case 118:
                            var3 = global;
                            var3 = var3.Map;
                            var4 = var3.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var6 = var4;
                            var3 = new var6[var3](var5);
                            var3 = var3 instanceof Object ? var3 : var4;
                            _fun42926_ip = 152;
                            continue _fun42926;
                        case 148:
                            var3 = _closure2_slot7;
                        case 152:
                            var1.applicationStates = var3;
                            var0 = _closure2_slot2;
                            var3 = var0.sortOptions;
                            var1.sortOptions = var3;
                            var3 = var0.applicationId;
                            var1.singleApplicationId = var3;
                            var0 = var0.installOnDemand;
                            var1.installOnDemand = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot51 = var4;
    var0 = function arg0() {
        _fun42927: for (var _fun42927_ip = 0;;) switch (_fun42927_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.permissionContext;
                var2 = var0.contextState;
                var5 = var0.userState;
                var8 = var0.applicationStates;
                var1 = var0.text;
                var23 = var0.builtIns;
                var3 = undefined;
                if (!(var23 === var3)) {
                    _fun42927_ip = 81;
                    continue _fun42927
                }
            case 46:
                var7 = _closure1_slot0;
                var9 = _closure1_slot3;
                var6 = 28;
                var6 = var9[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.BuiltInCommandFilter;
                var23 = var6.ALLOW;
            case 81:
                var9 = var0.allowApplicationCommands;
                if (!(var9 === var3)) {
                    _fun42927_ip = 93;
                    continue _fun42927
                }
            case 91:
                var9 = true;
            case 93:
                var7 = var0.singleApplicationId;
                var11 = var0.allowEmptySections;
                if (!(var11 === var3)) {
                    _fun42927_ip = 111;
                    continue _fun42927
                }
            case 109:
                var11 = false;
            case 111:
                var12 = var0.scoreMethod;
                if (!(var12 === var3)) {
                    _fun42927_ip = 156;
                    continue _fun42927
                }
            case 121:
                var10 = _closure1_slot0;
                var13 = _closure1_slot3;
                var6 = 28;
                var6 = var13[var6];
                var6 = var10.bind(var3)(var6);
                var6 = var6.ScoreMethod;
                var12 = var6.NONE;
            case 156:
                var _closure2_slot0 = var12;
                var10 = var0.sortOptions;
                if (!(var10 === var3)) {
                    _fun42927_ip = 177;
                    continue _fun42927
                }
            case 170:
                var10 = _closure1_slot35;
            case 177:
                var _closure2_slot1 = var10;
                var13 = var0.installOnDemand;
                if (!(var13 === var3)) {
                    _fun42927_ip = 193;
                    continue _fun42927
                }
            case 191:
                var13 = false;
            case 193:
                var _closure2_slot2 = var3;
                var22 = var15.commandTypes;
                var6 = null;
                var0 = var6 == var1;
                var19 = undefined;
                if (var0) {
                    _fun42927_ip = 224;
                    continue _fun42927
                }
            case 214:
                var0 = var1.toLowerCase;
                var19 = var0.bind(var1)();
            case 224:
                var0 = var6 == var19;
                var18 = undefined;
                if (var0) {
                    _fun42927_ip = 249;
                    continue _fun42927
                }
            case 233:
                var1 = var19.split;
                var0 = ' ';
                var18 = var1.bind(var19)(var0);
            case 249:
                var17 = _closure1_slot0;
                var16 = _closure1_slot3;
                var14 = 28;
                var1 = var16[var14];
                var1 = var17.bind(var3)(var1);
                var1 = var1.BuiltInCommandFilter;
                var1 = var1.ONLY_TEXT;
                var16 = var16[var14];
                var16 = var17.bind(var3)(var16);
                var16 = var16.BuiltInCommandFilter;
                var16 = var16.DENY;
                if (!(var23 === var16)) {
                    _fun42927_ip = 315;
                    continue _fun42927
                }
            case 309:
                var17 = new Array(0);
                _fun42927_ip = 354;
                continue _fun42927;
            case 315:
                var20 = _closure1_slot0;
                var21 = _closure1_slot3;
                var16 = 32;
                var16 = var21[var16];
                var21 = var20.bind(var3)(var16);
                var20 = var21.getBuiltInCommands;
                var16 = true;
                var1 = var23 === var1;
                var17 = var20.bind(var21)(var22, var16, var1);
            case 354:
                var1 = new Array(0);
                var16 = {};
                var16.permissionContext = var15;
                var16.query = var19;
                var16.splitQuery = var18;
                var16.allowEmptySections = var11;
                var16.scoreMethod = var12;
                var16.installOnDemand = var13;
                var13 = var2.result;
                var18 = var6 == var13;
                var27 = undefined;
                if (var18) {
                    _fun42927_ip = 411;
                    continue _fun42927
                }
            case 405:
                var27 = var13.sections;
            case 411:
                if (!(var6 == var27)) {
                    _fun42927_ip = 417;
                    continue _fun42927
                }
            case 415:
                var27 = {};
            case 417:
                var13 = var5.result;
                var18 = var6 == var13;
                var26 = undefined;
                if (var18) {
                    _fun42927_ip = 438;
                    continue _fun42927
                }
            case 432:
                var26 = var13.sections;
            case 438:
                if (!(var6 == var26)) {
                    _fun42927_ip = 444;
                    continue _fun42927
                }
            case 442:
                var26 = {};
            case 444:
                var25 = global;
                var13 = var25.Set;
                var18 = var13.prototype;
                var18 = Object.create(var18, {
                    constructor: {
                        value: var13
                    }
                });
                var50 = var18;
                var13 = new var50[var13](var49);
                var19 = var13 instanceof Object ? var13 : var18;
                if (!var9) {
                    _fun42927_ip = 615;
                    continue _fun42927
                }
            case 478:
                var9 = var15.hasBaseAccessPermissions;
                if (!var9) {
                    _fun42927_ip = 551;
                    continue _fun42927
                }
            case 487:
                var20 = var27;
                for (var9 in var20)
                    case 498: {
                        case 507: var23 = var9;
                        var24 = var27[var23];
                        var22 = var6 != var7;
                        if (!var22) {
                            _fun42927_ip = 536;
                            continue _fun42927
                        }
                        case 521: var24 = var24.descriptor;
                        var24 = var24.id;
                        var22 = var24 !== var7;
                        case 536: if (var22) {
                            _fun42927_ip = 498;
                            continue _fun42927
                        }
                        case 539: var22 = var19.add;
                        var22 = var22.bind(var19)(var23);
                        _fun42927_ip = 498;
                        continue _fun42927;
                    }
            case 551:
                var20 = var26;
                for (var9 in var20)
                    case 562: {
                        case 571: var23 = var9;
                        var24 = var26[var23];
                        var22 = var6 != var7;
                        if (!var22) {
                            _fun42927_ip = 600;
                            continue _fun42927
                        }
                        case 585: var24 = var24.descriptor;
                        var24 = var24.id;
                        var22 = var24 !== var7;
                        case 600: if (var22) {
                            _fun42927_ip = 562;
                            continue _fun42927
                        }
                        case 603: var22 = var19.add;
                        var22 = var22.bind(var19)(var23);
                        _fun42927_ip = 562;
                        continue _fun42927;
                    }
            case 615:
                var9 = var25.Map;
                var13 = var9.prototype;
                var13 = Object.create(var13, {
                    constructor: {
                        value: var9
                    }
                });
                var50 = var13;
                var9 = new var50[var9](var49);
                var24 = var9 instanceof Object ? var9 : var13;
                var9 = _closure1_slot38;
                var30 = var9.bind(var3)(var8);
                var18 = var30.bind(var3)();
                var9 = var18.done;
                var13 = 0;
                var29 = 2;
                var28 = 1;
                var23 = var18;
                var22 = undefined;
                var21 = undefined;
                var20 = undefined;
                var18 = undefined;
                if (var9) {
                    _fun42927_ip = 879;
                    continue _fun42927
                }
            case 684:
                var31 = var23.value;
                var9 = _closure1_slot4;
                var9 = var9.bind(var3)(var31, var29);
                var33 = var9[var13];
                var9 = var9[var28];
                if (!(var6 != var7)) {
                    _fun42927_ip = 724;
                    continue _fun42927
                }
            case 711:
                var32 = var20;
                var31 = var18;
                if (!(var33 === var7)) {
                    _fun42927_ip = 855;
                    continue _fun42927
                }
            case 724:
                var36 = var9.result;
                var9 = var6 == var36;
                var35 = undefined;
                if (var9) {
                    _fun42927_ip = 745;
                    continue _fun42927
                }
            case 739:
                var35 = var36.sections;
            case 745:
                var22 = var36;
                var21 = var35;
                var32 = var20;
                var31 = var18;
                if (!(var6 != var35)) {
                    _fun42927_ip = 855;
                    continue _fun42927
                }
            case 761:
                var33 = var25.Object;
                var9 = var33.keys;
                var34 = var9.bind(var33)(var35);
                var9 = var34.length;
                var9 = var13 < var9;
                var33 = 0;
                var22 = var36;
                var21 = var35;
                var32 = 0;
                var31 = var34;
                if (!var9) {
                    _fun42927_ip = 855;
                    continue _fun42927
                }
            case 802:
                var38 = var34[var33];
                var9 = var19.add;
                var9 = var9.bind(var19)(var38);
                var37 = var24.set;
                var9 = var35[var38];
                var9 = var37.bind(var24)(var38, var9);
                var33 = var33 + 1;
                var9 = var34.length;
                var22 = var36;
                var21 = var35;
                var31 = var34;
                var32 = var33;
                if (var32 < var9) {
                    _fun42927_ip = 802;
                    continue _fun42927
                }
            case 855:
                var33 = var30.bind(var3)();
                var9 = var33.done;
                var20 = var32;
                var18 = var31;
                var23 = var33;
                if (!var9) {
                    _fun42927_ip = 684;
                    continue _fun42927
                }
            case 879:
                var18 = var25.Array;
                var9 = var18.from;
                var23 = var9.bind(var18)(var19);
                var9 = var23.length;
                var9 = var13 < var9;
                var22 = 24;
                var21 = 'Failed to select application descriptor';
                var20 = 'Failed to select list of application commands';
                var19 = 0;
                var18 = undefined;
                if (!var9) {
                    _fun42927_ip = 1352;
                    continue _fun42927
                }
            case 929:
                var28 = var23[var19];
                var41 = var27[var28];
                var40 = var26[var28];
                var9 = var24.get;
                var9 = var9.bind(var24)(var28);
                var32 = var6 != var41;
                var31 = var6 != var40;
                if (!(var6 != var41)) {
                    _fun42927_ip = 970;
                    continue _fun42927
                }
            case 963:
                if (!(var6 == var40)) {
                    _fun42927_ip = 1103;
                    continue _fun42927
                }
            case 970:
                if (!(var6 == var41)) {
                    _fun42927_ip = 1067;
                    continue _fun42927
                }
            case 974:
                if (!(var6 == var40)) {
                    _fun42927_ip = 1031;
                    continue _fun42927
                }
            case 978:
                var33 = var6 != var9;
                var30 = undefined;
                var29 = undefined;
                var28 = var18;
                if (!var33) {
                    _fun42927_ip = 1249;
                    continue _fun42927
                }
            case 995:
                var30 = var9.descriptor;
                var35 = var25.Object;
                var34 = var35.values;
                var9 = var9.commands;
                var29 = var34.bind(var35)(var9);
                var28 = var18;
                _fun42927_ip = 1249;
                continue _fun42927;
            case 1031:
                var30 = var40.descriptor;
                var35 = var25.Object;
                var34 = var35.values;
                var9 = var40.commands;
                var29 = var34.bind(var35)(var9);
                var28 = var18;
                _fun42927_ip = 1249;
                continue _fun42927;
            case 1067:
                var30 = var41.descriptor;
                var35 = var25.Object;
                var34 = var35.values;
                var9 = var41.commands;
                var29 = var34.bind(var35)(var9);
                var28 = var18;
                _fun42927_ip = 1249;
                continue _fun42927;
            case 1103:
                var39 = var40.descriptor;
                var38 = new Array(0);
                var35 = var40.commands;
                for (var9 in var35)
                    case 1127: {
                        case 1136: var42 = var9;
                        var37 = var40.commands;
                        var42 = var37[var42];
                        var37 = var38.push;
                        var37 = var37.bind(var38)(var42);
                        _fun42927_ip = 1127;
                        continue _fun42927;
                    }
            case 1161:
                var36 = var41.commands;
                var9 = var18;
                var30 = var39;
                var29 = var38;
                var28 = var9;
                for (var33 in var36)
                    case 1187: {
                        var28 = var9;
                        var30 = var39;
                        var29 = var38;
                        case 1205: var42 = var33;
                        var43 = var40.commands;
                        var43 = var42 in var43;
                        var9 = var42;
                        if (var43) {
                            _fun42927_ip = 1187;
                            continue _fun42927
                        }
                        case 1224: var43 = var41.commands;
                        var44 = var43[var42];
                        var43 = var38.push;
                        var43 = var43.bind(var38)(var44);
                        var9 = var42;
                        _fun42927_ip = 1187;
                        continue _fun42927;
                    }
            case 1249:
                var33 = _closure1_slot1;
                var9 = _closure1_slot3;
                var34 = var9[var22];
                var35 = var33.bind(var3)(var34);
                var34 = var6 != var30;
                var34 = var35.bind(var3)(var34, var21);
                var9 = var9[var22];
                var33 = var33.bind(var3)(var9);
                var9 = var6 != var29;
                var9 = var33.bind(var3)(var9, var20);
                var9 = _closure1_slot53;
                var50 = undefined;
                var49 = var30;
                var48 = var29;
                var47 = var32;
                var46 = var31;
                var45 = var16;
                var29 = var50[var9](var49, var48, var47, var46, var45, var44);
                if (!(var6 != var29)) {
                    _fun42927_ip = 1334;
                    continue _fun42927
                }
            case 1324:
                var9 = var1.push;
                var9 = var9.bind(var1)(var29);
            case 1334:
                var19 = var19 + 1;
                var9 = var23.length;
                var18 = var28;
                if (var19 < var9) {
                    _fun42927_ip = 929;
                    continue _fun42927
                }
            case 1352:
                var9 = var10.applications;
                var9 = var9.useFrecency;
                if (!var9) {
                    _fun42927_ip = 1403;
                    continue _fun42927
                }
            case 1367:
                var18 = _closure1_slot0;
                var19 = _closure1_slot3;
                var9 = 33;
                var9 = var19[var9];
                var9 = var18.bind(var3)(var9);
                var18 = var9.FrecencyUserSettingsActionCreators;
                var9 = var18.loadIfNecessary;
                var9 = var9.bind(var18)();
            case 1403:
                var18 = var1.sort;
                var9 = function(arg0, arg1) { // Environment: var4
                    _fun42928: for (var _fun42928_ip = 0;;) switch (_fun42928_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var0 = _closure2_slot1;
                            var0 = var0.applications;
                            var0 = var0.useScore;
                            if (!var0) {
                                _fun42928_ip = 168;
                                continue _fun42928
                            }
                        case 31:
                            var3 = _closure2_slot0;
                            var6 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 28;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var6.bind(var0)(var1);
                            var1 = var1.ScoreMethod;
                            var1 = var1.APPLICATION_ONLY;
                            if (!(var3 === var1)) {
                                _fun42928_ip = 168;
                                continue _fun42928
                            }
                        case 76:
                            var1 = var5.data;
                            var7 = 0;
                            var6 = var1[var7];
                            var3 = null;
                            var8 = var3 == var6;
                            var1 = undefined;
                            if (var8) {
                                _fun42928_ip = 104;
                                continue _fun42928
                            }
                        case 98:
                            var1 = var6.score;
                        case 104:
                            if (!(var3 == var1)) {
                                _fun42928_ip = 122;
                                continue _fun42928
                            }
                        case 108:
                            var6 = global;
                            var6 = var6.Number;
                            var1 = var6.MAX_VALUE;
                        case 122:
                            var6 = var4.data;
                            var6 = var6[var7];
                            var7 = var3 == var6;
                            var0 = undefined;
                            if (var7) {
                                _fun42928_ip = 146;
                                continue _fun42928
                            }
                        case 140:
                            var0 = var6.score;
                        case 146:
                            if (!(var3 == var0)) {
                                _fun42928_ip = 164;
                                continue _fun42928
                            }
                        case 150:
                            var3 = global;
                            var3 = var3.Number;
                            var0 = var3.MAX_VALUE;
                        case 164:
                            if (!(var1 === var0)) {
                                _fun42928_ip = 287;
                                continue _fun42928
                            }
                        case 168:
                            var2 = _closure2_slot1;
                            var2 = var2.applications;
                            var2 = var2.useFrecency;
                            if (!var2) {
                                _fun42928_ip = 244;
                                continue _fun42928
                            }
                        case 187:
                            var7 = _closure1_slot12;
                            var6 = var7.getScoreWithoutLoadingLatest;
                            var3 = var5.section;
                            var3 = var3.id;
                            var3 = var6.bind(var7)(var3);
                            var7 = _closure1_slot12;
                            var6 = var7.getScoreWithoutLoadingLatest;
                            var2 = var4.section;
                            var2 = var2.id;
                            var2 = var6.bind(var7)(var2);
                            if (!(var3 === var2)) {
                                _fun42928_ip = 281;
                                continue _fun42928
                            }
                        case 244:
                            var7 = _closure1_slot62;
                            var5 = var5.section;
                            var6 = var5.name;
                            var4 = var4.section;
                            var5 = var4.name;
                            var4 = undefined;
                            var4 = var7.bind(var4)(var6, var5);
                            return var4;
                        case 281:
                            var2 = var2 - var3;
                            return var2;
                        case 287:
                            var0 = var1 - var0;
                            return var0;
                    }
                };
                var9 = var18.bind(var1)(var9);
                var9 = var17.length;
                if (!(!(var9 > var13))) {
                    _fun42927_ip = 1434;
                    continue _fun42927
                }
            case 1428:
                var9 = true;
                if (!(var9 === var11)) {
                    _fun42927_ip = 1508;
                    continue _fun42927
                }
            case 1434:
                var13 = _closure1_slot53;
                var11 = _closure1_slot0;
                var18 = _closure1_slot3;
                var9 = 32;
                var9 = var18[var9];
                var9 = var11.bind(var3)(var9);
                var11 = var9.BUILT_IN_SECTIONS;
                var9 = _closure1_slot20;
                var9 = var9.BUILT_IN;
                var49 = var11[var9];
                var50 = undefined;
                var48 = var17;
                var47 = true;
                var46 = true;
                var45 = var16;
                var11 = var50[var13](var49, var48, var47, var46, var45, var44);
                if (!(var6 != var11)) {
                    _fun42927_ip = 1508;
                    continue _fun42927
                }
            case 1498:
                var9 = var1.push;
                var9 = var9.bind(var1)(var11);
            case 1508:
                var11 = var1.flatMap;
                var9 = function(arg0) { // Environment: var4
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = var1.data;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = {};
                        var3 = arg0;
                        var4 = var0;
                        var1 = copyDataProperties(var4, var3);
                        var1 = _closure3_slot0;
                        var2 = var1.section;
                        var1 = 'section';
                        var0[var1] = var2;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var11.bind(var1)(var9);
                var13 = _closure1_slot0;
                var11 = _closure1_slot3;
                var11 = var11[var14];
                var11 = var13.bind(var3)(var11);
                var11 = var11.ScoreMethod;
                var11 = var11.COMMAND_ONLY;
                if (!(var12 !== var11)) {
                    _fun42927_ip = 1593;
                    continue _fun42927
                }
            case 1557:
                var13 = _closure1_slot0;
                var11 = _closure1_slot3;
                var11 = var11[var14];
                var11 = var13.bind(var3)(var11);
                var11 = var11.ScoreMethod;
                var11 = var11.COMMAND_OR_APPLICATION;
                if (!(var12 === var11)) {
                    _fun42927_ip = 1733;
                    continue _fun42927
                }
            case 1593:
                var12 = var15.context;
                var14 = _closure1_slot17;
                var13 = var14.getGuild;
                var16 = var6 == var15;
                var11 = undefined;
                if (var16) {
                    _fun42927_ip = 1635;
                    continue _fun42927
                }
            case 1616:
                var15 = var15.context;
                var16 = var6 == var15;
                var11 = undefined;
                if (var16) {
                    _fun42927_ip = 1635;
                    continue _fun42927
                }
            case 1630:
                var11 = var15.guild_id;
            case 1635:
                var11 = var13.bind(var14)(var11);
                var10 = var10.commands;
                var10 = var10.useFrecency;
                if (!var10) {
                    _fun42927_ip = 1691;
                    continue _fun42927
                }
            case 1655:
                var10 = _closure1_slot0;
                var13 = _closure1_slot3;
                var0 = 33;
                var0 = var13[var0];
                var0 = var10.bind(var3)(var0);
                var10 = var0.FrecencyUserSettingsActionCreators;
                var0 = var10.loadIfNecessary;
                var0 = var0.bind(var10)();
            case 1691:
                var10 = var6 != var12;
                var0 = undefined;
                if (!var10) {
                    _fun42927_ip = 1713;
                    continue _fun42927
                }
            case 1700:
                var10 = {};
                var10.channel = var12;
                var10.guild = var11;
                var0 = var10;
            case 1713:
                _closure2_slot2 = var0;
                var10 = var9.sort;
                var0 = function(arg0, arg1) { // Environment: var4
                    _fun42931: for (var _fun42931_ip = 0;;) switch (_fun42931_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var0 = _closure2_slot1;
                            var0 = var0.commands;
                            var0 = var0.useScore;
                            if (!var0) {
                                _fun42931_ip = 70;
                                continue _fun42931
                            }
                        case 28:
                            var3 = var5.score;
                            var6 = null;
                            var7 = var6 != var3;
                            var0 = 0;
                            if (!var7) {
                                _fun42931_ip = 48;
                                continue _fun42931
                            }
                        case 45:
                            var0 = var3;
                        case 48:
                            var3 = var4.score;
                            var6 = var6 != var3;
                            var1 = 0;
                            if (!var6) {
                                _fun42931_ip = 66;
                                continue _fun42931
                            }
                        case 63:
                            var1 = var3;
                        case 66:
                            if (!(var0 === var1)) {
                                _fun42931_ip = 169;
                                continue _fun42931
                            }
                        case 70:
                            var3 = _closure2_slot1;
                            var3 = var3.commands;
                            var3 = var3.useFrecency;
                            if (!var3) {
                                _fun42931_ip = 136;
                                continue _fun42931
                            }
                        case 89:
                            var8 = _closure1_slot19;
                            var7 = var8.getScoreWithoutLoadingLatest;
                            var3 = _closure2_slot2;
                            var3 = var7.bind(var8)(var3, var5);
                            var7 = _closure1_slot19;
                            var6 = var7.getScoreWithoutLoadingLatest;
                            var2 = _closure2_slot2;
                            var2 = var6.bind(var7)(var2, var4);
                            if (!(var3 === var2)) {
                                _fun42931_ip = 163;
                                continue _fun42931
                            }
                        case 136:
                            var7 = _closure1_slot62;
                            var6 = var5.displayName;
                            var5 = var4.displayName;
                            var4 = undefined;
                            var4 = var7.bind(var4)(var6, var5);
                            return var4;
                        case 163:
                            var2 = var2 - var3;
                            return var2;
                        case 169:
                            var0 = var0 - var1;
                            return var0;
                    }
                };
                var0 = var10.bind(var9)(var0);
            case 1733:
                var0 = {};
                var0.commands = var9;
                var9 = var1.map;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.section;
                    return var0;
                };
                var4 = var9.bind(var1)(var4);
                var0.descriptors = var4;
                var0.sectionedCommands = var1;
                var4 = var6 == var2;
                var1 = undefined;
                if (var4) {
                    _fun42927_ip = 1786;
                    continue _fun42927
                }
            case 1774:
                var2 = var2.fetchState;
                var1 = var2.fetching;
            case 1786:
                var4 = true;
                var1 = var4 === var1;
                if (var1) {
                    _fun42927_ip = 1820;
                    continue _fun42927
                }
            case 1795:
                var9 = var6 == var5;
                var2 = undefined;
                if (var9) {
                    _fun42927_ip = 1816;
                    continue _fun42927
                }
            case 1804:
                var5 = var5.fetchState;
                var2 = var5.fetching;
            case 1816:
                var1 = var4 === var2;
            case 1820:
                if (var1) {
                    _fun42927_ip = 1868;
                    continue _fun42927
                }
            case 1823:
                var2 = var6 != var7;
                if (!var2) {
                    _fun42927_ip = 1865;
                    continue _fun42927
                }
            case 1830:
                var5 = var8.get;
                var5 = var5.bind(var8)(var7);
                var6 = var6 == var5;
                var3 = undefined;
                if (var6) {
                    _fun42927_ip = 1861;
                    continue _fun42927
                }
            case 1849:
                var5 = var5.fetchState;
                var3 = var5.fetching;
            case 1861:
                var2 = var4 === var3;
            case 1865:
                var1 = var2;
            case 1868:
                var0.loading = var1;
                return var0;
        }
    };
    var _closure1_slot52 = var0;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun42933: for (var _fun42933_ip = 0;;) switch (_fun42933_ip) {
            case 0:
                var3 = arg0;
                var18 = arg2;
                var16 = arg3;
                var0 = arg4;
                var17 = var0.query;
                var11 = var0.splitQuery;
                var1 = var0.allowEmptySections;
                var5 = var0.scoreMethod;
                var15 = var0.permissionContext;
                var14 = var0.installOnDemand;
                var9 = var15.context;
                var19 = var15.userId;
                var12 = var15.roleIds;
                var10 = var15.isImpersonating;
                var0 = null;
                var4 = var0 == var9;
                var7 = undefined;
                var2 = undefined;
                if (var4) {
                    _fun42933_ip = 88;
                    continue _fun42933
                }
            case 83:
                var2 = var9.guild_id;
            case 88:
                var2 = var0 != var2;
                var13 = null;
                if (!var2) {
                    _fun42933_ip = 153;
                    continue _fun42933
                }
            case 97:
                var4 = _closure1_slot2;
                var6 = _closure1_slot3;
                var2 = 34;
                var2 = var6[var2];
                var8 = var4.bind(var7)(var2);
                var6 = var8.computeAllowedForUser;
                var28 = var3.permissions;
                var27 = var9.guild_id;
                var29 = var8;
                var26 = var19;
                var25 = var12;
                var24 = var10;
                var13 = var29[var6](var28, var27, var26, var25, var24, var23);
            case 153:
                var4 = var0 == var9;
                var2 = undefined;
                if (var4) {
                    _fun42933_ip = 167;
                    continue _fun42933
                }
            case 162:
                var2 = var9.guild_id;
            case 167:
                var2 = var0 != var2;
                var12 = null;
                if (!var2) {
                    _fun42933_ip = 223;
                    continue _fun42933
                }
            case 176:
                var4 = _closure1_slot2;
                var6 = _closure1_slot3;
                var2 = 34;
                var2 = var6[var2];
                var8 = var4.bind(var7)(var2);
                var6 = var8.computeAllowedForChannel;
                var4 = var3.permissions;
                var2 = var9.guild_id;
                var12 = var6.bind(var8)(var4, var9, var2);
            case 223:
                var9 = new Array(0);
                var6 = _closure1_slot38;
                var2 = arg1;
                var10 = var6.bind(var7)(var2);
                var6 = var10.bind(var7)();
                var2 = var6.done;
                var8 = 34;
                if (var2) {
                    _fun42933_ip = 398;
                    continue _fun42933
                }
            case 260:
                var19 = var6.value;
                var20 = _closure1_slot2;
                var2 = _closure1_slot3;
                var2 = var2[var8];
                var21 = var20.bind(var7)(var2);
                var20 = var21.hasAccess;
                var2 = {};
                var2.applicationAllowedForUser = var13;
                var2.applicationAllowedForChannel = var12;
                var22 = var3.botId;
                var2.commandBotId = var22;
                var2.isGuildInstalled = var18;
                var22 = var16;
                if (var22) {
                    _fun42933_ip = 325;
                    continue _fun42933
                }
            case 322:
                var22 = var14;
            case 325:
                var2.isUserInstalled = var22;
                var20 = var20.bind(var21)(var19, var15, var2);
                var21 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var8];
                var2 = var21.bind(var7)(var2);
                var2 = var2.HasAccessResult;
                var2 = var2.ALLOWED;
                if (!(var20 === var2)) {
                    _fun42933_ip = 380;
                    continue _fun42933
                }
            case 370:
                var2 = var9.push;
                var2 = var2.bind(var9)(var19);
            case 380:
                var19 = var10.bind(var7)();
                var2 = var19.done;
                var6 = var19;
                if (!var2) {
                    _fun42933_ip = 260;
                    continue _fun42933
                }
            case 398:
                var6 = _closure1_slot0;
                var2 = _closure1_slot3;
                var8 = 28;
                var2 = var2[var8];
                var2 = var6.bind(var7)(var2);
                var2 = var2.ScoreMethod;
                var6 = var2.NONE;
                var2 = var9;
                if (!(var5 !== var6)) {
                    _fun42933_ip = 920;
                    continue _fun42933
                }
            case 440:
                var2 = var9;
                if (!(var0 != var17)) {
                    _fun42933_ip = 920;
                    continue _fun42933
                }
            case 450:
                var2 = var9;
                if (!(var0 != var11)) {
                    _fun42933_ip = 920;
                    continue _fun42933
                }
            case 460:
                var16 = new Array(0);
                var10 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var8];
                var6 = var10.bind(var7)(var6);
                var6 = var6.ScoreMethod;
                var6 = var6.APPLICATION_ONLY;
                if (!(var5 !== var6)) {
                    _fun42933_ip = 535;
                    continue _fun42933
                }
            case 497:
                var10 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var8];
                var6 = var10.bind(var7)(var6);
                var6 = var6.ScoreMethod;
                var6 = var6.COMMAND_OR_APPLICATION;
                var15 = undefined;
                if (!(var5 === var6)) {
                    _fun42933_ip = 671;
                    continue _fun42933
                }
            case 535:
                var10 = var3.name;
                var6 = var10.toLocaleLowerCase;
                var10 = var6.bind(var10)();
                var6 = var10.startsWith;
                var6 = var6.bind(var10)(var17);
                if (var6) {
                    _fun42933_ip = 661;
                    continue _fun42933
                }
            case 564:
                var6 = var10.includes;
                var6 = var6.bind(var10)(var17);
                if (var6) {
                    _fun42933_ip = 649;
                    continue _fun42933
                }
            case 577:
                var6 = var3.application;
                var10 = var0 == var6;
                var12 = undefined;
                if (var10) {
                    _fun42933_ip = 615;
                    continue _fun42933
                }
            case 591:
                var10 = var6.description;
                var6 = var0 == var10;
                var12 = undefined;
                if (var6) {
                    _fun42933_ip = 615;
                    continue _fun42933
                }
            case 605:
                var6 = var10.toLocaleLowerCase;
                var12 = var6.bind(var10)();
            case 615:
                var6 = var0 != var12;
                if (!var6) {
                    _fun42933_ip = 632;
                    continue _fun42933
                }
            case 622:
                var10 = var12.includes;
                var6 = var10.bind(var12)(var17);
            case 632:
                var15 = undefined;
                if (!var6) {
                    _fun42933_ip = 671;
                    continue _fun42933
                }
            case 637:
                var6 = _closure1_slot36;
                var15 = var6.SECTION_DESCRIPTION_CONTAINS;
                _fun42933_ip = 671;
                continue _fun42933;
            case 649:
                var6 = _closure1_slot36;
                var15 = var6.SECTION_NAME_CONTAINS;
                _fun42933_ip = 671;
                continue _fun42933;
            case 661:
                var6 = _closure1_slot36;
                var15 = var6.SECTION_NAME_STARTS_WITH;
            case 671:
                var6 = 0;
                var14 = var11[var6];
                var10 = var11.slice;
                var6 = 1;
                var11 = var10.bind(var11)(var6);
                var10 = var11.join;
                var6 = ' ';
                var13 = var10.bind(var11)(var6);
                var6 = _closure1_slot38;
                var12 = var6.bind(var7)(var9);
                var9 = var12.bind(var7)();
                var6 = var9.done;
                var11 = 'score';
                var10 = var7 !== var15;
                var2 = var16;
                if (var6) {
                    _fun42933_ip = 920;
                    continue _fun42933
                }
            case 741:
                var20 = var9.value;
                var18 = _closure1_slot0;
                var6 = _closure1_slot3;
                var6 = var6[var8];
                var6 = var18.bind(var7)(var6);
                var6 = var6.ScoreMethod;
                var6 = var6.COMMAND_ONLY;
                var6 = var5 !== var6;
                if (!var6) {
                    _fun42933_ip = 815;
                    continue _fun42933
                }
            case 782:
                var19 = _closure1_slot0;
                var18 = _closure1_slot3;
                var18 = var18[var8];
                var18 = var19.bind(var7)(var18);
                var18 = var18.ScoreMethod;
                var18 = var18.COMMAND_OR_APPLICATION;
                var6 = var5 !== var18;
            case 815:
                var19 = undefined;
                if (var6) {
                    _fun42933_ip = 842;
                    continue _fun42933
                }
            case 820:
                var6 = _closure1_slot61;
                var29 = undefined;
                var28 = var20;
                var27 = var17;
                var26 = var14;
                var25 = var13;
                var19 = var29[var6](var28, var27, var26, var25, var24);
            case 842:
                var6 = var7 === var19;
                if (var6) {
                    _fun42933_ip = 862;
                    continue _fun42933
                }
            case 849:
                var18 = var10;
                if (!var18) {
                    _fun42933_ip = 859;
                    continue _fun42933
                }
            case 855:
                var18 = var15 < var19;
            case 859:
                var6 = var18;
            case 862:
                if (!var6) {
                    _fun42933_ip = 868;
                    continue _fun42933
                }
            case 865:
                var19 = var15;
            case 868:
                if (!(var7 !== var19)) {
                    _fun42933_ip = 899;
                    continue _fun42933
                }
            case 872:
                var18 = var16.push;
                var6 = {};
                var28 = var6;
                var27 = var20;
                var20 = copyDataProperties(var28, var27);
                var6[var11] = var19;
                var6 = var18.bind(var16)(var6);
            case 899:
                var18 = var12.bind(var7)();
                var6 = var18.done;
                var9 = var18;
                var2 = var16;
                if (!var6) {
                    _fun42933_ip = 741;
                    continue _fun42933
                }
            case 920:
                var9 = var2.length;
                var6 = 0;
                if (!(var6 === var9)) {
                    _fun42933_ip = 936;
                    continue _fun42933
                }
            case 931:
                var0 = null;
                if (!var1) {
                    _fun42933_ip = 1039;
                    continue _fun42933
                }
            case 936:
                var6 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var8];
                var1 = var6.bind(var7)(var1);
                var1 = var1.ScoreMethod;
                var1 = var1.NONE;
                var1 = var5 !== var1;
                if (!var1) {
                    _fun42933_ip = 1005;
                    continue _fun42933
                }
            case 972:
                var6 = _closure1_slot0;
                var4 = _closure1_slot3;
                var4 = var4[var8];
                var4 = var6.bind(var7)(var4);
                var4 = var4.ScoreMethod;
                var4 = var4.APPLICATION_ONLY;
                var1 = var5 !== var4;
            case 1005:
                if (var1) {
                    _fun42933_ip = 1026;
                    continue _fun42933
                }
            case 1008:
                var4 = var2.sort;
                var1 = function(arg0, arg1) { // Environment: var1
                    var3 = _closure1_slot62;
                    var0 = arg0;
                    var2 = var0.displayName;
                    var0 = arg1;
                    var1 = var0.displayName;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1 = var4.bind(var2)(var1);
            case 1026:
                var1 = {};
                var1.section = var3;
                var1.data = var2;
                var0 = var1;
            case 1039:
                return var0;
        }
    };
    var _closure1_slot53 = var0;
    var0 = function arg0() {
        _fun42935: for (var _fun42935_ip = 0;;) switch (_fun42935_ip) {
            case 0:
                var7 = arg0;
                var4 = null;
                var1 = var4 == var7;
                var0 = undefined;
                if (var1) {
                    _fun42935_ip = 19;
                    continue _fun42935
                }
            case 14:
                var0 = var7.guild_id;
            case 19:
                var0 = var4 != var0;
                if (var0) {
                    _fun42935_ip = 100;
                    continue _fun42935
                }
            case 26:
                var5 = var7.type;
                var1 = _closure1_slot23;
                var1 = var1.DM;
                var1 = var5 === var1;
                if (!var1) {
                    _fun42935_ip = 97;
                    continue _fun42935
                }
            case 51:
                var6 = _closure1_slot18;
                var5 = var6.getUser;
                var2 = var7.getRecipientId;
                var2 = var2.bind(var7)();
                var2 = var5.bind(var6)(var2);
                var4 = var4 == var2;
                var3 = undefined;
                if (var4) {
                    _fun42935_ip = 91;
                    continue _fun42935
                }
            case 85:
                var3 = var2.bot;
            case 91:
                var2 = true;
                var1 = var2 === var3;
            case 97:
                var0 = var1;
            case 100:
                return var0;
        }
    };
    var _closure1_slot54 = var0;
    var0 = function arg0() {
        _fun42936: for (var _fun42936_ip = 0;;) switch (_fun42936_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot56;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                var0 = !var1;
                if (!var1) {
                    _fun42936_ip = 35;
                    continue _fun42936
                }
            case 23:
                var1 = var2.fetchState;
                var0 = var1.fetching;
            case 35:
                var0 = !var0;
                if (!var0) {
                    _fun42936_ip = 98;
                    continue _fun42936
                }
            case 41:
                var1 = var2.fetchState;
                var3 = var1.retryAfter;
                var1 = null;
                var1 = var1 == var3;
                if (var1) {
                    _fun42936_ip = 95;
                    continue _fun42936
                }
            case 62:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var2 = var2.fetchState;
                var2 = var2.retryAfter;
                var1 = var3 >= var2;
            case 95:
                var0 = var1;
            case 98:
                return var0;
        }
    };
    var _closure1_slot55 = var0;
    var3 = function arg0() {
        _fun42937: for (var _fun42937_ip = 0;;) switch (_fun42937_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.result;
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if (var3) {
                    _fun42937_ip = 26;
                    continue _fun42937
                }
            case 20:
                var1 = var2.version;
            case 26:
                var0 = var0.serverVersion;
                var0 = var1 !== var0;
                return var0;
        }
    };
    var _closure1_slot56 = var3;
    var0 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.description;
        var0.description = var2;
        var2 = var1.icon;
        var0.icon = var2;
        var2 = var1.id;
        var0.id = var2;
        var2 = var1.name;
        var0.name = var2;
        var2 = var1.bot;
        var0.bot = var2;
        var1 = var1.flags;
        var0.flags = var1;
        return var0;
    };
    var _closure1_slot57 = var0;
    var0 = function arg0() {
        _fun42939: for (var _fun42939_ip = 0;;) switch (_fun42939_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var9 = var0;
                var8 = var1;
                var2 = copyDataProperties(var9, var8);
                var7 = var1.choices;
                var2 = null;
                var4 = var2 == var7;
                var5 = undefined;
                if (var4) {
                    _fun42939_ip = 49;
                    continue _fun42939
                }
            case 32:
                var6 = var7.map;
                var4 = _closure1_slot59;
                var5 = var6.bind(var7)(var4);
            case 49:
                var4 = 'choices';
                var0[var4] = var5;
                var5 = var1.description_default;
                if (!(var2 == var5)) {
                    _fun42939_ip = 73;
                    continue _fun42939
                }
            case 68:
                var5 = var1.description;
            case 73:
                var4 = 'description';
                var0[var4] = var5;
                var5 = var1.name_default;
                if (!(var2 == var5)) {
                    _fun42939_ip = 97;
                    continue _fun42939
                }
            case 92:
                var5 = var1.name;
            case 97:
                var4 = 'name';
                var0[var4] = var5;
                var5 = var1.options;
                var2 = var2 == var5;
                var3 = undefined;
                if (var2) {
                    _fun42939_ip = 137;
                    continue _fun42939
                }
            case 120:
                var4 = var5.map;
                var2 = _closure1_slot58;
                var3 = var4.bind(var5)(var2);
            case 137:
                var2 = 'options';
                var0[var2] = var3;
                var3 = var1.description;
                var2 = var1.description_default;
                if (!(var3 !== var2)) {
                    _fun42939_ip = 172;
                    continue _fun42939
                }
            case 161:
                var2 = var1.description;
                var0.description_localized = var2;
            case 172:
                var3 = var1.name;
                var2 = var1.name_default;
                if (!(var3 !== var2)) {
                    _fun42939_ip = 198;
                    continue _fun42939
                }
            case 187:
                var1 = var1.name;
                var0.name_localized = var1;
            case 198:
                return var0;
        }
    };
    var _closure1_slot58 = var0;
    var0 = function arg0() {
        _fun42940: for (var _fun42940_ip = 0;;) switch (_fun42940_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var5 = var0;
                var4 = var1;
                var2 = copyDataProperties(var5, var4);
                var3 = var1.name_default;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun42940_ip = 32;
                    continue _fun42940
                }
            case 27:
                var3 = var1.name;
            case 32:
                var2 = 'name';
                var0[var2] = var3;
                var3 = var1.name;
                var2 = var1.name_default;
                if (!(var3 !== var2)) {
                    _fun42940_ip = 67;
                    continue _fun42940
                }
            case 56:
                var1 = var1.name;
                var0.name_localized = var1;
            case 67:
                return var0;
        }
    };
    var _closure1_slot59 = var0;
    var0 = function arg0, arg1() {
        _fun42941: for (var _fun42941_ip = 0;;) switch (_fun42941_ip) {
            case 0:
                var1 = arg0;
                var0 = new Array(0);
                var2 = var1.user;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun42941_ip = 88;
                    continue _fun42941
                }
            case 18:
                var4 = var0.push;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var5 = 35;
                var6 = var6[var5];
                var5 = undefined;
                var5 = var7.bind(var5)(var6);
                var5 = var5.ApplicationCommandPermissionType;
                var5 = var5.USER;
                var2.type = var5;
                var5 = arg1;
                var2.id = var5;
                var5 = var1.user;
                var2.permission = var5;
                var2 = var4.bind(var0)(var2);
            case 88:
                var2 = var1.channels;
                if (!(var3 != var2)) {
                    _fun42941_ip = 244;
                    continue _fun42941
                }
            case 101:
                var2 = global;
                var5 = var2.Object;
                var4 = var5.entries;
                var2 = var1.channels;
                var11 = var4.bind(var5)(var2);
                var2 = var11.length;
                var10 = 0;
                var2 = var10 < var2;
                var8 = undefined;
                var7 = 2;
                var6 = 1;
                var5 = 35;
                var4 = 0;
                if (!var2) {
                    _fun42941_ip = 244;
                    continue _fun42941
                }
            case 156:
                var12 = var11[var4];
                var2 = _closure1_slot4;
                var2 = var2.bind(var8)(var12, var7);
                var14 = var2[var10];
                var13 = var2[var6];
                var12 = var0.push;
                var2 = {};
                var16 = _closure1_slot0;
                var15 = _closure1_slot3;
                var15 = var15[var5];
                var15 = var16.bind(var8)(var15);
                var15 = var15.ApplicationCommandPermissionType;
                var15 = var15.CHANNEL;
                var2.type = var15;
                var2.id = var14;
                var2.permission = var13;
                var2 = var12.bind(var0)(var2);
                var4 = var4 + 1;
                var2 = var11.length;
                if (var4 < var2) {
                    _fun42941_ip = 156;
                    continue _fun42941
                }
            case 244:
                var2 = var1.roles;
                if (!(var3 != var2)) {
                    _fun42941_ip = 400;
                    continue _fun42941
                }
            case 257:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.entries;
                var1 = var1.roles;
                var9 = var2.bind(var3)(var1);
                var1 = var9.length;
                var8 = 0;
                var1 = var8 < var1;
                var6 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = 35;
                var2 = 0;
                if (!var1) {
                    _fun42941_ip = 400;
                    continue _fun42941
                }
            case 312:
                var10 = var9[var2];
                var1 = _closure1_slot4;
                var1 = var1.bind(var6)(var10, var5);
                var12 = var1[var8];
                var11 = var1[var4];
                var10 = var0.push;
                var1 = {};
                var14 = _closure1_slot0;
                var13 = _closure1_slot3;
                var13 = var13[var3];
                var13 = var14.bind(var6)(var13);
                var13 = var13.ApplicationCommandPermissionType;
                var13 = var13.ROLE;
                var1.type = var13;
                var1.id = var12;
                var1.permission = var11;
                var1 = var10.bind(var0)(var1);
                var2 = var2 + 1;
                var1 = var9.length;
                if (var2 < var1) {
                    _fun42941_ip = 312;
                    continue _fun42941
                }
            case 400:
                return var0;
        }
    };
    var _closure1_slot60 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun42942: for (var _fun42942_ip = 0;;) switch (_fun42942_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var1 = arg2;
                var3 = arg3;
                var5 = var2.untranslatedName;
                var0 = var5.toLocaleLowerCase;
                var15 = var0.bind(var5)();
                var5 = var2.displayName;
                var0 = var5.toLocaleLowerCase;
                var14 = var0.bind(var5)();
                var0 = var15.startsWith;
                var0 = var0.bind(var15)(var4);
                if (var0) {
                    _fun42942_ip = 729;
                    continue _fun42942
                }
            case 60:
                var0 = var14.startsWith;
                var0 = var0.bind(var14)(var4);
                if (var0) {
                    _fun42942_ip = 729;
                    continue _fun42942
                }
            case 77:
                var0 = var15.startsWith;
                var0 = var0.bind(var15)(var1);
                if (!var0) {
                    _fun42942_ip = 147;
                    continue _fun42942
                }
            case 91:
                var0 = var15.split;
                var6 = ' ';
                var7 = var0.bind(var15)(var6);
                var5 = var7.slice;
                var0 = 1;
                var5 = var5.bind(var7)(var0);
                var0 = var5.join;
                var5 = var0.bind(var5)(var6);
                var0 = var5.startsWith;
                var0 = var0.bind(var5)(var3);
                if (var0) {
                    _fun42942_ip = 714;
                    continue _fun42942
                }
            case 147:
                var0 = var14.startsWith;
                var0 = var0.bind(var14)(var1);
                if (!var0) {
                    _fun42942_ip = 217;
                    continue _fun42942
                }
            case 161:
                var0 = var14.split;
                var5 = ' ';
                var6 = var0.bind(var14)(var5);
                var1 = var6.slice;
                var0 = 1;
                var1 = var1.bind(var6)(var0);
                var0 = var1.join;
                var1 = var0.bind(var1)(var5);
                var0 = var1.startsWith;
                var0 = var0.bind(var1)(var3);
                if (var0) {
                    _fun42942_ip = 699;
                    continue _fun42942
                }
            case 217:
                var0 = var15.includes;
                var0 = var0.bind(var15)(var4);
                if (var0) {
                    _fun42942_ip = 684;
                    continue _fun42942
                }
            case 233:
                var13 = null;
                if (!(var13 != var14)) {
                    _fun42942_ip = 255;
                    continue _fun42942
                }
            case 239:
                var0 = var14.includes;
                var0 = var0.bind(var14)(var4);
                if (var0) {
                    _fun42942_ip = 684;
                    continue _fun42942
                }
            case 255:
                var5 = _closure1_slot38;
                var3 = var2.options;
                if (!(var13 == var3)) {
                    _fun42942_ip = 275;
                    continue _fun42942
                }
            case 271:
                var3 = new Array(0);
            case 275:
                var1 = undefined;
                var12 = var5.bind(var1)(var3);
                var6 = var12.bind(var1)();
                var5 = var6.done;
                var10 = global;
                var9 = '';
                var8 = ' ';
                var7 = var6;
                var6 = false;
                var3 = false;
                if (var5) {
                    _fun42942_ip = 597;
                    continue _fun42942
                }
            case 316:
                var5 = var7.value;
                var16 = var5.name;
                var18 = var5.serverLocalizedName;
                var5 = var16.startsWith;
                var5 = var5.bind(var16)(var4);
                if (var5) {
                    _fun42942_ip = 585;
                    continue _fun42942
                }
            case 349:
                var5 = var10.HermesInternal;
                var5 = var5.concat;
                var17 = var5.bind(var9)(var15, var8, var16);
                var5 = var17.startsWith;
                var5 = var5.bind(var17)(var4);
                if (var5) {
                    _fun42942_ip = 585;
                    continue _fun42942
                }
            case 384:
                if (!(var13 != var14)) {
                    _fun42942_ip = 423;
                    continue _fun42942
                }
            case 388:
                var5 = var10.HermesInternal;
                var5 = var5.concat;
                var17 = var5.bind(var9)(var14, var8, var16);
                var5 = var17.startsWith;
                var5 = var5.bind(var17)(var4);
                if (var5) {
                    _fun42942_ip = 585;
                    continue _fun42942
                }
            case 423:
                if (!(var13 != var18)) {
                    _fun42942_ip = 512;
                    continue _fun42942
                }
            case 427:
                var5 = var18.startsWith;
                var5 = var5.bind(var18)(var4);
                if (var5) {
                    _fun42942_ip = 573;
                    continue _fun42942
                }
            case 444:
                var5 = var10.HermesInternal;
                var5 = var5.concat;
                var17 = var5.bind(var9)(var15, var8, var18);
                var5 = var17.startsWith;
                var5 = var5.bind(var17)(var4);
                if (var5) {
                    _fun42942_ip = 573;
                    continue _fun42942
                }
            case 476:
                if (!(var13 != var14)) {
                    _fun42942_ip = 512;
                    continue _fun42942
                }
            case 480:
                var5 = var10.HermesInternal;
                var5 = var5.concat;
                var17 = var5.bind(var9)(var14, var8, var18);
                var5 = var17.startsWith;
                var5 = var5.bind(var17)(var4);
                if (var5) {
                    _fun42942_ip = 573;
                    continue _fun42942
                }
            case 512:
                var5 = var16.includes;
                var5 = var5.bind(var16)(var4);
                if (var5) {
                    _fun42942_ip = 545;
                    continue _fun42942
                }
            case 525:
                var16 = var13 != var18;
                if (!var16) {
                    _fun42942_ip = 542;
                    continue _fun42942
                }
            case 532:
                var17 = var18.includes;
                var16 = var17.bind(var18)(var4);
            case 542:
                var5 = var16;
            case 545:
                if (!var5) {
                    _fun42942_ip = 550;
                    continue _fun42942
                }
            case 548:
                var6 = true;
            case 550:
                var17 = var12.bind(var1)();
                var5 = var17.done;
                var7 = var17;
                var3 = var6;
                if (var5) {
                    _fun42942_ip = 597;
                    continue _fun42942
                }
            case 568:
                _fun42942_ip = 316;
                continue _fun42942;
            case 573:
                var5 = _closure1_slot36;
                var5 = var5.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME;
                return var5;
            case 585:
                var5 = _closure1_slot36;
                var5 = var5.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME;
                return var5;
            case 597:
                if (var3) {
                    _fun42942_ip = 672;
                    continue _fun42942
                }
            case 600:
                var5 = var2.untranslatedDescription;
                var3 = var5.toLocaleLowerCase;
                var5 = var3.bind(var5)();
                var3 = var2.displayDescription;
                var2 = var3.toLocaleLowerCase;
                var3 = var2.bind(var3)();
                var2 = var5.includes;
                var2 = var2.bind(var5)(var4);
                if (var2) {
                    _fun42942_ip = 660;
                    continue _fun42942
                }
            case 645:
                var2 = var3.includes;
                var2 = var2.bind(var3)(var4);
                var1 = undefined;
                if (!var2) {
                    _fun42942_ip = 670;
                    continue _fun42942
                }
            case 660:
                var2 = _closure1_slot36;
                var1 = var2.COMMAND_DESCRIPTION_CONTAINS;
            case 670:
                return var1;
            case 672:
                var0 = _closure1_slot36;
                var0 = var0.OPTION_NAME_CONTAINS;
                return var0;
            case 684:
                var0 = _closure1_slot36;
                var0 = var0.COMMAND_NAME_CONTAINS;
                return var0;
            case 699:
                var0 = _closure1_slot36;
                var0 = var0.STARTS_WITH_COMMAND_NAME;
                return var0;
            case 714:
                var0 = _closure1_slot36;
                var0 = var0.STARTS_WITH_COMMAND_NAME;
                return var0;
            case 729:
                var0 = _closure1_slot36;
                var0 = var0.COMMAND_NAME_STARTS_WITH;
                return var0;
        }
    };
    var _closure1_slot61 = var0;
    var0 = function arg0, arg1() {
        var0 = _closure1_slot34;
        var3 = var0.collator;
        var2 = var3.compare;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot62 = var0;
    var8 = global;
    var14 = var8.Object;
    var13 = var14.defineProperty;
    var7 = {};
    var27 = true;
    var7.value = var27;
    var0 = '__esModule';
    var0 = var13.bind(var14)(var2, var0, var7);
    var20 = 0;
    var7 = var10[var20];
    var0 = undefined;
    var7 = var21.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var19 = 1;
    var7 = var10[var19];
    var7 = var21.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var18 = 2;
    var7 = var10[var18];
    var7 = var21.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var17 = 3;
    var7 = var10[var17];
    var7 = var21.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var16 = 4;
    var7 = var10[var16];
    var7 = var21.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var15 = 5;
    var7 = var10[var15];
    var7 = var21.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var14 = 6;
    var7 = var10[var14];
    var7 = var21.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var13 = 7;
    var7 = var10[var13];
    var7 = var12.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var12 = 8;
    var7 = var10[var12];
    var7 = var21.bind(var0)(var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var10[var7];
    var7 = var21.bind(var0)(var7);
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var10[var7];
    var7 = var21.bind(var0)(var7);
    var _closure1_slot14 = var7;
    var7 = 11;
    var7 = var10[var7];
    var7 = var21.bind(var0)(var7);
    var _closure1_slot15 = var7;
    var7 = 12;
    var7 = var10[var7];
    var7 = var21.bind(var0)(var7);
    var _closure1_slot16 = var7;
    var7 = 13;
    var7 = var10[var7];
    var7 = var21.bind(var0)(var7);
    var _closure1_slot17 = var7;
    var7 = 14;
    var7 = var10[var7];
    var7 = var21.bind(var0)(var7);
    var _closure1_slot18 = var7;
    var7 = 15;
    var7 = var10[var7];
    var7 = var21.bind(var0)(var7);
    var _closure1_slot19 = var7;
    var7 = 16;
    var7 = var10[var7];
    var7 = var9.bind(var0)(var7);
    var22 = var7.BuiltInSectionId;
    var _closure1_slot20 = var22;
    var7 = var7.DISCOVERY_COMMANDS_FRECENCY_LIMIT;
    var _closure1_slot21 = var7;
    var7 = 17;
    var7 = var10[var7];
    var7 = var9.bind(var0)(var7);
    var22 = var7.AnalyticEvents;
    var _closure1_slot22 = var22;
    var7 = var7.ChannelTypes;
    var _closure1_slot23 = var7;
    var7 = 18;
    var7 = var10[var7];
    var22 = var21.bind(var0)(var7);
    var7 = var22.prototype;
    var25 = Object.create(var7, {
        constructor: {
            value: var22
        }
    });
    var7 = 'ApplicationCommandIndexStore';
    var35 = var25;
    var34 = var7;
    var22 = new var35[var22](var34, var33);
    var22 = var22 instanceof Object ? var22 : var25;
    var _closure1_slot24 = var22;
    var25 = var8.Symbol;
    var22 = 'currentUser';
    var22 = var25.bind(var0)(var22);
    var _closure1_slot25 = var22;
    var25 = var8.Symbol;
    var22 = 'stale';
    var28 = var25.bind(var0)(var22);
    var _closure1_slot26 = var28;
    var25 = var8.Symbol;
    var22 = 'current';
    var30 = var25.bind(var0)(var22);
    var _closure1_slot27 = var30;
    var26 = var8.Object;
    var25 = var26.freeze;
    var22 = {};
    var29 = new Array(0);
    var22.descriptors = var29;
    var29 = new Array(0);
    var22.commands = var29;
    var29 = new Array(0);
    var22.sectionedCommands = var29;
    var22.loading = var27;
    var22 = var25.bind(var26)(var22);
    var _closure1_slot28 = var22;
    var27 = var8.Object;
    var26 = var27.freeze;
    var25 = {};
    var25.serverVersion = var30;
    var29 = {};
    var22 = false;
    var29.fetching = var22;
    var25.fetchState = var29;
    var29 = {};
    var31 = {};
    var29.sections = var31;
    var31 = {};
    var29.sectionIdsByBotId = var31;
    var29.version = var30;
    var25.result = var29;
    var25 = var26.bind(var27)(var25);
    var _closure1_slot29 = var25;
    var27 = var8.Object;
    var26 = var27.freeze;
    var25 = {};
    var25.serverVersion = var28;
    var28 = {};
    var28.fetching = var22;
    var25.fetchState = var28;
    var25 = var26.bind(var27)(var25);
    var _closure1_slot30 = var25;
    var25 = {
        'sensitivity': 'accent',
        'numeric': true
    };
    var _closure1_slot31 = var25;
    var _closure1_slot32 = var22;
    var22 = new Array(0);
    var _closure1_slot33 = var22;
    var22 = 29;
    var22 = var10[var22];
    var22 = var21.bind(var0)(var22);
    var25 = var22.Store;
    var22 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun42945: for (var _fun42945_ip = 0;;) switch (_fun42945_ip) {
                case 0:
                    var5 = this;
                    var2 = 0;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var6 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot8;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot7;
                    var0 = _closure1_slot37;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun42945_ip = 86;
                        continue _fun42945
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun42945_ip = 120;
                    continue _fun42945;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot8;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var3 = {};
                    var0.indices = var3;
                    var3 = global;
                    var4 = var3.Map;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var4
                        }
                    });
                    var14 = var5;
                    var4 = new var14[var4](var13);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var0.applicationIndices = var4;
                    var0.applicationIndicesVersion = var2;
                    var2 = _closure1_slot13;
                    var4 = var2.locale;
                    var0.oldLocale = var4;
                    var3 = var3.Intl;
                    var4 = var3.Collator;
                    var13 = var2.locale;
                    var12 = _closure1_slot31;
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var4
                        }
                    });
                    var14 = var2;
                    var1 = new var14[var4](var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.collator = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var2 = var3.waitFor;
            var0 = _closure1_slot13;
            var2 = var2.bind(var3)(var0);
            var9 = var3.waitFor;
            var16 = _closure1_slot19;
            var15 = _closure1_slot12;
            var14 = _closure1_slot14;
            var13 = _closure1_slot15;
            var12 = _closure1_slot16;
            var11 = _closure1_slot17;
            var10 = _closure1_slot18;
            var17 = var3;
            var1 = var17[var9](var16, var15, var14, var13, var12, var11, var10, var9);
            var2 = var3.syncWith;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = function() { // Environment: var0
                _fun42947: for (var _fun42947_ip = 0;;) switch (_fun42947_ip) {
                    case 0:
                        var1 = _closure1_slot13;
                        var1 = var1.locale;
                        var2 = _closure1_slot34;
                        var2 = var2.oldLocale;
                        if (!(var1 !== var2)) {
                            _fun42947_ip = 108;
                            continue _fun42947
                        }
                    case 27:
                        var3 = _closure1_slot43;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        var3 = _closure1_slot34;
                        var2 = global;
                        var2 = var2.Intl;
                        var5 = var2.Collator;
                        var2 = var5.prototype;
                        var4 = Object.create(var2, {
                            constructor: {
                                value: var5
                            }
                        });
                        var6 = {
                            'sensitivity': 'accent',
                            'numeric': true
                        };
                        var8 = var4;
                        var7 = var1;
                        var2 = new var8[var5](var7, var6, var5);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var3.collator = var2;
                        var0 = _closure1_slot34;
                        var0.oldLocale = var1;
                    case 108:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(11);
        var0[0] = var4;
        var4 = {};
        var6 = 'getContextState';
        var4.key = var6;
        var6 = function arg0() {
            _fun42948: for (var _fun42948_ip = 0;;) switch (_fun42948_ip) {
                case 0:
                    var5 = arg0;
                    var1 = var5.type;
                    var0 = 'contextless';
                    if (!(var0 !== var1)) {
                        _fun42948_ip = 40;
                        continue _fun42948
                    }
                case 18:
                    var3 = _closure1_slot54;
                    var1 = var5.channel;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var1);
                    if (var0) {
                        _fun42948_ip = 49;
                        continue _fun42948
                    }
                case 40:
                    var0 = _closure1_slot29;
                    _fun42948_ip = 99;
                    continue _fun42948;
                case 49:
                    var1 = this;
                    var4 = var1.indices;
                    var1 = var5.channel;
                    var1 = var1.guild_id;
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun42948_ip = 84;
                        continue _fun42948
                    }
                case 74:
                    var5 = var5.channel;
                    var1 = var5.id;
                case 84:
                    var1 = var4[var1];
                    if (!(var3 == var1)) {
                        _fun42948_ip = 96;
                        continue _fun42948
                    }
                case 92:
                    var1 = _closure1_slot30;
                case 96:
                    var0 = var1;
                case 99:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasContextStateApplication';
        var4.key = var6;
        var6 = function arg0() {
            _fun42949: for (var _fun42949_ip = 0;;) switch (_fun42949_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.applicationId;
                    var3 = var0.channelId;
                    var4 = var0.guildId;
                    var0 = this;
                    var0 = var0.indices;
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun42949_ip = 36;
                        continue _fun42949
                    }
                case 33:
                    var3 = var4;
                case 36:
                    var3 = var0[var3];
                    var4 = var1 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun42949_ip = 70;
                        continue _fun42949
                    }
                case 49:
                    var3 = var3.result;
                    var4 = var1 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun42949_ip = 70;
                        continue _fun42949
                    }
                case 64:
                    var0 = var3.sections;
                case 70:
                    if (!(var1 == var0)) {
                        _fun42949_ip = 76;
                        continue _fun42949
                    }
                case 74:
                    var0 = {};
                case 76:
                    var0 = var0[var2];
                    var0 = var1 != var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getGuildState';
        var4.key = var6;
        var6 = function arg0() {
            _fun42950: for (var _fun42950_ip = 0;;) switch (_fun42950_ip) {
                case 0:
                    var2 = arg0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun42950_ip = 35;
                        continue _fun42950
                    }
                case 9:
                    var0 = this;
                    var0 = var0.indices;
                    var0 = var0[var2];
                    if (!(var1 == var0)) {
                        _fun42950_ip = 33;
                        continue _fun42950
                    }
                case 26:
                    var0 = _closure1_slot30;
                case 33:
                    _fun42950_ip = 42;
                    continue _fun42950;
                case 35:
                    var0 = _closure1_slot29;
                case 42:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getUserState';
        var4.key = var6;
        var6 = function() {
            _fun42951: for (var _fun42951_ip = 0;;) switch (_fun42951_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.indices;
                    var0 = _closure1_slot25;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun42951_ip = 30;
                        continue _fun42951
                    }
                case 26:
                    var0 = _closure1_slot30;
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'hasUserStateApplication';
        var4.key = var6;
        var6 = function arg0() {
            _fun42952: for (var _fun42952_ip = 0;;) switch (_fun42952_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.indices;
                    var0 = _closure1_slot25;
                    var0 = var1[var0];
                    var1 = null;
                    var3 = var1 == var0;
                    var2 = undefined;
                    if (var3) {
                        _fun42952_ip = 52;
                        continue _fun42952
                    }
                case 31:
                    var0 = var0.result;
                    var3 = var1 == var0;
                    var2 = undefined;
                    if (var3) {
                        _fun42952_ip = 52;
                        continue _fun42952
                    }
                case 46:
                    var2 = var0.sections;
                case 52:
                    if (!(var1 == var2)) {
                        _fun42952_ip = 58;
                        continue _fun42952
                    }
                case 56:
                    var2 = {};
                case 58:
                    var0 = arg0;
                    var0 = var2[var0];
                    var0 = var1 != var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getApplicationState';
        var4.key = var6;
        var6 = function arg0() {
            _fun42953: for (var _fun42953_ip = 0;;) switch (_fun42953_ip) {
                case 0:
                    var2 = arg0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun42953_ip = 35;
                        continue _fun42953
                    }
                case 9:
                    var0 = this;
                    var0 = var0.indices;
                    var0 = var0[var2];
                    if (!(var1 == var0)) {
                        _fun42953_ip = 33;
                        continue _fun42953
                    }
                case 26:
                    var0 = _closure1_slot30;
                case 33:
                    _fun42953_ip = 42;
                    continue _fun42953;
                case 35:
                    var0 = _closure1_slot29;
                case 42:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getApplicationStates';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.applicationIndices;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'hasApplicationState';
        var4.key = var6;
        var6 = function arg0() {
            var0 = this;
            var1 = var0.indices;
            var0 = arg0;
            var0 = var0 in var1;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'query';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun42956: for (var _fun42956_ip = 0;;) switch (_fun42956_ip) {
                case 0:
                    var6 = arg0;
                    var9 = arg1;
                    var5 = arg2;
                    var3 = this;
                    var2 = _closure1_slot18;
                    var1 = var2.getCurrentUser;
                    var1 = var1.bind(var2)();
                    var13 = null;
                    if (!(var13 != var1)) {
                        _fun42956_ip = 768;
                        continue _fun42956
                    }
                case 37:
                    var1 = var6.type;
                    var4 = undefined;
                    var18 = 'channel';
                    var2 = undefined;
                    if (!(var18 === var1)) {
                        _fun42956_ip = 59;
                        continue _fun42956
                    }
                case 54:
                    var2 = var6.channel;
                case 59:
                    var1 = var3.getContextState;
                    var8 = var1.bind(var3)(var6);
                    var1 = var3.getUserState;
                    var7 = var1.bind(var3)();
                    var6 = var3.getApplicationState;
                    var1 = var5.applicationId;
                    var12 = var6.bind(var3)(var1);
                    var1 = var3.getApplicationStates;
                    var6 = var1.bind(var3)();
                    var3 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var1 = 25;
                    var1 = var10[var1];
                    var10 = var3.bind(var4)(var1);
                    var3 = var10.buildPermissionContext;
                    var1 = var9.commandTypes;
                    var11 = var3.bind(var10)(var2, var1);
                    var1 = var13 == var2;
                    var17 = var2;
                    if (var1) {
                        _fun42956_ip = 175;
                        continue _fun42956
                    }
                case 154:
                    var2 = var13 == var11;
                    var3 = undefined;
                    if (var2) {
                        _fun42956_ip = 169;
                        continue _fun42956
                    }
                case 163:
                    var3 = var11.hasBaseAccessPermissions;
                case 169:
                    var2 = true;
                    var1 = var2 === var3;
                case 175:
                    var3 = var9.applicationCommands;
                    var2 = false;
                    var10 = var2 !== var3;
                    var14 = var5.allowFetch;
                    var3 = false;
                    if (!var14) {
                        _fun42956_ip = 601;
                        continue _fun42956
                    }
                case 201:
                    var14 = var10;
                    if (!var14) {
                        _fun42956_ip = 210;
                        continue _fun42956
                    }
                case 207:
                    var14 = var1;
                case 210:
                    if (!var14) {
                        _fun42956_ip = 217;
                        continue _fun42956
                    }
                case 213:
                    var14 = var13 != var17;
                case 217:
                    if (!var14) {
                        _fun42956_ip = 229;
                        continue _fun42956
                    }
                case 220:
                    var1 = _closure1_slot54;
                    var14 = var1.bind(var4)(var17);
                case 229:
                    var1 = false;
                    if (!var14) {
                        _fun42956_ip = 467;
                        continue _fun42956
                    }
                case 237:
                    var15 = _closure1_slot1;
                    var16 = _closure1_slot3;
                    var14 = 26;
                    var14 = var16[var14];
                    var19 = var15.bind(var4)(var14);
                    var16 = var19.track;
                    var14 = _closure1_slot22;
                    var15 = var14.APPLICATION_COMMAND_CACHE_FETCH;
                    var14 = {};
                    var20 = var8.result;
                    var20 = var13 == var20;
                    var14.miss = var20;
                    var20 = global;
                    var22 = var20.Object;
                    var21 = var22.keys;
                    var20 = _closure1_slot34;
                    var20 = var20.indices;
                    var20 = var21.bind(var22)(var20);
                    var20 = var20.length;
                    var14.size = var20;
                    var14 = var16.bind(var19)(var15, var14);
                    var14 = _closure1_slot55;
                    var14 = var14.bind(var4)(var8);
                    if (!var14) {
                        _fun42956_ip = 348;
                        continue _fun42956
                    }
                case 344:
                    var14 = var13 != var17;
                case 348:
                    var2 = false;
                    if (!var14) {
                        _fun42956_ip = 464;
                        continue _fun42956
                    }
                case 353:
                    var14 = var17.guild_id;
                    if (!(var13 == var14)) {
                        _fun42956_ip = 412;
                        continue _fun42956
                    }
                case 362:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var14 = 20;
                    var14 = var16[var14];
                    var16 = var15.bind(var4)(var14);
                    var15 = var16.requestApplicationCommandIndex;
                    var14 = {};
                    var14.type = var18;
                    var18 = var17.id;
                    var14.channelId = var18;
                    var14 = var15.bind(var16)(var14);
                    var2 = true;
                    _fun42956_ip = 464;
                    continue _fun42956;
                case 412:
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot3;
                    var14 = 20;
                    var14 = var16[var14];
                    var16 = var15.bind(var4)(var14);
                    var15 = var16.requestApplicationCommandIndex;
                    var14 = {};
                    var18 = 'guild';
                    var14.type = var18;
                    var17 = var17.guild_id;
                    var14.guildId = var17;
                    var14 = var15.bind(var16)(var14);
                    var2 = true;
                case 464:
                    var1 = var2;
                case 467:
                    var2 = _closure1_slot55;
                    var2 = var2.bind(var4)(var7);
                    if (!var2) {
                        _fun42956_ip = 522;
                        continue _fun42956
                    }
                case 479:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot3;
                    var2 = 20;
                    var2 = var15[var2];
                    var15 = var14.bind(var4)(var2);
                    var14 = var15.requestApplicationCommandIndex;
                    var2 = {};
                    var16 = 'user';
                    var2.type = var16;
                    var2 = var14.bind(var15)(var2);
                    var1 = true;
                case 522:
                    var2 = _closure1_slot55;
                    var2 = var2.bind(var4)(var12);
                    if (!var2) {
                        _fun42956_ip = 543;
                        continue _fun42956
                    }
                case 534:
                    var12 = var5.applicationId;
                    var2 = var13 != var12;
                case 543:
                    if (!var2) {
                        _fun42956_ip = 598;
                        continue _fun42956
                    }
                case 546:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var2 = 20;
                    var2 = var13[var2];
                    var13 = var12.bind(var4)(var2);
                    var12 = var13.requestApplicationCommandIndex;
                    var2 = {};
                    var14 = 'application';
                    var2.type = var14;
                    var14 = var5.applicationId;
                    var2.applicationId = var14;
                    var2 = var12.bind(var13)(var2);
                    var1 = true;
                case 598:
                    var3 = var1;
                case 601:
                    var2 = _closure1_slot52;
                    var1 = {};
                    var1.permissionContext = var11;
                    var11 = var9.text;
                    var1.text = var11;
                    var1.allowApplicationCommands = var10;
                    var9 = var9.builtIns;
                    var1.builtIns = var9;
                    var9 = var5.scoreMethod;
                    var1.scoreMethod = var9;
                    var9 = var5.allowEmptySections;
                    var1.allowEmptySections = var9;
                    var1.contextState = var8;
                    var1.userState = var7;
                    var7 = var5.allowApplicationState;
                    if (var7) {
                        _fun42956_ip = 706;
                        continue _fun42956
                    }
                case 678:
                    var7 = global;
                    var7 = var7.Map;
                    var8 = var7.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var7
                        }
                    });
                    var25 = var8;
                    var7 = new var25[var7](var24);
                    var6 = var7 instanceof Object ? var7 : var8;
                case 706:
                    var1.applicationStates = var6;
                    var6 = var5.sortOptions;
                    var1.sortOptions = var6;
                    var6 = var5.applicationId;
                    var1.singleApplicationId = var6;
                    var5 = var5.installOnDemand;
                    var1.installOnDemand = var5;
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.loading;
                    if (var2) {
                        _fun42956_ip = 760;
                        continue _fun42956
                    }
                case 757:
                    var2 = var3;
                case 760:
                    var1.loading = var2;
                    return var1;
                case 768:
                    var0 = _closure1_slot28;
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'queryInstallOnDemandApp';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun42957: for (var _fun42957_ip = 0;;) switch (_fun42957_ip) {
                case 0:
                    var4 = this;
                    var3 = _closure1_slot15;
                    var2 = var3.getChannel;
                    var1 = arg1;
                    var5 = var2.bind(var3)(var1);
                    var1 = null;
                    if (!(var1 != var5)) {
                        _fun42957_ip = 182;
                        continue _fun42957
                    }
                case 32:
                    var3 = var4.query;
                    if (!(var1 == var5)) {
                        _fun42957_ip = 56;
                        continue _fun42957
                    }
                case 42:
                    var2 = {};
                    var1 = 'contextless';
                    var2.type = var1;
                    _fun42957_ip = 73;
                    continue _fun42957;
                case 56:
                    var1 = {};
                    var1.channel = var5;
                    var5 = 'channel';
                    var1.type = var5;
                    var2 = var1;
                case 73:
                    var1 = {};
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var0 = 27;
                    var0 = var8[var0];
                    var6 = undefined;
                    var0 = var7.bind(var6)(var0);
                    var0 = var0.ApplicationCommandType;
                    var5 = var0.CHAT;
                    var0 = new Array(1);
                    var0[0] = var5;
                    var1.commandTypes = var0;
                    var0 = {};
                    var5 = 5;
                    var0.placeholderCount = var5;
                    var5 = 28;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.ScoreMethod;
                    var5 = var5.COMMAND_ONLY;
                    var0.scoreMethod = var5;
                    var5 = arg0;
                    var0.applicationId = var5;
                    var5 = true;
                    var0.allowFetch = var5;
                    var0 = var3.bind(var4)(var2, var1, var0);
                case 182:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[10] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var22 = var22.bind(var0)(var25);
    var22.displayName = var7;
    var7 = 30;
    var7 = var10[var7];
    var34 = var21.bind(var0)(var7);
    var7 = {};
    var7.LOGOUT = var24;
    var24 = function() {
        _fun42958: for (var _fun42958_ip = 0;;) switch (_fun42958_ip) {
            case 0:
                var0 = global;
                var3 = var0.Object;
                var1 = var3.values;
                var0 = _closure1_slot34;
                var0 = var0.indices;
                var3 = var1.bind(var3)(var0);
                var0 = var3.length;
                var1 = 0;
                var0 = var1 < var0;
                if (!var0) {
                    _fun42958_ip = 71;
                    continue _fun42958
                }
            case 45:
                var4 = var3[var1];
                var0 = _closure1_slot26;
                var4.serverVersion = var0;
                var1 = var1 + 1;
                var0 = var3.length;
                if (var1 < var0) {
                    _fun42958_ip = 45;
                    continue _fun42958
                }
            case 71:
                var3 = _closure1_slot38;
                var1 = _closure1_slot33;
                var0 = undefined;
                var4 = var3.bind(var0)(var1);
                var3 = var4.bind(var0)();
                var1 = var3.done;
                if (var1) {
                    _fun42958_ip = 127;
                    continue _fun42958
                }
            case 98:
                var5 = _closure1_slot47;
                var1 = var3.value;
                var1 = var5.bind(var0)(var1);
                var5 = var4.bind(var0)();
                var1 = var5.done;
                var3 = var5;
                if (!var1) {
                    _fun42958_ip = 98;
                    continue _fun42958
                }
            case 127:
                var1 = new Array(0);
                _closure1_slot33 = var1;
                var1 = true;
                _closure1_slot32 = var1;
                return var0;
        }
    };
    var7.CONNECTION_OPEN = var24;
    var24 = function arg0() {
        _fun42959: for (var _fun42959_ip = 0;;) switch (_fun42959_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.target;
                var3 = _closure1_slot40;
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var4 = _closure1_slot55;
                var3 = _closure1_slot34;
                var3 = var3.indices;
                var3 = var3[var5];
                var5 = null;
                if (!(var5 == var3)) {
                    _fun42959_ip = 51;
                    continue _fun42959
                }
            case 47:
                var3 = _closure1_slot30;
            case 51:
                var3 = var4.bind(var0)(var3);
                if (!var3) {
                    _fun42959_ip = 68;
                    continue _fun42959
                }
            case 59:
                var1 = _closure1_slot45;
                var1 = var1.bind(var0)(var2);
            case 68:
                return var0;
        }
    };
    var7.APPLICATION_COMMAND_INDEX_FETCH_REQUEST = var24;
    var7.APPLICATION_COMMAND_INDEX_FETCH_SUCCESS = var23;
    var23 = function arg0() {
        var0 = arg0;
        var3 = var0.target;
        var2 = _closure1_slot41;
        var1 = {};
        var0 = {};
        var4 = false;
        var0.fetching = var4;
        var4 = global;
        var5 = var4.Date;
        var4 = var5.now;
        var5 = var4.bind(var5)();
        var4 = 5000;
        var4 = var5 + var4;
        var0.retryAfter = var4;
        var1.fetchState = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var7.APPLICATION_COMMAND_INDEX_FETCH_FAILURE = var23;
    var23 = function arg0() {
        _fun42961: for (var _fun42961_ip = 0;;) switch (_fun42961_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.applicationId;
                var2 = var0.channelId;
                var3 = var0.guildId;
                var6 = _closure1_slot34;
                var5 = var6.hasContextStateApplication;
                var4 = {};
                var4.applicationId = var1;
                var4.channelId = var2;
                var4.guildId = var3;
                var4 = var5.bind(var6)(var4);
                if (!var4) {
                    _fun42961_ip = 115;
                    continue _fun42961
                }
            case 53:
                var5 = _closure1_slot41;
                var4 = null;
                if (!(var4 == var3)) {
                    _fun42961_ip = 79;
                    continue _fun42961
                }
            case 63:
                var4 = {};
                var6 = 'channel';
                var4.type = var6;
                var4.channelId = var2;
                _fun42961_ip = 96;
                continue _fun42961;
            case 79:
                var2 = {};
                var6 = 'guild';
                var2.type = var6;
                var2.guildId = var3;
                var4 = var2;
            case 96:
                var3 = {};
                var2 = _closure1_slot26;
                var3.serverVersion = var2;
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var3);
            case 115:
                var3 = _closure1_slot34;
                var2 = var3.hasUserStateApplication;
                var2 = var2.bind(var3)(var1);
                if (!var2) {
                    _fun42961_ip = 166;
                    continue _fun42961
                }
            case 133:
                var5 = _closure1_slot41;
                var4 = {};
                var2 = 'user';
                var4.type = var2;
                var3 = {};
                var2 = _closure1_slot26;
                var3.serverVersion = var2;
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var3);
            case 166:
                var3 = _closure1_slot34;
                var2 = var3.hasApplicationState;
                var2 = var2.bind(var3)(var1);
                if (!var2) {
                    _fun42961_ip = 223;
                    continue _fun42961
                }
            case 186:
                var3 = _closure1_slot41;
                var2 = {};
                var4 = 'application';
                var2.type = var4;
                var2.applicationId = var1;
                var1 = {};
                var0 = _closure1_slot26;
                var1.serverVersion = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
            case 223:
                var0 = undefined;
                return var0;
        }
    };
    var7.APPLICATION_COMMAND_EXECUTE_BAD_VERSION = var23;
    var23 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var2 = _closure1_slot42;
        var1 = {};
        var3 = 'channel';
        var1.type = var3;
        var0 = var0.id;
        var1.channelId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var7.CHANNEL_DELETE = var23;
    var23 = function arg0() {
        var0 = arg0;
        var0 = var0.guild;
        var2 = _closure1_slot42;
        var1 = {};
        var3 = 'guild';
        var1.type = var3;
        var0 = var0.id;
        var1.guildId = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var7.GUILD_DELETE = var23;
    var7.USER_APPLICATION_UPDATE = var11;
    var7.USER_APPLICATION_REMOVE = var11;
    var11 = function arg0() {
        _fun42964: for (var _fun42964_ip = 0;;) switch (_fun42964_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var0 = var0.version;
                var3 = _closure1_slot41;
                var2 = {};
                var4 = 'guild';
                var2.type = var4;
                var2.guildId = var1;
                var1 = {};
                var7 = null;
                if (!(var7 == var0)) {
                    _fun42964_ip = 47;
                    continue _fun42964
                }
            case 43:
                var0 = _closure1_slot26;
            case 47:
                var1.serverVersion = var0;
                var0 = undefined;
                var2 = var3.bind(var0)(var2, var1);
                var3 = var7 == var2;
                var1 = undefined;
                if (var3) {
                    _fun42964_ip = 90;
                    continue _fun42964
                }
            case 69:
                var2 = var2.result;
                var3 = var7 == var2;
                var1 = undefined;
                if (var3) {
                    _fun42964_ip = 90;
                    continue _fun42964
                }
            case 84:
                var1 = var2.sectionIdsByBotId;
            case 90:
                if (!(var7 != var1)) {
                    _fun42964_ip = 173;
                    continue _fun42964
                }
            case 94:
                var5 = var1;
                var1 = 'channel';
                for (var2 in var5)
                    case 109: {
                        case 118: var11 = var2;
                        var10 = _closure1_slot15;
                        var9 = var10.getDMFromUserId;
                        var9 = var9.bind(var10)(var11);
                        if (var7 == var9) {
                            _fun42964_ip = 109;
                            continue _fun42964
                        }
                        case 140: var11 = _closure1_slot41;
                        var10 = {};
                        var10.type = var1;
                        var10.channelId = var9;
                        var9 = {};
                        var12 = _closure1_slot26;
                        var9.serverVersion = var12;
                        var9 = var11.bind(var0)(var10, var9);
                        _fun42964_ip = 109;
                        continue _fun42964;
                    }
            case 173:
                return var0;
        }
    };
    var7.GUILD_APPLICATION_COMMAND_INDEX_UPDATE = var11;
    var11 = function arg0() {
        _fun42965: for (var _fun42965_ip = 0;;) switch (_fun42965_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.chunks;
                var0 = _closure1_slot38;
                var5 = undefined;
                var4 = var0.bind(var5)(var1);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = var2;
                var2 = false;
                var0 = false;
                if (var1) {
                    _fun42965_ip = 95;
                    continue _fun42965
                }
            case 42:
                var1 = var3.value;
                var8 = _closure1_slot48;
                var7 = var1.guildId;
                var1 = var1.members;
                var7 = var8.bind(var5)(var7, var1);
                if (var7) {
                    _fun42965_ip = 74;
                    continue _fun42965
                }
            case 71:
                var7 = var2;
            case 74:
                var8 = var4.bind(var5)();
                var1 = var8.done;
                var2 = var7;
                var3 = var8;
                var0 = var2;
                if (!var1) {
                    _fun42965_ip = 42;
                    continue _fun42965
                }
            case 95:
                return var0;
        }
    };
    var7.GUILD_MEMBERS_CHUNK_BATCH = var11;
    var11 = var22.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var22
        }
    });
    var35 = var11;
    var33 = var7;
    var7 = new var35[var22](var34, var33, var32);
    var7 = var7 instanceof Object ? var7 : var11;
    var _closure1_slot34 = var7;
    var21 = var8.Object;
    var11 = var21.freeze;
    var8 = {};
    var22 = {
        'useFrecency': false,
        'useScore': false
    };
    var8.applications = var22;
    var22 = {
        'useFrecency': true,
        'useScore': true
    };
    var8.commands = var22;
    var8 = var11.bind(var21)(var8);
    var _closure1_slot35 = var8;
    var8 = {};
    var8.COMMAND_NAME_STARTS_WITH = var20;
    var11 = 'COMMAND_NAME_STARTS_WITH';
    var8[var20] = var11;
    var8.STARTS_WITH_COMMAND_NAME = var19;
    var11 = 'STARTS_WITH_COMMAND_NAME';
    var8[var19] = var11;
    var8.COMMAND_NAME_CONTAINS = var18;
    var11 = 'COMMAND_NAME_CONTAINS';
    var8[var18] = var11;
    var8.STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME = var17;
    var11 = 'STARTS_WITH_COMMAND_OPTION_NAME_OR_OPTION_NAME';
    var8[var17] = var11;
    var8.OPTION_NAME_CONTAINS = var16;
    var11 = 'OPTION_NAME_CONTAINS';
    var8[var16] = var11;
    var8.SECTION_NAME_STARTS_WITH = var15;
    var11 = 'SECTION_NAME_STARTS_WITH';
    var8[var15] = var11;
    var8.SECTION_NAME_CONTAINS = var14;
    var11 = 'SECTION_NAME_CONTAINS';
    var8[var14] = var11;
    var8.COMMAND_DESCRIPTION_CONTAINS = var13;
    var11 = 'COMMAND_DESCRIPTION_CONTAINS';
    var8[var13] = var11;
    var8.SECTION_DESCRIPTION_CONTAINS = var12;
    var11 = 'SECTION_DESCRIPTION_CONTAINS';
    var8[var12] = var11;
    var _closure1_slot36 = var8;
    var8 = 36;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/application_commands/ApplicationCommandIndexStore.tsx';
    var8 = var9.bind(var10)(var8);
    var2.default = var7;
    var7 = function() {
        var0 = undefined;
        var3 = _closure1_slot44;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getOrFetchApplicationCommandIndexForTarget = var7;
    var2.useContextIndexState = var6;
    var6 = function arg0, arg1() {
        var6 = arg0;
        var7 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var4 = _closure1_slot11;
        var3 = var4.useState;
        var0 = true;
        var5 = var3.bind(var4)(var0);
        var3 = _closure1_slot4;
        var4 = undefined;
        var0 = 2;
        var3 = var3.bind(var4)(var5, var0);
        var0 = 0;
        var5 = var3[var0];
        var _closure2_slot2 = var5;
        var0 = 1;
        var0 = var3[var0];
        var _closure2_slot3 = var0;
        var3 = _closure1_slot0;
        var8 = _closure1_slot3;
        var0 = 29;
        var0 = var8[var0];
        var8 = var3.bind(var4)(var0);
        var4 = var8.useStateFromStoresObject;
        var0 = _closure1_slot34;
        var3 = new Array(1);
        var3[0] = var0;
        var0 = function() { // Environment: var1
            _fun42968: for (var _fun42968_ip = 0;;) switch (_fun42968_ip) {
                case 0:
                    var0 = _closure1_slot34;
                    var2 = var0.indices;
                    var0 = _closure2_slot0;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun42968_ip = 34;
                        continue _fun42968
                    }
                case 30:
                    var0 = _closure1_slot30;
                case 34:
                    return var0;
            }
        };
        var0 = var4.bind(var8)(var3, var0);
        var _closure2_slot4 = var0;
        var4 = _closure1_slot11;
        var3 = var4.useEffect;
        var2 = new Array(4);
        var2[0] = var0;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() { // Environment: var1
            _fun42969: for (var _fun42969_ip = 0;;) switch (_fun42969_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    if (!var1) {
                        _fun42969_ip = 20;
                        continue _fun42969
                    }
                case 10:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var1 = var2 != var3;
                case 20:
                    if (!var1) {
                        _fun42969_ip = 216;
                        continue _fun42969
                    }
                case 26:
                    var1 = _closure2_slot1;
                    if (!var1) {
                        _fun42969_ip = 203;
                        continue _fun42969
                    }
                case 36:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 26;
                    var2 = var3[var2];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var2);
                    var6 = var7.track;
                    var2 = _closure1_slot22;
                    var5 = var2.APPLICATION_COMMAND_CACHE_FETCH;
                    var2 = {};
                    var4 = _closure2_slot4;
                    var9 = var4.result;
                    var8 = null;
                    var8 = var8 == var9;
                    var2.miss = var8;
                    var8 = global;
                    var10 = var8.Object;
                    var9 = var10.keys;
                    var8 = _closure1_slot34;
                    var8 = var8.indices;
                    var8 = var9.bind(var10)(var8);
                    var8 = var8.length;
                    var2.size = var8;
                    var2 = var6.bind(var7)(var5, var2);
                    var2 = _closure1_slot55;
                    var2 = var2.bind(var3)(var4);
                    if (!var2) {
                        _fun42969_ip = 203;
                        continue _fun42969
                    }
                case 154:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 20;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.requestApplicationCommandIndex;
                    var1 = {};
                    var4 = 'guild';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.guildId = var4;
                    var1 = var2.bind(var3)(var1);
                case 203:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                case 216:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useGuildIndexState = var6;
    var2.useUserIndexState = var5;
    var5 = function arg0, arg1, arg2, arg3() {
        var12 = arg0;
        var2 = arg1;
        var9 = arg3;
        var _closure2_slot0 = var12;
        var _closure2_slot1 = var2;
        var _closure2_slot2 = var9;
        var4 = _closure1_slot51;
        var8 = undefined;
        var3 = arg2;
        var3 = var4.bind(var8)(var12, var3, var9);
        var6 = var3.descriptors;
        var _closure2_slot3 = var6;
        var7 = var3.commands;
        var _closure2_slot4 = var7;
        var5 = var3.sectionedCommands;
        var _closure2_slot5 = var5;
        var10 = var3.loading;
        var _closure2_slot6 = var10;
        var11 = _closure1_slot11;
        var4 = var11.useMemo;
        var3 = new Array(2);
        var3[0] = var12;
        var3[1] = var2;
        var2 = function() { // Environment: var0
            _fun42971: for (var _fun42971_ip = 0;;) switch (_fun42971_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var3 = var0.type;
                    var1 = 'channel';
                    var0 = undefined;
                    if (!(var1 === var3)) {
                        _fun42971_ip = 48;
                        continue _fun42971
                    }
                case 22:
                    var1 = {};
                    var3 = _closure2_slot0;
                    var3 = var3.channel;
                    var1.channel = var3;
                    var2 = _closure2_slot1;
                    var1.guild = var2;
                    var0 = var1;
                case 48:
                    return var0;
            }
        };
        var4 = var4.bind(var11)(var2, var3);
        var _closure2_slot7 = var4;
        var3 = _closure1_slot0;
        var11 = _closure1_slot3;
        var2 = 31;
        var2 = var11[var2];
        var3 = var3.bind(var8)(var2);
        var2 = var3.useTopCommands;
        var8 = var2.bind(var3)(var4);
        var _closure2_slot8 = var8;
        var3 = _closure1_slot11;
        var2 = var3.useMemo;
        var1 = new Array(7);
        var1[0] = var10;
        var9 = var9.includeFrecency;
        var1[1] = var9;
        var1[2] = var8;
        var1[3] = var7;
        var1[4] = var6;
        var1[5] = var5;
        var1[6] = var4;
        var0 = function() { // Environment: var0
            _fun42972: for (var _fun42972_ip = 0;;) switch (_fun42972_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var2 = var2.includeFrecency;
                    if (!var2) {
                        _fun42972_ip = 315;
                        continue _fun42972
                    }
                case 21:
                    var2 = _closure2_slot8;
                    var2 = var2.length;
                    var3 = 0;
                    if (!(var3 !== var2)) {
                        _fun42972_ip = 315;
                        continue _fun42972
                    }
                case 39:
                    var5 = _closure2_slot4;
                    var4 = var5.filter;
                    var2 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot8;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var3 = _closure1_slot19;
                        var2 = var3.getScoreWithoutLoadingLatest;
                        var4 = _closure2_slot7;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var4, var1);
                        var3 = _closure1_slot19;
                        var2 = var3.getScoreWithoutLoadingLatest;
                        var0 = arg1;
                        var0 = var2.bind(var3)(var4, var0);
                        var0 = var0 - var1;
                        return var0;
                    };
                    var4 = var2.bind(var4)(var0);
                    var2 = var4.splice;
                    var0 = _closure1_slot21;
                    var2 = var2.bind(var4)(var3, var0);
                    var0 = var2.length;
                    if (!(var3 !== var0)) {
                        _fun42972_ip = 272;
                        continue _fun42972
                    }
                case 105:
                    var0 = {};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var6 = 32;
                    var3 = var9[var6];
                    var7 = undefined;
                    var3 = var8.bind(var7)(var3);
                    var4 = var3.BUILT_IN_SECTIONS;
                    var3 = _closure1_slot20;
                    var3 = var3.FRECENCY;
                    var4 = var4[var3];
                    var3 = new Array(1);
                    var3[0] = var4;
                    var12 = _closure2_slot3;
                    var4 = 1;
                    var13 = var3;
                    var11 = var4;
                    var10 = arraySpread(var13, var12, var11);
                    var0.descriptors = var3;
                    var10 = var2.concat;
                    var3 = _closure2_slot4;
                    var3 = var10.bind(var2)(var3);
                    var0.commands = var3;
                    var3 = {};
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.BUILT_IN_SECTIONS;
                    var5 = _closure1_slot20;
                    var5 = var5.FRECENCY;
                    var5 = var6[var5];
                    var3.section = var5;
                    var3.data = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var12 = _closure2_slot5;
                    var13 = var2;
                    var3 = arraySpread(var13, var12, var11);
                    var0.sectionedCommands = var2;
                    var2 = _closure2_slot6;
                    var0.loading = var2;
                    _fun42972_ip = 313;
                    continue _fun42972;
                case 272:
                    var2 = {};
                    var3 = _closure2_slot3;
                    var2.descriptors = var3;
                    var3 = _closure2_slot4;
                    var2.commands = var3;
                    var3 = _closure2_slot5;
                    var2.sectionedCommands = var3;
                    var3 = _closure2_slot6;
                    var2.loading = var3;
                    var0 = var2;
                case 313:
                    return var0;
                case 315:
                    var0 = {};
                    var2 = _closure2_slot3;
                    var0.descriptors = var2;
                    var2 = _closure2_slot4;
                    var0.commands = var2;
                    var2 = _closure2_slot5;
                    var0.sectionedCommands = var2;
                    var1 = _closure2_slot6;
                    var0.loading = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useDiscoveryState = var5;
    var2.useQueryState = var4;
    var2.isStale = var3;
    var3 = function arg0, arg1() {
        var3 = _closure1_slot62;
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.appLauncherOnlyCompareNames = var3;
    var1 = function arg0, arg1() {
        _fun42976: for (var _fun42976_ip = 0;;) switch (_fun42976_ip) {
            case 0:
                var7 = arg1;
                var0 = _closure1_slot20;
                var0 = var0.BUILT_IN;
                if (!(var7 !== var0)) {
                    _fun42976_ip = 469;
                    continue _fun42976
                }
            case 23:
                var2 = _closure1_slot34;
                var1 = var2.getContextState;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var2 = _closure1_slot34;
                var0 = var2.getUserState;
                var0 = var0.bind(var2)();
                var3 = var1.result;
                var2 = null;
                var6 = var2 == var3;
                var1 = undefined;
                if (var6) {
                    _fun42976_ip = 78;
                    continue _fun42976
                }
            case 72:
                var1 = var3.sections;
            case 78:
                if (!(var2 == var1)) {
                    _fun42976_ip = 84;
                    continue _fun42976
                }
            case 82:
                var1 = {};
            case 84:
                var3 = var0.result;
                var6 = var2 == var3;
                var0 = undefined;
                if (var6) {
                    _fun42976_ip = 105;
                    continue _fun42976
                }
            case 99:
                var0 = var3.sections;
            case 105:
                if (!(var2 == var0)) {
                    _fun42976_ip = 111;
                    continue _fun42976
                }
            case 109:
                var0 = {};
            case 111:
                var3 = var1[var7];
                var1 = var0[var7];
                var6 = _closure1_slot34;
                var0 = var6.getApplicationState;
                var0 = var0.bind(var6)(var7);
                var6 = var0.result;
                var8 = var2 == var6;
                var0 = undefined;
                if (var8) {
                    _fun42976_ip = 168;
                    continue _fun42976
                }
            case 149:
                var6 = var6.sections;
                var8 = var2 == var6;
                var0 = undefined;
                if (var8) {
                    _fun42976_ip = 168;
                    continue _fun42976
                }
            case 164:
                var0 = var6[var7];
            case 168:
                if (!(var2 != var3)) {
                    _fun42976_ip = 179;
                    continue _fun42976
                }
            case 172:
                if (!(var2 == var1)) {
                    _fun42976_ip = 306;
                    continue _fun42976
                }
            case 179:
                if (!(var2 == var3)) {
                    _fun42976_ip = 271;
                    continue _fun42976
                }
            case 183:
                if (!(var2 == var1)) {
                    _fun42976_ip = 236;
                    continue _fun42976
                }
            case 187:
                var7 = var2 != var0;
                var6 = undefined;
                var5 = undefined;
                if (!var7) {
                    _fun42976_ip = 437;
                    continue _fun42976
                }
            case 201:
                var6 = var0.descriptor;
                var8 = global;
                var9 = var8.Object;
                var8 = var9.values;
                var0 = var0.commands;
                var5 = var8.bind(var9)(var0);
                _fun42976_ip = 437;
                continue _fun42976;
            case 236:
                var6 = var1.descriptor;
                var0 = global;
                var9 = var0.Object;
                var8 = var9.values;
                var0 = var1.commands;
                var5 = var8.bind(var9)(var0);
                _fun42976_ip = 437;
                continue _fun42976;
            case 271:
                var6 = var3.descriptor;
                var0 = global;
                var9 = var0.Object;
                var8 = var9.values;
                var0 = var3.commands;
                var5 = var8.bind(var9)(var0);
                _fun42976_ip = 437;
                continue _fun42976;
            case 306:
                var12 = var1.descriptor;
                var11 = new Array(0);
                var9 = var1.commands;
                for (var0 in var9)
                    case 330: {
                        case 339: var14 = var0;
                        var13 = var1.commands;
                        var14 = var13[var14];
                        var13 = var11.push;
                        var13 = var13.bind(var11)(var14);
                        _fun42976_ip = 330;
                        continue _fun42976;
                    }
            case 364:
                var9 = var3.commands;
                var6 = var12;
                var5 = var11;
                for (var0 in var9)
                    case 384: {
                        var6 = var12;
                        var5 = var11;
                        case 399: var14 = var0;
                        var13 = var1.commands;
                        var13 = var14 in var13;
                        if (var13) {
                            _fun42976_ip = 384;
                            continue _fun42976
                        }
                        case 415: var13 = var3.commands;
                        var14 = var13[var14];
                        var13 = var11.push;
                        var13 = var13.bind(var11)(var14);
                        _fun42976_ip = 384;
                        continue _fun42976;
                    }
            case 437:
                var0 = {};
                var0.descriptor = var6;
                var0.sectionCommands = var5;
                var3 = var2 != var3;
                var0.isGuildInstalled = var3;
                var1 = var2 != var1;
                var0.isUserInstalled = var1;
                return var0;
            case 469:
                var0 = {};
                var3 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 32;
                var5 = var6[var1];
                var2 = undefined;
                var5 = var3.bind(var2)(var5);
                var5 = var5.BUILT_IN_SECTIONS;
                var4 = _closure1_slot20;
                var4 = var4.BUILT_IN;
                var4 = var5[var4];
                var0.descriptor = var4;
                var1 = var6[var1];
                var5 = var3.bind(var2)(var1);
                var4 = var5.getBuiltInCommands;
                var1 = 27;
                var1 = var6[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.ApplicationCommandType;
                var1 = var1.CHAT;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = true;
                var2 = false;
                var2 = var4.bind(var5)(var3, var1, var2);
                var0.sectionCommands = var2;
                var0.isGuildInstalled = var1;
                var0.isUserInstalled = var1;
                return var0;
        }
    };
    var2.getSection = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 5, 31, 4638, 1676, 1216, 1372, 1672, 1410, 1613, 4639, 4509, 660, 3, 4640, 4641, 4508, 4510, 4642, 44, 7915, 795, 1636, 7561, 566, 806, 12147, 7562, 1355, 12148, 4511, 2]);