// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var3 = {};
    var1 = "function pnpm_animateTs1({point:point,configs:configs,velocity=0,overrideReduceMotion:overrideReduceMotion,onComplete:onComplete}){const{ANIMATION_CONFIGS,ANIMATION_METHOD,withTiming,withSpring}=this.__closure;if(!configs){configs=ANIMATION_CONFIGS;}if(overrideReduceMotion){configs.reduceMotion=overrideReduceMotion;}const type='duration'in configs||'easing'in configs?ANIMATION_METHOD.TIMING:ANIMATION_METHOD.SPRING;if(type===ANIMATION_METHOD.TIMING){return withTiming(point,configs,onComplete);}return withSpring(point,Object.assign({velocity:velocity},configs),onComplete);}";
    var3.code = var1;
    var1 = function arg0() {
        _fun44764: for (var _fun44764_ip = 0;;) switch (_fun44764_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.point;
                var4 = var1.configs;
                var0 = var1.velocity;
                var8 = 0;
                var6 = undefined;
                var10 = 0;
                if (!(var6 !== var0)) {
                    _fun44764_ip = 34;
                    continue _fun44764
                }
            case 31:
                var10 = var0;
            case 34:
                var0 = var1.overrideReduceMotion;
                var3 = var1.onComplete;
                if (var4) {
                    _fun44764_ip = 75;
                    continue _fun44764
                }
            case 49:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var8];
                var1 = var2.bind(var6)(var1);
                var4 = var1.ANIMATION_CONFIGS;
            case 75:
                if (!var0) {
                    _fun44764_ip = 84;
                    continue _fun44764
                }
            case 78:
                var4.reduceMotion = var0;
            case 84:
                var0 = 'duration';
                var0 = var0 in var4;
                if (var0) {
                    _fun44764_ip = 140;
                    continue _fun44764
                }
            case 95:
                var0 = 'easing';
                var0 = var0 in var4;
                if (var0) {
                    _fun44764_ip = 140;
                    continue _fun44764
                }
            case 106:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var1.bind(var6)(var0);
                var0 = var0.ANIMATION_METHOD;
                var2 = var0.SPRING;
                _fun44764_ip = 172;
                continue _fun44764;
            case 140:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var1.bind(var6)(var0);
                var0 = var0.ANIMATION_METHOD;
                var2 = var0.TIMING;
            case 172:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var8];
                var0 = var7.bind(var6)(var0);
                var0 = var0.ANIMATION_METHOD;
                var0 = var0.TIMING;
                if (!(var2 !== var0)) {
                    _fun44764_ip = 268;
                    continue _fun44764
                }
            case 208:
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 1;
                var0 = var7[var0];
                var7 = var2.bind(var6)(var0);
                var2 = var7.withSpring;
                var0 = global;
                var9 = var0.Object;
                var8 = var9.assign;
                var0 = {};
                var0.velocity = var10;
                var0 = var8.bind(var9)(var0, var4);
                var0 = var2.bind(var7)(var5, var0, var3);
                _fun44764_ip = 300;
                continue _fun44764;
            case 268:
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 1;
                var1 = var7[var1];
                var2 = var2.bind(var6)(var1);
                var1 = var2.withTiming;
                var0 = var1.bind(var2)(var5, var4, var3);
            case 300:
                return var0;
        }
    };
    var4 = {};
    var5 = 0;
    var8 = var7[var5];
    var0 = undefined;
    var8 = var6.bind(var0)(var8);
    var8 = var8.ANIMATION_CONFIGS;
    var4.ANIMATION_CONFIGS = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ANIMATION_METHOD;
    var4.ANIMATION_METHOD = var5;
    var5 = 1;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.withTiming;
    var4.withTiming = var8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.withSpring;
    var4.withSpring = var5;
    var1.__closure = var4;
    var4 = 17032227615993.0;
    var1.__workletHash = var4;
    var1.__initData = var3;
    var2.animate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4934, 3721]);