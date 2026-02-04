// modules/user_settings/native/defs/InternalBuildUpdateSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var1 = {};
    var7 = true;
    var1.value = var7;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var1 = 8;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createPressable;
    var1 = {
        'title': 'Internal Build Update',
        'parent': null
    };
    var9 = function() {
        _fun88054: for (var _fun88054_ip = 0;;) switch (_fun88054_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 3;
                var0 = var3[var0];
                var3 = undefined;
                var5 = var2.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.latestFetchedBuild;
                    var0 = var0.bind(var1)();
                    var1 = var0.newBuild;
                    var0 = null;
                    var0 = var0 !== var1;
                    return var0;
                };
                var0 = var4.bind(var5)(var2, var0);
                var2 = _closure1_slot5;
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                if (var0) {
                    _fun88054_ip = 92;
                    continue _fun88054
                }
            case 72:
                var0 = 7;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var1 = var0.RefreshIcon;
                _fun88054_ip = 110;
                continue _fun88054;
            case 92:
                var0 = 6;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var1 = var0.DownloadIcon;
            case 110:
                var0 = {};
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.IconComponent = var9;
    var9 = function() {
        _fun88056: for (var _fun88056_ip = 0;;) switch (_fun88056_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 3;
                var4 = var6[var2];
                var3 = undefined;
                var10 = var5.bind(var3)(var4);
                var9 = var10.useStateFromStores;
                var7 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var7;
                var4 = function() { // Environment: var0
                    _fun88057: for (var _fun88057_ip = 0;;) switch (_fun88057_ip) {
                        case 0:
                            var1 = _closure1_slot4;
                            var0 = var1.latestFetchedBuild;
                            var0 = var0.bind(var1)();
                            var1 = var0.newBuild;
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun88057_ip = 40;
                                continue _fun88057
                            }
                        case 34:
                            var0 = var1.build;
                        case 40:
                            return var0;
                    }
                };
                var4 = var9.bind(var10)(var8, var4);
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.latestFetchedBuild;
                    var0 = var0.bind(var1)();
                    var0 = var0.lastCheck;
                    return var0;
                };
                var2 = var5.bind(var6)(var2, var0);
                var0 = null;
                if (!(var0 == var4)) {
                    _fun88056_ip = 172;
                    continue _fun88056
                }
            case 98:
                var5 = var0 != var2;
                var0 = 'Never refreshed';
                if (!var5) {
                    _fun88056_ip = 170;
                    continue _fun88056
                }
            case 111:
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 4;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var2 = var1.bind(var3)(var2);
                var1 = var2.fromNow;
                var3 = var1.bind(var2)();
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Last refreshed ';
                var0 = var2.bind(var1)(var3);
            case 170:
                _fun88056_ip = 203;
                continue _fun88056;
            case 172:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = 'Open build ';
                var1 = ' installer in a browser';
                var0 = var3.bind(var2)(var4, var1);
            case 203:
                return var0;
        }
    };
    var1.useDescription = var9;
    var9 = function() {
        _fun88059: for (var _fun88059_ip = 0;;) switch (_fun88059_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.useStaffOrDeveloperSettingPredicate;
                var1 = var1.bind(var2)();
                var0 = _closure1_slot4;
                var0 = var0.hasUpdatesConfigured;
                if (!var0) {
                    _fun88059_ip = 51;
                    continue _fun88059
                }
            case 48:
                var0 = var1;
            case 51:
                return var0;
        }
    };
    var1.usePredicate = var9;
    var8 = function() {
        _fun88060: for (var _fun88060_ip = 0;;) switch (_fun88060_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.latestFetchedBuild;
                var1 = var1.bind(var2)();
                var2 = var1.newBuild;
                var1 = null;
                if (!(var1 === var2)) {
                    _fun88060_ip = 45;
                    continue _fun88060
                }
            case 29:
                var3 = _closure1_slot4;
                var1 = var3.checkForNewerBuild;
                var1 = var1.bind(var3)();
                _fun88060_ip = 78;
                continue _fun88060;
            case 45:
                var3 = _closure1_slot2;
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.openBuildInstaller;
                var0 = var0.bind(var1)(var2);
            case 78:
                var0 = undefined;
                return var0;
        }
    };
    var1.onPress = var8;
    var1.withArrow = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/InternalBuildUpdateSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11384, 33, 11385, 566, 3045, 10451, 3260, 10765, 8999, 2]);