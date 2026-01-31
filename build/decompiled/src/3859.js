// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun34975: for (var _fun34975_ip = 0;;) switch (_fun34975_ip) {
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
            var1 = "function setGestureStateNative_Pnpm_setGestureStateTs1(handlerTag,newState){const{logger}=this.__closure;if(!_WORKLET){logger.warn('You can not use setGestureState in non-worklet function.');return;}global._setGestureState(handlerTag,newState);}";
            var0.code = var1;
            var _closure1_slot3 = var0;
            var1 = function() { // Environment: var4
                var0 = function(arg0, arg1) { // Original name: setGestureStateNative, environment: var0
                    _fun34977: for (var _fun34977_ip = 0;;) switch (_fun34977_ip) {
                        case 0:
                            var0 = global;
                            var1 = var0._WORKLET;
                            if (var1) {
                                _fun34977_ip = 59;
                                continue _fun34977
                            }
                        case 14:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 0;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var3 = var1.logger;
                            var2 = var3.warn;
                            var1 = 'You can not use setGestureState in non-worklet function.';
                            var1 = var2.bind(var3)(var1);
                            _fun34977_ip = 83;
                            continue _fun34977;
                        case 59:
                            var3 = _closure1_slot0;
                            var2 = var3._setGestureState;
                            var1 = arg0;
                            var0 = arg1;
                            var0 = var2.bind(var3)(var1, var0);
                        case 83:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = {};
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 0;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.logger;
                var2.logger = var3;
                var0.__closure = var2;
                var2 = 13301434022691.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot3;
                var0.__initData = var1;
                return var0;
            };
            var0 = undefined;
            var1 = var1.bind(var0)();
            var3 = 1;
            var7 = var6[var3];
            var8 = var5.bind(var0)(var7);
            var7 = var8.shouldBeUseWeb;
            var7 = var7.bind(var8)();
            if (!var7) {
                _fun34975_ip = 176;
                continue _fun34975
            }
        case 110:
            var7 = var6[var3];
            var8 = var5.bind(var0)(var7);
            var7 = var8.isJest;
            var7 = var7.bind(var8)();
            if (var7) {
                _fun34975_ip = 168;
                continue _fun34975
            }
        case 132:
            var3 = var6[var3];
            var5 = var5.bind(var0)(var3);
            var3 = var5.isChromeDebugger;
            var3 = var3.bind(var5)();
            if (var3) {
                _fun34975_ip = 161;
                continue _fun34975
            }
        case 154:
            var3 = function() { // Original name: setGestureStateDefault, environment: var4
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.logger;
                var2 = var3.warn;
                var1 = 'setGestureState() is not supported on this configuration.';
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            _fun34975_ip = 166;
            continue _fun34975;
        case 161:
            var3 = function() { // Original name: setGestureStateChromeDebugger, environment: var4
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.logger;
                var2 = var3.warn;
                var1 = 'setGestureState() cannot be used with Chrome Debugger.';
                var1 = var2.bind(var3)(var1);
                return var0;
            };
        case 166:
            _fun34975_ip = 173;
            continue _fun34975;
        case 168:
            var3 = function() { // Original name: setGestureStateJest, environment: var4
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var3 = var1.logger;
                var2 = var3.warn;
                var1 = 'setGestureState() cannot be used with Jest.';
                var1 = var2.bind(var3)(var1);
                return var0;
            };
        case 173:
            var1 = var3;
        case 176:
            var2.setGestureState = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3684, 3683]);