// modules/frames/panel/native/FramePanelHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
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
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var7 = var6.memo;
    var3 = function arg0() {
        _fun110500: for (var _fun110500_ip = 0;;) switch (_fun110500_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.landscape;
                var _closure2_slot0 = var5;
                var4 = var1.setMode;
                var _closure2_slot1 = var4;
                var7 = var1.pipState;
                var8 = var1.wrapperOffset;
                var10 = undefined;
                var _closure2_slot3 = var10;
                var _closure2_slot4 = var10;
                var _closure2_slot5 = var10;
                var _closure2_slot6 = var10;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 5;
                var2 = var6[var2];
                var11 = var3.bind(var10)(var2);
                var9 = var11.useStateFromStores;
                var2 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var2;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getConnectedFrame;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = new Array(0);
                var9 = var9.bind(var11)(var6, var3, var2);
                var _closure2_slot2 = var9;
                var12 = null;
                var2 = var12 == var9;
                var11 = undefined;
                if (var2) {
                    _fun110500_ip = 133;
                    continue _fun110500
                }
            case 128:
                var11 = var9.applicationId;
            case 133:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var3 = var3.bind(var10)(var2);
                var2 = new Array(1);
                var2[0] = var11;
                var11 = var3.bind(var10)(var2);
                var3 = _closure1_slot3;
                var2 = 1;
                var3 = var3.bind(var10)(var11, var2);
                var2 = 0;
                var11 = var3[var2];
                _closure2_slot3 = var11;
                var3 = _closure1_slot0;
                var2 = 7;
                var2 = var6[var2];
                var6 = var3.bind(var10)(var2);
                var3 = var6.useBaseActivityPanelHeaderContent;
                var2 = {};
                var2.landscape = var5;
                var2.setMode = var4;
                var2.wrapperOffset = var8;
                var2.pipState = var7;
                var2 = var3.bind(var6)(var2);
                var8 = var2.gesture;
                _closure2_slot4 = var8;
                var6 = var2.headerWrapperStyles;
                _closure2_slot5 = var6;
                var7 = var2.headerStyles;
                _closure2_slot6 = var7;
                var3 = _closure1_slot4;
                var2 = var3.useMemo;
                var1 = var12 == var11;
                var13 = undefined;
                if (var1) {
                    _fun110500_ip = 291;
                    continue _fun110500
                }
            case 286:
                var13 = var11.id;
            case 291:
                var1 = new Array(8);
                var1[0] = var13;
                var12 = var12 == var11;
                var10 = undefined;
                if (var12) {
                    _fun110500_ip = 313;
                    continue _fun110500
                }
            case 308:
                var10 = var11.name;
            case 313:
                var1[1] = var10;
                var1[2] = var9;
                var1[3] = var8;
                var1[4] = var7;
                var1[5] = var6;
                var1[6] = var5;
                var1[7] = var4;
                var0 = function() { // Environment: var0
                    _fun110502: for (var _fun110502_ip = 0;;) switch (_fun110502_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var12 = null;
                            var1 = var12 == var0;
                            var0 = null;
                            if (var1) {
                                _fun110502_ip = 310;
                                continue _fun110502
                            }
                        case 21:
                            var4 = _closure1_slot8;
                            var2 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = 7;
                            var1 = var10[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.BaseActivityPanelContent;
                            var1 = {};
                            var5 = _closure2_slot2;
                            var5 = var12 != var5;
                            var1.hasConnectedActivity = var5;
                            var5 = _closure2_slot4;
                            var1.gesture = var5;
                            var5 = _closure2_slot5;
                            var1.headerWrapperStyles = var5;
                            var5 = _closure2_slot6;
                            var1.headerStyles = var5;
                            var11 = _closure2_slot0;
                            var1.landscape = var11;
                            var8 = _closure1_slot7;
                            var7 = _closure1_slot1;
                            var5 = 8;
                            var5 = var10[var5];
                            var7 = var7.bind(var3)(var5);
                            var5 = {};
                            var10 = undefined;
                            if (var11) {
                                _fun110502_ip = 156;
                                continue _fun110502
                            }
                        case 134:
                            var11 = _closure2_slot3;
                            var11 = var12 == var11;
                            var10 = undefined;
                            if (var11) {
                                _fun110502_ip = 156;
                                continue _fun110502
                            }
                        case 147:
                            var11 = _closure2_slot3;
                            var10 = var11.name;
                        case 156:
                            var5.activityName = var10;
                            var10 = _closure2_slot1;
                            var5.setMode = var10;
                            var7 = var8.bind(var3)(var7, var5);
                            var5 = new Array(3);
                            var5[0] = var7;
                            var10 = _closure1_slot7;
                            var8 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var7 = 9;
                            var7 = var11[var7];
                            var8 = var8.bind(var3)(var7);
                            var7 = {};
                            var11 = _closure2_slot3;
                            var12 = var12 == var11;
                            var11 = undefined;
                            if (var12) {
                                _fun110502_ip = 232;
                                continue _fun110502
                            }
                        case 223:
                            var12 = _closure2_slot3;
                            var11 = var12.id;
                        case 232:
                            var7.applicationId = var11;
                            var7 = var10.bind(var3)(var8, var7);
                            var5[1] = var7;
                            var8 = _closure1_slot7;
                            var7 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var6 = 10;
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
                        case 310:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 7;
        var0 = var7[var0];
        var3 = undefined;
        var2 = var1.bind(var3)(var0);
        var1 = var2.useBaseActivityPanelHeader;
        var0 = {};
        var6 = _closure1_slot1;
        var5 = 11;
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
        var5 = _closure1_slot9;
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
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/frames/panel/native/FramePanelHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 7916, 33, 566, 6879, 14213, 14215, 14216, 14233, 14225, 2]);