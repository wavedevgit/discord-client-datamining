// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.CHANNEL_SPRING_CONFIG;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 17;
    var6 = {
        'damping': 17,
        'stiffness': 320,
        'mass': 0.5
    };
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = function(arg0, arg1) { // Environment: var1
        var9 = arg0;
        var7 = arg1;
        var0 = {};
        var1 = {};
        var2 = 'row';
        var1.flexDirection = var2;
        var0.avatarStack = var1;
        var1 = {
            'flexDirection': 'row',
            'justifyContent': 'space-between',
            'alignItems': 'center',
            'backgroundColor': null,
            'borderRadius': 24,
            'paddingLeft': 4,
            'paddingRight': 4,
            'paddingVertical': 4
        };
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 7;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_MOD_SUBTLE;
        var1.backgroundColor = var6;
        var6 = 4;
        var0.stageAvatarStack = var1;
        var1 = {
            'display': 'flex',
            'flexDirection': 'row'
        };
        var0.avatarBubbles = var1;
        var1 = {
            'display': 'flex',
            'flexDirection': 'row'
        };
        var0.avatars = var1;
        var1 = {};
        var10 = -var7;
        var1.marginLeft = var10;
        var0.shiftedAvatar = var1;
        var1 = {
            'backgroundColor': null,
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'center'
        };
        var10 = var5[var2];
        var10 = var4.bind(var3)(var10);
        var10 = var10.colors;
        var10 = var10.BACKGROUND_MOD_STRONG;
        var1.backgroundColor = var10;
        var10 = -var7;
        var1.marginLeft = var10;
        var10 = _closure1_slot0;
        var8 = 8;
        var11 = var5[var8];
        var11 = var10.bind(var3)(var11);
        var11 = var11.AVATAR_SIZE_MAP;
        var11 = var11[var9];
        var1.height = var11;
        var8 = var5[var8];
        var8 = var10.bind(var3)(var8);
        var8 = var8.AVATAR_SIZE_MAP;
        var8 = var8[var9];
        var1.minWidth = var8;
        var8 = 10;
        var1.borderRadius = var8;
        var1.paddingHorizontal = var6;
        var6 = 1;
        var1.paddingTop = var6;
        var0.userCounter = var1;
        var1 = {
            'display': 'flex',
            'flexDirection': 'row',
            'justifyContent': 'center',
            'alignItems': 'flex-end',
            'overflow': 'hidden'
        };
        var6 = -4;
        var6 = var6 - var7;
        var1.marginLeft = var6;
        var0.ellipsisWrapper = var1;
        var1 = {};
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.CARD_SECONDARY_BG;
        var1.borderColor = var2;
        var0.ellipsisBorder = var1;
        return var0;
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot11 = var6;
    var6 = {};
    var7 = 'function HappeningNowAvatarStackTsx1(){const{interpolate,typingValue,ELLIPSIS_WIDTH}=this.__closure;return{opacity:interpolate(typingValue.get(),[0,1],[0,1]),width:interpolate(typingValue.get(),[0,1],[0,ELLIPSIS_WIDTH])};}';
    var6.code = var7;
    var _closure1_slot12 = var6;
    var6 = {};
    var7 = 'function HappeningNowAvatarStackTsx2(finished){const{runOnJS,setRenderComponents,isTyping}=this.__closure;if(!finished)return;runOnJS(setRenderComponents)(isTyping);}';
    var6.code = var7;
    var _closure1_slot13 = var6;
    var6 = {};
    var7 = 'function HappeningNowAvatarStackTsx3(){const{isStage,extraUsers,avatars,AVATAR_SIZE_MAP,avatarSize,avatarOverlap,withSpring,SPRING_CONFIG}=this.__closure;const hasExtraBubble=!isStage&&extraUsers>0;const numBubbles=avatars.length+(hasExtraBubble?1:0);const width=numBubbles>0?numBubbles*AVATAR_SIZE_MAP[avatarSize]-(numBubbles-1)*avatarOverlap:0;return{width:withSpring(width,SPRING_CONFIG),marginRight:numBubbles===0?0:4};}';
    var6.code = var7;
    var _closure1_slot14 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowAvatarStack.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun101668: for (var _fun101668_ip = 0;;) switch (_fun101668_ip) {
            case 0:
                var5 = arg0;
                var2 = var5.users;
                var0 = var5.guildId;
                var _closure2_slot0 = var0;
                var13 = var5.isTyping;
                var3 = undefined;
                if (!(var13 === var3)) {
                    _fun101668_ip = 34;
                    continue _fun101668
                }
            case 32:
                var13 = false;
            case 34:
                var _closure2_slot1 = var13;
                var9 = var5.userLimit;
                if (!(var9 === var3)) {
                    _fun101668_ip = 51;
                    continue _fun101668
                }
            case 48:
                var9 = 3;
            case 51:
                var12 = var5.userCount;
                var0 = var5.isStage;
                var _closure2_slot2 = var0;
                var21 = var5.avatarSize;
                if (!(var21 === var3)) {
                    _fun101668_ip = 112;
                    continue _fun101668
                }
            case 77:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.AvatarSizes;
                var21 = var4.XSMALL_20;
            case 112:
                var _closure2_slot3 = var21;
                var4 = var5.avatarBorderWidth;
                if (!(var4 === var3)) {
                    _fun101668_ip = 131;
                    continue _fun101668
                }
            case 128:
                var4 = 2;
            case 131:
                var _closure2_slot4 = var4;
                var4 = var5.avatarOverlap;
                if (!(var4 === var3)) {
                    _fun101668_ip = 148;
                    continue _fun101668
                }
            case 145:
                var4 = 4;
            case 148:
                var _closure2_slot5 = var4;
                var8 = var5.style;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var5 = _closure1_slot11;
                var10 = var5.bind(var3)(var21, var4);
                _closure2_slot6 = var10;
                var11 = _closure1_slot4;
                var7 = var11.useState;
                var5 = function() { // Environment: var1
                    var0 = _closure2_slot1;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                var11 = var7.bind(var11)(var5);
                var7 = _closure1_slot3;
                var5 = 2;
                var5 = var7.bind(var3)(var11, var5);
                var20 = 0;
                var7 = var5[var20];
                var16 = 1;
                var5 = var5[var16];
                _closure2_slot7 = var5;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 10;
                var11 = var11[var5];
                var14 = var14.bind(var3)(var11);
                var11 = var14.useSharedValue;
                var15 = var4;
                var4 = 0;
                if (!var13) {
                    _fun101668_ip = 286;
                    continue _fun101668
                }
            case 283:
                var4 = var16;
            case 286:
                var4 = var11.bind(var14)(var4);
                _closure2_slot8 = var4;
                var22 = _closure1_slot0;
                var19 = _closure1_slot2;
                var11 = 11;
                var11 = var19[var11];
                var17 = var22.bind(var3)(var11);
                var16 = var17.useStateFromStores;
                var11 = _closure1_slot6;
                var14 = new Array(1);
                var14[0] = var11;
                var11 = function() { // Environment: var1
                    var0 = _closure1_slot6;
                    var0 = var0.locale;
                    return var0;
                };
                var11 = var16.bind(var17)(var14, var11);
                var14 = var19[var5];
                var17 = var22.bind(var3)(var14);
                var16 = var17.useAnimatedStyle;
                var14 = function() {
                    var0 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 10;
                    var1 = var5[var2];
                    var3 = undefined;
                    var10 = var4.bind(var3)(var1);
                    var9 = var10.interpolate;
                    var7 = _closure2_slot8;
                    var6 = var7.get;
                    var8 = var6.bind(var7)();
                    var7 = [0, 1];
                    var6 = [0, 1];
                    var6 = var9.bind(var10)(var8, var7, var6);
                    var0.opacity = var6;
                    var2 = var5[var2];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.interpolate;
                    var2 = _closure2_slot8;
                    var1 = var2.get;
                    var3 = var1.bind(var2)();
                    var2 = [0, 1];
                    var1 = [0, 28];
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var0.width = var1;
                    return var0;
                };
                var18 = {};
                var19 = var19[var5];
                var19 = var22.bind(var3)(var19);
                var19 = var19.interpolate;
                var18.interpolate = var19;
                var18.typingValue = var4;
                var19 = 28;
                var18.ELLIPSIS_WIDTH = var19;
                var14.__closure = var18;
                var18 = 14140918847743.0;
                var14.__workletHash = var18;
                var18 = _closure1_slot12;
                var14.__initData = var18;
                var18 = var16.bind(var17)(var14);
                var17 = _closure1_slot4;
                var16 = var17.useEffect;
                var14 = new Array(2);
                var14[0] = var13;
                var14[1] = var4;
                var4 = function() { // Environment: var1
                    _fun101672: for (var _fun101672_ip = 0;;) switch (_fun101672_ip) {
                        case 0:
                            var3 = _closure2_slot8;
                            var2 = var3.set;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 12;
                            var4 = var4[var0];
                            var0 = undefined;
                            var8 = var5.bind(var0)(var4);
                            var7 = var8.withSpring;
                            var4 = _closure2_slot1;
                            var6 = 0;
                            if (!var4) {
                                _fun101672_ip = 54;
                                continue _fun101672
                            }
                        case 51:
                            var6 = 1;
                        case 54:
                            var16 = _closure1_slot7;
                            var4 = function arg0() {
                                _fun101673: for (var _fun101673_ip = 0;;) switch (_fun101673_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun101673_ip = 57;
                                            continue _fun101673
                                        }
                                    case 6:
                                        var1 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 10;
                                        var0 = var2[var0];
                                        var2 = undefined;
                                        var4 = var1.bind(var2)(var0);
                                        var3 = var4.runOnJS;
                                        var1 = _closure2_slot7;
                                        var1 = var3.bind(var4)(var1);
                                        var0 = _closure2_slot1;
                                        var0 = var1.bind(var2)(var0);
                                    case 57:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var9 = {};
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var11 = 10;
                            var11 = var13[var11];
                            var11 = var12.bind(var0)(var11);
                            var11 = var11.runOnJS;
                            var9.runOnJS = var11;
                            var11 = _closure2_slot7;
                            var9.setRenderComponents = var11;
                            var10 = _closure2_slot1;
                            var9.isTyping = var10;
                            var4.__closure = var9;
                            var9 = 2498652829757.0;
                            var4.__workletHash = var9;
                            var1 = _closure1_slot13;
                            var4.__initData = var1;
                            var15 = 'respect-motion-settings';
                            var18 = var8;
                            var17 = var6;
                            var14 = var4;
                            var1 = var18[var7](var17, var16, var15, var14, var13);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var4 = var16.bind(var17)(var4, var14);
                var4 = var2.slice;
                var9 = var4.bind(var2)(var20, var9);
                _closure2_slot9 = var9;
                var19 = null;
                if (!(var19 == var12)) {
                    _fun101668_ip = 503;
                    continue _fun101668
                }
            case 498:
                var12 = var2.length;
            case 503:
                var2 = var9.length;
                var28 = var12 - var2;
                _closure2_slot10 = var28;
                var4 = var9.map;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun101674: for (var _fun101674_ip = 0;;) switch (_fun101674_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = arg1;
                            var1 = _closure2_slot9;
                            var2 = var1.length;
                            var1 = 1;
                            var5 = var2 - var1;
                            var4 = _closure1_slot8;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var1.user = var0;
                            var7 = _closure2_slot0;
                            var1.guildId = var7;
                            var7 = _closure2_slot3;
                            var1.size = var7;
                            var9 = var4.bind(var3)(var2, var1);
                            var2 = _closure1_slot5;
                            var1 = {};
                            var7 = 0;
                            var8 = undefined;
                            if (!(var7 !== var6)) {
                                _fun101674_ip = 106;
                                continue _fun101674
                            }
                        case 96:
                            var10 = _closure2_slot6;
                            var8 = var10.shiftedAvatar;
                        case 106:
                            var1.style = var8;
                            if (!(var6 === var5)) {
                                _fun101674_ip = 141;
                                continue _fun101674
                            }
                        case 114:
                            var6 = _closure2_slot2;
                            var5 = var9;
                            if (var6) {
                                _fun101674_ip = 309;
                                continue _fun101674
                            }
                        case 127:
                            var6 = _closure2_slot10;
                            var5 = var9;
                            if (!(var6 > var7)) {
                                _fun101674_ip = 309;
                                continue _fun101674
                            }
                        case 141:
                            var8 = _closure1_slot8;
                            var7 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var10 = 13;
                            var6 = var15[var10];
                            var7 = var7.bind(var3)(var6);
                            var6 = {};
                            var11 = {};
                            var14 = _closure1_slot0;
                            var10 = var15[var10];
                            var10 = var14.bind(var3)(var10);
                            var10 = var10.CutoutShape;
                            var10 = var10.Circle;
                            var11.shape = var10;
                            var10 = 8;
                            var12 = var15[var10];
                            var12 = var14.bind(var3)(var12);
                            var16 = var12.AVATAR_SIZE_MAP;
                            var12 = _closure2_slot3;
                            var17 = var16[var12];
                            var16 = _closure2_slot5;
                            var16 = var17 - var16;
                            var13 = _closure2_slot4;
                            var16 = var16 - var13;
                            var11.x = var16;
                            var16 = -var13;
                            var11.y = var16;
                            var10 = var15[var10];
                            var10 = var14.bind(var3)(var10);
                            var10 = var10.AVATAR_SIZE_MAP;
                            var12 = var10[var12];
                            var10 = 2;
                            var10 = var10 * var13;
                            var10 = var12 + var10;
                            var11.size = var10;
                            var10 = new Array(1);
                            var10[0] = var11;
                            var6.cutouts = var10;
                            var6.children = var9;
                            var5 = var8.bind(var3)(var7, var6);
                        case 309:
                            var1.children = var5;
                            var0 = var0.id;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var9 = var4.bind(var9)(var2);
                _closure2_slot11 = var9;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = var17[var5];
                var4 = var16.bind(var3)(var2);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    _fun101675: for (var _fun101675_ip = 0;;) switch (_fun101675_ip) {
                        case 0:
                            var1 = _closure2_slot11;
                            var3 = var1.length;
                            var4 = _closure2_slot2;
                            var2 = 0;
                            var1 = 0;
                            if (var4) {
                                _fun101675_ip = 39;
                                continue _fun101675
                            }
                        case 23:
                            var4 = _closure2_slot10;
                            var4 = var4 > var2;
                            var1 = 0;
                            if (!var4) {
                                _fun101675_ip = 39;
                                continue _fun101675
                            }
                        case 36:
                            var1 = 1;
                        case 39:
                            var3 = var3 + var1;
                            var6 = 0;
                            if (!(var3 > var2)) {
                                _fun101675_ip = 111;
                                continue _fun101675
                            }
                        case 49:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 8;
                            var4 = var4[var1];
                            var1 = undefined;
                            var1 = var5.bind(var1)(var4);
                            var4 = var1.AVATAR_SIZE_MAP;
                            var1 = _closure2_slot3;
                            var1 = var4[var1];
                            var1 = var3 * var1;
                            var4 = _closure2_slot5;
                            var0 = 1;
                            var0 = var3 - var0;
                            var0 = var0 * var4;
                            var6 = var1 - var0;
                        case 111:
                            var0 = {};
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 12;
                            var5 = var5[var4];
                            var4 = undefined;
                            var5 = var7.bind(var4)(var5);
                            var4 = var5.withSpring;
                            var1 = _closure1_slot10;
                            var1 = var4.bind(var5)(var6, var1);
                            var0.width = var1;
                            var1 = 4;
                            if (!(var2 === var3)) {
                                _fun101675_ip = 166;
                                continue _fun101675
                            }
                        case 164:
                            var1 = 0;
                        case 166:
                            var0.marginRight = var1;
                            return var0;
                    }
                };
                var14 = {};
                var14.isStage = var0;
                var14.extraUsers = var28;
                var14.avatars = var9;
                var22 = 8;
                var22 = var17[var22];
                var22 = var16.bind(var3)(var22);
                var22 = var22.AVATAR_SIZE_MAP;
                var14.AVATAR_SIZE_MAP = var22;
                var14.avatarSize = var21;
                var14.avatarOverlap = var15;
                var15 = 12;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.withSpring;
                var14.withSpring = var15;
                var15 = _closure1_slot10;
                var14.SPRING_CONFIG = var15;
                var1.__closure = var14;
                var14 = 5027466437777.0;
                var1.__workletHash = var14;
                var14 = _closure1_slot14;
                var1.__initData = var14;
                var14 = var2.bind(var4)(var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot5;
                var4 = {};
                if (var0) {
                    _fun101668_ip = 1087;
                    continue _fun101668
                }
            case 700:
                var15 = var10.avatarStack;
                var0 = new Array(2);
                var0[0] = var15;
                var0[1] = var8;
                var4.style = var0;
                var16 = _closure1_slot9;
                var15 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var0 = var15.bind(var3)(var0);
                var15 = var0.View;
                var0 = {};
                var21 = var10.avatarBubbles;
                var17 = new Array(2);
                var17[0] = var21;
                var17[1] = var14;
                var0.style = var17;
                var22 = _closure1_slot8;
                var21 = _closure1_slot5;
                var17 = {};
                var23 = var10.avatars;
                var17.style = var23;
                var17.children = var9;
                var21 = var22.bind(var3)(var21, var17);
                var17 = new Array(2);
                var17[0] = var21;
                var19 = null;
                if (!(var28 > var20)) {
                    _fun101668_ip = 940;
                    continue _fun101668
                }
            case 819:
                var22 = _closure1_slot8;
                var21 = _closure1_slot5;
                var20 = {};
                var23 = var10.userCounter;
                var20.style = var23;
                var25 = _closure1_slot9;
                var27 = _closure1_slot0;
                var29 = _closure1_slot2;
                var23 = 14;
                var23 = var29[var23];
                var23 = var27.bind(var3)(var23);
                var24 = var23.Text;
                var23 = {
                    'color': 'text-default',
                    'variant': 'text-xxs/semibold',
                    'allowFontScaling': false
                };
                var26 = 15;
                var26 = var29[var26];
                var27 = var27.bind(var3)(var26);
                var26 = var27.humanizeValue;
                var27 = var26.bind(var27)(var28, var11);
                var26 = ['+'];
                var26[1] = var27;
                var23.children = var26;
                var23 = var25.bind(var3)(var24, var23);
                var20.children = var23;
                var19 = var22.bind(var3)(var21, var20);
            case 940:
                var17[1] = var19;
                var0.children = var17;
                var15 = var16.bind(var3)(var15, var0);
                var0 = new Array(2);
                var0[0] = var15;
                if (var7) {
                    _fun101668_ip = 968;
                    continue _fun101668
                }
            case 965:
                var7 = var13;
            case 968:
                if (!var7) {
                    _fun101668_ip = 1071;
                    continue _fun101668
                }
            case 971:
                var16 = _closure1_slot8;
                var15 = _closure1_slot1;
                var19 = _closure1_slot2;
                var13 = var19[var5];
                var13 = var15.bind(var3)(var13);
                var15 = var13.View;
                var13 = {};
                var20 = var10.ellipsisWrapper;
                var17 = new Array(2);
                var17[0] = var20;
                var17[1] = var18;
                var13.style = var17;
                var18 = _closure1_slot0;
                var17 = 16;
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.TypingIndicator;
                var17 = {};
                var19 = var10.ellipsisBorder;
                var17.style = var19;
                var17 = var16.bind(var3)(var18, var17);
                var13.children = var17;
                var7 = var16.bind(var3)(var15, var13);
            case 1071:
                var0[1] = var7;
                var4.children = var0;
                var0 = var4;
                _fun101668_ip = 1257;
                continue _fun101668;
            case 1087:
                var13 = var10.stageAvatarStack;
                var7 = new Array(2);
                var7[0] = var13;
                var7[1] = var8;
                var4.style = var7;
                var8 = _closure1_slot8;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = var13[var5];
                var5 = var7.bind(var3)(var5);
                var7 = var5.View;
                var5 = {};
                var15 = var10.avatars;
                var10 = new Array(2);
                var10[0] = var15;
                var10[1] = var14;
                var5.style = var10;
                var5.children = var9;
                var7 = var8.bind(var3)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var10 = _closure1_slot0;
                var6 = 14;
                var6 = var13[var6];
                var6 = var10.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'color': 'text-default',
                    'variant': 'text-xs/semibold'
                };
                var9 = 15;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = var10.humanizeValue;
                var9 = var9.bind(var10)(var12, var11);
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var5[1] = var6;
                var4.children = var5;
                var0 = var4;
            case 1257:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.HappeningNowAvatarStack = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1676, 5417, 33, 1297, 671, 5416, 5414, 3679, 632, 4040, 5419, 3900, 1604, 13214, 2]);