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
    var3 = 'function pnpm_useOffsetXTs1(){const{visibleRanges,index,loop,TOTAL_WIDTH,MIN,HALF_WIDTH,startPos,MAX,interpolate,handlerOffset,Extrapolation,size}=this.__closure;const{negativeRange:negativeRange,positiveRange:positiveRange}=visibleRanges.value;if(index>=negativeRange[0]&&index<=negativeRange[1]||index>=positiveRange[0]&&index<=positiveRange[1]){if(loop){const inputRange=[-TOTAL_WIDTH,MIN-HALF_WIDTH-startPos-Number.MIN_VALUE,MIN-HALF_WIDTH-startPos,0,MAX+HALF_WIDTH-startPos,MAX+HALF_WIDTH-startPos+Number.MIN_VALUE,TOTAL_WIDTH];const outputRange=[startPos,MAX+HALF_WIDTH-Number.MIN_VALUE,MIN-HALF_WIDTH,startPos,MAX+HALF_WIDTH,MIN-HALF_WIDTH+Number.MIN_VALUE,startPos];return interpolate(handlerOffset.value,inputRange,outputRange,Extrapolation.CLAMP);}return handlerOffset.value+size*index;}return Number.MAX_SAFE_INTEGER;}';
    var2.code = var3;
    var _closure1_slot2 = var2;
    var0 = function arg0, arg1() {
        _fun75202: for (var _fun75202_ip = 0;;) switch (_fun75202_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var5;
                var4 = var0.handlerOffset;
                var _closure2_slot1 = var4;
                var21 = var0.index;
                var _closure2_slot2 = var21;
                var6 = var0.size;
                var _closure2_slot3 = var6;
                var10 = var0.loop;
                var _closure2_slot4 = var10;
                var9 = var0.dataLength;
                var2 = var0.type;
                var3 = 'positive';
                var14 = undefined;
                var7 = var3;
                if (!(var14 !== var2)) {
                    _fun75202_ip = 77;
                    continue _fun75202
                }
            case 74:
                var7 = var2;
            case 77:
                var8 = var0.viewCount;
                var0 = 1;
                var2 = var9 - var0;
                var20 = var6 * var9;
                var _closure2_slot5 = var20;
                var11 = 0.5;
                var18 = var11 * var6;
                var _closure2_slot6 = var18;
                var11 = null;
                if (!(var11 == var8)) {
                    _fun75202_ip = 151;
                    continue _fun75202
                }
            case 122:
                var11 = global;
                var12 = var11.Math;
                var11 = var12.round;
                var13 = var9 - var0;
                var0 = 2;
                var0 = var13 / var0;
                var8 = var11.bind(var12)(var0);
            case 151:
                var0 = var8;
                if (!(var3 !== var7)) {
                    _fun75202_ip = 162;
                    continue _fun75202
                }
            case 158:
                var0 = var2 - var8;
            case 162:
                var17 = var6 * var21;
                var _closure2_slot7 = var17;
                if (!(var21 > var0)) {
                    _fun75202_ip = 189;
                    continue _fun75202
                }
            case 174:
                var3 = var21 - var9;
                var3 = var3 * var6;
                _closure2_slot7 = var3;
                var17 = var3;
            case 189:
                var16 = var0 * var6;
                var _closure2_slot8 = var16;
                var0 = var2 - var0;
                var0 = -var0;
                var19 = var0 * var6;
                var _closure2_slot9 = var19;
                var13 = _closure1_slot0;
                var15 = _closure1_slot1;
                var12 = 0;
                var2 = var15[var12];
                var3 = var13.bind(var14)(var2);
                var2 = var3.useDerivedValue;
                var1 = function() {
                    _fun75203: for (var _fun75203_ip = 0;;) switch (_fun75203_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var0 = var0.value;
                            var4 = var0.negativeRange;
                            var3 = var0.positiveRange;
                            var2 = _closure2_slot2;
                            var8 = 0;
                            var0 = var4[var8];
                            if (!(var2 >= var0)) {
                                _fun75203_ip = 53;
                                continue _fun75203
                            }
                        case 38:
                            var2 = _closure2_slot2;
                            var0 = 1;
                            var0 = var4[var0];
                            if (!(!(var2 <= var0))) {
                                _fun75203_ip = 96;
                                continue _fun75203
                            }
                        case 53:
                            var2 = _closure2_slot2;
                            var0 = var3[var8];
                            if (!(var2 >= var0)) {
                                _fun75203_ip = 80;
                                continue _fun75203
                            }
                        case 65:
                            var2 = _closure2_slot2;
                            var0 = 1;
                            var0 = var3[var0];
                            if (!(!(var2 <= var0))) {
                                _fun75203_ip = 96;
                                continue _fun75203
                            }
                        case 80:
                            var0 = global;
                            var0 = var0.Number;
                            var0 = var0.MAX_SAFE_INTEGER;
                            return var0;
                        case 96:
                            var0 = _closure2_slot4;
                            if (var0) {
                                _fun75203_ip = 130;
                                continue _fun75203
                            }
                        case 103:
                            var0 = _closure2_slot1;
                            var2 = var0.value;
                            var3 = _closure2_slot3;
                            var0 = _closure2_slot2;
                            var0 = var3 * var0;
                            var0 = var2 + var0;
                            return var0;
                        case 130:
                            var0 = _closure2_slot5;
                            var0 = -var0;
                            var5 = new Array(7);
                            var5[0] = var0;
                            var2 = _closure2_slot9;
                            var0 = _closure2_slot6;
                            var2 = var2 - var0;
                            var0 = _closure2_slot7;
                            var3 = var2 - var0;
                            var0 = global;
                            var2 = var0.Number;
                            var2 = var2.MIN_VALUE;
                            var2 = var3 - var2;
                            var5[1] = var2;
                            var3 = _closure2_slot9;
                            var2 = _closure2_slot6;
                            var3 = var3 - var2;
                            var2 = _closure2_slot7;
                            var2 = var3 - var2;
                            var5[2] = var2;
                            var5[3] = var8;
                            var3 = _closure2_slot8;
                            var2 = _closure2_slot6;
                            var3 = var3 + var2;
                            var2 = _closure2_slot7;
                            var2 = var3 - var2;
                            var5[4] = var2;
                            var3 = _closure2_slot8;
                            var2 = _closure2_slot6;
                            var3 = var3 + var2;
                            var2 = _closure2_slot7;
                            var3 = var3 - var2;
                            var2 = var0.Number;
                            var2 = var2.MIN_VALUE;
                            var2 = var3 + var2;
                            var5[5] = var2;
                            var2 = _closure2_slot5;
                            var5[6] = var2;
                            var2 = _closure2_slot7;
                            var4 = new Array(7);
                            var4[0] = var2;
                            var3 = _closure2_slot8;
                            var2 = _closure2_slot6;
                            var3 = var3 + var2;
                            var2 = var0.Number;
                            var2 = var2.MIN_VALUE;
                            var2 = var3 - var2;
                            var4[1] = var2;
                            var3 = _closure2_slot9;
                            var2 = _closure2_slot6;
                            var2 = var3 - var2;
                            var4[2] = var2;
                            var2 = _closure2_slot7;
                            var4[3] = var2;
                            var3 = _closure2_slot8;
                            var2 = _closure2_slot6;
                            var2 = var3 + var2;
                            var4[4] = var2;
                            var3 = _closure2_slot9;
                            var2 = _closure2_slot6;
                            var2 = var3 - var2;
                            var0 = var0.Number;
                            var0 = var0.MIN_VALUE;
                            var0 = var2 + var0;
                            var4[5] = var0;
                            var0 = _closure2_slot7;
                            var4[6] = var0;
                            var7 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var2 = var0[var8];
                            var6 = undefined;
                            var3 = var7.bind(var6)(var2);
                            var2 = var3.interpolate;
                            var1 = _closure2_slot1;
                            var1 = var1.value;
                            var0 = var0[var8];
                            var0 = var7.bind(var6)(var0);
                            var0 = var0.Extrapolation;
                            var9 = var0.CLAMP;
                            var13 = var3;
                            var12 = var1;
                            var11 = var5;
                            var10 = var4;
                            var0 = var13[var2](var12, var11, var10, var9, var8);
                            return var0;
                    }
                };
                var11 = {};
                var11.visibleRanges = var5;
                var11.index = var21;
                var11.loop = var10;
                var11.TOTAL_WIDTH = var20;
                var11.MIN = var19;
                var11.HALF_WIDTH = var18;
                var11.startPos = var17;
                var11.MAX = var16;
                var16 = var15[var12];
                var16 = var13.bind(var14)(var16);
                var16 = var16.interpolate;
                var11.interpolate = var16;
                var11.handlerOffset = var4;
                var12 = var15[var12];
                var12 = var13.bind(var14)(var12);
                var12 = var12.Extrapolation;
                var11.Extrapolation = var12;
                var11.size = var6;
                var1.__closure = var11;
                var11 = 6313251538875.0;
                var1.__workletHash = var11;
                var0 = _closure1_slot2;
                var1.__initData = var0;
                var0 = new Array(7);
                var0[0] = var10;
                var0[1] = var9;
                var0[2] = var8;
                var0[3] = var7;
                var0[4] = var6;
                var0[5] = var5;
                var0[6] = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.useOffsetX = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3721]);