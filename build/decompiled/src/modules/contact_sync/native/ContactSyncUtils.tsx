// modules/contact_sync/native/ContactSyncUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var10;
    var3 = function arg0() {
        _fun81125: for (var _fun81125_ip = 0;;) switch (_fun81125_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun81125_ip = 18;
                    continue _fun81125
                }
            case 12:
                var0 = var1.friendSync;
            case 18:
                if (!var0) {
                    _fun81125_ip = 43;
                    continue _fun81125
                }
            case 21:
                var2 = var1.type;
                var1 = _closure1_slot12;
                var1 = var1.CONTACTS;
                var0 = var2 === var1;
            case 43:
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var4 = global;
    var8 = var4.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var5);
    var0 = 0;
    var5 = var10[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var5 = var5.NativeModules;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var10[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var6 = var5.useContactSyncStore;
    var _closure1_slot6 = var6;
    var6 = var5.clearDismissState;
    var _closure1_slot7 = var6;
    var5 = var5.deleteStoredContacts;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var6 = var5.CONTACT_SYNC_MODAL_KEY;
    var _closure1_slot9 = var6;
    var5 = var5.ContactSyncSuggestionsSetting;
    var _closure1_slot10 = var5;
    var5 = 5;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var6 = var5.Endpoints;
    var _closure1_slot11 = var6;
    var6 = var5.PlatformTypes;
    var _closure1_slot12 = var6;
    var6 = var5.FriendDiscoveryFlags;
    var _closure1_slot13 = var6;
    var5 = var5.HelpdeskArticles;
    var _closure1_slot14 = var5;
    var7 = var4.Error;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var13 = 'No contact permissions';
    var14 = var6;
    var5 = new var14[var7](var13, var12);
    var7 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot15 = var7;
    var8 = var4.Error;
    var5 = var8.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var8
        }
    });
    var13 = 'No phone number';
    var14 = var6;
    var5 = new var14[var8](var13, var12);
    var6 = var5 instanceof Object ? var5 : var6;
    var8 = var4.Error;
    var4 = var8.prototype;
    var5 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var13 = 'Failed to fetch contact image';
    var14 = var5;
    var4 = new var14[var8](var13, var12);
    var5 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot16 = var5;
    var4 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun81128: for (var _fun81128_ip = 0;;) switch (_fun81128_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun81128_ip = 266;
                            continue _fun81128
                        }
                    case 15:
                        var7 = undefined;
                        if (!(var8 === var7)) {
                            _fun81128_ip = 23;
                            continue _fun81128
                        }
                    case 21:
                        var8 = false;
                    case 23:
                        var _closure4_slot0 = var7;
                        SaveGenerator(address = 31);
                    case 29:
                        return var7;
                    case 31:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun81128_ip = 263;
                            continue _fun81128
                        }
                    case 40:
                        var2 = global;
                        var5 = var2.JSON;
                        var3 = var5.parse;
                        var2 = arg0;
                        var10 = var3.bind(var5)(var2);
                        var3 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var2 = 6;
                        var2 = var12[var2];
                        var6 = var3.bind(var7)(var2);
                        var3 = var6.put;
                        var2 = {};
                        var9 = _closure1_slot11;
                        var9 = var9.CONNECTION_SYNC_CONTACTS;
                        var2.url = var9;
                        var9 = {};
                        var9.friend_list_entries = var10;
                        var9.background = var8;
                        var8 = _closure1_slot10;
                        var8 = var8.ANYONE_WITH_CONTACT_INFO;
                        var9.allowed_in_suggestions = var8;
                        var8 = false;
                        var9.include_mutual_friends_count = var8;
                        var2.body = var9;
                        var9 = {};
                        var11 = _closure1_slot0;
                        var10 = 7;
                        var10 = var12[var10];
                        var10 = var11.bind(var7)(var10);
                        var10 = var10.NetworkActionNames;
                        var10 = var10.USER_CONTACTS_SYNC;
                        var9.event = var10;
                        var2.trackedActionData = var9;
                        var2.rejectWithError = var8;
                        var2 = var3.bind(var6)(var2);
                        SaveGenerator(address = 204);
                    case 202:
                        return var2;
                    case 204:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun81128_ip = 260;
                            continue _fun81128
                        }
                    case 210:
                        var3 = var2.body;
                        _closure4_slot0 = var3;
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 8;
                        var5 = var8[var5];
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.wait;
                        var4 = function() { // Environment: var4
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'LOAD_FRIEND_SUGGESTIONS_SUCCESS';
                            var0.type = var3;
                            var3 = _closure4_slot0;
                            var3 = var3.friend_suggestions;
                            var0.suggestions = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 260:
                        return var2;
                    case 263:
                        return var1;
                    case 266:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var4 = var4.bind(var0)();
    var8 = 17;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/contact_sync/native/ContactSyncUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.ContactSyncPermissionDenied = var7;
    var2.ContactSyncFailedUserHasNoPhone = var6;
    var2.ContactImageFetchFailed = var5;
    var5 = function() { // Environment: var1
        var0 = _closure1_slot4;
        var1 = var0.DCDContactSyncManager;
        var0 = var1.hasContactsPermissions;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.checkContactPermissions = var5;
    var2.uploadContacts = var4;
    var4 = function(arg0, arg1) { // Environment: var1
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 6;
        var0 = var7[var0];
        var6 = undefined;
        var2 = var1.bind(var6)(var0);
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot11;
        var3 = var3.USER_BULK_RELATIONSHIPS;
        var0.url = var3;
        var3 = {};
        var5 = arg0;
        var3.user_ids = var5;
        var5 = arg1;
        var3.token = var5;
        var0.body = var3;
        var3 = {};
        var5 = _closure1_slot0;
        var4 = 7;
        var4 = var7[var4];
        var4 = var5.bind(var6)(var4);
        var4 = var4.NetworkActionNames;
        var4 = var4.USER_BULK_RELATIONSHIPS_UPDATE;
        var3.event = var4;
        var0.trackedActionData = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.body;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.bulkAddFriends = var4;
    var4 = function() { // Environment: var1
        var0 = _closure1_slot7;
        var7 = undefined;
        var0 = var0.bind(var7)();
        var0 = _closure1_slot8;
        var0 = var0.bind(var7)();
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 9;
        var0 = var8[var0];
        var1 = var6.bind(var7)(var0);
        var0 = var1.removeLastUserContactsUpload;
        var0 = var0.bind(var1)();
        var0 = 10;
        var0 = var8[var0];
        var0 = var6.bind(var7)(var0);
        var1 = var0.ContactSyncEnabled;
        var0 = var1.updateSetting;
        var3 = false;
        var0 = var0.bind(var1)(var3);
        var1 = _closure1_slot1;
        var0 = 6;
        var0 = var8[var0];
        var2 = var1.bind(var7)(var0);
        var1 = var2.delete;
        var0 = {};
        var10 = _closure1_slot11;
        var9 = var10.CONNECTION;
        var4 = _closure1_slot12;
        var5 = var4.CONTACTS;
        var4 = '@me';
        var4 = var9.bind(var10)(var5, var4);
        var0.url = var4;
        var4 = true;
        var0.oldFormErrors = var4;
        var4 = {};
        var5 = 7;
        var5 = var8[var5];
        var5 = var6.bind(var7)(var5);
        var5 = var5.NetworkActionNames;
        var5 = var5.USER_CONNECTIONS_UPDATE;
        var4.event = var5;
        var0.trackedActionData = var4;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.adminDeleteContactSync = var4;
    var4 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot4;
        var1 = var1.DCDContactSyncManager;
        var _closure2_slot1 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var3 = _closure2_slot1;
            var2 = var3.getImageForContactId;
            var1 = _closure2_slot0;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun81137: for (var _fun81137_ip = 0;;) switch (_fun81137_ip) {
                    case 0:
                        var4 = arg1;
                        var1 = null;
                        var0 = arg0;
                        if (!(var1 != var0)) {
                            _fun81137_ip = 35;
                            continue _fun81137
                        }
                    case 12:
                        var2 = _closure3_slot1;
                        var1 = _closure1_slot16;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        _fun81137_ip = 78;
                        continue _fun81137;
                    case 35:
                        var2 = _closure3_slot0;
                        var3 = var4.replace;
                        var1 = /(\r\n|\n|\r)/gm;
                        var0 = '';
                        var1 = var3.bind(var4)(var1, var0);
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 78:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.getImageForContactId = var4;
    var4 = function(arg0) { // Environment: var1
        _fun81138: for (var _fun81138_ip = 0;;) switch (_fun81138_ip) {
            case 0:
                var2 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun81138_ip = 22;
                    continue _fun81138
                }
            case 18:
                var2 = '';
            case 22:
                var _closure2_slot1 = var2;
                var _closure2_slot2 = var1;
                var1 = _closure1_slot4;
                var1 = var1.DCDContactSyncManager;
                _closure2_slot2 = var1;
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var4 = function(arg0, arg1) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = arg1;
                    var _closure3_slot1 = var1;
                    var4 = _closure2_slot2;
                    var3 = var4.syncContacts;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = function(arg0, arg1, arg2) { // Environment: var0
                        _fun81140: for (var _fun81140_ip = 0;;) switch (_fun81140_ip) {
                            case 0:
                                var7 = arg1;
                                var3 = arg2;
                                var0 = undefined;
                                var1 = undefined;
                                var2 = undefined;
                                var5 = undefined;
                                var4 = null;
                                var6 = arg0;
                                if (!(var4 != var6)) {
                                    _fun81140_ip = 47;
                                    continue _fun81140
                                }
                            case 23:
                                var8 = _closure3_slot1;
                                var6 = _closure1_slot15;
                                var6 = var8.bind(var0)(var6);
                                _fun81140_ip = 175;
                                continue _fun81140;
                            case 47: // try_start_0
                                var6 = global;
                                var9 = var6.JSON;
                                var8 = var9.parse;
                                var6 = var7;
                                var2 = var8.bind(var9)(var6);
                            case 69: // try_end0
                                _fun81140_ip = 75;
                                continue _fun81140;
                            case 71: // catch_target0
                                CatchBlockStart(arg_register = 6);
                                var2 = {};
                            case 75:
                                var6 = global;
                                var8 = var6.Object;
                                var6 = var8.values;
                                var8 = var6.bind(var8)(var2);
                                var6 = var8.find;
                                var2 = function(arg0) { // Environment: var2
                                    var0 = arg0;
                                    var1 = var0.phone;
                                    var0 = _closure2_slot0;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var2 = var6.bind(var8)(var2);
                                var1 = var2;
                                var2 = var4 == var2;
                                var6 = undefined;
                                if (var2) {
                                    _fun81140_ip = 132;
                                    continue _fun81140
                                }
                            case 124:
                                var6 = var1.unencryptedName;
                            case 132:
                                var5 = var6;
                                var2 = _closure3_slot0;
                                var1 = {};
                                var1.names = var7;
                                var6 = var4 != var6;
                                var4 = null;
                                if (!var6) {
                                    _fun81140_ip = 160;
                                    continue _fun81140
                                }
                            case 157:
                                var4 = var5;
                            case 160:
                                var1.ownName = var4;
                                var1.payload = var3;
                                var1 = var2.bind(var0)(var1);
                            case 175:
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var2, var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.getContacts = var4;
    var4 = function() {
        _fun81142: for (var _fun81142_ip = 0;;) switch (_fun81142_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var0 = undefined;
                var5 = _closure1_slot6;
                var3 = var5.getState;
                var3 = var3.bind(var5)();
                var2 = var3.storedContacts;
                var0 = {};
            case 31: // try_start_0
                var3 = global;
                var5 = var3.JSON;
                var3 = var5.parse;
                var0 = var3.bind(var5)(var2);
            case 50: // try_end0
                _fun81142_ip = 85;
                continue _fun81142;
            case 52: // catch_target0
                CatchBlockStart(arg_register = 3);
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 11;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.captureException;
                var1 = var1.bind(var2)(var3);
            case 85:
                return var0;
        }
    };
    var2.getStoredContacts = var4;
    var4 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot5;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot5;
            var1 = var2.getLocalAccount;
            var0 = _closure1_slot12;
            var0 = var0.CONTACTS;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useContactSyncAccount = var4;
    var4 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot5;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot17;
            var3 = _closure1_slot5;
            var1 = var3.getLocalAccount;
            var0 = _closure1_slot12;
            var0 = var0.CONTACTS;
            var1 = var1.bind(var3)(var0);
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useContactSyncEnabled = var4;
    var4 = function() {
        _fun81147: for (var _fun81147_ip = 0;;) switch (_fun81147_ip) {
            case 0:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 10;
                var1 = var6[var1];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var2 = var1.FriendDiscoverySettings;
                var1 = var2.useSetting;
                var4 = var1.bind(var2)();
                var2 = 13;
                var1 = var6[var2];
                var8 = var5.bind(var3)(var1);
                var7 = var8.hasFlag;
                var0 = _closure1_slot13;
                var1 = var0.FIND_BY_PHONE;
                var1 = var7.bind(var8)(var4, var1);
                var2 = var6[var2];
                var3 = var5.bind(var3)(var2);
                var2 = var3.hasFlag;
                var0 = var0.FIND_BY_EMAIL;
                var2 = var2.bind(var3)(var4, var0);
                var0 = {};
                var0.phone = var1;
                var0.email = var2;
                if (var1) {
                    _fun81147_ip = 120;
                    continue _fun81147
                }
            case 117:
                var1 = var2;
            case 120:
                var0.any = var1;
                return var0;
        }
    };
    var2.useContactSyncUserIsDiscoverable = var4;
    var2.isContactSyncEnabled = var3;
    var3 = function() {
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 14;
        var2 = var6[var0];
        var0 = undefined;
        var3 = var5.bind(var0)(var2);
        var2 = var3.openURL;
        var4 = 15;
        var4 = var6[var4];
        var5 = var5.bind(var0)(var4);
        var4 = var5.getArticleURL;
        var1 = _closure1_slot14;
        var1 = var1.CONTACT_SYNC;
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.handleOpenLearnMoreLink = var3;
    var1 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 16;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.popWithKey;
        var1 = _closure1_slot9;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.transitionToAddFriendsLandingPage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 4519, 10325, 10316, 660, 4525, 481, 806, 10326, 1348, 1207, 566, 1384, 3144, 1684, 4561, 2]);