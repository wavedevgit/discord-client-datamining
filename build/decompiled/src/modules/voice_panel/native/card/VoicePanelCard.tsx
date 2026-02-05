// modules/voice_panel/native/card/VoicePanelCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun111259: for (var _fun111259_ip = 0;;) switch (_fun111259_ip) {
            case 0:
                var2 = arg0;
                var7 = var2.sharedCoords;
                var _closure2_slot0 = var7;
                var0 = var2.stream;
                var _closure2_slot1 = var0;
                var6 = var2.isFocused;
                var _closure2_slot2 = var6;
                var2 = _closure1_slot30;
                var3 = undefined;
                var15 = var2.bind(var3)();
                var5 = _closure1_slot4;
                var4 = var5.useCallback;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    _fun111260: for (var _fun111260_ip = 0;;) switch (_fun111260_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun111260_ip = 76;
                                continue _fun111260
                            }
                        case 13:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 22;
                            var1 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var1);
                            var1 = var2.stopStream;
                            var3 = 23;
                            var3 = var6[var3];
                            var4 = var5.bind(var4)(var3);
                            var3 = var4.encodeStreamKey;
                            var0 = _closure2_slot1;
                            var0 = var3.bind(var4)(var0);
                            var0 = var1.bind(var2)(var0);
                        case 76:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var4.bind(var5)(var0, var2);
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 16;
                var2 = var0[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    _fun111261: for (var _fun111261_ip = 0;;) switch (_fun111261_ip) {
                        case 0:
                            var0 = {
                                'textAlign': 'center',
                                'paddingHorizontal': 16
                            };
                            var1 = 16;
                            var3 = _closure2_slot2;
                            if (!var3) {
                                _fun111261_ip = 29;
                                continue _fun111261
                            }
                        case 27:
                            var1 = 0;
                        case 29:
                            var0.paddingVertical = var1;
                            var3 = _closure2_slot2;
                            var1 = 'auto';
                            if (var3) {
                                _fun111261_ip = 63;
                                continue _fun111261
                            }
                        case 45:
                            var3 = _closure2_slot0;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var1 = var2.width;
                        case 63:
                            var0.width = var1;
                            return var0;
                    }
                };
                var5 = {};
                var5.isFocused = var6;
                var5.sharedCoords = var7;
                var1.__closure = var5;
                var5 = 4561576173627.0;
                var1.__workletHash = var5;
                var5 = _closure1_slot31;
                var1.__initData = var5;
                var9 = var2.bind(var4)(var1);
                var2 = _closure1_slot24;
                var1 = _closure1_slot1;
                var11 = 24;
                var0 = var0[var11];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = var15.nonUserRoundedCard;
                var0.style = var4;
                var5 = var6;
                if (!var5) {
                    _fun111259_ip = 330;
                    continue _fun111259
                }
            case 201:
                var8 = _closure1_slot24;
                var7 = _closure1_slot23;
                var4 = {};
                var13 = _closure1_slot22;
                var18 = _closure1_slot1;
                var19 = _closure1_slot2;
                var11 = var19[var11];
                var12 = var18.bind(var3)(var11);
                var11 = {};
                var16 = var15.blackBackground;
                var11.style = var16;
                var12 = var13.bind(var3)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var16 = _closure1_slot22;
                var12 = 25;
                var12 = var19[var12];
                var13 = var18.bind(var3)(var12);
                var12 = {};
                var17 = var15.selfStreamHeaderImage;
                var12.style = var17;
                var17 = 26;
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var12.source = var17;
                var17 = 'contain';
                var12.resizeMode = var17;
                var12 = var16.bind(var3)(var13, var12);
                var11[1] = var12;
                var4.children = var11;
                var5 = var8.bind(var3)(var7, var4);
            case 330:
                var4 = new Array(3);
                var4[0] = var5;
                var8 = _closure1_slot22;
                var7 = _closure1_slot25;
                var5 = {};
                var5.style = var9;
                var9 = 'text-sm/semibold';
                if (!var6) {
                    _fun111259_ip = 367;
                    continue _fun111259
                }
            case 361:
                var9 = 'text-lg/semibold';
            case 367:
                var5.variant = var9;
                var9 = 'always-white';
                var5.color = var9;
                var13 = _closure1_slot0;
                var9 = _closure1_slot2;
                var17 = 27;
                var11 = var9[var17];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var9[var17];
                var9 = var13.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.gMOwov;
                var9 = var11.bind(var12)(var9);
                var5.children = var9;
                var5 = var8.bind(var3)(var7, var5);
                var4[1] = var5;
                var5 = null;
                if (!var6) {
                    _fun111259_ip = 693;
                    continue _fun111259
                }
            case 458:
                var8 = _closure1_slot24;
                var7 = _closure1_slot23;
                var6 = {};
                var12 = _closure1_slot22;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 17;
                var9 = var13[var9];
                var9 = var16.bind(var3)(var9);
                var11 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'always-white'
                };
                var15 = var15.selfStreamFocusedSubtitle;
                var9.style = var15;
                var15 = var13[var17];
                var15 = var16.bind(var3)(var15);
                var19 = var15.intl;
                var18 = var19.string;
                var15 = var13[var17];
                var15 = var16.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.dKeLGt;
                var15 = var18.bind(var19)(var15);
                var9.children = var15;
                var11 = var12.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var12 = _closure1_slot22;
                var10 = 28;
                var10 = var13[var10];
                var10 = var16.bind(var3)(var10);
                var11 = var10.Button;
                var10 = {
                    'size': 'lg',
                    'variant': 'primary-overlay'
                };
                var10.onPress = var14;
                var14 = var13[var17];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.CpkXwZ;
                var13 = var14.bind(var15)(var13);
                var10.text = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 693:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot58 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var18 = var1.id;
        var _closure2_slot0 = var18;
        var13 = var1.isSelf;
        var _closure2_slot1 = var13;
        var10 = var1.speaking;
        var _closure2_slot2 = var10;
        var8 = var1.layout;
        var4 = _closure1_slot4;
        var2 = var4.useContext;
        var6 = _closure1_slot1;
        var11 = _closure1_slot2;
        var1 = 29;
        var1 = var11[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var1 = var2.bind(var4)(var1);
        var20 = var1.mode;
        var _closure2_slot3 = var20;
        var19 = var1.focused;
        var _closure2_slot4 = var19;
        var1 = _closure1_slot30;
        var9 = var1.bind(var3)();
        var17 = _closure1_slot0;
        var1 = 16;
        var2 = var11[var1];
        var5 = var17.bind(var3)(var2);
        var4 = var5.useAnimatedStyle;
        var2 = function() {
            _fun111263: for (var _fun111263_ip = 0;;) switch (_fun111263_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var0 = var1.get;
                    var2 = var0.bind(var1)();
                    var0 = _closure1_slot12;
                    var0 = var0.PIP;
                    var6 = var2 !== var0;
                    if (!var6) {
                        _fun111263_ip = 73;
                        continue _fun111263
                    }
                case 36:
                    var2 = _closure2_slot4;
                    var0 = var2.get;
                    var0 = var0.bind(var2)();
                    var2 = null;
                    var3 = var2 == var0;
                    var2 = undefined;
                    if (var3) {
                        _fun111263_ip = 65;
                        continue _fun111263
                    }
                case 60:
                    var2 = var0.id;
                case 65:
                    var0 = _closure2_slot0;
                    var6 = var2 === var0;
                case 73:
                    var0 = {};
                    var2 = 1;
                    if (!var6) {
                        _fun111263_ip = 83;
                        continue _fun111263
                    }
                case 81:
                    var2 = 0;
                case 83:
                    var0.opacity = var2;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 40;
                    var2 = var4[var2];
                    var8 = undefined;
                    var5 = var3.bind(var8)(var2);
                    var4 = var5.withSpring;
                    var3 = 0;
                    if (var6) {
                        _fun111263_ip = 214;
                        continue _fun111263
                    }
                case 119:
                    var7 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 42;
                    var2 = var10[var2];
                    var7 = var7.bind(var8)(var2);
                    var2 = {};
                    var10 = _closure2_slot0;
                    var2.id = var10;
                    var11 = _closure2_slot3;
                    var10 = var11.get;
                    var10 = var10.bind(var11)();
                    var2.mode = var10;
                    var11 = _closure2_slot4;
                    var10 = var11.get;
                    var11 = var10.bind(var11)();
                    var10 = null;
                    var12 = var10 == var11;
                    var10 = undefined;
                    if (var12) {
                        _fun111263_ip = 195;
                        continue _fun111263
                    }
                case 190:
                    var10 = var11.id;
                case 195:
                    var2.focused = var10;
                    var9 = _closure2_slot1;
                    var2.isSelf = var9;
                    var3 = var7.bind(var8)(var2);
                case 214:
                    var2 = _closure1_slot14;
                    var1 = 'animate-always';
                    if (!var6) {
                        _fun111263_ip = 233;
                        continue _fun111263
                    }
                case 227:
                    var1 = 'animate-never';
                case 233:
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var0.borderRadius = var1;
                    return var0;
            }
        };
        var12 = {};
        var12.mode = var20;
        var14 = _closure1_slot12;
        var12.VoicePanelModes = var14;
        var12.focused = var19;
        var12.id = var18;
        var16 = 40;
        var14 = var11[var16];
        var14 = var17.bind(var3)(var14);
        var14 = var14.withSpring;
        var12.withSpring = var14;
        var14 = 42;
        var15 = var11[var14];
        var15 = var6.bind(var3)(var15);
        var12.computeCardBorderRadius = var15;
        var12.isSelf = var13;
        var15 = _closure1_slot14;
        var12.SPEAKING_PHYSICS = var15;
        var2.__closure = var12;
        var12 = 8831115505072.0;
        var2.__workletHash = var12;
        var12 = _closure1_slot38;
        var2.__initData = var12;
        var12 = var4.bind(var5)(var2);
        var2 = var11[var1];
        var15 = var17.bind(var3)(var2);
        var4 = var15.useAnimatedStyle;
        var2 = function() {
            _fun111264: for (var _fun111264_ip = 0;;) switch (_fun111264_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var0 = var1.get;
                    var2 = var0.bind(var1)();
                    var0 = _closure1_slot12;
                    var0 = var0.PIP;
                    var6 = var2 === var0;
                    if (var6) {
                        _fun111264_ip = 73;
                        continue _fun111264
                    }
                case 36:
                    var2 = _closure2_slot4;
                    var0 = var2.get;
                    var0 = var0.bind(var2)();
                    var2 = null;
                    var3 = var2 == var0;
                    var2 = undefined;
                    if (var3) {
                        _fun111264_ip = 65;
                        continue _fun111264
                    }
                case 60:
                    var2 = var0.id;
                case 65:
                    var0 = _closure2_slot0;
                    var6 = var2 === var0;
                case 73:
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var4 = 40;
                    var2 = var2[var4];
                    var9 = undefined;
                    var12 = var3.bind(var9)(var2);
                    var11 = var12.withSpring;
                    var10 = 0;
                    if (var6) {
                        _fun111264_ip = 202;
                        continue _fun111264
                    }
                case 107:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 42;
                    var2 = var5[var2];
                    var3 = var3.bind(var9)(var2);
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2.id = var5;
                    var13 = _closure2_slot3;
                    var5 = var13.get;
                    var5 = var5.bind(var13)();
                    var2.mode = var5;
                    var13 = _closure2_slot4;
                    var5 = var13.get;
                    var13 = var5.bind(var13)();
                    var5 = null;
                    var14 = var5 == var13;
                    var5 = undefined;
                    if (var14) {
                        _fun111264_ip = 183;
                        continue _fun111264
                    }
                case 178:
                    var5 = var13.id;
                case 183:
                    var2.focused = var5;
                    var5 = _closure2_slot1;
                    var2.isSelf = var5;
                    var10 = var3.bind(var9)(var2);
                case 202:
                    var3 = _closure1_slot14;
                    var5 = 'animate-always';
                    var2 = var5;
                    if (!var6) {
                        _fun111264_ip = 224;
                        continue _fun111264
                    }
                case 218:
                    var2 = 'animate-never';
                case 224:
                    var2 = var11.bind(var12)(var10, var3, var2);
                    var0.borderRadius = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var4 = var3.bind(var9)(var2);
                    var3 = var4.withSpring;
                    var2 = 0;
                    if (var6) {
                        _fun111264_ip = 308;
                        continue _fun111264
                    }
                case 262:
                    var10 = _closure2_slot2;
                    var7 = var10.get;
                    var7 = var7.bind(var10)();
                    var2 = 0;
                    if (!var7) {
                        _fun111264_ip = 308;
                        continue _fun111264
                    }
                case 280:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var7 = 43;
                    var7 = var10[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = 5;
                    var2 = var8.bind(var9)(var7);
                case 308:
                    var1 = _closure1_slot14;
                    if (!var6) {
                        _fun111264_ip = 321;
                        continue _fun111264
                    }
                case 315:
                    var5 = 'animate-never';
                case 321:
                    var1 = var3.bind(var4)(var2, var1, var5);
                    var0.borderWidth = var1;
                    return var0;
            }
        };
        var21 = {};
        var21.mode = var20;
        var5 = _closure1_slot12;
        var21.VoicePanelModes = var5;
        var21.focused = var19;
        var21.id = var18;
        var5 = var11[var16];
        var5 = var17.bind(var3)(var5);
        var5 = var5.withSpring;
        var21.withSpring = var5;
        var5 = var11[var14];
        var5 = var6.bind(var3)(var5);
        var21.computeCardBorderRadius = var5;
        var21.isSelf = var13;
        var5 = _closure1_slot14;
        var21.SPEAKING_PHYSICS = var5;
        var21.speaking = var10;
        var5 = 43;
        var5 = var11[var5];
        var5 = var6.bind(var3)(var5);
        var21.roundToNearestPixel = var5;
        var5 = 3;
        var21.SPEAKING_BORDER_SIZE = var5;
        var22 = 2;
        var21.SPEAKING_INSET = var22;
        var2.__closure = var21;
        var21 = 10328950638717.0;
        var2.__workletHash = var21;
        var21 = _closure1_slot39;
        var2.__initData = var21;
        var15 = var4.bind(var15)(var2);
        var1 = var11[var1];
        var2 = var17.bind(var3)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            _fun111265: for (var _fun111265_ip = 0;;) switch (_fun111265_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var0 = var1.get;
                    var2 = var0.bind(var1)();
                    var0 = _closure1_slot12;
                    var0 = var0.PIP;
                    var6 = var2 === var0;
                    if (var6) {
                        _fun111265_ip = 73;
                        continue _fun111265
                    }
                case 36:
                    var2 = _closure2_slot4;
                    var0 = var2.get;
                    var0 = var0.bind(var2)();
                    var2 = null;
                    var3 = var2 == var0;
                    var2 = undefined;
                    if (var3) {
                        _fun111265_ip = 65;
                        continue _fun111265
                    }
                case 60:
                    var2 = var0.id;
                case 65:
                    var0 = _closure2_slot0;
                    var6 = var2 === var0;
                case 73:
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 40;
                    var2 = var2[var9];
                    var4 = undefined;
                    var12 = var3.bind(var4)(var2);
                    var11 = var12.withSpring;
                    var10 = 0;
                    if (var6) {
                        _fun111265_ip = 202;
                        continue _fun111265
                    }
                case 107:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 42;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2.id = var5;
                    var13 = _closure2_slot3;
                    var5 = var13.get;
                    var5 = var5.bind(var13)();
                    var2.mode = var5;
                    var13 = _closure2_slot4;
                    var5 = var13.get;
                    var13 = var5.bind(var13)();
                    var5 = null;
                    var14 = var5 == var13;
                    var5 = undefined;
                    if (var14) {
                        _fun111265_ip = 183;
                        continue _fun111265
                    }
                case 178:
                    var5 = var13.id;
                case 183:
                    var2.focused = var5;
                    var5 = _closure2_slot1;
                    var2.isSelf = var5;
                    var10 = var3.bind(var4)(var2);
                case 202:
                    var3 = _closure1_slot14;
                    var5 = 'animate-always';
                    var2 = var5;
                    if (!var6) {
                        _fun111265_ip = 224;
                        continue _fun111265
                    }
                case 218:
                    var2 = 'animate-never';
                case 224:
                    var2 = var11.bind(var12)(var10, var3, var2);
                    var0.borderRadius = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.withSpring;
                    var2 = 0;
                    if (var6) {
                        _fun111265_ip = 283;
                        continue _fun111265
                    }
                case 262:
                    var9 = _closure2_slot2;
                    var7 = var9.get;
                    var7 = var7.bind(var9)();
                    var2 = 0;
                    if (!var7) {
                        _fun111265_ip = 283;
                        continue _fun111265
                    }
                case 280:
                    var2 = 3;
                case 283:
                    var1 = _closure1_slot14;
                    if (!var6) {
                        _fun111265_ip = 296;
                        continue _fun111265
                    }
                case 290:
                    var5 = 'animate-never';
                case 296:
                    var1 = var3.bind(var4)(var2, var1, var5);
                    var0.borderWidth = var1;
                    return var0;
            }
        };
        var4 = {};
        var4.mode = var20;
        var20 = _closure1_slot12;
        var4.VoicePanelModes = var20;
        var4.focused = var19;
        var4.id = var18;
        var16 = var11[var16];
        var16 = var17.bind(var3)(var16);
        var16 = var16.withSpring;
        var4.withSpring = var16;
        var14 = var11[var14];
        var14 = var6.bind(var3)(var14);
        var4.computeCardBorderRadius = var14;
        var4.isSelf = var13;
        var13 = _closure1_slot14;
        var4.SPEAKING_PHYSICS = var13;
        var4.speaking = var10;
        var4.SPEAKING_BORDER_SIZE = var5;
        var0.__closure = var4;
        var4 = 756305191384.0;
        var0.__workletHash = var4;
        var4 = _closure1_slot40;
        var0.__initData = var4;
        var10 = var1.bind(var2)(var0);
        var2 = _closure1_slot24;
        var5 = 41;
        var0 = var11[var5];
        var1 = var6.bind(var3)(var0);
        var0 = {};
        var13 = var9.speakingIndicatorWrapper;
        var4 = new Array(2);
        var4[0] = var13;
        var4[1] = var12;
        var0.style = var4;
        var0.layout = var8;
        var4 = 'none';
        var0.pointerEvents = var4;
        var13 = _closure1_slot22;
        var4 = var11[var5];
        var12 = var6.bind(var3)(var4);
        var4 = {};
        var16 = var9.speakingIndicatorUnderlay;
        var14 = new Array(2);
        var14[0] = var16;
        var14[1] = var15;
        var4.style = var14;
        var4.layout = var8;
        var12 = var13.bind(var3)(var12, var4);
        var4 = new Array(2);
        var4[0] = var12;
        var7 = _closure1_slot22;
        var5 = var11[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var11 = var9.speakingIndicatorGreenBar;
        var9 = new Array(2);
        var9[0] = var11;
        var9[1] = var10;
        var5.style = var9;
        var5.layout = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot59 = var0;
    var0 = function arg0() {
        _fun111266: for (var _fun111266_ip = 0;;) switch (_fun111266_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.children;
                var23 = var1.cleanUp;
                var _closure2_slot0 = var23;
                var39 = var1.coords;
                var _closure2_slot1 = var39;
                var30 = var1.id;
                var _closure2_slot2 = var30;
                var33 = var1.isRTCConnected;
                var _closure2_slot3 = var33;
                var29 = var1.isScrollVisible;
                var _closure2_slot4 = var29;
                var20 = var1.layoutPhysics;
                var _closure2_slot5 = var20;
                var11 = var1.transitionState;
                var32 = var1.sharedVisible;
                var _closure2_slot6 = var32;
                var3 = undefined;
                var _closure2_slot25 = var3;
                var _closure2_slot26 = var3;
                var _closure2_slot27 = var3;
                var _closure2_slot28 = var3;
                var _closure2_slot29 = var3;
                var _closure2_slot30 = var3;
                var _closure2_slot31 = var3;
                var _closure2_slot32 = var3;
                var12 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 46;
                var1 = var2[var1];
                var1 = var12.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var1 = var1.analyticsLocations;
                var _closure2_slot7 = var1;
                var1 = _closure1_slot30;
                var9 = var1.bind(var3)();
                var6 = _closure1_slot4;
                var5 = var6.useContext;
                var1 = 29;
                var1 = var2[var1];
                var1 = var12.bind(var3)(var1);
                var5 = var5.bind(var6)(var1);
                var10 = var5.channelId;
                var _closure2_slot8 = var10;
                var28 = var5.connected;
                var _closure2_slot9 = var28;
                var37 = var5.contentDimensions;
                var _closure2_slot10 = var37;
                var1 = var5.controlsSpecs;
                var _closure2_slot11 = var1;
                var31 = var5.focused;
                var _closure2_slot12 = var31;
                var8 = var5.guildId;
                var1 = var5.hideControls;
                var _closure2_slot13 = var1;
                var34 = var5.mode;
                var _closure2_slot14 = var34;
                var1 = var5.mountedCards;
                var15 = var5.pipAvoidanceSpecs;
                var _closure2_slot15 = var15;
                var19 = var5.pipContainerRef;
                var _closure2_slot16 = var19;
                var16 = var5.safeArea;
                var _closure2_slot17 = var16;
                var14 = var5.scrollPosition;
                var _closure2_slot18 = var14;
                var6 = var5.setFocused;
                var _closure2_slot19 = var6;
                var6 = var5.showControls;
                var _closure2_slot20 = var6;
                var17 = var5.windowDimensions;
                var _closure2_slot21 = var17;
                var18 = var5.wrapperDimensions;
                var _closure2_slot22 = var18;
                var13 = var5.wrapperOffset;
                var _closure2_slot23 = var13;
                var5 = _closure1_slot0;
                var6 = 47;
                var6 = var2[var6];
                var21 = var5.bind(var3)(var6);
                var6 = var21.usePIPState;
                var24 = var6.bind(var21)();
                var _closure2_slot24 = var24;
                var26 = 48;
                var6 = var2[var26];
                var6 = var12.bind(var3)(var6);
                var22 = var6.bind(var3)(var30, var10, var8);
                var2 = var2[var26];
                var5 = var5.bind(var3)(var2);
                var2 = var5.isStableParticipantWithUser;
                var5 = var2.bind(var5)(var22);
                var2 = var22;
                if (var5) {
                    _fun111266_ip = 439;
                    continue _fun111266
                }
            case 435:
                var2 = _closure1_slot46;
            case 439:
                var8 = var2.isSelf;
                _closure2_slot25 = var8;
                var2 = var2.user;
                var6 = var2.id;
                _closure2_slot26 = var6;
                var12 = _closure1_slot0;
                var5 = _closure1_slot2;
                var25 = 16;
                var2 = var5[var25];
                var21 = var12.bind(var3)(var2);
                var10 = var21.useDerivedValue;
                var2 = function() {
                    _fun111267: for (var _fun111267_ip = 0;;) switch (_fun111267_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = _closure2_slot24;
                            var0 = var0.id;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun111267_ip = 53;
                                continue _fun111267
                            }
                        case 23:
                            var2 = _closure2_slot14;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = _closure1_slot12;
                            var1 = var1.PIP;
                            var0 = var2 === var1;
                        case 53:
                            return var0;
                    }
                };
                var27 = {};
                var27.id = var30;
                var27.pipState = var24;
                var27.mode = var34;
                var35 = _closure1_slot12;
                var27.VoicePanelModes = var35;
                var2.__closure = var27;
                var27 = 4773864088866.0;
                var2.__workletHash = var27;
                var27 = _closure1_slot49;
                var2.__initData = var27;
                var35 = var10.bind(var21)(var2);
                _closure2_slot27 = var35;
                var2 = var5[var25];
                var21 = var12.bind(var3)(var2);
                var10 = var21.useDerivedValue;
                var2 = function() {
                    _fun111268: for (var _fun111268_ip = 0;;) switch (_fun111268_ip) {
                        case 0:
                            var2 = _closure2_slot12;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var2 = null;
                            var3 = var2 == var0;
                            var2 = undefined;
                            if (var3) {
                                _fun111268_ip = 32;
                                continue _fun111268
                            }
                        case 27:
                            var2 = var0.id;
                        case 32:
                            var0 = _closure2_slot2;
                            if (!(var2 !== var0)) {
                                _fun111268_ip = 72;
                                continue _fun111268
                            }
                        case 40:
                            var2 = _closure2_slot14;
                            var0 = var2.get;
                            var3 = var0.bind(var2)();
                            var0 = _closure1_slot12;
                            var2 = var0.PIP;
                            var0 = 0;
                            if (!(var3 === var2)) {
                                _fun111268_ip = 85;
                                continue _fun111268
                            }
                        case 72:
                            var2 = _closure2_slot18;
                            var1 = var2.get;
                            var0 = var1.bind(var2)();
                        case 85:
                            return var0;
                    }
                };
                var27 = {};
                var27.focused = var31;
                var27.id = var30;
                var27.mode = var34;
                var36 = _closure1_slot12;
                var27.VoicePanelModes = var36;
                var27.scrollPosition = var14;
                var2.__closure = var27;
                var27 = 8770947887509.0;
                var2.__workletHash = var27;
                var27 = _closure1_slot50;
                var2.__initData = var27;
                var38 = var10.bind(var21)(var2);
                _closure2_slot28 = var38;
                var2 = var5[var25];
                var21 = var12.bind(var3)(var2);
                var10 = var21.useDerivedValue;
                var2 = function() {
                    _fun111269: for (var _fun111269_ip = 0;;) switch (_fun111269_ip) {
                        case 0:
                            var2 = _closure2_slot9;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun111269_ip = 47;
                                continue _fun111269
                            }
                        case 19:
                            var2 = _closure2_slot22;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var2 = var0.drawerWidth;
                            var0 = 2;
                            var0 = var2 / var0;
                            _fun111269_ip = 139;
                            continue _fun111269;
                        case 47:
                            var2 = global;
                            var5 = var2.Math;
                            var4 = var5.max;
                            var3 = _closure1_slot18;
                            var6 = _closure2_slot17;
                            var2 = var6.get;
                            var2 = var2.bind(var6)();
                            var2 = var2.left;
                            var7 = _closure2_slot21;
                            var6 = var7.get;
                            var6 = var6.bind(var7)();
                            var6 = var6.width;
                            var7 = _closure2_slot10;
                            var1 = var7.get;
                            var1 = var1.bind(var7)();
                            var1 = var1.width;
                            var6 = var6 - var1;
                            var1 = 2;
                            var1 = var6 / var1;
                            var0 = var4.bind(var5)(var3, var2, var1);
                        case 139:
                            return var0;
                    }
                };
                var27 = {};
                var27.connected = var28;
                var28 = _closure1_slot18;
                var27.EDGE_GUTTER = var28;
                var27.safeArea = var16;
                var27.windowDimensions = var17;
                var27.contentDimensions = var37;
                var27.wrapperDimensions = var18;
                var2.__closure = var27;
                var27 = 15078431132990.0;
                var2.__workletHash = var27;
                var27 = _closure1_slot51;
                var2.__initData = var27;
                var2 = var10.bind(var21)(var2);
                _closure2_slot29 = var2;
                var10 = {};
                var10.id = var30;
                var10.participant = var22;
                var10.transitionState = var11;
                var10.cleanUp = var23;
                var10.mountedCards = var1;
                var10.mode = var34;
                var10.focused = var31;
                var10.isScrollVisible = var29;
                var10.sharedVisible = var32;
                var1 = function arg0() {
                    _fun111270: for (var _fun111270_ip = 0;;) switch (_fun111270_ip) {
                        case 0:
                            var1 = arg0;
                            var9 = var1.id;
                            var _closure3_slot0 = var9;
                            var5 = var1.participant;
                            var _closure3_slot1 = var5;
                            var4 = var1.transitionState;
                            var _closure3_slot2 = var4;
                            var10 = var1.cleanUp;
                            var _closure3_slot3 = var10;
                            var17 = var1.mode;
                            var _closure3_slot4 = var17;
                            var8 = var1.focused;
                            var _closure3_slot5 = var8;
                            var15 = var1.isScrollVisible;
                            var _closure3_slot6 = var15;
                            var16 = var1.sharedVisible;
                            var _closure3_slot7 = var16;
                            var13 = undefined;
                            var _closure3_slot10 = var13;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var14 = 16;
                            var1 = var1[var14];
                            var2 = var2.bind(var13)(var1);
                            var1 = var2.useSharedValue;
                            var2 = var1.bind(var2)(var4);
                            var _closure3_slot8 = var2;
                            var6 = _closure1_slot4;
                            var4 = var6.useState;
                            var1 = true;
                            var6 = var4.bind(var6)(var1);
                            var4 = _closure1_slot3;
                            var1 = 2;
                            var6 = var4.bind(var13)(var6, var1);
                            var1 = 0;
                            var1 = var6[var1];
                            var4 = 1;
                            var4 = var6[var4];
                            var _closure3_slot9 = var4;
                            var7 = _closure1_slot4;
                            var6 = var7.useCallback;
                            var4 = null;
                            var11 = var4 == var5;
                            var4 = undefined;
                            if (var11) {
                                _fun111270_ip = 198;
                                continue _fun111270
                            }
                        case 193:
                            var4 = var5.type;
                        case 198:
                            var5 = new Array(2);
                            var5[0] = var4;
                            var5[1] = var9;
                            var4 = function(arg0) { // Environment: var0
                                _fun111271: for (var _fun111271_ip = 0;;) switch (_fun111271_ip) {
                                    case 0:
                                        var2 = _closure3_slot1;
                                        var0 = null;
                                        var2 = var0 == var2;
                                        var0 = undefined;
                                        var3 = undefined;
                                        if (var2) {
                                            _fun111271_ip = 29;
                                            continue _fun111271
                                        }
                                    case 20:
                                        var2 = _closure3_slot1;
                                        var3 = var2.type;
                                    case 29:
                                        var2 = _closure1_slot20;
                                        var2 = var2.ACTIVITY;
                                        if (!(var3 === var2)) {
                                            _fun111271_ip = 69;
                                            continue _fun111271
                                        }
                                    case 46:
                                        var2 = _closure3_slot9;
                                        var3 = _closure3_slot0;
                                        var1 = arg0;
                                        var1 = var1 === var3;
                                        var1 = !var1;
                                        var1 = var2.bind(var0)(var1);
                                    case 69:
                                        return var0;
                                }
                            };
                            var19 = var6.bind(var7)(var4, var5);
                            _closure3_slot10 = var19;
                            var12 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var4 = var11[var14];
                            var7 = var12.bind(var13)(var4);
                            var6 = var7.useAnimatedReaction;
                            var5 = function() {
                                _fun111272: for (var _fun111272_ip = 0;;) switch (_fun111272_ip) {
                                    case 0:
                                        var1 = _closure3_slot5;
                                        var0 = var1.get;
                                        var1 = var0.bind(var1)();
                                        var0 = null;
                                        var2 = var0 == var1;
                                        var0 = undefined;
                                        if (var2) {
                                            _fun111272_ip = 32;
                                            continue _fun111272
                                        }
                                    case 27:
                                        var0 = var1.id;
                                    case 32:
                                        return var0;
                                }
                            };
                            var4 = {};
                            var4.focused = var8;
                            var5.__closure = var4;
                            var4 = 12145773243163.0;
                            var5.__workletHash = var4;
                            var4 = _closure1_slot42;
                            var5.__initData = var4;
                            var4 = function arg0, arg1() {
                                _fun111273: for (var _fun111273_ip = 0;;) switch (_fun111273_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = arg1;
                                        if (!(var2 !== var0)) {
                                            _fun111273_ip = 57;
                                            continue _fun111273
                                        }
                                    case 10:
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 16;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var4 = var3.bind(var1)(var0);
                                        var3 = var4.runOnJS;
                                        var0 = _closure3_slot10;
                                        var0 = var3.bind(var4)(var0);
                                        var0 = var0.bind(var1)(var2);
                                    case 57:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var18 = {};
                            var20 = var11[var14];
                            var20 = var12.bind(var13)(var20);
                            var20 = var20.runOnJS;
                            var18.runOnJS = var20;
                            var18.handleFocusedParticipantChange = var19;
                            var4.__closure = var18;
                            var18 = 9304160478829.0;
                            var4.__workletHash = var18;
                            var18 = _closure1_slot43;
                            var4.__initData = var18;
                            var4 = var6.bind(var7)(var5, var4);
                            var4 = var11[var14];
                            var7 = var12.bind(var13)(var4);
                            var6 = var7.useAnimatedReaction;
                            var5 = function() {
                                var0 = {};
                                var3 = _closure3_slot4;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var0.mode = var2;
                                var3 = _closure3_slot5;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var0.focused = var2;
                                var2 = _closure3_slot8;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var0.transitionState = var1;
                                return var0;
                            };
                            var4 = {};
                            var4.mode = var17;
                            var4.focused = var8;
                            var4.sharedTransitionState = var2;
                            var5.__closure = var4;
                            var4 = 13570020810295.0;
                            var5.__workletHash = var4;
                            var4 = _closure1_slot44;
                            var5.__initData = var4;
                            var4 = function arg0, arg1() {
                                _fun111275: for (var _fun111275_ip = 0;;) switch (_fun111275_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var6 = arg1;
                                        var4 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 44;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var7 = var4.bind(var0)(var1);
                                        var5 = var7.cheapWorkletShallowEqual;
                                        var1 = null;
                                        var8 = var1 != var6;
                                        var4 = undefined;
                                        if (!var8) {
                                            _fun111275_ip = 51;
                                            continue _fun111275
                                        }
                                    case 48:
                                        var4 = var6;
                                    case 51:
                                        var4 = var5.bind(var7)(var3, var4);
                                        if (var4) {
                                            _fun111275_ip = 463;
                                            continue _fun111275
                                        }
                                    case 63:
                                        var5 = var3.mode;
                                        var7 = var3.focused;
                                        var8 = var3.transitionState;
                                        var3 = _closure1_slot12;
                                        var3 = var3.PIP;
                                        var9 = var1 == var7;
                                        var4 = undefined;
                                        if (var9) {
                                            _fun111275_ip = 104;
                                            continue _fun111275
                                        }
                                    case 99:
                                        var4 = var7.id;
                                    case 104:
                                        if (!(var1 == var6)) {
                                            _fun111275_ip = 147;
                                            continue _fun111275
                                        }
                                    case 108:
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot2;
                                        var7 = 45;
                                        var7 = var10[var7];
                                        var7 = var9.bind(var0)(var7);
                                        var7 = var7.TransitionStates;
                                        var7 = var7.YEETED;
                                        if (!(var8 === var7)) {
                                            _fun111275_ip = 443;
                                            continue _fun111275
                                        }
                                    case 147:
                                        var10 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var9 = 45;
                                        var7 = var7[var9];
                                        var7 = var10.bind(var0)(var7);
                                        var7 = var7.TransitionStates;
                                        var7 = var7.YEETED;
                                        if (!(var8 !== var7)) {
                                            _fun111275_ip = 346;
                                            continue _fun111275
                                        }
                                    case 186:
                                        var8 = var1 == var6;
                                        var7 = undefined;
                                        if (var8) {
                                            _fun111275_ip = 201;
                                            continue _fun111275
                                        }
                                    case 195:
                                        var7 = var6.transitionState;
                                    case 201:
                                        var8 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var6 = var6[var9];
                                        var6 = var8.bind(var0)(var6);
                                        var6 = var6.TransitionStates;
                                        var6 = var6.YEETED;
                                        if (!(var7 !== var6)) {
                                            _fun111275_ip = 324;
                                            continue _fun111275
                                        }
                                    case 234:
                                        if (!(var5 !== var3)) {
                                            _fun111275_ip = 463;
                                            continue _fun111275
                                        }
                                    case 241:
                                        if (!(var1 != var4)) {
                                            _fun111275_ip = 299;
                                            continue _fun111275
                                        }
                                    case 245:
                                        var3 = _closure3_slot0;
                                        if (!(var4 === var3)) {
                                            _fun111275_ip = 278;
                                            continue _fun111275
                                        }
                                    case 256:
                                        var5 = _closure3_slot7;
                                        var4 = var5.set;
                                        var3 = 1;
                                        var3 = var4.bind(var5)(var3);
                                        _fun111275_ip = 463;
                                        continue _fun111275;
                                    case 278:
                                        var4 = _closure3_slot7;
                                        var3 = var4.set;
                                        var1 = 0;
                                        var1 = var3.bind(var4)(var1);
                                        _fun111275_ip = 463;
                                        continue _fun111275;
                                    case 299:
                                        var4 = _closure3_slot7;
                                        var3 = var4.set;
                                        var1 = 1;
                                        var1 = var3.bind(var4)(var1);
                                        _fun111275_ip = 463;
                                        continue _fun111275;
                                    case 324:
                                        var4 = _closure3_slot7;
                                        var3 = var4.set;
                                        var1 = 1;
                                        var1 = var3.bind(var4)(var1);
                                        _fun111275_ip = 463;
                                        continue _fun111275;
                                    case 346:
                                        var4 = _closure3_slot7;
                                        var3 = var4.get;
                                        var4 = var3.bind(var4)();
                                        var3 = 1;
                                        if (!(var3 === var4)) {
                                            _fun111275_ip = 385;
                                            continue _fun111275
                                        }
                                    case 369:
                                        var4 = _closure3_slot6;
                                        var3 = var4.get;
                                        var3 = var3.bind(var4)();
                                        if (var3) {
                                            _fun111275_ip = 425;
                                            continue _fun111275
                                        }
                                    case 385:
                                        var3 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var2 = 16;
                                        var2 = var4[var2];
                                        var4 = var3.bind(var0)(var2);
                                        var3 = var4.runOnJS;
                                        var2 = _closure3_slot3;
                                        var2 = var3.bind(var4)(var2);
                                        var2 = var2.bind(var0)();
                                        _fun111275_ip = 463;
                                        continue _fun111275;
                                    case 425:
                                        var3 = _closure3_slot7;
                                        var2 = var3.set;
                                        var1 = 0;
                                        var1 = var2.bind(var3)(var1);
                                        _fun111275_ip = 463;
                                        continue _fun111275;
                                    case 443:
                                        var3 = _closure3_slot7;
                                        var2 = var3.set;
                                        var1 = 1;
                                        var1 = var2.bind(var3)(var1);
                                    case 463:
                                        return var0;
                                }
                            };
                            var8 = {};
                            var17 = 44;
                            var17 = var11[var17];
                            var17 = var12.bind(var13)(var17);
                            var17 = var17.cheapWorkletShallowEqual;
                            var8.cheapWorkletShallowEqual = var17;
                            var17 = _closure1_slot12;
                            var8.VoicePanelModes = var17;
                            var17 = 45;
                            var17 = var11[var17];
                            var17 = var12.bind(var13)(var17);
                            var17 = var17.TransitionStates;
                            var8.TransitionStates = var17;
                            var8.sharedVisible = var16;
                            var8.isScrollVisible = var15;
                            var11 = var11[var14];
                            var11 = var12.bind(var13)(var11);
                            var11 = var11.runOnJS;
                            var8.runOnJS = var11;
                            var8.cleanUp = var10;
                            var8.id = var9;
                            var4.__closure = var8;
                            var8 = 17099686269568.0;
                            var4.__workletHash = var8;
                            var8 = _closure1_slot45;
                            var4.__initData = var8;
                            var4 = var6.bind(var7)(var5, var4);
                            var4 = _closure1_slot4;
                            var3 = var4.useLayoutEffect;
                            var0 = function() { // Environment: var0
                                var2 = _closure3_slot8;
                                var1 = var2.set;
                                var0 = _closure3_slot2;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var3.bind(var4)(var0);
                            var0 = {};
                            var0.sharedTransitionState = var2;
                            var0.cardGestureEnabled = var1;
                            return var0;
                    }
                };
                var1 = var1.bind(var3)(var10);
                var36 = var1.sharedTransitionState;
                _closure2_slot30 = var36;
                var27 = var1.cardGestureEnabled;
                var10 = var24.mode;
                var1 = _closure1_slot17;
                var1 = var1.IN_APP;
                var21 = var10 === var1;
                _closure2_slot31 = var21;
                var1 = var5[var25];
                var11 = var12.bind(var3)(var1);
                var10 = var11.useAnimatedStyle;
                var1 = function() {
                    _fun111277: for (var _fun111277_ip = 0;;) switch (_fun111277_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            var11 = var0.zIndex;
                            var12 = var0.width;
                            var4 = var0.height;
                            var3 = var0.x;
                            var0 = var0.y;
                            var2 = _closure2_slot12;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var10 = null;
                            var6 = var10 == var1;
                            var5 = undefined;
                            var2 = undefined;
                            if (var6) {
                                _fun111277_ip = 73;
                                continue _fun111277
                            }
                        case 68:
                            var2 = var1.id;
                        case 73:
                            var1 = _closure2_slot2;
                            var6 = var2 === var1;
                            var1 = _closure2_slot31;
                            if (var1) {
                                _fun111277_ip = 392;
                                continue _fun111277
                            }
                        case 91:
                            var2 = _closure2_slot12;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            if (!(var10 == var1)) {
                                _fun111277_ip = 317;
                                continue _fun111277
                            }
                        case 111:
                            var2 = _closure2_slot29;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var13 = var3 + var1;
                            var8 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 50;
                            var2 = var7[var2];
                            var8 = var8.bind(var5)(var2);
                            var2 = {};
                            var14 = _closure2_slot10;
                            var9 = var14.get;
                            var9 = var9.bind(var14)();
                            var9 = var9.height;
                            var2.contentHeight = var9;
                            var14 = _closure2_slot21;
                            var9 = var14.get;
                            var9 = var9.bind(var14)();
                            var9 = var9.height;
                            var2.windowHeight = var9;
                            var14 = _closure2_slot17;
                            var9 = var14.get;
                            var9 = var9.bind(var14)();
                            var2.safeArea = var9;
                            var2 = var8.bind(var5)(var2);
                            var14 = var0 + var2;
                            var8 = _closure2_slot30;
                            var2 = var8.get;
                            var15 = var2.bind(var8)();
                            var2 = _closure1_slot0;
                            var1 = 45;
                            var1 = var7[var1];
                            var1 = var2.bind(var5)(var1);
                            var1 = var1.TransitionStates;
                            var1 = var1.YEETED;
                            var20 = var11;
                            var9 = var12;
                            var8 = var4;
                            var2 = var13;
                            var7 = var14;
                            if (!(var15 === var1)) {
                                _fun111277_ip = 634;
                                continue _fun111277
                            }
                        case 289:
                            var1 = 4;
                            var1 = var4 / var1;
                            var7 = var14 + var1;
                            var20 = var11;
                            var9 = var12;
                            var8 = var4;
                            var2 = var13;
                            _fun111277_ip = 634;
                            continue _fun111277;
                        case 317:
                            var20 = 0;
                            var9 = var12;
                            var8 = var4;
                            var2 = var3;
                            var7 = var0;
                            if (!var6) {
                                _fun111277_ip = 634;
                                continue _fun111277
                            }
                        case 337:
                            var3 = _closure2_slot21;
                            var0 = var3.get;
                            var0 = var0.bind(var3)();
                            var9 = var0.width;
                            var0 = var3.get;
                            var0 = var0.bind(var3)();
                            var8 = var0.height;
                            var12 = _closure2_slot28;
                            var0 = var12.get;
                            var7 = var0.bind(var12)();
                            var20 = 1;
                            var2 = 0;
                            _fun111277_ip = 634;
                            continue _fun111277;
                        case 392:
                            var0 = _closure2_slot24;
                            var4 = var0.width;
                            var3 = var0.height;
                            var1 = var0.showSecondaryPIP;
                            var0 = _closure2_slot24;
                            if (var1) {
                                _fun111277_ip = 426;
                                continue _fun111277
                            }
                        case 419:
                            var13 = var0.height;
                            _fun111277_ip = 432;
                            continue _fun111277;
                        case 426:
                            var13 = var0.containerHeight;
                        case 432:
                            var1 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var0 = 49;
                            var0 = var12[var0];
                            var12 = var1.bind(var5)(var0);
                            var1 = var12.getClampedPIPPosition;
                            var0 = {};
                            var15 = _closure2_slot22;
                            var14 = var15.get;
                            var14 = var14.bind(var15)();
                            var14 = var14.pipX;
                            var0.pipX = var14;
                            var14 = var15.get;
                            var14 = var14.bind(var15)();
                            var14 = var14.pipY;
                            var0.pipY = var14;
                            var0.width = var4;
                            var0.height = var13;
                            var14 = _closure2_slot21;
                            var13 = var14.get;
                            var13 = var13.bind(var14)();
                            var0.windowDimensions = var13;
                            var14 = _closure2_slot17;
                            var13 = var14.get;
                            var13 = var13.bind(var14)();
                            var0.safeArea = var13;
                            var14 = _closure2_slot15;
                            var13 = var14.get;
                            var13 = var13.bind(var14)();
                            var13 = var13.bottom;
                            var0.bottomAvoidanceRegion = var13;
                            var13 = var14.get;
                            var13 = var13.bind(var14)();
                            var13 = var13.top;
                            var0.topAvoidanceRegion = var13;
                            var0 = var1.bind(var12)(var0);
                            var2 = var0.x;
                            var13 = _closure2_slot28;
                            var12 = var13.get;
                            var12 = var12.bind(var13)();
                            var0 = var0.y;
                            var7 = var12 + var0;
                            var20 = var11;
                            var9 = var4;
                            var8 = var3;
                        case 634:
                            var1 = _closure2_slot27;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            if (!var0) {
                                _fun111277_ip = 656;
                                continue _fun111277
                            }
                        case 650:
                            var20 = 9001;
                        case 656:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 42;
                            var0 = var4[var0];
                            var3 = var3.bind(var5)(var0);
                            var0 = {};
                            var4 = _closure2_slot2;
                            var0.id = var4;
                            var11 = _closure2_slot14;
                            var4 = var11.get;
                            var4 = var4.bind(var11)();
                            var0.mode = var4;
                            var11 = _closure2_slot12;
                            var4 = var11.get;
                            var11 = var4.bind(var11)();
                            var12 = var10 == var11;
                            var4 = undefined;
                            if (var12) {
                                _fun111277_ip = 733;
                                continue _fun111277
                            }
                        case 728:
                            var4 = var11.id;
                        case 733:
                            var0.focused = var4;
                            var4 = _closure2_slot25;
                            var0.isSelf = var4;
                            var4 = var3.bind(var5)(var0);
                            var3 = _closure2_slot6;
                            var0 = var3.get;
                            var0 = var0.bind(var3)();
                            var3 = 0;
                            if (!(var3 === var0)) {
                                _fun111277_ip = 808;
                                continue _fun111277
                            }
                        case 771:
                            var11 = _closure2_slot12;
                            var0 = var11.get;
                            var0 = var0.bind(var11)();
                            var11 = var10 == var0;
                            var10 = undefined;
                            if (var11) {
                                _fun111277_ip = 798;
                                continue _fun111277
                            }
                        case 793:
                            var10 = var0.id;
                        case 798:
                            var0 = _closure2_slot2;
                            var15 = 0;
                            if (!(var10 === var0)) {
                                _fun111277_ip = 834;
                                continue _fun111277
                            }
                        case 808:
                            var10 = 1;
                            var0 = var10;
                            if (var6) {
                                _fun111277_ip = 831;
                                continue _fun111277
                            }
                        case 817:
                            var6 = _closure2_slot3;
                            var0 = var10;
                            if (var6) {
                                _fun111277_ip = 831;
                                continue _fun111277
                            }
                        case 827:
                            var0 = _closure1_slot29;
                        case 831:
                            var15 = var0;
                        case 834:
                            var0 = {};
                            var10 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var18 = 16;
                            var6 = var6[var18];
                            var14 = var10.bind(var5)(var6);
                            var13 = var14.withDelay;
                            var10 = _closure2_slot27;
                            var6 = var10.get;
                            var6 = var6.bind(var10)();
                            var12 = 100;
                            if (!var6) {
                                _fun111277_ip = 883;
                                continue _fun111277
                            }
                        case 881:
                            var12 = 0;
                        case 883:
                            var6 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var3 = 39;
                            var11 = var10[var3];
                            var19 = var6.bind(var5)(var11);
                            var16 = var19.withTiming;
                            var11 = _closure1_slot28;
                            var11 = var16.bind(var19)(var20, var11);
                            var11 = var13.bind(var14)(var12, var11);
                            var0.zIndex = var11;
                            var3 = var10[var3];
                            var14 = var6.bind(var5)(var3);
                            var13 = var14.withTiming;
                            var12 = _closure1_slot27;
                            var6 = _closure2_slot4;
                            var3 = var6.get;
                            var3 = var3.bind(var6)();
                            var11 = 'animate-never';
                            if (!var3) {
                                _fun111277_ip = 975;
                                continue _fun111277
                            }
                        case 969:
                            var11 = 'animate-always';
                        case 975:
                            var10 = function arg0() {
                                _fun111278: for (var _fun111278_ip = 0;;) switch (_fun111278_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun111278_ip = 28;
                                            continue _fun111278
                                        }
                                    case 6:
                                        var2 = _closure2_slot6;
                                        var1 = var2.get;
                                        var2 = var1.bind(var2)();
                                        var1 = 0;
                                        var0 = var1 === var2;
                                    case 28:
                                        if (!var0) {
                                            _fun111278_ip = 88;
                                            continue _fun111278
                                        }
                                    case 31:
                                        var2 = _closure2_slot30;
                                        var1 = var2.get;
                                        var2 = var1.bind(var2)();
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 45;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3);
                                        var1 = var1.TransitionStates;
                                        var1 = var1.YEETED;
                                        var0 = var2 === var1;
                                    case 88:
                                        if (!var0) {
                                            _fun111278_ip = 137;
                                            continue _fun111278
                                        }
                                    case 91:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 16;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot0;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 137:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var16 = {};
                            var3 = _closure2_slot6;
                            var16.sharedVisible = var3;
                            var3 = _closure2_slot30;
                            var16.sharedTransitionState = var3;
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var19 = 45;
                            var19 = var6[var19];
                            var19 = var3.bind(var5)(var19);
                            var19 = var19.TransitionStates;
                            var16.TransitionStates = var19;
                            var18 = var6[var18];
                            var18 = var3.bind(var5)(var18);
                            var18 = var18.runOnJS;
                            var16.runOnJS = var18;
                            var17 = _closure2_slot0;
                            var16.cleanUp = var17;
                            var10.__closure = var16;
                            var16 = 6571273005437.0;
                            var10.__workletHash = var16;
                            var16 = _closure1_slot53;
                            var10.__initData = var16;
                            var25 = var14;
                            var24 = var15;
                            var23 = var12;
                            var22 = var11;
                            var21 = var10;
                            var10 = var25[var13](var24, var23, var22, var21, var20);
                            var0.opacity = var10;
                            var0.width = var9;
                            var0.height = var8;
                            var0.top = var7;
                            var0.left = var2;
                            var2 = 40;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.withSpring;
                            var1 = _closure1_slot21;
                            var1 = var2.bind(var3)(var4, var1);
                            var0.borderRadius = var1;
                            return var0;
                    }
                };
                var28 = {};
                var28.coords = var39;
                var28.focused = var31;
                var28.id = var30;
                var28.isPIP = var21;
                var28.pipState = var24;
                var24 = 49;
                var39 = var5[var24];
                var39 = var12.bind(var3)(var39);
                var39 = var39.getClampedPIPPosition;
                var28.getClampedPIPPosition = var39;
                var28.wrapperDimensions = var18;
                var28.windowDimensions = var17;
                var28.safeArea = var16;
                var28.pipAvoidanceSpecs = var15;
                var28.derivedScrollValue = var38;
                var28.xOffset = var2;
                var2 = _closure1_slot1;
                var38 = 50;
                var38 = var5[var38];
                var38 = var2.bind(var3)(var38);
                var28.calculateContentCenterOffset = var38;
                var28.contentDimensions = var37;
                var28.sharedTransitionState = var36;
                var36 = 45;
                var36 = var5[var36];
                var36 = var12.bind(var3)(var36);
                var36 = var36.TransitionStates;
                var28.TransitionStates = var36;
                var28.zIndexOverride = var35;
                var35 = 42;
                var35 = var5[var35];
                var35 = var2.bind(var3)(var35);
                var28.computeCardBorderRadius = var35;
                var28.mode = var34;
                var28.isSelf = var8;
                var28.sharedVisible = var32;
                var28.isRTCConnected = var33;
                var33 = _closure1_slot29;
                var28.CONNECTING_OPACITY = var33;
                var33 = var5[var25];
                var33 = var12.bind(var3)(var33);
                var33 = var33.withDelay;
                var28.withDelay = var33;
                var33 = 39;
                var33 = var5[var33];
                var33 = var12.bind(var3)(var33);
                var33 = var33.withTiming;
                var28.withTiming = var33;
                var33 = _closure1_slot28;
                var28.ZINDEX_TIMING = var33;
                var33 = _closure1_slot27;
                var28.OPACITY_TIMING = var33;
                var28.isScrollVisible = var29;
                var29 = var5[var25];
                var29 = var12.bind(var3)(var29);
                var29 = var29.runOnJS;
                var28.runOnJS = var29;
                var28.cleanUp = var23;
                var23 = 40;
                var29 = var5[var23];
                var29 = var12.bind(var3)(var29);
                var29 = var29.withSpring;
                var28.withSpring = var29;
                var29 = _closure1_slot21;
                var28.SCALE_PHYSICS = var29;
                var1.__closure = var28;
                var28 = 8451269564217.0;
                var1.__workletHash = var28;
                var28 = _closure1_slot52;
                var1.__initData = var28;
                var11 = var10.bind(var11)(var1);
                var1 = var5[var25];
                var28 = var12.bind(var3)(var1);
                var10 = var28.useAnimatedStyle;
                var1 = function() {
                    _fun111279: for (var _fun111279_ip = 0;;) switch (_fun111279_ip) {
                        case 0:
                            var0 = {};
                            var2 = {};
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 40;
                            var3 = var5[var3];
                            var8 = undefined;
                            var5 = var4.bind(var8)(var3);
                            var4 = var5.withSpring;
                            var7 = _closure2_slot6;
                            var6 = var7.get;
                            var7 = var6.bind(var7)();
                            var6 = 1;
                            if (!(var6 !== var7)) {
                                _fun111279_ip = 104;
                                continue _fun111279
                            }
                        case 57:
                            var9 = _closure2_slot12;
                            var7 = var9.get;
                            var7 = var7.bind(var9)();
                            var9 = null;
                            var9 = var9 == var7;
                            var8 = undefined;
                            if (var9) {
                                _fun111279_ip = 86;
                                continue _fun111279
                            }
                        case 81:
                            var8 = var7.id;
                        case 86:
                            var7 = _closure2_slot2;
                            var3 = 0.8;
                            if (!(var8 === var7)) {
                                _fun111279_ip = 107;
                                continue _fun111279
                            }
                        case 104:
                            var3 = var6;
                        case 107:
                            var1 = _closure1_slot26;
                            var1 = var4.bind(var5)(var3, var1);
                            var2.scale = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var29 = {};
                var33 = var5[var23];
                var33 = var12.bind(var3)(var33);
                var33 = var33.withSpring;
                var29.withSpring = var33;
                var29.sharedVisible = var32;
                var29.focused = var31;
                var29.id = var30;
                var30 = _closure1_slot26;
                var29.CARD_SCALE_PHYSICS = var30;
                var1.__closure = var29;
                var29 = 16711905625646.0;
                var1.__workletHash = var29;
                var29 = _closure1_slot54;
                var1.__initData = var29;
                var10 = var10.bind(var28)(var1);
                var1 = 51;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.gesturesEnabled = var27;
                var27 = function() {
                    _fun111280: for (var _fun111280_ip = 0;;) switch (_fun111280_ip) {
                        case 0:
                            var2 = _closure2_slot11;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var2 = var1.mode;
                            var1 = _closure1_slot16;
                            var1 = var1.HIDDEN;
                            if (!(var2 !== var1)) {
                                _fun111280_ip = 60;
                                continue _fun111280
                            }
                        case 38:
                            var3 = _closure2_slot13;
                            var2 = {};
                            var1 = true;
                            var2.debounce = var1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun111280_ip = 80;
                            continue _fun111280;
                        case 60:
                            var2 = _closure2_slot20;
                            var1 = {};
                            var0 = true;
                            var1.debounce = var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 80:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onSingleTap = var27;
                var5 = var5[var26];
                var12 = var12.bind(var3)(var5);
                var5 = var12.isStableActivityParticipant;
                var5 = var5.bind(var12)(var22);
                if (var5) {
                    _fun111266_ip = 1411;
                    continue _fun111266
                }
            case 1373:
                var5 = undefined;
                if (!var8) {
                    _fun111266_ip = 1418;
                    continue _fun111266
                }
            case 1378:
                var12 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var26];
                var12 = var12.bind(var3)(var8);
                var8 = var12.isStableStreamParticipant;
                var8 = var8.bind(var12)(var22);
                var5 = undefined;
                if (!var8) {
                    _fun111266_ip = 1418;
                    continue _fun111266
                }
            case 1411:
                var5 = function() { // Environment: var0
                    _fun111281: for (var _fun111281_ip = 0;;) switch (_fun111281_ip) {
                        case 0:
                            var2 = _closure2_slot12;
                            var0 = var2.get;
                            var2 = var0.bind(var2)();
                            var3 = null;
                            var5 = var3 == var2;
                            var0 = undefined;
                            var4 = undefined;
                            if (var5) {
                                _fun111281_ip = 34;
                                continue _fun111281
                            }
                        case 29:
                            var4 = var2.id;
                        case 34:
                            var2 = _closure2_slot2;
                            if (!(var4 === var2)) {
                                _fun111281_ip = 53;
                                continue _fun111281
                            }
                        case 42:
                            var2 = _closure2_slot19;
                            var2 = var2.bind(var0)(var3);
                            _fun111281_ip = 66;
                            continue _fun111281;
                        case 53:
                            var2 = _closure2_slot19;
                            var1 = _closure2_slot2;
                            var1 = var2.bind(var0)(var1);
                        case 66:
                            return var0;
                    }
                };
            case 1418:
                var1.onDoubleTap = var5;
                var5 = null;
                var6 = var5 != var6;
                var5 = undefined;
                if (!var6) {
                    _fun111266_ip = 1441;
                    continue _fun111266
                }
            case 1434:
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 52;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var4 = _closure2_slot26;
                    var0.userId = var4;
                    var4 = _closure2_slot8;
                    var0.channelId = var4;
                    var4 = true;
                    var0.isVoiceContext = var4;
                    var3 = _closure2_slot7;
                    var0.sourceAnalyticsLocations = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
            case 1441:
                var1.onLongPress = var5;
                var5 = var2.bind(var3)(var1);
                var1 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = var12[var25];
                var8 = var1.bind(var3)(var2);
                var6 = var8.useSharedValue;
                var2 = false;
                var22 = var6.bind(var8)(var2);
                _closure2_slot32 = var22;
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var2 = function arg0() {
                    _fun111283: for (var _fun111283_ip = 0;;) switch (_fun111283_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot32;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            if (!var0) {
                                _fun111283_ip = 405;
                                continue _fun111283
                            }
                        case 25:
                            var0 = _closure2_slot31;
                            if (var0) {
                                _fun111283_ip = 405;
                                continue _fun111283
                            }
                        case 35:
                            var1 = _closure2_slot16;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun111283_ip = 92;
                                continue _fun111283
                            }
                        case 45:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 16;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.measure;
                            var1 = _closure2_slot16;
                            var2 = var2.bind(var4)(var1);
                            if (!(var0 == var2)) {
                                _fun111283_ip = 341;
                                continue _fun111283
                            }
                        case 92:
                            var1 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 49;
                            var0 = var4[var0];
                            var5 = undefined;
                            var4 = var1.bind(var5)(var0);
                            var1 = var4.getClampedPIPPosition;
                            var0 = {};
                            var8 = _closure2_slot22;
                            var7 = var8.get;
                            var7 = var7.bind(var8)();
                            var7 = var7.pipX;
                            var0.pipX = var7;
                            var7 = var8.get;
                            var7 = var7.bind(var8)();
                            var7 = var7.pipY;
                            var0.pipY = var7;
                            var7 = var3.currentWidth;
                            var0.width = var7;
                            var7 = var3.currentHeight;
                            var0.height = var7;
                            var8 = _closure2_slot21;
                            var7 = var8.get;
                            var7 = var7.bind(var8)();
                            var0.windowDimensions = var7;
                            var8 = _closure2_slot17;
                            var7 = var8.get;
                            var7 = var7.bind(var8)();
                            var0.safeArea = var7;
                            var8 = _closure2_slot15;
                            var7 = var8.get;
                            var7 = var7.bind(var8)();
                            var7 = var7.bottom;
                            var0.bottomAvoidanceRegion = var7;
                            var7 = var8.get;
                            var7 = var7.bind(var8)();
                            var7 = var7.top;
                            var0.topAvoidanceRegion = var7;
                            var0.positionOffset = var5;
                            var1 = var1.bind(var4)(var0);
                            var0 = var1.x;
                            var4 = var1.y;
                            var1 = {};
                            var1.originX = var0;
                            var5 = _closure2_slot18;
                            var0 = var5.get;
                            var0 = var0.bind(var5)();
                            var0 = var0 + var4;
                            var1.originY = var0;
                            var0 = var3.currentWidth;
                            var1.width = var0;
                            var0 = var3.currentHeight;
                            var1.height = var0;
                            _fun111283_ip = 465;
                            continue _fun111283;
                        case 341:
                            var0 = {};
                            var4 = var2.pageX;
                            var0.originX = var4;
                            var5 = _closure2_slot18;
                            var4 = var5.get;
                            var5 = var4.bind(var5)();
                            var4 = var2.pageY;
                            var4 = var5 + var4;
                            var0.originY = var4;
                            var4 = var2.width;
                            var0.width = var4;
                            var2 = var2.height;
                            var0.height = var2;
                            var1 = var0;
                            _fun111283_ip = 465;
                            continue _fun111283;
                        case 405:
                            var2 = _closure2_slot32;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var0 = {};
                            var2 = var3.currentOriginX;
                            var0.originX = var2;
                            var2 = var3.currentOriginY;
                            var0.originY = var2;
                            var2 = var3.currentWidth;
                            var0.width = var2;
                            var2 = var3.currentHeight;
                            var0.height = var2;
                            var1 = var0;
                        case 465:
                            var4 = _closure2_slot32;
                            var2 = var4.set;
                            var0 = _closure2_slot31;
                            var0 = var2.bind(var4)(var0);
                            var0 = {};
                            var2 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 40;
                            var7 = var9[var4];
                            var5 = undefined;
                            var12 = var8.bind(var5)(var7);
                            var11 = var12.withSpring;
                            var10 = var3.targetOriginX;
                            var7 = _closure2_slot5;
                            var6 = 'animate-always';
                            var10 = var11.bind(var12)(var10, var7, var6);
                            var2.originX = var10;
                            var10 = var9[var4];
                            var12 = var8.bind(var5)(var10);
                            var11 = var12.withSpring;
                            var10 = var3.targetOriginY;
                            var10 = var11.bind(var12)(var10, var7, var6);
                            var2.originY = var10;
                            var10 = var9[var4];
                            var12 = var8.bind(var5)(var10);
                            var11 = var12.withSpring;
                            var10 = var3.targetWidth;
                            var10 = var11.bind(var12)(var10, var7, var6);
                            var2.width = var10;
                            var4 = var9[var4];
                            var5 = var8.bind(var5)(var4);
                            var4 = var5.withSpring;
                            var3 = var3.targetHeight;
                            var3 = var4.bind(var5)(var3, var7, var6);
                            var2.height = var3;
                            var0.animations = var2;
                            var0.initialValues = var1;
                            var1 = function() {
                                _fun111284: for (var _fun111284_ip = 0;;) switch (_fun111284_ip) {
                                    case 0:
                                        var2 = _closure2_slot23;
                                        var1 = var2.get;
                                        var2 = var1.bind(var2)();
                                        var1 = var2.gestureActive;
                                        if (var1) {
                                            _fun111284_ip = 36;
                                            continue _fun111284
                                        }
                                    case 25:
                                        var3 = var2.y;
                                        var2 = 0;
                                        var1 = var2 === var3;
                                    case 36:
                                        if (var1) {
                                            _fun111284_ip = 67;
                                            continue _fun111284
                                        }
                                    case 39:
                                        var2 = _closure2_slot23;
                                        var1 = var2.set;
                                        var0 = {
                                            'gestureActive': false,
                                            'x': 0,
                                            'y': 0
                                        };
                                        var0 = var1.bind(var2)(var0);
                                    case 67:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.callback = var1;
                            return var0;
                    }
                };
                var0 = {};
                var0.wasPip = var22;
                var0.isPIP = var21;
                var0.pipContainerRef = var19;
                var25 = var12[var25];
                var25 = var1.bind(var3)(var25);
                var25 = var25.measure;
                var0.measure = var25;
                var0.scrollPosition = var14;
                var24 = var12[var24];
                var24 = var1.bind(var3)(var24);
                var24 = var24.getClampedPIPPosition;
                var0.getClampedPIPPosition = var24;
                var0.wrapperDimensions = var18;
                var0.windowDimensions = var17;
                var0.safeArea = var16;
                var0.pipAvoidanceSpecs = var15;
                var23 = var12[var23];
                var23 = var1.bind(var3)(var23);
                var23 = var23.withSpring;
                var0.withSpring = var23;
                var0.layoutPhysics = var20;
                var0.wrapperOffset = var13;
                var2.__closure = var0;
                var0 = 14909107358512.0;
                var2.__workletHash = var0;
                var0 = _closure1_slot55;
                var2.__initData = var0;
                var0 = new Array(10);
                var0[0] = var22;
                var0[1] = var21;
                var0[2] = var20;
                var0[3] = var19;
                var0[4] = var18;
                var0[5] = var17;
                var0[6] = var16;
                var0[7] = var15;
                var0[8] = var14;
                var0[9] = var13;
                var8 = var6.bind(var8)(var2, var0);
                var2 = _closure1_slot22;
                var0 = 53;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.GestureDetector;
                var0 = {};
                var0.gesture = var5;
                var6 = _closure1_slot22;
                var5 = _closure1_slot1;
                var4 = 41;
                var4 = var12[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var12 = var9.positionWrapper;
                var9 = new Array(3);
                var9[0] = var12;
                var9[1] = var11;
                var9[2] = var10;
                var4.style = var9;
                var4.layout = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot60 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var7 = 0;
    var3 = var5[var7];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.StyleSheet;
    var _closure1_slot5 = var13;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.VoicePanelCTACard;
    var _closure1_slot11 = var8;
    var8 = var3.VoicePanelModes;
    var _closure1_slot12 = var8;
    var8 = var3.MODE_CHANGE_PHYSICS;
    var _closure1_slot13 = var8;
    var8 = var3.SPEAKING_PHYSICS;
    var _closure1_slot14 = var8;
    var3 = var3.VoicePanelCardItemType;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelControlsModes;
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelPIPModes;
    var _closure1_slot17 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EDGE_GUTTER;
    var _closure1_slot18 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ApplicationStreamStates;
    var _closure1_slot19 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot20 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.SCALE_PHYSICS;
    var _closure1_slot21 = var8;
    var3 = 15;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.jsx;
    var _closure1_slot22 = var9;
    var9 = var3.Fragment;
    var _closure1_slot23 = var9;
    var3 = var3.jsxs;
    var _closure1_slot24 = var3;
    var3 = 16;
    var3 = var5[var3];
    var10 = var12.bind(var0)(var3);
    var9 = var10.createAnimatedComponent;
    var3 = 17;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Text;
    var3 = var9.bind(var10)(var3);
    var _closure1_slot25 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.AVATAR_SIZE_MAP;
    var3 = 19;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AvatarSizes;
    var3 = var3.XXLARGE;
    var11 = var9[var3];
    var3 = {};
    var19 = var3;
    var18 = var8;
    var8 = copyDataProperties(var19, var18);
    var9 = 150;
    var8 = 'stiffness';
    var3[var8] = var9;
    var _closure1_slot26 = var3;
    var3 = {};
    var8 = 200;
    var3.duration = var8;
    var _closure1_slot27 = var3;
    var3 = {};
    var3.duration = var7;
    var _closure1_slot28 = var3;
    var3 = 0.75;
    var _closure1_slot29 = var3;
    var3 = 20;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'overflow': 'hidden'
    };
    var14 = 'hidden';
    var10 = 21;
    var15 = var5[var10];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BLACK;
    var9.backgroundColor = var15;
    var3.positionWrapper = var9;
    var9 = {
        'position': 'absolute',
        'top': 4294967292,
        'left': 4294967292,
        'bottom': 4294967292,
        'right': 4294967292,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var15 = var5[var10];
    var15 = var12.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.PRIMARY_800;
    var9.backgroundColor = var15;
    var3.userRoundedCard = var9;
    var9 = {
        'position': 'absolute',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '100%',
        'height': '100%'
    };
    var15 = var5[var10];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.VOICE_VIDEO_VIDEO_TILE_BACKGROUND;
    var9.backgroundColor = var15;
    var3.nonUserRoundedCard = var9;
    var9 = {};
    var18 = var13.absoluteFillObject;
    var19 = var9;
    var15 = copyDataProperties(var19, var18);
    var16 = 'black';
    var15 = 'backgroundColor';
    var9[var15] = var16;
    var3.blackBackground = var9;
    var9 = {
        'width': 200,
        'marginBottom': 40
    };
    var3.selfStreamHeaderImage = var9;
    var9 = {
        'textAlign': 'center',
        'marginTop': 4,
        'marginBottom': 40
    };
    var3.selfStreamFocusedSubtitle = var9;
    var9 = {
        'position': 'relative',
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var15 = var5[var10];
    var15 = var12.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var9.borderRadius = var15;
    var3.avatarImageMaskStyles = var9;
    var9 = {};
    var9.width = var11;
    var9.height = var11;
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var9.borderRadius = var11;
    var11 = 'rgba(0,0,0,0.3)';
    var9.backgroundColor = var11;
    var3.avatarPlaceholder = var9;
    var9 = {
        'maxWidth': 80,
        'maxHeight': 80
    };
    var3.image = var9;
    var9 = {};
    var18 = var13.absoluteFillObject;
    var19 = var9;
    var11 = copyDataProperties(var19, var18);
    var11 = 'overflow';
    var9[var11] = var14;
    var3.speakingIndicatorWrapper = var9;
    var9 = {};
    var18 = var13.absoluteFillObject;
    var19 = var9;
    var11 = copyDataProperties(var19, var18);
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var14 = var11.BLACK;
    var11 = 'borderColor';
    var9[var11] = var14;
    var3.speakingIndicatorUnderlay = var9;
    var9 = {};
    var18 = var13.absoluteFillObject;
    var19 = var9;
    var13 = copyDataProperties(var19, var18);
    var10 = var5[var10];
    var10 = var12.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.GREEN_360;
    var9[var11] = var10;
    var3.speakingIndicatorGreenBar = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot30 = var3;
    var3 = {};
    var7 = "function VoicePanelCardTsx1(){const{isFocused,sharedCoords}=this.__closure;return{textAlign:'center',paddingHorizontal:16,paddingVertical:isFocused?0:16,width:isFocused?'auto':sharedCoords.get().width};}";
    var3.code = var7;
    var _closure1_slot31 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardTsx2(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}';
    var3.code = var7;
    var _closure1_slot32 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardTsx3(isFocused,lastIsFocused){const{runOnJS,setIsFocused}=this.__closure;if(isFocused!==lastIsFocused){runOnJS(setIsFocused)(isFocused);}}';
    var3.code = var7;
    var _closure1_slot33 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun111285: for (var _fun111285_ip = 0;;) switch (_fun111285_ip) {
            case 0:
                var0 = arg0;
                var22 = var0.id;
                var _closure2_slot0 = var22;
                var19 = var0.userId;
                var _closure2_slot1 = var19;
                var21 = var0.streamId;
                var5 = var0.streamGuildId;
                var _closure2_slot2 = var5;
                var24 = var0.userNick;
                var1 = var0.isSelf;
                var6 = var0.sharedCoords;
                var18 = var0.isScrollVisible;
                var8 = var0.layout;
                var10 = _closure1_slot4;
                var9 = var10.useContext;
                var7 = _closure1_slot1;
                var14 = _closure1_slot2;
                var3 = 29;
                var4 = var14[var3];
                var3 = undefined;
                var4 = var7.bind(var3)(var4);
                var4 = var9.bind(var10)(var4);
                var26 = var4.focused;
                var _closure2_slot3 = var26;
                var11 = var4.mode;
                var4 = var4.setFocused;
                var _closure2_slot4 = var4;
                var12 = _closure1_slot0;
                var9 = 30;
                var9 = var14[var9];
                var15 = var12.bind(var3)(var9);
                var13 = var15.useStateFromStoresObject;
                var9 = _closure1_slot6;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = new Array(2);
                var9[0] = var19;
                var9[1] = var5;
                var5 = function() { // Environment: var2
                    var0 = {};
                    var4 = _closure1_slot6;
                    var1 = var4.getStreamForUser;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = var1.bind(var4)(var3, var2);
                    var0.stream = var1;
                    var1 = var4.getActiveStreamForUser;
                    var1 = var1.bind(var4)(var3, var2);
                    var0.activeStream = var1;
                    return var0;
                };
                var9 = var13.bind(var15)(var10, var5, var9);
                var5 = var9.stream;
                var _closure2_slot5 = var5;
                var13 = var9.activeStream;
                var15 = _closure1_slot4;
                var10 = var15.useCallback;
                var9 = new Array(2);
                var9[0] = var5;
                var9[1] = var4;
                var4 = function() { // Environment: var2
                    _fun111287: for (var _fun111287_ip = 0;;) switch (_fun111287_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun111287_ip = 95;
                                continue _fun111287
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 22;
                            var1 = var5[var1];
                            var2 = undefined;
                            var7 = var3.bind(var2)(var1);
                            var6 = var7.watchStream;
                            var4 = _closure2_slot5;
                            var1 = {};
                            var8 = true;
                            var1.forceMultiple = var8;
                            var1 = var6.bind(var7)(var4, var1);
                            var1 = _closure2_slot4;
                            var0 = 23;
                            var0 = var5[var0];
                            var3 = var3.bind(var2)(var0);
                            var0 = var3.encodeStreamKey;
                            var0 = var0.bind(var3)(var4);
                            var0 = var1.bind(var2)(var0);
                        case 95:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var10.bind(var15)(var4, var9);
                var15 = _closure1_slot4;
                var4 = var15.useState;
                var9 = false;
                var16 = var4.bind(var15)(var9);
                var15 = _closure1_slot3;
                var4 = 2;
                var16 = var15.bind(var3)(var16, var4);
                var4 = 0;
                var4 = var16[var4];
                var15 = 1;
                var23 = var16[var15];
                var _closure2_slot6 = var23;
                var25 = 16;
                var15 = var14[var25];
                var17 = var12.bind(var3)(var15);
                var16 = var17.useAnimatedReaction;
                var15 = function() {
                    _fun111288: for (var _fun111288_ip = 0;;) switch (_fun111288_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = null;
                            var3 = var1 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun111288_ip = 32;
                                continue _fun111288
                            }
                        case 27:
                            var1 = var2.id;
                        case 32:
                            var0 = _closure2_slot0;
                            var0 = var1 === var0;
                            return var0;
                    }
                };
                var20 = {};
                var20.focused = var26;
                var20.id = var22;
                var15.__closure = var20;
                var20 = 13061544667904.0;
                var15.__workletHash = var20;
                var20 = _closure1_slot32;
                var15.__initData = var20;
                var2 = function arg0, arg1() {
                    _fun111289: for (var _fun111289_ip = 0;;) switch (_fun111289_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            if (!(var2 !== var0)) {
                                _fun111289_ip = 57;
                                continue _fun111289
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 16;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var0);
                            var3 = var4.runOnJS;
                            var0 = _closure2_slot6;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.bind(var1)(var2);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var20 = {};
                var25 = var14[var25];
                var25 = var12.bind(var3)(var25);
                var25 = var25.runOnJS;
                var20.runOnJS = var25;
                var20.setIsFocused = var23;
                var2.__closure = var20;
                var20 = 8824446489251.0;
                var2.__workletHash = var20;
                var20 = _closure1_slot33;
                var2.__initData = var20;
                var2 = var16.bind(var17)(var15, var2);
                var2 = 31;
                var2 = var14[var2];
                var7 = var7.bind(var3)(var2);
                var2 = 32;
                var2 = var14[var2];
                var2 = var12.bind(var3)(var2);
                var2 = var2.MediaEngineContextTypes;
                var2 = var2.STREAM;
                var15 = var7.bind(var3)(var2, var19);
                if (var1) {
                    _fun111285_ip = 1267;
                    continue _fun111285
                }
            case 478:
                var20 = null;
                if (!(var20 != var13)) {
                    _fun111285_ip = 1205;
                    continue _fun111285
                }
            case 487:
                if (!(var20 == var15)) {
                    _fun111285_ip = 1110;
                    continue _fun111285
                }
            case 494:
                var2 = var13.state;
                var1 = _closure1_slot19;
                var1 = var1.FAILED;
                if (!(var2 !== var1)) {
                    _fun111285_ip = 1110;
                    continue _fun111285
                }
            case 516:
                var2 = var13.state;
                var1 = _closure1_slot19;
                var1 = var1.ENDED;
                if (!(var2 !== var1)) {
                    _fun111285_ip = 1020;
                    continue _fun111285
                }
            case 538:
                var2 = var13.state;
                var1 = _closure1_slot19;
                var1 = var1.RECONNECTING;
                if (!(var2 !== var1)) {
                    _fun111285_ip = 731;
                    continue _fun111285
                }
            case 560:
                var2 = var13.state;
                var1 = _closure1_slot19;
                var1 = var1.PAUSED;
                var14 = null;
                if (!(var2 === var1)) {
                    _fun111285_ip = 820;
                    continue _fun111285
                }
            case 584:
                var7 = _closure1_slot22;
                var16 = _closure1_slot0;
                var25 = _closure1_slot2;
                var1 = 35;
                var1 = var25[var1];
                var1 = var16.bind(var3)(var1);
                var2 = var1.StreamTextOverlay;
                var1 = {};
                var12 = 27;
                var17 = var25[var12];
                var17 = var16.bind(var3)(var17);
                var26 = var17.intl;
                var23 = var26.string;
                var17 = var25[var12];
                var17 = var16.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["5q17w5"];
                var17 = var23.bind(var26)(var17);
                var1.title = var17;
                var17 = var25[var12];
                var17 = var16.bind(var3)(var17);
                var23 = var17.intl;
                var17 = var23.formatToPlainString;
                var12 = var25[var12];
                var12 = var16.bind(var3)(var12);
                var12 = var12.t;
                var16 = var12.meVVlb;
                var12 = {};
                var12.username = var24;
                var12 = var17.bind(var23)(var16, var12);
                var1.subtext = var12;
                var14 = var7.bind(var3)(var2, var1);
                _fun111285_ip = 820;
                continue _fun111285;
            case 731:
                var7 = _closure1_slot22;
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var1 = 35;
                var1 = var24[var1];
                var1 = var23.bind(var3)(var1);
                var2 = var1.StreamTextOverlay;
                var1 = {};
                var12 = 27;
                var16 = var24[var12];
                var16 = var23.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var12 = var24[var12];
                var12 = var23.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["pdFFK+"];
                var12 = var16.bind(var17)(var12);
                var1.title = var12;
                var14 = var7.bind(var3)(var2, var1);
            case 820:
                var7 = _closure1_slot24;
                var2 = _closure1_slot23;
                var1 = {};
                var17 = _closure1_slot22;
                var16 = _closure1_slot1;
                var23 = _closure1_slot2;
                var12 = 36;
                var12 = var23[var12];
                var16 = var16.bind(var3)(var12);
                var12 = {};
                var12.layout = var8;
                var12.id = var22;
                var22 = var20 != var21;
                var20 = null;
                if (!var22) {
                    _fun111285_ip = 877;
                    continue _fun111285
                }
            case 874:
                var20 = var21;
            case 877:
                var12.streamId = var20;
                var12.userId = var19;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var21 = 23;
                var21 = var20[var21];
                var22 = var19.bind(var3)(var21);
                var21 = var22.encodeStreamKey;
                var21 = var21.bind(var22)(var13);
                var12.streamKey = var21;
                var12.isScrollVisible = var18;
                var18 = 37;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.VideoSpinnerContext;
                var18 = var18.REMOTE_STREAM;
                var12.videoSpinnerContext = var18;
                var12.sharedCoords = var6;
                var12.isCamera = var9;
                var19 = var13.state;
                var18 = _closure1_slot19;
                var18 = var18.PAUSED;
                var18 = var19 === var18;
                var12.paused = var18;
                var16 = var17.bind(var3)(var16, var12);
                var12 = new Array(2);
                var12[0] = var16;
                var12[1] = var14;
                var1.children = var12;
                var1 = var7.bind(var3)(var2, var1);
                return var1;
            case 1020:
                var7 = _closure1_slot22;
                var2 = _closure1_slot1;
                var16 = _closure1_slot2;
                var12 = 34;
                var1 = var16[var12];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.stream = var13;
                var14 = !var4;
                var1.removeSplashImage = var14;
                var14 = _closure1_slot0;
                var12 = var16[var12];
                var12 = var14.bind(var3)(var12);
                var12 = var12.VideoEmptyTypes;
                var12 = var12.STREAM_ENDED;
                var1.type = var12;
                var12 = _closure1_slot5;
                var12 = var12.absoluteFill;
                var1.style = var12;
                var1 = var7.bind(var3)(var2, var1);
                return var1;
            case 1110:
                var7 = _closure1_slot22;
                var2 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 34;
                var1 = var14[var12];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.avError = var15;
                var1.stream = var13;
                var13 = !var4;
                var1.removeSplashImage = var13;
                var13 = _closure1_slot0;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.VideoEmptyTypes;
                var12 = var12.STREAM_FAILED;
                var1.type = var12;
                var12 = _closure1_slot5;
                var12 = var12.absoluteFill;
                var1.style = var12;
                var1 = var7.bind(var3)(var2, var1);
                return var1;
            case 1205:
                var7 = _closure1_slot22;
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 33;
                var1 = var12[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.VoicePanelStreamPreview;
                var1 = {};
                var1.mode = var11;
                var1.stream = var5;
                var1.onPress = var10;
                var1.disabled = var9;
                var1.layout = var8;
                var1 = var7.bind(var3)(var2, var1);
                return var1;
            case 1267:
                var2 = _closure1_slot22;
                var1 = _closure1_slot58;
                var0 = {};
                var0.sharedCoords = var6;
                var0.stream = var5;
                var0.isFocused = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot34 = var3;
    var3 = {};
    var7 = "function VoicePanelCardTsx4(){const{withTiming,isRinging,CONNECTING_OPACITY,backgroundColor}=this.__closure;return{opacity:withTiming(isRinging?CONNECTING_OPACITY:1,{duration:100},'animate-always'),backgroundColor:backgroundColor};}";
    var3.code = var7;
    var _closure1_slot35 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardTsx5(){const{withSpring,mode,VoicePanelModes,layoutPhysics}=this.__closure;return{transform:[{scale:withSpring(mode.get()===VoicePanelModes.PIP?64/80:1,layoutPhysics)}]};}';
    var3.code = var7;
    var _closure1_slot36 = var3;
    var7 = var6.memo;
    var3 = function arg0() {
        _fun111290: for (var _fun111290_ip = 0;;) switch (_fun111290_ip) {
            case 0:
                var1 = arg0;
                var19 = var1.isRinging;
                var _closure2_slot0 = var19;
                var10 = var1.layout;
                var2 = var1.avatarURI;
                var13 = var1.avatarDecoration;
                var9 = var1.isRTCConnected;
                var12 = var1.layoutPhysics;
                var _closure2_slot1 = var12;
                var1 = _closure1_slot30;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var6 = _closure1_slot4;
                var4 = var6.useContext;
                var7 = _closure1_slot1;
                var17 = _closure1_slot2;
                var1 = 29;
                var1 = var17[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var4.bind(var6)(var1);
                var14 = var1.mode;
                var _closure2_slot2 = var14;
                var16 = _closure1_slot0;
                var6 = 38;
                var1 = var17[var6];
                var4 = var16.bind(var3)(var1);
                var1 = var4.useDominantColorFromImage;
                var18 = var1.bind(var4)(var2);
                var _closure2_slot3 = var18;
                var1 = 16;
                var4 = var17[var1];
                var11 = var16.bind(var3)(var4);
                var7 = var11.useAnimatedStyle;
                var4 = function() {
                    _fun111291: for (var _fun111291_ip = 0;;) switch (_fun111291_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 39;
                            var3 = var3[var1];
                            var1 = undefined;
                            var6 = var4.bind(var1)(var3);
                            var5 = var6.withTiming;
                            var3 = _closure2_slot0;
                            var4 = 1;
                            if (!var3) {
                                _fun111291_ip = 49;
                                continue _fun111291
                            }
                        case 45:
                            var4 = _closure1_slot29;
                        case 49:
                            var3 = {};
                            var2 = 100;
                            var3.duration = var2;
                            var2 = 'animate-always';
                            var2 = var5.bind(var6)(var4, var3, var2);
                            var0.opacity = var2;
                            var1 = _closure2_slot3;
                            var0.backgroundColor = var1;
                            return var0;
                    }
                };
                var15 = {};
                var20 = 39;
                var20 = var17[var20];
                var20 = var16.bind(var3)(var20);
                var20 = var20.withTiming;
                var15.withTiming = var20;
                var15.isRinging = var19;
                var19 = _closure1_slot29;
                var15.CONNECTING_OPACITY = var19;
                var15.backgroundColor = var18;
                var4.__closure = var15;
                var15 = 6200022645373.0;
                var4.__workletHash = var15;
                var15 = _closure1_slot35;
                var4.__initData = var15;
                var7 = var7.bind(var11)(var4);
                var1 = var17[var1];
                var4 = var16.bind(var3)(var1);
                var1 = var4.useAnimatedStyle;
                var0 = function() {
                    _fun111292: for (var _fun111292_ip = 0;;) switch (_fun111292_ip) {
                        case 0:
                            var0 = {};
                            var2 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 40;
                            var4 = var4[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.withSpring;
                            var7 = _closure2_slot2;
                            var6 = var7.get;
                            var7 = var6.bind(var7)();
                            var3 = _closure1_slot12;
                            var6 = var3.PIP;
                            var3 = 1;
                            if (!(var7 === var6)) {
                                _fun111292_ip = 77;
                                continue _fun111292
                            }
                        case 67:
                            var3 = 0.8;
                        case 77:
                            var1 = _closure2_slot1;
                            var1 = var4.bind(var5)(var3, var1);
                            var2.scale = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var11 = {};
                var15 = 40;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.withSpring;
                var11.withSpring = var15;
                var11.mode = var14;
                var14 = _closure1_slot12;
                var11.VoicePanelModes = var14;
                var11.layoutPhysics = var12;
                var0.__closure = var11;
                var11 = 5040632730576.0;
                var0.__workletHash = var11;
                var11 = _closure1_slot36;
                var0.__initData = var11;
                var12 = var1.bind(var4)(var0);
                var4 = null;
                var0 = var4 != var2;
                var15 = undefined;
                if (!var0) {
                    _fun111290_ip = 379;
                    continue _fun111290
                }
            case 351:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getCachedSourceFromURI;
                var15 = var0.bind(var1)(var2);
            case 379:
                var2 = _closure1_slot22;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var11 = 41;
                var0 = var0[var11];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var14 = var8.userRoundedCard;
                var6 = new Array(2);
                var6[0] = var14;
                var6[1] = var7;
                var0.style = var6;
                var0.layout = var10;
                if (!(var4 != var15)) {
                    _fun111290_ip = 636;
                    continue _fun111290
                }
            case 439:
                if (!var9) {
                    _fun111290_ip = 446;
                    continue _fun111290
                }
            case 442:
                var9 = var4 != var13;
            case 446:
                var7 = _closure1_slot22;
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var11];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var14 = undefined;
                if (var9) {
                    _fun111290_ip = 480;
                    continue _fun111290
                }
            case 474:
                var14 = var8.avatarImageMaskStyles;
            case 480:
                var11 = new Array(2);
                var11[0] = var14;
                var11[1] = var12;
                var4.style = var11;
                var4.layout = var10;
                var12 = _closure1_slot22;
                var11 = _closure1_slot1;
                var16 = _closure1_slot2;
                if (var9) {
                    _fun111290_ip = 566;
                    continue _fun111290
                }
            case 516:
                var9 = 25;
                var9 = var16[var9];
                var10 = var11.bind(var3)(var9);
                var9 = {
                    'source': null,
                    'resizeMode': 'stretch',
                    'width': 80,
                    'height': 80
                };
                var9.source = var15;
                var14 = var8.image;
                var9.style = var14;
                var9 = var12.bind(var3)(var10, var9);
                _fun111290_ip = 624;
                continue _fun111290;
            case 566:
                var14 = 19;
                var10 = var16[var14];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.source = var15;
                var15 = _closure1_slot0;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.AvatarSizes;
                var14 = var14.XXLARGE;
                var10.size = var14;
                var10.avatarDecoration = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 624:
                var4.children = var9;
                var4 = var7.bind(var3)(var6, var4);
                _fun111290_ip = 678;
                continue _fun111290;
            case 636:
                var7 = _closure1_slot22;
                var6 = _closure1_slot1;
                var9 = _closure1_slot2;
                var5 = 24;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var8 = var8.avatarPlaceholder;
                var5.style = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 678:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot37 = var3;
    var3 = {};
    var7 = "function VoicePanelCardTsx6(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,SPEAKING_PHYSICS}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()!==VoicePanelModes.PIP&&((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{opacity:disable?0:1,borderRadius:withSpring(disable?0:computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf}),SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}";
    var3.code = var7;
    var _closure1_slot38 = var3;
    var3 = {};
    var7 = "function VoicePanelCardTsx7(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,SPEAKING_PHYSICS,speaking,roundToNearestPixel,SPEAKING_BORDER_SIZE,SPEAKING_INSET}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speaking.get()?roundToNearestPixel(SPEAKING_BORDER_SIZE+SPEAKING_INSET):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}";
    var3.code = var7;
    var _closure1_slot39 = var3;
    var3 = {};
    var7 = "function VoicePanelCardTsx8(){const{mode,VoicePanelModes,focused,id,withSpring,computeCardBorderRadius,isSelf,SPEAKING_PHYSICS,speaking,SPEAKING_BORDER_SIZE}=this.__closure;var _focused$get,_focused$get2;const disable=mode.get()===VoicePanelModes.PIP||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;return{borderRadius:withSpring(!disable?computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf}):0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never'),borderWidth:withSpring(!disable&&speaking.get()?SPEAKING_BORDER_SIZE:0,SPEAKING_PHYSICS,!disable?'animate-always':'animate-never')};}";
    var3.code = var7;
    var _closure1_slot40 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun111293: for (var _fun111293_ip = 0;;) switch (_fun111293_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useState;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot10;
                    var1 = var2.isSpeaking;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var3.bind(var4)(var2);
                var3 = _closure1_slot3;
                var4 = undefined;
                var2 = 2;
                var6 = var3.bind(var4)(var6, var2);
                var2 = 0;
                var2 = var6[var2];
                var _closure2_slot1 = var2;
                var3 = 1;
                var3 = var6[var3];
                var _closure2_slot2 = var3;
                var8 = var5.id;
                var _closure2_slot3 = var8;
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var3 = new Array(2);
                var3[0] = var2;
                var3[1] = var8;
                var0 = function() { // Environment: var0
                    _fun111295: for (var _fun111295_ip = 0;;) switch (_fun111295_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun111295_ip = 40;
                                continue _fun111295
                            }
                        case 10:
                            var3 = _closure1_slot10;
                            var2 = var3.addConditionalChangeListener;
                            var1 = function() { // Environment: var0
                                _fun111296: for (var _fun111296_ip = 0;;) switch (_fun111296_ip) {
                                    case 0:
                                        var3 = _closure1_slot10;
                                        var2 = var3.isSpeaking;
                                        var0 = _closure2_slot3;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = !var0;
                                        if (var0) {
                                            _fun111296_ip = 46;
                                            continue _fun111296
                                        }
                                    case 31:
                                        var3 = _closure2_slot2;
                                        var2 = undefined;
                                        var1 = true;
                                        var1 = var3.bind(var2)(var1);
                                        var0 = false;
                                    case 46:
                                        return var0;
                                }
                            };
                            var0 = false;
                            var0 = var2.bind(var3)(var1, var0);
                        case 40:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var6.bind(var7)(var0, var3);
                var0 = null;
                if (!var2) {
                    _fun111293_ip = 143;
                    continue _fun111293
                }
            case 117:
                var3 = _closure1_slot22;
                var2 = _closure1_slot59;
                var1 = {};
                var11 = var1;
                var10 = var5;
                var5 = copyDataProperties(var11, var10);
                var0 = var3.bind(var4)(var2, var1);
            case 143:
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot41 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardTsx9(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}';
    var3.code = var7;
    var _closure1_slot42 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardTsx10(focusedId,previous){const{runOnJS,handleFocusedParticipantChange}=this.__closure;if(focusedId===previous)return;runOnJS(handleFocusedParticipantChange)(focusedId);}';
    var3.code = var7;
    var _closure1_slot43 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardTsx11(){const{mode,focused,sharedTransitionState}=this.__closure;return{mode:mode.get(),focused:focused.get(),transitionState:sharedTransitionState.get()};}';
    var3.code = var7;
    var _closure1_slot44 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardTsx12(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,TransitionStates,sharedVisible,isScrollVisible,runOnJS,cleanUp,id}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,focused:focused,transitionState:transitionState}=props;const isPIPMode=mode===VoicePanelModes.PIP;const manuallyFocusedId=focused===null||focused===void 0?void 0:focused.id;if(previous==null&&transitionState!==TransitionStates.YEETED){sharedVisible.set(1);}else if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1&&isScrollVisible.get()){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else if((previous===null||previous===void 0?void 0:previous.transitionState)===TransitionStates.YEETED){sharedVisible.set(1);}else if(!isPIPMode){if(manuallyFocusedId==null){sharedVisible.set(1);}else{if(manuallyFocusedId!==id){sharedVisible.set(0);}else{sharedVisible.set(1);}}}}';
    var3.code = var7;
    var _closure1_slot45 = var3;
    var3 = {
        'isSelf': false,
        'hasVideo': false
    };
    var7 = {};
    var7.id = var0;
    var3.user = var7;
    var _closure1_slot46 = var3;
    var3 = {};
    var7 = "function layoutTransitionFunction_VoicePanelCardTsx13(values,physics,disableAnimation=false){const{withSpring}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,physics,!disableAnimation?'animate-always':'animate-never'),originY:withSpring(values.targetOriginY,physics,!disableAnimation?'animate-always':'animate-never'),width:withSpring(values.targetWidth,physics,!disableAnimation?'animate-always':'animate-never'),height:withSpring(values.targetHeight,physics,!disableAnimation?'animate-always':'animate-never')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}";
    var3.code = var7;
    var _closure1_slot47 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            _fun111298: for (var _fun111298_ip = 0;;) switch (_fun111298_ip) {
                case 0:
                    var2 = arg0;
                    var7 = arg1;
                    var8 = arguments[2];
                    var5 = undefined;
                    if (!(var8 === var5)) {
                        _fun111298_ip = 17;
                        continue _fun111298
                    }
                case 15:
                    var8 = false;
                case 17:
                    var0 = {};
                    var1 = {};
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var9 = 40;
                    var4 = var4[var9];
                    var12 = var6.bind(var5)(var4);
                    var11 = var12.withSpring;
                    var10 = var2.targetOriginX;
                    var6 = 'animate-always';
                    var4 = var6;
                    if (!var8) {
                        _fun111298_ip = 73;
                        continue _fun111298
                    }
                case 67:
                    var4 = 'animate-never';
                case 73:
                    var4 = var11.bind(var12)(var10, var7, var4);
                    var1.originX = var4;
                    var10 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var12 = var10.bind(var5)(var4);
                    var11 = var12.withSpring;
                    var10 = var2.targetOriginY;
                    var4 = var6;
                    if (!var8) {
                        _fun111298_ip = 125;
                        continue _fun111298
                    }
                case 119:
                    var4 = 'animate-never';
                case 125:
                    var4 = var11.bind(var12)(var10, var7, var4);
                    var1.originY = var4;
                    var10 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var9];
                    var12 = var10.bind(var5)(var4);
                    var11 = var12.withSpring;
                    var10 = var2.targetWidth;
                    var4 = var6;
                    if (!var8) {
                        _fun111298_ip = 177;
                        continue _fun111298
                    }
                case 171:
                    var4 = 'animate-never';
                case 177:
                    var4 = var11.bind(var12)(var10, var7, var4);
                    var1.width = var4;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var3 = var3[var9];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.withSpring;
                    var3 = var2.targetHeight;
                    if (!var8) {
                        _fun111298_ip = 225;
                        continue _fun111298
                    }
                case 219:
                    var6 = 'animate-never';
                case 225:
                    var3 = var4.bind(var5)(var3, var7, var6);
                    var1.height = var3;
                    var0.animations = var1;
                    var1 = {};
                    var3 = var2.currentOriginX;
                    var1.originX = var3;
                    var3 = var2.currentOriginY;
                    var1.originY = var3;
                    var3 = var2.currentWidth;
                    var1.width = var3;
                    var2 = var2.currentHeight;
                    var1.height = var2;
                    var0.initialValues = var1;
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 40;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.withSpring;
        var2.withSpring = var3;
        var0.__closure = var2;
        var2 = 4871152530917.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot47;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot48 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardTsx14(){const{id,pipState,mode,VoicePanelModes}=this.__closure;if(id===pipState.id&&mode.get()===VoicePanelModes.PIP){return true;}return false;}';
    var3.code = var7;
    var _closure1_slot49 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardTsx15(){const{focused,id,mode,VoicePanelModes,scrollPosition}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id||mode.get()===VoicePanelModes.PIP?scrollPosition.get():0;}';
    var3.code = var7;
    var _closure1_slot50 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardTsx16(){const{connected,EDGE_GUTTER,safeArea,windowDimensions,contentDimensions,wrapperDimensions}=this.__closure;return connected.get()?Math.max(EDGE_GUTTER,safeArea.get().left,(windowDimensions.get().width-contentDimensions.get().width)/2):wrapperDimensions.get().drawerWidth/2;}';
    var3.code = var7;
    var _closure1_slot51 = var3;
    var3 = {};
    var7 = "function VoicePanelCardTsx17(){const{coords,focused,id,isPIP,pipState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,derivedScrollValue,xOffset,calculateContentCenterOffset,contentDimensions,sharedTransitionState,TransitionStates,zIndexOverride,computeCardBorderRadius,mode,isSelf,sharedVisible,isRTCConnected,CONNECTING_OPACITY,withDelay,withTiming,ZINDEX_TIMING,OPACITY_TIMING,isScrollVisible,runOnJS,cleanUp,withSpring,SCALE_PHYSICS}=this.__closure;var _focused$get,_focused$get2,_focused$get3;let{zIndex:zIndex,width:width,height:height,x:x,y:y}=coords.get();const isFocused=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;if(isPIP){width=pipState.width;height=pipState.height;const pipHeight=!pipState.showSecondaryPIP?pipState.height:pipState.containerHeight;const pipPosition=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:pipHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top});x=pipPosition.x;y=derivedScrollValue.get()+pipPosition.y;}else if(focused.get()!=null){if(isFocused){zIndex=1;width=windowDimensions.get().width;height=windowDimensions.get().height;x=0;y=derivedScrollValue.get();}else{zIndex=0;}}else{x+=xOffset.get();y+=calculateContentCenterOffset({contentHeight:contentDimensions.get().height,windowHeight:windowDimensions.get().height,safeArea:safeArea.get()});if(sharedTransitionState.get()===TransitionStates.YEETED){y+=height/4;}}if(zIndexOverride.get()){zIndex=9001;}const borderRadius=computeCardBorderRadius({id:id,mode:mode.get(),focused:(_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id,isSelf:isSelf});const opacity=sharedVisible.get()===0&&((_focused$get3=focused.get())===null||_focused$get3===void 0?void 0:_focused$get3.id)!==id?0:!isFocused&&!isRTCConnected?CONNECTING_OPACITY:1;return{zIndex:withDelay(zIndexOverride.get()?0:100,withTiming(zIndex,ZINDEX_TIMING)),opacity:withTiming(opacity,OPACITY_TIMING,isScrollVisible.get()?'animate-always':'animate-never',function(finished){if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}),width:width,height:height,top:y,left:x,borderRadius:withSpring(borderRadius,SCALE_PHYSICS)};}";
    var3.code = var7;
    var _closure1_slot52 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardTsx18(finished){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var3.code = var7;
    var _closure1_slot53 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardTsx19(){const{withSpring,sharedVisible,focused,id,CARD_SCALE_PHYSICS}=this.__closure;var _focused$get;return{transform:[{scale:withSpring(sharedVisible.get()===1||((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id?1:0.8,CARD_SCALE_PHYSICS)}]};}';
    var3.code = var7;
    var _closure1_slot54 = var3;
    var3 = {};
    var7 = "function VoicePanelCardTsx20(values){const{wasPip,isPIP,pipContainerRef,measure,scrollPosition,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,withSpring,layoutPhysics,wrapperOffset}=this.__closure;const initialValues=function(){if(wasPip.get()&&!isPIP){if(pipContainerRef!=null){const data=measure(pipContainerRef);if(data!=null){return{originX:data.pageX,originY:scrollPosition.get()+data.pageY,width:data.width,height:data.height};}}const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:values.currentWidth,height:values.currentHeight,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:undefined});return{originX:x,originY:scrollPosition.get()+y,width:values.currentWidth,height:values.currentHeight};}else if(!wasPip.get()&&isPIP){return{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight};}return{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight};}();wasPip.set(isPIP);return{animations:{originX:withSpring(values.targetOriginX,layoutPhysics,'animate-always'),originY:withSpring(values.targetOriginY,layoutPhysics,'animate-always'),width:withSpring(values.targetWidth,layoutPhysics,'animate-always'),height:withSpring(values.targetHeight,layoutPhysics,'animate-always')},initialValues:initialValues,callback:function(){const _wrapperOffset=wrapperOffset.get();if(!_wrapperOffset.gestureActive&&_wrapperOffset.y!==0){wrapperOffset.set({gestureActive:false,x:0,y:0});}}};}";
    var3.code = var7;
    var _closure1_slot55 = var3;
    var3 = {};
    var7 = 'function VoicePanelCardTsx21(){const{EDGE_GUTTER,coords,scrollPosition,windowDimensions}=this.__closure;const yPos=EDGE_GUTTER+coords.get().y;return yPos>scrollPosition.get()-coords.get().height&&yPos<scrollPosition.get()+windowDimensions.get().height;}';
    var3.code = var7;
    var _closure1_slot56 = var3;
    var3 = {};
    var7 = 'function layoutTransition_VoicePanelCardTsx22(values,disableAnimation=false){const{layoutTransitionFunction,physics}=this.__closure;return layoutTransitionFunction(values,physics,disableAnimation);}';
    var3.code = var7;
    var _closure1_slot57 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun111299: for (var _fun111299_ip = 0;;) switch (_fun111299_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.item;
                var7 = var2.transitionState;
                var22 = var2.cleanUp;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var11 = var0.id;
                var9 = _closure1_slot4;
                var8 = var9.useContext;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = 29;
                var4 = var2[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var8.bind(var9)(var4);
                var30 = var4.channelId;
                var _closure2_slot0 = var30;
                var29 = var4.focused;
                var35 = var4.guildId;
                var25 = var4.isCall;
                var26 = var4.layoutManager;
                var15 = var4.mountedCards;
                var24 = var4.scrollPosition;
                var _closure2_slot1 = var24;
                var23 = var4.windowDimensions;
                var _closure2_slot2 = var23;
                var13 = 48;
                var4 = var2[var13];
                var4 = var5.bind(var3)(var4);
                var8 = var4.bind(var3)(var11, var30, var35);
                var4 = _closure1_slot0;
                var2 = var2[var13];
                var4 = var4.bind(var3)(var2);
                var2 = var4.isStableParticipantWithUser;
                var4 = var2.bind(var4)(var8);
                var2 = var8;
                if (var4) {
                    _fun111299_ip = 194;
                    continue _fun111299
                }
            case 190:
                var2 = _closure1_slot46;
            case 194:
                var10 = var2.isSelf;
                var2 = var2.user;
                var5 = var2.id;
                _closure2_slot3 = var5;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 30;
                var12 = var2[var9];
                var17 = var4.bind(var3)(var12);
                var16 = var17.useStateFromStores;
                var12 = _closure1_slot9;
                var14 = new Array(1);
                var14[0] = var12;
                var12 = function() { // Environment: var1
                    var1 = _closure1_slot9;
                    var0 = var1.isConnected;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var19 = var16.bind(var17)(var14, var12);
                var2 = var2[var13];
                var4 = var4.bind(var3)(var2);
                var2 = var4.isStableUserParticipant;
                var21 = var2.bind(var4)(var8);
                if (!var21) {
                    _fun111299_ip = 293;
                    continue _fun111299
                }
            case 287:
                var21 = var8.ringing;
            case 293:
                var16 = null;
                var2 = var16 != var8;
                var12 = '';
                var4 = var12;
                if (!var2) {
                    _fun111299_ip = 333;
                    continue _fun111299
                }
            case 309:
                var2 = 'user';
                var2 = var2 in var8;
                var4 = var12;
                if (!var2) {
                    _fun111299_ip = 333;
                    continue _fun111299
                }
            case 323:
                var2 = var8.user;
                var4 = var2.id;
            case 333:
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var2 = 31;
                var2 = var14[var2];
                var12 = var12.bind(var3)(var2);
                var2 = var16 == var8;
                var14 = undefined;
                if (var2) {
                    _fun111299_ip = 367;
                    continue _fun111299
                }
            case 362:
                var14 = var8.type;
            case 367:
                var2 = _closure1_slot20;
                var2 = var2.STREAM;
                if (!(var14 !== var2)) {
                    _fun111299_ip = 415;
                    continue _fun111299
                }
            case 381:
                var14 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 32;
                var2 = var17[var2];
                var2 = var14.bind(var3)(var2);
                var2 = var2.MediaEngineContextTypes;
                var2 = var2.DEFAULT;
                _fun111299_ip = 447;
                continue _fun111299;
            case 415:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 32;
                var14 = var18[var14];
                var14 = var17.bind(var3)(var14);
                var14 = var14.MediaEngineContextTypes;
                var2 = var14.STREAM;
            case 447:
                var27 = var12.bind(var3)(var2, var4);
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var2 = 54;
                var2 = var14[var2];
                var2 = var12.bind(var3)(var2);
                var2 = var2.bind(var3)(var4);
                var12 = _closure1_slot0;
                var4 = 55;
                var4 = var14[var4];
                var14 = var12.bind(var3)(var4);
                var12 = var14.useHangStatusExperiment;
                var4 = {};
                var4.guildId = var35;
                var17 = 'VoicePanelCard';
                var4.location = var17;
                var4 = var12.bind(var14)(var4);
                var18 = var4.enableHangStatus;
                var4 = var16 == var8;
                var14 = undefined;
                if (var4) {
                    _fun111299_ip = 541;
                    continue _fun111299
                }
            case 536:
                var14 = var8.type;
            case 541:
                var4 = _closure1_slot20;
                var12 = var4.USER;
                var4 = undefined;
                if (!(var14 === var12)) {
                    _fun111299_ip = 562;
                    continue _fun111299
                }
            case 557:
                var4 = var8.user;
            case 562:
                _closure2_slot4 = var4;
                var20 = _closure1_slot0;
                var28 = _closure1_slot2;
                var9 = var28[var9];
                var17 = var20.bind(var3)(var9);
                var14 = var17.useStateFromStores;
                var9 = _closure1_slot7;
                var12 = new Array(2);
                var12[0] = var9;
                var9 = _closure1_slot8;
                var12[1] = var9;
                var9 = new Array(2);
                var9[0] = var30;
                var9[1] = var4;
                var4 = function() { // Environment: var1
                    var4 = _closure1_slot7;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot0;
                    var5 = var3.bind(var4)(var2);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 56;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4._canSetVoiceChannelStatus;
                    var8 = _closure1_slot8;
                    var6 = _closure2_slot4;
                    var7 = true;
                    var10 = var4;
                    var9 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                    return var0;
                };
                var17 = var14.bind(var17)(var12, var4, var9);
                var14 = 16;
                var4 = var28[var14];
                var12 = var20.bind(var3)(var4);
                var9 = var12.useSharedValue;
                var4 = 45;
                var4 = var28[var4];
                var4 = var20.bind(var3)(var4);
                var4 = var4.TransitionStates;
                var4 = var4.MOUNTED;
                if (!(var7 !== var4)) {
                    _fun111299_ip = 695;
                    continue _fun111299
                }
            case 680:
                var4 = var15.has;
                var15 = var4.bind(var15)(var11);
                var4 = 0;
                if (!var15) {
                    _fun111299_ip = 698;
                    continue _fun111299
                }
            case 695:
                var4 = 1;
            case 698:
                var4 = var9.bind(var12)(var4);
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var14];
                var15 = var12.bind(var3)(var9);
                var12 = var15.useSharedValue;
                var9 = var16 != var5;
                if (!var9) {
                    _fun111299_ip = 748;
                    continue _fun111299
                }
            case 733:
                var28 = _closure1_slot10;
                var20 = var28.isSpeaking;
                var9 = var20.bind(var28)(var5);
            case 748:
                var12 = var12.bind(var15)(var9);
                _closure2_slot5 = var12;
                var20 = _closure1_slot4;
                var15 = var20.useLayoutEffect;
                var9 = new Array(2);
                var9[0] = var5;
                var9[1] = var12;
                var5 = function() { // Environment: var1
                    var3 = function() {
                        _fun111303: for (var _fun111303_ip = 0;;) switch (_fun111303_ip) {
                            case 0:
                                var2 = _closure2_slot5;
                                var1 = var2.set;
                                var4 = _closure2_slot3;
                                var0 = null;
                                var0 = var0 != var4;
                                if (!var0) {
                                    _fun111303_ip = 47;
                                    continue _fun111303
                                }
                            case 25:
                                var5 = _closure1_slot10;
                                var4 = var5.isSpeaking;
                                var3 = _closure2_slot3;
                                var0 = var4.bind(var5)(var3);
                            case 47:
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot0 = var3;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
                    var2 = _closure1_slot10;
                    var1 = var2.addReactChangeListener;
                    var1 = var1.bind(var2)(var3);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot10;
                        var1 = var2.removeReactChangeListener;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var5 = var15.bind(var20)(var5, var9);
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var15 = 57;
                var15 = var5[var15];
                var20 = var9.bind(var3)(var15);
                var15 = var20.useCardLayoutCoordsSubscription;
                var20 = var15.bind(var20)(var11, var26);
                _closure2_slot6 = var20;
                var5 = var5[var14];
                var14 = var9.bind(var3)(var5);
                var9 = var14.useDerivedValue;
                var5 = function() {
                    _fun111305: for (var _fun111305_ip = 0;;) switch (_fun111305_ip) {
                        case 0:
                            var2 = _closure1_slot18;
                            var3 = _closure2_slot6;
                            var0 = var3.get;
                            var0 = var0.bind(var3)();
                            var0 = var0.y;
                            var2 = var2 + var0;
                            var3 = _closure2_slot1;
                            var0 = var3.get;
                            var3 = var0.bind(var3)();
                            var4 = _closure2_slot6;
                            var0 = var4.get;
                            var0 = var0.bind(var4)();
                            var0 = var0.height;
                            var0 = var3 - var0;
                            var0 = var2 > var0;
                            if (!var0) {
                                _fun111305_ip = 113;
                                continue _fun111305
                            }
                        case 74:
                            var4 = _closure2_slot1;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var4 = _closure2_slot2;
                            var1 = var4.get;
                            var1 = var1.bind(var4)();
                            var1 = var1.height;
                            var1 = var3 + var1;
                            var0 = var2 < var1;
                        case 113:
                            return var0;
                    }
                };
                var15 = {};
                var26 = _closure1_slot18;
                var15.EDGE_GUTTER = var26;
                var15.coords = var20;
                var15.scrollPosition = var24;
                var15.windowDimensions = var23;
                var5.__closure = var15;
                var15 = 11720551113486.0;
                var5.__workletHash = var15;
                var15 = _closure1_slot56;
                var5.__initData = var15;
                var15 = var9.bind(var14)(var5);
                var14 = _closure1_slot4;
                var9 = var14.useMemo;
                var5 = function() { // Environment: var1
                    var3 = {};
                    var0 = _closure1_slot13;
                    var4 = var0.mass;
                    var3.mass = var4;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 58;
                    var7 = var6[var4];
                    var2 = undefined;
                    var9 = var5.bind(var2)(var7);
                    var7 = var0.damping;
                    var10 = 2;
                    var8 = var7 - var10;
                    var7 = var0.damping;
                    var7 = var7 + var10;
                    var7 = var9.bind(var2)(var8, var7);
                    var3.damping = var7;
                    var4 = var6[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = var0.stiffness;
                    var6 = 20;
                    var4 = var4 - var6;
                    var0 = var0.stiffness;
                    var0 = var0 + var6;
                    var0 = var5.bind(var2)(var4, var0);
                    var3.stiffness = var0;
                    var _closure3_slot0 = var3;
                    var0 = {};
                    var0.physics = var3;
                    var1 = function() { // Environment: var1
                        var0 = function arg0() {
                            _fun111308: for (var _fun111308_ip = 0;;) switch (_fun111308_ip) {
                                case 0:
                                    var4 = arguments[1];
                                    var3 = undefined;
                                    if (!(var4 === var3)) {
                                        _fun111308_ip = 11;
                                        continue _fun111308
                                    }
                                case 9:
                                    var4 = false;
                                case 11:
                                    var2 = _closure1_slot48;
                                    var1 = _closure3_slot0;
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var0, var1, var4);
                                    return var0;
                            }
                        };
                        var2 = {};
                        var3 = _closure1_slot48;
                        var2.layoutTransitionFunction = var3;
                        var3 = _closure3_slot0;
                        var2.physics = var3;
                        var0.__closure = var2;
                        var2 = 10795066381807.0;
                        var0.__workletHash = var2;
                        var1 = _closure1_slot57;
                        var0.__initData = var1;
                        return var0;
                    };
                    var1 = var1.bind(var2)();
                    var0.layoutTransition = var1;
                    return var0;
                };
                var1 = new Array(0);
                var1 = var9.bind(var14)(var5, var1);
                var14 = var1.physics;
                var9 = var1.layoutTransition;
                var5 = var0.type;
                var1 = _closure1_slot15;
                var1 = var1.CTA;
                if (!(var5 !== var1)) {
                    _fun111299_ip = 1626;
                    continue _fun111299
                }
            case 973:
                var5 = var0.type;
                var1 = _closure1_slot15;
                var1 = var1.PARTICIPANT;
                if (!(var5 === var1)) {
                    _fun111299_ip = 1659;
                    continue _fun111299
                }
            case 995:
                if (!(var16 != var8)) {
                    _fun111299_ip = 1659;
                    continue _fun111299
                }
            case 1002:
                var5 = var8.type;
                var1 = _closure1_slot20;
                var1 = var1.USER;
                if (!(var1 !== var5)) {
                    _fun111299_ip = 1214;
                    continue _fun111299
                }
            case 1024:
                var1 = _closure1_slot20;
                var1 = var1.STREAM;
                if (!(var1 !== var5)) {
                    _fun111299_ip = 1117;
                    continue _fun111299
                }
            case 1038:
                var1 = _closure1_slot20;
                var1 = var1.ACTIVITY;
                if (!(var1 === var5)) {
                    _fun111299_ip = 1659;
                    continue _fun111299
                }
            case 1055:
                var24 = _closure1_slot22;
                var5 = _closure1_slot1;
                var23 = _closure1_slot2;
                var1 = 62;
                var1 = var23[var1];
                var23 = var5.bind(var3)(var1);
                var5 = {};
                var5.sharedVisible = var4;
                var1 = var8.applicationId;
                var5.applicationId = var1;
                var5.layout = var9;
                var1 = var8.id;
                var5 = var24.bind(var3)(var23, var5, var1);
                _fun111299_ip = 1773;
                continue _fun111299;
            case 1117:
                var32 = var8.user;
                var31 = var8.id;
                var30 = var8.streamGuildId;
                var28 = var8.streamId;
                var26 = var8.userNick;
                var24 = _closure1_slot22;
                var23 = _closure1_slot34;
                var1 = {};
                var32 = var32.id;
                var1.userId = var32;
                var1.id = var31;
                var1.streamGuildId = var30;
                var1.streamId = var28;
                var1.userNick = var26;
                var1.isSelf = var10;
                var1.sharedCoords = var20;
                var1.isScrollVisible = var15;
                var1.layout = var9;
                var5 = var24.bind(var3)(var23, var1);
                _fun111299_ip = 1773;
                continue _fun111299;
            case 1214:
                var28 = var8.id;
                var32 = var8.streamId;
                var26 = var8.user;
                var30 = var8.hasVideo;
                var1 = var8.canRenderVideo;
                if (!var30) {
                    _fun111299_ip = 1251;
                    continue _fun111299
                }
            case 1245:
                if (!var19) {
                    _fun111299_ip = 1251;
                    continue _fun111299
                }
            case 1248:
                if (var1) {
                    _fun111299_ip = 1338;
                    continue _fun111299
                }
            case 1251:
                var24 = _closure1_slot22;
                var23 = _closure1_slot37;
                var1 = {};
                var1.isRTCConnected = var19;
                var1.isRinging = var21;
                var34 = var26.getAvatarURL;
                var33 = 80;
                var31 = false;
                var31 = var34.bind(var26)(var35, var33, var31);
                var1.avatarURI = var31;
                var33 = var8.userAvatarDecoration;
                var34 = var16 != var33;
                var31 = undefined;
                if (!var34) {
                    _fun111299_ip = 1312;
                    continue _fun111299
                }
            case 1309:
                var31 = var33;
            case 1312:
                var1.avatarDecoration = var31;
                var1.layout = var9;
                var1.layoutPhysics = var14;
                var1 = var24.bind(var3)(var23, var1);
                _fun111299_ip = 1618;
                continue _fun111299;
            case 1338:
                if (!(var16 != var27)) {
                    _fun111299_ip = 1349;
                    continue _fun111299
                }
            case 1342:
                if (!(var16 != var2)) {
                    _fun111299_ip = 1523;
                    continue _fun111299
                }
            case 1349:
                var24 = _closure1_slot22;
                var23 = _closure1_slot1;
                var31 = _closure1_slot2;
                var2 = 36;
                var2 = var31[var2];
                var23 = var23.bind(var3)(var2);
                var2 = {};
                var2.id = var28;
                var31 = var26.id;
                var2.userId = var31;
                var33 = var16 != var32;
                var31 = null;
                if (!var33) {
                    _fun111299_ip = 1400;
                    continue _fun111299
                }
            case 1397:
                var31 = var32;
            case 1400:
                var2.streamId = var31;
                var2.isScrollVisible = var15;
                if (!var10) {
                    _fun111299_ip = 1416;
                    continue _fun111299
                }
            case 1413:
                if (var30) {
                    _fun111299_ip = 1450;
                    continue _fun111299
                }
            case 1416:
                var31 = _closure1_slot0;
                var32 = _closure1_slot2;
                var30 = 37;
                var30 = var32[var30];
                var30 = var31.bind(var3)(var30);
                var30 = var30.VideoSpinnerContext;
                var30 = var30.REMOTE_VIDEO;
                _fun111299_ip = 1482;
                continue _fun111299;
            case 1450:
                var32 = _closure1_slot0;
                var33 = _closure1_slot2;
                var31 = 37;
                var31 = var33[var31];
                var31 = var32.bind(var3)(var31);
                var31 = var31.VideoSpinnerContext;
                var30 = var31.SELF_VIDEO;
            case 1482:
                var2.videoSpinnerContext = var30;
                var2.sharedCoords = var20;
                var30 = true;
                var2.isCamera = var30;
                if (!var25) {
                    _fun111299_ip = 1505;
                    continue _fun111299
                }
            case 1502:
                var25 = !var10;
            case 1505:
                var2.focusOnReady = var25;
                var2.layout = var9;
                var2 = var24.bind(var3)(var23, var2);
                _fun111299_ip = 1615;
                continue _fun111299;
            case 1523:
                var25 = _closure1_slot22;
                var24 = _closure1_slot1;
                var30 = _closure1_slot2;
                var23 = 61;
                var23 = var30[var23];
                var24 = var24.bind(var3)(var23);
                var23 = {};
                var23.avError = var27;
                var27 = var29.get;
                var29 = var27.bind(var29)();
                var30 = var16 == var29;
                var27 = undefined;
                if (var30) {
                    _fun111299_ip = 1577;
                    continue _fun111299
                }
            case 1572:
                var27 = var29.id;
            case 1577:
                var27 = var27 !== var28;
                var23.removeSplashImage = var27;
                var26 = var26.id;
                var23.userId = var26;
                var26 = _closure1_slot5;
                var26 = var26.absoluteFill;
                var23.style = var26;
                var2 = var25.bind(var3)(var24, var23);
            case 1615:
                var1 = var2;
            case 1618:
                var5 = var1;
                _fun111299_ip = 1773;
                continue _fun111299;
            case 1626:
                var1 = var0.id;
                var0 = _closure1_slot11;
                var0 = var0.NO_VIDEO_PARTICIPANTS;
                if (!(var0 !== var1)) {
                    _fun111299_ip = 1741;
                    continue _fun111299
                }
            case 1645:
                var0 = _closure1_slot11;
                var0 = var0.CALLER_DISCONNECTED;
                if (!(var0 !== var1)) {
                    _fun111299_ip = 1707;
                    continue _fun111299
                }
            case 1659:
                var2 = _closure1_slot22;
                var1 = _closure1_slot37;
                var0 = {};
                var0.isRinging = var21;
                var0.avatarURI = var3;
                var0.avatarDecoration = var3;
                var0.layout = var9;
                var0.isRTCConnected = var19;
                var0.layoutPhysics = var14;
                var5 = var2.bind(var3)(var1, var0);
                _fun111299_ip = 1773;
                continue _fun111299;
            case 1707:
                var2 = _closure1_slot22;
                var1 = _closure1_slot1;
                var23 = _closure1_slot2;
                var0 = 60;
                var0 = var23[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = var2.bind(var3)(var1, var0);
                _fun111299_ip = 1773;
                continue _fun111299;
            case 1741:
                var2 = _closure1_slot22;
                var1 = _closure1_slot1;
                var23 = _closure1_slot2;
                var0 = 59;
                var0 = var23[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = var2.bind(var3)(var1, var0);
            case 1773:
                var2 = _closure1_slot24;
                var1 = _closure1_slot60;
                var0 = {};
                var0.cleanUp = var22;
                var0.coords = var20;
                var0.id = var11;
                var0.isRTCConnected = var19;
                var0.isScrollVisible = var15;
                var0.layoutPhysics = var14;
                var0.transitionState = var7;
                var0.sharedVisible = var4;
                var4 = new Array(3);
                var4[0] = var5;
                var5 = var16 != var8;
                if (!var5) {
                    _fun111299_ip = 1982;
                    continue _fun111299
                }
            case 1840:
                var15 = _closure1_slot22;
                var14 = _closure1_slot1;
                var20 = _closure1_slot2;
                var7 = 63;
                var7 = var20[var7];
                var14 = var14.bind(var3)(var7);
                var7 = {};
                var7.isRinging = var21;
                var7.participant = var8;
                var21 = _closure1_slot0;
                var20 = var20[var13];
                var21 = var21.bind(var3)(var20);
                var20 = var21.isStableParticipantWithUser;
                var21 = var20.bind(var21)(var8);
                var20 = undefined;
                if (!var21) {
                    _fun111299_ip = 1911;
                    continue _fun111299
                }
            case 1905:
                var20 = var8.userNick;
            case 1911:
                var7.label = var20;
                var7.layout = var9;
                var16 = var16 == var8;
                var20 = undefined;
                if (var16) {
                    _fun111299_ip = 1934;
                    continue _fun111299
                }
            case 1929:
                var20 = var8.type;
            case 1934:
                var16 = _closure1_slot20;
                var16 = var16.USER;
                var16 = var20 === var16;
                if (!var16) {
                    _fun111299_ip = 1954;
                    continue _fun111299
                }
            case 1951:
                var16 = var19;
            case 1954:
                if (!var16) {
                    _fun111299_ip = 1960;
                    continue _fun111299
                }
            case 1957:
                var16 = var18;
            case 1960:
                if (!var16) {
                    _fun111299_ip = 1966;
                    continue _fun111299
                }
            case 1963:
                var16 = var17;
            case 1966:
                var7.showHangStatus = var16;
                var7.speaking = var12;
                var5 = var15.bind(var3)(var14, var7);
            case 1982:
                var4[1] = var5;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var13];
                var7 = var7.bind(var3)(var5);
                var5 = var7.isStableParticipantWithUser;
                var5 = var5.bind(var7)(var8);
                if (!var5) {
                    _fun111299_ip = 2052;
                    continue _fun111299
                }
            case 2017:
                var8 = _closure1_slot22;
                var7 = _closure1_slot41;
                var6 = {};
                var6.speaking = var12;
                var6.id = var11;
                var6.isSelf = var10;
                var6.layout = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 2052:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 64;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/card/VoicePanelCard.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3714, 1372, 3091, 3518, 3949, 11837, 11835, 14279, 11840, 660, 3523, 11838, 33, 3720, 3941, 5458, 5456, 1297, 671, 8035, 3505, 6477, 4704, 8701, 1234, 4084, 11836, 566, 8025, 3633, 11947, 8028, 8024, 14333, 8052, 6915, 4097, 4081, 6478, 14334, 13151, 5306, 4027, 5730, 14283, 14295, 14278, 14335, 14336, 7372, 4963, 14337, 3614, 14307, 11839, 14338, 14339, 14340, 14341, 14342, 14350, 2]);