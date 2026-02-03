// modules/contact_sync/native/components/RedesignContactSyncModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function() {
        var0 = null;
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        var0 = null;
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        var1 = _closure1_slot19;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot16;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 15;
        var0 = var8[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-muted'
        };
        var4 = var4.landingTrailing;
        var0.style = var4;
        var4 = 16;
        var6 = var8[var4];
        var6 = var5.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.format;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.t;
        var5 = var4.cGQmNL;
        var4 = {};
        var8 = function arg0, arg1() {
            var4 = _closure1_slot16;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var0 = 15;
            var0 = var6[var0];
            var3 = undefined;
            var0 = var5.bind(var3)(var0);
            var2 = var0.Text;
            var1 = {
                'onPress': null,
                'variant': 'text-sm/medium',
                'color': 'text-link'
            };
            var0 = 17;
            var0 = var6[var0];
            var0 = var5.bind(var3)(var0);
            var0 = var0.handleOpenLearnMoreLink;
            var1.onPress = var0;
            var0 = arg0;
            var1.children = var0;
            var0 = arg1;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var4.learnMoreHook = var8;
        var4 = var6.bind(var7)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun81982: for (var _fun81982_ip = 0;;) switch (_fun81982_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isOnboarding;
                var6 = var1.discoverabilityEnabled;
                var5 = var1.setDiscoverabilityEnabled;
                var4 = _closure1_slot16;
                if (var0) {
                    _fun81982_ip = 73;
                    continue _fun81982
                }
            case 31:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 18;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = {};
                var0.discoverabilityEnabled = var6;
                var0.onValueChanged = var5;
                var0 = var4.bind(var3)(var2, var0);
                _fun81982_ip = 87;
                continue _fun81982;
            case 73:
                var3 = _closure1_slot22;
                var2 = undefined;
                var1 = {};
                var0 = var4.bind(var2)(var3, var1);
            case 87:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun81983: for (var _fun81983_ip = 0;;) switch (_fun81983_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.openSettingsSheet;
                var _closure2_slot0 = var0;
                var15 = var1.loading;
                var13 = var1.setLoading;
                var _closure2_slot1 = var13;
                var5 = var1.onComplete;
                var _closure2_slot2 = var5;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var1 = _closure1_slot19;
                var8 = var1.bind(var3)();
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
                var1 = var2[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var20 = var1.bottom;
                var4 = _closure1_slot0;
                var1 = 20;
                var1 = var2[var1];
                var6 = var4.bind(var3)(var1);
                var1 = var6.useNavigation;
                var17 = var1.bind(var6)();
                var _closure2_slot3 = var17;
                var1 = 21;
                var2 = var2[var1];
                var7 = var4.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var12
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var6.bind(var7)(var4, var2);
                var _closure2_slot4 = var4;
                var19 = null;
                var6 = var19 == var4;
                var2 = undefined;
                if (var6) {
                    _fun81983_ip = 196;
                    continue _fun81983
                }
            case 190:
                var2 = var4.phone;
            case 196:
                _closure2_slot5 = var2;
                var6 = _closure1_slot10;
                var6 = var6.bind(var3)();
                var9 = var6.permissionState;
                var11 = var6.error;
                var10 = _closure1_slot5;
                var6 = var10.useState;
                var7 = true;
                var14 = var6.bind(var10)(var7);
                var10 = _closure1_slot4;
                var6 = 2;
                var10 = var10.bind(var3)(var14, var6);
                var18 = 0;
                var23 = var10[var18];
                _closure2_slot6 = var23;
                var6 = 1;
                var22 = var10[var6];
                var6 = _closure1_slot11;
                var14 = var6.bind(var3)();
                _closure2_slot7 = var14;
                var10 = _closure1_slot5;
                var6 = var10.useCallback;
                var21 = var19 == var4;
                var19 = undefined;
                if (var21) {
                    _fun81983_ip = 301;
                    continue _fun81983
                }
            case 295:
                var19 = var4.email;
            case 301:
                var4 = new Array(6);
                var4[0] = var19;
                var4[1] = var23;
                var4[2] = var14;
                var4[3] = var17;
                var4[4] = var13;
                var4[5] = var2;
                var2 = function() { // Environment: var12
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var1 = global;
                    var3 = var1.setTimeout;
                    var2 = _closure1_slot3;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun81987: for (var _fun81987_ip = 0;;) switch (_fun81987_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun81987_ip = 234;
                                        continue _fun81987
                                    }
                                case 10:
                                    var2 = _closure2_slot7;
                                    if (var2) {
                                        _fun81987_ip = 149;
                                        continue _fun81987
                                    }
                                case 23:
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 22;
                                    var2 = var4[var2];
                                    var6 = undefined;
                                    var4 = var3.bind(var6)(var2);
                                    var3 = var4.updateDiscoverability;
                                    var2 = {};
                                    var5 = _closure2_slot6;
                                    var7 = !var5;
                                    var5 = !var7;
                                    if (var7) {
                                        _fun81987_ip = 98;
                                        continue _fun81987
                                    }
                                case 69:
                                    var8 = _closure2_slot4;
                                    var7 = null;
                                    var8 = var7 == var8;
                                    var6 = undefined;
                                    if (var8) {
                                        _fun81987_ip = 94;
                                        continue _fun81987
                                    }
                                case 84:
                                    var8 = _closure2_slot4;
                                    var6 = var8.email;
                                case 94:
                                    var5 = var7 != var6;
                                case 98:
                                    var2.email = var5;
                                    var5 = _closure2_slot6;
                                    var6 = !var5;
                                    var5 = !var6;
                                    if (var6) {
                                        _fun81987_ip = 126;
                                        continue _fun81987
                                    }
                                case 116:
                                    var7 = _closure2_slot5;
                                    var6 = null;
                                    var5 = var6 != var7;
                                case 126:
                                    var2.phone = var5;
                                    var2 = var3.bind(var4)(var2);
                                    SaveGenerator(address = 140);
                                case 138:
                                    return var2;
                                case 140:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                    if (!var3) {
                                        _fun81987_ip = 149;
                                        continue _fun81987
                                    }
                                case 146:
                                    return var2;
                                case 149:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 14;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var4 = var4.bind(var2)(var3);
                                    var3 = var4.startContactSync;
                                    var1 = _closure2_slot3;
                                    var1 = var3.bind(var4)(var1);
                                    SaveGenerator(address = 193);
                                case 191:
                                    return var1;
                                case 193:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun81987_ip = 231;
                                        continue _fun81987
                                    }
                                case 199:
                                    var3 = global;
                                    var5 = var3.setTimeout;
                                    var4 = function() { // Environment: var3
                                        var2 = _closure2_slot1;
                                        var1 = undefined;
                                        var0 = false;
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var3 = 2000;
                                    var3 = var5.bind(var2)(var4, var3);
                                    return var2;
                                case 231:
                                    return var1;
                                case 234:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var2 = var2.bind(var0)(var1);
                    var1 = 25;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var17 = var6.bind(var10)(var2, var4);
                _closure2_slot8 = var17;
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = var10[var1];
                var13 = var2.bind(var3)(var1);
                var6 = var13.useStateFromStores;
                var1 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var1;
                var2 = function() { // Environment: var12
                    var1 = _closure1_slot8;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var1 = var6.bind(var13)(var4, var2, var1);
                _closure2_slot9 = var1;
                var6 = _closure1_slot5;
                var4 = var6.useEffect;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var12
                    _fun81990: for (var _fun81990_ip = 0;;) switch (_fun81990_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 23;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isAndroid;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun81990_ip = 81;
                                continue _fun81990
                            }
                        case 38:
                            var4 = _closure2_slot9;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 24;
                            var3 = var6[var3];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.AppStates;
                            var3 = var3.ACTIVE;
                            var2 = var4 === var3;
                        case 81:
                            if (!var2) {
                                _fun81990_ip = 114;
                                continue _fun81990
                            }
                        case 84:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 14;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.refreshContactSyncPermissionStatus;
                            var1 = var1.bind(var2)();
                        case 114:
                            return var0;
                    }
                };
                var1 = var4.bind(var6)(var1, var2);
                var4 = _closure1_slot5;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var12
                    _fun81991: for (var _fun81991_ip = 0;;) switch (_fun81991_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun81991_ip = 146;
                                continue _fun81991
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var2 = 25;
                            var2 = var0[var2];
                            var5 = undefined;
                            var7 = var3.bind(var5)(var2);
                            var6 = var7.track;
                            var2 = _closure1_slot14;
                            var4 = var2.OPEN_POPOUT;
                            var2 = {};
                            var9 = 'Contact Sync';
                            var2.type = var9;
                            var8 = {};
                            var8.page = var9;
                            var2.location = var8;
                            var2 = var6.bind(var7)(var4, var2);
                            var2 = 26;
                            var2 = var0[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.openLazy;
                            var4 = _closure1_slot0;
                            var1 = 28;
                            var1 = var0[var1];
                            var4 = var4.bind(var5)(var1);
                            var1 = 27;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var1 = var4.bind(var5)(var1, var0);
                            var0 = 'Contact Sync Info Settings';
                            var0 = var2.bind(var3)(var1, var0);
                        case 146:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = _closure1_slot3;
                var0 = function*() { // Environment: var12
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun81993: for (var _fun81993_ip = 0;;) switch (_fun81993_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun81993_ip = 140;
                                    continue _fun81993
                                }
                            case 10:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 29;
                                var1 = var2[var1];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var1);
                                var4 = var5.requestPermission;
                                var1 = _closure1_slot15;
                                var1 = var1.CONTACTS;
                                var1 = var4.bind(var5)(var1);
                                SaveGenerator(address = 60);
                            case 58:
                                return var1;
                            case 60:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun81993_ip = 137;
                                    continue _fun81993
                                }
                            case 66:
                                if (var1) {
                                    _fun81993_ip = 123;
                                    continue _fun81993
                                }
                            case 69:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var3 = 14;
                                var3 = var5[var3];
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.closeContactSyncModal;
                                var3 = {};
                                var6 = _closure2_slot2;
                                var3.onComplete = var6;
                                var6 = true;
                                var3.skip = var6;
                                var3 = var4.bind(var5)(var3);
                                _fun81993_ip = 134;
                                continue _fun81993;
                            case 123:
                                var3 = _closure2_slot8;
                                var3 = var3.bind(var2)();
                            case 134:
                                return var2;
                            case 137:
                                return var1;
                            case 140:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var0 = new Array(2);
                var0[0] = var17;
                var0[1] = var5;
                var13 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot18;
                var1 = _closure1_slot17;
                var0 = {};
                var6 = _closure1_slot16;
                var5 = _closure1_slot1;
                var4 = 30;
                var4 = var10[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.absolute = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot16;
                var6 = _closure1_slot6;
                var5 = {};
                var10 = var8.container;
                var8 = new Array(2);
                var8[0] = var10;
                var10 = {};
                var21 = var20 > var18;
                var18 = 16;
                var19 = var18;
                if (!var21) {
                    _fun81983_ip = 597;
                    continue _fun81983
                }
            case 594:
                var19 = var20;
            case 597:
                var10.paddingBottom = var19;
                var8[1] = var10;
                var5.style = var8;
                if (var14) {
                    _fun81983_ip = 688;
                    continue _fun81983
                }
            case 613:
                var8 = _closure1_slot12;
                var8 = var8.AUTHORIZED;
                if (!(var9 === var8)) {
                    _fun81983_ip = 688;
                    continue _fun81983
                }
            case 627:
                var10 = _closure1_slot16;
                var9 = _closure1_slot1;
                var19 = _closure1_slot2;
                var8 = 33;
                var8 = var19[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.onNext = var17;
                var8.error = var11;
                var8.loading = var15;
                var8.discoverabilityEnabled = var23;
                var8.setDiscoverabilityEnabled = var22;
                var8 = var10.bind(var3)(var9, var8);
                _fun81983_ip = 916;
                continue _fun81983;
            case 688:
                var11 = _closure1_slot16;
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var9 = 31;
                var9 = var19[var9];
                var10 = var17.bind(var3)(var9);
                var9 = {};
                var24 = _closure1_slot0;
                var20 = var19[var18];
                var20 = var24.bind(var3)(var20);
                var25 = var20.intl;
                var21 = var25.string;
                var20 = var19[var18];
                var20 = var24.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.DjcfHu;
                var20 = var21.bind(var25)(var20);
                var9.title = var20;
                var20 = var19[var18];
                var20 = var24.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var18 = var19[var18];
                var18 = var24.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["kq+Cd3"];
                var18 = var20.bind(var21)(var18);
                var9.subtitle = var18;
                var21 = _closure1_slot16;
                var20 = _closure1_slot23;
                var18 = {};
                var18.isOnboarding = var14;
                var18.discoverabilityEnabled = var23;
                var18.setDiscoverabilityEnabled = var22;
                var18 = var21.bind(var3)(var20, var18);
                var9.trailing = var18;
                var18 = _closure1_slot16;
                var16 = 32;
                var16 = var19[var16];
                var17 = var17.bind(var3)(var16);
                var16 = {};
                var16 = var18.bind(var3)(var17, var16);
                var9.header = var16;
                var9.loading = var15;
                var9.showSkip = var14;
                var9.onAllow = var13;
                var12 = function() {
                    var4 = _closure2_slot2;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.closeContactSyncModal;
                    var1 = {};
                    var1.onComplete = var4;
                    var4 = true;
                    var1.skip = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var9.onDontAllow = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 916:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun81995: for (var _fun81995_ip = 0;;) switch (_fun81995_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.navigateToLandingPage;
                var1 = _closure1_slot19;
                var3 = undefined;
                var6 = var1.bind(var3)();
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 20;
                var1 = var12[var1];
                var5 = var5.bind(var3)(var1);
                var1 = var5.useNavigation;
                var14 = var1.bind(var5)();
                var _closure2_slot0 = var14;
                var7 = _closure1_slot5;
                var5 = var7.useState;
                var1 = false;
                var7 = var5.bind(var7)(var1);
                var5 = _closure1_slot4;
                var1 = 2;
                var5 = var5.bind(var3)(var7, var1);
                var1 = 0;
                var7 = var5[var1];
                var _closure2_slot1 = var7;
                var1 = 1;
                var1 = var5[var1];
                var _closure2_slot2 = var1;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                var10 = var1.name;
                var8 = var1.isNameFromContactBook;
                var9 = var1.error;
                var5 = _closure1_slot1;
                var1 = 34;
                var1 = var12[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.bind(var3)(var14, var2);
                var13 = _closure1_slot5;
                var11 = var13.useCallback;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun81998: for (var _fun81998_ip = 0;;) switch (_fun81998_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun81998_ip = 118;
                                        continue _fun81998
                                    }
                                case 7:
                                    var4 = _closure2_slot2;
                                    var2 = undefined;
                                    var3 = true;
                                    var3 = var4.bind(var2)(var3);
                                    var5 = _closure1_slot9;
                                    var4 = arg0;
                                    var4 = var5.bind(var2)(var4);
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var3 = 14;
                                    var3 = var5[var3];
                                    var4 = var4.bind(var2)(var3);
                                    var3 = var4.startContactSync;
                                    var1 = _closure2_slot0;
                                    var1 = var3.bind(var4)(var1);
                                    SaveGenerator(address = 77);
                                case 75:
                                    return var1;
                                case 77:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun81998_ip = 115;
                                        continue _fun81998
                                    }
                                case 83:
                                    var3 = global;
                                    var5 = var3.setTimeout;
                                    var4 = function() { // Environment: var3
                                        var2 = _closure2_slot2;
                                        var1 = undefined;
                                        var0 = false;
                                        var0 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var3 = 2000;
                                    var3 = var5.bind(var2)(var4, var3);
                                    return var2;
                                case 115:
                                    return var1;
                                case 118:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var2 = var1.bind(var3)();
                var1 = new Array(1);
                var1[0] = var14;
                var11 = var11.bind(var13)(var2, var1);
                var _closure2_slot3 = var11;
                var13 = _closure1_slot5;
                var2 = var13.useLayoutEffect;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var11;
                var1[2] = var14;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = function() {
                        var3 = _closure1_slot16;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 35;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var4 = true;
                        var0.insideNavigator = var4;
                        var4 = _closure2_slot1;
                        var0.disabled = var4;
                        var4 = function() {
                            var2 = _closure2_slot3;
                            var0 = undefined;
                            var1 = '';
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0.onPress = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var0.headerRight = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var2.bind(var13)(var0, var1);
                var2 = _closure1_slot16;
                var1 = _closure1_slot6;
                var0 = {};
                var6 = var6.container;
                var0.style = var6;
                var6 = _closure1_slot16;
                var4 = 36;
                var4 = var12[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.onNext = var11;
                var4.error = var9;
                var4.loading = var7;
                var7 = null;
                var12 = var7 != var10;
                var9 = '';
                var11 = var9;
                if (!var12) {
                    _fun81995_ip = 301;
                    continue _fun81995
                }
            case 298:
                var11 = var10;
            case 301:
                var4.initialName = var11;
                var7 = var7 != var10;
                if (!var7) {
                    _fun81995_ip = 317;
                    continue _fun81995
                }
            case 313:
                var7 = var9 !== var10;
            case 317:
                if (!var7) {
                    _fun81995_ip = 323;
                    continue _fun81995
                }
            case 320:
                var7 = var8;
            case 323:
                var4.prefilledFromContactBook = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun82004: for (var _fun82004_ip = 0;;) switch (_fun82004_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.onComplete;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot19;
                var4 = undefined;
                var7 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 20;
                var2 = var8[var2];
                var6 = var3.bind(var4)(var2);
                var2 = var6.useNavigation;
                var9 = var2.bind(var6)();
                var _closure2_slot1 = var9;
                var2 = _closure1_slot10;
                var2 = var2.bind(var4)();
                var6 = var2.suggestions;
                var _closure2_slot2 = var6;
                var2 = 34;
                var2 = var8[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useBackHandlerMinimizeApp;
                var2 = var2.bind(var3)();
                var10 = _closure1_slot5;
                var8 = var10.useCallback;
                var3 = new Array(2);
                var3[0] = var0;
                var2 = var6.length;
                var3[1] = var2;
                var2 = function(arg0, arg1) { // Environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.closeContactSyncModal;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.onComplete = var5;
                    var5 = arg0;
                    var1.skip = var5;
                    var4 = _closure2_slot2;
                    var4 = var4.length;
                    var1.friendsFound = var4;
                    var4 = arg1;
                    var1.friendsAdded = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10 = var8.bind(var10)(var2, var3);
                var _closure2_slot3 = var10;
                var8 = _closure1_slot5;
                var3 = var8.useLayoutEffect;
                var2 = new Array(4);
                var2[0] = var10;
                var2[1] = var9;
                var2[2] = var0;
                var0 = var6.length;
                var2[3] = var0;
                var0 = function() { // Environment: var5
                    var2 = _closure2_slot1;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = function() {
                        var3 = _closure1_slot16;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 35;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var4 = true;
                        var0.insideNavigator = var4;
                        var4 = function() {
                            var3 = _closure2_slot3;
                            var2 = undefined;
                            var1 = true;
                            var0 = 0;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var0.onPress = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var0.headerRight = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var3.bind(var8)(var0, var2);
                var2 = var6.length;
                var0 = 0;
                if (!(!(var2 > var0))) {
                    _fun82004_ip = 267;
                    continue _fun82004
                }
            case 204:
                var3 = _closure1_slot16;
                var2 = _closure1_slot6;
                var0 = {};
                var7 = var7.container;
                var0.style = var7;
                var9 = _closure1_slot16;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 38;
                var7 = var10[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7 = var9.bind(var4)(var8, var7);
                var0.children = var7;
                var0 = var3.bind(var4)(var2, var0);
                _fun82004_ip = 316;
                continue _fun82004;
            case 267:
                var3 = _closure1_slot16;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 37;
                var1 = var7[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.friendSuggestions = var6;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bulkAddFriendSuggestions;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var1.onSubmit = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 316:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var3 = function arg0() {
        _fun82010: for (var _fun82010_ip = 0;;) switch (_fun82010_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.onComplete;
                var _closure2_slot0 = var2;
                var5 = var1.initialRoutes;
                var1 = var1.openSettingsSheet;
                var _closure2_slot1 = var1;
                var7 = _closure1_slot5;
                var6 = var7.useState;
                var3 = false;
                var8 = var6.bind(var7)(var3);
                var7 = _closure1_slot4;
                var3 = undefined;
                var6 = 2;
                var7 = var7.bind(var3)(var8, var6);
                var6 = 0;
                var10 = var7[var6];
                var _closure2_slot2 = var10;
                var6 = 1;
                var6 = var7[var6];
                var _closure2_slot3 = var6;
                var6 = _closure1_slot11;
                var9 = var6.bind(var3)();
                var _closure2_slot4 = var9;
                var11 = _closure1_slot5;
                var8 = var11.useEffect;
                var7 = new Array(1);
                var7[0] = var9;
                var6 = function() { // Environment: var0
                    _fun82011: for (var _fun82011_ip = 0;;) switch (_fun82011_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (!var0) {
                                _fun82011_ip = 45;
                                continue _fun82011
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.refreshContactSyncPermissionStatus;
                            var0 = var0.bind(var1)();
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var8.bind(var11)(var6, var7);
                var8 = _closure1_slot5;
                var7 = var8.useMemo;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    _fun82012: for (var _fun82012_ip = 0;;) switch (_fun82012_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun82012_ip = 24;
                                continue _fun82012
                            }
                        case 13:
                            var0 = function() { // Environment: var0
                                var0 = undefined;
                                return var0;
                            };
                            _fun82012_ip = 28;
                            continue _fun82012;
                        case 24:
                            var0 = _closure2_slot0;
                        case 28:
                            return var0;
                    }
                };
                var8 = var7.bind(var8)(var2, var6);
                var _closure2_slot5 = var8;
                var7 = _closure1_slot5;
                var6 = var7.useMemo;
                var2 = new Array(4);
                var2[0] = var9;
                var2[1] = var10;
                var2[2] = var1;
                var2[3] = var8;
                var1 = function() { // Environment: var0
                    var2 = {};
                    var1 = _closure2_slot4;
                    var2.isOnboarding = var1;
                    var1 = _closure2_slot2;
                    var2.loading = var1;
                    var1 = _closure2_slot3;
                    var2.setLoading = var1;
                    var1 = _closure2_slot1;
                    var2.openSettingsSheet = var1;
                    var0 = _closure2_slot5;
                    var2.onComplete = var0;
                    var1 = function arg0() {
                        _fun82015: for (var _fun82015_ip = 0;;) switch (_fun82015_ip) {
                            case 0:
                                var0 = arg0;
                                var6 = var0.isOnboarding;
                                var1 = var0.loading;
                                var _closure4_slot0 = var1;
                                var1 = var0.setLoading;
                                var _closure4_slot1 = var1;
                                var1 = var0.openSettingsSheet;
                                var _closure4_slot2 = var1;
                                var1 = var0.onComplete;
                                var _closure4_slot3 = var1;
                                var0 = var0.navigateToLandingPage;
                                var _closure4_slot4 = var0;
                                var0 = {};
                                var2 = _closure1_slot13;
                                var4 = var2.WELCOME;
                                var2 = {};
                                var5 = true;
                                var2.ignoreKeyboard = var5;
                                var11 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var10 = 39;
                                var7 = var8[var10];
                                var9 = undefined;
                                var7 = var11.bind(var9)(var7);
                                var7 = var7.ImpressionNames;
                                var7 = var7.CONTACT_SYNC_START;
                                var2.impressionName = var7;
                                var7 = {};
                                var8 = var8[var10];
                                var8 = var11.bind(var9)(var8);
                                var8 = var8.ImpressionGroups;
                                var8 = var8.CONTACT_SYNC_FLOW;
                                var7.impression_group = var8;
                                var2.impressionProperties = var7;
                                var2.fullscreen = var5;
                                var7 = _closure1_slot20;
                                var2.headerTitle = var7;
                                if (var6) {
                                    _fun82015_ip = 214;
                                    continue _fun82015
                                }
                            case 174:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var6 = 40;
                                var6 = var8[var6];
                                var8 = var7.bind(var9)(var6);
                                var7 = var8.getHeaderCloseButton;
                                var6 = function() { // Environment: var3
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 14;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.closeContactSyncModal;
                                    var0 = {};
                                    var3 = _closure4_slot3;
                                    var0.onComplete = var3;
                                    var3 = true;
                                    var0.skip = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var6 = var7.bind(var8)(var6);
                                _fun82015_ip = 218;
                                continue _fun82015;
                            case 214:
                                var6 = _closure1_slot21;
                            case 218:
                                var2.headerLeft = var6;
                                var6 = function() {
                                    var3 = _closure1_slot16;
                                    var2 = _closure1_slot24;
                                    var1 = {};
                                    var4 = _closure4_slot3;
                                    var1.onComplete = var4;
                                    var4 = _closure4_slot2;
                                    var1.openSettingsSheet = var4;
                                    var4 = _closure4_slot0;
                                    var1.loading = var4;
                                    var0 = _closure4_slot1;
                                    var1.setLoading = var0;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                var2.render = var6;
                                var0[var4] = var2;
                                var2 = _closure1_slot13;
                                var6 = var2.NAME_INPUT;
                                var2 = {};
                                var2.ignoreKeyboard = var5;
                                var8 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = var7[var10];
                                var4 = var8.bind(var9)(var4);
                                var4 = var4.ImpressionNames;
                                var4 = var4.CONTACT_SYNC_INPUT_NAME;
                                var2.impressionName = var4;
                                var4 = {};
                                var11 = var7[var10];
                                var11 = var8.bind(var9)(var11);
                                var11 = var11.ImpressionGroups;
                                var11 = var11.CONTACT_SYNC_FLOW;
                                var4.impression_group = var11;
                                var2.impressionProperties = var4;
                                var2.fullscreen = var5;
                                var4 = _closure1_slot20;
                                var2.headerTitle = var4;
                                var11 = _closure1_slot21;
                                var2.headerLeft = var11;
                                var12 = function() {
                                    var3 = _closure1_slot16;
                                    var2 = _closure1_slot25;
                                    var1 = {};
                                    var0 = _closure4_slot4;
                                    var1.navigateToLandingPage = var0;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                var2.render = var12;
                                var0[var6] = var2;
                                var2 = _closure1_slot13;
                                var6 = var2.SUGGESTIONS;
                                var2 = {};
                                var2.ignoreKeyboard = var5;
                                var12 = var7[var10];
                                var12 = var8.bind(var9)(var12);
                                var12 = var12.ImpressionNames;
                                var12 = var12.CONTACT_SYNC_SUGGESTIONS;
                                var2.impressionName = var12;
                                var12 = {};
                                var13 = var7[var10];
                                var13 = var8.bind(var9)(var13);
                                var13 = var13.ImpressionGroups;
                                var13 = var13.CONTACT_SYNC_FLOW;
                                var12.impression_group = var13;
                                var2.impressionProperties = var12;
                                var2.fullscreen = var5;
                                var2.headerTitle = var4;
                                var2.headerLeft = var11;
                                var11 = function() {
                                    var3 = _closure1_slot16;
                                    var2 = _closure1_slot26;
                                    var1 = {};
                                    var0 = _closure4_slot3;
                                    var1.onComplete = var0;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                var2.render = var11;
                                var0[var6] = var2;
                                var2 = _closure1_slot13;
                                var6 = var2.ADD_PHONE;
                                var2 = {};
                                var11 = var7[var10];
                                var11 = var8.bind(var9)(var11);
                                var11 = var11.ImpressionNames;
                                var11 = var11.USER_ADD_PHONE;
                                var2.impressionName = var11;
                                var11 = {};
                                var12 = var7[var10];
                                var12 = var8.bind(var9)(var12);
                                var12 = var12.ImpressionGroups;
                                var12 = var12.CONTACT_SYNC_FLOW;
                                var11.impression_group = var12;
                                var2.impressionProperties = var11;
                                var2.fullscreen = var5;
                                var2.headerTitle = var4;
                                var11 = function arg0() {
                                    var3 = _closure1_slot16;
                                    var1 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 41;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var1 = var1.bind(var2)(var0);
                                    var0 = {};
                                    var6 = arg0;
                                    var7 = var0;
                                    var4 = copyDataProperties(var7, var6);
                                    var5 = _closure4_slot4;
                                    var4 = 'navigateToLandingPage';
                                    var0[var4] = var5;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var2.headerLeft = var11;
                                var11 = function() {
                                    var3 = _closure1_slot16;
                                    var1 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 42;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var0 = var1.bind(var2)(var0);
                                    var1 = var0.AddPhoneScreen;
                                    var0 = {};
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var2.render = var11;
                                var0[var6] = var2;
                                var2 = _closure1_slot13;
                                var6 = var2.VERIFY_PHONE;
                                var2 = {};
                                var11 = var7[var10];
                                var11 = var8.bind(var9)(var11);
                                var11 = var11.ImpressionNames;
                                var11 = var11.USER_VERIFY_PHONE;
                                var2.impressionName = var11;
                                var11 = {};
                                var12 = var7[var10];
                                var12 = var8.bind(var9)(var12);
                                var12 = var12.ImpressionGroups;
                                var12 = var12.CONTACT_SYNC_FLOW;
                                var11.impression_group = var12;
                                var2.impressionProperties = var11;
                                var2.fullscreen = var5;
                                var2.headerTitle = var4;
                                var11 = function arg0() {
                                    var3 = _closure1_slot16;
                                    var1 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 41;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var1 = var1.bind(var2)(var0);
                                    var0 = {};
                                    var6 = arg0;
                                    var7 = var0;
                                    var4 = copyDataProperties(var7, var6);
                                    var5 = _closure4_slot4;
                                    var4 = 'navigateToLandingPage';
                                    var0[var4] = var5;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var2.headerLeft = var11;
                                var11 = function() {
                                    var3 = _closure1_slot16;
                                    var1 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 42;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var0 = var1.bind(var2)(var0);
                                    var1 = var0.VerifyPhoneScreen;
                                    var0 = {};
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var2.render = var11;
                                var0[var6] = var2;
                                var1 = _closure1_slot13;
                                var2 = var1.VERIFY_PASSWORD;
                                var1 = {};
                                var6 = var7[var10];
                                var6 = var8.bind(var9)(var6);
                                var6 = var6.ImpressionNames;
                                var6 = var6.USER_VERIFY_PASSWORD;
                                var1.impressionName = var6;
                                var6 = {};
                                var7 = var7[var10];
                                var7 = var8.bind(var9)(var7);
                                var7 = var7.ImpressionGroups;
                                var7 = var7.CONTACT_SYNC_FLOW;
                                var6.impression_group = var7;
                                var1.impressionProperties = var6;
                                var1.fullscreen = var5;
                                var5 = function arg0() {
                                    var3 = _closure1_slot16;
                                    var1 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 41;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var1 = var1.bind(var2)(var0);
                                    var0 = {};
                                    var6 = arg0;
                                    var7 = var0;
                                    var4 = copyDataProperties(var7, var6);
                                    var5 = _closure4_slot4;
                                    var4 = 'navigateToLandingPage';
                                    var0[var4] = var5;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var1.headerLeft = var5;
                                var1.headerTitle = var4;
                                var3 = function() {
                                    var3 = _closure1_slot16;
                                    var1 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 42;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var0 = var1.bind(var2)(var0);
                                    var1 = var0.VerifyPasswordScreen;
                                    var0 = {};
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var1.render = var3;
                                var0[var2] = var1;
                                return var0;
                        }
                    };
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var6 = var6.bind(var7)(var1, var2);
                var7 = _closure1_slot5;
                var2 = var7.useEffect;
                var1 = new Array(2);
                var1[0] = var9;
                var1[1] = var8;
                var0 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        _fun82027: for (var _fun82027_ip = 0;;) switch (_fun82027_ip) {
                            case 0:
                                var0 = _closure2_slot4;
                                var0 = !var0;
                                if (!var0) {
                                    _fun82027_ip = 60;
                                    continue _fun82027
                                }
                            case 13:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 14;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.closeContactSyncModal;
                                var0 = {};
                                var3 = _closure2_slot5;
                                var0.onComplete = var3;
                                var0 = var1.bind(var2)(var0);
                            case 60:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot16;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 43;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Navigator;
                var0 = {};
                var0.screens = var6;
                var6 = null;
                if (!(var6 == var5)) {
                    _fun82010_ip = 308;
                    continue _fun82010
                }
            case 281:
                var7 = {};
                var6 = _closure1_slot13;
                var6 = var6.WELCOME;
                var7.name = var6;
                var6 = new Array(1);
                var6[0] = var7;
                var5 = var6;
            case 308:
                var0.initialRouteStack = var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 16;
                var5 = var8[var4];
                var5 = var7.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4["13/7kX"];
                var4 = var5.bind(var6)(var4);
                var0.headerBackTitle = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot27 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var11.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.setName;
    var _closure1_slot9 = var7;
    var7 = var4.useContactSyncModalStore;
    var _closure1_slot10 = var7;
    var4 = var4.useIsOnboarding;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ContactPermissions;
    var _closure1_slot12 = var7;
    var4 = var4.ContactSyncScenes;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.NativePermissionTypes;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot16 = var7;
    var7 = var4.Fragment;
    var _closure1_slot17 = var7;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'flex': 1,
        'backgroundColor': null,
        'justifyContent': 'center'
    };
    var10 = 12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var10;
    var10 = 'center';
    var11 = 13;
    var11 = var6[var11];
    var11 = var5.bind(var0)(var11);
    var12 = var11.NAV_BAR_HEIGHT;
    var11 = 32;
    var11 = var12 + var11;
    var9.paddingTop = var11;
    var4.container = var9;
    var9 = {};
    var9.textAlign = var10;
    var4.landingTrailing = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var4 = 44;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/contact_sync/native/components/RedesignContactSyncModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        var0 = arg0;
        var1 = var0.route;
        var1 = var1.params;
        var5 = var1.onComplete;
        var4 = var0.openSettingsSheet;
        var0 = var0.initialRoutes;
        var3 = _closure1_slot16;
        var2 = _closure1_slot27;
        var1 = {};
        var1.onComplete = var5;
        var1.openSettingsSheet = var4;
        var1.initialRoutes = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.ContactSyncOnboardingModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1621, 5284, 10312, 10313, 660, 4014, 33, 1297, 671, 4703, 10451, 3941, 1234, 10321, 10454, 1568, 1469, 566, 10320, 478, 670, 795, 3278, 10455, 1307, 4015, 8724, 10456, 10457, 10460, 10462, 10463, 10327, 10464, 10466, 481, 4705, 10468, 10469, 5786, 2]);