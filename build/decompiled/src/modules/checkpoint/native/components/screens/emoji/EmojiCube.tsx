// modules/checkpoint/native/components/screens/emoji/EmojiCube.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun86506: for (var _fun86506_ip = 0;;) switch (_fun86506_ip) {
        case 0:
            var4 = require;
            var16 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var16;
            var _closure1_slot2 = var5;
            var6 = function(arg0, arg1) { // Original name: transformMatrix, environment: var1
                _fun86507: for (var _fun86507_ip = 0;;) switch (_fun86507_ip) {
                    case 0:
                        var0 = arg1;
                        var6 = var0.rotation;
                        var4 = undefined;
                        if (!(var6 === var4)) {
                            _fun86507_ip = 29;
                            continue _fun86507
                        }
                    case 15:
                        var6 = {
                            'x': 0,
                            'y': 0,
                            'z': 0
                        };
                    case 29:
                        var9 = var0.translation;
                        if (!(var9 === var4)) {
                            _fun86507_ip = 53;
                            continue _fun86507
                        }
                    case 39:
                        var9 = {
                            'x': 0,
                            'y': 0,
                            'z': 0
                        };
                    case 53:
                        var3 = var0.skew;
                        if (!(var3 === var4)) {
                            _fun86507_ip = 77;
                            continue _fun86507
                        }
                    case 63:
                        var3 = {
                            'x': 0,
                            'y': 0,
                            'z': 0
                        };
                    case 77:
                        var1 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 5;
                        var2 = var5[var0];
                        var2 = var1.bind(var4)(var2);
                        var7 = var2.mat4;
                        var2 = var7.create;
                        var2 = var2.bind(var7)();
                        var7 = var5[var0];
                        var7 = var1.bind(var4)(var7);
                        var10 = var7.mat4;
                        var8 = var10.copy;
                        var7 = arg0;
                        var7 = var8.bind(var10)(var2, var7);
                        var7 = var5[var0];
                        var7 = var1.bind(var4)(var7);
                        var10 = var7.mat4;
                        var8 = var10.rotateX;
                        var7 = var6.x;
                        var7 = var8.bind(var10)(var2, var2, var7);
                        var7 = var5[var0];
                        var7 = var1.bind(var4)(var7);
                        var10 = var7.mat4;
                        var8 = var10.rotateY;
                        var7 = var6.y;
                        var7 = var8.bind(var10)(var2, var2, var7);
                        var7 = var5[var0];
                        var7 = var1.bind(var4)(var7);
                        var8 = var7.mat4;
                        var7 = var8.rotateZ;
                        var6 = var6.z;
                        var6 = var7.bind(var8)(var2, var2, var6);
                        var6 = var5[var0];
                        var6 = var1.bind(var4)(var6);
                        var8 = var6.mat4;
                        var7 = var8.translate;
                        var10 = var9.x;
                        var6 = new Array(3);
                        var6[0] = var10;
                        var10 = var9.y;
                        var6[1] = var10;
                        var9 = var9.z;
                        var6[2] = var9;
                        var6 = var7.bind(var8)(var2, var2, var6);
                        var6 = var5[var0];
                        var6 = var1.bind(var4)(var6);
                        var10 = var6.mat4;
                        var9 = var10.fromValues;
                        var25 = var3.y;
                        var22 = var3.x;
                        var6 = 1;
                        var27 = var10;
                        var26 = var6;
                        var24 = 0;
                        var23 = 0;
                        var21 = var6;
                        var20 = 0;
                        var19 = 0;
                        var18 = 0;
                        var17 = 0;
                        var16 = var6;
                        var15 = 0;
                        var14 = 0;
                        var13 = 0;
                        var12 = 0;
                        var11 = var6;
                        var3 = var27[var9](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14, var13, var12, var11, var10);
                        var0 = var5[var0];
                        var0 = var1.bind(var4)(var0);
                        var1 = var0.mat4;
                        var0 = var1.multiply;
                        var0 = var0.bind(var1)(var2, var2, var3);
                        var0 = global;
                        var1 = var0.Array;
                        var0 = var1.from;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var3);
            var7 = 0;
            var8 = var5[var7];
            var3 = arg3;
            var0 = undefined;
            var3 = var3.bind(var0)(var8);
            var _closure1_slot3 = var3;
            var3 = 1;
            var8 = var5[var3];
            var8 = var4.bind(var0)(var8);
            var8 = var8.View;
            var _closure1_slot4 = var8;
            var8 = 2;
            var8 = var5[var8];
            var8 = var16.bind(var0)(var8);
            var _closure1_slot5 = var8;
            var8 = 3;
            var8 = var5[var8];
            var8 = var16.bind(var0)(var8);
            var _closure1_slot6 = var8;
            var8 = 4;
            var8 = var5[var8];
            var8 = var4.bind(var0)(var8);
            var8 = var8.jsx;
            var _closure1_slot7 = var8;
            var13 = [0.8322767019271851];
            var17 = -0.37332993745803833;
            var13[1] = var17;
            var15 = -0.4098050892353058;
            var13[2] = var15;
            var13[3] = var7;
            var10 = 0.5543603897094727;
            var13[4] = var10;
            var9 = 0.560490608215332;
            var13[5] = var9;
            var8 = 0.6152518391609192;
            var13[6] = var8;
            var13[7] = var7;
            var13[8] = var7;
            var11 = -0.739239513874054;
            var13[9] = var11;
            var11 = 0.6734426617622375;
            var13[10] = var11;
            var13[11] = var7;
            var13[12] = var7;
            var11 = -73.9239501953125;
            var13[13] = var11;
            var11 = -32.65573501586914;
            var13[14] = var11;
            var13[15] = var3;
            var14 = [0.5543603897094727, 0.560490608215332, 0.6152518391609192, 0, 0, 0.739239513874054];
            var12 = -0.6734426617622375;
            var14[6] = var12;
            var14[7] = var7;
            var11 = -0.8322767019271851;
            var14[8] = var11;
            var11 = 0.37332993745803833;
            var14[9] = var11;
            var11 = 0.4098050892353058;
            var14[10] = var11;
            var14[11] = var7;
            var11 = -83.22766876220703;
            var14[12] = var11;
            var11 = 37.33299255371094;
            var14[13] = var11;
            var11 = -59.01948928833008;
            var14[14] = var11;
            var14[15] = var3;
            var11 = [0.8322767019271851];
            var11[1] = var17;
            var11[2] = var15;
            var11[3] = var7;
            var11[4] = var7;
            var15 = 0.739239513874054;
            var11[5] = var15;
            var11[6] = var12;
            var11[7] = var7;
            var11[8] = var10;
            var11[9] = var9;
            var11[10] = var8;
            var11[11] = var7;
            var7 = 55.436038970947266;
            var11[12] = var7;
            var7 = 56.0490608215332;
            var11[13] = var7;
            var7 = -38.474815368652344;
            var11[14] = var7;
            var11[15] = var3;
            var3 = {};
            var7 = {
                'x': 0.2,
                'y': 0.03,
                'z': 0
            };
            var3.skew = var7;
            var10 = var6.bind(var0)(var14, var3);
            var3 = {};
            var7 = {
                'x': 0,
                'y': 0.02,
                'z': 0.015
            };
            var3.rotation = var7;
            var7 = {
                'x': 4294967295,
                'y': 1,
                'z': 0
            };
            var3.translation = var7;
            var7 = {
                'x': 0,
                'y': 0.035,
                'z': 0
            };
            var3.skew = var7;
            var9 = var6.bind(var0)(var11, var3);
            var3 = 6;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var18 = 200;
            var8 = {
                'position': 'relative',
                'width': 200,
                'height': 200
            };
            var3.container = var8;
            var8 = {
                'position': 'absolute',
                'width': 200,
                'height': 200,
                'borderWidth': 1
            };
            var15 = 7;
            var12 = var5[var15];
            var12 = var16.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.BLACK;
            var8.backgroundColor = var12;
            var3.emoji = var8;
            var17 = 196;
            var8 = {
                'width': 196,
                'height': 196
            };
            var3.customEmoji = var8;
            var8 = {};
            var12 = 8;
            var19 = var5[var12];
            var20 = var4.bind(var0)(var19);
            var19 = var20.isIOS;
            var19 = var19.bind(var20)();
            if (!var19) {
                _fun86506_ip = 779;
                continue _fun86506
            }
        case 776:
            var17 = var18;
        case 779:
            var8.fontSize = var17;
            var17 = var5[var12];
            var18 = var4.bind(var0)(var17);
            var17 = var18.isIOS;
            var18 = var17.bind(var18)();
            var17 = undefined;
            if (!var18) {
                _fun86506_ip = 818;
                continue _fun86506
            }
        case 808:
            var17 = 229.99999999999997;
        case 818:
            var8.lineHeight = var17;
            var17 = 'center';
            var8.textAlign = var17;
            var15 = var5[var15];
            var15 = var16.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.INTERACTIVE_TEXT_DEFAULT;
            var8.color = var15;
            var3.textEmoji = var8;
            var8 = {};
            var15 = {};
            var16 = var5[var12];
            var17 = var4.bind(var0)(var16);
            var16 = var17.isIOS;
            var16 = var16.bind(var17)();
            var15.matrix = var13;
            var13 = new Array(1);
            var13[0] = var15;
            var8.transform = var13;
            var3.topFace = var8;
            var8 = {};
            var13 = {};
            var15 = var5[var12];
            var16 = var4.bind(var0)(var15);
            var15 = var16.isIOS;
            var15 = var15.bind(var16)();
            if (!var15) {
                _fun86506_ip = 934;
                continue _fun86506
            }
        case 931:
            var10 = var14;
        case 934:
            var13.matrix = var10;
            var10 = new Array(1);
            var10[0] = var13;
            var8.transform = var10;
            var3.leftFace = var8;
            var8 = {};
            var10 = {};
            var12 = var5[var12];
            var13 = var4.bind(var0)(var12);
            var12 = var13.isIOS;
            var12 = var12.bind(var13)();
            if (!var12) {
                _fun86506_ip = 985;
                continue _fun86506
            }
        case 982:
            var9 = var11;
        case 985:
            var10.matrix = var9;
            var9 = new Array(1);
            var9[0] = var10;
            var8.transform = var9;
            var3.rightFace = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot8 = var3;
            var3 = 15;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/checkpoint/native/components/screens/emoji/EmojiCube.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function(arg0) { // Original name: EmojiCube, environment: var1
                _fun86508: for (var _fun86508_ip = 0;;) switch (_fun86508_ip) {
                    case 0:
                        var0 = arg0;
                        var9 = var0.emoji;
                        var _closure2_slot0 = var9;
                        var7 = var0.style;
                        var3 = undefined;
                        var _closure2_slot1 = var3;
                        var _closure2_slot2 = var3;
                        var _closure2_slot3 = var3;
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 9;
                        var1 = var5[var1];
                        var6 = var2.bind(var3)(var1);
                        var5 = var6.useStateFromStores;
                        var1 = _closure1_slot5;
                        var2 = new Array(1);
                        var2[0] = var1;
                        var1 = function() { // Environment: var4
                            var0 = _closure1_slot5;
                            var0 = var0.useReducedMotion;
                            return var0;
                        };
                        var8 = var5.bind(var6)(var2, var1);
                        var2 = var9.id;
                        var1 = null;
                        var2 = var1 != var2;
                        var1 = undefined;
                        if (!var2) {
                            _fun86508_ip = 169;
                            continue _fun86508
                        }
                    case 103:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 10;
                        var2 = var6[var2];
                        var6 = var5.bind(var3)(var2);
                        var5 = var6.getEmojiURL;
                        var2 = {};
                        var10 = var9.id;
                        var2.id = var10;
                        var8 = !var8;
                        if (!var8) {
                            _fun86508_ip = 152;
                            continue _fun86508
                        }
                    case 146:
                        var8 = var9.animated;
                    case 152:
                        var2.animated = var8;
                        var8 = 48;
                        var2.size = var8;
                        var1 = var5.bind(var6)(var2);
                    case 169:
                        _closure2_slot1 = var1;
                        var1 = _closure1_slot8;
                        var5 = var1.bind(var3)();
                        _closure2_slot2 = var5;
                        var9 = _closure1_slot3;
                        var8 = var9.useContext;
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 11;
                        var1 = var6[var1];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.CheckpointColorContext;
                        var1 = var8.bind(var9)(var1);
                        var8 = 12;
                        var8 = var6[var8];
                        var9 = var2.bind(var3)(var8);
                        var8 = var9.useToken;
                        var1 = var1.primaryColor;
                        var1 = var8.bind(var9)(var1);
                        _closure2_slot3 = var1;
                        var1 = 13;
                        var1 = var6[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.useIsScreenLandscape;
                        var2 = var1.bind(var2)();
                        var1 = _closure1_slot6;
                        var1 = var1.bind(var3)();
                        var1 = var1.windowDimensions;
                        if (var2) {
                            _fun86508_ip = 305;
                            continue _fun86508
                        }
                    case 298:
                        var2 = var1.width;
                        _fun86508_ip = 310;
                        continue _fun86508;
                    case 305:
                        var2 = var1.height;
                    case 310:
                        var1 = 392;
                        var9 = var2 / var1;
                        var2 = _closure1_slot7;
                        var1 = _closure1_slot4;
                        var0 = {};
                        var8 = var5.container;
                        var6 = new Array(3);
                        var6[0] = var8;
                        var8 = {};
                        var10 = {};
                        var10.scale = var9;
                        var9 = new Array(1);
                        var9[0] = var10;
                        var8.transform = var9;
                        var6[1] = var8;
                        var6[2] = var7;
                        var0.style = var6;
                        var7 = var5.topFace;
                        var6 = new Array(3);
                        var6[0] = var7;
                        var7 = var5.leftFace;
                        var6[1] = var7;
                        var5 = var5.rightFace;
                        var6[2] = var5;
                        var5 = var6.map;
                        var4 = function(arg0, arg1) { // Environment: var4
                            _fun86510: for (var _fun86510_ip = 0;;) switch (_fun86510_ip) {
                                case 0:
                                    var4 = _closure1_slot7;
                                    var1 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 14;
                                    var0 = var2[var0];
                                    var3 = undefined;
                                    var2 = var1.bind(var3)(var0);
                                    var1 = {};
                                    var5 = _closure2_slot2;
                                    var6 = var5.emoji;
                                    var5 = new Array(3);
                                    var5[0] = var6;
                                    var6 = arg0;
                                    var5[1] = var6;
                                    var6 = {};
                                    var7 = _closure2_slot3;
                                    var6.borderColor = var7;
                                    var5[2] = var6;
                                    var1.style = var5;
                                    var5 = _closure2_slot2;
                                    var5 = var5.customEmoji;
                                    var1.fastImageStyle = var5;
                                    var5 = _closure2_slot2;
                                    var5 = var5.textEmoji;
                                    var1.textEmojiStyle = var5;
                                    var5 = _closure2_slot0;
                                    var6 = var5.id;
                                    var5 = null;
                                    var6 = var5 == var6;
                                    var5 = '';
                                    if (!var6) {
                                        _fun86510_ip = 139;
                                        continue _fun86510
                                    }
                                case 130:
                                    var6 = _closure2_slot0;
                                    var5 = var6.name;
                                case 139:
                                    var1.name = var5;
                                    var0 = _closure2_slot1;
                                    var1.src = var0;
                                    var0 = arg1;
                                    var0 = var4.bind(var3)(var2, var1, var0);
                                    return var0;
                            }
                        };
                        var4 = var5.bind(var6)(var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1465, 33, 11156, 1297, 671, 479, 566, 1417, 11130, 3110, 5319, 5727, 2]);