// modules/messages/native/renderer/ExplicitMediaUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun56127: for (var _fun56127_ip = 0;;) switch (_fun56127_ip) {
            case 0:
                var1 = arg0;
                var0 = 'image';
                if (!(var0 !== var1)) {
                    _fun56127_ip = 237;
                    continue _fun56127
                }
            case 14:
                var0 = 'video';
                if (!(var0 !== var1)) {
                    _fun56127_ip = 173;
                    continue _fun56127
                }
            case 25:
                var0 = 'file';
                if (!(var0 !== var1)) {
                    _fun56127_ip = 109;
                    continue _fun56127
                }
            case 33:
                var0 = 'generic';
                if (!(var0 !== var1)) {
                    _fun56127_ip = 45;
                    continue _fun56127
                }
            case 41:
                var0 = undefined;
                return var0;
            case 45:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 5;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.G71b77;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 109:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 5;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["3Gc2XP"];
                var0 = var1.bind(var2)(var0);
                return var0;
            case 173:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 5;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.ehBaMc;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 237:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 5;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.sb2W2J;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageAttachmentFlags;
    var _closure1_slot2 = var3;
    var3 = function arg0() {
        _fun56128: for (var _fun56128_ip = 0;;) switch (_fun56128_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.content_scan_version;
                var1 = undefined;
                if (!(var1 === var2)) {
                    _fun56128_ip = 35;
                    continue _fun56128
                }
            case 15:
                var2 = var0.contentScanVersion;
                var1 = undefined;
                if (!(var1 !== var2)) {
                    _fun56128_ip = 33;
                    continue _fun56128
                }
            case 27:
                var1 = var0.contentScanVersion;
            case 33:
                return var1;
            case 35:
                var0 = var0.content_scan_version;
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/ExplicitMediaUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun56129: for (var _fun56129_ip = 0;;) switch (_fun56129_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.attachment;
                var11 = var0.shouldObscureSpoiler;
                var7 = var0.enabledContentHarmTypeFlags;
                var4 = var0.shouldAgeVerify;
                var9 = var2.spoiler;
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var10 = undefined;
                var12 = var1.bind(var10)(var0);
                var8 = var12.hasFlag;
                var3 = var2.flags;
                var0 = null;
                var13 = var0 != var3;
                var1 = 0;
                var5 = 0;
                if (!var13) {
                    _fun56129_ip = 85;
                    continue _fun56129
                }
            case 82:
                var5 = var3;
            case 85:
                var3 = _closure1_slot2;
                var3 = var3.IS_SPOILER;
                var8 = var8.bind(var12)(var5, var3);
                var12 = {};
                var3 = _closure1_slot3;
                var5 = var3.bind(var10)(var2);
                var13 = var0 != var5;
                var3 = 0;
                if (!var13) {
                    _fun56129_ip = 124;
                    continue _fun56129
                }
            case 121:
                var3 = var5;
            case 124:
                var12.contentScanVersion = var3;
                var2 = var2.flags;
                var3 = var0 != var2;
                var0 = 0;
                if (!var3) {
                    _fun56129_ip = 146;
                    continue _fun56129
                }
            case 143:
                var0 = var2;
            case 146:
                var12.flags = var0;
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var2 = 2;
                var0 = var15[var2];
                var5 = var14.bind(var10)(var0);
                var3 = var5.getMediaObscuredReasonFromBitmask;
                var0 = {};
                var13 = 3;
                var16 = var15[var13];
                var16 = var14.bind(var10)(var16);
                var16 = var16.ObscuredMediaTypes;
                var16 = var16.Attachment;
                var0.type = var16;
                var0.media = var12;
                var0 = var3.bind(var5)(var0, var7);
                var2 = var15[var2];
                var5 = var14.bind(var10)(var2);
                var3 = var5.isMediaScanPending;
                var2 = {};
                var13 = var15[var13];
                var13 = var14.bind(var10)(var13);
                var13 = var13.ObscuredMediaTypes;
                var13 = var13.Attachment;
                var2.type = var13;
                var2.media = var12;
                var3 = var3.bind(var5)(var2, var7);
                var0 = var0.length;
                var1 = var0 > var1;
                var2 = var1;
                if (!var1) {
                    _fun56129_ip = 315;
                    continue _fun56129
                }
            case 285:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 4;
                var0 = var7[var0];
                var5 = var5.bind(var10)(var0);
                var0 = var5.isVerifiedTeen;
                var2 = var0.bind(var5)();
            case 315:
                var0 = {};
                var5 = var11;
                if (!var5) {
                    _fun56129_ip = 335;
                    continue _fun56129
                }
            case 323:
                var7 = var9;
                if (var7) {
                    _fun56129_ip = 332;
                    continue _fun56129
                }
            case 329:
                var7 = var8;
            case 332:
                var5 = var7;
            case 335:
                var0.isSpoiler = var5;
                var5 = '';
                var7 = var5;
                if (!var11) {
                    _fun56129_ip = 424;
                    continue _fun56129
                }
            case 350:
                if (var9) {
                    _fun56129_ip = 359;
                    continue _fun56129
                }
            case 353:
                var7 = var5;
                if (!var8) {
                    _fun56129_ip = 424;
                    continue _fun56129
                }
            case 359:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var8 = 5;
                var9 = var13[var8];
                var9 = var12.bind(var10)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var8 = var13[var8];
                var8 = var12.bind(var10)(var8);
                var8 = var8.t;
                var8 = var8["F+x38C"];
                var9 = var9.bind(var11)(var8);
                var8 = var9.toUpperCase;
                var7 = var8.bind(var9)();
            case 424:
                var0.spoiler = var7;
                var0.obscure = var1;
                if (!var1) {
                    _fun56129_ip = 492;
                    continue _fun56129
                }
            case 437:
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var6 = 5;
                var7 = var11[var6];
                var7 = var9.bind(var10)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var11[var6];
                var6 = var9.bind(var10)(var6);
                var6 = var6.t;
                var6 = var6.SpxcUR;
                var5 = var7.bind(var8)(var6);
            case 492:
                var0.obscureDescription = var5;
                var0.obscureAwaitingScan = var3;
                var3 = var1;
                if (!var3) {
                    _fun56129_ip = 511;
                    continue _fun56129
                }
            case 508:
                var3 = var4;
            case 511:
                var0.verifyAge = var3;
                var0.obscureHideControls = var2;
                var0.obscureIsOpaque = var1;
                return var0;
        }
    };
    var2.getAttachmentObscurityProps = var3;
    var3 = function arg0() {
        _fun56130: for (var _fun56130_ip = 0;;) switch (_fun56130_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.type;
                var12 = var0.mediaItem;
                var8 = var0.isSpoilered;
                var3 = var0.isAuthorBot;
                var1 = var0.shouldObscureSpoiler;
                var11 = var0.enabledContentHarmTypeFlags;
                var4 = var0.shouldAgeVerify;
                var14 = _closure1_slot0;
                var13 = _closure1_slot1;
                var2 = 2;
                var0 = var13[var2];
                var10 = undefined;
                var7 = var14.bind(var10)(var0);
                var5 = var7.getMediaObscuredReasonFromBitmask;
                var0 = {};
                var15 = 3;
                var13 = var13[var15];
                var13 = var14.bind(var10)(var13);
                var13 = var13.ObscuredMediaTypes;
                var13 = var13.GenericMedia;
                var0.type = var13;
                var0.media = var12;
                var0 = var5.bind(var7)(var0, var11);
                var3 = !var3;
                if (!var3) {
                    _fun56130_ip = 183;
                    continue _fun56130
                }
            case 122:
                var14 = _closure1_slot0;
                var13 = _closure1_slot1;
                var2 = var13[var2];
                var7 = var14.bind(var10)(var2);
                var5 = var7.isMediaScanPending;
                var2 = {};
                var13 = var13[var15];
                var13 = var14.bind(var10)(var13);
                var13 = var13.ObscuredMediaTypes;
                var13 = var13.GenericMedia;
                var2.type = var13;
                var2.media = var12;
                var3 = var5.bind(var7)(var2, var11);
            case 183:
                if (!var8) {
                    _fun56130_ip = 189;
                    continue _fun56130
                }
            case 186:
                var8 = var1;
            case 189:
                var1 = var0.length;
                var0 = 0;
                var1 = var1 > var0;
                var2 = var1;
                if (!var1) {
                    _fun56130_ip = 236;
                    continue _fun56130
                }
            case 206:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 4;
                var0 = var7[var0];
                var5 = var5.bind(var10)(var0);
                var0 = var5.isVerifiedTeen;
                var2 = var0.bind(var5)();
            case 236:
                var0 = {};
                var0.isSpoiler = var8;
                var7 = null;
                if (!var8) {
                    _fun56130_ip = 257;
                    continue _fun56130
                }
            case 248:
                var8 = _closure1_slot4;
                var7 = var8.bind(var10)(var9);
            case 257:
                var0.spoilerDescription = var7;
                var0.isObscured = var1;
                var5 = null;
                if (!var1) {
                    _fun56130_ip = 327;
                    continue _fun56130
                }
            case 272:
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var6 = 5;
                var7 = var11[var6];
                var7 = var9.bind(var10)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var11[var6];
                var6 = var9.bind(var10)(var6);
                var6 = var6.t;
                var6 = var6.SpxcUR;
                var5 = var7.bind(var8)(var6);
            case 327:
                var0.obscureDescription = var5;
                var0.obscureAwaitingScan = var3;
                var3 = var1;
                if (!var3) {
                    _fun56130_ip = 346;
                    continue _fun56130
                }
            case 343:
                var3 = var4;
            case 346:
                var0.verifyAge = var3;
                var0.obscureHideControls = var2;
                var0.obscureIsOpaque = var1;
                return var0;
        }
    };
    var2.getUnfurledMediaItemObscurityProps = var3;
    var1 = function() {
        var0 = {
            'isSpoiler': false,
            'spoiler': ''
        };
        return var0;
    };
    var2.getAttachmentObscurityDefaults = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1384, 4266, 4269, 4244, 1234, 2]);