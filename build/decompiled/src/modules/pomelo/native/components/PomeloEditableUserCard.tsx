// modules/pomelo/native/components/PomeloEditableUserCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ImageBackground;
    var _closure1_slot3 = var7;
    var7 = var3.Image;
    var _closure1_slot4 = var7;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MAX_DISPLAY_NAME_LENGTH;
    var _closure1_slot7 = var3;
    var15 = 4;
    var3 = var5[var15];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EditState;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var14 = var3.Fonts;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var7 = var3.Fragment;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.generateBoxShadowStyle;
    var3 = {
        'xOffset': 0,
        'yOffset': 0,
        'shadowColorIos': '#000000',
        'shadowOpacity': 0.1,
        'shadowRadius': 16,
        'elevation': 24,
        'shadowColorAndroid': '#000000'
    };
    var9 = var7.bind(var8)(var3);
    var11 = 8;
    var3 = var5[var11];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var10 = {};
    var12 = 9;
    var16 = var5[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var10.borderRadius = var16;
    var16 = var5[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWEST;
    var10.backgroundColor = var16;
    var16 = 'hidden';
    var10.overflow = var16;
    var3.container = var10;
    var3.shadow = var9;
    var9 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'flex-start',
        'marginBottom': 14
    };
    var3.header = var9;
    var9 = {};
    var10 = 10;
    var9.marginRight = var10;
    var3.body = var9;
    var9 = {
        'width': 24,
        'height': 24,
        'marginTop': 36
    };
    var3.legacyUsernameBadge = var9;
    var9 = {
        'position': 'absolute',
        'top': 4294967290,
        'left': 4294967290,
        'backgroundColor': null,
        'borderRadius': 46,
        'width': 92,
        'height': 92
    };
    var16 = var5[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var16;
    var3.avatarBorder = var9;
    var9 = {
        'position': 'absolute',
        'width': '100%',
        'height': 64,
        'overflow': 'hidden'
    };
    var16 = var5[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var9.borderTopLeftRadius = var16;
    var16 = var5[var12];
    var16 = var13.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var9.borderTopRightRadius = var16;
    var3.banner = var9;
    var9 = {};
    var9.marginBottom = var15;
    var3.label = var9;
    var9 = {
        'width': '100%',
        'height': '100%'
    };
    var3.bannerImage = var9;
    var9 = {};
    var15 = '95%';
    var9.width = var15;
    var3.outerContainer = var9;
    var9 = {
        'marginTop': 40,
        'marginLeft': 24,
        'marginRight': 14,
        'marginBottom': 24
    };
    var3.content = var9;
    var9 = {
        'padding': 0,
        'width': '100%'
    };
    var3.textInput = var9;
    var9 = {
        'fontFamily': null,
        'fontSize': 24,
        'lineHeight': 30,
        'fontWeight': '700'
    };
    var14 = var14.PRIMARY_BOLD;
    var9.fontFamily = var14;
    var3.input = var9;
    var9 = {};
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_FEEDBACK_CRITICAL;
    var9.color = var12;
    var3.error = var9;
    var9 = {};
    var9.marginTop = var11;
    var3.footer = var9;
    var9 = {};
    var11 = var5[var10];
    var11 = var4.bind(var0)(var11);
    var11 = var11.DARK_BLACK_500_LIGHT_PRIMARY_400;
    var9.shadowColor = var11;
    var3.shadowAndroid = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.DARK_PRIMARY_700_LIGHT_WHITE_500;
    var9.backgroundColor = var10;
    var3.cardBackground = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var7 = var6.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun81412: for (var _fun81412_ip = 0;;) switch (_fun81412_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.style;
                var16 = var0.label;
                var10 = var0.value;
                var12 = var0.keyboardType;
                var11 = var0.secureTextEntry;
                var8 = var0.onChangeText;
                var9 = var0.maxLength;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun81412_ip = 55;
                    continue _fun81412
                }
            case 48:
                var9 = _closure1_slot7;
            case 55:
                var0 = _closure1_slot12;
                var13 = var0.bind(var3)();
                var2 = _closure1_slot11;
                var1 = _closure1_slot10;
                var0 = {};
                var7 = _closure1_slot9;
                var6 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 11;
                var4 = var15[var4];
                var4 = var6.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-muted'
                };
                var17 = var13.label;
                var4.style = var17;
                var4.children = var16;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 12;
                var5 = var15[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.TextInput;
                var5 = {
                    'style': null,
                    'autoCapitalize': 'none',
                    'autoComplete': 'off',
                    'autoFocus': true,
                    'autoCorrect': false
                };
                var15 = var13.textInput;
                var13 = new Array(2);
                var13[0] = var15;
                var13[1] = var14;
                var5.style = var13;
                var5.keyboardType = var12;
                var5.secureTextEntry = var11;
                var5.value = var10;
                var5.maxLength = var9;
                var5.onChangeText = var8;
                var8 = arg1;
                var5.ref = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.forwardRef;
    var1 = function arg0, arg1() {
        _fun81413: for (var _fun81413_ip = 0;;) switch (_fun81413_ip) {
            case 0:
                var17 = arg0;
                var0 = _closure1_slot12;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var22 = var17.user;
                var _closure2_slot0 = var22;
                var1 = var17.displayName;
                var4 = var17.username;
                var0 = var17.onChangeDisplayName;
                var2 = var17.onChangeUsername;
                var35 = var17.editState;
                var18 = var17.validation;
                var15 = var17.animatedStyles;
                var5 = _closure1_slot8;
                var5 = var5.EDIT_DISPLAY_NAME;
                var40 = var35 === var5;
                if (!var40) {
                    _fun81413_ip = 141;
                    continue _fun81413
                }
            case 84:
                var5 = var18.displayName;
                var6 = null;
                var7 = var6 == var5;
                var6 = undefined;
                if (var7) {
                    _fun81413_ip = 105;
                    continue _fun81413
                }
            case 100:
                var6 = var5.type;
            case 105:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 13;
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var5 = var5.NameValidationState;
                var5 = var5.ERROR;
                var40 = var6 === var5;
            case 141:
                if (var40) {
                    _fun81413_ip = 221;
                    continue _fun81413
                }
            case 144:
                var5 = _closure1_slot8;
                var5 = var5.EDIT_USERNAME;
                var5 = var35 === var5;
                if (!var5) {
                    _fun81413_ip = 218;
                    continue _fun81413
                }
            case 161:
                var6 = var18.username;
                var7 = null;
                var8 = var7 == var6;
                var7 = undefined;
                if (var8) {
                    _fun81413_ip = 182;
                    continue _fun81413
                }
            case 177:
                var7 = var6.type;
            case 182:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 13;
                var6 = var9[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.NameValidationState;
                var6 = var6.ERROR;
                var5 = var7 === var6;
            case 218:
                var40 = var5;
            case 221:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 14;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var22.id;
                var9 = var6.bind(var3)(var5);
                var39 = null;
                var5 = var39 == var9;
                var7 = undefined;
                if (var5) {
                    _fun81413_ip = 326;
                    continue _fun81413
                }
            case 262:
                var6 = var9.getBannerURL;
                var5 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 15;
                var8 = var11[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.GifAutoPlay;
                var8 = var10.getSetting;
                var8 = var8.bind(var10)();
                var5.canAnimate = var8;
                var8 = 600;
                var5.size = var8;
                var7 = var6.bind(var9)(var5);
            case 326:
                var5 = var39 != var7;
                var20 = null;
                if (!var5) {
                    _fun81413_ip = 366;
                    continue _fun81413
                }
            case 335:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 16;
                var5 = var8[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.makeSource;
                var20 = var5.bind(var6)(var7);
            case 366:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 17;
                var5 = var6[var5];
                var8 = var7.bind(var3)(var5);
                var10 = _closure1_slot0;
                var5 = 18;
                var5 = var6[var5];
                var12 = var10.bind(var3)(var5);
                var11 = var12.getUserAvatarURLForPomelo;
                var5 = false;
                var5 = var11.bind(var12)(var22, var5);
                var21 = var8.bind(var3)(var5, var9);
                var5 = 19;
                var8 = var6[var5];
                var9 = var7.bind(var3)(var8);
                var8 = var9.useName;
                var36 = var8.bind(var9)(var22);
                var5 = var6[var5];
                var8 = var7.bind(var3)(var5);
                var7 = var8.useUserTag;
                var5 = {
                    'mode': 'username',
                    'identifiable': 'always'
                };
                var33 = var7.bind(var8)(var22, var5);
                var5 = _closure1_slot8;
                var7 = var5.PREVIEW;
                var25 = var35 === var7;
                var7 = 20;
                var7 = var6[var7];
                var11 = var10.bind(var3)(var7);
                var9 = var11.useStateFromStores;
                var7 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var38
                    var2 = _closure1_slot6;
                    var1 = var2.getUserProfile;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var9.bind(var11)(var8, var7);
                var _closure2_slot1 = var7;
                var7 = 21;
                var8 = var6[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var6 = var6[var7];
                var6 = var10.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["9AjdkD"];
                var6 = var8.bind(var9)(var6);
                var5 = var5.EDIT_DISPLAY_NAME;
                if (!(var35 !== var5)) {
                    _fun81413_ip = 700;
                    continue _fun81413
                }
            case 597:
                var5 = _closure1_slot8;
                var5 = var5.EDIT_USERNAME;
                var5 = var35 !== var5;
                if (!var5) {
                    _fun81413_ip = 628;
                    continue _fun81413
                }
            case 614:
                var8 = _closure1_slot8;
                var8 = var8.SUGGESTION;
                var5 = var35 !== var8;
            case 628:
                var34 = var6;
                var32 = var1;
                var31 = var0;
                if (var5) {
                    _fun81413_ip = 758;
                    continue _fun81413
                }
            case 640:
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = var5[var7];
                var6 = var9.bind(var3)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var5 = var5[var7];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.IEpCBQ;
                var34 = var6.bind(var8)(var5);
                var32 = var4;
                var31 = var2;
                _fun81413_ip = 758;
                continue _fun81413;
            case 700:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = var2[var7];
                var4 = var6.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var2 = var2[var7];
                var2 = var6.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2["9AjdkD"];
                var34 = var4.bind(var5)(var2);
                var32 = var1;
                var31 = var0;
            case 758:
                var2 = _closure1_slot9;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var19.outerContainer;
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var37 = 22;
                var5 = var5[var37];
                var6 = var6.bind(var3)(var5);
                var5 = var6.isAndroid;
                var6 = var5.bind(var6)();
                var5 = null;
                if (var6) {
                    _fun81413_ip = 823;
                    continue _fun81413
                }
            case 817:
                var5 = var19.shadow;
            case 823:
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot11;
                var5 = _closure1_slot5;
                var4 = {};
                var8 = var19.container;
                var7 = new Array(3);
                var7[0] = var8;
                var8 = var19.cardBackground;
                var7[1] = var8;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var37];
                var9 = var9.bind(var3)(var8);
                var8 = var9.isAndroid;
                var9 = var8.bind(var9)();
                var8 = null;
                if (!var9) {
                    _fun81413_ip = 927;
                    continue _fun81413
                }
            case 896:
                var9 = {};
                var45 = var19.shadow;
                var46 = var9;
                var10 = copyDataProperties(var46, var45);
                var45 = var19.shadowAndroid;
                var46 = var9;
                var10 = copyDataProperties(var46, var45);
                var8 = var9;
            case 927:
                var7[2] = var8;
                var4.style = var7;
                var8 = var25;
                if (!var25) {
                    _fun81413_ip = 973;
                    continue _fun81413
                }
            case 941:
                var10 = _closure1_slot9;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 23;
                var7 = var11[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var8 = var10.bind(var3)(var9, var7);
            case 973:
                var7 = new Array(3);
                var7[0] = var8;
                var10 = _closure1_slot9;
                var9 = _closure1_slot5;
                var8 = {};
                var12 = var19.banner;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = {};
                var16 = _closure1_slot0;
                var23 = _closure1_slot2;
                var14 = 24;
                var14 = var23[var14];
                var16 = var16.bind(var3)(var14);
                var14 = var16.int2hex;
                var14 = var14.bind(var16)(var21);
                var12.backgroundColor = var14;
                var11[1] = var12;
                var8.style = var11;
                var11 = var39 != var20;
                if (!var11) {
                    _fun81413_ip = 1087;
                    continue _fun81413
                }
            case 1057:
                var16 = _closure1_slot9;
                var14 = _closure1_slot3;
                var12 = {};
                var21 = var19.bannerImage;
                var12.style = var21;
                var12.source = var20;
                var11 = var16.bind(var3)(var14, var12);
            case 1087:
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var10 = _closure1_slot11;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var19.content;
                var8.style = var11;
                var21 = _closure1_slot9;
                var11 = {};
                var14 = var19.avatarBorder;
                var12 = new Array(2);
                var12[0] = var14;
                var14 = var19.cardBackground;
                var12[1] = var14;
                var11.style = var12;
                var12 = var21.bind(var3)(var9, var11);
                var11 = new Array(4);
                var11[0] = var12;
                var12 = {};
                var14 = var19.header;
                var12.style = var14;
                var20 = _closure1_slot1;
                var16 = _closure1_slot2;
                var14 = 25;
                var14 = var16[var14];
                var20 = var20.bind(var3)(var14);
                var14 = {};
                var14.user = var22;
                var20 = var21.bind(var3)(var20, var14);
                var14 = new Array(2);
                var14[0] = var20;
                var20 = _closure1_slot0;
                var27 = 26;
                var16 = var16[var27];
                var16 = var20.bind(var3)(var16);
                var20 = var16.TransitionGroup;
                var16 = {};
                var16.component = var9;
                var26 = true;
                var16.transitionEnter = var26;
                var22 = var25;
                if (!var25) {
                    _fun81413_ip = 1393;
                    continue _fun81413
                }
            case 1264:
                var28 = _closure1_slot9;
                var43 = _closure1_slot1;
                var44 = _closure1_slot2;
                var23 = 27;
                var23 = var44[var23];
                var24 = var43.bind(var3)(var23);
                var23 = {};
                var29 = 300;
                var23.duration = var29;
                var30 = _closure1_slot0;
                var29 = 28;
                var29 = var44[var29];
                var29 = var30.bind(var3)(var29);
                var30 = var29.PressableOpacity;
                var29 = {};
                var38 = function() {
                    _fun81415: for (var _fun81415_ip = 0;;) switch (_fun81415_ip) {
                        case 0:
                            var1 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 29;
                            var0 = var9[var0];
                            var5 = undefined;
                            var2 = var1.bind(var5)(var0);
                            var1 = var2.open;
                            var0 = {};
                            var4 = 'ORIGINALLY_KNOWN_AS';
                            var0.key = var4;
                            var6 = _closure1_slot0;
                            var4 = 21;
                            var7 = var9[var4];
                            var7 = var6.bind(var5)(var7);
                            var8 = var7.intl;
                            var7 = var8.formatToPlainString;
                            var4 = var9[var4];
                            var4 = var6.bind(var5)(var4);
                            var4 = var4.t;
                            var6 = var4.bhrgkA;
                            var4 = {};
                            var10 = _closure2_slot1;
                            var9 = null;
                            var12 = var9 == var10;
                            var10 = undefined;
                            if (var12) {
                                _fun81415_ip = 121;
                                continue _fun81415
                            }
                        case 111:
                            var11 = _closure2_slot1;
                            var10 = var11.legacyUsername;
                        case 121:
                            var11 = var9 != var10;
                            var9 = '';
                            if (!var11) {
                                _fun81415_ip = 135;
                                continue _fun81415
                            }
                        case 132:
                            var9 = var10;
                        case 135:
                            var4.legacyUsername = var9;
                            var4 = var7.bind(var8)(var6, var4);
                            var0.content = var4;
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 30;
                            var3 = var6[var3];
                            var3 = var4.bind(var5)(var3);
                            var0.icon = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var29.onPress = var38;
                var41 = _closure1_slot4;
                var38 = {};
                var42 = var19.legacyUsernameBadge;
                var38.style = var42;
                var42 = 30;
                var42 = var44[var42];
                var42 = var43.bind(var3)(var42);
                var38.source = var42;
                var38 = var28.bind(var3)(var41, var38);
                var29.children = var38;
                var29 = var28.bind(var3)(var30, var29);
                var23.children = var29;
                var22 = var28.bind(var3)(var24, var23);
            case 1393:
                var16.children = var22;
                var16 = var21.bind(var3)(var20, var16);
                var14[1] = var16;
                var12.children = var14;
                var12 = var10.bind(var3)(var9, var12);
                var11[1] = var12;
                var20 = _closure1_slot11;
                var16 = _closure1_slot5;
                var14 = {};
                var12 = var19.body;
                var14.style = var12;
                var23 = _closure1_slot9;
                var22 = _closure1_slot1;
                var21 = _closure1_slot2;
                var12 = 31;
                var21 = var21[var12];
                var21 = var22.bind(var3)(var21);
                var22 = var21.View;
                var21 = {};
                var21.style = var15;
                var24 = !var25;
                if (var25) {
                    _fun81413_ip = 1675;
                    continue _fun81413
                }
            case 1484:
                var30 = _closure1_slot9;
                var29 = _closure1_slot13;
                var28 = {};
                var41 = var19.input;
                var38 = new Array(2);
                var38[0] = var41;
                var39 = null;
                if (!var40) {
                    _fun81413_ip = 1518;
                    continue _fun81413
                }
            case 1513:
                var39 = var19.error;
            case 1518:
                var38[1] = var39;
                var28.style = var38;
                var28.label = var34;
                var28.value = var32;
                var28.onChangeText = var31;
                var31 = _closure1_slot7;
                var28.maxLength = var31;
                var31 = arg1;
                var28.ref = var31;
                var31 = _closure1_slot8;
                var31 = var31.EDIT_USERNAME;
                var31 = var35 === var31;
                if (!var31) {
                    _fun81413_ip = 1599;
                    continue _fun81413
                }
            case 1572:
                var34 = _closure1_slot0;
                var32 = _closure1_slot2;
                var32 = var32[var37];
                var34 = var34.bind(var3)(var32);
                var32 = var34.isAndroid;
                var31 = var32.bind(var34)();
            case 1599:
                var28.secureTextEntry = var31;
                var31 = _closure1_slot8;
                var32 = var31.EDIT_USERNAME;
                var34 = 'default';
                var31 = var34;
                if (!(var35 === var32)) {
                    _fun81413_ip = 1664;
                    continue _fun81413
                }
            case 1625:
                var35 = _closure1_slot0;
                var32 = _closure1_slot2;
                var32 = var32[var37];
                var35 = var35.bind(var3)(var32);
                var32 = var35.isAndroid;
                var32 = var32.bind(var35)();
                var31 = var34;
                if (!var32) {
                    _fun81413_ip = 1664;
                    continue _fun81413
                }
            case 1658:
                var31 = 'visible-password';
            case 1664:
                var28.keyboardType = var31;
                var24 = var30.bind(var3)(var29, var28);
            case 1675:
                var21.children = var24;
                var22 = var23.bind(var3)(var22, var21);
                var21 = new Array(2);
                var21[0] = var22;
                var24 = _closure1_slot9;
                var23 = _closure1_slot0;
                var22 = _closure1_slot2;
                var22 = var22[var27];
                var22 = var23.bind(var3)(var22);
                var23 = var22.TransitionGroup;
                var22 = {};
                var27 = _closure1_slot5;
                var22.component = var27;
                var22.transitionEnter = var26;
                if (!var25) {
                    _fun81413_ip = 1887;
                    continue _fun81413
                }
            case 1742:
                var28 = _closure1_slot11;
                var27 = _closure1_slot1;
                var34 = _closure1_slot2;
                var26 = 27;
                var26 = var34[var26];
                var27 = var27.bind(var3)(var26);
                var26 = {};
                var29 = 300;
                var26.duration = var29;
                var32 = _closure1_slot9;
                var31 = _closure1_slot0;
                var30 = 11;
                var29 = var34[var30];
                var29 = var31.bind(var3)(var29);
                var35 = var29.Text;
                var29 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var29.children = var36;
                var35 = var32.bind(var3)(var35, var29);
                var29 = new Array(2);
                var29[0] = var35;
                var30 = var34[var30];
                var30 = var31.bind(var3)(var30);
                var31 = var30.Text;
                var30 = {
                    'variant': 'heading-lg/medium',
                    'color': 'text-default'
                };
                var30.children = var33;
                var30 = var32.bind(var3)(var31, var30);
                var29[1] = var30;
                var26.children = var29;
                var25 = var28.bind(var3)(var27, var26);
            case 1887:
                var22.children = var25;
                var22 = var24.bind(var3)(var23, var22);
                var21[1] = var22;
                var14.children = var21;
                var14 = var20.bind(var3)(var16, var14);
                var11[2] = var14;
                var14 = _closure1_slot9;
                var16 = _closure1_slot1;
                var20 = _closure1_slot2;
                var12 = var20[var12];
                var12 = var16.bind(var3)(var12);
                var13 = var12.View;
                var12 = {};
                var12.style = var15;
                var15 = 32;
                var15 = var20[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var19 = var19.footer;
                var15.style = var19;
                var15.validation = var18;
                var17 = var17.footerMessage;
                var15.message = var17;
                var15 = var14.bind(var3)(var16, var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[3] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 33;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/native/components/PomeloEditableUserCard.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4660, 10343, 10345, 483, 33, 4886, 1297, 671, 4872, 3941, 4876, 10357, 6951, 1348, 1417, 10365, 10356, 3236, 632, 1234, 478, 10366, 668, 10367, 10368, 10370, 4902, 3148, 10371, 3720, 10372, 2]);