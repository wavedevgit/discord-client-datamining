// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun34971: for (var _fun34971_ip = 0;;) switch (_fun34971_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var0 = global;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var5;
            var _closure1_slot2 = var6;
            var0 = global;
            var7 = var0.Object;
            var3 = var7.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var7)(var2, var0, var1);
            var0 = {};
            var1 = "function scrollToFabric_Pnpm_scrollToTs1(animatedRef,x,y,animated){const{dispatchCommand}=this.__closure;dispatchCommand(animatedRef,'scrollTo',[x,y,animated]);}";
            var0.code = var1;
            var _closure1_slot3 = var0;
            var1 = function() { // Environment: var4
                var0 = function arg0, arg1, arg2, arg3() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.dispatchCommand;
                    var3 = new Array(3);
                    var1 = arg1;
                    var3[0] = var1;
                    var1 = arg2;
                    var3[1] = var1;
                    var1 = arg3;
                    var3[2] = var1;
                    var2 = arg0;
                    var1 = 'scrollTo';
                    var1 = var4.bind(var5)(var2, var1, var3);
                    return var0;
                };
                var2 = {};
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 0;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.dispatchCommand;
                var2.dispatchCommand = var3;
                var0.__closure = var2;
                var2 = 5331784934384.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot3;
                var0.__initData = var1;
                return var0;
            };
            var0 = undefined;
            var7 = var1.bind(var0)();
            var1 = {};
            var3 = 'function scrollToPaper_Pnpm_scrollToTs2(animatedRef,x,y,animated){if(!_WORKLET){return;}const viewTag=animatedRef();global._scrollToPaper(viewTag,x,y,animated);}';
            var1.code = var3;
            var _closure1_slot4 = var1;
            var1 = function() { // Environment: var4
                var0 = function arg0, arg1, arg2, arg3() {
                    _fun34975: for (var _fun34975_ip = 0;;) switch (_fun34975_ip) {
                        case 0:
                            var0 = global;
                            var0 = var0._WORKLET;
                            if (!var0) {
                                _fun34975_ip = 51;
                                continue _fun34975
                            }
                        case 11:
                            var1 = arg0;
                            var0 = undefined;
                            var9 = var1.bind(var0)();
                            var4 = _closure1_slot0;
                            var3 = var4._scrollToPaper;
                            var8 = arg1;
                            var7 = arg2;
                            var6 = arg3;
                            var10 = var4;
                            var0 = var10[var3](var9, var8, var7, var6, var5);
                        case 51:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = {};
                var0.__closure = var1;
                var1 = 10376977850779.0;
                var0.__workletHash = var1;
                var1 = _closure1_slot4;
                var0.__initData = var1;
                return var0;
            };
            var1 = var1.bind(var0)();
            var3 = 2;
            var8 = var6[var3];
            var9 = var5.bind(var0)(var8);
            var8 = var9.shouldBeUseWeb;
            var9 = var8.bind(var9)();
            var8 = var6[var3];
            var8 = var5.bind(var0)(var8);
            if (var9) {
                _fun34971_ip = 162;
                continue _fun34971
            }
        case 144:
            var9 = var8.isFabric;
            var9 = var9.bind(var8)();
            if (!var9) {
                _fun34971_ip = 160;
                continue _fun34971
            }
        case 157:
            var1 = var7;
        case 160:
            _fun34971_ip = 219;
            continue _fun34971;
        case 162:
            var7 = var8.isJest;
            var7 = var7.bind(var8)();
            if (var7) {
                _fun34971_ip = 211;
                continue _fun34971
            }
        case 175:
            var3 = var6[var3];
            var5 = var5.bind(var0)(var3);
            var3 = var5.isChromeDebugger;
            var3 = var3.bind(var5)();
            if (var3) {
                _fun34971_ip = 204;
                continue _fun34971
            }
        case 197:
            var3 = function() {
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.logger;
                var2 = var3.warn;
                var1 = 'scrollTo() is not supported on this configuration.';
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            _fun34971_ip = 209;
            continue _fun34971;
        case 204:
            var3 = function() {
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.logger;
                var2 = var3.warn;
                var1 = 'scrollTo() is not supported with Chrome Debugger.';
                var1 = var2.bind(var3)(var1);
                return var0;
            };
        case 209:
            _fun34971_ip = 216;
            continue _fun34971;
        case 211:
            var3 = function() {
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.logger;
                var2 = var3.warn;
                var1 = 'scrollTo() is not supported with Jest.';
                var1 = var2.bind(var3)(var1);
                return var0;
            };
        case 216:
            var1 = var3;
        case 219:
            var2.scrollTo = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3857, 3686, 3685]);