// modules/guild_settings/safety/native/TransferOwnershipModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: closeModal, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.close;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TransferOwnershipModalScenes;
    var _closure1_slot5 = var6;
    var3 = var3.TransferOwnershipVerificationTypes;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/safety/native/TransferOwnershipModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: TransferOwnershipModal, environment: var1
        var1 = arg0;
        var6 = var1.guild;
        var _closure2_slot0 = var6;
        var5 = var1.toUser;
        var _closure2_slot1 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var6;
        var1[1] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var2 = _closure2_slot1;
            var1 = function(arg0, arg1) { // Original name: getScreens, environment: var0
                var0 = arg0;
                var _closure4_slot0 = var0;
                var0 = arg1;
                var _closure4_slot1 = var0;
                var4 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 5;
                var0 = var8[var5];
                var6 = undefined;
                var0 = var7.bind(var6)(var0);
                var0 = var0.ImpressionGroups;
                var0 = var0.GUILD_TRANSFER_OWNERSHIP_FLOW;
                var4.impression_group = var0;
                var0 = {};
                var1 = _closure1_slot5;
                var12 = var1.TRANFSER_OWNERSHIP;
                var2 = {};
                var10 = 6;
                var9 = var8[var10];
                var9 = var7.bind(var6)(var9);
                var14 = var9.intl;
                var13 = var14.string;
                var9 = var8[var10];
                var9 = var7.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.Z5s7PM;
                var9 = var13.bind(var14)(var9);
                var2.headerTitle = var9;
                var9 = 7;
                var13 = var8[var9];
                var14 = var7.bind(var6)(var13);
                var13 = var14.getHeaderCloseButton;
                var11 = _closure1_slot8;
                var13 = var13.bind(var14)(var11);
                var2.headerLeft = var13;
                var13 = var8[var5];
                var13 = var7.bind(var6)(var13);
                var13 = var13.ImpressionNames;
                var13 = var13.GUILD_TRANSFER_OWNERSHIP;
                var2.impressionName = var13;
                var2.impressionProperties = var4;
                var13 = function() { // Original name: render, environment: var3
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure4_slot0;
                    var0.guild = var5;
                    var4 = _closure4_slot1;
                    var0.toUser = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2.render = var13;
                var0[var12] = var2;
                var2 = var1.CONFIRM_EMAIL_CODE;
                var1 = {};
                var12 = var8[var10];
                var12 = var7.bind(var6)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var10 = var8[var10];
                var10 = var7.bind(var6)(var10);
                var10 = var10.t;
                var10 = var10.Z5s7PM;
                var10 = var12.bind(var13)(var10);
                var1.headerTitle = var10;
                var9 = var8[var9];
                var10 = var7.bind(var6)(var9);
                var9 = var10.getHeaderCloseButton;
                var9 = var9.bind(var10)(var11);
                var1.headerLeft = var9;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var5 = var5.ImpressionNames;
                var5 = var5.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE;
                var1.impressionName = var5;
                var1.impressionProperties = var4;
                var3 = function() { // Original name: render, environment: var3
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 9;
                    var0 = var8[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var6 = function() { // Environment: var5
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun79066: for (var _fun79066_ip = 0;;) switch (_fun79066_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun79066_ip = 95;
                                            continue _fun79066
                                        }
                                    case 7:
                                        var4 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var2 = 10;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var6 = var4.bind(var2)(var3);
                                        var5 = var6.transferOwnership;
                                        var3 = _closure4_slot0;
                                        var10 = var3.id;
                                        var2 = _closure4_slot1;
                                        var9 = var2.id;
                                        var1 = _closure1_slot6;
                                        var8 = var1.EMAIL;
                                        var7 = arg0;
                                        var11 = var6;
                                        var1 = var11[var5](var10, var9, var8, var7, var6);
                                        SaveGenerator(address = 83);
                                    case 81:
                                        return var1;
                                    case 83:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun79066_ip = 92;
                                            continue _fun79066
                                        }
                                    case 89:
                                        return var1;
                                    case 92:
                                        return var1;
                                    case 95:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure6_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure6_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var6 = var6.bind(var2)();
                    var0.onFormSubmit = var6;
                    var6 = function() { // Original name: onSuccess, environment: var5
                        var2 = _closure1_slot8;
                        var0 = undefined;
                        var2 = var2.bind(var0)();
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var2 = var3[var2];
                        var4 = var4.bind(var0)(var2);
                        var2 = var4.close;
                        var2 = var2.bind(var4)();
                        var2 = _closure1_slot0;
                        var1 = 11;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.showTransferOwnershipSuccess;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var0.onSuccess = var6;
                    var6 = _closure1_slot3;
                    var5 = function*() { // Environment: var5
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun79070: for (var _fun79070_ip = 0;;) switch (_fun79070_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun79070_ip = 74;
                                        continue _fun79070
                                    }
                                case 7:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 10;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var5 = var3.bind(var2)(var1);
                                    var4 = var5.sendTransferOwnershipPincode;
                                    var1 = _closure4_slot0;
                                    var3 = var1.id;
                                    var1 = true;
                                    var1 = var4.bind(var5)(var3, var1);
                                    SaveGenerator(address = 62);
                                case 60:
                                    return var1;
                                case 62:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun79070_ip = 71;
                                        continue _fun79070
                                    }
                                case 68:
                                    return var2;
                                case 71:
                                    return var1;
                                case 74:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var5 = var6.bind(var2)(var5);
                    var0.onResend = var5;
                    var7 = _closure1_slot0;
                    var4 = 6;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var9 = var5.intl;
                    var6 = var9.string;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var5 = var5.t;
                    var5 = var5.Z5s7PM;
                    var5 = var6.bind(var9)(var5);
                    var0.headerText = var5;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.Z5s7PM;
                    var4 = var5.bind(var6)(var4);
                    var0.confirmButtonText = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1.render = var3;
                var0[var2] = var1;
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var3, var2);
            return var0;
        };
        var5 = var2.bind(var3)(var0, var1);
        var3 = _closure1_slot7;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 12;
        var0 = var8[var0];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var5;
        var4 = _closure1_slot5;
        var4 = var4.TRANFSER_OWNERSHIP;
        var0.initialRouteName = var4;
        var4 = 6;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["13/7kX"];
        var4 = var5.bind(var6)(var4);
        var0.headerBackTitle = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 10015, 33, 10013, 481, 1234, 4667, 10016, 7439, 8115, 3106, 5747, 2]);