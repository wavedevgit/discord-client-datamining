// design/animation/reanimated/spring/spring.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.CONFIG_NEVER_ANIMATE;
    var _closure1_slot2 = var3;
    var3 = {};
    var6 = "function withSpring_springTsx1(toValue,config,shouldAnimate='respect-motion-settings',callback){const{accessibilityPreferencesSharedValue,REAwithSpring,CONFIG_NEVER_ANIMATE}=this.__closure;const reducedMotionEnabled=accessibilityPreferencesSharedValue.get().reduceMotion;const animate=shouldAnimate==='animate-always'||shouldAnimate==='respect-motion-settings'&&!reducedMotionEnabled;return REAwithSpring(toValue,animate?config:CONFIG_NEVER_ANIMATE,callback);}";
    var3.code = var6;
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var0 = function(arg0, arg1) { // Original name: withSpring, environment: var0
            _fun37360: for (var _fun37360_ip = 0;;) switch (_fun37360_ip) {
                case 0:
                    var5 = arg1;
                    var7 = arguments[2];
                    var4 = undefined;
                    if (!(var7 === var4)) {
                        _fun37360_ip = 18;
                        continue _fun37360
                    }
                case 12:
                    var7 = 'respect-motion-settings';
                case 18:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 1;
                    var1 = var6[var1];
                    var1 = var3.bind(var4)(var1);
                    var2 = var1.accessibilityPreferencesSharedValue;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var1 = var1.reduceMotion;
                    var2 = 2;
                    var2 = var6[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.withSpring;
                    var6 = 'animate-always';
                    var2 = var5;
                    if (!(var6 !== var7)) {
                        _fun37360_ip = 112;
                        continue _fun37360
                    }
                case 92:
                    var6 = 'respect-motion-settings';
                    if (!(var6 === var7)) {
                        _fun37360_ip = 108;
                        continue _fun37360
                    }
                case 102:
                    var2 = var5;
                    if (!var1) {
                        _fun37360_ip = 112;
                        continue _fun37360
                    }
                case 108:
                    var2 = _closure1_slot2;
                case 112:
                    var1 = arg0;
                    var0 = arguments[3];
                    var0 = var3.bind(var4)(var1, var2, var0);
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 1;
        var3 = var6[var3];
        var4 = undefined;
        var3 = var5.bind(var4)(var3);
        var3 = var3.accessibilityPreferencesSharedValue;
        var2.accessibilityPreferencesSharedValue = var3;
        var3 = 2;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.withSpring;
        var2.REAwithSpring = var3;
        var3 = _closure1_slot2;
        var2.CONFIG_NEVER_ANIMATE = var3;
        var0.__closure = var2;
        var2 = 14617353056916.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot3;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/animation/reanimated/spring/spring.tsx';
    var3 = var4.bind(var5)(var3);
    var2.withSpring = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4041, 4042, 3679, 2]);