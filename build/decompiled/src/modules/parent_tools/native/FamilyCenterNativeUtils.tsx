// modules/parent_tools/native/FamilyCenterNativeUtils.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.FAMILY_CENTER_LINK_REQUEST_REGEX;
    var _closure1_slot3 = var6;
    var3 = var3.FamilyCenterAction;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/native/FamilyCenterNativeUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Environment: var1
        _fun82177: for (var _fun82177_ip = 0;;) switch (_fun82177_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.match;
                var0 = _closure1_slot3;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun82177_ip = 183;
                    continue _fun82177
                }
            case 30:
                var1 = 1;
                var7 = var2[var1];
                var1 = 2;
                var6 = var2[var1];
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = var2[var1];
                var1 = undefined;
                var10 = var5.bind(var1)(var4);
                var9 = var10.track;
                var4 = _closure1_slot5;
                var8 = var4.FAMILY_CENTER_ACTION;
                var4 = {};
                var11 = _closure1_slot4;
                var11 = var11.ScanQRCode;
                var4.action = var11;
                var4.selected_teen_id = var7;
                var11 = arg1;
                var4.source = var11;
                var4 = var9.bind(var10)(var8, var4);
                var4 = 3;
                var4 = var2[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.pushLazy;
                var8 = _closure1_slot0;
                var3 = 5;
                var3 = var2[var3];
                var8 = var8.bind(var1)(var3);
                var3 = 4;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var8.bind(var1)(var3, var2);
                var2 = {};
                var2.userId = var7;
                var2.linkCode = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            case 183:
                return var0;
        }
    };
    var2.handleFamilyCenterQRCodeScan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4590, 660, 795, 4557, 10476, 1307, 2]);