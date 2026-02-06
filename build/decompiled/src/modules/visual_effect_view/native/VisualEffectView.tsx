// modules/visual_effect_view/native/VisualEffectView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun37529: for (var _fun37529_ip = 0;;) switch (_fun37529_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.MODERN_IOS_BLURS_EFFECTS_AVAILABLE;
                if (!var0) {
                    _fun37529_ip = 48;
                    continue _fun37529
                }
            case 37:
                var1 = 'default';
                var0 = arg1;
                if (!(var1 === var0)) {
                    _fun37529_ip = 70;
                    continue _fun37529
                }
            case 48:
                var0 = 'UIBlurEffectStyleDark';
                var1 = 'light';
                if (!(var1 === var3)) {
                    _fun37529_ip = 68;
                    continue _fun37529
                }
            case 62:
                var0 = 'UIBlurEffectStyleLight';
            case 68:
                _fun37529_ip = 93;
                continue _fun37529;
            case 70:
                var1 = 'UIBlurEffectStyleSystemUltraThinMaterialDark';
                var2 = 'light';
                if (!(var2 === var3)) {
                    _fun37529_ip = 90;
                    continue _fun37529
                }
            case 84:
                var1 = 'UIBlurEffectStyleSystemUltraThinMaterialLight';
            case 90:
                var0 = var1;
            case 93:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun37530: for (var _fun37530_ip = 0;;) switch (_fun37530_ip) {
            case 0:
                var0 = arg1;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun37530_ip = 36;
                    continue _fun37530
                }
            case 9:
                var1 = 1;
                var3 = 'light';
                var2 = arg0;
                if (!(var3 === var2)) {
                    _fun37530_ip = 33;
                    continue _fun37530
                }
            case 23:
                var1 = 0.85;
            case 33:
                var0 = var1;
            case 36:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var1 = function arg0() {
        _fun37531: for (var _fun37531_ip = 0;;) switch (_fun37531_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.android_softwareBlurDisabled;
                var4 = var0.android_blurTargetViewNativeId;
                var0 = _closure1_slot6;
                if (!var0) {
                    _fun37531_ip = 77;
                    continue _fun37531
                }
            case 25:
                var1 = null;
                var1 = var1 == var4;
                if (var1) {
                    _fun37531_ip = 74;
                    continue _fun37531
                }
            case 34:
                if (!var3) {
                    _fun37531_ip = 68;
                    continue _fun37531
                }
            case 37:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 8;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.MODERN_ANDROID_BLURRING_AVAILABLE;
                var3 = !var2;
            case 68:
                var2 = true;
                var1 = var2 === var3;
            case 74:
                var0 = var1;
            case 77:
                return var0;
        }
    };
    var _closure1_slot9 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.useVisualEffectViewOverrides;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var4 = var8.isAndroid;
    var4 = var4.bind(var8)();
    var _closure1_slot6 = var4;
    var4 = var7.forwardRef;
    var3 = function arg0, arg1() {
        _fun37532: for (var _fun37532_ip = 0;;) switch (_fun37532_ip) {
            case 0:
                var5 = arg0;
                var7 = arg1;
                var17 = var5.blurTheme;
                var20 = var5.blurStyle;
                var4 = undefined;
                if (!(var20 === var4)) {
                    _fun37532_ip = 28;
                    continue _fun37532
                }
            case 24:
                var20 = 'default';
            case 28:
                var16 = var5.blurAmount;
                if (!(var16 === var4)) {
                    _fun37532_ip = 41;
                    continue _fun37532
                }
            case 38:
                var16 = 1;
            case 41:
                var10 = var5.blurTintRgba;
                var0 = var5.android_fallbackColor;
                var9 = var5.android_blurTargetViewNativeId;
                var3 = var5.android_softwareBlurDisabled;
                if (!(var3 === var4)) {
                    _fun37532_ip = 71;
                    continue _fun37532
                }
            case 69:
                var3 = false;
            case 71:
                var2 = {
                    'blurTheme': 0,
                    'blurStyle': 0,
                    'blurAmount': 0,
                    'blurTintRgba': 0,
                    'android_fallbackColor': 0,
                    'android_blurTargetViewNativeId': 0,
                    'android_softwareBlurDisabled': 0
                };
                var12 = null;
                var28 = var2;
                var27 = null;
                var1 = silentSetPrototypeOf(var28, var27);
                var28 = {};
                var27 = var5;
                var26 = var2;
                var5 = copyDataProperties(var28, var27, var26);
                var6 = var5.style;
                var2 = _closure1_slot4;
                var2 = var2.bind(var4)();
                var13 = var2.blurAmountOverride;
                var11 = var2.blurTintRgbaOverride;
                var18 = var2.blurEffectNameOverride;
                var2 = {};
                var2.blurTheme = var17;
                var2.blurStyle = var20;
                var2.style = var6;
                var2.android_fallbackColor = var0;
                var0 = var2.style;
                var23 = var2.blurTheme;
                var22 = var2.blurStyle;
                var15 = var2.android_fallbackColor;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var14 = 6;
                var6 = var2[var14];
                var25 = var8.bind(var4)(var6);
                var19 = var25.useToken;
                var24 = _closure1_slot1;
                var21 = 7;
                var6 = var2[var21];
                var6 = var24.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.LEGACY_BLUR_FALLBACK_DEFAULT;
                var19 = var19.bind(var25)(var6, var23);
                var6 = var2[var14];
                var8 = var8.bind(var4)(var6);
                var6 = var8.useToken;
                var2 = var2[var21];
                var2 = var24.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.LEGACY_BLUR_FALLBACK_ULTRA_THIN;
                var6 = var6.bind(var8)(var2, var23);
                var8 = {};
                var2 = 'default';
                if (!(var2 === var22)) {
                    _fun37532_ip = 301;
                    continue _fun37532
                }
            case 298:
                var6 = var19;
            case 301:
                var8.backgroundColor = var6;
                var6 = new Array(3);
                var6[0] = var8;
                var6[1] = var0;
                var8 = var12 != var15;
                var0 = undefined;
                if (!var8) {
                    _fun37532_ip = 335;
                    continue _fun37532
                }
            case 326:
                var8 = {};
                var8.backgroundColor = var15;
                var0 = var8;
            case 335:
                var6[2] = var0;
                var15 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = var8[var14];
                var23 = var15.bind(var4)(var0);
                var22 = var23.useToken;
                var19 = _closure1_slot1;
                var0 = var8[var21];
                var0 = var19.bind(var4)(var0);
                var0 = var0.colors;
                var0 = var0.LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT;
                var0 = var22.bind(var23)(var0, var17);
                var14 = var8[var14];
                var15 = var15.bind(var4)(var14);
                var14 = var15.useToken;
                var8 = var8[var21];
                var8 = var19.bind(var4)(var8);
                var8 = var8.colors;
                var8 = var8.LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN;
                var8 = var14.bind(var15)(var8, var17);
                if (!(var2 !== var20)) {
                    _fun37532_ip = 454;
                    continue _fun37532
                }
            case 437:
                var2 = 'ultra-thin';
                var15 = var8;
                if (!(var2 !== var20)) {
                    _fun37532_ip = 457;
                    continue _fun37532
                }
            case 450:
                var15 = undefined;
                _fun37532_ip = 457;
                continue _fun37532;
            case 454:
                var15 = var0;
            case 457:
                var2 = _closure1_slot9;
                var0 = {};
                var0.android_softwareBlurDisabled = var3;
                var0.android_blurTargetViewNativeId = var9;
                var0 = var2.bind(var4)(var0);
                if (var0) {
                    _fun37532_ip = 698;
                    continue _fun37532
                }
            case 484:
                var0 = _closure1_slot6;
                var8 = _closure1_slot5;
                var3 = _closure1_slot1;
                var14 = _closure1_slot2;
                if (var0) {
                    _fun37532_ip = 590;
                    continue _fun37532
                }
            case 503:
                var0 = 5;
                var0 = var14[var0];
                var2 = var3.bind(var4)(var0);
                var0 = {};
                var0.ref = var7;
                if (!(var12 == var18)) {
                    _fun37532_ip = 535;
                    continue _fun37532
                }
            case 525:
                var19 = _closure1_slot7;
                var18 = var19.bind(var4)(var17, var20);
            case 535:
                var0.blurEffectName = var18;
                var18 = var16;
                if (!(var12 != var13)) {
                    _fun37532_ip = 552;
                    continue _fun37532
                }
            case 549:
                var18 = var13;
            case 552:
                var0.blurAmount = var18;
                var18 = var10;
                if (!(var12 != var11)) {
                    _fun37532_ip = 567;
                    continue _fun37532
                }
            case 564:
                var18 = var11;
            case 567:
                var0.blurTintRgba = var18;
                var28 = var0;
                var27 = var5;
                var18 = copyDataProperties(var28, var27);
                var0 = var8.bind(var4)(var2, var0);
                _fun37532_ip = 696;
                continue _fun37532;
            case 590:
                var2 = 8;
                var2 = var14[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.ref = var7;
                if (!(var12 == var13)) {
                    _fun37532_ip = 622;
                    continue _fun37532
                }
            case 612:
                var14 = _closure1_slot8;
                var13 = var14.bind(var4)(var17, var16);
            case 622:
                var2.blurAmount = var13;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 9;
                var13 = var16[var13];
                var14 = var14.bind(var4)(var13);
                var13 = var14.hexToRgbaString;
                var13 = var13.bind(var14)(var15);
                var2.blurTintIOSParityCompensationRgba = var13;
                if (!(var12 != var11)) {
                    _fun37532_ip = 670;
                    continue _fun37532
                }
            case 667:
                var10 = var11;
            case 670:
                var2.blurTintRgba = var10;
                var2.blurTargetViewNativeId = var9;
                var28 = var2;
                var27 = var5;
                var9 = copyDataProperties(var28, var27);
                var0 = var8.bind(var4)(var3, var2);
            case 696:
                _fun37532_ip = 737;
                continue _fun37532;
            case 698:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var1.ref = var7;
                var28 = var1;
                var27 = var5;
                var5 = copyDataProperties(var28, var27);
                var5 = 'style';
                var1[var5] = var6;
                var0 = var3.bind(var4)(var2, var1);
            case 737:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/visual_effect_view/native/VisualEffectView.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.isBlurDisabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4075, 33, 478, 4076, 3153, 671, 4078, 3242, 2]);