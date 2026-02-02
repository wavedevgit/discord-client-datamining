// modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx
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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot10 = var6;
    var3 = var3.EmojiIntention;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = {
        'left': 8,
        'right': 8
    };
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        var7 = arg0;
        var0 = {};
        var1 = {};
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 10;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_4;
        var1.marginHorizontal = var6;
        var0.doubleTapEmojiContainer = var1;
        var1 = {};
        var6 = 12;
        var6 = var6 * var7;
        var1.fontSize = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.INTERACTIVE_TEXT_DEFAULT;
        var1.color = var6;
        var0.doubleTapTextEmoji = var1;
        var1 = {};
        var6 = 16;
        var8 = var6 * var7;
        var1.height = var8;
        var6 = var6 * var7;
        var1.width = var6;
        var0.doubleTapCustomEmoji = var1;
        var1 = {
            'marginTop': null,
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'center',
            'flexWrap': 'wrap'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_8;
        var1.marginTop = var6;
        var0.doubleTapEmojiEditNudgeContainer = var1;
        var1 = {};
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.spacing;
        var2 = var2.PX_4;
        var1.marginHorizontal = var2;
        var0.editButton = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/double_tap_to_react/native/DoubleTapEmojiEditNudge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun77911: for (var _fun77911_ip = 0;;) switch (_fun77911_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.location;
                var _closure2_slot0 = var6;
                var2 = _closure1_slot7;
                var4 = undefined;
                var0 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.fontScale;
                    return var0;
                };
                var8 = var2.bind(var4)(var0);
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 11;
                var2 = var5[var0];
                var10 = var3.bind(var4)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var2 = var9.bind(var10)(var7, var2);
                var _closure2_slot1 = var2;
                var7 = _closure1_slot15;
                var10 = var7.bind(var4)(var8);
                var0 = var5[var0];
                var7 = var3.bind(var4)(var0);
                var5 = var7.useStateFromStoresObject;
                var0 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    _fun77914: for (var _fun77914_ip = 0;;) switch (_fun77914_ip) {
                        case 0:
                            var0 = _closure1_slot8;
                            var0 = var0.settings;
                            var2 = var0.textAndImages;
                            var1 = null;
                            var3 = var1 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun77914_ip = 36;
                                continue _fun77914
                            }
                        case 30:
                            var0 = var2.defaultReactionEmoji;
                        case 36:
                            if (!(var1 == var0)) {
                                _fun77914_ip = 42;
                                continue _fun77914
                            }
                        case 40:
                            var0 = {};
                        case 42:
                            return var0;
                    }
                };
                var0 = var5.bind(var7)(var3, var0);
                var _closure2_slot2 = var0;
                var5 = _closure1_slot4;
                var8 = var5.useMemo;
                var7 = new Array(1);
                var7[0] = var0;
                var3 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.disambiguatedEmojiFromProtoValue;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var8.bind(var5)(var3, var7);
                var _closure2_slot3 = var14;
                var7 = var5.useMemo;
                var3 = new Array(2);
                var3[0] = var14;
                var3[1] = var2;
                var2 = function() { // Environment: var1
                    _fun77916: for (var _fun77916_ip = 0;;) switch (_fun77916_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun77916_ip = 17;
                                continue _fun77916
                            }
                        case 13:
                            var0 = undefined;
                            return var0;
                        case 17:
                            var0 = _closure2_slot3;
                            var0 = var0.id;
                            if (!(var1 == var0)) {
                                _fun77916_ip = 41;
                                continue _fun77916
                            }
                        case 30:
                            var0 = _closure2_slot3;
                            var0 = var0.url;
                            _fun77916_ip = 125;
                            continue _fun77916;
                        case 41:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getEmojiURL;
                            var1 = {};
                            var6 = _closure2_slot3;
                            var6 = var6.id;
                            var1.id = var6;
                            var4 = _closure1_slot10;
                            var1.size = var4;
                            var4 = _closure2_slot1;
                            var4 = !var4;
                            if (!var4) {
                                _fun77916_ip = 115;
                                continue _fun77916
                            }
                        case 105:
                            var5 = _closure2_slot3;
                            var4 = var5.animated;
                        case 115:
                            var1.animated = var4;
                            var0 = var2.bind(var3)(var1);
                        case 125:
                            return var0;
                    }
                };
                var11 = var7.bind(var5)(var2, var3);
                var3 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var6;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.openEmojiPickerActionSheet;
                    var2 = {};
                    var6 = _closure1_slot11;
                    var6 = var6.DEFAULT_REACT_EMOJI;
                    var2.pickerIntention = var6;
                    var6 = _closure1_slot3;
                    var5 = function*(arg0) { // Environment: var1
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun77919: for (var _fun77919_ip = 0;;) switch (_fun77919_ip) {
                                case 0:
                                    StartGenerator();
                                    var6 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun77919_ip = 235;
                                        continue _fun77919
                                    }
                                case 13:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var1 = 15;
                                    var1 = var5[var1];
                                    var2 = undefined;
                                    var9 = var4.bind(var2)(var1);
                                    var8 = var9.track;
                                    var1 = _closure1_slot9;
                                    var4 = var1.DOUBLE_TAP_REACT_EMOJI_UPDATED;
                                    var1 = {};
                                    var7 = var6.id;
                                    var1.emoji_id = var7;
                                    var7 = var6.name;
                                    var1.emoji_name = var7;
                                    var7 = var6.animated;
                                    var1.emoji_animated = var7;
                                    var7 = false;
                                    var1.recommended = var7;
                                    var10 = _closure2_slot0;
                                    var1.location = var10;
                                    var1 = var8.bind(var9)(var4, var1);
                                    var4 = _closure1_slot0;
                                    var1 = 16;
                                    var1 = var5[var1];
                                    var1 = var4.bind(var2)(var1);
                                    var5 = var1.DoubleTapReactionEmoji;
                                    var4 = var5.updateSetting;
                                    var1 = {};
                                    var8 = var6.id;
                                    var1.emojiId = var8;
                                    var8 = var6.name;
                                    var1.emojiName = var8;
                                    var8 = var6.animated;
                                    var1.animated = var8;
                                    var1.disableDoubleTap = var7;
                                    var1 = var4.bind(var5)(var1);
                                    SaveGenerator(address = 185);
                                case 183:
                                    return var1;
                                case 185:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun77919_ip = 232;
                                        continue _fun77919
                                    }
                                case 191:
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var3 = 17;
                                    var3 = var5[var3];
                                    var5 = var4.bind(var2)(var3);
                                    var4 = var5.showDoubleTapEmojiUpdatedToast;
                                    var3 = {};
                                    var3.emoji = var6;
                                    var3 = var4.bind(var5)(var3);
                                    return var2;
                                case 232:
                                    return var1;
                                case 235:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var5 = var6.bind(var0)(var5);
                    var _closure3_slot0 = var5;
                    var1 = function() { // Environment: var1
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var2.onPressEmoji = var1;
                    var1 = true;
                    var2.startExpanded = var1;
                    var1 = 'stack';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var13 = var3.bind(var5)(var1, var2);
                var0 = var0.disableDoubleTap;
                var16 = null;
                var1 = var16 == var0;
                var2 = undefined;
                if (var1) {
                    _fun77911_ip = 254;
                    continue _fun77911
                }
            case 249:
                var2 = var0.value;
            case 254:
                var1 = true;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun77911_ip = 658;
                    continue _fun77911
                }
            case 265:
                var1 = var16 == var14;
                var0 = null;
                if (var1) {
                    _fun77911_ip = 658;
                    continue _fun77911
                }
            case 277:
                var3 = _closure1_slot13;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var10.doubleTapEmojiEditNudgeContainer;
                var1.style = var5;
                var8 = _closure1_slot12;
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 18;
                var5 = var17[var9];
                var5 = var20.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'color': 'text-subtle',
                    'variant': 'text-sm/normal'
                };
                var15 = 19;
                var7 = var17[var15];
                var7 = var20.bind(var4)(var7);
                var19 = var7.intl;
                var18 = var19.string;
                var7 = var17[var15];
                var7 = var20.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7["1EUr/W"];
                var7 = var18.bind(var19)(var7);
                var5.children = var7;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var7 = _closure1_slot1;
                var6 = 20;
                var6 = var17[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var17 = var10.doubleTapEmojiContainer;
                var6.style = var17;
                var17 = var10.doubleTapCustomEmoji;
                var6.fastImageStyle = var17;
                var17 = var10.doubleTapTextEmoji;
                var6.textEmojiStyle = var17;
                var6.src = var11;
                var11 = var14.id;
                var16 = var16 == var11;
                var11 = '';
                if (!var16) {
                    _fun77911_ip = 483;
                    continue _fun77911
                }
            case 478:
                var11 = var14.surrogates;
            case 483:
                var6.name = var11;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var8 = _closure1_slot12;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 21;
                var6 = var11[var6];
                var6 = var14.bind(var4)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var6.onPress = var13;
                var12 = _closure1_slot14;
                var6.hitSlop = var12;
                var10 = var10.editButton;
                var6.style = var10;
                var9 = var11[var9];
                var9 = var14.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'color': 'text-brand',
                    'variant': 'text-sm/normal'
                };
                var12 = var11[var15];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var15];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.bt75uw;
                var11 = var12.bind(var13)(var11);
                var9.children = var11;
                var9 = var8.bind(var4)(var10, var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 658:
                return var0;
        }
    };
    var2.DoubleTapEmojiEditNudge = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 1298, 1465, 1310, 660, 1616, 33, 1297, 671, 566, 6963, 1417, 6953, 795, 1348, 6972, 3902, 1234, 5733, 4867, 2]);