// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var1 = {};
    var3 = 'function rubberBandDecay_Pnpm_rubberBandDecayTs1(animation,now,config){const{SLOPE_FACTOR,DERIVATIVE_EPS,VELOCITY_EPS}=this.__closure;const{lastTimestamp:lastTimestamp,startTimestamp:startTimestamp,current:current,velocity:velocity}=animation;const deltaTime=Math.min(now-lastTimestamp,64);const clampIndex=Math.abs(current-config.clamp[0])<Math.abs(current-config.clamp[1])?0:1;let derivative=0;if(current<config.clamp[0]||current>config.clamp[1]){derivative=current-config.clamp[clampIndex];}const v=velocity*Math.exp(-(1-config.deceleration)*(now-startTimestamp)*SLOPE_FACTOR)-derivative*config.rubberBandFactor;if(Math.abs(derivative)>DERIVATIVE_EPS){animation.springActive=true;}else if(animation.springActive){animation.current=config.clamp[clampIndex];return true;}else if(Math.abs(v)<VELOCITY_EPS){return true;}animation.current=current+v*config.velocityFactor*deltaTime/1000;animation.velocity=v;animation.lastTimestamp=now;return false;}';
    var1.code = var3;
    var _closure1_slot2 = var1;
    var1 = function() { // Environment: var0
        var0 = function(arg0, arg1, arg2) { // Original name: rubberBandDecay, environment: var0
            _fun33726: for (var _fun33726_ip = 0;;) switch (_fun33726_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arg1;
                    var3 = arg2;
                    var2 = var1.lastTimestamp;
                    var6 = var1.startTimestamp;
                    var4 = var1.current;
                    var9 = var1.velocity;
                    var8 = global;
                    var10 = var8.Math;
                    var7 = var10.min;
                    var5 = var0 - var2;
                    var2 = 64;
                    var5 = var7.bind(var10)(var5, var2);
                    var10 = var8.Math;
                    var7 = var10.abs;
                    var2 = var3.clamp;
                    var11 = 0;
                    var2 = var2[var11];
                    var2 = var4 - var2;
                    var7 = var7.bind(var10)(var2);
                    var13 = var8.Math;
                    var12 = var13.abs;
                    var2 = var3.clamp;
                    var10 = 1;
                    var2 = var2[var10];
                    var2 = var4 - var2;
                    var2 = var12.bind(var13)(var2);
                    var2 = var7 < var2;
                    var7 = var10;
                    if (!var2) {
                        _fun33726_ip = 137;
                        continue _fun33726
                    }
                case 135:
                    var7 = 0;
                case 137:
                    var2 = var3.clamp;
                    var2 = var2[var11];
                    var2 = var4 < var2;
                    if (var2) {
                        _fun33726_ip = 168;
                        continue _fun33726
                    }
                case 154:
                    var12 = var3.clamp;
                    var12 = var12[var10];
                    var2 = var4 > var12;
                case 168:
                    var13 = 0;
                    if (!var2) {
                        _fun33726_ip = 187;
                        continue _fun33726
                    }
                case 173:
                    var2 = var3.clamp;
                    var2 = var2[var7];
                    var13 = var4 - var2;
                case 187:
                    var14 = var8.Math;
                    var12 = var14.exp;
                    var2 = var3.deceleration;
                    var2 = var10 - var2;
                    var6 = var0 - var6;
                    var2 = -var2;
                    var15 = var2 * var6;
                    var16 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var11];
                    var10 = undefined;
                    var2 = var16.bind(var10)(var2);
                    var2 = var2.SLOPE_FACTOR;
                    var2 = var15 * var2;
                    var2 = var12.bind(var14)(var2);
                    var9 = var9 * var2;
                    var2 = var3.rubberBandFactor;
                    var2 = var13 * var2;
                    var2 = var9 - var2;
                    var12 = var8.Math;
                    var9 = var12.abs;
                    var12 = var9.bind(var12)(var13);
                    var9 = 0.1;
                    if (!(!(var12 > var9))) {
                        _fun33726_ip = 383;
                        continue _fun33726
                    }
                case 306:
                    var9 = var1.springActive;
                    if (var9) {
                        _fun33726_ip = 363;
                        continue _fun33726
                    }
                case 315:
                    var9 = var8.Math;
                    var8 = var9.abs;
                    var8 = var8.bind(var9)(var2);
                    var9 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var11];
                    var6 = var9.bind(var10)(var6);
                    var6 = var6.VELOCITY_EPS;
                    if (!(var8 < var6)) {
                        _fun33726_ip = 391;
                        continue _fun33726
                    }
                case 359:
                    var6 = true;
                    return var6;
                case 363:
                    var6 = var3.clamp;
                    var6 = var6[var7];
                    var1.current = var6;
                    var6 = true;
                    return var6;
                case 383:
                    var6 = true;
                    var1.springActive = var6;
                case 391:
                    var3 = var3.velocityFactor;
                    var3 = var2 * var3;
                    var5 = var3 * var5;
                    var3 = 1000;
                    var3 = var5 / var3;
                    var3 = var4 + var3;
                    var1.current = var3;
                    var1.velocity = var2;
                    var1.lastTimestamp = var0;
                    var0 = false;
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 0;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.SLOPE_FACTOR;
        var2.SLOPE_FACTOR = var7;
        var7 = 0.1;
        var2.DERIVATIVE_EPS = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.VELOCITY_EPS;
        var2.VELOCITY_EPS = var3;
        var0.__closure = var2;
        var2 = 5389749401303.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    var2.rubberBandDecay = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3756]);