// modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var4 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var4;
    var _closure1_slot3 = var6;
    var0 = function arg0() {
        var0 = arg0;
        var8 = var0.count;
        var5 = var0.title;
        var0 = _closure1_slot11;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot10;
        var6 = _closure1_slot0;
        var10 = _closure1_slot3;
        var4 = 6;
        var0 = var10[var4];
        var0 = var6.bind(var3)(var0);
        var1 = var0.Text;
        var0 = {
            'variant': 'text-xs/bold',
            'color': 'text-muted'
        };
        var11 = var9.contentHeader;
        var0.style = var11;
        var7 = _closure1_slot9;
        var4 = var10[var4];
        var4 = var6.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'variant': 'text-xs/bold',
            'color': 'text-default'
        };
        var9 = var9.contentHeader;
        var4.style = var9;
        var4.children = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var6 = ' ';
        var4[1] = var6;
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var1 = _closure1_slot11;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot9;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var4.separator;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun117022: for (var _fun117022_ip = 0;;) switch (_fun117022_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.title;
                var8 = var0.description;
                var3 = _closure1_slot10;
                var2 = _closure1_slot6;
                var1 = {};
                var6 = 'string';
                var4 = typeof var10;
                var0 = var10;
                if (!(var6 === var4)) {
                    _fun117022_ip = 95;
                    continue _fun117022
                }
            case 40:
                var9 = _closure1_slot9;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var4 = 6;
                var4 = var7[var4];
                var7 = undefined;
                var4 = var6.bind(var7)(var4);
                var6 = var4.Text;
                var4 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-default'
                };
                var4.children = var10;
                var0 = var9.bind(var7)(var6, var4);
            case 95:
                var4 = new Array(3);
                var4[0] = var0;
                var10 = _closure1_slot9;
                var7 = _closure1_slot1;
                var9 = _closure1_slot3;
                var0 = 11;
                var6 = var9[var0];
                var0 = undefined;
                var7 = var7.bind(var0)(var6);
                var6 = {};
                var11 = 2;
                var6.size = var11;
                var6 = var10.bind(var0)(var7, var6);
                var4[1] = var6;
                var7 = _closure1_slot9;
                var6 = _closure1_slot0;
                var5 = 6;
                var5 = var9[var5];
                var5 = var6.bind(var0)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/medium',
                    'color': 'interactive-text-default'
                };
                var5.children = var8;
                var5 = var7.bind(var0)(var6, var5);
                var4[2] = var5;
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var4 = var0.description;
        var5 = var0.type;
        var10 = var0.name;
        var8 = _closure1_slot0;
        var11 = _closure1_slot3;
        var1 = 12;
        var1 = var11[var1];
        var3 = undefined;
        var2 = var8.bind(var3)(var1);
        var1 = var2.getPrivateChannelIconComponent;
        var9 = var1.bind(var2)(var5);
        var5 = _closure1_slot10;
        var2 = _closure1_slot6;
        var1 = {};
        var6 = {
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var1.style = var6;
        var7 = _closure1_slot9;
        var6 = {};
        var12 = 'xs';
        var6.size = var12;
        var7 = var7.bind(var3)(var9, var6);
        var6 = new Array(3);
        var6[0] = var7;
        var12 = _closure1_slot9;
        var9 = _closure1_slot1;
        var7 = 11;
        var7 = var11[var7];
        var9 = var9.bind(var3)(var7);
        var7 = {};
        var13 = 4;
        var7.size = var13;
        var7 = var12.bind(var3)(var9, var7);
        var6[1] = var7;
        var9 = _closure1_slot9;
        var7 = 6;
        var7 = var11[var7];
        var7 = var8.bind(var3)(var7);
        var8 = var7.Text;
        var7 = {
            'variant': 'text-md/semibold',
            'color': 'text-default'
        };
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var6[2] = var7;
        var1.children = var6;
        var5 = var5.bind(var3)(var2, var1);
        var2 = _closure1_slot9;
        var1 = _closure1_slot14;
        var0 = {};
        var0.title = var5;
        var0.description = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        var0 = _closure1_slot11;
        var3 = undefined;
        var14 = var0.bind(var3)();
        var2 = _closure1_slot10;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var14.viewEntireTemplateFooter;
        var0.style = var4;
        var7 = _closure1_slot10;
        var6 = _closure1_slot6;
        var4 = {};
        var10 = _closure1_slot9;
        var16 = _closure1_slot0;
        var12 = _closure1_slot3;
        var8 = 6;
        var8 = var12[var8];
        var8 = var16.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'variant': 'text-sm/semibold',
            'color': 'interactive-text-hover'
        };
        var11 = {};
        var13 = -1;
        var11.marginTop = var13;
        var8.style = var11;
        var11 = 13;
        var13 = var12[var11];
        var13 = var16.bind(var3)(var13);
        var15 = var13.intl;
        var13 = var15.string;
        var11 = var12[var11];
        var11 = var16.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.kejaOD;
        var11 = var13.bind(var15)(var11);
        var8.children = var11;
        var9 = var10.bind(var3)(var9, var8);
        var8 = new Array(3);
        var8[0] = var9;
        var13 = _closure1_slot9;
        var11 = _closure1_slot1;
        var9 = 11;
        var9 = var12[var9];
        var10 = var11.bind(var3)(var9);
        var9 = {};
        var15 = 3;
        var9.size = var15;
        var9 = var13.bind(var3)(var10, var9);
        var8[1] = var9;
        var13 = _closure1_slot9;
        var10 = _closure1_slot6;
        var9 = {};
        var14 = var14.viewEntireTemplateFooterUnderline;
        var9.style = var14;
        var9 = var13.bind(var3)(var10, var9);
        var8[2] = var9;
        var4.children = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot9;
        var6 = _closure1_slot6;
        var5 = {};
        var10 = 14;
        var8 = var12[var10];
        var9 = var11.bind(var3)(var8);
        var8 = {};
        var10 = var12[var10];
        var10 = var11.bind(var3)(var10);
        var10 = var10.Sizes;
        var10 = var10.REFRESH_SMALL_16;
        var8.size = var10;
        var10 = 15;
        var10 = var12[var10];
        var10 = var11.bind(var3)(var10);
        var8.source = var10;
        var10 = {};
        var12 = {};
        var11 = '180deg';
        var12.rotate = var11;
        var11 = new Array(1);
        var11[0] = var12;
        var10.transform = var11;
        var8.style = var10;
        var8 = var7.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var12 = 0;
    var1 = var6[var12];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.TouchableOpacity;
    var _closure1_slot5 = var4;
    var1 = var1.View;
    var _closure1_slot6 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.AnalyticEvents;
    var _closure1_slot7 = var4;
    var1 = var1.GuildSettingsSections;
    var _closure1_slot8 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot9 = var4;
    var1 = var1.jsxs;
    var _closure1_slot10 = var1;
    var1 = 4;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var13 = 16;
    var9.padding = var13;
    var10 = 5;
    var1 = var6[var10];
    var1 = var11.bind(var0)(var1);
    var1 = var1.radii;
    var1 = var1.md;
    var9.borderRadius = var1;
    var1 = var6[var10];
    var1 = var11.bind(var0)(var1);
    var1 = var1.colors;
    var1 = var1.BACKGROUND_MOD_NORMAL;
    var9.backgroundColor = var1;
    var1 = 319;
    var9.width = var1;
    var4.container = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_SUBTLE;
    var9.color = var14;
    var4.subscriptionPlanTextStyle = var9;
    var9 = {
        'color': null,
        'paddingTop': 8,
        'paddingBottom': 16
    };
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_MUTED;
    var9.color = var14;
    var4.descriptionPlanTextStyle = var9;
    var9 = {
        'width': '100%',
        'height': 1,
        'backgroundColor': null,
        'marginVertical': 16
    };
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_BACKGROUND_HOVER;
    var9.backgroundColor = var14;
    var4.separator = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var14;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9.borderTopRightRadius = var14;
    var14 = var6[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9.borderTopLeftRadius = var14;
    var9.padding = var13;
    var9.paddingBottom = var12;
    var4.contentContainer = var9;
    var9 = {};
    var12 = 'uppercase';
    var9.textTransform = var12;
    var4.contentHeader = var9;
    var9 = {
        'paddingVertical': 16,
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center',
        'alignItems': 'center',
        'backgroundColor': null,
        'borderBottomLeftRadius': null,
        'borderBottomRightRadius': null,
        'marginLeft': 4294967280,
        'marginRight': 4294967280,
        'marginTop': 16
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderBottomLeftRadius = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderBottomRightRadius = var12;
    var4.viewEntireTemplateFooter = var9;
    var9 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'height': 1,
        'bottom': 0
    };
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var10;
    var4.viewEntireTemplateFooterUnderline = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun117025: for (var _fun117025_ip = 0;;) switch (_fun117025_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.template;
                var _closure2_slot0 = var10;
                var13 = var0.priceTiers;
                var11 = var0.guildId;
                var _closure2_slot1 = var11;
                var15 = var0.groupListingId;
                var _closure2_slot2 = var15;
                var7 = var0.editGroupId;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var0 = _closure1_slot11;
                var8 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var4 = _closure1_slot3;
                var0 = 16;
                var0 = var4[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useNavigation;
                var0 = var0.bind(var2)();
                var _closure2_slot3 = var0;
                var5 = _closure1_slot2;
                var2 = 17;
                var2 = var4[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.useEditStateIds;
                var2 = {};
                var14 = true;
                var2.includeSoftDeleted = var14;
                var2 = var5.bind(var6)(var15, var7, var2);
                var16 = var2.addNewEditStateFromTemplate;
                var _closure2_slot4 = var16;
                var5 = var10.listings;
                var2 = 0;
                var5 = var5[var2];
                var7 = var5.price_tier;
                var6 = var5.channels;
                var5 = var5.additional_perks;
                var17 = var6.length;
                var23 = var5.length;
                var28 = var6[var2];
                var24 = var5[var2];
                var14 = _closure1_slot4;
                var6 = var14.useCallback;
                var5 = new Array(4);
                var5[0] = var16;
                var5[1] = var15;
                var5[2] = var0;
                var5[3] = var11;
                var0 = function(arg0, arg1) { // Environment: var12
                    _fun117026: for (var _fun117026_ip = 0;;) switch (_fun117026_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 18;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var2);
                            var4 = var5.stashTemplateChannels;
                            var2 = _closure2_slot1;
                            var2 = var4.bind(var5)(var3, var2);
                            var2 = _closure2_slot4;
                            var5 = var2.bind(var0)(var3);
                            var2 = arg1;
                            if (!var2) {
                                _fun117026_ip = 92;
                                continue _fun117026
                            }
                        case 62:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var2 = 7;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
                        case 92:
                            var3 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var2 = 19;
                            var2 = var10[var2];
                            var7 = var3.bind(var0)(var2);
                            var4 = var7.track;
                            var2 = _closure1_slot7;
                            var3 = var2.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
                            var2 = {};
                            var8 = 'template_selected';
                            var2.exit_reason = var8;
                            var9 = _closure1_slot0;
                            var8 = 20;
                            var8 = var10[var8];
                            var10 = var9.bind(var0)(var8);
                            var9 = var10.collectGuildAnalyticsMetadata;
                            var8 = _closure2_slot1;
                            var11 = var9.bind(var10)(var8);
                            var12 = var2;
                            var8 = copyDataProperties(var12, var11);
                            var2 = var4.bind(var7)(var3, var2);
                            var4 = _closure2_slot3;
                            var3 = var4.replace;
                            var1 = _closure1_slot8;
                            var2 = var1.ROLE_SUBSCRIPTIONS_TIER_EDIT;
                            var1 = {};
                            var6 = _closure2_slot2;
                            var1.groupListingId = var6;
                            var1.initialEditStateId = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var6 = var6.bind(var14)(var0, var5);
                var _closure2_slot5 = var6;
                var0 = 21;
                var0 = var4[var0];
                var5 = var1.bind(var3)(var0);
                var4 = var5.useSuggestedUnusedPrices;
                var0 = null;
                var14 = var0 != var13;
                var1 = undefined;
                if (!var14) {
                    _fun117025_ip = 279;
                    continue _fun117025
                }
            case 276:
                var1 = var13;
            case 279:
                var5 = var4.bind(var5)(var11, var1, var7);
                _closure2_slot6 = var5;
                var0 = var0 != var5;
                if (!var0) {
                    _fun117025_ip = 306;
                    continue _fun117025
                }
            case 297:
                var1 = var5.length;
                var0 = var1 > var2;
            case 306:
                _closure2_slot7 = var0;
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var0;
                var0 = function(arg0, arg1) { // Environment: var12
                    _fun117027: for (var _fun117027_ip = 0;;) switch (_fun117027_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = _closure2_slot7;
                            var5 = _closure2_slot5;
                            if (var1) {
                                _fun117027_ip = 30;
                                continue _fun117027
                            }
                        case 17:
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var5.bind(var2)(var6, var1);
                            _fun117027_ip = 129;
                            continue _fun117027;
                        case 30:
                            var0 = _closure2_slot6;
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var3 = 7;
                            var3 = var1[var3];
                            var8 = undefined;
                            var4 = var4.bind(var8)(var3);
                            var3 = var4.openLazy;
                            var7 = _closure1_slot0;
                            var2 = 9;
                            var2 = var1[var2];
                            var7 = var7.bind(var8)(var2);
                            var2 = 10;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var7.bind(var8)(var2, var1);
                            var1 = {};
                            var1.selectedTemplate = var6;
                            var1.handleCreateFromTemplate = var5;
                            var1.newPricesToPick = var0;
                            var0 = 'TierTemplatePriceReselectionCard';
                            var0 = var3.bind(var4)(var2, var0, var1);
                        case 129:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var2.bind(var4)(var0, var1);
                _closure2_slot8 = var7;
                var2 = _closure1_slot10;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var8.container;
                var0.style = var4;
                var6 = _closure1_slot9;
                var27 = _closure1_slot0;
                var21 = _closure1_slot3;
                var4 = 22;
                var4 = var21[var4];
                var4 = var27.bind(var3)(var4);
                var5 = var4.GuildRoleSubscriptionTierTemplateBasicInfo;
                var4 = {};
                var4.template = var10;
                var4.handleSelectTemplateInPreview = var7;
                var7 = var8.subscriptionPlanTextStyle;
                var4.subscriptionPlanTextStyle = var7;
                var7 = var8.descriptionPlanTextStyle;
                var4.descriptionTextStyle = var7;
                var7 = false;
                var4.closeActionSheet = var7;
                var7 = {
                    'numberOfLines': 2,
                    'ellipsizeMode': 'tail'
                };
                var4.descriptionTextProps = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var8.contentContainer;
                var5.style = var8;
                var8 = function() {
                    var7 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var1 = _closure2_slot8;
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 7;
                    var4 = var2[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.openLazy;
                    var8 = _closure1_slot0;
                    var3 = 9;
                    var3 = var2[var3];
                    var8 = var8.bind(var0)(var3);
                    var3 = 8;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var8.bind(var0)(var3, var2);
                    var2 = {};
                    var2.template = var7;
                    var2.guildId = var6;
                    var2.handleSelectTemplateInPreview = var1;
                    var1 = 'TierTemplateCard';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var5.onPress = var8;
                var11 = _closure1_slot10;
                var8 = 23;
                var8 = var21[var8];
                var8 = var27.bind(var3)(var8);
                var10 = var8.GappedList;
                var8 = {};
                var12 = function() {
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot13;
                    var1 = undefined;
                    var0 = {};
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var8.renderGap = var12;
                var14 = _closure1_slot10;
                var13 = _closure1_slot6;
                var12 = {};
                var16 = _closure1_slot9;
                var22 = _closure1_slot12;
                var15 = {};
                var26 = 13;
                var18 = var21[var26];
                var18 = var27.bind(var3)(var18);
                var25 = var18.intl;
                var20 = var25.formatToPlainString;
                var18 = var21[var26];
                var18 = var27.bind(var3)(var18);
                var18 = var18.t;
                var19 = var18.y7dUrm;
                var18 = {};
                var18.numChannels = var17;
                var18 = var20.bind(var25)(var19, var18);
                var15.title = var18;
                var15.count = var17;
                var16 = var16.bind(var3)(var22, var15);
                var15 = new Array(4);
                var15[0] = var16;
                var20 = _closure1_slot9;
                var18 = _closure1_slot1;
                var17 = 11;
                var16 = var21[var17];
                var19 = var18.bind(var3)(var16);
                var16 = {};
                var25 = 12;
                var16.size = var25;
                var16 = var20.bind(var3)(var19, var16);
                var15[1] = var16;
                var20 = _closure1_slot9;
                var19 = _closure1_slot15;
                var16 = {};
                var16.channel = var28;
                var16 = var20.bind(var3)(var19, var16);
                var15[2] = var16;
                var28 = _closure1_slot9;
                var16 = var21[var17];
                var19 = var18.bind(var3)(var16);
                var16 = {};
                var20 = 6;
                var16.size = var20;
                var16 = var28.bind(var3)(var19, var16);
                var15[3] = var16;
                var12.children = var15;
                var13 = var14.bind(var3)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var15 = _closure1_slot10;
                var14 = _closure1_slot6;
                var13 = {};
                var19 = _closure1_slot9;
                var16 = {};
                var28 = var21[var26];
                var28 = var27.bind(var3)(var28);
                var29 = var28.intl;
                var28 = var29.formatToPlainString;
                var26 = var21[var26];
                var26 = var27.bind(var3)(var26);
                var26 = var26.t;
                var27 = var26.MR7oOF;
                var26 = {};
                var26.numBenefits = var23;
                var26 = var28.bind(var29)(var27, var26);
                var16.title = var26;
                var16.count = var23;
                var19 = var19.bind(var3)(var22, var16);
                var16 = new Array(4);
                var16[0] = var19;
                var23 = _closure1_slot9;
                var19 = var21[var17];
                var22 = var18.bind(var3)(var19);
                var19 = {};
                var19.size = var25;
                var19 = var23.bind(var3)(var22, var19);
                var16[1] = var19;
                var23 = _closure1_slot9;
                var22 = _closure1_slot14;
                var19 = {};
                var25 = var24.name;
                var19.title = var25;
                var24 = var24.description;
                var19.description = var24;
                var19 = var23.bind(var3)(var22, var19);
                var16[2] = var19;
                var19 = _closure1_slot9;
                var17 = var21[var17];
                var18 = var18.bind(var3)(var17);
                var17 = {};
                var17.size = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[3] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var8.children = var12;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot9;
                var10 = _closure1_slot16;
                var9 = {};
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.CARD_WIDTH = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 3941, 3278, 14932, 1307, 14936, 9282, 14935, 1234, 4086, 8676, 1469, 10825, 14937, 795, 4302, 10831, 14933, 9344, 2]);