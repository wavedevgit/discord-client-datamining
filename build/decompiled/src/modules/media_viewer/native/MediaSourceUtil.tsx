// modules/media_viewer/native/MediaSourceUtil.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var20 = require;
    var2 = exports;
    var21 = dependencyMap;
    var _closure1_slot0 = var20;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var21;
    var0 = function arg0, arg1() {
        _fun70513: for (var _fun70513_ip = 0;;) switch (_fun70513_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun70513_ip = 46;
                    continue _fun70513
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun70513_ip = 55;
                    continue _fun70513
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun70513_ip = 345;
                    continue _fun70513
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun70513_ip = 323;
                    continue _fun70513
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun70513_ip = 283;
                    continue _fun70513
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun70513_ip = 270;
                    continue _fun70513
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun70513_ip = 163;
                    continue _fun70513
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun70513_ip = 179;
                    continue _fun70513
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun70513_ip = 249;
                    continue _fun70513
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun70513_ip = 249;
                    continue _fun70513
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun70513_ip = 234;
                    continue _fun70513
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun70513_ip = 247;
                    continue _fun70513
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun70513_ip = 265;
                continue _fun70513;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun70513_ip = 283;
                continue _fun70513;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun70513_ip = 323;
                    continue _fun70513
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun70513_ip = 330;
                    continue _fun70513
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun70514: for (var _fun70514_ip = 0;;) switch (_fun70514_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun70514_ip = 56;
                                continue _fun70514
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun70514_ip = 67;
                            continue _fun70514;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun70515: for (var _fun70515_ip = 0;;) switch (_fun70515_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun70515_ip = 23;
                    continue _fun70515
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun70515_ip = 33;
                    continue _fun70515
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun70515_ip = 70;
                    continue _fun70515
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun70515_ip = 55;
                    continue _fun70515
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var18 = function arg0, arg1() {
        _fun70516: for (var _fun70516_ip = 0;;) switch (_fun70516_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var1 = var0.bind(var1)(var3);
                var0 = var3;
                if (!var1) {
                    _fun70516_ip = 60;
                    continue _fun70516
                }
            case 27:
                var1 = arg1;
                if (var1) {
                    _fun70516_ip = 41;
                    continue _fun70516
                }
            case 33:
                var1 = 0;
                var1 = var3[var1];
                _fun70516_ip = 57;
                continue _fun70516;
            case 41:
                var4 = var3.length;
                var2 = 1;
                var2 = var4 - var2;
                var1 = var3[var2];
            case 57:
                var0 = var1;
            case 60:
                return var0;
        }
    };
    var _closure1_slot11 = var18;
    var17 = function arg0() {
        _fun70517: for (var _fun70517_ip = 0;;) switch (_fun70517_ip) {
            case 0:
                var3 = arg0;
                var4 = null;
                if (!(var4 != var3)) {
                    _fun70517_ip = 110;
                    continue _fun70517
                }
            case 9:
                var8 = var3.filename;
                var7 = var3.height;
                var5 = var3.width;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var6 = var6.bind(var2)(var0);
                var0 = var6.isImageFile;
                var0 = var0.bind(var6)(var8);
                if (!var0) {
                    _fun70517_ip = 68;
                    continue _fun70517
                }
            case 64:
                var0 = var4 != var7;
            case 68:
                if (!var0) {
                    _fun70517_ip = 77;
                    continue _fun70517
                }
            case 71:
                var6 = 0;
                var0 = var7 > var6;
            case 77:
                if (!var0) {
                    _fun70517_ip = 84;
                    continue _fun70517
                }
            case 80:
                var0 = var4 != var5;
            case 84:
                if (!var0) {
                    _fun70517_ip = 93;
                    continue _fun70517
                }
            case 87:
                var4 = 0;
                var0 = var5 > var4;
            case 93:
                if (!var0) {
                    _fun70517_ip = 108;
                    continue _fun70517
                }
            case 96:
                var1 = _closure1_slot16;
                var1 = var1.bind(var2)(var3);
                var0 = !var1;
            case 108:
                return var0;
            case 110:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot12 = var17;
    var16 = function arg0() {
        _fun70518: for (var _fun70518_ip = 0;;) switch (_fun70518_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var0 = var3 != var2;
                if (!var0) {
                    _fun70518_ip = 77;
                    continue _fun70518
                }
            case 12:
                var1 = var3 != var2;
                if (!var1) {
                    _fun70518_ip = 61;
                    continue _fun70518
                }
            case 19:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 3;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.isVideoFile;
                var4 = var2.filename;
                var1 = var5.bind(var6)(var4);
            case 61:
                if (!var1) {
                    _fun70518_ip = 74;
                    continue _fun70518
                }
            case 64:
                var2 = var2.proxy_url;
                var1 = var3 != var2;
            case 74:
                var0 = var1;
            case 77:
                return var0;
        }
    };
    var _closure1_slot13 = var16;
    var15 = function arg0() {
        _fun70519: for (var _fun70519_ip = 0;;) switch (_fun70519_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.image;
                var2 = null;
                var0 = var2 != var0;
                if (var0) {
                    _fun70519_ip = 28;
                    continue _fun70519
                }
            case 18:
                var1 = var1.thumbnail;
                var0 = var2 != var1;
            case 28:
                return var0;
        }
    };
    var _closure1_slot14 = var15;
    var14 = function arg0() {
        var0 = arg0;
        var1 = var0.video;
        var0 = null;
        var0 = var0 != var1;
        return var0;
    };
    var _closure1_slot15 = var14;
    var13 = function arg0() {
        _fun70521: for (var _fun70521_ip = 0;;) switch (_fun70521_ip) {
            case 0:
                var3 = arg0;
                var2 = null;
                var0 = var2 != var3;
                if (!var0) {
                    _fun70521_ip = 79;
                    continue _fun70521
                }
            case 12:
                var1 = var3.flags;
                var1 = var2 != var1;
                if (!var1) {
                    _fun70521_ip = 76;
                    continue _fun70521
                }
            case 24:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 4;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.hasFlag;
                var3 = var3.flags;
                var2 = _closure1_slot5;
                var2 = var2.IS_THUMBNAIL;
                var1 = var4.bind(var5)(var3, var2);
            case 76:
                var0 = var1;
            case 79:
                return var0;
        }
    };
    var _closure1_slot16 = var13;
    var12 = function arg0() {
        _fun70522: for (var _fun70522_ip = 0;;) switch (_fun70522_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.proxy_url;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun70522_ip = 29;
                    continue _fun70522
                }
            case 15:
                var2 = var1.proxy_url;
                var0 = '';
                if (!(var0 === var2)) {
                    _fun70522_ip = 36;
                    continue _fun70522
                }
            case 29:
                var0 = var1.url;
                _fun70522_ip = 42;
                continue _fun70522;
            case 36:
                var0 = var1.proxy_url;
            case 42:
                return var0;
        }
    };
    var _closure1_slot17 = var12;
    var11 = function arg0, arg1, arg2, arg3, arg4() {
        _fun70523: for (var _fun70523_ip = 0;;) switch (_fun70523_ip) {
            case 0:
                var1 = arg0;
                var8 = arg1;
                var5 = arg2;
                var9 = arg3;
                var2 = arg4;
                var0 = var1.width;
                var19 = null;
                if (!(var19 != var0)) {
                    _fun70523_ip = 1034;
                    continue _fun70523
                }
            case 29:
                var0 = var1.width;
                var18 = 0;
                if (!(!(var0 <= var18))) {
                    _fun70523_ip = 1034;
                    continue _fun70523
                }
            case 43:
                var0 = var1.height;
                if (!(var19 != var0)) {
                    _fun70523_ip = 1034;
                    continue _fun70523
                }
            case 55:
                var0 = var1.height;
                if (!(!(var0 <= var18))) {
                    _fun70523_ip = 1034;
                    continue _fun70523
                }
            case 67:
                var4 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 5;
                var3 = var12[var0];
                var7 = undefined;
                var10 = var4.bind(var7)(var3);
                var3 = var10.getEnabledHarmTypesForMessage;
                var11 = var3.bind(var10)(var8);
                var0 = var12[var0];
                var10 = var4.bind(var7)(var0);
                var3 = var10.isMediaObscuredForHarmTypes;
                var0 = {};
                var13 = 6;
                var13 = var12[var13];
                var13 = var4.bind(var7)(var13);
                var13 = var13.ObscuredMediaTypes;
                var13 = var13.Attachment;
                var0.type = var13;
                var0.media = var1;
                var3 = var3.bind(var10)(var0, var11);
                var0 = 3;
                var0 = var12[var0];
                var10 = var4.bind(var7)(var0);
                var4 = var10.isVideoFile;
                var0 = var1.filename;
                var0 = var4.bind(var10)(var0);
                var4 = _closure1_slot17;
                var4 = var4.bind(var7)(var1);
                var11 = _closure1_slot1;
                var10 = 7;
                var10 = var12[var10];
                var14 = var11.bind(var7)(var10);
                var13 = var14.getMobileOptimizedSrc;
                var12 = var1.width;
                var11 = var1.height;
                var10 = undefined;
                if (!var0) {
                    _fun70523_ip = 238;
                    continue _fun70523
                }
            case 234:
                var10 = 'png';
            case 238:
                var25 = var14;
                var24 = var4;
                var23 = var12;
                var22 = var11;
                var21 = var10;
                var10 = var25[var13](var24, var23, var22, var21, var20);
                if (var0) {
                    _fun70523_ip = 861;
                    continue _fun70523
                }
            case 263:
                var11 = {};
                var11.uri = var10;
                var0 = var8.id;
                var11.messageId = var0;
                var11.guildId = var9;
                var0 = var8.channel_id;
                var11.channelId = var0;
                var15 = _closure1_slot1;
                var17 = _closure1_slot2;
                var0 = 8;
                var12 = var17[var0];
                var12 = var15.bind(var7)(var12);
                var12 = var12.bind(var7)(var1);
                var11.filename = var12;
                var11.mediaIndex = var5;
                var12 = var1.width;
                var11.width = var12;
                var12 = var1.height;
                var11.height = var12;
                var12 = var1.url;
                var11.sourceURI = var12;
                var12 = var1.description;
                var11.description = var12;
                var12 = 'attachment';
                var11.accessoryType = var12;
                var12 = var1.spoiler;
                var11.spoiler = var12;
                var12 = var1.flags;
                var11.flags = var12;
                var11.obscure = var3;
                var12 = var1.placeholder;
                var11.placeholder = var12;
                var12 = var1.content_scan_version;
                var11.contentScanVersion = var12;
                var11.mediaViewIndex = var2;
                var12 = var1.id;
                var11.attachmentId = var12;
                var12 = {};
                var24 = var12;
                var23 = var11;
                var13 = copyDataProperties(var24, var23);
                var13 = 'uri';
                var12[var13] = var4;
                var14 = var17[var0];
                var14 = var15.bind(var7)(var14);
                var16 = var14.bind(var7)(var1);
                var14 = var16.toLowerCase;
                var20 = var14.bind(var16)();
                var16 = var20.endsWith;
                var14 = '.webp';
                var14 = var16.bind(var20)(var14);
                var0 = var17[var0];
                var0 = var15.bind(var7)(var0);
                var15 = var0.bind(var7)(var1);
                var0 = var15.toLowerCase;
                var16 = var0.bind(var15)();
                var15 = var16.endsWith;
                var0 = '.avif';
                var0 = var15.bind(var16)(var0);
                var16 = _closure1_slot0;
                var15 = 4;
                var15 = var17[var15];
                var17 = var16.bind(var7)(var15);
                var16 = var17.hasFlag;
                var15 = var1.flags;
                var19 = var19 != var15;
                var18 = 0;
                if (!var19) {
                    _fun70523_ip = 576;
                    continue _fun70523
                }
            case 573:
                var18 = var15;
            case 576:
                var15 = _closure1_slot5;
                var15 = var15.IS_ANIMATED;
                var15 = var16.bind(var17)(var18, var15);
                if (!var15) {
                    _fun70523_ip = 607;
                    continue _fun70523
                }
            case 595:
                if (var14) {
                    _fun70523_ip = 733;
                    continue _fun70523
                }
            case 601:
                if (var0) {
                    _fun70523_ip = 733;
                    continue _fun70523
                }
            case 607:
                if (var0) {
                    _fun70523_ip = 634;
                    continue _fun70523
                }
            case 610:
                var14 = var12;
                if (!(var4 !== var10)) {
                    _fun70523_ip = 632;
                    continue _fun70523
                }
            case 617:
                var15 = new Array(2);
                var15[0] = var11;
                var15[1] = var12;
                var14 = var15;
            case 632:
                return var14;
            case 634:
                var14 = global;
                var14 = var14.URL;
                var15 = var14.prototype;
                var15 = Object.create(var15, {
                    constructor: {
                        value: var14
                    }
                });
                var25 = var15;
                var24 = var4;
                var14 = new var25[var14](var24, var23);
                var17 = var14 instanceof Object ? var14 : var15;
                var18 = var17.searchParams;
                var16 = var18.append;
                var15 = 'format';
                var14 = 'webp';
                var14 = var16.bind(var18)(var15, var14);
                var14 = new Array(2);
                var14[0] = var11;
                var15 = {};
                var24 = var15;
                var23 = var12;
                var16 = copyDataProperties(var24, var23);
                var16 = var17.toString;
                var16 = var16.bind(var17)();
                var15[var13] = var16;
                var14[1] = var15;
                return var14;
            case 733:
                var14 = global;
                var14 = var14.URL;
                var15 = var14.prototype;
                var15 = Object.create(var15, {
                    constructor: {
                        value: var14
                    }
                });
                var25 = var15;
                var24 = var4;
                var14 = new var25[var14](var24, var23);
                var14 = var14 instanceof Object ? var14 : var15;
                var18 = var14.searchParams;
                var17 = var18.append;
                var16 = 'animated';
                var15 = 'true';
                var15 = var17.bind(var18)(var16, var15);
                if (!var0) {
                    _fun70523_ip = 821;
                    continue _fun70523
                }
            case 793:
                var17 = var14.searchParams;
                var16 = var17.append;
                var15 = 'format';
                var0 = 'webp';
                var0 = var16.bind(var17)(var15, var0);
            case 821:
                var0 = new Array(2);
                var0[0] = var11;
                var11 = {};
                var24 = var11;
                var23 = var12;
                var12 = copyDataProperties(var24, var23);
                var12 = var14.toString;
                var12 = var12.bind(var14)();
                var11[var13] = var12;
                var0[1] = var11;
                return var0;
            case 861:
                var0 = {};
                var0.uri = var10;
                var10 = var8.id;
                var0.messageId = var10;
                var0.guildId = var9;
                var8 = var8.channel_id;
                var0.channelId = var8;
                var0.videoURI = var4;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 8;
                var6 = var9[var6];
                var6 = var8.bind(var7)(var6);
                var6 = var6.bind(var7)(var1);
                var0.filename = var6;
                var0.mediaIndex = var5;
                var5 = var1.width;
                var0.width = var5;
                var5 = var1.height;
                var0.height = var5;
                var0.sourceURI = var4;
                var4 = var1.description;
                var0.description = var4;
                var4 = 'attachment';
                var0.accessoryType = var4;
                var4 = var1.spoiler;
                var0.spoiler = var4;
                var4 = var1.flags;
                var0.flags = var4;
                var0.obscure = var3;
                var3 = var1.placeholder;
                var0.placeholder = var3;
                var3 = var1.content_scan_version;
                var0.contentScanVersion = var3;
                var0.mediaViewIndex = var2;
                var1 = var1.id;
                var0.attachmentId = var1;
                return var0;
            case 1034:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot18 = var11;
    var10 = function arg0() {
        _fun70524: for (var _fun70524_ip = 0;;) switch (_fun70524_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.proxyURL;
                var0 = var1.url;
                var4 = var1.srcIsAnimated;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun70524_ip = 34;
                    continue _fun70524
                }
            case 26:
                var1 = '';
                if (!(var1 === var2)) {
                    _fun70524_ip = 36;
                    continue _fun70524
                }
            case 34:
                return var0;
            case 36:
                var0 = global;
                var0 = var0.URL;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var10 = var1;
                var9 = var2;
                var0 = new var10[var0](var9, var8);
                var1 = var0 instanceof Object ? var0 : var1;
                var3 = var1.pathname;
                var0 = var3.toLowerCase;
                var5 = var0.bind(var3)();
                var3 = var5.endsWith;
                var0 = '.avif';
                var0 = var3.bind(var5)(var0);
                var5 = var1.pathname;
                var3 = var5.toLowerCase;
                var6 = var3.bind(var5)();
                var5 = var6.endsWith;
                var3 = '.webp';
                var3 = var5.bind(var6)(var3);
                if (var4) {
                    _fun70524_ip = 178;
                    continue _fun70524
                }
            case 136:
                if (!var0) {
                    _fun70524_ip = 184;
                    continue _fun70524
                }
            case 139:
                var7 = var1.searchParams;
                var6 = var7.append;
                var5 = 'format';
                var4 = 'webp';
                var4 = var6.bind(var7)(var5, var4);
                var4 = var1.toString;
                var4 = var4.bind(var1)();
                return var4;
            case 178:
                if (var3) {
                    _fun70524_ip = 186;
                    continue _fun70524
                }
            case 181:
                if (var0) {
                    _fun70524_ip = 186;
                    continue _fun70524
                }
            case 184:
                return var2;
            case 186:
                var5 = var1.searchParams;
                var4 = var5.append;
                var3 = 'animated';
                var2 = 'true';
                var2 = var4.bind(var5)(var3, var2);
                if (!var0) {
                    _fun70524_ip = 243;
                    continue _fun70524
                }
            case 215:
                var4 = var1.searchParams;
                var3 = var4.append;
                var2 = 'format';
                var0 = 'webp';
                var0 = var3.bind(var4)(var2, var0);
            case 243:
                var0 = var1.toString;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot19 = var10;
    var0 = function arg0() {
        _fun70525: for (var _fun70525_ip = 0;;) switch (_fun70525_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.contentScanVersion;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun70525_ip = 38;
                    continue _fun70525
                }
            case 15:
                var0 = var1.content_scan_version;
                var2 = var2 != var0;
                var0 = undefined;
                if (!var2) {
                    _fun70525_ip = 36;
                    continue _fun70525
                }
            case 30:
                var0 = var1.content_scan_version;
            case 36:
                _fun70525_ip = 44;
                continue _fun70525;
            case 38:
                var0 = var1.contentScanVersion;
            case 44:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun70526: for (var _fun70526_ip = 0;;) switch (_fun70526_ip) {
            case 0:
                var1 = arg0;
                var0 = 'contentType';
                var0 = var0 in var1;
                if (var0) {
                    _fun70526_ip = 49;
                    continue _fun70526
                }
            case 14:
                var0 = 'content_type';
                var2 = var0 in var1;
                var0 = undefined;
                if (!var2) {
                    _fun70526_ip = 47;
                    continue _fun70526
                }
            case 27:
                var2 = var1.content_type;
                var3 = null;
                var3 = var3 != var2;
                var0 = undefined;
                if (!var3) {
                    _fun70526_ip = 47;
                    continue _fun70526
                }
            case 44:
                var0 = var2;
            case 47:
                _fun70526_ip = 55;
                continue _fun70526;
            case 49:
                var0 = var1.contentType;
            case 55:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var9 = function arg0() {
        _fun70527: for (var _fun70527_ip = 0;;) switch (_fun70527_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.image;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun70527_ip = 21;
                    continue _fun70527
                }
            case 15:
                var0 = var1.video;
            case 21:
                if (!(var2 == var0)) {
                    _fun70527_ip = 31;
                    continue _fun70527
                }
            case 25:
                var0 = var1.thumbnail;
            case 31:
                return var0;
        }
    };
    var _closure1_slot22 = var9;
    var8 = function arg0, arg1, arg2, arg3, arg4() {
        _fun70528: for (var _fun70528_ip = 0;;) switch (_fun70528_ip) {
            case 0:
                var8 = arg0;
                var12 = arg1;
                var11 = arg3;
                var13 = arg4;
                var1 = _closure1_slot22;
                var5 = undefined;
                var2 = var1.bind(var5)(var8);
                var16 = null;
                if (!(var16 != var2)) {
                    _fun70528_ip = 1112;
                    continue _fun70528
                }
            case 35:
                var1 = var8.video;
                var1 = var16 != var1;
                var15 = undefined;
                if (!var1) {
                    _fun70528_ip = 65;
                    continue _fun70528
                }
            case 50:
                var3 = _closure1_slot19;
                var1 = var8.video;
                var15 = var3.bind(var5)(var1);
            case 65:
                var17 = var8.type;
                var1 = _closure1_slot19;
                var4 = var1.bind(var5)(var2);
                var1 = _closure1_slot20;
                var6 = var1.bind(var5)(var8);
                var7 = _closure1_slot1;
                var21 = _closure1_slot2;
                var18 = 7;
                var1 = var21[var18];
                var10 = var7.bind(var5)(var1);
                var9 = var10.getMobileOptimizedSrc;
                var3 = var2.width;
                var1 = var2.height;
                var1 = var9.bind(var10)(var4, var3, var1);
                var3 = 9;
                var3 = var21[var3];
                var7 = var7.bind(var5)(var3);
                var3 = {};
                var9 = arg2;
                var3.contentMessage = var9;
                var3 = var7.bind(var5)(var12, var3);
                var9 = var3.hasSpoilerEmbeds;
                var20 = _closure1_slot0;
                var3 = 5;
                var7 = var21[var3];
                var10 = var20.bind(var5)(var7);
                var7 = var10.getEnabledHarmTypesForMessage;
                var14 = var7.bind(var10)(var12);
                var3 = var21[var3];
                var10 = var20.bind(var5)(var3);
                var7 = var10.isMediaObscuredForHarmTypes;
                var3 = {};
                var19 = 6;
                var19 = var21[var19];
                var19 = var20.bind(var5)(var19);
                var19 = var19.ObscuredMediaTypes;
                var19 = var19.Embed;
                var3.type = var19;
                var3.media = var8;
                var7 = var7.bind(var10)(var3, var14);
                var3 = 'title';
                var3 = var3 in var8;
                if (var3) {
                    _fun70528_ip = 280;
                    continue _fun70528
                }
            case 259:
                var3 = 'rawTitle';
                var3 = var3 in var8;
                var22 = undefined;
                if (!var3) {
                    _fun70528_ip = 285;
                    continue _fun70528
                }
            case 272:
                var22 = var8.rawTitle;
                _fun70528_ip = 285;
                continue _fun70528;
            case 280:
                var22 = var8.title;
            case 285:
                var14 = _closure1_slot0;
                var19 = _closure1_slot2;
                var3 = 10;
                var3 = var19[var3];
                var20 = var14.bind(var5)(var3);
                var10 = var20.isEmbedInline;
                var3 = {};
                var25 = var3;
                var24 = var8;
                var21 = copyDataProperties(var25, var24);
                var21 = 'rawTitle';
                var3[var21] = var22;
                var10 = var10.bind(var20)(var3);
                var3 = 11;
                var3 = var19[var3];
                var19 = var14.bind(var5)(var3);
                var14 = var19.shouldPlayVideoInline;
                var20 = var8.provider;
                var21 = var16 == var20;
                var3 = undefined;
                if (var21) {
                    _fun70528_ip = 375;
                    continue _fun70528
                }
            case 370:
                var3 = var20.name;
            case 375:
                var3 = var14.bind(var19)(var3);
                if (!(var16 != var15)) {
                    _fun70528_ip = 636;
                    continue _fun70528
                }
            case 387:
                if (var3) {
                    _fun70528_ip = 636;
                    continue _fun70528
                }
            case 393:
                var14 = {};
                var14.uri = var1;
                var19 = var12.id;
                var14.messageId = var19;
                var14.guildId = var13;
                var19 = var12.channel_id;
                var14.channelId = var19;
                var14.mediaIndex = var11;
                var14.videoURI = var15;
                var15 = var8.url;
                var14.embedURI = var15;
                var15 = var2.width;
                var14.width = var15;
                var15 = var2.height;
                var14.height = var15;
                var15 = 'gifv';
                var15 = var15 === var17;
                var14.isGIFV = var15;
                var15 = var2.url;
                var14.sourceURI = var15;
                var17 = var8.provider;
                var19 = var16 == var17;
                var15 = undefined;
                if (var19) {
                    _fun70528_ip = 504;
                    continue _fun70528
                }
            case 499:
                var15 = var17.name;
            case 504:
                var14.embedProviderName = var15;
                var15 = 'embed';
                var14.accessoryType = var15;
                var15 = !var10;
                var14.noCarousel = var15;
                var14.spoiler = var9;
                var15 = var8.flags;
                var14.flags = var15;
                var14.contentScanVersion = var6;
                var15 = _closure1_slot21;
                var15 = var15.bind(var5)(var2);
                var14.contentType = var15;
                var14.obscure = var7;
                var15 = var8.thumbnail;
                var17 = var16 != var15;
                var15 = undefined;
                if (!var17) {
                    _fun70528_ip = 629;
                    continue _fun70528
                }
            case 579:
                var17 = {};
                var19 = var8.thumbnail;
                var19 = var19.width;
                var17.width = var19;
                var19 = var8.thumbnail;
                var19 = var19.height;
                var17.height = var19;
                var19 = var8.thumbnail;
                var19 = var19.url;
                var17.uri = var19;
                var15 = var17;
            case 629:
                var14.thumbnail = var15;
                return var14;
            case 636:
                var15 = var8.type;
                var14 = 'video';
                if (!(var14 === var15)) {
                    _fun70528_ip = 1171;
                    continue _fun70528
                }
            case 652:
                var15 = new Array(0);
                var14 = var8.thumbnail;
                if (!(var16 != var14)) {
                    _fun70528_ip = 886;
                    continue _fun70528
                }
            case 669:
                var17 = _closure1_slot19;
                var14 = var8.thumbnail;
                var20 = var17.bind(var5)(var14);
                var17 = _closure1_slot1;
                var14 = _closure1_slot2;
                var14 = var14[var18];
                var19 = var17.bind(var5)(var14);
                var18 = var19.getMobileOptimizedSrc;
                var14 = var8.thumbnail;
                var17 = var14.width;
                var14 = var8.thumbnail;
                var14 = var14.height;
                var18 = var18.bind(var19)(var20, var17, var14);
                var17 = var15.push;
                var14 = {};
                var14.uri = var18;
                var14.guildId = var13;
                var14.spoiler = var9;
                var18 = var8.flags;
                var14.flags = var18;
                var14.obscure = var7;
                var14.contentScanVersion = var6;
                var19 = _closure1_slot21;
                var18 = var8.thumbnail;
                var18 = var19.bind(var5)(var18);
                var14.contentType = var18;
                var18 = var12.id;
                var14.messageId = var18;
                var18 = !var10;
                var14.noCarousel = var18;
                var14.mediaIndex = var11;
                var18 = 'embed';
                var14.accessoryType = var18;
                var18 = var12.channel_id;
                var14.channelId = var18;
                var18 = var8.thumbnail;
                var18 = var18.url;
                var14.sourceURI = var18;
                var18 = var8.thumbnail;
                var18 = var18.width;
                var14.width = var18;
                var18 = var8.thumbnail;
                var18 = var18.height;
                var14.height = var18;
                var14 = var17.bind(var15)(var14);
            case 886:
                if (!var3) {
                    _fun70528_ip = 899;
                    continue _fun70528
                }
            case 889:
                var14 = var8.video;
                var3 = var16 != var14;
            case 899:
                if (!var3) {
                    _fun70528_ip = 1101;
                    continue _fun70528
                }
            case 905:
                var14 = var15.push;
                var3 = {};
                var3.uri = var1;
                var3.guildId = var13;
                var3.spoiler = var9;
                var17 = var8.flags;
                var3.flags = var17;
                var3.obscure = var7;
                var3.contentScanVersion = var6;
                var18 = _closure1_slot21;
                var17 = var8.video;
                var17 = var18.bind(var5)(var17);
                var3.contentType = var17;
                var17 = var8.url;
                var3.sourceURI = var17;
                var17 = var12.id;
                var3.messageId = var17;
                var17 = !var10;
                var3.noCarousel = var17;
                var3.mediaIndex = var11;
                var17 = 'embed';
                var3.accessoryType = var17;
                var17 = var8.video;
                var17 = var17.width;
                var3.width = var17;
                var17 = var8.video;
                var17 = var17.height;
                var3.height = var17;
                var17 = var12.channel_id;
                var3.channelId = var17;
                var18 = _closure1_slot19;
                var17 = var8.video;
                var17 = var18.bind(var5)(var17);
                var3.embedURI = var17;
                var17 = var8.provider;
                var18 = var16 == var17;
                var16 = undefined;
                if (var18) {
                    _fun70528_ip = 1084;
                    continue _fun70528
                }
            case 1079:
                var16 = var17.name;
            case 1084:
                var3.embedProviderName = var16;
                var16 = true;
                var3.disableDownload = var16;
                var3 = var14.bind(var15)(var3);
            case 1101:
                var3 = var15.length;
                var14 = 0;
                if (!(var14 === var3)) {
                    _fun70528_ip = 1114;
                    continue _fun70528
                }
            case 1112:
                return var5;
            case 1114:
                var3 = var15.length;
                var17 = 1;
                if (!(var17 !== var3)) {
                    _fun70528_ip = 1165;
                    continue _fun70528
                }
            case 1126:
                var18 = var15.length;
                var16 = 2;
                var3 = undefined;
                if (!(var16 === var18)) {
                    _fun70528_ip = 1163;
                    continue _fun70528
                }
            case 1140:
                var18 = var15[var14];
                var16 = new Array(2);
                var16[0] = var18;
                var17 = var15[var17];
                var16[1] = var17;
                var3 = var16;
            case 1163:
                _fun70528_ip = 1169;
                continue _fun70528;
            case 1165:
                var3 = var15[var14];
            case 1169:
                return var3;
            case 1171:
                var3 = {};
                var3.uri = var1;
                var14 = var12.id;
                var3.messageId = var14;
                var3.guildId = var13;
                var12 = var12.channel_id;
                var3.channelId = var12;
                var3.mediaIndex = var11;
                var11 = var2.width;
                var3.width = var11;
                var11 = var2.height;
                var3.height = var11;
                var11 = var2.url;
                var3.sourceURI = var11;
                var11 = 'embed';
                var3.accessoryType = var11;
                var10 = !var10;
                var3.noCarousel = var10;
                var3.spoiler = var9;
                var8 = var8.flags;
                var3.flags = var8;
                var3.obscure = var7;
                var3.contentScanVersion = var6;
                var0 = _closure1_slot21;
                var0 = var0.bind(var5)(var2);
                var3.contentType = var0;
                var2 = {};
                var25 = var2;
                var24 = var3;
                var0 = copyDataProperties(var25, var24);
                var0 = 'uri';
                var2[var0] = var4;
                var0 = var2;
                if (!(var4 !== var1)) {
                    _fun70528_ip = 1330;
                    continue _fun70528
                }
            case 1315:
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                var0 = var1;
            case 1330:
                return var0;
        }
    };
    var _closure1_slot23 = var8;
    var0 = function arg0, arg1, arg2, arg3, arg4() {
        _fun70529: for (var _fun70529_ip = 0;;) switch (_fun70529_ip) {
            case 0:
                var8 = arg0;
                var1 = arg2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 14;
                var0 = var4[var0];
                var13 = undefined;
                var2 = var5.bind(var13)(var0);
                var0 = var2.getUnfurledMediaItemType;
                var2 = var0.bind(var2)(var1);
                var0 = 15;
                var4 = var4[var0];
                var4 = var5.bind(var13)(var4);
                var4 = var4.MediaGalleryItemType;
                var4 = var4.VISUAL_PLACEHOLDER;
                if (!(var2 !== var4)) {
                    _fun70529_ip = 524;
                    continue _fun70529
                }
            case 73:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = var5[var0];
                var0 = var4.bind(var13)(var0);
                var0 = var0.MediaGalleryItemType;
                var0 = var0.VIDEO;
                var4 = var2 === var0;
                var2 = _closure1_slot1;
                var0 = 7;
                var0 = var5[var0];
                var11 = var2.bind(var13)(var0);
                var10 = var11.getMobileOptimizedSrc;
                var9 = var1.proxyUrl;
                var2 = var1.width;
                var7 = null;
                var5 = var7 != var2;
                var0 = 0;
                var6 = 0;
                if (!var5) {
                    _fun70529_ip = 155;
                    continue _fun70529
                }
            case 152:
                var6 = var2;
            case 155:
                var2 = var1.height;
                var12 = var7 != var2;
                var5 = 0;
                if (!var12) {
                    _fun70529_ip = 172;
                    continue _fun70529
                }
            case 169:
                var5 = var2;
            case 172:
                var2 = undefined;
                if (!var4) {
                    _fun70529_ip = 181;
                    continue _fun70529
                }
            case 177:
                var2 = 'png';
            case 181:
                var19 = var11;
                var18 = var9;
                var17 = var6;
                var16 = var5;
                var15 = var2;
                var5 = var19[var10](var18, var17, var16, var15, var14);
                var6 = var1.contentScanMetadata;
                var9 = var7 == var6;
                var2 = undefined;
                if (var9) {
                    _fun70529_ip = 221;
                    continue _fun70529
                }
            case 215:
                var2 = var6.version;
            case 221:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 5;
                var6 = var14[var3];
                var9 = var12.bind(var13)(var6);
                var6 = var9.getEnabledHarmTypesForMessage;
                var10 = var6.bind(var9)(var8);
                var3 = var14[var3];
                var9 = var12.bind(var13)(var3);
                var6 = var9.isMediaObscuredForHarmTypes;
                var3 = {};
                var11 = 6;
                var11 = var14[var11];
                var11 = var12.bind(var13)(var11);
                var11 = var11.ObscuredMediaTypes;
                var11 = var11.GenericMedia;
                var3.type = var11;
                var3.media = var1;
                var6 = var6.bind(var9)(var3, var10);
                var3 = {};
                var9 = var8.id;
                var3.messageId = var9;
                var9 = arg1;
                var3.guildId = var9;
                var8 = var8.channel_id;
                var3.channelId = var8;
                var3.uri = var5;
                var8 = var1.url;
                var3.sourceURI = var8;
                var9 = var1.width;
                var10 = var7 != var9;
                var8 = 0;
                if (!var10) {
                    _fun70529_ip = 366;
                    continue _fun70529
                }
            case 363:
                var8 = var9;
            case 366:
                var3.width = var8;
                var8 = var1.height;
                var9 = var7 != var8;
                var7 = 0;
                if (!var9) {
                    _fun70529_ip = 387;
                    continue _fun70529
                }
            case 384:
                var7 = var8;
            case 387:
                var3.height = var7;
                var7 = var1.contentType;
                var3.contentType = var7;
                var7 = arg3;
                var3.description = var7;
                var7 = arg4;
                var3.spoiler = var7;
                var3.obscure = var6;
                var3.contentScanVersion = var2;
                var2 = 'component';
                var3.accessoryType = var2;
                var3.mediaIndex = var0;
                var0 = {};
                var18 = var0;
                var17 = var3;
                var2 = copyDataProperties(var18, var17);
                var2 = var1.proxyUrl;
                if (var4) {
                    _fun70529_ip = 513;
                    continue _fun70529
                }
            case 462:
                var4 = 'uri';
                var0[var4] = var2;
                var4 = var1.proxyUrl;
                var1 = var0;
                if (!(var4 !== var5)) {
                    _fun70529_ip = 511;
                    continue _fun70529
                }
            case 484:
                var4 = {};
                var18 = var4;
                var17 = var3;
                var3 = copyDataProperties(var18, var17);
                var3 = new Array(2);
                var3[0] = var4;
                var3[1] = var0;
                var1 = var3;
            case 511:
                return var1;
            case 513:
                var1 = 'videoURI';
                var0[var1] = var2;
                return var0;
            case 524:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function() {
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 21;
        var1 = var8[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.show;
        var1 = {};
        var7 = _closure1_slot0;
        var4 = 22;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var5 = var5.t;
        var5 = var5.cV3alD;
        var5 = var6.bind(var9)(var5);
        var1.title = var5;
        var5 = var8[var4];
        var5 = var7.bind(var0)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var0)(var4);
        var4 = var4.t;
        var4 = var4.r4Zjzv;
        var4 = var5.bind(var6)(var4);
        var1.body = var4;
        var4 = true;
        var1.isDismissable = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot25 = var0;
    var7 = function arg0, arg1, arg2() {
        _fun70531: for (var _fun70531_ip = 0;;) switch (_fun70531_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var4 = arg2;
                var _closure2_slot0 = var5;
                var1 = null;
                if (!(var1 == var4)) {
                    _fun70531_ip = 48;
                    continue _fun70531
                }
            case 21:
                var1 = _closure1_slot4;
                var2 = var1.MediaManager;
                var1 = var2.downloadMediaAsset;
                var3 = var1.bind(var2)(var6, var5);
                _fun70531_ip = 74;
                continue _fun70531;
            case 48:
                var1 = _closure1_slot4;
                var2 = var1.MediaManager;
                var1 = var2.downloadMediaAssetWithContentType;
                var3 = var1.bind(var2)(var6, var5, var4);
            case 74:
                var2 = var3.then;
                var1 = _closure1_slot25;
                var0 = function() { // Environment: var0
                    _fun70532: for (var _fun70532_ip = 0;;) switch (_fun70532_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 18;
                            var2 = var0[var5];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.MediaType;
                            var2 = var2.IMAGE;
                            if (!(var2 !== var3)) {
                                _fun70532_ip = 181;
                                continue _fun70532
                            }
                        case 51:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var5];
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.MediaType;
                            var2 = var2.GIF;
                            if (!(var2 !== var3)) {
                                _fun70532_ip = 149;
                                continue _fun70532
                            }
                        case 84:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var5];
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.MediaType;
                            var2 = var2.VIDEO;
                            if (!(var2 === var3)) {
                                _fun70532_ip = 211;
                                continue _fun70532
                            }
                        case 117:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 19;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.presentVideoSaved;
                            var2 = var2.bind(var3)();
                            _fun70532_ip = 211;
                            continue _fun70532;
                        case 149:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 19;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.presentGifSaved;
                            var2 = var2.bind(var3)();
                            _fun70532_ip = 211;
                            continue _fun70532;
                        case 181:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 19;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.presentImageSaved;
                            var2 = var2.bind(var3)();
                        case 211:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 20;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var2 = var1.MediaViewerAnalytics;
                            var1 = var2.trackMediaViewerDownloadButtonTapped;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot26 = var7;
    var5 = function arg0() {
        _fun70533: for (var _fun70533_ip = 0;;) switch (_fun70533_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.sourceURI;
                var3 = null;
                var0 = var3 != var0;
                if (!var0) {
                    _fun70533_ip = 27;
                    continue _fun70533
                }
            case 18:
                var2 = var1.uri;
                var0 = var3 != var2;
            case 27:
                if (!var0) {
                    _fun70533_ip = 77;
                    continue _fun70533
                }
            case 30:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 3;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.urlMatchesFileExtension;
                var3 = var1.sourceURI;
                var2 = _closure1_slot6;
                var0 = var4.bind(var5)(var3, var2);
            case 77:
                if (!var0) {
                    _fun70533_ip = 141;
                    continue _fun70533
                }
            case 80:
                var2 = global;
                var3 = var2.URL;
                var7 = var1.uri;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                var3 = var1.searchParams;
                var2 = var3.get;
                var1 = 'animated';
                var2 = var2.bind(var3)(var1);
                var1 = 'true';
                var0 = var1 === var2;
            case 141:
                return var0;
        }
    };
    var _closure1_slot27 = var5;
    var4 = function arg0() {
        _fun70534: for (var _fun70534_ip = 0;;) switch (_fun70534_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.sourceURI;
                var3 = null;
                var0 = var3 != var0;
                if (!var0) {
                    _fun70534_ip = 27;
                    continue _fun70534
                }
            case 18:
                var2 = var1.uri;
                var0 = var3 != var2;
            case 27:
                if (!var0) {
                    _fun70534_ip = 77;
                    continue _fun70534
                }
            case 30:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 3;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.urlMatchesFileExtension;
                var3 = var1.sourceURI;
                var2 = _closure1_slot7;
                var0 = var4.bind(var5)(var3, var2);
            case 77:
                if (!var0) {
                    _fun70534_ip = 141;
                    continue _fun70534
                }
            case 80:
                var2 = global;
                var3 = var2.URL;
                var7 = var1.uri;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                var3 = var1.searchParams;
                var2 = var3.get;
                var1 = 'animated';
                var2 = var2.bind(var3)(var1);
                var1 = 'true';
                var0 = var1 === var2;
            case 141:
                return var0;
        }
    };
    var _closure1_slot28 = var4;
    var3 = function arg0() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 3;
        var0 = var6[var0];
        var4 = undefined;
        var3 = var5.bind(var4)(var0);
        var2 = var3.urlMatchesFileExtension;
        var0 = arg0;
        var1 = var0.sourceURI;
        var0 = 18;
        var0 = var6[var0];
        var0 = var5.bind(var4)(var0);
        var0 = var0.GIF_RE_IOS;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot29 = var3;
    var0 = global;
    var22 = var0.Object;
    var19 = var22.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var19.bind(var22)(var2, var0, var6);
    var24 = 0;
    var19 = var21[var24];
    var6 = arg3;
    var0 = undefined;
    var6 = var6.bind(var0)(var19);
    var _closure1_slot3 = var6;
    var23 = 1;
    var6 = var21[var23];
    var6 = var20.bind(var0)(var6);
    var6 = var6.NativeModules;
    var _closure1_slot4 = var6;
    var22 = 2;
    var6 = var21[var22];
    var6 = var20.bind(var0)(var6);
    var19 = var6.MessageAttachmentFlags;
    var _closure1_slot5 = var19;
    var6 = var6.WEBP_RE_IOS;
    var _closure1_slot6 = var6;
    var6 = /\.avif$/i;
    var _closure1_slot7 = var6;
    var6 = {};
    var6.PORTAL = var24;
    var19 = 'PORTAL';
    var6[var24] = var19;
    var6.TIKTOK_IFRAME = var23;
    var19 = 'TIKTOK_IFRAME';
    var6[var23] = var19;
    var6.WEB_FILE_IFRAME = var22;
    var19 = 'WEB_FILE_IFRAME';
    var6[var22] = var19;
    var22 = 3;
    var6.DEFAULT = var22;
    var19 = 'DEFAULT';
    var6[var22] = var19;
    var _closure1_slot8 = var6;
    var19 = 24;
    var19 = var21[var19];
    var21 = var20.bind(var0)(var19);
    var20 = var21.fileFinishedImporting;
    var19 = 'modules/media_viewer/native/MediaSourceUtil.tsx';
    var19 = var20.bind(var21)(var19);
    var2.flattenSource = var18;
    var2.isValidImageAttachment = var17;
    var2.isValidVideoAttachment = var16;
    var2.isValidImageEmbed = var15;
    var2.isValidVideoEmbed = var14;
    var2.isThumbnailAttachment = var13;
    var2.getAttachmentUrl = var12;
    var2.extractMediaFromAttachment = var11;
    var2.getEmbedUrl = var10;
    var2.getEmbedMedia = var9;
    var2.extractMediaFromEmbed = var8;
    var8 = function arg0, arg1() {
        _fun70536: for (var _fun70536_ip = 0;;) switch (_fun70536_ip) {
            case 0:
                var14 = arg0;
                var13 = arg1;
                var0 = var14.components;
                var0 = var0.length;
                var2 = 0;
                if (!(var2 !== var0)) {
                    _fun70536_ip = 501;
                    continue _fun70536
                }
            case 26:
                var0 = new Array(0);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var11 = undefined;
                var4 = var3.bind(var11)(var1);
                var3 = var4.flattenComponents;
                var1 = var14.components;
                var3 = var3.bind(var4)(var1);
                var1 = var3.values;
                var29 = var1.bind(var3)();
                var10 = new Array(0);
                var30 = var10;
                var28 = 0;
                var1 = arraySpread(var30, var29, var28);
                var1 = var10.length;
                var1 = var2 < var1;
                var9 = null;
                var8 = 13;
                var7 = 0;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                if (!var1) {
                    _fun70536_ip = 499;
                    continue _fun70536
                }
            case 126:
                var1 = var10[var7];
                var21 = var1.type;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var8];
                var15 = var16.bind(var11)(var15);
                var15 = var15.ComponentType;
                var15 = var15.MEDIA_GALLERY;
                if (!(var15 !== var21)) {
                    _fun70536_ip = 325;
                    continue _fun70536
                }
            case 171:
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var8];
                var15 = var16.bind(var11)(var15);
                var15 = var15.ComponentType;
                var20 = var15.THUMBNAIL;
                var19 = var6;
                var18 = var5;
                var17 = var4;
                var16 = var3;
                var15 = var2;
                if (!(var20 === var21)) {
                    _fun70536_ip = 469;
                    continue _fun70536
                }
            case 222:
                var23 = _closure1_slot24;
                var28 = var1.media;
                var27 = var1.description;
                var26 = var1.spoiler;
                var31 = undefined;
                var30 = var14;
                var29 = var13;
                var20 = var31[var23](var30, var29, var28, var27, var26, var25);
                var19 = var6;
                var18 = var5;
                var17 = var4;
                var16 = var3;
                var15 = var20;
                if (!(var9 != var20)) {
                    _fun70536_ip = 469;
                    continue _fun70536
                }
            case 277:
                var22 = var0.push;
                var21 = {};
                var21.sources = var20;
                var23 = var1.media;
                var21.unfurledMediaItem = var23;
                var21 = var22.bind(var0)(var21);
                var19 = var6;
                var18 = var5;
                var17 = var4;
                var16 = var3;
                var15 = var20;
                _fun70536_ip = 469;
                continue _fun70536;
            case 325:
                var20 = _closure1_slot9;
                var1 = var1.items;
                var21 = var20.bind(var11)(var1);
                var22 = var21.bind(var11)();
                var1 = var22.done;
                var20 = var22;
                var19 = var20;
                var18 = var21;
                var17 = var4;
                var16 = var3;
                var15 = var2;
                if (var1) {
                    _fun70536_ip = 469;
                    continue _fun70536
                }
            case 369:
                var23 = var20.value;
                var25 = _closure1_slot24;
                var28 = var23.media;
                var27 = var23.description;
                var26 = var23.spoiler;
                var31 = undefined;
                var30 = var14;
                var29 = var13;
                var22 = var31[var25](var30, var29, var28, var27, var26, var25);
                if (!(var9 != var22)) {
                    _fun70536_ip = 439;
                    continue _fun70536
                }
            case 411:
                var24 = var0.push;
                var1 = {};
                var1.sources = var22;
                var25 = var23.media;
                var1.unfurledMediaItem = var25;
                var1 = var24.bind(var0)(var1);
            case 439:
                var24 = var21.bind(var11)();
                var1 = var24.done;
                var20 = var24;
                var19 = var20;
                var18 = var21;
                var17 = var23;
                var16 = var22;
                var15 = var2;
                if (!var1) {
                    _fun70536_ip = 369;
                    continue _fun70536
                }
            case 469:
                var7 = var7 + 1;
                var1 = var10.length;
                var6 = var19;
                var5 = var18;
                var4 = var17;
                var3 = var16;
                var2 = var15;
                if (var7 < var1) {
                    _fun70536_ip = 126;
                    continue _fun70536
                }
            case 499:
                return var0;
            case 501:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.extractMediaFromMessageComponents = var8;
    var8 = function arg0, arg1, arg2, arg3, arg4() {
        _fun70537: for (var _fun70537_ip = 0;;) switch (_fun70537_ip) {
            case 0:
                var5 = arg0;
                var1 = arg2;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var1;
                var2 = arg3;
                var _closure2_slot2 = var2;
                var2 = arg4;
                var _closure2_slot3 = var2;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 9;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var6 = arg1;
                var2.contentMessage = var6;
                var2 = var3.bind(var4)(var5, var2);
                var2 = var2.hasSpoilerEmbeds;
                var _closure2_slot4 = var2;
                var2 = var1.images;
                var3 = null;
                if (!(var3 == var2)) {
                    _fun70537_ip = 110;
                    continue _fun70537
                }
            case 93:
                var3 = var1.image;
                var1 = new Array(1);
                var1[0] = var3;
                var2 = var1;
            case 110:
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var5 = arg0;
                    var0 = _closure1_slot19;
                    var13 = undefined;
                    var12 = var0.bind(var13)(var5);
                    var2 = _closure1_slot1;
                    var14 = _closure1_slot2;
                    var0 = 7;
                    var0 = var14[var0];
                    var4 = var2.bind(var13)(var0);
                    var3 = var4.getMobileOptimizedSrc;
                    var2 = var5.width;
                    var0 = var5.height;
                    var6 = var3.bind(var4)(var12, var2, var0);
                    var2 = _closure1_slot20;
                    var4 = _closure2_slot1;
                    var2 = var2.bind(var13)(var4);
                    var11 = _closure1_slot0;
                    var1 = 5;
                    var3 = var14[var1];
                    var7 = var11.bind(var13)(var3);
                    var3 = var7.getEnabledHarmTypesForMessage;
                    var10 = _closure2_slot0;
                    var8 = var3.bind(var7)(var10);
                    var1 = var14[var1];
                    var7 = var11.bind(var13)(var1);
                    var3 = var7.getMediaObscuredReasonFromBitmask;
                    var1 = {};
                    var9 = 6;
                    var9 = var14[var9];
                    var9 = var11.bind(var13)(var9);
                    var9 = var9.ObscuredMediaTypes;
                    var9 = var9.Embed;
                    var1.type = var9;
                    var1.media = var4;
                    var1 = var3.bind(var7)(var1, var8);
                    var3 = var1.length;
                    var1 = 0;
                    var3 = var3 > var1;
                    var1 = {};
                    var1.uri = var6;
                    var6 = var10.id;
                    var1.messageId = var6;
                    var11 = _closure2_slot3;
                    var1.guildId = var11;
                    var6 = var10.channel_id;
                    var1.channelId = var6;
                    var9 = _closure2_slot2;
                    var1.mediaIndex = var9;
                    var6 = var5.width;
                    var1.width = var6;
                    var6 = var5.height;
                    var1.height = var6;
                    var6 = var5.url;
                    var1.sourceURI = var6;
                    var8 = 'embed';
                    var1.accessoryType = var8;
                    var7 = false;
                    var1.noCarousel = var7;
                    var6 = _closure2_slot4;
                    var1.spoiler = var6;
                    var0 = var4.flags;
                    var1.flags = var0;
                    var1.obscure = var3;
                    var1.contentScanVersion = var2;
                    var0 = var5.contentType;
                    var1.contentType = var0;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var1.uri = var12;
                    var12 = var10.id;
                    var1.messageId = var12;
                    var1.guildId = var11;
                    var10 = var10.channel_id;
                    var1.channelId = var10;
                    var1.mediaIndex = var9;
                    var9 = var5.width;
                    var1.width = var9;
                    var9 = var5.height;
                    var1.height = var9;
                    var9 = var5.url;
                    var1.sourceURI = var9;
                    var1.accessoryType = var8;
                    var1.noCarousel = var7;
                    var1.spoiler = var6;
                    var5 = var5.contentType;
                    var1.contentType = var5;
                    var4 = var4.flags;
                    var1.flags = var4;
                    var1.obscure = var3;
                    var1.contentScanVersion = var2;
                    var0[1] = var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.extractMediaSourcesFromEmbed = var8;
    var8 = function arg0, arg1, arg2, arg3, arg4() {
        _fun70539: for (var _fun70539_ip = 0;;) switch (_fun70539_ip) {
            case 0:
                var11 = arg0;
                var10 = arg2;
                var5 = arg4;
                var _closure2_slot0 = var11;
                var _closure2_slot1 = var10;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 12;
                var0 = var4[var0];
                var6 = undefined;
                var4 = var2.bind(var6)(var0);
                var2 = var4.flattenComponents;
                var0 = arg1;
                var0 = var0.components;
                var4 = var2.bind(var4)(var0);
                var2 = var4.get;
                var0 = arg3;
                var2 = var2.bind(var4)(var0);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun70539_ip = 342;
                    continue _fun70539
                }
            case 86:
                var7 = var2.type;
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var9 = 13;
                var4 = var4[var9];
                var4 = var8.bind(var6)(var4);
                var4 = var4.ComponentType;
                var4 = var4.MEDIA_GALLERY;
                if (!(var4 !== var7)) {
                    _fun70539_ip = 231;
                    continue _fun70539
                }
            case 127:
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var9];
                var4 = var8.bind(var6)(var4);
                var4 = var4.ComponentType;
                var4 = var4.THUMBNAIL;
                if (!(var4 !== var7)) {
                    _fun70539_ip = 162;
                    continue _fun70539
                }
            case 160:
                return var0;
            case 162:
                var9 = _closure1_slot24;
                var14 = var2.media;
                var13 = var2.description;
                var12 = var2.spoiler;
                var17 = undefined;
                var16 = var11;
                var15 = var10;
                var9 = var17[var9](var16, var15, var14, var13, var12, var11);
                var7 = var0 == var9;
                var4 = null;
                if (var7) {
                    _fun70539_ip = 229;
                    continue _fun70539
                }
            case 204:
                var7 = {};
                var8 = 0;
                var7.initialIndex = var8;
                var8 = new Array(1);
                var8[0] = var9;
                var7.sources = var8;
                var4 = var7;
            case 229:
                return var4;
            case 231:
                var7 = var0 != var5;
                var4 = 0;
                if (!var7) {
                    _fun70539_ip = 262;
                    continue _fun70539
                }
            case 240:
                var7 = var2.items;
                var7 = var7.length;
                var7 = var5 <= var7;
                var4 = 0;
                if (!var7) {
                    _fun70539_ip = 262;
                    continue _fun70539
                }
            case 259:
                var4 = var5;
            case 262:
                var _closure2_slot2 = var4;
                var5 = var2.items;
                var4 = var5.map;
                var2 = function(arg0, arg1) { // Environment: var3
                    _fun70540: for (var _fun70540_ip = 0;;) switch (_fun70540_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = _closure1_slot24;
                            var12 = _closure2_slot0;
                            var11 = _closure2_slot1;
                            var10 = var0.media;
                            var9 = var0.description;
                            var8 = var0.spoiler;
                            var13 = undefined;
                            var0 = var13[var7](var12, var11, var10, var9, var8, var7);
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun70540_ip = 79;
                                continue _fun70540
                            }
                        case 50:
                            var4 = _closure2_slot2;
                            var2 = arg1;
                            var2 = var2 < var4;
                            var0 = null;
                            if (!var2) {
                                _fun70540_ip = 79;
                                continue _fun70540
                            }
                        case 66:
                            var2 = _closure2_slot2;
                            var2 = var2 - 1;
                            _closure2_slot2 = var2;
                            var0 = null;
                        case 79:
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var2);
                var2 = var4.filter;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 16;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.isNotNullish;
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var3 = _closure2_slot2;
                var1.initialIndex = var3;
                var1.sources = var2;
                return var1;
            case 342:
                return var0;
        }
    };
    var2.extractMediaSourcesFromComponent = var8;
    var8 = function arg0, arg1, arg2, arg3() {
        _fun70541: for (var _fun70541_ip = 0;;) switch (_fun70541_ip) {
            case 0:
                var10 = arg0;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var0 = new Array(0);
                var1 = var9.attachments;
                var1 = var1.length;
                var6 = 0;
                var1 = var6 < var1;
                var5 = undefined;
                var13 = 1;
                var3 = null;
                var12 = 0;
                var11 = 0;
                var2 = undefined;
                if (!var1) {
                    _fun70541_ip = 171;
                    continue _fun70541
                }
            case 52:
                var1 = var9.attachments;
                var14 = var1[var11];
                var1 = _closure1_slot12;
                var1 = var1.bind(var5)(var14);
                if (var1) {
                    _fun70541_ip = 86;
                    continue _fun70541
                }
            case 74:
                var1 = _closure1_slot13;
                var1 = var1.bind(var5)(var14);
                if (!var1) {
                    _fun70541_ip = 131;
                    continue _fun70541
                }
            case 86:
                var1 = _closure1_slot18;
                var21 = undefined;
                var20 = var14;
                var19 = var10;
                var18 = var11;
                var17 = var8;
                var16 = var12;
                var1 = var21[var1](var20, var19, var18, var17, var16, var15);
                var2 = var1;
                if (!(var3 != var2)) {
                    _fun70541_ip = 131;
                    continue _fun70541
                }
            case 118:
                var15 = var0.push;
                var15 = var15.bind(var0)(var1);
                var2 = var1;
            case 131:
                var1 = _closure1_slot16;
                var1 = var1.bind(var5)(var14);
                var14 = var12;
                if (var1) {
                    _fun70541_ip = 150;
                    continue _fun70541
                }
            case 146:
                var14 = var12 + var13;
            case 150:
                var11 = var11 + 1;
                var1 = var9.attachments;
                var1 = var1.length;
                var12 = var14;
                if (var11 < var1) {
                    _fun70541_ip = 52;
                    continue _fun70541
                }
            case 171:
                var1 = var9.embeds;
                var1 = var1.length;
                var1 = var6 < var1;
                var6 = 0;
                var2 = undefined;
                if (!var1) {
                    _fun70541_ip = 324;
                    continue _fun70541
                }
            case 196:
                var1 = var9.embeds;
                var12 = var1[var6];
                if (!(var3 != var7)) {
                    _fun70541_ip = 231;
                    continue _fun70541
                }
            case 210:
                var11 = var7.has;
                var1 = var12.type;
                var1 = var11.bind(var7)(var1);
                var11 = var2;
                if (!var1) {
                    _fun70541_ip = 303;
                    continue _fun70541
                }
            case 231:
                var1 = _closure1_slot14;
                var1 = var1.bind(var5)(var12);
                if (var1) {
                    _fun70541_ip = 258;
                    continue _fun70541
                }
            case 243:
                var1 = _closure1_slot15;
                var1 = var1.bind(var5)(var12);
                var11 = var2;
                if (!var1) {
                    _fun70541_ip = 303;
                    continue _fun70541
                }
            case 258:
                var1 = _closure1_slot23;
                var21 = undefined;
                var20 = var12;
                var19 = var10;
                var18 = var9;
                var17 = var6;
                var16 = var8;
                var1 = var21[var1](var20, var19, var18, var17, var16, var15);
                var11 = var1;
                if (!(var3 != var11)) {
                    _fun70541_ip = 303;
                    continue _fun70541
                }
            case 290:
                var12 = var0.push;
                var12 = var12.bind(var0)(var1);
                var11 = var1;
            case 303:
                var6 = var6 + 1;
                var1 = var9.embeds;
                var1 = var1.length;
                var2 = var11;
                if (var6 < var1) {
                    _fun70541_ip = 196;
                    continue _fun70541
                }
            case 324:
                return var0;
        }
    };
    var2.extractMediaSourcesFromMessage = var8;
    var8 = function arg0, arg1() {
        _fun70542: for (var _fun70542_ip = 0;;) switch (_fun70542_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = _closure1_slot11;
                var0 = undefined;
                var4 = var1.bind(var0)(var3);
                var1 = null;
                var1 = var1 == var4;
                if (var1) {
                    _fun70542_ip = 35;
                    continue _fun70542
                }
            case 29:
                var1 = var4.obscure;
            case 35:
                if (var1) {
                    _fun70542_ip = 79;
                    continue _fun70542
                }
            case 38:
                var1 = global;
                var4 = var1.Array;
                var1 = var4.isArray;
                var1 = var1.bind(var4)(var3);
                if (var1) {
                    _fun70542_ip = 67;
                    continue _fun70542
                }
            case 59:
                var3.portal = var2;
                _fun70542_ip = 79;
                continue _fun70542;
            case 67:
                var1 = 0;
                var1 = var3[var1];
                var1.portal = var2;
            case 79:
                return var0;
        }
    };
    var2.setMediaSourcePortal = var8;
    var8 = function arg0() {
        _fun70543: for (var _fun70543_ip = 0;;) switch (_fun70543_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.index;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var2 = 0;
                if (!(!(var1 < var2))) {
                    _fun70543_ip = 102;
                    continue _fun70543
                }
            case 23:
                var2 = var0.sources;
                var2 = var2.length;
                if (!(!(var1 >= var2))) {
                    _fun70543_ip = 102;
                    continue _fun70543
                }
            case 38:
                var0 = var0.sources;
                var3 = var0[var1];
                var0 = null;
                var1 = var0 == var3;
                if (var1) {
                    _fun70543_ip = 100;
                    continue _fun70543
                }
            case 57:
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var2 = var1.bind(var2)(var3);
                var1 = var3;
                if (!var2) {
                    _fun70543_ip = 97;
                    continue _fun70543
                }
            case 81:
                var4 = var3.length;
                var2 = 1;
                var2 = var4 - var2;
                var1 = var3[var2];
            case 97:
                var0 = var1;
            case 100:
                return var0;
            case 102:
                var0 = null;
                return var0;
        }
    };
    var2.getSelectedMediaSource = var8;
    var8 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 17;
        var2 = var5[var2];
        var5 = undefined;
        var4 = var4.bind(var5)(var2);
        var2 = var1.index;
        var2 = var4.bind(var5)(var2);
        var _closure2_slot1 = var2;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var5 = var1.sources;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var2;
        var0 = function() { // Environment: var0
            _fun70545: for (var _fun70545_ip = 0;;) switch (_fun70545_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = 0;
                    if (!(!(var2 < var1))) {
                        _fun70545_ip = 108;
                        continue _fun70545
                    }
                case 13:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.sources;
                    var1 = var1.length;
                    if (!(!(var2 >= var1))) {
                        _fun70545_ip = 108;
                        continue _fun70545
                    }
                case 36:
                    var1 = _closure2_slot0;
                    var1 = var1.sources;
                    var0 = _closure2_slot1;
                    var3 = var1[var0];
                    var0 = null;
                    var1 = var0 == var3;
                    if (var1) {
                        _fun70545_ip = 106;
                        continue _fun70545
                    }
                case 63:
                    var1 = global;
                    var2 = var1.Array;
                    var1 = var2.isArray;
                    var2 = var1.bind(var2)(var3);
                    var1 = var3;
                    if (!var2) {
                        _fun70545_ip = 103;
                        continue _fun70545
                    }
                case 87:
                    var4 = var3.length;
                    var2 = 1;
                    var2 = var4 - var2;
                    var1 = var3[var2];
                case 103:
                    var0 = var1;
                case 106:
                    return var0;
                case 108:
                    var0 = null;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var0, var1);
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var2.useSelectedMediaSource = var8;
    var8 = function arg0, arg1() {
        var3 = _closure1_slot26;
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.downloadMediaAsset = var8;
    var2.downloadMediaAssetWithContentType = var7;
    var7 = function arg0() {
        _fun70547: for (var _fun70547_ip = 0;;) switch (_fun70547_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.match;
                var0 = /^https:\\/\\ / www\.youtube\.com\\ / embed\\ / ([ ^ #\ & \ ? ] * )(\ ? clip = ([ ^ #\ & \ ? ] + )( & clipt = ([ ^ #\ & \ ? ] + ))) ? $ / ;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun70547_ip = 116;
                    continue _fun70547
                }
            case 34:
                var3 = var2.length;
                var1 = 6;
                if (!(var1 === var3)) {
                    _fun70547_ip = 116;
                    continue _fun70547
                }
            case 46:
                var1 = 1;
                var5 = var2[var1];
                var1 = 3;
                var4 = var2[var1];
                var1 = 5;
                var3 = var2[var1];
                var2 = var0 == var5;
                var1 = null;
                if (var2) {
                    _fun70547_ip = 114;
                    continue _fun70547
                }
            case 76:
                var2 = var0 == var4;
                var1 = null;
                if (var2) {
                    _fun70547_ip = 114;
                    continue _fun70547
                }
            case 85:
                var2 = var0 == var3;
                var1 = null;
                if (var2) {
                    _fun70547_ip = 114;
                    continue _fun70547
                }
            case 94:
                var2 = {};
                var2.videoId = var5;
                var2.clip = var4;
                var2.clipt = var3;
                var1 = var2;
            case 114:
                return var1;
            case 116:
                return var0;
        }
    };
    var2.getYoutubeClipVideoIdFromURI = var7;
    var7 = function arg0() {
        _fun70548: for (var _fun70548_ip = 0;;) switch (_fun70548_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.match;
                var0 = /^https:\\/\\ / www\.youtube\.com\\ / embed\\ / ([ ^ #\ & \ ? ] * )(\ ? start = ([0 - 9] + )) ? $ / ;
                var4 = var1.bind(var2)(var0);
                var2 = null;
                var1 = var2 == var4;
                var0 = null;
                if (var1) {
                    _fun70548_ip = 149;
                    continue _fun70548
                }
            case 39:
                var5 = 1;
                var1 = var4[var5];
                var1 = var2 == var1;
                var0 = null;
                if (var1) {
                    _fun70548_ip = 149;
                    continue _fun70548
                }
            case 55:
                var1 = var4[var5];
                var3 = var1.length;
                var1 = 11;
                var0 = null;
                if (!(var1 === var3)) {
                    _fun70548_ip = 149;
                    continue _fun70548
                }
            case 73:
                var3 = var4.length;
                var1 = 4;
                if (!(var1 === var3)) {
                    _fun70548_ip = 96;
                    continue _fun70548
                }
            case 85:
                var3 = 3;
                var1 = var4[var3];
                if (!(var2 == var1)) {
                    _fun70548_ip = 109;
                    continue _fun70548
                }
            case 96:
                var1 = {};
                var2 = var4[var5];
                var1.videoId = var2;
                _fun70548_ip = 146;
                continue _fun70548;
            case 109:
                var2 = {};
                var5 = var4[var5];
                var2.videoId = var5;
                var5 = global;
                var5 = var5.Number;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2.start = var3;
                var1 = var2;
            case 146:
                var0 = var1;
            case 149:
                return var0;
        }
    };
    var2.getYoutubeVideoIdFromURI = var7;
    var2.VideoSourceType = var6;
    var6 = function arg0() {
        _fun70549: for (var _fun70549_ip = 0;;) switch (_fun70549_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.videoURI;
                var4 = null;
                if (!(var4 != var0)) {
                    _fun70549_ip = 63;
                    continue _fun70549
                }
            case 15:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.isWebPlayerVideoUrl;
                var0 = var2.videoURI;
                var0 = var3.bind(var5)(var0);
                if (var0) {
                    _fun70549_ip = 189;
                    continue _fun70549
                }
            case 63:
                var0 = var2.portal;
                if (!(var4 != var0)) {
                    _fun70549_ip = 130;
                    continue _fun70549
                }
            case 73:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 23;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.isPortalExpired;
                var3 = var2.portal;
                var3 = var5.bind(var6)(var3);
                if (var3) {
                    _fun70549_ip = 130;
                    continue _fun70549
                }
            case 118:
                var0 = _closure1_slot8;
                var0 = var0.PORTAL;
                _fun70549_ip = 187;
                continue _fun70549;
            case 130:
                var3 = var2.embedURI;
                if (!(var4 != var3)) {
                    _fun70549_ip = 156;
                    continue _fun70549
                }
            case 140:
                var3 = var2.embedProviderName;
                var2 = 'TikTok';
                if (!(var2 !== var3)) {
                    _fun70549_ip = 171;
                    continue _fun70549
                }
            case 156:
                var2 = _closure1_slot8;
                var2 = var2.DEFAULT;
                _fun70549_ip = 184;
                continue _fun70549;
            case 171:
                var3 = _closure1_slot8;
                var2 = var3.TIKTOK_IFRAME;
            case 184:
                var0 = var2;
            case 187:
                _fun70549_ip = 199;
                continue _fun70549;
            case 189:
                var1 = _closure1_slot8;
                var0 = var1.WEB_FILE_IFRAME;
            case 199:
                return var0;
        }
    };
    var2.getVideoSourceType = var6;
    var6 = function arg0() {
        _fun70550: for (var _fun70550_ip = 0;;) switch (_fun70550_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.videoURI;
                var3 = null;
                var0 = var3 != var0;
                if (!var0) {
                    _fun70550_ip = 30;
                    continue _fun70550
                }
            case 18:
                var4 = var2.isGIFV;
                var1 = true;
                var0 = var1 !== var4;
            case 30:
                if (var0) {
                    _fun70550_ip = 65;
                    continue _fun70550
                }
            case 33:
                var1 = var2.embedURI;
                var1 = var3 != var1;
                if (!var1) {
                    _fun70550_ip = 62;
                    continue _fun70550
                }
            case 46:
                var3 = var2.embedProviderName;
                var2 = 'TikTok';
                var1 = var2 === var3;
            case 62:
                var0 = var1;
            case 65:
                return var0;
        }
    };
    var2.supportOverlayVideoControls = var6;
    var2.isAnimatedWebpSource = var5;
    var2.isAnimatedAvifSource = var4;
    var2.isGIFSource = var3;
    var1 = function arg0() {
        _fun70551: for (var _fun70551_ip = 0;;) switch (_fun70551_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot29;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun70551_ip = 29;
                    continue _fun70551
                }
            case 20:
                var4 = _closure1_slot27;
                var0 = var4.bind(var2)(var3);
            case 29:
                if (var0) {
                    _fun70551_ip = 41;
                    continue _fun70551
                }
            case 32:
                var1 = _closure1_slot28;
                var0 = var1.bind(var2)(var3);
            case 41:
                return var0;
        }
    };
    var2.isAnimatedImageSource = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 3979, 1384, 4270, 4273, 1463, 6824, 6808, 3996, 6665, 3973, 1645, 6845, 6858, 1304, 8212, 670, 3147, 8878, 3936, 1234, 8879, 2]);