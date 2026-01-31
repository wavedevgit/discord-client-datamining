// modules/headless_tasks/android/TTITestAction.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = require;
    var7 = metroImportDefault;
    var3 = dependencyMap;
    var _closure1_slot0 = var2;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var3;
    var0 = function arg0, arg1() {
        _fun118154: for (var _fun118154_ip = 0;;) switch (_fun118154_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun118154_ip = 46;
                    continue _fun118154
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun118154_ip = 55;
                    continue _fun118154
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun118154_ip = 345;
                    continue _fun118154
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun118154_ip = 323;
                    continue _fun118154
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun118154_ip = 283;
                    continue _fun118154
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun118154_ip = 270;
                    continue _fun118154
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
                    _fun118154_ip = 163;
                    continue _fun118154
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun118154_ip = 179;
                    continue _fun118154
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun118154_ip = 249;
                    continue _fun118154
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun118154_ip = 249;
                    continue _fun118154
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun118154_ip = 234;
                    continue _fun118154
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun118154_ip = 247;
                    continue _fun118154
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun118154_ip = 265;
                continue _fun118154;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun118154_ip = 283;
                continue _fun118154;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun118154_ip = 323;
                    continue _fun118154
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
                    _fun118154_ip = 330;
                    continue _fun118154
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun118155: for (var _fun118155_ip = 0;;) switch (_fun118155_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun118155_ip = 56;
                                continue _fun118155
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
                            _fun118155_ip = 67;
                            continue _fun118155;
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
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun118156: for (var _fun118156_ip = 0;;) switch (_fun118156_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun118156_ip = 23;
                    continue _fun118156
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun118156_ip = 33;
                    continue _fun118156
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
                    _fun118156_ip = 70;
                    continue _fun118156
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun118156_ip = 55;
                    continue _fun118156
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1, arg2() {
        var0 = _closure1_slot4;
        var2 = var0.TTIManager;
        var1 = var2.logToDevice;
        var0 = global;
        var4 = var0.JSON;
        var3 = var4.stringify;
        var0 = {};
        var5 = 'response';
        var0.type = var5;
        var5 = arg0;
        var0.status = var5;
        var5 = arg1;
        var0.message = var5;
        var6 = arg2;
        var7 = var0;
        var5 = copyDataProperties(var7, var6);
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        var5 = arg0;
        var2 = _closure1_slot12;
        var1 = var2.log;
        var1 = var1.bind(var2)(var5);
        var0 = _closure1_slot4;
        var2 = var0.TTIManager;
        var1 = var2.logToDevice;
        var0 = global;
        var4 = var0.JSON;
        var3 = var4.stringify;
        var0 = {};
        var6 = 'status';
        var0.type = var6;
        var0.message = var5;
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        _fun118159: for (var _fun118159_ip = 0;;) switch (_fun118159_ip) {
            case 0:
                var0 = arg0;
                var6 = null;
                if (!(var6 != var0)) {
                    _fun118159_ip = 211;
                    continue _fun118159
                }
            case 12:
                var2 = 'object';
                var1 = typeof var0;
                if (!(var2 === var1)) {
                    _fun118159_ip = 211;
                    continue _fun118159
                }
            case 26:
                var4 = global;
                var1 = var4.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var13 = var2;
                var1 = new var13[var1](var12);
                var3 = var1 instanceof Object ? var1 : var2;
                var5 = undefined;
                var1 = var0;
                if (!(var6 != var1)) {
                    _fun118159_ip = 158;
                    continue _fun118159
                }
            case 66:
                var8 = _closure1_slot14;
                var9 = var4.Object;
                var7 = var9.getOwnPropertyNames;
                var7 = var7.bind(var9)(var1);
                var10 = var8.bind(var5)(var7);
                var8 = var10.bind(var5)();
                var7 = var8.done;
                var9 = var1;
                if (var7) {
                    _fun118159_ip = 137;
                    continue _fun118159
                }
            case 107:
                var11 = var8.value;
                var7 = var3.add;
                var7 = var7.bind(var3)(var11);
                var11 = var10.bind(var5)();
                var7 = var11.done;
                var8 = var11;
                if (!var7) {
                    _fun118159_ip = 107;
                    continue _fun118159
                }
            case 137:
                var8 = var4.Object;
                var7 = var8.getPrototypeOf;
                var1 = var7.bind(var8)(var9);
                if (var6 != var1) {
                    _fun118159_ip = 66;
                    continue _fun118159
                }
            case 158:
                var1 = {};
                var2 = _closure1_slot14;
                var4 = var2.bind(var5)(var3);
                var3 = var4.bind(var5)();
                var2 = var3.done;
                if (var2) {
                    _fun118159_ip = 209;
                    continue _fun118159
                }
            case 181:
                var6 = var3.value;
                var2 = var0[var6];
                var1[var6] = var2;
                var6 = var4.bind(var5)();
                var2 = var6.done;
                var3 = var6;
                if (!var2) {
                    _fun118159_ip = 181;
                    continue _fun118159
                }
            case 209:
                return var1;
            case 211:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var5 = function() {
        var0 = undefined;
        var3 = _closure1_slot20;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun118163: for (var _fun118163_ip = 0;;) switch (_fun118163_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 5);
                        if (var5) {
                            _fun118163_ip = 1351;
                            continue _fun118163
                        }
                    case 18:
                        var19 = var3;
                        var _closure4_slot0 = var3;
                        var3 = undefined;
                        if (!(var1 === var3)) {
                            _fun118163_ip = 33;
                            continue _fun118163
                        }
                    case 31:
                        var1 = false;
                    case 33:
                        var4 = var1;
                        var _closure4_slot1 = var1;
                        var13 = undefined;
                        var _closure4_slot2 = var3;
                        var15 = undefined;
                        var12 = undefined;
                        var7 = undefined;
                        var10 = undefined;
                        SaveGenerator(address = 58);
                    case 56:
                        return var3;
                    case 58:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun118163_ip = 1348;
                            continue _fun118163
                        }
                    case 67:
                        var5 = var19;
                        var5 = var5.user;
                        var21 = null;
                        if (!(var21 != var5)) {
                            _fun118163_ip = 479;
                            continue _fun118163
                        }
                    case 84:
                        var5 = var19;
                        var6 = var5.user;
                        var6 = var6.email;
                        var13 = var6;
                        _closure4_slot2 = var6;
                        var6 = var5.user;
                        var15 = var6.password;
                        var5 = var5.user;
                        var12 = var5.expectedId;
                    case 129: // try_start_0
                        var8 = _closure1_slot8;
                        var6 = var8.getId;
                        var6 = var6.bind(var8)();
                        var6 = var21 != var6;
                        var5 = var6;
                        if (!var6) {
                            _fun118163_ip = 177;
                            continue _fun118163
                        }
                    case 156:
                        var8 = _closure1_slot8;
                        var6 = var8.getId;
                        var8 = var6.bind(var8)();
                        var6 = var12;
                        var5 = var8 !== var6;
                    case 177:
                        if (!var5) {
                            _fun118163_ip = 245;
                            continue _fun118163
                        }
                    case 180:
                        var6 = _closure1_slot17;
                        var5 = 'Logging out old user';
                        var5 = var6.bind(var3)(var5);
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 15;
                        var5 = var8[var5];
                        var8 = var6.bind(var3)(var5);
                        var6 = var8.logout;
                        var5 = 'TTI_test';
                        var5 = var6.bind(var8)(var5);
                        SaveGenerator(address = 236);
                    case 234:
                        return var5;
                    case 236:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun118163_ip = 1310;
                            continue _fun118163
                        }
                    case 245:
                        var8 = _closure1_slot8;
                        var6 = var8.getId;
                        var8 = var6.bind(var8)();
                        var6 = var12;
                        if (!(var8 !== var6)) {
                            _fun118163_ip = 479;
                            continue _fun118163
                        }
                    case 269:
                        var8 = _closure1_slot17;
                        var6 = 'Logging in new user';
                        var6 = var8.bind(var3)(var6);
                        var9 = global;
                        var14 = var9.Promise;
                        var6 = var14.prototype;
                        var8 = Object.create(var6, {
                            constructor: {
                                value: var14
                            }
                        });
                        var30 = function(arg0, arg1) { // Environment: var22
                            _fun118164: for (var _fun118164_ip = 0;;) switch (_fun118164_ip) {
                                case 0:
                                    var0 = arg0;
                                    var _closure5_slot0 = var0;
                                    var0 = arg1;
                                    var _closure5_slot1 = var0;
                                    var3 = function arg0, arg1() {
                                        var4 = arg0;
                                        var _closure6_slot0 = var4;
                                        var0 = arg1;
                                        var _closure6_slot1 = var0;
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 11;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.subscribe;
                                        var1 = function() {
                                            var2 = _closure6_slot1;
                                            var4 = _closure6_slot0;
                                            var0 = undefined;
                                            var2 = var2.bind(var0)(var4);
                                            var3 = _closure1_slot1;
                                            var5 = _closure1_slot2;
                                            var2 = 11;
                                            var2 = var5[var2];
                                            var3 = var3.bind(var0)(var2);
                                            var2 = var3.unsubscribe;
                                            var1 = _closure6_slot2;
                                            var1 = var2.bind(var3)(var4, var1);
                                            return var0;
                                        };
                                        var _closure6_slot2 = var1;
                                        var1 = var2.bind(var3)(var4, var1);
                                        return var0;
                                    };
                                    var5 = ['LOGIN_MFA_STEP', 'LOGIN_SUSPENDED_USER', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED', 'LOGIN_FAILURE'];
                                    var0 = var5.length;
                                    var4 = 0;
                                    var2 = var4 < var0;
                                    var0 = undefined;
                                    if (!var2) {
                                        _fun118164_ip = 78;
                                        continue _fun118164
                                    }
                                case 49:
                                    var6 = var5[var4];
                                    var2 = function(arg0) { // Environment: var1
                                        var2 = _closure5_slot1;
                                        var0 = global;
                                        var3 = var0.Error;
                                        var11 = _closure4_slot2;
                                        var0 = var0.HermesInternal;
                                        var6 = var0.concat;
                                        var12 = 'Unable to login ';
                                        var10 = ". Login failed with event '";
                                        var9 = arg0;
                                        var8 = "'";
                                        var11 = var12[var6](var11, var10, var9, var8, var7);
                                        var1 = var3.prototype;
                                        var1 = Object.create(var1, {
                                            constructor: {
                                                value: var3
                                            }
                                        });
                                        var12 = var1;
                                        var0 = new var12[var3](var11, var10);
                                        var1 = var0 instanceof Object ? var0 : var1;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var2 = var3.bind(var0)(var6, var2);
                                    var4 = var4 + 1;
                                    var2 = var5.length;
                                    if (var4 < var2) {
                                        _fun118164_ip = 49;
                                        continue _fun118164
                                    }
                                case 78:
                                    var2 = 'LOGIN_SUCCESS';
                                    var1 = function() { // Environment: var1
                                        var1 = _closure5_slot0;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                        return var0;
                                    };
                                    var1 = var3.bind(var0)(var2, var1);
                                    return var0;
                            }
                        };
                        var31 = var8;
                        var6 = new var31[var14](var30, var29);
                        var7 = var6 instanceof Object ? var6 : var8;
                        var8 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var6 = 15;
                        var6 = var14[var6];
                        var14 = var8.bind(var3)(var6);
                        var8 = var14.login;
                        var6 = {};
                        var16 = var13;
                        var6.login = var16;
                        var6.password = var15;
                        var6 = var8.bind(var14)(var6);
                        SaveGenerator(address = 369);
                    case 367:
                        return var6;
                    case 369:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 8);
                        if (var8) {
                            _fun118163_ip = 1307;
                            continue _fun118163
                        }
                    case 378:
                        SaveGenerator(address = 382);
                    case 380:
                        return var7;
                    case 382:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                        if (var8) {
                            _fun118163_ip = 1304;
                            continue _fun118163
                        }
                    case 391:
                        var14 = _closure1_slot17;
                        var8 = 'Waiting for socket connection';
                        var8 = var14.bind(var3)(var8);
                        var15 = var9.Promise;
                        var8 = var15.prototype;
                        var14 = Object.create(var8, {
                            constructor: {
                                value: var15
                            }
                        });
                        var30 = function(arg0) { // Environment: var22
                            var2 = _closure1_slot7;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var31 = var14;
                        var8 = new var31[var15](var30, var29);
                        var8 = var8 instanceof Object ? var8 : var14;
                        SaveGenerator(address = 443);
                    case 441:
                        return var8;
                    case 443:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 14);
                        if (var14) {
                            _fun118163_ip = 1301;
                            continue _fun118163
                        }
                    case 452:
                        var14 = _closure1_slot8;
                        var11 = var14.getId;
                        var14 = var11.bind(var14)();
                        var10 = var14;
                        var11 = var12;
                        if (!(var14 === var11)) {
                            _fun118163_ip = 1231;
                            continue _fun118163
                        }
                    case 479: // try_end0
                        var14 = _closure1_slot17;
                        var11 = 'Waiting for socket connection';
                        var11 = var14.bind(var3)(var11);
                        var17 = global;
                        var15 = var17.Promise;
                        var11 = var15.prototype;
                        var14 = Object.create(var11, {
                            constructor: {
                                value: var15
                            }
                        });
                        var30 = function(arg0) { // Environment: var22
                            var2 = _closure1_slot7;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var31 = var14;
                        var11 = new var31[var15](var30, var29);
                        var11 = var11 instanceof Object ? var11 : var14;
                        SaveGenerator(address = 536);
                    case 534:
                        return var11;
                    case 536:
                        ResumeGenerator(result_out_reg = 11, return_bool_out_reg = 14);
                        if (var14) {
                            _fun118163_ip = 1228;
                            continue _fun118163
                        }
                    case 545:
                        var16 = var17.Promise;
                        var14 = var16.prototype;
                        var15 = Object.create(var14, {
                            constructor: {
                                value: var16
                            }
                        });
                        var30 = function(arg0) { // Environment: var22
                            var0 = global;
                            var3 = var0.setTimeout;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = 1000;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var31 = var15;
                        var14 = new var31[var16](var30, var29);
                        var14 = var14 instanceof Object ? var14 : var15;
                        SaveGenerator(address = 582);
                    case 580:
                        return var14;
                    case 582:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 15);
                        if (var15) {
                            _fun118163_ip = 1225;
                            continue _fun118163
                        }
                    case 591:
                        var15 = var19;
                        var15 = var15.invite;
                        var15 = var21 != var15;
                        if (!var15) {
                            _fun118163_ip = 640;
                            continue _fun118163
                        }
                    case 607:
                        var23 = _closure1_slot10;
                        var20 = var23.getGuild;
                        var16 = var19;
                        var16 = var16.invite;
                        var16 = var16.expectedGuildId;
                        var16 = var20.bind(var23)(var16);
                        var15 = var21 == var16;
                    case 640:
                        if (!var15) {
                            _fun118163_ip = 822;
                            continue _fun118163
                        }
                    case 646:
                        var15 = var4;
                        if (var15) {
                            _fun118163_ip = 667;
                            continue _fun118163
                        }
                    case 652:
                        var16 = _closure1_slot17;
                        var15 = 'Inviting to target guild';
                        var15 = var16.bind(var3)(var15);
                    case 667:
                        var16 = _closure1_slot1;
                        var20 = _closure1_slot2;
                        var15 = 16;
                        var15 = var20[var15];
                        var20 = var16.bind(var3)(var15);
                        var16 = var20.acceptInvite;
                        var15 = {};
                        var23 = var19;
                        var23 = var23.invite;
                        var23 = var23.code;
                        var15.inviteKey = var23;
                        var23 = {};
                        var24 = 'tti_tests';
                        var23.location = var24;
                        var15.context = var23;
                        var23 = true;
                        var15.skipOnboarding = var23;
                        var15 = var16.bind(var20)(var15);
                        SaveGenerator(address = 746);
                    case 744:
                        return var15;
                    case 746:
                        ResumeGenerator(result_out_reg = 15, return_bool_out_reg = 16);
                        if (var16) {
                            _fun118163_ip = 1222;
                            continue _fun118163
                        }
                    case 755:
                        var16 = var4;
                        if (var16) {
                            _fun118163_ip = 776;
                            continue _fun118163
                        }
                    case 761:
                        var20 = _closure1_slot17;
                        var16 = 'Invite API call finished';
                        var16 = var20.bind(var3)(var16);
                    case 776:
                        var23 = var17.Promise;
                        var16 = var23.prototype;
                        var20 = Object.create(var16, {
                            constructor: {
                                value: var23
                            }
                        });
                        var30 = function(arg0, arg1) { // Environment: var22
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var0 = global;
                            var4 = var0.setTimeout;
                            var0 = undefined;
                            var3 = arg1;
                            var2 = 15000;
                            var2 = var4.bind(var0)(var3, var2);
                            var _closure5_slot1 = var2;
                            var3 = _closure1_slot10;
                            var2 = var3.addConditionalChangeListener;
                            var1 = function() { // Environment: var1
                                _fun118173: for (var _fun118173_ip = 0;;) switch (_fun118173_ip) {
                                    case 0:
                                        var4 = _closure1_slot10;
                                        var3 = var4.getGuild;
                                        var2 = _closure4_slot0;
                                        var2 = var2.invite;
                                        var2 = var2.expectedGuildId;
                                        var3 = var3.bind(var4)(var2);
                                        var2 = null;
                                        if (!(var2 == var3)) {
                                            _fun118173_ip = 46;
                                            continue _fun118173
                                        }
                                    case 42:
                                        var2 = undefined;
                                        return var2;
                                    case 46:
                                        var1 = _closure4_slot1;
                                        if (var1) {
                                            _fun118173_ip = 70;
                                            continue _fun118173
                                        }
                                    case 53:
                                        var2 = _closure1_slot17;
                                        var1 = undefined;
                                        var0 = 'Invited guild available in the store';
                                        var0 = var2.bind(var1)(var0);
                                    case 70:
                                        var0 = global;
                                        var3 = var0.clearTimeout;
                                        var2 = _closure5_slot1;
                                        var1 = undefined;
                                        var2 = var3.bind(var1)(var2);
                                        var0 = _closure5_slot0;
                                        var0 = var0.bind(var1)();
                                        var0 = false;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var31 = var20;
                        var16 = new var31[var23](var30, var29);
                        var16 = var16 instanceof Object ? var16 : var20;
                        SaveGenerator(address = 813);
                    case 811:
                        return var16;
                    case 813:
                        ResumeGenerator(result_out_reg = 16, return_bool_out_reg = 20);
                        if (var20) {
                            _fun118163_ip = 1219;
                            continue _fun118163
                        }
                    case 822:
                        var20 = var19;
                        var20 = var20.channelId;
                        if (!(var21 != var20)) {
                            _fun118163_ip = 972;
                            continue _fun118163
                        }
                    case 837:
                        var24 = _closure1_slot9;
                        var23 = var24.getChannel;
                        var20 = var19;
                        var20 = var20.channelId;
                        var20 = var23.bind(var24)(var20);
                        if (!(var21 != var20)) {
                            _fun118163_ip = 1129;
                            continue _fun118163
                        }
                    case 866:
                        var20 = var4;
                        if (var20) {
                            _fun118163_ip = 887;
                            continue _fun118163
                        }
                    case 872:
                        var21 = _closure1_slot17;
                        var20 = 'Switching to desired channel';
                        var20 = var21.bind(var3)(var20);
                    case 887:
                        var21 = _closure1_slot0;
                        var23 = _closure1_slot2;
                        var20 = 17;
                        var20 = var23[var20];
                        var23 = var21.bind(var3)(var20);
                        var21 = var23.transitionToChannel;
                        var20 = var19;
                        var20 = var20.channelId;
                        var20 = var21.bind(var23)(var20);
                        var23 = var17.Promise;
                        var20 = var23.prototype;
                        var21 = Object.create(var20, {
                            constructor: {
                                value: var23
                            }
                        });
                        var30 = function(arg0) { // Environment: var22
                            var0 = global;
                            var3 = var0.setTimeout;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = 1000;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var31 = var21;
                        var20 = new var31[var23](var30, var29);
                        var20 = var20 instanceof Object ? var20 : var21;
                        SaveGenerator(address = 963);
                    case 961:
                        return var20;
                    case 963:
                        ResumeGenerator(result_out_reg = 20, return_bool_out_reg = 21);
                        if (var21) {
                            _fun118163_ip = 1126;
                            continue _fun118163
                        }
                    case 972:
                        var21 = var4;
                        if (var21) {
                            _fun118163_ip = 993;
                            continue _fun118163
                        }
                    case 978:
                        var23 = _closure1_slot17;
                        var21 = 'Writing caches';
                        var21 = var23.bind(var3)(var21);
                    case 993:
                        var23 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var21 = 18;
                        var21 = var24[var21];
                        var23 = var23.bind(var3)(var21);
                        var21 = var23.writeCaches;
                        var21 = var21.bind(var23)();
                        SaveGenerator(address = 1027);
                    case 1025:
                        return var21;
                    case 1027:
                        ResumeGenerator(result_out_reg = 21, return_bool_out_reg = 23);
                        if (var23) {
                            _fun118163_ip = 1123;
                            continue _fun118163
                        }
                    case 1033:
                        var24 = var17.Promise;
                        var23 = var24.prototype;
                        var23 = Object.create(var23, {
                            constructor: {
                                value: var24
                            }
                        });
                        var30 = function(arg0) { // Environment: var22
                            var0 = global;
                            var3 = var0.setTimeout;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = 1000;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var31 = var23;
                        var22 = new var31[var24](var30, var29);
                        var22 = var22 instanceof Object ? var22 : var23;
                        SaveGenerator(address = 1070);
                    case 1068:
                        return var22;
                    case 1070:
                        ResumeGenerator(result_out_reg = 22, return_bool_out_reg = 23);
                        if (var23) {
                            _fun118163_ip = 1120;
                            continue _fun118163
                        }
                    case 1076:
                        var23 = var4;
                        if (var23) {
                            _fun118163_ip = 1117;
                            continue _fun118163
                        }
                    case 1082:
                        var24 = _closure1_slot17;
                        var23 = 'Sending reply';
                        var23 = var24.bind(var3)(var23);
                        var25 = _closure1_slot16;
                        var24 = 'success';
                        var23 = 'Setup Complete';
                        var23 = var25.bind(var3)(var24, var23);
                    case 1117:
                        return var3;
                    case 1120:
                        return var22;
                    case 1123:
                        return var21;
                    case 1126:
                        return var20;
                    case 1129:
                        var20 = var17.Error;
                        var22 = var19.channelId;
                        var17 = var17.HermesInternal;
                        var21 = var17.concat;
                        var19 = 'Unable to switch to channel ';
                        var17 = ' because it does not exist on the client';
                        var30 = var21.bind(var19)(var22, var17);
                        var19 = var20.prototype;
                        var19 = Object.create(var19, {
                            constructor: {
                                value: var20
                            }
                        });
                        var31 = var19;
                        var17 = new var31[var20](var30, var29);
                        var17 = var17 instanceof Object ? var17 : var19;
                        var19 = var4;
                        if (var19) {
                            _fun118163_ip = 1217;
                            continue _fun118163
                        }
                    case 1195:
                        var20 = _closure1_slot16;
                        var19 = var17.message;
                        var18 = 'error';
                        var18 = var20.bind(var3)(var18, var19);
                        return var3;
                    case 1217:
                        throw var17;
                    case 1219:
                        return var16;
                    case 1222:
                        return var15;
                    case 1225:
                        return var14;
                    case 1228:
                        return var11;
                    case 1231: // try_start_1
                        var11 = var9.Error;
                        var30 = var13;
                        var28 = var12;
                        var26 = var10;
                        var9 = var9.HermesInternal;
                        var13 = var9.concat;
                        var31 = 'Unable to login ';
                        var29 = ', expected id ';
                        var27 = ' after login but was ';
                        var30 = var31[var13](var30, var29, var28, var27, var26, var25);
                        var10 = var11.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var11
                            }
                        });
                        var31 = var10;
                        var9 = new var31[var11](var30, var29);
                        var9 = var9 instanceof Object ? var9 : var10;
                        throw var9;
                    case 1301: // try_end1
                        return var8;
                    case 1304:
                        return var7;
                    case 1307:
                        return var6;
                    case 1310:
                        return var5;
                    case 1313: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 2);
                        if (var4) {
                            _fun118163_ip = 1346;
                            continue _fun118163
                        }
                    case 1318:
                        var6 = _closure1_slot16;
                        var4 = var2;
                        var5 = var4.message;
                        var4 = 'error';
                        var4 = var6.bind(var3)(var4, var5);
                        return var3;
                    case 1346:
                        throw var2;
                    case 1348:
                        return var1;
                    case 1351:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot22;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun118179: for (var _fun118179_ip = 0;;) switch (_fun118179_ip) {
                    case 0:
                        StartGenerator();
                        var16 = arg0;
                        var1 = arg2;
                        var15 = arg3;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun118179_ip = 554;
                            continue _fun118179
                        }
                    case 21:
                        var _closure4_slot0 = var16;
                        var2 = arg1;
                        var _closure4_slot1 = var2;
                        var3 = _closure1_slot8;
                        var2 = var3.getId;
                        var2 = var2.bind(var3)();
                        if (!(var2 === var15)) {
                            _fun118179_ip = 83;
                            continue _fun118179
                        }
                    case 53:
                        var3 = null;
                        if (!(var3 == var1)) {
                            _fun118179_ip = 551;
                            continue _fun118179
                        }
                    case 62:
                        var4 = _closure1_slot8;
                        var2 = var4.getToken;
                        var2 = var2.bind(var4)();
                        if (!(var3 == var2)) {
                            _fun118179_ip = 548;
                            continue _fun118179
                        }
                    case 83:
                        var4 = _closure1_slot8;
                        var3 = var4.getId;
                        var3 = var3.bind(var4)();
                        var4 = null;
                        if (!(var4 != var3)) {
                            _fun118179_ip = 155;
                            continue _fun118179
                        }
                    case 103:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 15;
                        var5 = var5[var3];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.logout;
                        var3 = 'TTI_test';
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 146);
                    case 144:
                        return var3;
                    case 146:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun118179_ip = 545;
                            continue _fun118179
                        }
                    case 155:
                        if (!(var4 != var1)) {
                            _fun118179_ip = 345;
                            continue _fun118179
                        }
                    case 162:
                        var6 = global;
                        var7 = var6.fetch;
                        var5 = {};
                        var4 = 'HEAD';
                        var5.method = var4;
                        var4 = {};
                        var4.Authorization = var1;
                        var5.headers = var4;
                        var9 = undefined;
                        var4 = 'https://discord.com/api/users/@me/settings-proto/2';
                        var4 = var7.bind(var9)(var4, var5);
                        SaveGenerator(address = 213);
                    case 211:
                        return var4;
                    case 213:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun118179_ip = 542;
                            continue _fun118179
                        }
                    case 222:
                        var5 = var4.ok;
                        if (!var5) {
                            _fun118179_ip = 345;
                            continue _fun118179
                        }
                    case 231:
                        var7 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var5 = 15;
                        var5 = var11[var5];
                        var9 = var7.bind(var9)(var5);
                        var7 = var9.loginToken;
                        var5 = false;
                        var5 = var7.bind(var9)(var1, var5);
                        SaveGenerator(address = 269);
                    case 267:
                        return var5;
                    case 269:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                        if (var7) {
                            _fun118179_ip = 539;
                            continue _fun118179
                        }
                    case 278:
                        var9 = var6.Promise;
                        var6 = var9.prototype;
                        var7 = Object.create(var6, {
                            constructor: {
                                value: var9
                            }
                        });
                        var21 = function(arg0) { // Environment: var8
                            var2 = _closure1_slot7;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var22 = var7;
                        var6 = new var22[var9](var21, var20);
                        var6 = var6 instanceof Object ? var6 : var7;
                        SaveGenerator(address = 315);
                    case 313:
                        return var6;
                    case 315:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun118179_ip = 536;
                            continue _fun118179
                        }
                    case 324:
                        var9 = _closure1_slot8;
                        var7 = var9.getId;
                        var7 = var7.bind(var9)();
                        if (!(var7 !== var15)) {
                            _fun118179_ip = 533;
                            continue _fun118179
                        }
                    case 345:
                        var9 = global;
                        var12 = var9.Promise;
                        var7 = var12.prototype;
                        var11 = Object.create(var7, {
                            constructor: {
                                value: var12
                            }
                        });
                        var21 = function(arg0, arg1) { // Environment: var8
                            _fun118181: for (var _fun118181_ip = 0;;) switch (_fun118181_ip) {
                                case 0:
                                    var0 = arg0;
                                    var _closure5_slot0 = var0;
                                    var0 = arg1;
                                    var _closure5_slot1 = var0;
                                    var5 = function arg0() {
                                        var4 = arg0;
                                        var _closure6_slot0 = var4;
                                        var3 = _closure1_slot23;
                                        var5 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var0 = 11;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var2 = var5.bind(var0)(var2);
                                        var1 = function() { // Environment: var1
                                            var2 = _closure5_slot1;
                                            var0 = global;
                                            var3 = var0.Error;
                                            var11 = _closure4_slot0;
                                            var9 = _closure6_slot0;
                                            var0 = var0.HermesInternal;
                                            var5 = var0.concat;
                                            var12 = 'Unable to login ';
                                            var10 = ". Login failed with action '";
                                            var8 = "'";
                                            var11 = var12[var5](var11, var10, var9, var8, var7);
                                            var1 = var3.prototype;
                                            var1 = Object.create(var1, {
                                                constructor: {
                                                    value: var3
                                                }
                                            });
                                            var12 = var1;
                                            var0 = new var12[var3](var11, var10);
                                            var1 = var0 instanceof Object ? var0 : var1;
                                            var0 = undefined;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var1 = var3.bind(var0)(var2, var4, var1);
                                        return var0;
                                    };
                                    var4 = ['LOGIN_FAILURE', 'PASSWORDLESS_FAILURE', 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION', 'LOGIN_ACCOUNT_DISABLED', 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED'];
                                    var0 = var4.length;
                                    var3 = 0;
                                    var2 = var3 < var0;
                                    var0 = undefined;
                                    if (!var2) {
                                        _fun118181_ip = 70;
                                        continue _fun118181
                                    }
                                case 49:
                                    var2 = var4[var3];
                                    var2 = var5.bind(var0)(var2);
                                    var3 = var3 + 1;
                                    var2 = var4.length;
                                    if (var3 < var2) {
                                        _fun118181_ip = 49;
                                        continue _fun118181
                                    }
                                case 70:
                                    var6 = _closure1_slot23;
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var4 = 11;
                                    var4 = var3[var4];
                                    var5 = var2.bind(var0)(var4);
                                    var4 = 'LOGIN_SUCCESS';
                                    var1 = function(arg0) { // Environment: var1
                                        var2 = _closure5_slot0;
                                        var0 = arg0;
                                        var1 = var0.token;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var1 = var6.bind(var0)(var5, var4, var1);
                                    var1 = 15;
                                    var1 = var3[var1];
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.login;
                                    var1 = {};
                                    var5 = _closure4_slot0;
                                    var1.login = var5;
                                    var4 = _closure4_slot1;
                                    var1.password = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var22 = var11;
                        var7 = new var22[var12](var21, var20);
                        var7 = var7 instanceof Object ? var7 : var11;
                        SaveGenerator(address = 384);
                    case 382:
                        return var7;
                    case 384:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 11);
                        if (var11) {
                            _fun118179_ip = 530;
                            continue _fun118179
                        }
                    case 393:
                        var12 = var9.Promise;
                        var11 = var12.prototype;
                        var11 = Object.create(var11, {
                            constructor: {
                                value: var12
                            }
                        });
                        var21 = function(arg0) { // Environment: var8
                            var2 = _closure1_slot7;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var22 = var11;
                        var8 = new var22[var12](var21, var20);
                        var8 = var8 instanceof Object ? var8 : var11;
                        SaveGenerator(address = 430);
                    case 428:
                        return var8;
                    case 430:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 11);
                        if (var11) {
                            _fun118179_ip = 527;
                            continue _fun118179
                        }
                    case 436:
                        var11 = _closure1_slot8;
                        var10 = var11.getId;
                        var14 = var10.bind(var11)();
                        if (!(var14 === var15)) {
                            _fun118179_ip = 457;
                            continue _fun118179
                        }
                    case 454:
                        return var7;
                    case 457:
                        var11 = var9.Error;
                        var9 = var9.HermesInternal;
                        var13 = var9.concat;
                        var22 = 'Unable to login ';
                        var20 = ', expected id ';
                        var18 = ' after login but was ';
                        var21 = var16;
                        var19 = var15;
                        var17 = var14;
                        var21 = var22[var13](var21, var20, var19, var18, var17, var16);
                        var10 = var11.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var11
                            }
                        });
                        var22 = var10;
                        var9 = new var22[var11](var21, var20);
                        var9 = var9 instanceof Object ? var9 : var10;
                        throw var9;
                    case 527:
                        return var8;
                    case 530:
                        return var7;
                    case 533:
                        return var1;
                    case 536:
                        return var6;
                    case 539:
                        return var5;
                    case 542:
                        return var4;
                    case 545:
                        return var3;
                    case 548:
                        return var2;
                    case 551:
                        return var1;
                    case 554:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot22 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function arg0, arg1, arg2() {
        var3 = arg0;
        var2 = arg1;
        var _closure2_slot0 = var3;
        var _closure2_slot1 = var2;
        var0 = arg2;
        var _closure2_slot2 = var0;
        var1 = var3.subscribe;
        var0 = function arg0() {
            var4 = _closure2_slot0;
            var3 = var4.unsubscribe;
            var2 = _closure2_slot1;
            var1 = _closure2_slot3;
            var1 = var3.bind(var4)(var2, var1);
            var2 = _closure2_slot2;
            var1 = undefined;
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var _closure2_slot3 = var0;
        var0 = var1.bind(var3)(var2, var0);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = 0;
    var4 = var3[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var4);
    var _closure1_slot3 = var6;
    var4 = 1;
    var4 = var3[var4];
    var4 = var2.bind(var0)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var3[var4];
    var4 = var2.bind(var0)(var4);
    var4 = var4.applicationReady;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var3[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var3[var4];
    var4 = var2.bind(var0)(var4);
    var4 = var4.addPostConnectionCallback;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var3[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var3[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var3[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var3[var4];
    var8 = var7.bind(var0)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var9 = 'TTITestAction';
    var10 = var7;
    var4 = new var10[var8](var9, var8);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var4['setup-test'] = var5;
    var5 = function() {
        var0 = _closure1_slot4;
        var2 = var0.TTIManager;
        var1 = var2.logToDevice;
        var0 = global;
        var4 = var0.JSON;
        var3 = var4.stringify;
        var0 = {};
        var5 = 'pong';
        var0.type = var5;
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var4.ping = var5;
    var5 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.resetComponentProfiler;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot16;
        var2 = 'success';
        var1 = 'reset-component-profiler';
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var4['reset-component-profiler'] = var5;
    var5 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.pauseComponentProfiler;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot16;
        var2 = 'success';
        var1 = 'pause-component-profiler';
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var4['pause-component-profiler'] = var5;
    var5 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.resumeComponentProfiler;
        var2 = var2.bind(var3)();
        var3 = _closure1_slot16;
        var2 = 'success';
        var1 = 'resume-component-profiler';
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var4['resume-component-profiler'] = var5;
    var5 = function() {
        var4 = _closure1_slot16;
        var3 = {};
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dumpStats;
        var1 = var1.bind(var2)();
        var3.stats = var1;
        var2 = 'success';
        var1 = 'dump-component-profiler-stats';
        var1 = var4.bind(var0)(var2, var1, var3);
        return var0;
    };
    var4['dump-component-profiler-stats'] = var5;
    var5 = function() {
        _fun118193: for (var _fun118193_ip = 0;;) switch (_fun118193_ip) {
            case 0:
                var4 = _closure1_slot16;
                var3 = {};
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var6 = 10;
                var1 = var0[var6];
                var0 = undefined;
                var5 = var5.bind(var0)(var1);
                var1 = null;
                var5 = var1 == var5;
                var1 = undefined;
                if (var5) {
                    _fun118193_ip = 69;
                    continue _fun118193
                }
            case 42:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var5 = var5.bind(var0)(var2);
                var2 = var5.requestReport;
                var1 = var2.bind(var5)();
            case 69:
                var3.report = var1;
                var2 = 'success';
                var1 = 'dump-jank-stats';
                var1 = var4.bind(var0)(var2, var1, var3);
                return var0;
        }
    };
    var4['dump-jank-stats'] = var5;
    var5 = function arg0() {
        _fun118194: for (var _fun118194_ip = 0;;) switch (_fun118194_ip) {
            case 0:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 10;
                var2 = var0[var4];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun118194_ip = 70;
                    continue _fun118194
                }
            case 31:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var4 = var3.bind(var0)(var2);
                var3 = var4.setJankHeuristicMultiplier;
                var2 = arg0;
                var2 = var2.multiplier;
                var2 = var3.bind(var4)(var2);
            case 70:
                var3 = _closure1_slot16;
                var2 = 'success';
                var1 = 'set-jank-multiplier';
                var1 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var4['set-jank-multiplier'] = var5;
    var5 = function() {
        _fun118195: for (var _fun118195_ip = 0;;) switch (_fun118195_ip) {
            case 0:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 10;
                var2 = var0[var4];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun118195_ip = 58;
                    continue _fun118195
                }
            case 31:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var3 = var3.bind(var0)(var2);
                var2 = var3.startTracking;
                var2 = var2.bind(var3)();
            case 58:
                var3 = _closure1_slot16;
                var2 = 'success';
                var1 = 'start-jank-stats';
                var1 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var4['start-jank-stats'] = var5;
    var5 = function arg0() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 11;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.dispatch;
        var2 = arg0;
        var2 = var2.action;
        var2 = var3.bind(var4)(var2);
        var3 = _closure1_slot16;
        var2 = 'success';
        var1 = 'flux-dispatch';
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var4['flux-dispatch'] = var5;
    var5 = function() {
        var4 = _closure1_slot16;
        var3 = {};
        var1 = _closure1_slot8;
        var0 = var1.getToken;
        var0 = var0.bind(var1)();
        var3.token = var0;
        var0 = undefined;
        var2 = 'success';
        var1 = 'get-token';
        var1 = var4.bind(var0)(var2, var1, var3);
        return var0;
    };
    var4['get-token'] = var5;
    var5 = function() {
        var4 = _closure1_slot16;
        var3 = {};
        var2 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 12;
        var6 = var5[var1];
        var0 = undefined;
        var7 = var2.bind(var0)(var6);
        var6 = var7.getCumulativeCPUUsage;
        var6 = var6.bind(var7)();
        var3.cumulativeCPU = var6;
        var1 = var5[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.getCurrentMemoryUsageKB;
        var1 = var1.bind(var2)();
        var3.currentMemoryUsage = var1;
        var2 = 'success';
        var1 = 'get-resource-usage';
        var1 = var4.bind(var0)(var2, var1, var3);
        return var0;
    };
    var4['get-resource-usage'] = var5;
    var5 = function*(arg0) { // Environment: var1
        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
            _fun118200: for (var _fun118200_ip = 0;;) switch (_fun118200_ip) {
                case 0:
                    StartGenerator();
                    var5 = arg0;
                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 6);
                    if (var6) {
                        _fun118200_ip = 1161;
                        continue _fun118200
                    }
                case 13:
                    var6 = undefined;
                    var1 = undefined;
                    var15 = undefined;
                    var16 = undefined;
                    var7 = undefined;
                    var8 = undefined;
                    var2 = undefined;
                    var4 = undefined;
                    var11 = undefined;
                    var10 = undefined;
                    var3 = undefined;
                    var1 = var5.reply;
                    var15 = var5.source;
                    var14 = var5.args;
                    var9 = {};
                    var12 = {};
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var13 = 13;
                    var13 = var18[var13];
                    var13 = var17.bind(var6)(var13);
                    var13 = var13.getConstants;
                    var12.getConstants = var13;
                    var9.ClientInfoUtils = var12;
                    var12 = {};
                    var13 = 9;
                    var19 = var18[var13];
                    var19 = var17.bind(var6)(var19);
                    var19 = var19.resetComponentProfiler;
                    var12.resetComponentProfiler = var19;
                    var19 = var18[var13];
                    var19 = var17.bind(var6)(var19);
                    var19 = var19.resumeComponentProfiler;
                    var12.resumeComponentProfiler = var19;
                    var19 = var18[var13];
                    var19 = var17.bind(var6)(var19);
                    var19 = var19.pauseComponentProfiler;
                    var12.pauseComponentProfiler = var19;
                    var13 = var18[var13];
                    var13 = var17.bind(var6)(var13);
                    var13 = var13.dumpStats;
                    var12.dumpStats = var13;
                    var9.ComponentProfiler = var12;
                    var13 = _closure1_slot1;
                    var12 = 11;
                    var12 = var18[var12];
                    var12 = var13.bind(var6)(var12);
                    var9.Dispatcher = var12;
                    var12 = _closure1_slot6;
                    var9.ExperimentStore = var12;
                    var12 = 10;
                    var12 = var18[var12];
                    var12 = var13.bind(var6)(var12);
                    var9.NativeJankStats = var12;
                    var12 = 12;
                    var12 = var18[var12];
                    var12 = var13.bind(var6)(var12);
                    var9.ProcessUtils = var12;
                    var12 = {};
                    var13 = 14;
                    var19 = var18[var13];
                    var19 = var17.bind(var6)(var19);
                    var19 = var19.startRecordingAnalyticsEvents;
                    var12.startRecordingAnalyticsEvents = var19;
                    var19 = var18[var13];
                    var19 = var17.bind(var6)(var19);
                    var19 = var19.stopRecordingAnalyticsEvents;
                    var12.stopRecordingAnalyticsEvents = var19;
                    var19 = var18[var13];
                    var19 = var17.bind(var6)(var19);
                    var19 = var19.getAnalyticsEventsRecording;
                    var12.getAnalyticsEventsRecording = var19;
                    var13 = var18[var13];
                    var13 = var17.bind(var6)(var13);
                    var13 = var13.clearAnalyticsEventsRecording;
                    var12.clearAnalyticsEventsRecording = var13;
                    var9.AnalyticsUtils = var12;
                    var12 = {};
                    var13 = _closure1_slot21;
                    var12.apiLogin = var13;
                    var13 = _closure1_slot19;
                    var12.setupTTITest = var13;
                    var9.TTITestAction = var12;
                    var16 = var9;
                    var12 = _closure1_slot3;
                    var9 = function*() { // Environment: var9
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun118202: for (var _fun118202_ip = 0;;) switch (_fun118202_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun118202_ip = 12;
                                        continue _fun118202
                                    }
                                case 7:
                                    var1 = undefined;
                                    return var1;
                                case 12:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var9 = var12.bind(var6)(var9);
                    var7 = var9.constructor;
                    var8 = {};
                    var9 = null;
                    if (!(var9 == var14)) {
                        _fun118200_ip = 412;
                        continue _fun118200
                    }
                case 410:
                    var14 = {};
                case 412:
                    var9 = global;
                    var13 = var9.Object;
                    var12 = var13.keys;
                    var2 = var12.bind(var13)(var16);
                    var13 = var9.Object;
                    var12 = var13.values;
                    var4 = var12.bind(var13)(var16);
                    var13 = var9.Object;
                    var12 = var13.keys;
                    var11 = var12.bind(var13)(var14);
                    var13 = var9.Object;
                    var12 = var13.values;
                    var10 = var12.bind(var13)(var14);
                case 478: // try_start_0 // try_start_1
                    var13 = var2;
                    var2 = new Array(2);
                    var22 = var2;
                    var21 = var13;
                    var20 = 0;
                    var16 = arraySpread(var22, var21, var20);
                    var12 = 'imports';
                    var2[var16] = var12;
                    var12 = 1;
                    var20 = var16 + var12;
                    var21 = var11;
                    var22 = var2;
                    var11 = arraySpread(var22, var21, var20);
                    var16 = var9.String;
                    var15 = var16.bind(var6)(var15);
                    var2[var11] = var15;
                    var11 = var11 + var12;
                    var22 = var7;
                    var21 = var2;
                    var20 = undefined;
                    var7 = apply(var22, var21, var20);
                    var2 = var8;
                    var21 = var4;
                    var4 = new Array(1);
                    var22 = var4;
                    var20 = 0;
                    var11 = arraySpread(var22, var21, var20);
                    var4[var11] = var13;
                    var20 = var11 + var12;
                    var21 = var10;
                    var22 = var4;
                    var10 = arraySpread(var22, var21, var20);
                    var22 = var7;
                    var21 = var4;
                    var20 = undefined;
                    var4 = apply(var22, var21, var20);
                    SaveGenerator(address = 609);
                case 607:
                    return var4;
                case 609:
                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                    if (var7) {
                        _fun118200_ip = 626;
                        continue _fun118200
                    }
                case 615:
                    var2.result = var4;
                case 621: // try_end0
                    _fun118200_ip = 834;
                    continue _fun118200;
                case 626: // try_end1
                    var2 = var1;
                    var7 = 'string';
                    var2 = typeof var2;
                    if (!(var7 === var2)) {
                        _fun118200_ip = 786;
                        continue _fun118200
                    }
                case 643:
                    var10 = var9.fetch;
                    var7 = var1;
                    var2 = {};
                    var11 = 'PUT';
                    var2.method = var11;
                    var13 = var9.JSON;
                    var12 = var13.stringify;
                    var11 = var8;
                    var11 = var12.bind(var13)(var11);
                    var2.body = var11;
                    var11 = {};
                    var12 = 'application/json';
                    var11['Content-Type'] = var12;
                    var2.headers = var11;
                    var2 = var10.bind(var6)(var7, var2);
                    SaveGenerator(address = 715);
                case 713:
                    return var2;
                case 715:
                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 7);
                    if (var7) {
                        _fun118200_ip = 789;
                        continue _fun118200
                    }
                case 721:
                    var3 = var2;
                    var7 = var2.ok;
                    var11 = _closure1_slot16;
                    if (var7) {
                        _fun118200_ip = 770;
                        continue _fun118200
                    }
                case 737:
                    var12 = {};
                    var7 = var3;
                    var7 = var7.status;
                    var12.status = var7;
                    var10 = 'error';
                    var7 = 'Failed to send backchannel reply';
                    var7 = var11.bind(var6)(var10, var7, var12);
                    _fun118200_ip = 786;
                    continue _fun118200;
                case 770:
                    var10 = 'success';
                    var7 = 'Backchannel reply sent';
                    var7 = var11.bind(var6)(var10, var7);
                case 786:
                    return var4;
                case 789:
                    return var2;
                case 792: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register = 10);
                    var4 = var8;
                    var2 = {};
                    var7 = _closure1_slot18;
                    var7 = var7.bind(var6)(var10);
                    var2.details = var7;
                    var7 = var9.String;
                    var7 = var7.bind(var6)(var10);
                    var2.string = var7;
                    var4.error = var2;
                case 834: // try_end2
                    var2 = var1;
                    var4 = 'string';
                    var2 = typeof var2;
                    if (!(var4 === var2)) {
                        _fun118200_ip = 994;
                        continue _fun118200
                    }
                case 851:
                    var7 = var9.fetch;
                    var4 = var1;
                    var2 = {};
                    var10 = 'PUT';
                    var2.method = var10;
                    var12 = var9.JSON;
                    var11 = var12.stringify;
                    var10 = var8;
                    var10 = var11.bind(var12)(var10);
                    var2.body = var10;
                    var10 = {};
                    var11 = 'application/json';
                    var10['Content-Type'] = var11;
                    var2.headers = var10;
                    var2 = var7.bind(var6)(var4, var2);
                    SaveGenerator(address = 923);
                case 921:
                    return var2;
                case 923:
                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                    if (var4) {
                        _fun118200_ip = 997;
                        continue _fun118200
                    }
                case 929:
                    var3 = var2;
                    var4 = var2.ok;
                    var10 = _closure1_slot16;
                    if (var4) {
                        _fun118200_ip = 978;
                        continue _fun118200
                    }
                case 945:
                    var11 = {};
                    var4 = var3;
                    var4 = var4.status;
                    var11.status = var4;
                    var7 = 'error';
                    var4 = 'Failed to send backchannel reply';
                    var4 = var10.bind(var6)(var7, var4, var11);
                    _fun118200_ip = 994;
                    continue _fun118200;
                case 978:
                    var7 = 'success';
                    var4 = 'Backchannel reply sent';
                    var4 = var10.bind(var6)(var7, var4);
                case 994:
                    return var6;
                case 997:
                    return var2;
                case 1000: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register = 2);
                    var4 = var1;
                    var7 = 'string';
                    var4 = typeof var4;
                    if (!(var7 === var4)) {
                        _fun118200_ip = 1156;
                        continue _fun118200
                    }
                case 1019:
                    var7 = var9.fetch;
                    var4 = var1;
                    var1 = {};
                    var10 = 'PUT';
                    var1.method = var10;
                    var10 = var9.JSON;
                    var9 = var10.stringify;
                    var8 = var9.bind(var10)(var8);
                    var1.body = var8;
                    var8 = {};
                    var9 = 'application/json';
                    var8['Content-Type'] = var9;
                    var1.headers = var8;
                    var1 = var7.bind(var6)(var4, var1);
                    SaveGenerator(address = 1088);
                case 1086:
                    return var1;
                case 1088:
                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                    if (var4) {
                        _fun118200_ip = 1158;
                        continue _fun118200
                    }
                case 1094:
                    var3 = var1;
                    var4 = var1.ok;
                    var5 = _closure1_slot16;
                    if (var4) {
                        _fun118200_ip = 1140;
                        continue _fun118200
                    }
                case 1110:
                    var7 = {};
                    var3 = var3.status;
                    var7.status = var3;
                    var4 = 'error';
                    var3 = 'Failed to send backchannel reply';
                    var3 = var5.bind(var6)(var4, var3, var7);
                    _fun118200_ip = 1156;
                    continue _fun118200;
                case 1140:
                    var4 = 'success';
                    var3 = 'Backchannel reply sent';
                    var3 = var5.bind(var6)(var4, var3);
                case 1156:
                    throw var2;
                case 1158:
                    return var1;
                case 1161:
                    return var0;
            }
        };
        return var0;
    };
    var5 = var6.bind(var0)(var5);
    var _closure1_slot11 = var5;
    var5 = function() { // Environment: var1
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var4.backchannel = var5;
    var _closure1_slot13 = var4;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun118206: for (var _fun118206_ip = 0;;) switch (_fun118206_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun118206_ip = 241;
                            continue _fun118206
                        }
                    case 10:
                        var2 = global;
                        var4 = var2.TextDecoder;
                        var1 = var4.prototype;
                        var3 = Object.create(var1, {
                            constructor: {
                                value: var4
                            }
                        });
                        var11 = 'utf-8';
                        var12 = var3;
                        var1 = new var12[var4](var11, var10);
                        var6 = var1 instanceof Object ? var1 : var3;
                        var5 = var6.decode;
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 19;
                        var4 = var4[var1];
                        var1 = undefined;
                        var8 = var7.bind(var1)(var4);
                        var7 = var8.base64decode;
                        var4 = arg0;
                        var4 = var4.actionData;
                        var4 = var7.bind(var8)(var4);
                        var6 = var5.bind(var6)(var4);
                        var5 = var2.JSON;
                        var4 = var5.parse;
                        var5 = var4.bind(var5)(var6);
                        var7 = _closure1_slot12;
                        var6 = var7.log;
                        var4 = {};
                        var11 = var4;
                        var10 = var5;
                        var8 = copyDataProperties(var11, var10);
                        var9 = var5.user;
                        var8 = null;
                        var9 = var8 == var9;
                        var8 = 'redacted';
                        if (!var9) {
                            _fun118206_ip = 160;
                            continue _fun118206
                        }
                    case 158:
                        var8 = undefined;
                    case 160:
                        var1 = 'user';
                        var4[var1] = var8;
                        var1 = 'Received TTI Test Action';
                        var1 = var6.bind(var7)(var1, var4);
                        var1 = _closure1_slot5;
                        var1 = var1.promise;
                        SaveGenerator(address = 195);
                    case 193:
                        return var1;
                    case 195:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun118206_ip = 238;
                            continue _fun118206
                        }
                    case 201:
                        var4 = _closure1_slot13;
                        var3 = var5.type;
                        var3 = var4[var3];
                        var3 = var3.bind(var4)(var5);
                        var3 = var2.Promise;
                        var2 = var3.resolve;
                        var2 = var2.bind(var3)();
                        return var2;
                    case 238:
                        return var1;
                    case 241:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var4 = var1.bind(var0)();
    var1 = arg4;
    var1.exports = var4;
    var1 = 20;
    var1 = var3[var1];
    var3 = var2.bind(var0)(var1);
    var2 = var3.fileFinishedImporting;
    var1 = 'modules/headless_tasks/android/TTITestAction.tsx';
    var1 = var2.bind(var3)(var1);
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 14342, 1590, 3431, 1216, 1372, 1410, 3, 8778, 14519, 806, 12176, 1594, 795, 4521, 5860, 3902, 11008, 1313, 2]);