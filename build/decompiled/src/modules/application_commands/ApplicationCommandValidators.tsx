// modules/application_commands/ApplicationCommandValidators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun90224: for (var _fun90224_ip = 0;;) switch (_fun90224_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = var1.minValue;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun90224_ip = 28;
                    continue _fun90224
                }
            case 18:
                var0 = var1.minValue;
                if (!(!(var3 < var0))) {
                    _fun90224_ip = 48;
                    continue _fun90224
                }
            case 28:
                var0 = var1.maxValue;
                if (!(var2 != var0)) {
                    _fun90224_ip = 91;
                    continue _fun90224
                }
            case 38:
                var0 = var1.maxValue;
                if (!(var3 > var0)) {
                    _fun90224_ip = 91;
                    continue _fun90224
                }
            case 48:
                var0 = var1.maxValue;
                if (!(var2 != var0)) {
                    _fun90224_ip = 71;
                    continue _fun90224
                }
            case 58:
                var0 = var1.minValue;
                if (!(var2 == var0)) {
                    _fun90224_ip = 264;
                    continue _fun90224
                }
            case 71:
                var0 = var1.minValue;
                if (!(var2 == var0)) {
                    _fun90224_ip = 183;
                    continue _fun90224
                }
            case 81:
                var0 = var1.maxValue;
                if (!(var2 == var0)) {
                    _fun90224_ip = 102;
                    continue _fun90224
                }
            case 91:
                var0 = {};
                var2 = true;
                var0.success = var2;
                return var0;
            case 102:
                var0 = {};
                var2 = false;
                var0.success = var2;
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 5;
                var3 = var5[var3];
                var7 = undefined;
                var3 = var4.bind(var7)(var3);
                var5 = var3.intl;
                var4 = var5.formatToPlainString;
                var3 = {};
                var6 = _closure1_slot8;
                var2 = var1.maxValue;
                var2 = var6.bind(var7)(var2);
                var3.maximum = var2;
                var2 = arg4;
                var2 = var4.bind(var5)(var2, var3);
                var0.error = var2;
                return var0;
            case 183:
                var0 = {};
                var2 = false;
                var0.success = var2;
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var3 = 5;
                var3 = var5[var3];
                var7 = undefined;
                var3 = var4.bind(var7)(var3);
                var5 = var3.intl;
                var4 = var5.formatToPlainString;
                var3 = {};
                var6 = _closure1_slot8;
                var2 = var1.minValue;
                var2 = var6.bind(var7)(var2);
                var3.minimum = var2;
                var2 = arg3;
                var2 = var4.bind(var5)(var2, var3);
                var0.error = var2;
                return var0;
            case 264:
                var0 = {};
                var2 = false;
                var0.success = var2;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 5;
                var2 = var4[var2];
                var6 = undefined;
                var2 = var3.bind(var6)(var2);
                var4 = var2.intl;
                var3 = var4.formatToPlainString;
                var2 = {};
                var5 = _closure1_slot8;
                var7 = var1.minValue;
                var7 = var5.bind(var6)(var7);
                var2.minimum = var7;
                var1 = var1.maxValue;
                var1 = var5.bind(var6)(var1);
                var2.maximum = var1;
                var1 = arg2;
                var1 = var3.bind(var4)(var1, var2);
                var0.error = var1;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        var3 = arg0;
        var2 = var3.toLocaleString;
        var4 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var4.bind(var0)(var1);
        var0 = var0.intl;
        var1 = var0.currentLocale;
        var0 = {};
        var4 = false;
        var0.useGrouping = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = {};
    var3 = 2;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var8 = var7.SUB_COMMAND;
    var7 = function() { // Environment: var6
        var0 = {};
        var1 = false;
        var0.success = var1;
        return var0;
    };
    var1[var8] = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var8 = var7.SUB_COMMAND_GROUP;
    var7 = function() { // Environment: var6
        var0 = {};
        var1 = false;
        var0.success = var1;
        return var0;
    };
    var1[var8] = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var8 = var7.BOOLEAN;
    var7 = function(arg0) { // Environment: var6
        _fun90228: for (var _fun90228_ip = 0;;) switch (_fun90228_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = 'text';
                if (!(var1 === var2)) {
                    _fun90228_ip = 82;
                    continue _fun90228
                }
            case 16:
                var1 = var0.text;
                var0 = var1.trim;
                var3 = var0.bind(var1)();
                var0 = {};
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.toChoiceBooleanValue;
                var2 = var1.bind(var2)(var3);
                var1 = null;
                var1 = var1 != var2;
                var0.success = var1;
                return var0;
            case 82:
                var0 = {};
                var1 = false;
                var0.success = var1;
                return var0;
        }
    };
    var1[var8] = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var8 = var7.STRING;
    var7 = function(arg0, arg1, arg2) { // Environment: var6
        _fun90229: for (var _fun90229_ip = 0;;) switch (_fun90229_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var4 = _closure1_slot1;
                var8 = _closure1_slot3;
                var2 = 4;
                var2 = var8[var2];
                var6 = undefined;
                var5 = var4.bind(var6)(var2);
                var4 = var1.type;
                var7 = _closure1_slot0;
                var2 = 2;
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.ApplicationCommandOptionType;
                var2 = var2.STRING;
                var4 = var4 === var2;
                var2 = 'option type must match validator type';
                var2 = var5.bind(var6)(var4, var2);
                var4 = var0.type;
                var2 = 'emoji';
                if (!(var2 !== var4)) {
                    _fun90229_ip = 129;
                    continue _fun90229
                }
            case 93:
                var2 = 'text';
                if (!(var2 !== var4)) {
                    _fun90229_ip = 112;
                    continue _fun90229
                }
            case 101:
                var2 = {};
                var4 = false;
                var2.success = var4;
                return var2;
            case 112:
                var4 = var0.text;
                var2 = var4.trim;
                var5 = var2.bind(var4)();
                _fun90229_ip = 135;
                continue _fun90229;
            case 129:
                var5 = var0.surrogate;
            case 135:
                var0 = var1.choices;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun90229_ip = 883;
                    continue _fun90229
                }
            case 150:
                var0 = var1.autocomplete;
                if (!var0) {
                    _fun90229_ip = 207;
                    continue _fun90229
                }
            case 159:
                var4 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 3;
                var0 = var7[var0];
                var8 = var4.bind(var6)(var0);
                var7 = var8.findAutocompleteChoiceStringValue;
                var4 = var1.name;
                var0 = arg2;
                var0 = var7.bind(var8)(var0, var4, var5);
                if (!(var2 == var0)) {
                    _fun90229_ip = 872;
                    continue _fun90229
                }
            case 207:
                var0 = var1.minLength;
                if (!(var6 === var0)) {
                    _fun90229_ip = 230;
                    continue _fun90229
                }
            case 217:
                var0 = var1.maxLength;
                if (!(var6 !== var0)) {
                    _fun90229_ip = 850;
                    continue _fun90229
                }
            case 230:
                if (!(var2 != var5)) {
                    _fun90229_ip = 861;
                    continue _fun90229
                }
            case 237:
                var7 = {};
                var4 = _closure1_slot0;
                var0 = _closure1_slot3;
                var10 = 5;
                var8 = var0[var10];
                var8 = var4.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8["e+9/SY"];
                var7.exactRangeErrorMessage = var8;
                var8 = var0[var10];
                var8 = var4.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.IE1sTh;
                var7.rangeErrorMessage = var8;
                var8 = var0[var10];
                var8 = var4.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.rXAFQD;
                var7.minErrorMessage = var8;
                var0 = var0[var10];
                var0 = var4.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0["ycEPx/"];
                var7.maxErrorMessage = var0;
                var0 = var1.minLength;
                if (!(var6 !== var0)) {
                    _fun90229_ip = 383;
                    continue _fun90229
                }
            case 368:
                var4 = var5.length;
                var0 = var1.minLength;
                if (!(!(var4 < var0))) {
                    _fun90229_ip = 408;
                    continue _fun90229
                }
            case 383:
                var0 = var1.maxLength;
                if (!(var6 !== var0)) {
                    _fun90229_ip = 490;
                    continue _fun90229
                }
            case 393:
                var4 = var5.length;
                var0 = var1.maxLength;
                if (!(var4 > var0)) {
                    _fun90229_ip = 490;
                    continue _fun90229
                }
            case 408:
                var0 = var1.maxLength;
                if (!(var6 !== var0)) {
                    _fun90229_ip = 447;
                    continue _fun90229
                }
            case 418:
                var0 = var1.minLength;
                if (!(var6 !== var0)) {
                    _fun90229_ip = 447;
                    continue _fun90229
                }
            case 428:
                var4 = var1.minLength;
                var0 = var1.maxLength;
                if (!(var4 !== var0)) {
                    _fun90229_ip = 763;
                    continue _fun90229
                }
            case 447:
                var0 = var1.maxLength;
                if (!(var6 !== var0)) {
                    _fun90229_ip = 470;
                    continue _fun90229
                }
            case 457:
                var0 = var1.minLength;
                if (!(var6 === var0)) {
                    _fun90229_ip = 668;
                    continue _fun90229
                }
            case 470:
                var0 = var1.minLength;
                if (!(var6 === var0)) {
                    _fun90229_ip = 586;
                    continue _fun90229
                }
            case 480:
                var0 = var1.maxLength;
                if (!(var6 === var0)) {
                    _fun90229_ip = 504;
                    continue _fun90229
                }
            case 490:
                var0 = {};
                var4 = true;
                var0.success = var4;
                _fun90229_ip = 839;
                continue _fun90229;
            case 504:
                var4 = {};
                var8 = false;
                var4.success = var8;
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var8 = var8[var10];
                var8 = var9.bind(var6)(var8);
                var12 = var8.intl;
                var11 = var12.formatToPlainString;
                var9 = var7.maxErrorMessage;
                var8 = {};
                var14 = _closure1_slot8;
                var13 = var1.maxLength;
                var13 = var14.bind(var6)(var13);
                var8.maximum = var13;
                var8 = var11.bind(var12)(var9, var8);
                var4.error = var8;
                var0 = var4;
                _fun90229_ip = 839;
                continue _fun90229;
            case 586:
                var4 = {};
                var8 = false;
                var4.success = var8;
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var8 = var8[var10];
                var8 = var9.bind(var6)(var8);
                var12 = var8.intl;
                var11 = var12.formatToPlainString;
                var9 = var7.minErrorMessage;
                var8 = {};
                var14 = _closure1_slot8;
                var13 = var1.minLength;
                var13 = var14.bind(var6)(var13);
                var8.minimum = var13;
                var8 = var11.bind(var12)(var9, var8);
                var4.error = var8;
                var0 = var4;
                _fun90229_ip = 839;
                continue _fun90229;
            case 668:
                var4 = {};
                var8 = false;
                var4.success = var8;
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var8 = var8[var10];
                var8 = var9.bind(var6)(var8);
                var12 = var8.intl;
                var11 = var12.formatToPlainString;
                var9 = var7.rangeErrorMessage;
                var8 = {};
                var14 = _closure1_slot8;
                var13 = var1.minLength;
                var13 = var14.bind(var6)(var13);
                var8.minimum = var13;
                var13 = var1.maxLength;
                var13 = var14.bind(var6)(var13);
                var8.maximum = var13;
                var8 = var11.bind(var12)(var9, var8);
                var4.error = var8;
                var0 = var4;
                _fun90229_ip = 839;
                continue _fun90229;
            case 763:
                var4 = {};
                var8 = false;
                var4.success = var8;
                var9 = _closure1_slot0;
                var8 = _closure1_slot3;
                var8 = var8[var10];
                var8 = var9.bind(var6)(var8);
                var10 = var8.intl;
                var9 = var10.formatToPlainString;
                var8 = var7.exactRangeErrorMessage;
                var7 = {};
                var12 = _closure1_slot8;
                var11 = var1.minLength;
                var11 = var12.bind(var6)(var11);
                var7.value = var11;
                var7 = var9.bind(var10)(var8, var7);
                var4.error = var7;
                var0 = var4;
            case 839:
                var4 = var0.success;
                if (var4) {
                    _fun90229_ip = 850;
                    continue _fun90229
                }
            case 848:
                return var0;
            case 850:
                var0 = {};
                var4 = true;
                var0.success = var4;
                return var0;
            case 861:
                var0 = {};
                var4 = false;
                var0.success = var4;
                return var0;
            case 872:
                var0 = {};
                var4 = true;
                var0.success = var4;
                return var0;
            case 883:
                var0 = {};
                var4 = _closure1_slot0;
                var7 = _closure1_slot3;
                var3 = 3;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.findChoiceStringValue;
                var1 = var1.choices;
                var1 = var3.bind(var4)(var1, var5);
                var1 = var2 != var1;
                var0.success = var1;
                return var0;
        }
    };
    var1[var8] = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var8 = var7.INTEGER;
    var7 = function(arg0, arg1, arg2) { // Environment: var6
        _fun90230: for (var _fun90230_ip = 0;;) switch (_fun90230_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var4 = _closure1_slot1;
                var8 = _closure1_slot3;
                var2 = 4;
                var2 = var8[var2];
                var6 = undefined;
                var5 = var4.bind(var6)(var2);
                var4 = var1.type;
                var7 = _closure1_slot0;
                var2 = 2;
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.ApplicationCommandOptionType;
                var2 = var2.INTEGER;
                var4 = var4 === var2;
                var2 = 'option type must match validator type';
                var2 = var5.bind(var6)(var4, var2);
                var7 = var0.type;
                var2 = null;
                var4 = 'text';
                var5 = null;
                if (!(var4 === var7)) {
                    _fun90230_ip = 112;
                    continue _fun90230
                }
            case 97:
                var4 = var0.text;
                var0 = var4.trim;
                var5 = var0.bind(var4)();
            case 112:
                if (!(var2 != var5)) {
                    _fun90230_ip = 487;
                    continue _fun90230
                }
            case 119:
                var4 = var5.length;
                var0 = 0;
                if (!(var0 !== var4)) {
                    _fun90230_ip = 487;
                    continue _fun90230
                }
            case 133:
                var0 = var1.choices;
                if (!(var2 == var0)) {
                    _fun90230_ip = 436;
                    continue _fun90230
                }
            case 146:
                var0 = var1.autocomplete;
                if (!var0) {
                    _fun90230_ip = 203;
                    continue _fun90230
                }
            case 155:
                var4 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 3;
                var0 = var7[var0];
                var8 = var4.bind(var6)(var0);
                var7 = var8.findAutocompleteChoiceNumberValue;
                var4 = var1.name;
                var0 = arg2;
                var0 = var7.bind(var8)(var0, var4, var5);
                if (!(var2 == var0)) {
                    _fun90230_ip = 425;
                    continue _fun90230
                }
            case 203:
                var0 = global;
                var7 = var0.Number;
                var8 = _closure1_slot2;
                var9 = _closure1_slot3;
                var4 = 6;
                var4 = var9[var4];
                var9 = var8.bind(var6)(var4);
                var8 = var9.normalizeNumericString;
                var4 = _closure1_slot4;
                var4 = var4.locale;
                var4 = var8.bind(var9)(var4, var5);
                var9 = var7.bind(var6)(var4);
                if (!(var2 != var9)) {
                    _fun90230_ip = 411;
                    continue _fun90230
                }
            case 265:
                var4 = var0.isNaN;
                var4 = var4.bind(var6)(var9);
                if (var4) {
                    _fun90230_ip = 411;
                    continue _fun90230
                }
            case 282:
                var7 = var0.Number;
                var4 = var7.isInteger;
                var4 = var4.bind(var7)(var9);
                if (!var4) {
                    _fun90230_ip = 411;
                    continue _fun90230
                }
            case 302:
                var4 = var0.Number;
                var0 = var4.isSafeInteger;
                var0 = var0.bind(var4)(var9);
                if (!var0) {
                    _fun90230_ip = 411;
                    continue _fun90230
                }
            case 322:
                var8 = _closure1_slot7;
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var0 = 5;
                var4 = var11[var0];
                var4 = var10.bind(var6)(var4);
                var4 = var4.t;
                var14 = var4["8Y5zsp"];
                var4 = var11[var0];
                var4 = var10.bind(var6)(var4);
                var4 = var4.t;
                var13 = var4.CyRLmH;
                var0 = var11[var0];
                var0 = var10.bind(var6)(var0);
                var0 = var0.t;
                var12 = var0["VD3Q+S"];
                var17 = undefined;
                var16 = var9;
                var15 = var1;
                var0 = var17[var8](var16, var15, var14, var13, var12, var11);
                _fun90230_ip = 423;
                continue _fun90230;
            case 411:
                var4 = {};
                var7 = false;
                var4.success = var7;
                var0 = var4;
            case 423:
                return var0;
            case 425:
                var0 = {};
                var4 = true;
                var0.success = var4;
                return var0;
            case 436:
                var0 = {};
                var4 = _closure1_slot0;
                var7 = _closure1_slot3;
                var3 = 3;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.findChoiceNumberValue;
                var1 = var1.choices;
                var1 = var3.bind(var4)(var1, var5);
                var1 = var2 != var1;
                var0.success = var1;
                return var0;
            case 487:
                var0 = {};
                var1 = false;
                var0.success = var1;
                return var0;
        }
    };
    var1[var8] = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var8 = var7.NUMBER;
    var7 = function(arg0, arg1, arg2) { // Environment: var6
        _fun90231: for (var _fun90231_ip = 0;;) switch (_fun90231_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var4 = _closure1_slot1;
                var8 = _closure1_slot3;
                var2 = 4;
                var2 = var8[var2];
                var6 = undefined;
                var5 = var4.bind(var6)(var2);
                var4 = var1.type;
                var7 = _closure1_slot0;
                var2 = 2;
                var2 = var8[var2];
                var2 = var7.bind(var6)(var2);
                var2 = var2.ApplicationCommandOptionType;
                var2 = var2.NUMBER;
                var4 = var4 === var2;
                var2 = 'option type must match validator type';
                var2 = var5.bind(var6)(var4, var2);
                var7 = var0.type;
                var2 = null;
                var4 = 'text';
                var5 = null;
                if (!(var4 === var7)) {
                    _fun90231_ip = 112;
                    continue _fun90231
                }
            case 97:
                var4 = var0.text;
                var0 = var4.trim;
                var5 = var0.bind(var4)();
            case 112:
                if (!(var2 != var5)) {
                    _fun90231_ip = 469;
                    continue _fun90231
                }
            case 119:
                var4 = var5.length;
                var0 = 0;
                if (!(var0 !== var4)) {
                    _fun90231_ip = 469;
                    continue _fun90231
                }
            case 133:
                var0 = var1.choices;
                if (!(var2 == var0)) {
                    _fun90231_ip = 418;
                    continue _fun90231
                }
            case 146:
                var0 = var1.autocomplete;
                if (!var0) {
                    _fun90231_ip = 203;
                    continue _fun90231
                }
            case 155:
                var4 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 3;
                var0 = var7[var0];
                var8 = var4.bind(var6)(var0);
                var7 = var8.findAutocompleteChoiceNumberValue;
                var4 = var1.name;
                var0 = arg2;
                var0 = var7.bind(var8)(var0, var4, var5);
                if (!(var2 == var0)) {
                    _fun90231_ip = 407;
                    continue _fun90231
                }
            case 203:
                var0 = global;
                var7 = var0.Number;
                var8 = _closure1_slot2;
                var9 = _closure1_slot3;
                var4 = 6;
                var4 = var9[var4];
                var9 = var8.bind(var6)(var4);
                var8 = var9.normalizeNumericString;
                var4 = _closure1_slot4;
                var4 = var4.locale;
                var4 = var8.bind(var9)(var4, var5);
                var9 = var7.bind(var6)(var4);
                var4 = var0.isNaN;
                var4 = var4.bind(var6)(var9);
                if (var4) {
                    _fun90231_ip = 393;
                    continue _fun90231
                }
            case 272:
                var4 = var0.Number;
                var4 = var4.MAX_SAFE_INTEGER;
                if (!(!(var9 > var4))) {
                    _fun90231_ip = 393;
                    continue _fun90231
                }
            case 288:
                var0 = var0.Number;
                var0 = var0.MIN_SAFE_INTEGER;
                if (!(!(var9 < var0))) {
                    _fun90231_ip = 393;
                    continue _fun90231
                }
            case 304:
                var8 = _closure1_slot7;
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var0 = 5;
                var4 = var11[var0];
                var4 = var10.bind(var6)(var4);
                var4 = var4.t;
                var14 = var4["8Y5zsp"];
                var4 = var11[var0];
                var4 = var10.bind(var6)(var4);
                var4 = var4.t;
                var13 = var4.CyRLmH;
                var0 = var11[var0];
                var0 = var10.bind(var6)(var0);
                var0 = var0.t;
                var12 = var0["VD3Q+S"];
                var17 = undefined;
                var16 = var9;
                var15 = var1;
                var0 = var17[var8](var16, var15, var14, var13, var12, var11);
                _fun90231_ip = 405;
                continue _fun90231;
            case 393:
                var4 = {};
                var7 = false;
                var4.success = var7;
                var0 = var4;
            case 405:
                return var0;
            case 407:
                var0 = {};
                var4 = true;
                var0.success = var4;
                return var0;
            case 418:
                var0 = {};
                var4 = _closure1_slot0;
                var7 = _closure1_slot3;
                var3 = 3;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.findChoiceNumberValue;
                var1 = var1.choices;
                var1 = var3.bind(var4)(var1, var5);
                var1 = var2 != var1;
                var0.success = var1;
                return var0;
            case 469:
                var0 = {};
                var1 = false;
                var0.success = var1;
                return var0;
        }
    };
    var1[var8] = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var8 = var7.USER;
    var7 = function(arg0, arg1, arg2, arg3) { // Environment: var6
        _fun90232: for (var _fun90232_ip = 0;;) switch (_fun90232_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = 'text';
                if (!(var1 !== var2)) {
                    _fun90232_ip = 40;
                    continue _fun90232
                }
            case 16:
                var1 = {};
                var3 = var0.type;
                var2 = 'userMention';
                var2 = var2 === var3;
                var1.success = var2;
                return var1;
            case 40:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.isSnowflake;
                var3 = var0.text;
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun90232_ip = 175;
                    continue _fun90232
                }
            case 84:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 8;
                var1 = var4[var1];
                var6 = var3.bind(var2)(var1);
                var5 = var6.resolveApplicationCommandOption;
                var10 = var0.text;
                var3 = {};
                var0 = false;
                var3.allowRoles = var0;
                var9 = arg3;
                var8 = arg2;
                var11 = var6;
                var7 = var3;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                var0 = {};
                var3 = null;
                var3 = var3 == var1;
                var2 = undefined;
                if (var3) {
                    _fun90232_ip = 158;
                    continue _fun90232
                }
            case 153:
                var2 = var1.type;
            case 158:
                var1 = 'userMention';
                var1 = var1 === var2;
                var0.success = var1;
                return var0;
            case 175:
                var0 = {};
                var1 = true;
                var0.success = var1;
                return var0;
        }
    };
    var1[var8] = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var8 = var7.CHANNEL;
    var7 = function(arg0, arg1, arg2, arg3) { // Environment: var6
        _fun90233: for (var _fun90233_ip = 0;;) switch (_fun90233_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = 'text';
                if (!(var1 !== var2)) {
                    _fun90233_ip = 38;
                    continue _fun90233
                }
            case 16:
                var1 = {};
                var3 = var0.type;
                var2 = 'channelMention';
                var2 = var2 === var3;
                var1.success = var2;
                return var1;
            case 38:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.isSnowflake;
                var3 = var0.text;
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun90233_ip = 159;
                    continue _fun90233
                }
            case 82:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 8;
                var1 = var4[var1];
                var5 = var3.bind(var2)(var1);
                var4 = var5.resolveApplicationCommandOption;
                var3 = var0.text;
                var1 = arg3;
                var0 = arg2;
                var1 = var4.bind(var5)(var3, var1, var0);
                var0 = {};
                var3 = null;
                var3 = var3 == var1;
                var2 = undefined;
                if (var3) {
                    _fun90233_ip = 144;
                    continue _fun90233
                }
            case 139:
                var2 = var1.type;
            case 144:
                var1 = 'channelMention';
                var1 = var1 === var2;
                var0.success = var1;
                return var0;
            case 159:
                var0 = {};
                var1 = true;
                var0.success = var1;
                return var0;
        }
    };
    var1[var8] = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var8 = var7.ROLE;
    var7 = function(arg0, arg1, arg2, arg3) { // Environment: var6
        _fun90234: for (var _fun90234_ip = 0;;) switch (_fun90234_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = 'text';
                if (!(var1 !== var2)) {
                    _fun90234_ip = 39;
                    continue _fun90234
                }
            case 16:
                var1 = {};
                var3 = _closure1_slot6;
                var2 = undefined;
                var2 = var3.bind(var2)(var0);
                var1.success = var2;
                return var1;
            case 39:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.isSnowflake;
                var3 = var0.text;
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun90234_ip = 172;
                    continue _fun90234
                }
            case 83:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 8;
                var1 = var4[var1];
                var6 = var3.bind(var2)(var1);
                var5 = var6.resolveApplicationCommandOption;
                var10 = var0.text;
                var3 = {};
                var0 = false;
                var3.allowUsers = var0;
                var9 = arg3;
                var8 = arg2;
                var11 = var6;
                var7 = var3;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                var0 = {};
                var3 = null;
                var3 = var3 == var1;
                var2 = undefined;
                if (var3) {
                    _fun90234_ip = 157;
                    continue _fun90234
                }
            case 152:
                var2 = var1.type;
            case 157:
                var1 = 'roleMention';
                var1 = var1 === var2;
                var0.success = var1;
                return var0;
            case 172:
                var0 = {};
                var1 = true;
                var0.success = var1;
                return var0;
        }
    };
    var1[var8] = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ApplicationCommandOptionType;
    var8 = var7.MENTIONABLE;
    var7 = function(arg0, arg1, arg2, arg3) { // Environment: var6
        _fun90235: for (var _fun90235_ip = 0;;) switch (_fun90235_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = 'text';
                if (!(var1 !== var2)) {
                    _fun90235_ip = 57;
                    continue _fun90235
                }
            case 16:
                var1 = {};
                var3 = var0.type;
                var2 = 'userMention';
                var2 = var2 === var3;
                if (var2) {
                    _fun90235_ip = 50;
                    continue _fun90235
                }
            case 36:
                var4 = _closure1_slot6;
                var3 = undefined;
                var2 = var4.bind(var3)(var0);
            case 50:
                var1.success = var2;
                return var1;
            case 57:
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 7;
                var1 = var4[var1];
                var5 = undefined;
                var4 = var2.bind(var5)(var1);
                var2 = var4.isSnowflake;
                var1 = var0.text;
                var1 = var2.bind(var4)(var1);
                if (var1) {
                    _fun90235_ip = 193;
                    continue _fun90235
                }
            case 101:
                var2 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 8;
                var1 = var4[var1];
                var6 = var2.bind(var5)(var1);
                var4 = var6.resolveApplicationCommandOption;
                var2 = var0.text;
                var1 = arg3;
                var0 = arg2;
                var4 = var4.bind(var6)(var2, var1, var0);
                var0 = {};
                var1 = null;
                var1 = var1 != var4;
                if (!var1) {
                    _fun90235_ip = 186;
                    continue _fun90235
                }
            case 156:
                var6 = var4.type;
                var2 = 'userMention';
                var2 = var2 === var6;
                if (var2) {
                    _fun90235_ip = 183;
                    continue _fun90235
                }
            case 174:
                var3 = _closure1_slot6;
                var2 = var3.bind(var5)(var4);
            case 183:
                var1 = var2;
            case 186:
                var0.success = var1;
                return var0;
            case 193:
                var0 = {};
                var1 = true;
                var0.success = var1;
                return var0;
        }
    };
    var1[var8] = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ApplicationCommandOptionType;
    var7 = var3.ATTACHMENT;
    var3 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var6
        _fun90236: for (var _fun90236_ip = 0;;) switch (_fun90236_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.type;
                var0 = 'text';
                if (!(var0 === var1)) {
                    _fun90236_ip = 116;
                    continue _fun90236
                }
            case 16:
                var5 = _closure1_slot5;
                var4 = var5.getUpload;
                var1 = arg1;
                var3 = var1.name;
                var6 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var6 = var6.bind(var0)(var1);
                var1 = var6.getCommandAttachmentDraftType;
                var0 = arg4;
                var1 = var1.bind(var6)(var0);
                var0 = arg2;
                var3 = var4.bind(var5)(var0, var3, var1);
                var0 = {};
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun90236_ip = 109;
                    continue _fun90236
                }
            case 94:
                var3 = var3.filename;
                var2 = var2.text;
                var1 = var3 === var2;
            case 109:
                var0.success = var1;
                return var0;
            case 116:
                var0 = {};
                var1 = false;
                var0.success = var1;
                return var0;
        }
    };
    var1[var7] = var3;
    var3 = function arg0() {
        _fun90237: for (var _fun90237_ip = 0;;) switch (_fun90237_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.type;
                var0 = 'roleMention';
                var0 = var0 === var1;
                if (var0) {
                    _fun90237_ip = 55;
                    continue _fun90237
                }
            case 19:
                var3 = var2.type;
                var1 = 'textMention';
                var1 = var1 === var3;
                if (!var1) {
                    _fun90237_ip = 52;
                    continue _fun90237
                }
            case 37:
                var3 = var2.text;
                var2 = '@everyone';
                var1 = var2 === var3;
            case 52:
                var0 = var1;
            case 55:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_commands/ApplicationCommandValidators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1676, 3959, 1636, 7949, 44, 1234, 7947, 4508, 7950, 2]);