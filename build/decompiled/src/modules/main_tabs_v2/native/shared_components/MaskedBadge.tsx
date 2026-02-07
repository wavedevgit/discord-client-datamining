// modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx
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
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'relative';
    var8.position = var9;
    var8.right = var0;
    var3.maskStyle = var8;
    var8 = {
        'width': 0,
        'height': 0
    };
    var3.unreadDot = var8;
    var8 = {
        'flexGrow': 1,
        'flexShrink': 0
    };
    var3.badgeStyle = var8;
    var8 = {
        'position': 'relative',
        'bottom': 4294967293
    };
    var3.unreadBadge = var8;
    var8 = {};
    var9 = 3;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.PRIMARY_400;
    var8.backgroundColor = var9;
    var3.lowPriorityBadge = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun71682: for (var _fun71682_ip = 0;;) switch (_fun71682_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.backgroundColor;
                var _closure2_slot0 = var12;
                var2 = var1.unread;
                var6 = var1.value;
                var5 = var1.maxValue;
                var11 = var1.lowPriority;
                var13 = var1.size;
                var8 = var1.style;
                var3 = _closure1_slot5;
                var4 = undefined;
                var10 = var3.bind(var4)();
                var9 = _closure1_slot3;
                var7 = var9.useMemo;
                var3 = new Array(1);
                var3[0] = var12;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var1 = _closure2_slot0;
                    var0.backgroundColor = var1;
                    return var0;
                };
                var9 = var7.bind(var9)(var0, var3);
                var0 = 0;
                if (!(!(var6 > var0))) {
                    _fun71682_ip = 154;
                    continue _fun71682
                }
            case 96:
                var0 = null;
                if (!var2) {
                    _fun71682_ip = 152;
                    continue _fun71682
                }
            case 101:
                var7 = _closure1_slot4;
                var3 = _closure1_slot1;
                var14 = _closure1_slot2;
                var2 = 5;
                var2 = var14[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.size = var13;
                var2.maskColor = var12;
                var12 = var10.unreadBadge;
                var2.style = var12;
                var0 = var7.bind(var4)(var3, var2);
            case 152:
                _fun71682_ip = 272;
                continue _fun71682;
            case 154:
                var3 = _closure1_slot4;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 4;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.MaskedBadge;
                var1 = {};
                var7 = new Array(2);
                var7[0] = var9;
                var9 = var10.maskStyle;
                var7[1] = var9;
                var1.maskStyle = var7;
                var7 = var10.unreadDot;
                var1.dotStyle = var7;
                var9 = var10.badgeStyle;
                var7 = new Array(3);
                var7[0] = var9;
                var9 = null;
                if (!var11) {
                    _fun71682_ip = 245;
                    continue _fun71682
                }
            case 239:
                var9 = var10.lowPriorityBadge;
            case 245:
                var7[1] = var9;
                var7[2] = var8;
                var1.style = var7;
                var1.value = var6;
                var1.maxValue = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 272:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 8713, 8978, 2]);