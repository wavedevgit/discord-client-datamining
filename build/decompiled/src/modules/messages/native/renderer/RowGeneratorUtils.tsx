// modules/messages/native/renderer/RowGeneratorUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var7 = global;
    var8 = var7.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var3 = var1.NativeModules;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.SwipeActionsType;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var9 = var5.bind(var0)(var1);
    var8 = var9.createNativeStyleProperties;
    var1 = {};
    var10 = 3;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_BACKGROUND_ACTIVE;
    var1.ephemeralBackgroundColor = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.BRAND_500;
    var1.ephemeralGutterColor = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MESSAGE_MENTIONED_BACKGROUND_DEFAULT;
    var1.mentionedBackgroundColor = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.YELLOW_300;
    var1.mentionedGutterColor = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT;
    var1.automodBlockedBackgroundColor = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.RED_345;
    var1.automodBlockedGutterColor = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
    var1.editingColor = var10;
    var1 = var8.bind(var9)(var1);
    var _closure1_slot4 = var1;
    var8 = var7.Set;
    var7 = var3.MediaManager;
    var3 = var7.getConstants;
    var3 = var3.bind(var7)();
    var15 = var3.supportedExtensions;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var16 = var7;
    var3 = new var16[var8](var15, var14);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot5 = var3;
    var3 = {};
    var7 = function(arg0, arg1, arg2, arg3) { // Original name: getImageSrc, environment: var4
        _fun55905: for (var _fun55905_ip = 0;;) switch (_fun55905_ip) {
            case 0:
                var5 = arg0;
                var0 = arg3;
                var2 = var5.endsWith;
                var1 = '.webp';
                var1 = var2.bind(var5)(var1);
                var1 = !var1;
                if (!var1) {
                    _fun55905_ip = 49;
                    continue _fun55905
                }
            case 29:
                var3 = var5.endsWith;
                var2 = '.avif';
                var2 = var3.bind(var5)(var2);
                var1 = !var2;
            case 49:
                if (var1) {
                    _fun55905_ip = 75;
                    continue _fun55905
                }
            case 52:
                var4 = _closure1_slot5;
                var3 = var4.has;
                var2 = 'webp';
                var1 = var3.bind(var4)(var2);
            case 75:
                if (var1) {
                    _fun55905_ip = 80;
                    continue _fun55905
                }
            case 78:
                var0 = true;
            case 80:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getMobileOptimizedSrc;
                var2 = null;
                if (!var0) {
                    _fun55905_ip = 120;
                    continue _fun55905
                }
            case 116:
                var2 = 'png';
            case 120:
                var8 = arg1;
                var7 = arg2;
                var10 = var4;
                var9 = var5;
                var6 = var2;
                var0 = var10[var3](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var3.getImageSrc = var7;
    var7 = function(arg0) { // Original name: createBackgroundHighlight, environment: var4
        _fun55906: for (var _fun55906_ip = 0;;) switch (_fun55906_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.message;
                var6 = var0.theme;
                var5 = var0.isEditing;
                var3 = var0.isAutomodBlockedMessage;
                var2 = _closure1_slot4;
                var0 = undefined;
                var2 = var2.bind(var0)(var6);
                if (var5) {
                    _fun55906_ip = 178;
                    continue _fun55906
                }
            case 46:
                if (var3) {
                    _fun55906_ip = 150;
                    continue _fun55906
                }
            case 49:
                var3 = var4.mentioned;
                if (var3) {
                    _fun55906_ip = 122;
                    continue _fun55906
                }
            case 58:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.hasEphemeralAppearance;
                var1 = var1.bind(var3)(var4);
                var0 = undefined;
                if (!var1) {
                    _fun55906_ip = 120;
                    continue _fun55906
                }
            case 94:
                var1 = {};
                var3 = var2.ephemeralBackgroundColor;
                var1.backgroundColor = var3;
                var3 = var2.ephemeralGutterColor;
                var1.gutterColor = var3;
                var0 = var1;
            case 120:
                _fun55906_ip = 148;
                continue _fun55906;
            case 122:
                var1 = {};
                var3 = var2.mentionedBackgroundColor;
                var1.backgroundColor = var3;
                var3 = var2.mentionedGutterColor;
                var1.gutterColor = var3;
                var0 = var1;
            case 148:
                _fun55906_ip = 176;
                continue _fun55906;
            case 150:
                var1 = {};
                var3 = var2.automodBlockedBackgroundColor;
                var1.backgroundColor = var3;
                var3 = var2.automodBlockedGutterColor;
                var1.gutterColor = var3;
                var0 = var1;
            case 176:
                _fun55906_ip = 193;
                continue _fun55906;
            case 178:
                var1 = {};
                var2 = var2.editingColor;
                var1.backgroundColor = var2;
                var0 = var1;
            case 193:
                return var0;
        }
    };
    var3.createBackgroundHighlight = var7;
    var4 = function(arg0, arg1) { // Original name: createSwipeActions, environment: var4
        _fun55907: for (var _fun55907_ip = 0;;) switch (_fun55907_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = arg0;
                if (var0) {
                    _fun55907_ip = 21;
                    continue _fun55907
                }
            case 13:
                var0 = var2.NONE;
                _fun55907_ip = 44;
                continue _fun55907;
            case 21:
                var1 = arg1;
                if (var1) {
                    _fun55907_ip = 35;
                    continue _fun55907
                }
            case 27:
                var1 = var2.REPLY;
                _fun55907_ip = 41;
                continue _fun55907;
            case 35:
                var1 = var2.REPLY_EDIT;
            case 41:
                var0 = var1;
            case 44:
                return var0;
        }
    };
    var3.createSwipeActions = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/RowGeneratorUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = {
        'dark': '#313339',
        'light': '#fafafa'
    };
    var2.InviteEmbedBackground = var3;
    var2.resolveHighlightThemedColors = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 6475, 1297, 671, 3926, 1463, 2]);