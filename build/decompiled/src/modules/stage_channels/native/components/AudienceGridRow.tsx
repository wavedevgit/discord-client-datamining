// modules/stage_channels/native/components/AudienceGridRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var1 = function arg0() {
        _fun69547: for (var _fun69547_ip = 0;;) switch (_fun69547_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.count;
                var0 = new Array(0);
                var4 = 0;
                var6 = var4 < var5;
                var2 = 5;
                var1 = undefined;
                if (!var6) {
                    _fun69547_ip = 77;
                    continue _fun69547
                }
            case 30:
                var7 = var0.push;
                var9 = _closure1_slot4;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var2];
                var8 = var8.bind(var1)(var6);
                var6 = {};
                var6 = var9.bind(var1)(var8, var6, var4);
                var6 = var7.bind(var0)(var6);
                var4 = var4 + 1;
                if (var4 < var5) {
                    _fun69547_ip = 30;
                    continue _fun69547
                }
            case 77:
                return var0;
        }
    };
    var _closure1_slot7 = var1;
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
    var7 = var4.bind(var0)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.MAX_AUDIENCE_ROW_LIMIT;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {
        'flex': 1,
        'flexDirection': 'row',
        'marginVertical': 16,
        'paddingHorizontal': 4,
        'justifyContent': 'space-between'
    };
    var4.rowContainer = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var3
        _fun69548: for (var _fun69548_ip = 0;;) switch (_fun69548_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var _closure2_slot0 = var1;
                var8 = var0.participants;
                var12 = var0.renderBlankAudience;
                var3 = undefined;
                if (!(var12 === var3)) {
                    _fun69548_ip = 36;
                    continue _fun69548
                }
            case 34:
                var12 = true;
            case 36:
                var0 = var0.theme;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot6;
                var5 = var0.bind(var3)();
                var7 = 0;
                var9 = 0;
                if (!var12) {
                    _fun69548_ip = 77;
                    continue _fun69548
                }
            case 64:
                var1 = _closure1_slot3;
                var0 = var8.length;
                var9 = var1 - var0;
            case 77:
                var2 = _closure1_slot5;
                var1 = _closure1_slot2;
                var0 = {};
                var10 = var5.rowContainer;
                var5 = new Array(2);
                var5[0] = var10;
                var10 = {};
                var11 = 'center';
                if (!var12) {
                    _fun69548_ip = 116;
                    continue _fun69548
                }
            case 110:
                var11 = 'space-between';
            case 116:
                var10.justifyContent = var11;
                var5[1] = var10;
                var0.style = var5;
                var5 = var8.map;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var4 = _closure1_slot4;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 6;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.theme = var6;
                    var5 = _closure2_slot0;
                    var1.channel = var5;
                    var1.participant = var0;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var5 = var5.bind(var8)(var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!(var9 > var7)) {
                    _fun69548_ip = 180;
                    continue _fun69548
                }
            case 159:
                var8 = _closure1_slot4;
                var7 = _closure1_slot7;
                var6 = {};
                var6.count = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 180:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/native/components/AudienceGridRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.BlankAudience = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4235, 33, 1297, 8709, 8710, 2]);