// modules/contact_sync/native/components/ContactSyncSettings.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var8;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var8[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var4 = var8[var1];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var4);
    var1 = 2;
    var1 = var8[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var3 = var1.deleteStoredContacts;
    var _closure1_slot5 = var3;
    var1 = var1.setStoredContacts;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var3 = var1.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = var1.FriendDiscoveryFlags;
    var _closure1_slot8 = var3;
    var1 = var1.AnalyticsSections;
    var _closure1_slot9 = var1;
    var1 = 5;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot10 = var3;
    var3 = var1.Fragment;
    var _closure1_slot11 = var3;
    var1 = var1.jsxs;
    var _closure1_slot12 = var1;
    var1 = function() { // Environment: var5
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun81808: for (var _fun81808_ip = 0;;) switch (_fun81808_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun81808_ip = 321;
                            continue _fun81808
                        }
                    case 10:
                        var2 = arg1;
                        var3 = _closure1_slot5;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        var3 = arg2;
                        if (!var3) {
                            _fun81808_ip = 318;
                            continue _fun81808
                        }
                    case 35:
                        var4 = null;
                        var3 = arg0;
                        if (!(var4 != var3)) {
                            _fun81808_ip = 318;
                            continue _fun81808
                        }
                    case 47:
                        var3 = var2;
                        if (!(var4 != var3)) {
                            _fun81808_ip = 318;
                            continue _fun81808
                        }
                    case 57: // try_start_0
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var6 = 6;
                        var3 = var3[var6];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getContacts;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 92);
                    case 90:
                        return var2;
                    case 92:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun81808_ip = 167;
                            continue _fun81808
                        }
                    case 98:
                        var4 = var2.names;
                        var7 = var2.payload;
                        var3 = _closure1_slot6;
                        var3 = var3.bind(var1)(var4);
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var6 = var4.bind(var1)(var3);
                        var4 = var6.uploadContacts;
                        var3 = true;
                        var3 = var4.bind(var6)(var7, var3);
                        SaveGenerator(address = 153);
                    case 151:
                        return var3;
                    case 153:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun81808_ip = 164;
                            continue _fun81808
                        }
                    case 159: // try_end0
                        _fun81808_ip = 318;
                        continue _fun81808;
                    case 164:
                        return var3;
                    case 167:
                        return var2;
                    case 170: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 6;
                        var2 = var6[var2];
                        var2 = var4.bind(var1)(var2);
                        var2 = var2.ContactSyncPermissionDenied;
                        if (!(var3 === var2)) {
                            _fun81808_ip = 318;
                            continue _fun81808
                        }
                    case 202:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 7;
                        var2 = var7[var2];
                        var4 = var6.bind(var1)(var2);
                        var3 = var4.open;
                        var2 = {};
                        var8 = 'CONTACT_SYNC_NEEDS_PERMISSIONS';
                        var2.key = var8;
                        var10 = _closure1_slot0;
                        var5 = 8;
                        var8 = var7[var5];
                        var8 = var10.bind(var1)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var5 = var7[var5];
                        var5 = var10.bind(var1)(var5);
                        var5 = var5.t;
                        var5 = var5["h+jFOs"];
                        var5 = var8.bind(var9)(var5);
                        var2.content = var5;
                        var5 = 9;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var2.icon = var5;
                        var2 = var3.bind(var4)(var2);
                    case 318:
                        return var1;
                    case 321:
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
    var4 = var1.bind(var0)();
    var _closure1_slot13 = var4;
    var1 = function() { // Environment: var5
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun81812: for (var _fun81812_ip = 0;;) switch (_fun81812_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun81812_ip = 246;
                            continue _fun81812
                        }
                    case 13:
                        var4 = var5;
                        var3 = arg1;
                        var2 = arg2;
                        var1 = null;
                        if (!(var1 != var5)) {
                            _fun81812_ip = 241;
                            continue _fun81812
                        }
                    case 31: // try_start_0
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 10;
                        var1 = var6[var1];
                        var6 = undefined;
                        var8 = var7.bind(var6)(var1);
                        var7 = var8.updateContactSyncEnabled;
                        var1 = {};
                        var9 = var2;
                        var1.enabled = var9;
                        var1 = var7.bind(var8)(var1);
                        SaveGenerator(address = 80);
                    case 78:
                        return var1;
                    case 80:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun81812_ip = 115;
                            continue _fun81812
                        }
                    case 86:
                        var5 = _closure1_slot13;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        SaveGenerator(address = 101);
                    case 99:
                        return var2;
                    case 101:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun81812_ip = 112;
                            continue _fun81812
                        }
                    case 107: // try_end0
                        _fun81812_ip = 241;
                        continue _fun81812;
                    case 112:
                        return var2;
                    case 115:
                        return var1;
                    case 118: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 7;
                        var1 = var7[var1];
                        var5 = undefined;
                        var3 = var6.bind(var5)(var1);
                        var2 = var3.open;
                        var1 = {};
                        var8 = 'CONTACT_SYNC_FAILED_ALERT_TITLE';
                        var1.key = var8;
                        var10 = _closure1_slot0;
                        var4 = 8;
                        var8 = var7[var4];
                        var8 = var10.bind(var5)(var8);
                        var9 = var8.intl;
                        var8 = var9.string;
                        var4 = var7[var4];
                        var4 = var10.bind(var5)(var4);
                        var4 = var4.t;
                        var4 = var4.GCwBtE;
                        var4 = var8.bind(var9)(var4);
                        var1.content = var4;
                        var4 = 9;
                        var4 = var7[var4];
                        var4 = var6.bind(var5)(var4);
                        var1.icon = var4;
                        var1 = var2.bind(var3)(var1);
                    case 241:
                        var1 = undefined;
                        return var1;
                    case 246:
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
    var3 = var1.bind(var0)();
    var _closure1_slot14 = var3;
    var1 = function arg0, arg1, arg2() {
        _fun81814: for (var _fun81814_ip = 0;;) switch (_fun81814_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun81814_ip = 33;
                    continue _fun81814
                }
            case 9:
                var3 = _closure1_slot14;
                var2 = undefined;
                var1 = arg1;
                var0 = arg2;
                var0 = var3.bind(var2)(var4, var1, var0);
                _fun81814_ip = 149;
                continue _fun81814;
            case 33:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var3 = undefined;
                var7 = var2.bind(var3)(var0);
                var6 = var7.track;
                var0 = _closure1_slot7;
                var5 = var0.OPEN_MODAL;
                var2 = {};
                var0 = _closure1_slot9;
                var0 = var0.CONTACT_SYNC_MODAL;
                var2.type = var0;
                var8 = {};
                var0 = 'User Settings';
                var8.page = var0;
                var2.location = var8;
                var2 = var6.bind(var7)(var5, var2);
                var2 = _closure1_slot0;
                var1 = 12;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.openContactSyncModal;
                var1 = {};
                var1.page = var0;
                var0 = {};
                var0 = var2.bind(var3)(var0, var1);
            case 149:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot15 = var1;
    var6 = 20;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/contact_sync/native/components/ContactSyncSettings.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function() {
        _fun81815: for (var _fun81815_ip = 0;;) switch (_fun81815_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var20 = 6;
                var0 = var2[var20];
                var3 = undefined;
                var4 = var1.bind(var3)(var0);
                var0 = var4.useContactSyncAccount;
                var24 = var0.bind(var4)();
                var _closure2_slot0 = var24;
                var0 = 13;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var12
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var2.bind(var4)(var1, var0);
                var8 = null;
                var2 = var8 == var1;
                var0 = undefined;
                if (var2) {
                    _fun81815_ip = 100;
                    continue _fun81815
                }
            case 94:
                var0 = var1.phone;
            case 100:
                var _closure2_slot1 = var0;
                var0 = var8 == var1;
                var7 = undefined;
                if (var0) {
                    _fun81815_ip = 123;
                    continue _fun81815
                }
            case 113:
                var0 = var1.isStaff;
                var7 = var0.bind(var1)();
            case 123:
                var17 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = var10[var20];
                var1 = var17.bind(var3)(var0);
                var0 = var1.isContactSyncEnabled;
                var16 = var0.bind(var1)(var24);
                var0 = 14;
                var0 = var10[var0];
                var0 = var17.bind(var3)(var0);
                var1 = var0.FriendDiscoverySettings;
                var0 = var1.useSetting;
                var4 = var0.bind(var1)();
                var1 = 15;
                var0 = var10[var1];
                var9 = var17.bind(var3)(var0);
                var6 = var9.hasFlag;
                var0 = _closure1_slot8;
                var2 = var0.FIND_BY_PHONE;
                var15 = var6.bind(var9)(var4, var2);
                var _closure2_slot2 = var15;
                var1 = var10[var1];
                var2 = var17.bind(var3)(var1);
                var1 = var2.hasFlag;
                var0 = var0.FIND_BY_EMAIL;
                var13 = var1.bind(var2)(var4, var0);
                var _closure2_slot3 = var13;
                var2 = _closure1_slot12;
                var1 = _closure1_slot11;
                var0 = {};
                var9 = 16;
                var4 = var10[var9];
                var4 = var17.bind(var3)(var4);
                var6 = var4.FormSection;
                var4 = {};
                var18 = 8;
                var11 = var10[var18];
                var11 = var17.bind(var3)(var11);
                var14 = var11.intl;
                var11 = var14.string;
                var10 = var10[var18];
                var10 = var17.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.bGSsnc;
                var10 = var11.bind(var14)(var10);
                var4.title = var10;
                var10 = null;
                if (!var7) {
                    _fun81815_ip = 459;
                    continue _fun81815
                }
            case 337:
                var14 = _closure1_slot12;
                var11 = _closure1_slot11;
                var7 = {};
                var22 = _closure1_slot10;
                var21 = _closure1_slot0;
                var19 = _closure1_slot2;
                var17 = var19[var9];
                var17 = var21.bind(var3)(var17);
                var23 = var17.FormSwitchRow;
                var17 = {
                    'label': 'STAFF ONLY - Find your friends deletion',
                    'value': true
                };
                var25 = var19[var20];
                var25 = var21.bind(var3)(var25);
                var25 = var25.adminDeleteContactSync;
                var17.onValueChange = var25;
                var23 = var22.bind(var3)(var23, var17);
                var17 = new Array(2);
                var17[0] = var23;
                var19 = var19[var9];
                var19 = var21.bind(var3)(var19);
                var21 = var19.FormDivider;
                var19 = {};
                var19 = var22.bind(var3)(var21, var19);
                var17[1] = var19;
                var7.children = var17;
                var10 = var14.bind(var3)(var11, var7);
            case 459:
                var7 = new Array(3);
                var7[0] = var10;
                var14 = _closure1_slot10;
                var22 = _closure1_slot0;
                var17 = _closure1_slot2;
                var10 = var17[var9];
                var10 = var22.bind(var3)(var10);
                var11 = var10.FormSwitchRow;
                var10 = {};
                var19 = var17[var18];
                var19 = var22.bind(var3)(var19);
                var21 = var19.intl;
                var19 = var21.string;
                var17 = var17[var18];
                var17 = var22.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.uSvEy7;
                var17 = var19.bind(var21)(var17);
                var10.label = var17;
                var10.value = var16;
                var16 = function arg0() {
                    var4 = _closure1_slot15;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var10.onValueChange = var16;
                var10 = var14.bind(var3)(var11, var10);
                var7[1] = var10;
                var10 = var8 != var24;
                var8 = null;
                if (!var10) {
                    _fun81815_ip = 774;
                    continue _fun81815
                }
            case 582:
                var14 = _closure1_slot12;
                var11 = _closure1_slot11;
                var10 = {};
                var21 = _closure1_slot10;
                var23 = _closure1_slot0;
                var22 = _closure1_slot2;
                var16 = var22[var9];
                var16 = var23.bind(var3)(var16);
                var17 = var16.FormDivider;
                var16 = {};
                var17 = var21.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var17 = var22[var9];
                var17 = var23.bind(var3)(var17);
                var19 = var17.FormRow;
                var17 = {};
                var25 = var22[var18];
                var25 = var23.bind(var3)(var25);
                var27 = var25.intl;
                var26 = var27.string;
                var25 = var22[var18];
                var25 = var23.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.nAsWKy;
                var25 = var26.bind(var27)(var25);
                var17.label = var25;
                var22 = var22[var9];
                var22 = var23.bind(var3)(var22);
                var22 = var22.FormRow;
                var23 = var22.Arrow;
                var22 = {};
                var24 = var24.name;
                var22.label = var24;
                var22 = var21.bind(var3)(var23, var22);
                var17.trailing = var22;
                var22 = function() {
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var3 = var1[var0];
                    var0 = undefined;
                    var7 = var4.bind(var0)(var3);
                    var6 = var7.track;
                    var3 = _closure1_slot7;
                    var5 = var3.OPEN_MODAL;
                    var3 = {};
                    var8 = 'Change Name';
                    var3.type = var8;
                    var8 = {};
                    var9 = 'User Settings';
                    var8.page = var9;
                    var3.location = var8;
                    var3 = var6.bind(var7)(var5, var3);
                    var3 = 17;
                    var3 = var1[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.pushLazy;
                    var5 = _closure1_slot0;
                    var2 = 19;
                    var2 = var1[var2];
                    var5 = var5.bind(var0)(var2);
                    var2 = 18;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var5.bind(var0)(var2, var1);
                    var1 = 'Contact Sync Name Update Modal';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var17.onPress = var22;
                var17 = var21.bind(var3)(var19, var17);
                var16[1] = var17;
                var10.children = var16;
                var8 = var14.bind(var3)(var11, var10);
            case 774:
                var7[2] = var8;
                var4.children = var7;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var11 = _closure1_slot10;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = var14[var9];
                var6 = var17.bind(var3)(var6);
                var7 = var6.FormHint;
                var6 = {};
                var8 = var14[var18];
                var8 = var17.bind(var3)(var8);
                var19 = var8.intl;
                var16 = var19.format;
                var8 = var14[var18];
                var8 = var17.bind(var3)(var8);
                var8 = var8.t;
                var10 = var8.BoR0dO;
                var8 = {};
                var20 = var14[var20];
                var20 = var17.bind(var3)(var20);
                var20 = var20.handleOpenLearnMoreLink;
                var8.onClick = var20;
                var8 = var16.bind(var19)(var10, var8);
                var6.children = var8;
                var6 = var11.bind(var3)(var7, var6);
                var4[1] = var6;
                var6 = var14[var9];
                var6 = var17.bind(var3)(var6);
                var7 = var6.FormHint;
                var6 = {};
                var8 = var14[var18];
                var8 = var17.bind(var3)(var8);
                var16 = var8.intl;
                var10 = var16.string;
                var8 = var14[var18];
                var8 = var17.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.cW1nr9;
                var8 = var10.bind(var16)(var8);
                var6.children = var8;
                var6 = var11.bind(var3)(var7, var6);
                var4[2] = var6;
                var7 = _closure1_slot12;
                var5 = var14[var9];
                var5 = var17.bind(var3)(var5);
                var6 = var5.FormSection;
                var5 = {};
                var8 = var14[var18];
                var8 = var17.bind(var3)(var8);
                var16 = var8.intl;
                var10 = var16.string;
                var8 = var14[var18];
                var8 = var17.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["0t2wRW"];
                var8 = var10.bind(var16)(var8);
                var5.title = var8;
                var8 = var14[var9];
                var8 = var17.bind(var3)(var8);
                var10 = var8.FormSwitchRow;
                var8 = {};
                var16 = var14[var18];
                var16 = var17.bind(var3)(var16);
                var20 = var16.intl;
                var19 = var20.string;
                var16 = var14[var18];
                var16 = var17.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["eJnn0+"];
                var16 = var19.bind(var20)(var16);
                var8.label = var16;
                var16 = var14[var18];
                var16 = var17.bind(var3)(var16);
                var20 = var16.intl;
                var19 = var20.string;
                var16 = var14[var18];
                var16 = var17.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.X7pIKN;
                var16 = var19.bind(var20)(var16);
                var8.subLabel = var16;
                var8.value = var15;
                var15 = function arg0() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.updateDiscoverability;
                    var1 = {};
                    var4 = arg0;
                    var1.phone = var4;
                    var4 = _closure2_slot3;
                    var1.email = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8.onValueChange = var15;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(3);
                var8[0] = var10;
                var10 = var14[var9];
                var10 = var17.bind(var3)(var10);
                var15 = var10.FormDivider;
                var10 = {};
                var10 = var11.bind(var3)(var15, var10);
                var8[1] = var10;
                var9 = var14[var9];
                var9 = var17.bind(var3)(var9);
                var10 = var9.FormSwitchRow;
                var9 = {};
                var15 = var14[var18];
                var15 = var17.bind(var3)(var15);
                var19 = var15.intl;
                var16 = var19.string;
                var15 = var14[var18];
                var15 = var17.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.dI4d4S;
                var15 = var16.bind(var19)(var15);
                var9.label = var15;
                var15 = var14[var18];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.ilGsHE;
                var14 = var15.bind(var16)(var14);
                var9.subLabel = var14;
                var9.value = var13;
                var12 = function arg0() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.updateDiscoverability;
                    var1 = {};
                    var4 = _closure2_slot2;
                    var1.phone = var4;
                    var4 = arg0;
                    var1.email = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var9.onValueChange = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var5;
    var2.syncContacts = var4;
    var2.updateFriendSync = var3;
    var2.handleSyncContacts = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1613, 10303, 660, 33, 10302, 3139, 1234, 7452, 10301, 795, 10432, 566, 1348, 1384, 5373, 4557, 10451, 1307, 2]);