// ../discord_common/js/packages/http-utils/V8APIError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun6776: for (var _fun6776_ip = 0;;) switch (_fun6776_ip) {
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
                _fun6776_ip = 74;
                continue _fun6776;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot6 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0) { // Original name: convertStringArrayToSkemaErrorItems, environment: var1
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = {};
            var1 = 'UNKNOWN';
            var0.code = var1;
            var1 = arg0;
            var0.message = var1;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: convertOldFormError, environment: var1
        _fun6781: for (var _fun6781_ip = 0;;) switch (_fun6781_ip) {
            case 0:
                var0 = {};
                var1 = global;
                var3 = var1.Object;
                var2 = var3.entries;
                var1 = arg0;
                var9 = var2.bind(var3)(var1);
                var1 = var9.length;
                var8 = 0;
                var1 = var8 < var1;
                var6 = undefined;
                var5 = 2;
                var4 = 1;
                var3 = '_misc';
                var2 = 0;
                if (!var1) {
                    _fun6781_ip = 131;
                    continue _fun6781
                }
            case 55:
                var10 = var9[var2];
                var1 = _closure1_slot5;
                var1 = var1.bind(var6)(var10, var5);
                var10 = var1[var8];
                var12 = var1[var4];
                if (!(var3 === var10)) {
                    _fun6781_ip = 98;
                    continue _fun6781
                }
            case 81:
                var1 = _closure1_slot7;
                var1 = var1.bind(var6)(var12);
                var0._errors = var1;
                _fun6781_ip = 119;
                continue _fun6781;
            case 98:
                var1 = {};
                var11 = _closure1_slot7;
                var11 = var11.bind(var6)(var12);
                var1._errors = var11;
                var0[var10] = var1;
            case 119:
                var2 = var2 + 1;
                var1 = var9.length;
                if (var2 < var1) {
                    _fun6781_ip = 55;
                    continue _fun6781
                }
            case 131:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var4 = global;
    var8 = var4.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var6 = var7.bind(var0)(var3);
    var3 = 6;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var7 = 'hcaptcha';
    var3.HCAPTCHA = var7;
    var7 = 'recaptcha';
    var3.RECAPTCHA = var7;
    var7 = 'recaptcha_enterprise';
    var3.RECAPTCHA_ENTERPRISE = var7;
    var4 = var4.Error;
    var4 = var6.bind(var0)(var4);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0, arg1) { // Original name: APIError, environment: var5
            _fun6783: for (var _fun6783_ip = 0;;) switch (_fun6783_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arguments[2];
                    var10 = this;
                    var9 = undefined;
                    if (!(var0 === var9)) {
                        _fun6783_ip = 21;
                        continue _fun6783
                    }
                case 15:
                    var0 = 'An unexpected error occurred.';
                case 21:
                    var2 = _closure1_slot0;
                    var7 = _closure2_slot0;
                    var2 = var2.bind(var9)(var10, var7);
                    var3 = 'string';
                    var2 = typeof var1;
                    if (!(var3 !== var2)) {
                        _fun6783_ip = 356;
                        continue _fun6783
                    }
                case 55:
                    var2 = var1.body;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun6783_ip = 340;
                        continue _fun6783
                    }
                case 69:
                    var6 = var1.body;
                    var2 = var1.body;
                    var2 = var2.message;
                    if (!(var3 != var2)) {
                        _fun6783_ip = 218;
                        continue _fun6783
                    }
                case 91:
                    var2 = global;
                    var8 = var2.Array;
                    var5 = var8.isArray;
                    var4 = var1.body;
                    var4 = var4.message;
                    var4 = var5.bind(var8)(var4);
                    if (var4) {
                        _fun6783_ip = 218;
                        continue _fun6783
                    }
                case 122:
                    var4 = var1.body;
                    var4 = var4.code;
                    if (!(var3 != var4)) {
                        _fun6783_ip = 165;
                        continue _fun6783
                    }
                case 136:
                    var5 = var2.Array;
                    var4 = var5.isArray;
                    var2 = var1.body;
                    var2 = var2.code;
                    var2 = var4.bind(var5)(var2);
                    if (var2) {
                        _fun6783_ip = 218;
                        continue _fun6783
                    }
                case 165:
                    var2 = {};
                    var4 = var6.message;
                    var2.message = var4;
                    var4 = var6.code;
                    var2.code = var4;
                    var4 = var6.retry_after;
                    var2.retryAfter = var4;
                    var4 = var6.errors;
                    var2.errors = var4;
                    var4 = var1.status;
                    var2.status = var4;
                    _fun6783_ip = 338;
                    continue _fun6783;
                case 218:
                    if (!(var3 != var6)) {
                        _fun6783_ip = 233;
                        continue _fun6783
                    }
                case 222:
                    var3 = 'captcha_key';
                    var3 = var3 in var6;
                    if (var3) {
                        _fun6783_ip = 270;
                        continue _fun6783
                    }
                case 233:
                    var3 = {};
                    var4 = var1.status;
                    var3.status = var4;
                    var4 = 50035;
                    var3.code = var4;
                    var4 = _closure1_slot8;
                    var4 = var4.bind(var9)(var6);
                    var3.errors = var4;
                    _fun6783_ip = 335;
                    continue _fun6783;
                case 270:
                    var4 = {};
                    var5 = -1;
                    var4.code = var5;
                    var4.captchaFields = var6;
                    var5 = var1.status;
                    var4.status = var5;
                    var5 = var6.captcha_key;
                    var5 = var5.length;
                    var8 = 0;
                    var12 = var5 > var8;
                    var5 = undefined;
                    if (!var12) {
                        _fun6783_ip = 328;
                        continue _fun6783
                    }
                case 318:
                    var6 = var6.captcha_key;
                    var5 = var6[var8];
                case 328:
                    var4.message = var5;
                    var3 = var4;
                case 335:
                    var2 = var3;
                case 338:
                    _fun6783_ip = 372;
                    continue _fun6783;
                case 340:
                    var3 = {};
                    var4 = var1.status;
                    var3.status = var4;
                    var2 = var3;
                    _fun6783_ip = 372;
                    continue _fun6783;
                case 356:
                    var3 = {};
                    var3.message = var1;
                    var4 = arg1;
                    var3.code = var4;
                    var2 = var3;
                case 372:
                    var12 = var2.message;
                    var8 = var2.code;
                    var6 = var2.retryAfter;
                    var5 = var2.errors;
                    var4 = var2.status;
                    var2 = var2.captchaFields;
                    var3 = null;
                    if (!(var3 != var12)) {
                        _fun6783_ip = 414;
                        continue _fun6783
                    }
                case 411:
                    var0 = var12;
                case 414:
                    var15 = new Array(1);
                    var15[0] = var0;
                    var0 = _closure1_slot3;
                    var14 = var0.bind(var9)(var7);
                    var7 = _closure1_slot2;
                    var0 = _closure1_slot6;
                    var0 = var0.bind(var9)();
                    if (var0) {
                        _fun6783_ip = 459;
                        continue _fun6783
                    }
                case 446:
                    var0 = var14.apply;
                    var0 = var0.bind(var14)(var10, var15);
                    _fun6783_ip = 493;
                    continue _fun6783;
                case 459:
                    var12 = global;
                    var13 = var12.Reflect;
                    var12 = var13.construct;
                    var11 = _closure1_slot3;
                    var11 = var11.bind(var9)(var10);
                    var11 = var11.constructor;
                    var0 = var12.bind(var13)(var14, var15, var11);
                case 493:
                    var0 = var7.bind(var9)(var10, var0);
                    var9 = var3 != var8;
                    var7 = -1;
                    if (!var9) {
                        _fun6783_ip = 515;
                        continue _fun6783
                    }
                case 512:
                    var7 = var8;
                case 515:
                    var0.code = var7;
                    var0.retryAfter = var6;
                    var0.errors = var5;
                    var0.status = var4;
                    if (!(var3 == var2)) {
                        _fun6783_ip = 545;
                        continue _fun6783
                    }
                case 543:
                    var2 = {};
                case 545:
                    var0.captchaFields = var2;
                    var0.cause = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'hasFieldErrors';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            _fun6784: for (var _fun6784_ip = 0;;) switch (_fun6784_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.errors;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun6784_ip = 53;
                        continue _fun6784
                    }
                case 18:
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.keys;
                    var1 = var1.errors;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.length;
                    var1 = 0;
                    var0 = var2 > var1;
                case 53:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'getFieldErrors';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun6785: for (var _fun6785_ip = 0;;) switch (_fun6785_ip) {
                case 0:
                    var1 = arg0;
                    var2 = 'string';
                    var0 = typeof var1;
                    var5 = var1;
                    if (!(var2 === var0)) {
                        _fun6785_ip = 28;
                        continue _fun6785
                    }
                case 17:
                    var0 = new Array(1);
                    var0[0] = var1;
                    var5 = var0;
                case 28:
                    var0 = this;
                    var6 = var0.errors;
                    var0 = var5.length;
                    var4 = 0;
                    var1 = var6;
                    if (!(var0 > var4)) {
                        _fun6785_ip = 110;
                        continue _fun6785
                    }
                case 51:
                    var3 = null;
                    var2 = 1;
                    var0 = var6;
                    var1 = var0;
                    if (!(var3 != var1)) {
                        _fun6785_ip = 110;
                        continue _fun6785
                    }
                case 66:
                    var6 = var5[var4];
                    var6 = var0[var6];
                    var7 = var5.splice;
                    var7 = var7.bind(var5)(var2);
                    var8 = var7.length;
                    var1 = var6;
                    if (!(var8 > var4)) {
                        _fun6785_ip = 110;
                        continue _fun6785
                    }
                case 97:
                    var5 = var7;
                    var0 = var6;
                    var1 = var0;
                    if (var3 != var1) {
                        _fun6785_ip = 66;
                        continue _fun6785
                    }
                case 110:
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun6785_ip = 127;
                        continue _fun6785
                    }
                case 121:
                    var0 = var1._errors;
                case 127:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getAllFieldErrors';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = this;
            var1 = var2.getAllFieldErrorsUnder;
            var0 = var2.errors;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getAllFieldErrorsUnder';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun6787: for (var _fun6787_ip = 0;;) switch (_fun6787_ip) {
                case 0:
                    var4 = arg0;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var0 = {};
                    var _closure3_slot1 = var0;
                    var5 = null;
                    var6 = var5 == var4;
                    var2 = undefined;
                    var3 = undefined;
                    if (var6) {
                        _fun6787_ip = 37;
                        continue _fun6787
                    }
                case 31:
                    var3 = var4._errors;
                case 37:
                    var5 = var5 != var3;
                    if (!var5) {
                        _fun6787_ip = 55;
                        continue _fun6787
                    }
                case 44:
                    var7 = var3.length;
                    var6 = 0;
                    var5 = var7 > var6;
                case 55:
                    if (!var5) {
                        _fun6787_ip = 64;
                        continue _fun6787
                    }
                case 58:
                    var0.__root_errors = var3;
                case 64:
                    if (!(var2 !== var4)) {
                        _fun6787_ip = 102;
                        continue _fun6787
                    }
                case 68:
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.entries;
                    var3 = var2.bind(var3)(var4);
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun6788: for (var _fun6788_ip = 0;;) switch (_fun6788_ip) {
                            case 0:
                                var5 = arg0;
                                var2 = var5[Symbol.iterator];
                                var5 = var2().next;
                                var6 = var5().value;
                                var3 = var2;
                                var0 = undefined;
                                var4 = var3 === var0;
                                var3 = undefined;
                                if (var4) {
                                    _fun6788_ip = 29;
                                    continue _fun6788
                                }
                            case 26:
                                var3 = var6;
                            case 29:
                                var _closure4_slot0 = var3;
                                var6 = undefined;
                                if (var4) {
                                    _fun6788_ip = 63;
                                    continue _fun6788
                                }
                            case 38:
                                var7 = var5().value;
                                var5 = var2;
                                var5 = var5 === var0;
                                var6 = undefined;
                                var4 = var5;
                                if (var5) {
                                    _fun6788_ip = 63;
                                    continue _fun6788
                                }
                            case 57:
                                var6 = var7;
                                var4 = var5;
                            case 63:
                                if (var4) {
                                    _fun6788_ip = 69;
                                    continue _fun6788
                                }
                            case 66:
                                var2.return();
                            case 69:
                                var2 = '_errors';
                                if (!(var2 !== var3)) {
                                    _fun6788_ip = 129;
                                    continue _fun6788
                                }
                            case 77:
                                var2 = global;
                                var4 = var2.Object;
                                var3 = var4.entries;
                                var5 = _closure3_slot0;
                                var2 = var5.getAllFieldErrorsUnder;
                                var2 = var2.bind(var5)(var6);
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.forEach;
                                var1 = function(arg0) { // Environment: var1
                                    _fun6789: for (var _fun6789_ip = 0;;) switch (_fun6789_ip) {
                                        case 0:
                                            var4 = arg0;
                                            var1 = var4[Symbol.iterator];
                                            var4 = var1().next;
                                            var3 = var4().value;
                                            var2 = var1;
                                            var0 = undefined;
                                            var2 = var2 === var0;
                                            var7 = undefined;
                                            if (var2) {
                                                _fun6789_ip = 27;
                                                continue _fun6789
                                            }
                                        case 24:
                                            var7 = var3;
                                        case 27:
                                            var3 = undefined;
                                            if (var2) {
                                                _fun6789_ip = 57;
                                                continue _fun6789
                                            }
                                        case 32:
                                            var5 = var4().value;
                                            var4 = var1;
                                            var4 = var4 === var0;
                                            var3 = undefined;
                                            var2 = var4;
                                            if (var4) {
                                                _fun6789_ip = 57;
                                                continue _fun6789
                                            }
                                        case 51:
                                            var3 = var5;
                                            var2 = var4;
                                        case 57:
                                            if (var2) {
                                                _fun6789_ip = 63;
                                                continue _fun6789
                                            }
                                        case 60:
                                            var1.return();
                                        case 63:
                                            var1 = '__root_errors';
                                            if (!(var7 !== var1)) {
                                                _fun6789_ip = 119;
                                                continue _fun6789
                                            }
                                        case 71:
                                            var2 = _closure3_slot1;
                                            var6 = _closure4_slot0;
                                            var1 = global;
                                            var1 = var1.HermesInternal;
                                            var5 = var1.concat;
                                            var4 = '';
                                            var1 = '.';
                                            var1 = var5.bind(var4)(var6, var1, var7);
                                            var2[var1] = var3;
                                            _fun6789_ip = 137;
                                            continue _fun6789;
                                        case 119:
                                            var2 = _closure3_slot1;
                                            var1 = _closure4_slot0;
                                            var2[var1] = var3;
                                        case 137:
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                            case 129:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 102:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getFirstFieldErrorMessage';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun6790: for (var _fun6790_ip = 0;;) switch (_fun6790_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getFieldErrors;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var3 = null;
                    var1 = var3 == var2;
                    var0 = null;
                    if (var1) {
                        _fun6790_ip = 56;
                        continue _fun6790
                    }
                case 28:
                    var4 = var2.length;
                    var1 = 1;
                    var1 = var4 < var1;
                    var0 = null;
                    if (var1) {
                        _fun6790_ip = 56;
                        continue _fun6790
                    }
                case 45:
                    var1 = 0;
                    var1 = var2[var1];
                    var0 = var1.message;
                case 56:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getAnyErrorMessage';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun6791: for (var _fun6791_ip = 0;;) switch (_fun6791_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getAnyErrorMessageAndField;
                    var3 = var0.bind(var1)();
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun6791_ip = 29;
                        continue _fun6791
                    }
                case 24:
                    var0 = var3.error;
                case 29:
                    if (!(var2 == var0)) {
                        _fun6791_ip = 38;
                        continue _fun6791
                    }
                case 33:
                    var0 = var1.message;
                case 38:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getAnyErrorMessageAndField';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun6792: for (var _fun6792_ip = 0;;) switch (_fun6792_ip) {
                case 0:
                    var0 = this;
                    var6 = var0.errors;
                    var0 = null;
                    var1 = var0 != var6;
                    var5 = global;
                    var2 = 0;
                    var4 = null;
                    if (!var1) {
                        _fun6792_ip = 68;
                        continue _fun6792
                    }
                case 24:
                    var7 = var6._errors;
                    var1 = var6;
                    var3 = var4;
                    if (!(var0 == var7)) {
                        _fun6792_ip = 70;
                        continue _fun6792
                    }
                case 40:
                    var8 = var5.Object;
                    var7 = var8.keys;
                    var7 = var7.bind(var8)(var1);
                    var4 = var7[var2];
                    var6 = var1[var4];
                    if (var0 != var6) {
                        _fun6792_ip = 24;
                        continue _fun6792
                    }
                case 68:
                    return var0;
                case 70:
                    var0 = {};
                    var0.fieldName = var3;
                    var1 = var1._errors;
                    var1 = var1[var2];
                    var1 = var1.message;
                    var0.error = var1;
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var4);
    var4 = 7;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/http-utils/V8APIError.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 50035;
    var2.INVALID_FORM_BODY_ERROR_CODE = var4;
    var4 = '__root_errors';
    var2.ROOT_FORM_ERRORS_KEY = var4;
    var2.CaptchaTypes = var3;
    var2.APIError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 162, 57, 2]);