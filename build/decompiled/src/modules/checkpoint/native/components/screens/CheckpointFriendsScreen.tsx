// modules/checkpoint/native/components/screens/CheckpointFriendsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var16 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: LoveLetter, environment: var1
        _fun86927: for (var _fun86927_ip = 0;;) switch (_fun86927_ip) {
            case 0:
                var3 = _closure1_slot4;
                var4 = undefined;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot15;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var1 = new Array(0);
                var5 = var3.bind(var4)(var2, var1);
                var _closure2_slot0 = var5;
                var1 = _closure1_slot20;
                var15 = var1.bind(var4)();
                var6 = _closure1_slot5;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = 16;
                var3 = var1[var3];
                var3 = var2.bind(var4)(var3);
                var3 = var3.CheckpointColorContext;
                var3 = var6.bind(var4)(var3);
                var6 = 17;
                var6 = var1[var6];
                var7 = var2.bind(var4)(var6);
                var6 = var7.useToken;
                var3 = var3.primaryColor;
                var16 = var6.bind(var7)(var3);
                var6 = _closure1_slot6;
                var3 = 29;
                var3 = var1[var3];
                var7 = var2.bind(var4)(var3);
                var3 = var7.sample;
                var3 = var3.bind(var7)(var5);
                var6 = var6.bind(var4)(var3);
                var3 = _closure1_slot3;
                var12 = 2;
                var3 = var3.bind(var4)(var6, var12);
                var7 = 0;
                var9 = var3[var7];
                var _closure2_slot1 = var9;
                var10 = 1;
                var3 = var3[var10];
                var _closure2_slot2 = var3;
                var11 = 12;
                var1 = var1[var11];
                var6 = var2.bind(var4)(var1);
                var3 = var6.useStateFromStores;
                var1 = _closure1_slot14;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot14;
                    var0 = var1.getCheckpointData;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var3.bind(var6)(var2, var1);
                var1 = var1.sidekick;
                var2 = null;
                var3 = var2 == var1;
                var8 = undefined;
                if (var3) {
                    _fun86927_ip = 234;
                    continue _fun86927
                }
            case 229:
                var8 = var1.user;
            case 234:
                var _closure2_slot3 = var8;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 30;
                var1 = var6[var1];
                var3 = var3.bind(var4)(var1);
                var1 = var2 == var8;
                var6 = undefined;
                if (var1) {
                    _fun86927_ip = 272;
                    continue _fun86927
                }
            case 267:
                var6 = var8.id;
            case 272:
                var14 = var2 != var6;
                var1 = '';
                if (!var14) {
                    _fun86927_ip = 286;
                    continue _fun86927
                }
            case 283:
                var1 = var6;
            case 286:
                var3 = var3.bind(var4)(var1);
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var11];
                var14 = var6.bind(var4)(var1);
                var11 = var14.useStateFromStores;
                var1 = _closure1_slot12;
                var6 = new Array(1);
                var6[0] = var1;
                var1 = function() { // Environment: var0
                    _fun86930: for (var _fun86930_ip = 0;;) switch (_fun86930_ip) {
                        case 0:
                            var2 = _closure1_slot12;
                            var1 = var2.isBlocked;
                            var4 = _closure2_slot3;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun86930_ip = 40;
                                continue _fun86930
                            }
                        case 31:
                            var3 = _closure2_slot3;
                            var0 = var3.id;
                        case 40:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var1 = var11.bind(var14)(var6, var1);
                var11 = _closure1_slot6;
                var6 = false;
                var11 = var11.bind(var4)(var6);
                var6 = _closure1_slot3;
                var6 = var6.bind(var4)(var11, var12);
                var11 = var6[var7];
                var6 = var6[var10];
                var _closure2_slot4 = var6;
                var17 = var2 != var9;
                if (!var17) {
                    _fun86927_ip = 387;
                    continue _fun86927
                }
            case 378:
                var6 = var9.length;
                var17 = var6 > var7;
            case 387:
                if (!var17) {
                    _fun86927_ip = 402;
                    continue _fun86927
                }
            case 390:
                var7 = var9.length;
                var6 = 250;
                var17 = var7 <= var6;
            case 402:
                if (!var17) {
                    _fun86927_ip = 408;
                    continue _fun86927
                }
            case 405:
                var17 = !var11;
            case 408:
                var _closure2_slot5 = var17;
                var7 = _closure1_slot7;
                var6 = new Array(2);
                var6[0] = var5;
                var6[1] = var9;
                var5 = function() { // Environment: var0
                    _fun86931: for (var _fun86931_ip = 0;;) switch (_fun86931_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 29;
                            var1 = var0[var5];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.sample;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var4)(var2);
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun86931_ip = 57;
                                continue _fun86931
                            }
                        case 49:
                            var3 = _closure2_slot1;
                            if (!(var2 === var3)) {
                                _fun86931_ip = 104;
                                continue _fun86931
                            }
                        case 57:
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var8 = var7.bind(var0)(var3);
                            var7 = var8.sample;
                            var3 = _closure2_slot0;
                            var7 = var7.bind(var8)(var3);
                            if (var4 == var7) {
                                _fun86931_ip = 57;
                                continue _fun86931
                            }
                        case 93:
                            var3 = _closure2_slot1;
                            var2 = var7;
                            if (var2 === var3) {
                                _fun86931_ip = 57;
                                continue _fun86931
                            }
                        case 104:
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var10 = var7.bind(var4)(var5, var6);
                var7 = _closure1_slot7;
                var6 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5 = new Array(0);
                var12 = var7.bind(var4)(var6, var5);
                var6 = _closure1_slot7;
                var5 = new Array(3);
                var5[0] = var9;
                var5[1] = var17;
                var14 = var2 == var8;
                var7 = undefined;
                if (var14) {
                    _fun86927_ip = 492;
                    continue _fun86927
                }
            case 487:
                var7 = var8.id;
            case 492:
                var5[2] = var7;
                var0 = function() { // Environment: var0
                    _fun86933: for (var _fun86933_ip = 0;;) switch (_fun86933_ip) {
                        case 0:
                            var1 = _closure2_slot5;
                            if (!var1) {
                                _fun86933_ip = 38;
                                continue _fun86933
                            }
                        case 10:
                            var2 = _closure2_slot3;
                            var3 = null;
                            var4 = var3 == var2;
                            var2 = undefined;
                            if (var4) {
                                _fun86933_ip = 34;
                                continue _fun86933
                            }
                        case 25:
                            var4 = _closure2_slot3;
                            var2 = var4.id;
                        case 34:
                            var1 = var3 != var2;
                        case 38:
                            if (!var1) {
                                _fun86933_ip = 126;
                                continue _fun86933
                            }
                        case 41:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 31;
                            var1 = var2[var1];
                            var2 = undefined;
                            var5 = var3.bind(var2)(var1);
                            var4 = var5.sendSidekickMessage;
                            var3 = _closure2_slot1;
                            var6 = _closure2_slot3;
                            var1 = null;
                            var6 = var1 == var6;
                            var1 = undefined;
                            if (var6) {
                                _fun86933_ip = 100;
                                continue _fun86933
                            }
                        case 91:
                            var6 = _closure2_slot3;
                            var1 = var6.id;
                        case 100:
                            var1 = var4.bind(var5)(var3, var1);
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var2)(var2);
                            var1 = _closure2_slot4;
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                        case 126:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var6.bind(var4)(var0, var5);
                var0 = null;
                if (!var3) {
                    _fun86927_ip = 1139;
                    continue _fun86927
                }
            case 517:
                var0 = null;
                if (var1) {
                    _fun86927_ip = 1139;
                    continue _fun86927
                }
            case 525:
                var3 = _closure1_slot19;
                var2 = _closure1_slot10;
                var1 = {};
                var6 = var15.inputContainer;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var6.borderColor = var16;
                var5[1] = var6;
                var1.style = var5;
                var8 = _closure1_slot18;
                var7 = _closure1_slot0;
                var19 = _closure1_slot2;
                var5 = 32;
                var5 = var19[var5];
                var5 = var7.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-md/bold',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var20 = var15.inputHeader;
                var18 = new Array(2);
                var18[0] = var20;
                var20 = {};
                var20.backgroundColor = var16;
                var18[1] = var20;
                var5.style = var18;
                var18 = true;
                var21 = 23;
                var20 = var19[var21];
                var20 = var7.bind(var4)(var20);
                var23 = var20.intl;
                var22 = var23.string;
                var24 = _closure1_slot1;
                var20 = 24;
                var20 = var19[var20];
                var20 = var24.bind(var4)(var20);
                var20 = var20["//ZYM/"];
                var20 = var22.bind(var23)(var20);
                var5.children = var20;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var8 = _closure1_slot18;
                var6 = 33;
                var6 = var19[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.TextInput;
                var6 = {};
                var6.multiline = var18;
                var6.onChangeText = var12;
                var18 = var15.input;
                var12 = new Array(2);
                var12[0] = var18;
                var18 = {};
                var18.color = var16;
                var12[1] = var18;
                var6.style = var12;
                var6.value = var9;
                var9 = !var11;
                var6.editable = var9;
                var6.placeholderTextColor = var16;
                var9 = undefined;
                if (!var11) {
                    _fun86927_ip = 844;
                    continue _fun86927
                }
            case 792:
                var20 = _closure1_slot0;
                var12 = _closure1_slot2;
                var18 = var12[var21];
                var18 = var20.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var12 = var12[var21];
                var12 = var20.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.fjcCk5;
                var9 = var18.bind(var19)(var12);
            case 844:
                var6.placeholder = var9;
                var9 = 'done';
                var6.returnKeyType = var9;
                var9 = 'blurAndSubmit';
                var6.submitBehavior = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var8 = _closure1_slot19;
                var7 = _closure1_slot10;
                var6 = {};
                var9 = var15.inputActions;
                var6.style = var9;
                var19 = _closure1_slot18;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var18 = 34;
                var9 = var9[var18];
                var9 = var12.bind(var4)(var9);
                var12 = var9.PressableOpacity;
                var9 = {};
                var9.onPress = var10;
                var9.disabled = var11;
                var10 = undefined;
                if (!var11) {
                    _fun86927_ip = 949;
                    continue _fun86927
                }
            case 944:
                var10 = var15.disabled;
            case 949:
                var9.style = var10;
                var22 = _closure1_slot18;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var20 = 35;
                var20 = var10[var20];
                var20 = var11.bind(var4)(var20);
                var21 = var20.DiceIcon;
                var20 = {};
                var20.color = var16;
                var20 = var22.bind(var4)(var21, var20);
                var9.children = var20;
                var12 = var19.bind(var4)(var12, var9);
                var9 = new Array(2);
                var9[0] = var12;
                var12 = _closure1_slot18;
                var10 = var10[var18];
                var10 = var11.bind(var4)(var10);
                var11 = var10.PressableOpacity;
                var10 = {};
                var10.onPress = var14;
                var14 = !var17;
                var10.disabled = var14;
                var14 = undefined;
                if (var17) {
                    _fun86927_ip = 1055;
                    continue _fun86927
                }
            case 1050:
                var14 = var15.disabled;
            case 1055:
                var10.style = var14;
                var15 = _closure1_slot18;
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 36;
                var13 = var17[var13];
                var13 = var14.bind(var4)(var13);
                var14 = var13.SendMessageIcon;
                var13 = {};
                var13.color = var16;
                var13 = var15.bind(var4)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1139:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var12 = 0;
    var3 = var5[var12];
    var0 = undefined;
    var3 = var16.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useMemo;
    var _closure1_slot4 = var6;
    var6 = var3.useContext;
    var _closure1_slot5 = var6;
    var6 = var3.useState;
    var _closure1_slot6 = var6;
    var6 = var3.useCallback;
    var _closure1_slot7 = var6;
    var6 = var3.useEffect;
    var _closure1_slot8 = var6;
    var3 = var3.useRef;
    var _closure1_slot9 = var3;
    var10 = 2;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot10 = var3;
    var9 = 3;
    var3 = var5[var9];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var8 = 4;
    var3 = var5[var8];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var7 = 5;
    var3 = var5[var7];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var16.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.CHECKPOINT_LOVE_LETTER_STRINGS;
    var _closure1_slot15 = var6;
    var6 = var3.CheckpointSlides;
    var _closure1_slot16 = var6;
    var3 = var3.CheckpointSteps;
    var _closure1_slot17 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot18 = var6;
    var3 = var3.jsxs;
    var _closure1_slot19 = var3;
    var3 = 9;
    var3 = var5[var3];
    var13 = var4.bind(var0)(var3);
    var6 = var13.createStyles;
    var3 = {};
    var14 = {
        'width': '100%',
        'height': '100%',
        'marginTop': '-50%'
    };
    var3.animation = var14;
    var14 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var3.title = var14;
    var14 = {};
    var15 = 800;
    var14.fontWeight = var15;
    var3.titleText = var14;
    var18 = 'uppercase';
    var15 = 10;
    var14 = {
        'textTransform': 'uppercase',
        'paddingVertical': 10
    };
    var3.display = var14;
    var14 = {
        'width': '100%',
        'height': '100%'
    };
    var3.container = var14;
    var14 = {
        'width': '100%',
        'position': 'absolute',
        'bottom': 0
    };
    var3.belowAnimation = var14;
    var14 = {
        'position': 'absolute',
        'top': '50%',
        'transform': 'translateY(-100%)',
        'textAlign': 'center',
        'padding': null,
        'width': '100%'
    };
    var17 = '50%';
    var19 = var5[var15];
    var19 = var16.bind(var0)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_16;
    var14.padding = var19;
    var3.centered = var14;
    var14 = {
        'width': '100%',
        'height': '100%',
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.transition = var14;
    var14 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'gap': null,
        'alignItems': 'baseline'
    };
    var19 = var5[var15];
    var19 = var16.bind(var0)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_16;
    var14.gap = var19;
    var3.stats = var14;
    var14 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 2
    };
    var3.stat = var14;
    var14 = {};
    var14.width = var17;
    var3.statContainer = var14;
    var14 = {
        'borderRadius': null,
        'borderWidth': 1,
        'borderStyle': 'solid',
        'backgroundColor': 'black',
        'width': '100%',
        'position': 'relative'
    };
    var17 = var5[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.none;
    var14.borderRadius = var17;
    var17 = 'black';
    var19 = var5[var15];
    var19 = var16.bind(var0)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_16;
    var14.marginTop = var19;
    var3.inputContainer = var14;
    var14 = {};
    var19 = var5[var15];
    var19 = var16.bind(var0)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_12;
    var14.paddingHorizontal = var19;
    var19 = var5[var15];
    var19 = var16.bind(var0)(var19);
    var19 = var19.spacing;
    var19 = var19.PX_8;
    var14.paddingVertical = var19;
    var14.textTransform = var18;
    var14.color = var17;
    var3.inputHeader = var14;
    var14 = {
        'display': 'flex',
        'gap': null,
        'flexDirection': 'row',
        'position': 'absolute'
    };
    var17 = var5[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_24;
    var14.gap = var17;
    var17 = var5[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_12;
    var14.right = var17;
    var17 = var5[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_12;
    var14.bottom = var17;
    var3.inputActions = var14;
    var14 = {
        'width': '100%',
        'padding': null,
        'marginBottom': null,
        'textAlignVertical': 'top',
        'maxHeight': 200
    };
    var17 = var5[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_12;
    var14.padding = var17;
    var17 = var5[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_32;
    var14.marginBottom = var17;
    var3.input = var14;
    var14 = {};
    var17 = 0.5;
    var14.opacity = var17;
    var3.disabled = var14;
    var14 = {};
    var15 = var5[var15];
    var15 = var16.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var14.marginTop = var15;
    var3.knickKnacks = var14;
    var3 = var6.bind(var13)(var3);
    var _closure1_slot20 = var3;
    var3 = {};
    var3.START = var12;
    var6 = 'START';
    var3[var12] = var6;
    var3.INTRO = var11;
    var6 = 'INTRO';
    var3[var11] = var6;
    var3.TRANSITION = var10;
    var6 = 'TRANSITION';
    var3[var10] = var6;
    var3.BEST = var9;
    var6 = 'BEST';
    var3[var9] = var6;
    var3.LEAVE = var8;
    var6 = 'LEAVE';
    var3[var8] = var6;
    var3.END = var7;
    var6 = 'END';
    var3[var7] = var6;
    var _closure1_slot21 = var3;
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/components/screens/CheckpointFriendsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: CheckpointFriendsScreen, environment: var1
        _fun86934: for (var _fun86934_ip = 0;;) switch (_fun86934_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.step;
                var _closure2_slot0 = var9;
                var7 = var1.onNextStep;
                var _closure2_slot1 = var7;
                var6 = var1.onPreviousStep;
                var _closure2_slot2 = var6;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var2 = 11;
                var2 = var1[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var16 = var2.insets;
                var4 = _closure1_slot0;
                var2 = 12;
                var1 = var1[var2];
                var8 = var4.bind(var3)(var1);
                var5 = var8.useStateFromStores;
                var1 = _closure1_slot14;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot14;
                    var0 = var1.getCheckpointData;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var5.bind(var8)(var4, var1);
                var5 = var1.users;
                if (!(var3 === var5)) {
                    _fun86934_ip = 150;
                    continue _fun86934
                }
            case 146:
                var5 = new Array(0);
            case 150:
                var37 = var1.sidekick;
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 13;
                var1 = var8[var1];
                var10 = var4.bind(var3)(var1);
                var8 = var10.getDurationAndUnit;
                var36 = null;
                var1 = var36 == var37;
                var11 = undefined;
                if (var1) {
                    _fun86934_ip = 199;
                    continue _fun86934
                }
            case 193:
                var11 = var37.numVoiceMinutes;
            case 199:
                var12 = var36 != var11;
                var4 = 0;
                var1 = 0;
                if (!var12) {
                    _fun86934_ip = 213;
                    continue _fun86934
                }
            case 210:
                var1 = var11;
            case 213:
                var1 = var8.bind(var10)(var1);
                var26 = var1.unit;
                var29 = var1.duration;
                var11 = 1;
                var10 = var5[var11];
                var8 = var5[var4];
                var14 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = var12[var2];
                var18 = var14.bind(var3)(var1);
                var17 = var18.useStateFromStores;
                var1 = _closure1_slot13;
                var15 = new Array(1);
                var15[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot13;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var27 = var17.bind(var18)(var15, var1);
                var15 = _closure1_slot1;
                var1 = 14;
                var1 = var12[var1];
                var1 = var15.bind(var3)(var1);
                var1 = var1.bind(var3)(var9);
                _closure2_slot3 = var1;
                var15 = _closure1_slot9;
                var4 = var15.bind(var3)(var4);
                _closure2_slot4 = var4;
                var4 = true;
                var15 = var15.bind(var3)(var4);
                _closure2_slot5 = var15;
                var15 = 15;
                var12 = var12[var15];
                var17 = var14.bind(var3)(var12);
                var14 = var17.useName;
                var18 = var36 == var37;
                var12 = undefined;
                if (var18) {
                    _fun86934_ip = 368;
                    continue _fun86934
                }
            case 363:
                var12 = var37.user;
            case 368:
                var12 = var14.bind(var17)(var12);
                var14 = var36 != var12;
                var22 = '';
                var21 = var22;
                if (!var14) {
                    _fun86934_ip = 390;
                    continue _fun86934
                }
            case 387:
                var21 = var12;
            case 390:
                var14 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var15];
                var14 = var14.bind(var3)(var12);
                var12 = var14.useName;
                var12 = var12.bind(var14)(var10);
                var14 = var36 != var12;
                var23 = var22;
                if (!var14) {
                    _fun86934_ip = 431;
                    continue _fun86934
                }
            case 428:
                var23 = var12;
            case 431:
                var14 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var15];
                var14 = var14.bind(var3)(var12);
                var12 = var14.useName;
                var12 = var12.bind(var14)(var8);
                var14 = var36 != var12;
                if (!var14) {
                    _fun86934_ip = 469;
                    continue _fun86934
                }
            case 466:
                var22 = var12;
            case 469:
                var5 = var5.length;
                var20 = var11 === var5;
                _closure2_slot6 = var20;
                var15 = _closure1_slot0;
                var30 = _closure1_slot2;
                var2 = var30[var2];
                var12 = var15.bind(var3)(var2);
                var11 = var12.useStateFromStores;
                var2 = _closure1_slot11;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot11;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var19 = var11.bind(var12)(var5, var2);
                _closure2_slot7 = var19;
                var2 = _closure1_slot20;
                var25 = var2.bind(var3)();
                var5 = _closure1_slot5;
                var2 = 16;
                var2 = var30[var2];
                var2 = var15.bind(var3)(var2);
                var2 = var2.CheckpointColorContext;
                var2 = var5.bind(var3)(var2);
                var5 = 17;
                var5 = var30[var5];
                var11 = var15.bind(var3)(var5);
                var5 = var11.useToken;
                var2 = var2.primaryColor;
                var32 = var5.bind(var11)(var2);
                var11 = _closure1_slot4;
                var5 = new Array(2);
                var5[0] = var9;
                var5[1] = var19;
                var2 = function() { // Environment: var0
                    _fun86938: for (var _fun86938_ip = 0;;) switch (_fun86938_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot17;
                            var2 = var2.FRIENDS_INTRO;
                            if (!(!(var3 < var2))) {
                                _fun86938_ip = 195;
                                continue _fun86938
                            }
                        case 27:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot17;
                            var2 = var2.FRIENDS_LEAVE;
                            if (!(!(var3 > var2))) {
                                _fun86938_ip = 183;
                                continue _fun86938
                            }
                        case 48:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot17;
                            var2 = var2.FRIENDS_INTRO;
                            if (!(var2 !== var3)) {
                                _fun86938_ip = 171;
                                continue _fun86938
                            }
                        case 66:
                            var2 = _closure1_slot17;
                            var2 = var2.FRIENDS_TRANSITION;
                            if (!(var2 !== var3)) {
                                _fun86938_ip = 159;
                                continue _fun86938
                            }
                        case 80:
                            var2 = _closure1_slot17;
                            var2 = var2.FRIENDS_BEST;
                            if (!(var2 !== var3)) {
                                _fun86938_ip = 147;
                                continue _fun86938
                            }
                        case 94:
                            var2 = _closure1_slot17;
                            var2 = var2.FRIENDS_LEAVE;
                            if (!(var2 !== var3)) {
                                _fun86938_ip = 120;
                                continue _fun86938
                            }
                        case 108:
                            var2 = _closure1_slot21;
                            var2 = var2.START;
                            return var2;
                        case 120:
                            var1 = _closure2_slot7;
                            var2 = _closure1_slot21;
                            if (var1) {
                                _fun86938_ip = 139;
                                continue _fun86938
                            }
                        case 131:
                            var1 = var2.LEAVE;
                            _fun86938_ip = 145;
                            continue _fun86938;
                        case 139:
                            var1 = var2.BEST;
                        case 145:
                            return var1;
                        case 147:
                            var1 = _closure1_slot21;
                            var1 = var1.BEST;
                            return var1;
                        case 159:
                            var1 = _closure1_slot21;
                            var1 = var1.TRANSITION;
                            return var1;
                        case 171:
                            var1 = _closure1_slot21;
                            var1 = var1.INTRO;
                            return var1;
                        case 183:
                            var1 = _closure1_slot21;
                            var1 = var1.END;
                            return var1;
                        case 195:
                            var0 = _closure1_slot21;
                            var0 = var0.START;
                            return var0;
                    }
                };
                var28 = var11.bind(var3)(var2, var5);
                var11 = _closure1_slot4;
                var5 = new Array(2);
                var5[0] = var19;
                var5[1] = var20;
                var2 = function() { // Environment: var0
                    _fun86939: for (var _fun86939_ip = 0;;) switch (_fun86939_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            if (!var0) {
                                _fun86939_ip = 23;
                                continue _fun86939
                            }
                        case 10:
                            var1 = _closure2_slot7;
                            var0 = 'twoFriends-reducedMotion';
                            if (var1) {
                                _fun86939_ip = 59;
                                continue _fun86939
                            }
                        case 23:
                            var3 = _closure2_slot6;
                            var1 = 'twoFriends';
                            if (var3) {
                                _fun86939_ip = 56;
                                continue _fun86939
                            }
                        case 34:
                            var3 = _closure2_slot7;
                            var2 = 'threeFriends';
                            if (!var3) {
                                _fun86939_ip = 53;
                                continue _fun86939
                            }
                        case 47:
                            var2 = 'threeFriends-reducedMotion';
                        case 53:
                            var1 = var2;
                        case 56:
                            var0 = var1;
                        case 59:
                            return var0;
                    }
                };
                var18 = var11.bind(var3)(var2, var5);
                var2 = _closure1_slot8;
                var5 = new Array(5);
                var5[0] = var7;
                var5[1] = var6;
                var5[2] = var1;
                var5[3] = var19;
                var5[4] = var9;
                var1 = function() { // Environment: var0
                    _fun86940: for (var _fun86940_ip = 0;;) switch (_fun86940_ip) {
                        case 0:
                            var4 = _closure2_slot0;
                            var3 = _closure1_slot17;
                            var3 = var3.FRIENDS_LEAVE;
                            if (!(var4 === var3)) {
                                _fun86940_ip = 124;
                                continue _fun86940
                            }
                        case 26:
                            var4 = _closure2_slot3;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun86940_ip = 54;
                                continue _fun86940
                            }
                        case 36:
                            var3 = _closure2_slot3;
                            var2 = _closure1_slot17;
                            var2 = var2.FRIENDS_LEAVE;
                            if (!(!(var3 > var2))) {
                                _fun86940_ip = 114;
                                continue _fun86940
                            }
                        case 54:
                            var2 = _closure2_slot7;
                            if (var2) {
                                _fun86940_ip = 102;
                                continue _fun86940
                            }
                        case 61:
                            var3 = _closure2_slot4;
                            var2 = global;
                            var6 = var2.setTimeout;
                            var5 = undefined;
                            var4 = function() { // Environment: var0
                                var1 = _closure2_slot1;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            var2 = 1000;
                            var2 = var6.bind(var5)(var4, var2);
                            var3.current = var2;
                            _fun86940_ip = 124;
                            continue _fun86940;
                        case 102:
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var2 = var3.bind(var2)();
                            _fun86940_ip = 124;
                            continue _fun86940;
                        case 114:
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                        case 124:
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var0 = _closure2_slot4;
                                var1 = var0.current;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1, var5);
                var6 = _closure1_slot7;
                var5 = function(arg0) { // Environment: var0
                    _fun86943: for (var _fun86943_ip = 0;;) switch (_fun86943_ip) {
                        case 0:
                            var6 = arg0;
                            var0 = null;
                            var1 = var0 != var6;
                            var3 = undefined;
                            var0 = undefined;
                            if (!var1) {
                                _fun86943_ip = 64;
                                continue _fun86943
                            }
                        case 16:
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 18;
                            var1 = var4[var1];
                            var5 = var2.bind(var3)(var1);
                            var4 = var5.getUserAvatarURL;
                            var9 = false;
                            var8 = 64;
                            var7 = 'png';
                            var11 = var5;
                            var10 = var6;
                            var0 = var11[var4](var10, var9, var8, var7, var6);
                        case 64:
                            return var0;
                    }
                };
                var1 = new Array(0);
                var24 = var6.bind(var3)(var5, var1);
                var1 = function() { // Environment: var0
                    var1 = _closure2_slot5;
                    var0 = false;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot18;
                var1 = _closure1_slot1;
                var0 = 19;
                var0 = var30[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = _closure1_slot16;
                var5 = var5.FRIENDS;
                var0.slide = var5;
                var0.allowFullScreen = var4;
                var6 = _closure1_slot19;
                var5 = _closure1_slot10;
                var4 = {};
                var7 = var25.container;
                var4.style = var7;
                var12 = _closure1_slot18;
                var11 = _closure1_slot10;
                var7 = {};
                var14 = var25.animation;
                var7.style = var14;
                var17 = _closure1_slot18;
                var14 = 20;
                var14 = var30[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.CheckpointFriendsRive;
                var14 = {};
                var14.defaultViewModelInstance = var18;
                var18 = {};
                var18.AnimationState = var28;
                var30 = var36 == var37;
                var28 = undefined;
                if (var30) {
                    _fun86934_ip = 865;
                    continue _fun86934
                }
            case 860:
                var28 = var37.user;
            case 865:
                var28 = var24.bind(var3)(var28);
                var18['Avatar01/img'] = var28;
                var28 = var24.bind(var3)(var10);
                var18['Avatar02/img'] = var28;
                var28 = var24.bind(var3)(var8);
                var18['Avatar03/img'] = var28;
                var30 = var36 == var37;
                var28 = undefined;
                if (var30) {
                    _fun86934_ip = 909;
                    continue _fun86934
                }
            case 904:
                var28 = var37.user;
            case 909:
                var28 = var24.bind(var3)(var28);
                var18['Avatar04/img'] = var28;
                var24 = var24.bind(var3)(var27);
                var18['Avatar05/img'] = var24;
                var18['Avatar01/Username'] = var21;
                var18['Avatar02/Username'] = var23;
                var18['Avatar03/Username'] = var22;
                var18['Avatar04/Username'] = var21;
                var18.twoFriends = var20;
                var18.reducedMotion = var19;
                var14.dataBinding = var18;
                var14 = var17.bind(var3)(var15, var14);
                var7.children = var14;
                var11 = var12.bind(var3)(var11, var7);
                var7 = new Array(4);
                var7[0] = var11;
                var10 = var36 == var10;
                if (!var10) {
                    _fun86934_ip = 999;
                    continue _fun86934
                }
            case 995:
                var10 = var36 == var8;
            case 999:
                var8 = !var10;
                if (var10) {
                    _fun86934_ip = 1019;
                    continue _fun86934
                }
            case 1005:
                var10 = _closure1_slot17;
                var10 = var10.FRIENDS_INTRO;
                var8 = var9 <= var10;
            case 1019:
                if (!var8) {
                    _fun86934_ip = 1609;
                    continue _fun86934
                }
            case 1025:
                var12 = _closure1_slot19;
                var11 = _closure1_slot10;
                var10 = {};
                var15 = var25.belowAnimation;
                var14 = new Array(2);
                var14[0] = var15;
                var15 = {};
                var21 = var16.bottom;
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var18 = 10;
                var20 = var19[var18];
                var20 = var17.bind(var3)(var20);
                var20 = var20.spacing;
                var20 = var20.PX_96;
                var20 = var21 + var20;
                var15.paddingBottom = var20;
                var21 = var16.right;
                var20 = var19[var18];
                var20 = var17.bind(var3)(var20);
                var20 = var20.spacing;
                var20 = var20.PX_24;
                var20 = var21 + var20;
                var15.paddingRight = var20;
                var20 = var16.left;
                var18 = var19[var18];
                var18 = var17.bind(var3)(var18);
                var18 = var18.spacing;
                var18 = var18.PX_24;
                var18 = var20 + var18;
                var15.paddingLeft = var18;
                var14[1] = var15;
                var10.style = var14;
                var20 = _closure1_slot19;
                var18 = _closure1_slot10;
                var14 = {};
                var15 = var25.title;
                var14.style = var15;
                var22 = _closure1_slot18;
                var23 = _closure1_slot0;
                var15 = 21;
                var15 = var19[var15];
                var15 = var23.bind(var3)(var15);
                var21 = var15.FriendsIcon;
                var15 = {};
                var24 = 'xs';
                var15.size = var24;
                var24 = {};
                var24.tintColor = var32;
                var15.style = var24;
                var15 = var22.bind(var3)(var21, var15);
                var24 = new Array(2);
                var24[0] = var15;
                var30 = _closure1_slot18;
                var15 = 22;
                var21 = var19[var15];
                var28 = var17.bind(var3)(var21);
                var27 = {
                    'variant': 'eyebrow',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var21 = var25.titleText;
                var27.style = var21;
                var22 = 23;
                var21 = var19[var22];
                var21 = var23.bind(var3)(var21);
                var34 = var21.intl;
                var33 = var34.string;
                var21 = 24;
                var31 = var19[var21];
                var31 = var17.bind(var3)(var31);
                var31 = var31.ZQakPR;
                var31 = var33.bind(var34)(var31);
                var27.children = var31;
                var27 = var30.bind(var3)(var28, var27);
                var24[1] = var27;
                var14.children = var24;
                var18 = var20.bind(var3)(var18, var14);
                var14 = new Array(4);
                var14[0] = var18;
                var24 = _closure1_slot18;
                var18 = var19[var15];
                var20 = var17.bind(var3)(var18);
                var18 = {
                    'variant': 'display-md',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var27 = var25.display;
                var18.style = var27;
                var27 = var19[var22];
                var27 = var23.bind(var3)(var27);
                var30 = var27.intl;
                var28 = var30.string;
                var27 = var19[var21];
                var27 = var17.bind(var3)(var27);
                var27 = var27.OzY5Ns;
                var27 = var28.bind(var30)(var27);
                var18.children = var27;
                var18 = var24.bind(var3)(var20, var18);
                var14[1] = var18;
                var20 = _closure1_slot18;
                var15 = var19[var15];
                var18 = var17.bind(var3)(var15);
                var15 = {
                    'variant': 'heading-lg/medium',
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 4
                };
                var22 = var19[var22];
                var22 = var23.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var19[var21];
                var21 = var17.bind(var3)(var21);
                var21 = var21.sEPtGY;
                var21 = var22.bind(var23)(var21);
                var15.children = var21;
                var15 = var20.bind(var3)(var18, var15);
                var14[2] = var15;
                var18 = _closure1_slot18;
                var15 = 25;
                var15 = var19[var15];
                var17 = var17.bind(var3)(var15);
                var15 = {};
                var19 = var25.knickKnacks;
                var15.style = var19;
                var19 = _closure1_slot16;
                var19 = var19.FRIENDS;
                var15.slide = var19;
                var15 = var18.bind(var3)(var17, var15);
                var14[3] = var15;
                var10.children = var14;
                var8 = var12.bind(var3)(var11, var10);
            case 1609:
                var7[1] = var8;
                var8 = _closure1_slot17;
                var8 = var8.FRIENDS_TRANSITION;
                var8 = var9 === var8;
                if (!var8) {
                    _fun86934_ip = 1737;
                    continue _fun86934
                }
            case 1630:
                var12 = _closure1_slot18;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var10 = 22;
                var10 = var19[var10];
                var11 = var18.bind(var3)(var10);
                var10 = {};
                var14 = var25.centered;
                var10.style = var14;
                var14 = 'heading-lg/medium';
                var10.variant = var14;
                var15 = _closure1_slot0;
                var14 = 23;
                var14 = var19[var14];
                var14 = var15.bind(var3)(var14);
                var17 = var14.intl;
                var15 = var17.string;
                var14 = 24;
                var14 = var19[var14];
                var14 = var18.bind(var3)(var14);
                var14 = var14.d5HUsD;
                var14 = var15.bind(var17)(var14);
                var10.children = var14;
                var8 = var12.bind(var3)(var11, var10);
            case 1737:
                var7[2] = var8;
                var8 = _closure1_slot17;
                var8 = var8.FRIENDS_BEST;
                var8 = var9 >= var8;
                if (!var8) {
                    _fun86934_ip = 2924;
                    continue _fun86934
                }
            case 1761:
                var11 = _closure1_slot19;
                var10 = _closure1_slot10;
                var9 = {};
                var14 = var25.belowAnimation;
                var12 = new Array(2);
                var12[0] = var14;
                var14 = {};
                var18 = var16.bottom;
                var33 = _closure1_slot1;
                var28 = _closure1_slot2;
                var15 = 10;
                var17 = var28[var15];
                var17 = var33.bind(var3)(var17);
                var17 = var17.spacing;
                var17 = var17.PX_96;
                var17 = var18 + var17;
                var14.paddingBottom = var17;
                var18 = var16.right;
                var17 = var28[var15];
                var17 = var33.bind(var3)(var17);
                var17 = var17.spacing;
                var17 = var17.PX_24;
                var17 = var18 + var17;
                var14.paddingRight = var17;
                var16 = var16.left;
                var15 = var28[var15];
                var15 = var33.bind(var3)(var15);
                var15 = var15.spacing;
                var15 = var15.PX_24;
                var15 = var16 + var15;
                var14.paddingLeft = var15;
                var12[1] = var14;
                var9.style = var12;
                var15 = _closure1_slot19;
                var14 = _closure1_slot10;
                var12 = {};
                var16 = var25.title;
                var12.style = var16;
                var18 = _closure1_slot18;
                var35 = _closure1_slot0;
                var16 = 21;
                var16 = var28[var16];
                var16 = var35.bind(var3)(var16);
                var17 = var16.FriendsIcon;
                var16 = {};
                var31 = 'xs';
                var16.size = var31;
                var19 = {};
                var19.tintColor = var32;
                var16.style = var19;
                var17 = var18.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot18;
                var30 = 22;
                var17 = var28[var30];
                var18 = var33.bind(var3)(var17);
                var17 = {
                    'variant': 'eyebrow',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var20 = var25.titleText;
                var17.style = var20;
                var27 = 23;
                var20 = var28[var27];
                var20 = var35.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var34 = 24;
                var20 = var28[var34];
                var20 = var33.bind(var3)(var20);
                var20 = var20.ZQakPR;
                var20 = var21.bind(var22)(var20);
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var12.children = var16;
                var14 = var15.bind(var3)(var14, var12);
                var12 = new Array(4);
                var12[0] = var14;
                var16 = _closure1_slot18;
                var14 = var28[var30];
                var15 = var33.bind(var3)(var14);
                var14 = {
                    'variant': 'display-md',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var17 = var25.display;
                var14.style = var17;
                var17 = var28[var27];
                var17 = var35.bind(var3)(var17);
                var19 = var17.intl;
                var18 = var19.string;
                var17 = var28[var34];
                var17 = var33.bind(var3)(var17);
                var17 = var17["+uwOHt"];
                var17 = var18.bind(var19)(var17);
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var12[1] = var14;
                var16 = _closure1_slot19;
                var15 = _closure1_slot10;
                var14 = {};
                var17 = var25.stats;
                var14.style = var17;
                var19 = _closure1_slot19;
                var18 = _closure1_slot10;
                var17 = {};
                var20 = var25.statContainer;
                var17.style = var20;
                var22 = _closure1_slot18;
                var20 = var28[var30];
                var21 = var33.bind(var3)(var20);
                var20 = {
                    'variant': 'eyebrow',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var23 = var25.titleText;
                var20.style = var23;
                var23 = var28[var27];
                var23 = var35.bind(var3)(var23);
                var38 = var23.intl;
                var24 = var38.string;
                var23 = var28[var34];
                var23 = var33.bind(var3)(var23);
                var23 = var23.wWKySP;
                var23 = var24.bind(var38)(var23);
                var20.children = var23;
                var21 = var22.bind(var3)(var21, var20);
                var20 = new Array(2);
                var20[0] = var21;
                var23 = _closure1_slot19;
                var22 = _closure1_slot10;
                var21 = {};
                var24 = var25.stat;
                var21.style = var24;
                var38 = _closure1_slot18;
                var24 = 26;
                var24 = var28[var24];
                var24 = var35.bind(var3)(var24);
                var35 = var24.ChatIcon;
                var24 = {};
                var24.size = var31;
                var39 = {};
                var39.tintColor = var32;
                var24.style = var39;
                var35 = var38.bind(var3)(var35, var24);
                var24 = new Array(2);
                var24[0] = var35;
                var35 = _closure1_slot18;
                var28 = var28[var30];
                var33 = var33.bind(var3)(var28);
                var28 = {
                    'variant': 'text-lg/medium',
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 1
                };
                var38 = var36 == var37;
                var36 = undefined;
                if (var38) {
                    _fun86934_ip = 2451;
                    continue _fun86934
                }
            case 2445:
                var36 = var37.numMessagesSent;
            case 2451:
                var28.children = var36;
                var28 = var35.bind(var3)(var33, var28);
                var24[1] = var28;
                var21.children = var24;
                var21 = var23.bind(var3)(var22, var21);
                var20[1] = var21;
                var17.children = var20;
                var18 = var19.bind(var3)(var18, var17);
                var17 = new Array(2);
                var17[0] = var18;
                var20 = _closure1_slot19;
                var19 = _closure1_slot10;
                var18 = {};
                var21 = var25.statContainer;
                var18.style = var21;
                var23 = _closure1_slot18;
                var22 = _closure1_slot1;
                var33 = _closure1_slot2;
                var21 = var33[var30];
                var22 = var22.bind(var3)(var21);
                var21 = {
                    'variant': 'eyebrow',
                    'style': null,
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 2
                };
                var24 = var25.titleText;
                var21.style = var24;
                var28 = _closure1_slot0;
                var24 = 27;
                var24 = var33[var24];
                var24 = var28.bind(var3)(var24);
                var24 = var24.TimeUnits;
                var24 = var24.HOURS;
                if (!(var26 !== var24)) {
                    _fun86934_ip = 2649;
                    continue _fun86934
                }
            case 2596:
                var28 = _closure1_slot0;
                var24 = _closure1_slot2;
                var26 = var24[var27];
                var26 = var28.bind(var3)(var26);
                var28 = var26.intl;
                var26 = var28.string;
                var33 = _closure1_slot1;
                var24 = var24[var34];
                var24 = var33.bind(var3)(var24);
                var24 = var24.RmVTph;
                var24 = var26.bind(var28)(var24);
                _fun86934_ip = 2708;
                continue _fun86934;
            case 2649:
                var28 = _closure1_slot0;
                var26 = _closure1_slot2;
                var27 = var26[var27];
                var27 = var28.bind(var3)(var27);
                var33 = var27.intl;
                var28 = var33.format;
                var27 = _closure1_slot1;
                var26 = var26[var34];
                var26 = var27.bind(var3)(var26);
                var27 = var26.Xu0QsX;
                var26 = {};
                var26.numHours = var29;
                var24 = var28.bind(var33)(var27, var26);
            case 2708:
                var21.children = var24;
                var22 = var23.bind(var3)(var22, var21);
                var21 = new Array(2);
                var21[0] = var22;
                var24 = _closure1_slot19;
                var23 = _closure1_slot10;
                var22 = {};
                var25 = var25.stat;
                var22.style = var25;
                var28 = _closure1_slot18;
                var27 = _closure1_slot0;
                var26 = _closure1_slot2;
                var25 = 28;
                var25 = var26[var25];
                var25 = var27.bind(var3)(var25);
                var27 = var25.MicrophoneIcon;
                var25 = {};
                var25.size = var31;
                var31 = {};
                var31.tintColor = var32;
                var25.style = var31;
                var27 = var28.bind(var3)(var27, var25);
                var25 = new Array(2);
                var25[0] = var27;
                var28 = _closure1_slot18;
                var27 = _closure1_slot1;
                var26 = var26[var30];
                var27 = var27.bind(var3)(var26);
                var26 = {
                    'variant': 'text-lg/medium',
                    'adjustsFontSizeToFit': true,
                    'lineClamp': 1
                };
                var26.children = var29;
                var26 = var28.bind(var3)(var27, var26);
                var25[1] = var26;
                var22.children = var25;
                var22 = var24.bind(var3)(var23, var22);
                var21[1] = var22;
                var18.children = var21;
                var18 = var20.bind(var3)(var19, var18);
                var17[1] = var18;
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var12[2] = var14;
                var15 = _closure1_slot18;
                var14 = _closure1_slot22;
                var13 = {};
                var13 = var15.bind(var3)(var14, var13);
                var12[3] = var13;
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 2924:
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 3059, 1613, 11134, 9123, 33, 1297, 671, 4855, 566, 6809, 5267, 3195, 11136, 3110, 1417, 11138, 3118, 3108, 11143, 1234, 2267, 11150, 4800, 3488, 10743, 22, 11177, 11135, 3901, 4838, 4864, 10844, 3215, 2]);