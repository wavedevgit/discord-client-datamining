// modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildSettingsRoleSubscriptionTierTemplateSelection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        _fun117005: for (var _fun117005_ip = 0;;) switch (_fun117005_ip) {
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
                    _fun117005_ip = 330;
                    continue _fun117005
                }
            case 79:
                var6 = null;
                if (!(var6 == var7)) {
                    _fun117005_ip = 256;
                    continue _fun117005
                }
            case 88:
                var2 = var6 == var9;
                var0 = null;
                if (var2) {
                    _fun117005_ip = 254;
                    continue _fun117005
                }
            case 100:
                var3 = var9.length;
                var2 = 0;
                var0 = null;
                if (!(var2 !== var3)) {
                    _fun117005_ip = 254;
                    continue _fun117005
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
                _fun117005_ip = 328;
                continue _fun117005;
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
                _fun117005_ip = 361;
                continue _fun117005;
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
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun117009: for (var _fun117009_ip = 0;;) switch (_fun117009_ip) {
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
                var22 = var1.bind(var3)();
                var _closure2_slot1 = var22;
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 11;
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
                var1 = 12;
                var1 = var6[var1];
                var2 = var5.bind(var3)(var1);
                var1 = var2.useGroupListingsForGuild;
                var2 = var1.bind(var2)(var12);
                var1 = 0;
                var4 = var2[var1];
                var2 = 13;
                var2 = var6[var2];
                var5 = var5.bind(var3)(var2);
                var2 = var5.useGroupListingsFetchContext;
                var15 = var2.bind(var5)();
                var2 = null;
                if (!(var2 == var11)) {
                    _fun117009_ip = 185;
                    continue _fun117009
                }
            case 168:
                var5 = var2 == var4;
                var2 = undefined;
                if (var5) {
                    _fun117009_ip = 182;
                    continue _fun117009
                }
            case 177:
                var2 = var4.id;
            case 182:
                var11 = var2;
            case 185:
                _closure2_slot3 = var11;
                var17 = _closure1_slot1;
                var10 = _closure1_slot3;
                var2 = 14;
                var2 = var10[var2];
                var4 = var17.bind(var3)(var2);
                var5 = _closure1_slot2;
                var2 = 15;
                var2 = var10[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.getTemplates;
                var5 = var4.bind(var3)(var2);
                var4 = _closure1_slot4;
                var2 = 2;
                var4 = var4.bind(var3)(var5, var2);
                var1 = var4[var1];
                _closure2_slot4 = var1;
                var2 = 1;
                var2 = var4[var2];
                var14 = var2.loading;
                var13 = var2.error;
                var2 = 16;
                var2 = var10[var2];
                var2 = var17.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var19 = var2.bottom;
                var29 = _closure1_slot0;
                var2 = 17;
                var2 = var10[var2];
                var4 = var29.bind(var3)(var2);
                var2 = var4.useNavigation;
                var7 = var2.bind(var4)();
                _closure2_slot5 = var7;
                var2 = 18;
                var2 = var10[var2];
                var4 = var29.bind(var3)(var2);
                var2 = var4.useShowCreatorPortalLinkForTierTemplates;
                var9 = var2.bind(var4)(var12);
                var5 = _closure1_slot5;
                var4 = var5.useEffect;
                var2 = new Array(3);
                var2[0] = var1;
                var2[1] = var12;
                var2[2] = var16;
                var1 = function() { // Environment: var0
                    _fun117011: for (var _fun117011_ip = 0;;) switch (_fun117011_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun117011_ip = 31;
                                continue _fun117011
                            }
                        case 16:
                            var2 = _closure2_slot2;
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var2 !== var3;
                        case 31:
                            if (var1) {
                                _fun117011_ip = 49;
                                continue _fun117011
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
                var1 = var4.bind(var5)(var1, var2);
                var5 = _closure1_slot5;
                var4 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var12;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var0 = 19;
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
                    var5 = 20;
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
                var5 = var4.bind(var5)(var1, var2);
                _closure2_slot6 = var5;
                var6 = _closure1_slot5;
                var4 = var6.useCallback;
                var2 = new Array(3);
                var2[0] = var12;
                var2[1] = var11;
                var2[2] = var7;
                var1 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 19;
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
                    var4 = 20;
                    var4 = var3[var4];
                    var10 = var5.bind(var0)(var4);
                    var9 = var10.collectGuildAnalyticsMetadata;
                    var5 = _closure2_slot0;
                    var11 = var9.bind(var10)(var5);
                    var12 = var2;
                    var9 = copyDataProperties(var12, var11);
                    var2 = var7.bind(var8)(var6, var2);
                    var2 = _closure1_slot2;
                    var1 = 21;
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
                var6 = var4.bind(var6)(var1, var2);
                _closure2_slot7 = var6;
                var4 = _closure1_slot5;
                var2 = var4.useLayoutEffect;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var22;
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
                        var0 = 22;
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
                        var10 = 23;
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
                        var3 = _closure1_slot14;
                        var2 = _closure1_slot8;
                        var1 = undefined;
                        var0 = {};
                        var0 = var3.bind(var1)(var2, var0);
                        return var0;
                    };
                    var1.headerTitle = var0;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var0 = 24;
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
                var0 = var2.bind(var4)(var0, var1);
                var0 = 25;
                var0 = var10[var0];
                var1 = var17.bind(var3)(var0);
                var0 = {};
                var2 = 26;
                var4 = var10[var2];
                var4 = var29.bind(var3)(var4);
                var4 = var4.ImpressionTypes;
                var4 = var4.PAGE;
                var0.type = var4;
                var2 = var10[var2];
                var2 = var29.bind(var3)(var2);
                var2 = var2.ImpressionNames;
                var2 = var2.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR;
                var0.name = var2;
                var2 = {};
                var2.guild_id = var12;
                var0.properties = var2;
                var0 = var1.bind(var3)(var0);
                var2 = _closure1_slot14;
                var0 = 27;
                var0 = var10[var0];
                var0 = var29.bind(var3)(var0);
                var1 = var0.RoleSubscriptionSettingsDisabledContextProvider;
                var0 = {};
                var0.guildId = var12;
                var6 = _closure1_slot15;
                var5 = _closure1_slot8;
                var4 = {};
                var18 = var22.container;
                var7 = new Array(2);
                var7[0] = var18;
                var18 = {};
                var18.paddingBottom = var19;
                var7[1] = var18;
                var4.style = var7;
                var20 = _closure1_slot14;
                var19 = 9;
                var7 = var10[var19];
                var7 = var29.bind(var3)(var7);
                var18 = var7.Text;
                var7 = {};
                var21 = 'heading-xl/semibold';
                var7.variant = var21;
                var23 = var22.title;
                var21 = new Array(2);
                var21[0] = var23;
                var23 = var22.text;
                var21[1] = var23;
                var7.style = var21;
                var24 = 23;
                var21 = var10[var24];
                var21 = var29.bind(var3)(var21);
                var25 = var21.intl;
                var23 = var25.string;
                var21 = var10[var24];
                var21 = var29.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.uYFiKr;
                var21 = var23.bind(var25)(var21);
                var7.children = var21;
                var18 = var20.bind(var3)(var18, var7);
                var7 = new Array(7);
                var7[0] = var18;
                var25 = _closure1_slot14;
                var18 = 28;
                var20 = var10[var18];
                var23 = var17.bind(var3)(var20);
                var21 = {};
                var20 = 8;
                var21.size = var20;
                var21 = var25.bind(var3)(var23, var21);
                var7[1] = var21;
                var25 = _closure1_slot14;
                var19 = var10[var19];
                var19 = var29.bind(var3)(var19);
                var21 = var19.Text;
                var19 = {};
                var23 = 'text-sm/medium';
                var19.variant = var23;
                var26 = var22.text;
                var19.style = var26;
                var26 = var10[var24];
                var26 = var29.bind(var3)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var26 = var10[var24];
                var26 = var29.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26["ne+rg6"];
                var26 = var27.bind(var28)(var26);
                var19.children = var26;
                var19 = var25.bind(var3)(var21, var19);
                var7[2] = var19;
                var19 = _closure1_slot14;
                var10 = var10[var18];
                var17 = var17.bind(var3)(var10);
                var10 = {};
                var10.size = var20;
                var10 = var19.bind(var3)(var17, var10);
                var7[3] = var10;
                if (!var9) {
                    _fun117009_ip = 1060;
                    continue _fun117009
                }
            case 945:
                var19 = _closure1_slot14;
                var21 = _closure1_slot0;
                var20 = _closure1_slot3;
                var10 = 29;
                var10 = var20[var10];
                var10 = var21.bind(var3)(var10);
                var17 = var10.TextWithIOSLinkWorkaround;
                var10 = {};
                var10.variant = var23;
                var22 = var22.text;
                var10.style = var22;
                var22 = var20[var24];
                var22 = var21.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.format;
                var20 = var20[var24];
                var20 = var21.bind(var3)(var20);
                var20 = var20.t;
                var21 = var20.iQML2g;
                var20 = {};
                var24 = 'https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons';
                var20.creatorPortalUrl = var24;
                var20 = var22.bind(var23)(var21, var20);
                var10.children = var20;
                var9 = var19.bind(var3)(var17, var10);
            case 1060:
                var7[4] = var9;
                var17 = _closure1_slot14;
                var10 = _closure1_slot1;
                var9 = _closure1_slot3;
                var9 = var9[var18];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var18 = 24;
                var9.size = var18;
                var9 = var17.bind(var3)(var10, var9);
                var7[5] = var9;
                var10 = _closure1_slot14;
                var9 = _closure1_slot18;
                var8 = {};
                var8.templates = var16;
                if (var14) {
                    _fun117009_ip = 1125;
                    continue _fun117009
                }
            case 1122:
                var14 = !var15;
            case 1125:
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
    var _closure1_slot19 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot6 = var6;
    var6 = var3.TouchableOpacity;
    var _closure1_slot7 = var6;
    var6 = var3.View;
    var _closure1_slot8 = var6;
    var3 = var3.FlatList;
    var _closure1_slot9 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.usePriceTiers;
    var _closure1_slot11 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot12 = var6;
    var3 = var3.GuildSettingsSections;
    var _closure1_slot13 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var10 = 16;
    var _closure1_slot16 = var10;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.marginTop = var10;
    var3.container = var8;
    var8 = {};
    var10 = 8;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var12;
    var3.title = var8;
    var8 = {
        'marginLeft': 16,
        'marginRight': 16
    };
    var3.text = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var8.color = var12;
    var3.activityIndicator = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_ACTIVE;
    var8.color = var10;
    var8.marginRight = var9;
    var3.editIcon = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginRight': 12
    };
    var3.startFromScratch = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot17 = var3;
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
        var0 = 13;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.GroupListingsFetchContextProvider;
        var0 = {};
        var5 = var7.guildId;
        var0.guildId = var5;
        var6 = _closure1_slot14;
        var5 = _closure1_slot19;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 10832, 14878, 660, 33, 1297, 671, 3941, 14931, 632, 10808, 10809, 10811, 14937, 1568, 1469, 5633, 795, 4302, 14887, 7516, 1234, 4705, 5214, 481, 14866, 9282, 5332, 2]);