// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.HAPPENING_NOW_CARD_MARGIN_RIGHT;
    var _closure1_slot4 = var6;
    var7 = var3.HAPPENING_NOW_CARD_PADDING;
    var _closure1_slot5 = var7;
    var7 = var3.HAPPENING_NOW_CARD_HEIGHT;
    var _closure1_slot6 = var7;
    var10 = var3.HAPPENING_NOW_BADGE_SIZE;
    var _closure1_slot7 = var10;
    var7 = var3.HAPPENING_NOW_CARD_WIDTH_SMALL_MIN;
    var _closure1_slot8 = var7;
    var7 = var3.HAPPENING_NOW_CARD_WIDTH_SMALL_MAX;
    var _closure1_slot9 = var7;
    var7 = var3.HAPPENING_NOW_CARD_WIDTH_MEDIUM_MIN;
    var _closure1_slot10 = var7;
    var7 = var3.HAPPENING_NOW_CARD_WIDTH_MEDIUM_MAX;
    var _closure1_slot11 = var7;
    var7 = var3.HAPPENING_NOW_CARD_WIDTH_LARGE_MIN;
    var _closure1_slot12 = var7;
    var7 = var3.HAPPENING_NOW_CARD_WIDTH_LARGE_MAX;
    var _closure1_slot13 = var7;
    var7 = var3.HAPPENING_NOW_CARD_PADDING_RIGHT;
    var _closure1_slot14 = var7;
    var7 = var3.HAPPENING_NOW_CARD_WIDTH_STRETCHY_MIN;
    var _closure1_slot15 = var7;
    var7 = var3.HAPPENING_NOW_CARD_WIDTH_STRETCHY_MAX;
    var _closure1_slot16 = var7;
    var7 = var3.HAPPENING_NOW_CARD_WIDTH_LARGE_PANELS_MAX;
    var _closure1_slot17 = var7;
    var3 = var3.HAPPENING_NOW_PANELS_CONTAINER_PADDING;
    var7 = 3;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.jsx;
    var _closure1_slot18 = var8;
    var7 = var7.jsxs;
    var _closure1_slot19 = var7;
    var3 = var3 + var6;
    var _closure1_slot20 = var3;
    var9 = 4;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun85529: for (var _fun85529_ip = 0;;) switch (_fun85529_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var2 = arg2;
                var0 = 'small';
                if (!(var0 !== var4)) {
                    _fun85529_ip = 221;
                    continue _fun85529
                }
            case 20:
                var0 = 'medium';
                if (!(var0 !== var4)) {
                    _fun85529_ip = 193;
                    continue _fun85529
                }
            case 31:
                var0 = 'large';
                if (!(var0 !== var4)) {
                    _fun85529_ip = 137;
                    continue _fun85529
                }
            case 39:
                var0 = 'stretchy';
                if (!(var0 !== var4)) {
                    _fun85529_ip = 81;
                    continue _fun85529
                }
            case 49:
                var0 = 'full';
                var3 = undefined;
                if (!(var0 === var4)) {
                    _fun85529_ip = 247;
                    continue _fun85529
                }
            case 62:
                var3 = {
                    'width': 'auto',
                    'marginLeft': 0,
                    'marginRight': 0
                };
                _fun85529_ip = 247;
                continue _fun85529;
            case 81:
                var0 = {};
                var4 = _closure1_slot15;
                var0.minWidth = var4;
                if (var1) {
                    _fun85529_ip = 104;
                    continue _fun85529
                }
            case 98:
                var4 = _closure1_slot16;
                _fun85529_ip = 127;
                continue _fun85529;
            case 104:
                if (var2) {
                    _fun85529_ip = 113;
                    continue _fun85529
                }
            case 107:
                var5 = _closure1_slot17;
                _fun85529_ip = 124;
                continue _fun85529;
            case 113:
                var7 = _closure1_slot20;
                var6 = 252;
                var5 = var6 - var7;
            case 124:
                var4 = var5;
            case 127:
                var0.maxWidth = var4;
                var3 = var0;
                _fun85529_ip = 247;
                continue _fun85529;
            case 137:
                var0 = {};
                var5 = _closure1_slot12;
                var0.minWidth = var5;
                if (var1) {
                    _fun85529_ip = 160;
                    continue _fun85529
                }
            case 154:
                var1 = _closure1_slot13;
                _fun85529_ip = 183;
                continue _fun85529;
            case 160:
                if (var2) {
                    _fun85529_ip = 169;
                    continue _fun85529
                }
            case 163:
                var2 = _closure1_slot17;
                _fun85529_ip = 180;
                continue _fun85529;
            case 169:
                var5 = _closure1_slot20;
                var4 = 252;
                var2 = var4 - var5;
            case 180:
                var1 = var2;
            case 183:
                var0.maxWidth = var1;
                var3 = var0;
                _fun85529_ip = 247;
                continue _fun85529;
            case 193:
                var0 = {};
                var2 = _closure1_slot10;
                var0.minWidth = var2;
                var1 = _closure1_slot11;
                var0.maxWidth = var1;
                var3 = var0;
                _fun85529_ip = 247;
                continue _fun85529;
            case 221:
                var0 = {};
                var2 = _closure1_slot8;
                var0.minWidth = var2;
                var1 = _closure1_slot9;
                var0.maxWidth = var1;
                var3 = var0;
            case 247:
                var0 = {};
                var1 = {};
                var4 = _closure1_slot5;
                var1.padding = var4;
                var4 = _closure1_slot14;
                var1.paddingRight = var4;
                var4 = _closure1_slot4;
                var1.marginRight = var4;
                var4 = _closure1_slot6;
                var1.height = var4;
                var4 = 'row';
                var1.flexDirection = var4;
                var4 = 'center';
                var1.alignItems = var4;
                var9 = var1;
                var8 = var3;
                var3 = copyDataProperties(var9, var8);
                var0.card = var1;
                var1 = {
                    'position': 'absolute',
                    'top': 0,
                    'right': 0
                };
                var0.cardBadgeWrapper = var1;
                var1 = {
                    'display': 'flex',
                    'alignItems': 'center',
                    'justifyContent': 'center'
                };
                var3 = _closure1_slot7;
                var1.width = var3;
                var1.height = var3;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 5;
                var6 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var6);
                var6 = var6.colors;
                var6 = var6.BACKGROUND_MOD_SUBTLE;
                var1.backgroundColor = var6;
                var6 = var5[var2];
                var6 = var4.bind(var3)(var6);
                var6 = var6.radii;
                var7 = var6.lg;
                var6 = 1;
                var6 = var7 - var6;
                var1.borderTopRightRadius = var6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.radii;
                var2 = var2.md;
                var1.borderBottomLeftRadius = var2;
                var0.cardBadge = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot21 = var3;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = var10 + var9;
    var8.marginRight = var9;
    var3.cardHeaderMargin = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot22 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCard.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun85530: for (var _fun85530_ip = 0;;) switch (_fun85530_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var7 = var0.bind(var3)();
                var2 = _closure1_slot21;
                var1 = var4.width;
                var8 = var4.panelVariant;
                var5 = null;
                var0 = var5 != var8;
                if (!var0) {
                    _fun85530_ip = 59;
                    continue _fun85530
                }
            case 56:
                var0 = var8;
            case 59:
                var10 = var2.bind(var3)(var1, var0, var7);
                var1 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 7;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var9 = var0.bind(var3)();
                var11 = var4.IconComponent;
                var8 = var4.accessibilityLabel;
                var7 = var4.accessibilityHint;
                var2 = _closure1_slot19;
                var1 = _closure1_slot0;
                var0 = 8;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Card;
                var0 = {};
                var12 = 'secondary';
                var0.variant = var12;
                var13 = var10.card;
                var12 = new Array(2);
                var12[0] = var13;
                var13 = var4.style;
                var12[1] = var13;
                var0.style = var12;
                var12 = var4.onPress;
                var0.onPress = var12;
                var12 = 'faint';
                var0.border = var12;
                var12 = var5 == var9;
                var9 = undefined;
                if (!var12) {
                    _fun85530_ip = 202;
                    continue _fun85530
                }
            case 198:
                var9 = 'low';
            case 202:
                var0.shadow = var9;
                var9 = var4.onLongPress;
                var0.onLongPress = var9;
                var9 = var4.onPress;
                var9 = var5 == var9;
                var0.disabled = var9;
                var0.accessibilityLabel = var8;
                var0.accessibilityHint = var7;
                var7 = var4.children;
                var4 = new Array(2);
                var4[0] = var7;
                var7 = var5 != var11;
                var5 = null;
                if (!var7) {
                    _fun85530_ip = 330;
                    continue _fun85530
                }
            case 262:
                var8 = _closure1_slot18;
                var7 = _closure1_slot3;
                var6 = {};
                var9 = var10.cardBadgeWrapper;
                var6.style = var9;
                var9 = {};
                var10 = var10.cardBadge;
                var9.style = var10;
                var10 = {};
                var12 = 'xs';
                var10.size = var12;
                var10 = var8.bind(var3)(var11, var10);
                var9.children = var10;
                var9 = var8.bind(var3)(var7, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 330:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var3 = function arg0() {
        _fun85531: for (var _fun85531_ip = 0;;) switch (_fun85531_ip) {
            case 0:
                var2 = arg0;
                var5 = var2.children;
                var10 = var2.noMargin;
                var9 = var2.displayNameFont;
                var1 = {
                    'children': 0,
                    'noMargin': 0,
                    'displayNameFont': 0
                };
                var7 = null;
                var13 = var1;
                var12 = null;
                var0 = silentSetPrototypeOf(var13, var12);
                var13 = {};
                var12 = var2;
                var11 = var1;
                var4 = copyDataProperties(var13, var12, var11);
                var1 = _closure1_slot22;
                var3 = undefined;
                var6 = var1.bind(var3)();
                var2 = _closure1_slot18;
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 9;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': 'text-sm/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1,
                    'maxFontSizeMultiplier': 2
                };
                var8 = null;
                if (var10) {
                    _fun85531_ip = 124;
                    continue _fun85531
                }
            case 118:
                var8 = var6.cardHeaderMargin;
            case 124:
                var6 = new Array(2);
                var6[0] = var8;
                var8 = var7 != var9;
                var7 = null;
                if (!var8) {
                    _fun85531_ip = 151;
                    continue _fun85531
                }
            case 141:
                var8 = {};
                var8.fontFamily = var9;
                var7 = var8;
            case 151:
                var6[1] = var7;
                var0.style = var6;
                var13 = var0;
                var12 = var4;
                var4 = copyDataProperties(var13, var12);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.HappeningNowCardHeader = var3;
    var1 = function arg0() {
        _fun85532: for (var _fun85532_ip = 0;;) switch (_fun85532_ip) {
            case 0:
                var2 = arg0;
                var5 = var2.children;
                var7 = var2.variant;
                var6 = null;
                var1 = Object.create(var6);
                var0 = 0;
                var1.children = var0;
                var1.variant = var0;
                var11 = {};
                var10 = var2;
                var9 = var1;
                var4 = copyDataProperties(var11, var10, var9);
                var3 = _closure1_slot18;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': null,
                    'color': 'text-default',
                    'lineClamp': 1,
                    'maxFontSizeMultiplier': 2
                };
                var8 = var6 != var7;
                var6 = 'text-xs/medium';
                if (!var8) {
                    _fun85532_ip = 104;
                    continue _fun85532
                }
            case 101:
                var6 = var7;
            case 104:
                var0.variant = var6;
                var11 = var0;
                var10 = var4;
                var4 = copyDataProperties(var11, var10);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var2.HappeningNowCardSubtitle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10960, 33, 1297, 671, 7756, 3243, 4902, 3942, 2]);