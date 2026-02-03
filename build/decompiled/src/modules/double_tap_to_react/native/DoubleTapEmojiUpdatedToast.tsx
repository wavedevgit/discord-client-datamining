// modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun57402: for (var _fun57402_ip = 0;;) switch (_fun57402_ip) {
        case 0:
            var5 = require;
            var11 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var11;
            var _closure1_slot2 = var6;
            var3 = function arg0() {
                _fun57403: for (var _fun57403_ip = 0;;) switch (_fun57403_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = var0.emoji;
                        var _closure2_slot0 = var6;
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 7;
                        var2 = var7[var2];
                        var3 = undefined;
                        var8 = var4.bind(var3)(var2);
                        var5 = var8.useStateFromStores;
                        var2 = _closure1_slot4;
                        var4 = new Array(1);
                        var4[0] = var2;
                        var2 = function() { // Environment: var1
                            var0 = _closure1_slot4;
                            var0 = var0.useReducedMotion;
                            return var0;
                        };
                        var9 = var5.bind(var8)(var4, var2);
                        var _closure2_slot1 = var9;
                        var2 = _closure1_slot7;
                        var5 = var2.bind(var3)();
                        var8 = _closure1_slot3;
                        var4 = var8.useMemo;
                        var2 = new Array(2);
                        var2[0] = var6;
                        var2[1] = var9;
                        var1 = function() { // Environment: var1
                            _fun57405: for (var _fun57405_ip = 0;;) switch (_fun57405_ip) {
                                case 0:
                                    var0 = _closure2_slot0;
                                    var1 = var0.id;
                                    var0 = null;
                                    if (!(var0 == var1)) {
                                        _fun57405_ip = 29;
                                        continue _fun57405
                                    }
                                case 18:
                                    var0 = _closure2_slot0;
                                    var0 = var0.url;
                                    _fun57405_ip = 113;
                                    continue _fun57405;
                                case 29:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 8;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.getEmojiURL;
                                    var1 = {};
                                    var5 = _closure2_slot0;
                                    var5 = var5.id;
                                    var1.id = var5;
                                    var5 = _closure2_slot1;
                                    var5 = !var5;
                                    if (!var5) {
                                        _fun57405_ip = 95;
                                        continue _fun57405
                                    }
                                case 85:
                                    var6 = _closure2_slot0;
                                    var5 = var6.animated;
                                case 95:
                                    var1.animated = var5;
                                    var4 = _closure1_slot5;
                                    var1.size = var4;
                                    var0 = var2.bind(var3)(var1);
                                case 113:
                                    return var0;
                            }
                        };
                        var4 = var4.bind(var8)(var1, var2);
                        var2 = _closure1_slot6;
                        var1 = _closure1_slot1;
                        var0 = 9;
                        var0 = var7[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var7 = var5.toastEmoji;
                        var0.style = var7;
                        var7 = var5.toastEmojiCustom;
                        var0.fastImageStyle = var7;
                        var5 = var5.toastEmojiText;
                        var0.textEmojiStyle = var5;
                        var7 = var6.id;
                        var5 = null;
                        var7 = var5 == var7;
                        var5 = '';
                        if (!var7) {
                            _fun57403_ip = 189;
                            continue _fun57403
                        }
                    case 184:
                        var5 = var6.surrogates;
                    case 189:
                        var0.name = var5;
                        var0.src = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot8 = var3;
            var0 = function arg0() {
                var0 = arg0;
                var8 = var0.emoji;
                var1 = _closure1_slot7;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var2 = _closure1_slot6;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 10;
                var0 = var9[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {};
                var6 = 'text-sm/normal';
                var0.variant = var6;
                var4 = var4.toastText;
                var0.style = var4;
                var4 = 11;
                var6 = var9[var4];
                var6 = var5.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.format;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.t;
                var5 = var4.nKY0Fl;
                var4 = {};
                var8 = var8.name;
                var4.emojiName = var8;
                var4 = var6.bind(var7)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot9 = var0;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var4);
            var0 = 0;
            var7 = var6[var0];
            var4 = arg3;
            var0 = undefined;
            var4 = var4.bind(var0)(var7);
            var _closure1_slot3 = var4;
            var4 = 1;
            var4 = var6[var4];
            var4 = var11.bind(var0)(var4);
            var _closure1_slot4 = var4;
            var4 = 2;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.EMOJI_URL_BASE_SIZE;
            var _closure1_slot5 = var4;
            var4 = 3;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.jsx;
            var _closure1_slot6 = var4;
            var4 = 4;
            var4 = var6[var4];
            var8 = var5.bind(var0)(var4);
            var7 = var8.createStyles;
            var4 = {};
            var9 = {};
            var10 = 5;
            var12 = var6[var10];
            var12 = var11.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_8;
            var9.marginLeft = var12;
            var12 = var6[var10];
            var12 = var11.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_8;
            var9.marginVertical = var12;
            var4.toastEmoji = var9;
            var14 = 24;
            var9 = {
                'width': 24,
                'height': 24
            };
            var4.toastEmojiCustom = var9;
            var9 = {};
            var12 = 6;
            var13 = var6[var12];
            var15 = var5.bind(var0)(var13);
            var13 = var15.isIOS;
            var15 = var13.bind(var15)();
            var13 = 16;
            if (!var15) {
                _fun57402_ip = 289;
                continue _fun57402
            }
        case 286:
            var13 = var14;
        case 289:
            var9.fontSize = var13;
            var12 = var6[var12];
            var13 = var5.bind(var0)(var12);
            var12 = var13.isIOS;
            var13 = var12.bind(var13)();
            var12 = undefined;
            if (!var13) {
                _fun57402_ip = 321;
                continue _fun57402
            }
        case 318:
            var12 = 32;
        case 321:
            var9.lineHeight = var12;
            var12 = 'center';
            var9.textAlign = var12;
            var12 = var6[var10];
            var12 = var11.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.INTERACTIVE_TEXT_DEFAULT;
            var9.color = var12;
            var4.toastEmojiText = var9;
            var9 = {};
            var12 = var6[var10];
            var12 = var11.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_12;
            var9.marginRight = var12;
            var10 = var6[var10];
            var10 = var11.bind(var0)(var10);
            var10 = var10.spacing;
            var10 = var10.PX_8;
            var9.marginVertical = var10;
            var4.toastText = var9;
            var4 = var7.bind(var8)(var4);
            var _closure1_slot7 = var4;
            var4 = 13;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'modules/double_tap_to_react/native/DoubleTapEmojiUpdatedToast.tsx';
            var4 = var5.bind(var6)(var4);
            var2.ToastEmoji = var3;
            var1 = function arg0() {
                var0 = arg0;
                var0 = var0.emoji;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 12;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.open;
                var1 = {};
                var5 = 'DEFAULT_REACTION_EMOJI_UPDATED';
                var1.key = var5;
                var5 = function() {
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var1.emoji = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1.icon = var5;
                var4 = function() {
                    var3 = _closure1_slot6;
                    var2 = _closure1_slot9;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var1.emoji = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1.content = var4;
                var4 = 3000;
                var1.toastDurationMs = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var2.showDoubleTapEmojiUpdatedToast = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 1616, 33, 1297, 671, 478, 566, 1417, 5764, 3932, 1234, 3139, 2]);