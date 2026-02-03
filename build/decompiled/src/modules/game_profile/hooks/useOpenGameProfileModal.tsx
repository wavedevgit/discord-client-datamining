// modules/game_profile/hooks/useOpenGameProfileModal.tsx
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
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_profile/hooks/useOpenGameProfileModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78829: for (var _fun78829_ip = 0;;) switch (_fun78829_ip) {
            case 0:
                var5 = arg0;
                var0 = arguments[1];
                var _closure2_slot0 = var5;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun78829_ip = 20;
                    continue _fun78829
                }
            case 18:
                var0 = {};
            case 20:
                var0 = var0.onOpened;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var2 = var5.applicationId;
                _closure2_slot2 = var2;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 1;
                var4 = var6[var4];
                var7 = var7.bind(var3)(var4);
                var4 = var7.useGetOrFetchApplicationBatched;
                var9 = var4.bind(var7)(var2);
                _closure2_slot3 = var9;
                var8 = _closure1_slot3;
                var7 = var8.useMemo;
                var4 = new Array(2);
                var4[0] = var9;
                var4[1] = var2;
                var2 = function() { // Environment: var1
                    _fun78830: for (var _fun78830_ip = 0;;) switch (_fun78830_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun78830_ip = 90;
                                continue _fun78830
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 2;
                            var0 = var4[var0];
                            var4 = undefined;
                            var5 = var3.bind(var4)(var0);
                            var3 = var5.isRobloxSubgameApplication;
                            var0 = _closure2_slot3;
                            var0 = var3.bind(var5)(var0);
                            if (var0) {
                                _fun78830_ip = 62;
                                continue _fun78830
                            }
                        case 56:
                            var0 = _closure2_slot2;
                            _fun78830_ip = 88;
                            continue _fun78830;
                        case 62:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 3;
                            var2 = var5[var2];
                            var2 = var3.bind(var4)(var2);
                            var0 = var2.ROBLOX_APPLICATION_ID;
                        case 88:
                            _fun78830_ip = 94;
                            continue _fun78830;
                        case 90:
                            var0 = _closure2_slot2;
                        case 94:
                            return var0;
                    }
                };
                var4 = var7.bind(var8)(var2, var4);
                _closure2_slot4 = var4;
                var2 = _closure1_slot1;
                var0 = 4;
                var0 = var6[var0];
                var2 = var2.bind(var3)(var0);
                var0 = {};
                var11 = var0;
                var10 = var5;
                var5 = copyDataProperties(var11, var10);
                var5 = 'applicationId';
                var0[var5] = var4;
                var0 = var2.bind(var3)(var0);
                _closure2_slot5 = var0;
                var2 = var0.shouldOpenGameProfile;
                var0 = undefined;
                if (!var2) {
                    _fun78829_ip = 208;
                    continue _fun78829
                }
            case 190:
                var2 = null;
                var2 = var2 != var4;
                var0 = undefined;
                if (!var2) {
                    _fun78829_ip = 208;
                    continue _fun78829
                }
            case 201:
                var0 = function(arg0) { // Environment: var1
                    _fun78831: for (var _fun78831_ip = 0;;) switch (_fun78831_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.stopPropagation;
                            var0 = var0.bind(var1)();
                            var0 = var1.preventDefault;
                            var0 = var0.bind(var1)();
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.openGameProfileModal;
                            var2 = {};
                            var7 = _closure2_slot0;
                            var8 = var2;
                            var5 = copyDataProperties(var8, var7);
                            var6 = _closure2_slot4;
                            var5 = 'applicationId';
                            var2[var5] = var6;
                            var6 = _closure2_slot5;
                            var5 = 'gameProfileModalChecks';
                            var2[var5] = var6;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun78831_ip = 121;
                                continue _fun78831
                            }
                        case 113:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)();
                        case 121:
                            return var0;
                    }
                };
            case 208:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 10027, 3608, 3609, 10028, 10031, 2]);