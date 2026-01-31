// modules/activities/panel/native/ActivityPanelUI.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: renderActivityOrPIP, environment: var3
        _fun110323: for (var _fun110323_ip = 0;;) switch (_fun110323_ip) {
            case 0:
                var4 = _closure1_slot7;
                var1 = _closure1_slot1;
                var3 = 'pip';
                var0 = arg1;
                if (!(var3 !== var0)) {
                    _fun110323_ip = 35;
                    continue _fun110323
                }
            case 22:
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                _fun110323_ip = 46;
                continue _fun110323;
            case 35:
                var3 = _closure1_slot2;
                var2 = 4;
                var0 = var3[var2];
            case 46:
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = {};
                var0 = arg2;
                var1.transitionState = var0;
                var0 = arg3;
                var1.transitionCleanUp = var0;
                var0 = arg0;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0) { // Original name: getKey, environment: var3
        var0 = arg0;
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: wrapChildren, environment: var3
        var3 = _closure1_slot7;
        var2 = _closure1_slot4;
        var1 = {};
        var0 = _closure1_slot5;
        var0 = var0.absoluteFill;
        var1.style = var0;
        var0 = 'box-none';
        var1.pointerEvents = var0;
        var0 = arg0;
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var1 = function(arg0) { // Original name: BaseActivityPanelUI, environment: var3
        var1 = arg0;
        var9 = var1.renderActivityOrPIP;
        var3 = var1.context;
        var4 = var1.renderActivityPanelSystemUIManager;
        var2 = _closure1_slot3;
        var1 = var2.useContext;
        var1 = var1.bind(var2)(var3);
        var7 = var1.mode;
        var _closure2_slot0 = var7;
        var2 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 6;
        var1 = var11[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var6 = var1.bind(var3)();
        var _closure2_slot1 = var6;
        var5 = _closure1_slot3;
        var2 = var5.useMemo;
        var1 = new Array(2);
        var1[0] = var7;
        var1[1] = var6;
        var0 = function() { // Environment: var0
            _fun110327: for (var _fun110327_ip = 0;;) switch (_fun110327_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot6;
                    var2 = var2.DISCONNECTED;
                    if (!(var3 !== var2)) {
                        _fun110327_ip = 79;
                        continue _fun110327
                    }
                case 24:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot6;
                    var2 = var2.PIP;
                    if (!(var3 === var2)) {
                        _fun110327_ip = 49;
                        continue _fun110327
                    }
                case 42:
                    var2 = _closure2_slot1;
                    if (var2) {
                        _fun110327_ip = 79;
                        continue _fun110327
                    }
                case 49:
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot6;
                    var0 = var0.PIP;
                    if (!(var2 !== var0)) {
                        _fun110327_ip = 73;
                        continue _fun110327
                    }
                case 67:
                    var0 = _closure1_slot11;
                    _fun110327_ip = 77;
                    continue _fun110327;
                case 73:
                    var0 = _closure1_slot10;
                case 77:
                    _fun110327_ip = 83;
                    continue _fun110327;
                case 79:
                    var0 = _closure1_slot9;
                case 83:
                    return var0;
            }
        };
        var10 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot8;
        var6 = _closure1_slot0;
        var0 = 7;
        var0 = var11[var0];
        var0 = var6.bind(var3)(var0);
        var1 = var0.LayerScope;
        var0 = {};
        var5 = var4.bind(var3)();
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot7;
        var5 = 8;
        var5 = var11[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.TransitionGroup;
        var5 = {};
        var5.items = var10;
        var5.renderItem = var9;
        var9 = _closure1_slot13;
        var5.getItemKey = var9;
        var8 = _closure1_slot14;
        var5.wrapChildren = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.StyleSheet;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = new Array(0);
    var _closure1_slot9 = var4;
    var4 = ['pip'];
    var _closure1_slot10 = var4;
    var4 = ['activity'];
    var _closure1_slot11 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/ActivityPanelUI.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() { // Original name: ActivityPanelUI, environment: var3
        var5 = _closure1_slot3;
        var4 = var5.useCallback;
        var3 = function() { // Environment: var0
            var3 = _closure1_slot7;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 9;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2 = new Array(0);
        var4 = var4.bind(var5)(var3, var2);
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot7;
            var2 = _closure1_slot15;
            var1 = {};
            var4 = _closure1_slot12;
            var1.renderActivityOrPIP = var4;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var0 = 10;
            var4 = var4[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var1.context = var4;
            var4 = _closure2_slot0;
            var1.renderActivityPanelSystemUIManager = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var3;
    var2.BaseActivityPanelUI = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7876, 33, 14164, 14170, 14179, 5168, 3987, 14180, 14162, 2]);