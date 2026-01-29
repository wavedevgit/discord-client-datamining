// modules/voice_panel/native/utils/PanelSizeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
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
    var3 = var3.VOICE_PANEL_DRAWER_MAX_WIDTH;
    var _closure1_slot0 = var3;
    var3 = {};
    var4 = 'function getMaxPanelWidth_PanelSizeUtilsTsx1({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeAreaLeft,safeAreaRight:safeAreaRight}){const{VOICE_PANEL_DRAWER_MAX_WIDTH}=this.__closure;return Math.min(windowWidth,connected?windowWidth:Math.min(VOICE_PANEL_DRAWER_MAX_WIDTH,windowWidth-safeAreaLeft-safeAreaRight));}';
    var3.code = var4;
    var _closure1_slot1 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: getMaxPanelWidth, environment: var0
            _fun111081: for (var _fun111081_ip = 0;;) switch (_fun111081_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.windowWidth;
                    var6 = var0.connected;
                    var4 = var0.safeAreaLeft;
                    var8 = var0.safeAreaRight;
                    var5 = global;
                    var2 = var5.Math;
                    var1 = var2.min;
                    var0 = var3;
                    if (var6) {
                        _fun111081_ip = 78;
                        continue _fun111081
                    }
                case 46:
                    var7 = var5.Math;
                    var6 = var7.min;
                    var5 = _closure1_slot0;
                    var4 = var3 - var4;
                    var4 = var4 - var8;
                    var0 = var6.bind(var7)(var5, var4);
                case 78:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot0;
        var2.VOICE_PANEL_DRAWER_MAX_WIDTH = var3;
        var0.__closure = var2;
        var2 = 6813992446153.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot1;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var4 = {};
    var7 = 'function getPanelX_PanelSizeUtilsTsx2(windowWidth,width){return(windowWidth-width)/2;}';
    var4.code = var7;
    var _closure1_slot2 = var4;
    var1 = function() { // Environment: var1
        var0 = function(arg0, arg1) { // Original name: getPanelX, environment: var0
            var1 = arg0;
            var0 = arg1;
            var1 = var1 - var0;
            var0 = 2;
            var0 = var1 / var0;
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 6050807520832.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/utils/PanelSizeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getMaxPanelWidth = var3;
    var2.getPanelX = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11816, 2]);