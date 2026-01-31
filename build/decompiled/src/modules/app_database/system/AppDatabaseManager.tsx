// modules/app_database/system/AppDatabaseManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun92995: for (var _fun92995_ip = 0;;) switch (_fun92995_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun92995_ip = 46;
                    continue _fun92995
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun92995_ip = 55;
                    continue _fun92995
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun92995_ip = 345;
                    continue _fun92995
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun92995_ip = 323;
                    continue _fun92995
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun92995_ip = 283;
                    continue _fun92995
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun92995_ip = 270;
                    continue _fun92995
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
                    _fun92995_ip = 163;
                    continue _fun92995
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun92995_ip = 179;
                    continue _fun92995
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun92995_ip = 249;
                    continue _fun92995
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun92995_ip = 249;
                    continue _fun92995
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun92995_ip = 234;
                    continue _fun92995
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun92995_ip = 247;
                    continue _fun92995
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun92995_ip = 265;
                continue _fun92995;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun92995_ip = 283;
                continue _fun92995;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun92995_ip = 323;
                    continue _fun92995
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
                    _fun92995_ip = 330;
                    continue _fun92995
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun92996: for (var _fun92996_ip = 0;;) switch (_fun92996_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun92996_ip = 56;
                                continue _fun92996
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
                            _fun92996_ip = 67;
                            continue _fun92996;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun92997: for (var _fun92997_ip = 0;;) switch (_fun92997_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun92997_ip = 23;
                    continue _fun92997
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun92997_ip = 33;
                    continue _fun92997
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
                    _fun92997_ip = 70;
                    continue _fun92997
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun92997_ip = 55;
                    continue _fun92997
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var5[var6];
    var8 = var7.bind(var0)(var6);
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var12 = 'AppDatabaseManager';
    var13 = var7;
    var6 = new var13[var8](var12, var11);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot7 = var6;
    var7 = var3.Set;
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = ['MESSAGE_CREATE'];
    var13 = var6;
    var3 = new var13[var7](var12, var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot8 = var3;
    var1 = function() { // Environment: var1
        var4 = function arg0, arg1, arg2() {
            var10 = arg0;
            var4 = arg2;
            var1 = this;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot4;
            var8 = _closure2_slot0;
            var0 = undefined;
            var5 = var5.bind(var0)(var1, var8);
            var5 = var8.computeEntries;
            var7 = var5.bind(var8)(var10, var4);
            var6 = _closure1_slot3;
            var5 = 2;
            var9 = var6.bind(var0)(var7, var5);
            var5 = 0;
            var6 = var9[var5];
            var7 = 1;
            var7 = var9[var7];
            var1.name = var10;
            var1.entries = var7;
            var1.actions = var6;
            var6 = null;
            var1.lastDatabase = var6;
            var11 = var8.register;
            var6 = '_CLEAR_CACHES';
            var17 = var10 + var6;
            var16 = ['CLEAR_CACHES'];
            var15 = new Array(0);
            var14 = function() { // Environment: var3
                _fun93000: for (var _fun93000_ip = 0;;) switch (_fun93000_ip) {
                    case 0:
                        var2 = _closure1_slot9;
                        var0 = _closure3_slot0;
                        var1 = var0.entries;
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.bind(var0)();
                        var1 = var2.done;
                        if (var1) {
                            _fun93000_ip = 69;
                            continue _fun93000
                        }
                    case 39:
                        var4 = var2.value;
                        var1 = var4.reset;
                        var1 = var1.bind(var4)();
                        var4 = var3.bind(var0)();
                        var1 = var4.done;
                        var2 = var4;
                        if (!var1) {
                            _fun93000_ip = 39;
                            continue _fun93000
                        }
                    case 69:
                        return var0;
                }
            };
            var18 = var8;
            var3 = var18[var11](var17, var16, var15, var14, var13);
            var7 = var8.register;
            var6 = var1.actions;
            var3 = var6.keys;
            var16 = var3.bind(var6)();
            var6 = new Array(0);
            var17 = var6;
            var15 = 0;
            var3 = arraySpread(var17, var16, var15);
            var5 = var1.handleAction;
            var3 = var5.bind;
            var14 = var3.bind(var5)(var1);
            var15 = arg1;
            var18 = var8;
            var17 = var10;
            var16 = var6;
            var3 = var18[var7](var17, var16, var15, var14, var13);
            var3 = _closure1_slot7;
            var2 = var3.verbose;
            var15 = var4.length;
            var1 = var1.actions;
            var13 = var1.size;
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var18 = '';
            var16 = ' created with ';
            var14 = ' modules, ';
            var12 = ' distinct actions.';
            var17 = var10;
            var1 = var18[var7](var17, var16, var15, var14, var13, var12, var11);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot5;
        var0 = {};
        var1 = 'handleAction';
        var0.key = var1;
        var1 = function arg0() {
            var3 = arg0;
            var2 = this;
            var1 = var2.validateInDev;
            var0 = var3.type;
            var0 = var1.bind(var2)(var0);
            var4 = _closure1_slot6;
            var1 = var4.getId;
            var4 = var1.bind(var4)();
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var0 = var1.database;
            var1 = var0.bind(var1)(var4);
            var0 = var2.resetModules;
            var0 = var0.bind(var2)(var3, var1);
            var0 = var2.executeModules;
            var0 = var0.bind(var2)(var3, var1);
            var0 = false;
            return var0;
        };
        var0.value = var1;
        var2 = new Array(4);
        var2[0] = var0;
        var0 = {};
        var1 = 'resetModules';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun93002: for (var _fun93002_ip = 0;;) switch (_fun93002_ip) {
                case 0:
                    var1 = arg1;
                    var0 = this;
                    var2 = var0.lastDatabase;
                    if (!(var1 !== var2)) {
                        _fun93002_ip = 160;
                        continue _fun93002
                    }
                case 19:
                    var5 = _closure1_slot7;
                    var4 = var5.verbose;
                    var17 = var0.lastDatabase;
                    var3 = arg0;
                    var13 = var3.type;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var9 = var3.concat;
                    var18 = 'database has changed (was: ';
                    var16 = ', now: ';
                    var14 = ', action: ';
                    var12 = '). resetting modules.';
                    var15 = var1;
                    var3 = var18[var9](var17, var16, var15, var14, var13, var12, var11);
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure1_slot9;
                    var2 = var0.entries;
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.bind(var5)();
                    var2 = var3.done;
                    if (var2) {
                        _fun93002_ip = 154;
                        continue _fun93002
                    }
                case 124:
                    var6 = var3.value;
                    var2 = var6.reset;
                    var2 = var2.bind(var6)();
                    var6 = var4.bind(var5)();
                    var2 = var6.done;
                    var3 = var6;
                    if (!var2) {
                        _fun93002_ip = 124;
                        continue _fun93002
                    }
                case 154:
                    var0.lastDatabase = var1;
                case 160:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var2[1] = var0;
        var0 = {};
        var1 = 'executeModules';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun93003: for (var _fun93003_ip = 0;;) switch (_fun93003_ip) {
                case 0:
                    var1 = arg0;
                    var6 = arg1;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var6;
                    var14 = var1.type;
                    var0 = this;
                    var3 = var0.actions;
                    var0 = var3.get;
                    var3 = var0.bind(var3)(var14);
                    var _closure3_slot2 = var3;
                    var5 = null;
                    var4 = var5 == var6;
                    var0 = undefined;
                    var13 = undefined;
                    if (var4) {
                        _fun93003_ip = 66;
                        continue _fun93003
                    }
                case 57:
                    var4 = var6.state;
                    var13 = var4.bind(var6)();
                case 66:
                    if (!(var5 != var3)) {
                        _fun93003_ip = 317;
                        continue _fun93003
                    }
                case 73:
                    var4 = var3.length;
                    var3 = 0;
                    if (!(var3 !== var4)) {
                        _fun93003_ip = 317;
                        continue _fun93003
                    }
                case 87:
                    if (!(var5 != var6)) {
                        _fun93003_ip = 130;
                        continue _fun93003
                    }
                case 91:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.DatabaseState;
                    var4 = var4.Open;
                    if (!(var13 !== var4)) {
                        _fun93003_ip = 198;
                        continue _fun93003
                    }
                case 130:
                    var8 = _closure1_slot7;
                    var7 = var8.verbose;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var12 = var4.concat;
                    var21 = 'no usable database; skipping action (type: ';
                    var19 = ', database: ';
                    var17 = ', state: ';
                    var15 = ')';
                    var20 = var14;
                    var18 = var6;
                    var16 = var13;
                    var4 = var21[var12](var20, var19, var18, var17, var16, var15, var14);
                    var4 = var7.bind(var8)(var4);
                    _fun93003_ip = 317;
                    continue _fun93003;
                case 198:
                    var4 = var6.transaction;
                    var8 = _closure1_slot8;
                    var7 = var8.has;
                    var3 = var1.type;
                    var3 = var7.bind(var8)(var3);
                    var5 = null;
                    if (var3) {
                        _fun93003_ip = 257;
                        continue _fun93003
                    }
                case 228:
                    var8 = var1.type;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var3 = 'Dispatch ';
                    var5 = var7.bind(var3)(var8);
                case 257:
                    var3 = function(arg0) { // Environment: var2
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var2 = _closure3_slot2;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var3 = arg0;
                            var2 = var3.execute;
                            var1 = _closure3_slot0;
                            var0 = _closure4_slot0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4 = var4.bind(var6)(var3, var5);
                    var3 = var4.catch;
                    var2 = function(arg0) { // Environment: var2
                        var4 = _closure2_slot0;
                        var3 = var4.handleException;
                        var2 = _closure3_slot1;
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var4 = var1.type;
                    var2 = 'WRITE_CACHES';
                    if (!(var2 === var4)) {
                        _fun93003_ip = 317;
                        continue _fun93003
                    }
                case 301:
                    var2 = var1.promisesToWaitOn;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                case 317:
                    return var0;
            }
        };
        var0.value = var1;
        var2[2] = var0;
        var0 = {};
        var1 = 'validateInDev';
        var0.key = var1;
        var1 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var2[3] = var0;
        var0 = {};
        var1 = 'handleException';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            var5 = arg2;
            var4 = _closure1_slot7;
            var3 = var4.info;
            var2 = var5.stack;
            var1 = 'disabling database · error encountered during dispatch';
            var1 = var3.bind(var4)(var1, var5, var2);
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'RESET_SOCKET';
            var1.type = var4;
            var4 = {};
            var4.error = var5;
            var5 = arg1;
            var8 = var5.type;
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var6 = 'AppDatabaseManager(';
            var5 = ')';
            var5 = var7.bind(var6)(var8, var5);
            var4.action = var5;
            var5 = true;
            var4.clearCache = var5;
            var1.args = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var6 = 'computeEntries';
        var0.key = var6;
        var6 = function arg0, arg1() {
            _fun93009: for (var _fun93009_ip = 0;;) switch (_fun93009_ip) {
                case 0:
                    var3 = arg1;
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = global;
                    var1 = var1.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var15 = var2;
                    var1 = new var15[var1](var14);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = var3.map;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 8;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var3 = var0.Entry;
                        var5 = _closure3_slot0;
                        var0 = var3.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = arg0;
                        var6 = var1;
                        var0 = new var6[var3](var5, var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    var1 = var1.bind(var3)(var0);
                    var4 = var2.set;
                    var3 = 'LOGOUT';
                    var0 = new Array(0);
                    var0 = var4.bind(var2)(var3, var0);
                    var4 = var2.set;
                    var3 = 'LOGIN_RESET';
                    var0 = new Array(0);
                    var0 = var4.bind(var2)(var3, var0);
                    var0 = _closure1_slot9;
                    var6 = undefined;
                    var5 = var0.bind(var6)(var1);
                    var3 = var5.bind(var6)();
                    var0 = var3.done;
                    var4 = var3;
                    var3 = undefined;
                    if (var0) {
                        _fun93009_ip = 244;
                        continue _fun93009
                    }
                case 126:
                    var10 = var4.value;
                    var8 = _closure1_slot9;
                    var0 = var10.actions;
                    var9 = var8.bind(var6)(var0);
                    var8 = var9.bind(var6)();
                    var0 = var8.done;
                    if (var0) {
                        _fun93009_ip = 229;
                        continue _fun93009
                    }
                case 158:
                    var11 = var8.value;
                    var0 = var2.has;
                    var0 = var0.bind(var2)(var11);
                    if (var0) {
                        _fun93009_ip = 191;
                        continue _fun93009
                    }
                case 176:
                    var12 = var2.set;
                    var0 = new Array(0);
                    var0 = var12.bind(var2)(var11, var0);
                case 191:
                    var0 = var2.get;
                    var12 = var0.bind(var2)(var11);
                    var0 = var12.push;
                    var0 = var0.bind(var12)(var10);
                    var12 = var9.bind(var6)();
                    var0 = var12.done;
                    var8 = var12;
                    var3 = var11;
                    if (!var0) {
                        _fun93009_ip = 158;
                        continue _fun93009
                    }
                case 229:
                    var8 = var5.bind(var6)();
                    var0 = var8.done;
                    var4 = var8;
                    if (!var0) {
                        _fun93009_ip = 126;
                        continue _fun93009
                    }
                case 244:
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var0.value = var6;
        var1[1] = var0;
        var0 = {};
        var6 = 'register';
        var0.key = var6;
        var5 = function arg0, arg1, arg2, arg3() {
            var12 = arg1;
            var1 = arg3;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 7;
            var6 = var4[var1];
            var2 = undefined;
            var9 = var3.bind(var2)(var6);
            var8 = var9.register;
            var6 = global;
            var10 = var6.Object;
            var7 = var10.fromEntries;
            var11 = var12.map;
            var6 = function(arg0) { // Environment: var0
                var0 = new Array(2);
                var1 = arg0;
                var0[0] = var1;
                var1 = _closure3_slot0;
                var0[1] = var1;
                return var0;
            };
            var6 = var11.bind(var12)(var6);
            var15 = var7.bind(var10)(var6);
            var6 = _closure1_slot0;
            var5 = var4[var1];
            var5 = var6.bind(var2)(var5);
            var5 = var5.DispatchBand;
            var13 = var5.Database;
            var16 = arg0;
            var14 = function() { // Environment: var0
                var0 = undefined;
                return var0;
            };
            var17 = var9;
            var0 = var17[var8](var16, var15, var14, var13, var12);
            var1 = var4[var1];
            var3 = var3.bind(var2)(var1);
            var2 = var3.addDependencies;
            var1 = arg2;
            var1 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var4, var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/system/AppDatabaseManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.AppDatabaseManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 1216, 3, 1653, 1638, 806, 12156, 2]);