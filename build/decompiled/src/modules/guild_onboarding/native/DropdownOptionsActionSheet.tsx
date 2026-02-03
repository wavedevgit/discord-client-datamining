// modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun77919: for (var _fun77919_ip = 0;;) switch (_fun77919_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.option;
                var _closure2_slot0 = var13;
                var6 = var0.responses;
                var8 = var0.onSelect;
                var _closure2_slot1 = var8;
                var1 = var0.canBeNew;
                var4 = _closure1_slot10;
                var3 = undefined;
                var9 = var4.bind(var3)();
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 7;
                var4 = var7[var4];
                var10 = var5.bind(var3)(var4);
                var7 = var10.useStateFromStores;
                var4 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var2
                    _fun77920: for (var _fun77920_ip = 0;;) switch (_fun77920_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = var0.emoji;
                            var5 = null;
                            var2 = var5 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun77920_ip = 29;
                                continue _fun77920
                            }
                        case 24:
                            var0 = var1.id;
                        case 29:
                            var1 = var5 != var0;
                            var0 = null;
                            if (!var1) {
                                _fun77920_ip = 80;
                                continue _fun77920
                            }
                        case 38:
                            var2 = _closure1_slot5;
                            var1 = var2.getUsableCustomEmojiById;
                            var4 = _closure2_slot0;
                            var4 = var4.emoji;
                            var5 = var5 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun77920_ip = 75;
                                continue _fun77920
                            }
                        case 70:
                            var3 = var4.id;
                        case 75:
                            var0 = var1.bind(var2)(var3);
                        case 80:
                            return var0;
                    }
                };
                var19 = var7.bind(var10)(var5, var4);
                var5 = var6.includes;
                var4 = var13.id;
                var7 = var5.bind(var6)(var4);
                var _closure2_slot2 = var7;
                var6 = _closure1_slot3;
                var5 = var6.useCallback;
                var4 = new Array(3);
                var4[0] = var8;
                var4[1] = var13;
                var4[2] = var7;
                var2 = function() { // Environment: var2
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var0 = _closure2_slot2;
                    var1 = !var0;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var4 = var5.bind(var6)(var2, var4);
                var6 = var13.emoji;
                var2 = null;
                var8 = var2 == var6;
                var5 = undefined;
                if (var8) {
                    _fun77919_ip = 179;
                    continue _fun77919
                }
            case 174:
                var5 = var6.id;
            case 179:
                if (!(var2 == var5)) {
                    _fun77919_ip = 215;
                    continue _fun77919
                }
            case 183:
                var6 = var13.emoji;
                var8 = var2 == var6;
                var5 = undefined;
                if (var8) {
                    _fun77919_ip = 203;
                    continue _fun77919
                }
            case 198:
                var5 = var6.name;
            case 203:
                var5 = var2 != var5;
                var6 = null;
                if (!var5) {
                    _fun77919_ip = 420;
                    continue _fun77919
                }
            case 215:
                var10 = _closure1_slot8;
                var8 = _closure1_slot4;
                var5 = {};
                var11 = {
                    'display': 'flex',
                    'alignItems': 'center'
                };
                var5.style = var11;
                var14 = _closure1_slot8;
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var11 = 8;
                var11 = var15[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var15 = var9.optionTextEmoji;
                var11.textEmojiStyle = var15;
                var15 = var9.optionImageEmoji;
                var11.fastImageStyle = var15;
                var16 = var2 != var19;
                var15 = undefined;
                if (!var16) {
                    _fun77919_ip = 361;
                    continue _fun77919
                }
            case 300:
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var16 = 9;
                var16 = var18[var16];
                var18 = var17.bind(var3)(var16);
                var17 = var18.getEmojiURL;
                var16 = {};
                var20 = var19.id;
                var16.id = var20;
                var19 = var19.animated;
                var16.animated = var19;
                var19 = _closure1_slot7;
                var16.size = var19;
                var15 = var17.bind(var18)(var16);
            case 361:
                var11.src = var15;
                var15 = var13.emoji;
                var17 = var2 == var15;
                var16 = undefined;
                if (var17) {
                    _fun77919_ip = 386;
                    continue _fun77919
                }
            case 381:
                var16 = var15.name;
            case 386:
                var17 = var2 != var16;
                var15 = '';
                if (!var17) {
                    _fun77919_ip = 400;
                    continue _fun77919
                }
            case 397:
                var15 = var16;
            case 400:
                var11.name = var15;
                var11 = var14.bind(var3)(var12, var11);
                var5.children = var11;
                var6 = var10.bind(var3)(var8, var5);
            case 420:
                var5 = null;
                if (!var1) {
                    _fun77919_ip = 567;
                    continue _fun77919
                }
            case 428:
                var1 = var13.isUnseen;
                var5 = null;
                if (!var1) {
                    _fun77919_ip = 567;
                    continue _fun77919
                }
            case 442:
                var8 = _closure1_slot8;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 10;
                var1 = var15[var10];
                var1 = var14.bind(var3)(var1);
                var2 = var1.TextBadge;
                var1 = {};
                var10 = var15[var10];
                var10 = var14.bind(var3)(var10);
                var10 = var10.BadgeColors;
                var10 = var10.BRAND;
                var1.color = var10;
                var10 = 11;
                var11 = var15[var10];
                var11 = var14.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var15[var10];
                var10 = var14.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.y2b7CA;
                var10 = var11.bind(var12)(var10);
                var1.text = var10;
                var10 = var9.newBadge;
                var1.textStyle = var10;
                var5 = var8.bind(var3)(var2, var1);
            case 567:
                var8 = _closure1_slot9;
                var2 = _closure1_slot4;
                var1 = {};
                var9 = var9.labelRow;
                var1.style = var9;
                var12 = _closure1_slot8;
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var10 = 12;
                var10 = var9[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {};
                var14 = 'text-md/normal';
                var10.variant = var14;
                var13 = var13.title;
                var10.children = var13;
                var11 = var12.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var10[1] = var5;
                var1.children = var10;
                var8 = var8.bind(var3)(var2, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var0 = 13;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.label = var8;
                var0.selected = var7;
                var0.leading = var6;
                var0.trailing = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'fontSize': 24,
        'lineHeight': 24,
        'paddingTop': 5
    };
    var3.optionTextEmoji = var8;
    var8 = {
        'height': 24,
        'width': 24
    };
    var3.optionImageEmoji = var8;
    var8 = {};
    var9 = 'bold';
    var8.fontWeight = var9;
    var3.newBadge = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var3.labelRow = var8;
    var8 = {
        'marginTop': 16,
        'marginHorizontal': 16
    };
    var3.closeButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun77922: for (var _fun77922_ip = 0;;) switch (_fun77922_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var1 = var0.promptId;
                var _closure2_slot1 = var1;
                var1 = var0.canBeNew;
                var _closure2_slot2 = var1;
                var0 = var0.onSelect;
                var _closure2_slot3 = var0;
                var0 = _closure1_slot10;
                var4 = undefined;
                var12 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 14;
                var0 = var3[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var10 = var0.bottom;
                var2 = _closure1_slot0;
                var1 = 7;
                var0 = var3[var1];
                var8 = var2.bind(var4)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var0;
                var5 = function() { // Environment: var18
                    var2 = _closure1_slot6;
                    var1 = var2.getOnboardingPrompt;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19 = var7.bind(var8)(var6, var5);
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStateFromStoresArray;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var18
                    var3 = _closure1_slot6;
                    var2 = var3.getOnboardingResponsesForPrompt;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                var _closure2_slot4 = var0;
                var3 = _closure1_slot3;
                var2 = var3.useCallback;
                var1 = function() { // Environment: var18
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = new Array(0);
                var14 = var2.bind(var3)(var1, var0);
                var0 = null;
                if (!(var0 != var19)) {
                    _fun77922_ip = 599;
                    continue _fun77922
                }
            case 207:
                var3 = _closure1_slot8;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 16;
                var1 = var17[var1];
                var1 = var16.bind(var4)(var1);
                var2 = var1.BottomSheetTitleHeader;
                var1 = {};
                var13 = 11;
                var5 = var17[var13];
                var5 = var16.bind(var4)(var5);
                var7 = var5.intl;
                var6 = var7.string;
                var5 = var17[var13];
                var5 = var16.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.E2ICbC;
                var5 = var6.bind(var7)(var5);
                var1.title = var5;
                var5 = var3.bind(var4)(var2, var1);
                var3 = _closure1_slot8;
                var1 = 17;
                var1 = var17[var1];
                var1 = var16.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {};
                var6 = true;
                var1.scrollable = var6;
                var1.header = var5;
                var7 = _closure1_slot9;
                var5 = 18;
                var5 = var17[var5];
                var5 = var16.bind(var4)(var5);
                var6 = var5.BottomSheetScrollView;
                var5 = {};
                var8 = {};
                var8.paddingBottom = var10;
                var5.contentContainerStyle = var8;
                var15 = _closure1_slot8;
                var10 = _closure1_slot1;
                var8 = 19;
                var8 = var17[var8];
                var11 = var10.bind(var4)(var8);
                var8 = {};
                var20 = 'radiogroup';
                var8.accessibilityRole = var20;
                var20 = var17[var13];
                var20 = var16.bind(var4)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var17[var13];
                var20 = var16.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.E2ICbC;
                var20 = var21.bind(var22)(var20);
                var8.accessibilityLabel = var20;
                var20 = var19.options;
                var19 = var20.map;
                var18 = function(arg0) { // Environment: var18
                    var0 = arg0;
                    var4 = _closure1_slot8;
                    var3 = _closure1_slot11;
                    var2 = {};
                    var2.option = var0;
                    var5 = _closure2_slot4;
                    var2.responses = var5;
                    var5 = _closure2_slot3;
                    var2.onSelect = var5;
                    var5 = global;
                    var6 = var5.Boolean;
                    var5 = _closure2_slot2;
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var2.canBeNew = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var18 = var19.bind(var20)(var18);
                var8.children = var18;
                var11 = var15.bind(var4)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var11 = _closure1_slot8;
                var9 = 20;
                var9 = var17[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var9.onPress = var14;
                var14 = var17[var13];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.cpT0Cq;
                var13 = var14.bind(var15)(var13);
                var9.text = var13;
                var12 = var12.closeButton;
                var9.style = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 599:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4732, 4683, 1616, 33, 1297, 632, 5764, 1417, 8269, 1234, 3932, 5419, 1568, 3269, 5206, 4926, 4928, 5431, 4868, 2]);