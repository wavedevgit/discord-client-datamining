// modules/checkpoint/native/components/CheckpointEmphasis.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun86541: for (var _fun86541_ip = 0;;) switch (_fun86541_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var0 = 0;
            var3 = var5[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var3 = var3.useContext;
            var _closure1_slot2 = var3;
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
                'transform': null,
                'padding': 2,
                'display': 'flex',
                'flexDirection': 'row',
                'alignItems': 'center'
            };
            var9 = 4;
            var10 = var5[var9];
            var11 = var4.bind(var0)(var10);
            var10 = var11.isIOS;
            var11 = var10.bind(var11)();
            var10 = 'translateY(6px)';
            if (!var11) {
                _fun86541_ip = 195;
                continue _fun86541
            }
        case 189:
            var10 = 'translateY(2px)';
        case 195:
            var8.transform = var10;
            var10 = 5;
            var11 = var5[var10];
            var10 = metroImportDefault;
            var10 = var10.bind(var0)(var11);
            var10 = var10.spacing;
            var10 = var10.PX_4;
            var8.gap = var10;
            var3.emphasis = var8;
            var8 = {};
            var9 = var5[var9];
            var10 = var4.bind(var0)(var9);
            var9 = var10.isIOS;
            var10 = var9.bind(var10)();
            var9 = 'none';
            if (!var10) {
                _fun86541_ip = 270;
                continue _fun86541
            }
        case 264:
            var9 = 'translateY(2px)';
        case 270:
            var8.transform = var9;
            var3.emphasisText = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot6 = var3;
            var3 = 9;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/checkpoint/native/components/CheckpointEmphasis.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function(arg0) { // Original name: CheckpointEmphasis, environment: var1
                _fun86542: for (var _fun86542_ip = 0;;) switch (_fun86542_ip) {
                    case 0:
                        var0 = arg0;
                        var8 = var0.children;
                        var6 = var0.icon;
                        var11 = var0.forcePosition;
                        var0 = _closure1_slot6;
                        var3 = undefined;
                        var9 = var0.bind(var3)();
                        var1 = _closure1_slot2;
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 6;
                        var0 = var4[var0];
                        var0 = var2.bind(var3)(var0);
                        var0 = var0.CheckpointColorContext;
                        var0 = var1.bind(var3)(var0);
                        var1 = 7;
                        var1 = var4[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.useToken;
                        var0 = var0.primaryColor;
                        var10 = var1.bind(var2)(var0);
                        var2 = _closure1_slot5;
                        var1 = _closure1_slot3;
                        var0 = {};
                        var7 = var9.emphasis;
                        var4 = new Array(3);
                        var4[0] = var7;
                        var7 = {};
                        var7.backgroundColor = var10;
                        var4[1] = var7;
                        var7 = undefined;
                        if (var11) {
                            _fun86542_ip = 148;
                            continue _fun86542
                        }
                    case 135:
                        var10 = {};
                        var12 = 'none';
                        var10.transform = var12;
                        var7 = var10;
                    case 148:
                        var4[2] = var7;
                        var0.style = var4;
                        var4 = new Array(2);
                        var4[0] = var6;
                        var7 = _closure1_slot4;
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var5 = 8;
                        var5 = var10[var5];
                        var5 = var6.bind(var3)(var5);
                        var6 = var5.Text;
                        var5 = {
                            'style': null,
                            'variant': 'heading-lg/medium',
                            'color': 'black'
                        };
                        var10 = var9.emphasisText;
                        var9 = new Array(2);
                        var9[0] = var10;
                        var10 = undefined;
                        if (var11) {
                            _fun86542_ip = 239;
                            continue _fun86542
                        }
                    case 226:
                        var11 = {};
                        var12 = 'none';
                        var11.transform = var12;
                        var10 = var11;
                    case 239:
                        var9[1] = var10;
                        var5.style = var9;
                        var5.children = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 479, 671, 11136, 3110, 3901, 2]);