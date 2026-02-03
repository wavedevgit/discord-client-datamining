// modules/contact_sync/native/ContactSyncPersistedStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var4 = function arg0() {
        var8 = arg0;
        var _closure2_slot0 = var8;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 0;
        var3 = var4[var0];
        var0 = undefined;
        var3 = var5.bind(var0)(var3);
        var7 = var3.Storage;
        var6 = var7.set;
        var3 = 'V2_DCD_CONTACTS_STORAGE_KEY';
        var3 = var6.bind(var7)(var3, var8);
        var3 = 1;
        var3 = var4[var3];
        var6 = var5.bind(var0)(var3);
        var5 = var6.batchUpdates;
        var3 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var3 = arg0;
                var4 = var0;
                var1 = copyDataProperties(var4, var3);
                var2 = _closure2_slot0;
                var1 = 'storedContacts';
                var0[var1] = var2;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var3 = var5.bind(var6)(var3);
        var3 = _closure1_slot1;
        var2 = 2;
        var2 = var4[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.wait;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'CONTACT_SYNC_STORED_CONTACTS';
            var0.type = var3;
            var4 = _closure2_slot0;
            var3 = '';
            var3 = var3 === var4;
            var0.empty = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot3 = var4;
    var5 = 0;
    var3 = var7[var5];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var10 = var3.Storage;
    var9 = var10.asyncGet;
    var8 = 'V2_DCD_CONTACTS_STORAGE_KEY';
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot3;
        var0 = undefined;
        var1 = arg0;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var9.bind(var10)(var8, var3);
    var3 = 3;
    var3 = var7[var3];
    var9 = var6.bind(var0)(var3);
    var8 = var9.create;
    var3 = function() { // Environment: var1
        var0 = {
            'loadedPolicyNotice': false,
            'storedContacts': '',
            'upsellCTADismissed': false,
            'policyUpdateNoticeDismissed': false,
            'dmListCTADismissed': false
        };
        return var0;
    };
    var3 = var8.bind(var9)(var3);
    var _closure1_slot4 = var3;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var11 = var8.Storage;
    var10 = var11.asyncGet;
    var9 = 'ContactSyncDMListCTADismissed';
    var8 = function(arg0) { // Environment: var1
        _fun81140: for (var _fun81140_ip = 0;;) switch (_fun81140_ip) {
            case 0:
                var3 = global;
                var4 = var3.Boolean;
                var0 = undefined;
                var2 = arg0;
                var2 = var4.bind(var0)(var2);
                var _closure2_slot0 = var2;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 0;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var6 = var4.Storage;
                var5 = var6.get;
                var4 = 'contact_sync_dm_list_cta_first_seen_date';
                var4 = var5.bind(var6)(var4);
                var5 = null;
                if (!(var5 == var4)) {
                    _fun81140_ip = 89;
                    continue _fun81140
                }
            case 74:
                var6 = var3.Date;
                var5 = var6.now;
                var4 = var5.bind(var6)();
            case 89:
                var5 = var3.Date;
                var3 = var5.now;
                var3 = var3.bind(var5)();
                var4 = var3 - var4;
                var3 = 5184000000.0;
                if (!(var4 > var3)) {
                    _fun81140_ip = 128;
                    continue _fun81140
                }
            case 122:
                var3 = true;
                _closure2_slot0 = var3;
            case 128:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 1;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = _closure2_slot0;
                    var0.dmListCTADismissed = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var8 = var10.bind(var11)(var9, var8);
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var10 = var5.Storage;
    var9 = var10.asyncGet;
    var8 = 'ContactSyncUpsellCTADismissed';
    var5 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var3 = !var3;
            var3 = !var3;
            var0.upsellCTADismissed = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var5 = var9.bind(var10)(var8, var5);
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/contact_sync/native/ContactSyncPersistedStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.setStoredContacts = var4;
    var4 = function() { // Environment: var1
        _fun81144: for (var _fun81144_ip = 0;;) switch (_fun81144_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 0;
                var0 = var0[var1];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var2 = var0.Storage;
                var0 = var2.get;
                var6 = 'V2_DCD_CONTACTS_STORAGE_KEY';
                var2 = var0.bind(var2)(var6);
                var0 = null;
                var5 = var0 != var2;
                var0 = '';
                if (!var5) {
                    _fun81144_ip = 62;
                    continue _fun81144
                }
            case 59:
                var0 = var2;
            case 62:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var5 = var1.Storage;
                var1 = var5.remove;
                var1 = var1.bind(var5)(var6);
                var1 = 1;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.setState;
                    var0 = function(arg0) { // Environment: var0
                        var0 = {};
                        var3 = arg0;
                        var4 = var0;
                        var1 = copyDataProperties(var4, var3);
                        var2 = '';
                        var1 = 'storedContacts';
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
    var2.deleteStoredContacts = var4;
    var2.useContactSyncStore = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 0;
        var1 = var3[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var6 = var1.Storage;
        var5 = var6.set;
        var4 = 'ContactSyncUpsellCTADismissed';
        var1 = true;
        var1 = var5.bind(var6)(var4, var1);
        var1 = 1;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var3 = arg0;
                var4 = var0;
                var1 = copyDataProperties(var4, var3);
                var2 = true;
                var1 = 'upsellCTADismissed';
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
    var2.dismissUpsellCTA = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 0;
        var1 = var3[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var6 = var1.Storage;
        var5 = var6.set;
        var4 = 'ContactSyncDMListCTADismissed';
        var1 = true;
        var1 = var5.bind(var6)(var4, var1);
        var1 = 1;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var3 = arg0;
                var4 = var0;
                var1 = copyDataProperties(var4, var3);
                var2 = true;
                var1 = 'dmListCTADismissed';
                var0[var1] = var2;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.dismissDMListCTA = var3;
    var3 = function() {
        _fun81153: for (var _fun81153_ip = 0;;) switch (_fun81153_ip) {
            case 0:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = 0;
                var2 = var0[var3];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var5 = var2.Storage;
                var2 = var5.get;
                var4 = 'contact_sync_dm_list_cta_first_seen_date';
                var2 = var2.bind(var5)(var4);
                if (var2) {
                    _fun81153_ip = 100;
                    continue _fun81153
                }
            case 49:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var1 = var2.bind(var0)(var1);
                var3 = var1.Storage;
                var2 = var3.set;
                var1 = global;
                var5 = var1.Date;
                var1 = var5.now;
                var1 = var1.bind(var5)();
                var1 = var2.bind(var3)(var4, var1);
            case 100:
                return var0;
        }
    };
    var2.setDMListCTAFirstSeenDate = var3;
    var1 = function() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 0;
        var5 = var4[var2];
        var0 = undefined;
        var5 = var3.bind(var0)(var5);
        var7 = var5.Storage;
        var6 = var7.remove;
        var5 = 'ContactSyncUpsellCTADismissed';
        var5 = var6.bind(var7)(var5);
        var2 = var4[var2];
        var2 = var3.bind(var0)(var2);
        var4 = var2.Storage;
        var3 = var4.remove;
        var2 = 'ContactSyncDMListCTADismissed';
        var2 = var3.bind(var4)(var2);
        var3 = _closure1_slot4;
        var2 = var3.setState;
        var1 = function(arg0) { // Environment: var1
            var0 = {};
            var3 = arg0;
            var4 = var0;
            var1 = copyDataProperties(var4, var3);
            var2 = false;
            var1 = 'upsellCTADismissed';
            var0[var1] = var2;
            var1 = 'dmListCTADismissed';
            var0[var1] = var2;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearDismissState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [587, 802, 806, 629, 2]);