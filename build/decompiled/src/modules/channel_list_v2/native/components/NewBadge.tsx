// modules/channel_list_v2/native/components/NewBadge.tsx
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
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun89864: for (var _fun89864_ip = 0;;) switch (_fun89864_ip) {
            case 0:
                var0 = {};
                var1 = {
                    'textAlign': 'center',
                    'textTransform': 'uppercase'
                };
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 4;
                var2 = var5[var2];
                var5 = undefined;
                var4 = var4.bind(var5)(var2);
                var2 = var4.isIOS;
                var4 = var2.bind(var4)();
                var2 = 0;
                if (!var4) {
                    _fun89864_ip = 59;
                    continue _fun89864
                }
            case 56:
                var2 = 1;
            case 59:
                var1.marginTop = var2;
                var0.text = var1;
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'borderRadius': null,
                    'paddingHorizontal': 6,
                    'paddingVertical': 3
                };
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var6 = 5;
                var2 = var7[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.radii;
                var2 = var2.round;
                var1.borderRadius = var2;
                var2 = 6;
                var4 = _closure1_slot0;
                var2 = var7[var2];
                var7 = var4.bind(var5)(var2);
                var4 = var7.isThemeLight;
                var2 = arg1;
                var2 = var4.bind(var7)(var2);
                if (!var2) {
                    _fun89864_ip = 186;
                    continue _fun89864
                }
            case 150:
                var2 = arg0;
                if (var2) {
                    _fun89864_ip = 186;
                    continue _fun89864
                }
            case 156:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BRAND;
                _fun89864_ip = 214;
                continue _fun89864;
            case 186:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.colors;
                var2 = var3.MOBILE_TOAST_BACKGROUND_DEFAULT;
            case 214:
                var1.backgroundColor = var2;
                var0.base = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/components/NewBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun89865: for (var _fun89865_ip = 0;;) switch (_fun89865_ip) {
            case 0:
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 7;
                var0 = var11[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var8 = var0.bind(var3)();
                var0 = 8;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var10 = var0.bind(var3)();
                var0 = _closure1_slot5;
                var7 = var0.bind(var3)(var8, var10);
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var7.base;
                var0.style = var4;
                var9 = _closure1_slot0;
                var4 = 9;
                var4 = var11[var4];
                var4 = var9.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                var12 = 'text-xxs/bold';
                var4.variant = var12;
                var7 = var7.text;
                var4.style = var7;
                var7 = 6;
                var7 = var11[var7];
                var9 = var9.bind(var3)(var7);
                var7 = var9.isThemeLight;
                var7 = var7.bind(var9)(var10);
                if (var7) {
                    _fun89865_ip = 152;
                    continue _fun89865
                }
            case 143:
                var7 = 'text-brand';
                if (!var8) {
                    _fun89865_ip = 158;
                    continue _fun89865
                }
            case 152:
                var7 = 'always-white';
            case 158:
                var4.color = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 10;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.y2b7CA;
                var6 = var7.bind(var8)(var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 478, 671, 3208, 8752, 3248, 3943, 1234, 2]);