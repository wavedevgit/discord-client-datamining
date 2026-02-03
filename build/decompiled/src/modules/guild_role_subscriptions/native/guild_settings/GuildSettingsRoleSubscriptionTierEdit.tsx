// modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = function() {
        _fun116950: for (var _fun116950_ip = 0;;) switch (_fun116950_ip) {
            case 0:
                var0 = _closure1_slot17;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var _closure2_slot0 = var14;
                var7 = _closure1_slot0;
                var17 = _closure1_slot3;
                var0 = 12;
                var0 = var17[var0];
                var1 = var7.bind(var3)(var0);
                var0 = var1.useNavigation;
                var20 = var0.bind(var1)();
                var0 = 13;
                var0 = var17[var0];
                var1 = var7.bind(var3)(var0);
                var0 = var1.useEditStateContext;
                var0 = var0.bind(var1)();
                var2 = var0.guildId;
                var22 = var0.groupListingId;
                var21 = var0.editStateId;
                var16 = _closure1_slot1;
                var0 = 14;
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
                var0 = 15;
                var0 = var17[var0];
                var1 = var7.bind(var3)(var0);
                var0 = var1.useShouldRestrictUpdatingCreatorMonetizationSettings;
                var0 = var0.bind(var1)(var2);
                var9 = var0.allowSelfRemoveMonetization;
                var2 = _closure1_slot16;
                var1 = _closure1_slot15;
                var0 = {};
                var15 = _closure1_slot14;
                var4 = 16;
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
                var6 = 17;
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
                var15 = 18;
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
                    var4 = 19;
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
                    var4 = 20;
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
                    _fun116950_ip = 367;
                    continue _fun116950
                }
            case 364:
                var9 = var11;
            case 367:
                if (var9) {
                    _fun116950_ip = 373;
                    continue _fun116950
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
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun116952: for (var _fun116952_ip = 0;;) switch (_fun116952_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.selectedTab;
                var0 = _closure1_slot17;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var0 = _closure1_slot11;
                var0 = var0.DETAILS;
                if (!(var0 !== var5)) {
                    _fun116952_ip = 199;
                    continue _fun116952
                }
            case 39:
                var0 = _closure1_slot11;
                var0 = var0.DESIGN;
                if (!(var0 !== var5)) {
                    _fun116952_ip = 159;
                    continue _fun116952
                }
            case 53:
                var0 = _closure1_slot11;
                var0 = var0.BENEFITS;
                if (!(var0 !== var5)) {
                    _fun116952_ip = 119;
                    continue _fun116952
                }
            case 67:
                var0 = global;
                var2 = var0.Error;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Unsupported scene: ';
                var13 = var1.bind(var0)(var5);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 119:
                var2 = _closure1_slot14;
                var1 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 24;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.GuildRoleSubscriptionTierBenefitsTab;
                var0 = {};
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 159:
                var2 = _closure1_slot14;
                var1 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 23;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.GuildRoleSubscriptionTierDesignTab;
                var0 = {};
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 199:
                var2 = _closure1_slot14;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var4.tabContent;
                var0.style = var4;
                var6 = _closure1_slot16;
                var9 = _closure1_slot0;
                var11 = _closure1_slot3;
                var4 = 21;
                var4 = var11[var4];
                var4 = var9.bind(var3)(var4);
                var5 = var4.SafeAreaPaddingView;
                var4 = {};
                var7 = true;
                var4.bottom = var7;
                var10 = _closure1_slot14;
                var7 = 22;
                var7 = var11[var7];
                var7 = var9.bind(var3)(var7);
                var9 = var7.GuildRoleSubscriptionTierDetailsTab;
                var7 = {};
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot14;
                var9 = _closure1_slot21;
                var8 = {};
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var14 = 0;
    var3 = var5[var14];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var15 = 1;
    var3 = var5[var15];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = var5[var15];
    var3 = var4.bind(var0)(var3);
    var6 = var3.forwardRef;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.View;
    var _closure1_slot6 = var8;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 3;
    var8 = var5[var3];
    var8 = var12.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot9 = var3;
    var13 = 4;
    var3 = var5[var13];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildRoleSubscriptionsTierScenes;
    var _closure1_slot11 = var3;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var11 = var7.Fonts;
    var7 = var7.GuildSettingsSections;
    var _closure1_slot12 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.ContentDismissActionType;
    var _closure1_slot13 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.jsx;
    var _closure1_slot14 = var8;
    var8 = var7.Fragment;
    var _closure1_slot15 = var8;
    var7 = var7.jsxs;
    var _closure1_slot16 = var7;
    var7 = 9;
    var7 = var5[var7];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {};
    var10.flex = var15;
    var7.container = var10;
    var10 = {};
    var15 = 10;
    var15 = var5[var15];
    var18 = var12.bind(var0)(var15);
    var17 = var11.PRIMARY_SEMIBOLD;
    var11 = 11;
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var16 = var15.TEXT_LINK;
    var15 = 16;
    var20 = var18.bind(var0)(var17, var16, var15);
    var21 = var10;
    var16 = copyDataProperties(var21, var20);
    var7.saveButtonLabel = var10;
    var10 = {};
    var16 = var5[var11];
    var16 = var12.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SURFACE_HIGH;
    var10.backgroundColor = var16;
    var10.padding = var15;
    var7.tabsContainer = var10;
    var10 = {};
    var10.paddingBottom = var14;
    var7.tabsContainerWithDraft = var10;
    var10 = {
        'alignSelf': 'stretch',
        'margin': 16,
        'marginTop': 0
    };
    var7.actionButton = var10;
    var10 = {};
    var10.marginEnd = var13;
    var7.actionButtonIcon = var10;
    var10 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var10.backgroundColor = var11;
    var7.tabContent = var10;
    var10 = {
        'marginTop': 24,
        'paddingStart': 16
    };
    var7.actionHeader = var10;
    var10 = {
        'marginBottom': 16,
        'marginLeft': 16
    };
    var7.actionDescription = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot17 = var7;
    var7 = var3.DETAILS;
    var9 = new Array(3);
    var9[0] = var7;
    var7 = var3.DESIGN;
    var9[1] = var7;
    var3 = var3.BENEFITS;
    var9[2] = var3;
    var _closure1_slot18 = var9;
    var8 = var9.reduce;
    var7 = function(arg0, arg1, arg2) { // Environment: var1
        var0 = arg0;
        var2 = arg2;
        var1 = arg1;
        var0[var1] = var2;
        return var0;
    };
    var3 = {};
    var3 = var8.bind(var9)(var7, var3);
    var _closure1_slot19 = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun116954: for (var _fun116954_ip = 0;;) switch (_fun116954_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var0 = 13;
                var0 = var4[var0];
                var5 = undefined;
                var1 = var3.bind(var5)(var0);
                var0 = var1.useEditStateContext;
                var1 = var0.bind(var1)();
                var0 = var1.guildId;
                var _closure2_slot0 = var0;
                var0 = var1.groupListingId;
                var _closure2_slot1 = var0;
                var8 = var1.editStateId;
                var1 = 25;
                var2 = var4[var1];
                var6 = var3.bind(var5)(var2);
                var2 = var6.usePublishSubscriptionListing;
                var2 = var2.bind(var6)();
                var16 = var2.error;
                var6 = var2.submitting;
                var10 = var2.publishSubscriptionListing;
                var _closure2_slot2 = var10;
                var2 = var2.clearError;
                var _closure2_slot3 = var2;
                var1 = var4[var1];
                var2 = var3.bind(var5)(var1);
                var1 = var2.useSubscriptionListing;
                var2 = var1.bind(var2)(var8);
                var _closure2_slot4 = var2;
                var1 = 26;
                var1 = var4[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var3.useRoleSubscriptionSettingsDisabled;
                var4 = var1.bind(var3)();
                var10 = _closure1_slot5;
                var8 = var10.useImperativeHandle;
                var3 = arg1;
                var1 = function() { // Environment: var7
                    var0 = {};
                    var1 = _closure2_slot3;
                    var0.dismissError = var1;
                    return var0;
                };
                var1 = var8.bind(var10)(var3, var1);
                var1 = null;
                var3 = var1 == var0;
                var0 = null;
                if (var3) {
                    _fun116954_ip = 541;
                    continue _fun116954
                }
            case 201:
                var3 = var1 == var2;
                var0 = null;
                if (var3) {
                    _fun116954_ip = 541;
                    continue _fun116954
                }
            case 213:
                var2 = var2.published;
                var0 = null;
                if (var2) {
                    _fun116954_ip = 541;
                    continue _fun116954
                }
            case 227:
                if (!(var1 == var16)) {
                    _fun116954_ip = 400;
                    continue _fun116954
                }
            case 234:
                var3 = _closure1_slot14;
                var2 = _closure1_slot1;
                var13 = _closure1_slot3;
                var1 = 29;
                var1 = var13[var1];
                var2 = var2.bind(var5)(var1);
                var1 = {};
                var12 = _closure1_slot0;
                var8 = 30;
                var10 = var13[var8];
                var10 = var12.bind(var5)(var10);
                var14 = var10.intl;
                var11 = var14.string;
                var10 = var13[var8];
                var10 = var12.bind(var5)(var10);
                var10 = var10.t;
                var10 = var10.V5mSpz;
                var10 = var11.bind(var14)(var10);
                var1.message = var10;
                var10 = var13[var8];
                var10 = var12.bind(var5)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var8 = var13[var8];
                var8 = var12.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8.Lj6R5m;
                var8 = var10.bind(var11)(var8);
                var1.ctaMessage = var8;
                var7 = function() {
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
                var1.onClick = var7;
                var1.submitting = var6;
                var1.disabled = var4;
                var1 = var3.bind(var5)(var2, var1);
                _fun116954_ip = 538;
                continue _fun116954;
            case 400:
                var4 = _closure1_slot16;
                var3 = _closure1_slot15;
                var2 = {};
                var13 = _closure1_slot14;
                var8 = _closure1_slot1;
                var11 = _closure1_slot3;
                var7 = 27;
                var6 = var11[var7];
                var12 = var8.bind(var5)(var6);
                var6 = {};
                var10 = 16;
                var6.size = var10;
                var12 = var13.bind(var5)(var12, var6);
                var6 = new Array(3);
                var6[0] = var12;
                var14 = _closure1_slot14;
                var12 = 28;
                var12 = var11[var12];
                var13 = var8.bind(var5)(var12);
                var12 = {};
                var15 = var16.getAnyErrorMessage;
                var15 = var15.bind(var16)();
                var12.children = var15;
                var12 = var14.bind(var5)(var13, var12);
                var6[1] = var12;
                var9 = _closure1_slot14;
                var7 = var11[var7];
                var8 = var8.bind(var5)(var7);
                var7 = {};
                var7.size = var10;
                var7 = var9.bind(var5)(var8, var7);
                var6[2] = var7;
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 538:
                var0 = var1;
            case 541:
                return var0;
        }
    };
    var3 = var6.bind(var0)(var3);
    var _closure1_slot20 = var3;
    var3 = 42;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116957: for (var _fun116957_ip = 0;;) switch (_fun116957_ip) {
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
                var1 = 12;
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
                    _fun116957_ip = 252;
                    continue _fun116957
                }
            case 246:
                var3 = var1.published;
            case 252:
                var21 = var0 != var3;
                if (!var21) {
                    _fun116957_ip = 262;
                    continue _fun116957
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
                    _fun116960: for (var _fun116960_ip = 0;;) switch (_fun116960_ip) {
                        case 0:
                            var1 = _closure2_slot12;
                            var4 = null;
                            if (!(var4 != var1)) {
                                _fun116960_ip = 122;
                                continue _fun116960
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
                                _fun116960_ip = 117;
                                continue _fun116960
                            }
                        case 62:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var3 = 30;
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
                    _fun116961: for (var _fun116961_ip = 0;;) switch (_fun116961_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.currentScene;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun116961_ip = 28;
                                continue _fun116961
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
                    _fun116962: for (var _fun116962_ip = 0;;) switch (_fun116962_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = var2.setOptions;
                            var0 = {};
                            var4 = _closure2_slot10;
                            if (var4) {
                                _fun116962_ip = 33;
                                continue _fun116962
                            }
                        case 24:
                            var4 = function() { // Environment: var3
                                var3 = _closure1_slot14;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var0 = 34;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var4 = 30;
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
                            _fun116962_ip = 40;
                            continue _fun116962;
                        case 33:
                            var4 = function() { // Environment: var3
                                var3 = _closure1_slot14;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var0 = 33;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.HeaderSubmittingIndicator;
                                var0 = {};
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                        case 40:
                            var0.headerRight = var4;
                            var3 = function() {
                                var3 = _closure1_slot14;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot3;
                                var0 = 33;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.NavigatorHeader;
                                var0 = {};
                                var4 = _closure2_slot6;
                                var0.title = var4;
                                var4 = 30;
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
                    _fun116966: for (var _fun116966_ip = 0;;) switch (_fun116966_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var3 = null;
                            if (!(var3 == var1)) {
                                _fun116966_ip = 139;
                                continue _fun116966
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
                                _fun116966_ip = 102;
                                continue _fun116966
                            }
                        case 97:
                            var3 = var4.name;
                        case 102:
                            var1 = _closure1_slot12;
                            var1 = var1.ROLE_SUBSCRIPTIONS_TIER_EDIT;
                            var1 = var3 !== var1;
                            if (var1) {
                                _fun116966_ip = 122;
                                continue _fun116966
                            }
                        case 119:
                            var1 = var2;
                        case 122:
                            if (var1) {
                                _fun116966_ip = 139;
                                continue _fun116966
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
                var2 = 35;
                var2 = var17[var2];
                var6 = var14.bind(var4)(var2);
                var3 = var6.useSegmentedControlState;
                var2 = {};
                var2.pageWidth = var9;
                var9 = _closure1_slot19;
                var9 = var9[var15];
                var2.defaultIndex = var9;
                var9 = function arg0() {
                    _fun116967: for (var _fun116967_ip = 0;;) switch (_fun116967_ip) {
                        case 0:
                            var1 = _closure1_slot18;
                            var0 = arg0;
                            var4 = var1[var0];
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun116967_ip = 57;
                                continue _fun116967
                            }
                        case 20:
                            var3 = _closure2_slot14;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var4);
                            var1 = _closure2_slot8;
                            var1 = var1.current;
                            if (!(var0 != var1)) {
                                _fun116967_ip = 57;
                                continue _fun116967
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
                var9 = 30;
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
                    _fun116957_ip = 1227;
                    continue _fun116957
                }
            case 834:
                if (!(var4 !== var1)) {
                    _fun116957_ip = 844;
                    continue _fun116957
                }
            case 838:
                var17 = new Array(0);
                _fun116957_ip = 887;
                continue _fun116957;
            case 844:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 36;
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
                    var1 = 38;
                    var1 = var0[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = 37;
                    var1 = var0[var1];
                    var0 = var0.paths;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                _closure2_slot15 = var1;
                var3 = _closure1_slot14;
                var6 = _closure1_slot0;
                var22 = _closure1_slot3;
                var1 = 13;
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
                var11 = 39;
                var11 = var22[var11];
                var13 = var13.bind(var4)(var11);
                var11 = {};
                var11.contentTypes = var17;
                var16 = function arg0() {
                    _fun116970: for (var _fun116970_ip = 0;;) switch (_fun116970_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.visibleContent;
                            var0 = var0.markAsDismissed;
                            var _closure3_slot0 = var0;
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var0 = 36;
                            var0 = var4[var0];
                            var4 = undefined;
                            var0 = var2.bind(var4)(var0);
                            var0 = var0.DismissibleContent;
                            var2 = var0.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES;
                            var0 = null;
                            if (!(var3 === var2)) {
                                _fun116970_ip = 137;
                                continue _fun116970
                            }
                        case 64:
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var1 = 40;
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
                    _fun116957_ip = 1074;
                    continue _fun116957
                }
            case 1068:
                var17 = var18.tabsContainerWithDraft;
            case 1074:
                var16[1] = var17;
                var13.style = var16;
                var18 = _closure1_slot14;
                var17 = _closure1_slot0;
                var21 = _closure1_slot3;
                var16 = 41;
                var16 = var21[var16];
                var16 = var17.bind(var4)(var16);
                var17 = var16.SegmentedControl;
                var16 = {};
                var16.state = var19;
                var17 = var18.bind(var4)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot14;
                var18 = _closure1_slot20;
                var17 = {};
                var17.ref = var20;
                var17 = var19.bind(var4)(var18, var17);
                var16[1] = var17;
                var13.children = var16;
                var13 = var14.bind(var4)(var9, var13);
                var11[1] = var13;
                var14 = _closure1_slot14;
                var13 = _closure1_slot22;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3085, 14880, 5635, 660, 1369, 33, 1297, 4682, 671, 1469, 14891, 14887, 5622, 5930, 3941, 4873, 4086, 14925, 4734, 14919, 14917, 14894, 10805, 14868, 9279, 13991, 14926, 1234, 10822, 3147, 4705, 5322, 7795, 1358, 14927, 1307, 5957, 9408, 8188, 2]);