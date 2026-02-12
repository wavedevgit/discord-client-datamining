// modules/contact_sync/native/components/RedesignContactSyncModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        var0 = null;
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var0 = null;
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function arg0() {
        _fun76056: for (var _fun76056_ip = 0;;) switch (_fun76056_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isOnboarding;
                var6 = var1.discoverabilityEnabled;
                var5 = var1.setDiscoverabilityEnabled;
                if (var0) {
                    _fun76056_ip = 73;
                    continue _fun76056
                }
            case 27:
                var4 = _closure1_slot16;
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
                _fun76056_ip = 77;
                continue _fun76056;
            case 73:
                var0 = _closure1_slot20;
            case 77:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        _fun76057: for (var _fun76057_ip = 0;;) switch (_fun76057_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.openSettingsSheet;
                var _closure2_slot0 = var0;
                var15 = var1.loading;
                var10 = var1.setLoading;
                var _closure2_slot1 = var10;
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
                var1 = _closure1_slot2;
                var2 = 21;
                var2 = var1[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var19 = var2.bottom;
                var2 = _closure1_slot0;
                var4 = 22;
                var4 = var1[var4];
                var6 = var2.bind(var3)(var4);
                var4 = var6.useNavigation;
                var13 = var4.bind(var6)();
                var _closure2_slot3 = var13;
                var4 = 23;
                var1 = var1[var4];
                var7 = var2.bind(var3)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var12
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var6.bind(var7)(var2, var1);
                var _closure2_slot4 = var2;
                var17 = null;
                var6 = var17 == var2;
                var1 = undefined;
                if (var6) {
                    _fun76057_ip = 196;
                    continue _fun76057
                }
            case 190:
                var1 = var2.phone;
            case 196:
                _closure2_slot5 = var1;
                var6 = _closure1_slot10;
                var6 = var6.bind(var3)();
                var9 = var6.permissionState;
                var11 = var6.error;
                var14 = _closure1_slot5;
                var7 = var14.useState;
                var6 = true;
                var14 = var7.bind(var14)(var6);
                var7 = _closure1_slot4;
                var6 = 2;
                var7 = var7.bind(var3)(var14, var6);
                var18 = 0;
                var21 = var7[var18];
                _closure2_slot6 = var21;
                var6 = 1;
                var20 = var7[var6];
                var6 = _closure1_slot11;
                var14 = var6.bind(var3)();
                _closure2_slot7 = var14;
                var7 = _closure1_slot5;
                var6 = var7.useCallback;
                var22 = var17 == var2;
                var17 = undefined;
                if (var22) {
                    _fun76057_ip = 301;
                    continue _fun76057
                }
            case 295:
                var17 = var2.email;
            case 301:
                var2 = new Array(6);
                var2[0] = var17;
                var2[1] = var21;
                var2[2] = var14;
                var2[3] = var13;
                var2[4] = var10;
                var2[5] = var1;
                var1 = function() { // Environment: var12
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var1 = global;
                    var3 = var1.setTimeout;
                    var2 = _closure1_slot3;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun76061: for (var _fun76061_ip = 0;;) switch (_fun76061_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun76061_ip = 234;
                                        continue _fun76061
                                    }
                                case 10:
                                    var2 = _closure2_slot7;
                                    if (var2) {
                                        _fun76061_ip = 149;
                                        continue _fun76061
                                    }
                                case 23:
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 24;
                                    var2 = var4[var2];
                                    var6 = undefined;
                                    var4 = var3.bind(var6)(var2);
                                    var3 = var4.updateDiscoverability;
                                    var2 = {};
                                    var5 = _closure2_slot6;
                                    var7 = !var5;
                                    var5 = !var7;
                                    if (var7) {
                                        _fun76061_ip = 98;
                                        continue _fun76061
                                    }
                                case 69:
                                    var8 = _closure2_slot4;
                                    var7 = null;
                                    var8 = var7 == var8;
                                    var6 = undefined;
                                    if (var8) {
                                        _fun76061_ip = 94;
                                        continue _fun76061
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
                                        _fun76061_ip = 126;
                                        continue _fun76061
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
                                        _fun76061_ip = 149;
                                        continue _fun76061
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
                                        _fun76061_ip = 231;
                                        continue _fun76061
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
                var17 = var6.bind(var7)(var1, var2);
                _closure2_slot8 = var17;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var7 = var2.bind(var3)(var1);
                var6 = var7.useStateFromStores;
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
                var1 = var6.bind(var7)(var4, var2, var1);
                _closure2_slot9 = var1;
                var6 = _closure1_slot5;
                var4 = var6.useEffect;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var12
                    _fun76064: for (var _fun76064_ip = 0;;) switch (_fun76064_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 25;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isAndroid;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun76064_ip = 81;
                                continue _fun76064
                            }
                        case 38:
                            var4 = _closure2_slot9;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 26;
                            var3 = var6[var3];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.AppStates;
                            var3 = var3.ACTIVE;
                            var2 = var4 === var3;
                        case 81:
                            if (!var2) {
                                _fun76064_ip = 114;
                                continue _fun76064
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
                    _fun76065: for (var _fun76065_ip = 0;;) switch (_fun76065_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun76065_ip = 146;
                                continue _fun76065
                            }
                        case 13:
                            var3 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var2 = 27;
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
                            var2 = 28;
                            var2 = var0[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.openLazy;
                            var4 = _closure1_slot0;
                            var1 = 30;
                            var1 = var0[var1];
                            var4 = var4.bind(var5)(var1);
                            var1 = 29;
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
                        _fun76067: for (var _fun76067_ip = 0;;) switch (_fun76067_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun76067_ip = 140;
                                    continue _fun76067
                                }
                            case 10:
                                var4 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 31;
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
                                    _fun76067_ip = 137;
                                    continue _fun76067
                                }
                            case 66:
                                if (var1) {
                                    _fun76067_ip = 123;
                                    continue _fun76067
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
                                _fun76067_ip = 134;
                                continue _fun76067;
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
                var5 = _closure1_slot21;
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot16;
                var6 = _closure1_slot6;
                var5 = {};
                var10 = var8.container;
                var8 = new Array(2);
                var8[0] = var10;
                var10 = {};
                var22 = var19 > var18;
                var23 = 16;
                var18 = var23;
                if (!var22) {
                    _fun76057_ip = 568;
                    continue _fun76057
                }
            case 565:
                var18 = var19;
            case 568:
                var10.paddingBottom = var18;
                var8[1] = var10;
                var5.style = var8;
                if (var14) {
                    _fun76057_ip = 659;
                    continue _fun76057
                }
            case 584:
                var8 = _closure1_slot12;
                var8 = var8.AUTHORIZED;
                if (!(var9 === var8)) {
                    _fun76057_ip = 659;
                    continue _fun76057
                }
            case 598:
                var10 = _closure1_slot16;
                var9 = _closure1_slot1;
                var18 = _closure1_slot2;
                var8 = 33;
                var8 = var18[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.onNext = var17;
                var8.error = var11;
                var8.loading = var15;
                var8.discoverabilityEnabled = var21;
                var8.setDiscoverabilityEnabled = var20;
                var8 = var10.bind(var3)(var9, var8);
                _fun76057_ip = 867;
                continue _fun76057;
            case 659:
                var11 = _closure1_slot16;
                var10 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 32;
                var9 = var17[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var22 = _closure1_slot0;
                var18 = var17[var23];
                var18 = var22.bind(var3)(var18);
                var24 = var18.intl;
                var19 = var24.string;
                var18 = var17[var23];
                var18 = var22.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.DjcfHu;
                var18 = var19.bind(var24)(var18);
                var9.title = var18;
                var18 = var17[var23];
                var18 = var22.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var23];
                var17 = var22.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["kq+Cd3"];
                var17 = var18.bind(var19)(var17);
                var9.subtitle = var17;
                var19 = _closure1_slot16;
                var18 = _closure1_slot29;
                var17 = {};
                var17.isOnboarding = var14;
                var17.discoverabilityEnabled = var21;
                var17.setDiscoverabilityEnabled = var20;
                var17 = var19.bind(var3)(var18, var17);
                var9.trailing = var17;
                var16 = _closure1_slot22;
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
            case 867:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0() {
        _fun76069: for (var _fun76069_ip = 0;;) switch (_fun76069_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.navigateToLandingPage;
                var1 = _closure1_slot19;
                var3 = undefined;
                var6 = var1.bind(var3)();
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 22;
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
                            _fun76072: for (var _fun76072_ip = 0;;) switch (_fun76072_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun76072_ip = 118;
                                        continue _fun76072
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
                                        _fun76072_ip = 115;
                                        continue _fun76072
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
                    _fun76069_ip = 301;
                    continue _fun76069
                }
            case 298:
                var11 = var10;
            case 301:
                var4.initialName = var11;
                var7 = var7 != var10;
                if (!var7) {
                    _fun76069_ip = 317;
                    continue _fun76069
                }
            case 313:
                var7 = var9 !== var10;
            case 317:
                if (!var7) {
                    _fun76069_ip = 323;
                    continue _fun76069
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
    var _closure1_slot31 = var0;
    var0 = function arg0() {
        _fun76078: for (var _fun76078_ip = 0;;) switch (_fun76078_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.onComplete;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot19;
                var4 = undefined;
                var7 = var2.bind(var4)();
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 22;
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
                    _fun76078_ip = 239;
                    continue _fun76078
                }
            case 204:
                var3 = _closure1_slot16;
                var2 = _closure1_slot6;
                var0 = {};
                var7 = var7.container;
                var0.style = var7;
                var7 = _closure1_slot23;
                var0.children = var7;
                var0 = var3.bind(var4)(var2, var0);
                _fun76078_ip = 288;
                continue _fun76078;
            case 239:
                var3 = _closure1_slot16;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 38;
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
            case 288:
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var3 = function arg0() {
        _fun76084: for (var _fun76084_ip = 0;;) switch (_fun76084_ip) {
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
                    _fun76085: for (var _fun76085_ip = 0;;) switch (_fun76085_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            if (!var0) {
                                _fun76085_ip = 45;
                                continue _fun76085
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
                    _fun76086: for (var _fun76086_ip = 0;;) switch (_fun76086_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun76086_ip = 24;
                                continue _fun76086
                            }
                        case 13:
                            var0 = function() { // Environment: var0
                                var0 = undefined;
                                return var0;
                            };
                            _fun76086_ip = 28;
                            continue _fun76086;
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
                        _fun76089: for (var _fun76089_ip = 0;;) switch (_fun76089_ip) {
                            case 0:
                                var0 = arg0;
                                var6 = var0.isOnboarding;
                                var7 = var0.loading;
                                var5 = var0.setLoading;
                                var8 = var0.openSettingsSheet;
                                var10 = var0.onComplete;
                                var _closure4_slot0 = var10;
                                var11 = var0.navigateToLandingPage;
                                var _closure4_slot1 = var11;
                                var4 = _closure1_slot16;
                                var2 = _closure1_slot32;
                                var0 = {};
                                var0.onComplete = var10;
                                var9 = undefined;
                                var0 = var4.bind(var9)(var2, var0);
                                var _closure4_slot2 = var0;
                                var4 = _closure1_slot16;
                                var2 = _closure1_slot31;
                                var0 = {};
                                var0.navigateToLandingPage = var11;
                                var0 = var4.bind(var9)(var2, var0);
                                var _closure4_slot3 = var0;
                                var4 = _closure1_slot16;
                                var2 = _closure1_slot30;
                                var0 = {};
                                var0.onComplete = var10;
                                var0.openSettingsSheet = var8;
                                var0.loading = var7;
                                var0.setLoading = var5;
                                var0 = var4.bind(var9)(var2, var0);
                                var _closure4_slot4 = var0;
                                var0 = {};
                                var2 = _closure1_slot13;
                                var4 = var2.WELCOME;
                                var2 = {};
                                var5 = true;
                                var2.ignoreKeyboard = var5;
                                var11 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var10 = 40;
                                var7 = var8[var10];
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
                                var7 = _closure1_slot27;
                                var2.headerTitle = var7;
                                if (var6) {
                                    _fun76089_ip = 292;
                                    continue _fun76089
                                }
                            case 252:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var6 = 41;
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
                                    var3 = _closure4_slot0;
                                    var0.onComplete = var3;
                                    var3 = true;
                                    var0.skip = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var6 = var7.bind(var8)(var6);
                                _fun76089_ip = 296;
                                continue _fun76089;
                            case 292:
                                var6 = _closure1_slot28;
                            case 296:
                                var2.headerLeft = var6;
                                var6 = function() {
                                    var0 = _closure4_slot4;
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
                                var4 = _closure1_slot27;
                                var2.headerTitle = var4;
                                var11 = _closure1_slot28;
                                var2.headerLeft = var11;
                                var12 = function() {
                                    var0 = _closure4_slot3;
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
                                    var0 = _closure4_slot2;
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
                                    var0 = 42;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var1 = var1.bind(var2)(var0);
                                    var0 = {};
                                    var6 = arg0;
                                    var7 = var0;
                                    var4 = copyDataProperties(var7, var6);
                                    var5 = _closure4_slot1;
                                    var4 = 'navigateToLandingPage';
                                    var0[var4] = var5;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var2.headerLeft = var11;
                                var11 = function() {
                                    var0 = _closure1_slot24;
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
                                    var0 = 42;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var1 = var1.bind(var2)(var0);
                                    var0 = {};
                                    var6 = arg0;
                                    var7 = var0;
                                    var4 = copyDataProperties(var7, var6);
                                    var5 = _closure4_slot1;
                                    var4 = 'navigateToLandingPage';
                                    var0[var4] = var5;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var2.headerLeft = var11;
                                var11 = function() {
                                    var0 = _closure1_slot25;
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
                                    var0 = 42;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var1 = var1.bind(var2)(var0);
                                    var0 = {};
                                    var6 = arg0;
                                    var7 = var0;
                                    var4 = copyDataProperties(var7, var6);
                                    var5 = _closure4_slot1;
                                    var4 = 'navigateToLandingPage';
                                    var0[var4] = var5;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var1.headerLeft = var5;
                                var1.headerTitle = var4;
                                var3 = function() {
                                    var0 = _closure1_slot26;
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
                        _fun76101: for (var _fun76101_ip = 0;;) switch (_fun76101_ip) {
                            case 0:
                                var0 = _closure2_slot4;
                                var0 = !var0;
                                if (!var0) {
                                    _fun76101_ip = 60;
                                    continue _fun76101
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
                    _fun76084_ip = 308;
                    continue _fun76084
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
    var _closure1_slot33 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var10 = true;
    var4.value = var10;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.setName;
    var _closure1_slot9 = var8;
    var8 = var4.useContactSyncModalStore;
    var _closure1_slot10 = var8;
    var4 = var4.useIsOnboarding;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.ContactPermissions;
    var _closure1_slot12 = var8;
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
    var8 = var4.jsx;
    var _closure1_slot16 = var8;
    var9 = var4.Fragment;
    var _closure1_slot17 = var9;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var11 = var5.bind(var0)(var4);
    var9 = var11.createStyles;
    var4 = {};
    var12 = {
        'flex': 1,
        'backgroundColor': null,
        'justifyContent': 'center'
    };
    var13 = 12;
    var13 = var6[var13];
    var13 = var7.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var12.backgroundColor = var13;
    var13 = 'center';
    var14 = 13;
    var14 = var6[var14];
    var14 = var5.bind(var0)(var14);
    var15 = var14.NAV_BAR_HEIGHT;
    var14 = 32;
    var14 = var15 + var14;
    var12.paddingTop = var14;
    var4.container = var12;
    var12 = {};
    var12.textAlign = var13;
    var4.landingTrailing = var12;
    var4 = var9.bind(var11)(var4);
    var _closure1_slot19 = var4;
    var9 = function() {
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
    var4 = {};
    var4 = var8.bind(var0)(var9, var4);
    var _closure1_slot20 = var4;
    var4 = 19;
    var4 = var6[var4];
    var9 = var7.bind(var0)(var4);
    var4 = {};
    var4.absolute = var10;
    var4 = var8.bind(var0)(var9, var4);
    var _closure1_slot21 = var4;
    var4 = 20;
    var4 = var6[var4];
    var9 = var7.bind(var0)(var4);
    var4 = {};
    var4 = var8.bind(var0)(var9, var4);
    var _closure1_slot22 = var4;
    var4 = 37;
    var4 = var6[var4];
    var7 = var7.bind(var0)(var4);
    var4 = {};
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot23 = var4;
    var4 = 39;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var9 = var7.AddPhoneScreen;
    var7 = {};
    var7 = var8.bind(var0)(var9, var7);
    var _closure1_slot24 = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var9 = var7.VerifyPhoneScreen;
    var7 = {};
    var7 = var8.bind(var0)(var9, var7);
    var _closure1_slot25 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.VerifyPasswordScreen;
    var4 = {};
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot26 = var4;
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
        var2 = _closure1_slot33;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1621, 5314, 9593, 9594, 660, 4009, 33, 1297, 671, 4753, 9592, 3938, 1234, 9596, 9602, 7690, 9603, 1568, 1469, 566, 9600, 478, 670, 795, 3279, 9606, 1307, 4010, 9607, 9608, 9611, 9612, 9613, 9614, 9616, 9618, 481, 5836, 9619, 5834, 2]);