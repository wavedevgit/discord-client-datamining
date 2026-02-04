// modules/user_settings/UserSettingsProtoManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun97852: for (var _fun97852_ip = 0;;) switch (_fun97852_ip) {
            case 0:
                var3 = _closure1_slot3;
                var0 = var3.getFullState;
                var3 = var0.bind(var3)();
                var _closure2_slot0 = var3;
                var0 = _closure1_slot4;
                var0 = var0.PRELOADED_USER_SETTINGS;
                var0 = var3[var0];
                var3 = var0.editInfo;
                var3 = var3.triggeredMigrations;
                if (!var3) {
                    _fun97852_ip = 110;
                    continue _fun97852
                }
            case 52:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 6;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var5 = var3.PreloadedUserSettingsActionCreators;
                var4 = var5.markDirtyFromMigration;
                var3 = var0.proto;
                var0 = var0.editInfo;
                var0 = var0.cleanupFuncs;
                var0 = var4.bind(var5)(var3, var0);
            case 110:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 7;
                var3 = var6[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.forEach;
                var5 = _closure1_slot0;
                var2 = 6;
                var2 = var6[var2];
                var2 = var5.bind(var0)(var2);
                var2 = var2.UserSettingsActionCreatorsByType;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun97853: for (var _fun97853_ip = 0;;) switch (_fun97853_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot0;
                            var0 = global;
                            var4 = var0.Number;
                            var0 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var0)(var1);
                            var3 = var3[var1];
                            var1 = var3.editInfo;
                            var1 = var1.offlineEditDataVersion;
                            var4 = null;
                            var1 = var4 != var1;
                            if (!var1) {
                                _fun97853_ip = 69;
                                continue _fun97853
                            }
                        case 53:
                            var3 = var3.editInfo;
                            var3 = var3.protoToSave;
                            var1 = var4 != var3;
                        case 69:
                            if (!var1) {
                                _fun97853_ip = 82;
                                continue _fun97853
                            }
                        case 72:
                            var1 = var2.scheduleSaveFromOfflineEdit;
                            var1 = var1.bind(var2)();
                        case 82:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.settings;
        var4 = var1.proto;
        var2 = var1.type;
        var6 = var0.delaySeconds;
        var5 = var0.jitter;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var1 = var1.UserSettingsActionCreatorsByType;
        var3 = var1[var2];
        var2 = var3.markDirty;
        var1 = {};
        var1.delaySeconds = var6;
        var1.jitter = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.settingsType;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var1 = var1.UserSettingsActionCreatorsByType;
        var2 = var1[var2];
        var1 = var2.loadIfNecessary;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        _fun97856: for (var _fun97856_ip = 0;;) switch (_fun97856_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.state;
                var0 = 'inactive';
                var0 = var0 !== var2;
                if (!var0) {
                    _fun97856_ip = 27;
                    continue _fun97856
                }
            case 19:
                var1 = 'background';
                var0 = var1 !== var2;
            case 27:
                if (var0) {
                    _fun97856_ip = 97;
                    continue _fun97856
                }
            case 30:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = var3.forEach;
                var1 = _closure1_slot0;
                var0 = 6;
                var0 = var5[var0];
                var0 = var1.bind(var4)(var0);
                var1 = var0.UserSettingsActionCreatorsByType;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun97857: for (var _fun97857_ip = 0;;) switch (_fun97857_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure1_slot3;
                            var0 = var1.getFullState;
                            var3 = var0.bind(var1)();
                            var0 = global;
                            var4 = var0.Number;
                            var0 = undefined;
                            var1 = arg1;
                            var1 = var4.bind(var0)(var1);
                            var1 = var3[var1];
                            var1 = var1.editInfo;
                            var3 = var1.timeout;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun97857_ip = 92;
                                continue _fun97857
                            }
                        case 60:
                            var4 = var2.logger;
                            var3 = var4.log;
                            var1 = 'Triggering persistChanges due to AppStateUpdate';
                            var1 = var3.bind(var4)(var1);
                            var1 = var2.persistChanges;
                            var1 = var1.bind(var2)();
                        case 92:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
            case 97:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.UserSettingsTypes;
    var _closure1_slot4 = var1;
    var1 = {};
    var3 = function() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 2;
        var5 = var4[var2];
        var0 = undefined;
        var7 = var3.bind(var0)(var5);
        var5 = _closure1_slot4;
        var6 = var5.PRELOADED_USER_SETTINGS;
        var5 = 3;
        var5 = var4[var5];
        var5 = var3.bind(var0)(var5);
        var7[var6] = var5;
        var2 = var4[var2];
        var6 = var3.bind(var0)(var2);
        var2 = _closure1_slot4;
        var5 = var2.FRECENCY_AND_FAVORITES_SETTINGS;
        var2 = 4;
        var2 = var4[var2];
        var2 = var3.bind(var0)(var2);
        var6[var5] = var2;
        var2 = 5;
        var5 = var4[var2];
        var8 = var3.bind(var0)(var5);
        var7 = var8.subscribe;
        var6 = _closure1_slot5;
        var5 = 'CONNECTION_OPEN';
        var5 = var7.bind(var8)(var5, var6);
        var5 = var4[var2];
        var8 = var3.bind(var0)(var5);
        var7 = var8.subscribe;
        var6 = _closure1_slot6;
        var5 = 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE';
        var5 = var7.bind(var8)(var5, var6);
        var5 = var4[var2];
        var8 = var3.bind(var0)(var5);
        var7 = var8.subscribe;
        var6 = _closure1_slot7;
        var5 = 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY';
        var5 = var7.bind(var8)(var5, var6);
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.subscribe;
        var2 = _closure1_slot8;
        var1 = 'APP_STATE_UPDATE';
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var1.init = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/UserSettingsProtoManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1310, 665, 1345, 12782, 12783, 806, 1355, 22, 2]);