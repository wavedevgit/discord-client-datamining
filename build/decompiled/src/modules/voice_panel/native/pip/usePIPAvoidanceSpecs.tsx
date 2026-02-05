// modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelModes;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelControlsModes;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PIP_WINDOW_OFFSET;
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'function usePIPAvoidanceSpecsTsx1(){const{mode,controlsSpecs,keyboardHeight,safeArea,screenName}=this.__closure;return{mode:mode.get(),controlsSpecs:controlsSpecs.get(),keyboardHeight:keyboardHeight.get(),safeArea:safeArea.get(),screenName:screenName.get()};}';
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,VoicePanelControlsModes,DEFAULT_CHANNEL_INPUT_HEIGHT,PIP_WINDOW_OFFSET,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,calculateVoicePanelHeaderSpecs,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,controlsSpecs:controlsSpecs,keyboardHeight:keyboardHeight,safeArea:safeArea,screenName:screenName}=props;const screenBottomOffset=function(){if(mode!==VoicePanelModes.PIP){if(mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.DRAWER){return DEFAULT_CHANNEL_INPUT_HEIGHT+PIP_WINDOW_OFFSET;}return 0;}return getPIPBottomOffsetForPIPMode(screenName);}();let{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeArea.bottom,keyboardHeight:keyboardHeight});if(keyboardHeight<=0&&mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT){bottomOffset+=controlsSpecs.height+PIP_WINDOW_OFFSET;}const{height:headerHeight}=calculateVoicePanelHeaderSpecs(safeArea);updateSharedValueIfChanged(pipAvoidanceSpecs,{top:mode===VoicePanelModes.PANEL&&controlsSpecs.mode===VoicePanelControlsModes.FLOATING_DEFAULT?headerHeight:0,bottom:bottomOffset});}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/pip/usePIPAvoidanceSpecs.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var15 = var0.mode;
        var _closure2_slot0 = var15;
        var14 = var0.controlsSpecs;
        var _closure2_slot1 = var14;
        var12 = var0.safeArea;
        var _closure2_slot2 = var12;
        var11 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 3;
        var0 = var10[var2];
        var9 = undefined;
        var4 = var11.bind(var9)(var0);
        var3 = var4.useSharedValue;
        var0 = {
            'top': 0,
            'bottom': 0
        };
        var0 = var3.bind(var4)(var0);
        var _closure2_slot3 = var0;
        var8 = _closure1_slot1;
        var3 = 4;
        var3 = var10[var3];
        var3 = var8.bind(var9)(var3);
        var13 = var3.bind(var9)();
        var _closure2_slot4 = var13;
        var3 = 5;
        var3 = var10[var3];
        var3 = var8.bind(var9)(var3);
        var7 = var3.bind(var9)();
        var _closure2_slot5 = var7;
        var2 = var10[var2];
        var4 = var11.bind(var9)(var2);
        var3 = var4.useAnimatedReaction;
        var2 = function() {
            var0 = {};
            var3 = _closure2_slot0;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var0.mode = var2;
            var3 = _closure2_slot1;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var0.controlsSpecs = var2;
            var3 = _closure2_slot4;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var0.keyboardHeight = var2;
            var3 = _closure2_slot2;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var0.safeArea = var2;
            var2 = _closure2_slot5;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var0.screenName = var1;
            return var0;
        };
        var6 = {};
        var6.mode = var15;
        var6.controlsSpecs = var14;
        var6.keyboardHeight = var13;
        var6.safeArea = var12;
        var6.screenName = var7;
        var2.__closure = var6;
        var6 = 17017598468922.0;
        var2.__workletHash = var6;
        var6 = _closure1_slot6;
        var2.__initData = var6;
        var1 = function arg0, arg1() {
            _fun110887: for (var _fun110887_ip = 0;;) switch (_fun110887_ip) {
                case 0:
                    var2 = arg0;
                    var5 = arg1;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var1);
                    var3 = var4.cheapWorkletShallowEqual;
                    var1 = null;
                    var6 = var1 != var5;
                    var1 = undefined;
                    if (!var6) {
                        _fun110887_ip = 51;
                        continue _fun110887
                    }
                case 48:
                    var1 = var5;
                case 51:
                    var1 = var3.bind(var4)(var2, var1);
                    if (var1) {
                        _fun110887_ip = 410;
                        continue _fun110887
                    }
                case 63:
                    var11 = var2.mode;
                    var8 = var2.controlsSpecs;
                    var1 = var2.keyboardHeight;
                    var5 = var2.safeArea;
                    var3 = var2.screenName;
                    var2 = _closure1_slot3;
                    var2 = var2.PIP;
                    if (!(var11 === var2)) {
                        _fun110887_ip = 133;
                        continue _fun110887
                    }
                case 106:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var2 = var4.bind(var0)(var2);
                    var4 = var2.bind(var0)(var3);
                    _fun110887_ip = 184;
                    continue _fun110887;
                case 133:
                    var2 = _closure1_slot3;
                    var3 = var2.PANEL;
                    var2 = 0;
                    if (!(var11 === var3)) {
                        _fun110887_ip = 181;
                        continue _fun110887
                    }
                case 149:
                    var6 = var8.mode;
                    var3 = _closure1_slot4;
                    var3 = var3.DRAWER;
                    var2 = 0;
                    if (!(var6 === var3)) {
                        _fun110887_ip = 181;
                        continue _fun110887
                    }
                case 170:
                    var6 = _closure1_slot5;
                    var3 = 60;
                    var2 = var3 + var6;
                case 181:
                    var4 = var2;
                case 184:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 8;
                    var2 = var6[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = {};
                    var2.screenBottomOffset = var4;
                    var4 = var5.bottom;
                    var2.safeAreaBottom = var4;
                    var2.keyboardHeight = var1;
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.bottomOffset;
                    var9 = 0;
                    var1 = var1 <= var9;
                    if (!var1) {
                        _fun110887_ip = 260;
                        continue _fun110887
                    }
                case 246:
                    var3 = _closure1_slot3;
                    var3 = var3.PANEL;
                    var1 = var11 === var3;
                case 260:
                    if (!var1) {
                        _fun110887_ip = 282;
                        continue _fun110887
                    }
                case 263:
                    var4 = var8.mode;
                    var3 = _closure1_slot4;
                    var3 = var3.FLOATING_DEFAULT;
                    var1 = var4 === var3;
                case 282:
                    var4 = var2;
                    if (!var1) {
                        _fun110887_ip = 305;
                        continue _fun110887
                    }
                case 288:
                    var3 = var8.height;
                    var1 = _closure1_slot5;
                    var1 = var3 + var1;
                    var4 = var2 + var1;
                case 305:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.bind(var0)(var5);
                    var6 = var1.height;
                    var1 = 10;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = _closure2_slot3;
                    var1 = {};
                    var5 = _closure1_slot3;
                    var10 = var5.PANEL;
                    var5 = 0;
                    if (!(var11 === var10)) {
                        _fun110887_ip = 396;
                        continue _fun110887
                    }
                case 372:
                    var8 = var8.mode;
                    var7 = _closure1_slot4;
                    var7 = var7.FLOATING_DEFAULT;
                    var5 = 0;
                    if (!(var8 === var7)) {
                        _fun110887_ip = 396;
                        continue _fun110887
                    }
                case 393:
                    var5 = var6;
                case 396:
                    var1.top = var5;
                    var1.bottom = var4;
                    var1 = var3.bind(var0)(var2, var1);
                case 410:
                    return var0;
            }
        };
        var6 = {};
        var7 = 6;
        var7 = var10[var7];
        var7 = var11.bind(var9)(var7);
        var7 = var7.cheapWorkletShallowEqual;
        var6.cheapWorkletShallowEqual = var7;
        var7 = _closure1_slot3;
        var6.VoicePanelModes = var7;
        var7 = _closure1_slot4;
        var6.VoicePanelControlsModes = var7;
        var7 = 60;
        var6.DEFAULT_CHANNEL_INPUT_HEIGHT = var7;
        var7 = _closure1_slot5;
        var6.PIP_WINDOW_OFFSET = var7;
        var7 = 7;
        var7 = var10[var7];
        var7 = var8.bind(var9)(var7);
        var6.getPIPBottomOffsetForPIPMode = var7;
        var7 = 8;
        var7 = var10[var7];
        var7 = var8.bind(var9)(var7);
        var6.getAdjustedBottomOffsets = var7;
        var7 = 9;
        var7 = var10[var7];
        var7 = var8.bind(var9)(var7);
        var6.calculateVoicePanelHeaderSpecs = var7;
        var7 = 10;
        var7 = var10[var7];
        var7 = var8.bind(var9)(var7);
        var6.updateSharedValueIfChanged = var7;
        var6.pipAvoidanceSpecs = var0;
        var1.__closure = var6;
        var6 = 15651870131721.0;
        var1.__workletHash = var6;
        var5 = _closure1_slot7;
        var1.__initData = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11837, 11835, 11838, 3720, 14175, 14223, 5306, 14129, 14224, 11841, 5305, 2]);