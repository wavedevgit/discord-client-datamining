// modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildSettingsRoleSubscriptionTierTemplateSelection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        _fun117761: for (var _fun117761_ip = 0;;) switch (_fun117761_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.templates;
                var0 = var1.loading;
                var7 = var1.error;
                var3 = var1.guildId;
                var _closure2_slot0 = var3;
                var1 = var1.groupListingId;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot17;
                var4 = undefined;
                var5 = var2.bind(var4)();
                var2 = _closure1_slot11;
                var2 = var2.bind(var4)(var3);
                var2 = var2.tiers;
                var _closure2_slot2 = var2;
                if (var0) {
                    _fun117761_ip = 330;
                    continue _fun117761
                }
            case 79:
                var6 = null;
                if (!(var6 == var7)) {
                    _fun117761_ip = 256;
                    continue _fun117761
                }
            case 88:
                var2 = var6 == var9;
                var0 = null;
                if (var2) {
                    _fun117761_ip = 254;
                    continue _fun117761
                }
            case 100:
                var3 = var9.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun117761_ip = 254;
                    continue _fun117761
                }
            case 116:
                var6 = _closure1_slot14;
                var3 = _closure1_slot9;
                var2 = {};
                var2.data = var9;
                var9 = true;
                var2.horizontal = var9;
                var9 = {};
                var10 = _closure1_slot16;
                var9.paddingLeft = var10;
                var10 = _closure1_slot16;
                var9.paddingRight = var10;
                var2.contentContainerStyle = var9;
                var9 = function arg0() {
                    var0 = arg0;
                    var0 = var0.category;
                    return var0;
                };
                var2.keyExtractor = var9;
                var9 = function() {
                    var3 = _closure1_slot14;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var0 = {};
                    var5 = '100%';
                    var0.height = var5;
                    var4 = _closure1_slot16;
                    var0.width = var4;
                    var1.style = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var2.ItemSeparatorComponent = var9;
                var9 = 'fast';
                var2.decelerationRate = var9;
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var9 = 10;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.CARD_WIDTH;
                var9 = _closure1_slot16;
                var9 = var10 + var9;
                var2.snapToInterval = var9;
                var8 = function arg0() {
                    var0 = arg0;
                    var4 = var0.item;
                    var3 = _closure1_slot14;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 10;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0.template = var4;
                    var4 = _closure2_slot2;
                    var0.priceTiers = var4;
                    var4 = _closure2_slot0;
                    var0.guildId = var4;
                    var5 = _closure2_slot1;
                    var0.groupListingId = var5;
                    var0.editGroupId = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var2.renderItem = var8;
                var0 = var6.bind(var4)(var3, var2);
            case 254:
                _fun117761_ip = 328;
                continue _fun117761;
            case 256:
                var6 = _closure1_slot15;
                var3 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 9;
                var2 = var8[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-feedback-critical'
                };
                var8 = var7.message;
                var7 = ['Error: '];
                var7[1] = var8;
                var2.children = var7;
                var0 = var6.bind(var4)(var3, var2);
            case 328:
                _fun117761_ip = 361;
                continue _fun117761;
            case 330:
                var3 = _closure1_slot14;
                var2 = _closure1_slot6;
                var1 = {};
                var5 = var5.activityIndicator;
                var5 = var5.color;
                var1.color = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 361:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun117765: for (var _fun117765_ip = 0;;) switch (_fun117765_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.guildId;
                var _closure2_slot0 = var12;
                var11 = var1.groupListingId;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var1 = _closure1_slot17;
                var21 = var1.bind(var3)();
                var _closure2_slot1 = var21;
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 12;
                var1 = var6[var1];
                var7 = var5.bind(var3)(var1);
                var4 = var7.useStateFromStores;
                var1 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot10;
                    var1 = var2.getTemplates;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var4.bind(var7)(var2, var1);
                var _closure2_slot2 = var16;
                var1 = 13;
                var1 = var6[var1];
                var2 = var5.bind(var3)(var1);
                var1 = var2.useGroupListingsForGuild;
                var1 = var1.bind(var2)(var12);
                var2 = 0;
                var4 = var1[var2];
                var1 = 14;
                var1 = var6[var1];
                var5 = var5.bind(var3)(var1);
                var1 = var5.useGroupListingsFetchContext;
                var15 = var1.bind(var5)();
                var1 = null;
                if (!(var1 == var11)) {
                    _fun117765_ip = 185;
                    continue _fun117765
                }
            case 168:
                var5 = var1 == var4;
                var1 = undefined;
                if (var5) {
                    _fun117765_ip = 182;
                    continue _fun117765
                }
            case 177:
                var1 = var4.id;
            case 182:
                var11 = var1;
            case 185:
                _closure2_slot3 = var11;
                var1 = _closure1_slot1;
                var19 = _closure1_slot3;
                var4 = 15;
                var4 = var19[var4];
                var5 = var1.bind(var3)(var4);
                var6 = _closure1_slot2;
                var4 = 16;
                var4 = var19[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.getTemplates;
                var6 = var5.bind(var3)(var4);
                var5 = _closure1_slot4;
                var4 = 2;
                var5 = var5.bind(var3)(var6, var4);
                var2 = var5[var2];
                _closure2_slot4 = var2;
                var4 = 1;
                var4 = var5[var4];
                var14 = var4.loading;
                var13 = var4.error;
                var4 = 17;
                var4 = var19[var4];
                var4 = var1.bind(var3)(var4);
                var4 = var4.bind(var3)();
                var17 = var4.bottom;
                var25 = _closure1_slot0;
                var4 = 18;
                var4 = var19[var4];
                var5 = var25.bind(var3)(var4);
                var4 = var5.useNavigation;
                var10 = var4.bind(var5)();
                _closure2_slot5 = var10;
                var4 = 19;
                var4 = var19[var4];
                var5 = var25.bind(var3)(var4);
                var4 = var5.useShowCreatorPortalLinkForTierTemplates;
                var9 = var4.bind(var5)(var12);
                var6 = _closure1_slot5;
                var5 = var6.useEffect;
                var4 = new Array(3);
                var4[0] = var2;
                var4[1] = var12;
                var4[2] = var16;
                var2 = function() { // Environment: var0
                    _fun117767: for (var _fun117767_ip = 0;;) switch (_fun117767_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun117767_ip = 31;
                                continue _fun117767
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var2 !== var3;
                        case 31:
                            if (var1) {
                                _fun117767_ip = 49;
                                continue _fun117767
                            }
                        case 34:
                            var2 = _closure2_slot4;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 49:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var2, var4);
                var6 = _closure1_slot5;
                var5 = var6.useCallback;
                var4 = new Array(1);
                var4[0] = var12;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var0 = 20;
                    var1 = var7[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot12;
                    var2 = var1.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
                    var1 = {};
                    var6 = 'voluntarily_exit';
                    var1.exit_reason = var6;
                    var6 = _closure1_slot0;
                    var5 = 21;
                    var5 = var7[var5];
                    var7 = var6.bind(var0)(var5);
                    var6 = var7.collectGuildAnalyticsMetadata;
                    var5 = _closure2_slot0;
                    var8 = var6.bind(var7)(var5);
                    var9 = var1;
                    var5 = copyDataProperties(var9, var8);
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var6 = var5.bind(var6)(var2, var4);
                _closure2_slot6 = var6;
                var7 = _closure1_slot5;
                var5 = var7.useCallback;
                var4 = new Array(3);
                var4[0] = var12;
                var4[1] = var11;
                var4[2] = var10;
                var2 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 20;
                    var2 = var3[var0];
                    var0 = undefined;
                    var8 = var4.bind(var0)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot12;
                    var6 = var2.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
                    var2 = {};
                    var4 = 'create_from_scratch';
                    var2.exit_reason = var4;
                    var5 = _closure1_slot0;
                    var4 = 21;
                    var4 = var3[var4];
                    var10 = var5.bind(var0)(var4);
                    var9 = var10.collectGuildAnalyticsMetadata;
                    var5 = _closure2_slot0;
                    var11 = var9.bind(var10)(var5);
                    var12 = var2;
                    var9 = copyDataProperties(var12, var11);
                    var2 = var7.bind(var8)(var6, var2);
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openTierCreationModal;
                    var1 = {};
                    var1.guildId = var5;
                    var4 = _closure2_slot3;
                    var1.groupListingId = var4;
                    var4 = function() {
                        var2 = _closure2_slot5;
                        var1 = var2.navigate;
                        var0 = _closure1_slot13;
                        var0 = var0.ROLE_SUBSCRIPTIONS_TIERS;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1.onAfterTierCreation = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7 = var5.bind(var7)(var2, var4);
                _closure2_slot7 = var7;
                var5 = _closure1_slot5;
                var4 = var5.useLayoutEffect;
                var2 = new Array(4);
                var2[0] = var10;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var21;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot5;
                    var2 = var3.setOptions;
                    var1 = {};
                    var5 = function() {
                        var3 = _closure1_slot15;
                        var2 = _closure1_slot7;
                        var1 = {};
                        var4 = _closure2_slot7;
                        var1.onPress = var4;
                        var11 = _closure2_slot1;
                        var0 = var11.startFromScratch;
                        var1.style = var0;
                        var0 = 0.5;
                        var1.activeOpacity = var0;
                        var7 = _closure1_slot14;
                        var6 = _closure1_slot8;
                        var4 = {};
                        var0 = var11.editIcon;
                        var4.style = var0;
                        var10 = _closure1_slot14;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var0 = 23;
                        var8 = var14[var0];
                        var0 = undefined;
                        var8 = var13.bind(var0)(var8);
                        var9 = var8.PencilIcon;
                        var8 = {};
                        var11 = var11.editIcon;
                        var11 = var11.color;
                        var8.color = var11;
                        var11 = 'xs';
                        var8.size = var11;
                        var8 = var10.bind(var0)(var9, var8);
                        var4.children = var8;
                        var6 = var7.bind(var0)(var6, var4);
                        var4 = new Array(2);
                        var4[0] = var6;
                        var7 = _closure1_slot14;
                        var6 = _closure1_slot8;
                        var5 = {};
                        var8 = 9;
                        var8 = var14[var8];
                        var8 = var13.bind(var0)(var8);
                        var9 = var8.Text;
                        var8 = {
                            'variant': 'text-md/medium',
                            'color': 'interactive-text-active'
                        };
                        var10 = 24;
                        var11 = var14[var10];
                        var11 = var13.bind(var0)(var11);
                        var12 = var11.intl;
                        var11 = var12.string;
                        var10 = var14[var10];
                        var10 = var13.bind(var0)(var10);
                        var10 = var10.t;
                        var10 = var10.WNWtkB;
                        var10 = var11.bind(var12)(var10);
                        var8.children = var10;
                        var8 = var7.bind(var0)(var9, var8);
                        var5.children = var8;
                        var5 = var7.bind(var0)(var6, var5);
                        var4[1] = var5;
                        var1.children = var4;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var1.headerRight = var5;
                    var0 = function() {
                        var0 = _closure1_slot18;
                        return var0;
                    };
                    var1.headerTitle = var0;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var0 = 25;
                    var5 = var5[var0];
                    var0 = undefined;
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.getHeaderBackButton;
                    var4 = _closure2_slot6;
                    var4 = var5.bind(var6)(var4);
                    var1.headerLeft = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var4.bind(var5)(var0, var2);
                var0 = 26;
                var0 = var19[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var2 = 27;
                var4 = var19[var2];
                var4 = var25.bind(var3)(var4);
                var4 = var4.ImpressionTypes;
                var4 = var4.PAGE;
                var0.type = var4;
                var2 = var19[var2];
                var2 = var25.bind(var3)(var2);
                var2 = var2.ImpressionNames;
                var2 = var2.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR;
                var0.name = var2;
                var2 = {};
                var2.guild_id = var12;
                var0.properties = var2;
                var0 = var1.bind(var3)(var0);
                var2 = _closure1_slot14;
                var0 = 28;
                var0 = var19[var0];
                var0 = var25.bind(var3)(var0);
                var1 = var0.RoleSubscriptionSettingsDisabledContextProvider;
                var0 = {};
                var0.guildId = var12;
                var6 = _closure1_slot15;
                var5 = _closure1_slot8;
                var4 = {};
                var10 = var21.container;
                var7 = new Array(2);
                var7[0] = var10;
                var10 = {};
                var10.paddingBottom = var17;
                var7[1] = var10;
                var4.style = var7;
                var18 = _closure1_slot14;
                var10 = 9;
                var7 = var19[var10];
                var7 = var25.bind(var3)(var7);
                var17 = var7.Text;
                var7 = {};
                var20 = 'heading-xl/semibold';
                var7.variant = var20;
                var22 = var21.title;
                var20 = new Array(2);
                var20[0] = var22;
                var22 = var21.text;
                var20[1] = var22;
                var7.style = var20;
                var23 = 24;
                var20 = var19[var23];
                var20 = var25.bind(var3)(var20);
                var24 = var20.intl;
                var22 = var24.string;
                var20 = var19[var23];
                var20 = var25.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.uYFiKr;
                var20 = var22.bind(var24)(var20);
                var7.children = var20;
                var17 = var18.bind(var3)(var17, var7);
                var7 = new Array(7);
                var7[0] = var17;
                var17 = _closure1_slot19;
                var7[1] = var17;
                var18 = _closure1_slot14;
                var10 = var19[var10];
                var10 = var25.bind(var3)(var10);
                var17 = var10.Text;
                var10 = {};
                var22 = 'text-sm/medium';
                var10.variant = var22;
                var20 = var21.text;
                var10.style = var20;
                var20 = var19[var23];
                var20 = var25.bind(var3)(var20);
                var24 = var20.intl;
                var20 = var24.string;
                var19 = var19[var23];
                var19 = var25.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["ne+rg6"];
                var19 = var20.bind(var24)(var19);
                var10.children = var19;
                var10 = var18.bind(var3)(var17, var10);
                var7[2] = var10;
                var10 = _closure1_slot20;
                var7[3] = var10;
                if (!var9) {
                    _fun117765_ip = 1012;
                    continue _fun117765
                }
            case 897:
                var18 = _closure1_slot14;
                var20 = _closure1_slot0;
                var19 = _closure1_slot3;
                var10 = 29;
                var10 = var19[var10];
                var10 = var20.bind(var3)(var10);
                var17 = var10.TextWithIOSLinkWorkaround;
                var10 = {};
                var10.variant = var22;
                var21 = var21.text;
                var10.style = var21;
                var21 = var19[var23];
                var21 = var20.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.format;
                var19 = var19[var23];
                var19 = var20.bind(var3)(var19);
                var19 = var19.t;
                var20 = var19.iQML2g;
                var19 = {};
                var23 = 'https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons';
                var19.creatorPortalUrl = var23;
                var19 = var21.bind(var22)(var20, var19);
                var10.children = var19;
                var9 = var18.bind(var3)(var17, var10);
            case 1012:
                var7[4] = var9;
                var9 = _closure1_slot21;
                var7[5] = var9;
                var10 = _closure1_slot14;
                var9 = _closure1_slot22;
                var8 = {};
                var8.templates = var16;
                if (var14) {
                    _fun117765_ip = 1045;
                    continue _fun117765
                }
            case 1042:
                var14 = !var15;
            case 1045:
                var8.loading = var14;
                var8.error = var13;
                var8.guildId = var12;
                var8.groupListingId = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[6] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var _closure1_slot6 = var7;
    var7 = var3.TouchableOpacity;
    var _closure1_slot7 = var7;
    var8 = var3.View;
    var _closure1_slot8 = var8;
    var3 = var3.FlatList;
    var _closure1_slot9 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var13 = 4;
    var3 = var5[var13];
    var3 = var4.bind(var0)(var3);
    var3 = var3.usePriceTiers;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot12 = var7;
    var3 = var3.GuildSettingsSections;
    var _closure1_slot13 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot14 = var7;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var12 = 16;
    var _closure1_slot16 = var12;
    var3 = 7;
    var3 = var5[var3];
    var11 = var4.bind(var0)(var3);
    var9 = var11.createStyles;
    var3 = {};
    var10 = {};
    var10.marginTop = var12;
    var3.container = var10;
    var12 = {};
    var10 = 8;
    var14 = var5[var10];
    var14 = var6.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.MOBILE_TEXT_HEADING_PRIMARY;
    var12.color = var14;
    var3.title = var12;
    var12 = {
        'marginLeft': 16,
        'marginRight': 16
    };
    var3.text = var12;
    var12 = {};
    var14 = var5[var10];
    var14 = var6.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_TEXT_DEFAULT;
    var12.color = var14;
    var3.activityIndicator = var12;
    var12 = {};
    var14 = var5[var10];
    var14 = var6.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_TEXT_ACTIVE;
    var12.color = var14;
    var12.marginRight = var13;
    var3.editIcon = var12;
    var12 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginRight': 12
    };
    var3.startFromScratch = var12;
    var3 = var9.bind(var11)(var3);
    var _closure1_slot17 = var3;
    var3 = {};
    var3 = var7.bind(var0)(var8, var3);
    var _closure1_slot18 = var3;
    var3 = 11;
    var8 = var5[var3];
    var9 = var6.bind(var0)(var8);
    var8 = {};
    var8.size = var10;
    var8 = var7.bind(var0)(var9, var8);
    var _closure1_slot19 = var8;
    var8 = var5[var3];
    var9 = var6.bind(var0)(var8);
    var8 = {};
    var8.size = var10;
    var8 = var7.bind(var0)(var9, var8);
    var _closure1_slot20 = var8;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = {};
    var8 = 24;
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot21 = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildSettingsRoleSubscriptionTierTemplateSelection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var7 = arg0;
        var3 = _closure1_slot14;
        var1 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 14;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.GroupListingsFetchContextProvider;
        var0 = {};
        var5 = var7.guildId;
        var0.guildId = var5;
        var6 = _closure1_slot14;
        var5 = _closure1_slot23;
        var4 = {};
        var9 = var4;
        var8 = var7;
        var7 = copyDataProperties(var9, var8);
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 10685, 14785, 660, 33, 1297, 671, 3938, 15020, 8880, 632, 10663, 10664, 10666, 15026, 1568, 1469, 5692, 795, 4308, 14786, 7584, 1234, 5836, 5240, 481, 14765, 5384, 2]);