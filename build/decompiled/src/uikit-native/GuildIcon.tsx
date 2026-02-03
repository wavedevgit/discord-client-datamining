// uikit-native/GuildIcon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var15 = function arg0() {
        var2 = arg0;
        var0 = {};
        var0.width = var2;
        var0.height = var2;
        var1 = 3;
        var1 = var2 / var1;
        var0.borderRadius = var1;
        return var0;
    };
    var0 = function arg0, arg1, arg2, arg3() {
        _fun59851: for (var _fun59851_ip = 0;;) switch (_fun59851_ip) {
            case 0:
                var5 = arg0;
                var6 = arg1;
                var4 = arg2;
                var2 = arg3;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun59851_ip = 27;
                    continue _fun59851
                }
            case 18:
                var1 = var5.icon;
                if (!(var0 == var1)) {
                    _fun59851_ip = 47;
                    continue _fun59851
                }
            case 27:
                var1 = var0 != var2;
                var0 = null;
                if (!var1) {
                    _fun59851_ip = 45;
                    continue _fun59851
                }
            case 36:
                var1 = {};
                var1.uri = var2;
                var0 = var1;
            case 45:
                _fun59851_ip = 107;
                continue _fun59851;
            case 47:
                var1 = _closure1_slot5;
                var1 = var5 instanceof var1;
                if (var1) {
                    _fun59851_ip = 84;
                    continue _fun59851
                }
            case 61:
                var7 = _closure1_slot6;
                var1 = _closure1_slot11;
                var3 = var1[var6];
                var1 = undefined;
                var1 = var7.bind(var1)(var5, var3, var4);
                _fun59851_ip = 104;
                continue _fun59851;
            case 84:
                var3 = var5.getIconSource;
                var2 = _closure1_slot11;
                var2 = var2[var6];
                var1 = var3.bind(var5)(var2, var4);
            case 104:
                var0 = var1;
            case 107:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun59852: for (var _fun59852_ip = 0;;) switch (_fun59852_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var0 = var0.bind(var1)(var3);
                var1 = null;
                if (var0) {
                    _fun59852_ip = 59;
                    continue _fun59852
                }
            case 26:
                var2 = var1 != var3;
                var0 = undefined;
                if (!var2) {
                    _fun59852_ip = 57;
                    continue _fun59852
                }
            case 35:
                var5 = 'number';
                var4 = typeof var3;
                var2 = var3;
                if (!(var5 !== var4)) {
                    _fun59852_ip = 54;
                    continue _fun59852
                }
            case 49:
                var2 = var3.uri;
            case 54:
                var0 = var2;
            case 57:
                _fun59852_ip = 82;
                continue _fun59852;
            case 59:
                var2 = 0;
                var2 = var3[var2];
                var3 = var1 == var2;
                var1 = undefined;
                if (var3) {
                    _fun59852_ip = 79;
                    continue _fun59852
                }
            case 74:
                var1 = var2.uri;
            case 79:
                var0 = var1;
            case 82:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var13.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var3 = var7[var1];
    var1 = arg3;
    var8 = var1.bind(var0)(var3);
    var _closure1_slot4 = var8;
    var1 = 2;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.ExpressionSourceGuildRecord;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.getGuildIconSource;
    var _closure1_slot6 = var3;
    var1 = var1.getGuildAcronym;
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var14 = var1.Fonts;
    var1 = 5;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot8 = var1;
    var3 = {};
    var1 = 'XXXSMALL';
    var3.XXXSMALL = var1;
    var1 = 'XXSMALL_12';
    var3.XXSMALL_12 = var1;
    var1 = 'XXSMALL';
    var3.XXSMALL = var1;
    var1 = 'XSMALL_20';
    var3.XSMALL_20 = var1;
    var1 = 'XSMALL';
    var3.XSMALL = var1;
    var1 = 'SMALL';
    var3.SMALL = var1;
    var1 = 'SMALL_32';
    var3.SMALL_32 = var1;
    var1 = 'SMALL_36';
    var3.SMALL_36 = var1;
    var1 = 'NORMAL';
    var3.NORMAL = var1;
    var1 = 'LARGE';
    var3.LARGE = var1;
    var1 = 'XLARGE';
    var3.XLARGE = var1;
    var1 = 'XXLARGE';
    var3.XXLARGE = var1;
    var _closure1_slot9 = var3;
    var1 = {};
    var9 = var3.XXXSMALL;
    var5 = [6, 4, 4, 4, 2, 1];
    var1[var9] = var5;
    var9 = var3.XXSMALL_12;
    var5 = [8, 6, 6, 4, 4, 2];
    var1[var9] = var5;
    var9 = var3.XXSMALL;
    var5 = [10, 8, 8, 6, 6, 4];
    var1[var9] = var5;
    var9 = var3.XSMALL_20;
    var5 = [12, 10, 10, 8, 8, 6];
    var1[var9] = var5;
    var9 = var3.XSMALL;
    var5 = [16, 16, 16, 14, 14, 12];
    var1[var9] = var5;
    var9 = var3.SMALL;
    var5 = [16, 16, 16, 14, 14, 12];
    var1[var9] = var5;
    var9 = var3.SMALL_32;
    var5 = [16, 16, 16, 14, 14, 12];
    var1[var9] = var5;
    var9 = var3.SMALL_36;
    var5 = [16, 16, 16, 14, 14, 12];
    var1[var9] = var5;
    var9 = var3.NORMAL;
    var5 = [16, 16, 16, 14, 14, 12];
    var1[var9] = var5;
    var9 = var3.LARGE;
    var5 = [16, 16, 16, 14, 14, 12];
    var1[var9] = var5;
    var9 = var3.XLARGE;
    var5 = [16, 16, 16, 14, 14, 12];
    var1[var9] = var5;
    var9 = var3.XXLARGE;
    var5 = [16, 16, 16, 14, 14, 12];
    var1[var9] = var5;
    var _closure1_slot10 = var1;
    var1 = {};
    var5 = var3.XXXSMALL;
    var25 = 10;
    var1[var5] = var25;
    var5 = var3.XXSMALL_12;
    var24 = 12;
    var1[var5] = var24;
    var5 = var3.XXSMALL;
    var23 = 16;
    var1[var5] = var23;
    var5 = var3.XSMALL_20;
    var22 = 20;
    var1[var5] = var22;
    var5 = var3.XSMALL;
    var21 = 24;
    var1[var5] = var21;
    var5 = var3.SMALL;
    var20 = 30;
    var1[var5] = var20;
    var5 = var3.SMALL_32;
    var19 = 32;
    var1[var5] = var19;
    var5 = var3.SMALL_36;
    var18 = 36;
    var1[var5] = var18;
    var5 = var3.NORMAL;
    var17 = 40;
    var1[var5] = var17;
    var5 = var3.LARGE;
    var16 = 48;
    var1[var5] = var16;
    var5 = var3.XLARGE;
    var12 = 64;
    var1[var5] = var12;
    var5 = var3.XXLARGE;
    var11 = 80;
    var1[var5] = var11;
    var _closure1_slot11 = var1;
    var5 = 6;
    var5 = var7[var5];
    var10 = var6.bind(var0)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var26 = {
        'justifyContent': 'center',
        'alignItems': 'center',
        'overflow': 'hidden'
    };
    var5.guildIcon = var26;
    var26 = var3.XXXSMALL;
    var25 = var15.bind(var0)(var25);
    var5[var26] = var25;
    var25 = var3.XXSMALL_12;
    var24 = var15.bind(var0)(var24);
    var5[var25] = var24;
    var24 = var3.XXSMALL;
    var23 = var15.bind(var0)(var23);
    var5[var24] = var23;
    var23 = var3.XSMALL_20;
    var22 = var15.bind(var0)(var22);
    var5[var23] = var22;
    var22 = var3.XSMALL;
    var21 = var15.bind(var0)(var21);
    var5[var22] = var21;
    var21 = var3.SMALL;
    var20 = var15.bind(var0)(var20);
    var5[var21] = var20;
    var20 = var3.SMALL_32;
    var19 = var15.bind(var0)(var19);
    var5[var20] = var19;
    var19 = var3.SMALL_36;
    var18 = var15.bind(var0)(var18);
    var5[var19] = var18;
    var18 = var3.NORMAL;
    var17 = var15.bind(var0)(var17);
    var5[var18] = var17;
    var17 = var3.LARGE;
    var16 = var15.bind(var0)(var16);
    var5[var17] = var16;
    var16 = var3.XLARGE;
    var12 = var15.bind(var0)(var12);
    var5[var16] = var12;
    var12 = var3.XXLARGE;
    var11 = var15.bind(var0)(var11);
    var5[var12] = var11;
    var15 = {};
    var11 = 7;
    var12 = var7[var11];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var15.backgroundColor = var12;
    var12 = 'guildTextContainer';
    var5[var12] = var15;
    var15 = {};
    var12 = var7[var11];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var15.backgroundColor = var12;
    var12 = 'guildTextContainerInactive';
    var5[var12] = var15;
    var15 = {};
    var12 = var7[var11];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var15.backgroundColor = var12;
    var12 = 'guildTextContainerInactiveNested';
    var5[var12] = var15;
    var15 = {};
    var12 = var7[var11];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var15.color = var12;
    var12 = var14.PRIMARY_SEMIBOLD;
    var15.fontFamily = var12;
    var12 = 'guildText';
    var5[var12] = var15;
    var12 = {};
    var14 = var14.PRIMARY_SEMIBOLD;
    var12.fontFamily = var14;
    var11 = var7[var11];
    var11 = var13.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var12.color = var11;
    var11 = 'guildTextActive';
    var5[var11] = var12;
    var12 = {};
    var11 = 'transparent';
    var12.backgroundColor = var11;
    var11 = 'guildTextContainerInactiveAlt';
    var5[var11] = var12;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot12 = var5;
    var5 = var8.memo;
    var4 = function arg0() {
        _fun59853: for (var _fun59853_ip = 0;;) switch (_fun59853_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guild;
                var _closure2_slot0 = var3;
                var24 = var0.icon;
                var4 = undefined;
                if (!(var24 === var4)) {
                    _fun59853_ip = 27;
                    continue _fun59853
                }
            case 25:
                var24 = null;
            case 27:
                var _closure2_slot1 = var24;
                var26 = var0.animate;
                if (!(var26 === var4)) {
                    _fun59853_ip = 43;
                    continue _fun59853
                }
            case 41:
                var26 = false;
            case 43:
                var _closure2_slot2 = var26;
                var14 = var0.loadingStyle;
                var19 = var0.size;
                if (!(var19 === var4)) {
                    _fun59853_ip = 75;
                    continue _fun59853
                }
            case 62:
                var2 = _closure1_slot9;
                var19 = var2.NORMAL;
            case 75:
                var _closure2_slot3 = var19;
                var9 = var0.selected;
                var _closure2_slot4 = var9;
                var2 = var0.TABS_altDefaultBackground;
                if (!(var2 === var4)) {
                    _fun59853_ip = 101;
                    continue _fun59853
                }
            case 99:
                var2 = false;
            case 101:
                var6 = var0.nested;
                if (!(var6 === var4)) {
                    _fun59853_ip = 113;
                    continue _fun59853
                }
            case 111:
                var6 = false;
            case 113:
                var8 = var0.textStyle;
                var _closure2_slot5 = var8;
                var16 = var0.preloadAnimation;
                var _closure2_slot6 = var16;
                var7 = var0.value;
                if (!(var7 === var4)) {
                    _fun59853_ip = 148;
                    continue _fun59853
                }
            case 144:
                var7 = '';
            case 148:
                var20 = var0.style;
                var _closure2_slot7 = var20;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var _closure2_slot11 = var4;
                var _closure2_slot12 = var4;
                var _closure2_slot13 = var4;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var _closure2_slot16 = var4;
                var _closure2_slot17 = var4;
                var _closure2_slot18 = var4;
                var0 = _closure1_slot12;
                var18 = var0.bind(var4)();
                _closure2_slot8 = var18;
                var0 = _closure1_slot13;
                var32 = undefined;
                var31 = var3;
                var30 = var19;
                var29 = var26;
                var28 = var24;
                var0 = var32[var0](var31, var30, var29, var28, var27);
                var17 = _closure1_slot4;
                var10 = var17.useRef;
                var15 = var10.bind(var17)(var0);
                _closure2_slot9 = var15;
                var11 = var17.useState;
                var10 = {};
                var10 = var11.bind(var17)(var10);
                var13 = _closure1_slot3;
                var12 = 2;
                var10 = var13.bind(var4)(var10, var12);
                var21 = 1;
                var10 = var10[var21];
                _closure2_slot10 = var10;
                var11 = var17.useState;
                var10 = false;
                var11 = var11.bind(var17)(var10);
                var11 = var13.bind(var4)(var11, var12);
                var12 = 0;
                var13 = var11[var12];
                var11 = var11[var21];
                _closure2_slot11 = var11;
                var12 = var17.useRef;
                var11 = true;
                var12 = var12.bind(var17)(var11);
                _closure2_slot12 = var12;
                var17 = _closure1_slot1;
                var22 = _closure1_slot2;
                var12 = 9;
                var12 = var22[var12];
                var12 = var17.bind(var4)(var12);
                var15 = var12.bind(var4)(var15);
                var17 = _closure1_slot14;
                var12 = var17.bind(var4)(var15);
                var23 = var17.bind(var4)(var0);
                var25 = var12 !== var23;
                _closure2_slot13 = var25;
                var12 = !var25;
                if (!var25) {
                    _fun59853_ip = 410;
                    continue _fun59853
                }
            case 393:
                var17 = var16;
                if (!var17) {
                    _fun59853_ip = 407;
                    continue _fun59853
                }
            case 399:
                var22 = 'string';
                var17 = var22 === var23;
            case 407:
                var12 = var17;
            case 410:
                var12 = !var12;
                _closure2_slot14 = var12;
                var23 = _closure1_slot4;
                var27 = var23.useEffect;
                var22 = function() { // Environment: var1
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot12;
                        var0 = false;
                        var1.current = var0;
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var17 = new Array(0);
                var17 = var27.bind(var23)(var22, var17);
                var22 = var23.useEffect;
                var17 = new Array(7);
                var17[0] = var12;
                var17[1] = var26;
                var17[2] = var25;
                var17[3] = var3;
                var17[4] = var24;
                var17[5] = var16;
                var17[6] = var19;
                var16 = function() { // Environment: var1
                    _fun59856: for (var _fun59856_ip = 0;;) switch (_fun59856_ip) {
                        case 0:
                            var8 = _closure1_slot13;
                            var12 = _closure2_slot0;
                            var11 = _closure2_slot3;
                            var10 = _closure2_slot2;
                            var9 = _closure2_slot1;
                            var0 = undefined;
                            var13 = undefined;
                            var2 = var13[var8](var12, var11, var10, var9, var8);
                            var _closure3_slot0 = var2;
                            var5 = _closure1_slot14;
                            var6 = var5.bind(var0)(var2);
                            var5 = _closure2_slot14;
                            if (var5) {
                                _fun59856_ip = 129;
                                continue _fun59856
                            }
                        case 56:
                            var5 = _closure2_slot13;
                            if (!var5) {
                                _fun59856_ip = 129;
                                continue _fun59856
                            }
                        case 63:
                            var5 = _closure2_slot6;
                            if (!var5) {
                                _fun59856_ip = 129;
                                continue _fun59856
                            }
                        case 70:
                            var7 = 'string';
                            var5 = typeof var6;
                            if (!(var7 === var5)) {
                                _fun59856_ip = 129;
                                continue _fun59856
                            }
                        case 81:
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 10;
                            var4 = var7[var4];
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.preload;
                            var5 = var4.bind(var5)(var6);
                            var4 = var5.then;
                            var3 = function() { // Environment: var3
                                var0 = global;
                                var3 = var0.setTimeout;
                                var0 = undefined;
                                var2 = function() { // Environment: var1
                                    _fun59858: for (var _fun59858_ip = 0;;) switch (_fun59858_ip) {
                                        case 0:
                                            var1 = _closure2_slot12;
                                            var1 = var1.current;
                                            if (!var1) {
                                                _fun59858_ip = 45;
                                                continue _fun59858
                                            }
                                        case 15:
                                            var2 = _closure2_slot9;
                                            var1 = _closure3_slot0;
                                            var2.current = var1;
                                            var2 = _closure2_slot10;
                                            var1 = undefined;
                                            var0 = {};
                                            var0 = var2.bind(var1)(var0);
                                        case 45:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = 0;
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3);
                            _fun59856_ip = 146;
                            continue _fun59856;
                        case 129:
                            var3 = _closure2_slot13;
                            if (!var3) {
                                _fun59856_ip = 146;
                                continue _fun59856
                            }
                        case 136:
                            var1 = _closure2_slot9;
                            var1.current = var2;
                        case 146:
                            return var0;
                    }
                };
                var16 = var22.bind(var23)(var16, var17);
                if (!var12) {
                    _fun59853_ip = 495;
                    continue _fun59853
                }
            case 492:
                var15 = var0;
            case 495:
                var12 = null;
                var0 = var12 == var15;
                _closure2_slot15 = var0;
                var17 = undefined;
                if (var0) {
                    _fun59853_ip = 527;
                    continue _fun59853
                }
            case 510:
                var17 = undefined;
                if (var13) {
                    _fun59853_ip = 527;
                    continue _fun59853
                }
            case 515:
                var13 = var12 == var14;
                var17 = undefined;
                if (var13) {
                    _fun59853_ip = 527;
                    continue _fun59853
                }
            case 524:
                var17 = var14;
            case 527:
                _closure2_slot16 = var17;
                var16 = undefined;
                if (!var0) {
                    _fun59853_ip = 579;
                    continue _fun59853
                }
            case 536:
                var16 = undefined;
                if (!(var10 === var9)) {
                    _fun59853_ip = 579;
                    continue _fun59853
                }
            case 542:
                if (var6) {
                    _fun59853_ip = 568;
                    continue _fun59853
                }
            case 545:
                if (var2) {
                    _fun59853_ip = 558;
                    continue _fun59853
                }
            case 548:
                var2 = var18.guildTextContainerInactive;
                _fun59853_ip = 566;
                continue _fun59853;
            case 558:
                var2 = var18.guildTextContainerInactiveAlt;
            case 566:
                _fun59853_ip = 576;
                continue _fun59853;
            case 568:
                var2 = var18.guildTextContainerInactiveNested;
            case 576:
                var16 = var2;
            case 579:
                _closure2_slot17 = var16;
                if (!(var12 == var3)) {
                    _fun59853_ip = 620;
                    continue _fun59853
                }
            case 587:
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 8;
                var2 = var13[var2];
                var6 = var6.bind(var4)(var2);
                var2 = var6.getAcronym;
                var7 = var2.bind(var6)(var7);
                _fun59853_ip = 629;
                continue _fun59853;
            case 620:
                var2 = _closure1_slot7;
                var7 = var2.bind(var4)(var3);
            case 629:
                var13 = undefined;
                if (!var0) {
                    _fun59853_ip = 680;
                    continue _fun59853
                }
            case 634:
                var2 = _closure1_slot10;
                var6 = var2[var19];
                var3 = undefined;
                if (!(var4 !== var7)) {
                    _fun59853_ip = 657;
                    continue _fun59853
                }
            case 648:
                var2 = var7.length;
                var3 = var6[var2];
            case 657:
                var2 = var6.length;
                var2 = var2 - var21;
                var2 = var6[var2];
                if (!(var12 != var3)) {
                    _fun59853_ip = 677;
                    continue _fun59853
                }
            case 674:
                var2 = var3;
            case 677:
                var13 = var2;
            case 680:
                _closure2_slot18 = var13;
                var6 = _closure1_slot4;
                var3 = var6.useMemo;
                var2 = new Array(9);
                var2[0] = var20;
                var2[1] = var19;
                var2[2] = var18;
                var2[3] = var17;
                var2[4] = var16;
                var2[5] = var13;
                var2[6] = var9;
                var2[7] = var8;
                var2[8] = var0;
                var1 = function() { // Environment: var1
                    _fun59859: for (var _fun59859_ip = 0;;) switch (_fun59859_ip) {
                        case 0:
                            var0 = _closure2_slot8;
                            var0 = var0.guildIcon;
                            var1 = new Array(3);
                            var1[0] = var0;
                            var2 = _closure2_slot8;
                            var0 = _closure2_slot3;
                            var0 = var2[var0];
                            var1[1] = var0;
                            var0 = _closure2_slot7;
                            var1[2] = var0;
                            var0 = _closure2_slot16;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun59859_ip = 69;
                                continue _fun59859
                            }
                        case 55:
                            var4 = var1.push;
                            var0 = _closure2_slot16;
                            var0 = var4.bind(var1)(var0);
                        case 69:
                            var0 = _closure2_slot15;
                            if (!var0) {
                                _fun59859_ip = 99;
                                continue _fun59859
                            }
                        case 76:
                            var4 = var1.unshift;
                            var0 = _closure2_slot8;
                            var0 = var0.guildTextContainer;
                            var0 = var4.bind(var1)(var0);
                        case 99:
                            var0 = _closure2_slot17;
                            if (!(var2 != var0)) {
                                _fun59859_ip = 121;
                                continue _fun59859
                            }
                        case 107:
                            var2 = var1.push;
                            var0 = _closure2_slot17;
                            var0 = var2.bind(var1)(var0);
                        case 121:
                            var0 = {};
                            var2 = function() {
                                var2 = _closure2_slot11;
                                var1 = undefined;
                                var0 = true;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var0.handleLoaded = var2;
                            var0.wrapperStyle = var1;
                            var2 = _closure2_slot15;
                            var1 = undefined;
                            if (!var2) {
                                _fun59859_ip = 219;
                                continue _fun59859
                            }
                        case 149:
                            var4 = _closure2_slot4;
                            var2 = false;
                            if (!(var2 !== var4)) {
                                _fun59859_ip = 173;
                                continue _fun59859
                            }
                        case 159:
                            var2 = _closure2_slot8;
                            var4 = var2.guildTextActive;
                            _fun59859_ip = 185;
                            continue _fun59859;
                        case 173:
                            var2 = _closure2_slot8;
                            var4 = var2.guildText;
                        case 185:
                            var2 = new Array(3);
                            var2[0] = var4;
                            var4 = {};
                            var5 = _closure2_slot18;
                            var4.fontSize = var5;
                            var2[1] = var4;
                            var3 = _closure2_slot5;
                            var2[2] = var3;
                            var1 = var2;
                        case 219:
                            var0.textComponentStyle = var1;
                            return var0;
                    }
                };
                var1 = var3.bind(var6)(var1, var2);
                var13 = var1.handleLoaded;
                var6 = var1.wrapperStyle;
                var8 = var1.textComponentStyle;
                var3 = _closure1_slot8;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                if (var0) {
                    _fun59853_ip = 834;
                    continue _fun59853
                }
            case 777:
                var0 = 10;
                var0 = var9[var0];
                var1 = var2.bind(var4)(var0);
                var0 = {};
                var0.style = var6;
                var0.source = var15;
                var14 = var12 != var14;
                var12 = undefined;
                if (!var14) {
                    _fun59853_ip = 811;
                    continue _fun59853
                }
            case 808:
                var12 = var13;
            case 811:
                var0.onLoadEnd = var12;
                var0.progressiveRenderingEnabled = var11;
                var0.fade = var10;
                var0 = var3.bind(var4)(var1, var0);
                _fun59853_ip = 926;
                continue _fun59853;
            case 834:
                var1 = 11;
                var1 = var9[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {
                    'shouldRasterizeIOS': true,
                    'style': null,
                    'collapsable': false
                };
                var1.style = var6;
                var6 = _closure1_slot0;
                var5 = 12;
                var5 = var9[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.NativeText;
                var5 = {
                    'numberOfLines': 1,
                    'ellipsizeMode': 'tail',
                    'accessible': false,
                    'accessibilityRole': 'none',
                    'accessibilityElementsHidden': true,
                    'experimental_useNativeText': true
                };
                var5.style = var8;
                var5.children = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 926:
                return var0;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/GuildIcon.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.GuildIconSizes = var3;
    var2.ImageSizes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 7394, 1416, 660, 33, 1297, 671, 1607, 4735, 4704, 6457, 290, 2]);