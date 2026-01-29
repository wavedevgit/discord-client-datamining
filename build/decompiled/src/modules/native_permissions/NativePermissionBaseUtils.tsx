// modules/native_permissions/NativePermissionBaseUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NativePermissionTypes;
    var _closure1_slot7 = var6;
    var6 = var3.NativePermissionStates;
    var _closure1_slot8 = var6;
    var3 = var3.NativePermissionStatus;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var1 = function() { // Environment: var1
        var4 = function() { // Original name: NativePermissionBaseUtils, environment: var0
            var2 = this;
            var4 = _closure1_slot4;
            var3 = _closure2_slot1;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var1 = _closure1_slot6;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.storage = var1;
            return var0;
        };
        var _closure2_slot1 = var4;
        var3 = _closure1_slot5;
        var5 = {};
        var2 = 'requestAuthorization';
        var5.key = var2;
        var6 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2) { // Environment: var0
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun37004: for (var _fun37004_ip = 0;;) switch (_fun37004_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        var1 = arg1;
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun37004_ip = 277;
                            continue _fun37004
                        }
                    case 19:
                        var3 = 'function';
                        var2 = typeof var1;
                        if (!(var3 === var2)) {
                            _fun37004_ip = 220;
                            continue _fun37004
                        }
                    case 33:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 6;
                        var2 = var7[var2];
                        var8 = undefined;
                        var9 = var6.bind(var8)(var2);
                        var7 = var9.track;
                        var2 = _closure1_slot10;
                        var6 = var2.PERMISSIONS_REQUESTED;
                        var2 = {};
                        var2.type = var5;
                        var2 = var7.bind(var9)(var6, var2);
                        var1 = var1.bind(var8)();
                        SaveGenerator(address = 93);
                    case 91:
                        return var1;
                    case 93:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun37004_ip = 217;
                            continue _fun37004
                        }
                    case 99:
                        var2 = _closure1_slot9;
                        var2 = var2.AUTHORIZED;
                        var2 = var1 === var2;
                        if (var2) {
                            _fun37004_ip = 130;
                            continue _fun37004
                        }
                    case 116:
                        var6 = _closure1_slot9;
                        var6 = var6.LIMITED;
                        var2 = var1 === var6;
                    case 130:
                        var6 = _closure1_slot8;
                        if (var2) {
                            _fun37004_ip = 145;
                            continue _fun37004
                        }
                    case 137:
                        var7 = var6.DENIED;
                        _fun37004_ip = 151;
                        continue _fun37004;
                    case 145:
                        var7 = var6.ACCEPTED;
                    case 151:
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 7;
                        var3 = var9[var3];
                        var6 = var6.bind(var8)(var3);
                        var3 = var6.setPermission;
                        var3 = var3.bind(var6)(var5, var7);
                        var3 = !var2;
                        if (var2) {
                            _fun37004_ip = 200;
                            continue _fun37004
                        }
                    case 191:
                        var6 = arg2;
                        var3 = var6.showAuthorizationError;
                    case 200:
                        if (!var3) {
                            _fun37004_ip = 214;
                            continue _fun37004
                        }
                    case 203:
                        var3 = var4.showAlert;
                        var3 = var3.bind(var4)(var5);
                    case 214:
                        return var2;
                    case 217:
                        return var1;
                    case 220:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var2 = 'requestAuthorization: Was provided with not a function for ';
                        var1 = '.';
                        var12 = var4.bind(var2)(var5, var1);
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var13 = var2;
                        var1 = new var13[var3](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 277:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var6.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var1 = function() { // Original name: requestAuthorization, environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var5.value = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var6 = 'requestPermission';
        var5.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var0
            var3 = this;
            var2 = _closure2_slot1;
            var1 = var2.defaultNativePermissionsRequestOptions;
            var0 = arg1;
            var2 = var1.bind(var2)(var0);
            var1 = var3.requestPermissionCore;
            var0 = arg0;
            var0 = var1.bind(var3)(var0, var2);
            return var0;
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'hasPermission';
        var5.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var0
            var3 = this;
            var2 = _closure2_slot1;
            var1 = var2.defaultNativePermissionsRequestOptions;
            var0 = arg1;
            var2 = var1.bind(var2)(var0);
            var1 = var3.hasPermissionCore;
            var0 = arg0;
            var0 = var1.bind(var3)(var0, var2);
            return var0;
        };
        var5.value = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'showAlert';
        var5.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var0
            _fun37008: for (var _fun37008_ip = 0;;) switch (_fun37008_ip) {
                case 0:
                    var2 = arg0;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var2;
                    var1 = {};
                    var7 = _closure1_slot7;
                    var13 = var7.CAMERA;
                    var15 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var8 = 8;
                    var6 = var9[var8];
                    var0 = undefined;
                    var6 = var15.bind(var0)(var6);
                    var11 = var6.intl;
                    var10 = var11.string;
                    var6 = var9[var8];
                    var6 = var15.bind(var0)(var6);
                    var6 = var6.t;
                    var6 = var6["68G7fD"];
                    var16 = var10.bind(var11)(var6);
                    var6 = var9[var8];
                    var6 = var15.bind(var0)(var6);
                    var11 = var6.intl;
                    var10 = var11.string;
                    var6 = var9[var8];
                    var6 = var15.bind(var0)(var6);
                    var6 = var6.t;
                    var6 = var6["5Jvu1R"];
                    var14 = var10.bind(var11)(var6);
                    var6 = global;
                    var10 = var6.HermesInternal;
                    var10 = var10.concat;
                    var12 = '';
                    var11 = '. ';
                    var10 = var10.bind(var12)(var16, var11, var14);
                    var1[var13] = var10;
                    var13 = var7.AUDIO;
                    var10 = var9[var8];
                    var10 = var15.bind(var0)(var10);
                    var16 = var10.intl;
                    var14 = var16.string;
                    var10 = var9[var8];
                    var10 = var15.bind(var0)(var10);
                    var10 = var10.t;
                    var10 = var10.xisTfe;
                    var16 = var14.bind(var16)(var10);
                    var10 = var9[var8];
                    var10 = var15.bind(var0)(var10);
                    var17 = var10.intl;
                    var14 = var17.string;
                    var10 = var9[var8];
                    var10 = var15.bind(var0)(var10);
                    var10 = var10.t;
                    var10 = var10["5Jvu1R"];
                    var14 = var14.bind(var17)(var10);
                    var10 = var6.HermesInternal;
                    var10 = var10.concat;
                    var10 = var10.bind(var12)(var16, var11, var14);
                    var1[var13] = var10;
                    var13 = var7.PHOTOS;
                    var10 = var9[var8];
                    var10 = var15.bind(var0)(var10);
                    var16 = var10.intl;
                    var14 = var16.string;
                    var10 = var9[var8];
                    var10 = var15.bind(var0)(var10);
                    var10 = var10.t;
                    var10 = var10.jQHU4M;
                    var16 = var14.bind(var16)(var10);
                    var10 = var9[var8];
                    var10 = var15.bind(var0)(var10);
                    var17 = var10.intl;
                    var14 = var17.string;
                    var10 = var9[var8];
                    var10 = var15.bind(var0)(var10);
                    var10 = var10.t;
                    var10 = var10["5Jvu1R"];
                    var14 = var14.bind(var17)(var10);
                    var10 = var6.HermesInternal;
                    var10 = var10.concat;
                    var10 = var10.bind(var12)(var16, var11, var14);
                    var1[var13] = var10;
                    var13 = var7.INPUT_MONITORING;
                    var10 = var9[var8];
                    var10 = var15.bind(var0)(var10);
                    var16 = var10.intl;
                    var14 = var16.string;
                    var10 = var9[var8];
                    var10 = var15.bind(var0)(var10);
                    var10 = var10.t;
                    var10 = var10.UIBqsS;
                    var16 = var14.bind(var16)(var10);
                    var10 = var9[var8];
                    var10 = var15.bind(var0)(var10);
                    var17 = var10.intl;
                    var14 = var17.string;
                    var10 = var9[var8];
                    var10 = var15.bind(var0)(var10);
                    var10 = var10.t;
                    var10 = var10["5Jvu1R"];
                    var14 = var14.bind(var17)(var10);
                    var10 = var6.HermesInternal;
                    var10 = var10.concat;
                    var10 = var10.bind(var12)(var16, var11, var14);
                    var1[var13] = var10;
                    var7 = var7.CONTACTS;
                    var10 = var9[var8];
                    var10 = var15.bind(var0)(var10);
                    var14 = var10.intl;
                    var13 = var14.string;
                    var10 = var9[var8];
                    var10 = var15.bind(var0)(var10);
                    var10 = var10.t;
                    var10 = var10.kTtf7o;
                    var10 = var13.bind(var14)(var10);
                    var13 = var9[var8];
                    var13 = var15.bind(var0)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var9 = var9[var8];
                    var9 = var15.bind(var0)(var9);
                    var9 = var9.t;
                    var9 = var9["5Jvu1R"];
                    var9 = var13.bind(var14)(var9);
                    var6 = var6.HermesInternal;
                    var6 = var6.concat;
                    var6 = var6.bind(var12)(var10, var11, var9);
                    var1[var7] = var6;
                    var6 = var1[var2];
                    var1 = null;
                    if (!(var1 != var6)) {
                        _fun37008_ip = 845;
                        continue _fun37008
                    }
                case 658:
                    var2 = var3.openAlertModal;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var9 = var4[var8];
                    var9 = var7.bind(var0)(var9);
                    var11 = var9.intl;
                    var10 = var11.string;
                    var9 = var4[var8];
                    var9 = var7.bind(var0)(var9);
                    var9 = var9.t;
                    var9 = var9.u1Gxpu;
                    var9 = var10.bind(var11)(var9);
                    var1.title = var9;
                    var1.body = var6;
                    var5 = function() { // Original name: onConfirm, environment: var5
                        var2 = _closure3_slot0;
                        var1 = var2.openSettings;
                        var0 = _closure3_slot1;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.onConfirm = var5;
                    var5 = var4[var8];
                    var5 = var7.bind(var0)(var5);
                    var9 = var5.intl;
                    var6 = var9.string;
                    var5 = var4[var8];
                    var5 = var7.bind(var0)(var5);
                    var5 = var5.t;
                    var5 = var5["ETE/oC"];
                    var5 = var6.bind(var9)(var5);
                    var1.cancelText = var5;
                    var5 = var4[var8];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var4[var8];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4["XgZk+u"];
                    var4 = var5.bind(var6)(var4);
                    var1.confirmText = var4;
                    var1 = var2.bind(var3)(var1);
                case 845:
                    return var0;
            }
        };
        var5.value = var6;
        var1[3] = var5;
        var5 = {};
        var6 = 'defaultNativePermissionsRequestOptions';
        var5.key = var6;
        var0 = function(arg0) { // Original name: value, environment: var0
            _fun37010: for (var _fun37010_ip = 0;;) switch (_fun37010_ip) {
                case 0:
                    var2 = arg0;
                    var3 = {};
                    var0 = true;
                    var3.showAuthorizationError = var0;
                    var1 = null;
                    var0 = var3;
                    if (!(var1 != var2)) {
                        _fun37010_ip = 46;
                        continue _fun37010
                    }
                case 21:
                    var1 = {};
                    var5 = var1;
                    var4 = var3;
                    var3 = copyDataProperties(var5, var4);
                    var5 = var1;
                    var4 = var2;
                    var2 = copyDataProperties(var5, var4);
                    var0 = var1;
                case 46:
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var3.bind(var2)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/native_permissions/NativePermissionBaseUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.NativePermissionBaseUtils = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 3974, 3967, 660, 795, 3975, 1234, 2]);