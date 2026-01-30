// modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: ChatInputGuardMessageRequest, environment: var1
        _fun91191: for (var _fun91191_ip = 0;;) switch (_fun91191_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.channel;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 4;
                var1 = var4[var1];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var1 = var5.useNavigation;
                var1 = var1.bind(var5)();
                var _closure2_slot1 = var1;
                var1 = 5;
                var1 = var4[var1];
                var7 = var2.bind(var3)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getUser;
                    var3 = _closure2_slot0;
                    var0 = var3.getRecipientId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5, var1);
                var1 = 6;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useMessageRequestActions;
                var1 = {};
                var1.user = var5;
                var5 = function() { // Original name: onError, environment: var0
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 7;
                    var1 = var6[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var7 = 'MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE';
                    var1.key = var7;
                    var9 = _closure1_slot0;
                    var4 = 8;
                    var7 = var6[var4];
                    var7 = var9.bind(var0)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var4 = var6[var4];
                    var4 = var9.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4["EDYbS+"];
                    var4 = var7.bind(var8)(var4);
                    var1.content = var4;
                    var4 = 9;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var1.icon = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1.onError = var5;
                var5 = function() { // Original name: onRejectSuccess, environment: var0
                    var1 = _closure2_slot1;
                    var0 = var1.pop;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var1.onRejectSuccess = var5;
                var1 = var2.bind(var4)(var1);
                var2 = var1.acceptMessageRequest;
                var _closure2_slot2 = var2;
                var2 = var1.rejectMessageRequest;
                var _closure2_slot3 = var2;
                var9 = var1.isAcceptLoading;
                var4 = var1.isRejectLoading;
                var11 = var1.isUserProfileLoading;
                var10 = var1.isOptimisticAccepted;
                var5 = var1.isOptimisticRejected;
                var6 = var9;
                if (var9) {
                    _fun91191_ip = 207;
                    continue _fun91191
                }
            case 204:
                var6 = var4;
            case 207:
                if (var6) {
                    _fun91191_ip = 213;
                    continue _fun91191
                }
            case 210:
                var6 = var11;
            case 213:
                if (var6) {
                    _fun91191_ip = 219;
                    continue _fun91191
                }
            case 216:
                var6 = var10;
            case 219:
                if (var6) {
                    _fun91191_ip = 225;
                    continue _fun91191
                }
            case 222:
                var6 = var5;
            case 225:
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun91197: for (var _fun91197_ip = 0;;) switch (_fun91197_ip) {
                                case 0:
                                    StartGenerator();
                                    var2 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun91197_ip = 112;
                                        continue _fun91197
                                    }
                                case 10:
                                    var1 = var2.stopPropagation;
                                    var1 = var1.bind(var2)();
                                    var4 = _closure2_slot2;
                                    var1 = _closure2_slot0;
                                    var1 = var1.id;
                                    var2 = undefined;
                                    var1 = var4.bind(var2)(var1);
                                    SaveGenerator(address = 47);
                                case 45:
                                    return var1;
                                case 47:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun91197_ip = 109;
                                        continue _fun91197
                                    }
                                case 53:
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var4 = 10;
                                    var4 = var6[var4];
                                    var6 = var5.bind(var2)(var4);
                                    var5 = var6.transitionToChannel;
                                    var3 = _closure2_slot0;
                                    var4 = var3.id;
                                    var3 = {};
                                    var7 = true;
                                    var3.navigationReplace = var7;
                                    var3 = var5.bind(var6)(var4, var3);
                                    return var2;
                                case 109:
                                    return var1;
                                case 112:
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
                var13 = var1.bind(var3)();
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun91201: for (var _fun91201_ip = 0;;) switch (_fun91201_ip) {
                                case 0:
                                    StartGenerator();
                                    var2 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun91201_ip = 59;
                                        continue _fun91201
                                    }
                                case 10:
                                    var1 = var2.stopPropagation;
                                    var1 = var1.bind(var2)();
                                    var3 = _closure2_slot3;
                                    var1 = _closure2_slot0;
                                    var1 = var1.id;
                                    var2 = undefined;
                                    var1 = var3.bind(var2)(var1);
                                    SaveGenerator(address = 47);
                                case 45:
                                    return var1;
                                case 47:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun91201_ip = 56;
                                        continue _fun91201
                                    }
                                case 53:
                                    return var2;
                                case 56:
                                    return var1;
                                case 59:
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
                var7 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var14 = _closure1_slot2;
                var0 = 11;
                var0 = var14[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var12 = 'button-action';
                var0.type = var12;
                var17 = _closure1_slot0;
                var12 = 8;
                var15 = var14[var12];
                var15 = var17.bind(var3)(var15);
                var18 = var15.intl;
                var16 = var18.string;
                var15 = var14[var12];
                var15 = var17.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15["e/eQVB"];
                var15 = var16.bind(var18)(var15);
                var0.message = var15;
                var15 = var14[var12];
                var15 = var17.bind(var3)(var15);
                var18 = var15.intl;
                var16 = var18.string;
                var15 = var14[var12];
                var15 = var17.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.HcVzGI;
                var15 = var16.bind(var18)(var15);
                var0.subtext = var15;
                var15 = var14[var12];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var12];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.Kz8Pwr;
                var14 = var15.bind(var16)(var14);
                var0.buttonPrimaryText = var14;
                var0.buttonPrimaryOnPress = var13;
                var0.buttonPrimaryDisabled = var6;
                if (var9) {
                    _fun91191_ip = 458;
                    continue _fun91191
                }
            case 455:
                var9 = var11;
            case 458:
                if (var9) {
                    _fun91191_ip = 464;
                    continue _fun91191
                }
            case 461:
                var9 = var10;
            case 464:
                var0.buttonPrimaryLoading = var9;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = var8[var12];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var12];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.B2nygW;
                var8 = var9.bind(var10)(var8);
                var0.buttonSecondaryText = var8;
                var0.buttonSecondaryOnPress = var7;
                var0.buttonSecondaryDisabled = var6;
                if (var4) {
                    _fun91191_ip = 544;
                    continue _fun91191
                }
            case 541:
                var4 = var5;
            case 544:
                var0.buttonSecondaryLoading = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/guard/ChatInputGuardMessageRequest.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1613, 33, 1469, 566, 11784, 3107, 1234, 7420, 3903, 11790, 2]);