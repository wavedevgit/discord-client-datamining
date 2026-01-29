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
    var3 = 'function rigidDecay_Pnpm_rigidDecayTs1(animation,now,config){const{SLOPE_FACTOR,VELOCITY_EPS}=this.__closure;const{lastTimestamp:lastTimestamp,startTimestamp:startTimestamp,initialVelocity:initialVelocity,current:current,velocity:velocity}=animation;const deltaTime=Math.min(now-lastTimestamp,64);const v=velocity*Math.exp(-(1-config.deceleration)*(now-startTimestamp)*SLOPE_FACTOR);animation.current=current+v*config.velocityFactor*deltaTime/1000;animation.velocity=v;animation.lastTimestamp=now;if(config.clamp){if(initialVelocity<0&&animation.current<=config.clamp[0]){animation.current=config.clamp[0];return true;}else if(initialVelocity>0&&animation.current>=config.clamp[1]){animation.current=config.clamp[1];return true;}}return Math.abs(v)<VELOCITY_EPS;}';
    var1.code = var3;
    var _closure1_slot2 = var1;
    var1 = function() { // Environment: var0
        var0 = function(arg0, arg1, arg2) { // Original name: rigidDecay, environment: var0
            _fun33704: for (var _fun33704_ip = 0;;) switch (_fun33704_ip) {
                case 0:
                    var1 = arg0;
                    var9 = arg1;
                    var0 = arg2;
                    var2 = var1.lastTimestamp;
                    var3 = var1.startTimestamp;
                    var6 = var1.initialVelocity;
                    var11 = var1.current;
                    var10 = var1.velocity;
                    var5 = global;
                    var8 = var5.Math;
                    var7 = var8.min;
                    var4 = var9 - var2;
                    var2 = 64;
                    var12 = var7.bind(var8)(var4, var2);
                    var14 = var5.Math;
                    var13 = var14.exp;
                    var2 = var0.deceleration;
                    var4 = 1;
                    var2 = var4 - var2;
                    var3 = var9 - var3;
                    var2 = -var2;
                    var15 = var2 * var3;
                    var16 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 0;
                    var8 = var7[var2];
                    var7 = undefined;
                    var8 = var16.bind(var7)(var8);
                    var8 = var8.SLOPE_FACTOR;
                    var8 = var15 * var8;
                    var8 = var13.bind(var14)(var8);
                    var8 = var10 * var8;
                    var10 = var0.velocityFactor;
                    var10 = var8 * var10;
                    var12 = var10 * var12;
                    var10 = 1000;
                    var10 = var12 / var10;
                    var10 = var11 + var10;
                    var1.current = var10;
                    var1.velocity = var8;
                    var1.lastTimestamp = var9;
                    var9 = var0.clamp;
                    if (!var9) {
                        _fun33704_ip = 244;
                        continue _fun33704
                    }
                case 198:
                    if (!(var6 < var2)) {
                        _fun33704_ip = 221;
                        continue _fun33704
                    }
                case 202:
                    var10 = var1.current;
                    var9 = var0.clamp;
                    var9 = var9[var2];
                    if (!(!(var10 <= var9))) {
                        _fun33704_ip = 310;
                        continue _fun33704
                    }
                case 221:
                    if (!(var6 > var2)) {
                        _fun33704_ip = 244;
                        continue _fun33704
                    }
                case 225:
                    var9 = var1.current;
                    var6 = var0.clamp;
                    var6 = var6[var4];
                    if (!(!(var9 >= var6))) {
                        _fun33704_ip = 290;
                        continue _fun33704
                    }
                case 244:
                    var6 = var5.Math;
                    var5 = var6.abs;
                    var5 = var5.bind(var6)(var8);
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var2];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.VELOCITY_EPS;
                    var3 = var5 < var3;
                    return var3;
                case 290:
                    var3 = var0.clamp;
                    var3 = var3[var4];
                    var1.current = var3;
                    var3 = true;
                    return var3;
                case 310:
                    var0 = var0.clamp;
                    var0 = var0[var2];
                    var1.current = var0;
                    var0 = true;
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
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.VELOCITY_EPS;
        var2.VELOCITY_EPS = var3;
        var0.__closure = var2;
        var2 = 9018501262796.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    var2.rigidDecay = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3754]);