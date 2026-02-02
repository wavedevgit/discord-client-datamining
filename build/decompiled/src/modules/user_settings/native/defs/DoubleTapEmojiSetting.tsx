// modules/user_settings/native/defs/DoubleTapEmojiSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var8 = function() {
        _fun88432: for (var _fun88432_ip = 0;;) switch (_fun88432_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.useStateFromStoresObject;
                var0 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    _fun88433: for (var _fun88433_ip = 0;;) switch (_fun88433_ip) {
                        case 0:
                            var0 = _closure1_slot4;
                            var0 = var0.settings;
                            var2 = var0.textAndImages;
                            var1 = null;
                            var3 = var1 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun88433_ip = 36;
                                continue _fun88433
                            }
                        case 30:
                            var0 = var2.defaultReactionEmoji;
                        case 36:
                            if (!(var1 == var0)) {
                                _fun88433_ip = 42;
                                continue _fun88433
                            }
                        case 40:
                            var0 = {};
                        case 42:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2, var0);
                var2 = var0.disableDoubleTap;
                var0 = null;
                var3 = var0 == var2;
                if (var3) {
                    _fun88432_ip = 78;
                    continue _fun88432
                }
            case 73:
                var1 = var2.value;
            case 78:
                var0 = var0 != var1;
                if (!var0) {
                    _fun88432_ip = 88;
                    continue _fun88432
                }
            case 85:
                var0 = var1;
            case 88:
                return var0;
        }
    };
    var _closure1_slot9 = var8;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var9 = true;
    var1.value = var9;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var13.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var3 = var5[var1];
    var1 = arg3;
    var1 = var1.bind(var0)(var3);
    var1 = 2;
    var1 = var5[var1];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var10 = var1.MobileSetting;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot5 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.EmojiIntention;
    var _closure1_slot6 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot7 = var1;
    var1 = 7;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createStyles;
    var1 = {};
    var11 = {};
    var12 = 8;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var11.color = var12;
    var1.textEmoji = var11;
    var1 = var3.bind(var6)(var1);
    var _closure1_slot8 = var1;
    var1 = 18;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createPressable;
    var1 = {};
    var11 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 19;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["96WKNB"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var11;
    var10 = var10.CHAT;
    var1.parent = var10;
    var10 = function() {
        _fun88435: for (var _fun88435_ip = 0;;) switch (_fun88435_ip) {
            case 0:
                var0 = _closure1_slot8;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 9;
                var0 = var6[var0];
                var8 = var2.bind(var4)(var0);
                var7 = var8.useStateFromStoresObject;
                var0 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var0
                    _fun88436: for (var _fun88436_ip = 0;;) switch (_fun88436_ip) {
                        case 0:
                            var0 = _closure1_slot4;
                            var0 = var0.settings;
                            var2 = var0.textAndImages;
                            var1 = null;
                            var3 = var1 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun88436_ip = 36;
                                continue _fun88436
                            }
                        case 30:
                            var0 = var2.defaultReactionEmoji;
                        case 36:
                            if (!(var1 == var0)) {
                                _fun88436_ip = 42;
                                continue _fun88436
                            }
                        case 40:
                            var0 = {};
                        case 42:
                            return var0;
                    }
                };
                var3 = var7.bind(var8)(var3, var0);
                var0 = 10;
                var0 = var6[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.disambiguatedEmojiFromProtoValue;
                var7 = var0.bind(var2)(var3);
                var0 = null;
                if (!(var0 != var7)) {
                    _fun88435_ip = 271;
                    continue _fun88435
                }
            case 98:
                var2 = var7.id;
                if (!(var0 == var2)) {
                    _fun88435_ip = 114;
                    continue _fun88435
                }
            case 107:
                var6 = var7.url;
                _fun88435_ip = 170;
                continue _fun88435;
            case 114:
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 11;
                var2 = var8[var2];
                var8 = var3.bind(var4)(var2);
                var3 = var8.getEmojiURL;
                var2 = {
                    'id': null,
                    'size': 24,
                    'animated': false
                };
                var9 = var7.id;
                var2.id = var9;
                var6 = var3.bind(var8)(var2);
            case 170:
                var3 = _closure1_slot7;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 12;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var8 = {
                    'height': 24,
                    'width': 24
                };
                var1.fastImageStyle = var8;
                var1.src = var6;
                var6 = var7.id;
                var8 = var0 == var6;
                var6 = '';
                if (!var8) {
                    _fun88435_ip = 241;
                    continue _fun88435
                }
            case 236:
                var6 = var7.surrogates;
            case 241:
                var1.name = var6;
                var6 = true;
                var1.adjustsFontSizeToFit = var6;
                var5 = var5.textEmoji;
                var1.textEmojiStyle = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 271:
                return var0;
        }
    };
    var1.useTrailing = var10;
    var10 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.openEmojiPickerActionSheet;
        var1 = {};
        var6 = _closure1_slot6;
        var6 = var6.DEFAULT_REACT_EMOJI;
        var1.pickerIntention = var6;
        var6 = _closure1_slot3;
        var5 = function*(arg0) { // Environment: var4
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun88439: for (var _fun88439_ip = 0;;) switch (_fun88439_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun88439_ip = 246;
                            continue _fun88439
                        }
                    case 13:
                        var11 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 14;
                        var1 = var5[var1];
                        var2 = undefined;
                        var9 = var11.bind(var2)(var1);
                        var8 = var9.track;
                        var1 = _closure1_slot5;
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
                        var10 = 15;
                        var10 = var5[var10];
                        var10 = var11.bind(var2)(var10);
                        var10 = var10.USER_SETTINGS;
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
                        SaveGenerator(address = 196);
                    case 194:
                        return var1;
                    case 196:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun88439_ip = 243;
                            continue _fun88439
                        }
                    case 202:
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
                    case 243:
                        return var1;
                    case 246:
                        return var0;
                }
            };
            return var0;
        };
        var5 = var6.bind(var0)(var5);
        var _closure2_slot0 = var5;
        var4 = function() { // Environment: var4
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var1.onPressEmoji = var4;
        var4 = true;
        var1.startExpanded = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.onPress = var10;
    var1.withArrow = var9;
    var9 = function() {
        _fun88441: for (var _fun88441_ip = 0;;) switch (_fun88441_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.useStateFromStoresObject;
                var0 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    _fun88442: for (var _fun88442_ip = 0;;) switch (_fun88442_ip) {
                        case 0:
                            var0 = _closure1_slot4;
                            var0 = var0.settings;
                            var2 = var0.textAndImages;
                            var1 = null;
                            var3 = var1 == var2;
                            var0 = undefined;
                            if (var3) {
                                _fun88442_ip = 36;
                                continue _fun88442
                            }
                        case 30:
                            var0 = var2.defaultReactionEmoji;
                        case 36:
                            if (!(var1 == var0)) {
                                _fun88442_ip = 42;
                                continue _fun88442
                            }
                        case 40:
                            var0 = {};
                        case 42:
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var2, var0);
                var0 = 10;
                var0 = var4[var0];
                var1 = var3.bind(var1)(var0);
                var0 = var1.disambiguatedEmojiFromProtoValue;
                var1 = var0.bind(var1)(var2);
                var0 = null;
                var2 = var0 == var1;
                if (var2) {
                    _fun88441_ip = 118;
                    continue _fun88441
                }
            case 90:
                var3 = var1.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = ':';
                var0 = var2.bind(var1)(var3, var1);
            case 118:
                return var0;
        }
    };
    var1.useDescription = var9;
    var1.useIsDisabled = var8;
    var7 = function() {
        var1 = _closure1_slot9;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = !var0;
        return var0;
    };
    var1.usePredicate = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/DoubleTapEmojiSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1310, 6969, 660, 1616, 33, 1297, 671, 566, 6963, 1417, 5733, 6953, 795, 5543, 1348, 6972, 8945, 1234, 2]);