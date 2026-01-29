// modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var8;
    var4 = function(arg0) { // Original name: useEmojiPickerPremiumSearchUpsellViewed, environment: var1
        var1 = arg0;
        var6 = var1.guildId;
        var _closure2_slot0 = var6;
        var7 = var1.analyticsLocations;
        var _closure2_slot1 = var7;
        var5 = var1.useTier0UpsellContent;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useRef;
        var2 = false;
        var4 = var3.bind(var4)(var2);
        var _closure2_slot3 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useEffect;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun73838: for (var _fun73838_ip = 0;;) switch (_fun73838_ip) {
                case 0:
                    var0 = _closure2_slot3;
                    var0 = var0.current;
                    if (var0) {
                        _fun73838_ip = 188;
                        continue _fun73838
                    }
                case 18:
                    var1 = _closure2_slot3;
                    var0 = true;
                    var1.current = var0;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.track;
                    var0 = _closure1_slot6;
                    var1 = var0.PREMIUM_UPSELL_VIEWED;
                    var0 = {};
                    var6 = _closure1_slot10;
                    var6 = var6.EMOJI_PICKER_SEARCH;
                    var0.type = var6;
                    var6 = {};
                    var8 = _closure2_slot0;
                    var7 = null;
                    if (!(var7 == var8)) {
                        _fun73838_ip = 110;
                        continue _fun73838
                    }
                case 98:
                    var7 = _closure1_slot7;
                    var7 = var7.DM_CHANNEL;
                    _fun73838_ip = 120;
                    continue _fun73838;
                case 110:
                    var8 = _closure1_slot7;
                    var7 = var8.GUILD_CHANNEL;
                case 120:
                    var6.page = var7;
                    var7 = _closure1_slot8;
                    var7 = var7.EMOJI_PICKER_POPOUT;
                    var6.section = var7;
                    var0.location = var6;
                    var6 = _closure2_slot1;
                    var0.location_stack = var6;
                    var4 = _closure2_slot2;
                    var5 = _closure1_slot9;
                    if (var4) {
                        _fun73838_ip = 171;
                        continue _fun73838
                    }
                case 163:
                    var4 = var5.TIER_2;
                    _fun73838_ip = 177;
                    continue _fun73838;
                case 171:
                    var4 = var5.TIER_0;
                case 177:
                    var0.sku_id = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 188:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot15 = var4;
    var3 = function(arg0) { // Original name: useEmojiPickerPremiumSearchUpsellClick, environment: var1
        var1 = arg0;
        var5 = var1.analyticsLocations;
        var _closure2_slot0 = var5;
        var4 = var1.useTier0UpsellContent;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun73840: for (var _fun73840_ip = 0;;) switch (_fun73840_ip) {
                case 0:
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var3 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 == var3;
                    if (var0) {
                        _fun73840_ip = 58;
                        continue _fun73840
                    }
                case 25:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.canUseEmojisEverywhere;
                    var0 = var1.bind(var2)(var3);
                case 58:
                    if (var0) {
                        _fun73840_ip = 220;
                        continue _fun73840
                    }
                case 64:
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var1 = 10;
                    var1 = var0[var1];
                    var7 = undefined;
                    var3 = var2.bind(var7)(var1);
                    var1 = var3.hideActionSheet;
                    var1 = var1.bind(var3)();
                    var1 = 11;
                    var1 = var0[var1];
                    var3 = var2.bind(var7)(var1);
                    var2 = var3.pushLazy;
                    var4 = _closure1_slot0;
                    var1 = 13;
                    var1 = var0[var1];
                    var4 = var4.bind(var7)(var1);
                    var1 = 12;
                    var1 = var0[var1];
                    var0 = var0.paths;
                    var1 = var4.bind(var7)(var1, var0);
                    var0 = {};
                    var6 = _closure2_slot0;
                    var0.analyticsLocations = var6;
                    var4 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 14;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.PremiumFeatureCardOrder;
                    if (var4) {
                        _fun73840_ip = 203;
                        continue _fun73840
                    }
                case 195:
                    var4 = var5.TIER_2_LEADING;
                    _fun73840_ip = 209;
                    continue _fun73840;
                case 203:
                    var4 = var5.TIER_0_LEADING;
                case 209:
                    var0.premiumFeatureCardOrder = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 220:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var3;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var5);
    var0 = 0;
    var6 = var8[var0];
    var5 = arg3;
    var0 = undefined;
    var9 = var5.bind(var0)(var6);
    var _closure1_slot3 = var9;
    var5 = 1;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var14.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var6 = var5.AnalyticEvents;
    var _closure1_slot6 = var6;
    var6 = var5.AnalyticsPages;
    var _closure1_slot7 = var6;
    var5 = var5.AnalyticsSections;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var6 = var5.PremiumSubscriptionSKUs;
    var _closure1_slot9 = var6;
    var6 = var5.PremiumUpsellTypes;
    var _closure1_slot10 = var6;
    var5 = var5.SubscriptionPlans;
    var _closure1_slot11 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var6 = var5.jsx;
    var _closure1_slot12 = var6;
    var5 = var5.jsxs;
    var _closure1_slot13 = var5;
    var5 = 6;
    var5 = var8[var5];
    var11 = var7.bind(var0)(var5);
    var10 = var11.createStyles;
    var6 = {};
    var5 = {};
    var13 = 7;
    var12 = var8[var13];
    var12 = var14.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var5.paddingTop = var12;
    var6.container = var5;
    var12 = {
        'height': 56,
        'padding': null,
        'borderRadius': null,
        'backgroundColor': null,
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'alignContent': 'center'
    };
    var5 = 56;
    var15 = var8[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var12.padding = var15;
    var15 = var8[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.xs;
    var12.borderRadius = var15;
    var13 = var8[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var12.backgroundColor = var13;
    var6.premiumSearchUpsell = var12;
    var12 = {
        'flex': 0.8,
        'flexDirection': 'row'
    };
    var6.premiumSearchUpsellContent = var12;
    var12 = {
        'marginRight': 8,
        'alignSelf': 'center'
    };
    var6.nitroIcon = var12;
    var6 = var10.bind(var11)(var6);
    var _closure1_slot14 = var6;
    var6 = var9.memo;
    var1 = function(arg0) { // Environment: var1
        _fun73841: for (var _fun73841_ip = 0;;) switch (_fun73841_ip) {
            case 0:
                var10 = arg0;
                var1 = _closure1_slot14;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var1 = _closure1_slot16;
                var6 = var1.bind(var3)(var10);
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)(var10);
                var4 = _closure1_slot13;
                var2 = _closure1_slot4;
                var1 = {};
                var7 = var5.premiumSearchUpsellContent;
                var1.style = var7;
                var12 = _closure1_slot12;
                var13 = _closure1_slot1;
                var8 = _closure1_slot2;
                var11 = 15;
                var7 = var8[var11];
                var9 = var13.bind(var3)(var7);
                var7 = {};
                var14 = var5.nitroIcon;
                var7.style = var14;
                var14 = 16;
                var14 = var8[var14];
                var14 = var13.bind(var3)(var14);
                var7.source = var14;
                var14 = true;
                var7.disableColor = var14;
                var11 = var8[var11];
                var11 = var13.bind(var3)(var11);
                var11 = var11.Sizes;
                var11 = var11.MEDIUM;
                var7.size = var11;
                var9 = var12.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var9 = _closure1_slot0;
                var11 = 17;
                var8 = var8[var11];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'lineClamp': 2,
                    'variant': 'text-sm/medium',
                    'color': 'interactive-text-active'
                };
                var13 = var10.useTier0UpsellContent;
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var15 = 18;
                var14 = var21[var15];
                var14 = var20.bind(var3)(var14);
                var18 = var14.intl;
                if (var13) {
                    _fun73841_ip = 255;
                    continue _fun73841
                }
            case 221:
                var14 = var18.string;
                var13 = var21[var15];
                var13 = var20.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["5t3lw+"];
                var13 = var14.bind(var18)(var13);
                _fun73841_ip = 326;
                continue _fun73841;
            case 255:
                var17 = var18.formatToPlainString;
                var14 = var21[var15];
                var14 = var20.bind(var3)(var14);
                var14 = var14.t;
                var16 = var14.kWBwlJ;
                var14 = {};
                var19 = 9;
                var19 = var21[var19];
                var21 = var20.bind(var3)(var19);
                var20 = var21.getTierDisplayNameByPlanId;
                var19 = _closure1_slot11;
                var19 = var19.PREMIUM_MONTH_TIER_0;
                var19 = var20.bind(var21)(var19);
                var14.planName = var19;
                var13 = var17.bind(var18)(var16, var14);
            case 326:
                var8.children = var13;
                var8 = var12.bind(var3)(var9, var8);
                var7[1] = var8;
                var1.children = var7;
                var9 = var4.bind(var3)(var2, var1);
                var4 = _closure1_slot13;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 19;
                var1 = var7[var1];
                var1 = var8.bind(var3)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var12 = var5.premiumSearchUpsell;
                var1.style = var12;
                var12 = 'button';
                var1.accessibilityRole = var12;
                var1.onPress = var6;
                var6 = new Array(2);
                var6[0] = var9;
                var9 = _closure1_slot12;
                var7 = var7[var11];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-link'
                };
                var10 = var10.useTier0UpsellContent;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var12 = var11[var15];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var15];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                if (var10) {
                    _fun73841_ip = 507;
                    continue _fun73841
                }
            case 494:
                var10 = var11.pj0XBN;
                var10 = var12.bind(var13)(var10);
                _fun73841_ip = 518;
                continue _fun73841;
            case 507:
                var11 = var11["9CM5v9"];
                var10 = var12.bind(var13)(var11);
            case 518:
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6[1] = var7;
                var1.children = var6;
                var4 = var4.bind(var3)(var2, var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var5.container;
                var0.style = var5;
                var5 = false;
                var0.collapsable = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var6.bind(var9)(var1);
    var6 = 20;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx';
    var6 = var7.bind(var8)(var6);
    var2.EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT = var5;
    var2.useEmojiPickerPremiumSearchUpsellViewed = var4;
    var2.useEmojiPickerPremiumSearchUpsellClick = var3;
    var2.PremiumSearchUpsell = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 660, 1615, 33, 1297, 671, 795, 3068, 3237, 4518, 7004, 1307, 7631, 4039, 9253, 3895, 1234, 4858, 2]);