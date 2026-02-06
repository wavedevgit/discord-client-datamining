// modules/media_viewer/native/components/MediaShareActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun70767: for (var _fun70767_ip = 0;;) switch (_fun70767_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.source;
                var _closure2_slot0 = var4;
                var15 = var1.disableDownload;
                var _closure2_slot1 = var15;
                var7 = var1.shareable;
                var _closure2_slot2 = var7;
                var5 = undefined;
                var _closure2_slot13 = var5;
                var _closure2_slot14 = var5;
                var11 = var4.channelId;
                var _closure2_slot3 = var11;
                var2 = var4.messageId;
                var _closure2_slot4 = var2;
                var3 = _closure1_slot0;
                var16 = _closure1_slot2;
                var6 = 8;
                var6 = var16[var6];
                var10 = var3.bind(var5)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot6;
                var8 = new Array(3);
                var8[0] = var6;
                var6 = _closure1_slot4;
                var8[1] = var6;
                var6 = _closure1_slot7;
                var8[2] = var6;
                var6 = new Array(2);
                var6[0] = var11;
                var6[1] = var2;
                var2 = function() { // Environment: var0
                    _fun70768: for (var _fun70768_ip = 0;;) switch (_fun70768_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var4 = null;
                            var1 = var4 == var0;
                            var0 = null;
                            if (var1) {
                                _fun70768_ip = 107;
                                continue _fun70768
                            }
                        case 18:
                            var1 = _closure2_slot4;
                            var1 = var4 == var1;
                            var0 = null;
                            if (var1) {
                                _fun70768_ip = 107;
                                continue _fun70768
                            }
                        case 31:
                            var7 = _closure1_slot6;
                            var6 = var7.getMessage;
                            var5 = _closure2_slot3;
                            var1 = _closure2_slot4;
                            var1 = var6.bind(var7)(var5, var1);
                            if (!(var4 == var1)) {
                                _fun70768_ip = 81;
                                continue _fun70768
                            }
                        case 62:
                            var7 = _closure1_slot7;
                            var6 = var7.getMessage;
                            var5 = _closure2_slot4;
                            var1 = var6.bind(var7)(var5);
                        case 81:
                            if (!(var4 == var1)) {
                                _fun70768_ip = 104;
                                continue _fun70768
                            }
                        case 85:
                            var4 = _closure1_slot4;
                            var3 = var4.getMessage;
                            var2 = _closure2_slot4;
                            var1 = var3.bind(var4)(var2);
                        case 104:
                            var0 = var1;
                        case 107:
                            return var0;
                    }
                };
                var6 = var9.bind(var10)(var8, var2, var6);
                var _closure2_slot5 = var6;
                var2 = 9;
                var2 = var16[var2];
                var8 = var3.bind(var5)(var2);
                var2 = var8.shouldAgeVerifyForExplicitMedia;
                var10 = var2.bind(var8)();
                var2 = 10;
                var2 = var16[var2];
                var9 = var3.bind(var5)(var2);
                var8 = var9.getAttachmentObscurityProps;
                var2 = {
                    'attachment': null,
                    'shouldObscureSpoiler': true,
                    'enabledContentHarmTypeFlags': 0
                };
                var2.attachment = var4;
                var2.shouldAgeVerify = var10;
                var2 = var8.bind(var9)(var2);
                var8 = var2.obscure;
                var _closure2_slot6 = var8;
                var11 = _closure1_slot3;
                var10 = var11.useCallback;
                var9 = new Array(1);
                var9[0] = var4;
                var2 = function() { // Environment: var0
                    _fun70769: for (var _fun70769_ip = 0;;) switch (_fun70769_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.hideActionSheet;
                            var1 = var1.bind(var3)();
                            var3 = _closure2_slot0;
                            var3 = var3.videoURI;
                            var4 = null;
                            if (!(var4 == var3)) {
                                _fun70769_ip = 184;
                                continue _fun70769
                            }
                        case 57:
                            var3 = _closure2_slot0;
                            var3 = var3.sourceURI;
                            if (!(var4 != var3)) {
                                _fun70769_ip = 243;
                                continue _fun70769
                            }
                        case 74:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 13;
                            var3 = var7[var3];
                            var9 = var6.bind(var0)(var3);
                            var8 = var9.urlMatchesFileExtension;
                            var3 = _closure2_slot0;
                            var5 = var3.sourceURI;
                            var4 = _closure1_slot9;
                            var4 = var8.bind(var9)(var5, var4);
                            var5 = 12;
                            var5 = var7[var5];
                            var7 = var6.bind(var0)(var5);
                            var6 = var7.downloadMediaAssetWithContentType;
                            var5 = var3.sourceURI;
                            var3 = _closure1_slot10;
                            if (var4) {
                                _fun70769_ip = 159;
                                continue _fun70769
                            }
                        case 151:
                            var4 = var3.IMAGE;
                            _fun70769_ip = 165;
                            continue _fun70769;
                        case 159:
                            var4 = var3.GIF;
                        case 165:
                            var3 = _closure2_slot0;
                            var3 = var3.contentType;
                            var3 = var6.bind(var7)(var5, var4, var3);
                            _fun70769_ip = 243;
                            continue _fun70769;
                        case 184:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 12;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.downloadMediaAssetWithContentType;
                            var1 = _closure2_slot0;
                            var3 = var1.videoURI;
                            var2 = _closure1_slot10;
                            var2 = var2.VIDEO;
                            var1 = var1.contentType;
                            var1 = var4.bind(var5)(var3, var2, var1);
                        case 243:
                            return var0;
                    }
                };
                var10 = var10.bind(var11)(var2, var9);
                var _closure2_slot7 = var10;
                var12 = _closure1_slot3;
                var11 = var12.useCallback;
                var9 = new Array(1);
                var9[0] = var4;
                var2 = function() { // Environment: var0
                    _fun70770: for (var _fun70770_ip = 0;;) switch (_fun70770_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 11;
                            var2 = var4[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
                            var3 = _closure1_slot0;
                            var2 = 14;
                            var2 = var4[var2];
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.showShareActionSheet;
                            var3 = {};
                            var2 = _closure2_slot0;
                            var2 = var2.videoURI;
                            var7 = null;
                            if (!(var7 == var2)) {
                                _fun70770_ip = 88;
                                continue _fun70770
                            }
                        case 78:
                            var8 = _closure2_slot0;
                            var2 = var8.sourceURI;
                        case 88:
                            if (!(var7 == var2)) {
                                _fun70770_ip = 101;
                                continue _fun70770
                            }
                        case 92:
                            var6 = _closure2_slot0;
                            var2 = var6.uri;
                        case 101:
                            var3.url = var2;
                            var2 = _closure1_slot8;
                            var2 = var2.MEDIA_VIEWER;
                            var2 = var4.bind(var5)(var3, var2);
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 15;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var2 = var1.MediaViewerAnalytics;
                            var1 = var2.trackMediaViewerShareButtonTapped;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var9 = var11.bind(var12)(var2, var9);
                var _closure2_slot8 = var9;
                var13 = _closure1_slot3;
                var12 = var13.useCallback;
                var11 = new Array(1);
                var11[0] = var4;
                var2 = function() { // Environment: var0
                    _fun70771: for (var _fun70771_ip = 0;;) switch (_fun70771_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
                            var2 = _closure2_slot0;
                            var3 = var2.sourceURI;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun70771_ip = 116;
                                continue _fun70771
                            }
                        case 54:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 16;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.handleClick;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var4 = var4.sourceURI;
                            var1.href = var4;
                            var4 = function() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 17;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.openURL;
                                var1 = _closure2_slot0;
                                var1 = var1.sourceURI;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1.onConfirm = var4;
                            var1 = var2.bind(var3)(var1);
                        case 116:
                            return var0;
                    }
                };
                var12 = var12.bind(var13)(var2, var11);
                var _closure2_slot9 = var12;
                var14 = _closure1_slot3;
                var13 = var14.useCallback;
                var11 = new Array(2);
                var11[0] = var6;
                var11[1] = var4;
                var2 = function() { // Environment: var0
                    _fun70773: for (var _fun70773_ip = 0;;) switch (_fun70773_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.hideActionSheet;
                            var2 = var2.bind(var3)();
                            var3 = _closure2_slot5;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun70773_ip = 247;
                                continue _fun70773
                            }
                        case 51:
                            var3 = _closure2_slot0;
                            var5 = var3.accessoryType;
                            var3 = 'embed';
                            if (!(var3 === var5)) {
                                _fun70773_ip = 157;
                                continue _fun70773
                            }
                        case 69:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 18;
                            var3 = var6[var3];
                            var6 = var5.bind(var0)(var3);
                            var5 = var6.openForwardModal;
                            var3 = {};
                            var7 = _closure2_slot5;
                            var3.message = var7;
                            var7 = 'media-viewer';
                            var3.source = var7;
                            var3.initialSelectedDestinations = var0;
                            var7 = {};
                            var8 = _closure2_slot0;
                            var9 = var8.mediaIndex;
                            var8 = new Array(1);
                            var8[0] = var9;
                            var7.onlyEmbedIndices = var8;
                            var3.forwardOptions = var7;
                            var3 = var5.bind(var6)(var3);
                            _fun70773_ip = 247;
                            continue _fun70773;
                        case 157:
                            var3 = _closure2_slot0;
                            var6 = var3.attachmentId;
                            if (!(var2 != var6)) {
                                _fun70773_ip = 247;
                                continue _fun70773
                            }
                        case 171:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 18;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openForwardModal;
                            var1 = {};
                            var4 = _closure2_slot5;
                            var1.message = var4;
                            var4 = 'media-viewer';
                            var1.source = var4;
                            var1.initialSelectedDestinations = var0;
                            var4 = {};
                            var5 = new Array(1);
                            var5[0] = var6;
                            var4.onlyAttachmentIds = var5;
                            var1.forwardOptions = var4;
                            var1 = var2.bind(var3)(var1);
                        case 247:
                            return var0;
                    }
                };
                var14 = var13.bind(var14)(var2, var11);
                var _closure2_slot10 = var14;
                var17 = _closure1_slot3;
                var13 = var17.useCallback;
                var11 = new Array(1);
                var11[0] = var4;
                var2 = function() { // Environment: var0
                    _fun70774: for (var _fun70774_ip = 0;;) switch (_fun70774_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.hideActionSheet;
                            var1 = var1.bind(var3)();
                            var5 = _closure1_slot5;
                            var4 = var5.getChannel;
                            var3 = _closure2_slot0;
                            var3 = var3.channelId;
                            var3 = var4.bind(var5)(var3);
                            var5 = null;
                            var3 = var5 != var3;
                            if (!var3) {
                                _fun70774_ip = 83;
                                continue _fun70774
                            }
                        case 70:
                            var4 = _closure2_slot0;
                            var4 = var4.channelId;
                            var3 = var5 != var4;
                        case 83:
                            if (!var3) {
                                _fun70774_ip = 99;
                                continue _fun70774
                            }
                        case 86:
                            var4 = _closure2_slot0;
                            var4 = var4.messageId;
                            var3 = var5 != var4;
                        case 99:
                            if (!var3) {
                                _fun70774_ip = 192;
                                continue _fun70774
                            }
                        case 102:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 19;
                            var2 = var8[var2];
                            var5 = var7.bind(var0)(var2);
                            var4 = var5.transitionToMessage;
                            var1 = _closure2_slot0;
                            var3 = var1.channelId;
                            var2 = var1.messageId;
                            var1 = {};
                            var6 = 20;
                            var6 = var8[var6];
                            var7 = var7.bind(var0)(var6);
                            var6 = var7.getChatLayout;
                            var6 = var6.bind(var7)();
                            var6 = var6.isChatLockedOpen;
                            var6 = !var6;
                            if (var6) {
                                _fun70774_ip = 180;
                                continue _fun70774
                            }
                        case 178:
                            var6 = undefined;
                        case 180:
                            var1.navigationReplace = var6;
                            var1 = var4.bind(var5)(var3, var2, var1);
                        case 192:
                            return var0;
                    }
                };
                var13 = var13.bind(var17)(var2, var11);
                var _closure2_slot11 = var13;
                var18 = _closure1_slot3;
                var17 = var18.useCallback;
                var11 = new Array(1);
                var11[0] = var4;
                var2 = function() { // Environment: var0
                    _fun70775: for (var _fun70775_ip = 0;;) switch (_fun70775_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var3 = 11;
                            var2 = var0[var3];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.hideActionSheet;
                            var2 = var2.bind(var4)();
                            var2 = _closure2_slot0;
                            var6 = var2.attachmentId;
                            var5 = null;
                            var2 = var5 != var6;
                            if (!var2) {
                                _fun70775_ip = 70;
                                continue _fun70775
                            }
                        case 57:
                            var4 = _closure2_slot0;
                            var4 = var4.channelId;
                            var2 = var5 != var4;
                        case 70:
                            if (!var2) {
                                _fun70775_ip = 86;
                                continue _fun70775
                            }
                        case 73:
                            var4 = _closure2_slot0;
                            var4 = var4.messageId;
                            var2 = var5 != var4;
                        case 86:
                            if (!var2) {
                                _fun70775_ip = 186;
                                continue _fun70775
                            }
                        case 89:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var3 = var2[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.openLazy;
                            var8 = _closure1_slot0;
                            var3 = 22;
                            var3 = var2[var3];
                            var8 = var8.bind(var0)(var3);
                            var3 = 21;
                            var3 = var2[var3];
                            var2 = var2.paths;
                            var3 = var8.bind(var0)(var3, var2);
                            var2 = _closure1_slot11;
                            var1 = {};
                            var7 = _closure2_slot0;
                            var8 = var7.messageId;
                            var1.messageId = var8;
                            var7 = var7.channelId;
                            var1.channelId = var7;
                            var1.attachmentId = var6;
                            var1 = var4.bind(var5)(var3, var2, var1);
                        case 186:
                            return var0;
                    }
                };
                var11 = var17.bind(var18)(var2, var11);
                var _closure2_slot12 = var11;
                var2 = 23;
                var2 = var16[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.useCanForwardMessage;
                var6 = var2.bind(var3)(var6);
                if (!var6) {
                    _fun70767_ip = 494;
                    continue _fun70767
                }
            case 462:
                var3 = var4.attachmentId;
                var2 = null;
                var2 = var2 != var3;
                if (var2) {
                    _fun70767_ip = 491;
                    continue _fun70767
                }
            case 477:
                var16 = var4.accessoryType;
                var3 = 'embed';
                var2 = var3 === var16;
            case 491:
                var6 = var2;
            case 494:
                _closure2_slot13 = var6;
                var3 = _closure1_slot0;
                var16 = _closure1_slot2;
                var2 = 12;
                var2 = var16[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getVideoSourceType;
                var5 = var2.bind(var3)(var4);
                _closure2_slot14 = var5;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(13);
                var1[0] = var15;
                var1[1] = var14;
                var1[2] = var13;
                var1[3] = var12;
                var1[4] = var11;
                var1[5] = var10;
                var1[6] = var9;
                var1[7] = var8;
                var1[8] = var7;
                var1[9] = var6;
                var1[10] = var5;
                var5 = var4.channelId;
                var1[11] = var5;
                var4 = var4.messageId;
                var1[12] = var4;
                var0 = function() { // Environment: var0
                    _fun70776: for (var _fun70776_ip = 0;;) switch (_fun70776_ip) {
                        case 0:
                            var0 = new Array(0);
                            var2 = _closure2_slot1;
                            var1 = true;
                            var1 = var1 !== var2;
                            if (!var1) {
                                _fun70776_ip = 65;
                                continue _fun70776
                            }
                        case 20:
                            var4 = _closure2_slot14;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 12;
                            var5 = var5[var2];
                            var2 = undefined;
                            var2 = var6.bind(var2)(var5);
                            var2 = var2.VideoSourceType;
                            var2 = var2.WEB_FILE_IFRAME;
                            var1 = var4 !== var2;
                        case 65:
                            if (!var1) {
                                _fun70776_ip = 174;
                                continue _fun70776
                            }
                        case 68:
                            var2 = var0.push;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 24;
                            var4 = var9[var4];
                            var7 = undefined;
                            var4 = var8.bind(var7)(var4);
                            var4 = var4.DownloadIcon;
                            var1.IconComponent = var4;
                            var4 = 25;
                            var5 = var9[var4];
                            var5 = var8.bind(var7)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var8.bind(var7)(var4);
                            var4 = var4.t;
                            var4 = var4["R3BPH+"];
                            var4 = var5.bind(var6)(var4);
                            var1.label = var4;
                            var4 = _closure2_slot7;
                            var1.action = var4;
                            var1 = var2.bind(var0)(var1);
                        case 174:
                            var1 = _closure2_slot13;
                            if (!var1) {
                                _fun70776_ip = 285;
                                continue _fun70776
                            }
                        case 181:
                            var2 = var0.push;
                            var1 = {};
                            var6 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var5 = 26;
                            var5 = var9[var5];
                            var8 = undefined;
                            var5 = var6.bind(var8)(var5);
                            var1.IconComponent = var5;
                            var7 = _closure1_slot0;
                            var4 = 25;
                            var5 = var9[var4];
                            var5 = var7.bind(var8)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.t;
                            var4 = var4.I3ltXO;
                            var4 = var5.bind(var6)(var4);
                            var1.label = var4;
                            var4 = _closure2_slot10;
                            var1.action = var4;
                            var1 = var2.bind(var0)(var1);
                        case 285:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun70776_ip = 398;
                                continue _fun70776
                            }
                        case 292:
                            var2 = var0.push;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 27;
                            var4 = var9[var4];
                            var7 = undefined;
                            var4 = var8.bind(var7)(var4);
                            var4 = var4.ShareIcon;
                            var1.IconComponent = var4;
                            var4 = 25;
                            var5 = var9[var4];
                            var5 = var8.bind(var7)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var9[var4];
                            var4 = var8.bind(var7)(var4);
                            var4 = var4.t;
                            var4 = var4.RDE0Sc;
                            var4 = var5.bind(var6)(var4);
                            var1.label = var4;
                            var4 = _closure2_slot8;
                            var1.action = var4;
                            var1 = var2.bind(var0)(var1);
                        case 398:
                            var2 = var0.push;
                            var1 = {};
                            var10 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var6 = 28;
                            var6 = var5[var6];
                            var8 = undefined;
                            var6 = var10.bind(var8)(var6);
                            var6 = var6.WindowLaunchIcon;
                            var1.IconComponent = var6;
                            var9 = 25;
                            var6 = var5[var9];
                            var6 = var10.bind(var8)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var5[var9];
                            var5 = var10.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5.q5jLJB;
                            var5 = var6.bind(var7)(var5);
                            var1.label = var5;
                            var5 = _closure2_slot9;
                            var1.action = var5;
                            var1 = var2.bind(var0)(var1);
                            var1 = _closure2_slot0;
                            var1 = var1.channelId;
                            var5 = null;
                            var1 = var5 != var1;
                            if (!var1) {
                                _fun70776_ip = 537;
                                continue _fun70776
                            }
                        case 524:
                            var2 = _closure2_slot0;
                            var2 = var2.messageId;
                            var1 = var5 != var2;
                        case 537:
                            if (!var1) {
                                _fun70776_ip = 638;
                                continue _fun70776
                            }
                        case 540:
                            var2 = var0.push;
                            var1 = {};
                            var10 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var6 = 29;
                            var6 = var5[var6];
                            var6 = var10.bind(var8)(var6);
                            var6 = var6.ChatArrowRightIcon;
                            var1.IconComponent = var6;
                            var6 = var5[var9];
                            var6 = var10.bind(var8)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var5[var9];
                            var5 = var10.bind(var8)(var5);
                            var5 = var5.t;
                            var5 = var5["+TSRGD"];
                            var5 = var6.bind(var7)(var5);
                            var1.label = var5;
                            var5 = _closure2_slot11;
                            var1.action = var5;
                            var1 = var2.bind(var0)(var1);
                        case 638:
                            var1 = _closure2_slot6;
                            if (!var1) {
                                _fun70776_ip = 743;
                                continue _fun70776
                            }
                        case 645:
                            var2 = var0.push;
                            var1 = {};
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var5 = 30;
                            var5 = var4[var5];
                            var5 = var7.bind(var8)(var5);
                            var5 = var5.ImageWarningIcon;
                            var1.IconComponent = var5;
                            var5 = var4[var9];
                            var5 = var7.bind(var8)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var4[var9];
                            var4 = var7.bind(var8)(var4);
                            var4 = var4.t;
                            var4 = var4.ZH7P2h;
                            var4 = var5.bind(var6)(var4);
                            var1.label = var4;
                            var3 = _closure2_slot12;
                            var1.action = var3;
                            var1 = var2.bind(var0)(var1);
                        case 743:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot13 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var8 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.AnalyticsSections;
    var _closure1_slot8 = var7;
    var7 = var4.GIF_RE_IOS;
    var _closure1_slot9 = var7;
    var4 = var4.MediaType;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot12 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaShareActions.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var0 = arg0;
        var5 = var0.source;
        var4 = var0.disableDownload;
        var3 = var0.shareable;
        var2 = _closure1_slot13;
        var1 = {};
        var1.source = var5;
        var1.disableDownload = var4;
        var1.shareable = var3;
        var3 = undefined;
        var8 = var2.bind(var3)(var1);
        var2 = _closure1_slot12;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 31;
        var0 = var6[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.ActionSheet;
        var0 = {};
        var4 = 32;
        var4 = var6[var4];
        var4 = var5.bind(var3)(var4);
        var4 = var4.ActionSheetRow;
        var5 = var4.Group;
        var4 = {};
        var7 = var8.map;
        var6 = function(arg0, arg1) { // Environment: var6
            var0 = arg0;
            var4 = _closure1_slot12;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 32;
            var1 = var7[var5];
            var3 = undefined;
            var1 = var6.bind(var3)(var1);
            var2 = var1.ActionSheetRow;
            var1 = {};
            var5 = var7[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.ActionSheetRow;
            var6 = var5.Icon;
            var5 = {};
            var7 = var0.IconComponent;
            var5.IconComponent = var7;
            var5 = var4.bind(var3)(var6, var5);
            var1.icon = var5;
            var5 = var0.action;
            var1.onPress = var5;
            var0 = var0.label;
            var1.label = var0;
            var0 = arg1;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var6 = var7.bind(var8)(var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.useMediaShareActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8902, 1372, 4252, 8917, 660, 4262, 33, 632, 4259, 6826, 3280, 8883, 3980, 8299, 8884, 5898, 3146, 8918, 3945, 3924, 9215, 1307, 9218, 3262, 1234, 8925, 9219, 9110, 9220, 4850, 5211, 7759, 2]);