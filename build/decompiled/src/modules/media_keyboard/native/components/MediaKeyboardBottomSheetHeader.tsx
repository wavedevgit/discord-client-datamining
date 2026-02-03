// modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun75731: for (var _fun75731_ip = 0;;) switch (_fun75731_ip) {
            case 0:
                var2 = arg0;
                var29 = var2.title;
                var30 = var2.subtitle;
                var18 = var2.animatedIndex;
                var _closure2_slot0 = var18;
                var0 = var2.channel;
                var _closure2_slot1 = var0;
                var0 = var2.draftType;
                var _closure2_slot2 = var0;
                var6 = var2.hideScrim;
                var0 = var2.onViewAll;
                var _closure2_slot3 = var0;
                var13 = var2.onPress;
                var _closure2_slot4 = var13;
                var22 = var2.onBack;
                var9 = var2.uploadLimit;
                var _closure2_slot5 = var9;
                var4 = var2.disableWhenReachedLimit;
                var2 = var2.includedUploadIds;
                var _closure2_slot6 = var2;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var2 = _closure1_slot17;
                var12 = var2.bind(var3)();
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 10;
                var5 = var10[var2];
                var15 = var7.bind(var3)(var5);
                var14 = var15.useStateFromStores;
                var5 = _closure1_slot6;
                var11 = new Array(1);
                var11[0] = var5;
                var5 = function() { // Environment: var1
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var19 = var14.bind(var15)(var11, var5);
                var _closure2_slot7 = var19;
                var5 = var10[var2];
                var15 = var7.bind(var3)(var5);
                var14 = var15.useStateFromStores;
                var5 = _closure1_slot7;
                var11 = new Array(1);
                var11[0] = var5;
                var5 = function() { // Environment: var1
                    _fun75733: for (var _fun75733_ip = 0;;) switch (_fun75733_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = var2.isPrivate;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun75733_ip = 53;
                                continue _fun75733
                            }
                        case 20:
                            var4 = _closure1_slot7;
                            var3 = var4.can;
                            var2 = _closure1_slot11;
                            var2 = var2.ATTACH_FILES;
                            var1 = _closure2_slot1;
                            var0 = var3.bind(var4)(var2, var1);
                        case 53:
                            return var0;
                    }
                };
                var5 = var14.bind(var15)(var11, var5);
                var2 = var10[var2];
                var11 = var7.bind(var3)(var2);
                var10 = var11.useStateFromStoresObject;
                var2 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var1
                    _fun75734: for (var _fun75734_ip = 0;;) switch (_fun75734_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var0 = null;
                            var3 = var0 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun75734_ip = 27;
                                continue _fun75734
                            }
                        case 18:
                            var3 = _closure2_slot6;
                            var2 = var3.length;
                        case 27:
                            if (!(var0 == var2)) {
                                _fun75734_ip = 63;
                                continue _fun75734
                            }
                        case 31:
                            var5 = _closure1_slot8;
                            var4 = var5.getUploadCount;
                            var0 = _closure2_slot1;
                            var3 = var0.id;
                            var0 = _closure2_slot2;
                            var2 = var4.bind(var5)(var3, var0);
                        case 63:
                            var0 = {};
                            var0.uploadCount = var2;
                            var1 = _closure2_slot5;
                            var1 = var2 >= var1;
                            var0.uploadLimitReached = var1;
                            return var0;
                    }
                };
                var7 = var10.bind(var11)(var7, var2);
                var2 = var7.uploadLimitReached;
                var17 = var7.uploadCount;
                var26 = !var5;
                if (var26) {
                    _fun75731_ip = 279;
                    continue _fun75731
                }
            case 270:
                if (!var2) {
                    _fun75731_ip = 276;
                    continue _fun75731
                }
            case 273:
                var2 = var4;
            case 276:
                var26 = var2;
            case 279:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 11;
                var5 = var4[var5];
                var7 = var2.bind(var3)(var5);
                var5 = var7.useBottomSheetInternal;
                var5 = var5.bind(var7)();
                var11 = var5.animatedSnapPoints;
                _closure2_slot8 = var11;
                var5 = 12;
                var7 = var4[var5];
                var15 = var2.bind(var3)(var7);
                var10 = var15.useAnimatedStyle;
                var7 = function() {
                    _fun75735: for (var _fun75735_ip = 0;;) switch (_fun75735_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 13;
                            var0 = var5[var0];
                            var8 = undefined;
                            var6 = var2.bind(var8)(var0);
                            var5 = var6.animatedIndexThreshold;
                            var2 = _closure2_slot8;
                            var0 = 0.7;
                            var0 = var5.bind(var6)(var2, var0);
                            var0 = var1 > var0;
                            var9 = 0;
                            if (!var0) {
                                _fun75735_ip = 79;
                                continue _fun75735
                            }
                        case 76:
                            var9 = 1;
                        case 79:
                            var10 = -30;
                            if (!var0) {
                                _fun75735_ip = 90;
                                continue _fun75735
                            }
                        case 88:
                            var10 = 0;
                        case 90:
                            var7 = 0.9;
                            if (!var0) {
                                _fun75735_ip = 106;
                                continue _fun75735
                            }
                        case 103:
                            var7 = 1;
                        case 106:
                            var0 = {};
                            var2 = _closure2_slot7;
                            var1 = var9;
                            if (var2) {
                                _fun75735_ip = 153;
                                continue _fun75735
                            }
                        case 118:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 14;
                            var2 = var6[var2];
                            var6 = var5.bind(var8)(var2);
                            var5 = var6.withSpring;
                            var2 = _closure1_slot16;
                            var1 = var5.bind(var6)(var9, var2);
                        case 153:
                            var0.opacity = var1;
                            var2 = {};
                            var5 = _closure2_slot7;
                            var1 = var10;
                            if (var5) {
                                _fun75735_ip = 204;
                                continue _fun75735
                            }
                        case 169:
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 14;
                            var5 = var9[var5];
                            var9 = var6.bind(var8)(var5);
                            var6 = var9.withSpring;
                            var5 = _closure1_slot16;
                            var1 = var6.bind(var9)(var10, var5);
                        case 204:
                            var2.translateY = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var5 = _closure2_slot7;
                            var3 = var7;
                            if (var5) {
                                _fun75735_ip = 264;
                                continue _fun75735
                            }
                        case 229:
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 14;
                            var5 = var9[var5];
                            var6 = var6.bind(var8)(var5);
                            var5 = var6.withSpring;
                            var4 = _closure1_slot16;
                            var3 = var5.bind(var6)(var7, var4);
                        case 264:
                            var2.scale = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var16 = {};
                var16.animatedIndex = var18;
                var14 = 13;
                var20 = var4[var14];
                var20 = var2.bind(var3)(var20);
                var20 = var20.animatedIndexThreshold;
                var16.animatedIndexThreshold = var20;
                var16.animatedSnapPoints = var11;
                var20 = 0.7;
                var16.INDEX_HEADER_CHANGE_THRESHOLD = var20;
                var16.reducedMotion = var19;
                var19 = 14;
                var19 = var4[var19];
                var19 = var2.bind(var3)(var19);
                var19 = var19.withSpring;
                var16.withSpring = var19;
                var19 = _closure1_slot16;
                var16.HEADER_SPRING = var19;
                var7.__closure = var16;
                var16 = 15115378565476.0;
                var7.__workletHash = var16;
                var16 = _closure1_slot18;
                var7.__initData = var16;
                var15 = var10.bind(var15)(var7);
                var7 = var4[var5];
                var16 = var2.bind(var3)(var7);
                var10 = var16.useAnimatedStyle;
                var7 = function() {
                    _fun75736: for (var _fun75736_ip = 0;;) switch (_fun75736_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var2 = var1.length;
                            var1 = 1;
                            if (!(var1 !== var2)) {
                                _fun75736_ip = 105;
                                continue _fun75736
                            }
                        case 28:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.interpolate;
                            var2 = _closure2_slot0;
                            var1 = var2.get;
                            var10 = var1.bind(var2)();
                            var9 = [0, 1];
                            var8 = [0, 15];
                            var7 = 'clamp';
                            var11 = var6;
                            var1 = var11[var5](var10, var9, var8, var7, var6);
                            _fun75736_ip = 193;
                            continue _fun75736;
                        case 105:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 12;
                            var3 = var3[var2];
                            var2 = undefined;
                            var6 = var4.bind(var2)(var3);
                            var5 = var6.interpolate;
                            var2 = _closure2_slot0;
                            var0 = var2.get;
                            var10 = var0.bind(var2)();
                            var3 = new Array(2);
                            var0 = -1;
                            var3[0] = var0;
                            var0 = 0;
                            var3[1] = var0;
                            var8 = [0, 15];
                            var7 = 'clamp';
                            var11 = var6;
                            var9 = var3;
                            var1 = var11[var5](var10, var9, var8, var7, var6);
                        case 193:
                            var0 = {};
                            var0.borderTopLeftRadius = var1;
                            var0.borderTopRightRadius = var1;
                            return var0;
                    }
                };
                var19 = {};
                var19.animatedSnapPoints = var11;
                var20 = var4[var5];
                var20 = var2.bind(var3)(var20);
                var20 = var20.interpolate;
                var19.interpolate = var20;
                var19.animatedIndex = var18;
                var20 = 15;
                var19.MAX_BORDER_RADIUS = var20;
                var7.__closure = var19;
                var19 = 1786801672279.0;
                var7.__workletHash = var19;
                var19 = _closure1_slot19;
                var7.__initData = var19;
                var16 = var10.bind(var16)(var7);
                var19 = _closure1_slot3;
                var10 = var19.useCallback;
                var7 = new Array(4);
                var7[0] = var18;
                var7[1] = var11;
                var7[2] = var13;
                var7[3] = var0;
                var0 = function() { // Environment: var1
                    _fun75737: for (var _fun75737_ip = 0;;) switch (_fun75737_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = var2.get;
                            var3 = var0.bind(var2)();
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var2 = var2[var0];
                            var0 = undefined;
                            var7 = var4.bind(var0)(var2);
                            var5 = var7.animatedIndexThreshold;
                            var4 = _closure2_slot8;
                            var2 = 0.7;
                            var2 = var5.bind(var7)(var4, var2);
                            if (!(!(var3 <= var2))) {
                                _fun75737_ip = 148;
                                continue _fun75737
                            }
                        case 71:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 15;
                            var2 = var4[var2];
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.track;
                            var2 = _closure1_slot10;
                            var3 = var2.MEDIA_PICKER_ACTION_SHEET_ENGAGED;
                            var2 = {};
                            var6 = _closure1_slot9;
                            var6 = var6.VIEW_ALL_CLICKED;
                            var2.action = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            var3 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun75737_ip = 166;
                                continue _fun75737
                            }
                        case 138:
                            var2 = _closure2_slot3;
                            var2 = var2.bind(var0)();
                            _fun75737_ip = 166;
                            continue _fun75737;
                        case 148:
                            var3 = _closure2_slot4;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun75737_ip = 166;
                                continue _fun75737
                            }
                        case 158:
                            var1 = _closure2_slot4;
                            var1 = var1.bind(var0)();
                        case 166:
                            return var0;
                    }
                };
                var0 = var10.bind(var19)(var0, var7);
                var5 = var4[var5];
                var7 = var2.bind(var3)(var5);
                var5 = var7.useAnimatedProps;
                var1 = function() {
                    _fun75738: for (var _fun75738_ip = 0;;) switch (_fun75738_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot0;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 13;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.animatedIndexThreshold;
                            var3 = _closure2_slot8;
                            var1 = 0.8;
                            var1 = var4.bind(var5)(var3, var1);
                            var2 = var2 > var1;
                            var1 = 'none';
                            if (!var2) {
                                _fun75738_ip = 86;
                                continue _fun75738
                            }
                        case 80:
                            var1 = 'box-none';
                        case 86:
                            var0.pointerEvents = var1;
                            return var0;
                    }
                };
                var10 = {};
                var10.animatedIndex = var18;
                var14 = var4[var14];
                var14 = var2.bind(var3)(var14);
                var14 = var14.animatedIndexThreshold;
                var10.animatedIndexThreshold = var14;
                var10.animatedSnapPoints = var11;
                var1.__closure = var10;
                var10 = 11298163742652.0;
                var1.__workletHash = var10;
                var10 = _closure1_slot20;
                var1.__initData = var10;
                var10 = var5.bind(var7)(var1);
                var1 = 16;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useGradientBottom;
                var14 = var1.bind(var2)();
                var5 = null;
                if (!(var5 == var29)) {
                    _fun75731_ip = 862;
                    continue _fun75731
                }
            case 731:
                var1 = 0;
                if (!(!(var17 > var1))) {
                    _fun75731_ip = 794;
                    continue _fun75731
                }
            case 737:
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 17;
                var2 = var11[var1];
                var2 = var7.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var11[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["+9QSnj"];
                var1 = var2.bind(var4)(var1);
                _fun75731_ip = 859;
                continue _fun75731;
            case 794:
                var4 = _closure1_slot0;
                var18 = _closure1_slot2;
                var2 = 17;
                var7 = var18[var2];
                var7 = var4.bind(var3)(var7);
                var11 = var7.intl;
                var7 = var11.formatToPlainString;
                var2 = var18[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var4 = var2.DbUmqv;
                var2 = {};
                var2.num = var17;
                var1 = var7.bind(var11)(var4, var2);
            case 859:
                var29 = var1;
            case 862:
                if (!(var5 == var30)) {
                    _fun75731_ip = 930;
                    continue _fun75731
                }
            case 866:
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 17;
                var4 = var11[var1];
                var4 = var2.bind(var3)(var4);
                var7 = var4.intl;
                var4 = var7.formatToPlainString;
                var1 = var11[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.t;
                var2 = var1["1BlNHb"];
                var1 = {};
                var1.max = var9;
                var30 = var4.bind(var7)(var2, var1);
            case 930:
                var7 = _closure1_slot13;
                var2 = _closure1_slot14;
                var1 = {};
                var11 = _closure1_slot12;
                var9 = _closure1_slot5;
                var4 = {};
                var17 = var12.headerSideItem;
                var4.style = var17;
                var21 = _closure1_slot12;
                var20 = _closure1_slot0;
                var24 = _closure1_slot2;
                var19 = 18;
                var17 = var24[var19];
                var17 = var20.bind(var3)(var17);
                var18 = var17.PressableOpacity;
                var17 = {};
                var23 = 'button';
                var17.accessibilityRole = var23;
                var25 = _closure1_slot15;
                var17.hitSlop = var25;
                var17.onPress = var22;
                var22 = var12.headerLeftPressable;
                var17.style = var22;
                var31 = _closure1_slot12;
                var22 = 19;
                var25 = var24[var22];
                var25 = var20.bind(var3)(var25);
                var28 = var25.Text;
                var27 = {
                    'color': 'text-brand',
                    'variant': 'text-md/semibold'
                };
                var25 = 17;
                var32 = var24[var25];
                var32 = var20.bind(var3)(var32);
                var34 = var32.intl;
                var33 = var34.string;
                var32 = var24[var25];
                var32 = var20.bind(var3)(var32);
                var32 = var32.t;
                var32 = var32["13/7kX"];
                var32 = var33.bind(var34)(var32);
                var27.children = var32;
                var27 = var31.bind(var3)(var28, var27);
                var17.children = var27;
                var17 = var21.bind(var3)(var18, var17);
                var4.children = var17;
                var4 = var11.bind(var3)(var9, var4);
                var9 = new Array(3);
                var9[0] = var4;
                var18 = _closure1_slot13;
                var17 = _closure1_slot5;
                var11 = {
                    'style': null,
                    'pointerEvents': 'none',
                    'accessible': true,
                    'accessibilityRole': 'header'
                };
                var4 = var12.headerTextContainer;
                var11.style = var4;
                var4 = true;
                var21 = global;
                var21 = var21.HermesInternal;
                var28 = var21.concat;
                var27 = '';
                var21 = ', ';
                var21 = var28.bind(var27)(var29, var21, var30);
                var11.accessibilityLabel = var21;
                var28 = _closure1_slot12;
                var21 = var24[var22];
                var21 = var20.bind(var3)(var21);
                var27 = var21.Text;
                var21 = {
                    'style': null,
                    'color': 'mobile-text-heading-primary',
                    'variant': 'heading-lg/bold',
                    'tabularNumbers': true
                };
                var31 = var12.centerText;
                var21.style = var31;
                var21.children = var29;
                var27 = var28.bind(var3)(var27, var21);
                var21 = new Array(2);
                var21[0] = var27;
                var29 = _closure1_slot12;
                var27 = var24[var22];
                var27 = var20.bind(var3)(var27);
                var28 = var27.Text;
                var27 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var31 = var12.centerText;
                var27.style = var31;
                var27.children = var30;
                var27 = var29.bind(var3)(var28, var27);
                var21[1] = var27;
                var11.children = var21;
                var11 = var18.bind(var3)(var17, var11);
                var9[1] = var11;
                var18 = _closure1_slot12;
                var17 = _closure1_slot5;
                var11 = {};
                var21 = var12.headerSideItem;
                var11.style = var21;
                var21 = _closure1_slot12;
                var19 = var24[var19];
                var19 = var20.bind(var3)(var19);
                var20 = var19.PressableOpacity;
                var19 = {};
                var19.accessibilityRole = var23;
                var23 = _closure1_slot15;
                var19.hitSlop = var23;
                var19.onPress = var0;
                var19.disabled = var26;
                var23 = var12.headerRightPressable;
                var0 = new Array(2);
                var0[0] = var23;
                var23 = {};
                var24 = 1;
                if (!var26) {
                    _fun75731_ip = 1441;
                    continue _fun75731
                }
            case 1431:
                var24 = 0.2;
            case 1441:
                var23.opacity = var24;
                var0[1] = var23;
                var19.style = var0;
                var24 = _closure1_slot12;
                var28 = _closure1_slot0;
                var0 = _closure1_slot2;
                var22 = var0[var22];
                var22 = var28.bind(var3)(var22);
                var23 = var22.Text;
                var22 = {
                    'color': 'text-brand',
                    'variant': 'text-md/semibold',
                    'lineBreakMode': 'tail',
                    'lineClamp': 1
                };
                var26 = var0[var25];
                var26 = var28.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var0[var25];
                var25 = var28.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.i9IRUc;
                var25 = var26.bind(var27)(var25);
                var22.children = var25;
                var22 = var24.bind(var3)(var23, var22);
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                var11.children = var19;
                var11 = var18.bind(var3)(var17, var11);
                var9[2] = var11;
                var1.children = var9;
                var9 = var7.bind(var3)(var2, var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot1;
                var11 = 20;
                var0 = var0[var11];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var17 = var12.headerContainer;
                var7 = new Array(2);
                var7[0] = var17;
                var7[1] = var16;
                var0.style = var7;
                var7 = 'box-none';
                var0.pointerEvents = var7;
                var5 = null;
                if (!(var4 !== var6)) {
                    _fun75731_ip = 1670;
                    continue _fun75731
                }
            case 1644:
                var7 = _closure1_slot12;
                var6 = _closure1_slot5;
                var4 = {};
                var16 = var12.headerScrim;
                var4.style = var16;
                var5 = var7.bind(var3)(var6, var4);
            case 1670:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var11];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var16 = var12.header;
                var11 = new Array(3);
                var11[0] = var16;
                var11[1] = var15;
                var11[2] = var14;
                var5.style = var11;
                var5.animatedProps = var10;
                var11 = _closure1_slot12;
                var10 = _closure1_slot4;
                var8 = {};
                var8.onPress = var13;
                var12 = var12.pressableHeaderBar;
                var8.style = var12;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Pressable;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var12 = 4;
    var3 = var5[var12];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.HEADER_HANDLE_HEIGHT;
    var3 = var3.MediaPickerActionSheetEngagedActions;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot10 = var6;
    var3 = var3.Permissions;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var6 = var3.jsxs;
    var _closure1_slot13 = var6;
    var3 = var3.Fragment;
    var _closure1_slot14 = var3;
    var3 = {
        'top': 12,
        'left': 12,
        'right': 12,
        'bottom': 12
    };
    var _closure1_slot15 = var3;
    var3 = {
        'mass': 0.1,
        'damping': 13,
        'stiffness': 270,
        'overshootClamping': true
    };
    var _closure1_slot16 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'backgroundColor': null,
        'height': 15,
        'position': 'absolute',
        'top': 0,
        'right': 0,
        'left': 0
    };
    var10 = 9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.headerScrim = var8;
    var8 = {
        'borderTopLeftRadius': null,
        'borderTopRightRadius': null,
        'position': 'absolute',
        'height': 150,
        'overflow': 'hidden',
        'top': 0,
        'left': 0,
        'right': 0
    };
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.none;
    var8.borderTopLeftRadius = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.none;
    var8.borderTopRightRadius = var9;
    var3.headerContainer = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'backgroundColor': null,
        'alignItems': 'center'
    };
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.TRANSPARENT;
    var8.backgroundColor = var9;
    var9 = 'center';
    var8.height = var13;
    var3.headerHandleWrap = var8;
    var8 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var13;
    var8.height = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = 32;
    var8.width = var12;
    var3.headerHandle = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var8.paddingBottom = var12;
    var3.headerHandleOnlyWrap = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'right': 0,
        'paddingHorizontal': 16,
        'paddingVertical': 18,
        'backgroundColor': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'flexShrink': 0,
        'flex': 1
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var12;
    var3.header = var8;
    var8 = {
        'position': 'absolute',
        'top': 0,
        'right': 0,
        'left': 0,
        'bottom': 0
    };
    var3.pressableHeaderBar = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var8.paddingHorizontal = var10;
    var3.headerTextContainer = var8;
    var8 = {
        'flex': 1,
        'alignSelf': 'stretch'
    };
    var3.headerSideItem = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'flex-start'
    };
    var3.headerLeftPressable = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'flex-end'
    };
    var3.headerRightPressable = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.centerText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot17 = var3;
    var3 = {};
    var6 = 'function MediaKeyboardBottomSheetHeaderTsx1(){const{animatedIndex,animatedIndexThreshold,animatedSnapPoints,INDEX_HEADER_CHANGE_THRESHOLD,reducedMotion,withSpring,HEADER_SPRING}=this.__closure;const nearTop=animatedIndex.get()>animatedIndexThreshold(animatedSnapPoints,INDEX_HEADER_CHANGE_THRESHOLD);const targetOpacity=nearTop?1:0;const targetTranslateY=nearTop?0:-30;const targetScale=nearTop?1:0.9;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,HEADER_SPRING),transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,HEADER_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,HEADER_SPRING)}]};}';
    var3.code = var6;
    var _closure1_slot18 = var3;
    var3 = {};
    var6 = "function MediaKeyboardBottomSheetHeaderTsx2(){const{animatedSnapPoints,interpolate,animatedIndex,MAX_BORDER_RADIUS}=this.__closure;const borderRadius=animatedSnapPoints.get().length===1?interpolate(animatedIndex.get(),[-1,0],[0,MAX_BORDER_RADIUS],'clamp'):interpolate(animatedIndex.get(),[0,1],[0,MAX_BORDER_RADIUS],'clamp');return{borderTopLeftRadius:borderRadius,borderTopRightRadius:borderRadius};}";
    var3.code = var6;
    var _closure1_slot19 = var3;
    var3 = {};
    var6 = "function MediaKeyboardBottomSheetHeaderTsx3(){const{animatedIndex,animatedIndexThreshold,animatedSnapPoints}=this.__closure;return{pointerEvents:animatedIndex.get()>animatedIndexThreshold(animatedSnapPoints,0.8)?'box-none':'none'};}";
    var3.code = var6;
    var _closure1_slot20 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var8 = arg0;
        var3 = _closure1_slot13;
        var2 = _closure1_slot14;
        var1 = {};
        var7 = _closure1_slot12;
        var6 = _closure1_slot21;
        var4 = {};
        var0 = var8.title;
        var4.title = var0;
        var0 = var8.subtitle;
        var4.subtitle = var0;
        var0 = var8.animatedIndex;
        var4.animatedIndex = var0;
        var0 = var8.channel;
        var4.channel = var0;
        var0 = var8.draftType;
        var4.draftType = var0;
        var0 = var8.hideScrim;
        var4.hideScrim = var0;
        var0 = var8.onBack;
        var4.onBack = var0;
        var0 = var8.onPress;
        var4.onPress = var0;
        var0 = var8.onViewAll;
        var4.onViewAll = var0;
        var0 = var8.uploadLimit;
        var4.uploadLimit = var0;
        var0 = var8.disableWhenReachedLimit;
        var4.disableWhenReachedLimit = var0;
        var0 = var8.includedUploadIds;
        var4.includedUploadIds = var0;
        var0 = undefined;
        var6 = var7.bind(var0)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var11 = _closure1_slot12;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var7 = 21;
        var7 = var9[var7];
        var10 = var6.bind(var0)(var7);
        var7 = {};
        var12 = var8.animatedIndex;
        var7.animatedIndex = var12;
        var12 = var8.overflowButtons;
        var7.overflowButtons = var12;
        var7 = var11.bind(var0)(var10, var7);
        var4[1] = var7;
        var7 = _closure1_slot12;
        var5 = 22;
        var5 = var9[var5];
        var6 = var6.bind(var0)(var5);
        var5 = {};
        var9 = var8.animatedIndex;
        var5.animatedIndex = var9;
        var8 = var8.onPress;
        var5.onPress = var8;
        var5 = var7.bind(var0)(var6, var5);
        var4[2] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 3091, 4000, 1566, 660, 33, 1297, 671, 566, 4933, 3720, 9417, 4081, 795, 8910, 1234, 4902, 3941, 3910, 9588, 9593, 2]);