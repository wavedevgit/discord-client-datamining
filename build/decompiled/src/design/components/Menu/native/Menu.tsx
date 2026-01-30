// design/components/Menu/native/Menu.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var13 = 1;
    var4 = var6[var13];
    var3 = metroImportAll;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var11 = var3.StyleSheet;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot6 = var3;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = {
        'mass': 1,
        'stiffness': 300,
        'damping': 25,
        'restSpeedThreshold': 0.01,
        'restDisplacementThreshold': 0.01
    };
    var _closure1_slot8 = var4;
    var4 = {};
    var8 = 250;
    var4.duration = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var8 = var8.STANDARD_EASING;
    var4.easing = var8;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var15 = var11.absoluteFillObject;
    var16 = var10;
    var11 = copyDataProperties(var16, var15);
    var11 = 'zIndex';
    var10[var11] = var13;
    var4.backdrop = var10;
    var10 = {};
    var11 = 'absolute';
    var10.position = var11;
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var10.backgroundColor = var13;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10.borderRadius = var11;
    var11 = 220;
    var10.width = var11;
    var4.menu = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = {};
    var4.menuClose = var3;
    var4.menuDismiss = var3;
    var3 = var7.createContext;
    var3 = var3.bind(var7)(var4);
    var _closure1_slot11 = var3;
    var4 = {};
    var7 = 'function measureButtonRef_MenuTsx1(ref,setDimensions){const{measure,runOnJS}=this.__closure;const measurements=measure(ref);if(measurements==null)return;runOnJS(setDimensions)(measurements);}';
    var4.code = var7;
    var _closure1_slot12 = var4;
    var4 = function() { // Environment: var1
        var0 = function(arg0, arg1) { // Original name: measureButtonRef, environment: var0
            _fun44338: for (var _fun44338_ip = 0;;) switch (_fun44338_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var4 = 8;
                    var2 = var0[var4];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var3 = var5.measure;
                    var2 = arg0;
                    var2 = var3.bind(var5)(var2);
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun44338_ip = 80;
                        continue _fun44338
                    }
                case 45:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var4];
                    var4 = var3.bind(var0)(var1);
                    var3 = var4.runOnJS;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var0)(var2);
                case 80:
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 8;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.measure;
        var2.measure = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.runOnJS;
        var2.runOnJS = var3;
        var0.__closure = var2;
        var2 = 15651320687527.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot12;
        var0.__initData = var1;
        return var0;
    };
    var4 = var4.bind(var0)();
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function MenuTsx2(){const{runOnJS,openMenuCallback}=this.__closure;return runOnJS(openMenuCallback)();}';
    var4.code = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function MenuTsx3(){const{runOnJS,closeMenuCallback}=this.__closure;return runOnJS(closeMenuCallback)();}';
    var4.code = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = "function MenuTsx4(){const{visible,useReducedMotion,interpolate,dirX,size,offsetAnimated,dirY}=this.__closure;var _offsetAnimated,_offsetAnimated$get,_offsetAnimated2,_offsetAnimated$get2;return{opacity:visible.get(),transform:useReducedMotion?[]:[{translateX:interpolate(visible.get(),[0,1],[(dirX==='left'?-1:1)*size.get().width/4,((_offsetAnimated=offsetAnimated)===null||_offsetAnimated===void 0||(_offsetAnimated=_offsetAnimated.get())===null||_offsetAnimated===void 0?void 0:_offsetAnimated.x)!=null?(_offsetAnimated$get=offsetAnimated.get())===null||_offsetAnimated$get===void 0?void 0:_offsetAnimated$get.x:0])},{translateY:interpolate(visible.get(),[0,1],[(dirY==='top'?-1:1)*size.get().height/4,((_offsetAnimated2=offsetAnimated)===null||_offsetAnimated2===void 0||(_offsetAnimated2=_offsetAnimated2.get())===null||_offsetAnimated2===void 0?void 0:_offsetAnimated2.y)!=null?(_offsetAnimated$get2=offsetAnimated.get())===null||_offsetAnimated$get2===void 0?void 0:_offsetAnimated$get2.y:0])},{scale:visible.get()/2+0.5}]};}";
    var4.code = var7;
    var _closure1_slot16 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Menu/native/Menu.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 10;
    var2.MENU_OFFSET = var4;
    var2.MenuContext = var3;
    var1 = function(arg0) { // Original name: Menu, environment: var1
        _fun44339: for (var _fun44339_ip = 0;;) switch (_fun44339_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.toggleButtonRef;
                var _closure2_slot0 = var15;
                var0 = var1.onClose;
                var2 = var1.position;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun44339_ip = 36;
                    continue _fun44339
                }
            case 32:
                var2 = 'right';
            case 36:
                var _closure2_slot1 = var2;
                var2 = var1.align;
                if (!(var2 === var3)) {
                    _fun44339_ip = 54;
                    continue _fun44339
                }
            case 50:
                var2 = 'start';
            case 54:
                var _closure2_slot2 = var2;
                var2 = var1.offset;
                var _closure2_slot3 = var2;
                var17 = var1.offsetAnimated;
                var _closure2_slot4 = var17;
                var7 = var1.style;
                var13 = var1.children;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var1 = _closure1_slot10;
                var6 = var1.bind(var3)();
                var14 = _closure1_slot4;
                var2 = var14.useContext;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 9;
                var1 = var9[var1];
                var1 = var12.bind(var3)(var1);
                var1 = var1.AccessibilityPreferencesContext;
                var1 = var2.bind(var14)(var1);
                var1 = var1.reducedMotion;
                var20 = var1.enabled;
                _closure2_slot5 = var20;
                var2 = _closure1_slot1;
                var1 = 10;
                var1 = var9[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                _closure2_slot6 = var1;
                var1 = 11;
                var1 = var9[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                _closure2_slot7 = var1;
                var1 = var14.useRef;
                var4 = null;
                var1 = var1.bind(var14)(var4);
                _closure2_slot8 = var1;
                var1 = var14.useState;
                var5 = var1.bind(var14)(var4);
                var2 = _closure1_slot3;
                var1 = 2;
                var16 = var2.bind(var3)(var5, var1);
                var5 = 0;
                var8 = var16[var5];
                _closure2_slot9 = var8;
                var2 = 1;
                var16 = var16[var2];
                _closure2_slot10 = var16;
                var16 = 8;
                var18 = var9[var16];
                var19 = var12.bind(var3)(var18);
                var18 = var19.useSharedValue;
                var22 = var18.bind(var19)(var5);
                _closure2_slot11 = var22;
                var9 = var9[var16];
                var18 = var12.bind(var3)(var9);
                var12 = var18.useSharedValue;
                var9 = {
                    'width': 0,
                    'height': 0
                };
                var18 = var12.bind(var18)(var9);
                _closure2_slot12 = var18;
                var12 = var14.useLayoutEffect;
                var9 = new Array(2);
                var9[0] = var15;
                var9[1] = var8;
                var8 = function() { // Environment: var10
                    _fun44340: for (var _fun44340_ip = 0;;) switch (_fun44340_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var4 = null;
                            var3 = var4 == var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (var3) {
                                _fun44340_ip = 29;
                                continue _fun44340
                            }
                        case 20:
                            var3 = _closure2_slot0;
                            var2 = var3.current;
                        case 29:
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun44340_ip = 44;
                                continue _fun44340
                            }
                        case 36:
                            var3 = _closure2_slot9;
                            var2 = var4 == var3;
                        case 44:
                            if (!var2) {
                                _fun44340_ip = 99;
                                continue _fun44340
                            }
                        case 47:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 8;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.runOnUI;
                            var2 = _closure1_slot13;
                            var3 = var3.bind(var4)(var2);
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot10;
                            var1 = var3.bind(var0)(var2, var1);
                        case 99:
                            return var0;
                    }
                };
                var8 = var12.bind(var14)(var8, var9);
                var8 = function() { // Original name: openMenuCallback, environment: var10
                    _fun44341: for (var _fun44341_ip = 0;;) switch (_fun44341_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 12;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isAndroid;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun44341_ip = 122;
                                continue _fun44341
                            }
                        case 38:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 13;
                            var2 = var8[var2];
                            var2 = var7.bind(var0)(var2);
                            var4 = var2.AccessibilityAnnouncer;
                            var3 = var4.announce;
                            var2 = 14;
                            var5 = var8[var2];
                            var5 = var7.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var2 = var8[var2];
                            var2 = var7.bind(var0)(var2);
                            var2 = var2.t;
                            var2 = var2.ZqK0uI;
                            var2 = var5.bind(var6)(var2);
                            var2 = var3.bind(var4)(var2);
                        case 122:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.setAccessibilityFocus;
                            var1 = {};
                            var4 = _closure2_slot8;
                            var1.ref = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                _closure2_slot13 = var8;
                if (!(var4 == var0)) {
                    _fun44339_ip = 418;
                    continue _fun44339
                }
            case 414:
                var0 = _closure1_slot6;
            case 418:
                _closure2_slot14 = var0;
                var15 = function() { // Original name: handleClose, environment: var10
                    var3 = _closure2_slot11;
                    var2 = var3.set;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var0 = 16;
                    var4 = var12[var0];
                    var0 = undefined;
                    var8 = var11.bind(var0)(var4);
                    var7 = var8.withTiming;
                    var15 = _closure1_slot9;
                    var5 = function() { // Original name: t, environment: var4
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 8;
                        var0 = var1[var0];
                        var1 = undefined;
                        var3 = var2.bind(var1)(var0);
                        var2 = var3.runOnJS;
                        var0 = _closure2_slot14;
                        var0 = var2.bind(var3)(var0);
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var4 = {};
                    var10 = 8;
                    var10 = var12[var10];
                    var10 = var11.bind(var0)(var10);
                    var10 = var10.runOnJS;
                    var4.runOnJS = var10;
                    var9 = _closure2_slot14;
                    var4.closeMenuCallback = var9;
                    var5.__closure = var4;
                    var4 = 5879184549724.0;
                    var5.__workletHash = var4;
                    var1 = _closure1_slot15;
                    var5.__initData = var1;
                    var16 = 0;
                    var14 = 'respect-motion-settings';
                    var17 = var8;
                    var13 = var5;
                    var1 = var17[var7](var16, var15, var14, var13, var12);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                _closure2_slot15 = var15;
                var14 = function() { // Original name: handleDismiss, environment: var10
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.setAccessibilityFocus;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2.ref = var5;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot15;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var21 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 17;
                var8 = var4[var0];
                var9 = var21.bind(var3)(var8);
                var8 = var9.generateBoxShadowStyle;
                var0 = var4[var0];
                var0 = var21.bind(var3)(var0);
                var0 = var0.EIGHT_DP_ELEVATION_SHADOW_PARAMS;
                var12 = var8.bind(var9)(var0);
                var0 = function() { // Environment: var10
                    _fun44345: for (var _fun44345_ip = 0;;) switch (_fun44345_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var7 = 'left';
                            if (!(var7 !== var0)) {
                                _fun44345_ip = 31;
                                continue _fun44345
                            }
                        case 15:
                            var1 = _closure2_slot1;
                            var8 = 'row';
                            var0 = 'right';
                            if (!(var0 === var1)) {
                                _fun44345_ip = 35;
                                continue _fun44345
                            }
                        case 31:
                            var8 = 'column';
                        case 35:
                            var0 = _closure2_slot9;
                            var5 = null;
                            if (!(var5 != var0)) {
                                _fun44345_ip = 201;
                                continue _fun44345
                            }
                        case 48:
                            var0 = _closure2_slot9;
                            var2 = var0.pageX;
                            var0 = _closure2_slot9;
                            var1 = var0.pageY;
                            var9 = _closure2_slot1;
                            var3 = 'right';
                            var0 = 0;
                            if (!(var3 === var9)) {
                                _fun44345_ip = 91;
                                continue _fun44345
                            }
                        case 82:
                            var3 = _closure2_slot9;
                            var0 = var3.width;
                        case 91:
                            var9 = var2 + var0;
                            var3 = _closure2_slot1;
                            var2 = 'bottom';
                            var0 = 0;
                            if (!(var2 === var3)) {
                                _fun44345_ip = 118;
                                continue _fun44345
                            }
                        case 109:
                            var2 = _closure2_slot9;
                            var0 = var2.height;
                        case 118:
                            var0 = var1 + var0;
                            var10 = _closure2_slot2;
                            var3 = 'end';
                            var2 = var9;
                            var1 = var0;
                            if (!(var3 === var10)) {
                                _fun44345_ip = 189;
                                continue _fun44345
                            }
                        case 140:
                            var10 = 'row';
                            var3 = 0;
                            if (!(var10 === var8)) {
                                _fun44345_ip = 159;
                                continue _fun44345
                            }
                        case 150:
                            var10 = _closure2_slot9;
                            var3 = var10.width;
                        case 159:
                            var3 = var9 + var3;
                            var9 = 'column';
                            var4 = 0;
                            if (!(var9 === var8)) {
                                _fun44345_ip = 182;
                                continue _fun44345
                            }
                        case 173:
                            var9 = _closure2_slot9;
                            var4 = var9.height;
                        case 182:
                            var1 = var0 + var4;
                            var2 = var3;
                        case 189:
                            var0 = {};
                            var0.x = var2;
                            var0.y = var1;
                            _fun44345_ip = 211;
                            continue _fun44345;
                        case 201:
                            var0 = {
                                'x': 0,
                                'y': 0
                            };
                        case 211:
                            var1 = _closure2_slot7;
                            var4 = var1.height;
                            var1 = _closure2_slot1;
                            if (!(var7 !== var1)) {
                                _fun44345_ip = 254;
                                continue _fun44345
                            }
                        case 228:
                            var1 = 'row';
                            var2 = var7;
                            if (!(var1 === var8)) {
                                _fun44345_ip = 258;
                                continue _fun44345
                            }
                        case 239:
                            var3 = _closure2_slot2;
                            var1 = 'end';
                            var2 = var7;
                            if (!(var1 === var3)) {
                                _fun44345_ip = 258;
                                continue _fun44345
                            }
                        case 254:
                            var2 = 'right';
                        case 258:
                            var1 = _closure2_slot1;
                            var3 = 'top';
                            if (!(var3 !== var1)) {
                                _fun44345_ip = 296;
                                continue _fun44345
                            }
                        case 270:
                            var9 = 'column';
                            var1 = var3;
                            if (!(var9 === var8)) {
                                _fun44345_ip = 300;
                                continue _fun44345
                            }
                        case 281:
                            var10 = _closure2_slot2;
                            var9 = 'end';
                            var1 = var3;
                            if (!(var9 === var10)) {
                                _fun44345_ip = 300;
                                continue _fun44345
                            }
                        case 296:
                            var1 = 'bottom';
                        case 300:
                            if (!(var7 !== var2)) {
                                _fun44345_ip = 324;
                                continue _fun44345
                            }
                        case 304:
                            var7 = _closure2_slot7;
                            var9 = var7.width;
                            var7 = var0.x;
                            var10 = var9 - var7;
                            _fun44345_ip = 329;
                            continue _fun44345;
                        case 324:
                            var10 = var0.x;
                        case 329:
                            var3 = var3 === var1;
                            var0 = var0.y;
                            if (var3) {
                                _fun44345_ip = 347;
                                continue _fun44345
                            }
                        case 341:
                            var9 = var4 - var0;
                            _fun44345_ip = 350;
                            continue _fun44345;
                        case 347:
                            var9 = var0;
                        case 350:
                            var0 = _closure2_slot3;
                            if (!(var5 == var0)) {
                                _fun44345_ip = 394;
                                continue _fun44345
                            }
                        case 358:
                            var7 = 'column';
                            var5 = 0;
                            if (!(var7 === var8)) {
                                _fun44345_ip = 371;
                                continue _fun44345
                            }
                        case 368:
                            var5 = 10;
                        case 371:
                            var5 = var10 + var5;
                            var7 = 'row';
                            var0 = 0;
                            if (!(var7 === var8)) {
                                _fun44345_ip = 388;
                                continue _fun44345
                            }
                        case 385:
                            var0 = 10;
                        case 388:
                            var0 = var9 + var0;
                            _fun44345_ip = 416;
                            continue _fun44345;
                        case 394:
                            var7 = _closure2_slot3;
                            var8 = var7.x;
                            var5 = var10 + var8;
                            var7 = var7.y;
                            var0 = var9 + var7;
                        case 416:
                            var4 = var4 - var0;
                            var6 = _closure2_slot6;
                            if (var3) {
                                _fun44345_ip = 434;
                                continue _fun44345
                            }
                        case 427:
                            var3 = var6.top;
                            _fun44345_ip = 439;
                            continue _fun44345;
                        case 434:
                            var3 = var6.bottom;
                        case 439:
                            var4 = var4 - var3;
                            var3 = 12;
                            var4 = var4 - var3;
                            var3 = {};
                            var3[var2] = var5;
                            var3[var1] = var0;
                            var0 = 'maxHeight';
                            var3[var0] = var4;
                            var0 = new Array(3);
                            var0[0] = var3;
                            var0[1] = var2;
                            var0[2] = var1;
                            return var0;
                    }
                };
                var9 = var0.bind(var3)();
                var8 = _closure1_slot3;
                var0 = 3;
                var0 = var8.bind(var3)(var9, var0);
                var9 = var0[var5];
                var19 = var0[var2];
                _closure2_slot16 = var19;
                var8 = var0[var1];
                _closure2_slot17 = var8;
                var0 = var4[var16];
                var2 = var21.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: N, environment: var10
                    _fun44346: for (var _fun44346_ip = 0;;) switch (_fun44346_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot11;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var0.opacity = var1;
                            var1 = _closure2_slot5;
                            if (var1) {
                                _fun44346_ip = 500;
                                continue _fun44346
                            }
                        case 32:
                            var2 = {};
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var7 = 8;
                            var1 = var1[var7];
                            var9 = undefined;
                            var14 = var4.bind(var9)(var1);
                            var13 = var14.interpolate;
                            var4 = _closure2_slot11;
                            var1 = var4.get;
                            var8 = var1.bind(var4)();
                            var6 = _closure2_slot16;
                            var10 = 1;
                            var1 = 'left';
                            var4 = var10;
                            if (!(var1 === var6)) {
                                _fun44346_ip = 102;
                                continue _fun44346
                            }
                        case 96:
                            var4 = -1;
                        case 102:
                            var6 = _closure2_slot12;
                            var1 = var6.get;
                            var1 = var1.bind(var6)();
                            var1 = var1.width;
                            var1 = var4 * var1;
                            var6 = new Array(2);
                            var12 = 4;
                            var1 = var1 / var12;
                            var6[0] = var1;
                            var1 = _closure2_slot4;
                            var11 = null;
                            var4 = var11 == var1;
                            var1 = undefined;
                            if (var4) {
                                _fun44346_ip = 181;
                                continue _fun44346
                            }
                        case 154:
                            var15 = _closure2_slot4;
                            var4 = var15.get;
                            var4 = var4.bind(var15)();
                            var15 = var11 == var4;
                            var1 = undefined;
                            if (var15) {
                                _fun44346_ip = 181;
                                continue _fun44346
                            }
                        case 176:
                            var1 = var4.x;
                        case 181:
                            var15 = var11 != var1;
                            var1 = 0;
                            if (!var15) {
                                _fun44346_ip = 220;
                                continue _fun44346
                            }
                        case 190:
                            var16 = _closure2_slot4;
                            var15 = var16.get;
                            var16 = var15.bind(var16)();
                            var17 = var11 == var16;
                            var15 = undefined;
                            if (var17) {
                                _fun44346_ip = 217;
                                continue _fun44346
                            }
                        case 212:
                            var15 = var16.x;
                        case 217:
                            var1 = var15;
                        case 220:
                            var6[1] = var1;
                            var1 = [0, 1];
                            var1 = var13.bind(var14)(var8, var1, var6);
                            var2.translateX = var1;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var2 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var8 = var6.bind(var9)(var5);
                            var7 = var8.interpolate;
                            var6 = _closure2_slot11;
                            var5 = var6.get;
                            var6 = var5.bind(var6)();
                            var13 = _closure2_slot17;
                            var5 = 'top';
                            if (!(var5 === var13)) {
                                _fun44346_ip = 310;
                                continue _fun44346
                            }
                        case 304:
                            var10 = -1;
                        case 310:
                            var13 = _closure2_slot12;
                            var5 = var13.get;
                            var5 = var5.bind(var13)();
                            var5 = var5.height;
                            var10 = var10 * var5;
                            var5 = new Array(2);
                            var10 = var10 / var12;
                            var5[0] = var10;
                            var10 = _closure2_slot4;
                            var12 = var11 == var10;
                            var10 = undefined;
                            if (var12) {
                                _fun44346_ip = 384;
                                continue _fun44346
                            }
                        case 357:
                            var13 = _closure2_slot4;
                            var12 = var13.get;
                            var12 = var12.bind(var13)();
                            var13 = var11 == var12;
                            var10 = undefined;
                            if (var13) {
                                _fun44346_ip = 384;
                                continue _fun44346
                            }
                        case 379:
                            var10 = var12.y;
                        case 384:
                            var10 = var11 != var10;
                            var4 = 0;
                            if (!var10) {
                                _fun44346_ip = 423;
                                continue _fun44346
                            }
                        case 393:
                            var12 = _closure2_slot4;
                            var10 = var12.get;
                            var10 = var10.bind(var12)();
                            var11 = var11 == var10;
                            var9 = undefined;
                            if (var11) {
                                _fun44346_ip = 420;
                                continue _fun44346
                            }
                        case 415:
                            var9 = var10.y;
                        case 420:
                            var4 = var9;
                        case 423:
                            var5[1] = var4;
                            var4 = [0, 1];
                            var4 = var7.bind(var8)(var6, var4, var5);
                            var2.translateY = var4;
                            var1[1] = var2;
                            var2 = {};
                            var4 = _closure2_slot11;
                            var3 = var4.get;
                            var4 = var3.bind(var4)();
                            var3 = 2;
                            var4 = var4 / var3;
                            var3 = 0.5;
                            var3 = var4 + var3;
                            var2.scale = var3;
                            var1[2] = var2;
                            _fun44346_ip = 504;
                            continue _fun44346;
                        case 500:
                            var1 = new Array(0);
                        case 504:
                            var0.transform = var1;
                            return var0;
                    }
                };
                var5 = {};
                var5.visible = var22;
                var5.useReducedMotion = var20;
                var20 = var4[var16];
                var20 = var21.bind(var3)(var20);
                var20 = var20.interpolate;
                var5.interpolate = var20;
                var5.dirX = var19;
                var5.size = var18;
                var5.offsetAnimated = var17;
                var5.dirY = var8;
                var0.__closure = var5;
                var5 = 7884133597410.0;
                var0.__workletHash = var5;
                var5 = _closure1_slot16;
                var0.__initData = var5;
                var8 = var1.bind(var2)(var0);
                var2 = _closure1_slot7;
                var5 = _closure1_slot1;
                var0 = 18;
                var0 = var4[var0];
                var1 = var5.bind(var3)(var0);
                var0 = {
                    'style': null,
                    'accessibilityViewIsModal': true,
                    'importantForAccessibility': 'yes'
                };
                var18 = var6.backdrop;
                var17 = new Array(1);
                var17[0] = var18;
                var0.style = var17;
                var0.onTouchDown = var14;
                var0.onAccessibilityEscape = var14;
                var4 = var4[var16];
                var4 = var5.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var16 = 'list';
                var4.accessibilityRole = var16;
                var16 = var6.menu;
                var6 = new Array(5);
                var6[0] = var16;
                var6[1] = var12;
                var6[2] = var9;
                var6[3] = var8;
                var6[4] = var7;
                var4.style = var6;
                var6 = function(arg0) { // Original name: onLayout, environment: var10
                    var3 = arg0;
                    var2 = _closure2_slot12;
                    var1 = var2.set;
                    var0 = {};
                    var4 = var3.nativeEvent;
                    var4 = var4.layout;
                    var4 = var4.width;
                    var0.width = var4;
                    var3 = var3.nativeEvent;
                    var3 = var3.layout;
                    var3 = var3.height;
                    var0.height = var3;
                    var0 = var1.bind(var2)(var0);
                    var3 = _closure2_slot11;
                    var2 = var3.set;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var0 = 19;
                    var4 = var12[var0];
                    var0 = undefined;
                    var8 = var11.bind(var0)(var4);
                    var7 = var8.withSpring;
                    var15 = _closure1_slot8;
                    var5 = function() { // Original name: n, environment: var4
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 8;
                        var0 = var1[var0];
                        var1 = undefined;
                        var3 = var2.bind(var1)(var0);
                        var2 = var3.runOnJS;
                        var0 = _closure2_slot13;
                        var0 = var2.bind(var3)(var0);
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var4 = {};
                    var10 = 8;
                    var10 = var12[var10];
                    var10 = var11.bind(var0)(var10);
                    var10 = var10.runOnJS;
                    var4.runOnJS = var10;
                    var9 = _closure2_slot13;
                    var4.openMenuCallback = var9;
                    var5.__closure = var4;
                    var4 = 14966618105405.0;
                    var5.__workletHash = var4;
                    var1 = _closure1_slot14;
                    var5.__initData = var1;
                    var16 = 1;
                    var14 = 'respect-motion-settings';
                    var17 = var8;
                    var13 = var5;
                    var1 = var17[var7](var16, var15, var14, var13, var12);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.onLayout = var6;
                var7 = _closure1_slot5;
                var6 = {};
                var8 = _closure1_slot11;
                var9 = var8.Provider;
                var8 = {};
                var12 = {};
                var12.menuClose = var15;
                var12.menuDismiss = var14;
                var8.value = var12;
                var11 = _closure1_slot4;
                var12 = var11.Children;
                var11 = var12.map;
                var10 = function(arg0, arg1) { // Environment: var10
                    _fun44349: for (var _fun44349_ip = 0;;) switch (_fun44349_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = 0;
                            var1 = arg1;
                            var0 = var4;
                            if (!(var2 === var1)) {
                                _fun44349_ip = 68;
                                continue _fun44349
                            }
                        case 15:
                            var3 = _closure1_slot4;
                            var2 = var3.isValidElement;
                            var2 = var2.bind(var3)(var4);
                            var0 = var4;
                            if (!var2) {
                                _fun44349_ip = 68;
                                continue _fun44349
                            }
                        case 39:
                            var3 = _closure1_slot4;
                            var2 = var3.cloneElement;
                            var1 = {};
                            var5 = _closure2_slot8;
                            var1.ref = var5;
                            var0 = var2.bind(var3)(var4, var1);
                        case 68:
                            return var0;
                    }
                };
                var10 = var11.bind(var12)(var13, var10);
                var8.children = var10;
                var8 = var2.bind(var3)(var9, var8);
                var6.children = var8;
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.Menu = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 4846, 1297, 671, 3679, 3124, 1568, 1464, 478, 3119, 1234, 4847, 4056, 4848, 4849, 4040, 2]);