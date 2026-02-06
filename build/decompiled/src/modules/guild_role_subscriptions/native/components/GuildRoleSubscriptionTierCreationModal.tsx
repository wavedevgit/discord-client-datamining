// modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildRoleSubscriptionsTierScenes;
    var _closure1_slot8 = var6;
    var3 = var3.GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var11 = var1.guildId;
        var _closure2_slot0 = var11;
        var4 = var1.groupListingId;
        var _closure2_slot1 = var4;
        var2 = var1.editStateId;
        var3 = var1.onClose;
        var _closure2_slot2 = var3;
        var1 = var1.onAfterTierCreation;
        var _closure2_slot3 = var1;
        var5 = _closure1_slot6;
        var1 = var5.useState;
        var6 = var1.bind(var5)(var2);
        var2 = _closure1_slot5;
        var3 = undefined;
        var1 = 2;
        var2 = var2.bind(var3)(var6, var1);
        var1 = 0;
        var6 = var2[var1];
        var _closure2_slot4 = var6;
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot5 = var1;
        var2 = _closure1_slot2;
        var12 = _closure1_slot3;
        var1 = 6;
        var1 = var12[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.useCreateOrUpdateListingFromEditState;
        var1 = var1.bind(var2)();
        var2 = var1.handleCreateOrUpdateFromEditState;
        var _closure2_slot6 = var2;
        var1 = var1.error;
        var _closure2_slot7 = var1;
        var2 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*() { // Environment: var0
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun116899: for (var _fun116899_ip = 0;;) switch (_fun116899_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun116899_ip = 115;
                                continue _fun116899
                            }
                        case 7:
                            var4 = _closure2_slot6;
                            var1 = {};
                            var2 = _closure2_slot0;
                            var1.guildId = var2;
                            var2 = _closure2_slot4;
                            var1.editStateId = var2;
                            var2 = _closure2_slot1;
                            var1.groupListingId = var2;
                            var2 = function arg0() {
                                var2 = _closure2_slot5;
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.onBeforeDispatchNewListing = var2;
                            var2 = undefined;
                            var1 = var4.bind(var2)(var1);
                            SaveGenerator(address = 67);
                        case 65:
                            return var1;
                        case 67:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                            if (var4) {
                                _fun116899_ip = 112;
                                continue _fun116899
                            }
                        case 73:
                            if (!var1) {
                                _fun116899_ip = 109;
                                continue _fun116899
                            }
                        case 76:
                            var5 = _closure1_slot7;
                            var4 = var5.resetImperatively;
                            var4 = var4.bind(var5)();
                            var4 = _closure2_slot2;
                            var4 = var4.bind(var2)();
                            var3 = _closure2_slot3;
                            var3 = var3.bind(var2)();
                        case 109:
                            return var2;
                        case 112:
                            return var1;
                        case 115:
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
        var9 = var2.bind(var3)();
        var7 = var5.useLayoutEffect;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            _fun116902: for (var _fun116902_ip = 0;;) switch (_fun116902_ip) {
                case 0:
                    var1 = _closure2_slot7;
                    var4 = null;
                    if (!(var4 != var1)) {
                        _fun116902_ip = 122;
                        continue _fun116902
                    }
                case 13:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 7;
                    var1 = var5[var1];
                    var7 = undefined;
                    var2 = var2.bind(var7)(var1);
                    var1 = var2.presentError;
                    var5 = _closure2_slot7;
                    var0 = var5.getAnyErrorMessage;
                    var0 = var0.bind(var5)();
                    if (!(var4 == var0)) {
                        _fun116902_ip = 117;
                        continue _fun116902
                    }
                case 62:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var3 = 8;
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
        var1 = var7.bind(var5)(var1, var2);
        var2 = var5.useMemo;
        var1 = function() { // Environment: var0
            var1 = _closure1_slot8;
            var2 = var1.DETAILS;
            var0 = new Array(5);
            var0[0] = var2;
            var2 = var1.CHANNEL_BENEFITS;
            var0[1] = var2;
            var2 = var1.INTANGIBLE_BENEFITS;
            var0[2] = var2;
            var2 = var1.DESIGN;
            var0[3] = var2;
            var1 = var1.CONFIRMATION;
            var0[4] = var1;
            return var0;
        };
        var0 = new Array(0);
        var8 = var2.bind(var5)(var1, var0);
        var2 = _closure1_slot10;
        var5 = _closure1_slot0;
        var0 = 9;
        var0 = var12[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.EditStateContextProvider;
        var0 = {};
        var0.guildId = var11;
        var0.editStateId = var6;
        var0.groupListingId = var4;
        var4 = 10;
        var4 = var12[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.RoleSubscriptionSettingsDisabledContextProvider;
        var4 = {};
        var4.guildId = var11;
        var7 = _closure1_slot1;
        var6 = 11;
        var6 = var12[var6];
        var7 = var7.bind(var3)(var6);
        var6 = {};
        var6.guildId = var11;
        var10 = _closure1_slot9;
        var6.modalKey = var10;
        var6.onDone = var9;
        var6.steps = var8;
        var6 = var2.bind(var3)(var7, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 14931, 5639, 33, 10845, 3149, 1234, 14942, 14919, 14943, 2]);