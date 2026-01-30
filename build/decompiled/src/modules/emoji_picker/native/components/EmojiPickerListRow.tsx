// modules/emoji_picker/native/components/EmojiPickerListRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun73864: for (var _fun73864_ip = 0;;) switch (_fun73864_ip) {
        case 0:
            var4 = require;
            var12 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var12;
            var _closure1_slot2 = var5;
            var0 = function(arg0, arg1) { // Original name: getEmojiItemUrl, environment: var1
                _fun73865: for (var _fun73865_ip = 0;;) switch (_fun73865_ip) {
                    case 0:
                        var2 = arg0;
                        var6 = arg1;
                        var0 = var2.id;
                        var1 = null;
                        if (!(var1 != var0)) {
                            _fun73865_ip = 88;
                            continue _fun73865
                        }
                    case 17:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 10;
                        var3 = var3[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.getEmojiURL;
                        var0 = {};
                        var7 = var2.id;
                        var0.id = var7;
                        if (!var6) {
                            _fun73865_ip = 68;
                            continue _fun73865
                        }
                    case 62:
                        var6 = var2.animated;
                    case 68:
                        var0.animated = var6;
                        var5 = _closure1_slot5;
                        var0.size = var5;
                        var0 = var3.bind(var4)(var0);
                        _fun73865_ip = 110;
                        continue _fun73865;
                    case 88:
                        var2 = var2.url;
                        var3 = var1 != var2;
                        var1 = '';
                        if (!var3) {
                            _fun73865_ip = 107;
                            continue _fun73865
                        }
                    case 104:
                        var1 = var2;
                    case 107:
                        var0 = var1;
                    case 110:
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var0 = function() { // Original name: EmojiItemLockedOverlay, environment: var1
                var0 = _closure1_slot9;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var7.lockContainer;
                var0.style = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 11;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.LockIcon;
                var4 = {};
                var7 = var7.lock;
                var4.style = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot13 = var0;
            var0 = function(arg0) { // Original name: EmojiItem, environment: var1
                _fun73867: for (var _fun73867_ip = 0;;) switch (_fun73867_ip) {
                    case 0:
                        var0 = arg0;
                        var9 = var0.emoji;
                        var _closure2_slot0 = var9;
                        var1 = var0.category;
                        var _closure2_slot1 = var1;
                        var5 = var0.disabled;
                        var1 = var0.onPressEmoji;
                        var _closure2_slot2 = var1;
                        var1 = var0.onLongPressEmoji;
                        var _closure2_slot3 = var1;
                        var2 = var0.animateEmoji;
                        var0 = var0.isSectionNitroLocked;
                        var1 = _closure1_slot9;
                        var3 = undefined;
                        var10 = var1.bind(var3)();
                        var1 = _closure1_slot12;
                        var11 = var1.bind(var3)(var9, var2);
                        if (!var5) {
                            _fun73867_ip = 91;
                            continue _fun73867
                        }
                    case 88:
                        var5 = !var0;
                    case 91:
                        var2 = _closure1_slot8;
                        var1 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var0 = 12;
                        var0 = var7[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.PressableOpacity;
                        var0 = {};
                        var7 = 'button';
                        var0.accessibilityRole = var7;
                        var7 = var9.name;
                        var0.accessibilityLabel = var7;
                        var8 = var10.surrogatesFrame;
                        var7 = new Array(2);
                        var7[0] = var8;
                        var8 = var5;
                        if (!var5) {
                            _fun73867_ip = 166;
                            continue _fun73867
                        }
                    case 160:
                        var8 = var10.disabledOverlay;
                    case 166:
                        var7[1] = var8;
                        var0.style = var7;
                        var7 = function() { // Original name: onPress, environment: var4
                            var3 = _closure2_slot2;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var0.onPress = var7;
                        var4 = function() { // Original name: onLongPress, environment: var4
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var0.onLongPress = var4;
                        var7 = var9.id;
                        var4 = null;
                        if (!(var4 == var7)) {
                            _fun73867_ip = 276;
                            continue _fun73867
                        }
                    case 208:
                        var8 = _closure1_slot7;
                        var7 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var4 = 17;
                        var4 = var12[var4];
                        var4 = var7.bind(var3)(var4);
                        var7 = var4.LegacyText;
                        var4 = {};
                        var12 = false;
                        var4.allowFontScaling = var12;
                        var12 = var10.surrogates;
                        var4.style = var12;
                        var9 = var9.surrogates;
                        var4.children = var9;
                        var7 = var8.bind(var3)(var7, var4);
                        _fun73867_ip = 422;
                        continue _fun73867;
                    case 276:
                        var9 = _closure1_slot7;
                        var8 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var4 = 13;
                        var4 = var13[var4];
                        var8 = var8.bind(var3)(var4);
                        var4 = {};
                        var12 = 'contain';
                        var4.resizeMode = var12;
                        var10 = var10.image;
                        var4.style = var10;
                        var12 = _closure1_slot0;
                        var10 = 14;
                        var10 = var13[var10];
                        var13 = var12.bind(var3)(var10);
                        var12 = var13.isThemeDark;
                        var10 = _closure1_slot4;
                        var10 = var10.theme;
                        var10 = var12.bind(var13)(var10);
                        var13 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        if (var10) {
                            _fun73867_ip = 382;
                            continue _fun73867
                        }
                    case 368:
                        var10 = 16;
                        var10 = var14[var10];
                        var10 = var13.bind(var3)(var10);
                        _fun73867_ip = 394;
                        continue _fun73867;
                    case 382:
                        var12 = 15;
                        var12 = var14[var12];
                        var10 = var13.bind(var3)(var12);
                    case 394:
                        var4.placeholder = var10;
                        var10 = {};
                        var10.uri = var11;
                        var4.source = var10;
                        var10 = true;
                        var4.usesSmallCache = var10;
                        var7 = var9.bind(var3)(var8, var4);
                    case 422:
                        var4 = new Array(2);
                        var4[0] = var7;
                        if (!var5) {
                            _fun73867_ip = 449;
                            continue _fun73867
                        }
                    case 433:
                        var8 = _closure1_slot7;
                        var7 = _closure1_slot13;
                        var6 = {};
                        var5 = var8.bind(var3)(var7, var6);
                    case 449:
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot14 = var0;
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
            var3 = arg3;
            var0 = undefined;
            var6 = var3.bind(var0)(var6);
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.View;
            var _closure1_slot3 = var7;
            var10 = var3.StyleSheet;
            var3 = 2;
            var3 = var5[var3];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var13 = var3.IMAGE_SIZE;
            var _closure1_slot5 = var13;
            var11 = var3.ROW_HEIGHT;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.PADDING_VERTICAL;
            var _closure1_slot6 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.jsx;
            var _closure1_slot7 = var7;
            var3 = var3.jsxs;
            var _closure1_slot8 = var3;
            var3 = 6;
            var3 = var5[var3];
            var8 = var4.bind(var0)(var3);
            var7 = var8.createStyles;
            var3 = {};
            var9 = {};
            var9.height = var13;
            var9.width = var13;
            var3.image = var9;
            var9 = {};
            var9.height = var13;
            var9.width = var13;
            var13 = 'center';
            var9.alignItems = var13;
            var9.justifyContent = var13;
            var3.surrogatesFrame = var9;
            var9 = {};
            var13 = 7;
            var14 = var5[var13];
            var14 = var12.bind(var0)(var14);
            var14 = var14.radii;
            var14 = var14.sm;
            var9.borderRadius = var14;
            var14 = 'hidden';
            var9.overflow = var14;
            var3.disabledOverlay = var9;
            var9 = {};
            var14 = 8;
            var14 = var5[var14];
            var15 = var4.bind(var0)(var14);
            var14 = var15.isAndroid;
            var15 = var14.bind(var15)();
            var14 = 30;
            if (!var15) {
                _fun73864_ip = 367;
                continue _fun73864
            }
        case 364:
            var14 = 26;
        case 367:
            var9.fontSize = var14;
            var13 = var5[var13];
            var13 = var12.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.TEXT_DEFAULT;
            var9.color = var13;
            var3.surrogates = var9;
            var9 = {
                'height': null,
                'flexDirection': 'row',
                'alignItems': 'center',
                'justifyContent': 'space-between'
            };
            var9.height = var11;
            var3.row = var9;
            var9 = {
                'backgroundColor': null,
                'alignItems': 'center',
                'justifyContent': 'center'
            };
            var11 = 9;
            var11 = var5[var11];
            var12 = var12.bind(var0)(var11);
            var11 = '#000000';
            var13 = var12.bind(var0)(var11);
            var12 = var13.alpha;
            var11 = 0.2;
            var12 = var12.bind(var13)(var11);
            var11 = var12.hex;
            var11 = var11.bind(var12)();
            var9.backgroundColor = var11;
            var17 = var10.absoluteFillObject;
            var18 = var9;
            var10 = copyDataProperties(var18, var17);
            var3.lockContainer = var9;
            var9 = {
                'width': 16,
                'height': 16,
                'tintColor': 'white'
            };
            var3.lock = var9;
            var3 = var7.bind(var8)(var3);
            var _closure1_slot9 = var3;
            var7 = var6.memo;
            var3 = function(arg0) { // Environment: var1
                _fun73870: for (var _fun73870_ip = 0;;) switch (_fun73870_ip) {
                    case 0:
                        var1 = arg0;
                        var18 = var1.emojis;
                        var _closure2_slot0 = var18;
                        var17 = var1.emojisDisabled;
                        var0 = var1.category;
                        var _closure2_slot1 = var0;
                        var16 = var1.rowSize;
                        var9 = var1.containerWidth;
                        var0 = var1.row;
                        var2 = var1.onPressEmoji;
                        var _closure2_slot2 = var2;
                        var2 = var1.onLongPressEmoji;
                        var _closure2_slot3 = var2;
                        var15 = var1.animateEmoji;
                        var6 = var1.isSectionNitroLocked;
                        var1 = _closure1_slot9;
                        var3 = undefined;
                        var5 = var1.bind(var3)();
                        var7 = new Array(0);
                        var14 = var0 * var16;
                        var0 = var14 + var16;
                        var13 = null;
                        var12 = '';
                        var11 = true;
                        var10 = undefined;
                        var2 = undefined;
                        var1 = var14;
                        if (!(var1 < var0)) {
                            _fun73870_ip = 312;
                            continue _fun73870
                        }
                    case 128:
                        var23 = var18[var1];
                        if (!(var3 !== var23)) {
                            _fun73870_ip = 262;
                            continue _fun73870
                        }
                    case 139:
                        var21 = var7.push;
                        var0 = {};
                        var20 = var23.id;
                        var22 = var13 != var20;
                        var19 = null;
                        if (!var22) {
                            _fun73870_ip = 163;
                            continue _fun73870
                        }
                    case 160:
                        var19 = var20;
                    case 163:
                        var0.id = var19;
                        var19 = var23.name;
                        var24 = var13 != var19;
                        var22 = var12;
                        if (!var24) {
                            _fun73870_ip = 185;
                            continue _fun73870
                        }
                    case 182:
                        var22 = var19;
                    case 185:
                        var0.name = var22;
                        var22 = _closure1_slot12;
                        var22 = var22.bind(var3)(var23, var15);
                        var0.url = var22;
                        var22 = var23.animated;
                        var22 = var11 === var22;
                        if (!var22) {
                            _fun73870_ip = 219;
                            continue _fun73870
                        }
                    case 216:
                        var22 = var15;
                    case 219:
                        var0.animated = var22;
                        var22 = var23.id;
                        var22 = var13 != var22;
                        if (!var22) {
                            _fun73870_ip = 251;
                            continue _fun73870
                        }
                    case 236:
                        var24 = var17.has;
                        var23 = var23.id;
                        var22 = var24.bind(var17)(var23);
                    case 251:
                        var0.disabled = var22;
                        var0 = var21.bind(var7)(var0);
                        _fun73870_ip = 292;
                        continue _fun73870;
                    case 262:
                        var21 = var7.push;
                        var0 = {
                            'id': null,
                            'name': '',
                            'url': '',
                            'animated': false,
                            'disabled': false
                        };
                        var0 = var21.bind(var7)(var0);
                        var20 = var10;
                        var19 = var2;
                    case 292:
                        var1 = var1 + 1;
                        var0 = var14 + var16;
                        var10 = var20;
                        var2 = var19;
                        if (var1 < var0) {
                            _fun73870_ip = 128;
                            continue _fun73870
                        }
                    case 312:
                        var2 = _closure1_slot7;
                        var1 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var0 = 18;
                        var0 = var10[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var5 = var5.row;
                        var0.style = var5;
                        var5 = {};
                        var5.rowContentWidth = var9;
                        var9 = _closure1_slot6;
                        var5.rowContentPaddingVertical = var9;
                        var8 = _closure1_slot5;
                        var5.itemSize = var8;
                        var5.items = var7;
                        var5.isSectionNitroLocked = var6;
                        var0.rowData = var5;
                        var5 = function(arg0) { // Original name: onPressEmoji, environment: var4
                            _fun73871: for (var _fun73871_ip = 0;;) switch (_fun73871_ip) {
                                case 0:
                                    var0 = arg0;
                                    var _closure3_slot0 = var0;
                                    var3 = _closure2_slot0;
                                    var2 = var3.find;
                                    var1 = function(arg0) { // Environment: var1
                                        var0 = arg0;
                                        var1 = var0.name;
                                        var0 = _closure3_slot0;
                                        var0 = var0.nativeEvent;
                                        var0 = var0.emojiName;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var3 = var2.bind(var3)(var1);
                                    var1 = null;
                                    if (!(var1 != var3)) {
                                        _fun73871_ip = 55;
                                        continue _fun73871
                                    }
                                case 39:
                                    var2 = _closure2_slot2;
                                    var1 = _closure2_slot1;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var3, var1);
                                case 55:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0.onPressEmoji = var5;
                        var4 = function(arg0) { // Original name: onLongPressEmoji, environment: var4
                            _fun73873: for (var _fun73873_ip = 0;;) switch (_fun73873_ip) {
                                case 0:
                                    var0 = arg0;
                                    var _closure3_slot0 = var0;
                                    var3 = _closure2_slot0;
                                    var2 = var3.find;
                                    var1 = function(arg0) { // Environment: var1
                                        var0 = arg0;
                                        var1 = var0.name;
                                        var0 = _closure3_slot0;
                                        var0 = var0.nativeEvent;
                                        var0 = var0.emojiName;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var2 = var2.bind(var3)(var1);
                                    var1 = null;
                                    if (!(var1 != var2)) {
                                        _fun73873_ip = 50;
                                        continue _fun73873
                                    }
                                case 39:
                                    var1 = _closure2_slot3;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var2);
                                case 50:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0.onLongPressEmoji = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var3 = var7.bind(var6)(var3);
            var _closure1_slot10 = var3;
            var7 = var6.memo;
            var3 = function(arg0) { // Environment: var1
                _fun73875: for (var _fun73875_ip = 0;;) switch (_fun73875_ip) {
                    case 0:
                        var0 = arg0;
                        var15 = var0.emojis;
                        var14 = var0.emojisDisabled;
                        var13 = var0.category;
                        var12 = var0.rowSize;
                        var1 = var0.row;
                        var11 = var0.onPressEmoji;
                        var10 = var0.onLongPressEmoji;
                        var9 = var0.animateEmoji;
                        var8 = var0.isSectionNitroLocked;
                        var2 = _closure1_slot9;
                        var3 = undefined;
                        var5 = var2.bind(var3)();
                        var4 = new Array(0);
                        var7 = var1 * var12;
                        var1 = var7 + var12;
                        var6 = null;
                        var2 = var7;
                        if (!(var2 < var1)) {
                            _fun73875_ip = 243;
                            continue _fun73875
                        }
                    case 94:
                        var20 = var15[var2];
                        if (!(var3 !== var20)) {
                            _fun73875_ip = 192;
                            continue _fun73875
                        }
                    case 102:
                        var16 = var4.push;
                        var18 = _closure1_slot7;
                        var17 = _closure1_slot14;
                        var1 = {};
                        var1.emoji = var20;
                        var1.category = var13;
                        var1.animateEmoji = var9;
                        var19 = var20.id;
                        var19 = var6 != var19;
                        if (!var19) {
                            _fun73875_ip = 159;
                            continue _fun73875
                        }
                    case 144:
                        var21 = var14.has;
                        var20 = var20.id;
                        var19 = var21.bind(var14)(var20);
                    case 159:
                        var1.disabled = var19;
                        var1.onPressEmoji = var11;
                        var1.onLongPressEmoji = var10;
                        var1.isSectionNitroLocked = var8;
                        var1 = var18.bind(var3)(var17, var1, var2);
                        var1 = var16.bind(var4)(var1);
                        _fun73875_ip = 229;
                        continue _fun73875;
                    case 192:
                        var16 = var4.push;
                        var18 = _closure1_slot7;
                        var17 = _closure1_slot3;
                        var1 = {};
                        var19 = var5.image;
                        var1.style = var19;
                        var1 = var18.bind(var3)(var17, var1, var2);
                        var1 = var16.bind(var4)(var1);
                    case 229:
                        var2 = var2 + 1;
                        var1 = var7 + var12;
                        if (var2 < var1) {
                            _fun73875_ip = 94;
                            continue _fun73875
                        }
                    case 243:
                        var2 = _closure1_slot7;
                        var1 = _closure1_slot3;
                        var0 = {};
                        var5 = var5.row;
                        var0.style = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var3 = var7.bind(var6)(var3);
            var _closure1_slot11 = var3;
            var3 = var6.memo;
            var1 = function(arg0) { // Environment: var1
                _fun73876: for (var _fun73876_ip = 0;;) switch (_fun73876_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = var4.nativeRow;
                        var3 = undefined;
                        if (!(var1 === var3)) {
                            _fun73876_ip = 48;
                            continue _fun73876
                        }
                    case 15:
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 8;
                        var0 = var5[var0];
                        var2 = var2.bind(var3)(var0);
                        var0 = var2.isAndroid;
                        var1 = var0.bind(var2)();
                    case 48:
                        var0 = null;
                        var2 = Object.create(var0);
                        var0 = 0;
                        var2.nativeRow = var0;
                        var8 = {};
                        var7 = var4;
                        var6 = var2;
                        var4 = copyDataProperties(var8, var7, var6);
                        var2 = _closure1_slot7;
                        if (var1) {
                            _fun73876_ip = 88;
                            continue _fun73876
                        }
                    case 82:
                        var1 = _closure1_slot11;
                        _fun73876_ip = 92;
                        continue _fun73876;
                    case 88:
                        var1 = _closure1_slot10;
                    case 92:
                        var0 = {};
                        var8 = var0;
                        var7 = var4;
                        var4 = copyDataProperties(var8, var7);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var1 = var3.bind(var6)(var1);
            var3 = 19;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/emoji_picker/native/components/EmojiPickerListRow.tsx';
            var3 = var4.bind(var5)(var3);
            var2.EmojiPickerListRow = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3155, 9240, 1565, 33, 1297, 671, 478, 669, 1417, 4820, 4864, 4666, 3165, 5731, 5732, 4838, 9255, 2]);