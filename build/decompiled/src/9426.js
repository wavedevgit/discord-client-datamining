// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Pressable;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 'function pnpm_PaginationItemTsx1(){const{horizontal,height,width,index,animValue,count,interpolate,Extrapolation}=this.__closure;var _animValue,_animValue2;const size=horizontal?height:width;let inputRange=[index-1,index,index+1];let outputRange=[-size,0,size];if(index===0&&((_animValue=animValue)===null||_animValue===void 0?void 0:_animValue.value)>count-1){inputRange=[count-1,count,count+1];outputRange=[-size,0,size];}return{transform:[{translateX:interpolate((_animValue2=animValue)===null||_animValue2===void 0?void 0:_animValue2.value,inputRange,outputRange,Extrapolation.CLAMP)}]};}';
    var3.code = var4;
    var _closure1_slot6 = var3;
    var1 = function(arg0) { // Original name: PaginationItem, environment: var1
        _fun74955: for (var _fun74955_ip = 0;;) switch (_fun74955_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.animValue;
                var _closure2_slot0 = var5;
                var9 = var1.dotStyle;
                var12 = var1.activeDotStyle;
                var6 = var1.index;
                var _closure2_slot1 = var6;
                var14 = var1.count;
                var _closure2_slot2 = var14;
                var2 = var1.size;
                var16 = var1.horizontal;
                var _closure2_slot3 = var16;
                var10 = var1.children;
                var4 = var1.onPress;
                var18 = var1.accessibilityLabel;
                var1 = {};
                var3 = var2;
                if (var2) {
                    _fun74955_ip = 103;
                    continue _fun74955
                }
            case 84:
                var7 = null;
                var8 = var7 == var9;
                var7 = undefined;
                if (var8) {
                    _fun74955_ip = 100;
                    continue _fun74955
                }
            case 95:
                var7 = var9.width;
            case 100:
                var3 = var7;
            case 103:
                if (var3) {
                    _fun74955_ip = 109;
                    continue _fun74955
                }
            case 106:
                var3 = 10;
            case 109:
                var1.width = var3;
                if (var2) {
                    _fun74955_ip = 135;
                    continue _fun74955
                }
            case 116:
                var3 = null;
                var7 = var3 == var9;
                var3 = undefined;
                if (var7) {
                    _fun74955_ip = 132;
                    continue _fun74955
                }
            case 127:
                var3 = var9.height;
            case 132:
                var2 = var3;
            case 135:
                if (var2) {
                    _fun74955_ip = 141;
                    continue _fun74955
                }
            case 138:
                var2 = 10;
            case 141:
                var1.height = var2;
                var15 = var1.width;
                var _closure2_slot4 = var15;
                var8 = var1.height;
                var _closure2_slot5 = var8;
                var19 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = 3;
                var1 = var17[var11];
                var3 = undefined;
                var13 = var19.bind(var3)(var1);
                var2 = var13.useAnimatedStyle;
                var1 = function() { // Original name: pnpm_PaginationItemTsx1, environment: var0
                    _fun74956: for (var _fun74956_ip = 0;;) switch (_fun74956_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun74956_ip = 16;
                                continue _fun74956
                            }
                        case 10:
                            var2 = _closure2_slot4;
                            _fun74956_ip = 20;
                            continue _fun74956;
                        case 16:
                            var2 = _closure2_slot5;
                        case 20:
                            var0 = _closure2_slot1;
                            var4 = 1;
                            var1 = var0 - var4;
                            var7 = new Array(3);
                            var7[0] = var1;
                            var7[1] = var0;
                            var1 = var0 + var4;
                            var7[2] = var1;
                            var1 = -var2;
                            var6 = new Array(3);
                            var6[0] = var1;
                            var3 = 0;
                            var6[1] = var3;
                            var6[2] = var2;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun74956_ip = 115;
                                continue _fun74956
                            }
                        case 79:
                            var5 = _closure2_slot0;
                            var1 = null;
                            var1 = var1 == var5;
                            var5 = undefined;
                            if (var1) {
                                _fun74956_ip = 103;
                                continue _fun74956
                            }
                        case 94:
                            var1 = _closure2_slot0;
                            var5 = var1.value;
                        case 103:
                            var1 = _closure2_slot2;
                            var1 = var1 - var4;
                            var0 = var5 > var1;
                        case 115:
                            if (!var0) {
                                _fun74956_ip = 171;
                                continue _fun74956
                            }
                        case 118:
                            var0 = _closure2_slot2;
                            var5 = var0 - var4;
                            var1 = new Array(3);
                            var1[0] = var5;
                            var1[1] = var0;
                            var0 = var0 + var4;
                            var1[2] = var0;
                            var4 = -var2;
                            var0 = new Array(3);
                            var0[0] = var4;
                            var0[1] = var3;
                            var0[2] = var2;
                            var7 = var1;
                            var6 = var0;
                        case 171:
                            var0 = {};
                            var2 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var10 = 3;
                            var3 = var3[var10];
                            var9 = undefined;
                            var5 = var4.bind(var9)(var3);
                            var4 = var5.interpolate;
                            var11 = _closure2_slot0;
                            var3 = null;
                            var11 = var3 == var11;
                            var3 = undefined;
                            if (var11) {
                                _fun74956_ip = 230;
                                continue _fun74956
                            }
                        case 221:
                            var8 = _closure2_slot0;
                            var3 = var8.value;
                        case 230:
                            var8 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var10];
                            var1 = var8.bind(var9)(var1);
                            var1 = var1.Extrapolation;
                            var12 = var1.CLAMP;
                            var16 = var5;
                            var15 = var3;
                            var14 = var7;
                            var13 = var6;
                            var1 = var16[var4](var15, var14, var13, var12, var11);
                            var2.translateX = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var0 = {};
                var0.horizontal = var16;
                var0.height = var8;
                var0.width = var15;
                var0.index = var6;
                var0.animValue = var5;
                var0.count = var14;
                var20 = var17[var11];
                var20 = var19.bind(var3)(var20);
                var20 = var20.interpolate;
                var0.interpolate = var20;
                var17 = var17[var11];
                var17 = var19.bind(var3)(var17);
                var17 = var17.Extrapolation;
                var0.Extrapolation = var17;
                var1.__closure = var0;
                var0 = 1536479533103.0;
                var1.__workletHash = var0;
                var0 = _closure1_slot6;
                var1.__initData = var0;
                var0 = new Array(4);
                var0[0] = var5;
                var0[1] = var6;
                var0[2] = var14;
                var0[3] = var16;
                var13 = var2.bind(var13)(var1, var0);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var0.onPress = var4;
                var0.accessibilityLabel = var18;
                var4 = 'button';
                var0.accessibilityRole = var4;
                var14 = var5.value;
                var4 = '';
                if (!(var14 !== var6)) {
                    _fun74955_ip = 391;
                    continue _fun74955
                }
            case 367:
                var14 = global;
                var14 = var14.HermesInternal;
                var17 = var14.concat;
                var14 = 'Go to ';
                var4 = var17.bind(var14)(var18);
            case 391:
                var0.accessibilityHint = var4;
                var4 = {};
                var5 = var5.value;
                var5 = var5 === var6;
                var4.selected = var5;
                var0.accessibilityState = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot4;
                var4 = {};
                var14 = {};
                var14.width = var15;
                var14.height = var8;
                var8 = 'hidden';
                var14.overflow = var8;
                var15 = {};
                var8 = '0deg';
                if (!var16) {
                    _fun74955_ip = 463;
                    continue _fun74955
                }
            case 457:
                var8 = '90deg';
            case 463:
                var15.rotateZ = var8;
                var8 = new Array(1);
                var8[0] = var15;
                var14.transform = var8;
                var8 = new Array(2);
                var8[0] = var14;
                var8[1] = var9;
                var4.style = var8;
                var9 = _closure1_slot5;
                var8 = _closure1_slot1;
                var7 = _closure1_slot2;
                var7 = var7[var11];
                var7 = var8.bind(var3)(var7);
                var8 = var7.View;
                var7 = {};
                var11 = new Array(3);
                var14 = {
                    'backgroundColor': 'black',
                    'flex': 1
                };
                var11[0] = var14;
                var11[1] = var13;
                var11[2] = var12;
                var7.style = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.PaginationItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3680]);