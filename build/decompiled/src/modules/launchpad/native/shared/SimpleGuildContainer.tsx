// modules/launchpad/native/shared/SimpleGuildContainer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var7 = var3.bind(var0)(var6);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Pressable;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.Fragment;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = {
        'mass': 0.2,
        'damping': 40,
        'stiffness': 300,
        'overshootClamping': true,
        'restSpeedThreshold': 1
    };
    var _closure1_slot9 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'right': 4294967292,
        'bottom': 0
    };
    var3.badgeWrapper = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun110029: for (var _fun110029_ip = 0;;) switch (_fun110029_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.badge;
                var8 = var0.unread;
                var7 = var0.backgroundColor;
                var0 = _closure1_slot10;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var0 = 0;
                if (!(var9 <= var0)) {
                    _fun110029_ip = 44;
                    continue _fun110029
                }
            case 39:
                var0 = null;
                if (!var8) {
                    _fun110029_ip = 115;
                    continue _fun110029
                }
            case 44:
                var3 = _closure1_slot6;
                var2 = _closure1_slot5;
                var1 = {};
                var6 = var6.badgeWrapper;
                var1.style = var6;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 4;
                var5 = var10[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.value = var9;
                var5.unread = var8;
                var5.backgroundColor = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 115:
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun110030: for (var _fun110030_ip = 0;;) switch (_fun110030_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guildId;
                var5 = var0.activityIndicatorState;
                var7 = var0.backgroundColor;
                var0 = null;
                var2 = var0 == var5;
                var4 = undefined;
                var1 = undefined;
                if (var2) {
                    _fun110030_ip = 37;
                    continue _fun110030
                }
            case 32:
                var1 = var5.source;
            case 37:
                if (!(var0 == var1)) {
                    _fun110030_ip = 101;
                    continue _fun110030
                }
            case 41:
                var1 = var0 != var6;
                var0 = null;
                if (!var1) {
                    _fun110030_ip = 99;
                    continue _fun110030
                }
            case 50:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 5;
                var1 = var8[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.guildId = var6;
                var6 = {};
                var6.backgroundColor = var7;
                var1.style = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 99:
                _fun110030_ip = 181;
                continue _fun110030;
            case 101:
                var3 = _closure1_slot6;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 5;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.GuildsBarActivityIndicatorBase;
                var1 = {};
                var6 = {};
                var6.backgroundColor = var7;
                var1.style = var6;
                var6 = var5.source;
                var1.source = var6;
                var6 = var5.IconComponent;
                var1.IconComponent = var6;
                var5 = var5.isCurrentUserConnected;
                var1.isCurrentUserConnected = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 181:
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'function SimpleGuildContainerTsx1(){const{targetRadius}=this.__closure;return targetRadius;}';
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = 'function SimpleGuildContainerTsx2(){const{selected}=this.__closure;return selected?1:0;}';
    var3.code = var6;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = "function SimpleGuildContainerTsx3(){const{withSpring,toRadius,springConfig,GUILD_SIZE,iconBackground}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),width:GUILD_SIZE,height:GUILD_SIZE,overflow:'hidden',backgroundColor:iconBackground.color};}";
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = "function SimpleGuildContainerTsx4(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,borderColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get()+2,springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,2]),springConfig),borderColor:borderColor,position:'absolute',top:-2,left:-2,width:GUILD_SIZE+4,height:GUILD_SIZE+4};}";
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = "function SimpleGuildContainerTsx5(){const{withSpring,toRadius,springConfig,interpolate,toStrokeWidth,backgroundColor,GUILD_SIZE}=this.__closure;return{borderRadius:withSpring(toRadius.get(),springConfig),borderWidth:withSpring(interpolate(toStrokeWidth.get(),[0,1],[0,3]),springConfig),borderColor:backgroundColor,position:'absolute',top:0,left:0,width:GUILD_SIZE,height:GUILD_SIZE};}";
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launchpad/native/shared/SimpleGuildContainer.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun110031: for (var _fun110031_ip = 0;;) switch (_fun110031_ip) {
            case 0:
                var1 = arg0;
                var20 = var1.guildIconRef;
                var13 = var1.guildId;
                var21 = var1.style;
                var14 = var1.children;
                var22 = var1.selected;
                var _closure2_slot0 = var22;
                var24 = var1.size;
                var3 = undefined;
                if (!(var24 === var3)) {
                    _fun110031_ip = 50;
                    continue _fun110031
                }
            case 47:
                var24 = 48;
            case 50:
                var _closure2_slot1 = var24;
                var16 = var1.borderRadius;
                if (!(var16 === var3)) {
                    _fun110031_ip = 106;
                    continue _fun110031
                }
            case 63:
                var2 = 24;
                if (!var22) {
                    _fun110031_ip = 103;
                    continue _fun110031
                }
            case 69:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 6;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.radii;
                var2 = var4.lg;
            case 103:
                var16 = var2;
            case 106:
                var _closure2_slot2 = var16;
                var9 = var1.badge;
                var _closure2_slot3 = var9;
                var8 = var1.unread;
                var _closure2_slot4 = var8;
                var10 = var1.backgroundColor;
                var _closure2_slot5 = var10;
                var19 = var1.folder;
                if (!(var19 === var3)) {
                    _fun110031_ip = 151;
                    continue _fun110031
                }
            case 149:
                var19 = false;
            case 151:
                var17 = var1.usingCutout;
                if (!(var17 === var3)) {
                    _fun110031_ip = 163;
                    continue _fun110031
                }
            case 161:
                var17 = false;
            case 163:
                var _closure2_slot6 = var17;
                var12 = var1.activityIndicatorState;
                var _closure2_slot7 = var12;
                var11 = var1.accessibilityLabel;
                var4 = var1.onAccessibilityAction;
                var15 = var1.onLayout;
                var _closure2_slot8 = var3;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var23 = var1.iconStroke;
                _closure2_slot8 = var23;
                var18 = var1.iconBackground;
                var7 = _closure1_slot3;
                var6 = var7.useMemo;
                var2 = new Array(8);
                var2[0] = var22;
                var2[1] = var9;
                var2[2] = var8;
                var2[3] = var17;
                var2[4] = var24;
                var2[5] = var10;
                var2[6] = var16;
                var2[7] = var12;
                var1 = function() { // Environment: var0
                    _fun110032: for (var _fun110032_ip = 0;;) switch (_fun110032_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var9 = null;
                            var0 = null;
                            if (!var1) {
                                _fun110032_ip = 449;
                                continue _fun110032
                            }
                        case 17:
                            var1 = _closure2_slot6;
                            if (var1) {
                                _fun110032_ip = 230;
                                continue _fun110032
                            }
                        case 30:
                            var4 = _closure1_slot8;
                            var3 = _closure1_slot7;
                            var2 = {};
                            var11 = _closure1_slot6;
                            var10 = _closure1_slot5;
                            var5 = {};
                            var6 = {
                                'borderRadius': null,
                                'borderWidth': 2,
                                'borderColor': null,
                                'position': 'absolute',
                                'top': 4294967294,
                                'left': 4294967294
                            };
                            var14 = _closure2_slot2;
                            var1 = 2;
                            var1 = var14 + var1;
                            var6.borderRadius = var1;
                            var13 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var1 = 6;
                            var12 = var12[var1];
                            var1 = undefined;
                            var12 = var13.bind(var1)(var12);
                            var12 = var12.unsafe_rawColors;
                            var12 = var12.BRAND_500;
                            var6.borderColor = var12;
                            var13 = _closure2_slot1;
                            var12 = 4;
                            var15 = var13 + var12;
                            var6.width = var15;
                            var12 = var13 + var12;
                            var6.height = var12;
                            var5.style = var6;
                            var6 = var11.bind(var1)(var10, var5);
                            var5 = new Array(2);
                            var5[0] = var6;
                            var6 = {};
                            var12 = {
                                'borderRadius': null,
                                'borderWidth': 3,
                                'borderColor': null,
                                'position': 'absolute',
                                'top': 0,
                                'left': 0
                            };
                            var12.borderRadius = var14;
                            var14 = _closure2_slot5;
                            var12.borderColor = var14;
                            var12.width = var13;
                            var12.height = var13;
                            var6.style = var12;
                            var6 = var11.bind(var1)(var10, var6);
                            var5[1] = var6;
                            var2.children = var5;
                            var1 = var4.bind(var1)(var3, var2);
                            _fun110032_ip = 446;
                            continue _fun110032;
                        case 230:
                            var5 = _closure1_slot6;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 8;
                            var2 = var4[var2];
                            var4 = undefined;
                            var3 = var3.bind(var4)(var2);
                            var2 = {
                                'style': null,
                                'cutoutTopRightSize': null,
                                'cutoutTopRightInsetX': 8,
                                'cutoutTopRightInsetY': 8,
                                'cutoutBottomRightSize': null,
                                'cutoutBottomRightInsetX': 6,
                                'cutoutBottomRightInsetY': 7
                            };
                            var6 = {
                                'position': 'absolute',
                                'top': 4294967294,
                                'left': 4294967294
                            };
                            var2.style = var6;
                            var6 = _closure2_slot7;
                            var10 = var9 == var6;
                            var6 = undefined;
                            if (var10) {
                                _fun110032_ip = 312;
                                continue _fun110032
                            }
                        case 303:
                            var10 = _closure2_slot7;
                            var6 = var10.source;
                        case 312:
                            var10 = var9 != var6;
                            var9 = 0;
                            var6 = 0;
                            if (!var10) {
                                _fun110032_ip = 326;
                                continue _fun110032
                            }
                        case 323:
                            var6 = 13;
                        case 326:
                            var2.cutoutTopRightSize = var6;
                            var6 = _closure2_slot3;
                            var10 = var6 > var9;
                            var6 = 13;
                            if (var10) {
                                _fun110032_ip = 361;
                                continue _fun110032
                            }
                        case 346:
                            var10 = _closure2_slot4;
                            var9 = 0;
                            if (!var10) {
                                _fun110032_ip = 358;
                                continue _fun110032
                            }
                        case 355:
                            var9 = 11;
                        case 358:
                            var6 = var9;
                        case 361:
                            var2.cutoutBottomRightSize = var6;
                            var10 = 6;
                            var6 = _closure2_slot1;
                            var9 = 4;
                            var9 = var6 + var9;
                            var2.imageSize = var9;
                            var9 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var8 = var8[var10];
                            var8 = var9.bind(var4)(var8);
                            var8 = var8.unsafe_rawColors;
                            var8 = var8.BRAND_500;
                            var2.imageBackgroundColor = var8;
                            var8 = _closure2_slot2;
                            var7 = 2;
                            var7 = var8 + var7;
                            var2.imageBorderRadius = var7;
                            var2.clipInnerAmount = var6;
                            var1 = var5.bind(var4)(var3, var2);
                        case 446:
                            var0 = var1;
                        case 449:
                            return var0;
                    }
                };
                var6 = var6.bind(var7)(var1, var2);
                var2 = var7.useMemo;
                var1 = new Array(4);
                var1[0] = var16;
                var1[1] = var17;
                var1[2] = var24;
                var1[3] = var23;
                var0 = function() { // Environment: var0
                    _fun110033: for (var _fun110033_ip = 0;;) switch (_fun110033_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var0 = null;
                            if (var1) {
                                _fun110033_ip = 85;
                                continue _fun110033
                            }
                        case 12:
                            var4 = _closure1_slot6;
                            var3 = _closure1_slot5;
                            var2 = {};
                            var1 = {
                                'position': 'absolute',
                                'borderWidth': 1
                            };
                            var6 = _closure2_slot8;
                            var6 = var6.color;
                            var1.borderColor = var6;
                            var6 = _closure2_slot2;
                            var1.borderRadius = var6;
                            var5 = _closure2_slot1;
                            var1.width = var5;
                            var1.height = var5;
                            var2.style = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 85:
                            return var0;
                    }
                };
                var7 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var0.style = var21;
                var21 = true;
                var0.accessible = var21;
                var21 = {};
                var21.selected = var22;
                var0.accessibilityState = var21;
                var21 = 'button';
                var0.accessibilityRole = var21;
                var0.accessibilityLabel = var11;
                var21 = {};
                var11 = 'activate';
                var21.name = var11;
                var11 = new Array(1);
                var11[0] = var21;
                var0.accessibilityActions = var11;
                var0.onAccessibilityAction = var4;
                var11 = _closure1_slot6;
                var4 = {};
                var4.ref = var20;
                var4.onLayout = var15;
                var15 = {};
                var15.borderRadius = var16;
                var16 = 'hidden';
                var15.overflow = var16;
                var16 = 'transparent';
                if (var17) {
                    _fun110031_ip = 460;
                    continue _fun110031
                }
            case 446:
                var17 = var10;
                if (var19) {
                    _fun110031_ip = 457;
                    continue _fun110031
                }
            case 452:
                var17 = var18.color;
            case 457:
                var16 = var17;
            case 460:
                var15.backgroundColor = var16;
                var4.style = var15;
                var4.children = var14;
                var11 = var11.bind(var3)(var1, var4);
                var4 = new Array(5);
                var4[0] = var11;
                var4[1] = var7;
                var4[2] = var6;
                var7 = _closure1_slot6;
                var11 = _closure1_slot12;
                var6 = {};
                var6.backgroundColor = var10;
                var6.guildId = var13;
                var6.activityIndicatorState = var12;
                var6 = var7.bind(var3)(var11, var6);
                var4[3] = var6;
                var6 = _closure1_slot11;
                var5 = {};
                var5.backgroundColor = var10;
                var5.badge = var9;
                var5.unread = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.SimpleGuildContainer = var3;
    var1 = function arg0() {
        _fun110034: for (var _fun110034_ip = 0;;) switch (_fun110034_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.guildIconRef;
                var21 = var1.guildId;
                var12 = var1.style;
                var25 = var1.children;
                var9 = var1.selected;
                var _closure2_slot0 = var9;
                var2 = var1.size;
                var2 = var1.borderRadius;
                var18 = var1.badge;
                var17 = var1.unread;
                var19 = var1.backgroundColor;
                var _closure2_slot1 = var19;
                var3 = var1.folder;
                var3 = var1.usingCutout;
                var20 = var1.activityIndicatorState;
                var8 = var1.accessibilityLabel;
                var7 = var1.onAccessibilityAction;
                var6 = var1.onLayout;
                var11 = var1.onPress;
                var10 = var1.onLongPress;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var5 = _closure1_slot1;
                var14 = _closure1_slot2;
                var3 = 7;
                var3 = var14[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var22 = var3.iconBackground;
                var _closure2_slot2 = var22;
                if (var9) {
                    _fun110034_ip = 188;
                    continue _fun110034
                }
            case 171:
                var3 = null;
                var3 = var3 != var2;
                var16 = 24;
                if (!var3) {
                    _fun110034_ip = 186;
                    continue _fun110034
                }
            case 183:
                var16 = var2;
            case 186:
                _fun110034_ip = 219;
                continue _fun110034;
            case 188:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.radii;
                var16 = var2.lg;
            case 219:
                _closure2_slot3 = var16;
                var28 = _closure1_slot0;
                var23 = _closure1_slot2;
                var14 = 9;
                var2 = var23[var14];
                var5 = var28.bind(var4)(var2);
                var3 = var5.useDerivedValue;
                var2 = function() {
                    var0 = _closure2_slot3;
                    return var0;
                };
                var15 = {};
                var15.targetRadius = var16;
                var2.__closure = var15;
                var15 = 5259600477627.0;
                var2.__workletHash = var15;
                var15 = _closure1_slot13;
                var2.__initData = var15;
                var29 = var3.bind(var5)(var2);
                _closure2_slot4 = var29;
                var2 = var23[var14];
                var5 = var28.bind(var4)(var2);
                var3 = var5.useDerivedValue;
                var2 = function() {
                    _fun110036: for (var _fun110036_ip = 0;;) switch (_fun110036_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = 0;
                            if (!var1) {
                                _fun110036_ip = 15;
                                continue _fun110036
                            }
                        case 12:
                            var0 = 1;
                        case 15:
                            return var0;
                    }
                };
                var15 = {};
                var15.selected = var9;
                var2.__closure = var15;
                var15 = 12318204664732.0;
                var2.__workletHash = var15;
                var15 = _closure1_slot14;
                var2.__initData = var15;
                var24 = var3.bind(var5)(var2);
                _closure2_slot5 = var24;
                var2 = var23[var14];
                var5 = var28.bind(var4)(var2);
                var3 = var5.useAnimatedStyle;
                var2 = function() {
                    var0 = {
                        'borderRadius': null,
                        'width': 48,
                        'height': 48,
                        'overflow': 'hidden'
                    };
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.withSpring;
                    var6 = _closure2_slot4;
                    var3 = var6.get;
                    var3 = var3.bind(var6)();
                    var2 = _closure1_slot9;
                    var2 = var4.bind(var5)(var3, var2);
                    var0.borderRadius = var2;
                    var1 = _closure2_slot2;
                    var1 = var1.color;
                    var0.backgroundColor = var1;
                    return var0;
                };
                var15 = {};
                var30 = 10;
                var16 = var23[var30];
                var16 = var28.bind(var4)(var16);
                var16 = var16.withSpring;
                var15.withSpring = var16;
                var15.toRadius = var29;
                var26 = _closure1_slot9;
                var15.springConfig = var26;
                var16 = 48;
                var15.GUILD_SIZE = var16;
                var15.iconBackground = var22;
                var2.__closure = var15;
                var15 = 11339684212259.0;
                var2.__workletHash = var15;
                var15 = _closure1_slot15;
                var2.__initData = var15;
                var27 = var3.bind(var5)(var2);
                var15 = _closure1_slot1;
                var2 = 6;
                var2 = var23[var2];
                var2 = var15.bind(var4)(var2);
                var2 = var2.unsafe_rawColors;
                var31 = var2.BRAND_500;
                _closure2_slot6 = var31;
                var2 = var23[var14];
                var5 = var28.bind(var4)(var2);
                var3 = var5.useAnimatedStyle;
                var2 = function() {
                    var0 = {
                        'borderRadius': null,
                        'borderWidth': null,
                        'borderColor': null,
                        'position': 'absolute',
                        'top': 4294967294,
                        'left': 4294967294,
                        'width': 52,
                        'height': 52
                    };
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 10;
                    var1 = var8[var2];
                    var6 = undefined;
                    var9 = var7.bind(var6)(var1);
                    var4 = var9.withSpring;
                    var10 = _closure2_slot4;
                    var3 = var10.get;
                    var10 = var3.bind(var10)();
                    var3 = 2;
                    var3 = var10 + var3;
                    var5 = _closure1_slot9;
                    var3 = var4.bind(var9)(var3, var5);
                    var0.borderRadius = var3;
                    var2 = var8[var2];
                    var4 = var7.bind(var6)(var2);
                    var3 = var4.withSpring;
                    var2 = 9;
                    var2 = var8[var2];
                    var9 = var7.bind(var6)(var2);
                    var8 = var9.interpolate;
                    var6 = _closure2_slot5;
                    var2 = var6.get;
                    var7 = var2.bind(var6)();
                    var6 = [0, 1];
                    var2 = [0, 2];
                    var2 = var8.bind(var9)(var7, var6, var2);
                    var2 = var3.bind(var4)(var2, var5);
                    var0.borderWidth = var2;
                    var1 = _closure2_slot6;
                    var0.borderColor = var1;
                    return var0;
                };
                var22 = {};
                var32 = var23[var30];
                var32 = var28.bind(var4)(var32);
                var32 = var32.withSpring;
                var22.withSpring = var32;
                var22.toRadius = var29;
                var22.springConfig = var26;
                var32 = var23[var14];
                var32 = var28.bind(var4)(var32);
                var32 = var32.interpolate;
                var22.interpolate = var32;
                var22.toStrokeWidth = var24;
                var22.borderColor = var31;
                var22.GUILD_SIZE = var16;
                var2.__closure = var22;
                var22 = 1481885125958.0;
                var2.__workletHash = var22;
                var22 = _closure1_slot16;
                var2.__initData = var22;
                var22 = var3.bind(var5)(var2);
                var2 = var23[var14];
                var3 = var28.bind(var4)(var2);
                var2 = var3.useAnimatedStyle;
                var0 = function() {
                    var0 = {
                        'borderRadius': null,
                        'borderWidth': null,
                        'borderColor': null,
                        'position': 'absolute',
                        'top': 0,
                        'left': 0,
                        'width': 48,
                        'height': 48
                    };
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 10;
                    var1 = var8[var2];
                    var6 = undefined;
                    var9 = var7.bind(var6)(var1);
                    var4 = var9.withSpring;
                    var10 = _closure2_slot4;
                    var3 = var10.get;
                    var3 = var3.bind(var10)();
                    var5 = _closure1_slot9;
                    var3 = var4.bind(var9)(var3, var5);
                    var0.borderRadius = var3;
                    var2 = var8[var2];
                    var4 = var7.bind(var6)(var2);
                    var3 = var4.withSpring;
                    var2 = 9;
                    var2 = var8[var2];
                    var9 = var7.bind(var6)(var2);
                    var8 = var9.interpolate;
                    var6 = _closure2_slot5;
                    var2 = var6.get;
                    var7 = var2.bind(var6)();
                    var6 = [0, 1];
                    var2 = [0, 3];
                    var2 = var8.bind(var9)(var7, var6, var2);
                    var2 = var3.bind(var4)(var2, var5);
                    var0.borderWidth = var2;
                    var1 = _closure2_slot1;
                    var0.borderColor = var1;
                    return var0;
                };
                var5 = {};
                var30 = var23[var30];
                var30 = var28.bind(var4)(var30);
                var30 = var30.withSpring;
                var5.withSpring = var30;
                var5.toRadius = var29;
                var5.springConfig = var26;
                var26 = var23[var14];
                var26 = var28.bind(var4)(var26);
                var26 = var26.interpolate;
                var5.interpolate = var26;
                var5.toStrokeWidth = var24;
                var5.backgroundColor = var19;
                var5.GUILD_SIZE = var16;
                var0.__closure = var5;
                var5 = 11592745547551.0;
                var0.__workletHash = var5;
                var5 = _closure1_slot17;
                var0.__initData = var5;
                var26 = var2.bind(var3)(var0);
                var3 = _closure1_slot8;
                var2 = _closure1_slot7;
                var0 = {};
                var16 = _closure1_slot6;
                var5 = var23[var14];
                var5 = var15.bind(var4)(var5);
                var24 = var5.View;
                var5 = {};
                var5.style = var27;
                var5.children = var25;
                var24 = var16.bind(var4)(var24, var5);
                var5 = new Array(5);
                var5[0] = var24;
                var24 = var23[var14];
                var24 = var15.bind(var4)(var24);
                var25 = var24.View;
                var24 = {};
                var24.style = var26;
                var24 = var16.bind(var4)(var25, var24);
                var5[1] = var24;
                var14 = var23[var14];
                var14 = var15.bind(var4)(var14);
                var15 = var14.View;
                var14 = {};
                var14.style = var22;
                var14 = var16.bind(var4)(var15, var14);
                var5[2] = var14;
                var15 = _closure1_slot12;
                var14 = {};
                var14.backgroundColor = var19;
                var14.guildId = var21;
                var14.activityIndicatorState = var20;
                var14 = var16.bind(var4)(var15, var14);
                var5[3] = var14;
                var15 = _closure1_slot11;
                var14 = {};
                var14.backgroundColor = var19;
                var14.badge = var18;
                var14.unread = var17;
                var14 = var16.bind(var4)(var15, var14);
                var5[4] = var14;
                var0.children = var5;
                var5 = var3.bind(var4)(var2, var0);
                var0 = null;
                if (!(var0 == var11)) {
                    _fun110034_ip = 976;
                    continue _fun110034
                }
            case 950:
                var3 = _closure1_slot6;
                var2 = _closure1_slot5;
                var0 = {};
                var0.style = var12;
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun110034_ip = 1053;
                continue _fun110034;
            case 976:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var1.ref = var13;
                var1.style = var12;
                var1.onPress = var11;
                var1.onLongPress = var10;
                var10 = 'button';
                var1.accessibilityRole = var10;
                var10 = true;
                var1.accessible = var10;
                var1.accessibilityLabel = var8;
                var8 = {};
                var8.selected = var9;
                var1.accessibilityState = var8;
                var1.onAccessibilityAction = var7;
                var1.onLayout = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1053:
                return var0;
        }
    };
    var2.SimpleGuildContainerAnimated = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 8855, 13125, 671, 14118, 14120, 3681, 4042, 2]);