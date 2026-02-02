// modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx
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
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var11 = var1.hasChanges;
        var _closure2_slot0 = var11;
        var10 = var1.selectedFontId;
        var _closure2_slot1 = var10;
        var9 = var1.selectedEffectId;
        var _closure2_slot2 = var9;
        var8 = var1.selectedColors;
        var _closure2_slot3 = var8;
        var7 = var1.defaultColor;
        var _closure2_slot4 = var7;
        var5 = var1.guildId;
        var _closure2_slot5 = var5;
        var4 = var1.isTryItOut;
        var _closure2_slot6 = var4;
        var6 = var1.onClose;
        var _closure2_slot7 = var6;
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = new Array(8);
        var1[0] = var11;
        var1[1] = var10;
        var1[2] = var9;
        var1[3] = var8;
        var1[4] = var7;
        var1[5] = var6;
        var1[6] = var5;
        var1[7] = var4;
        var0 = function() { // Environment: var0
            _fun84856: for (var _fun84856_ip = 0;;) switch (_fun84856_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    if (!var1) {
                        _fun84856_ip = 372;
                        continue _fun84856
                    }
                case 13:
                    var2 = _closure2_slot3;
                    var4 = _closure2_slot2;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var9 = 2;
                    var3 = var1[var9];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.DisplayNameEffect;
                    var3 = var3.SOLID;
                    var3 = var4 === var3;
                    if (!var3) {
                        _fun84856_ip = 80;
                        continue _fun84856
                    }
                case 65:
                    var4 = _closure2_slot3;
                    var5 = var4.length;
                    var4 = 0;
                    var3 = var5 > var4;
                case 80:
                    if (!var3) {
                        _fun84856_ip = 101;
                        continue _fun84856
                    }
                case 83:
                    var5 = _closure2_slot3;
                    var4 = 0;
                    var5 = var5[var4];
                    var4 = _closure2_slot4;
                    var3 = var5 === var4;
                case 101:
                    if (!var3) {
                        _fun84856_ip = 108;
                        continue _fun84856
                    }
                case 104:
                    var2 = new Array(0);
                case 108:
                    var5 = {};
                    var3 = _closure2_slot1;
                    var5.fontId = var3;
                    var3 = _closure2_slot2;
                    var5.effectId = var3;
                    var5.colors = var2;
                    var2 = _closure2_slot5;
                    var3 = null;
                    if (!(var3 == var2)) {
                        _fun84856_ip = 207;
                        continue _fun84856
                    }
                case 142:
                    var2 = _closure2_slot6;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    if (var2) {
                        _fun84856_ip = 182;
                        continue _fun84856
                    }
                case 157:
                    var2 = 5;
                    var2 = var6[var2];
                    var7 = var4.bind(var1)(var2);
                    var2 = var7.setPendingDisplayNameStyles;
                    var2 = var2.bind(var7)(var5);
                    _fun84856_ip = 238;
                    continue _fun84856;
                case 182:
                    var2 = 4;
                    var2 = var6[var2];
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.setTryItOutDisplayNameStyles;
                    var2 = var2.bind(var4)(var5);
                    _fun84856_ip = 238;
                    continue _fun84856;
                case 207:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 3;
                    var2 = var6[var2];
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.setGuildMemberPendingDisplayNameStyles;
                    var2 = var2.bind(var4)(var5);
                case 238:
                    var4 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 6;
                    var2 = var7[var2];
                    var6 = var4.bind(var1)(var2);
                    var5 = var6.track;
                    var2 = _closure1_slot4;
                    var4 = var2.DISPLAY_NAME_STYLES_APPLIED;
                    var2 = {};
                    var8 = _closure1_slot0;
                    var10 = 7;
                    var10 = var7[var10];
                    var10 = var8.bind(var1)(var10);
                    var11 = var10.DisplayNameFont;
                    var10 = _closure2_slot1;
                    var10 = var11[var10];
                    var2.font_name = var10;
                    var7 = var7[var9];
                    var7 = var8.bind(var1)(var7);
                    var8 = var7.DisplayNameEffect;
                    var7 = _closure2_slot2;
                    var7 = var8[var7];
                    var2.effect_name = var7;
                    var7 = _closure2_slot3;
                    var2.colors = var7;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure2_slot7;
                    if (!(var3 != var2)) {
                        _fun84856_ip = 372;
                        continue _fun84856
                    }
                case 364:
                    var0 = _closure2_slot7;
                    var0 = var0.bind(var1)();
                case 372:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useDisplayNameStylesHandleApply = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 1625, 5686, 5550, 5685, 795, 1626, 2]);