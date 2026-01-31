// modules/forums/native/ChannelSettingsEditForumTag.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var10 = 0;
    var3 = var5[var10];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot8 = var6;
    var3 = var3.EmojiIntention;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'display': 'flex',
        'flex': 1
    };
    var9 = 8;
    var9 = var5[var9];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var3.backgroundColor = var9;
    var6.container = var3;
    var3 = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'height': 24,
        'width': 24
    };
    var6.emojiIconWrapper = var3;
    var3 = {
        'height': 20,
        'width': 20
    };
    var6.imageEmoji = var3;
    var3 = 26;
    var9 = {
        'fontSize': 20,
        'lineHeight': 26
    };
    var6.textEmoji = var9;
    var9 = {
        'width': '100%',
        'flexGrow': 1
    };
    var6.nameInput = var9;
    var9 = {};
    var9.flex = var10;
    var6.saveButton = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot12 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/ChannelSettingsEditForumTag.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun109338: for (var _fun109338_ip = 0;;) switch (_fun109338_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channelId;
                var _closure2_slot0 = var0;
                var5 = var1.tag;
                var _closure2_slot1 = var5;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var1 = _closure1_slot12;
                var27 = var1.bind(var3)();
                var _closure2_slot2 = var27;
                var8 = null;
                var11 = var8 == var5;
                var _closure2_slot3 = var11;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useNavigation;
                var6 = var1.bind(var2)();
                var _closure2_slot4 = var6;
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var7 = var8 != var5;
                var1 = null;
                if (!var7) {
                    _fun109338_ip = 167;
                    continue _fun109338
                }
            case 142:
                var7 = {};
                var9 = var5.emojiId;
                var7.id = var9;
                var9 = var5.emojiName;
                var7.name = var9;
                var1 = var7;
            case 167:
                var2 = var2.bind(var4)(var1);
                var1 = _closure1_slot3;
                var9 = 2;
                var1 = var1.bind(var3)(var2, var9);
                var4 = 0;
                var16 = var1[var4];
                _closure2_slot5 = var16;
                var2 = 1;
                var1 = var1[var2];
                _closure2_slot6 = var1;
                var12 = _closure1_slot4;
                var7 = var12.useState;
                var1 = var8 == var5;
                var13 = undefined;
                if (var1) {
                    _fun109338_ip = 229;
                    continue _fun109338
                }
            case 224:
                var13 = var5.name;
            case 229:
                var15 = var8 != var13;
                var21 = '';
                var1 = var21;
                if (!var15) {
                    _fun109338_ip = 246;
                    continue _fun109338
                }
            case 243:
                var1 = var13;
            case 246:
                var7 = var7.bind(var12)(var1);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var7, var9);
                var18 = var1[var4];
                _closure2_slot7 = var18;
                var1 = var1[var2];
                _closure2_slot8 = var1;
                var12 = _closure1_slot4;
                var7 = var12.useState;
                var13 = var8 == var5;
                var1 = undefined;
                if (var13) {
                    _fun109338_ip = 301;
                    continue _fun109338
                }
            case 295:
                var1 = var5.moderated;
            case 301:
                var7 = var7.bind(var12)(var1);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var7, var9);
                var20 = var1[var4];
                _closure2_slot9 = var20;
                var1 = var1[var2];
                _closure2_slot10 = var1;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 10;
                var7 = var4[var1];
                var13 = var2.bind(var3)(var7);
                var12 = var13.useStateFromStores;
                var7 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function() { // Environment: var14
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var12.bind(var13)(var9, var7);
                _closure2_slot11 = var7;
                var1 = var4[var1];
                var7 = var2.bind(var3)(var1);
                var4 = var7.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var14
                    _fun109340: for (var _fun109340_ip = 0;;) switch (_fun109340_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var0 = null;
                            var3 = var0 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun109340_ip = 27;
                                continue _fun109340
                            }
                        case 18:
                            var3 = _closure2_slot5;
                            var2 = var3.id;
                        case 27:
                            var2 = var0 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun109340_ip = 63;
                                continue _fun109340
                            }
                        case 36:
                            var3 = _closure1_slot6;
                            var2 = var3.getUsableCustomEmojiById;
                            var1 = _closure2_slot5;
                            var1 = var1.id;
                            var0 = var2.bind(var3)(var1);
                        case 63:
                            return var0;
                    }
                };
                var33 = var4.bind(var7)(var2, var1);
                var4 = _closure1_slot4;
                var2 = var4.useRef;
                var1 = {};
                var1.emoji = var16;
                var1.tagName = var18;
                var1.moderated = var20;
                var1 = var2.bind(var4)(var1);
                _closure2_slot12 = var1;
                var7 = var4.useEffect;
                var2 = new Array(3);
                var2[0] = var16;
                var2[1] = var18;
                var2[2] = var20;
                var1 = function() { // Environment: var14
                    var1 = _closure2_slot12;
                    var0 = {};
                    var3 = _closure2_slot5;
                    var0.emoji = var3;
                    var3 = _closure2_slot7;
                    var0.tagName = var3;
                    var2 = _closure2_slot9;
                    var0.moderated = var2;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var7.bind(var4)(var1, var2);
                var7 = var4.useLayoutEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var11;
                var1 = function() { // Environment: var14
                    var2 = _closure2_slot4;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = function() {
                        _fun109343: for (var _fun109343_ip = 0;;) switch (_fun109343_ip) {
                            case 0:
                                var3 = _closure1_slot10;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 11;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.Text;
                                var0 = {
                                    'variant': 'redesign/heading-18/bold',
                                    'color': 'mobile-text-heading-primary',
                                    'accessibilityRole': 'header'
                                };
                                var4 = _closure2_slot3;
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var5 = 12;
                                var6 = var9[var5];
                                var6 = var8.bind(var2)(var6);
                                var7 = var6.intl;
                                var6 = var7.string;
                                var5 = var9[var5];
                                var5 = var8.bind(var2)(var5);
                                var5 = var5.t;
                                if (var4) {
                                    _fun109343_ip = 117;
                                    continue _fun109343
                                }
                            case 102:
                                var4 = var5.zeVg5d;
                                var4 = var6.bind(var7)(var4);
                                _fun109343_ip = 128;
                                continue _fun109343;
                            case 117:
                                var5 = var5["/jubeD"];
                                var4 = var6.bind(var7)(var5);
                            case 128:
                                var0.children = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                        }
                    };
                    var0.headerTitle = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var7.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(4);
                var1[0] = var11;
                var1[1] = var6;
                var1[2] = var0;
                var6 = var8 == var5;
                var0 = undefined;
                if (var6) {
                    _fun109338_ip = 560;
                    continue _fun109338
                }
            case 555:
                var0 = var5.id;
            case 560:
                var1[3] = var0;
                var0 = function() { // Environment: var14
                    _fun109344: for (var _fun109344_ip = 0;;) switch (_fun109344_ip) {
                        case 0:
                            var1 = _closure2_slot12;
                            var1 = var1.current;
                            var7 = var1.tagName;
                            var6 = var1.emoji;
                            var1 = var1.moderated;
                            var2 = '';
                            if (!(var2 !== var7)) {
                                _fun109344_ip = 249;
                                continue _fun109344
                            }
                        case 41:
                            var2 = _closure2_slot3;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 13;
                            var3 = var5[var3];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var3);
                            if (var2) {
                                _fun109344_ip = 168;
                                continue _fun109344
                            }
                        case 73:
                            var8 = var4.updateForumTag;
                            var3 = {};
                            var9 = _closure2_slot1;
                            var2 = null;
                            var10 = var2 == var9;
                            var9 = undefined;
                            if (var10) {
                                _fun109344_ip = 105;
                                continue _fun109344
                            }
                        case 96:
                            var10 = _closure2_slot1;
                            var9 = var10.id;
                        case 105:
                            var3.id = var9;
                            var3.name = var7;
                            var10 = var2 == var6;
                            var9 = undefined;
                            if (var10) {
                                _fun109344_ip = 127;
                                continue _fun109344
                            }
                        case 122:
                            var9 = var6.id;
                        case 127:
                            var3.emojiId = var9;
                            var9 = var2 == var6;
                            var2 = undefined;
                            if (var9) {
                                _fun109344_ip = 146;
                                continue _fun109344
                            }
                        case 141:
                            var2 = var6.name;
                        case 146:
                            var3.emojiName = var2;
                            var3.moderated = var1;
                            var2 = _closure2_slot0;
                            var2 = var8.bind(var4)(var3, var2);
                            _fun109344_ip = 235;
                            continue _fun109344;
                        case 168:
                            var3 = var4.createForumTag;
                            var2 = {};
                            var2.name = var7;
                            var7 = null;
                            var9 = var7 == var6;
                            var8 = undefined;
                            if (var9) {
                                _fun109344_ip = 196;
                                continue _fun109344
                            }
                        case 191:
                            var8 = var6.id;
                        case 196:
                            var2.emojiId = var8;
                            var7 = var7 == var6;
                            var5 = undefined;
                            if (var7) {
                                _fun109344_ip = 215;
                                continue _fun109344
                            }
                        case 210:
                            var5 = var6.name;
                        case 215:
                            var2.emojiName = var5;
                            var2.moderated = var1;
                            var1 = _closure2_slot0;
                            var1 = var3.bind(var4)(var2, var1);
                        case 235:
                            var1 = _closure2_slot4;
                            var0 = var1.pop;
                            var0 = var0.bind(var1)();
                        case 249:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                _closure2_slot13 = var0;
                var0 = function arg0() {
                    _fun109345: for (var _fun109345_ip = 0;;) switch (_fun109345_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.id;
                            var4 = null;
                            if (!(var4 == var1)) {
                                _fun109345_ip = 36;
                                continue _fun109345
                            }
                        case 14:
                            var1 = var0.surrogates;
                            if (!(var4 != var1)) {
                                _fun109345_ip = 36;
                                continue _fun109345
                            }
                        case 23:
                            var2 = var0.surrogates;
                            var1 = '';
                            if (!(var1 === var2)) {
                                _fun109345_ip = 43;
                                continue _fun109345
                            }
                        case 36:
                            var5 = var0.name;
                            _fun109345_ip = 48;
                            continue _fun109345;
                        case 43:
                            var5 = var0.surrogates;
                        case 48:
                            var3 = _closure2_slot6;
                            var2 = {};
                            var6 = var0.id;
                            var2.id = var6;
                            var0 = var0.id;
                            var6 = var4 != var0;
                            var0 = undefined;
                            var4 = undefined;
                            if (var6) {
                                _fun109345_ip = 85;
                                continue _fun109345
                            }
                        case 82:
                            var4 = var5;
                        case 85:
                            var2.name = var4;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot7;
                            var2 = '';
                            if (!(var2 !== var3)) {
                                _fun109345_ip = 137;
                                continue _fun109345
                            }
                        case 106:
                            var3 = _closure2_slot4;
                            var2 = var3.setOptions;
                            var1 = {};
                            var4 = function() {
                                var3 = _closure1_slot10;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var0 = 14;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var4 = _closure2_slot13;
                                var0.onPress = var4;
                                var4 = 12;
                                var5 = var8[var4];
                                var5 = var7.bind(var2)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var8[var4];
                                var4 = var7.bind(var2)(var4);
                                var4 = var4.t;
                                var4 = var4["R3BPH+"];
                                var4 = var5.bind(var6)(var4);
                                var0.text = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var1.headerRight = var4;
                            var1 = var2.bind(var3)(var1);
                        case 137:
                            return var0;
                    }
                };
                _closure2_slot14 = var0;
                var2 = _closure1_slot10;
                var23 = _closure1_slot0;
                var22 = _closure1_slot2;
                var0 = 15;
                var0 = var22[var0];
                var0 = var23.bind(var3)(var0);
                var1 = var0.RedesignCompat;
                var0 = {};
                var6 = _closure1_slot11;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var27.container;
                var4.style = var7;
                var9 = 16;
                var7 = var22[var9];
                var7 = var23.bind(var3)(var7);
                var12 = var7.FormSection;
                var7 = {};
                var13 = var22[var9];
                var13 = var23.bind(var3)(var13);
                var15 = var13.FormHint;
                var13 = {};
                var19 = 12;
                var17 = var22[var19];
                var17 = var23.bind(var3)(var17);
                var25 = var17.intl;
                var24 = var25.string;
                var17 = var22[var19];
                var17 = var23.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["3v8kZH"];
                var17 = var24.bind(var25)(var17);
                var13.children = var17;
                var13 = var2.bind(var3)(var15, var13);
                var7.hint = var13;
                var13 = var22[var9];
                var13 = var23.bind(var3)(var13);
                var15 = var13.FormRow;
                var13 = {};
                var17 = 17;
                var22 = var22[var17];
                var22 = var23.bind(var3)(var22);
                var24 = var22.PressableOpacity;
                var23 = {};
                var22 = var27.emojiIconWrapper;
                var23.style = var22;
                var22 = 'button';
                var23.accessibilityRole = var22;
                var25 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openEmojiPickerActionSheet;
                    var1 = {};
                    var6 = _closure2_slot14;
                    var1.onPressEmoji = var6;
                    var5 = _closure1_slot9;
                    var5 = var5.COMMUNITY_CONTENT;
                    var1.pickerIntention = var5;
                    var4 = _closure2_slot11;
                    var1.channel = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var23.onPress = var25;
                if (!(var8 != var16)) {
                    _fun109338_ip = 998;
                    continue _fun109338
                }
            case 815:
                var25 = var16.name;
                if (!(var8 == var25)) {
                    _fun109338_ip = 836;
                    continue _fun109338
                }
            case 824:
                var25 = var16.id;
                if (!(var8 != var25)) {
                    _fun109338_ip = 998;
                    continue _fun109338
                }
            case 836:
                var28 = _closure1_slot10;
                var26 = _closure1_slot1;
                var29 = _closure1_slot2;
                var25 = 19;
                var25 = var29[var25];
                var26 = var26.bind(var3)(var25);
                var25 = {};
                var29 = var27.textEmoji;
                var25.textEmojiStyle = var29;
                var29 = var27.imageEmoji;
                var25.fastImageStyle = var29;
                var30 = var8 != var33;
                var29 = undefined;
                if (!var30) {
                    _fun109338_ip = 954;
                    continue _fun109338
                }
            case 893:
                var31 = _closure1_slot1;
                var32 = _closure1_slot2;
                var30 = 20;
                var30 = var32[var30];
                var32 = var31.bind(var3)(var30);
                var31 = var32.getEmojiURL;
                var30 = {};
                var34 = var33.id;
                var30.id = var34;
                var33 = var33.animated;
                var30.animated = var33;
                var33 = _closure1_slot8;
                var30.size = var33;
                var29 = var31.bind(var32)(var30);
            case 954:
                var25.src = var29;
                var29 = var8 == var16;
                var30 = undefined;
                if (var29) {
                    _fun109338_ip = 973;
                    continue _fun109338
                }
            case 968:
                var30 = var16.name;
            case 973:
                var31 = var8 != var30;
                var29 = var21;
                if (!var31) {
                    _fun109338_ip = 986;
                    continue _fun109338
                }
            case 983:
                var29 = var30;
            case 986:
                var25.name = var29;
                var25 = var28.bind(var3)(var26, var25);
                _fun109338_ip = 1036;
                continue _fun109338;
            case 998:
                var29 = _closure1_slot10;
                var28 = _closure1_slot0;
                var30 = _closure1_slot2;
                var26 = 21;
                var26 = var30[var26];
                var26 = var28.bind(var3)(var26);
                var28 = var26.ReactionIcon;
                var26 = {};
                var25 = var29.bind(var3)(var28, var26);
            case 1036:
                var23.children = var25;
                var23 = var2.bind(var3)(var24, var23);
                var13.leading = var23;
                var25 = _closure1_slot10;
                var29 = _closure1_slot0;
                var26 = _closure1_slot2;
                var23 = 22;
                var23 = var26[var23];
                var23 = var29.bind(var3)(var23);
                var24 = var23.TextInput;
                var23 = {
                    'maxLength': 20,
                    'style': null,
                    'value': null,
                    'autoCorrect': false,
                    'autoCapitalize': 'none',
                    'returnKeyType': 'done'
                };
                var27 = var27.nameInput;
                var23.style = var27;
                var23.value = var18;
                var27 = function arg0() {
                    _fun109348: for (var _fun109348_ip = 0;;) switch (_fun109348_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot8;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var3);
                            var2 = '';
                            if (!(var2 !== var3)) {
                                _fun109348_ip = 56;
                                continue _fun109348
                            }
                        case 25:
                            var3 = _closure2_slot4;
                            var2 = var3.setOptions;
                            var1 = {};
                            var4 = function() {
                                var3 = _closure1_slot10;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var0 = 14;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var5 = _closure2_slot2;
                                var5 = var5.saveButton;
                                var0.style = var5;
                                var4 = _closure2_slot13;
                                var0.onPress = var4;
                                var4 = 12;
                                var5 = var8[var4];
                                var5 = var7.bind(var2)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var8[var4];
                                var4 = var7.bind(var2)(var4);
                                var4 = var4.t;
                                var4 = var4["R3BPH+"];
                                var4 = var5.bind(var6)(var4);
                                var0.text = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var1.headerRight = var4;
                            var1 = var2.bind(var3)(var1);
                        case 56:
                            return var0;
                    }
                };
                var23.onChangeText = var27;
                var27 = var26[var19];
                var27 = var29.bind(var3)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var26 = var26[var19];
                var26 = var29.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26.aMSq0a;
                var26 = var27.bind(var28)(var26);
                var23.placeholder = var26;
                var23 = var25.bind(var3)(var24, var23);
                var13.label = var23;
                if (!(var8 == var16)) {
                    _fun109338_ip = 1196;
                    continue _fun109338
                }
            case 1190:
                var16 = null;
                if (!(var21 !== var18)) {
                    _fun109338_ip = 1284;
                    continue _fun109338
                }
            case 1196:
                var21 = _closure1_slot10;
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var17 = var24[var17];
                var17 = var23.bind(var3)(var17);
                var18 = var17.PressableOpacity;
                var17 = {};
                var17.accessibilityRole = var22;
                var22 = function() {
                    var3 = _closure2_slot6;
                    var0 = undefined;
                    var2 = null;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure2_slot8;
                    var2 = '';
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure2_slot4;
                    var2 = var3.setOptions;
                    var1 = {};
                    var1.headerRight = var0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var17.onPress = var22;
                var22 = 23;
                var22 = var24[var22];
                var22 = var23.bind(var3)(var22);
                var23 = var22.CircleXIcon;
                var22 = {};
                var24 = 'xs';
                var22.size = var24;
                var22 = var21.bind(var3)(var23, var22);
                var17.children = var22;
                var16 = var21.bind(var3)(var18, var17);
            case 1284:
                var13.trailing = var16;
                var13 = var2.bind(var3)(var15, var13);
                var7.children = var13;
                var12 = var2.bind(var3)(var12, var7);
                var7 = new Array(3);
                var7[0] = var12;
                var15 = _closure1_slot10;
                var23 = _closure1_slot0;
                var18 = _closure1_slot2;
                var12 = var18[var9];
                var12 = var23.bind(var3)(var12);
                var13 = var12.FormSection;
                var12 = {};
                var16 = var18[var9];
                var16 = var23.bind(var3)(var16);
                var17 = var16.FormSwitchRow;
                var16 = {};
                var21 = var18[var19];
                var21 = var23.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var18 = var18[var19];
                var18 = var23.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["rMH+rt"];
                var18 = var21.bind(var22)(var18);
                var16.label = var18;
                var18 = var8 != var20;
                if (!var18) {
                    _fun109338_ip = 1419;
                    continue _fun109338
                }
            case 1416:
                var18 = var20;
            case 1419:
                var16.value = var18;
                var18 = function() {
                    _fun109351: for (var _fun109351_ip = 0;;) switch (_fun109351_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            if (var1) {
                                _fun109351_ip = 25;
                                continue _fun109351
                            }
                        case 10:
                            var3 = _closure2_slot10;
                            var2 = undefined;
                            var1 = true;
                            var1 = var3.bind(var2)(var1);
                            _fun109351_ip = 78;
                            continue _fun109351;
                        case 25:
                            var1 = _closure2_slot1;
                            var3 = null;
                            var4 = var3 == var1;
                            var2 = undefined;
                            var1 = undefined;
                            if (var4) {
                                _fun109351_ip = 52;
                                continue _fun109351
                            }
                        case 42:
                            var4 = _closure2_slot1;
                            var1 = var4.moderated;
                        case 52:
                            if (!(var3 != var1)) {
                                _fun109351_ip = 69;
                                continue _fun109351
                            }
                        case 56:
                            var3 = _closure2_slot10;
                            var1 = false;
                            var1 = var3.bind(var2)(var1);
                            _fun109351_ip = 78;
                            continue _fun109351;
                        case 69:
                            var1 = _closure2_slot10;
                            var1 = var1.bind(var2)(var2);
                        case 78:
                            var2 = _closure2_slot7;
                            var1 = '';
                            if (!(var1 !== var2)) {
                                _fun109351_ip = 121;
                                continue _fun109351
                            }
                        case 90:
                            var2 = _closure2_slot4;
                            var1 = var2.setOptions;
                            var0 = {};
                            var3 = function() {
                                var3 = _closure1_slot10;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var0 = 14;
                                var0 = var8[var0];
                                var2 = undefined;
                                var0 = var7.bind(var2)(var0);
                                var1 = var0.HeaderActionButton;
                                var0 = {};
                                var5 = _closure2_slot2;
                                var5 = var5.saveButton;
                                var0.style = var5;
                                var4 = _closure2_slot13;
                                var0.onPress = var4;
                                var4 = 12;
                                var5 = var8[var4];
                                var5 = var7.bind(var2)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var8[var4];
                                var4 = var7.bind(var2)(var4);
                                var4 = var4.t;
                                var4 = var4["R3BPH+"];
                                var4 = var5.bind(var6)(var4);
                                var0.text = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var0.headerRight = var3;
                            var0 = var1.bind(var2)(var0);
                        case 121:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16.onValueChange = var18;
                var16 = var15.bind(var3)(var17, var16);
                var12.children = var16;
                var12 = var15.bind(var3)(var13, var12);
                var7[1] = var12;
                var8 = null;
                if (var11) {
                    _fun109338_ip = 1595;
                    continue _fun109338
                }
            case 1463:
                var11 = _closure1_slot10;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var9 = var15[var9];
                var9 = var18.bind(var3)(var9);
                var10 = var9.FormSection;
                var9 = {};
                var12 = 24;
                var12 = var15[var12];
                var12 = var18.bind(var3)(var12);
                var13 = var12.TableRow;
                var12 = {};
                var16 = 'danger';
                var12.variant = var16;
                var16 = var15[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.huYSMr;
                var15 = var16.bind(var17)(var15);
                var12.label = var15;
                var14 = function() {
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 25;
                    var1 = var8[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var4 = 12;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var9 = var5.intl;
                    var6 = var9.string;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var5 = var5.t;
                    var5 = var5.huYSMr;
                    var5 = var6.bind(var9)(var5);
                    var1.title = var5;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var9 = var5.intl;
                    var6 = var9.string;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var5 = var5.t;
                    var5 = var5.bkAFCf;
                    var5 = var6.bind(var9)(var5);
                    var1.body = var5;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var9 = var5.intl;
                    var6 = var9.string;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var5 = var5.t;
                    var5 = var5.gm1Vej;
                    var5 = var6.bind(var9)(var5);
                    var1.cancelText = var5;
                    var5 = var8[var4];
                    var5 = var7.bind(var0)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4.p89ACt;
                    var4 = var5.bind(var6)(var4);
                    var1.confirmText = var4;
                    var4 = function() {
                        _fun109354: for (var _fun109354_ip = 0;;) switch (_fun109354_ip) {
                            case 0:
                                var1 = _closure2_slot3;
                                if (var1) {
                                    _fun109354_ip = 74;
                                    continue _fun109354
                                }
                            case 10:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 13;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.deleteForumTag;
                                var2 = _closure2_slot0;
                                var1 = _closure2_slot1;
                                var1 = var1.id;
                                var1 = var3.bind(var4)(var2, var1);
                                var1 = _closure2_slot4;
                                var0 = var1.pop;
                                var0 = var0.bind(var1)();
                            case 74:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1.onConfirm = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12.onPress = var14;
                var12 = var11.bind(var3)(var13, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 1595:
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4700, 1372, 1616, 33, 1297, 671, 1469, 566, 3900, 1234, 8865, 5284, 4860, 5340, 4865, 6951, 5731, 1417, 7638, 4839, 5335, 4861, 3895, 2]);