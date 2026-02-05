// modules/messages/MessageAttachmentUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0, arg1, arg2() {
        _fun89594: for (var _fun89594_ip = 0;;) switch (_fun89594_ip) {
            case 0:
                var0 = arg0;
                var7 = arg2;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun89594_ip = 522;
                    continue _fun89594
                }
            case 15:
                var4 = var0.type;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 6;
                var3 = var1[var8];
                var1 = undefined;
                var3 = var6.bind(var1)(var3);
                var3 = var3.ForumPostMediaTypes;
                var3 = var3.EMBED;
                if (!(var3 !== var4)) {
                    _fun89594_ip = 237;
                    continue _fun89594
                }
            case 64:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var6.bind(var1)(var3);
                var3 = var3.ForumPostMediaTypes;
                var3 = var3.ATTACHMENT;
                if (!(var3 !== var4)) {
                    _fun89594_ip = 189;
                    continue _fun89594
                }
            case 97:
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var6.bind(var1)(var3);
                var3 = var3.ForumPostMediaTypes;
                var3 = var3.COMPONENT;
                var6 = null;
                if (!(var3 === var4)) {
                    _fun89594_ip = 283;
                    continue _fun89594
                }
            case 135:
                var3 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 3;
                var4 = var9[var4];
                var4 = var8.bind(var1)(var4);
                var4 = var4.ObscuredMediaTypes;
                var4 = var4.GenericMedia;
                var3.type = var4;
                var4 = var0.srcUnfurledMediaItem;
                var3.media = var4;
                var6 = var3;
                _fun89594_ip = 283;
                continue _fun89594;
            case 189:
                var3 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 3;
                var4 = var9[var4];
                var4 = var8.bind(var1)(var4);
                var4 = var4.ObscuredMediaTypes;
                var4 = var4.Attachment;
                var3.type = var4;
                var3.media = var0;
                var6 = var3;
                _fun89594_ip = 283;
                continue _fun89594;
            case 237:
                var3 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 3;
                var4 = var9[var4];
                var4 = var8.bind(var1)(var4);
                var4 = var4.ObscuredMediaTypes;
                var4 = var4.Embed;
                var3.type = var4;
                var3.media = var0;
                var6 = var3;
            case 283:
                if (!(var2 != var6)) {
                    _fun89594_ip = 506;
                    continue _fun89594
                }
            case 290:
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 2;
                var4 = var8[var2];
                var9 = var3.bind(var1)(var4);
                var4 = var9.getMediaObscuredReasonFromBitmask;
                var4 = var4.bind(var9)(var6, var7);
                var2 = var8[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.isMediaScanPending;
                var6 = var2.bind(var3)(var6, var7);
                var2 = var4.length;
                var3 = 0;
                if (!(!(var2 > var3))) {
                    _fun89594_ip = 483;
                    continue _fun89594
                }
            case 357:
                var2 = new Array(2);
                if (var6) {
                    _fun89594_ip = 436;
                    continue _fun89594
                }
            case 364:
                var0 = var0.spoiler;
                if (var0) {
                    _fun89594_ip = 388;
                    continue _fun89594
                }
            case 373:
                var0 = false;
                var2[0] = var0;
                var2[1] = var1;
                var0 = var2;
                _fun89594_ip = 434;
                continue _fun89594;
            case 388:
                var6 = arg1;
                var2[0] = var6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 4;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.ObscureReason;
                var6 = var6.SPOILER;
                var2[1] = var6;
                var0 = var2;
            case 434:
                _fun89594_ip = 481;
                continue _fun89594;
            case 436:
                var6 = true;
                var2[0] = var6;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 4;
                var5 = var7[var5];
                var5 = var6.bind(var1)(var5);
                var5 = var5.ObscureReason;
                var5 = var5.POTENTIAL_EXPLICIT_CONTENT;
                var2[1] = var5;
                var0 = var2;
            case 481:
                _fun89594_ip = 504;
                continue _fun89594;
            case 483:
                var2 = new Array(2);
                var5 = true;
                var2[0] = var5;
                var3 = var4[var3];
                var2[1] = var3;
                var0 = var2;
            case 504:
                return var0;
            case 506:
                var0 = new Array(2);
                var2 = false;
                var0[0] = var2;
                var0[1] = var1;
                return var0;
            case 522:
                var0 = new Array(2);
                var1 = false;
                var0[0] = var1;
                var1 = undefined;
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.MessageAttachmentFlags;
    var _closure1_slot4 = var7;
    var4 = var4.Permissions;
    var _closure1_slot5 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/MessageAttachmentUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0, arg1) { // Environment: var1
        _fun89595: for (var _fun89595_ip = 0;;) switch (_fun89595_ip) {
            case 0:
                var10 = arg0;
                var9 = arg1;
                var0 = var10.spoiler;
                var1 = var10.flags;
                var2 = 0;
                var5 = undefined;
                var7 = 0;
                if (!(var5 !== var1)) {
                    _fun89595_ip = 30;
                    continue _fun89595
                }
            case 27:
                var7 = var1;
            case 30:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 2;
                var1 = var13[var4];
                var8 = var12.bind(var5)(var1);
                var6 = var8.getMediaObscuredReasonFromBitmask;
                var1 = {};
                var11 = 3;
                var14 = var13[var11];
                var14 = var12.bind(var5)(var14);
                var14 = var14.ObscuredMediaTypes;
                var14 = var14.Attachment;
                var1.type = var14;
                var1.media = var10;
                var1 = var6.bind(var8)(var1, var9);
                var4 = var13[var4];
                var8 = var12.bind(var5)(var4);
                var6 = var8.isMediaScanPending;
                var4 = {};
                var11 = var13[var11];
                var11 = var12.bind(var5)(var11);
                var11 = var11.ObscuredMediaTypes;
                var11 = var11.Attachment;
                var4.type = var11;
                var4.media = var10;
                var4 = var6.bind(var8)(var4, var9);
                var6 = var1.length;
                if (!(!(var6 > var2))) {
                    _fun89595_ip = 286;
                    continue _fun89595
                }
            case 165:
                if (var4) {
                    _fun89595_ip = 252;
                    continue _fun89595
                }
            case 168:
                if (var0) {
                    _fun89595_ip = 218;
                    continue _fun89595
                }
            case 171:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 5;
                var0 = var6[var0];
                var6 = var4.bind(var5)(var0);
                var4 = var6.hasFlag;
                var0 = _closure1_slot4;
                var0 = var0.IS_SPOILER;
                var4 = var4.bind(var6)(var7, var0);
                var0 = null;
                if (!var4) {
                    _fun89595_ip = 250;
                    continue _fun89595
                }
            case 218:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 4;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var4 = var4.ObscureReason;
                var0 = var4.SPOILER;
            case 250:
                _fun89595_ip = 284;
                continue _fun89595;
            case 252:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 4;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.ObscureReason;
                var0 = var3.POTENTIAL_EXPLICIT_CONTENT;
            case 284:
                _fun89595_ip = 290;
                continue _fun89595;
            case 286:
                var0 = var1[var2];
            case 290:
                return var0;
        }
    };
    var2.getObscureReasonForAttachment = var4;
    var4 = function(arg0, arg1, arg2, arg3) { // Environment: var1
        _fun89596: for (var _fun89596_ip = 0;;) switch (_fun89596_ip) {
            case 0:
                var8 = arg0;
                var7 = arg3;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var0 = var6[var1];
                var5 = undefined;
                var4 = var9.bind(var5)(var0);
                var2 = var4.getMediaObscuredReasonFromBitmask;
                var0 = {};
                var11 = 3;
                var6 = var6[var11];
                var6 = var9.bind(var5)(var6);
                var6 = var6.ObscuredMediaTypes;
                var6 = var6.Embed;
                var0.type = var6;
                var0.media = var8;
                var2 = var2.bind(var4)(var0, var7);
                var0 = arg1;
                var0 = var0.author;
                var0 = var0.bot;
                var0 = !var0;
                if (!var0) {
                    _fun89596_ip = 160;
                    continue _fun89596
                }
            case 99:
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = var9[var1];
                var6 = var10.bind(var5)(var1);
                var4 = var6.isMediaScanPending;
                var1 = {};
                var9 = var9[var11];
                var9 = var10.bind(var5)(var9);
                var9 = var9.ObscuredMediaTypes;
                var9 = var9.Embed;
                var1.type = var9;
                var1.media = var8;
                var0 = var4.bind(var6)(var1, var7);
            case 160:
                var4 = var2.length;
                var1 = 0;
                if (!(!(var4 > var1))) {
                    _fun89596_ip = 250;
                    continue _fun89596
                }
            case 171:
                if (var0) {
                    _fun89596_ip = 216;
                    continue _fun89596
                }
            case 174:
                var4 = arg2;
                var0 = null;
                if (!var4) {
                    _fun89596_ip = 214;
                    continue _fun89596
                }
            case 182:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 4;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var4 = var4.ObscureReason;
                var0 = var4.SPOILER;
            case 214:
                _fun89596_ip = 248;
                continue _fun89596;
            case 216:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 4;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.ObscureReason;
                var0 = var3.POTENTIAL_EXPLICIT_CONTENT;
            case 248:
                _fun89596_ip = 254;
                continue _fun89596;
            case 250:
                var0 = var2[var1];
            case 254:
                return var0;
        }
    };
    var2.getObscureReasonForEmbed = var4;
    var4 = function(arg0, arg1) { // Environment: var1
        _fun89597: for (var _fun89597_ip = 0;;) switch (_fun89597_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var2 = arguments[2];
                var0 = arguments[3];
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun89597_ip = 20;
                    continue _fun89597
                }
            case 18:
                var2 = false;
            case 20:
                if (!(var0 === var3)) {
                    _fun89597_ip = 26;
                    continue _fun89597
                }
            case 24:
                var0 = false;
            case 26:
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 2;
                var5 = var10[var4];
                var7 = var11.bind(var3)(var5);
                var6 = var7.getMediaObscuredReasonFromBitmask;
                var5 = {};
                var12 = 3;
                var10 = var10[var12];
                var10 = var11.bind(var3)(var10);
                var10 = var10.ObscuredMediaTypes;
                var10 = var10.GenericMedia;
                var5.type = var10;
                var5.media = var9;
                var7 = var6.bind(var7)(var5, var8);
                var0 = !var0;
                if (!var0) {
                    _fun89597_ip = 163;
                    continue _fun89597
                }
            case 102:
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = var10[var4];
                var6 = var11.bind(var3)(var4);
                var5 = var6.isMediaScanPending;
                var4 = {};
                var10 = var10[var12];
                var10 = var11.bind(var3)(var10);
                var10 = var10.ObscuredMediaTypes;
                var10 = var10.GenericMedia;
                var4.type = var10;
                var4.media = var9;
                var0 = var5.bind(var6)(var4, var8);
            case 163:
                var6 = var7.includes;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 4;
                var5 = var5[var4];
                var5 = var8.bind(var3)(var5);
                var5 = var5.ObscureReason;
                var5 = var5.EXPLICIT_CONTENT;
                var5 = var6.bind(var7)(var5);
                if (var5) {
                    _fun89597_ip = 430;
                    continue _fun89597
                }
            case 211:
                var6 = var7.includes;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var8.bind(var3)(var5);
                var5 = var5.ObscureReason;
                var5 = var5.GORE_CONTENT;
                var5 = var6.bind(var7)(var5);
                if (var5) {
                    _fun89597_ip = 399;
                    continue _fun89597
                }
            case 256:
                var6 = var7.includes;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var4];
                var5 = var8.bind(var3)(var5);
                var5 = var5.ObscureReason;
                var5 = var5.SELF_HARM_CONTENT;
                var5 = var6.bind(var7)(var5);
                if (var5) {
                    _fun89597_ip = 368;
                    continue _fun89597
                }
            case 298:
                if (var0) {
                    _fun89597_ip = 337;
                    continue _fun89597
                }
            case 301:
                var0 = null;
                if (!var2) {
                    _fun89597_ip = 335;
                    continue _fun89597
                }
            case 306:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.ObscureReason;
                var0 = var2.SPOILER;
            case 335:
                _fun89597_ip = 366;
                continue _fun89597;
            case 337:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.ObscureReason;
                var0 = var2.POTENTIAL_EXPLICIT_CONTENT;
            case 366:
                _fun89597_ip = 397;
                continue _fun89597;
            case 368:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.ObscureReason;
                var0 = var2.SELF_HARM_CONTENT;
            case 397:
                _fun89597_ip = 428;
                continue _fun89597;
            case 399:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.ObscureReason;
                var0 = var2.GORE_CONTENT;
            case 428:
                _fun89597_ip = 459;
                continue _fun89597;
            case 430:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ObscureReason;
                var0 = var1.EXPLICIT_CONTENT;
            case 459:
                return var0;
        }
    };
    var2.getObscureReasonForUnfurledMediaItem = var4;
    var2.getForumPostShouldObscure = var3;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.channel;
        var _closure2_slot0 = var2;
        var4 = var0.media;
        var9 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 7;
        var2 = var8[var2];
        var3 = undefined;
        var6 = var9.bind(var3)(var2);
        var5 = var6.useStateFromStores;
        var7 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() { // Environment: var1
            _fun89599: for (var _fun89599_ip = 0;;) switch (_fun89599_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun89599_ip = 49;
                        continue _fun89599
                    }
                case 16:
                    var4 = _closure1_slot3;
                    var3 = var4.can;
                    var2 = _closure1_slot5;
                    var2 = var2.MANAGE_MESSAGES;
                    var1 = _closure2_slot0;
                    var0 = var3.bind(var4)(var2, var1);
                case 49:
                    return var0;
            }
        };
        var6 = var5.bind(var6)(var2, var1);
        var1 = 8;
        var1 = var8[var1];
        var1 = var9.bind(var3)(var1);
        var2 = var1.RenderSpoilers;
        var1 = var2.useSetting;
        var5 = var1.bind(var2)();
        var1 = 2;
        var1 = var8[var1];
        var7 = var9.bind(var3)(var1);
        var2 = var7.getEnabledHarmTypesBitmaskForChannelType;
        var1 = 3;
        var1 = var8[var1];
        var1 = var9.bind(var3)(var1);
        var1 = var1.ContentHarmTypeChannel;
        var1 = var1.GUILD;
        var2 = var2.bind(var7)(var1);
        var1 = _closure1_slot6;
        var7 = _closure1_slot1;
        var0 = 9;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var0 = var0.bind(var3)(var5, var6);
        var0 = !var0;
        var0 = var1.bind(var3)(var4, var0, var2);
        return var0;
    };
    var2.useShouldObscure = var3;
    var1 = function(arg0) { // Environment: var1
        _fun89600: for (var _fun89600_ip = 0;;) switch (_fun89600_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 4;
                var1 = var1[var5];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var1 = var1.ObscureReason;
                var1 = var1.EXPLICIT_CONTENT;
                if (!(var1 !== var2)) {
                    _fun89600_ip = 210;
                    continue _fun89600
                }
            case 47:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ObscureReason;
                var1 = var1.GORE_CONTENT;
                if (!(var1 !== var2)) {
                    _fun89600_ip = 210;
                    continue _fun89600
                }
            case 83:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ObscureReason;
                var1 = var1.SELF_HARM_CONTENT;
                if (!(var1 !== var2)) {
                    _fun89600_ip = 210;
                    continue _fun89600
                }
            case 116:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.ObscureReason;
                var1 = var1.SPOILER;
                if (!(var1 !== var2)) {
                    _fun89600_ip = 151;
                    continue _fun89600
                }
            case 149:
                return var4;
            case 151:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 10;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["XpfDH+"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 210:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 10;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.SEgHFh;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getObscuredAlt = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3091, 660, 4270, 4273, 4272, 1384, 8908, 632, 1348, 9886, 1234, 2]);