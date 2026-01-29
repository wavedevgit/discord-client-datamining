// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = function(arg0, arg1, arg2) { // Original name: Compiler, environment: var0
        var1 = this;
        var0 = arg0;
        var1.locales = var0;
        var0 = arg1;
        var1.formats = var0;
        var0 = arg2;
        var1.pluralFn = var0;
        var0 = undefined;
        return var0;
    };
    var4 = function(arg0) { // Original name: StringFormat, environment: var0
        var1 = arg0;
        var0 = this;
        var0.id = var1;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot0 = var4;
    var3 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: PluralFormat, environment: var0
        var1 = this;
        var0 = arg0;
        var1.id = var0;
        var0 = arg1;
        var1.useOrdinal = var0;
        var0 = arg2;
        var1.offset = var0;
        var0 = arg3;
        var1.options = var0;
        var0 = arg4;
        var1.pluralFn = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot1 = var3;
    var2 = function(arg0, arg1, arg2, arg3) { // Original name: PluralOffsetString, environment: var0
        var1 = this;
        var0 = arg0;
        var1.id = var0;
        var0 = arg1;
        var1.offset = var0;
        var0 = arg2;
        var1.numberFormat = var0;
        var0 = arg3;
        var1.string = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot2 = var2;
    var1 = function(arg0, arg1) { // Original name: SelectFormat, environment: var0
        var1 = this;
        var0 = arg0;
        var1.id = var0;
        var0 = arg1;
        var1.options = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot3 = var1;
    var6 = arg5;
    var6.default = var5;
    var7 = var5.prototype;
    var6 = function(arg0) { // Environment: var0
        var2 = this;
        var0 = new Array(0);
        var2.pluralStack = var0;
        var0 = null;
        var2.currentPlural = var0;
        var2.pluralNumberFormat = var0;
        var1 = var2.compileMessage;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var7.compile = var6;
    var7 = var5.prototype;
    var6 = function(arg0) { // Environment: var0
        _fun112511: for (var _fun112511_ip = 0;;) switch (_fun112511_ip) {
            case 0:
                var0 = arg0;
                var7 = this;
                if (!var0) {
                    _fun112511_ip = 176;
                    continue _fun112511
                }
            case 12:
                var2 = var0.type;
                var1 = 'messageFormatPattern';
                if (!(var1 === var2)) {
                    _fun112511_ip = 176;
                    continue _fun112511
                }
            case 30:
                var6 = var0.elements;
                var0 = new Array(0);
                var5 = var6.length;
                var4 = 0;
                var8 = var4 < var5;
                var3 = 1;
                var2 = 'argumentElement';
                var1 = 'messageTextElement';
                if (!var8) {
                    _fun112511_ip = 174;
                    continue _fun112511
                }
            case 69:
                var10 = var6[var4];
                var8 = var10.type;
                if (!(var1 !== var8)) {
                    _fun112511_ip = 145;
                    continue _fun112511
                }
            case 82:
                if (!(var2 !== var8)) {
                    _fun112511_ip = 122;
                    continue _fun112511
                }
            case 86:
                var8 = global;
                var11 = var8.Error;
                var8 = var11.prototype;
                var9 = Object.create(var8, {
                    constructor: {
                        value: var11
                    }
                });
                var12 = 'Message element does not have a valid type';
                var13 = var9;
                var8 = new var13[var11](var12, var11);
                var8 = var8 instanceof Object ? var8 : var9;
                throw var8;
            case 122:
                var9 = var0.push;
                var8 = var7.compileArgument;
                var8 = var8.bind(var7)(var10);
                var8 = var9.bind(var0)(var8);
                _fun112511_ip = 166;
                continue _fun112511;
            case 145:
                var9 = var0.push;
                var8 = var7.compileMessageText;
                var8 = var8.bind(var7)(var10);
                var8 = var9.bind(var0)(var8);
            case 166:
                var4 = var4 + var3;
                if (var4 < var5) {
                    _fun112511_ip = 69;
                    continue _fun112511
                }
            case 174:
                return var0;
            case 176:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var12 = 'Message AST is not of type: "messageFormatPattern"';
                var13 = var1;
                var0 = new var13[var2](var12, var11);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var7.compileMessage = var6;
    var7 = var5.prototype;
    var6 = function(arg0) { // Environment: var0
        _fun112512: for (var _fun112512_ip = 0;;) switch (_fun112512_ip) {
            case 0:
                var1 = arg0;
                var2 = this;
                var0 = var2.currentPlural;
                if (!var0) {
                    _fun112512_ip = 47;
                    continue _fun112512
                }
            case 15:
                var4 = /(^|[^\\])#/g;
                var3 = var4.test;
                var0 = var1.value;
                var0 = var3.bind(var4)(var0);
                if (var0) {
                    _fun112512_ip = 83;
                    continue _fun112512
                }
            case 47:
                var5 = var1.value;
                var4 = var5.replace;
                var3 = /\\#/g;
                var0 = '#';
                var0 = var4.bind(var5)(var3, var0);
                _fun112512_ip = 204;
                continue _fun112512;
            case 83:
                var3 = var2.pluralNumberFormat;
                if (var3) {
                    _fun112512_ip = 138;
                    continue _fun112512
                }
            case 92:
                var3 = global;
                var3 = var3.Intl;
                var5 = var3.NumberFormat;
                var10 = var2.locales;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = var4;
                var3 = new var11[var5](var10, var9);
                var3 = var3 instanceof Object ? var3 : var4;
                var2.pluralNumberFormat = var3;
            case 138:
                var6 = _closure1_slot2;
                var3 = var2.currentPlural;
                var10 = var3.id;
                var3 = var2.currentPlural;
                var3 = var3.format;
                var9 = var3.offset;
                var8 = var2.pluralNumberFormat;
                var7 = var1.value;
                var2 = var6.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var2;
                var1 = new var11[var6](var10, var9, var8, var7, var6);
                var0 = var1 instanceof Object ? var1 : var2;
            case 204:
                return var0;
        }
    };
    var7.compileMessageText = var6;
    var7 = var5.prototype;
    var6 = function(arg0) { // Environment: var0
        _fun112513: for (var _fun112513_ip = 0;;) switch (_fun112513_ip) {
            case 0:
                var1 = arg0;
                var5 = this;
                var0 = var1.format;
                if (var0) {
                    _fun112513_ip = 48;
                    continue _fun112513
                }
            case 14:
                var4 = _closure1_slot0;
                var15 = var1.id;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var16 = var3;
                var2 = new var16[var4](var15, var14);
                var2 = var2 instanceof Object ? var2 : var3;
                return var2;
            case 48:
                var2 = var5.formats;
                var4 = var5.locales;
                var10 = var5.pluralFn;
                var6 = var0.type;
                var3 = 'numberFormat';
                if (!(var3 !== var6)) {
                    _fun112513_ip = 415;
                    continue _fun112513
                }
            case 82:
                var3 = 'dateFormat';
                if (!(var3 !== var6)) {
                    _fun112513_ip = 341;
                    continue _fun112513
                }
            case 93:
                var3 = 'timeFormat';
                if (!(var3 !== var6)) {
                    _fun112513_ip = 267;
                    continue _fun112513
                }
            case 106:
                var3 = 'pluralFormat';
                if (!(var3 !== var6)) {
                    _fun112513_ip = 207;
                    continue _fun112513
                }
            case 116:
                var3 = 'selectFormat';
                if (!(var3 !== var6)) {
                    _fun112513_ip = 162;
                    continue _fun112513
                }
            case 126:
                var3 = global;
                var7 = var3.Error;
                var3 = var7.prototype;
                var6 = Object.create(var3, {
                    constructor: {
                        value: var7
                    }
                });
                var15 = 'Message element does not have a valid format type';
                var16 = var6;
                var3 = new var16[var7](var15, var14);
                var3 = var3 instanceof Object ? var3 : var6;
                throw var3;
            case 162:
                var3 = var5.compileOptions;
                var14 = var3.bind(var5)(var1);
                var7 = _closure1_slot3;
                var15 = var1.id;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var16 = var6;
                var3 = new var16[var7](var15, var14, var13);
                var3 = var3 instanceof Object ? var3 : var6;
                return var3;
            case 207:
                var3 = var5.compileOptions;
                var12 = var3.bind(var5)(var1);
                var8 = _closure1_slot1;
                var15 = var1.id;
                var14 = var0.ordinal;
                var13 = var0.offset;
                var5 = var8.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var8
                    }
                });
                var16 = var5;
                var11 = var10;
                var3 = new var16[var8](var15, var14, var13, var12, var11, var10);
                var3 = var3 instanceof Object ? var3 : var5;
                return var3;
            case 267:
                var5 = var2.time;
                var3 = var0.style;
                var14 = var5[var3];
                var3 = {};
                var5 = var1.id;
                var3.id = var5;
                var5 = global;
                var5 = var5.Intl;
                var5 = var5.DateTimeFormat;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var16 = var6;
                var15 = var4;
                var5 = new var16[var5](var15, var14, var13);
                var5 = var5 instanceof Object ? var5 : var6;
                var5 = var5.format;
                var3.format = var5;
                return var3;
            case 341:
                var5 = var2.date;
                var3 = var0.style;
                var14 = var5[var3];
                var3 = {};
                var5 = var1.id;
                var3.id = var5;
                var5 = global;
                var5 = var5.Intl;
                var5 = var5.DateTimeFormat;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var16 = var6;
                var15 = var4;
                var5 = new var16[var5](var15, var14, var13);
                var5 = var5 instanceof Object ? var5 : var6;
                var5 = var5.format;
                var3.format = var5;
                return var3;
            case 415:
                var2 = var2.number;
                var0 = var0.style;
                var14 = var2[var0];
                var0 = {};
                var1 = var1.id;
                var0.id = var1;
                var1 = global;
                var1 = var1.Intl;
                var1 = var1.NumberFormat;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var16 = var2;
                var15 = var4;
                var1 = new var16[var1](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var2;
                var1 = var1.format;
                var0.format = var1;
                return var0;
        }
    };
    var7.compileArgument = var6;
    var6 = var5.prototype;
    var5 = function(arg0) { // Environment: var0
        _fun112514: for (var _fun112514_ip = 0;;) switch (_fun112514_ip) {
            case 0:
                var3 = arg0;
                var2 = this;
                var1 = var3.format;
                var5 = var1.options;
                var0 = {};
                var7 = var2.pluralStack;
                var6 = var7.push;
                var4 = var2.currentPlural;
                var4 = var6.bind(var7)(var4);
                var6 = var1.type;
                var4 = 'pluralFormat';
                var1 = null;
                if (!(var4 === var6)) {
                    _fun112514_ip = 60;
                    continue _fun112514
                }
            case 57:
                var1 = var3;
            case 60:
                var2.currentPlural = var1;
                var4 = var5.length;
                var3 = 0;
                var6 = var3 < var4;
                var1 = 1;
                if (!var6) {
                    _fun112514_ip = 121;
                    continue _fun112514
                }
            case 83:
                var6 = var5[var3];
                var7 = var6.selector;
                var8 = var2.compileMessage;
                var6 = var6.value;
                var6 = var8.bind(var2)(var6);
                var0[var7] = var6;
                var3 = var3 + var1;
                if (var3 < var4) {
                    _fun112514_ip = 83;
                    continue _fun112514
                }
            case 121:
                var3 = var2.pluralStack;
                var1 = var3.pop;
                var1 = var1.bind(var3)();
                var2.currentPlural = var1;
                return var0;
        }
    };
    var6.compileOptions = var5;
    var5 = var4.prototype;
    var4 = function(arg0) { // Environment: var0
        _fun112515: for (var _fun112515_ip = 0;;) switch (_fun112515_ip) {
            case 0:
                var4 = arg0;
                var0 = '';
                if (!var4) {
                    _fun112515_ip = 42;
                    continue _fun112515
                }
            case 10:
                var3 = 'string';
                var2 = typeof var4;
                var1 = var4;
                if (!(var3 !== var2)) {
                    _fun112515_ip = 39;
                    continue _fun112515
                }
            case 24:
                var2 = global;
                var3 = var2.String;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
            case 39:
                var0 = var1;
            case 42:
                return var0;
        }
    };
    var5.format = var4;
    var4 = var3.prototype;
    var3 = function(arg0) { // Environment: var0
        _fun112516: for (var _fun112516_ip = 0;;) switch (_fun112516_ip) {
            case 0:
                var3 = arg0;
                var5 = this;
                var1 = var5.options;
                var0 = '=';
                var0 = var0 + var3;
                var0 = var1[var0];
                if (var0) {
                    _fun112516_ip = 58;
                    continue _fun112516
                }
            case 26:
                var4 = var5.pluralFn;
                var2 = var5.offset;
                var3 = var3 - var2;
                var2 = var5.useOrdinal;
                var2 = var4.bind(var5)(var3, var2);
                var0 = var1[var2];
            case 58:
                if (var0) {
                    _fun112516_ip = 67;
                    continue _fun112516
                }
            case 61:
                var0 = var1.other;
            case 67:
                return var0;
        }
    };
    var4.getOption = var3;
    var3 = var2.prototype;
    var2 = function(arg0) { // Environment: var0
        var0 = this;
        var3 = var0.numberFormat;
        var2 = var3.format;
        var4 = var0.offset;
        var1 = arg0;
        var1 = var1 - var4;
        var1 = var2.bind(var3)(var1);
        var3 = var0.string;
        var2 = var3.replace;
        var0 = '$1';
        var1 = var0 + var1;
        var0 = /(^|[^\\])#/g;
        var3 = var2.bind(var3)(var0, var1);
        var2 = var3.replace;
        var1 = /\\#/g;
        var0 = '#';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.format = var2;
    var1 = var1.prototype;
    var0 = function(arg0) { // Environment: var0
        _fun112518: for (var _fun112518_ip = 0;;) switch (_fun112518_ip) {
            case 0:
                var0 = this;
                var1 = var0.options;
                var0 = arg0;
                var0 = var1[var0];
                if (var0) {
                    _fun112518_ip = 24;
                    continue _fun112518
                }
            case 18:
                var0 = var1.other;
            case 24:
                return var0;
        }
    };
    var1.getOption = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);