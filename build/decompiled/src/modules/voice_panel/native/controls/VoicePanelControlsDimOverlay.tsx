// modules/voice_panel/native/controls/VoicePanelControlsDimOverlay.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BACKDROP_OPAQUE_MAX_OPACITY;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.PANEL_CONTROLS_HEIGHT_PHYSICS;
    var _closure1_slot5 = var7;
    var3 = var3.VoicePanelModes;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelControlsModes;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = {};
    var7 = "function VoicePanelControlsDimOverlayTsx1(){const{windowDimensions,getDrawerSpec,safeArea,controlsSpecs,VoicePanelControlsModes,mode,VoicePanelModes,interpolate,wrapperSpecs,BACKDROP_OPAQUE_MAX_OPACITY}=this.__closure;const{height:height}=windowDimensions.get();const{minHeight:minHeight,maxHeight:maxHeight}=getDrawerSpec(height,safeArea.get().top);if(controlsSpecs.get().mode!==VoicePanelControlsModes.DRAWER||mode.get()!==VoicePanelModes.PANEL){return 0;}return interpolate(wrapperSpecs.get().height,[minHeight,maxHeight],[0,BACKDROP_OPAQUE_MAX_OPACITY],'clamp');}";
    var3.code = var7;
    var _closure1_slot9 = var3;
    var3 = {};
    var7 = 'function VoicePanelControlsDimOverlayTsx2(){const{overlayOpacity}=this.__closure;return overlayOpacity.get()>=0.35;}';
    var3.code = var7;
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = "function VoicePanelControlsDimOverlayTsx3(){const{withSpring,overlayOpacity,PANEL_CONTROLS_HEIGHT_PHYSICS,accessibilityPreferencesSharedValue,overlayActive}=this.__closure;return{zIndex:1,opacity:withSpring(overlayOpacity.get(),PANEL_CONTROLS_HEIGHT_PHYSICS),display:accessibilityPreferencesSharedValue.get().screenReaderEnabled&&!overlayActive.get()?'none':'flex'};}";
    var3.code = var7;
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = "function VoicePanelControlsDimOverlayTsx4(){const{overlayActive}=this.__closure;return{pointerEvents:!overlayActive.get()?'none':'auto'};}";
    var3.code = var7;
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: VoicePanelControlsDimOverlay, environment: var1
        var0 = arg0;
        var12 = var0.wrapperSpecs;
        var _closure2_slot0 = var12;
        var9 = _closure1_slot3;
        var4 = var9.useContext;
        var5 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 5;
        var1 = var7[var1];
        var3 = undefined;
        var1 = var5.bind(var3)(var1);
        var1 = var4.bind(var9)(var1);
        var16 = var1.windowDimensions;
        var _closure2_slot1 = var16;
        var10 = var1.setControlsMode;
        var _closure2_slot2 = var10;
        var14 = var1.controlsSpecs;
        var _closure2_slot3 = var14;
        var15 = var1.safeArea;
        var _closure2_slot4 = var15;
        var13 = var1.mode;
        var _closure2_slot5 = var13;
        var1 = _closure1_slot0;
        var4 = 6;
        var5 = var7[var4];
        var8 = var1.bind(var3)(var5);
        var6 = var8.useDerivedValue;
        var5 = function() { // Original name: A, environment: var2
            _fun111629: for (var _fun111629_ip = 0;;) switch (_fun111629_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var5 = var0.height;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 7;
                    var0 = var4[var0];
                    var6 = undefined;
                    var4 = var2.bind(var6)(var0);
                    var2 = var4.getDrawerSpec;
                    var7 = _closure2_slot4;
                    var0 = var7.get;
                    var0 = var0.bind(var7)();
                    var0 = var0.top;
                    var0 = var2.bind(var4)(var5, var0);
                    var7 = var0.minHeight;
                    var2 = var0.maxHeight;
                    var4 = _closure2_slot3;
                    var0 = var4.get;
                    var0 = var0.bind(var4)();
                    var5 = var0.mode;
                    var0 = _closure1_slot7;
                    var4 = var0.DRAWER;
                    var0 = 0;
                    if (!(var5 === var4)) {
                        _fun111629_ip = 242;
                        continue _fun111629
                    }
                case 122:
                    var5 = _closure2_slot5;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = _closure1_slot6;
                    var4 = var4.PANEL;
                    var0 = 0;
                    if (!(var5 === var4)) {
                        _fun111629_ip = 242;
                        continue _fun111629
                    }
                case 151:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.interpolate;
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var12 = var3.height;
                    var3 = new Array(2);
                    var3[0] = var7;
                    var3[1] = var2;
                    var1 = _closure1_slot4;
                    var2 = [0];
                    var2[1] = var1;
                    var9 = 'clamp';
                    var13 = var6;
                    var11 = var3;
                    var10 = var2;
                    var0 = var13[var5](var12, var11, var10, var9, var8);
                case 242:
                    return var0;
            }
        };
        var11 = {};
        var11.windowDimensions = var16;
        var16 = 7;
        var16 = var7[var16];
        var16 = var1.bind(var3)(var16);
        var16 = var16.getDrawerSpec;
        var11.getDrawerSpec = var16;
        var11.safeArea = var15;
        var11.controlsSpecs = var14;
        var14 = _closure1_slot7;
        var11.VoicePanelControlsModes = var14;
        var11.mode = var13;
        var13 = _closure1_slot6;
        var11.VoicePanelModes = var13;
        var13 = var7[var4];
        var13 = var1.bind(var3)(var13);
        var13 = var13.interpolate;
        var11.interpolate = var13;
        var11.wrapperSpecs = var12;
        var12 = _closure1_slot4;
        var11.BACKDROP_OPAQUE_MAX_OPACITY = var12;
        var5.__closure = var11;
        var11 = 17386741533055.0;
        var5.__workletHash = var11;
        var11 = _closure1_slot9;
        var5.__initData = var11;
        var13 = var6.bind(var8)(var5);
        var _closure2_slot6 = var13;
        var5 = var7[var4];
        var8 = var1.bind(var3)(var5);
        var6 = var8.useDerivedValue;
        var5 = function() { // Original name: y, environment: var2
            var1 = _closure2_slot6;
            var0 = var1.get;
            var1 = var0.bind(var1)();
            var0 = 0.35;
            var0 = var1 >= var0;
            return var0;
        };
        var11 = {};
        var11.overlayOpacity = var13;
        var5.__closure = var11;
        var11 = 733654137262.0;
        var5.__workletHash = var11;
        var11 = _closure1_slot10;
        var5.__initData = var11;
        var12 = var6.bind(var8)(var5);
        var _closure2_slot7 = var12;
        var5 = var7[var4];
        var8 = var1.bind(var3)(var5);
        var6 = var8.useAnimatedStyle;
        var5 = function() { // Original name: S, environment: var2
            _fun111631: for (var _fun111631_ip = 0;;) switch (_fun111631_ip) {
                case 0:
                    var0 = {};
                    var1 = 1;
                    var0.zIndex = var1;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var2 = var5[var2];
                    var3 = undefined;
                    var8 = var4.bind(var3)(var2);
                    var7 = var8.withSpring;
                    var9 = _closure2_slot6;
                    var6 = var9.get;
                    var6 = var6.bind(var9)();
                    var1 = _closure1_slot5;
                    var1 = var7.bind(var8)(var6, var1);
                    var0.opacity = var1;
                    var1 = 9;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var3 = var1.accessibilityPreferencesSharedValue;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var4 = var1.screenReaderEnabled;
                    var3 = 'flex';
                    var1 = var3;
                    if (!var4) {
                        _fun111631_ip = 136;
                        continue _fun111631
                    }
                case 113:
                    var4 = _closure2_slot7;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var1 = var3;
                    if (var2) {
                        _fun111631_ip = 136;
                        continue _fun111631
                    }
                case 132:
                    var1 = 'none';
                case 136:
                    var0.display = var1;
                    return var0;
            }
        };
        var11 = {};
        var14 = 8;
        var14 = var7[var14];
        var14 = var1.bind(var3)(var14);
        var14 = var14.withSpring;
        var11.withSpring = var14;
        var11.overlayOpacity = var13;
        var13 = _closure1_slot5;
        var11.PANEL_CONTROLS_HEIGHT_PHYSICS = var13;
        var13 = 9;
        var13 = var7[var13];
        var13 = var1.bind(var3)(var13);
        var13 = var13.accessibilityPreferencesSharedValue;
        var11.accessibilityPreferencesSharedValue = var13;
        var11.overlayActive = var12;
        var5.__closure = var11;
        var11 = 7500180433000.0;
        var5.__workletHash = var11;
        var11 = _closure1_slot11;
        var5.__initData = var11;
        var5 = var6.bind(var8)(var5);
        var4 = var7[var4];
        var8 = var1.bind(var3)(var4);
        var6 = var8.useAnimatedProps;
        var4 = function() { // Original name: v, environment: var2
            _fun111632: for (var _fun111632_ip = 0;;) switch (_fun111632_ip) {
                case 0:
                    var0 = {};
                    var2 = _closure2_slot7;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 'none';
                    if (!var2) {
                        _fun111632_ip = 29;
                        continue _fun111632
                    }
                case 25:
                    var1 = 'auto';
                case 29:
                    var0.pointerEvents = var1;
                    return var0;
            }
        };
        var11 = {};
        var11.overlayActive = var12;
        var4.__closure = var11;
        var11 = 873976025930.0;
        var4.__workletHash = var11;
        var11 = _closure1_slot12;
        var4.__initData = var11;
        var4 = var6.bind(var8)(var4);
        var8 = var9.useCallback;
        var6 = new Array(1);
        var6[0] = var10;
        var2 = function() { // Environment: var2
            var2 = _closure2_slot2;
            var1 = {};
            var0 = _closure1_slot7;
            var0 = var0.FLOATING_DEFAULT;
            var1.mode = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var6 = var8.bind(var9)(var2, var6);
        var2 = _closure1_slot8;
        var0 = 10;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Backdrop;
        var0 = {};
        var0.onDismiss = var6;
        var0.style = var5;
        var0.animatedProps = var4;
        var4 = true;
        var0.opaque = var4;
        var0['aria-hidden'] = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/VoicePanelControlsDimOverlay.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4843, 11771, 11769, 33, 11770, 3679, 14292, 4040, 12726, 4030, 2]);