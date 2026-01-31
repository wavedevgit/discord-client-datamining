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
    var2.reflectionCreate = var0;
    var1 = function(arg0) { // Original name: reflectionCreate, environment: var1
        _fun14979: for (var _fun14979_ip = 0;;) switch (_fun14979_ip) {
            case 0:
                var1 = arg0;
                var9 = undefined;
                var10 = undefined;
                var11 = undefined;
                var6 = {};
                var0 = var6;
                var2 = global;
                var5 = var2.Object;
                var4 = var5.defineProperty;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = 0;
                var2 = var2[var7];
                var2 = var3.bind(var9)(var2);
                var3 = var2.MESSAGE_TYPE;
                var2 = {};
                var12 = false;
                var2.enumerable = var12;
                var2.value = var1;
                var2 = var4.bind(var5)(var6, var3, var2);
                var1 = var1.fields;
                var6 = var1;
                var2 = var6[Symbol.iterator];
                var6 = var2().next;
                var5 = 1;
                var4 = 'map';
                var3 = 'enum';
                var1 = 'scalar';
            case 101:
                var12 = var6().value;
                var13 = var2;
                if (!(var13 !== var9)) {
                    _fun14979_ip = 315;
                    continue _fun14979
                }
            case 115: // try_start_0
                var10 = var12;
                var11 = var12.localName;
                var12 = var12.opt;
                if (var12) {
                    _fun14979_ip = 303;
                    continue _fun14979
                }
            case 136:
                var12 = var10;
                var12 = var12.oneof;
                if (var12) {
                    _fun14979_ip = 280;
                    continue _fun14979
                }
            case 151:
                var12 = var10;
                var12 = var12.repeat;
                if (var12) {
                    _fun14979_ip = 264;
                    continue _fun14979
                }
            case 163:
                var12 = var10;
                var12 = var12.kind;
                if (!(var1 !== var12)) {
                    _fun14979_ip = 209;
                    continue _fun14979
                }
            case 175:
                if (!(var3 !== var12)) {
                    _fun14979_ip = 197;
                    continue _fun14979
                }
            case 179:
                if (!(var4 === var12)) {
                    _fun14979_ip = 303;
                    continue _fun14979
                }
            case 183:
                var14 = var0;
                var13 = var11;
                var12 = {};
                var14[var13] = var12;
                _fun14979_ip = 303;
                continue _fun14979;
            case 197:
                var13 = var0;
                var12 = var11;
                var13[var12] = var7;
                _fun14979_ip = 303;
                continue _fun14979;
            case 209:
                var14 = var0;
                var13 = var11;
                var15 = _closure1_slot0;
                var12 = _closure1_slot1;
                var12 = var12[var5];
                var17 = var15.bind(var9)(var12);
                var16 = var17.reflectionScalarDefault;
                var12 = var10;
                var15 = var12.T;
                var12 = var12.L;
                var12 = var16.bind(var17)(var15, var12);
                var14[var13] = var12;
                _fun14979_ip = 303;
                continue _fun14979;
            case 264:
                var14 = var0;
                var13 = var11;
                var12 = new Array(0);
                var14[var13] = var12;
                _fun14979_ip = 303;
                continue _fun14979;
            case 280:
                var14 = var0;
                var12 = var10;
                var13 = var12.oneof;
                var12 = {};
                var12.oneofKind = var9;
                var14[var13] = var12;
            case 303: // try_end0
                _fun14979_ip = 101;
                continue _fun14979;
            case 308: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 315:
                return var0;
        }
    };
    var2.reflectionCreate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1324, 1334]);