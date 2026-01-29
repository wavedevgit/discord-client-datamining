// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = {};
    var3 = 'function pnpm_parallaxTs1(value){const{interpolate,size,parallaxScrollingOffset,Extrapolation,parallaxAdjacentItemScale,parallaxScrollingScale,vertical}=this.__closure;const translate=interpolate(value,[-1,0,1],[-size+parallaxScrollingOffset,0,size-parallaxScrollingOffset]);const zIndex=Math.round(interpolate(value,[-1,0,1],[0,size,0],Extrapolation.CLAMP));const scale=interpolate(value,[-1,0,1],[parallaxAdjacentItemScale,parallaxScrollingScale,parallaxAdjacentItemScale],Extrapolation.CLAMP);return{transform:[vertical?{translateY:translate}:{translateX:translate},{scale:scale}],zIndex:zIndex};}';
    var2.code = var3;
    var _closure1_slot2 = var2;
    var0 = function(arg0) { // Original name: parallaxLayout, environment: var0
        _fun74795: for (var _fun74795_ip = 0;;) switch (_fun74795_ip) {
            case 0:
                var2 = arg0;
                var8 = undefined;
                var4 = undefined;
                var1 = arguments.length;
                var3 = 1;
                if (!(var1 > var3)) {
                    _fun74795_ip = 27;
                    continue _fun74795
                }
            case 19:
                var1 = arguments[var3];
                if (!(var8 === var1)) {
                    _fun74795_ip = 31;
                    continue _fun74795
                }
            case 27:
                var1 = {};
                _fun74795_ip = 35;
                continue _fun74795;
            case 31:
                var1 = arguments[var3];
            case 35:
                var11 = var2.size;
                var _closure2_slot0 = var11;
                var3 = var2.vertical;
                var _closure2_slot1 = var3;
                var2 = var1.parallaxScrollingOffset;
                var10 = 100;
                if (!(var8 !== var2)) {
                    _fun74795_ip = 70;
                    continue _fun74795
                }
            case 67:
                var10 = var2;
            case 70:
                var _closure2_slot2 = var10;
                var2 = var1.parallaxScrollingScale;
                var4 = 0.8;
                if (!(var8 !== var2)) {
                    _fun74795_ip = 97;
                    continue _fun74795
                }
            case 94:
                var4 = var2;
            case 97:
                var _closure2_slot3 = var4;
                var5 = var1.parallaxAdjacentItemScale;
                if (!(var8 === var5)) {
                    _fun74795_ip = 121;
                    continue _fun74795
                }
            case 111:
                var13 = 2;
                var14 = var4;
                var5 = exponentiationOperator(var14, var13);
            case 121:
                var _closure2_slot4 = var5;
                var0 = function(arg0) { // Original name: pnpm_parallaxTs1, environment: var0
                    _fun74796: for (var _fun74796_ip = 0;;) switch (_fun74796_ip) {
                        case 0:
                            var8 = arg0;
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot1;
                            var0 = 0;
                            var1 = var11[var0];
                            var9 = undefined;
                            var6 = var10.bind(var9)(var1);
                            var5 = var6.interpolate;
                            var4 = new Array(3);
                            var12 = -1;
                            var4[0] = var12;
                            var4[1] = var0;
                            var3 = 1;
                            var4[2] = var3;
                            var1 = _closure2_slot0;
                            var7 = -var1;
                            var1 = _closure2_slot2;
                            var7 = var7 + var1;
                            var1 = new Array(3);
                            var1[0] = var7;
                            var1[1] = var0;
                            var13 = _closure2_slot0;
                            var7 = _closure2_slot2;
                            var7 = var13 - var7;
                            var1[2] = var7;
                            var5 = var5.bind(var6)(var8, var4, var1);
                            var1 = global;
                            var6 = var1.Math;
                            var4 = var6.round;
                            var1 = var11[var0];
                            var15 = var10.bind(var9)(var1);
                            var14 = var15.interpolate;
                            var13 = new Array(3);
                            var13[0] = var12;
                            var13[1] = var0;
                            var13[2] = var3;
                            var1 = _closure2_slot0;
                            var7 = [0];
                            var7[1] = var1;
                            var7[2] = var0;
                            var1 = var11[var0];
                            var1 = var10.bind(var9)(var1);
                            var1 = var1.Extrapolation;
                            var16 = var1.CLAMP;
                            var20 = var15;
                            var19 = var8;
                            var18 = var13;
                            var17 = var7;
                            var1 = var20[var14](var19, var18, var17, var16, var15);
                            var1 = var4.bind(var6)(var1);
                            var4 = var11[var0];
                            var7 = var10.bind(var9)(var4);
                            var6 = var7.interpolate;
                            var4 = new Array(3);
                            var4[0] = var12;
                            var4[1] = var0;
                            var4[2] = var3;
                            var12 = _closure2_slot4;
                            var3 = new Array(3);
                            var3[0] = var12;
                            var12 = _closure2_slot3;
                            var3[1] = var12;
                            var12 = _closure2_slot4;
                            var3[2] = var12;
                            var0 = var11[var0];
                            var0 = var10.bind(var9)(var0);
                            var0 = var0.Extrapolation;
                            var16 = var0.CLAMP;
                            var20 = var7;
                            var19 = var8;
                            var18 = var4;
                            var17 = var3;
                            var4 = var20[var6](var19, var18, var17, var16, var15);
                            var0 = {};
                            var3 = _closure2_slot1;
                            var2 = {};
                            if (var3) {
                                _fun74796_ip = 336;
                                continue _fun74796
                            }
                        case 326:
                            var2.translateX = var5;
                            var3 = var2;
                            _fun74796_ip = 344;
                            continue _fun74796;
                        case 336:
                            var2.translateY = var5;
                            var3 = var2;
                        case 344:
                            var2 = new Array(2);
                            var2[0] = var3;
                            var3 = {};
                            var3.scale = var4;
                            var2[1] = var3;
                            var0.transform = var2;
                            var0.zIndex = var1;
                            return var0;
                    }
                };
                var2 = {};
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 0;
                var12 = var9[var6];
                var12 = var7.bind(var8)(var12);
                var12 = var12.interpolate;
                var2.interpolate = var12;
                var2.size = var11;
                var2.parallaxScrollingOffset = var10;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                var6 = var6.Extrapolation;
                var2.Extrapolation = var6;
                var2.parallaxAdjacentItemScale = var5;
                var2.parallaxScrollingScale = var4;
                var2.vertical = var3;
                var0.__closure = var2;
                var2 = 8790326555138.0;
                var0.__workletHash = var2;
                var1 = _closure1_slot2;
                var0.__initData = var1;
                return var0;
        }
    };
    var1.parallaxLayout = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3678]);