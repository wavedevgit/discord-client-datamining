// modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx
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
    var0 = function arg0() {
        _fun117733: for (var _fun117733_ip = 0;;) switch (_fun117733_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.selectedTab;
                var0 = _closure1_slot17;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var0 = _closure1_slot11;
                var0 = var0.DETAILS;
                if (!(var0 !== var6)) {
                    _fun117733_ip = 128;
                    continue _fun117733
                }
            case 36:
                var0 = _closure1_slot11;
                var0 = var0.DESIGN;
                if (!(var0 !== var6)) {
                    _fun117733_ip = 122;
                    continue _fun117733
                }
            case 50:
                var0 = _closure1_slot11;
                var0 = var0.BENEFITS;
                if (!(var0 !== var6)) {
                    _fun117733_ip = 116;
                    continue _fun117733
                }
            case 64:
                var0 = global;
                var2 = var0.Error;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Unsupported scene: ';
                var8 = var1.bind(var0)(var6);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var9 = var1;
                var0 = new var9[var2](var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 116:
                var0 = _closure1_slot22;
                return var0;
            case 122:
                var0 = _closure1_slot21;
                return var0;
            case 128:
                var2 = _closure1_slot14;
                var1 = _closure1_slot7;
                var0 = {};
                var5 = var5.tabContent;
                var0.style = var5;
                var4 = _closure1_slot20;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var3 = {};
    var13 = true;
    var3.value = var13;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var3);
    var18 = 0;
    var3 = var5[var18];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.forwardRef;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.View;
    var _closure1_slot6 = var10;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 3;
    var10 = var5[var3];
    var10 = var8.bind(var0)(var10);
    var _closure1_slot8 = var10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot9 = var3;
    var17 = 4;
    var3 = var5[var17];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.GuildRoleSubscriptionsTierScenes;
    var _closure1_slot11 = var10;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildSettingsSections;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot14 = var7;
    var11 = var3.Fragment;
    var _closure1_slot15 = var11;
    var12 = var3.jsxs;
    var _closure1_slot16 = var12;
    var3 = 9;
    var3 = var5[var3];
    var15 = var4.bind(var0)(var3);
    var14 = var15.createStyles;
    var11 = {};
    var3 = {};
    var3.flex = var9;
    var11.container = var3;
    var3 = {};
    var16 = 10;
    var9 = var5[var16];
    var9 = var8.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var3.backgroundColor = var9;
    var9 = 16;
    var3.padding = var9;
    var11.tabsContainer = var3;
    var3 = {};
    var3.paddingBottom = var18;
    var11.tabsContainerWithDraft = var3;
    var3 = {
        'alignSelf': 'stretch',
        'margin': 16,
        'marginTop': 0
    };
    var11.actionButton = var3;
    var3 = {};
    var3.marginEnd = var17;
    var11.actionButtonIcon = var3;
    var3 = {};
    var16 = var5[var16];
    var16 = var8.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var3.backgroundColor = var16;
    var11.tabContent = var3;
    var3 = 24;
    var16 = {
        'marginTop': 24,
        'paddingStart': 16
    };
    var11.actionHeader = var16;
    var16 = {
        'marginBottom': 16,
        'marginLeft': 16
    };
    var11.actionDescription = var16;
    var11 = var14.bind(var15)(var11);
    var _closure1_slot17 = var11;
    var11 = var10.DETAILS;
    var15 = new Array(3);
    var15[0] = var11;
    var11 = var10.DESIGN;
    var15[1] = var11;
    var10 = var10.BENEFITS;
    var15[2] = var10;
    var _closure1_slot18 = var15;
    var14 = var15.reduce;
    var11 = function(arg0, arg1, arg2) { // Environment: var1
        var0 = arg0;
        var2 = arg2;
        var1 = arg1;
        var0[var1] = var2;
        return var0;
    };
    var10 = {};
    var10 = var14.bind(var15)(var11, var10);
    var _closure1_slot19 = var10;
    var10 = 20;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var11 = var10.SafeAreaPaddingView;
    var10 = {};
    var10.bottom = var13;
    var13 = 21;
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var14 = var13.GuildRoleSubscriptionTierDetailsTab;
    var13 = {};
    var14 = var7.bind(var0)(var14, var13);
    var13 = new Array(2);
    var13[0] = var14;
    var15 = function() {
        _fun117731: for (var _fun117731_ip = 0;;) switch (_fun117731_ip) {
            case 0:
                var0 = _closure1_slot17;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var _closure2_slot0 = var14;
                var7 = _closure1_slot0;
                var17 = _closure1_slot3;
                var0 = 11;
                var0 = var17[var0];
                var1 = var7.bind(var3)(var0);
                var0 = var1.useNavigation;
                var20 = var0.bind(var1)();
                var0 = 12;
                var0 = var17[var0];
                var1 = var7.bind(var3)(var0);
                var0 = var1.useEditStateContext;
                var0 = var0.bind(var1)();
                var2 = var0.guildId;
                var22 = var0.groupListingId;
                var21 = var0.editStateId;
                var16 = _closure1_slot1;
                var0 = 13;
                var0 = var17[var0];
                var0 = var16.bind(var3)(var0);
                var24 = undefined;
                var23 = var2;
                var0 = var24[var0](var23, var22, var21, var20, var19);
                var8 = var0.buttonText;
                var18 = var0.descriptionText;
                var12 = var0.handleArchiveOrDelete;
                var11 = var0.deleting;
                var10 = var0.archiving;
                var0 = 14;
                var0 = var17[var0];
                var1 = var7.bind(var3)(var0);
                var0 = var1.useShouldRestrictUpdatingCreatorMonetizationSettings;
                var0 = var0.bind(var1)(var2);
                var9 = var0.allowSelfRemoveMonetization;
                var2 = _closure1_slot16;
                var1 = _closure1_slot15;
                var0 = {};
                var15 = _closure1_slot14;
                var4 = 15;
                var4 = var17[var4];
                var6 = var16.bind(var3)(var4);
                var4 = {};
                var19 = var14.actionHeader;
                var4.style = var19;
                var4.children = var8;
                var6 = var15.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var15 = _closure1_slot14;
                var6 = 16;
                var6 = var17[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var19 = var14.actionDescription;
                var6.style = var19;
                var6.children = var18;
                var6 = var15.bind(var3)(var7, var6);
                var4[1] = var6;
                var7 = _closure1_slot14;
                var15 = 17;
                var5 = var17[var15];
                var6 = var16.bind(var3)(var5);
                var5 = {};
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.Colors;
                var15 = var15.RED;
                var5.color = var15;
                var14 = var14.actionButton;
                var5.style = var14;
                var13 = function() {
                    var3 = _closure1_slot14;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 18;
                    var0 = var6[var4];
                    var2 = undefined;
                    var1 = var5.bind(var2)(var0);
                    var0 = {};
                    var7 = _closure2_slot0;
                    var7 = var7.actionButtonIcon;
                    var0.style = var7;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.Sizes;
                    var4 = var4.SMALL;
                    var0.size = var4;
                    var4 = true;
                    var0.disableColor = var4;
                    var4 = 19;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var0.source = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var5.renderIcon = var13;
                var5.onPress = var12;
                var9 = !var9;
                if (var9) {
                    _fun117731_ip = 367;
                    continue _fun117731
                }
            case 364:
                var9 = var11;
            case 367:
                if (var9) {
                    _fun117731_ip = 373;
                    continue _fun117731
                }
            case 370:
                var9 = var10;
            case 373:
                var5.disabled = var9;
                var5.text = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var14 = {};
    var14 = var7.bind(var0)(var15, var14);
    var13[1] = var14;
    var10.children = var13;
    var10 = var12.bind(var0)(var11, var10);
    var _closure1_slot20 = var10;
    var10 = 22;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var11 = var10.GuildRoleSubscriptionTierDesignTab;
    var10 = {};
    var10 = var7.bind(var0)(var11, var10);
    var _closure1_slot21 = var10;
    var10 = 23;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var11 = var10.GuildRoleSubscriptionTierBenefitsTab;
    var10 = {};
    var10 = var7.bind(var0)(var11, var10);
    var _closure1_slot22 = var10;
    var10 = var5[var3];
    var11 = var8.bind(var0)(var10);
    var10 = {};
    var10.size = var9;
    var10 = var7.bind(var0)(var11, var10);
    var _closure1_slot23 = var10;
    var3 = var5[var3];
    var8 = var8.bind(var0)(var3);
    var3 = {};
    var3.size = var9;
    var3 = var7.bind(var0)(var8, var3);
    var _closure1_slot24 = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun117735: for (var _fun117735_ip = 0;;) switch (_fun117735_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var0 = 12;
                var0 = var4[var0];
                var5 = undefined;
                var1 = var3.bind(var5)(var0);
                var0 = var1.useEditStateContext;
                var1 = var0.bind(var1)();
                var0 = var1.guildId;
                var _closure2_slot0 = var0;
                var0 = var1.groupListingId;
                var _closure2_slot1 = var0;
                var9 = var1.editStateId;
                var1 = 25;
                var2 = var4[var1];
                var6 = var3.bind(var5)(var2);
                var2 = var6.usePublishSubscriptionListing;
                var2 = var2.bind(var6)();
                var12 = var2.error;
                var6 = var2.submitting;
                var10 = var2.publishSubscriptionListing;
                var _closure2_slot2 = var10;
                var2 = var2.clearError;
                var _closure2_slot3 = var2;
                var1 = var4[var1];
                var2 = var3.bind(var5)(var1);
                var1 = var2.useSubscriptionListing;
                var2 = var1.bind(var2)(var9);
                var _closure2_slot4 = var2;
                var1 = 26;
                var1 = var4[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var3.useRoleSubscriptionSettingsDisabled;
                var4 = var1.bind(var3)();
                var10 = _closure1_slot5;
                var9 = var10.useImperativeHandle;
                var3 = arg1;
                var1 = function() { // Environment: var8
                    var0 = {};
                    var1 = _closure2_slot3;
                    var0.dismissError = var1;
                    return var0;
                };
                var1 = var9.bind(var10)(var3, var1);
                var1 = null;
                var3 = var1 == var0;
                var0 = null;
                if (var3) {
                    _fun117735_ip = 490;
                    continue _fun117735
                }
            case 201:
                var3 = var1 == var2;
                var0 = null;
                if (var3) {
                    _fun117735_ip = 490;
                    continue _fun117735
                }
            case 213:
                var2 = var2.published;
                var0 = null;
                if (var2) {
                    _fun117735_ip = 490;
                    continue _fun117735
                }
            case 227:
                if (!(var1 == var12)) {
                    _fun117735_ip = 397;
                    continue _fun117735
                }
            case 234:
                var3 = _closure1_slot14;
                var2 = _closure1_slot1;
                var14 = _closure1_slot3;
                var1 = 28;
                var1 = var14[var1];
                var2 = var2.bind(var5)(var1);
                var1 = {};
                var13 = _closure1_slot0;
                var9 = 29;
                var10 = var14[var9];
                var10 = var13.bind(var5)(var10);
                var15 = var10.intl;
                var11 = var15.string;
                var10 = var14[var9];
                var10 = var13.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10.V5mSpz;
                var10 = var11.bind(var15)(var10);
                var1.message = var10;
                var10 = var14[var9];
                var10 = var13.bind(var5)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var14[var9];
                var9 = var13.bind(var5)(var9);
                var9 = var9.t;
                var9 = var9.Lj6R5m;
                var9 = var10.bind(var11)(var9);
                var1.ctaMessage = var9;
                var8 = function() {
                    var2 = _closure2_slot2;
                    var1 = {};
                    var3 = _closure2_slot0;
                    var1.guildId = var3;
                    var3 = _closure2_slot1;
                    var1.groupListingId = var3;
                    var0 = _closure2_slot4;
                    var0 = var0.id;
                    var1.listingId = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onClick = var8;
                var1.submitting = var6;
                var1.disabled = var4;
                var1 = var3.bind(var5)(var2, var1);
                _fun117735_ip = 487;
                continue _fun117735;
            case 397:
                var4 = _closure1_slot16;
                var3 = _closure1_slot15;
                var2 = {};
                var8 = _closure1_slot23;
                var6 = new Array(3);
                var6[0] = var8;
                var10 = _closure1_slot14;
                var9 = _closure1_slot1;
                var11 = _closure1_slot3;
                var8 = 27;
                var8 = var11[var8];
                var9 = var9.bind(var5)(var8);
                var8 = {};
                var11 = var12.getAnyErrorMessage;
                var11 = var11.bind(var12)();
                var8.children = var11;
                var8 = var10.bind(var5)(var9, var8);
                var6[1] = var8;
                var7 = _closure1_slot24;
                var6[2] = var7;
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 487:
                var0 = var1;
            case 490:
                return var0;
        }
    };
    var3 = var6.bind(var0)(var3);
    var _closure1_slot25 = var3;
    var3 = 30;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.HeaderSubmittingIndicator;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot26 = var3;
    var3 = 41;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun117738: for (var _fun117738_ip = 0;;) switch (_fun117738_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.guildId;
                var _closure2_slot0 = var8;
                var2 = var0.initialEditStateId;
                var5 = var0.groupListingId;
                var _closure2_slot1 = var5;
                var24 = var0.onBeforeDispatchNewListing;
                var _closure2_slot2 = var24;
                var4 = undefined;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var0 = _closure1_slot17;
                var18 = var0.bind(var4)();
                var1 = _closure1_slot5;
                var0 = var1.useState;
                var0 = var0.bind(var1)(var2);
                var3 = _closure1_slot4;
                var22 = 2;
                var0 = var3.bind(var4)(var0, var22);
                var9 = 0;
                var7 = var0[var9];
                var _closure2_slot3 = var7;
                var11 = 1;
                var0 = var0[var11];
                var _closure2_slot4 = var0;
                var6 = _closure1_slot0;
                var0 = _closure1_slot3;
                var1 = 11;
                var1 = var0[var1];
                var2 = var6.bind(var4)(var1);
                var1 = var2.useNavigation;
                var2 = var1.bind(var2)();
                var _closure2_slot5 = var2;
                var1 = 25;
                var1 = var0[var1];
                var6 = var6.bind(var4)(var1);
                var1 = var6.useSubscriptionListing;
                var1 = var1.bind(var6)(var7);
                var10 = _closure1_slot2;
                var6 = 31;
                var0 = var0[var6];
                var10 = var10.bind(var4)(var0);
                var0 = var10.useName;
                var0 = var0.bind(var10)(var7);
                var0 = var3.bind(var4)(var0, var11);
                var14 = var0[var9];
                var _closure2_slot6 = var14;
                var0 = null;
                var10 = var0 == var1;
                var3 = undefined;
                if (var10) {
                    _fun117738_ip = 252;
                    continue _fun117738
                }
            case 246:
                var3 = var1.published;
            case 252:
                var21 = var0 != var3;
                if (!var21) {
                    _fun117738_ip = 262;
                    continue _fun117738
                }
            case 259:
                var21 = var3;
            case 262:
                var13 = _closure1_slot2;
                var17 = _closure1_slot3;
                var3 = var17[var6];
                var10 = var13.bind(var4)(var3);
                var3 = var10.useEditStateIds;
                var3 = var3.bind(var10)(var5, var8);
                var3 = var3.removeEditStateId;
                _closure2_slot7 = var3;
                var10 = _closure1_slot5;
                var15 = var10.useRef;
                var20 = var15.bind(var10)(var0);
                _closure2_slot8 = var20;
                var15 = var17[var6];
                var19 = var13.bind(var4)(var15);
                var15 = var19.useHasChanges;
                var19 = var15.bind(var19)(var7);
                _closure2_slot9 = var19;
                var6 = var17[var6];
                var13 = var13.bind(var4)(var6);
                var6 = var13.useCreateOrUpdateListingFromEditState;
                var6 = var6.bind(var13)();
                var13 = var6.loading;
                _closure2_slot10 = var13;
                var25 = var6.handleCreateOrUpdateFromEditState;
                _closure2_slot11 = var25;
                var6 = var6.error;
                _closure2_slot12 = var6;
                var23 = var10.useCallback;
                var15 = new Array(6);
                var15[0] = var8;
                var15[1] = var25;
                var15[2] = var7;
                var15[3] = var5;
                var15[4] = var24;
                var15[5] = var3;
                var3 = function() { // Environment: var16
                    var2 = _closure2_slot11;
                    var1 = {};
                    var3 = _closure2_slot0;
                    var1.guildId = var3;
                    var3 = _closure2_slot3;
                    var1.editStateId = var3;
                    var3 = _closure2_slot1;
                    var1.groupListingId = var3;
                    var0 = _closure2_slot2;
                    var1.onBeforeDispatchNewListing = var0;
                    var0 = function arg0() {
                        var3 = _closure2_slot4;
                        var0 = arg0;
                        var2 = var0.id;
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = _closure2_slot7;
                        var1 = _closure2_slot3;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onAfterDispatchNewListing = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var3 = var23.bind(var10)(var3, var15);
                _closure2_slot13 = var3;
                var23 = var10.useLayoutEffect;
                var15 = new Array(1);
                var15[0] = var6;
                var6 = function() { // Environment: var16
                    _fun117741: for (var _fun117741_ip = 0;;) switch (_fun117741_ip) {
                        case 0:
                            var1 = _closure2_slot12;
                            var4 = null;
                            if (!(var4 != var1)) {
                                _fun117741_ip = 122;
                                continue _fun117741
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var1 = 32;
                            var1 = var5[var1];
                            var7 = undefined;
                            var2 = var2.bind(var7)(var1);
                            var1 = var2.presentError;
                            var5 = _closure2_slot12;
                            var0 = var5.getAnyErrorMessage;
                            var0 = var0.bind(var5)();
                            if (!(var4 == var0)) {
                                _fun117741_ip = 117;
                                continue _fun117741
                            }
                        case 62:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var3 = 29;
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
                var6 = var23.bind(var10)(var6, var15);
                var23 = _closure1_slot10;
                var15 = var23.useRoleTierEditStore;
                var6 = function(arg0) { // Environment: var16
                    _fun117742: for (var _fun117742_ip = 0;;) switch (_fun117742_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.currentScene;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun117742_ip = 28;
                                continue _fun117742
                            }
                        case 15:
                            var0 = _closure1_slot11;
                            var2 = var0.DETAILS;
                        case 28:
                            var0 = new Array(2);
                            var0[0] = var2;
                            var1 = var1.setScene;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var15 = var15.bind(var23)(var6);
                var6 = _closure1_slot4;
                var6 = var6.bind(var4)(var15, var22);
                var15 = var6[var9];
                var6 = var6[var11];
                _closure2_slot14 = var6;
                var11 = var10.useLayoutEffect;
                var6 = new Array(5);
                var6[0] = var2;
                var6[1] = var19;
                var6[2] = var14;
                var6[3] = var13;
                var6[4] = var3;
                var3 = function() { // Environment: var16
                    _fun117743: for (var _fun117743_ip = 0;;) switch (_fun117743_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = var2.setOptions;
                            var0 = {};
                            var4 = _closure2_slot10;
                            if (var4) {
                                _fun117743_ip = 33;
                                continue _fun117743
                            }
                        case 24:
                            var4 = function() { // Environment: var3
                                var3 = _closure1_slot14;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var0 = 33;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var4 = 29;
                                var5 = var8[var4];
                                var5 = var7.bind(var2)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var8[var4];
                                var4 = var7.bind(var2)(var4);
                                var4 = var4.t;
                                var4 = var4["R3BPH+"];
                                var4 = var5.bind(var6)(var4);
                                var0.text = var4;
                                var5 = _closure2_slot13;
                                var0.onPress = var5;
                                var4 = _closure2_slot9;
                                var4 = !var4;
                                var0.disabled = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            _fun117743_ip = 40;
                            continue _fun117743;
                        case 33:
                            var4 = function() { // Environment: var3
                                var0 = _closure1_slot26;
                                return var0;
                            };
                        case 40:
                            var0.headerRight = var4;
                            var3 = function() {
                                var3 = _closure1_slot14;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var0 = 30;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.NavigatorHeader;
                                var0 = {};
                                var4 = _closure2_slot6;
                                var0.title = var4;
                                var4 = 29;
                                var5 = var8[var4];
                                var5 = var7.bind(var2)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var8[var4];
                                var4 = var7.bind(var2)(var4);
                                var4 = var4.t;
                                var4 = var4.t94EHg;
                                var4 = var5.bind(var6)(var4);
                                var0.subtitle = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var0.headerTitle = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var11.bind(var10)(var3, var6);
                var6 = var10.useLayoutEffect;
                var3 = new Array(3);
                var3[0] = var2;
                var3[1] = var7;
                var3[2] = var8;
                var2 = function() { // Environment: var16
                    _fun117747: for (var _fun117747_ip = 0;;) switch (_fun117747_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var3 = null;
                            if (!(var3 == var1)) {
                                _fun117747_ip = 139;
                                continue _fun117747
                            }
                        case 16:
                            var2 = _closure2_slot5;
                            var1 = var2.getState;
                            var1 = var1.bind(var2)();
                            var2 = var1.routes;
                            var4 = var2.length;
                            var1 = 1;
                            var1 = var4 - var1;
                            var4 = var2[var1];
                            var6 = _closure1_slot8;
                            var5 = var6.getSubscriptionGroupListingsForGuildFetchState;
                            var2 = _closure2_slot0;
                            var5 = var5.bind(var6)(var2);
                            var2 = _closure1_slot9;
                            var2 = var2.FETCHING;
                            var2 = var5 === var2;
                            var5 = var3 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun117747_ip = 102;
                                continue _fun117747
                            }
                        case 97:
                            var3 = var4.name;
                        case 102:
                            var1 = _closure1_slot12;
                            var1 = var1.ROLE_SUBSCRIPTIONS_TIER_EDIT;
                            var1 = var3 !== var1;
                            if (var1) {
                                _fun117747_ip = 122;
                                continue _fun117747
                            }
                        case 119:
                            var1 = var2;
                        case 122:
                            if (var1) {
                                _fun117747_ip = 139;
                                continue _fun117747
                            }
                        case 125:
                            var1 = _closure2_slot5;
                            var0 = var1.pop;
                            var0 = var0.bind(var1)();
                        case 139:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var10)(var2, var3);
                var14 = _closure1_slot0;
                var2 = 34;
                var2 = var17[var2];
                var6 = var14.bind(var4)(var2);
                var3 = var6.useSegmentedControlState;
                var2 = {};
                var2.pageWidth = var9;
                var9 = _closure1_slot19;
                var9 = var9[var15];
                var2.defaultIndex = var9;
                var9 = function arg0() {
                    _fun117748: for (var _fun117748_ip = 0;;) switch (_fun117748_ip) {
                        case 0:
                            var1 = _closure1_slot18;
                            var0 = arg0;
                            var4 = var1[var0];
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun117748_ip = 57;
                                continue _fun117748
                            }
                        case 20:
                            var3 = _closure2_slot14;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var4);
                            var1 = _closure2_slot8;
                            var1 = var1.current;
                            if (!(var0 != var1)) {
                                _fun117748_ip = 57;
                                continue _fun117748
                            }
                        case 47:
                            var0 = var1.dismissError;
                            var0 = var0.bind(var1)();
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.onSetActiveIndex = var9;
                var9 = 29;
                var10 = var17[var9];
                var10 = var14.bind(var4)(var10);
                var13 = var10.intl;
                var11 = var13.string;
                var10 = var17[var9];
                var10 = var14.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.f7rGug;
                var10 = var11.bind(var13)(var10);
                var11 = new Array(3);
                var11[0] = var10;
                var10 = var17[var9];
                var10 = var14.bind(var4)(var10);
                var19 = var10.intl;
                var13 = var19.string;
                var10 = var17[var9];
                var10 = var14.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.YCpDtS;
                var10 = var13.bind(var19)(var10);
                var11[1] = var10;
                var10 = var17[var9];
                var10 = var14.bind(var4)(var10);
                var13 = var10.intl;
                var10 = var13.string;
                var9 = var17[var9];
                var9 = var14.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.MpDNxN;
                var9 = var10.bind(var13)(var9);
                var11[2] = var9;
                var10 = var11.map;
                var9 = function(arg0) { // Environment: var16
                    var1 = arg0;
                    var0 = {};
                    var0.id = var1;
                    var0.label = var1;
                    var1 = null;
                    var0.page = var1;
                    return var0;
                };
                var9 = var10.bind(var11)(var9);
                var2.items = var9;
                var19 = var3.bind(var6)(var2);
                if (!(var0 != var7)) {
                    _fun117738_ip = 1227;
                    continue _fun117738
                }
            case 834:
                if (!(var4 !== var1)) {
                    _fun117738_ip = 844;
                    continue _fun117738
                }
            case 838:
                var17 = new Array(0);
                _fun117738_ip = 887;
                continue _fun117738;
            case 844:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 35;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.DismissibleContent;
                var2 = var1.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES;
                var1 = new Array(1);
                var1[0] = var2;
                var17 = var1;
            case 887:
                var1 = function() {
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot3;
                    var1 = 37;
                    var1 = var0[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = 36;
                    var1 = var0[var1];
                    var0 = var0.paths;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                _closure2_slot15 = var1;
                var3 = _closure1_slot14;
                var6 = _closure1_slot0;
                var22 = _closure1_slot3;
                var1 = 12;
                var1 = var22[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.EditStateContextProvider;
                var1 = {};
                var1.guildId = var8;
                var1.editStateId = var7;
                var1.groupListingId = var5;
                var7 = _closure1_slot14;
                var5 = 26;
                var5 = var22[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.RoleSubscriptionSettingsDisabledContextProvider;
                var5 = {};
                var5.guildId = var8;
                var10 = _closure1_slot16;
                var9 = _closure1_slot6;
                var8 = {};
                var11 = var18.container;
                var8.style = var11;
                var14 = _closure1_slot14;
                var13 = _closure1_slot1;
                var11 = 38;
                var11 = var22[var11];
                var13 = var13.bind(var4)(var11);
                var11 = {};
                var11.contentTypes = var17;
                var16 = function arg0() {
                    _fun117751: for (var _fun117751_ip = 0;;) switch (_fun117751_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.visibleContent;
                            var0 = var0.markAsDismissed;
                            var _closure3_slot0 = var0;
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var0 = 35;
                            var0 = var4[var0];
                            var4 = undefined;
                            var0 = var2.bind(var4)(var0);
                            var0 = var0.DismissibleContent;
                            var2 = var0.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES;
                            var0 = null;
                            if (!(var3 === var2)) {
                                _fun117751_ip = 137;
                                continue _fun117751
                            }
                        case 64:
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var1 = 39;
                            var1 = var6[var1];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.DismissibleActionSheet;
                            var1 = {};
                            var5 = function() {
                                var2 = _closure3_slot0;
                                var0 = _closure1_slot13;
                                var1 = var0.UNKNOWN;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1.markAsDismissed = var5;
                            var5 = 'TierTemplateSelected';
                            var1.actionSheetKey = var5;
                            var5 = _closure2_slot15;
                            var1.importer = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 137:
                            return var0;
                    }
                };
                var11.children = var16;
                var13 = var14.bind(var4)(var13, var11);
                var11 = new Array(3);
                var11[0] = var13;
                var14 = _closure1_slot16;
                var13 = {};
                var17 = var18.tabsContainer;
                var16 = new Array(2);
                var16[0] = var17;
                var17 = null;
                if (var21) {
                    _fun117738_ip = 1074;
                    continue _fun117738
                }
            case 1068:
                var17 = var18.tabsContainerWithDraft;
            case 1074:
                var16[1] = var17;
                var13.style = var16;
                var18 = _closure1_slot14;
                var17 = _closure1_slot0;
                var21 = _closure1_slot3;
                var16 = 40;
                var16 = var21[var16];
                var16 = var17.bind(var4)(var16);
                var17 = var16.SegmentedControl;
                var16 = {};
                var16.state = var19;
                var17 = var18.bind(var4)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot14;
                var18 = _closure1_slot25;
                var17 = {};
                var17.ref = var20;
                var17 = var19.bind(var4)(var18, var17);
                var16[1] = var17;
                var13.children = var16;
                var13 = var14.bind(var4)(var9, var13);
                var11[1] = var13;
                var14 = _closure1_slot14;
                var13 = _closure1_slot27;
                var12 = {};
                var12.selectedTab = var15;
                var12 = var14.bind(var4)(var13, var12);
                var11[2] = var12;
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1227:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3087, 14785, 5694, 660, 1369, 33, 1297, 671, 1469, 14788, 14782, 5681, 6007, 3938, 4849, 4092, 15016, 4754, 14826, 14824, 14799, 8880, 10663, 14765, 14052, 15017, 1234, 5836, 10678, 3149, 5374, 8321, 1358, 15018, 1307, 6517, 9435, 8322, 2]);