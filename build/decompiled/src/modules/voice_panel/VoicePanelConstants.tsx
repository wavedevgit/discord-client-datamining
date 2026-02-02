// modules/voice_panel/VoicePanelConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var16 = require;
    var2 = exports;
    var17 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var2, var1, var4);
    var14 = {};
    var1 = 'dismissed';
    var14.DISMISSED = var1;
    var1 = 'pip';
    var14.PIP = var1;
    var1 = 'panel';
    var14.PANEL = var1;
    var _closure1_slot0 = var14;
    var12 = {
        'mass': 0.5,
        'damping': 80,
        'stiffness': 200
    };
    var11 = {};
    var21 = var11;
    var20 = var12;
    var1 = copyDataProperties(var21, var20);
    var1 = 'overshootClamping';
    var11[var1] = var3;
    var10 = {};
    var21 = var10;
    var20 = var12;
    var4 = copyDataProperties(var21, var20);
    var10[var1] = var3;
    var9 = {};
    var21 = var9;
    var20 = var12;
    var1 = copyDataProperties(var21, var20);
    var3 = 0.3;
    var1 = 'mass';
    var9[var1] = var3;
    var8 = {};
    var1 = 'USER';
    var8.USER = var1;
    var1 = 'STREAM';
    var8.STREAM = var1;
    var1 = 'ACTIVIY';
    var8.ACTIVITY = var1;
    var7 = {};
    var1 = 'no_video_participants';
    var7.NO_VIDEO_PARTICIPANTS = var1;
    var1 = 'caller_disconnected';
    var7.CALLER_DISCONNECTED = var1;
    var6 = {};
    var3 = var7.NO_VIDEO_PARTICIPANTS;
    var15 = 1;
    var1 = {
        'width': 2,
        'height': 1
    };
    var6[var3] = var1;
    var3 = var0.Set;
    var1 = var0.Object;
    var0 = var1.keys;
    var21 = var0.bind(var1)(var6);
    var1 = var3.prototype;
    var1 = Object.create(var1, {
        constructor: {
            value: var3
        }
    });
    var22 = var1;
    var0 = new var22[var3](var21, var20);
    var5 = var0 instanceof Object ? var0 : var1;
    var4 = {};
    var0 = 'participant';
    var4.PARTICIPANT = var0;
    var0 = 'cta';
    var4.CTA = var0;
    var1 = 0;
    var3 = var17[var1];
    var0 = undefined;
    var18 = var16.bind(var0)(var3);
    var3 = var18.isAndroid;
    var3 = var3.bind(var18)();
    var1 = var17[var1];
    var18 = var16.bind(var0)(var1);
    var1 = var18.isIOS;
    var1 = var1.bind(var18)();
    var15 = var17[var15];
    var17 = var16.bind(var0)(var15);
    var16 = var17.fileFinishedImporting;
    var15 = 'modules/voice_panel/VoicePanelConstants.tsx';
    var15 = var16.bind(var17)(var15);
    var2.VoicePanelModes = var14;
    var13 = function arg0() {
        _fun90885: for (var _fun90885_ip = 0;;) switch (_fun90885_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot0;
                var2 = var2.DISMISSED;
                if (!(var2 !== var1)) {
                    _fun90885_ip = 64;
                    continue _fun90885
                }
            case 20:
                var2 = _closure1_slot0;
                var2 = var2.PIP;
                if (!(var2 !== var1)) {
                    _fun90885_ip = 58;
                    continue _fun90885
                }
            case 34:
                var0 = _closure1_slot0;
                var0 = var0.PANEL;
                if (!(var0 !== var1)) {
                    _fun90885_ip = 52;
                    continue _fun90885
                }
            case 48:
                var0 = undefined;
                return var0;
            case 52:
                var0 = 'grid';
                return var0;
            case 58:
                var0 = 'pip';
                return var0;
            case 64:
                var0 = 'dismissed';
                return var0;
        }
    };
    var2.getAnalyticsNameForVoicePanelMode = var13;
    var13 = 3;
    var2.VOICE_PANEL_CHUNK_DIVISOR = var13;
    var13 = 24;
    var2.DEFAULT_BORDER_RADIUS = var13;
    var2.DEFAULT_BORDER_RADIUS_PIP = var13;
    var13 = {
        'mass': 0.2,
        'damping': 10,
        'stiffness': 200
    };
    var2.DRAWER_SPRING_PHYSICS = var13;
    var13 = {
        'mass': 0.3,
        'damping': 25,
        'stiffness': 150
    };
    var2.LAYOUT_PHYSICS = var13;
    var13 = {
        'mass': 0.4,
        'damping': 60,
        'stiffness': 150
    };
    var2.UI_SHOW_HIDE_PHYSICS = var13;
    var2.MODE_CHANGE_PHYSICS = var12;
    var2.MODE_CHANGE_PHYSICS_CLAMPED = var11;
    var2.BORDER_RADIUS_PHYSICS = var10;
    var2.PANEL_CONTROLS_HEIGHT_PHYSICS = var9;
    var9 = {
        'mass': 0.32,
        'damping': 10,
        'stiffness': 300,
        'restDisplacementThreshold': 0.001,
        'restSpeedThreshold': 0.001,
        'overshootClamping': true
    };
    var2.SPEAKING_PHYSICS = var9;
    var9 = {
        'damping': 20,
        'mass': 0.1,
        'stiffness': 100
    };
    var2.PUSH_TO_TALK_PIP_PHYSICS = var9;
    var9 = {
        'mass': 0.1,
        'damping': 20,
        'stiffness': 500
    };
    var2.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE = var9;
    var2.GridItemTypes = var8;
    var8 = 165;
    var2.BASE_TARGET_CARD_SIZE = var8;
    var2.VoicePanelCTACard = var7;
    var2.VoicePanelCTACardDimensions = var6;
    var2.VoicePanelCTACardDimensionKeys = var5;
    var2.VoicePanelCardItemType = var4;
    var2.IS_ANDROID = var3;
    var2.IS_IOS = var1;
    var1 = 8;
    var2.SECONDARY_PIP_TOP_MARGIN = var1;
    var1 = 540;
    var2.VOICE_PANEL_DRAWER_MAX_WIDTH = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [478, 2]);