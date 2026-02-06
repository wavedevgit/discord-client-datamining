// modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var4 = 0;
    var3 = var6[var4];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.getIsOnboarding;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.ContactPermissions;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = {};
    var7 = 'Flow Initialized';
    var3.INITIALIZED = var7;
    var7 = 'Landing';
    var3.LANDING = var7;
    var7 = 'Contacts Permission Requested';
    var3.PERMISSION_REQUESTED = var7;
    var7 = 'Name Input';
    var3.NAME_INPUT = var7;
    var7 = 'Suggestions Results';
    var3.SUGGESTIONS_RESULTS = var7;
    var7 = 'Contact Invites';
    var3.CONTACT_INVITES = var7;
    var7 = 'Add Phone Number';
    var3.ADD_PHONE_NUMBER = var7;
    var7 = 'Verify Phone Number';
    var3.VERIFY_PHONE_NUMBER = var7;
    var7 = 'Password Confirmation';
    var3.PASSWORD_CONFIRM = var7;
    var7 = 'Complete';
    var3.COMPLETE = var7;
    var _closure1_slot7 = var3;
    var7 = null;
    var _closure1_slot8 = var7;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/contact_sync/native/ContactSyncAnalyticsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.Steps = var3;
    var3 = 'Onboarding';
    var2.CONTACT_SYNC_ONBOARDING_LOCATION = var3;
    var3 = function arg0() {
        _fun82010: for (var _fun82010_ip = 0;;) switch (_fun82010_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot7;
                var0 = var0.LANDING;
                _closure1_slot8 = var0;
                var0 = global;
                var3 = var0.Date;
                var0 = var3.now;
                var0 = var0.bind(var3)();
                _closure1_slot9 = var0;
                var3 = _closure1_slot3;
                var0 = var3.getCurrentUser;
                var5 = var0.bind(var3)();
                var4 = null;
                var6 = var4 == var5;
                var0 = undefined;
                var3 = undefined;
                if (var6) {
                    _fun82010_ip = 79;
                    continue _fun82010
                }
            case 73:
                var3 = var5.phone;
            case 79:
                var3 = var4 != var3;
                var _closure2_slot1 = var3;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.checkContactPermissions;
                var3 = var2.bind(var3)();
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    _fun82011: for (var _fun82011_ip = 0;;) switch (_fun82011_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure1_slot5;
                            var0 = var0.NOT_DETERMINED;
                            var6 = null;
                            if (!(var2 !== var0)) {
                                _fun82011_ip = 49;
                                continue _fun82011
                            }
                        case 22:
                            var0 = _closure1_slot5;
                            var1 = var0.AUTHORIZED;
                            var0 = 'denied';
                            if (!(var2 === var1)) {
                                _fun82011_ip = 46;
                                continue _fun82011
                            }
                        case 42:
                            var0 = 'accepted';
                        case 46:
                            var6 = var0;
                        case 49:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot6;
                            var2 = var1.CONTACT_SYNC_FLOW_KEY;
                            var1 = {};
                            var10 = _closure2_slot0;
                            var11 = var1;
                            var8 = copyDataProperties(var11, var10);
                            var9 = 'Contact Sync';
                            var8 = 'flow_type';
                            var1[var8] = var9;
                            var7 = _closure1_slot7;
                            var9 = var7.INITIALIZED;
                            var8 = 'from_step';
                            var1[var8] = var9;
                            var8 = var7.LANDING;
                            var7 = 'to_step';
                            var1[var7] = var8;
                            var8 = false;
                            var7 = 'skip';
                            var1[var7] = var8;
                            var7 = 'back';
                            var1[var7] = var8;
                            var8 = 0;
                            var7 = 'seconds_on_from_step';
                            var1[var7] = var8;
                            var7 = _closure2_slot1;
                            var5 = 'has_phone_number';
                            var1[var5] = var7;
                            var5 = 'mobile_contacts_permission';
                            var1[var5] = var6;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.trackFlowStart = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun82012: for (var _fun82012_ip = 0;;) switch (_fun82012_ip) {
            case 0:
                var2 = arg0;
                var8 = arg1;
                var13 = arg3;
                var3 = _closure1_slot4;
                var0 = undefined;
                var4 = var3.bind(var0)();
                var3 = global;
                var5 = var3.Date;
                var3 = var5.now;
                var3 = var3.bind(var5)();
                var5 = _closure1_slot9;
                var6 = var3 - var5;
                var5 = 1000;
                var11 = var6 / var5;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 5;
                var5 = var7[var5];
                var9 = var6.bind(var0)(var5);
                var7 = var9.track;
                var5 = _closure1_slot6;
                var6 = var5.CONTACT_SYNC_FLOW_KEY;
                var5 = {};
                var17 = var5;
                var16 = var13;
                var10 = copyDataProperties(var17, var16);
                var12 = 'Onboarding';
                if (var4) {
                    _fun82012_ip = 132;
                    continue _fun82012
                }
            case 113:
                var10 = null;
                var14 = var10 == var13;
                var10 = undefined;
                if (var14) {
                    _fun82012_ip = 129;
                    continue _fun82012
                }
            case 124:
                var10 = var13.location;
            case 129:
                var12 = var10;
            case 132:
                var10 = 'location';
                var5[var10] = var12;
                var12 = 'Contact Sync';
                var10 = 'flow_type';
                var5[var10] = var12;
                var12 = _closure1_slot8;
                var10 = 'from_step';
                var5[var10] = var12;
                var10 = 'to_step';
                var5[var10] = var2;
                var10 = 'skip';
                var5[var10] = var8;
                var12 = arg2;
                var10 = 'back';
                var5[var10] = var12;
                var10 = 'seconds_on_from_step';
                var5[var10] = var11;
                var5 = var7.bind(var9)(var6, var5);
                if (!var4) {
                    _fun82012_ip = 263;
                    continue _fun82012
                }
            case 219:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 6;
                var4 = var6[var4];
                var7 = var5.bind(var0)(var4);
                var6 = var7.trackNUFStep;
                var5 = _closure1_slot8;
                var4 = {};
                var4.skip = var8;
                var4 = var6.bind(var7)(var5, var2, var4);
            case 263:
                _closure1_slot9 = var3;
                _closure1_slot8 = var2;
                return var0;
        }
    };
    var2.trackFlowStep = var3;
    var1 = function arg0, arg1() {
        _fun82013: for (var _fun82013_ip = 0;;) switch (_fun82013_ip) {
            case 0:
                var9 = arg1;
                var1 = _closure1_slot4;
                var0 = undefined;
                var6 = var1.bind(var0)();
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var7 = var1.bind(var3)();
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var5 = var3.bind(var0)(var1);
                var4 = var5.track;
                var1 = _closure1_slot6;
                var3 = var1.CONTACT_SYNC_FLOW_KEY;
                var1 = {};
                var12 = var1;
                var11 = var9;
                var8 = copyDataProperties(var12, var11);
                var8 = 'Onboarding';
                if (var6) {
                    _fun82013_ip = 108;
                    continue _fun82013
                }
            case 89:
                var6 = null;
                var10 = var6 == var9;
                var6 = undefined;
                if (var10) {
                    _fun82013_ip = 105;
                    continue _fun82013
                }
            case 100:
                var6 = var9.location;
            case 105:
                var8 = var6;
            case 108:
                var6 = 'location';
                var1[var6] = var8;
                var8 = 'Contact Sync';
                var6 = 'flow_type';
                var1[var6] = var8;
                var8 = _closure1_slot8;
                var6 = 'from_step';
                var1[var6] = var8;
                var6 = _closure1_slot7;
                var8 = var6.COMPLETE;
                var6 = 'to_step';
                var1[var6] = var8;
                var8 = arg0;
                var6 = 'skip';
                var1[var6] = var8;
                var8 = false;
                var6 = 'back';
                var1[var6] = var8;
                var6 = _closure1_slot9;
                var7 = var7 - var6;
                var6 = 1000;
                var7 = var7 / var6;
                var6 = 'seconds_on_from_step';
                var1[var6] = var7;
                var1 = var4.bind(var5)(var3, var1);
                var1 = null;
                _closure1_slot8 = var1;
                return var0;
        }
    };
    var2.trackFlowEnd = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 10335, 10336, 660, 10344, 795, 10292, 2]);