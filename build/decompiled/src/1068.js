// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
var12 = require;
var2 = exports;
var13 = dependencyMap;
var _closure1_slot0 = var12;
var _closure1_slot1 = var13;
var0 = function(arg0, arg1, arg2, arg3) { // Original name: createFrame, environment: var10
    _fun10947: for (var _fun10947_ip = 0;;) switch (_fun10947_ip) {
        case 0:
            var2 = arg1;
            var3 = arg2;
            var1 = arg3;
            var0 = {};
            var4 = arg0;
            var0.filename = var4;
            var4 = '<anonymous>';
            if (!(var4 === var2)) {
                _fun10947_ip = 60;
                continue _fun10947
            }
        case 29:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 1;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var2 = var4.UNKNOWN_FUNCTION;
        case 60:
            var0.function = var2;
            var2 = true;
            var0.in_app = var2;
            var2 = undefined;
            if (!(var2 !== var3)) {
                _fun10947_ip = 84;
                continue _fun10947
            }
        case 78:
            var0.lineno = var3;
        case 84:
            if (!(var2 !== var1)) {
                _fun10947_ip = 94;
                continue _fun10947
            }
        case 88:
            var0.colno = var1;
        case 94:
            return var0;
    }
};
var _closure1_slot13 = var0;
var0 = 0;
var1 = var13[var0];
var0 = undefined;
var1 = var12.bind(var0)(var1);
var _closure1_slot2 = var1;
var1 = global;
var5 = var1.Object;
var4 = var5.defineProperty;
var1 = var1.Symbol;
var3 = var1.toStringTag;
var1 = {};
var6 = 'Module';
var1.value = var6;
var1 = var4.bind(var5)(var2, var3, var1);
var1 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
var _closure1_slot3 = var1;
var1 = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\\/)?.* ? )( ? ::(\d + )) ? ( ? ::(\d + )) ? \) ? \s * $ / i;
var _closure1_slot4 = var1;
var1 = /\((\S*)(?::(\d+))(?::(\d+))\)/;
var _closure1_slot5 = var1;
var1 = /at (.+?) ?\(data:(.+?),/;
var _closure1_slot6 = var1;
var8 = [30];
var1 = function(arg0) { // Original name: chromeStackParserFn, environment: var10
    _fun10948: for (var _fun10948_ip = 0;;) switch (_fun10948_ip) {
        case 0:
            var5 = arg0;
            var1 = var5.match;
            var0 = _closure1_slot6;
            var2 = var1.bind(var5)(var0);
            if (var2) {
                _fun10948_ip = 373;
                continue _fun10948
            }
        case 27:
            var1 = _closure1_slot3;
            var0 = var1.exec;
            var4 = var0.bind(var1)(var5);
            if (var4) {
                _fun10948_ip = 293;
                continue _fun10948
            }
        case 48:
            var1 = _closure1_slot4;
            var0 = var1.exec;
            var10 = var0.bind(var1)(var5);
            if (var10) {
                _fun10948_ip = 70;
                continue _fun10948
            }
        case 66:
            var0 = undefined;
            return var0;
        case 70:
            var6 = 2;
            var0 = var10[var6];
            if (!var0) {
                _fun10948_ip = 160;
                continue _fun10948
            }
        case 80:
            var5 = var10[var6];
            var1 = var5.indexOf;
            var0 = 'eval';
            var1 = var1.bind(var5)(var0);
            var0 = 0;
            if (!(var0 === var1)) {
                _fun10948_ip = 160;
                continue _fun10948
            }
        case 105:
            var5 = _closure1_slot5;
            var1 = var5.exec;
            var0 = var10[var6];
            var1 = var1.bind(var5)(var0);
            if (!var1) {
                _fun10948_ip = 160;
                continue _fun10948
            }
        case 127:
            var0 = 1;
            var0 = var1[var0];
            var10[var6] = var0;
            var5 = var1[var6];
            var0 = 3;
            var10[var0] = var5;
            var1 = var1[var0];
            var0 = 4;
            var10[var0] = var1;
        case 160:
            var7 = _closure1_slot12;
            var1 = 1;
            var5 = var10[var1];
            if (var5) {
                _fun10948_ip = 199;
                continue _fun10948
            }
        case 174:
            var9 = _closure1_slot0;
            var0 = _closure1_slot1;
            var8 = var0[var1];
            var0 = undefined;
            var0 = var9.bind(var0)(var8);
            var5 = var0.UNKNOWN_FUNCTION;
        case 199:
            var0 = var10[var6];
            var8 = undefined;
            var5 = var7.bind(var8)(var5, var0);
            var0 = _closure1_slot2;
            var0 = var0.bind(var8)(var5, var6);
            var5 = 0;
            var7 = var0[var5];
            var6 = _closure1_slot13;
            var5 = var0[var1];
            var0 = 3;
            var9 = var10[var0];
            var1 = undefined;
            if (!var9) {
                _fun10948_ip = 254;
                continue _fun10948
            }
        case 247:
            var0 = var10[var0];
            var1 = var0 - 0;
        case 254:
            var9 = 4;
            var11 = var10[var9];
            var0 = undefined;
            if (!var11) {
                _fun10948_ip = 273;
                continue _fun10948
            }
        case 266:
            var9 = var10[var9];
            var0 = var9 - 0;
        case 273:
            var16 = undefined;
            var15 = var5;
            var14 = var7;
            var13 = var1;
            var12 = var0;
            var0 = var16[var6](var15, var14, var13, var12, var11);
            return var0;
        case 293:
            var1 = _closure1_slot2;
            var6 = undefined;
            var0 = 4;
            var4 = var1.bind(var6)(var4, var0);
            var8 = 1;
            var5 = var4[var8];
            var0 = 2;
            var1 = var4[var0];
            var0 = 3;
            var0 = var4[var0];
            var4 = _closure1_slot13;
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var7.bind(var6)(var3);
            var14 = var3.UNKNOWN_FUNCTION;
            var13 = var1 - 0;
            var12 = var0 - 0;
            var16 = undefined;
            var15 = var5;
            var0 = var16[var4](var15, var14, var13, var12, var11);
            return var0;
        case 373:
            var0 = {};
            var1 = 2;
            var5 = var2[var1];
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var3 = '<data:';
            var1 = '>';
            var1 = var4.bind(var3)(var5, var1);
            var0.filename = var1;
            var1 = 1;
            var1 = var2[var1];
            var0.function = var1;
            return var0;
    }
};
var8[1] = var1;
var1 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\\/.* ? | \[native code\] | [ ^ @] * ( ? : bundle | \d + \.js) | \\/[\w\-. \/=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
var _closure1_slot7 = var1;
var1 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var _closure1_slot8 = var1;
var5 = [50];
var1 = function(arg0) { // Original name: gecko, environment: var10
    _fun10949: for (var _fun10949_ip = 0;;) switch (_fun10949_ip) {
        case 0:
            var3 = _closure1_slot7;
            var1 = var3.exec;
            var0 = arg0;
            var7 = var1.bind(var3)(var0);
            if (var7) {
                _fun10949_ip = 28;
                continue _fun10949
            }
        case 24:
            var0 = undefined;
            return var0;
        case 28:
            var0 = 3;
            var1 = var7[var0];
            if (!var1) {
                _fun10949_ip = 142;
                continue _fun10949
            }
        case 38:
            var4 = var7[var0];
            var3 = var4.indexOf;
            var1 = ' > eval';
            var3 = var3.bind(var4)(var1);
            var1 = -1;
            if (!(var3 > var1)) {
                _fun10949_ip = 142;
                continue _fun10949
            }
        case 69:
            var4 = _closure1_slot8;
            var3 = var4.exec;
            var1 = var7[var0];
            var3 = var3.bind(var4)(var1);
            if (!var3) {
                _fun10949_ip = 142;
                continue _fun10949
            }
        case 91:
            var1 = 1;
            var4 = var7[var1];
            if (var4) {
                _fun10949_ip = 105;
                continue _fun10949
            }
        case 101:
            var4 = 'eval';
        case 105:
            var7[var1] = var4;
            var1 = var3[var1];
            var7[var0] = var1;
            var1 = 2;
            var3 = var3[var1];
            var1 = 4;
            var7[var1] = var3;
            var3 = '';
            var1 = 5;
            var7[var1] = var3;
        case 142:
            var4 = var7[var0];
            var1 = 1;
            var3 = var7[var1];
            if (var3) {
                _fun10949_ip = 181;
                continue _fun10949
            }
        case 156:
            var6 = _closure1_slot0;
            var0 = _closure1_slot1;
            var5 = var0[var1];
            var0 = undefined;
            var0 = var6.bind(var0)(var5);
            var3 = var0.UNKNOWN_FUNCTION;
        case 181:
            var0 = _closure1_slot12;
            var5 = undefined;
            var4 = var0.bind(var5)(var3, var4);
            var3 = _closure1_slot2;
            var0 = 2;
            var0 = var3.bind(var5)(var4, var0);
            var3 = 0;
            var4 = var0[var3];
            var3 = _closure1_slot13;
            var2 = var0[var1];
            var0 = 4;
            var6 = var7[var0];
            var1 = undefined;
            if (!var6) {
                _fun10949_ip = 239;
                continue _fun10949
            }
        case 232:
            var0 = var7[var0];
            var1 = var0 - 0;
        case 239:
            var6 = 5;
            var8 = var7[var6];
            var0 = undefined;
            if (!var8) {
                _fun10949_ip = 258;
                continue _fun10949
            }
        case 251:
            var6 = var7[var6];
            var0 = var6 - 0;
        case 258:
            var13 = undefined;
            var12 = var2;
            var11 = var4;
            var10 = var1;
            var9 = var0;
            var0 = var13[var3](var12, var11, var10, var9, var8);
            return var0;
    }
};
var5[1] = var1;
var1 = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var _closure1_slot9 = var1;
var1 = [40];
var3 = function(arg0) { // Original name: winjs, environment: var10
    _fun10950: for (var _fun10950_ip = 0;;) switch (_fun10950_ip) {
        case 0:
            var3 = _closure1_slot9;
            var2 = var3.exec;
            var0 = arg0;
            var8 = var2.bind(var3)(var0);
            var6 = undefined;
            var0 = undefined;
            if (!var8) {
                _fun10950_ip = 119;
                continue _fun10950
            }
        case 28:
            var5 = _closure1_slot13;
            var2 = 2;
            var4 = var8[var2];
            var7 = 1;
            var3 = var8[var7];
            if (var3) {
                _fun10950_ip = 72;
                continue _fun10950
            }
        case 49:
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var2.bind(var6)(var1);
            var3 = var1.UNKNOWN_FUNCTION;
        case 72:
            var1 = 3;
            var1 = var8[var1];
            var2 = var1 - 0;
            var7 = 4;
            var9 = var8[var7];
            var1 = undefined;
            if (!var9) {
                _fun10950_ip = 101;
                continue _fun10950
            }
        case 94:
            var7 = var8[var7];
            var1 = var7 - 0;
        case 101:
            var14 = undefined;
            var13 = var4;
            var12 = var3;
            var11 = var2;
            var10 = var1;
            var0 = var14[var5](var13, var12, var11, var10, var9);
        case 119:
            return var0;
    }
};
var1[1] = var3;
var3 = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
var _closure1_slot10 = var3;
var4 = [10];
var3 = function(arg0) { // Original name: opera10, environment: var10
    _fun10951: for (var _fun10951_ip = 0;;) switch (_fun10951_ip) {
        case 0:
            var3 = _closure1_slot10;
            var2 = var3.exec;
            var0 = arg0;
            var6 = var2.bind(var3)(var0);
            var5 = undefined;
            var0 = undefined;
            if (!var6) {
                _fun10951_ip = 92;
                continue _fun10951
            }
        case 28:
            var4 = _closure1_slot13;
            var2 = 2;
            var3 = var6[var2];
            var2 = 3;
            var2 = var6[var2];
            if (var2) {
                _fun10951_ip = 75;
                continue _fun10951
            }
        case 49:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 1;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var2 = var1.UNKNOWN_FUNCTION;
        case 75:
            var1 = 1;
            var1 = var6[var1];
            var1 = var1 - 0;
            var0 = var4.bind(var5)(var3, var2, var1);
        case 92:
            return var0;
    }
};
var4[1] = var3;
var3 = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;
var _closure1_slot11 = var3;
var3 = [20];
var6 = function(arg0) { // Original name: opera11, environment: var10
    _fun10952: for (var _fun10952_ip = 0;;) switch (_fun10952_ip) {
        case 0:
            var3 = _closure1_slot11;
            var2 = var3.exec;
            var0 = arg0;
            var7 = var2.bind(var3)(var0);
            var6 = undefined;
            var0 = undefined;
            if (!var7) {
                _fun10952_ip = 117;
                continue _fun10952
            }
        case 28:
            var5 = _closure1_slot13;
            var2 = 5;
            var4 = var7[var2];
            var2 = 3;
            var3 = var7[var2];
            if (var3) {
                _fun10952_ip = 56;
                continue _fun10952
            }
        case 49:
            var2 = 4;
            var3 = var7[var2];
        case 56:
            if (var3) {
                _fun10952_ip = 85;
                continue _fun10952
            }
        case 59:
            var2 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 1;
            var1 = var8[var1];
            var1 = var2.bind(var6)(var1);
            var3 = var1.UNKNOWN_FUNCTION;
        case 85:
            var1 = 1;
            var1 = var7[var1];
            var10 = var1 - 0;
            var1 = 2;
            var1 = var7[var1];
            var9 = var1 - 0;
            var13 = undefined;
            var12 = var4;
            var11 = var3;
            var0 = var13[var5](var12, var11, var10, var9, var8);
        case 117:
            return var0;
    }
};
var3[1] = var6;
var7 = new Array(2);
var7[0] = var8;
var7[1] = var5;
var6 = 1;
var9 = var13[var6];
var9 = var12.bind(var0)(var9);
var11 = var9.createStackParser;
var9 = var11.apply;
var6 = var13[var6];
var6 = var12.bind(var0)(var6);
var6 = var9.bind(var11)(var6, var7);
var9 = function(arg0, arg1) { // Original name: extractSafariExtensionDetails, environment: var10
    _fun10953: for (var _fun10953_ip = 0;;) switch (_fun10953_ip) {
        case 0:
            var6 = arg0;
            var5 = arg1;
            var1 = var6.indexOf;
            var0 = 'safari-extension';
            var0 = var1.bind(var6)(var0);
            var3 = -1;
            var2 = var3 !== var0;
            var1 = var6.indexOf;
            var0 = 'safari-web-extension';
            var0 = var1.bind(var6)(var0);
            if (var2) {
                _fun10953_ip = 74;
                continue _fun10953
            }
        case 53:
            if (!(var3 === var0)) {
                _fun10953_ip = 74;
                continue _fun10953
            }
        case 57:
            var0 = new Array(2);
            var0[0] = var6;
            var0[1] = var5;
            _fun10953_ip = 197;
            continue _fun10953;
        case 74:
            var1 = var6.indexOf;
            var4 = '@';
            var1 = var1.bind(var6)(var4);
            if (!(var3 === var1)) {
                _fun10953_ip = 126;
                continue _fun10953
            }
        case 93:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var7.bind(var1)(var3);
            var3 = var1.UNKNOWN_FUNCTION;
            _fun10953_ip = 142;
            continue _fun10953;
        case 126:
            var1 = var6.split;
            var4 = var1.bind(var6)(var4);
            var1 = 0;
            var3 = var4[var1];
        case 142:
            var1 = new Array(2);
            var1[0] = var3;
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            if (var2) {
                _fun10953_ip = 179;
                continue _fun10953
            }
        case 166:
            var2 = 'safari-web-extension:';
            var2 = var4.bind(var2)(var5);
            _fun10953_ip = 190;
            continue _fun10953;
        case 179:
            var3 = 'safari-extension:';
            var2 = var4.bind(var3)(var5);
        case 190:
            var1[1] = var2;
            var0 = var1;
        case 197:
            return var0;
    }
};
var _closure1_slot12 = var9;
var2.chromeStackLineParser = var8;
var2.defaultStackLineParsers = var7;
var2.defaultStackParser = var6;
var2.geckoStackLineParser = var5;
var2.opera10StackLineParser = var4;
var2.opera11StackLineParser = var3;
var2.winjsStackLineParser = var1;
return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 817]);