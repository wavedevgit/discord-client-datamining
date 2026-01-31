// modules/guild_sidebar/native/GuildTooltipActionSheets.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function(arg0) { // Original name: GuildTooltipActionSheets, environment: var3
        _fun102722: for (var _fun102722_ip = 0;;) switch (_fun102722_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var0 = var0.inRedesign;
                var1 = var1.id;
                var _closure2_slot0 = var1;
                var6 = new Array(0);
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 10;
                var2 = var3[var2];
                var3 = undefined;
                var7 = var7.bind(var3)(var2);
                var2 = var7.useCanSeeNUFChannelsForGuild;
                var2 = var2.bind(var7)(var1);
                if (!var0) {
                    _fun102722_ip = 73;
                    continue _fun102722
                }
            case 70:
                var0 = var2;
            case 73:
                if (!var0) {
                    _fun102722_ip = 118;
                    continue _fun102722
                }
            case 76:
                var2 = var6.push;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 11;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.NUX_GUILD_CHANNEL_EXPLAINER;
                var0 = var2.bind(var6)(var0);
            case 118:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 12;
                var0 = var7[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useCanSeeCreatorMonetizationOnboardingV2Upsell;
                var0 = var0.bind(var2)(var1);
                if (!var0) {
                    _fun102722_ip = 194;
                    continue _fun102722
                }
            case 152:
                var2 = var6.push;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 11;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL;
                var0 = var2.bind(var6)(var0);
            case 194:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 13;
                var0 = var7[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1);
                if (!var0) {
                    _fun102722_ip = 264;
                    continue _fun102722
                }
            case 222:
                var2 = var6.push;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 11;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL;
                var0 = var2.bind(var6)(var0);
            case 264:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 14;
                var0 = var7[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useCanUseRoleSubscriptionIAP;
                var0 = var0.bind(var2)(var1);
                if (!var0) {
                    _fun102722_ip = 340;
                    continue _fun102722
                }
            case 298:
                var2 = var6.push;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 11;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL;
                var0 = var2.bind(var6)(var0);
            case 340:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 15;
                var0 = var7[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1);
                if (!var0) {
                    _fun102722_ip = 410;
                    continue _fun102722
                }
            case 368:
                var1 = var6.push;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 11;
                var0 = var7[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL;
                var0 = var1.bind(var6)(var0);
            case 410:
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 16;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.contentTypes = var6;
                var5 = _closure1_slot5;
                var5 = var5.GUILD_HEADER_TOOLTIPS;
                var0.groupName = var5;
                var4 = function(arg0) { // Original name: children, environment: var4
                    _fun102723: for (var _fun102723_ip = 0;;) switch (_fun102723_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.visibleContent;
                            var5 = var0.markAsDismissed;
                            var _closure3_slot0 = var5;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var7 = 11;
                            var0 = var0[var7];
                            var3 = undefined;
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.DismissibleContent;
                            var0 = var0.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL;
                            if (!(var0 !== var1)) {
                                _fun102723_ip = 499;
                                continue _fun102723
                            }
                        case 65:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var7];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.DismissibleContent;
                            var0 = var0.GUILD_ROLE_SUBSCRIPTION_IAP_UPSELL;
                            if (!(var0 !== var1)) {
                                _fun102723_ip = 425;
                                continue _fun102723
                            }
                        case 101:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var7];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.DismissibleContent;
                            var0 = var0.CREATOR_MONETIZATION_ONBOARDING_V2_UPSELL;
                            if (!(var0 !== var1)) {
                                _fun102723_ip = 351;
                                continue _fun102723
                            }
                        case 137:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var7];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.DismissibleContent;
                            var0 = var0.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL;
                            if (!(var0 !== var1)) {
                                _fun102723_ip = 277;
                                continue _fun102723
                            }
                        case 170:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var7];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.DismissibleContent;
                            var0 = var0.NUX_GUILD_CHANNEL_EXPLAINER;
                            if (!(var0 !== var1)) {
                                _fun102723_ip = 207;
                                continue _fun102723
                            }
                        case 203:
                            var0 = null;
                            return var0;
                        case 207:
                            var2 = _closure1_slot6;
                            var1 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 17;
                            var0 = var7[var0];
                            var0 = var1.bind(var3)(var0);
                            var1 = var0.DismissibleActionSheet;
                            var0 = {};
                            var6 = function(arg0) { // Original name: markAsDismissed, environment: var6
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var0.markAsDismissed = var6;
                            var6 = _closure1_slot7;
                            var0.actionSheetKey = var6;
                            var6 = _closure1_slot8;
                            var0.importer = var6;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 277:
                            var2 = _closure1_slot6;
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 17;
                            var0 = var6[var0];
                            var0 = var1.bind(var3)(var0);
                            var1 = var0.DismissibleActionSheet;
                            var0 = {};
                            var6 = _closure1_slot7;
                            var0.actionSheetKey = var6;
                            var6 = _closure1_slot12;
                            var0.importer = var6;
                            var0.markAsDismissed = var5;
                            var6 = _closure2_slot0;
                            var0.guildId = var6;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 351:
                            var2 = _closure1_slot6;
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 17;
                            var0 = var6[var0];
                            var0 = var1.bind(var3)(var0);
                            var1 = var0.DismissibleActionSheet;
                            var0 = {};
                            var0.markAsDismissed = var5;
                            var6 = _closure1_slot11;
                            var0.importer = var6;
                            var6 = _closure1_slot7;
                            var0.actionSheetKey = var6;
                            var6 = _closure2_slot0;
                            var0.guildId = var6;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 425:
                            var2 = _closure1_slot6;
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 17;
                            var0 = var6[var0];
                            var0 = var1.bind(var3)(var0);
                            var1 = var0.DismissibleActionSheet;
                            var0 = {};
                            var0.markAsDismissed = var5;
                            var6 = _closure1_slot10;
                            var0.importer = var6;
                            var6 = _closure1_slot7;
                            var0.actionSheetKey = var6;
                            var6 = _closure2_slot0;
                            var0.guildId = var6;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 499:
                            var2 = _closure1_slot6;
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 17;
                            var0 = var6[var0];
                            var0 = var1.bind(var3)(var0);
                            var1 = var0.DismissibleActionSheet;
                            var0 = {};
                            var0.markAsDismissed = var5;
                            var5 = _closure1_slot9;
                            var0.importer = var5;
                            var4 = _closure1_slot7;
                            var0.actionSheetKey = var4;
                            var4 = _closure2_slot0;
                            var0.guildId = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.DismissibleContentGroupName;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 'GuildTooltipActionSheet';
    var _closure1_slot7 = var4;
    var4 = function() { // Original name: NUFChannelsActionSheetImporter, environment: var3
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 5;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 4;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var4;
    var4 = function() { // Original name: GuildRoleSubscriptionsUpsellActionSheetImporter, environment: var3
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 5;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 6;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var4;
    var4 = function() { // Original name: GuildRoleSubscriptionsIAPUpsellActionSheetImporter, environment: var3
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 5;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 7;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var4;
    var4 = function() { // Original name: CreatorMonetizationOnboardingV2UpsellActionSheetImporter, environment: var3
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 5;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 8;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var4;
    var4 = function() { // Original name: TierTemplatesUpsellActionSheetImporter, environment: var3
        var2 = _closure1_slot0;
        var0 = _closure1_slot2;
        var1 = 5;
        var1 = var0[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = 9;
        var1 = var0[var1];
        var0 = var0.paths;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function GuildTooltipActionSheetsTsx1(){const{runOnJS,setShouldRender}=this.__closure;return runOnJS(setShouldRender)(true);}';
    var4.code = var7;
    var _closure1_slot13 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/native/GuildTooltipActionSheets.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: GuildTooltipActionSheetsGuard, environment: var3
        _fun102730: for (var _fun102730_ip = 0;;) switch (_fun102730_ip) {
            case 0:
                var6 = _closure1_slot4;
                var3 = var6.useState;
                var2 = false;
                var5 = var3.bind(var6)(var2);
                var3 = _closure1_slot3;
                var4 = undefined;
                var2 = 2;
                var5 = var3.bind(var4)(var5, var2);
                var2 = 0;
                var2 = var5[var2];
                var3 = 1;
                var3 = var5[var3];
                var _closure2_slot0 = var3;
                var5 = var6.useEffect;
                var3 = function() { // Environment: var0
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 18;
                    var1 = var8[var6];
                    var0 = undefined;
                    var3 = var7.bind(var0)(var1);
                    var2 = var3.runOnUI;
                    var1 = function() { // Original name: s, environment: var1
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 18;
                        var0 = var2[var0];
                        var2 = undefined;
                        var3 = var1.bind(var2)(var0);
                        var1 = var3.runOnJS;
                        var0 = _closure2_slot0;
                        var1 = var1.bind(var3)(var0);
                        var0 = true;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var5 = {};
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.runOnJS;
                    var5.runOnJS = var6;
                    var6 = _closure2_slot0;
                    var5.setShouldRender = var6;
                    var1.__closure = var5;
                    var5 = 6076095421855.0;
                    var1.__workletHash = var5;
                    var4 = _closure1_slot13;
                    var1.__initData = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0 = new Array(0);
                var0 = var5.bind(var6)(var3, var0);
                var0 = null;
                if (!var2) {
                    _fun102730_ip = 106;
                    continue _fun102730
                }
            case 80:
                var3 = _closure1_slot6;
                var2 = _closure1_slot14;
                var1 = {};
                var7 = arg0;
                var8 = var1;
                var5 = copyDataProperties(var8, var7);
                var0 = var3.bind(var4)(var2, var1);
            case 106:
                return var0;
        }
    };
    var2.default = var3;
    var2.GuildTooltipActionSheets = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1369, 33, 11851, 1307, 13385, 13387, 13390, 13392, 13393, 1358, 13394, 13395, 4740, 13396, 5919, 9355, 3679, 2]);