// modules/contact_sync/native/ContactSyncManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun80563: for (var _fun80563_ip = 0;;) switch (_fun80563_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun80563_ip = 76;
                continue _fun80563;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.setStoredContacts;
    var _closure1_slot10 = var7;
    var7 = var3.deleteStoredContacts;
    var _closure1_slot11 = var7;
    var3 = var3.useContactSyncStore;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.ContactPermissions;
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot14 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun80568: for (var _fun80568_ip = 0;;) switch (_fun80568_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun80568_ip = 360;
                            continue _fun80568
                        }
                    case 10:
                        var1 = undefined;
                        var6 = undefined;
                        var5 = undefined;
                        var10 = undefined;
                        var3 = undefined;
                        var4 = undefined;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var9 = 11;
                        var7 = var7[var9];
                        var7 = var8.bind(var1)(var7);
                        var12 = var7.Storage;
                        var7 = var12.get;
                        var8 = 'LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY';
                        var11 = 0;
                        var12 = var7.bind(var12)(var8, var11);
                        var7 = null;
                        var13 = var7 != var12;
                        if (!var13) {
                            _fun80568_ip = 82;
                            continue _fun80568
                        }
                    case 79:
                        var11 = var12;
                    case 82:
                        var6 = var11;
                        var11 = global;
                        var12 = var11.Date;
                        var11 = var12.now;
                        var5 = var11.bind(var12)();
                    case 102: // try_start_0
                        var11 = var6;
                        var6 = 86400000;
                        var11 = var11 + var6;
                        var6 = var5;
                        if (!(var11 <= var6)) {
                            _fun80568_ip = 336;
                            continue _fun80568
                        }
                    case 125:
                        var11 = _closure1_slot9;
                        var6 = var11.getCurrentUser;
                        var6 = var6.bind(var11)();
                        var10 = var6;
                        var11 = var7 == var6;
                        var6 = undefined;
                        if (var11) {
                            _fun80568_ip = 156;
                            continue _fun80568
                        }
                    case 150:
                        var6 = var10.phone;
                    case 156:
                        var3 = var6;
                        if (!(var7 != var6)) {
                            _fun80568_ip = 344;
                            continue _fun80568
                        }
                    case 166:
                        var11 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var10 = 12;
                        var6 = var6[var10];
                        var12 = var11.bind(var1)(var6);
                        var11 = var12.getContacts;
                        var6 = var3;
                        var13 = _closure1_slot12;
                        var3 = var13.getState;
                        var3 = var3.bind(var13)();
                        var3 = var3.storedContacts;
                        var3 = var11.bind(var12)(var6, var3);
                        SaveGenerator(address = 225);
                    case 223:
                        return var3;
                    case 225:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun80568_ip = 341;
                            continue _fun80568
                        }
                    case 231:
                        var12 = var3.names;
                        var6 = var3.payload;
                        var4 = var6;
                        var11 = _closure1_slot10;
                        var11 = var11.bind(var1)(var12);
                        if (!(var7 != var6)) {
                            _fun80568_ip = 302;
                            continue _fun80568
                        }
                    case 258:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var10];
                        var10 = var7.bind(var1)(var6);
                        var7 = var10.uploadContacts;
                        var6 = var4;
                        var4 = true;
                        var4 = var7.bind(var10)(var6, var4);
                        SaveGenerator(address = 296);
                    case 294:
                        return var4;
                    case 296:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun80568_ip = 338;
                            continue _fun80568
                        }
                    case 302:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var6 = var6[var9];
                        var6 = var7.bind(var1)(var6);
                        var7 = var6.Storage;
                        var6 = var7.set;
                        var5 = var6.bind(var7)(var8, var5);
                    case 336: // try_end0
                        _fun80568_ip = 357;
                        continue _fun80568;
                    case 338:
                        return var4;
                    case 341:
                        return var3;
                    case 344:
                        return var1;
                    case 347: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var2 = _closure1_slot11;
                        var2 = var2.bind(var1)();
                    case 357:
                        return var1;
                    case 360:
                        return var0;
                }
            };
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
    var3 = var3.bind(var0)();
    var _closure1_slot15 = var3;
    var3 = 14;
    var3 = var6[var3];
    var4 = var4.bind(var0)(var3);
    var3 = function(arg0) { // Environment: var1
        var2 = function(arg0) { // Original name: ContactSyncLifecycleManager, environment: var0
            _fun80571: for (var _fun80571_ip = 0;;) switch (_fun80571_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun80571_ip = 86;
                        continue _fun80571
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun80571_ip = 120;
                    continue _fun80571;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = function() { // Original name: POST_CONNECTION_OPEN, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.POST_CONNECTION_OPEN = var3;
                    var0.actions = var2;
                    var1 = function() { // Environment: var1
                        _fun80573: for (var _fun80573_ip = 0;;) switch (_fun80573_ip) {
                            case 0:
                                var2 = _closure1_slot9;
                                var1 = var2.getCurrentUser;
                                var2 = var1.bind(var2)();
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun80573_ip = 129;
                                    continue _fun80573
                                }
                            case 22:
                                var3 = _closure1_slot8;
                                var2 = var3.getLocalAccount;
                                var1 = _closure1_slot14;
                                var1 = var1.CONTACTS;
                                var5 = var2.bind(var3)(var1);
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var3 = 12;
                                var1 = var1[var3];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var1);
                                var1 = var4.isContactSyncEnabled;
                                var1 = var1.bind(var4)(var5);
                                if (!var1) {
                                    _fun80573_ip = 129;
                                    continue _fun80573
                                }
                            case 83:
                                var1 = _closure1_slot0;
                                var0 = _closure1_slot1;
                                var0 = var0[var3];
                                var1 = var1.bind(var2)(var0);
                                var0 = var1.checkContactPermissions;
                                var2 = var0.bind(var1)();
                                var1 = var2.then;
                                var0 = function(arg0) { // Environment: var0
                                    _fun80574: for (var _fun80574_ip = 0;;) switch (_fun80574_ip) {
                                        case 0:
                                            var1 = _closure1_slot13;
                                            var2 = var1.AUTHORIZED;
                                            var1 = arg0;
                                            if (!(var1 === var2)) {
                                                _fun80574_ip = 62;
                                                continue _fun80574
                                            }
                                        case 20:
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var0 = 13;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.runAfterInteractions;
                                            var0 = function() { // Environment: var0
                                                var1 = _closure1_slot15;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)();
                                                return var0;
                                            };
                                            var0 = var1.bind(var2)(var0);
                                        case 62:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                            case 129:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleConnectionOpen = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var12 = var4;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/contact_sync/native/ContactSyncManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = 'LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY';
    var2.LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY = var3;
    var1 = function() { // Original name: removeLastUserContactsUpload, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.Storage;
        var2 = var3.remove;
        var1 = 'LAST_USER_CONTACTS_REQUEST_TIMESTAMP_KEY';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.removeLastUserContactsUpload = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 5, 4476, 1613, 10215, 10206, 660, 587, 10214, 5809, 4256, 2]);