// modules/activities/native/ActivitiesDebugOverlay.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var8 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var7 = var3.jsxs;
    var _closure1_slot5 = var7;
    var6 = var8.create;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'backgroundColor': null,
        'paddingRight': 16,
        'paddingBottom': 16
    };
    var10 = 3;
    var10 = var5[var10];
    var13 = var4.bind(var0)(var10);
    var12 = var13.hexWithOpacity;
    var10 = 4;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var11 = var10.BLACK;
    var10 = 0.7;
    var10 = var12.bind(var13)(var11, var10);
    var9.backgroundColor = var10;
    var3.container = var9;
    var9 = {};
    var10 = 'row';
    var9.flexDirection = var10;
    var3.row = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Text;
    var3 = {
        'variant': 'text-md/normal',
        'color': 'always-white'
    };
    var8 = ['thermal state:', ' '];
    var3.children = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/native/ActivitiesDebugOverlay.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun91870: for (var _fun91870_ip = 0;;) switch (_fun91870_ip) {
            case 0:
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var5 = 6;
                var1 = var0[var5];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.bind(var3)();
                var1 = _closure1_slot0;
                var0 = var0[var5];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ThermalStates;
                var0 = var0.UNHANDLED;
                var9 = '';
                var10 = 'always-white';
                if (!(var0 !== var2)) {
                    _fun91870_ip = 256;
                    continue _fun91870
                }
            case 71:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ThermalStates;
                var0 = var0.NOMINAL;
                var9 = 'nominal';
                var10 = 'text-feedback-positive';
                if (!(var0 !== var2)) {
                    _fun91870_ip = 256;
                    continue _fun91870
                }
            case 119:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ThermalStates;
                var0 = var0.FAIR;
                var9 = 'fair';
                var10 = 'text-feedback-warning';
                if (!(var0 !== var2)) {
                    _fun91870_ip = 256;
                    continue _fun91870
                }
            case 164:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ThermalStates;
                var1 = var0.SERIOUS;
                var9 = 'serious';
                var0 = 'text-feedback-critical';
                var10 = var0;
                if (!(var1 !== var2)) {
                    _fun91870_ip = 256;
                    continue _fun91870
                }
            case 212:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var3)(var1);
                var1 = var1.ThermalStates;
                var1 = var1.CRITICAL;
                var9 = undefined;
                var10 = undefined;
                if (!(var1 === var2)) {
                    _fun91870_ip = 256;
                    continue _fun91870
                }
            case 249:
                var9 = 'critical';
                var10 = var0;
            case 256:
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 7;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var13 = var0.top;
                var12 = var0.left;
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var6 = _closure1_slot6;
                var5 = var6.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var8 = 16;
                var13 = var13 + var8;
                var5.paddingTop = var13;
                var8 = var12 + var8;
                var5.paddingLeft = var8;
                var4[1] = var5;
                var0.style = var4;
                var4 = 'none';
                var0.pointerEvents = var4;
                var5 = _closure1_slot5;
                var4 = {};
                var6 = var6.row;
                var4.style = var6;
                var8 = _closure1_slot7;
                var6 = new Array(2);
                var6[0] = var8;
                var8 = _closure1_slot0;
                var7 = 5;
                var7 = var11[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {};
                var11 = 'text-md/normal';
                var7.variant = var11;
                var7.color = var10;
                var7.children = var9;
                var7 = var2.bind(var3)(var8, var7);
                var6[1] = var7;
                var4.children = var6;
                var4 = var5.bind(var3)(var1, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3241, 671, 3938, 7984, 1568, 2]);