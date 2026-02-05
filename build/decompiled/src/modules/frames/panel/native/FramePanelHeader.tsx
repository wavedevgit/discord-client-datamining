// modules/frames/panel/native/FramePanelHeader.tsx
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
    var0 = true;
    var3.value = var0;
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
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var10 = 6;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9.gap = var10;
    var3.buttonContainer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var7 = var6.memo;
    var3 = function arg0() {
        _fun110574: for (var _fun110574_ip = 0;;) switch (_fun110574_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.landscape;
                var _closure2_slot0 = var7;
                var6 = var1.setMode;
                var _closure2_slot1 = var6;
                var8 = var1.pipState;
                var9 = var1.wrapperOffset;
                var12 = undefined;
                var _closure2_slot3 = var12;
                var _closure2_slot4 = var12;
                var _closure2_slot5 = var12;
                var _closure2_slot6 = var12;
                var _closure2_slot7 = var12;
                var _closure2_slot8 = var12;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var10 = var3.bind(var12)(var2);
                var5 = var10.useStateFromStores;
                var2 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var2;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getConnectedFrame;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = new Array(0);
                var11 = var5.bind(var10)(var4, var3, var2);
                var _closure2_slot2 = var11;
                var14 = null;
                var2 = var14 == var11;
                var4 = undefined;
                if (var2) {
                    _fun110574_ip = 141;
                    continue _fun110574
                }
            case 136:
                var4 = var11.applicationId;
            case 141:
                _closure2_slot3 = var4;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var3 = var3.bind(var12)(var2);
                var2 = new Array(1);
                var2[0] = var4;
                var10 = var3.bind(var12)(var2);
                var3 = _closure1_slot3;
                var2 = 1;
                var3 = var3.bind(var12)(var10, var2);
                var2 = 0;
                var13 = var3[var2];
                _closure2_slot4 = var13;
                var3 = _closure1_slot0;
                var2 = 9;
                var2 = var5[var2];
                var5 = var3.bind(var12)(var2);
                var3 = var5.useBaseActivityPanelHeaderContent;
                var2 = {};
                var2.landscape = var7;
                var2.setMode = var6;
                var2.wrapperOffset = var9;
                var2.pipState = var8;
                var2 = var3.bind(var5)(var2);
                var10 = var2.gesture;
                _closure2_slot5 = var10;
                var8 = var2.headerWrapperStyles;
                _closure2_slot6 = var8;
                var9 = var2.headerStyles;
                _closure2_slot7 = var9;
                var2 = _closure1_slot9;
                var5 = var2.bind(var12)();
                _closure2_slot8 = var5;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = var14 == var13;
                var15 = undefined;
                if (var1) {
                    _fun110574_ip = 315;
                    continue _fun110574
                }
            case 310:
                var15 = var13.id;
            case 315:
                var1 = new Array(10);
                var1[0] = var15;
                var14 = var14 == var13;
                var12 = undefined;
                if (var14) {
                    _fun110574_ip = 337;
                    continue _fun110574
                }
            case 332:
                var12 = var13.name;
            case 337:
                var1[1] = var12;
                var1[2] = var11;
                var1[3] = var10;
                var1[4] = var9;
                var1[5] = var8;
                var1[6] = var7;
                var1[7] = var6;
                var1[8] = var5;
                var1[9] = var4;
                var0 = function() { // Environment: var0
                    _fun110576: for (var _fun110576_ip = 0;;) switch (_fun110576_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var12 = null;
                            var1 = var12 == var0;
                            var0 = null;
                            if (var1) {
                                _fun110576_ip = 403;
                                continue _fun110576
                            }
                        case 21:
                            var4 = _closure1_slot8;
                            var2 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var1 = 9;
                            var1 = var13[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.BaseActivityPanelContent;
                            var1 = {};
                            var5 = _closure2_slot2;
                            var5 = var12 != var5;
                            var1.hasConnectedActivity = var5;
                            var5 = _closure2_slot5;
                            var1.gesture = var5;
                            var5 = _closure2_slot6;
                            var1.headerWrapperStyles = var5;
                            var5 = _closure2_slot7;
                            var1.headerStyles = var5;
                            var14 = _closure2_slot0;
                            var1.landscape = var14;
                            var7 = _closure1_slot5;
                            var5 = {};
                            var8 = _closure2_slot8;
                            var8 = var8.buttonContainer;
                            var5.style = var8;
                            var11 = _closure1_slot7;
                            var10 = _closure1_slot1;
                            var8 = 10;
                            var8 = var13[var8];
                            var10 = var10.bind(var3)(var8);
                            var8 = {};
                            var13 = undefined;
                            if (var14) {
                                _fun110576_ip = 176;
                                continue _fun110576
                            }
                        case 154:
                            var14 = _closure2_slot4;
                            var14 = var12 == var14;
                            var13 = undefined;
                            if (var14) {
                                _fun110576_ip = 176;
                                continue _fun110576
                            }
                        case 167:
                            var14 = _closure2_slot4;
                            var13 = var14.name;
                        case 176:
                            var8.activityName = var13;
                            var13 = _closure2_slot1;
                            var8.setMode = var13;
                            var10 = var11.bind(var3)(var10, var8);
                            var8 = new Array(2);
                            var8[0] = var10;
                            var10 = _closure2_slot3;
                            var10 = var12 != var10;
                            if (!var10) {
                                _fun110576_ip = 255;
                                continue _fun110576
                            }
                        case 215:
                            var14 = _closure1_slot7;
                            var13 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var11 = 11;
                            var11 = var15[var11];
                            var13 = var13.bind(var3)(var11);
                            var11 = {};
                            var15 = _closure2_slot3;
                            var11.applicationId = var15;
                            var10 = var14.bind(var3)(var13, var11);
                        case 255:
                            var8[1] = var10;
                            var5.children = var8;
                            var7 = var4.bind(var3)(var7, var5);
                            var5 = new Array(3);
                            var5[0] = var7;
                            var10 = _closure1_slot7;
                            var8 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var7 = 12;
                            var7 = var11[var7];
                            var8 = var8.bind(var3)(var7);
                            var7 = {};
                            var11 = _closure2_slot4;
                            var12 = var12 == var11;
                            var11 = undefined;
                            if (var12) {
                                _fun110576_ip = 325;
                                continue _fun110576
                            }
                        case 316:
                            var12 = _closure2_slot4;
                            var11 = var12.id;
                        case 325:
                            var7.applicationId = var11;
                            var7 = var10.bind(var3)(var8, var7);
                            var5[1] = var7;
                            var8 = _closure1_slot7;
                            var7 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var6 = 13;
                            var6 = var10[var6];
                            var7 = var7.bind(var3)(var6);
                            var6 = {};
                            var10 = _closure2_slot2;
                            var6.frame = var10;
                            var9 = _closure2_slot1;
                            var6.setMode = var9;
                            var6 = var8.bind(var3)(var7, var6);
                            var5[2] = var6;
                            var1.children = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 403:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 9;
        var0 = var7[var0];
        var3 = undefined;
        var2 = var1.bind(var3)(var0);
        var1 = var2.useBaseActivityPanelHeader;
        var0 = {};
        var6 = _closure1_slot1;
        var5 = 14;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var0.context = var5;
        var0 = var1.bind(var2)(var0);
        var5 = var0.headerStyles;
        var9 = var0.wrapperDimensions;
        var8 = var0.setMode;
        var7 = var0.wrapperOffset;
        var6 = var0.pipState;
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {};
        var0.style = var5;
        var5 = _closure1_slot10;
        var4 = {};
        var9 = var9.isWindowLandscape;
        var4.landscape = var9;
        var4.setMode = var8;
        var4.wrapperOffset = var7;
        var4.pipState = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/frames/panel/native/FramePanelHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 7938, 33, 1297, 671, 566, 6904, 14236, 14238, 14256, 14239, 14257, 14248, 2]);