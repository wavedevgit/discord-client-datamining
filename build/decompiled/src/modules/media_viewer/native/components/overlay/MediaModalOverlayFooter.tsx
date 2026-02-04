// modules/media_viewer/native/components/overlay/MediaModalOverlayFooter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {};
    var9 = 'hidden';
    var8.overflow = var9;
    var8.backgroundColor = var0;
    var3.drawerContainer = var8;
    var8 = {};
    var9 = 40;
    var8.width = var9;
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.PRIMARY_600;
    var8.backgroundColor = var9;
    var3.drawerHeaderTab = var8;
    var8 = {};
    var8.backgroundColor = var0;
    var3.drawerHeader = var8;
    var8 = {};
    var9 = 6;
    var8.marginLeft = var9;
    var3.messagePreviewContainer = var8;
    var8 = {};
    var9 = 8;
    var8.paddingTop = var9;
    var3.thumbnailsContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function clamp_MediaModalOverlayFooterTsx1(value,min,max){return Math.max(Math.min(value,max),min);}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            var0 = global;
            var3 = var0.Math;
            var2 = var3.max;
            var5 = var0.Math;
            var4 = var5.min;
            var1 = arg0;
            var0 = arg2;
            var1 = var4.bind(var5)(var1, var0);
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 10219548303807.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot9;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function MediaModalOverlayFooterTsx2(){const{animationState,NONE,isCollapsed}=this.__closure;animationState.set(NONE);isCollapsed.set(false);}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function MediaModalOverlayFooterTsx3(){const{animationState,NONE,isCollapsed}=this.__closure;animationState.set(NONE);isCollapsed.set(true);}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = "function MediaModalOverlayFooterTsx4(){const{minFooterHeight,animationState,DRAWER_PANNING,animationDriver,COLLAPSED,interpolate,EXPANDED,EXPANDED_MORE,expandedHeight,MAX_DRAWER_VERTICAL_DRAG}=this.__closure;return{height:minFooterHeight>0&&(animationState.get()===DRAWER_PANNING||animationDriver.get()!==COLLAPSED)?interpolate(animationDriver.get(),[COLLAPSED,EXPANDED,EXPANDED_MORE],[minFooterHeight,Math.max(expandedHeight,minFooterHeight),Math.max(expandedHeight,minFooterHeight)+MAX_DRAWER_VERTICAL_DRAG],'clamp'):undefined,justifyContent:'flex-start'};}";
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = "function MediaModalOverlayFooterTsx5(){const{interpolate,animationDriver,COLLAPSED,EXPANDED,thumbnailsElementHeight}=this.__closure;return{opacity:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[1,0],'clamp'),height:interpolate(animationDriver.get(),[EXPANDED,COLLAPSED],[0,thumbnailsElementHeight],'clamp')};}";
    var3.code = var6;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = "function MediaModalOverlayFooterTsx6(){const{interpolate,animationDriver,COLLAPSED,EXPANDED}=this.__closure;return{height:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[0,24],'clamp')};}";
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = 'function MediaModalOverlayFooterTsx7(){const{r,g,b,interpolate,animationDriver,COLLAPSED,EXPANDED,a,DISMISSED}=this.__closure;return{backgroundColor:"rgba("+r+", "+g+", "+b+", "+interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[a,1],\'clamp\')+")",paddingVertical:interpolate(animationDriver.get(),[COLLAPSED,EXPANDED],[8,0],\'clamp\'),transform:[{translateY:interpolate(animationDriver.get(),[DISMISSED,COLLAPSED],[100,0],\'clamp\')}]};}';
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = 'function MediaModalOverlayFooterTsx8(){const{runOnJS,onFullViewToggled}=this.__closure;runOnJS(onFullViewToggled)();}';
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = {};
    var6 = "function MediaModalOverlayFooterTsx9(){const{full,animationDriver,withTiming,DISMISSED,STANDARD_EASING,COLLAPSED,runOnJS,onFullViewToggled}=this.__closure;if(!full){animationDriver.set(withTiming(DISMISSED,{duration:350,easing:STANDARD_EASING},'respect-motion-settings',function(){animationDriver.set(COLLAPSED);}));}else{runOnJS(onFullViewToggled)();}}";
    var3.code = var6;
    var _closure1_slot18 = var3;
    var3 = {};
    var6 = 'function MediaModalOverlayFooterTsx10(){const{animationDriver,COLLAPSED}=this.__closure;animationDriver.set(COLLAPSED);}';
    var3.code = var6;
    var _closure1_slot19 = var3;
    var3 = {};
    var6 = "function MediaModalOverlayFooterTsx11(){const{animationDriver,COLLAPSE_DRAWER_ON_RELEASE,runOnJS,setFull,isCollapsed,COLLAPSED,animationState,withDelay,withTiming,NONE,STANDARD_EASING,EXPANDED}=this.__closure;if(animationDriver.get()<COLLAPSE_DRAWER_ON_RELEASE){runOnJS(setFull)(false);isCollapsed.set(true);if(animationDriver.get()===COLLAPSED){animationState.set(withDelay(150,withTiming(NONE,{duration:0})));}else{animationDriver.set(withTiming(COLLAPSED,{duration:150,easing:STANDARD_EASING},'respect-motion-settings',function(){animationState.set(NONE);}));}}else{runOnJS(setFull)(true);animationDriver.set(withTiming(EXPANDED,{duration:150,easing:STANDARD_EASING},'respect-motion-settings',function(){isCollapsed.set(false);animationState.set(NONE);}));}}";
    var3.code = var6;
    var _closure1_slot20 = var3;
    var3 = {};
    var6 = 'function MediaModalOverlayFooterTsx12({translationY:translationY}){const{animationState,DRAWER_PANNING,clamp,expandedHeight,thumbnailsElementHeight,collapsedHeight,COLLAPSED,EXPANDED,animationDriver,COLLAPSE_DRAWER_DURING_DRAG,runOnJS,setFull,DRAWER_VERTICAL_DRAG_RESISTANCE,MAX_DRAWER_VERTICAL_DRAG,EXPANDED_MORE}=this.__closure;animationState.set(DRAWER_PANNING);if(translationY>0){const animValue=clamp(1-translationY/Math.abs(expandedHeight-(thumbnailsElementHeight+collapsedHeight)),COLLAPSED,EXPANDED);animationDriver.set(animValue);if(animValue<COLLAPSE_DRAWER_DURING_DRAG){runOnJS(setFull)(false);}}else{const scrollAmount=clamp(-translationY/DRAWER_VERTICAL_DRAG_RESISTANCE,0,MAX_DRAWER_VERTICAL_DRAG);animationDriver.set(EXPANDED+(EXPANDED_MORE-EXPANDED)*scrollAmount/MAX_DRAWER_VERTICAL_DRAG);}}';
    var3.code = var6;
    var _closure1_slot21 = var3;
    var3 = {};
    var6 = 'function MediaModalOverlayFooterTsx13(){const{animationState,NONE}=this.__closure;animationState.set(NONE);}';
    var3.code = var6;
    var _closure1_slot22 = var3;
    var3 = {};
    var6 = 'function MediaModalOverlayFooterTsx14(){const{isCollapsed,animationState,NONE}=this.__closure;isCollapsed.set(false);animationState.set(NONE);}';
    var3.code = var6;
    var _closure1_slot23 = var3;
    var3 = {};
    var6 = 'function MediaModalOverlayFooterTsx15(){const{overlayEnabled,animationDriver}=this.__closure;return[overlayEnabled.get(),animationDriver.get()];}';
    var3.code = var6;
    var _closure1_slot24 = var3;
    var3 = {};
    var6 = 'function MediaModalOverlayFooterTsx16([overlayEnabledValue,animationDriverValue]){const{DISMISSED_HIDE_OVERLAY,overlayEnabled}=this.__closure;if(overlayEnabledValue&&animationDriverValue<DISMISSED_HIDE_OVERLAY){overlayEnabled.set(false);}}';
    var3.code = var6;
    var _closure1_slot25 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_viewer/native/components/overlay/MediaModalOverlayFooter.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73364: for (var _fun73364_ip = 0;;) switch (_fun73364_ip) {
            case 0:
                var32 = arg0;
                var11 = var32.sliderElement;
                var13 = var32.onFullViewToggled;
                var _closure2_slot0 = var13;
                var34 = var32.overlayEnabled;
                var _closure2_slot1 = var34;
                var20 = var32.syncer;
                var1 = var20.sources;
                var1 = var1.length;
                var9 = 1;
                var14 = var1 > var9;
                var5 = 20;
                if (!var14) {
                    _fun73364_ip = 64;
                    continue _fun73364
                }
            case 61:
                var5 = 60;
            case 64:
                var _closure2_slot2 = var5;
                var6 = 0;
                var2 = 0;
                if (!var14) {
                    _fun73364_ip = 78;
                    continue _fun73364
                }
            case 75:
                var2 = 60;
            case 78:
                var _closure2_slot3 = var2;
                var35 = _closure1_slot0;
                var33 = _closure1_slot2;
                var1 = 5;
                var4 = var33[var1];
                var3 = undefined;
                var7 = var35.bind(var3)(var4);
                var4 = var7.useSharedValue;
                var36 = true;
                var12 = var4.bind(var7)(var36);
                var _closure2_slot4 = var12;
                var4 = var33[var1];
                var7 = var35.bind(var3)(var4);
                var4 = var7.useSharedValue;
                var37 = -1;
                var15 = var4.bind(var7)(var37);
                var _closure2_slot5 = var15;
                var4 = _closure1_slot4;
                var8 = var4.useState;
                var7 = false;
                var7 = var8.bind(var4)(var7);
                var25 = _closure1_slot3;
                var10 = 2;
                var7 = var25.bind(var3)(var7, var10);
                var28 = var7[var6];
                var _closure2_slot6 = var28;
                var7 = var7[var9];
                var _closure2_slot7 = var7;
                var7 = var4.useState;
                var7 = var7.bind(var4)(var6);
                var7 = var25.bind(var3)(var7, var10);
                var27 = var7[var6];
                var _closure2_slot8 = var27;
                var7 = var7[var9];
                var _closure2_slot9 = var7;
                var8 = var4.useState;
                var8 = var8.bind(var4)(var6);
                var8 = var25.bind(var3)(var8, var10);
                var26 = var8[var6];
                var _closure2_slot10 = var26;
                var8 = var8[var9];
                var _closure2_slot11 = var8;
                var16 = var4.useState;
                var16 = var16.bind(var4)(var6);
                var16 = var25.bind(var3)(var16, var10);
                var18 = var16[var6];
                var _closure2_slot12 = var18;
                var16 = var16[var9];
                var _closure2_slot13 = var16;
                var21 = var4.useEffect;
                var19 = new Array(2);
                var19[0] = var18;
                var19[1] = var26;
                var17 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.setMesssagePreviewHeight;
                    var1 = {};
                    var5 = _closure2_slot12;
                    var1.collapsedHeight = var5;
                    var4 = _closure2_slot10;
                    var1.expandedHeight = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var17 = var21.bind(var4)(var17, var19);
                var19 = var4.useEffect;
                var17 = new Array(2);
                var17[0] = var28;
                var17[1] = var13;
                var13 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot6;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var13 = var19.bind(var4)(var13, var17);
                var13 = var33[var1];
                var17 = var35.bind(var3)(var13);
                var13 = var17.useSharedValue;
                var19 = var13.bind(var17)(var6);
                var _closure2_slot14 = var19;
                var21 = var4.useCallback;
                var17 = new Array(3);
                var17[0] = var19;
                var17[1] = var15;
                var17[2] = var12;
                var13 = function() { // Environment: var0
                    var1 = _closure2_slot5;
                    var0 = var1.set;
                    var8 = 1;
                    var0 = var0.bind(var1)(var8);
                    var2 = _closure2_slot7;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var3 = _closure2_slot14;
                    var2 = var3.set;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 7;
                    var4 = var11[var4];
                    var7 = var9.bind(var0)(var4);
                    var6 = var7.withTiming;
                    var5 = {};
                    var4 = 250;
                    var5.duration = var4;
                    var4 = 8;
                    var4 = var11[var4];
                    var4 = var9.bind(var0)(var4);
                    var4 = var4.STANDARD_EASING;
                    var5.easing = var4;
                    var4 = function() {
                        var3 = _closure2_slot5;
                        var2 = var3.set;
                        var1 = -1;
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure2_slot4;
                        var1 = var2.set;
                        var0 = false;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var9 = {};
                    var11 = _closure2_slot5;
                    var9.animationState = var11;
                    var11 = -1;
                    var9.NONE = var11;
                    var10 = _closure2_slot4;
                    var9.isCollapsed = var10;
                    var4.__closure = var9;
                    var9 = 8443967716862.0;
                    var4.__workletHash = var9;
                    var1 = _closure1_slot11;
                    var4.__initData = var1;
                    var13 = 'respect-motion-settings';
                    var16 = var7;
                    var15 = var8;
                    var14 = var5;
                    var12 = var4;
                    var1 = var16[var6](var15, var14, var13, var12, var11);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var23 = var21.bind(var4)(var13, var17);
                var _closure2_slot15 = var23;
                var21 = var4.useCallback;
                var17 = new Array(3);
                var17[0] = var19;
                var17[1] = var15;
                var17[2] = var12;
                var13 = function() { // Environment: var0
                    var1 = _closure2_slot5;
                    var0 = var1.set;
                    var8 = 0;
                    var0 = var0.bind(var1)(var8);
                    var2 = _closure2_slot7;
                    var0 = undefined;
                    var1 = false;
                    var1 = var2.bind(var0)(var1);
                    var3 = _closure2_slot14;
                    var2 = var3.set;
                    var9 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 7;
                    var4 = var11[var4];
                    var7 = var9.bind(var0)(var4);
                    var6 = var7.withTiming;
                    var5 = {};
                    var4 = 250;
                    var5.duration = var4;
                    var4 = 8;
                    var4 = var11[var4];
                    var4 = var9.bind(var0)(var4);
                    var4 = var4.STANDARD_EASING;
                    var5.easing = var4;
                    var4 = function() {
                        var3 = _closure2_slot5;
                        var2 = var3.set;
                        var1 = -1;
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure2_slot4;
                        var1 = var2.set;
                        var0 = true;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var9 = {};
                    var11 = _closure2_slot5;
                    var9.animationState = var11;
                    var11 = -1;
                    var9.NONE = var11;
                    var10 = _closure2_slot4;
                    var9.isCollapsed = var10;
                    var4.__closure = var9;
                    var9 = 12593758327764.0;
                    var4.__workletHash = var9;
                    var1 = _closure1_slot12;
                    var4.__initData = var1;
                    var13 = 'respect-motion-settings';
                    var16 = var7;
                    var15 = 0;
                    var14 = var5;
                    var12 = var4;
                    var1 = var16[var6](var15, var14, var13, var12, var11);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var13 = var21.bind(var4)(var13, var17);
                var _closure2_slot16 = var13;
                var21 = var4.useCallback;
                var17 = new Array(6);
                var17[0] = var15;
                var17[1] = var12;
                var17[2] = var26;
                var17[3] = var27;
                var17[4] = var23;
                var17[5] = var13;
                var13 = function() { // Environment: var0
                    _fun73371: for (var _fun73371_ip = 0;;) switch (_fun73371_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = -1;
                            if (!(var2 === var1)) {
                                _fun73371_ip = 95;
                                continue _fun73371
                            }
                        case 26:
                            var2 = _closure2_slot4;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun73371_ip = 54;
                                continue _fun73371
                            }
                        case 42:
                            var3 = _closure2_slot10;
                            var2 = _closure2_slot8;
                            var1 = var3 === var2;
                        case 54:
                            if (var1) {
                                _fun73371_ip = 95;
                                continue _fun73371
                            }
                        case 57:
                            var2 = _closure2_slot4;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun73371_ip = 85;
                                continue _fun73371
                            }
                        case 73:
                            var2 = _closure2_slot16;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            _fun73371_ip = 95;
                            continue _fun73371;
                        case 85:
                            var1 = _closure2_slot15;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 95:
                            var0 = undefined;
                            return var0;
                    }
                };
                var31 = var21.bind(var4)(var13, var17);
                var _closure2_slot17 = var31;
                var17 = var4.useCallback;
                var13 = new Array(1);
                var13[0] = var8;
                var8 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot11;
                    var1 = arg0;
                    var0 = 17;
                    var1 = var1 + var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var30 = var17.bind(var4)(var8, var13);
                var13 = var4.useCallback;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot9;
                    var1 = arg0;
                    var0 = 17;
                    var1 = var1 + var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var29 = var13.bind(var4)(var7, var8);
                var7 = var33[var1];
                var13 = var35.bind(var3)(var7);
                var8 = var13.useAnimatedStyle;
                var7 = function() {
                    _fun73374: for (var _fun73374_ip = 0;;) switch (_fun73374_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot12;
                            var4 = 0;
                            var3 = var1 > var4;
                            var5 = undefined;
                            var1 = undefined;
                            if (!var3) {
                                _fun73374_ip = 213;
                                continue _fun73374
                            }
                        case 25:
                            var6 = _closure2_slot5;
                            var3 = var6.get;
                            var6 = var3.bind(var6)();
                            var3 = 2;
                            if (!(var3 !== var6)) {
                                _fun73374_ip = 67;
                                continue _fun73374
                            }
                        case 45:
                            var6 = _closure2_slot14;
                            var3 = var6.get;
                            var3 = var3.bind(var6)();
                            var1 = undefined;
                            if (!(var4 !== var3)) {
                                _fun73374_ip = 213;
                                continue _fun73374
                            }
                        case 67:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 5;
                            var3 = var6[var3];
                            var7 = var4.bind(var5)(var3);
                            var6 = var7.interpolate;
                            var4 = _closure2_slot14;
                            var3 = var4.get;
                            var5 = var3.bind(var4)();
                            var3 = _closure2_slot12;
                            var4 = new Array(3);
                            var4[0] = var3;
                            var3 = global;
                            var11 = var3.Math;
                            var10 = var11.max;
                            var9 = _closure2_slot10;
                            var8 = _closure2_slot12;
                            var8 = var10.bind(var11)(var9, var8);
                            var4[1] = var8;
                            var9 = var3.Math;
                            var8 = var9.max;
                            var3 = _closure2_slot10;
                            var2 = _closure2_slot12;
                            var3 = var8.bind(var9)(var3, var2);
                            var2 = 40;
                            var2 = var3 + var2;
                            var4[2] = var2;
                            var14 = [0, 1, 2];
                            var12 = 'clamp';
                            var16 = var7;
                            var15 = var5;
                            var13 = var4;
                            var1 = var16[var6](var15, var14, var13, var12, var11);
                        case 213:
                            var0.height = var1;
                            var1 = 'flex-start';
                            var0.justifyContent = var1;
                            return var0;
                    }
                };
                var17 = {};
                var17.minFooterHeight = var18;
                var17.animationState = var15;
                var17.DRAWER_PANNING = var10;
                var17.animationDriver = var19;
                var17.COLLAPSED = var6;
                var18 = var33[var1];
                var18 = var35.bind(var3)(var18);
                var18 = var18.interpolate;
                var17.interpolate = var18;
                var17.EXPANDED = var9;
                var17.EXPANDED_MORE = var10;
                var17.expandedHeight = var26;
                var18 = 40;
                var17.MAX_DRAWER_VERTICAL_DRAG = var18;
                var7.__closure = var17;
                var17 = 10727625692479.0;
                var7.__workletHash = var17;
                var17 = _closure1_slot13;
                var7.__initData = var17;
                var13 = var8.bind(var13)(var7);
                var7 = var33[var1];
                var17 = var35.bind(var3)(var7);
                var8 = var17.useAnimatedStyle;
                var7 = function() {
                    var0 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 5;
                    var1 = var5[var2];
                    var3 = undefined;
                    var11 = var4.bind(var3)(var1);
                    var10 = var11.interpolate;
                    var7 = _closure2_slot14;
                    var6 = var7.get;
                    var15 = var6.bind(var7)();
                    var14 = [0, 1];
                    var13 = [1, 0];
                    var6 = 'clamp';
                    var16 = var11;
                    var12 = var6;
                    var7 = var16[var10](var15, var14, var13, var12, var11);
                    var0.opacity = var7;
                    var2 = var5[var2];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.interpolate;
                    var3 = _closure2_slot14;
                    var2 = var3.get;
                    var15 = var2.bind(var3)();
                    var1 = _closure2_slot3;
                    var2 = [0];
                    var2[1] = var1;
                    var14 = [1, 0];
                    var16 = var5;
                    var13 = var2;
                    var1 = var16[var4](var15, var14, var13, var12, var11);
                    var0.height = var1;
                    return var0;
                };
                var18 = {};
                var21 = var33[var1];
                var21 = var35.bind(var3)(var21);
                var21 = var21.interpolate;
                var18.interpolate = var21;
                var18.animationDriver = var19;
                var18.COLLAPSED = var6;
                var18.EXPANDED = var9;
                var18.thumbnailsElementHeight = var2;
                var7.__closure = var18;
                var18 = 9896169174287.0;
                var7.__workletHash = var18;
                var18 = _closure1_slot14;
                var7.__initData = var18;
                var23 = var8.bind(var17)(var7);
                var8 = var4.useCallback;
                var7 = new Array(4);
                var7[0] = var16;
                var7[1] = var5;
                var7[2] = var12;
                var7[3] = var15;
                var5 = function(arg0) { // Environment: var0
                    _fun73376: for (var _fun73376_ip = 0;;) switch (_fun73376_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var2 = var0.height;
                            var1 = _closure2_slot2;
                            var1 = var2 > var1;
                            if (!var1) {
                                _fun73376_ip = 47;
                                continue _fun73376
                            }
                        case 34:
                            var4 = _closure2_slot4;
                            var3 = var4.get;
                            var1 = var3.bind(var4)();
                        case 47:
                            if (!var1) {
                                _fun73376_ip = 73;
                                continue _fun73376
                            }
                        case 50:
                            var4 = _closure2_slot5;
                            var3 = var4.get;
                            var4 = var3.bind(var4)();
                            var3 = -1;
                            var1 = var4 === var3;
                        case 73:
                            if (!var1) {
                                _fun73376_ip = 87;
                                continue _fun73376
                            }
                        case 76:
                            var1 = _closure2_slot13;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 87:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = var8.bind(var4)(var5, var7);
                var5 = var33[var1];
                var8 = var35.bind(var3)(var5);
                var7 = var8.useAnimatedStyle;
                var5 = function() {
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.interpolate;
                    var2 = _closure2_slot14;
                    var1 = var2.get;
                    var10 = var1.bind(var2)();
                    var9 = [0, 1];
                    var8 = [0, 24];
                    var7 = 'clamp';
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var0.height = var1;
                    return var0;
                };
                var17 = {};
                var18 = var33[var1];
                var18 = var35.bind(var3)(var18);
                var18 = var18.interpolate;
                var17.interpolate = var18;
                var17.animationDriver = var19;
                var17.COLLAPSED = var6;
                var17.EXPANDED = var9;
                var5.__closure = var17;
                var17 = 13288648164744.0;
                var5.__workletHash = var17;
                var17 = _closure1_slot15;
                var5.__initData = var17;
                var17 = var7.bind(var8)(var5);
                var18 = _closure1_slot1;
                var5 = 9;
                var5 = var33[var5];
                var5 = var18.bind(var3)(var5);
                var5 = var5.bind(var3)();
                var7 = var5.mediaModalFooterBackgroundColorRgba;
                var41 = var7.r;
                var _closure2_slot18 = var41;
                var40 = var7.g;
                var _closure2_slot19 = var40;
                var39 = var7.b;
                var _closure2_slot20 = var39;
                var38 = var7.a;
                var _closure2_slot21 = var38;
                var8 = var5.MediaModalFooterUnderlay;
                var5 = var33[var1];
                var21 = var35.bind(var3)(var5);
                var7 = var21.useAnimatedStyle;
                var5 = function() {
                    var0 = {};
                    var14 = _closure2_slot18;
                    var13 = _closure2_slot19;
                    var18 = _closure2_slot20;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var2 = var6[var3];
                    var4 = undefined;
                    var11 = var5.bind(var4)(var2);
                    var10 = var11.interpolate;
                    var7 = _closure2_slot14;
                    var2 = var7.get;
                    var22 = var2.bind(var7)();
                    var2 = _closure2_slot21;
                    var8 = new Array(2);
                    var8[0] = var2;
                    var2 = 1;
                    var8[1] = var2;
                    var21 = [0, 1];
                    var7 = 'clamp';
                    var23 = var11;
                    var20 = var8;
                    var19 = var7;
                    var16 = var23[var10](var22, var21, var20, var19, var18);
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var10 = var2.concat;
                    var23 = 'rgba(';
                    var8 = ', ';
                    var15 = ')';
                    var22 = var14;
                    var21 = var8;
                    var20 = var13;
                    var19 = var8;
                    var17 = var8;
                    var2 = var23[var10](var22, var21, var20, var19, var18, var17, var16, var15, var14);
                    var0.backgroundColor = var2;
                    var2 = var6[var3];
                    var11 = var5.bind(var4)(var2);
                    var10 = var11.interpolate;
                    var8 = _closure2_slot14;
                    var2 = var8.get;
                    var22 = var2.bind(var8)();
                    var21 = [0, 1];
                    var20 = [8, 0];
                    var23 = var11;
                    var19 = var7;
                    var2 = var23[var10](var22, var21, var20, var19, var18);
                    var0.paddingVertical = var2;
                    var2 = {};
                    var3 = var6[var3];
                    var6 = var5.bind(var4)(var3);
                    var5 = var6.interpolate;
                    var3 = _closure2_slot14;
                    var1 = var3.get;
                    var22 = var1.bind(var3)();
                    var3 = new Array(2);
                    var1 = -1;
                    var3[0] = var1;
                    var1 = 0;
                    var3[1] = var1;
                    var20 = [100, 0];
                    var23 = var6;
                    var21 = var3;
                    var1 = var23[var5](var22, var21, var20, var19, var18);
                    var2.translateY = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var24 = {};
                var24.r = var41;
                var24.g = var40;
                var24.b = var39;
                var39 = var33[var1];
                var39 = var35.bind(var3)(var39);
                var39 = var39.interpolate;
                var24.interpolate = var39;
                var24.animationDriver = var19;
                var24.COLLAPSED = var6;
                var24.EXPANDED = var9;
                var24.a = var38;
                var24.DISMISSED = var37;
                var5.__closure = var24;
                var24 = 1645059598385.0;
                var5.__workletHash = var24;
                var24 = _closure1_slot16;
                var5.__initData = var24;
                var7 = var7.bind(var21)(var5);
                var5 = var4.useRef;
                var24 = var5.bind(var4)(var3);
                var _closure2_slot22 = var24;
                var5 = var4.useRef;
                var21 = var5.bind(var4)(var3);
                var _closure2_slot23 = var21;
                var5 = var4.useState;
                var5 = var5.bind(var4)(var36);
                var5 = var25.bind(var3)(var5, var10);
                var6 = var5[var6];
                var _closure2_slot24 = var6;
                var25 = var5[var9];
                var10 = var4.useMemo;
                var9 = new Array(4);
                var9[0] = var27;
                var9[1] = var26;
                var9[2] = var28;
                var9[3] = var31;
                var5 = function() { // Environment: var0
                    _fun73379: for (var _fun73379_ip = 0;;) switch (_fun73379_ip) {
                        case 0:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 10;
                            var1 = var8[var0];
                            var6 = undefined;
                            var1 = var7.bind(var6)(var1);
                            var2 = var1.Gesture;
                            var1 = var2.Fling;
                            var2 = var1.bind(var2)();
                            var1 = var2.direction;
                            var0 = var8[var0];
                            var0 = var7.bind(var6)(var0);
                            var0 = var0.Directions;
                            var0 = var0.UP;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.onStart;
                            var0 = function() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.runOnJS;
                                var1 = _closure2_slot17;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var5 = {};
                            var3 = 5;
                            var3 = var8[var3];
                            var3 = var7.bind(var6)(var3);
                            var3 = var3.runOnJS;
                            var5.runOnJS = var3;
                            var6 = _closure2_slot17;
                            var5.onFullViewToggled = var6;
                            var0.__closure = var5;
                            var5 = 1612404502942.0;
                            var0.__workletHash = var5;
                            var4 = _closure1_slot17;
                            var0.__initData = var4;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.withRef;
                            var0 = _closure2_slot22;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.enabled;
                            var0 = _closure2_slot6;
                            var0 = !var0;
                            if (!var0) {
                                _fun73379_ip = 202;
                                continue _fun73379
                            }
                        case 190:
                            var4 = _closure2_slot10;
                            var3 = _closure2_slot8;
                            var0 = var4 > var3;
                        case 202:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var5 = var10.bind(var4)(var5, var9);
                var _closure2_slot25 = var5;
                var10 = var4.useMemo;
                var9 = new Array(4);
                var9[0] = var19;
                var9[1] = var28;
                var9[2] = var31;
                var9[3] = var6;
                var6 = function() { // Environment: var0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var0 = 10;
                    var1 = var9[var0];
                    var7 = undefined;
                    var1 = var8.bind(var7)(var1);
                    var2 = var1.Gesture;
                    var1 = var2.Fling;
                    var2 = var1.bind(var2)();
                    var1 = var2.direction;
                    var0 = var9[var0];
                    var0 = var8.bind(var7)(var0);
                    var0 = var0.Directions;
                    var0 = var0.DOWN;
                    var3 = var1.bind(var2)(var0);
                    var2 = var3.onStart;
                    var1 = function() {
                        _fun73382: for (var _fun73382_ip = 0;;) switch (_fun73382_ip) {
                            case 0:
                                var2 = _closure2_slot6;
                                if (var2) {
                                    _fun73382_ip = 178;
                                    continue _fun73382
                                }
                            case 16:
                                var4 = _closure2_slot14;
                                var3 = var4.set;
                                var6 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var2 = 7;
                                var2 = var10[var2];
                                var5 = undefined;
                                var9 = var6.bind(var5)(var2);
                                var8 = var9.withTiming;
                                var7 = {};
                                var2 = 350;
                                var7.duration = var2;
                                var2 = 8;
                                var2 = var10[var2];
                                var2 = var6.bind(var5)(var2);
                                var2 = var2.STANDARD_EASING;
                                var7.easing = var2;
                                var6 = function() {
                                    var2 = _closure2_slot14;
                                    var1 = var2.set;
                                    var0 = 0;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var2 = {};
                                var5 = _closure2_slot14;
                                var2.animationDriver = var5;
                                var5 = 0;
                                var2.COLLAPSED = var5;
                                var6.__closure = var2;
                                var2 = 15839049590506.0;
                                var6.__workletHash = var2;
                                var2 = _closure1_slot19;
                                var6.__initData = var2;
                                var14 = -1;
                                var12 = 'respect-motion-settings';
                                var15 = var9;
                                var13 = var7;
                                var11 = var6;
                                var2 = var15[var8](var14, var13, var12, var11, var10);
                                var2 = var3.bind(var4)(var2);
                                _fun73382_ip = 218;
                                continue _fun73382;
                            case 178:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 5;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.runOnJS;
                                var0 = _closure2_slot17;
                                var0 = var2.bind(var3)(var0);
                                var0 = var0.bind(var1)();
                            case 218:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var5 = {};
                    var6 = _closure2_slot6;
                    var5.full = var6;
                    var6 = _closure2_slot14;
                    var5.animationDriver = var6;
                    var6 = 7;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.withTiming;
                    var5.withTiming = var6;
                    var6 = -1;
                    var5.DISMISSED = var6;
                    var6 = 8;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.STANDARD_EASING;
                    var5.STANDARD_EASING = var6;
                    var6 = 0;
                    var5.COLLAPSED = var6;
                    var6 = 5;
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.runOnJS;
                    var5.runOnJS = var6;
                    var6 = _closure2_slot17;
                    var5.onFullViewToggled = var6;
                    var1.__closure = var5;
                    var5 = 16686210274151.0;
                    var1.__workletHash = var5;
                    var4 = _closure1_slot18;
                    var1.__initData = var4;
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.withRef;
                    var1 = _closure2_slot23;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.enabled;
                    var0 = _closure2_slot24;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var10.bind(var4)(var6, var9);
                var _closure2_slot26 = var6;
                var10 = var4.useMemo;
                var9 = new Array(7);
                var9[0] = var19;
                var9[1] = var15;
                var9[2] = var27;
                var9[3] = var26;
                var9[4] = var28;
                var9[5] = var12;
                var9[6] = var2;
                var2 = function() { // Environment: var0
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 10;
                    var0 = var10[var5];
                    var8 = undefined;
                    var0 = var9.bind(var8)(var0);
                    var2 = var0.Gesture;
                    var0 = var2.Pan;
                    var2 = var0.bind(var2)();
                    var0 = var2.maxPointers;
                    var6 = 1;
                    var3 = var0.bind(var2)(var6);
                    var2 = var3.activeOffsetY;
                    var0 = new Array(2);
                    var7 = -10;
                    var0[0] = var7;
                    var0[1] = var5;
                    var5 = var2.bind(var3)(var0);
                    var3 = var5.onUpdate;
                    var2 = function arg0() {
                        _fun73385: for (var _fun73385_ip = 0;;) switch (_fun73385_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.translationY;
                                var4 = _closure2_slot5;
                                var2 = var4.set;
                                var1 = 2;
                                var1 = var2.bind(var4)(var1);
                                var6 = 0;
                                if (!(!(var3 > var6))) {
                                    _fun73385_ip = 98;
                                    continue _fun73385
                                }
                            case 35:
                                var4 = _closure1_slot10;
                                var2 = -var3;
                                var1 = 3;
                                var2 = var2 / var1;
                                var1 = undefined;
                                var7 = 40;
                                var1 = var4.bind(var1)(var2, var6, var7);
                                var4 = _closure2_slot14;
                                var2 = var4.set;
                                var5 = 1;
                                var1 = var5 * var1;
                                var1 = var1 / var7;
                                var1 = var5 + var1;
                                var1 = var2.bind(var4)(var1);
                                _fun73385_ip = 233;
                                continue _fun73385;
                            case 98:
                                var5 = _closure1_slot10;
                                var2 = global;
                                var7 = var2.Math;
                                var4 = var7.abs;
                                var8 = _closure2_slot10;
                                var9 = _closure2_slot3;
                                var2 = _closure2_slot8;
                                var2 = var9 + var2;
                                var2 = var8 - var2;
                                var2 = var4.bind(var7)(var2);
                                var2 = var3 / var2;
                                var4 = 1;
                                var3 = var4 - var2;
                                var2 = undefined;
                                var4 = var5.bind(var2)(var3, var6, var4);
                                var5 = _closure2_slot14;
                                var3 = var5.set;
                                var3 = var3.bind(var5)(var4);
                                var3 = 0.4;
                                if (!(var4 < var3)) {
                                    _fun73385_ip = 233;
                                    continue _fun73385
                                }
                            case 192:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 5;
                                var1 = var4[var1];
                                var3 = var3.bind(var2)(var1);
                                var1 = var3.runOnJS;
                                var0 = _closure2_slot7;
                                var1 = var1.bind(var3)(var0);
                                var0 = false;
                                var0 = var1.bind(var2)(var0);
                            case 233:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var12 = {};
                    var7 = _closure2_slot5;
                    var12.animationState = var7;
                    var13 = 2;
                    var12.DRAWER_PANNING = var13;
                    var7 = _closure1_slot10;
                    var12.clamp = var7;
                    var7 = _closure2_slot10;
                    var12.expandedHeight = var7;
                    var7 = _closure2_slot3;
                    var12.thumbnailsElementHeight = var7;
                    var7 = _closure2_slot8;
                    var12.collapsedHeight = var7;
                    var11 = 0;
                    var12.COLLAPSED = var11;
                    var12.EXPANDED = var6;
                    var7 = _closure2_slot14;
                    var12.animationDriver = var7;
                    var7 = 0.4;
                    var12.COLLAPSE_DRAWER_DURING_DRAG = var7;
                    var7 = 5;
                    var14 = var10[var7];
                    var14 = var9.bind(var8)(var14);
                    var14 = var14.runOnJS;
                    var12.runOnJS = var14;
                    var14 = _closure2_slot7;
                    var12.setFull = var14;
                    var14 = 3;
                    var12.DRAWER_VERTICAL_DRAG_RESISTANCE = var14;
                    var14 = 40;
                    var12.MAX_DRAWER_VERTICAL_DRAG = var14;
                    var12.EXPANDED_MORE = var13;
                    var2.__closure = var12;
                    var12 = 7012168718409.0;
                    var2.__workletHash = var12;
                    var12 = _closure1_slot21;
                    var2.__initData = var12;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.onEnd;
                    var1 = function() {
                        _fun73386: for (var _fun73386_ip = 0;;) switch (_fun73386_ip) {
                            case 0:
                                var3 = _closure2_slot14;
                                var0 = var3.get;
                                var3 = var0.bind(var3)();
                                var0 = 0.75;
                                if (!(!(var3 < var0))) {
                                    _fun73386_ip = 241;
                                    continue _fun73386
                                }
                            case 35:
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var3 = 5;
                                var3 = var11[var3];
                                var6 = undefined;
                                var5 = var10.bind(var6)(var3);
                                var4 = var5.runOnJS;
                                var3 = _closure2_slot7;
                                var4 = var4.bind(var5)(var3);
                                var3 = true;
                                var3 = var4.bind(var6)(var3);
                                var4 = _closure2_slot14;
                                var3 = var4.set;
                                var5 = 7;
                                var5 = var11[var5];
                                var9 = var10.bind(var6)(var5);
                                var8 = var9.withTiming;
                                var7 = {};
                                var5 = 150;
                                var7.duration = var5;
                                var5 = 8;
                                var5 = var11[var5];
                                var5 = var10.bind(var6)(var5);
                                var5 = var5.STANDARD_EASING;
                                var7.easing = var5;
                                var6 = function() {
                                    var3 = _closure2_slot4;
                                    var2 = var3.set;
                                    var1 = false;
                                    var1 = var2.bind(var3)(var1);
                                    var2 = _closure2_slot5;
                                    var1 = var2.set;
                                    var0 = -1;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var5 = {};
                                var10 = _closure2_slot4;
                                var5.isCollapsed = var10;
                                var10 = _closure2_slot5;
                                var5.animationState = var10;
                                var10 = -1;
                                var5.NONE = var10;
                                var6.__closure = var5;
                                var5 = 8502240261161.0;
                                var6.__workletHash = var5;
                                var0 = _closure1_slot23;
                                var6.__initData = var0;
                                var17 = 1;
                                var15 = 'respect-motion-settings';
                                var18 = var9;
                                var16 = var7;
                                var14 = var6;
                                var0 = var18[var8](var17, var16, var15, var14, var13);
                                var0 = var3.bind(var4)(var0);
                                _fun73386_ip = 561;
                                continue _fun73386;
                            case 241:
                                var5 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var3 = 5;
                                var0 = var0[var3];
                                var7 = undefined;
                                var6 = var5.bind(var7)(var0);
                                var5 = var6.runOnJS;
                                var0 = _closure2_slot7;
                                var5 = var5.bind(var6)(var0);
                                var0 = false;
                                var0 = var5.bind(var7)(var0);
                                var6 = _closure2_slot4;
                                var5 = var6.set;
                                var0 = true;
                                var0 = var5.bind(var6)(var0);
                                var5 = _closure2_slot14;
                                var0 = var5.get;
                                var5 = var0.bind(var5)();
                                var0 = 0;
                                if (!(var0 !== var5)) {
                                    _fun73386_ip = 480;
                                    continue _fun73386
                                }
                            case 325:
                                var6 = _closure2_slot14;
                                var5 = var6.set;
                                var12 = _closure1_slot0;
                                var13 = _closure1_slot2;
                                var8 = 7;
                                var8 = var13[var8];
                                var11 = var12.bind(var7)(var8);
                                var10 = var11.withTiming;
                                var9 = {};
                                var8 = 150;
                                var9.duration = var8;
                                var8 = 8;
                                var8 = var13[var8];
                                var8 = var12.bind(var7)(var8);
                                var8 = var8.STANDARD_EASING;
                                var9.easing = var8;
                                var8 = function() {
                                    var2 = _closure2_slot5;
                                    var1 = var2.set;
                                    var0 = -1;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var2 = {};
                                var12 = _closure2_slot5;
                                var2.animationState = var12;
                                var12 = -1;
                                var2.NONE = var12;
                                var8.__closure = var2;
                                var2 = 15486611138793.0;
                                var8.__workletHash = var2;
                                var2 = _closure1_slot22;
                                var8.__initData = var2;
                                var15 = 'respect-motion-settings';
                                var18 = var11;
                                var17 = 0;
                                var16 = var9;
                                var14 = var8;
                                var2 = var18[var10](var17, var16, var15, var14, var13);
                                var2 = var5.bind(var6)(var2);
                                _fun73386_ip = 561;
                                continue _fun73386;
                            case 480:
                                var2 = _closure2_slot5;
                                var1 = var2.set;
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var3 = var8[var3];
                                var5 = var6.bind(var7)(var3);
                                var4 = var5.withDelay;
                                var3 = 7;
                                var3 = var8[var3];
                                var7 = var6.bind(var7)(var3);
                                var6 = var7.withTiming;
                                var3 = {};
                                var3.duration = var0;
                                var0 = -1;
                                var3 = var6.bind(var7)(var0, var3);
                                var0 = 150;
                                var0 = var4.bind(var5)(var0, var3);
                                var0 = var1.bind(var2)(var0);
                            case 561:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var5 = {};
                    var12 = _closure2_slot14;
                    var5.animationDriver = var12;
                    var12 = 0.75;
                    var5.COLLAPSE_DRAWER_ON_RELEASE = var12;
                    var12 = var10[var7];
                    var12 = var9.bind(var8)(var12);
                    var12 = var12.runOnJS;
                    var5.runOnJS = var12;
                    var12 = _closure2_slot7;
                    var5.setFull = var12;
                    var12 = _closure2_slot4;
                    var5.isCollapsed = var12;
                    var5.COLLAPSED = var11;
                    var11 = _closure2_slot5;
                    var5.animationState = var11;
                    var7 = var10[var7];
                    var7 = var9.bind(var8)(var7);
                    var7 = var7.withDelay;
                    var5.withDelay = var7;
                    var7 = 7;
                    var7 = var10[var7];
                    var7 = var9.bind(var8)(var7);
                    var7 = var7.withTiming;
                    var5.withTiming = var7;
                    var7 = -1;
                    var5.NONE = var7;
                    var7 = 8;
                    var7 = var10[var7];
                    var7 = var9.bind(var8)(var7);
                    var7 = var7.STANDARD_EASING;
                    var5.STANDARD_EASING = var7;
                    var5.EXPANDED = var6;
                    var1.__closure = var5;
                    var5 = 16268892990477.0;
                    var1.__workletHash = var5;
                    var4 = _closure1_slot20;
                    var1.__initData = var4;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.enabled;
                    var0 = _closure2_slot6;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var10.bind(var4)(var2, var9);
                var _closure2_slot27 = var9;
                var1 = var33[var1];
                var12 = var35.bind(var3)(var1);
                var10 = var12.useAnimatedReaction;
                var2 = function() {
                    var2 = _closure2_slot1;
                    var0 = var2.get;
                    var2 = var0.bind(var2)();
                    var0 = new Array(2);
                    var0[0] = var2;
                    var2 = _closure2_slot14;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var1 = {};
                var1.overlayEnabled = var34;
                var1.animationDriver = var19;
                var2.__closure = var1;
                var1 = 12659996728578.0;
                var2.__workletHash = var1;
                var1 = _closure1_slot24;
                var2.__initData = var1;
                var1 = function arg0() {
                    _fun73390: for (var _fun73390_ip = 0;;) switch (_fun73390_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = var5[Symbol.iterator];
                            var5 = var2().next;
                            var3 = var5().value;
                            var1 = var2;
                            var0 = undefined;
                            var4 = var1 === var0;
                            var1 = undefined;
                            if (var4) {
                                _fun73390_ip = 27;
                                continue _fun73390
                            }
                        case 24:
                            var1 = var3;
                        case 27:
                            var3 = undefined;
                            if (var4) {
                                _fun73390_ip = 57;
                                continue _fun73390
                            }
                        case 32:
                            var6 = var5().value;
                            var5 = var2;
                            var5 = var5 === var0;
                            var3 = undefined;
                            var4 = var5;
                            if (var5) {
                                _fun73390_ip = 57;
                                continue _fun73390
                            }
                        case 51:
                            var3 = var6;
                            var4 = var5;
                        case 57:
                            if (var4) {
                                _fun73390_ip = 63;
                                continue _fun73390
                            }
                        case 60:
                            var2.return();
                        case 63:
                            if (!var1) {
                                _fun73390_ip = 80;
                                continue _fun73390
                            }
                        case 66:
                            var2 = -0.25;
                            var1 = var3 < var2;
                        case 80:
                            if (!var1) {
                                _fun73390_ip = 102;
                                continue _fun73390
                            }
                        case 83:
                            var3 = _closure2_slot1;
                            var2 = var3.set;
                            var1 = false;
                            var1 = var2.bind(var3)(var1);
                        case 102:
                            return var0;
                    }
                };
                var15 = {};
                var36 = -0.25;
                var15.DISMISSED_HIDE_OVERLAY = var36;
                var15.overlayEnabled = var34;
                var1.__closure = var15;
                var15 = 11470550406895.0;
                var1.__workletHash = var15;
                var15 = _closure1_slot25;
                var1.__initData = var15;
                var1 = var10.bind(var12)(var2, var1);
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var9;
                var1[1] = var6;
                var1[2] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var4 = var0.Gesture;
                    var3 = var4.Exclusive;
                    var2 = _closure2_slot25;
                    var1 = _closure2_slot27;
                    var0 = _closure2_slot26;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot6;
                var0 = 10;
                var0 = var33[var0];
                var0 = var35.bind(var3)(var0);
                var1 = var0.GestureDetector;
                var0 = {};
                var0.gesture = var4;
                var6 = _closure1_slot7;
                var15 = 11;
                var4 = var33[var15];
                var5 = var18.bind(var3)(var4);
                var4 = {};
                var4.style = var7;
                var7 = new Array(2);
                var7[0] = var8;
                var8 = 12;
                var8 = var33[var8];
                var8 = var35.bind(var3)(var8);
                var9 = var8.SafeAreaPaddingView;
                var8 = {
                    'bottom': true,
                    'left': true,
                    'right': true
                };
                var10 = var33[var15];
                var12 = var18.bind(var3)(var10);
                var10 = {};
                var34 = new Array(2);
                var34[0] = var17;
                var17 = _closure1_slot8;
                var36 = var17.drawerContainer;
                var34[1] = var36;
                var10.style = var34;
                var34 = 13;
                var34 = var33[var34];
                var34 = var35.bind(var3)(var34);
                var35 = var34.ActionSheetHeaderBar;
                var34 = {};
                var36 = var17.drawerHeaderTab;
                var34.tabStyle = var36;
                var36 = var17.drawerHeader;
                var34.style = var36;
                var34 = var2.bind(var3)(var35, var34);
                var10.children = var34;
                var12 = var2.bind(var3)(var12, var10);
                var10 = new Array(3);
                var10[0] = var12;
                var10[1] = var11;
                var11 = var33[var15];
                var12 = var18.bind(var3)(var11);
                var11 = {};
                var11.onLayout = var16;
                var11.style = var13;
                var16 = _closure1_slot5;
                var13 = {};
                var17 = var17.messagePreviewContainer;
                var13.style = var17;
                var17 = 14;
                var17 = var33[var17];
                var18 = var18.bind(var3)(var17);
                var17 = {};
                var33 = var32.channelId;
                var17.channelId = var33;
                var33 = var32.messageId;
                var17.messageId = var33;
                var32 = var32.onClose;
                var17.onClose = var32;
                var17.onTapMessage = var31;
                var17.onMeasureFullHeight = var30;
                var17.onMeasureCollapsedHeight = var29;
                var17.full = var28;
                var26 = var26 > var27;
                var17.canExpand = var26;
                var17.setScrollViewIsAtTop = var25;
                var17.flingUpRef = var24;
                var17.flingDownRef = var21;
                var17.animationDriver = var19;
                var17 = var2.bind(var3)(var18, var17);
                var13.children = var17;
                var16 = var2.bind(var3)(var16, var13);
                var13 = new Array(2);
                var13[0] = var16;
                if (!var14) {
                    _fun73364_ip = 1909;
                    continue _fun73364
                }
            case 1825:
                var17 = _closure1_slot6;
                var19 = _closure1_slot1;
                var21 = _closure1_slot2;
                var15 = var21[var15];
                var16 = var19.bind(var3)(var15);
                var15 = {};
                var18 = new Array(2);
                var18[0] = var23;
                var22 = _closure1_slot8;
                var22 = var22.thumbnailsContainer;
                var18[1] = var22;
                var15.style = var18;
                var18 = 15;
                var18 = var21[var18];
                var19 = var19.bind(var3)(var18);
                var18 = {};
                var18.syncer = var20;
                var18 = var17.bind(var3)(var19, var18);
                var15.children = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 1909:
                var13[1] = var14;
                var11.children = var13;
                var11 = var6.bind(var3)(var12, var11);
                var10[2] = var11;
                var8.children = var10;
                var8 = var6.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.MediaModalOverlayFooter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 671, 3720, 9223, 4097, 4884, 9225, 4961, 3910, 4734, 5202, 9226, 9203, 2]);