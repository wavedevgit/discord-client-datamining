// modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun116935: for (var _fun116935_ip = 0;;) switch (_fun116935_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun116935_ip = 141;
                            continue _fun116935
                        }
                    case 13:
                        var2 = _closure1_slot7;
                        var1 = var2.getState;
                        var1 = var1.bind(var2)();
                        var6 = var1.groupCover;
                        var2 = var1.groupDescription;
                        var3 = null;
                        if (!(var3 != var6)) {
                            _fun116935_ip = 79;
                            continue _fun116935
                        }
                    case 48:
                        var7 = {};
                        var7.description = var2;
                        var1 = arg1;
                        var4 = undefined;
                        var1 = var1.bind(var4)(var5, var7);
                        SaveGenerator(address = 69);
                    case 67:
                        return var1;
                    case 69:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun116935_ip = 138;
                            continue _fun116935
                        }
                    case 75:
                        if (!(var3 == var1)) {
                            _fun116935_ip = 84;
                            continue _fun116935
                        }
                    case 79:
                        var3 = undefined;
                        return var3;
                    case 84:
                        var3 = {};
                        var6 = var6.uri;
                        var3.cover_image = var6;
                        var3.description = var2;
                        var2 = arg2;
                        var2 = var2.bind(var4)(var5, var3);
                        SaveGenerator(address = 113);
                    case 111:
                        return var2;
                    case 113:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun116935_ip = 135;
                            continue _fun116935
                        }
                    case 119:
                        var3 = arg3;
                        var3 = var3.bind(var4)(var1);
                        var3 = var1.id;
                        return var3;
                    case 135:
                        return var2;
                    case 138:
                        return var1;
                    case 141:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var1 = function arg0() {
        _fun116936: for (var _fun116936_ip = 0;;) switch (_fun116936_ip) {
            case 0:
                var3 = arg0;
                var12 = var3.editStateId;
                var4 = null;
                var2 = Object.create(var4);
                var6 = 0;
                var2.editStateId = var6;
                var19 = {};
                var18 = var3;
                var17 = var2;
                var15 = copyDataProperties(var19, var18, var17);
                var _closure2_slot0 = var15;
                var3 = undefined;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var7 = var15.guildId;
                var _closure2_slot1 = var7;
                var2 = _closure1_slot6;
                var1 = var2.useState;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot4;
                var11 = 2;
                var1 = var1.bind(var3)(var2, var11);
                var2 = var1[var6];
                var _closure2_slot2 = var2;
                var5 = 1;
                var1 = var1[var5];
                var _closure2_slot3 = var1;
                var2 = _closure1_slot0;
                var8 = _closure1_slot3;
                var1 = 7;
                var9 = var8[var1];
                var13 = var2.bind(var3)(var9);
                var9 = var13.useCreateSubscriptionGroupListing;
                var9 = var9.bind(var13)();
                var9 = var9.createSubscriptionGroupListing;
                var _closure2_slot4 = var9;
                var1 = var8[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useUpdateSubscriptionsSettings;
                var1 = var1.bind(var2)();
                var2 = var1.updateSubscriptionsSettings;
                var _closure2_slot5 = var2;
                var1 = var1.error;
                var9 = _closure1_slot6;
                var2 = var9.useState;
                var9 = var2.bind(var9)(var12);
                var2 = _closure1_slot4;
                var2 = var2.bind(var3)(var9, var11);
                var6 = var2[var6];
                var _closure2_slot6 = var6;
                var2 = var2[var5];
                var _closure2_slot7 = var2;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var8[var2];
                var5 = var5.bind(var3)(var2);
                var2 = var5.useCreateOrUpdateListingFromEditState;
                var2 = var2.bind(var5)();
                var5 = var2.handleCreateOrUpdateFromEditState;
                var _closure2_slot8 = var5;
                var2 = var2.error;
                if (!(var4 != var1)) {
                    _fun116936_ip = 268;
                    continue _fun116936
                }
            case 265:
                var2 = var1;
            case 268:
                var5 = var4 != var2;
                var1 = undefined;
                if (!var5) {
                    _fun116936_ip = 280;
                    continue _fun116936
                }
            case 277:
                var1 = var2;
            case 280:
                _closure2_slot9 = var1;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot5;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun116939: for (var _fun116939_ip = 0;;) switch (_fun116939_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun116939_ip = 290;
                                        continue _fun116939
                                    }
                                case 12:
                                    var1 = _closure2_slot2;
                                    var9 = null;
                                    var1 = var9 == var1;
                                    var2 = undefined;
                                    var6 = undefined;
                                    if (var1) {
                                        _fun116939_ip = 41;
                                        continue _fun116939
                                    }
                                case 32:
                                    var1 = _closure2_slot2;
                                    var6 = var1.id;
                                case 41:
                                    if (!(var9 == var6)) {
                                        _fun116939_ip = 90;
                                        continue _fun116939
                                    }
                                case 45:
                                    var16 = _closure2_slot1;
                                    var15 = _closure2_slot4;
                                    var14 = _closure2_slot5;
                                    var13 = _closure2_slot3;
                                    var1 = function() {
                                        var0 = undefined;
                                        var3 = _closure1_slot12;
                                        var2 = var3.apply;
                                        var0 = arguments;
                                        var1 = var0;
                                        var0 = this;
                                        var0 = var2.bind(var3)(var0, var1);
                                        return var0;
                                    };
                                    var17 = undefined;
                                    var1 = var17[var1](var16, var15, var14, var13, var12);
                                    SaveGenerator(address = 78);
                                case 76:
                                    return var1;
                                case 78:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    var6 = var1;
                                    if (!var4) {
                                        _fun116939_ip = 90;
                                        continue _fun116939
                                    }
                                case 87:
                                    return var1;
                                case 90:
                                    if (!(var9 != var6)) {
                                        _fun116939_ip = 284;
                                        continue _fun116939
                                    }
                                case 97:
                                    var1 = _closure2_slot9;
                                    if (!(var9 != var1)) {
                                        _fun116939_ip = 212;
                                        continue _fun116939
                                    }
                                case 105:
                                    var4 = _closure1_slot0;
                                    var7 = _closure1_slot3;
                                    var1 = 9;
                                    var1 = var7[var1];
                                    var7 = var4.bind(var2)(var1);
                                    var4 = var7.presentError;
                                    var10 = _closure2_slot9;
                                    var1 = var10.getAnyErrorMessage;
                                    var1 = var1.bind(var10)();
                                    if (!(var9 == var1)) {
                                        _fun116939_ip = 207;
                                        continue _fun116939
                                    }
                                case 152:
                                    var11 = _closure1_slot0;
                                    var12 = _closure1_slot3;
                                    var8 = 10;
                                    var9 = var12[var8];
                                    var9 = var11.bind(var2)(var9);
                                    var10 = var9.intl;
                                    var9 = var10.string;
                                    var8 = var12[var8];
                                    var8 = var11.bind(var2)(var8);
                                    var8 = var8.t;
                                    var8 = var8.ZUEGFn;
                                    var1 = var9.bind(var10)(var8);
                                case 207:
                                    var1 = var4.bind(var7)(var1);
                                case 212:
                                    var4 = _closure2_slot8;
                                    var1 = {};
                                    var7 = _closure2_slot1;
                                    var1.guildId = var7;
                                    var7 = _closure2_slot6;
                                    var1.editStateId = var7;
                                    var1.groupListingId = var6;
                                    var5 = function arg0() {
                                        var2 = _closure2_slot7;
                                        var0 = arg0;
                                        var1 = var0.id;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var1.onBeforeDispatchNewListing = var5;
                                    var1 = var4.bind(var2)(var1);
                                    SaveGenerator(address = 261);
                                case 259:
                                    return var1;
                                case 261:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun116939_ip = 287;
                                        continue _fun116939
                                    }
                                case 267:
                                    if (!var1) {
                                        _fun116939_ip = 284;
                                        continue _fun116939
                                    }
                                case 270:
                                    var4 = _closure2_slot0;
                                    var3 = var4.onClose;
                                    var3 = var3.bind(var4)();
                                case 284:
                                    return var2;
                                case 287:
                                    return var1;
                                case 290:
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
                var14 = var2.bind(var3)();
                var8 = _closure1_slot6;
                var5 = var8.useEffect;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun116943: for (var _fun116943_ip = 0;;) switch (_fun116943_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            var4 = null;
                            if (!(var4 != var1)) {
                                _fun116943_ip = 122;
                                continue _fun116943
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var1 = 9;
                            var1 = var5[var1];
                            var7 = undefined;
                            var2 = var2.bind(var7)(var1);
                            var1 = var2.presentError;
                            var5 = _closure2_slot9;
                            var0 = var5.getAnyErrorMessage;
                            var0 = var0.bind(var5)();
                            if (!(var4 == var0)) {
                                _fun116943_ip = 117;
                                continue _fun116943
                            }
                        case 62:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var3 = 10;
                            var4 = var8[var3];
                            var4 = var6.bind(var7)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var3 = var8[var3];
                            var3 = var6.bind(var7)(var3);
                            var3 = var3.t;
                            var3 = var3.R0RpRX;
                            var0 = var4.bind(var5)(var3);
                        case 117:
                            var0 = var1.bind(var2)(var0);
                        case 122:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var5.bind(var8)(var1, var2);
                var8 = _closure1_slot6;
                var5 = var8.useMemo;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot8;
                    var1 = var0.GATING;
                    var0 = new Array(7);
                    var0[0] = var1;
                    var1 = _closure1_slot8;
                    var1 = var1.GROUP;
                    var0[1] = var1;
                    var1 = _closure1_slot8;
                    var1 = var1.DETAILS;
                    var0[2] = var1;
                    var1 = _closure1_slot8;
                    var1 = var1.CHANNEL_BENEFITS;
                    var0[3] = var1;
                    var1 = _closure1_slot8;
                    var1 = var1.INTANGIBLE_BENEFITS;
                    var0[4] = var1;
                    var1 = _closure1_slot8;
                    var1 = var1.DESIGN;
                    var0[5] = var1;
                    var1 = {};
                    var2 = _closure1_slot8;
                    var2 = var2.CONFIRMATION;
                    var1.scene = var2;
                    var2 = {};
                    var3 = true;
                    var2.isForGroupSetupModal = var3;
                    var1.extraProps = var2;
                    var0[6] = var1;
                    return var0;
                };
                var1 = new Array(0);
                var13 = var5.bind(var8)(var2, var1);
                _closure2_slot10 = var13;
                var8 = _closure1_slot6;
                var5 = var8.useMemo;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure1_slot8;
                    var7 = var2.GATING;
                    var2 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var3 = 11;
                    var8 = var6[var3];
                    var4 = undefined;
                    var8 = var5.bind(var4)(var8);
                    var8 = var8.ImpressionNames;
                    var8 = var8.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING;
                    var2.impressionName = var8;
                    var0[var7] = var2;
                    var1 = _closure1_slot8;
                    var2 = var1.DETAILS;
                    var1 = {};
                    var3 = var6[var3];
                    var3 = var5.bind(var4)(var3);
                    var3 = var3.ImpressionNames;
                    var3 = var3.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP;
                    var1.impressionName = var3;
                    var0[var2] = var1;
                    return var0;
                };
                var1 = new Array(0);
                var11 = var5.bind(var8)(var2, var1);
                var5 = _closure1_slot6;
                var2 = var5.useCallback;
                var1 = new Array(1);
                var1[0] = var13;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = _closure2_slot10;
                    var1 = var2.findIndex;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var0 === var1;
                        return var0;
                    };
                    var6 = var1.bind(var2)(var0);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot10;
                    var2 = var1.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED;
                    var1 = {};
                    var5 = 1;
                    var5 = var6 + var5;
                    var1.setup_modal_step = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var12 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot11;
                var5 = _closure1_slot0;
                var16 = _closure1_slot3;
                var0 = 13;
                var0 = var16[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.EditStateContextProvider;
                var0 = {};
                var0.guildId = var7;
                var0.editStateId = var6;
                var0.groupListingId = var4;
                var6 = _closure1_slot11;
                var4 = 14;
                var4 = var16[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.RoleSubscriptionSettingsDisabledContextProvider;
                var4 = {};
                var4.guildId = var7;
                var9 = _closure1_slot11;
                var8 = _closure1_slot1;
                var7 = 15;
                var7 = var16[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var19 = var7;
                var18 = var15;
                var15 = copyDataProperties(var19, var18);
                var15 = _closure1_slot9;
                var10 = 'modalKey';
                var7[var10] = var15;
                var10 = 'onDone';
                var7[var10] = var14;
                var10 = 'steps';
                var7[var10] = var13;
                var10 = 'onClose';
                var7[var10] = var12;
                var10 = 'stepScreenPropsMap';
                var7[var10] = var11;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useRoleTierEditStore;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.GuildRoleSubscriptionsTierScenes;
    var _closure1_slot8 = var7;
    var3 = var3.GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = false;
    var3.closable = var6;
    var1.modalConfig = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 14880, 5635, 660, 33, 10805, 10822, 3147, 1234, 481, 4302, 14891, 14868, 14892, 2]);