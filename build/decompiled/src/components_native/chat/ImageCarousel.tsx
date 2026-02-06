// components_native/chat/ImageCarousel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 8;
        var2 = var8[var1];
        var6 = undefined;
        var5 = var7.bind(var6)(var2);
        var4 = var5.useSharedValue;
        var2 = 0;
        var5 = var4.bind(var5)(var2);
        var _closure2_slot0 = var5;
        var10 = _closure1_slot3;
        var9 = var10.useEffect;
        var4 = new Array(2);
        var4[0] = var5;
        var2 = arg0;
        var4[1] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.set;
            var0 = 1;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var2 = var9.bind(var10)(var2, var4);
        var1 = var8[var1];
        var2 = var7.bind(var6)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            var0 = {};
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 9;
            var1 = var7[var1];
            var4 = undefined;
            var9 = var5.bind(var4)(var1);
            var8 = var9.withTiming;
            var3 = _closure2_slot0;
            var1 = var3.get;
            var2 = var1.bind(var3)();
            var1 = {};
            var6 = 300;
            var1.duration = var6;
            var6 = 10;
            var6 = var7[var6];
            var6 = var5.bind(var4)(var6);
            var6 = var6.STANDARD_EASING;
            var1.easing = var6;
            var6 = 'animate-always';
            var1 = var8.bind(var9)(var2, var1, var6);
            var0.opacity = var1;
            var2 = {};
            var1 = 11;
            var1 = var7[var1];
            var5 = var5.bind(var4)(var1);
            var4 = var5.withSpring;
            var1 = var3.get;
            var3 = var1.bind(var3)();
            var1 = {
                'stiffness': 80,
                'damping': 6,
                'mass': 0.3
            };
            var1 = var4.bind(var5)(var3, var1, var6);
            var2.scale = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var0.transform = var1;
            return var0;
        };
        var4 = {};
        var9 = 9;
        var9 = var8[var9];
        var9 = var7.bind(var6)(var9);
        var9 = var9.withTiming;
        var4.withTiming = var9;
        var4.animatedStylePropValue = var5;
        var5 = 10;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.STANDARD_EASING;
        var4.STANDARD_EASING = var5;
        var5 = 11;
        var5 = var8[var5];
        var5 = var7.bind(var6)(var5);
        var5 = var5.withSpring;
        var4.withSpring = var5;
        var0.__closure = var4;
        var4 = 9754366991991.0;
        var0.__workletHash = var4;
        var3 = _closure1_slot14;
        var0.__initData = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot16 = var1;
    var0 = function arg0() {
        _fun74838: for (var _fun74838_ip = 0;;) switch (_fun74838_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.onEdit;
                var _closure2_slot0 = var13;
                var15 = var1.onRemove;
                var _closure2_slot1 = var15;
                var19 = var1.channelId;
                var _closure2_slot2 = var19;
                var16 = var1.highlightThumbnails;
                var3 = undefined;
                if (!(var16 === var3)) {
                    _fun74838_ip = 48;
                    continue _fun74838
                }
            case 46:
                var16 = false;
            case 48:
                var12 = var1.upload;
                var _closure2_slot3 = var12;
                var _closure2_slot4 = var3;
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
                var _closure2_slot15 = var3;
                var1 = _closure1_slot13;
                var14 = var1.bind(var3)();
                _closure2_slot4 = var14;
                var7 = var12.description;
                _closure2_slot5 = var7;
                var1 = var12.id;
                _closure2_slot6 = var1;
                var26 = var12.item;
                _closure2_slot7 = var26;
                var18 = var12.isVideo;
                _closure2_slot8 = var18;
                var17 = var12.isImage;
                _closure2_slot9 = var17;
                var6 = var12.isThumbnail;
                _closure2_slot10 = var6;
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 12;
                var2 = var9[var2];
                var5 = var4.bind(var3)(var2);
                var4 = var26.platform;
                var8 = _closure1_slot0;
                var2 = 13;
                var2 = var9[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.UploadPlatform;
                var2 = var2.REACT_NATIVE;
                var4 = var4 === var2;
                var2 = 'Upload must be a React Native upload item.';
                var2 = var5.bind(var3)(var4, var2);
                if (!var16) {
                    _fun74838_ip = 257;
                    continue _fun74838
                }
            case 251:
                var2 = true;
                var16 = var2 === var6;
            case 257:
                _closure2_slot11 = var16;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 14;
                var2 = var5[var2];
                var8 = var4.bind(var3)(var2);
                var5 = var8.useStateFromStores;
                var2 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    _fun74839: for (var _fun74839_ip = 0;;) switch (_fun74839_ip) {
                        case 0:
                            var4 = _closure1_slot7;
                            var3 = var4.getUpload;
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot6;
                            var0 = _closure1_slot6;
                            var0 = var0.ChannelMessage;
                            var2 = var3.bind(var4)(var2, var1, var0);
                            var0 = null;
                            var3 = var0 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun74839_ip = 58;
                                continue _fun74839
                            }
                        case 52:
                            var1 = var2.spoiler;
                        case 58:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun74839_ip = 68;
                                continue _fun74839
                            }
                        case 65:
                            var0 = var1;
                        case 68:
                            return var0;
                    }
                };
                var5 = var5.bind(var8)(var4, var2);
                _closure2_slot12 = var5;
                var9 = _closure1_slot3;
                var8 = var9.useCallback;
                var4 = new Array(3);
                var4[0] = var18;
                var4[1] = var17;
                var4[2] = var16;
                var2 = function() { // Environment: var0
                    _fun74840: for (var _fun74840_ip = 0;;) switch (_fun74840_ip) {
                        case 0:
                            var3 = _closure1_slot10;
                            var1 = _closure2_slot11;
                            var2 = var3;
                            if (!var1) {
                                _fun74840_ip = 27;
                                continue _fun74840
                            }
                        case 20:
                            var1 = 4;
                            var2 = var3 - var1;
                        case 27:
                            var4 = _closure2_slot8;
                            if (var4) {
                                _fun74840_ip = 38;
                                continue _fun74840
                            }
                        case 34:
                            var4 = _closure2_slot9;
                        case 38:
                            var1 = undefined;
                            if (var4) {
                                _fun74840_ip = 48;
                                continue _fun74840
                            }
                        case 43:
                            var1 = 192;
                            var3 = undefined;
                        case 48:
                            var0 = {};
                            var0.width = var3;
                            var0.height = var2;
                            var0.maxWidth = var1;
                            return var0;
                    }
                };
                var9 = var8.bind(var9)(var2, var4);
                _closure2_slot13 = var9;
                var10 = _closure1_slot3;
                var8 = var10.useCallback;
                var4 = new Array(2);
                var4[0] = var15;
                var4[1] = var1;
                var2 = function() { // Environment: var0
                    _fun74841: for (var _fun74841_ip = 0;;) switch (_fun74841_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 == var2;
                            var3 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun74841_ip = 33;
                                continue _fun74841
                            }
                        case 20:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot6;
                            var0 = var2.bind(var3)(var1);
                        case 33:
                            return var0;
                    }
                };
                var8 = var8.bind(var10)(var2, var4);
                _closure2_slot14 = var8;
                var10 = _closure1_slot3;
                var4 = var10.useCallback;
                var2 = new Array(5);
                var2[0] = var19;
                var2[1] = var15;
                var2[2] = var13;
                var2[3] = var12;
                var2[4] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot2;
                    var1.channelId = var4;
                    var4 = _closure2_slot1;
                    var1.onRemove = var4;
                    var4 = function arg0() {
                        _fun74843: for (var _fun74843_ip = 0;;) switch (_fun74843_ip) {
                            case 0:
                                var2 = _closure2_slot0;
                                var0 = null;
                                var2 = var0 == var2;
                                var4 = undefined;
                                var0 = undefined;
                                if (var2) {
                                    _fun74843_ip = 37;
                                    continue _fun74843
                                }
                            case 20:
                                var3 = _closure2_slot0;
                                var2 = _closure2_slot6;
                                var1 = arg0;
                                var0 = var3.bind(var4)(var2, var1);
                            case 37:
                                return var0;
                        }
                    };
                    var1.onEdit = var4;
                    var3 = _closure2_slot3;
                    var1.upload = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var15 = var4.bind(var10)(var1, var2);
                var10 = _closure1_slot3;
                var4 = var10.useCallback;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function(arg0) { // Environment: var0
                    _fun74844: for (var _fun74844_ip = 0;;) switch (_fun74844_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var1 = var0.actionName;
                            var0 = 'remove';
                            if (!(var0 === var1)) {
                                _fun74844_ip = 36;
                                continue _fun74844
                            }
                        case 23:
                            var1 = _closure2_slot14;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 36:
                            var0 = undefined;
                            return var0;
                    }
                };
                var19 = var4.bind(var10)(var1, var2);
                var2 = _closure1_slot16;
                var1 = var26.id;
                var25 = null;
                if (!(var25 == var1)) {
                    _fun74838_ip = 491;
                    continue _fun74838
                }
            case 486:
                var1 = var26.uri;
            case 491:
                var13 = var2.bind(var3)(var1);
                _closure2_slot15 = var13;
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(10);
                var1[0] = var9;
                var1[1] = var13;
                var1[2] = var7;
                var7 = var26.uri;
                var1[3] = var7;
                var7 = var26.filename;
                var1[4] = var7;
                var1[5] = var17;
                var1[6] = var6;
                var1[7] = var18;
                var1[8] = var5;
                var1[9] = var14;
                var0 = function() { // Environment: var0
                    _fun74845: for (var _fun74845_ip = 0;;) switch (_fun74845_ip) {
                        case 0:
                            var0 = _closure2_slot13;
                            var3 = undefined;
                            var0 = var0.bind(var3)();
                            var11 = var0.width;
                            var10 = var0.height;
                            var7 = var0.maxWidth;
                            var2 = _closure1_slot12;
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 8;
                            var0 = var9[var0];
                            var0 = var8.bind(var3)(var0);
                            var1 = var0.View;
                            var0 = {};
                            var4 = _closure2_slot4;
                            var5 = var4.tileContainer;
                            var4 = new Array(3);
                            var4[0] = var5;
                            var5 = {};
                            var5.width = var11;
                            var5.height = var10;
                            var4[1] = var5;
                            var5 = _closure2_slot15;
                            var4[2] = var5;
                            var0.style = var4;
                            var6 = _closure1_slot11;
                            var4 = 16;
                            var4 = var9[var4];
                            var5 = var8.bind(var3)(var4);
                            var4 = {};
                            var12 = _closure2_slot7;
                            var12 = var12.uri;
                            var4.uri = var12;
                            var12 = _closure2_slot9;
                            var4.isImage = var12;
                            var12 = _closure2_slot8;
                            var4.isVideo = var12;
                            var4.width = var11;
                            var4.height = var10;
                            var4.maxFileWidth = var7;
                            var7 = _closure2_slot7;
                            var7 = var7.filename;
                            var4.fileName = var7;
                            var7 = 7;
                            var7 = var9[var7];
                            var7 = var8.bind(var3)(var7);
                            var7 = var7.radii;
                            var7 = var7.md;
                            var4.borderRadius = var7;
                            var5 = var6.bind(var3)(var5, var4);
                            var4 = new Array(3);
                            var4[0] = var5;
                            var6 = _closure2_slot10;
                            var9 = null;
                            var5 = null;
                            if (!var6) {
                                _fun74845_ip = 343;
                                continue _fun74845
                            }
                        case 236:
                            var8 = _closure1_slot11;
                            var7 = _closure1_slot4;
                            var6 = {};
                            var10 = _closure2_slot4;
                            var10 = var10.footerRightContainer;
                            var6.style = var10;
                            var12 = _closure1_slot11;
                            var16 = _closure1_slot1;
                            var17 = _closure1_slot2;
                            var15 = 17;
                            var10 = var17[var15];
                            var11 = var16.bind(var3)(var10);
                            var10 = {};
                            var18 = 18;
                            var18 = var17[var18];
                            var18 = var16.bind(var3)(var18);
                            var10.source = var18;
                            var15 = var17[var15];
                            var15 = var16.bind(var3)(var15);
                            var15 = var15.Sizes;
                            var15 = var15.SMALL_14;
                            var10.size = var15;
                            var10 = var12.bind(var3)(var11, var10);
                            var6.children = var10;
                            var5 = var8.bind(var3)(var7, var6);
                        case 343:
                            var4[1] = var5;
                            var7 = _closure1_slot12;
                            var6 = _closure1_slot4;
                            var5 = {};
                            var8 = _closure2_slot4;
                            var8 = var8.decorationsContainer;
                            var5.style = var8;
                            var8 = _closure2_slot12;
                            var10 = null;
                            if (!var8) {
                                _fun74845_ip = 426;
                                continue _fun74845
                            }
                        case 380:
                            var12 = _closure1_slot11;
                            var11 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var8 = 19;
                            var8 = var15[var8];
                            var11 = var11.bind(var3)(var8);
                            var8 = {};
                            var15 = _closure2_slot4;
                            var15 = var15.spoilerOverlay;
                            var8.style = var15;
                            var10 = var12.bind(var3)(var11, var8);
                        case 426:
                            var8 = new Array(3);
                            var8[0] = var10;
                            var12 = _closure1_slot12;
                            var11 = _closure1_slot4;
                            var10 = {};
                            var15 = _closure2_slot5;
                            var15 = var9 != var15;
                            var16 = null;
                            if (!var15) {
                                _fun74845_ip = 609;
                                continue _fun74845
                            }
                        case 460:
                            var15 = _closure2_slot5;
                            var15 = var9 == var15;
                            var17 = undefined;
                            if (var15) {
                                _fun74845_ip = 482;
                                continue _fun74845
                            }
                        case 473:
                            var15 = _closure2_slot5;
                            var17 = var15.length;
                        case 482:
                            var15 = 0;
                            var15 = var17 > var15;
                            var16 = null;
                            if (!var15) {
                                _fun74845_ip = 609;
                                continue _fun74845
                            }
                        case 493:
                            var18 = _closure1_slot11;
                            var22 = _closure1_slot0;
                            var23 = _closure1_slot2;
                            var15 = 20;
                            var15 = var23[var15];
                            var15 = var22.bind(var3)(var15);
                            var17 = var15.Text;
                            var15 = {
                                'variant': 'text-xs/medium',
                                'color': 'white',
                                'allowFontScaling': false
                            };
                            var19 = _closure2_slot4;
                            var19 = var19.altTagText;
                            var15.style = var19;
                            var19 = 21;
                            var20 = var23[var19];
                            var20 = var22.bind(var3)(var20);
                            var21 = var20.intl;
                            var20 = var21.string;
                            var19 = var23[var19];
                            var19 = var22.bind(var3)(var19);
                            var19 = var19.t;
                            var19 = var19.QEW81z;
                            var19 = var20.bind(var21)(var19);
                            var15.children = var19;
                            var16 = var18.bind(var3)(var17, var15);
                        case 609:
                            var15 = new Array(2);
                            var15[0] = var16;
                            var17 = _closure2_slot8;
                            var16 = null;
                            if (!var17) {
                                _fun74845_ip = 710;
                                continue _fun74845
                            }
                        case 626:
                            var19 = _closure1_slot11;
                            var18 = _closure1_slot4;
                            var17 = {};
                            var20 = _closure2_slot4;
                            var20 = var20.iconContainer;
                            var17.style = var20;
                            var22 = _closure1_slot11;
                            var21 = _closure1_slot0;
                            var23 = _closure1_slot2;
                            var20 = 22;
                            var20 = var23[var20];
                            var20 = var21.bind(var3)(var20);
                            var21 = var20.PlayIcon;
                            var20 = {
                                'size': 'xxs',
                                'color': 'white'
                            };
                            var20 = var22.bind(var3)(var21, var20);
                            var17.children = var20;
                            var16 = var19.bind(var3)(var18, var17);
                        case 710:
                            var15[1] = var16;
                            var10.children = var15;
                            var10 = var12.bind(var3)(var11, var10);
                            var8[1] = var10;
                            var10 = _closure2_slot12;
                            var9 = null;
                            if (!var10) {
                                _fun74845_ip = 821;
                                continue _fun74845
                            }
                        case 737:
                            var12 = _closure1_slot11;
                            var11 = _closure1_slot4;
                            var10 = {};
                            var14 = _closure2_slot4;
                            var14 = var14.iconContainer;
                            var10.style = var14;
                            var15 = _closure1_slot11;
                            var14 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var13 = 23;
                            var13 = var16[var13];
                            var13 = var14.bind(var3)(var13);
                            var14 = var13.EyeIcon;
                            var13 = {
                                'size': 'xxs',
                                'color': 'white'
                            };
                            var13 = var15.bind(var3)(var14, var13);
                            var10.children = var13;
                            var9 = var12.bind(var3)(var11, var10);
                        case 821:
                            var8[2] = var9;
                            var5.children = var8;
                            var5 = var7.bind(var3)(var6, var5);
                            var4[2] = var5;
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var12 = var2.bind(var4)(var0, var1);
                var0 = {};
                var1 = 'remove';
                var0.name = var1;
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var9 = 21;
                var1 = var21[var9];
                var1 = var22.bind(var3)(var1);
                var4 = var1.intl;
                var2 = var4.string;
                var1 = var21[var9];
                var1 = var22.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.kFwAsa;
                var1 = var2.bind(var4)(var1);
                var0.label = var1;
                var20 = new Array(1);
                var20[0] = var0;
                var2 = _closure1_slot12;
                var1 = _closure1_slot4;
                var0 = {};
                var7 = _closure1_slot11;
                var5 = 24;
                var4 = var21[var5];
                var4 = var22.bind(var3)(var4);
                var6 = var4.PressableOpacity;
                var4 = {};
                var10 = 'button';
                var4.accessibilityRole = var10;
                var23 = var21[var9];
                var23 = var22.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.formatToPlainString;
                var21 = var21[var9];
                var21 = var22.bind(var3)(var21);
                var21 = var21.t;
                var22 = var21.MJHFt9;
                var21 = {};
                var26 = var26.filename;
                var27 = var25 != var26;
                var25 = '';
                if (!var27) {
                    _fun74838_ip = 759;
                    continue _fun74838
                }
            case 756:
                var25 = var26;
            case 759:
                var21.name = var25;
                var21 = var23.bind(var24)(var22, var21);
                var4.accessibilityLabel = var21;
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var22 = var21[var9];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var9];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.QtJ1c5;
                var21 = var22.bind(var23)(var21);
                var4.accessibilityHint = var21;
                var4.accessibilityActions = var20;
                var4.onAccessibilityAction = var19;
                var17 = !var17;
                if (!var17) {
                    _fun74838_ip = 851;
                    continue _fun74838
                }
            case 848:
                var17 = !var18;
            case 851:
                var4.disabled = var17;
                var4.onPress = var15;
                var17 = var14.pressableContainer;
                var15 = new Array(2);
                var15[0] = var17;
                if (!var16) {
                    _fun74838_ip = 882;
                    continue _fun74838
                }
            case 876:
                var16 = var14.highlightedTileContainer;
            case 882:
                var15[1] = var16;
                var4.style = var15;
                var12 = var12.bind(var3)();
                var4.children = var12;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot11;
                var15 = _closure1_slot0;
                var17 = _closure1_slot2;
                var5 = var17[var5];
                var5 = var15.bind(var3)(var5);
                var6 = var5.PressableOpacity;
                var5 = {};
                var5.accessibilityRole = var10;
                var10 = var17[var9];
                var10 = var15.bind(var3)(var10);
                var12 = var10.intl;
                var10 = var12.string;
                var9 = var17[var9];
                var9 = var15.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.kFwAsa;
                var9 = var10.bind(var12)(var9);
                var5.accessibilityLabel = var9;
                var9 = var14.closeButton;
                var5.style = var9;
                var5.onPress = var8;
                var8 = {
                    'top': 4,
                    'bottom': 4,
                    'left': 4,
                    'right': 4
                };
                var5.hitSlop = var8;
                var10 = _closure1_slot11;
                var16 = _closure1_slot1;
                var8 = 8;
                var8 = var17[var8];
                var8 = var16.bind(var3)(var8);
                var9 = var8.View;
                var8 = {};
                var15 = var14.closeContainer;
                var12 = new Array(2);
                var12[0] = var15;
                var12[1] = var13;
                var8.style = var12;
                var13 = _closure1_slot11;
                var15 = 17;
                var11 = var17[var15];
                var12 = var16.bind(var3)(var11);
                var11 = {};
                var18 = 25;
                var18 = var17[var18];
                var18 = var16.bind(var3)(var18);
                var11.source = var18;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.Sizes;
                var15 = var15.MEDIUM;
                var11.size = var15;
                var15 = 7;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.unsafe_rawColors;
                var15 = var15.PRIMARY_500;
                var11.color = var15;
                var14 = var14.closeButtonIcon;
                var11.style = var14;
                var11 = var13.bind(var3)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var18 = 1;
    var4 = var6[var18];
    var4 = var5.bind(var0)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var13 = var4.StyleSheet;
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.DraftType;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var17 = 4;
    var4 = var6[var17];
    var4 = var5.bind(var0)(var4);
    var16 = var4.IMAGE_CAROUSEL_EXPERIMENT_TILE_MARGIN;
    var _closure1_slot8 = var16;
    var14 = var4.IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING;
    var _closure1_slot9 = var14;
    var4 = var4.IMAGE_CAROUSEL_TILE_HEIGHT;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = '100%';
    var10.width = var11;
    var4.container = var10;
    var10 = {};
    var10.marginHorizontal = var17;
    var4.pressableContainer = var10;
    var10 = {
        'position': 'relative',
        'minWidth': 60,
        'backgroundColor': null,
        'overflow': 'hidden'
    };
    var11 = 7;
    var15 = var6[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var10.backgroundColor = var15;
    var15 = var6[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var15 = var15 - var18;
    var10.borderRadius = var15;
    var4.tileContainer = var10;
    var10 = {};
    var20 = var13.absoluteFillObject;
    var21 = var10;
    var15 = copyDataProperties(var21, var20);
    var15 = 'flex';
    var10[var15] = var18;
    var18 = 'row';
    var15 = 'flexDirection';
    var10[var15] = var18;
    var18 = 'space-between';
    var15 = 'justifyContent';
    var10[var15] = var18;
    var18 = 'flex-end';
    var15 = 'alignItems';
    var10[var15] = var18;
    var15 = 'padding';
    var10[var15] = var17;
    var4.decorationsContainer = var10;
    var10 = {
        'borderColor': null,
        'borderStyle': 'solid',
        'borderWidth': 2,
        'borderRadius': 10
    };
    var15 = var6[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_TEXT_ACTIVE;
    var10.borderColor = var15;
    var4.highlightedTileContainer = var10;
    var10 = {
        'position': 'absolute',
        'top': null,
        'right': 2
    };
    var15 = -1;
    var15 = var15 * var16;
    var10.top = var15;
    var4.closeButton = var10;
    var10 = {};
    var10.paddingTop = var14;
    var4.scrollview = var10;
    var10 = {
        'height': 20,
        'width': 20,
        'borderRadius': 20,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var14 = 20;
    var15 = var6[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SCRIM_LIGHTBOX;
    var10.backgroundColor = var15;
    var4.closeContainer = var10;
    var10 = {};
    var15 = var6[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var10.borderRadius = var15;
    var15 = var6[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWER;
    var10.backgroundColor = var15;
    var15 = var6[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_TEXT_DEFAULT;
    var10.tintColor = var15;
    var4.closeButtonIcon = var10;
    var10 = {};
    var15 = var6[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var10.paddingHorizontal = var15;
    var10.lineHeight = var14;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SCRIM_LIGHTBOX;
    var10.backgroundColor = var14;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var10.borderRadius = var14;
    var14 = 'uppercase';
    var10.textTransform = var14;
    var4.altTagText = var10;
    var10 = {};
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SCRIM_LIGHTBOX;
    var10.backgroundColor = var14;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var10.borderRadius = var14;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var10.padding = var14;
    var4.iconContainer = var10;
    var10 = {};
    var20 = var13.absoluteFillObject;
    var21 = var10;
    var13 = copyDataProperties(var21, var20);
    var4.spoilerOverlay = var10;
    var10 = {
        'position': 'absolute',
        'bottom': 4,
        'right': 4,
        'alignItems': 'center',
        'justifyContent': 'center',
        'alignContent': 'center',
        'backgroundColor': null,
        'padding': 4,
        'borderRadius': 20,
        'opacity': 0.85
    };
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var10.backgroundColor = var11;
    var4.footerRightContainer = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = "function ImageCarouselTsx1(){const{withTiming,animatedStylePropValue,STANDARD_EASING,withSpring}=this.__closure;return{opacity:withTiming(animatedStylePropValue.get(),{duration:300,easing:STANDARD_EASING},'animate-always'),transform:[{scale:withSpring(animatedStylePropValue.get(),{stiffness:80,damping:6,mass:0.3},'animate-always')}]};}";
    var4.code = var8;
    var _closure1_slot14 = var4;
    var4 = function arg0() {
        var2 = _closure1_slot13;
        var3 = undefined;
        var4 = var2.bind(var3)();
        var5 = _closure1_slot3;
        var2 = var5.useRef;
        var6 = 0;
        var2 = var2.bind(var5)(var6);
        var _closure2_slot0 = var2;
        var5 = _closure1_slot3;
        var2 = var5.useRef;
        var2 = var2.bind(var5)(var6);
        var _closure2_slot1 = var2;
        var6 = _closure1_slot3;
        var5 = var6.useRef;
        var2 = null;
        var8 = var5.bind(var6)(var2);
        var _closure2_slot2 = var8;
        var7 = _closure1_slot3;
        var6 = var7.useCallback;
        var5 = function(arg0) { // Environment: var1
            _fun74847: for (var _fun74847_ip = 0;;) switch (_fun74847_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure2_slot0;
                    var3 = var0.current;
                    var0 = _closure2_slot1;
                    var5 = var0.current;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 26;
                    var4 = var4[var0];
                    var0 = undefined;
                    var6 = var6.bind(var0)(var4);
                    var4 = var6.getWindowDimensions;
                    var4 = var4.bind(var6)();
                    var4 = var4.width;
                    var4 = var5 + var4;
                    var4 = var4 > var2;
                    var3 = var2 > var3;
                    if (var3) {
                        _fun74847_ip = 82;
                        continue _fun74847
                    }
                case 79:
                    var3 = var4;
                case 82:
                    if (!var3) {
                        _fun74847_ip = 110;
                        continue _fun74847
                    }
                case 85:
                    var3 = _closure2_slot2;
                    var4 = var3.current;
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun74847_ip = 110;
                        continue _fun74847
                    }
                case 100:
                    var3 = var4.scrollToEnd;
                    var3 = var3.bind(var4)();
                case 110:
                    var1 = _closure2_slot0;
                    var1.current = var2;
                    return var0;
            }
        };
        var2 = new Array(0);
        var7 = var6.bind(var7)(var5, var2);
        var6 = _closure1_slot3;
        var5 = var6.useCallback;
        var2 = function(arg0) { // Environment: var1
            var1 = _closure2_slot1;
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.contentOffset;
            var0 = var0.x;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var1 = new Array(0);
        var6 = var5.bind(var6)(var2, var1);
        var2 = _closure1_slot11;
        var1 = _closure1_slot5;
        var0 = {};
        var9 = arg0;
        var10 = var0;
        var5 = copyDataProperties(var10, var9);
        var5 = 'ref';
        var0[var5] = var8;
        var5 = 'onContentSizeChange';
        var0[var5] = var7;
        var5 = 'onScroll';
        var0[var5] = var6;
        var6 = 16;
        var5 = 'scrollEventThrottle';
        var0[var5] = var6;
        var5 = var4.scrollview;
        var4 = 'contentContainerStyle';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var4;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var3
        _fun74849: for (var _fun74849_ip = 0;;) switch (_fun74849_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.attachments;
                var6 = var0.channelId;
                var _closure2_slot0 = var6;
                var10 = var0.headerElement;
                var0 = var0.highlightThumbnails;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun74849_ip = 42;
                    continue _fun74849
                }
            case 40:
                var0 = false;
            case 42:
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var0 = _closure1_slot13;
                var4 = var0.bind(var3)();
                var8 = null;
                var11 = var8 != var12;
                if (!var11) {
                    _fun74849_ip = 85;
                    continue _fun74849
                }
            case 74:
                var1 = var12.length;
                var0 = 0;
                var11 = var1 > var0;
            case 85:
                if (var11) {
                    _fun74849_ip = 92;
                    continue _fun74849
                }
            case 88:
                var11 = var8 != var10;
            case 92:
                var5 = _closure1_slot3;
                var2 = var5.useCallback;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function(arg0) { // Environment: var9
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 27;
                    var2 = var2[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.remove;
                    var3 = _closure2_slot0;
                    var1 = _closure1_slot6;
                    var2 = var1.ChannelMessage;
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var0 = var2.bind(var5)(var0, var1);
                _closure2_slot2 = var0;
                var5 = _closure1_slot3;
                var2 = var5.useCallback;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var0;
                var0 = function(arg0, arg1) { // Environment: var9
                    _fun74851: for (var _fun74851_ip = 0;;) switch (_fun74851_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun74851_ip = 27;
                                continue _fun74851
                            }
                        case 13:
                            var3 = _closure2_slot2;
                            var2 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var2)(var0);
                        case 27:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 28;
                            var2 = var7[var0];
                            var0 = undefined;
                            var5 = var6.bind(var0)(var2);
                            var4 = var5.addImagesFromPicker;
                            var3 = _closure2_slot0;
                            var2 = new Array(1);
                            var1 = arg1;
                            var2[0] = var1;
                            var1 = 13;
                            var1 = var7[var1];
                            var1 = var6.bind(var0)(var1);
                            var1 = var1.UploadOrigin;
                            var1 = var1.IMAGE_EDITOR;
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var5)(var0, var1);
                _closure2_slot3 = var0;
                var2 = _closure1_slot11;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var4.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var13 = 0;
                if (!var11) {
                    _fun74849_ip = 206;
                    continue _fun74849
                }
            case 194:
                var15 = _closure1_slot10;
                var14 = _closure1_slot9;
                var13 = var15 + var14;
            case 206:
                var5.height = var13;
                var13 = 0;
                if (!var11) {
                    _fun74849_ip = 237;
                    continue _fun74849
                }
            case 215:
                var15 = _closure1_slot9;
                var14 = _closure1_slot8;
                var15 = var15 - var14;
                var14 = -1;
                var13 = var14 * var15;
            case 237:
                var5.marginTop = var13;
                var6 = 0;
                if (!var11) {
                    _fun74849_ip = 257;
                    continue _fun74849
                }
            case 246:
                var13 = _closure1_slot8;
                var11 = 2;
                var6 = var11 * var13;
            case 257:
                var5.marginBottom = var6;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot12;
                var5 = _closure1_slot15;
                var4 = {
                    'horizontal': true,
                    'keyboardShouldPersistTaps': 'always',
                    'showsHorizontalScrollIndicator': false,
                    'accessibilityRole': 'list'
                };
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var7 = 21;
                var11 = var15[var7];
                var11 = var14.bind(var3)(var11);
                var13 = var11.intl;
                var11 = var13.string;
                var7 = var15[var7];
                var7 = var14.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.RhtzFe;
                var7 = var11.bind(var13)(var7);
                var4.accessibilityLabel = var7;
                var7 = new Array(2);
                var7[0] = var10;
                var10 = var8 != var12;
                var8 = null;
                if (!var10) {
                    _fun74849_ip = 402;
                    continue _fun74849
                }
            case 367:
                var10 = global;
                var11 = var10.Object;
                var10 = var11.values;
                var11 = var10.bind(var11)(var12);
                var10 = var11.map;
                var9 = function(arg0) { // Environment: var9
                    var0 = arg0;
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot17;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2.channelId = var5;
                    var5 = _closure2_slot1;
                    var2.highlightThumbnails = var5;
                    var5 = _closure2_slot3;
                    var2.onEdit = var5;
                    var1 = _closure2_slot2;
                    var2.onRemove = var1;
                    var2.upload = var0;
                    var1 = var0.uniqueId;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var8 = var10.bind(var11)(var9);
            case 402:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/chat/ImageCarousel.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.useTileEntranceAnimatedStyle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4001, 4000, 9442, 33, 1297, 671, 3722, 4098, 4887, 4082, 44, 4006, 566, 9443, 8860, 4087, 9646, 8408, 3943, 1234, 5879, 7567, 4905, 5893, 1464, 7634, 9445, 2]);