// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var2.detectFile = var0;
    var1 = function(arg0, arg1) { // Original name: detectFile, environment: var1
        _fun37671: for (var _fun37671_ip = 0;;) switch (_fun37671_ip) {
            case 0:
                var1 = arg1;
                if (!var1) {
                    _fun37671_ip = 88;
                    continue _fun37671
                }
            case 8:
                var0 = global;
                var2 = var0.Object;
                var2 = var2.prototype;
                var5 = var2.hasOwnProperty;
                var4 = var5.call;
                var2 = 'chunkSize';
                var2 = var4.bind(var5)(var1, var2);
                if (!var2) {
                    _fun37671_ip = 88;
                    continue _fun37671
                }
            case 45:
                var7 = null;
                var2 = var7 == var1;
                var6 = undefined;
                var5 = undefined;
                if (var2) {
                    _fun37671_ip = 64;
                    continue _fun37671
                }
            case 58:
                var5 = var1.chunkSize;
            case 64:
                var4 = 0;
                var2 = 0;
                if (!(var7 !== var5)) {
                    _fun37671_ip = 81;
                    continue _fun37671
                }
            case 72:
                var2 = 0;
                if (!(var6 !== var5)) {
                    _fun37671_ip = 81;
                    continue _fun37671
                }
            case 78:
                var2 = var5;
            case 81:
                if (!(!(var2 <= var4))) {
                    _fun37671_ip = 655;
                    continue _fun37671
                }
            case 88:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 0;
                var6 = var4[var2];
                var4 = undefined;
                var6 = var7.bind(var4)(var6);
                var7 = var6.getFileChunk;
                var6 = null;
                var8 = var6 == var1;
                var6 = undefined;
                if (var8) {
                    _fun37671_ip = 135;
                    continue _fun37671
                }
            case 129:
                var6 = var1.chunkSize;
            case 135:
                if (var6) {
                    _fun37671_ip = 141;
                    continue _fun37671
                }
            case 138:
                var6 = 64;
            case 141:
                var1 = arg0;
                var7 = var7.bind(var4)(var1, var6);
                var1 = var7.length;
                if (!(var2 !== var1)) {
                    _fun37671_ip = 630;
                    continue _fun37671
                }
            case 162:
                var1 = new Array(0);
                var6 = new Array(0);
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var8 = 1;
                var9 = var9[var8];
                var9 = var10.bind(var4)(var9);
                var15 = var9.FileTypes;
                var11 = global;
                var10 = undefined;
                var9 = undefined;
                for (var12 in var15)
                    case 213: {
                        case 225: var22 = var12;
                        var17 = var11.Object;
                        var17 = var17.prototype;
                        var19 = var17.hasOwnProperty;
                        var18 = var19.call;
                        var20 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var17 = var17[var8];
                        var17 = var20.bind(var4)(var17);
                        var17 = var17.FileTypes;
                        var17 = var18.bind(var19)(var17, var22);
                        if (!var17) {
                            _fun37671_ip = 213;
                            continue _fun37671
                        }
                        case 282: var18 = _closure1_slot0;
                        var17 = _closure1_slot1;
                        var19 = var17[var8];
                        var19 = var18.bind(var4)(var19);
                        var20 = var19.FileTypes;
                        var19 = var20.getSignaturesByName;
                        var19 = var19.bind(var20)(var22);
                        var17 = var17[var8];
                        var17 = var18.bind(var4)(var17);
                        var18 = var17.FileTypes;
                        var17 = var18.detectbBySignatures;
                        var18 = var17.bind(var18)(var7, var19);
                        var10 = var18;
                        if (!var18) {
                            _fun37671_ip = 213;
                            continue _fun37671
                        }
                        case 354: var20 = _closure1_slot0;
                        var19 = _closure1_slot1;
                        var17 = var19[var8];
                        var17 = var20.bind(var4)(var17);
                        var21 = var17.FileTypes;
                        var17 = var21.getInfoByName;
                        var17 = var17.bind(var21)(var22);
                        var19 = var19[var8];
                        var19 = var20.bind(var4)(var19);
                        var21 = var19.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK;
                        var20 = var21.includes;
                        var19 = var17.extension;
                        var19 = var20.bind(var21)(var19);
                        if (!var19) {
                            _fun37671_ip = 438;
                            continue _fun37671
                        }
                        case 422: var20 = var6.push;
                        var19 = var17.extension;
                        var19 = var20.bind(var6)(var19);
                        case 438: var20 = {};
                        var19 = var17.extension;
                        var20.extension = var19;
                        var19 = var17.mimeType;
                        var20.mimeType = var19;
                        var19 = var17.description;
                        var20.description = var19;
                        var23 = var11.Object;
                        var22 = var23.assign;
                        var24 = var11.Object;
                        var21 = var24.assign;
                        var19 = {};
                        var21 = var21.bind(var24)(var19, var18);
                        var19 = {};
                        var26 = var18.sequence;
                        var25 = var26.map;
                        var24 = function(arg0) { // Environment: var3
                            var2 = arg0;
                            var1 = var2.toString;
                            var0 = 16;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var24 = var25.bind(var26)(var24);
                        var19.sequence = var24;
                        var19 = var22.bind(var23)(var21, var19);
                        var20.signature = var19;
                        var19 = var1.push;
                        var19 = var19.bind(var1)(var20);
                        var10 = var18;
                        var9 = var17;
                        _fun37671_ip = 213;
                        continue _fun37671;
                    }
            case 561:
                var9 = var1.length;
                if (!(var2 !== var9)) {
                    _fun37671_ip = 630;
                    continue _fun37671
                }
            case 570:
                var9 = var1.length;
                if (!(var8 === var9)) {
                    _fun37671_ip = 588;
                    continue _fun37671
                }
            case 579:
                var6 = var6.length;
                if (!(var2 !== var6)) {
                    _fun37671_ip = 649;
                    continue _fun37671
                }
            case 588:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var5 = var6.bind(var4)(var5);
                var6 = var5.FileTypes;
                var5 = var6.detectTypeByAdditionalCheck;
                var5 = var5.bind(var6)(var7, var1);
                var _closure2_slot0 = var5;
                if (var5) {
                    _fun37671_ip = 632;
                    continue _fun37671
                }
            case 630:
                return var4;
            case 632:
                var4 = var1.find;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.extension;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var4.bind(var1)(var3);
                return var3;
            case 649:
                var1 = var1[var2];
                return var1;
            case 655:
                var2 = var0.RangeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var28 = 'chunkSize must be bigger than zero';
                var29 = var1;
                var0 = new var29[var2](var28, var27);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.detectFile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4101, 4102]);