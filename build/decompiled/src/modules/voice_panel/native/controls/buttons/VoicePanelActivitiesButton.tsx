// modules/voice_panel/native/controls/buttons/VoicePanelActivitiesButton.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.Fragment;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var8.tintColor = var11;
    var3.icon = var8;
    var8 = {
        'position': 'absolute',
        'justifyContent': 'center',
        'alignItems': 'center',
        'width': '100%',
        'height': '100%'
    };
    var3.iconContainer = var8;
    var8 = {
        'position': 'absolute',
        'zIndex': 1,
        'width': 10,
        'height': 10,
        'borderRadius': null,
        'top': 0,
        'right': 0
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var3.badge = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.WHITE;
    var8.backgroundColor = var9;
    var3.whiteBG = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/buttons/VoicePanelActivitiesButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var1 = var0.props;
        var _closure2_slot0 = var1;
        var6 = var0.openTab;
        var _closure2_slot1 = var6;
        var9 = var0.wrapperSpecs;
        var1 = _closure1_slot9;
        var3 = undefined;
        var1 = var1.bind(var3)();
        var _closure2_slot2 = var1;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 6;
        var2 = var8[var2];
        var5 = var7.bind(var3)(var2);
        var2 = var5.useVoicePanelButtonStyles;
        var2 = var2.bind(var5)(var9);
        var _closure2_slot3 = var2;
        var5 = 7;
        var5 = var8[var5];
        var10 = var7.bind(var3)(var5);
        var9 = var10.useNewestBadgeableVersion;
        var5 = {};
        var11 = 8;
        var11 = var8[var11];
        var11 = var7.bind(var3)(var11);
        var11 = var11.EmbeddedActivitySurfaces;
        var11 = var11.VOICE_LAUNCHER;
        var5.surface = var11;
        var5 = var9.bind(var10)(var5);
        var9 = _closure1_slot3;
        var11 = var9.useRef;
        var10 = null;
        var10 = var11.bind(var9)(var10);
        var _closure2_slot4 = var10;
        var11 = var9.useCallback;
        var10 = new Array(1);
        var10[0] = var6;
        var6 = function() { // Environment: var4
            var2 = _closure2_slot1;
            var1 = {};
            var0 = 'app_launcher';
            var1.tab = var0;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 9;
            var3 = var3[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var3 = var3.VoicePanelTabAnalyticsSources;
            var3 = var3.CONNECTED_BUTTON;
            var1.source = var3;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var6 = var11.bind(var9)(var6, var10);
        var _closure2_slot5 = var6;
        var6 = var2.iconBg;
        var6 = var6.backgroundColor;
        var _closure2_slot6 = var6;
        var6 = var9.useMemo;
        var2 = var2.iconFill;
        var10 = var2.color;
        var2 = new Array(2);
        var2[0] = var10;
        var1 = var1.iconContainer;
        var2[1] = var1;
        var1 = function() { // Environment: var4
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var4 = _closure2_slot2;
            var4 = var4.iconContainer;
            var1.style = var4;
            var4 = _closure2_slot4;
            var1.ref = var4;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var0 = 10;
            var4 = var4[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var5 = var4.AppsIcon;
            var4 = {};
            var6 = _closure2_slot3;
            var6 = var6.iconFill;
            var6 = var6.color;
            var4.color = var6;
            var4 = var3.bind(var0)(var5, var4);
            var1.children = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var1 = var6.bind(var9)(var1, var2);
        var _closure2_slot7 = var1;
        var2 = _closure1_slot6;
        var0 = 11;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.SelectedVersionedDismissibleContent;
        var0 = {};
        var6 = 12;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.DismissibleContent;
        var6 = var6.ACTIVITIES_VOICE_LAUNCHER_BADGE;
        var0.contentType = var6;
        var0.latestVersion = var5;
        var4 = function arg0() {
            _fun111612: for (var _fun111612_ip = 0;;) switch (_fun111612_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.visibleContent;
                    var0 = var0.markAsDismissed;
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 12;
                    var0 = var5[var0];
                    var3 = undefined;
                    var0 = var2.bind(var3)(var0);
                    var0 = var0.DismissibleContent;
                    var0 = var0.ACTIVITIES_VOICE_LAUNCHER_BADGE;
                    var9 = var1 === var0;
                    var2 = _closure1_slot6;
                    var1 = _closure1_slot1;
                    var0 = 13;
                    var0 = var5[var0];
                    var1 = var1.bind(var3)(var0);
                    var0 = {};
                    var4 = function() {
                        var2 = _closure3_slot0;
                        var0 = _closure1_slot5;
                        var1 = var0.TAKE_ACTION;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var1 = _closure2_slot5;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var0.onPress = var4;
                    var4 = _closure2_slot0;
                    var0.props = var4;
                    var4 = undefined;
                    if (var9) {
                        _fun111612_ip = 124;
                        continue _fun111612
                    }
                case 111:
                    var5 = {};
                    var6 = _closure2_slot6;
                    var5.backgroundColor = var6;
                    var4 = var5;
                case 124:
                    var0.style = var4;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 14;
                    var5 = var8[var4];
                    var5 = var7.bind(var3)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var3)(var4);
                    var4 = var4.t;
                    var4 = var4.IC5Ann;
                    var4 = var5.bind(var6)(var4);
                    var0.accessibilityLabel = var4;
                    if (var9) {
                        _fun111612_ip = 201;
                        continue _fun111612
                    }
                case 192:
                    var4 = _closure2_slot7;
                    _fun111612_ip = 378;
                    continue _fun111612;
                case 201:
                    var7 = _closure1_slot8;
                    var6 = _closure1_slot7;
                    var5 = {};
                    var12 = _closure1_slot6;
                    var11 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 15;
                    var8 = var13[var8];
                    var11 = var11.bind(var3)(var8);
                    var8 = {
                        'fill': null,
                        'circleRadius': null,
                        'cutoutRadius': 8,
                        'enableCutout': null,
                        'cutoutPositionInDegrees': 45,
                        'alignBadgeEdgeWithCircleEdge': true,
                        'badgeRadius': 5,
                        'scaleToPixelDensity': true
                    };
                    var13 = _closure2_slot6;
                    var8.fill = var13;
                    var13 = _closure2_slot0;
                    var15 = var13.width;
                    var13 = 2;
                    var13 = var15 / var13;
                    var8.circleRadius = var13;
                    var8.enableCutout = var9;
                    var11 = var12.bind(var3)(var11, var8);
                    var8 = new Array(3);
                    var8[0] = var11;
                    var11 = _closure2_slot7;
                    var8[1] = var11;
                    if (!var9) {
                        _fun111612_ip = 364;
                        continue _fun111612
                    }
                case 312:
                    var12 = _closure1_slot6;
                    var11 = _closure1_slot4;
                    var10 = {};
                    var13 = _closure2_slot2;
                    var15 = var13.badge;
                    var13 = new Array(2);
                    var13[0] = var15;
                    var14 = _closure2_slot3;
                    var14 = var14.iconBadgeIndicator;
                    var13[1] = var14;
                    var10.style = var13;
                    var9 = var12.bind(var3)(var11, var10);
                case 364:
                    var8[2] = var9;
                    var5.children = var8;
                    var4 = var7.bind(var3)(var6, var5);
                case 378:
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1369, 33, 1297, 671, 14303, 14319, 1636, 14291, 7737, 5921, 1358, 14304, 1234, 14312, 2]);