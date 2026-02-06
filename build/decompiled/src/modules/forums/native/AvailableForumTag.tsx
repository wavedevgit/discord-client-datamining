// modules/forums/native/AvailableForumTag.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.Fonts;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingHorizontal': 12,
        'borderRadius': 20,
        'backgroundColor': null,
        'margin': 6,
        'borderWidth': 2,
        'borderColor': null,
        'overflow': 'hidden',
        'height': 32
    };
    var9 = 6;
    var13 = var5[var9];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var3.backgroundColor = var13;
    var13 = var5[var9];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOWEST;
    var3.borderColor = var13;
    var6.pill = var3;
    var3 = {};
    var13 = var5[var9];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var3.borderColor = var13;
    var3.borderWidth = var11;
    var6.pillSelected = var3;
    var3 = {};
    var11 = 0.6;
    var3.opacity = var11;
    var6.pillDisabled = var3;
    var3 = {
        'height': 18,
        'width': 18,
        'marginRight': 4,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var6.emoji = var3;
    var3 = {
        'height': 16,
        'width': 16
    };
    var6.imageEmoji = var3;
    var3 = 14;
    var11 = {
        'fontSize': 14,
        'lineHeight': 20
    };
    var6.textEmoji = var11;
    var11 = 7;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var10 = var10.PRIMARY_SEMIBOLD;
    var9 = var5[var9];
    var9 = var12.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var9 = var11.bind(var0)(var10, var9, var3);
    var6.tagName = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/AvailableForumTag.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var5 = var0.tag;
        var _closure2_slot0 = var5;
        var1 = var0.onPress;
        var _closure2_slot1 = var1;
        var10 = var0.disabled;
        var _closure2_slot2 = var10;
        var9 = var0.selected;
        var _closure2_slot3 = var9;
        var1 = _closure1_slot8;
        var3 = undefined;
        var1 = var1.bind(var3)();
        var _closure2_slot4 = var1;
        var2 = var5.name;
        var _closure2_slot5 = var2;
        var2 = var5.emojiId;
        var _closure2_slot6 = var2;
        var2 = var5.emojiName;
        var _closure2_slot7 = var2;
        var7 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 8;
        var2 = var6[var2];
        var11 = var7.bind(var3)(var2);
        var8 = var11.useStateFromStores;
        var2 = _closure1_slot4;
        var7 = new Array(1);
        var7[0] = var2;
        var2 = function() { // Environment: var4
            _fun75965: for (var _fun75965_ip = 0;;) switch (_fun75965_ip) {
                case 0:
                    var2 = _closure2_slot6;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun75965_ip = 38;
                        continue _fun75965
                    }
                case 16:
                    var3 = _closure1_slot4;
                    var2 = var3.getUsableCustomEmojiById;
                    var1 = _closure2_slot6;
                    var0 = var2.bind(var3)(var1);
                case 38:
                    return var0;
            }
        };
        var2 = var8.bind(var11)(var7, var2);
        var _closure2_slot8 = var2;
        var2 = function() {
            _fun75966: for (var _fun75966_ip = 0;;) switch (_fun75966_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    if (var1) {
                        _fun75966_ip = 25;
                        continue _fun75966
                    }
                case 10:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 25:
                    var0 = undefined;
                    return var0;
            }
        };
        var _closure2_slot9 = var2;
        var8 = _closure1_slot3;
        var7 = var8.useMemo;
        var2 = new Array(3);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var1;
        var1 = function() { // Environment: var4
            _fun75967: for (var _fun75967_ip = 0;;) switch (_fun75967_ip) {
                case 0:
                    var0 = new Array(0);
                    var3 = var0.push;
                    var2 = _closure2_slot4;
                    var2 = var2.pill;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot3;
                    if (!var2) {
                        _fun75967_ip = 54;
                        continue _fun75967
                    }
                case 34:
                    var3 = var0.push;
                    var2 = _closure2_slot4;
                    var2 = var2.pillSelected;
                    var2 = var3.bind(var0)(var2);
                case 54:
                    var2 = _closure2_slot2;
                    if (!var2) {
                        _fun75967_ip = 81;
                        continue _fun75967
                    }
                case 61:
                    var2 = var0.push;
                    var1 = _closure2_slot4;
                    var1 = var1.pillDisabled;
                    var1 = var2.bind(var0)(var1);
                case 81:
                    return var0;
            }
        };
        var1 = var7.bind(var8)(var1, var2);
        var _closure2_slot10 = var1;
        var2 = _closure1_slot6;
        var1 = _closure1_slot1;
        var0 = 9;
        var0 = var6[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var5 = var5.id;
        var0.tagId = var5;
        var4 = function arg0() {
            _fun75968: for (var _fun75968_ip = 0;;) switch (_fun75968_ip) {
                case 0:
                    var2 = arg0;
                    var6 = var2.ref;
                    var11 = null;
                    var1 = Object.create(var11);
                    var0 = 0;
                    var1.ref = var0;
                    var19 = {};
                    var18 = var2;
                    var17 = var1;
                    var18 = copyDataProperties(var19, var18, var17);
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.PressableScale;
                    var0 = {};
                    var7 = _closure2_slot10;
                    var0.style = var7;
                    var7 = 'button';
                    var0.accessibilityRole = var7;
                    var7 = {};
                    var9 = _closure2_slot3;
                    var7.selected = var9;
                    var0.accessibilityState = var7;
                    var7 = _closure2_slot2;
                    var0.disabled = var7;
                    var0.ref = var6;
                    var19 = var0;
                    var5 = copyDataProperties(var19, var18);
                    var6 = _closure2_slot9;
                    var5 = 'onPress';
                    var0[var5] = var6;
                    var5 = _closure2_slot8;
                    var6 = var11 != var5;
                    if (var6) {
                        _fun75968_ip = 154;
                        continue _fun75968
                    }
                case 146:
                    var5 = _closure2_slot7;
                    var6 = var11 != var5;
                case 154:
                    if (!var6) {
                        _fun75968_ip = 334;
                        continue _fun75968
                    }
                case 160:
                    var9 = _closure1_slot6;
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 11;
                    var5 = var10[var5];
                    var7 = var7.bind(var2)(var5);
                    var5 = {};
                    var10 = _closure2_slot4;
                    var12 = var10.emoji;
                    var5.style = var12;
                    var12 = var10.textEmoji;
                    var5.textEmojiStyle = var12;
                    var10 = var10.imageEmoji;
                    var5.fastImageStyle = var10;
                    var10 = _closure2_slot8;
                    var12 = var11 != var10;
                    var10 = undefined;
                    if (!var12) {
                        _fun75968_ip = 300;
                        continue _fun75968
                    }
                case 235:
                    var13 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var12 = 12;
                    var12 = var14[var12];
                    var14 = var13.bind(var2)(var12);
                    var13 = var14.getEmojiURL;
                    var12 = {};
                    var15 = _closure2_slot8;
                    var16 = var15.id;
                    var12.id = var16;
                    var15 = var15.animated;
                    var12.animated = var15;
                    var15 = _closure1_slot5;
                    var12.size = var15;
                    var10 = var13.bind(var14)(var12);
                case 300:
                    var5.src = var10;
                    var10 = _closure2_slot7;
                    var11 = var11 != var10;
                    var10 = '';
                    if (!var11) {
                        _fun75968_ip = 324;
                        continue _fun75968
                    }
                case 320:
                    var10 = _closure2_slot7;
                case 324:
                    var5.name = var10;
                    var6 = var9.bind(var2)(var7, var5);
                case 334:
                    var5 = new Array(2);
                    var5[0] = var6;
                    var7 = _closure1_slot6;
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 13;
                    var4 = var9[var4];
                    var4 = var6.bind(var2)(var4);
                    var6 = var4.LegacyText;
                    var4 = {};
                    var9 = _closure2_slot4;
                    var9 = var9.tagName;
                    var4.style = var9;
                    var8 = _closure2_slot5;
                    var4.children = var8;
                    var4 = var7.bind(var2)(var6, var4);
                    var5[1] = var4;
                    var4 = 'children';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4740, 660, 1624, 33, 1297, 671, 4683, 566, 9440, 7053, 5777, 1417, 4879, 2]);