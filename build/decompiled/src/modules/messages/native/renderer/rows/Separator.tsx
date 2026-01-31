// modules/messages/native/renderer/rows/Separator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
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
    var6 = var3.RowType;
    var _closure1_slot2 = var6;
    var3 = var3.SeparatorType;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createNativeStyleProperties;
    var3 = {};
    var8 = 2;
    var10 = var5[var8];
    var10 = var9.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var3.dayColor = var10;
    var10 = var5[var8];
    var10 = var9.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.RED_400;
    var3.unreadColor = var10;
    var8 = var5[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.colors;
    var8 = var8.TEXT_BRAND;
    var3.summaryColor = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/rows/Separator.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun92523: for (var _fun92523_ip = 0;;) switch (_fun92523_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.rowType;
                var1 = var0.changeType;
                var6 = _closure1_slot4;
                var2 = undefined;
                var3 = arg1;
                var3 = var6.bind(var2)(var3);
                var6 = _closure1_slot3;
                var6 = var6.DAY;
                if (!(var6 !== var4)) {
                    _fun92523_ip = 225;
                    continue _fun92523
                }
            case 49:
                var6 = _closure1_slot3;
                var6 = var6.UNREAD;
                if (!(var6 !== var4)) {
                    _fun92523_ip = 179;
                    continue _fun92523
                }
            case 63:
                var6 = _closure1_slot3;
                var6 = var6.SUMMARY;
                if (!(var6 !== var4)) {
                    _fun92523_ip = 110;
                    continue _fun92523
                }
            case 77:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 3;
                var6 = var8[var6];
                var7 = var7.bind(var2)(var6);
                var6 = var7.assertNever;
                var6 = var6.bind(var7)(var4);
                return var2;
            case 110:
                var7 = var0.summary;
                var6 = var0.isBeforeContent;
                var2 = {};
                var8 = _closure1_slot2;
                var8 = var8.SEPARATOR;
                var2.type = var8;
                var2.id = var4;
                var8 = var3.summaryColor;
                var2.color = var8;
                var8 = var7.topic;
                var2.text = var8;
                var2.summary = var7;
                var2.isBeforeContent = var6;
                var2.changeType = var1;
                return var2;
            case 179:
                var6 = var0.text;
                var2 = {};
                var7 = _closure1_slot2;
                var7 = var7.SEPARATOR;
                var2.type = var7;
                var2.id = var4;
                var7 = var3.unreadColor;
                var2.color = var7;
                var2.changeType = var1;
                var2.text = var6;
                return var2;
            case 225:
                var2 = var0.text;
                var0 = {};
                var5 = _closure1_slot2;
                var5 = var5.SEPARATOR;
                var0.type = var5;
                var0.id = var4;
                var3 = var3.dayColor;
                var0.color = var3;
                var0.text = var2;
                var0.changeType = var1;
                return var0;
        }
    };
    var2.generateSeparatorRowData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6479, 1297, 671, 1304, 2]);