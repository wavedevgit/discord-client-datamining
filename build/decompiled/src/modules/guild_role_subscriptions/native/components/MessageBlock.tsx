// modules/guild_role_subscriptions/native/components/MessageBlock.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun108424: for (var _fun108424_ip = 0;;) switch (_fun108424_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot5;
                var0 = var0.RED;
                if (!(var0 !== var2)) {
                    _fun108424_ip = 104;
                    continue _fun108424
                }
            case 20:
                var0 = _closure1_slot5;
                var0 = var0.YELLOW;
                if (!(var0 !== var2)) {
                    _fun108424_ip = 38;
                    continue _fun108424
                }
            case 34:
                var0 = undefined;
                return var0;
            case 38:
                var0 = {};
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 3;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.colors;
                var6 = var6.BACKGROUND_FEEDBACK_WARNING;
                var0.backgroundColor = var6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.STATUS_WARNING;
                var0.borderColor = var2;
                return var0;
            case 104:
                var0 = {};
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 3;
                var5 = var4[var1];
                var2 = undefined;
                var5 = var3.bind(var2)(var5);
                var5 = var5.colors;
                var5 = var5.BACKGROUND_FEEDBACK_CRITICAL;
                var0.backgroundColor = var5;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.colors;
                var1 = var1.BORDER_FEEDBACK_CRITICAL;
                var0.borderColor = var1;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        _fun108425: for (var _fun108425_ip = 0;;) switch (_fun108425_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot5;
                var1 = var1.RED;
                if (!(var1 !== var2)) {
                    _fun108425_ip = 73;
                    continue _fun108425
                }
            case 20:
                var1 = _closure1_slot5;
                var1 = var1.YELLOW;
                if (!(var1 !== var2)) {
                    _fun108425_ip = 38;
                    continue _fun108425
                }
            case 34:
                var1 = undefined;
                return var1;
            case 38:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.colors;
                var1 = var1.TEXT_FEEDBACK_WARNING;
                return var1;
            case 73:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.colors;
                var0 = var0.TEXT_FEEDBACK_CRITICAL;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var8 = 0;
    var4 = var6[var8];
    var1 = arg3;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var7 = 1;
    var1 = var6[var7];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot4 = var1;
    var1 = {};
    var1.RED = var8;
    var4 = 'RED';
    var1[var8] = var4;
    var1.YELLOW = var7;
    var4 = 'YELLOW';
    var1[var7] = var4;
    var _closure1_slot5 = var1;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = function(arg0) { // Environment: var3
        var4 = arg0;
        var0 = {};
        var1 = {};
        var5 = _closure1_slot7;
        var3 = undefined;
        var9 = var5.bind(var3)(var4);
        var10 = var1;
        var5 = copyDataProperties(var10, var9);
        var5 = 'center';
        var6 = 'alignItems';
        var1[var6] = var5;
        var7 = _closure1_slot1;
        var8 = _closure1_slot2;
        var6 = 3;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.radii;
        var7 = var6.xs;
        var6 = 'borderRadius';
        var1[var6] = var7;
        var7 = 1;
        var6 = 'borderWidth';
        var1[var6] = var7;
        var7 = 8;
        var6 = 'padding';
        var1[var6] = var7;
        var7 = '100%';
        var6 = 'width';
        var1[var6] = var7;
        var0.container = var1;
        var1 = {};
        var1.textAlign = var5;
        var2 = _closure1_slot8;
        var2 = var2.bind(var3)(var4);
        var1.color = var2;
        var0.text = var1;
        return var0;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/MessageBlock.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.color;
        var6 = var0.children;
        var0 = _closure1_slot6;
        var3 = undefined;
        var7 = var0.bind(var3)(var1);
        var2 = _closure1_slot4;
        var1 = _closure1_slot3;
        var0 = {};
        var5 = var7.container;
        var0.style = var5;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 5;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.LegacyText;
        var4 = {};
        var7 = var7.text;
        var4.style = var7;
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.MessageBlockColors = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 671, 1297, 4876, 2]);