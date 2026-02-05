// modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun68735: for (var _fun68735_ip = 0;;) switch (_fun68735_ip) {
        case 0:
            var4 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var10;
            var _closure1_slot2 = var5;
            var0 = ['style'];
            var _closure1_slot3 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var0 = 0;
            var3 = var5[var0];
            var0 = undefined;
            var3 = var10.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 1;
            var6 = var5[var3];
            var3 = metroImportAll;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot5 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.View;
            var _closure1_slot6 = var6;
            var6 = var3.Image;
            var _closure1_slot7 = var6;
            var11 = var3.StyleSheet;
            var3 = 3;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.AnalyticsObjects;
            var _closure1_slot10 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot11 = var6;
            var3 = var3.jsxs;
            var _closure1_slot12 = var3;
            var3 = 7;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {
                'marginTop': null,
                'width': 64,
                'height': 64,
                'alignSelf': 'center'
            };
            var9 = 8;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_16;
            var8.marginTop = var12;
            var12 = 'center';
            var3.emoji = var8;
            var8 = {
                'width': 128,
                'height': 128
            };
            var3.emojiFastImage = var8;
            var8 = {};
            var13 = 9;
            var13 = var5[var13];
            var14 = var4.bind(var0)(var13);
            var13 = var14.isIOS;
            var14 = var13.bind(var14)();
            var13 = undefined;
            if (!var14) {
                _fun68735_ip = 350;
                continue _fun68735
            }
        case 347:
            var13 = 60;
        case 350:
            var8.fontSize = var13;
            var13 = 74;
            var8.lineHeight = var13;
            var3.emojiText = var8;
            var8 = {};
            var13 = var5[var9];
            var13 = var10.bind(var0)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_16;
            var8.marginTop = var13;
            var8.alignSelf = var12;
            var3.text = var8;
            var8 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_8;
            var8.gap = var12;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_24;
            var8.marginTop = var12;
            var3.buttonContainer = var8;
            var8 = {
                'width': 16,
                'height': 16
            };
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.TEXT_DEFAULT;
            var8.tintColor = var12;
            var3.star = var8;
            var8 = {
                'borderColor': 'transparent',
                'borderWidth': 1,
                'borderRadius': null,
                'pointerEvents': 'none'
            };
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.radii;
            var12 = var12.round;
            var8.borderRadius = var12;
            var16 = var11.absoluteFillObject;
            var17 = var8;
            var11 = copyDataProperties(var17, var16);
            var3.border = var8;
            var8 = {};
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.colors;
            var9 = var9.TEXT_FEEDBACK_POSITIVE;
            var8.borderColor = var9;
            var3.borderPlaying = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot13 = var3;
            var3 = 26;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/soundboard/native/SoundboardSoundPreviewActionSheet.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun68736: for (var _fun68736_ip = 0;;) switch (_fun68736_ip) {
                    case 0:
                        var1 = arg0;
                        var6 = var1.channelId;
                        var _closure2_slot0 = var6;
                        var10 = var1.sound;
                        var _closure2_slot1 = var10;
                        var1 = _closure1_slot13;
                        var3 = undefined;
                        var22 = var1.bind(var3)();
                        var1 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var4 = 10;
                        var2 = var12[var4];
                        var8 = var1.bind(var3)(var2);
                        var7 = var8.useStateFromStores;
                        var2 = _closure1_slot8;
                        var5 = new Array(1);
                        var5[0] = var2;
                        var2 = function() { // Environment: var0
                            _fun68737: for (var _fun68737_ip = 0;;) switch (_fun68737_ip) {
                                case 0:
                                    var1 = _closure1_slot8;
                                    var0 = var1.getCurrentUser;
                                    var1 = var0.bind(var1)();
                                    var0 = null;
                                    var2 = var0 == var1;
                                    var0 = undefined;
                                    if (var2) {
                                        _fun68737_ip = 32;
                                        continue _fun68737
                                    }
                                case 27:
                                    var0 = var1.id;
                                case 32:
                                    return var0;
                            }
                        };
                        var2 = var7.bind(var8)(var5, var2);
                        var _closure2_slot2 = var2;
                        var11 = _closure1_slot1;
                        var2 = 11;
                        var2 = var12[var2];
                        var2 = var11.bind(var3)(var2);
                        var2 = var2.bind(var3)();
                        var2 = var2.analyticsLocations;
                        var _closure2_slot3 = var2;
                        var4 = var12[var4];
                        var8 = var1.bind(var3)(var4);
                        var7 = var8.useStateFromStoresObject;
                        var4 = _closure1_slot9;
                        var5 = new Array(1);
                        var5[0] = var4;
                        var4 = function() { // Environment: var0
                            _fun68738: for (var _fun68738_ip = 0;;) switch (_fun68738_ip) {
                                case 0:
                                    var0 = {};
                                    var3 = _closure2_slot2;
                                    var2 = null;
                                    var2 = var2 != var3;
                                    if (!var2) {
                                        _fun68738_ip = 40;
                                        continue _fun68738
                                    }
                                case 18:
                                    var5 = _closure1_slot9;
                                    var4 = var5.isUserPlayingSounds;
                                    var3 = _closure2_slot2;
                                    var2 = var4.bind(var5)(var3);
                                case 40:
                                    var0.isPlayingSound = var2;
                                    var3 = _closure1_slot9;
                                    var2 = var3.isFavoriteSound;
                                    var1 = _closure2_slot1;
                                    var1 = var1.soundId;
                                    var1 = var2.bind(var3)(var1);
                                    var0.isFavorite = var1;
                                    return var0;
                            }
                        };
                        var4 = var7.bind(var8)(var5, var4);
                        var21 = var4.isPlayingSound;
                        var _closure2_slot4 = var21;
                        var16 = var4.isFavorite;
                        var _closure2_slot5 = var16;
                        var5 = _closure1_slot5;
                        var7 = var5.useCallback;
                        var4 = new Array(3);
                        var4[0] = var16;
                        var4[1] = var10;
                        var4[2] = var2;
                        var2 = function() { // Environment: var0
                            _fun68739: for (var _fun68739_ip = 0;;) switch (_fun68739_ip) {
                                case 0:
                                    var1 = _closure2_slot5;
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    if (var1) {
                                        _fun68739_ip = 124;
                                        continue _fun68739
                                    }
                                case 21:
                                    var1 = 13;
                                    var1 = var2[var1];
                                    var5 = undefined;
                                    var7 = var3.bind(var5)(var1);
                                    var6 = var7.trackSoundFavorited;
                                    var4 = {};
                                    var1 = _closure2_slot1;
                                    var4.sound = var1;
                                    var8 = {};
                                    var11 = _closure2_slot3;
                                    var12 = var8;
                                    var10 = copyDataProperties(var12, var11);
                                    var9 = _closure1_slot10;
                                    var10 = var9.SOUNDBOARD_SOUND;
                                    var9 = 'object';
                                    var8[var9] = var10;
                                    var4.location = var8;
                                    var4 = var6.bind(var7)(var4);
                                    var4 = 12;
                                    var4 = var2[var4];
                                    var5 = var3.bind(var5)(var4);
                                    var4 = var5.addFavoriteSound;
                                    var1 = var1.soundId;
                                    var1 = var4.bind(var5)(var1);
                                    _fun68739_ip = 159;
                                    continue _fun68739;
                                case 124:
                                    var1 = 12;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var2 = var3.bind(var1)(var2);
                                    var1 = var2.removeFavoriteSound;
                                    var0 = _closure2_slot1;
                                    var0 = var0.soundId;
                                    var0 = var1.bind(var2)(var0);
                                case 159:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var14 = var7.bind(var5)(var2, var4);
                        var4 = var5.useCallback;
                        var2 = new Array(3);
                        var2[0] = var6;
                        var2[1] = var10;
                        var2[2] = var21;
                        var0 = function() { // Environment: var0
                            _fun68740: for (var _fun68740_ip = 0;;) switch (_fun68740_ip) {
                                case 0:
                                    var1 = _closure2_slot4;
                                    if (var1) {
                                        _fun68740_ip = 80;
                                        continue _fun68740
                                    }
                                case 10:
                                    var6 = _closure1_slot0;
                                    var7 = _closure1_slot2;
                                    var1 = 12;
                                    var1 = var7[var1];
                                    var5 = undefined;
                                    var4 = var6.bind(var5)(var1);
                                    var3 = var4.playSoundLocally;
                                    var2 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    var0 = 14;
                                    var0 = var7[var0];
                                    var0 = var6.bind(var5)(var0);
                                    var0 = var0.LocalSoundTrigger;
                                    var0 = var0.SOUNDBOARD;
                                    var0 = var3.bind(var4)(var2, var1, var0);
                                case 80:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var24 = var4.bind(var5)(var0, var2);
                        var0 = 15;
                        var0 = var12[var0];
                        var2 = var1.bind(var3)(var0);
                        var0 = var2.useButtonPressAnimationProps;
                        var4 = var0.bind(var2)();
                        var20 = var4.style;
                        var2 = _closure1_slot4;
                        var0 = _closure1_slot3;
                        var25 = var2.bind(var3)(var4, var0);
                        var2 = _closure1_slot11;
                        var0 = 16;
                        var0 = var12[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.ActionSheet;
                        var0 = {};
                        var4 = true;
                        var0.startExpanded = var4;
                        var6 = _closure1_slot12;
                        var5 = _closure1_slot6;
                        var4 = {};
                        var7 = 17;
                        var7 = var12[var7];
                        var8 = var11.bind(var3)(var7);
                        var7 = {};
                        var13 = var22.emoji;
                        var9 = new Array(2);
                        var9[0] = var13;
                        var13 = var22.emojiFastImage;
                        var9[1] = var13;
                        var7.fastImageStyle = var9;
                        var13 = var22.emoji;
                        var9 = new Array(2);
                        var9[0] = var13;
                        var13 = var22.emojiText;
                        var9[1] = var13;
                        var7.textEmojiStyle = var9;
                        var9 = 18;
                        var9 = var12[var9];
                        var11 = var11.bind(var3)(var9);
                        var9 = 64;
                        var9 = var11.bind(var3)(var10, var9);
                        var7.src = var9;
                        var11 = var10.emojiName;
                        var9 = null;
                        var12 = var9 != var11;
                        var9 = '';
                        if (!var12) {
                            _fun68736_ip = 455;
                            continue _fun68736
                        }
                    case 452:
                        var9 = var11;
                    case 455:
                        var7.name = var9;
                        var8 = var2.bind(var3)(var8, var7);
                        var7 = new Array(3);
                        var7[0] = var8;
                        var13 = _closure1_slot11;
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var8 = 19;
                        var8 = var11[var8];
                        var8 = var12.bind(var3)(var8);
                        var9 = var8.Text;
                        var8 = {};
                        var15 = var22.text;
                        var8.style = var15;
                        var15 = 'heading-lg/extrabold';
                        var8.variant = var15;
                        var10 = var10.name;
                        var8.children = var10;
                        var8 = var13.bind(var3)(var9, var8);
                        var7[1] = var8;
                        var10 = _closure1_slot12;
                        var9 = _closure1_slot6;
                        var8 = {};
                        var15 = var22.buttonContainer;
                        var8.style = var15;
                        var15 = 20;
                        var11 = var11[var15];
                        var11 = var12.bind(var3)(var11);
                        var12 = var11.Button;
                        var11 = {};
                        var18 = 'primary';
                        var11.variant = var18;
                        var23 = _closure1_slot0;
                        var26 = _closure1_slot2;
                        if (var16) {
                            _fun68736_ip = 621;
                            continue _fun68736
                        }
                    case 601:
                        var18 = 22;
                        var18 = var26[var18];
                        var18 = var23.bind(var3)(var18);
                        var19 = var18.StarOutlineIcon;
                        _fun68736_ip = 639;
                        continue _fun68736;
                    case 621:
                        var18 = 21;
                        var18 = var26[var18];
                        var18 = var23.bind(var3)(var18);
                        var19 = var18.StarIcon;
                    case 639:
                        var18 = {};
                        var23 = var22.star;
                        var18.style = var23;
                        var18 = var13.bind(var3)(var19, var18);
                        var11.icon = var18;
                        var27 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var23 = 23;
                        var19 = var18[var23];
                        var19 = var27.bind(var3)(var19);
                        var26 = var19.intl;
                        var19 = var26.string;
                        var18 = var18[var23];
                        var18 = var27.bind(var3)(var18);
                        var18 = var18.t;
                        if (var16) {
                            _fun68736_ip = 721;
                            continue _fun68736
                        }
                    case 708:
                        var16 = var18.yZFibY;
                        var16 = var19.bind(var26)(var16);
                        _fun68736_ip = 732;
                        continue _fun68736;
                    case 721:
                        var18 = var18.aBUcp3;
                        var16 = var19.bind(var26)(var18);
                    case 732:
                        var11.text = var16;
                        var11.onPress = var14;
                        var12 = var13.bind(var3)(var12, var11);
                        var11 = new Array(2);
                        var11[0] = var12;
                        var14 = _closure1_slot12;
                        var13 = _closure1_slot6;
                        var12 = {};
                        var18 = _closure1_slot11;
                        var27 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var15 = var19[var15];
                        var15 = var27.bind(var3)(var15);
                        var16 = var15.Button;
                        var15 = {};
                        var30 = var15;
                        var29 = var25;
                        var25 = copyDataProperties(var30, var29);
                        var26 = 'secondary';
                        var25 = 'variant';
                        var15[var25] = var26;
                        var26 = _closure1_slot7;
                        var25 = {};
                        var28 = var22.star;
                        var25.style = var28;
                        var17 = _closure1_slot1;
                        var28 = 24;
                        var28 = var19[var28];
                        var28 = var17.bind(var3)(var28);
                        var25.source = var28;
                        var26 = var18.bind(var3)(var26, var25);
                        var25 = 'icon';
                        var15[var25] = var26;
                        var25 = var19[var23];
                        var25 = var27.bind(var3)(var25);
                        var26 = var25.intl;
                        var25 = var26.string;
                        var23 = var19[var23];
                        var23 = var27.bind(var3)(var23);
                        var23 = var23.t;
                        var23 = var23.Kd4uxG;
                        var25 = var25.bind(var26)(var23);
                        var23 = 'text';
                        var15[var23] = var25;
                        var23 = 'onPress';
                        var15[var23] = var24;
                        var16 = var18.bind(var3)(var16, var15);
                        var15 = new Array(2);
                        var15[0] = var16;
                        var16 = 25;
                        var16 = var19[var16];
                        var16 = var17.bind(var3)(var16);
                        var17 = var16.View;
                        var16 = {};
                        var23 = var22.border;
                        var19 = new Array(3);
                        var19[0] = var23;
                        if (!var21) {
                            _fun68736_ip = 987;
                            continue _fun68736
                        }
                    case 981:
                        var21 = var22.borderPlaying;
                    case 987:
                        var19[1] = var21;
                        var19[2] = var20;
                        var16.style = var19;
                        var16 = var18.bind(var3)(var17, var16);
                        var15[1] = var16;
                        var12.children = var15;
                        var12 = var14.bind(var3)(var13, var12);
                        var11[1] = var12;
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
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 1621, 3956, 660, 33, 1297, 671, 478, 566, 5730, 5616, 5693, 4801, 4089, 5210, 5773, 8589, 3941, 4084, 8596, 8598, 1234, 6483, 3720, 2]);