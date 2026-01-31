// modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun110940: for (var _fun110940_ip = 0;;) switch (_fun110940_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun110940_ip = 46;
                    continue _fun110940
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun110940_ip = 55;
                    continue _fun110940
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun110940_ip = 345;
                    continue _fun110940
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun110940_ip = 323;
                    continue _fun110940
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun110940_ip = 283;
                    continue _fun110940
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun110940_ip = 270;
                    continue _fun110940
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun110940_ip = 163;
                    continue _fun110940
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun110940_ip = 179;
                    continue _fun110940
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun110940_ip = 249;
                    continue _fun110940
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun110940_ip = 249;
                    continue _fun110940
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun110940_ip = 234;
                    continue _fun110940
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun110940_ip = 247;
                    continue _fun110940
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun110940_ip = 265;
                continue _fun110940;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun110940_ip = 283;
                continue _fun110940;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun110940_ip = 323;
                    continue _fun110940
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun110940_ip = 330;
                    continue _fun110940
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun110941: for (var _fun110941_ip = 0;;) switch (_fun110941_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun110941_ip = 56;
                                continue _fun110941
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun110941_ip = 67;
                            continue _fun110941;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun110942: for (var _fun110942_ip = 0;;) switch (_fun110942_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun110942_ip = 23;
                    continue _fun110942
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun110942_ip = 33;
                    continue _fun110942
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun110942_ip = 70;
                    continue _fun110942
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun110942_ip = 55;
                    continue _fun110942
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var1 = function(arg0, arg1, arg2) { // Original name: useVoicePanelHeaderUserStateIcons, environment: var3
        _fun110943: for (var _fun110943_ip = 0;;) switch (_fun110943_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot8;
                var3 = undefined;
                var5 = var2.bind(var3)();
                var4 = new Array(0);
                var2 = _closure1_slot10;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var12 = 7;
                var6 = var6[var12];
                var8 = var7.bind(var3)(var6);
                var6 = null;
                var6 = var6 == var1;
                var7 = undefined;
                if (var6) {
                    _fun110943_ip = 60;
                    continue _fun110943
                }
            case 55:
                var7 = var1.type;
            case 60:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 8;
                var6 = var10[var6];
                var9 = var9.bind(var3)(var6);
                var6 = var9.isStableParticipantWithUser;
                var9 = var6.bind(var9)(var1);
                var6 = undefined;
                if (!var9) {
                    _fun110943_ip = 106;
                    continue _fun110943
                }
            case 96:
                var1 = var1.user;
                var6 = var1.id;
            case 106:
                var1 = arg1;
                var1 = var8.bind(var3)(var7, var6, var1);
                var11 = var2.bind(var3)(var1);
                var2 = var11.bind(var3)();
                var1 = var2.done;
                var10 = 9;
                var9 = 'mute-deafen';
                var8 = 4;
                var7 = 'dark';
                var6 = 'video';
                if (var1) {
                    _fun110943_ip = 519;
                    continue _fun110943
                }
            case 156:
                var19 = var2.value;
                var13 = var19.type;
                var14 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var12];
                var1 = var14.bind(var3)(var1);
                var1 = var1.VoicePanelCardUserStateIconType;
                var1 = var1.USER_VIDEO_ICON;
                if (!(var13 === var1)) {
                    _fun110943_ip = 311;
                    continue _fun110943
                }
            case 199:
                var13 = var4.push;
                var15 = _closure1_slot5;
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = var16[var8];
                var1 = var17.bind(var3)(var1);
                var14 = var1.BackgroundBlurView;
                var1 = {};
                var1.blurTheme = var7;
                var18 = var5.floatingIconWrapper;
                var1.style = var18;
                var18 = _closure1_slot5;
                var16 = var16[var10];
                var16 = var17.bind(var3)(var16);
                var17 = var16.VideoIcon;
                var16 = {};
                var20 = var5.floatingIcon;
                var16.style = var20;
                var20 = var19.videoIconState;
                var16.state = var20;
                var16 = var18.bind(var3)(var17, var16);
                var1.children = var16;
                var1 = var15.bind(var3)(var14, var1, var6);
                var1 = var13.bind(var4)(var1);
            case 311:
                var13 = var19.type;
                var14 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var12];
                var1 = var14.bind(var3)(var1);
                var1 = var1.VoicePanelCardUserStateIconType;
                var1 = var1.MUTE_DEAFEN_ICON;
                if (!(var13 === var1)) {
                    _fun110943_ip = 501;
                    continue _fun110943
                }
            case 352:
                var13 = var4.push;
                var15 = _closure1_slot5;
                var14 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var14.bind(var3)(var1);
                var14 = var1.BackgroundBlurView;
                var1 = {};
                var1.blurTheme = var7;
                var17 = var5.floatingIconWrapper;
                var16 = new Array(2);
                var16[0] = var17;
                var18 = var19.withLeftMargin;
                var17 = undefined;
                if (!var18) {
                    _fun110943_ip = 422;
                    continue _fun110943
                }
            case 416:
                var17 = var5.leftMargin;
            case 422:
                var16[1] = var17;
                var1.style = var16;
                var18 = _closure1_slot5;
                var17 = _closure1_slot0;
                var16 = _closure1_slot2;
                var16 = var16[var10];
                var16 = var17.bind(var3)(var16);
                var17 = var16.MuteDeafenIcon;
                var16 = {};
                var20 = var5.floatingIcon;
                var16.style = var20;
                var19 = var19.muteDeafenIconState;
                var16.state = var19;
                var16 = var18.bind(var3)(var17, var16);
                var1.children = var16;
                var1 = var15.bind(var3)(var14, var1, var9);
                var1 = var13.bind(var4)(var1);
            case 501:
                var13 = var11.bind(var3)();
                var1 = var13.done;
                var2 = var13;
                if (!var1) {
                    _fun110943_ip = 156;
                    continue _fun110943
                }
            case 519:
                var2 = var4.length;
                var1 = 0;
                if (!(var1 === var2)) {
                    _fun110943_ip = 532;
                    continue _fun110943
                }
            case 530:
                return var3;
            case 532:
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 10;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var6 = var5.iconContainer;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = arg2;
                var5[1] = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var1;
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
    var7 = var4.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var13.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var13.bind(var0)(var4);
    var8 = var9.createAnimatedComponent;
    var11 = 4;
    var4 = var6[var11];
    var4 = var5.bind(var0)(var4);
    var4 = var4.BackgroundBlurView;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = {};
    var8 = 100;
    var4.duration = var8;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'borderRadius': null,
        'padding': 6
    };
    var12 = 6;
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var10.borderRadius = var14;
    var4.container = var10;
    var10 = {};
    var14 = 'row';
    var10.flexDirection = var14;
    var4.iconContainer = var10;
    var10 = {
        'width': 20,
        'height': 20,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var14 = var6[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var10.borderRadius = var14;
    var4.floatingIconWrapper = var10;
    var10 = {
        'width': 12,
        'height': 12
    };
    var12 = var6[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var10.tintColor = var12;
    var4.floatingIcon = var10;
    var10 = {};
    var10.marginLeft = var11;
    var4.leftMargin = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = {};
    var8 = 'function VoicePanelHeaderUserStateTsx1(){const{withTiming,isHeaderHidden,OPACITY_TIMING}=this.__closure;return{opacity:withTiming(isHeaderHidden.get()?1:0,OPACITY_TIMING)};}';
    var4.code = var8;
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var3 = function(arg0) { // Original name: VoicePanelHeaderUserState, environment: var3
        _fun110944: for (var _fun110944_ip = 0;;) switch (_fun110944_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.isHeaderHidden;
                var _closure2_slot0 = var8;
                var5 = _closure1_slot3;
                var3 = var5.useContext;
                var12 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 11;
                var2 = var11[var2];
                var4 = undefined;
                var2 = var12.bind(var4)(var2);
                var2 = var3.bind(var5)(var2);
                var9 = var2.channelId;
                var _closure2_slot1 = var9;
                var5 = var2.guildId;
                var2 = _closure1_slot8;
                var6 = var2.bind(var4)();
                var10 = _closure1_slot0;
                var2 = 12;
                var2 = var11[var2];
                var13 = var10.bind(var4)(var2);
                var7 = var13.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun110945: for (var _fun110945_ip = 0;;) switch (_fun110945_ip) {
                        case 0:
                            var2 = _closure1_slot4;
                            var1 = var2.getSelectedParticipant;
                            var0 = _closure2_slot1;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun110945_ip = 41;
                                continue _fun110945
                            }
                        case 36:
                            var0 = var1.id;
                        case 41:
                            return var0;
                    }
                };
                var7 = var7.bind(var13)(var3, var2);
                var3 = _closure1_slot12;
                var2 = 8;
                var2 = var11[var2];
                var2 = var12.bind(var4)(var2);
                var2 = var2.bind(var4)(var7, var9, var5);
                var5 = var3.bind(var4)(var2, var5);
                var2 = 3;
                var2 = var11[var2];
                var3 = var10.bind(var4)(var2);
                var2 = var3.useAnimatedStyle;
                var0 = function() { // Original name: s, environment: var0
                    _fun110946: for (var _fun110946_ip = 0;;) switch (_fun110946_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 13;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.withTiming;
                            var5 = _closure2_slot0;
                            var2 = var5.get;
                            var5 = var2.bind(var5)();
                            var2 = 0;
                            if (!var5) {
                                _fun110946_ip = 56;
                                continue _fun110946
                            }
                        case 53:
                            var2 = 1;
                        case 56:
                            var1 = _closure1_slot7;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var7 = {};
                var9 = 13;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.withTiming;
                var7.withTiming = var9;
                var7.isHeaderHidden = var8;
                var8 = _closure1_slot7;
                var7.OPACITY_TIMING = var8;
                var0.__closure = var7;
                var7 = 7032221979181.0;
                var0.__workletHash = var7;
                var7 = _closure1_slot9;
                var0.__initData = var7;
                var7 = var2.bind(var3)(var0);
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun110944_ip = 315;
                    continue _fun110944
                }
            case 260:
                var3 = _closure1_slot5;
                var2 = _closure1_slot6;
                var1 = {
                    'blurTheme': 'dark',
                    'style': null,
                    'pointerEvents': 'none'
                };
                var8 = var6.container;
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var7;
                var1.style = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 315:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/header/VoicePanelHeaderUserState.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.useVoicePanelHeaderUserStateIcons = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3907, 33, 3679, 6987, 1297, 671, 14230, 14228, 8192, 6419, 11770, 566, 4056, 2]);