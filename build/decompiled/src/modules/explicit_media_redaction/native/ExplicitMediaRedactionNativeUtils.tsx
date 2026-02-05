// modules/explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EXPLICIT_MEDIA_SETTINGS_ACTION_SHEET_KEY;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchMediaTypes;
    var _closure1_slot5 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/explicit_media_redaction/native/ExplicitMediaRedactionNativeUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun81804: for (var _fun81804_ip = 0;;) switch (_fun81804_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.title;
                var8 = var0.subtitle;
                var1 = var0.handlePress;
                var _closure2_slot0 = var1;
                var10 = var0.excluded;
                var6 = var0.currentValue;
                var2 = _closure1_slot3;
                var0 = var2.getCurrentUser;
                var3 = var0.bind(var2)();
                var2 = null;
                var7 = var2 == var3;
                var0 = undefined;
                var5 = undefined;
                if (var7) {
                    _fun81804_ip = 73;
                    continue _fun81804
                }
            case 67:
                var5 = var3.nsfwAllowed;
            case 73:
                var7 = new Array(0);
                var3 = var2 != var10;
                if (!var3) {
                    _fun81804_ip = 126;
                    continue _fun81804
                }
            case 84:
                var12 = var10.includes;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 3;
                var11 = var14[var11];
                var11 = var13.bind(var0)(var11);
                var11 = var11.ExplicitContentRedaction;
                var11 = var11.SHOW;
                var3 = var12.bind(var10)(var11);
            case 126:
                if (var3) {
                    _fun81804_ip = 132;
                    continue _fun81804
                }
            case 129:
                var3 = !var5;
            case 132:
                if (var3) {
                    _fun81804_ip = 245;
                    continue _fun81804
                }
            case 135:
                var5 = var7.push;
                var3 = {};
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 3;
                var11 = var15[var11];
                var11 = var14.bind(var0)(var11);
                var11 = var11.ExplicitContentRedaction;
                var11 = var11.SHOW;
                var3.value = var11;
                var11 = 4;
                var12 = var15[var11];
                var12 = var14.bind(var0)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var0)(var11);
                var11 = var11.t;
                var11 = var11["5k5OFp"];
                var11 = var12.bind(var13)(var11);
                var3.label = var11;
                var11 = function() {
                    _fun81805: for (var _fun81805_ip = 0;;) switch (_fun81805_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.shouldAgeVerifyForExplicitMedia;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun81805_ip = 84;
                                continue _fun81805
                            }
                        case 38:
                            var2 = _closure2_slot0;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 3;
                            var1 = var5[var1];
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.ExplicitContentRedaction;
                            var1 = var1.SHOW;
                            var1 = var2.bind(var0)(var1);
                            _fun81805_ip = 150;
                            continue _fun81805;
                        case 84:
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 6;
                            var1 = var6[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.showAgeVerificationGetStartedModal;
                            var1 = {};
                            var5 = _closure1_slot0;
                            var4 = 7;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.AgeVerificationModalEntryPoint;
                            var4 = var4.OBSCURED_MEDIA;
                            var1.entryPoint = var4;
                            var1 = var2.bind(var3)(var1);
                        case 150:
                            return var0;
                    }
                };
                var3.onPress = var11;
                var3 = var5.bind(var7)(var3);
            case 245:
                var3 = var2 != var10;
                if (!var3) {
                    _fun81804_ip = 294;
                    continue _fun81804
                }
            case 252:
                var11 = var10.includes;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 3;
                var5 = var13[var5];
                var5 = var12.bind(var0)(var5);
                var5 = var5.ExplicitContentRedaction;
                var5 = var5.BLUR;
                var3 = var11.bind(var10)(var5);
            case 294:
                if (var3) {
                    _fun81804_ip = 407;
                    continue _fun81804
                }
            case 297:
                var5 = var7.push;
                var3 = {};
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 3;
                var11 = var15[var11];
                var11 = var14.bind(var0)(var11);
                var11 = var11.ExplicitContentRedaction;
                var11 = var11.BLUR;
                var3.value = var11;
                var11 = 4;
                var12 = var15[var11];
                var12 = var14.bind(var0)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var0)(var11);
                var11 = var11.t;
                var11 = var11.S49Uad;
                var11 = var12.bind(var13)(var11);
                var3.label = var11;
                var11 = function() {
                    var2 = _closure2_slot0;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.ExplicitContentRedaction;
                    var1 = var1.BLUR;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var3.onPress = var11;
                var3 = var5.bind(var7)(var3);
            case 407:
                var2 = var2 != var10;
                if (!var2) {
                    _fun81804_ip = 456;
                    continue _fun81804
                }
            case 414:
                var5 = var10.includes;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 3;
                var3 = var12[var3];
                var3 = var11.bind(var0)(var3);
                var3 = var3.ExplicitContentRedaction;
                var3 = var3.BLOCK;
                var2 = var5.bind(var10)(var3);
            case 456:
                if (var2) {
                    _fun81804_ip = 569;
                    continue _fun81804
                }
            case 459:
                var3 = var7.push;
                var2 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 3;
                var5 = var13[var5];
                var5 = var12.bind(var0)(var5);
                var5 = var5.ExplicitContentRedaction;
                var5 = var5.BLOCK;
                var2.value = var5;
                var5 = 4;
                var10 = var13[var5];
                var10 = var12.bind(var0)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var5 = var13[var5];
                var5 = var12.bind(var0)(var5);
                var5 = var5.t;
                var5 = var5["D/157Y"];
                var5 = var10.bind(var11)(var5);
                var2.label = var5;
                var4 = function() {
                    var2 = _closure2_slot0;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.ExplicitContentRedaction;
                    var1 = var1.BLOCK;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2.onPress = var4;
                var2 = var3.bind(var7)(var2);
            case 569:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var3 = 8;
                var3 = var2[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.openLazy;
                var10 = _closure1_slot0;
                var3 = 10;
                var3 = var2[var3];
                var10 = var10.bind(var0)(var3);
                var3 = 9;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var10.bind(var0)(var3, var2);
                var2 = _closure1_slot4;
                var1 = {};
                var1.title = var9;
                var1.subtitle = var8;
                var1.options = var7;
                var1.currentValue = var6;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var0;
        }
    };
    var2.handleSensitiveMediaFilterPress = var3;
    var1 = function arg0, arg1() {
        _fun81808: for (var _fun81808_ip = 0;;) switch (_fun81808_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun81808_ip = 363;
                    continue _fun81808
                }
            case 15:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 11;
                var1 = var1[var7];
                var4 = undefined;
                var5 = var5.bind(var4)(var1);
                var1 = var5.getEnabledHarmTypesForMessage;
                var6 = var1.bind(var5)(var6);
                var1 = 0;
                if (!(var1 !== var6)) {
                    _fun81808_ip = 359;
                    continue _fun81808
                }
            case 60:
                var5 = var3.type;
                var1 = _closure1_slot5;
                var1 = var1.ATTACHMENT;
                if (!(var5 !== var1)) {
                    _fun81808_ip = 233;
                    continue _fun81808
                }
            case 82:
                var5 = var3.type;
                var1 = _closure1_slot5;
                var1 = var1.EMBED;
                if (!(var5 !== var1)) {
                    _fun81808_ip = 179;
                    continue _fun81808
                }
            case 101:
                var8 = var3.type;
                var1 = _closure1_slot5;
                var1 = var1.COMPONENT;
                var5 = null;
                if (!(var8 === var1)) {
                    _fun81808_ip = 285;
                    continue _fun81808
                }
            case 125:
                var1 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 12;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.ObscuredMediaTypes;
                var8 = var8.GenericMedia;
                var1.type = var8;
                var8 = var3.unfurledMediaItem;
                var1.media = var8;
                var5 = var1;
                _fun81808_ip = 285;
                continue _fun81808;
            case 179:
                var1 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 12;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.ObscuredMediaTypes;
                var8 = var8.Embed;
                var1.type = var8;
                var8 = var3.embed;
                var1.media = var8;
                var5 = var1;
                _fun81808_ip = 285;
                continue _fun81808;
            case 233:
                var1 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 12;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.ObscuredMediaTypes;
                var8 = var8.Attachment;
                var1.type = var8;
                var3 = var3.attachment;
                var1.media = var3;
                var5 = var1;
            case 285:
                var0 = var0 != var5;
                if (!var0) {
                    _fun81808_ip = 357;
                    continue _fun81808
                }
            case 292:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var3 = var3.bind(var4)(var1);
                var1 = var3.isMediaObscuredForHarmTypes;
                var1 = var1.bind(var3)(var5, var6);
                if (!var1) {
                    _fun81808_ip = 354;
                    continue _fun81808
                }
            case 324:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.shouldAgeVerifyForExplicitMedia;
                var1 = var2.bind(var3)();
            case 354:
                var0 = var1;
            case 357:
                return var0;
            case 359:
                var0 = false;
                return var0;
            case 363:
                var0 = false;
                return var0;
        }
    };
    var2.shouldAgeVerifyForSearchMedia = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 4259, 8935, 1311, 1234, 4256, 5936, 4555, 3278, 10450, 1307, 4270, 4273, 2]);