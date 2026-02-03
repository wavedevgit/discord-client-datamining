// modules/video_calls/native/useChannelFloatingCTAContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/useChannelFloatingCTAContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 3;
        var4 = var7[var2];
        var3 = undefined;
        var9 = var6.bind(var3)(var4);
        var8 = var9.useStateFromStores;
        var4 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() { // Environment: var0
            _fun69570: for (var _fun69570_ip = 0;;) switch (_fun69570_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun69570_ip = 41;
                        continue _fun69570
                    }
                case 16:
                    var3 = _closure1_slot5;
                    var2 = var3.getChannelId;
                    var2 = var2.bind(var3)();
                    var1 = _closure2_slot0;
                    var0 = var2 === var1;
                case 41:
                    return var0;
            }
        };
        var4 = var8.bind(var9)(var5, var4);
        var8 = _closure1_slot1;
        var5 = 4;
        var5 = var7[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.bind(var3)();
        var _closure2_slot1 = var5;
        var _closure2_slot2 = var4;
        var2 = var7[var2];
        var7 = var6.bind(var3)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var1 = _closure1_slot4;
            var0 = var1.isAnyLocalVideoAutoDisabled;
            var0 = var0.bind(var1)();
            return var0;
        };
        var6 = var6.bind(var7)(var3, var2);
        var _closure2_slot3 = var6;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(3);
        var1[0] = var6;
        var1[1] = var5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun69572: for (var _fun69572_ip = 0;;) switch (_fun69572_ip) {
                case 0:
                    var0 = new Array(0);
                    var2 = _closure2_slot3;
                    if (!var2) {
                        _fun69572_ip = 61;
                        continue _fun69572
                    }
                case 14:
                    var3 = var0.push;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.DismissibleContent;
                    var2 = var2.VOICE_PANEL_BAD_CONNECTION_CTA;
                    var2 = var3.bind(var0)(var2);
                case 61:
                    var2 = _closure2_slot2;
                    if (!var2) {
                        _fun69572_ip = 115;
                        continue _fun69572
                    }
                case 68:
                    var3 = var0.push;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 5;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.DismissibleContent;
                    var2 = var2.SOUNDBOARD_MOBILE_FLOATING_CTA;
                    var2 = var3.bind(var0)(var2);
                case 115:
                    var3 = _closure2_slot1;
                    var2 = var3.some;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.twoWayLink;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    if (!var1) {
                        _fun69572_ip = 189;
                        continue _fun69572
                    }
                case 142:
                    var2 = var0.push;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 5;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = var1.DismissibleContent;
                    var1 = var1.DONUT_MOBILE_NUX;
                    var1 = var2.bind(var0)(var1);
                case 189:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3467, 3509, 632, 8285, 1358, 2]);