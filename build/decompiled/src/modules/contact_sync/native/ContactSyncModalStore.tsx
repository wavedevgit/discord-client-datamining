// modules/contact_sync/native/ContactSyncModalStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = function() {
        var0 = {
            'mode': null,
            'permissionState': null,
            'error': '',
            'phone': null,
            'phoneToken': null,
            'name': null,
            'isNameFromContactBook': false,
            'allowPhone': true,
            'allowEmail': true,
            'bulkAddToken': null
        };
        var2 = _closure1_slot6;
        var2 = var2.NORMAL;
        var0.mode = var2;
        var1 = _closure1_slot4;
        var1 = var1.NOT_DETERMINED;
        var0.permissionState = var1;
        var1 = new Array(0);
        var0.suggestions = var1;
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var9 = 0;
    var3 = var7[var9];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var8 = 1;
    var3 = var7[var8];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var5 = 2;
    var3 = var7[var5];
    var3 = var6.bind(var0)(var3);
    var3 = var3.ContactPermissions;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot5 = var3;
    var4 = {};
    var4.NORMAL = var9;
    var3 = 'NORMAL';
    var4[var9] = var3;
    var4.ONBOARDING = var8;
    var3 = 'ONBOARDING';
    var4[var8] = var3;
    var4.ONBOARDING_INVITE = var5;
    var3 = 'ONBOARDING_INVITE';
    var4[var5] = var3;
    var _closure1_slot6 = var4;
    var3 = 4;
    var3 = var7[var3];
    var8 = var6.bind(var0)(var3);
    var5 = var8.create;
    var3 = function() { // Environment: var1
        var1 = _closure1_slot8;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var3 = var5.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/contact_sync/native/ContactSyncModalStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.ContactSyncModes = var4;
    var2.useContactSyncModalStore = var3;
    var3 = function arg0() {
        _fun80997: for (var _fun80997_ip = 0;;) switch (_fun80997_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot2;
                var3 = var4.getLocalAccount;
                var0 = _closure1_slot5;
                var0 = var0.CONTACTS;
                var5 = var3.bind(var4)(var0);
                var3 = null;
                var6 = var3 == var5;
                var0 = undefined;
                var4 = undefined;
                if (var6) {
                    _fun80997_ip = 55;
                    continue _fun80997
                }
            case 50:
                var4 = var5.name;
            case 55:
                var _closure2_slot1 = var4;
                var5 = _closure1_slot3;
                var4 = var5.getCurrentUser;
                var4 = var4.bind(var5)();
                var5 = var3 == var4;
                var3 = undefined;
                if (var5) {
                    _fun80997_ip = 87;
                    continue _fun80997
                }
            case 81:
                var3 = var4.phone;
            case 87:
                var _closure2_slot2 = var3;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 5;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.setState;
                    var0 = function() { // Environment: var0
                        var0 = {};
                        var2 = _closure1_slot8;
                        var1 = undefined;
                        var4 = var2.bind(var1)();
                        var5 = var0;
                        var1 = copyDataProperties(var5, var4);
                        var3 = _closure2_slot0;
                        var2 = 'mode';
                        var0[var2] = var3;
                        var3 = _closure2_slot2;
                        var2 = 'phone';
                        var0[var2] = var3;
                        var2 = _closure2_slot1;
                        var1 = 'name';
                        var0[var1] = var2;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.initialize = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot7;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var3 = arg0;
                var4 = var0;
                var1 = copyDataProperties(var4, var3);
                var2 = _closure2_slot0;
                var1 = 'allowPhone';
                var0[var1] = var2;
                var1 = 'allowEmail';
                var0[var1] = var2;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setAllowSync = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot7;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var3 = arg0;
                var4 = var0;
                var1 = copyDataProperties(var4, var3);
                var2 = _closure2_slot0;
                var1 = 'allowPhone';
                var0[var1] = var2;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setAllowPhone = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot7;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var3 = arg0;
                var4 = var0;
                var1 = copyDataProperties(var4, var3);
                var2 = _closure2_slot0;
                var1 = 'allowEmail';
                var0[var1] = var2;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setAllowEmail = var3;
    var3 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot7;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var4 = arg0;
                var5 = var0;
                var1 = copyDataProperties(var5, var4);
                var3 = _closure2_slot0;
                var2 = 'suggestions';
                var0[var2] = var3;
                var2 = _closure2_slot1;
                var1 = 'bulkAddToken';
                var0[var1] = var2;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setSuggestions = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot7;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var3 = arg0;
                var4 = var0;
                var1 = copyDataProperties(var4, var3);
                var2 = _closure2_slot0;
                var1 = 'phone';
                var0[var1] = var2;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPhone = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot7;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var3 = arg0;
                var4 = var0;
                var1 = copyDataProperties(var4, var3);
                var2 = _closure2_slot0;
                var1 = 'phoneToken';
                var0[var1] = var2;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPhoneToken = var3;
    var3 = function arg0() {
        _fun81018: for (var _fun81018_ip = 0;;) switch (_fun81018_ip) {
            case 0:
                var2 = arguments[1];
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun81018_ip = 20;
                    continue _fun81018
                }
            case 18:
                var2 = false;
            case 20:
                var _closure2_slot1 = var2;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 5;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot7;
                    var1 = var2.setState;
                    var0 = function(arg0) { // Environment: var0
                        var0 = {};
                        var4 = arg0;
                        var5 = var0;
                        var1 = copyDataProperties(var5, var4);
                        var3 = _closure2_slot0;
                        var2 = 'name';
                        var0[var2] = var3;
                        var2 = _closure2_slot1;
                        var1 = 'isNameFromContactBook';
                        var0[var1] = var2;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setName = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot7;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var3 = arg0;
                var4 = var0;
                var1 = copyDataProperties(var4, var3);
                var2 = _closure2_slot0;
                var1 = 'permissionState';
                var0[var1] = var2;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPermissionState = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot7;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var3 = arg0;
                var4 = var0;
                var1 = copyDataProperties(var4, var3);
                var2 = _closure2_slot0;
                var1 = 'error';
                var0[var1] = var2;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setError = var3;
    var3 = function() {
        _fun81027: for (var _fun81027_ip = 0;;) switch (_fun81027_ip) {
            case 0:
                var2 = _closure1_slot7;
                var0 = undefined;
                var0 = var2.bind(var0)();
                var2 = var0.mode;
                var0 = _closure1_slot6;
                var0 = var0.ONBOARDING;
                var0 = var2 === var0;
                if (var0) {
                    _fun81027_ip = 49;
                    continue _fun81027
                }
            case 35:
                var1 = _closure1_slot6;
                var1 = var1.ONBOARDING_INVITE;
                var0 = var2 === var1;
            case 49:
                return var0;
        }
    };
    var2.useIsOnboarding = var3;
    var1 = function() {
        _fun81028: for (var _fun81028_ip = 0;;) switch (_fun81028_ip) {
            case 0:
                var2 = _closure1_slot7;
                var0 = var2.getState;
                var0 = var0.bind(var2)();
                var2 = var0.mode;
                var0 = _closure1_slot6;
                var0 = var0.ONBOARDING;
                var0 = var2 === var0;
                if (var0) {
                    _fun81028_ip = 53;
                    continue _fun81028
                }
            case 39:
                var1 = _closure1_slot6;
                var1 = var1.ONBOARDING_INVITE;
                var0 = var2 === var1;
            case 53:
                return var0;
        }
    };
    var2.getIsOnboarding = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4519, 1621, 10313, 660, 629, 802, 2]);