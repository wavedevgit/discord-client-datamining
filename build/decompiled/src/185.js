// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
var1 = exports;
var2 = global;
var5 = var2.Object;
var4 = var5.defineProperty;
var3 = {};
var2 = true;
var3.value = var2;
var2 = '__esModule';
var2 = var4.bind(var5)(var1, var2, var3);
var2 = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\\/ | [a - z]: \\ | \\\\).* ? )( ? ::(\d + )) ? ( ? ::(\d + )) ? \) ? \s * $ / i;
var _closure1_slot0 = var2;
var2 = /\((\S*)(?::(\d+))(?::(\d+))\)/;
var _closure1_slot1 = var2;
var2 = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var _closure1_slot2 = var2;
var2 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
var _closure1_slot3 = var2;
var2 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
var _closure1_slot4 = var2;
var2 = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
var _closure1_slot5 = var2;
var2 = /^\s*at (?:((?:\[object object\])?[^\\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
var _closure1_slot6 = var2;
var0 = function(arg0) { // Original name: parse, environment: var0
    var2 = arg0;
    var1 = var2.split;
    var0 = '\n';
    var3 = var1.bind(var2)(var0);
    var2 = var3.reduce;
    var1 = function(arg0, arg1) { // Environment: var0
        _fun2635: for (var _fun2635_ip = 0;;) switch (_fun2635_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var3 = _closure1_slot0;
                var2 = var3.exec;
                var8 = var2.bind(var3)(var5);
                var4 = null;
                var2 = null;
                if (!var8) {
                    _fun2635_ip = 280;
                    continue _fun2635
                }
            case 34:
                var7 = 2;
                var6 = var8[var7];
                if (!var6) {
                    _fun2635_ip = 69;
                    continue _fun2635
                }
            case 44:
                var10 = var8[var7];
                var9 = var10.indexOf;
                var3 = 'native';
                var9 = var9.bind(var10)(var3);
                var3 = 0;
                var6 = var3 === var9;
            case 69:
                var3 = var8[var7];
                if (!var3) {
                    _fun2635_ip = 101;
                    continue _fun2635
                }
            case 76:
                var11 = var8[var7];
                var10 = var11.indexOf;
                var9 = 'eval';
                var10 = var10.bind(var11)(var9);
                var9 = 0;
                var3 = var9 === var10;
            case 101:
                var11 = _closure1_slot1;
                var10 = var11.exec;
                var9 = var8[var7];
                var9 = var10.bind(var11)(var9);
                if (!var3) {
                    _fun2635_ip = 127;
                    continue _fun2635
                }
            case 123:
                var3 = var4 != var9;
            case 127:
                if (!var3) {
                    _fun2635_ip = 163;
                    continue _fun2635
                }
            case 130:
                var3 = 1;
                var3 = var9[var3];
                var8[var7] = var3;
                var10 = var9[var7];
                var3 = 3;
                var8[var3] = var10;
                var9 = var9[var3];
                var3 = 4;
                var8[var3] = var9;
            case 163:
                var3 = {};
                var9 = null;
                if (var6) {
                    _fun2635_ip = 174;
                    continue _fun2635
                }
            case 170:
                var9 = var8[var7];
            case 174:
                var3.file = var9;
                var9 = 1;
                var9 = var8[var9];
                if (var9) {
                    _fun2635_ip = 195;
                    continue _fun2635
                }
            case 189:
                var9 = '<unknown>';
            case 195:
                var3.methodName = var9;
                if (var6) {
                    _fun2635_ip = 209;
                    continue _fun2635
                }
            case 203:
                var6 = new Array(0);
                _fun2635_ip = 224;
                continue _fun2635;
            case 209:
                var9 = var8[var7];
                var7 = new Array(1);
                var7[0] = var9;
                var6 = var7;
            case 224:
                var3.arguments = var6;
                var7 = 3;
                var9 = var8[var7];
                var6 = null;
                if (!var9) {
                    _fun2635_ip = 248;
                    continue _fun2635
                }
            case 241:
                var7 = var8[var7];
                var6 = var7 - 0;
            case 248:
                var3.lineNumber = var6;
                var7 = 4;
                var9 = var8[var7];
                var6 = null;
                if (!var9) {
                    _fun2635_ip = 272;
                    continue _fun2635
                }
            case 265:
                var7 = var8[var7];
                var6 = var7 - 0;
            case 272:
                var3.column = var6;
                var2 = var3;
            case 280:
                if (var2) {
                    _fun2635_ip = 392;
                    continue _fun2635
                }
            case 283:
                var6 = _closure1_slot2;
                var3 = var6.exec;
                var9 = var3.bind(var6)(var5);
                var3 = null;
                if (!var9) {
                    _fun2635_ip = 389;
                    continue _fun2635
                }
            case 303:
                var6 = {};
                var7 = 2;
                var7 = var9[var7];
                var6.file = var7;
                var7 = 1;
                var7 = var9[var7];
                if (var7) {
                    _fun2635_ip = 333;
                    continue _fun2635
                }
            case 327:
                var7 = '<unknown>';
            case 333:
                var6.methodName = var7;
                var7 = new Array(0);
                var6.arguments = var7;
                var7 = 3;
                var7 = var9[var7];
                var7 = var7 - 0;
                var6.lineNumber = var7;
                var8 = 4;
                var10 = var9[var8];
                var7 = null;
                if (!var10) {
                    _fun2635_ip = 381;
                    continue _fun2635
                }
            case 374:
                var8 = var9[var8];
                var7 = var8 - 0;
            case 381:
                var6.column = var7;
                var3 = var6;
            case 389:
                var2 = var3;
            case 392:
                if (var2) {
                    _fun2635_ip = 648;
                    continue _fun2635
                }
            case 398:
                var6 = _closure1_slot3;
                var3 = var6.exec;
                var9 = var3.bind(var6)(var5);
                var3 = null;
                if (!var9) {
                    _fun2635_ip = 645;
                    continue _fun2635
                }
            case 421:
                var7 = 3;
                var6 = var9[var7];
                if (!var6) {
                    _fun2635_ip = 462;
                    continue _fun2635
                }
            case 431:
                var11 = var9[var7];
                var10 = var11.indexOf;
                var8 = ' > eval';
                var10 = var10.bind(var11)(var8);
                var8 = -1;
                var6 = var10 > var8;
            case 462:
                var11 = _closure1_slot4;
                var10 = var11.exec;
                var8 = var9[var7];
                var8 = var10.bind(var11)(var8);
                if (!var6) {
                    _fun2635_ip = 488;
                    continue _fun2635
                }
            case 484:
                var6 = var4 != var8;
            case 488:
                if (!var6) {
                    _fun2635_ip = 523;
                    continue _fun2635
                }
            case 491:
                var6 = 1;
                var6 = var8[var6];
                var9[var7] = var6;
                var6 = 2;
                var8 = var8[var6];
                var6 = 4;
                var9[var6] = var8;
                var6 = 5;
                var9[var6] = var4;
            case 523:
                var6 = {};
                var7 = var9[var7];
                var6.file = var7;
                var7 = 1;
                var7 = var9[var7];
                if (var7) {
                    _fun2635_ip = 550;
                    continue _fun2635
                }
            case 544:
                var7 = '<unknown>';
            case 550:
                var6.methodName = var7;
                var8 = 2;
                var7 = var9[var8];
                if (var7) {
                    _fun2635_ip = 571;
                    continue _fun2635
                }
            case 565:
                var7 = new Array(0);
                _fun2635_ip = 589;
                continue _fun2635;
            case 571:
                var11 = var9[var8];
                var10 = var11.split;
                var8 = ',';
                var7 = var10.bind(var11)(var8);
            case 589:
                var6.arguments = var7;
                var8 = 4;
                var10 = var9[var8];
                var7 = null;
                if (!var10) {
                    _fun2635_ip = 613;
                    continue _fun2635
                }
            case 606:
                var8 = var9[var8];
                var7 = var8 - 0;
            case 613:
                var6.lineNumber = var7;
                var8 = 5;
                var10 = var9[var8];
                var7 = null;
                if (!var10) {
                    _fun2635_ip = 637;
                    continue _fun2635
                }
            case 630:
                var8 = var9[var8];
                var7 = var8 - 0;
            case 637:
                var6.column = var7;
                var3 = var6;
            case 645:
                var2 = var3;
            case 648:
                if (var2) {
                    _fun2635_ip = 760;
                    continue _fun2635
                }
            case 651:
                var6 = _closure1_slot6;
                var3 = var6.exec;
                var9 = var3.bind(var6)(var5);
                var3 = null;
                if (!var9) {
                    _fun2635_ip = 757;
                    continue _fun2635
                }
            case 671:
                var6 = {};
                var7 = 2;
                var7 = var9[var7];
                var6.file = var7;
                var7 = 1;
                var7 = var9[var7];
                if (var7) {
                    _fun2635_ip = 701;
                    continue _fun2635
                }
            case 695:
                var7 = '<unknown>';
            case 701:
                var6.methodName = var7;
                var7 = new Array(0);
                var6.arguments = var7;
                var7 = 3;
                var7 = var9[var7];
                var7 = var7 - 0;
                var6.lineNumber = var7;
                var8 = 4;
                var10 = var9[var8];
                var7 = null;
                if (!var10) {
                    _fun2635_ip = 749;
                    continue _fun2635
                }
            case 742:
                var8 = var9[var8];
                var7 = var8 - 0;
            case 749:
                var6.column = var7;
                var3 = var6;
            case 757:
                var2 = var3;
            case 760:
                if (var2) {
                    _fun2635_ip = 872;
                    continue _fun2635
                }
            case 763:
                var3 = _closure1_slot5;
                var1 = var3.exec;
                var6 = var1.bind(var3)(var5);
                var1 = null;
                if (!var6) {
                    _fun2635_ip = 869;
                    continue _fun2635
                }
            case 783:
                var3 = {};
                var5 = 3;
                var5 = var6[var5];
                var3.file = var5;
                var5 = 1;
                var5 = var6[var5];
                if (var5) {
                    _fun2635_ip = 813;
                    continue _fun2635
                }
            case 807:
                var5 = '<unknown>';
            case 813:
                var3.methodName = var5;
                var5 = new Array(0);
                var3.arguments = var5;
                var5 = 4;
                var5 = var6[var5];
                var5 = var5 - 0;
                var3.lineNumber = var5;
                var5 = 5;
                var7 = var6[var5];
                var4 = null;
                if (!var7) {
                    _fun2635_ip = 861;
                    continue _fun2635
                }
            case 854:
                var5 = var6[var5];
                var4 = var5 - 0;
            case 861:
                var3.column = var4;
                var1 = var3;
            case 869:
                var2 = var1;
            case 872:
                if (!var2) {
                    _fun2635_ip = 885;
                    continue _fun2635
                }
            case 875:
                var1 = var0.push;
                var1 = var1.bind(var0)(var2);
            case 885:
                return var0;
        }
    };
    var0 = new Array(0);
    var0 = var2.bind(var3)(var1, var0);
    return var0;
};
var1.parse = var0;
var0 = undefined;
return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);