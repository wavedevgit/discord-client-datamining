// modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TABLE_ROW_PADDING;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var10 = var1.guild;
        var _closure2_slot0 = var10;
        var12 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 4;
        var1 = var7[var1];
        var3 = undefined;
        var2 = var12.bind(var3)(var1);
        var1 = var2.useGuildProgressStep;
        var1 = var1.bind(var2)(var10);
        var6 = var1.percentComplete;
        var8 = var1.subtitle;
        var9 = var1.completed;
        var _closure2_slot1 = var9;
        var4 = _closure1_slot3;
        var11 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var9;
        var1 = var10.id;
        var2[1] = var1;
        var1 = function() { // Environment: var0
            _fun102125: for (var _fun102125_ip = 0;;) switch (_fun102125_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (!var1) {
                        _fun102125_ip = 55;
                        continue _fun102125
                    }
                case 10:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.markCompletedProgressSeen;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var11.bind(var4)(var1, var2);
        var2 = var4.useCallback;
        var1 = new Array(2);
        var1[0] = var10;
        var1[1] = var9;
        var0 = function() { // Environment: var0
            _fun102126: for (var _fun102126_ip = 0;;) switch (_fun102126_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    if (var0) {
                        _fun102126_ip = 55;
                        continue _fun102126
                    }
                case 10:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 5;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.createProgress;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var0);
                case 55:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.openActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot5;
        var9 = 6;
        var0 = var7[var9];
        var0 = var12.bind(var3)(var0);
        var1 = var0.RowButton;
        var0 = {};
        var9 = var7[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.RowButton;
        var10 = var9.Icon;
        var9 = {};
        var5 = _closure1_slot1;
        var11 = 7;
        var11 = var7[var11];
        var11 = var5.bind(var3)(var11);
        var9.source = var11;
        var11 = 'blurple';
        var9.variant = var11;
        var9 = var2.bind(var3)(var10, var9);
        var0.icon = var9;
        var9 = 8;
        var10 = var7[var9];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var7[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.o3HK3d;
        var9 = var10.bind(var11)(var9);
        var0.label = var9;
        var0.subLabel = var8;
        var0.onPress = var4;
        var4 = 9;
        var4 = var7[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var4.percent = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.trailing = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var1 = function arg0() {
        var5 = arg0;
        var1 = _closure1_slot4;
        var4 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 3;
        var2 = var6[var0];
        var3 = undefined;
        var8 = var4.bind(var3)(var2);
        var7 = var8.scaleTextLineHeight;
        var2 = 'text-md/semibold';
        var2 = var7.bind(var8)(var2, var5);
        var2 = var1 + var2;
        var0 = var6[var0];
        var4 = var4.bind(var3)(var0);
        var3 = var4.scaleTextLineHeight;
        var0 = 'text-xs/medium';
        var3 = var3.bind(var4)(var0, var5);
        var0 = 2;
        var0 = var0 * var3;
        var0 = var2 + var0;
        var0 = var0 + var1;
        return var0;
    };
    var2.getScaledGuildProgressButtonHeight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4870, 33, 6980, 10251, 10255, 5380, 13312, 1234, 10260, 2]);