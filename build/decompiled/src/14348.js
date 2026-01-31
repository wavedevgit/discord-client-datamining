// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var2 = function arg0, arg1, arg2() {
        _fun112050: for (var _fun112050_ip = 0;;) switch (_fun112050_ip) {
            case 0:
                var4 = arg0;
                var7 = arg1;
                var2 = this;
                var3 = 'string';
                var0 = typeof var4;
                var6 = var4;
                if (!(var3 === var0)) {
                    _fun112050_ip = 45;
                    continue _fun112050
                }
            case 25:
                var3 = _closure1_slot2;
                var0 = var3.__parse;
                var6 = var0.bind(var3)(var4);
            case 45:
                if (!var6) {
                    _fun112050_ip = 213;
                    continue _fun112050
                }
            case 51:
                var3 = var6.type;
                var0 = 'messageFormatPattern';
                if (!(var0 === var3)) {
                    _fun112050_ip = 213;
                    continue _fun112050
                }
            case 69:
                var5 = var2._mergeFormats;
                var3 = _closure1_slot2;
                var4 = var3.formats;
                var3 = arg2;
                var5 = var5.bind(var2)(var4, var3);
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var3 = var3[var0];
                var0 = undefined;
                var9 = var4.bind(var0)(var3);
                var8 = var9.defineProperty;
                var4 = {};
                var3 = var2._resolveLocale;
                var3 = var3.bind(var2)(var7);
                var4.value = var3;
                var3 = '_locale';
                var3 = var8.bind(var9)(var2, var3, var4);
                var4 = var2._findPluralRuleFunction;
                var3 = var2._locale;
                var10 = var4.bind(var2)(var3);
                var3 = var2._compilePattern;
                var14 = var2;
                var13 = var6;
                var12 = var7;
                var11 = var5;
                var3 = var14[var3](var13, var12, var11, var10, var9);
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var2;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3._format;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2.format = var1;
                return var0;
            case 213:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = 'A message must be provided as a String or AST.';
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot2 = var2;
    var0 = arg5;
    var0.default = var2;
    var3 = 0;
    var6 = var5[var3];
    var0 = undefined;
    var9 = var4.bind(var0)(var6);
    var8 = var9.defineProperty;
    var7 = {};
    var6 = true;
    var7.enumerable = var6;
    var6 = {};
    var10 = {};
    var11 = {};
    var12 = 'currency';
    var11.style = var12;
    var10.currency = var11;
    var11 = {};
    var12 = 'percent';
    var11.style = var12;
    var10.percent = var11;
    var6.number = var10;
    var10 = {};
    var11 = {
        'month': 'numeric',
        'day': 'numeric',
        'year': '2-digit'
    };
    var10.short = var11;
    var11 = {
        'month': 'short',
        'day': 'numeric',
        'year': 'numeric'
    };
    var10.medium = var11;
    var11 = {
        'month': 'long',
        'day': 'numeric',
        'year': 'numeric'
    };
    var10.long = var11;
    var11 = {
        'weekday': 'long',
        'month': 'long',
        'day': 'numeric',
        'year': 'numeric'
    };
    var10.full = var11;
    var6.date = var10;
    var10 = {};
    var11 = {
        'hour': 'numeric',
        'minute': 'numeric'
    };
    var10.short = var11;
    var11 = {
        'hour': 'numeric',
        'minute': 'numeric',
        'second': 'numeric'
    };
    var10.medium = var11;
    var11 = {
        'hour': 'numeric',
        'minute': 'numeric',
        'second': 'numeric',
        'timeZoneName': 'short'
    };
    var10.long = var11;
    var11 = {
        'hour': 'numeric',
        'minute': 'numeric',
        'second': 'numeric',
        'timeZoneName': 'short'
    };
    var10.full = var11;
    var6.time = var10;
    var7.value = var6;
    var6 = 'formats';
    var6 = var8.bind(var9)(var2, var6, var7);
    var6 = var5[var3];
    var9 = var4.bind(var0)(var6);
    var8 = var9.defineProperty;
    var7 = {};
    var6 = var5[var3];
    var11 = var4.bind(var0)(var6);
    var10 = var11.objCreate;
    var6 = null;
    var6 = var10.bind(var11)(var6);
    var7.value = var6;
    var6 = '__localeData__';
    var6 = var8.bind(var9)(var2, var6, var7);
    var6 = var5[var3];
    var9 = var4.bind(var0)(var6);
    var8 = var9.defineProperty;
    var7 = {};
    var6 = function arg0() {
        _fun112052: for (var _fun112052_ip = 0;;) switch (_fun112052_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun112052_ip = 15;
                    continue _fun112052
                }
            case 6:
                var0 = var2.locale;
                if (var0) {
                    _fun112052_ip = 51;
                    continue _fun112052
                }
            case 15:
                var0 = global;
                var3 = var0.Error;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 'Locale data provided to IntlMessageFormat is missing a `locale` property';
                var5 = var1;
                var0 = new var5[var3](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 51:
                var0 = _closure1_slot2;
                var1 = var0.__localeData__;
                var3 = var2.locale;
                var0 = var3.toLowerCase;
                var0 = var0.bind(var3)();
                var1[var0] = var2;
                var0 = undefined;
                return var0;
        }
    };
    var7.value = var6;
    var6 = '__addLocaleData';
    var6 = var8.bind(var9)(var2, var6, var7);
    var6 = var5[var3];
    var9 = var4.bind(var0)(var6);
    var8 = var9.defineProperty;
    var7 = {};
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.default;
    var6 = var6.parse;
    var7.value = var6;
    var6 = '__parse';
    var6 = var8.bind(var9)(var2, var6, var7);
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var5 = var6.defineProperty;
    var4 = {
        'enumerable': true,
        'writable': true
    };
    var4.value = var0;
    var3 = 'defaultLocale';
    var3 = var5.bind(var6)(var2, var3, var4);
    var4 = var2.prototype;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = this;
        var1 = var1._locale;
        var0.locale = var1;
        return var0;
    };
    var4.resolvedOptions = var3;
    var4 = var2.prototype;
    var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var4 = var0.default;
        var0 = var4.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var4
            }
        });
        var7 = arg1;
        var6 = arg2;
        var5 = arg3;
        var8 = var1;
        var0 = new var8[var4](var7, var6, var5, var4);
        var2 = var0 instanceof Object ? var0 : var1;
        var1 = var2.compile;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var4._compilePattern = var3;
    var4 = var2.prototype;
    var3 = function(arg0) { // Environment: var1
        _fun112055: for (var _fun112055_ip = 0;;) switch (_fun112055_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot2;
                var3 = var0.__localeData__;
                var0 = var2.toLowerCase;
                var0 = var0.bind(var2)();
                var1 = var3[var0];
                if (!var1) {
                    _fun112055_ip = 77;
                    continue _fun112055
                }
            case 33:
                var4 = var1.pluralRuleFunction;
                var0 = var1;
                if (var4) {
                    _fun112055_ip = 117;
                    continue _fun112055
                }
            case 45:
                var1 = var0.parentLocale;
                if (!var1) {
                    _fun112055_ip = 74;
                    continue _fun112055
                }
            case 54:
                var5 = var0.parentLocale;
                var4 = var5.toLowerCase;
                var4 = var4.bind(var5)();
                var1 = var3[var4];
            case 74:
                if (var1) {
                    _fun112055_ip = 33;
                    continue _fun112055
                }
            case 77:
                var1 = global;
                var3 = var1.Error;
                var1 = 'Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :';
                var6 = var1 + var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 117:
                var0 = var0.pluralRuleFunction;
                return var0;
        }
    };
    var4._findPluralRuleFunction = var3;
    var4 = var2.prototype;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun112056: for (var _fun112056_ip = 0;;) switch (_fun112056_ip) {
            case 0:
                var13 = arg0;
                var12 = arg1;
                var11 = this;
                var10 = var13.length;
                var9 = 0;
                var14 = var9 < var10;
                var8 = undefined;
                var1 = '';
                var7 = 1;
                var5 = 3;
                var4 = 'string';
                var3 = undefined;
                var2 = undefined;
                var0 = var1;
                if (!var14) {
                    _fun112056_ip = 241;
                    continue _fun112056
                }
            case 52:
                var19 = var13[var9];
                var14 = typeof var19;
                if (!(var4 === var14)) {
                    _fun112056_ip = 72;
                    continue _fun112056
                }
            case 63:
                var14 = var1 + var19;
                _fun112056_ip = 224;
                continue _fun112056;
            case 72:
                var17 = var19.id;
                if (!var12) {
                    _fun112056_ip = 117;
                    continue _fun112056
                }
            case 80:
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var5];
                var15 = var16.bind(var8)(var15);
                var16 = var15.hop;
                var15 = var16.call;
                var15 = var15.bind(var16)(var12, var17);
                if (var15) {
                    _fun112056_ip = 157;
                    continue _fun112056
                }
            case 117:
                var15 = global;
                var18 = var15.Error;
                var15 = 'A value must be provided for: ';
                var21 = var15 + var17;
                var16 = var18.prototype;
                var16 = Object.create(var16, {
                    constructor: {
                        value: var18
                    }
                });
                var22 = var16;
                var15 = new var22[var18](var21, var20);
                var15 = var15 instanceof Object ? var15 : var16;
                throw var15;
            case 157:
                var16 = var12[var17];
                var15 = var19.options;
                if (var15) {
                    _fun112056_ip = 191;
                    continue _fun112056
                }
            case 169:
                var15 = var19.format;
                var15 = var15.bind(var19)(var16);
                var14 = var1 + var15;
                var3 = var17;
                var2 = var16;
                _fun112056_ip = 224;
                continue _fun112056;
            case 191:
                var18 = var11._format;
                var15 = var19.getOption;
                var15 = var15.bind(var19)(var16);
                var15 = var18.bind(var11)(var15, var12);
                var14 = var1 + var15;
                var3 = var17;
                var2 = var16;
            case 224:
                var9 = var9 + var7;
                var1 = var14;
                var0 = var1;
                if (var9 < var10) {
                    _fun112056_ip = 52;
                    continue _fun112056
                }
            case 241:
                return var0;
        }
    };
    var4._format = var3;
    var4 = var2.prototype;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun112057: for (var _fun112057_ip = 0;;) switch (_fun112057_ip) {
            case 0:
                var12 = arg0;
                var11 = arg1;
                var0 = {};
                var9 = var12;
                var5 = undefined;
                var3 = 3;
                var2 = 0;
                var1 = undefined;
                for (var6 in var9)
                    case 34: {
                        case 46: var14 = var6;
                        var15 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var3];
                        var13 = var15.bind(var5)(var13);
                        var15 = var13.hop;
                        var13 = var15.call;
                        var13 = var13.bind(var15)(var12, var14);
                        if (!var13) {
                            _fun112057_ip = 34;
                            continue _fun112057
                        }
                        case 86: var15 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var13 = var13[var2];
                        var16 = var15.bind(var5)(var13);
                        var15 = var16.objCreate;
                        var13 = var12[var14];
                        var13 = var15.bind(var16)(var13);
                        var0[var14] = var13;
                        var15 = var11;
                        if (!var15) {
                            _fun112057_ip = 162;
                            continue _fun112057
                        }
                        case 128: var17 = _closure1_slot0;
                        var16 = _closure1_slot1;
                        var16 = var16[var3];
                        var16 = var17.bind(var5)(var16);
                        var17 = var16.hop;
                        var16 = var17.call;
                        var15 = var16.bind(var17)(var11, var14);
                        case 162: var1 = var13;
                        if (!var15) {
                            _fun112057_ip = 34;
                            continue _fun112057
                        }
                        case 171: var16 = _closure1_slot0;
                        var15 = _closure1_slot1;
                        var15 = var15[var3];
                        var16 = var16.bind(var5)(var15);
                        var15 = var16.extend;
                        var14 = var11[var14];
                        var14 = var15.bind(var16)(var13, var14);
                        var1 = var13;
                        _fun112057_ip = 34;
                        continue _fun112057;
                    }
            case 212:
                return var0;
        }
    };
    var4._mergeFormats = var3;
    var2 = var2.prototype;
    var1 = function(arg0) { // Environment: var1
        _fun112058: for (var _fun112058_ip = 0;;) switch (_fun112058_ip) {
            case 0:
                var1 = arg0;
                var2 = 'string';
                var0 = typeof var1;
                var3 = var1;
                if (!(var2 === var0)) {
                    _fun112058_ip = 28;
                    continue _fun112058
                }
            case 17:
                var0 = new Array(1);
                var0[0] = var1;
                var3 = var0;
            case 28:
                if (var3) {
                    _fun112058_ip = 35;
                    continue _fun112058
                }
            case 31:
                var3 = new Array(0);
            case 35:
                var2 = var3.concat;
                var0 = _closure1_slot2;
                var1 = var0.defaultLocale;
                var5 = var2.bind(var3)(var1);
                var7 = var0.__localeData__;
                var6 = var5.length;
                var4 = 0;
                var0 = var4 < var6;
                var2 = 1;
                var1 = '-';
                var3 = undefined;
                if (!var0) {
                    _fun112058_ip = 165;
                    continue _fun112058
                }
            case 87:
                var8 = var5[var4];
                var0 = var8.toLowerCase;
                var8 = var0.bind(var8)();
                var0 = var8.split;
                var9 = var0.bind(var8)(var1);
                var0 = var9.length;
                if (!var0) {
                    _fun112058_ip = 157;
                    continue _fun112058
                }
            case 119:
                var0 = var9.join;
                var0 = var0.bind(var9)(var1);
                var0 = var7[var0];
                if (var0) {
                    _fun112058_ip = 245;
                    continue _fun112058
                }
            case 136:
                var8 = var9.pop;
                var8 = var8.bind(var9)();
                var8 = var9.length;
                var3 = var0;
                if (var8) {
                    _fun112058_ip = 119;
                    continue _fun112058
                }
            case 157:
                var4 = var4 + var2;
                if (var4 < var6) {
                    _fun112058_ip = 87;
                    continue _fun112058
                }
            case 165:
                var1 = var5.pop;
                var2 = var1.bind(var5)();
                var1 = global;
                var3 = var1.Error;
                var4 = var5.join;
                var1 = ', ';
                var4 = var4.bind(var5)(var1);
                var1 = 'No locale data has been added to IntlMessageFormat for: ';
                var4 = var1 + var4;
                var1 = ', or the default locale: ';
                var1 = var4 + var1;
                var10 = var1 + var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var11 = var2;
                var1 = new var11[var3](var10, var9);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 245:
                var0 = var0.locale;
                return var0;
        }
    };
    var2._resolveLocale = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [14349, 14351, 14353, 14350]);