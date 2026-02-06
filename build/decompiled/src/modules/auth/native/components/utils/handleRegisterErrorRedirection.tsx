// modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun100568: for (var _fun100568_ip = 0;;) switch (_fun100568_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun100568_ip = 46;
                    continue _fun100568
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun100568_ip = 55;
                    continue _fun100568
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun100568_ip = 345;
                    continue _fun100568
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun100568_ip = 323;
                    continue _fun100568
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun100568_ip = 283;
                    continue _fun100568
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun100568_ip = 270;
                    continue _fun100568
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
                    _fun100568_ip = 163;
                    continue _fun100568
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun100568_ip = 179;
                    continue _fun100568
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun100568_ip = 249;
                    continue _fun100568
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun100568_ip = 249;
                    continue _fun100568
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun100568_ip = 234;
                    continue _fun100568
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun100568_ip = 247;
                    continue _fun100568
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun100568_ip = 265;
                continue _fun100568;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun100568_ip = 283;
                continue _fun100568;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun100568_ip = 323;
                    continue _fun100568
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
                    _fun100568_ip = 330;
                    continue _fun100568
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun100569: for (var _fun100569_ip = 0;;) switch (_fun100569_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun100569_ip = 56;
                                continue _fun100569
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
                            _fun100569_ip = 67;
                            continue _fun100569;
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
        _fun100570: for (var _fun100570_ip = 0;;) switch (_fun100570_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun100570_ip = 23;
                    continue _fun100570
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun100570_ip = 33;
                    continue _fun100570
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
                    _fun100570_ip = 70;
                    continue _fun100570
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun100570_ip = 55;
                    continue _fun100570
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.RegisterTransitionSteps;
    var _closure1_slot3 = var6;
    var6 = var3.RegistrationTransitionActionTypes;
    var _closure1_slot4 = var6;
    var3 = var3.authStateToRegisterTransitionStep;
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AbortCodes;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 2;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AuthStates;
    var8 = var7.REGISTER_IDENTITY;
    var7 = ['email', 'phoneToken'];
    var3[var8] = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var7 = var7.AuthStates;
    var8 = var7.REGISTER_DISPLAY_NAME;
    var7 = ['global_name'];
    var3[var8] = var7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.AuthStates;
    var7 = var6.REGISTER_ACCOUNT_INFORMATION;
    var6 = ['username', 'password'];
    var3[var7] = var6;
    var _closure1_slot7 = var3;
    var3 = function arg0() {
        _fun100571: for (var _fun100571_ip = 0;;) switch (_fun100571_ip) {
            case 0:
                var1 = arg0;
                var0 = 'email';
                if (!(var0 !== var1)) {
                    _fun100571_ip = 125;
                    continue _fun100571
                }
            case 11:
                var0 = 'phoneToken';
                if (!(var0 !== var1)) {
                    _fun100571_ip = 125;
                    continue _fun100571
                }
            case 19:
                var0 = 'global_name';
                if (!(var0 !== var1)) {
                    _fun100571_ip = 86;
                    continue _fun100571
                }
            case 27:
                var0 = 'username';
                if (!(var0 !== var1)) {
                    _fun100571_ip = 47;
                    continue _fun100571
                }
            case 35:
                var0 = 'password';
                if (!(var0 !== var1)) {
                    _fun100571_ip = 47;
                    continue _fun100571
                }
            case 43:
                var0 = null;
                return var0;
            case 47:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.AuthStates;
                var0 = var0.REGISTER_ACCOUNT_INFORMATION;
                return var0;
            case 86:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.AuthStates;
                var0 = var0.REGISTER_DISPLAY_NAME;
                return var0;
            case 125:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.AuthStates;
                var0 = var0.REGISTER_IDENTITY;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2, arg3() {
        _fun100572: for (var _fun100572_ip = 0;;) switch (_fun100572_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var5 = arg2;
                var6 = _closure1_slot1;
                var1 = _closure1_slot2;
                var12 = 3;
                var1 = var1[var12];
                var4 = undefined;
                var6 = var6.bind(var4)(var1);
                var1 = 'date_of_birth';
                var1 = var6.bind(var4)(var1, var5);
                var7 = null;
                if (!(var7 == var1)) {
                    _fun100572_ip = 509;
                    continue _fun100572
                }
            case 53:
                var1 = global;
                var6 = var1.Number;
                var1 = var5.code;
                var6 = var6.bind(var4)(var1);
                var1 = _closure1_slot6;
                var1 = var1.UNDER_MINIMUM_AGE;
                if (!(var6 !== var1)) {
                    _fun100572_ip = 509;
                    continue _fun100572
                }
            case 88:
                var6 = _closure1_slot9;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 4;
                var1 = var9[var1];
                var8 = var8.bind(var4)(var1);
                var1 = var8.getRegistrationSteps;
                var1 = var1.bind(var8)();
                var11 = var6.bind(var4)(var1);
                var6 = var11.bind(var4)();
                var1 = var6.done;
                var10 = var6;
                var9 = undefined;
                var8 = undefined;
                var6 = undefined;
                if (var1) {
                    _fun100572_ip = 402;
                    continue _fun100572
                }
            case 151:
                var14 = var10.value;
                var13 = _closure1_slot9;
                var1 = _closure1_slot7;
                var1 = var1[var14];
                if (!(var7 == var1)) {
                    _fun100572_ip = 176;
                    continue _fun100572
                }
            case 172:
                var1 = new Array(0);
            case 176:
                var17 = var13.bind(var4)(var1);
                var13 = var17.bind(var4)();
                var1 = var13.done;
                var16 = var13;
                var14 = var6;
                var6 = var14;
                if (var1) {
                    _fun100572_ip = 384;
                    continue _fun100572
                }
            case 205:
                var19 = var16.value;
                var13 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var12];
                var1 = var13.bind(var4)(var1);
                var15 = var1.bind(var4)(var19, var5);
                if (!(var7 != var15)) {
                    _fun100572_ip = 253;
                    continue _fun100572
                }
            case 237:
                var1 = _closure1_slot8;
                var13 = var1.bind(var4)(var19);
                var14 = var13;
                if (!(var7 == var14)) {
                    _fun100572_ip = 279;
                    continue _fun100572
                }
            case 253:
                var20 = var17.bind(var4)();
                var1 = var20.done;
                var16 = var20;
                var9 = var19;
                var8 = var15;
                var6 = var14;
                if (var1) {
                    _fun100572_ip = 384;
                    continue _fun100572
                }
            case 277:
                _fun100572_ip = 205;
                continue _fun100572;
            case 279:
                var1 = {};
                var14 = _closure1_slot5;
                var14 = var14.bind(var4)(var13);
                var1.step = var14;
                var14 = _closure1_slot4;
                var14 = var14.RESPONSE_ERROR;
                var1.actionType = var14;
                var14 = new Array(2);
                var14[0] = var15;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var15 = 5;
                var15 = var17[var15];
                var17 = var16.bind(var4)(var15);
                var16 = var17.getCommonErrorDetails;
                var15 = var5.error_code;
                var15 = var16.bind(var17)(var15);
                var14[1] = var15;
                var1.details = var14;
                var1 = var2.bind(var4)(var1);
                var1 = var3.navigate;
                var1 = var1.bind(var3)(var13);
                var1 = undefined;
                return var1;
            case 384:
                var13 = var11.bind(var4)();
                var1 = var13.done;
                var10 = var13;
                if (!var1) {
                    _fun100572_ip = 151;
                    continue _fun100572
                }
            case 402:
                var1 = var5.error_code;
                var1 = var7 != var1;
                if (!var1) {
                    _fun100572_ip = 424;
                    continue _fun100572
                }
            case 415:
                var6 = var5.message;
                var1 = var7 != var6;
            case 424:
                if (!var1) {
                    _fun100572_ip = 507;
                    continue _fun100572
                }
            case 427:
                var1 = {};
                var6 = arg3;
                var1.step = var6;
                var6 = _closure1_slot4;
                var6 = var6.RESPONSE_ERROR;
                var1.actionType = var6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 5;
                var6 = var8[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var7.getCommonErrorDetails;
                var5 = var5.error_code;
                var6 = var6.bind(var7)(var5);
                var5 = new Array(1);
                var5[0] = var6;
                var1.details = var5;
                var1 = var2.bind(var4)(var1);
            case 507:
                return var4;
            case 509:
                var1 = {};
                var5 = _closure1_slot3;
                var5 = var5.AGE_GATE_UNDERAGE;
                var1.step = var5;
                var5 = _closure1_slot4;
                var5 = var5.VIEWED;
                var1.actionType = var5;
                var1 = var2.bind(var4)(var1);
                var2 = var3.push;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 2;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.AuthStates;
                var1 = var0.AGE_GATE_UNDERAGE;
                var0 = {
                    'fromRegister': true,
                    'disableSwipe': true
                };
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [13071, 660, 670, 7516, 13069, 13079, 2]);