// modules/quests/native/QuestGameLogotype.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var8 = true;
    var3.value = var8;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot5 = var7;
    var3 = var3.Image;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = {};
    var7 = 4;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var13 = var7.springSlow;
    var14 = var3;
    var7 = copyDataProperties(var14, var13);
    var7 = 'overshootClamping';
    var3[var7] = var8;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 6;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var9.marginBottom = var10;
    var3.logo = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var7 = "function QuestGameLogotypeTsx1(){const{withSpring,logoDimensionStyles,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(logoDimensionStyles==null?0:1,SPRING_CONFIG,'animate-always')};}";
    var3.code = var7;
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun83587: for (var _fun83587_ip = 0;;) switch (_fun83587_ip) {
            case 0:
                var2 = arg0;
                var10 = var2.assetUrl;
                var _closure2_slot0 = var10;
                var12 = var2.width;
                var3 = undefined;
                if (!(var12 === var3)) {
                    _fun83587_ip = 29;
                    continue _fun83587
                }
            case 26:
                var12 = 120;
            case 29:
                var _closure2_slot1 = var12;
                var7 = var2.height;
                var _closure2_slot2 = var7;
                var5 = var2.maxWidth;
                var _closure2_slot3 = var5;
                var0 = var2.maxHeight;
                var _closure2_slot4 = var0;
                var6 = var2.style;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var2 = _closure1_slot9;
                var11 = var2.bind(var3)();
                var9 = _closure1_slot4;
                var4 = var9.useState;
                var2 = null;
                var13 = var4.bind(var9)(var2);
                var4 = _closure1_slot3;
                var2 = 2;
                var4 = var4.bind(var3)(var13, var2);
                var2 = 0;
                var13 = var4[var2];
                _closure2_slot5 = var13;
                var2 = 1;
                var2 = var4[var2];
                _closure2_slot6 = var2;
                var4 = var9.useMemo;
                var2 = new Array(5);
                var2[0] = var13;
                var2[1] = var12;
                var2[2] = var7;
                var2[3] = var5;
                var2[4] = var0;
                var0 = function() { // Environment: var1
                    _fun83588: for (var _fun83588_ip = 0;;) switch (_fun83588_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var4 = null;
                            if (!(var4 == var0)) {
                                _fun83588_ip = 17;
                                continue _fun83588
                            }
                        case 13:
                            var0 = undefined;
                            return var0;
                        case 17:
                            var0 = _closure2_slot5;
                            var2 = var0.width;
                            var0 = _closure2_slot5;
                            var0 = var0.height;
                            var2 = var2 / var0;
                            var0 = _closure2_slot2;
                            if (!(var4 == var0)) {
                                _fun83588_ip = 67;
                                continue _fun83588
                            }
                        case 47:
                            var0 = {};
                            var3 = _closure2_slot1;
                            var5 = var3 / var2;
                            var0.height = var5;
                            var0.width = var3;
                            _fun83588_ip = 88;
                            continue _fun83588;
                        case 67:
                            var3 = {};
                            var5 = _closure2_slot2;
                            var3.height = var5;
                            var5 = var5 * var2;
                            var3.width = var5;
                            var0 = var3;
                        case 88:
                            var3 = _closure2_slot3;
                            if (!(var4 != var3)) {
                                _fun83588_ip = 145;
                                continue _fun83588
                            }
                        case 96:
                            var3 = global;
                            var7 = var3.Math;
                            var6 = var7.min;
                            var5 = _closure2_slot3;
                            var3 = var0.width;
                            var3 = var6.bind(var7)(var5, var3);
                            var0.width = var3;
                            var3 = var0.width;
                            var3 = var3 / var2;
                            var0.height = var3;
                        case 145:
                            var3 = _closure2_slot4;
                            if (!(var4 != var3)) {
                                _fun83588_ip = 202;
                                continue _fun83588
                            }
                        case 153:
                            var3 = global;
                            var5 = var3.Math;
                            var4 = var5.min;
                            var3 = _closure2_slot4;
                            var1 = var0.height;
                            var1 = var4.bind(var5)(var3, var1);
                            var0.height = var1;
                            var1 = var0.height;
                            var1 = var1 * var2;
                            var0.width = var1;
                        case 202:
                            return var0;
                    }
                };
                var12 = var4.bind(var9)(var0, var2);
                _closure2_slot7 = var12;
                var4 = var9.useEffect;
                var2 = new Array(1);
                var2[0] = var10;
                var0 = function() { // Environment: var1
                    var3 = _closure1_slot6;
                    var2 = var3.getSize;
                    var1 = _closure2_slot0;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun83590: for (var _fun83590_ip = 0;;) switch (_fun83590_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = arg1;
                                var2 = 0;
                                var1 = var3 > var2;
                                if (!var1) {
                                    _fun83590_ip = 19;
                                    continue _fun83590
                                }
                            case 15:
                                var1 = var0 > var2;
                            case 19:
                                if (!var1) {
                                    _fun83590_ip = 46;
                                    continue _fun83590
                                }
                            case 22:
                                var2 = _closure2_slot6;
                                var1 = {};
                                var1.width = var3;
                                var1.height = var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 46:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var4.bind(var9)(var0, var2);
                var15 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 7;
                var2 = var5[var0];
                var7 = var15.bind(var3)(var2);
                var4 = var7.useAnimatedStyle;
                var2 = function() {
                    _fun83591: for (var _fun83591_ip = 0;;) switch (_fun83591_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 8;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.withSpring;
                            var3 = _closure2_slot7;
                            var2 = null;
                            var2 = var2 == var3;
                            var3 = 1;
                            if (!var2) {
                                _fun83591_ip = 53;
                                continue _fun83591
                            }
                        case 51:
                            var3 = 0;
                        case 53:
                            var2 = _closure1_slot8;
                            var1 = 'animate-always';
                            var1 = var4.bind(var5)(var3, var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var13 = {};
                var14 = 8;
                var14 = var5[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.withSpring;
                var13.withSpring = var14;
                var13.logoDimensionStyles = var12;
                var14 = _closure1_slot8;
                var13.SPRING_CONFIG = var14;
                var2.__closure = var13;
                var13 = 11242802634598.0;
                var2.__workletHash = var13;
                var13 = _closure1_slot10;
                var2.__initData = var13;
                var7 = var4.bind(var7)(var2);
                var4 = var9.useMemo;
                var2 = new Array(1);
                var2[0] = var10;
                var1 = function() { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.endsWith;
                    var0 = '.svg';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var4.bind(var9)(var1, var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var0.style = var5;
                var7 = _closure1_slot7;
                if (var4) {
                    _fun83587_ip = 456;
                    continue _fun83587
                }
            case 394:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 10;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var6 = {};
                var6.uri = var10;
                var4.source = var6;
                var6 = new Array(2);
                var6[0] = var12;
                var9 = var11.logo;
                var6[1] = var9;
                var4.style = var6;
                var4 = var7.bind(var3)(var5, var4);
                _fun83587_ip = 544;
                continue _fun83587;
            case 456:
                var6 = _closure1_slot5;
                var5 = {};
                var9 = new Array(2);
                var9[0] = var12;
                var11 = var11.logo;
                var9[1] = var11;
                var5.style = var9;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 9;
                var8 = var11[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.SvgUri;
                var8 = {
                    'height': '100%',
                    'width': '100%'
                };
                var8.uri = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 544:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestGameLogotype.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 4046, 1297, 671, 3679, 4040, 5422, 4667, 2]);