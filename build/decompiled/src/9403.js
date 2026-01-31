// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var1 = {};
    var3 = 'function handlerOffsetDirection_Pnpm_handleroffsetDirectionTs1(handlerOffset,fixedDirection){if(fixedDirection==="negative")return-1;if(fixedDirection==="positive")return 1;if(handlerOffset.value===0)return-1;return Math.sign(handlerOffset.value);}';
    var1.code = var3;
    var _closure1_slot0 = var1;
    var1 = function() { // Environment: var0
        var0 = function arg0, arg1() {
            _fun74835: for (var _fun74835_ip = 0;;) switch (_fun74835_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arg1;
                    var2 = -1;
                    var1 = 'negative';
                    var0 = var2;
                    if (!(var1 !== var5)) {
                        _fun74835_ip = 75;
                        continue _fun74835
                    }
                case 23:
                    var1 = 1;
                    var4 = 'positive';
                    if (!(var4 !== var5)) {
                        _fun74835_ip = 72;
                        continue _fun74835
                    }
                case 34:
                    var5 = var3.value;
                    var4 = 0;
                    if (!(var4 !== var5)) {
                        _fun74835_ip = 69;
                        continue _fun74835
                    }
                case 45:
                    var4 = global;
                    var5 = var4.Math;
                    var4 = var5.sign;
                    var3 = var3.value;
                    var2 = var4.bind(var5)(var3);
                case 69:
                    var1 = var2;
                case 72:
                    var0 = var1;
                case 75:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 4382236906699.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot0;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    var2.handlerOffsetDirection = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);