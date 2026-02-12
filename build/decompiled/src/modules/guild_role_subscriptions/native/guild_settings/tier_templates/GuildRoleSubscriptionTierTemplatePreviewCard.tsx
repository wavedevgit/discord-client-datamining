// modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var4 = metroImportAll;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun117778: for (var _fun117778_ip = 0;;) switch (_fun117778_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.title;
                var8 = var0.description;
                var3 = _closure1_slot10;
                var2 = _closure1_slot6;
                var1 = {};
                var6 = 'string';
                var4 = typeof var10;
                var5 = var10;
                if (!(var6 === var4)) {
                    _fun117778_ip = 95;
                    continue _fun117778
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
                var5 = var9.bind(var7)(var6, var4);
            case 95:
                var4 = new Array(3);
                var4[0] = var5;
                var5 = _closure1_slot12;
                var4[1] = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 6;
                var5 = var5[var0];
                var0 = undefined;
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
    var _closure1_slot22 = var0;
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
        var7 = _closure1_slot13;
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
        var1 = _closure1_slot22;
        var0 = {};
        var0.title = var5;
        var0.description = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var16 = 0;
    var1 = var6[var16];
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
    var13 = 2;
    var1 = var6[var13];
    var1 = var5.bind(var0)(var1);
    var4 = var1.AnalyticEvents;
    var _closure1_slot7 = var4;
    var1 = var1.GuildSettingsSections;
    var _closure1_slot8 = var1;
    var11 = 3;
    var1 = var6[var11];
    var1 = var5.bind(var0)(var1);
    var8 = var1.jsx;
    var _closure1_slot9 = var8;
    var1 = var1.jsxs;
    var _closure1_slot10 = var1;
    var12 = 4;
    var1 = var6[var12];
    var10 = var5.bind(var0)(var1);
    var9 = var10.createStyles;
    var4 = {};
    var14 = {};
    var17 = 16;
    var14.padding = var17;
    var15 = 5;
    var1 = var6[var15];
    var1 = var7.bind(var0)(var1);
    var1 = var1.radii;
    var1 = var1.md;
    var14.borderRadius = var1;
    var1 = var6[var15];
    var1 = var7.bind(var0)(var1);
    var1 = var1.colors;
    var1 = var1.BACKGROUND_MOD_NORMAL;
    var14.backgroundColor = var1;
    var1 = 319;
    var14.width = var1;
    var4.container = var14;
    var14 = {};
    var18 = var6[var15];
    var18 = var7.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_SUBTLE;
    var14.color = var18;
    var4.subscriptionPlanTextStyle = var14;
    var14 = {
        'color': null,
        'paddingTop': 8,
        'paddingBottom': 16
    };
    var18 = var6[var15];
    var18 = var7.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_MUTED;
    var14.color = var18;
    var4.descriptionPlanTextStyle = var14;
    var14 = {
        'width': '100%',
        'height': 1,
        'backgroundColor': null,
        'marginVertical': 16
    };
    var18 = var6[var15];
    var18 = var7.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.INTERACTIVE_BACKGROUND_HOVER;
    var14.backgroundColor = var18;
    var4.separator = var14;
    var14 = {};
    var18 = var6[var15];
    var18 = var7.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_SURFACE_HIGH;
    var14.backgroundColor = var18;
    var18 = var6[var15];
    var18 = var7.bind(var0)(var18);
    var18 = var18.radii;
    var18 = var18.sm;
    var14.borderTopRightRadius = var18;
    var18 = var6[var15];
    var18 = var7.bind(var0)(var18);
    var18 = var18.radii;
    var18 = var18.sm;
    var14.borderTopLeftRadius = var18;
    var14.padding = var17;
    var14.paddingBottom = var16;
    var4.contentContainer = var14;
    var14 = {};
    var16 = 'uppercase';
    var14.textTransform = var16;
    var4.contentHeader = var14;
    var14 = {
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
    var16 = var6[var15];
    var16 = var7.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOW;
    var14.backgroundColor = var16;
    var16 = var6[var15];
    var16 = var7.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var14.borderBottomLeftRadius = var16;
    var16 = var6[var15];
    var16 = var7.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.sm;
    var14.borderBottomRightRadius = var16;
    var4.viewEntireTemplateFooter = var14;
    var14 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'height': 1,
        'bottom': 0
    };
    var15 = var6[var15];
    var15 = var7.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MOD_MUTED;
    var14.backgroundColor = var15;
    var4.viewEntireTemplateFooterUnderline = var14;
    var4 = var9.bind(var10)(var4);
    var _closure1_slot11 = var4;
    var4 = 11;
    var9 = var6[var4];
    var10 = var7.bind(var0)(var9);
    var9 = {};
    var9.size = var13;
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot12 = var9;
    var9 = var6[var4];
    var10 = var7.bind(var0)(var9);
    var9 = {};
    var9.size = var12;
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot13 = var9;
    var9 = var6[var4];
    var10 = var7.bind(var0)(var9);
    var9 = {};
    var9.size = var11;
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot14 = var9;
    var10 = function() {
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
    var9 = {};
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot15 = var9;
    var9 = var6[var4];
    var10 = var7.bind(var0)(var9);
    var9 = {};
    var12 = 12;
    var9.size = var12;
    var9 = var8.bind(var0)(var10, var9);
    var _closure1_slot16 = var9;
    var9 = var6[var4];
    var11 = var7.bind(var0)(var9);
    var10 = {};
    var9 = 6;
    var10.size = var9;
    var10 = var8.bind(var0)(var11, var10);
    var _closure1_slot17 = var10;
    var10 = var6[var4];
    var11 = var7.bind(var0)(var10);
    var10 = {};
    var10.size = var12;
    var10 = var8.bind(var0)(var11, var10);
    var _closure1_slot18 = var10;
    var4 = var6[var4];
    var7 = var7.bind(var0)(var4);
    var4 = {};
    var4.size = var9;
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot19 = var4;
    var7 = function() {
        var0 = _closure1_slot11;
        var3 = undefined;
        var13 = var0.bind(var3)();
        var2 = _closure1_slot10;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var13.viewEntireTemplateFooter;
        var0.style = var4;
        var6 = _closure1_slot10;
        var5 = _closure1_slot6;
        var4 = {};
        var10 = _closure1_slot9;
        var16 = _closure1_slot0;
        var12 = _closure1_slot3;
        var7 = 6;
        var7 = var12[var7];
        var7 = var16.bind(var3)(var7);
        var9 = var7.Text;
        var7 = {
            'variant': 'text-sm/semibold',
            'color': 'interactive-text-hover'
        };
        var11 = {};
        var14 = -1;
        var11.marginTop = var14;
        var7.style = var11;
        var11 = 13;
        var14 = var12[var11];
        var14 = var16.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var11 = var12[var11];
        var11 = var16.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.kejaOD;
        var11 = var14.bind(var15)(var11);
        var7.children = var11;
        var9 = var10.bind(var3)(var9, var7);
        var7 = new Array(3);
        var7[0] = var9;
        var9 = _closure1_slot14;
        var7[1] = var9;
        var11 = _closure1_slot9;
        var10 = _closure1_slot6;
        var9 = {};
        var13 = var13.viewEntireTemplateFooterUnderline;
        var9.style = var13;
        var9 = var11.bind(var3)(var10, var9);
        var7[2] = var9;
        var4.children = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot9;
        var6 = _closure1_slot6;
        var5 = {};
        var11 = _closure1_slot1;
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
    var4 = {};
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot20 = var4;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun117781: for (var _fun117781_ip = 0;;) switch (_fun117781_ip) {
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
                var19 = var5.length;
                var24 = var6[var2];
                var20 = var5[var2];
                var14 = _closure1_slot4;
                var6 = var14.useCallback;
                var5 = new Array(4);
                var5[0] = var16;
                var5[1] = var15;
                var5[2] = var0;
                var5[3] = var11;
                var0 = function(arg0, arg1) { // Environment: var12
                    _fun117782: for (var _fun117782_ip = 0;;) switch (_fun117782_ip) {
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
                                _fun117782_ip = 92;
                                continue _fun117782
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
                    _fun117781_ip = 279;
                    continue _fun117781
                }
            case 276:
                var1 = var13;
            case 279:
                var5 = var4.bind(var5)(var11, var1, var7);
                _closure2_slot6 = var5;
                var0 = var0 != var5;
                if (!var0) {
                    _fun117781_ip = 306;
                    continue _fun117781
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
                    _fun117783: for (var _fun117783_ip = 0;;) switch (_fun117783_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = _closure2_slot7;
                            var5 = _closure2_slot5;
                            if (var1) {
                                _fun117783_ip = 30;
                                continue _fun117783
                            }
                        case 17:
                            var2 = undefined;
                            var1 = arg1;
                            var1 = var5.bind(var2)(var6, var1);
                            _fun117783_ip = 129;
                            continue _fun117783;
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
                var22 = _closure1_slot0;
                var25 = _closure1_slot3;
                var4 = 22;
                var4 = var25[var4];
                var4 = var22.bind(var3)(var4);
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
                var8 = var25[var8];
                var8 = var22.bind(var3)(var8);
                var10 = var8.GappedList;
                var8 = {};
                var12 = function() {
                    var0 = _closure1_slot15;
                    return var0;
                };
                var8.renderGap = var12;
                var14 = _closure1_slot10;
                var13 = _closure1_slot6;
                var12 = {};
                var16 = _closure1_slot9;
                var18 = _closure1_slot21;
                var15 = {};
                var21 = 13;
                var23 = var25[var21];
                var23 = var22.bind(var3)(var23);
                var28 = var23.intl;
                var27 = var28.formatToPlainString;
                var23 = var25[var21];
                var23 = var22.bind(var3)(var23);
                var23 = var23.t;
                var26 = var23.y7dUrm;
                var23 = {};
                var23.numChannels = var17;
                var23 = var27.bind(var28)(var26, var23);
                var15.title = var23;
                var15.count = var17;
                var16 = var16.bind(var3)(var18, var15);
                var15 = new Array(4);
                var15[0] = var16;
                var16 = _closure1_slot16;
                var15[1] = var16;
                var23 = _closure1_slot9;
                var17 = _closure1_slot23;
                var16 = {};
                var16.channel = var24;
                var16 = var23.bind(var3)(var17, var16);
                var15[2] = var16;
                var16 = _closure1_slot17;
                var15[3] = var16;
                var12.children = var15;
                var13 = var14.bind(var3)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var15 = _closure1_slot10;
                var14 = _closure1_slot6;
                var13 = {};
                var17 = _closure1_slot9;
                var16 = {};
                var23 = var25[var21];
                var23 = var22.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.formatToPlainString;
                var21 = var25[var21];
                var21 = var22.bind(var3)(var21);
                var21 = var21.t;
                var22 = var21.MR7oOF;
                var21 = {};
                var21.numBenefits = var19;
                var21 = var23.bind(var24)(var22, var21);
                var16.title = var21;
                var16.count = var19;
                var17 = var17.bind(var3)(var18, var16);
                var16 = new Array(4);
                var16[0] = var17;
                var17 = _closure1_slot18;
                var16[1] = var17;
                var19 = _closure1_slot9;
                var18 = _closure1_slot22;
                var17 = {};
                var21 = var20.name;
                var17.title = var21;
                var20 = var20.description;
                var17.description = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[2] = var17;
                var17 = _closure1_slot19;
                var16[3] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var8.children = var12;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var9 = _closure1_slot20;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 3938, 3279, 15021, 1307, 15025, 8880, 15024, 1234, 4092, 9866, 1469, 10678, 15026, 795, 4308, 10684, 15022, 9356, 2]);