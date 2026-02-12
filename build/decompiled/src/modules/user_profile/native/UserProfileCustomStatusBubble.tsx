// modules/user_profile/native/UserProfileCustomStatusBubble.tsx
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
        _fun57798: for (var _fun57798_ip = 0;;) switch (_fun57798_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.emojiId;
                var4 = var0.size;
                var11 = var0.animated;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun57798_ip = 28;
                    continue _fun57798
                }
            case 26:
                var11 = false;
            case 28:
                var5 = var0.style;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AnimateEmoji;
                var0 = var1.useSetting;
                var10 = var0.bind(var1)();
                var2 = _closure1_slot7;
                var6 = _closure1_slot1;
                var0 = 9;
                var0 = var7[var0];
                var1 = var6.bind(var3)(var0);
                var0 = {};
                var12 = {};
                var12.height = var4;
                var12.width = var4;
                var4 = new Array(2);
                var4[0] = var12;
                var4[1] = var5;
                var0.style = var4;
                var4 = {};
                var5 = 10;
                var5 = var7[var5];
                var7 = var6.bind(var3)(var5);
                var6 = var7.getEmojiURL;
                var5 = {};
                var5.id = var9;
                var9 = global;
                var9 = var9.Boolean;
                var9 = var9.bind(var3)(var11);
                if (!var9) {
                    _fun57798_ip = 165;
                    continue _fun57798
                }
            case 162:
                var9 = var10;
            case 165:
                var5.animated = var9;
                var8 = _closure1_slot6;
                var5.size = var8;
                var5 = var6.bind(var7)(var5);
                var4.uri = var5;
                var0.source = var4;
                var4 = 'contain';
                var0.resizeMode = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun57799: for (var _fun57799_ip = 0;;) switch (_fun57799_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.text;
                var16 = var0.emoji;
                var8 = var0.textVariant;
                var7 = var0.lineClamp;
                var6 = var0.onTextLayout;
                var15 = var0.lineHeight;
                var9 = var0.isPlaceholderText;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun57799_ip = 52;
                    continue _fun57799
                }
            case 50:
                var9 = false;
            case 52:
                var4 = {};
                var0 = 10;
                var0 = var15 / var0;
                var4.paddingVertical = var0;
                var0 = var9;
                if (!var0) {
                    _fun57799_ip = 86;
                    continue _fun57799
                }
            case 72:
                var1 = {};
                var2 = 'italic';
                var1.fontStyle = var2;
                var0 = var1;
            case 86:
                var20 = var4;
                var19 = var0;
                var0 = copyDataProperties(var20, var19);
                var2 = _closure1_slot9;
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 11;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {};
                var0.variant = var8;
                var8 = 'text-default';
                if (!var9) {
                    _fun57799_ip = 149;
                    continue _fun57799
                }
            case 143:
                var8 = 'text-muted';
            case 149:
                var0.color = var8;
                var0.lineClamp = var7;
                var0.onTextLayout = var6;
                var0.style = var4;
                var6 = null;
                var7 = var6 == var16;
                var4 = undefined;
                if (var7) {
                    _fun57799_ip = 183;
                    continue _fun57799
                }
            case 178:
                var4 = var16.id;
            case 183:
                if (!(var6 == var4)) {
                    _fun57799_ip = 292;
                    continue _fun57799
                }
            case 187:
                var7 = var6 == var16;
                var4 = undefined;
                if (var7) {
                    _fun57799_ip = 201;
                    continue _fun57799
                }
            case 196:
                var4 = var16.name;
            case 201:
                var4 = var6 != var4;
                var6 = null;
                if (!var4) {
                    _fun57799_ip = 287;
                    continue _fun57799
                }
            case 210:
                var8 = _closure1_slot9;
                var7 = _closure1_slot8;
                var4 = {};
                var11 = var16.name;
                var9 = new Array(2);
                var9[0] = var11;
                var13 = _closure1_slot7;
                var12 = _closure1_slot5;
                var11 = {};
                var14 = {};
                var17 = 0.4;
                var17 = var17 * var15;
                var14.width = var17;
                var11.style = var14;
                var11 = var13.bind(var3)(var12, var11);
                var9[1] = var11;
                var4.children = var9;
                var6 = var8.bind(var3)(var7, var4);
            case 287:
                _fun57799_ip = 462;
                continue _fun57799;
            case 292:
                var8 = _closure1_slot9;
                var7 = _closure1_slot8;
                var4 = {};
                var12 = _closure1_slot7;
                var11 = _closure1_slot5;
                var9 = {};
                var14 = _closure1_slot14;
                var13 = {};
                var17 = var16.id;
                var13.emojiId = var17;
                var17 = 0.9;
                var17 = var17 * var15;
                var13.size = var17;
                var16 = var16.animated;
                var13.animated = var16;
                var16 = {};
                var18 = -var15;
                var17 = 0.1;
                var17 = var17 * var18;
                var16.marginBottom = var17;
                var13.style = var16;
                var13 = var12.bind(var3)(var14, var13);
                var9.children = var13;
                var11 = var12.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot7;
                var11 = _closure1_slot5;
                var10 = {};
                var13 = {};
                var14 = 0.5;
                var14 = var14 * var15;
                var13.width = var14;
                var10.style = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var4.children = var9;
                var6 = var8.bind(var3)(var7, var4);
            case 462:
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun57800: for (var _fun57800_ip = 0;;) switch (_fun57800_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.emoji;
                var11 = var0.size;
                var0 = _closure1_slot13;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AnimateEmoji;
                var0 = var1.useSetting;
                var10 = var0.bind(var1)();
                var7 = null;
                var1 = var7 == var9;
                var0 = undefined;
                if (var1) {
                    _fun57800_ip = 79;
                    continue _fun57800
                }
            case 74:
                var0 = var9.id;
            case 79:
                var0 = var7 != var0;
                var8 = undefined;
                if (!var0) {
                    _fun57800_ip = 177;
                    continue _fun57800
                }
            case 88:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getEmojiURL;
                var0 = {};
                var6 = var9.id;
                var0.id = var6;
                var6 = global;
                var12 = var6.Boolean;
                var13 = var7 == var9;
                var6 = undefined;
                if (var13) {
                    _fun57800_ip = 148;
                    continue _fun57800
                }
            case 142:
                var6 = var9.animated;
            case 148:
                var6 = var12.bind(var3)(var6);
                if (!var6) {
                    _fun57800_ip = 159;
                    continue _fun57800
                }
            case 156:
                var6 = var10;
            case 159:
                var0.animated = var6;
                var6 = _closure1_slot6;
                var0.size = var6;
                var8 = var1.bind(var2)(var0);
            case 177:
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var5.container;
                var0.style = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 12;
                var4 = var10[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var10 = {};
                var10.fontSize = var11;
                var4.textEmojiStyle = var10;
                var10 = {};
                var10.width = var11;
                var10.height = var11;
                var4.fastImageStyle = var10;
                var4.src = var8;
                var10 = var7 == var9;
                var8 = undefined;
                if (var10) {
                    _fun57800_ip = 268;
                    continue _fun57800
                }
            case 263:
                var8 = var9.name;
            case 268:
                var9 = var7 != var8;
                var7 = '';
                if (!var9) {
                    _fun57800_ip = 282;
                    continue _fun57800
                }
            case 279:
                var7 = var8;
            case 282:
                var4.name = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.UserProfileThemeTypes;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var7 = var3.Fragment;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var7 = var5[var3];
    var10 = var4.bind(var0)(var7);
    var9 = var10.createStyles;
    var7 = function(arg0) { // Environment: var1
        _fun57801: for (var _fun57801_ip = 0;;) switch (_fun57801_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var1 = {};
                var3 = 'relative';
                var1.position = var3;
                var0.container = var1;
                var1 = {};
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var6 = 7;
                var4 = var4[var6];
                var5 = undefined;
                var4 = var7.bind(var5)(var4);
                var7 = var4.colors;
                if (var2) {
                    _fun57801_ip = 62;
                    continue _fun57801
                }
            case 54:
                var4 = var7.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
                _fun57801_ip = 68;
                continue _fun57801;
            case 62:
                var4 = var7.CUSTOM_STATUS_BUBBLE_BG;
            case 68:
                var1.backgroundColor = var4;
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.colors;
                if (var2) {
                    _fun57801_ip = 105;
                    continue _fun57801
                }
            case 97:
                var2 = var4.CONTROL_SECONDARY_BORDER_DEFAULT;
                _fun57801_ip = 111;
                continue _fun57801;
            case 105:
                var2 = var4.BORDER_MUTED;
            case 111:
                var1.borderColor = var2;
                var2 = 1;
                var1.borderWidth = var2;
                var0.bubble = var1;
                var1 = {
                    'alignSelf': 'flex-start',
                    'alignItems': 'center',
                    'justifyContent': 'center'
                };
                var2 = 'flex-start';
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var7 = var3[var6];
                var7 = var4.bind(var5)(var7);
                var7 = var7.radii;
                var7 = var7.lg;
                var1.borderRadius = var7;
                var7 = var3[var6];
                var7 = var4.bind(var5)(var7);
                var7 = var7.shadows;
                var9 = var7.SHADOW_LOW;
                var10 = var1;
                var7 = copyDataProperties(var10, var9);
                var8 = -14;
                var7 = 'top';
                var1[var7] = var8;
                var0.statusBubble = var1;
                var1 = {
                    'position': 'absolute',
                    'top': 0,
                    'left': 0,
                    'opacity': 0
                };
                var0.statusBubbleMeasureable = var1;
                var1 = {
                    'position': 'absolute',
                    'top': 4294967266,
                    'width': 12,
                    'height': 12
                };
                var7 = var3[var6];
                var7 = var4.bind(var5)(var7);
                var7 = var7.radii;
                var7 = var7.round;
                var1.borderRadius = var7;
                var7 = var3[var6];
                var7 = var4.bind(var5)(var7);
                var7 = var7.shadows;
                var9 = var7.SHADOW_LOW;
                var10 = var1;
                var7 = copyDataProperties(var10, var9);
                var0.smallCircle = var1;
                var1 = {
                    'position': 'absolute',
                    'top': 4294967288,
                    'left': 12,
                    'width': 20,
                    'height': 20
                };
                var7 = var3[var6];
                var7 = var4.bind(var5)(var7);
                var7 = var7.radii;
                var7 = var7.round;
                var1.borderRadius = var7;
                var7 = var3[var6];
                var7 = var4.bind(var5)(var7);
                var7 = var7.shadows;
                var9 = var7.SHADOW_LOW;
                var10 = var1;
                var7 = copyDataProperties(var10, var9);
                var0.largeCircle = var1;
                var1 = {
                    'position': 'absolute',
                    'top': -7.5,
                    'left': 13,
                    'width': 16,
                    'height': 16,
                    'borderWidth': 0
                };
                var7 = var3[var6];
                var7 = var4.bind(var5)(var7);
                var7 = var7.radii;
                var7 = var7.round;
                var1.borderTopLeftRadius = var7;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.radii;
                var3 = var3.round;
                var1.borderTopRightRadius = var3;
                var0.largeCircleInner = var1;
                var3 = 6;
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'flex-start',
                    'justifyContent': 'center',
                    'gap': 6,
                    'marginTop': 1
                };
                var0.addStatusButton = var1;
                var1 = {};
                var1.width = var3;
                var0.addStatusIconSpacer = var1;
                var1 = {};
                var1.alignItems = var2;
                var0.statusBubbleLeftAligned = var1;
                return var0;
        }
    };
    var7 = var9.bind(var10)(var7);
    var _closure1_slot10 = var7;
    var7 = {
        'textVariant': 'text-md/normal',
        'emojiOnlyEmojiSize': 32,
        'textMinWidth': 42,
        'statusBubblePaddingHorizontal': 12,
        'statusBubblePaddingVertical': 7
    };
    var _closure1_slot11 = var7;
    var7 = {};
    var9 = var8.PREVIEW;
    var8 = {
        'textVariant': 'text-sm/normal',
        'emojiOnlyEmojiSize': 26,
        'textMinWidth': 53,
        'statusBubblePaddingHorizontal': 10,
        'statusBubblePaddingVertical': 6
    };
    var7[var9] = var8;
    var _closure1_slot12 = var7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = {};
        var2 = 'center';
        var1.alignItems = var2;
        var0.container = var1;
        return var0;
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun57803: for (var _fun57803_ip = 0;;) switch (_fun57803_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.customStatusActivity;
                var2 = var0.themeType;
                var1 = var0.hasCustomProfileTheme;
                var4 = var0.editEnabled;
                var3 = undefined;
                var11 = var3 !== var4;
                if (!var11) {
                    _fun57803_ip = 41;
                    continue _fun57803
                }
            case 38:
                var11 = var4;
            case 41:
                var6 = var0.showFullStatus;
                var4 = var3 !== var6;
                if (!var4) {
                    _fun57803_ip = 57;
                    continue _fun57803
                }
            case 54:
                var4 = var6;
            case 57:
                var _closure2_slot0 = var4;
                var12 = var0.onPressTruncatedStatus;
                var _closure2_slot1 = var12;
                var6 = var0.style;
                var7 = var0.emojiOnlyStyle;
                var20 = var0.previewEmoji;
                var22 = var0.previewText;
                var16 = var0.placeholderText;
                var0 = var0.prompt;
                var _closure2_slot2 = var0;
                var0 = _closure1_slot10;
                var21 = var0.bind(var3)(var1);
                var _closure2_slot3 = var21;
                var0 = undefined;
                if (!var2) {
                    _fun57803_ip = 139;
                    continue _fun57803
                }
            case 131:
                var1 = _closure1_slot12;
                var0 = var1[var2];
            case 139:
                var10 = null;
                if (!(var10 == var0)) {
                    _fun57803_ip = 149;
                    continue _fun57803
                }
            case 145:
                var0 = _closure1_slot11;
            case 149:
                var14 = var0.textVariant;
                var _closure2_slot4 = var14;
                var4 = var0.emojiOnlyEmojiSize;
                var26 = var0.textMinWidth;
                var1 = var0.statusBubblePaddingHorizontal;
                var2 = var0.statusBubblePaddingVertical;
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 13;
                var0 = var13[var0];
                var8 = var8.bind(var3)(var0);
                var0 = var8.useUserProfileAnalyticsContext;
                var0 = var0.bind(var8)();
                var0 = var0.trackUserProfileAction;
                var _closure2_slot5 = var0;
                if (!(var3 !== var22)) {
                    _fun57803_ip = 235;
                    continue _fun57803
                }
            case 227:
                var0 = '';
                if (!(var0 === var22)) {
                    _fun57803_ip = 252;
                    continue _fun57803
                }
            case 235:
                var8 = var10 == var9;
                var0 = undefined;
                if (var8) {
                    _fun57803_ip = 249;
                    continue _fun57803
                }
            case 244:
                var0 = var9.state;
            case 249:
                var22 = var0;
            case 252:
                var0 = var10 != var22;
                if (!var0) {
                    _fun57803_ip = 267;
                    continue _fun57803
                }
            case 259:
                var8 = '';
                var0 = var8 !== var22;
            case 267:
                if (!(var3 === var20)) {
                    _fun57803_ip = 289;
                    continue _fun57803
                }
            case 271:
                var13 = var10 == var9;
                var8 = undefined;
                if (var13) {
                    _fun57803_ip = 286;
                    continue _fun57803
                }
            case 280:
                var8 = var9.emoji;
            case 286:
                var20 = var8;
            case 289:
                var _closure2_slot6 = var20;
                var8 = var10 != var20;
                var25 = var8;
                if (!var8) {
                    _fun57803_ip = 306;
                    continue _fun57803
                }
            case 303:
                var25 = !var0;
            case 306:
                var _closure2_slot7 = var25;
                var19 = !var0;
                if (var0) {
                    _fun57803_ip = 319;
                    continue _fun57803
                }
            case 316:
                var19 = !var8;
            case 319:
                if (!var19) {
                    _fun57803_ip = 326;
                    continue _fun57803
                }
            case 322:
                var19 = var3 !== var16;
            case 326:
                if (!var19) {
                    _fun57803_ip = 337;
                    continue _fun57803
                }
            case 329:
                var9 = '';
                var19 = var9 !== var16;
            case 337:
                var _closure2_slot8 = var19;
                if (!var19) {
                    _fun57803_ip = 347;
                    continue _fun57803
                }
            case 344:
                var22 = var16;
            case 347:
                var _closure2_slot9 = var22;
                var13 = var10 != var22;
                if (!var13) {
                    _fun57803_ip = 366;
                    continue _fun57803
                }
            case 358:
                var9 = '';
                var13 = var9 !== var22;
            case 366:
                var _closure2_slot10 = var13;
                if (var0) {
                    _fun57803_ip = 376;
                    continue _fun57803
                }
            case 373:
                var0 = var8;
            case 376:
                if (var0) {
                    _fun57803_ip = 391;
                    continue _fun57803
                }
            case 379:
                var8 = !var11;
                if (!var8) {
                    _fun57803_ip = 388;
                    continue _fun57803
                }
            case 385:
                var8 = var19;
            case 388:
                var0 = var8;
            case 391:
                var17 = !var0;
                if (var0) {
                    _fun57803_ip = 400;
                    continue _fun57803
                }
            case 397:
                var17 = var11;
            case 400:
                var15 = _closure1_slot4;
                var9 = var15.useState;
                var8 = false;
                var9 = var9.bind(var15)(var8);
                var8 = _closure1_slot3;
                var24 = 2;
                var23 = var8.bind(var3)(var9, var24);
                var8 = 0;
                var9 = var23[var8];
                var15 = 1;
                var15 = var23[var15];
                var _closure2_slot11 = var15;
                var23 = {};
                var15 = 0;
                if (!var13) {
                    _fun57803_ip = 456;
                    continue _fun57803
                }
            case 453:
                var15 = var26;
            case 456:
                var23.minWidth = var15;
                var15 = 0;
                if (!var25) {
                    _fun57803_ip = 474;
                    continue _fun57803
                }
            case 466:
                var24 = var24 * var2;
                var15 = var4 + var24;
            case 474:
                var23.minHeight = var15;
                if (var13) {
                    _fun57803_ip = 487;
                    continue _fun57803
                }
            case 482:
                var8 = 0;
                if (!var17) {
                    _fun57803_ip = 490;
                    continue _fun57803
                }
            case 487:
                var8 = var2;
            case 490:
                var23.paddingVertical = var8;
                var23.paddingHorizontal = var1;
                var _closure2_slot12 = var23;
                var13 = {};
                var13.top = var2;
                var13.bottom = var2;
                var13.left = var1;
                var13.right = var1;
                var24 = _closure1_slot4;
                var1 = var24.useRef;
                var8 = var1.bind(var24)(var10);
                var _closure2_slot13 = var8;
                var15 = var24.useImperativeHandle;
                var2 = arg1;
                var1 = function() { // Environment: var5
                    var0 = _closure2_slot13;
                    var0 = var0.current;
                    return var0;
                };
                var1 = var15.bind(var24)(var2, var1);
                var2 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 14;
                var1 = var15[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useScaledTextLineHeight;
                var26 = var1.bind(var2)(var14);
                var _closure2_slot14 = var26;
                if (var0) {
                    _fun57803_ip = 602;
                    continue _fun57803
                }
            case 597:
                if (var17) {
                    _fun57803_ip = 602;
                    continue _fun57803
                }
            case 600:
                return var10;
            case 602:
                var14 = function() {
                    var2 = _closure2_slot5;
                    var1 = {};
                    var0 = 'PRESS_EDIT_CUSTOM_STATUS';
                    var1.action = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 15;
                    var2 = var7[var2];
                    var3 = var6.bind(var0)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    var2 = _closure1_slot0;
                    var1 = 16;
                    var1 = var7[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openEditCustomStatusModal;
                    var1 = {};
                    var5 = 'UserProfileCustomStatusBubble';
                    var1.location = var5;
                    var5 = 17;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var6 = var5.USER_PROFILE_CUSTOM_STATUS_BUBBLE;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var1.analyticsLocations = var5;
                    var4 = _closure2_slot2;
                    var1.prompt = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = _closure1_slot7;
                var1 = _closure1_slot16;
                var0 = {};
                var0.emoji = var20;
                var0.size = var4;
                var0 = var2.bind(var3)(var1, var0);
                var _closure2_slot15 = var0;
                var15 = function() {
                    _fun57806: for (var _fun57806_ip = 0;;) switch (_fun57806_ip) {
                        case 0:
                            var0 = _closure2_slot10;
                            if (var0) {
                                _fun57806_ip = 25;
                                continue _fun57806
                            }
                        case 10:
                            var2 = _closure2_slot7;
                            var0 = undefined;
                            if (!var2) {
                                _fun57806_ip = 23;
                                continue _fun57806
                            }
                        case 19:
                            var0 = _closure2_slot15;
                        case 23:
                            _fun57806_ip = 107;
                            continue _fun57806;
                        case 25:
                            var4 = _closure1_slot7;
                            var3 = _closure1_slot15;
                            var2 = {};
                            var5 = _closure2_slot9;
                            var2.text = var5;
                            var5 = _closure2_slot8;
                            var2.isPlaceholderText = var5;
                            var5 = _closure2_slot6;
                            var2.emoji = var5;
                            var5 = _closure2_slot4;
                            var2.textVariant = var5;
                            var6 = _closure2_slot0;
                            var5 = 2;
                            if (!var6) {
                                _fun57806_ip = 85;
                                continue _fun57806
                            }
                        case 83:
                            var5 = undefined;
                        case 85:
                            var2.lineClamp = var5;
                            var1 = _closure2_slot14;
                            var2.lineHeight = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 107:
                            return var0;
                    }
                };
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var24 = 18;
                var2 = var0[var24];
                var2 = var1.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.formatToPlainString;
                var0 = var0[var24];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.UpF5Qa;
                var0 = {};
                var27 = var10 == var20;
                var28 = undefined;
                if (var27) {
                    _fun57803_ip = 709;
                    continue _fun57803
                }
            case 704:
                var28 = var20.name;
            case 709:
                var29 = var10 != var28;
                var20 = '';
                var27 = var20;
                if (!var29) {
                    _fun57803_ip = 726;
                    continue _fun57803
                }
            case 723:
                var27 = var28;
            case 726:
                var0.emoji = var27;
                var27 = var10 != var22;
                if (!var27) {
                    _fun57803_ip = 741;
                    continue _fun57803
                }
            case 738:
                var20 = var22;
            case 741:
                var0.status = var20;
                var20 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot9;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = new Array(2);
                var4[0] = var6;
                var6 = undefined;
                if (!var25) {
                    _fun57803_ip = 777;
                    continue _fun57803
                }
            case 774:
                var6 = var7;
            case 777:
                var4[1] = var6;
                var0.style = var4;
                var7 = _closure1_slot7;
                var6 = _closure1_slot5;
                var4 = {};
                var27 = var21.bubble;
                var22 = new Array(2);
                var22[0] = var27;
                var27 = var21.smallCircle;
                var22[1] = var27;
                var4.style = var22;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var22 = _closure1_slot7;
                var7 = _closure1_slot5;
                var6 = {};
                var28 = var21.bubble;
                var27 = new Array(2);
                var27[0] = var28;
                var28 = var21.largeCircle;
                var27[1] = var28;
                var6.style = var27;
                var6 = var22.bind(var3)(var7, var6);
                var4[1] = var6;
                var5 = function() { // Environment: var5
                    _fun57807: for (var _fun57807_ip = 0;;) switch (_fun57807_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun57807_ip = 193;
                                continue _fun57807
                            }
                        case 16:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun57807_ip = 193;
                                continue _fun57807
                            }
                        case 26:
                            var1 = _closure2_slot10;
                            if (!var1) {
                                _fun57807_ip = 193;
                                continue _fun57807
                            }
                        case 36:
                            var3 = _closure1_slot7;
                            var2 = _closure1_slot5;
                            var1 = {};
                            var5 = _closure2_slot3;
                            var6 = var5.bubble;
                            var5 = new Array(4);
                            var5[0] = var6;
                            var6 = _closure2_slot3;
                            var6 = var6.statusBubble;
                            var5[1] = var6;
                            var6 = _closure2_slot12;
                            var5[2] = var6;
                            var6 = _closure2_slot3;
                            var6 = var6.statusBubbleMeasureable;
                            var5[3] = var6;
                            var1.style = var5;
                            var6 = _closure1_slot7;
                            var5 = _closure1_slot15;
                            var4 = {};
                            var7 = _closure2_slot9;
                            var4.text = var7;
                            var7 = _closure2_slot8;
                            var4.isPlaceholderText = var7;
                            var7 = _closure2_slot6;
                            var4.emoji = var7;
                            var7 = _closure2_slot4;
                            var4.textVariant = var7;
                            var7 = function arg0() {
                                var2 = _closure2_slot11;
                                var0 = arg0;
                                var0 = var0.nativeEvent;
                                var0 = var0.lines;
                                var1 = var0.length;
                                var0 = 2;
                                var1 = var1 > var0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var4.onTextLayout = var7;
                            var0 = _closure2_slot14;
                            var4.lineHeight = var0;
                            var0 = undefined;
                            var4 = var6.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        case 193:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var5.bind(var3)();
                var4[2] = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot5;
                var5 = {};
                var27 = var21.bubble;
                var22 = new Array(4);
                var22[0] = var27;
                var27 = var21.statusBubble;
                var22[1] = var27;
                var22[2] = var23;
                var23 = !var25;
                if (var25) {
                    _fun57803_ip = 948;
                    continue _fun57803
                }
            case 942:
                var23 = var21.statusBubbleLeftAligned;
            case 948:
                var22[3] = var23;
                var5.style = var22;
                var5.ref = var8;
                var23 = _closure1_slot7;
                var22 = _closure1_slot5;
                var8 = {};
                var27 = var21.bubble;
                var25 = new Array(2);
                var25[0] = var27;
                var27 = var21.largeCircleInner;
                var25[1] = var27;
                var8.style = var25;
                var22 = var23.bind(var3)(var22, var8);
                var8 = new Array(2);
                var8[0] = var22;
                if (var17) {
                    _fun57803_ip = 1229;
                    continue _fun57803
                }
            case 1018:
                if (var11) {
                    _fun57803_ip = 1106;
                    continue _fun57803
                }
            case 1021:
                if (!(var10 != var12)) {
                    _fun57803_ip = 1100;
                    continue _fun57803
                }
            case 1025:
                if (!var9) {
                    _fun57803_ip = 1100;
                    continue _fun57803
                }
            case 1028:
                if (var19) {
                    _fun57803_ip = 1100;
                    continue _fun57803
                }
            case 1031:
                var11 = _closure1_slot7;
                var10 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 19;
                var9 = var17[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.PressableOpacity;
                var9 = {};
                var17 = 'button';
                var9.accessibilityRole = var17;
                var9.accessibilityLabel = var20;
                var9.onPress = var12;
                var9.hitSlop = var13;
                var12 = var15.bind(var3)();
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                _fun57803_ip = 1104;
                continue _fun57803;
            case 1100:
                var9 = var15.bind(var3)();
            case 1104:
                _fun57803_ip = 1224;
                continue _fun57803;
            case 1106:
                var12 = _closure1_slot7;
                var23 = _closure1_slot0;
                var17 = _closure1_slot2;
                var10 = 19;
                var10 = var17[var10];
                var10 = var23.bind(var3)(var10);
                var11 = var10.PressableOpacity;
                var10 = {};
                var22 = 'button';
                var10.accessibilityRole = var22;
                var10.accessibilityLabel = var20;
                var20 = var17[var24];
                var20 = var23.bind(var3)(var20);
                var22 = var20.intl;
                var20 = var22.string;
                var17 = var17[var24];
                var17 = var23.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.QdHxos;
                var17 = var20.bind(var22)(var17);
                var10.accessibilityHint = var17;
                var10.onPress = var14;
                var10.hitSlop = var13;
                var15 = var15.bind(var3)();
                var10.children = var15;
                var9 = var12.bind(var3)(var11, var10);
            case 1224:
                _fun57803_ip = 1702;
                continue _fun57803;
            case 1229:
                if (var19) {
                    _fun57803_ip = 1286;
                    continue _fun57803
                }
            case 1232:
                var15 = _closure1_slot0;
                var10 = _closure1_slot2;
                var11 = var10[var24];
                var11 = var15.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var24];
                var10 = var15.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.Vq4UmS;
                var17 = var11.bind(var12)(var10);
                _fun57803_ip = 1289;
                continue _fun57803;
            case 1286:
                var17 = var16;
            case 1289:
                var12 = _closure1_slot7;
                var23 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 19;
                var10 = var15[var10];
                var10 = var23.bind(var3)(var10);
                var11 = var10.PressableOpacity;
                var10 = {};
                var20 = 'button';
                var10.accessibilityRole = var20;
                var20 = var15[var24];
                var20 = var23.bind(var3)(var20);
                var22 = var20.intl;
                var20 = var22.string;
                var15 = var15[var24];
                var15 = var23.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.Vq4UmS;
                var15 = var20.bind(var22)(var15);
                var10.accessibilityLabel = var15;
                var15 = undefined;
                if (!var19) {
                    _fun57803_ip = 1385;
                    continue _fun57803
                }
            case 1382:
                var15 = var16;
            case 1385:
                var10.accessibilityHint = var15;
                var10.onPress = var14;
                var10.hitSlop = var13;
                var13 = var21.addStatusButton;
                var10.style = var13;
                var15 = _closure1_slot9;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 11;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {};
                var16 = 'text-md/medium';
                if (!var19) {
                    _fun57803_ip = 1453;
                    continue _fun57803
                }
            case 1447:
                var16 = 'text-md/normal';
            case 1453:
                var13.variant = var16;
                var16 = 'control-secondary-text-default';
                var13.color = var16;
                var16 = undefined;
                if (!var19) {
                    _fun57803_ip = 1486;
                    continue _fun57803
                }
            case 1472:
                var19 = {};
                var20 = 'italic';
                var19.fontStyle = var20;
                var16 = var19;
            case 1486:
                var13.style = var16;
                var20 = _closure1_slot7;
                var19 = _closure1_slot5;
                var16 = {};
                var25 = _closure1_slot0;
                var27 = _closure1_slot2;
                var22 = 20;
                var22 = var27[var22];
                var22 = var25.bind(var3)(var22);
                var23 = var22.CirclePlusIcon;
                var22 = {};
                var28 = _closure1_slot1;
                var24 = 7;
                var24 = var27[var24];
                var24 = var28.bind(var3)(var24);
                var24 = var24.colors;
                var24 = var24.CONTROL_SECONDARY_TEXT_DEFAULT;
                var22.color = var24;
                var24 = 'xs';
                var22.size = var24;
                var24 = 21;
                var24 = var27[var24];
                var25 = var25.bind(var3)(var24);
                var24 = var25.isAndroid;
                var25 = var24.bind(var25)();
                var24 = undefined;
                if (!var25) {
                    _fun57803_ip = 1620;
                    continue _fun57803
                }
            case 1594:
                var25 = {};
                var27 = -var26;
                var26 = 0.1;
                var26 = var26 * var27;
                var25.marginBottom = var26;
                var24 = var25;
            case 1620:
                var22.style = var24;
                var22 = var20.bind(var3)(var23, var22);
                var16.children = var22;
                var19 = var20.bind(var3)(var19, var16);
                var16 = new Array(3);
                var16[0] = var19;
                var20 = _closure1_slot7;
                var19 = _closure1_slot5;
                var18 = {};
                var21 = var21.addStatusIconSpacer;
                var18.style = var21;
                var18 = var20.bind(var3)(var19, var18);
                var16[1] = var18;
                var16[2] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 1702:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileCustomStatusBubble.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 7058, 1624, 33, 1297, 671, 1348, 5426, 1417, 3938, 5828, 7071, 7075, 3279, 7076, 5639, 1234, 4880, 10771, 478, 2]);