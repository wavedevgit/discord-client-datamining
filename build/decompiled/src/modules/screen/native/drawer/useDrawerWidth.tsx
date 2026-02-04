// modules/screen/native/drawer/useDrawerWidth.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun77658: for (var _fun77658_ip = 0;;) switch (_fun77658_ip) {
            case 0:
                var0 = arg1;
                if (var0) {
                    _fun77658_ip = 44;
                    continue _fun77658
                }
            case 9:
                var0 = global;
                var4 = var0.Math;
                var3 = var4.min;
                var2 = _closure1_slot4;
                var5 = arg0;
                var0 = 32;
                var0 = var5 - var0;
                var0 = var3.bind(var4)(var2, var0);
                _fun77658_ip = 48;
                continue _fun77658;
            case 44:
                var0 = _closure1_slot3;
            case 48:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var7 = var3.DM_WIDTH;
    var3 = 260;
    var3 = var3 + var7;
    var _closure1_slot3 = var3;
    var4 = 300;
    var4 = var4 + var7;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen/native/drawer/useDrawerWidth.tsx';
    var4 = var5.bind(var6)(var4);
    var2.DRAWER_LEFT_WIDTH_MIN = var3;
    var3 = function() {
        _fun77659: for (var _fun77659_ip = 0;;) switch (_fun77659_ip) {
            case 0:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 1;
                var0 = var5[var0];
                var4 = undefined;
                var3 = var2.bind(var4)(var0);
                var0 = var3.getAppContainerDimensions;
                var0 = var0.bind(var3)();
                var3 = var0.width;
                var0 = 2;
                var0 = var5[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.getChatLayout;
                var0 = var0.bind(var2)();
                var5 = var0.isChatBesideChannelList;
                var2 = var0.isChatLockedOpen;
                var0 = var3;
                if (!var5) {
                    _fun77659_ip = 90;
                    continue _fun77659
                }
            case 80:
                var1 = _closure1_slot5;
                var0 = var1.bind(var4)(var3, var2);
            case 90:
                return var0;
        }
    };
    var2.getDrawerWidth = var3;
    var1 = function() {
        _fun77660: for (var _fun77660_ip = 0;;) switch (_fun77660_ip) {
            case 0:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 1;
                var0 = var5[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var3 = var0.width;
                var0 = 2;
                var0 = var5[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var5 = var0.isChatBesideChannelList;
                var2 = var0.isChatLockedOpen;
                var0 = var3;
                if (!var5) {
                    _fun77660_ip = 78;
                    continue _fun77660
                }
            case 68:
                var1 = _closure1_slot5;
                var0 = var1.bind(var4)(var3, var2);
            case 78:
                return var0;
        }
    };
    var2.useDrawerWidth = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3924, 3922, 2]);