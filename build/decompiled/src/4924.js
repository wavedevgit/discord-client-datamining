// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun44608: for (var _fun44608_ip = 0;;) switch (_fun44608_ip) {
        case 0:
            var4 = require;
            var12 = exports;
            var0 = dependencyMap;
            var8 = var4;
            var _closure1_slot0 = var4;
            var2 = var12;
            var7 = var0;
            var _closure1_slot1 = var0;
            var0 = undefined;
            var6 = undefined;
            var1 = undefined;
            var5 = undefined;
            var4 = global;
            var11 = var4.Object;
            var10 = var11.defineProperty;
            var9 = {};
            var4 = true;
            var9.value = var4;
            var4 = '__esModule';
            var4 = var10.bind(var11)(var12, var4, var9);
        case 68: // try_start_0
            var9 = var8;
            var10 = var7;
            var4 = 0;
            var4 = var10[var4];
            var1 = var9.bind(var0)(var4);
        case 85: // try_end0
            _fun44608_ip = 91;
            continue _fun44608;
        case 87: // catch_target0
            CatchBlockStart(arg_register = 4);
            var1 = undefined;
        case 91:
            var10 = var1;
            var6 = var10;
            var9 = null;
            var9 = var9 != var10;
            var4 = var9;
            if (!var9) {
                _fun44608_ip = 115;
                continue _fun44608
            }
        case 109:
            var4 = var6.useSharedValue;
        case 115:
            if (var4) {
                _fun44608_ip = 120;
                continue _fun44608
            }
        case 118:
            var1 = undefined;
        case 120:
            var4 = {};
            var6 = "function pnpm_reanimatedWrapperTs1(){const{tagMessage}=this.__closure;console.warn(tagMessage('Please use newer version of react-native-reanimated in order to control state of the gestures.'));}";
            var4.code = var6;
            var5 = var4;
            var6 = var1;
            var6 = var0 === var6;
            var4 = var6;
            if (var6) {
                _fun44608_ip = 157;
                continue _fun44608
            }
        case 148:
            var6 = var1;
            var4 = var6.setGestureState;
        case 157:
            if (var4) {
                _fun44608_ip = 230;
                continue _fun44608
            }
        case 160:
            var4 = var1;
            var3 = function() { // Original name: pnpm_reanimatedWrapperTs1, environment: var3
                var0 = global;
                var3 = var0.console;
                var2 = var3.warn;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var1);
                var4 = var5.tagMessage;
                var1 = 'Please use newer version of react-native-reanimated in order to control state of the gestures.';
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var6 = {};
            var9 = var7;
            var7 = 1;
            var7 = var9[var7];
            var7 = var8.bind(var0)(var7);
            var7 = var7.tagMessage;
            var6.tagMessage = var7;
            var3.__closure = var6;
            var6 = 12835327155090.0;
            var3.__workletHash = var6;
            var3.__initData = var5;
            var4.setGestureState = var3;
        case 230:
            var2.Reanimated = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3678, 4921]);