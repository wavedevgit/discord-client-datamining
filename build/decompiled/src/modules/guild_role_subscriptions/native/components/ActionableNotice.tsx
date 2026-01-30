// modules/guild_role_subscriptions/native/components/ActionableNotice.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'paddingVertical': 12,
        'alignItems': 'center'
    };
    var3.container = var8;
    var8 = {
        'marginEnd': 27,
        'flex': 3
    };
    var3.message = var8;
    var8 = {
        'flexGrow': 0,
        'paddingHorizontal': 16,
        'height': 32,
        'alignSelf': 'center'
    };
    var3.actionButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/ActionableNotice.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ActionableNotice, environment: var1
        _fun117618: for (var _fun117618_ip = 0;;) switch (_fun117618_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.style;
                var12 = var0.message;
                var8 = var0.ctaMessage;
                var11 = var0.onClick;
                var9 = var0.submitting;
                var10 = var0.disabled;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun117618_ip = 44;
                    continue _fun117618
                }
            case 42:
                var10 = false;
            case 44:
                var0 = _closure1_slot6;
                var15 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = new Array(2);
                var4[0] = var6;
                var6 = var15.container;
                var4[1] = var6;
                var0.style = var4;
                var7 = _closure1_slot4;
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 4;
                var4 = var14[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var13 = var15.message;
                var4.style = var13;
                var4.children = var12;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var13 = _closure1_slot1;
                var12 = 5;
                var5 = var14[var12];
                var6 = var13.bind(var3)(var5);
                var5 = {};
                var15 = var15.actionButton;
                var5.style = var15;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.Colors;
                var12 = var12.BRAND;
                var5.color = var12;
                var5.onPress = var11;
                if (var9) {
                    _fun117618_ip = 221;
                    continue _fun117618
                }
            case 218:
                var9 = var10;
            case 221:
                var5.disabled = var9;
                var5.text = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 3901, 4835, 2]);