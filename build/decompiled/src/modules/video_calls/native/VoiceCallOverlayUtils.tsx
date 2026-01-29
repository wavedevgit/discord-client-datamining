// modules/video_calls/native/VoiceCallOverlayUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
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
    var3 = var5.bind(var0)(var3);
    var8 = var3.MIN_MARGIN_BETWEEN_OVERLAYS;
    var _closure1_slot2 = var8;
    var10 = var3.VoiceCallOverlayType;
    var _closure1_slot3 = var10;
    var3 = {};
    var4 = 'function VoiceCallOverlayUtilsTsx1(rectA,rectB,minMarginBetweenOverlays){if(rectA==null||rectA.x==null||rectA.y==null||rectA.width==null||rectA.height==null||rectB==null||rectB.x==null||rectB.y==null||rectB.width==null||rectB.height==null){return false;}const minAx=rectA.x-minMarginBetweenOverlays;const maxAx=rectA.x+rectA.width+minMarginBetweenOverlays;const minAy=rectA.y-minMarginBetweenOverlays;const maxAy=rectA.y+rectA.height+minMarginBetweenOverlays;const minBx=rectB.x;const maxBx=rectB.x+rectB.width;const minBy=rectB.y;const maxBy=rectB.y+rectB.height;const aLeftOfB=maxAx<minBx;const aRightOfB=minAx>maxBx;const aBelowB=minAy>maxBy;const aAboveB=maxAy<minBy;return!(aLeftOfB||aRightOfB||aAboveB||aBelowB);}';
    var3.code = var4;
    var9 = function(arg0, arg1, arg2) { // Original name: t, environment: var1
        _fun64135: for (var _fun64135_ip = 0;;) switch (_fun64135_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                var3 = arg2;
                var4 = null;
                if (!(var4 != var0)) {
                    _fun64135_ip = 243;
                    continue _fun64135
                }
            case 18:
                var2 = var0.x;
                if (!(var4 != var2)) {
                    _fun64135_ip = 243;
                    continue _fun64135
                }
            case 30:
                var2 = var0.y;
                if (!(var4 != var2)) {
                    _fun64135_ip = 243;
                    continue _fun64135
                }
            case 42:
                var2 = var0.width;
                if (!(var4 != var2)) {
                    _fun64135_ip = 243;
                    continue _fun64135
                }
            case 54:
                var2 = var0.height;
                if (!(var4 != var2)) {
                    _fun64135_ip = 243;
                    continue _fun64135
                }
            case 66:
                if (!(var4 != var1)) {
                    _fun64135_ip = 243;
                    continue _fun64135
                }
            case 73:
                var2 = var1.x;
                if (!(var4 != var2)) {
                    _fun64135_ip = 243;
                    continue _fun64135
                }
            case 85:
                var2 = var1.y;
                if (!(var4 != var2)) {
                    _fun64135_ip = 243;
                    continue _fun64135
                }
            case 97:
                var2 = var1.width;
                if (!(var4 != var2)) {
                    _fun64135_ip = 243;
                    continue _fun64135
                }
            case 109:
                var2 = var1.height;
                if (!(var4 != var2)) {
                    _fun64135_ip = 243;
                    continue _fun64135
                }
            case 121:
                var2 = var0.x;
                var6 = var2 - var3;
                var4 = var0.x;
                var2 = var0.width;
                var2 = var4 + var2;
                var7 = var2 + var3;
                var2 = var0.y;
                var2 = var2 - var3;
                var4 = var0.y;
                var0 = var0.height;
                var0 = var4 + var0;
                var4 = var0 + var3;
                var0 = var1.x;
                var5 = var1.x;
                var3 = var1.width;
                var5 = var5 + var3;
                var3 = var1.y;
                var8 = var1.y;
                var1 = var1.height;
                var1 = var8 + var1;
                var0 = var7 < var0;
                if (var0) {
                    _fun64135_ip = 224;
                    continue _fun64135
                }
            case 220:
                var0 = var6 > var5;
            case 224:
                if (var0) {
                    _fun64135_ip = 231;
                    continue _fun64135
                }
            case 227:
                var0 = var4 < var3;
            case 231:
                if (var0) {
                    _fun64135_ip = 238;
                    continue _fun64135
                }
            case 234:
                var0 = var2 > var1;
            case 238:
                var0 = !var0;
                return var0;
            case 243:
                var0 = false;
                return var0;
        }
    };
    var4 = {};
    var9.__closure = var4;
    var4 = 16149528537623.0;
    var9.__workletHash = var4;
    var9.__initData = var3;
    var _closure1_slot4 = var9;
    var4 = {};
    var3 = 'function VoiceCallOverlayUtilsTsx2(voiceCallOverlayLayoutStates,voiceCallOverlayType,targetRectangle){const{VoiceCallOverlayType,doRectanglesIntersectWorklet,MIN_MARGIN_BETWEEN_OVERLAYS}=this.__closure;switch(voiceCallOverlayType){case VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}case VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}}return false;}';
    var4.code = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: l, environment: var1
        _fun64136: for (var _fun64136_ip = 0;;) switch (_fun64136_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var4 = arg2;
                var1 = _closure1_slot3;
                var1 = var1.VOICE_CONTROLS_TOGGLE_BUTTON;
                if (!(var1 !== var3)) {
                    _fun64136_ip = 108;
                    continue _fun64136
                }
            case 26:
                var1 = _closure1_slot3;
                var1 = var1.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
                if (!(var1 === var3)) {
                    _fun64136_ip = 169;
                    continue _fun64136
                }
            case 43:
                var1 = _closure1_slot3;
                var1 = var1.VOICE_CONTROLS_TOGGLE_BUTTON;
                var1 = var2[var1];
                var1 = var1.isVisible;
                if (var1) {
                    _fun64136_ip = 70;
                    continue _fun64136
                }
            case 66:
                var1 = false;
                return var1;
            case 70:
                var6 = _closure1_slot4;
                var1 = _closure1_slot3;
                var1 = var1.VOICE_CONTROLS_TOGGLE_BUTTON;
                var5 = var2[var1];
                var3 = _closure1_slot2;
                var1 = undefined;
                var1 = var6.bind(var1)(var4, var5, var3);
                if (!var1) {
                    _fun64136_ip = 169;
                    continue _fun64136
                }
            case 104:
                var1 = true;
                return var1;
            case 108:
                var1 = _closure1_slot3;
                var1 = var1.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
                var1 = var2[var1];
                var1 = var1.isVisible;
                if (var1) {
                    _fun64136_ip = 135;
                    continue _fun64136
                }
            case 131:
                var1 = false;
                return var1;
            case 135:
                var3 = _closure1_slot4;
                var1 = _closure1_slot3;
                var1 = var1.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
                var2 = var2[var1];
                var1 = _closure1_slot2;
                var0 = undefined;
                var0 = var3.bind(var0)(var4, var2, var1);
                if (var0) {
                    _fun64136_ip = 173;
                    continue _fun64136
                }
            case 169:
                var0 = false;
                return var0;
            case 173:
                var0 = true;
                return var0;
        }
    };
    var7 = {};
    var7.VoiceCallOverlayType = var10;
    var7.doRectanglesIntersectWorklet = var9;
    var7.MIN_MARGIN_BETWEEN_OVERLAYS = var8;
    var3.__closure = var7;
    var7 = 10902657864288.0;
    var3.__workletHash = var7;
    var3.__initData = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/VoiceCallOverlayUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.doesTargetPositionIntersectOtherOverlaysWorklet = var3;
    var3 = function(arg0, arg1) { // Original name: updateVoiceCallOverlayLayoutState, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'VOICE_CALL_OVERLAY_LAYOUT_STATE_UPDATE';
        var1.type = var4;
        var4 = arg0;
        var1.voiceCallOverlayType = var4;
        var4 = arg1;
        var1.voiceCallOverlayLayoutState = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateVoiceCallOverlayLayoutState = var3;
    var1 = function(arg0) { // Original name: setPipEnabledWhileFocusedOnActivityOrStream, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'VOICE_CALL_SET_PIP_ENABLED_FOR_ACTIVITY_OR_STREAM';
        var1.type = var4;
        var4 = arg0;
        var1.pipEnabledWhileFocusedOnActivityOrStream = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPipEnabledWhileFocusedOnActivityOrStream = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7843, 806, 2]);