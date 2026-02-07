// modules/contact_sync/native/ContactSyncModalActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot26;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun82403: for (var _fun82403_ip = 0;;) switch (_fun82403_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun82403_ip = 1030;
                            continue _fun82403
                        }
                    case 10:
                        var4 = arg0;
                        var9 = arg1;
                        var2 = undefined;
                        var11 = undefined;
                        var5 = undefined;
                        var12 = undefined;
                        var6 = undefined;
                        var8 = undefined;
                        var10 = undefined;
                        var13 = _closure1_slot4;
                        var7 = var13.getLocalAccount;
                        var1 = _closure1_slot22;
                        var1 = var1.CONTACTS;
                        var11 = var7.bind(var13)(var1);
                        var7 = _closure1_slot12;
                        var1 = var7.getState;
                        var1 = var1.bind(var7)();
                        var5 = var1.name;
                        var13 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var7 = 8;
                        var1 = var1[var7];
                        var13 = var13.bind(var2)(var1);
                        var1 = var13.checkContactPermissions;
                        var1 = var1.bind(var13)();
                        SaveGenerator(address = 111);
                    case 109:
                        return var1;
                    case 111:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 13);
                        if (var13) {
                            _fun82403_ip = 1027;
                            continue _fun82403
                        }
                    case 120:
                        var13 = _closure1_slot7;
                        var13 = var13.bind(var2)(var1);
                        var13 = _closure1_slot18;
                        var13 = var13.NOT_DETERMINED;
                        if (!(var1 === var13)) {
                            _fun82403_ip = 199;
                            continue _fun82403
                        }
                    case 143:
                        var14 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var13 = 9;
                        var15 = var17[var13];
                        var16 = var14.bind(var2)(var15);
                        var15 = var16.trackFlowStep;
                        var13 = var17[var13];
                        var13 = var14.bind(var2)(var13);
                        var13 = var13.Steps;
                        var14 = var13.PERMISSION_REQUESTED;
                        var13 = false;
                        var13 = var15.bind(var16)(var14, var13, var13);
                    case 199: // try_start_0
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var13 = var13[var7];
                        var14 = var14.bind(var2)(var13);
                        var13 = var14.getContacts;
                        var4 = var13.bind(var14)(var4);
                        SaveGenerator(address = 231);
                    case 229:
                        return var4;
                    case 231:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 13);
                        if (var13) {
                            _fun82403_ip = 754;
                            continue _fun82403
                        }
                    case 240:
                        var14 = var4.names;
                        var12 = var4.ownName;
                        var6 = var4.payload;
                        var13 = _closure1_slot17;
                        var13 = var13.bind(var2)(var14);
                        var14 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var13 = 10;
                        var13 = var15[var13];
                        var16 = var14.bind(var2)(var13);
                        var15 = var16.track;
                        var13 = _closure1_slot21;
                        var14 = var13.PERMISSIONS_ACKED;
                        var13 = {};
                        var17 = _closure1_slot24;
                        var17 = var17.CONTACTS;
                        var13.type = var17;
                        var17 = _closure1_slot23;
                        var17 = var17.ACCEPTED;
                        var13.action = var17;
                        var13 = var15.bind(var16)(var14, var13);
                        var13 = var5;
                        var15 = null;
                        if (!(var15 == var13)) {
                            _fun82403_ip = 446;
                            continue _fun82403
                        }
                    case 346:
                        var14 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var13 = 9;
                        var16 = var18[var13];
                        var17 = var14.bind(var2)(var16);
                        var16 = var17.trackFlowStep;
                        var13 = var18[var13];
                        var13 = var14.bind(var2)(var13);
                        var13 = var13.Steps;
                        var14 = var13.NAME_INPUT;
                        var13 = false;
                        var13 = var16.bind(var17)(var14, var13, var13);
                        var14 = _closure1_slot11;
                        var13 = var12;
                        var12 = true;
                        var12 = var14.bind(var2)(var13, var12);
                        var14 = var9;
                        var13 = var14.navigate;
                        var12 = _closure1_slot19;
                        var12 = var12.NAME_INPUT;
                        var12 = var13.bind(var14)(var12);
                        _fun82403_ip = 743;
                        continue _fun82403;
                    case 446:
                        var13 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var12 = var12[var7];
                        var13 = var13.bind(var2)(var12);
                        var12 = var13.isContactSyncEnabled;
                        var11 = var12.bind(var13)(var11);
                        var13 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var12 = 11;
                        var12 = var14[var12];
                        var12 = var13.bind(var2)(var12);
                        if (var11) {
                            _fun82403_ip = 548;
                            continue _fun82403
                        }
                    case 497:
                        var13 = var12.updateContactSyncEnabled;
                        var11 = {};
                        var14 = true;
                        var11.enabled = var14;
                        var14 = var5;
                        var15 = var15 != var14;
                        var14 = undefined;
                        if (!var15) {
                            _fun82403_ip = 526;
                            continue _fun82403
                        }
                    case 523:
                        var14 = var5;
                    case 526:
                        var11.name = var14;
                        var11 = var13.bind(var12)(var11);
                        SaveGenerator(address = 539);
                    case 537:
                        return var11;
                    case 539:
                        ResumeGenerator(result_out_reg = 11, return_bool_out_reg = 13);
                        if (!var13) {
                            _fun82403_ip = 572;
                            continue _fun82403
                        }
                    case 545: // try_end0
                        return var11;
                    case 548: // try_start_1
                        var11 = var12.updateName;
                        var5 = var11.bind(var12)(var5);
                        SaveGenerator(address = 563);
                    case 561:
                        return var5;
                    case 563:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 11);
                        if (var11) {
                            _fun82403_ip = 751;
                            continue _fun82403
                        }
                    case 572:
                        var11 = _closure1_slot19;
                        var8 = var11.SUGGESTIONS;
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var13 = 9;
                        var14 = var11[var13];
                        var14 = var12.bind(var2)(var14);
                        var14 = var14.Steps;
                        var10 = var14.SUGGESTIONS_RESULTS;
                        var11 = var11[var7];
                        var12 = var12.bind(var2)(var11);
                        var11 = var12.uploadContacts;
                        var14 = false;
                        var6 = var11.bind(var12)(var6, var14);
                        SaveGenerator(address = 641);
                    case 639:
                        return var6;
                    case 641:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 11);
                        if (var11) {
                            _fun82403_ip = 748;
                            continue _fun82403
                        }
                    case 647:
                        var15 = _closure1_slot8;
                        var12 = var6.friend_suggestions;
                        var11 = var6.bulk_add_token;
                        var11 = var15.bind(var2)(var12, var11);
                        var11 = var6.friend_suggestions;
                        var15 = var11.length;
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var11 = var11[var13];
                        var13 = var12.bind(var2)(var11);
                        var12 = var13.trackFlowStep;
                        var22 = var10;
                        var10 = {};
                        var10.num_contacts_found = var15;
                        var23 = var13;
                        var21 = false;
                        var20 = false;
                        var19 = var10;
                        var10 = var23[var12](var22, var21, var20, var19, var18);
                        var10 = var9;
                        var9 = var10.navigate;
                        var8 = var9.bind(var10)(var8);
                    case 743: // try_end1
                        _fun82403_ip = 1024;
                        continue _fun82403;
                    case 748:
                        return var6;
                    case 751:
                        return var5;
                    case 754:
                        return var4;
                    case 757: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 5);
                        var8 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var6 = 10;
                        var6 = var4[var6];
                        var10 = var8.bind(var2)(var6);
                        var9 = var10.track;
                        var6 = _closure1_slot21;
                        var8 = var6.PERMISSIONS_ACKED;
                        var6 = {};
                        var11 = _closure1_slot24;
                        var11 = var11.CONTACTS;
                        var6.type = var11;
                        var11 = _closure1_slot23;
                        var11 = var11.DENIED;
                        var6.action = var11;
                        var6 = var9.bind(var10)(var8, var6);
                        var6 = _closure1_slot0;
                        var4 = var4[var7];
                        var4 = var6.bind(var2)(var4);
                        var4 = var4.ContactSyncPermissionDenied;
                        if (!(var5 !== var4)) {
                            _fun82403_ip = 929;
                            continue _fun82403
                        }
                    case 853:
                        var5 = _closure1_slot6;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var4 = 12;
                        var6 = var9[var4];
                        var6 = var8.bind(var2)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var4 = var9[var4];
                        var4 = var8.bind(var2)(var4);
                        var4 = var4.t;
                        var4 = var4.fGrbRX;
                        var4 = var6.bind(var7)(var4);
                        var4 = var5.bind(var2)(var4);
                        var4 = _closure1_slot16;
                        var4 = var4.bind(var2)();
                        _fun82403_ip = 1024;
                        continue _fun82403;
                    case 929:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var4 = 9;
                        var7 = var6[var4];
                        var9 = var5.bind(var2)(var7);
                        var8 = var9.trackFlowStep;
                        var4 = var6[var4];
                        var4 = var5.bind(var2)(var4);
                        var4 = var4.Steps;
                        var22 = var4.LANDING;
                        var6 = {};
                        var4 = 'denied';
                        var6.mobile_contacts_permission = var4;
                        var21 = true;
                        var20 = false;
                        var23 = var9;
                        var19 = var6;
                        var4 = var23[var8](var22, var21, var20, var19, var18);
                        var4 = _closure1_slot7;
                        var3 = _closure1_slot18;
                        var3 = var3.UNAUTHORIZED;
                        var3 = var4.bind(var2)(var3);
                    case 1024:
                        return var2;
                    case 1027:
                        return var1;
                    case 1030:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot26 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun82406: for (var _fun82406_ip = 0;;) switch (_fun82406_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun82406_ip = 44;
                            continue _fun82406
                        }
                    case 7:
                        var4 = _closure1_slot25;
                        var2 = undefined;
                        var3 = arg0;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var3, var1);
                        SaveGenerator(address = 32);
                    case 30:
                        return var1;
                    case 32:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun82406_ip = 41;
                            continue _fun82406
                        }
                    case 38:
                        return var2;
                    case 41:
                        return var1;
                    case 44:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot27 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun82409: for (var _fun82409_ip = 0;;) switch (_fun82409_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun82409_ip = 169;
                            continue _fun82409
                        }
                    case 13:
                        var4 = _closure1_slot5;
                        var2 = var4.getCurrentUser;
                        var2 = var2.bind(var4)();
                        var5 = null;
                        var7 = var5 == var2;
                        var4 = undefined;
                        var6 = undefined;
                        if (var7) {
                            _fun82409_ip = 48;
                            continue _fun82409
                        }
                    case 42:
                        var6 = var2.phone;
                    case 48:
                        if (!(var5 != var6)) {
                            _fun82409_ip = 78;
                            continue _fun82409
                        }
                    case 52:
                        var2 = _closure1_slot25;
                        var2 = var2.bind(var4)(var6, var3);
                        SaveGenerator(address = 66);
                    case 64:
                        return var2;
                    case 66:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun82409_ip = 75;
                            continue _fun82409
                        }
                    case 72:
                        return var4;
                    case 75:
                        return var2;
                    case 78:
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 9;
                        var7 = var9[var2];
                        var8 = var6.bind(var4)(var7);
                        var7 = var8.trackFlowStep;
                        var2 = var9[var2];
                        var2 = var6.bind(var4)(var2);
                        var2 = var2.Steps;
                        var6 = var2.ADD_PHONE_NUMBER;
                        var2 = false;
                        var2 = var7.bind(var8)(var6, var2, var2);
                        var2 = _closure1_slot9;
                        var2 = var2.bind(var4)(var5);
                        var2 = var3.navigate;
                        var1 = _closure1_slot19;
                        var1 = var1.ADD_PHONE;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    case 169:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot28 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun82412: for (var _fun82412_ip = 0;;) switch (_fun82412_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        var1 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun82412_ip = 848;
                            continue _fun82412
                        }
                    case 18:
                        var9 = var3;
                        var _closure4_slot0 = var3;
                        var7 = var1;
                        var _closure4_slot1 = var1;
                        var1 = undefined;
                        var10 = undefined;
                        var _closure4_slot2 = var1;
                        var2 = undefined;
                        var4 = _closure1_slot12;
                        var3 = var4.getState;
                        var3 = var3.bind(var4)();
                        var4 = var3.suggestions;
                        var10 = var4;
                        _closure4_slot2 = var4;
                        var4 = var3.bulkAddToken;
                        var2 = var4;
                        var3 = null;
                        if (!(var3 == var4)) {
                            _fun82412_ip = 137;
                            continue _fun82412
                        }
                    case 87:
                        var4 = _closure1_slot33;
                        var3 = {
                            'skip': false,
                            'friendsFound': null,
                            'friendsAdded': 0,
                            'back': false
                        };
                        var8 = var10;
                        var8 = var8.length;
                        var3.friendsFound = var8;
                        var8 = var7;
                        var3.onComplete = var8;
                        var3 = var4.bind(var1)(var3);
                        _fun82412_ip = 845;
                        continue _fun82412;
                    case 137: // try_start_0
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 8;
                        var3 = var8[var3];
                        var8 = var4.bind(var1)(var3);
                        var4 = var8.bulkAddFriends;
                        var3 = var9;
                        var2 = var4.bind(var8)(var3, var2);
                        SaveGenerator(address = 176);
                    case 174:
                        return var2;
                    case 176:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun82412_ip = 641;
                            continue _fun82412
                        }
                    case 185:
                        var3 = var2.failed_requests;
                        var4 = var3.length;
                        var3 = 0;
                        if (!(!(var4 > var3))) {
                            _fun82412_ip = 328;
                            continue _fun82412
                        }
                    case 207:
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var3 = 14;
                        var3 = var13[var3];
                        var8 = var12.bind(var1)(var3);
                        var4 = var8.open;
                        var3 = {};
                        var11 = 'TOAST_ADD_FRIENDS';
                        var3.key = var11;
                        var16 = _closure1_slot0;
                        var11 = 12;
                        var14 = var13[var11];
                        var14 = var16.bind(var1)(var14);
                        var15 = var14.intl;
                        var14 = var15.string;
                        var11 = var13[var11];
                        var11 = var16.bind(var1)(var11);
                        var11 = var11.t;
                        var11 = var11["+hjBfW"];
                        var11 = var14.bind(var15)(var11);
                        var3.content = var11;
                        var11 = 15;
                        var11 = var13[var11];
                        var11 = var12.bind(var1)(var11);
                        var3.icon = var11;
                        var3 = var4.bind(var8)(var3);
                        _fun82412_ip = 588;
                        continue _fun82412;
                    case 328:
                        var8 = var9;
                        var4 = var8.map;
                        var3 = function(arg0) { // Environment: var5
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var2 = _closure4_slot2;
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.suggested_user;
                                var1 = var0.id;
                                var0 = _closure5_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var8 = var4.bind(var8)(var3);
                        var4 = var8.filter;
                        var3 = global;
                        var3 = var3.Boolean;
                        var20 = var4.bind(var8)(var3);
                        var4 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var3 = 13;
                        var3 = var15[var3];
                        var8 = var4.bind(var1)(var3);
                        var4 = var8.show;
                        var3 = {};
                        var14 = _closure1_slot0;
                        var11 = 12;
                        var12 = var15[var11];
                        var12 = var14.bind(var1)(var12);
                        var16 = var12.intl;
                        var13 = var16.string;
                        var12 = var15[var11];
                        var12 = var14.bind(var1)(var12);
                        var12 = var12.t;
                        var12 = var12["6moJ8s"];
                        var12 = var13.bind(var16)(var12);
                        var3.title = var12;
                        var12 = var15[var11];
                        var12 = var14.bind(var1)(var12);
                        var17 = var12.intl;
                        var16 = var17.formatToPlainString;
                        var12 = var15[var11];
                        var12 = var14.bind(var1)(var12);
                        var12 = var12.t;
                        var13 = var12["045SiE"];
                        var12 = {};
                        var19 = var20.join;
                        var18 = ', ';
                        var18 = var19.bind(var20)(var18);
                        var12.name = var18;
                        var12 = var16.bind(var17)(var13, var12);
                        var3.body = var12;
                        var12 = var15[var11];
                        var12 = var14.bind(var1)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var11 = var15[var11];
                        var11 = var14.bind(var1)(var11);
                        var11 = var11.t;
                        var11 = var11.BddRzS;
                        var11 = var12.bind(var13)(var11);
                        var3.confirmText = var11;
                        var11 = function() {
                            var2 = _closure1_slot33;
                            var1 = {};
                            var3 = false;
                            var1.skip = var3;
                            var4 = _closure4_slot2;
                            var4 = var4.length;
                            var1.friendsFound = var4;
                            var4 = _closure4_slot0;
                            var4 = var4.length;
                            var1.friendsAdded = var4;
                            var1.back = var3;
                            var0 = _closure4_slot1;
                            var1.onComplete = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var3.onConfirm = var11;
                        var3 = var4.bind(var8)(var3);
                    case 588:
                        var4 = _closure1_slot33;
                        var3 = {};
                        var8 = false;
                        var3.skip = var8;
                        var10 = var10.length;
                        var3.friendsFound = var10;
                        var9 = var9.length;
                        var3.friendsAdded = var9;
                        var3.back = var8;
                        var3.onComplete = var7;
                        var3 = var4.bind(var1)(var3);
                    case 636: // try_end0
                        _fun82412_ip = 845;
                        continue _fun82412;
                    case 641:
                        return var2;
                    case 644: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var2 = 13;
                        var2 = var10[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var9 = _closure1_slot0;
                        var6 = 12;
                        var7 = var10[var6];
                        var7 = var9.bind(var1)(var7);
                        var11 = var7.intl;
                        var8 = var11.string;
                        var7 = var10[var6];
                        var7 = var9.bind(var1)(var7);
                        var7 = var7.t;
                        var7 = var7["6moJ8s"];
                        var7 = var8.bind(var11)(var7);
                        var2.title = var7;
                        var7 = var10[var6];
                        var7 = var9.bind(var1)(var7);
                        var11 = var7.intl;
                        var8 = var11.string;
                        var7 = var10[var6];
                        var7 = var9.bind(var1)(var7);
                        var7 = var7.t;
                        var7 = var7.Gt2L32;
                        var7 = var8.bind(var11)(var7);
                        var2.body = var7;
                        var7 = var10[var6];
                        var7 = var9.bind(var1)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var6 = var10[var6];
                        var6 = var9.bind(var1)(var6);
                        var6 = var6.t;
                        var6 = var6.BddRzS;
                        var6 = var7.bind(var8)(var6);
                        var2.confirmText = var6;
                        var5 = function() {
                            var2 = _closure1_slot33;
                            var1 = {};
                            var3 = false;
                            var1.skip = var3;
                            var4 = _closure4_slot2;
                            var4 = var4.length;
                            var1.friendsFound = var4;
                            var4 = _closure4_slot0;
                            var4 = var4.length;
                            var1.friendsAdded = var4;
                            var1.back = var3;
                            var0 = _closure4_slot1;
                            var1.onComplete = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var2.onConfirm = var5;
                        var2 = var3.bind(var4)(var2);
                    case 845:
                        return var1;
                    case 848:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot29 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun82419: for (var _fun82419_ip = 0;;) switch (_fun82419_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun82419_ip = 375;
                            continue _fun82419
                        }
                    case 10:
                        var1 = arg0;
                        var6 = undefined;
                        var7 = undefined;
                        var9 = undefined;
                    case 19: // try_start_0
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 16;
                        var2 = var4[var2];
                        var3 = var3.bind(var6)(var2);
                        var2 = var3.addPhoneWithoutPassword;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 57);
                    case 55:
                        return var1;
                    case 57:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun82419_ip = 80;
                            continue _fun82419
                        }
                    case 63: // try_end0
                        var2 = {
                            'codeIntercepted': true,
                            'addedPhone': true
                        };
                        return var2;
                    case 80:
                        return var1;
                    case 83: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var5 = var1;
                        var2 = var1.status;
                        var1 = 301;
                        if (!(var1 !== var2)) {
                            _fun82419_ip = 358;
                            continue _fun82419
                        }
                    case 106:
                        var1 = var5;
                        var2 = var1.status;
                        var1 = 404;
                        if (!(var1 !== var2)) {
                            _fun82419_ip = 358;
                            continue _fun82419
                        }
                    case 127:
                        var2 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var1 = 14;
                        var1 = var11[var1];
                        var3 = var2.bind(var6)(var1);
                        var2 = var3.open;
                        var1 = {};
                        var8 = 'PHONE_FAILED_TO_ADD';
                        var1.key = var8;
                        var10 = _closure1_slot0;
                        var8 = 17;
                        var8 = var11[var8];
                        var8 = var10.bind(var6)(var8);
                        var10 = var8.APIError;
                        var12 = var5;
                        var8 = var10.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var10
                            }
                        });
                        var13 = var8;
                        var5 = new var13[var10](var12, var11);
                        var5 = var5 instanceof Object ? var5 : var8;
                        var9 = var5;
                        var8 = null;
                        var10 = var8 == var5;
                        var5 = undefined;
                        if (var10) {
                            _fun82419_ip = 240;
                            continue _fun82419
                        }
                    case 227:
                        var10 = var9;
                        var9 = var10.getAnyErrorMessage;
                        var5 = var9.bind(var10)();
                    case 240:
                        var7 = var5;
                        if (!(var8 == var5)) {
                            _fun82419_ip = 306;
                            continue _fun82419
                        }
                    case 247:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var5 = 12;
                        var8 = var11[var5];
                        var8 = var10.bind(var6)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var5 = var11[var5];
                        var5 = var10.bind(var6)(var5);
                        var5 = var5.t;
                        var5 = var5.cCVXOe;
                        var5 = var8.bind(var9)(var5);
                        _fun82419_ip = 309;
                        continue _fun82419;
                    case 306:
                        var5 = var7;
                    case 309:
                        var1.content = var5;
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 18;
                        var4 = var7[var4];
                        var4 = var5.bind(var6)(var4);
                        var1.icon = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = {
                            'codeIntercepted': true,
                            'addedPhone': false
                        };
                        _fun82419_ip = 372;
                        continue _fun82419;
                    case 358:
                        var1 = {
                            'codeIntercepted': false,
                            'addedPhone': false
                        };
                    case 372:
                        return var1;
                    case 375:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot30 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot30 = var0;
    var5 = function arg0, arg1, arg2() {
        _fun82420: for (var _fun82420_ip = 0;;) switch (_fun82420_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var2 = _closure1_slot32;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var3 = var6.initialRoutes;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun82420_ip = 50;
                    continue _fun82420
                }
            case 31:
                var3 = _closure1_slot14;
                var2 = _closure1_slot13;
                var2 = var2.NORMAL;
                var2 = var3.bind(var0)(var2);
            case 50:
                if (!var5) {
                    _fun82420_ip = 90;
                    continue _fun82420
                }
            case 53:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.trackFlowStart;
                var2 = {};
                var2.location = var5;
                var2 = var3.bind(var4)(var2);
            case 90:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 19;
                var3 = var2[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.pushLazy;
                var7 = _closure1_slot0;
                var3 = 21;
                var3 = var2[var3];
                var7 = var7.bind(var0)(var3);
                var3 = 20;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var7.bind(var0)(var3, var2);
                var2 = {};
                var7 = var6.initialRoutes;
                var2.initialRoutes = var7;
                var7 = var6.openSettings;
                var2.openSettingsSheet = var7;
                var6 = var6.customLandingPage;
                var2.customLandingPage = var6;
                var1 = _closure1_slot20;
                var3 = var4.bind(var5)(var3, var2, var1);
                var2 = var3.then;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot31 = var5;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.checkContactPermissions;
        var3 = var1.bind(var2)();
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure1_slot7;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot32 = var3;
    var1 = function arg0() {
        _fun82423: for (var _fun82423_ip = 0;;) switch (_fun82423_ip) {
            case 0:
                var2 = arg0;
                var5 = var2.skip;
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun82423_ip = 19;
                    continue _fun82423
                }
            case 17:
                var5 = true;
            case 19:
                var4 = var2.friendsFound;
                var3 = var2.friendsAdded;
                var7 = var2.back;
                if (!(var7 === var0)) {
                    _fun82423_ip = 43;
                    continue _fun82423
                }
            case 41:
                var7 = false;
            case 43:
                var2 = var2.onComplete;
                var6 = null;
                if (!(var6 == var2)) {
                    _fun82423_ip = 82;
                    continue _fun82423
                }
            case 55:
                var6 = function() {
                    _fun82426: for (var _fun82426_ip = 0;;) switch (_fun82426_ip) {
                        case 0:
                            var8 = arguments[0];
                            var6 = arguments[3];
                            var0 = undefined;
                            if (!(var8 === var0)) {
                                _fun82426_ip = 16;
                                continue _fun82426
                            }
                        case 14:
                            var8 = true;
                        case 16:
                            var _closure3_slot0 = var8;
                            if (!(var6 === var0)) {
                                _fun82426_ip = 26;
                                continue _fun82426
                            }
                        case 24:
                            var6 = false;
                        case 26:
                            var _closure3_slot1 = var6;
                            var _closure3_slot2 = var0;
                            var3 = _closure1_slot15;
                            var3 = var3.bind(var0)();
                            _closure3_slot2 = var3;
                            if (var6) {
                                _fun82426_ip = 102;
                                continue _fun82426
                            }
                        case 52:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 9;
                            var4 = var7[var4];
                            var7 = var5.bind(var0)(var4);
                            var5 = var7.trackFlowEnd;
                            var4 = {};
                            var9 = arguments[1];
                            var4.num_contacts_found = var9;
                            var9 = arguments[2];
                            var4.num_contacts_added = var9;
                            var4 = var5.bind(var7)(var8, var4);
                        case 102:
                            if (!var3) {
                                _fun82426_ip = 186;
                                continue _fun82426
                            }
                        case 105:
                            var4 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var3 = 19;
                            var3 = var8[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.updateAnimation;
                            var3 = _closure1_slot20;
                            var7 = _closure1_slot0;
                            var2 = 23;
                            var2 = var8[var2];
                            var2 = var7.bind(var0)(var2);
                            var2 = var2.ModalAnimation;
                            if (var6) {
                                _fun82426_ip = 174;
                                continue _fun82426
                            }
                        case 160:
                            var6 = var2.SLIDE_IN_OUT;
                            var6 = var4.bind(var5)(var3, var6);
                            _fun82426_ip = 186;
                            continue _fun82426;
                        case 174:
                            var2 = var2.SLIDE_IN_OUT_REVERSE;
                            var2 = var4.bind(var5)(var3, var2);
                        case 186:
                            var2 = global;
                            var3 = var2.setTimeout;
                            var2 = function() { // Environment: var1
                                _fun82427: for (var _fun82427_ip = 0;;) switch (_fun82427_ip) {
                                    case 0:
                                        var4 = _closure1_slot1;
                                        var0 = _closure1_slot2;
                                        var2 = 19;
                                        var3 = var0[var2];
                                        var0 = undefined;
                                        var5 = var4.bind(var0)(var3);
                                        var4 = var5.popWithKey;
                                        var3 = _closure1_slot20;
                                        var3 = var4.bind(var5)(var3);
                                        var3 = _closure3_slot2;
                                        if (!var3) {
                                            _fun82427_ip = 191;
                                            continue _fun82427
                                        }
                                    case 53:
                                        var7 = _closure3_slot1;
                                        var4 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var2 = var3[var2];
                                        var6 = var4.bind(var0)(var2);
                                        var5 = var6.updateAnimation;
                                        var4 = _closure1_slot20;
                                        var2 = _closure1_slot0;
                                        var1 = 23;
                                        var1 = var3[var1];
                                        var1 = var2.bind(var0)(var1);
                                        var1 = var1.ModalAnimation;
                                        if (var7) {
                                            _fun82427_ip = 157;
                                            continue _fun82427
                                        }
                                    case 109:
                                        var7 = var1.SLIDE_IN_OUT;
                                        var7 = var5.bind(var6)(var4, var7);
                                        var7 = 24;
                                        var7 = var3[var7];
                                        var9 = var2.bind(var0)(var7);
                                        var8 = var9.nextOnboardingStep;
                                        var7 = {};
                                        var10 = _closure3_slot0;
                                        var7.skip = var10;
                                        var7 = var8.bind(var9)(var7);
                                        _fun82427_ip = 191;
                                        continue _fun82427;
                                    case 157:
                                        var1 = var1.SLIDE_IN_OUT_REVERSE;
                                        var1 = var5.bind(var6)(var4, var1);
                                        var1 = 24;
                                        var1 = var3[var1];
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.previousOnboardingStep;
                                        var1 = var1.bind(var2)();
                                    case 191:
                                        return var0;
                                }
                            };
                            var1 = 0;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var12 = undefined;
                var11 = var5;
                var10 = var4;
                var9 = var3;
                var8 = var7;
                var6 = var12[var6](var11, var10, var9, var8, var7);
                _fun82423_ip = 107;
                continue _fun82423;
            case 82:
                var1 = function arg0() {
                    _fun82424: for (var _fun82424_ip = 0;;) switch (_fun82424_ip) {
                        case 0:
                            var2 = arguments[1];
                            var0 = undefined;
                            if (!(var2 === var0)) {
                                _fun82424_ip = 11;
                                continue _fun82424
                            }
                        case 9:
                            var2 = true;
                        case 11:
                            var1 = _closure1_slot15;
                            var1 = var1.bind(var0)();
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 9;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.trackFlowEnd;
                            var3 = {};
                            var6 = arguments[2];
                            var3.num_contacts_found = var6;
                            var6 = arguments[3];
                            var3.num_contacts_added = var6;
                            var3 = var4.bind(var5)(var2, var3);
                            if (var1) {
                                _fun82424_ip = 102;
                                continue _fun82424
                            }
                        case 75:
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = function() { // Environment: var1
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 19;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.popWithKey;
                                var1 = _closure1_slot20;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1 = 0;
                            var1 = var4.bind(var0)(var3, var1);
                            _fun82424_ip = 110;
                            continue _fun82424;
                        case 102:
                            var1 = arg0;
                            var1 = var1.bind(var0)(var2);
                        case 110:
                            return var0;
                    }
                };
                var12 = undefined;
                var11 = var2;
                var10 = var5;
                var9 = var4;
                var8 = var3;
                var1 = var12[var1](var11, var10, var9, var8, var7);
            case 107:
                return var0;
        }
    };
    var _closure1_slot33 = var1;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.setError;
    var _closure1_slot6 = var9;
    var9 = var6.setPermissionState;
    var _closure1_slot7 = var9;
    var9 = var6.setSuggestions;
    var _closure1_slot8 = var9;
    var9 = var6.setPhone;
    var _closure1_slot9 = var9;
    var9 = var6.setPhoneToken;
    var _closure1_slot10 = var9;
    var9 = var6.setName;
    var _closure1_slot11 = var9;
    var9 = var6.useContactSyncModalStore;
    var _closure1_slot12 = var9;
    var9 = var6.ContactSyncModes;
    var _closure1_slot13 = var9;
    var9 = var6.initialize;
    var _closure1_slot14 = var9;
    var6 = var6.getIsOnboarding;
    var _closure1_slot15 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.deleteStoredContacts;
    var _closure1_slot16 = var9;
    var6 = var6.setStoredContacts;
    var _closure1_slot17 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.ContactPermissions;
    var _closure1_slot18 = var9;
    var9 = var6.ContactSyncScenes;
    var _closure1_slot19 = var9;
    var6 = var6.CONTACT_SYNC_MODAL_KEY;
    var _closure1_slot20 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.AnalyticEvents;
    var _closure1_slot21 = var9;
    var6 = var6.PlatformTypes;
    var _closure1_slot22 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var9 = var6.NativePermissionStates;
    var _closure1_slot23 = var9;
    var6 = var6.NativePermissionTypes;
    var _closure1_slot24 = var6;
    var6 = 25;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/contact_sync/native/ContactSyncModalActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function() {
        var0 = undefined;
        var3 = _closure1_slot27;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.handlePhoneVerificationComplete = var6;
    var6 = function() {
        var0 = undefined;
        var3 = _closure1_slot28;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.startContactSync = var6;
    var6 = function() {
        var0 = undefined;
        var3 = _closure1_slot29;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.bulkAddFriendSuggestions = var6;
    var6 = function arg0() {
        var3 = arg0;
        var2 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 9;
        var5 = var4[var1];
        var0 = undefined;
        var6 = var2.bind(var0)(var5);
        var5 = var6.trackFlowStep;
        var1 = var4[var1];
        var1 = var2.bind(var0)(var1);
        var1 = var1.Steps;
        var4 = var1.LANDING;
        var2 = false;
        var1 = true;
        var1 = var5.bind(var6)(var4, var2, var1);
        var1 = var3.getState;
        var1 = var1.bind(var3)();
        var1 = var1.routes;
        var2 = var3.pop;
        var4 = var1.length;
        var1 = 1;
        var1 = var4 - var1;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.goBackToLanding = var6;
    var6 = function arg0, arg1() {
        var3 = arg1;
        var4 = _closure1_slot9;
        var0 = undefined;
        var2 = arg0;
        var2 = var4.bind(var0)(var2);
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 9;
        var5 = var7[var2];
        var6 = var4.bind(var0)(var5);
        var5 = var6.trackFlowStep;
        var2 = var7[var2];
        var2 = var4.bind(var0)(var2);
        var2 = var2.Steps;
        var4 = var2.VERIFY_PHONE_NUMBER;
        var2 = false;
        var2 = var5.bind(var6)(var4, var2, var2);
        var2 = var3.navigate;
        var1 = _closure1_slot19;
        var1 = var1.VERIFY_PHONE;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.submitPhone = var6;
    var6 = function() {
        var0 = undefined;
        var3 = _closure1_slot30;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.verifyPhone = var6;
    var6 = function arg0, arg1() {
        var3 = arg1;
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 9;
        var5 = var7[var2];
        var0 = undefined;
        var6 = var4.bind(var0)(var5);
        var5 = var6.trackFlowStep;
        var2 = var7[var2];
        var2 = var4.bind(var0)(var2);
        var2 = var2.Steps;
        var4 = var2.PASSWORD_CONFIRM;
        var2 = false;
        var2 = var5.bind(var6)(var4, var2, var2);
        var4 = _closure1_slot10;
        var2 = arg0;
        var2 = var4.bind(var0)(var2);
        var2 = var3.navigate;
        var1 = _closure1_slot19;
        var1 = var1.VERIFY_PASSWORD;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.verifyPhoneWithPassword = var6;
    var6 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.trackFlowEnd;
        var1 = true;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.upsellDismissed = var6;
    var2.openContactSyncModal = var5;
    var5 = function() {
        _fun82436: for (var _fun82436_ip = 0;;) switch (_fun82436_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun82436_ip = 11;
                    continue _fun82436
                }
            case 9:
                var1 = false;
            case 11:
                if (!var1) {
                    _fun82436_ip = 77;
                    continue _fun82436
                }
            case 14:
                var2 = _closure1_slot14;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 22;
                var1 = var5[var1];
                var4 = var4.bind(var0)(var1);
                var1 = var4.hasDeferredInvite;
                var1 = var1.bind(var4)();
                var3 = _closure1_slot13;
                if (var1) {
                    _fun82436_ip = 66;
                    continue _fun82436
                }
            case 58:
                var1 = var3.ONBOARDING;
                _fun82436_ip = 72;
                continue _fun82436;
            case 66:
                var1 = var3.ONBOARDING_INVITE;
            case 72:
                var1 = var2.bind(var0)(var1);
            case 77:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var7 = 9;
                var2 = var4[var7];
                var5 = var8.bind(var0)(var2);
                var3 = var5.trackFlowStart;
                var2 = {};
                var6 = {};
                var7 = var4[var7];
                var7 = var8.bind(var0)(var7);
                var7 = var7.CONTACT_SYNC_ONBOARDING_LOCATION;
                var6.page = var7;
                var2.location = var6;
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot1;
                var2 = 19;
                var2 = var4[var2];
                var5 = var3.bind(var0)(var2);
                var4 = var5.pushLazy;
                var3 = _closure1_slot3;
                var2 = function*() { // Environment: var2
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun82438: for (var _fun82438_ip = 0;;) switch (_fun82438_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun82438_ip = 116;
                                    continue _fun82438
                                }
                            case 7:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var2 = 21;
                                var2 = var1[var2];
                                var6 = undefined;
                                var3 = var3.bind(var6)(var2);
                                var2 = 20;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var1 = var3.bind(var6)(var2, var1);
                                SaveGenerator(address = 54);
                            case 52:
                                return var1;
                            case 54:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun82438_ip = 113;
                                    continue _fun82438
                                }
                            case 60:
                                var2 = var1.default;
                                var3 = {};
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 23;
                                var4 = var7[var4];
                                var4 = var5.bind(var6)(var4);
                                var4 = var4.ModalAnimation;
                                var4 = var4.SLIDE_IN_OUT;
                                var3.animation = var4;
                                var2.modalConfig = var3;
                                return var2;
                            case 113:
                                return var1;
                            case 116:
                                return var0;
                        }
                    };
                    return var0;
                };
                var3 = var3.bind(var0)(var2);
                var2 = _closure1_slot20;
                var1 = {};
                var1 = var4.bind(var5)(var3, var1, var2);
                return var0;
        }
    };
    var2.openContactSyncModalOnboarding = var5;
    var4 = function() {
        var3 = _closure1_slot31;
        var2 = {};
        var0 = 'Deep Link';
        var2.page = var0;
        var0 = undefined;
        var1 = {};
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var2.openContactSyncModalDeeplink = var4;
    var2.refreshContactSyncPermissionStatus = var3;
    var2.closeContactSyncModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4519, 1621, 10380, 10390, 10381, 660, 4013, 10389, 10513, 795, 10388, 1234, 3937, 3150, 8018, 7626, 3351, 7528, 4561, 10514, 1307, 8400, 670, 10379, 2]);