// modules/messages/native/handlers/handleMessagesTapImage.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageTypes;
    var _closure1_slot6 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/handlers/handleMessagesTapImage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun77898: for (var _fun77898_ip = 0;;) switch (_fun77898_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.tapImageData;
                var18 = var1.index;
                var4 = var1.type;
                var7 = var1.layout;
                var14 = var1.portal;
                var3 = var1.embedIndex;
                var23 = var1.componentId;
                var21 = var1.componentMediaIndex;
                var2 = var0.allowWithinModal;
                var6 = var0.message;
                var10 = var0.messageChannel;
                var5 = var0.selectedChannelId;
                var8 = var0.showContextName;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var11 = null;
                if (!(var11 != var14)) {
                    _fun77898_ip = 126;
                    continue _fun77898
                }
            case 92:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 4;
                var1 = var13[var1];
                var12 = var12.bind(var0)(var1);
                var1 = var12.markPortalAlive;
                var1 = var1.bind(var12)(var14);
            case 126:
                var1 = true;
                if (!(var1 !== var2)) {
                    _fun77898_ip = 172;
                    continue _fun77898
                }
            case 132:
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 5;
                var1 = var12[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.isAlertOrActionSheetOpen;
                var1 = var1.bind(var2)(var5);
                if (var1) {
                    _fun77898_ip = 1379;
                    continue _fun77898
                }
            case 172:
                var5 = 'attachment';
                if (!(var5 !== var4)) {
                    _fun77898_ip = 207;
                    continue _fun77898
                }
            case 180:
                var1 = 'embed';
                if (!(var1 !== var4)) {
                    _fun77898_ip = 207;
                    continue _fun77898
                }
            case 188:
                var1 = 'sticker';
                if (!(var1 !== var4)) {
                    _fun77898_ip = 207;
                    continue _fun77898
                }
            case 196:
                var1 = 'component';
                if (!(var1 === var4)) {
                    _fun77898_ip = 1327;
                    continue _fun77898
                }
            case 207:
                var12 = var6.type;
                var1 = _closure1_slot6;
                var1 = var1.THREAD_STARTER_MESSAGE;
                var17 = var6;
                if (!(var12 === var1)) {
                    _fun77898_ip = 281;
                    continue _fun77898
                }
            case 232:
                var1 = var6.messageReference;
                var17 = var6;
                if (!(var11 != var1)) {
                    _fun77898_ip = 281;
                    continue _fun77898
                }
            case 245:
                var13 = _closure1_slot3;
                var12 = var13.getMessageByReference;
                var1 = var6.messageReference;
                var1 = var12.bind(var13)(var1);
                var1 = var1.message;
                var17 = var6;
                if (!(var11 != var1)) {
                    _fun77898_ip = 281;
                    continue _fun77898
                }
            case 278:
                var17 = var1;
            case 281:
                var1 = var17.messageReference;
                var12 = var11 == var1;
                var6 = undefined;
                if (var12) {
                    _fun77898_ip = 301;
                    continue _fun77898
                }
            case 296:
                var6 = var1.type;
            case 301:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 6;
                var1 = var13[var1];
                var1 = var12.bind(var0)(var1);
                var1 = var1.MessageReferenceTypes;
                var1 = var1.FORWARD;
                var16 = var17;
                if (!(var6 === var1)) {
                    _fun77898_ip = 376;
                    continue _fun77898
                }
            case 340:
                var6 = var17.messageSnapshots;
                var1 = 0;
                var6 = var6[var1];
                var12 = var11 == var6;
                var1 = undefined;
                if (var12) {
                    _fun77898_ip = 366;
                    continue _fun77898
                }
            case 361:
                var1 = var6.message;
            case 366:
                var16 = var1;
                if (!(var11 != var16)) {
                    _fun77898_ip = 1325;
                    continue _fun77898
                }
            case 376:
                var12 = var17.attachments;
                var6 = var12.filter;
                var1 = function(arg0) { // Environment: var9
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isThumbnailAttachment;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var1 = var6.bind(var12)(var1);
                if (!(var5 === var4)) {
                    _fun77898_ip = 492;
                    continue _fun77898
                }
            case 403:
                var5 = var1.length;
                if (!(var18 < var5)) {
                    _fun77898_ip = 492;
                    continue _fun77898
                }
            case 412:
                var1 = var1[var18];
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 7;
                var5 = var12[var5];
                var12 = var6.bind(var0)(var5);
                var6 = var12.extractMediaFromAttachment;
                var30 = var10.guild_id;
                var34 = var12;
                var33 = var1;
                var32 = var17;
                var31 = var18;
                var5 = var34[var6](var33, var32, var31, var30, var29);
                if (!(var11 == var5)) {
                    _fun77898_ip = 492;
                    continue _fun77898
                }
            case 467:
                var5 = var1.url;
                if (!(var11 != var5)) {
                    _fun77898_ip = 492;
                    continue _fun77898
                }
            case 476:
                var6 = var1.url;
                var5 = '';
                if (!(var5 === var6)) {
                    _fun77898_ip = 1285;
                    continue _fun77898
                }
            case 492:
                var5 = -1;
                _closure2_slot0 = var5;
                var6 = 'embed';
                if (!(var6 === var4)) {
                    _fun77898_ip = 517;
                    continue _fun77898
                }
            case 510:
                if (!(var11 == var3)) {
                    _fun77898_ip = 962;
                    continue _fun77898
                }
            case 517:
                var6 = 'component';
                if (!(var6 !== var4)) {
                    _fun77898_ip = 819;
                    continue _fun77898
                }
            case 528:
                var12 = _closure1_slot0;
                var6 = _closure1_slot2;
                var20 = 7;
                var6 = var6[var20];
                var13 = var12.bind(var0)(var6);
                var12 = var13.extractMediaSourcesFromMessage;
                var6 = var10.guild_id;
                var15 = var12.bind(var13)(var17, var16, var6);
                var6 = var15.length;
                var13 = 0;
                var12 = var13 < var6;
                var25 = 0;
                var24 = undefined;
                var6 = var15;
                if (!var12) {
                    _fun77898_ip = 1079;
                    continue _fun77898
                }
            case 590:
                var19 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var20];
                var22 = var19.bind(var0)(var12);
                var19 = var22.flattenSource;
                var12 = var15[var25];
                var19 = var19.bind(var22)(var12);
                var12 = var25;
                var26 = var24;
                if (!(var11 != var19)) {
                    _fun77898_ip = 671;
                    continue _fun77898
                }
            case 632:
                var22 = var19.accessoryType;
                var26 = var24;
                if (!(var22 === var4)) {
                    _fun77898_ip = 671;
                    continue _fun77898
                }
            case 645:
                var27 = var19.mediaViewIndex;
                var22 = var27;
                if (!(var11 == var27)) {
                    _fun77898_ip = 664;
                    continue _fun77898
                }
            case 658:
                var22 = var19.mediaIndex;
            case 664:
                var26 = var27;
                if (!(var22 !== var18)) {
                    _fun77898_ip = 694;
                    continue _fun77898
                }
            case 671:
                var25 = var12 + 1;
                var22 = var15.length;
                var24 = var26;
                var6 = var15;
                if (var25 < var22) {
                    _fun77898_ip = 590;
                    continue _fun77898
                }
            case 689:
                _fun77898_ip = 1079;
                continue _fun77898;
            case 694:
                var19 = var19.noCarousel;
                if (var19) {
                    _fun77898_ip = 762;
                    continue _fun77898
                }
            case 703:
                _closure2_slot0 = var12;
                var22 = _closure1_slot0;
                var19 = _closure1_slot2;
                var19 = var19[var20];
                var24 = var22.bind(var0)(var19);
                var22 = var24.setMediaSourcePortal;
                var19 = var15[var12];
                var19 = var22.bind(var24)(var19, var14);
                var22 = var15.filter;
                var19 = function(arg0, arg1) { // Environment: var9
                    _fun77900: for (var _fun77900_ip = 0;;) switch (_fun77900_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.flattenSource;
                            var0 = arg0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun77900_ip = 57;
                                continue _fun77900
                            }
                        case 48:
                            var1 = var1.noCarousel;
                            var0 = !var1;
                        case 57:
                            var1 = !var0;
                            if (var0) {
                                _fun77900_ip = 77;
                                continue _fun77900
                            }
                        case 63:
                            var3 = _closure2_slot0;
                            var2 = arg1;
                            var1 = var3 >= var2;
                        case 77:
                            if (!var1) {
                                _fun77900_ip = 94;
                                continue _fun77900
                            }
                        case 80:
                            var1 = _closure2_slot0;
                            var1 = var1 - 1;
                            _closure2_slot0 = var1;
                        case 94:
                            return var0;
                    }
                };
                var6 = var22.bind(var15)(var19);
                _fun77898_ip = 1079;
                continue _fun77898;
            case 762:
                var15 = var15[var12];
                var12 = new Array(1);
                var12[0] = var15;
                _closure2_slot0 = var13;
                var19 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var20];
                var19 = var19.bind(var0)(var15);
                var15 = var19.setMediaSourcePortal;
                var13 = var12[var13];
                var13 = var15.bind(var19)(var13, var14);
                var6 = var12;
                _fun77898_ip = 1079;
                continue _fun77898;
            case 819:
                if (!(var11 != var23)) {
                    _fun77898_ip = 960;
                    continue _fun77898
                }
            case 826:
                var22 = _closure1_slot0;
                var24 = _closure1_slot2;
                var19 = 7;
                var12 = var24[var19];
                var20 = var22.bind(var0)(var12);
                var15 = var20.extractMediaSourcesFromComponent;
                var31 = var10.guild_id;
                var12 = 9;
                var12 = var24[var12];
                var22 = var22.bind(var0)(var12);
                var12 = var22.asComponentId;
                var30 = var12.bind(var22)(var23);
                var34 = var20;
                var33 = var17;
                var32 = var16;
                var29 = var21;
                var13 = var34[var15](var33, var32, var31, var30, var29, var28);
                if (!(var11 != var13)) {
                    _fun77898_ip = 958;
                    continue _fun77898
                }
            case 900:
                var12 = var13.sources;
                var13 = var13.initialIndex;
                _closure2_slot0 = var13;
                var15 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var19];
                var19 = var15.bind(var0)(var13);
                var15 = var19.setMediaSourcePortal;
                var13 = _closure2_slot0;
                var13 = var12[var13];
                var13 = var15.bind(var19)(var13, var14);
                var6 = var12;
                _fun77898_ip = 1079;
                continue _fun77898;
            case 958:
                return var0;
            case 960:
                return var11;
            case 962:
                var11 = var16.embeds;
                var31 = var11[var18];
                _closure2_slot0 = var3;
                var11 = _closure1_slot0;
                var3 = _closure1_slot2;
                var13 = 7;
                var3 = var3[var13];
                var12 = var11.bind(var0)(var3);
                var11 = var12.extractMediaSourcesFromEmbed;
                var29 = var10.guild_id;
                var34 = var12;
                var33 = var17;
                var32 = var16;
                var30 = var18;
                var3 = var34[var11](var33, var32, var31, var30, var29, var28);
                var12 = _closure2_slot0;
                var11 = var3.length;
                var6 = var3;
                if (!(var12 < var11)) {
                    _fun77898_ip = 1079;
                    continue _fun77898
                }
            case 1039:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var13];
                var13 = var12.bind(var0)(var11);
                var12 = var13.setMediaSourcePortal;
                var11 = _closure2_slot0;
                var11 = var3[var11];
                var11 = var12.bind(var13)(var11, var14);
                var6 = var3;
            case 1079:
                var11 = var6.some;
                var3 = function(arg0) { // Environment: var9
                    _fun77901: for (var _fun77901_ip = 0;;) switch (_fun77901_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.flattenSource;
                            var1 = arg0;
                            var0 = true;
                            var1 = var2.bind(var3)(var1, var0);
                            var0 = null;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun77901_ip = 57;
                                continue _fun77901
                            }
                        case 51:
                            var0 = var1.disableDownload;
                        case 57:
                            return var0;
                    }
                };
                var12 = var11.bind(var6)(var3);
                var3 = _closure2_slot0;
                var11 = var6;
                if (!(var5 !== var3)) {
                    _fun77898_ip = 1379;
                    continue _fun77898
                }
            case 1111:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 10;
                var3 = var6[var3];
                var6 = var5.bind(var0)(var3);
                var5 = var6.openMediaModal;
                var3 = {};
                var3.disableDownload = var12;
                var3.initialSources = var11;
                var9 = _closure2_slot0;
                var3.initialIndex = var9;
                var3.originViewOrOriginLayout = var7;
                var7 = 'Channel';
                var3.analyticsSource = var7;
                var7 = var10.id;
                var3.channelId = var7;
                var7 = undefined;
                if (!var8) {
                    _fun77898_ip = 1232;
                    continue _fun77898
                }
            case 1186:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 11;
                var9 = var12[var9];
                var14 = var11.bind(var0)(var9);
                var13 = var14.computeChannelName;
                var32 = _closure1_slot5;
                var31 = _closure1_slot4;
                var30 = false;
                var34 = var14;
                var33 = var10;
                var7 = var34[var13](var33, var32, var31, var30, var29);
            case 1232:
                var3.contextName = var7;
                var7 = undefined;
                if (!var8) {
                    _fun77898_ip = 1273;
                    continue _fun77898
                }
            case 1242:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 12;
                var8 = var11[var8];
                var9 = var9.bind(var0)(var8);
                var8 = var9.getChannelIcon;
                var7 = var8.bind(var9)(var10);
            case 1273:
                var3.contextIcon = var7;
                var3 = var5.bind(var6)(var3);
                _fun77898_ip = 1379;
                continue _fun77898;
            case 1285:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.openURL;
                var1 = var1.url;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            case 1325:
                return var0;
            case 1327:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Unsupported thumbnail type: ';
                var33 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var34 = var2;
                var1 = new var34[var3](var33, var32);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 1379:
                return var0;
        }
    };
    var2.handleMessagesTapImage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4268, 3100, 1621, 660, 8858, 9716, 792, 8856, 3144, 3978, 8854, 4792, 4807, 2]);