// modules/stickers/native/StickerPickerEmptyState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var9 = 2;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMPTY_STATE_STICKERS;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumUpsellTypes;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 16;
    var8.marginBottom = var10;
    var3.emptyImage = var8;
    var8 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.header = var8;
    var8 = {
        'lineHeight': 18,
        'textAlign': 'center',
        'marginBottom': 12
    };
    var3.blurb = var8;
    var8 = {
        'marginTop': 20,
        'alignSelf': 'center',
        'paddingLeft': 5,
        'paddingRight': 10,
        'flexGrow': 0
    };
    var3.premiumButton = var8;
    var8 = {};
    var10 = 32;
    var8.width = var10;
    var3.nitroWheel = var8;
    var8 = {
        'flexDirection': 'row',
        'alignSelf': 'center'
    };
    var3.stickersRow = var8;
    var8 = {};
    var8.paddingHorizontal = var9;
    var3.sticker = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = function(arg0) { // Original name: EmptyStateSticker, environment: var1
        _fun74376: for (var _fun74376_ip = 0;;) switch (_fun74376_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.sticker;
                var3 = var0.isFocused;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 9;
                var0 = var6[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.useShouldAnimateSticker;
                var0 = var0.bind(var2)(var3);
                var3 = _closure1_slot11;
                var2 = _closure1_slot1;
                var1 = 10;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.sticker = var5;
                var6 = 60;
                var1.size = var6;
                var1.animated = var0;
                var0 = null;
                var6 = var0 == var5;
                var0 = undefined;
                if (var6) {
                    _fun74376_ip = 106;
                    continue _fun74376
                }
            case 101:
                var0 = var5.id;
            case 106:
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/native/StickerPickerEmptyState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: _default, environment: var1
        var0 = _closure1_slot13;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var _closure2_slot0 = var9;
        var16 = _closure1_slot0;
        var12 = _closure1_slot2;
        var0 = 9;
        var0 = var12[var0];
        var1 = var16.bind(var3)(var0);
        var0 = var1.useFetchStickerPacks;
        var0 = var0.bind(var1)();
        var11 = _closure1_slot1;
        var0 = 11;
        var0 = var12[var0];
        var1 = var11.bind(var3)(var0);
        var0 = 12;
        var0 = var12[var0];
        var0 = var11.bind(var3)(var0);
        var0 = var0.EMPTY_STATE;
        var0 = var1.bind(var3)(var0);
        var0 = var0.analyticsLocations;
        var _closure2_slot1 = var0;
        var1 = 13;
        var1 = var12[var1];
        var6 = var16.bind(var3)(var1);
        var5 = var6.useStateFromStoresArray;
        var1 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var8
            var3 = _closure1_slot7;
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure1_slot6;
                var1 = var2.getStickerById;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = null;
                var0 = arg0;
                var0 = var1 != var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var14 = var5.bind(var6)(var2, var1);
        var5 = _closure1_slot4;
        var2 = var5.useState;
        var1 = null;
        var6 = var2.bind(var5)(var1);
        var2 = _closure1_slot3;
        var1 = 2;
        var2 = var2.bind(var3)(var6, var1);
        var1 = 0;
        var1 = var2[var1];
        var _closure2_slot2 = var1;
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot3 = var1;
        var2 = var5.useEffect;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var8
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 14;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.track;
            var1 = _closure1_slot8;
            var2 = var1.PREMIUM_UPSELL_VIEWED;
            var1 = {};
            var5 = _closure1_slot10;
            var5 = var5.EMPTY_STICKER_PICKER_UPSELL;
            var1.type = var5;
            var5 = {};
            var6 = _closure1_slot9;
            var6 = var6.EMPTY_STICKER_PICKER_UPSELL;
            var5.section = var6;
            var1.source = var5;
            var5 = _closure2_slot1;
            var1.location_stack = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot12;
        var1 = _closure1_slot5;
        var0 = {};
        var7 = _closure1_slot11;
        var5 = 15;
        var4 = var12[var5];
        var4 = var16.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-lg/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var10 = var9.header;
        var4.style = var10;
        var13 = 16;
        var10 = var12[var13];
        var10 = var16.bind(var3)(var10);
        var17 = var10.intl;
        var15 = var17.string;
        var10 = var12[var13];
        var10 = var16.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.HEm04J;
        var10 = var15.bind(var17)(var10);
        var4.children = var10;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(4);
        var4[0] = var6;
        var5 = var12[var5];
        var5 = var16.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var10 = var9.blurb;
        var5.style = var10;
        var10 = var12[var13];
        var10 = var16.bind(var3)(var10);
        var17 = var10.intl;
        var15 = var17.string;
        var10 = var12[var13];
        var10 = var16.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.FnNud4;
        var10 = var15.bind(var17)(var10);
        var5.children = var10;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var5 = {};
        var6 = var9.stickersRow;
        var5.style = var6;
        var10 = var14.map;
        var6 = function(arg0) { // Environment: var8
            _fun74382: for (var _fun74382_ip = 0;;) switch (_fun74382_ip) {
                case 0:
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot11;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.PressableOpacity;
                    var1 = {};
                    var7 = false;
                    var1.accessible = var7;
                    var6 = function() { // Original name: onLongPress, environment: var6
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 18;
                        var2 = var5[var0];
                        var0 = undefined;
                        var3 = var3.bind(var0)(var2);
                        var2 = var3.triggerHapticFeedback;
                        var4 = _closure1_slot1;
                        var1 = 19;
                        var1 = var5[var1];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure2_slot3;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onLongPress = var6;
                    var6 = _closure2_slot0;
                    var6 = var6.sticker;
                    var1.style = var6;
                    var6 = _closure1_slot14;
                    var0 = {};
                    var0.sticker = var5;
                    var8 = _closure2_slot2;
                    var7 = var5.id;
                    var7 = var8 === var7;
                    var0.isFocused = var7;
                    var0 = var4.bind(var3)(var6, var0);
                    var1.children = var0;
                    var0 = null;
                    var6 = var0 == var5;
                    var0 = undefined;
                    if (var6) {
                        _fun74382_ip = 136;
                        continue _fun74382
                    }
                case 131:
                    var0 = var5.id;
                case 136:
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
            }
        };
        var6 = var10.bind(var14)(var6);
        var5.children = var6;
        var5 = var7.bind(var3)(var1, var5);
        var4[2] = var5;
        var10 = 20;
        var5 = var12[var10];
        var6 = var11.bind(var3)(var5);
        var5 = {};
        var14 = function() { // Original name: renderIcon, environment: var8
            var3 = _closure1_slot11;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var0 = 21;
            var0 = var6[var0];
            var2 = undefined;
            var1 = var5.bind(var2)(var0);
            var0 = {};
            var4 = 22;
            var4 = var6[var4];
            var4 = var5.bind(var2)(var4);
            var0.source = var4;
            var4 = _closure2_slot0;
            var4 = var4.nitroWheel;
            var0.style = var4;
            var4 = 'contain';
            var0.resizeMode = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var5.renderIcon = var14;
        var14 = var12[var13];
        var14 = var16.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var12[var13];
        var13 = var16.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.pj0XBN;
        var13 = var14.bind(var15)(var13);
        var5.text = var13;
        var13 = var12[var10];
        var13 = var11.bind(var3)(var13);
        var13 = var13.Colors;
        var13 = var13.GREEN;
        var5.color = var13;
        var10 = var12[var10];
        var10 = var11.bind(var3)(var10);
        var10 = var10.Sizes;
        var10 = var10.SMALL;
        var5.size = var10;
        var9 = var9.premiumButton;
        var5.style = var9;
        var8 = function() { // Original name: onPress, environment: var8
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 23;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var3 = _closure1_slot9;
            var3 = var3.EXPRESSION_PICKER;
            var0.section = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.onPress = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 5555, 1352, 660, 1615, 33, 1297, 9316, 9329, 5687, 5540, 566, 795, 3901, 1234, 4864, 3238, 3239, 4835, 4666, 6567, 9335, 2]);