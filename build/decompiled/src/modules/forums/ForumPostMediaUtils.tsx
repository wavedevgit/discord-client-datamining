// modules/forums/ForumPostMediaUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var12;
    var9 = function arg0() {
        _fun62011: for (var _fun62011_ip = 0;;) switch (_fun62011_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun62011_ip = 95;
                    continue _fun62011
                }
            case 9:
                var5 = var0.filename;
                var4 = var0.height;
                var2 = var0.width;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var6.bind(var0)(var3);
                var0 = var3.isImageFile;
                var0 = var0.bind(var3)(var5);
                if (!var0) {
                    _fun62011_ip = 68;
                    continue _fun62011
                }
            case 64:
                var0 = var1 != var4;
            case 68:
                if (!var0) {
                    _fun62011_ip = 77;
                    continue _fun62011
                }
            case 71:
                var3 = 0;
                var0 = var4 > var3;
            case 77:
                if (!var0) {
                    _fun62011_ip = 84;
                    continue _fun62011
                }
            case 80:
                var0 = var1 != var2;
            case 84:
                if (!var0) {
                    _fun62011_ip = 93;
                    continue _fun62011
                }
            case 87:
                var1 = 0;
                var0 = var2 > var1;
            case 93:
                return var0;
            case 95:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot11 = var9;
    var8 = function arg0() {
        _fun62012: for (var _fun62012_ip = 0;;) switch (_fun62012_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var0 = var3 != var2;
                if (!var0) {
                    _fun62012_ip = 77;
                    continue _fun62012
                }
            case 12:
                var1 = var3 != var2;
                if (!var1) {
                    _fun62012_ip = 61;
                    continue _fun62012
                }
            case 19:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 6;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.isVideoFile;
                var4 = var2.filename;
                var1 = var5.bind(var6)(var4);
            case 61:
                if (!var1) {
                    _fun62012_ip = 74;
                    continue _fun62012
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
    var _closure1_slot12 = var8;
    var7 = function arg0() {
        _fun62013: for (var _fun62013_ip = 0;;) switch (_fun62013_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot11;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun62013_ip = 29;
                    continue _fun62013
                }
            case 20:
                var1 = _closure1_slot12;
                var0 = var1.bind(var2)(var3);
            case 29:
                return var0;
        }
    };
    var _closure1_slot13 = var7;
    var5 = function arg0() {
        _fun62014: for (var _fun62014_ip = 0;;) switch (_fun62014_ip) {
            case 0:
                var1 = arg0;
                var0 = arguments[1];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun62014_ip = 51;
                    continue _fun62014
                }
            case 12:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.InlineAttachmentMedia;
                var2 = var3.getSetting;
                var0 = var2.bind(var3)();
            case 51:
                if (var0) {
                    _fun62014_ip = 60;
                    continue _fun62014
                }
            case 54:
                var0 = new Array(0);
                return var0;
            case 60:
                var0 = null;
                var3 = var0 == var1;
                var2 = undefined;
                if (var3) {
                    _fun62014_ip = 98;
                    continue _fun62014
                }
            case 71:
                var5 = var1.messageSnapshots;
                var3 = 0;
                var3 = var5[var3];
                var5 = var0 == var3;
                var2 = undefined;
                if (var5) {
                    _fun62014_ip = 98;
                    continue _fun62014
                }
            case 92:
                var2 = var3.moderatorReport;
            case 98:
                if (!(var0 == var2)) {
                    _fun62014_ip = 119;
                    continue _fun62014
                }
            case 102:
                var2 = var0 == var1;
                var3 = undefined;
                if (var2) {
                    _fun62014_ip = 117;
                    continue _fun62014
                }
            case 111:
                var3 = var1.attachments;
            case 117:
                _fun62014_ip = 163;
                continue _fun62014;
            case 119:
                var5 = var0 == var1;
                var2 = undefined;
                if (var5) {
                    _fun62014_ip = 160;
                    continue _fun62014
                }
            case 128:
                var6 = var1.messageSnapshots;
                var5 = 0;
                var5 = var6[var5];
                var6 = var0 == var5;
                var2 = undefined;
                if (var6) {
                    _fun62014_ip = 160;
                    continue _fun62014
                }
            case 149:
                var5 = var5.message;
                var2 = var5.attachments;
            case 160:
                var3 = var2;
            case 163:
                if (!(var0 != var1)) {
                    _fun62014_ip = 243;
                    continue _fun62014
                }
            case 167:
                if (!(var0 != var3)) {
                    _fun62014_ip = 243;
                    continue _fun62014
                }
            case 171:
                var2 = var3.filter;
                var1 = _closure1_slot13;
                var3 = var2.bind(var3)(var1);
                var2 = var3.map;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun62015: for (var _fun62015_ip = 0;;) switch (_fun62015_ip) {
                        case 0:
                            var3 = arg0;
                            var15 = var3.proxy_url;
                            var13 = var3.url;
                            var7 = var3.description;
                            var11 = var3.spoiler;
                            var9 = var3.flags;
                            var12 = var3.width;
                            var10 = var3.height;
                            var5 = var3.filename;
                            var8 = var3.content_scan_version;
                            var0 = null;
                            if (!(var0 != var12)) {
                                _fun62015_ip = 402;
                                continue _fun62015
                            }
                        case 61:
                            if (!(var0 != var10)) {
                                _fun62015_ip = 402;
                                continue _fun62015
                            }
                        case 68:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 6;
                            var1 = var6[var1];
                            var6 = undefined;
                            var4 = var4.bind(var6)(var1);
                            var1 = var4.isVideoFile;
                            var5 = var1.bind(var4)(var5);
                            var1 = var3.flags;
                            var4 = var0 != var1;
                            if (!var4) {
                                _fun62015_ip = 163;
                                continue _fun62015
                            }
                        case 116:
                            var14 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var1 = 8;
                            var1 = var16[var1];
                            var17 = var14.bind(var6)(var1);
                            var16 = var17.hasFlag;
                            var14 = var3.flags;
                            var1 = _closure1_slot8;
                            var1 = var1.IS_THUMBNAIL;
                            var4 = var16.bind(var17)(var14, var1);
                        case 163:
                            if (!(var0 != var15)) {
                                _fun62015_ip = 170;
                                continue _fun62015
                            }
                        case 167:
                            var13 = var15;
                        case 170:
                            if (!var5) {
                                _fun62015_ip = 248;
                                continue _fun62015
                            }
                        case 173:
                            var14 = _closure1_slot1;
                            var16 = _closure1_slot2;
                            var1 = 9;
                            var1 = var16[var1];
                            var14 = var14.bind(var6)(var1);
                            var1 = var14.toURLSafe;
                            var14 = var1.bind(var14)(var15);
                            if (!(var0 != var14)) {
                                _fun62015_ip = 400;
                                continue _fun62015
                            }
                        case 211:
                            var17 = var14.searchParams;
                            var16 = var17.append;
                            var15 = 'format';
                            var1 = 'webp';
                            var1 = var16.bind(var17)(var15, var1);
                            var1 = var14.toString;
                            var13 = var1.bind(var14)();
                        case 248:
                            var1 = {};
                            var14 = _closure1_slot10;
                            var14 = var14.ATTACHMENT;
                            var1.type = var14;
                            var1.src = var13;
                            var1.width = var12;
                            var1.height = var10;
                            var10 = var0 != var11;
                            if (!var10) {
                                _fun62015_ip = 287;
                                continue _fun62015
                            }
                        case 284:
                            var10 = var11;
                        case 287:
                            var1.spoiler = var10;
                            var1.flags = var9;
                            var1.contentScanVersion = var8;
                            var1.alt = var7;
                            var1.isVideo = var5;
                            var1.isThumbnail = var4;
                            var4 = var3.id;
                            var1.attachmentId = var4;
                            var4 = arg1;
                            var1.mediaIndex = var4;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 8;
                            var4 = var7[var4];
                            var5 = var5.bind(var6)(var4);
                            var4 = var5.hasFlag;
                            var6 = var3.flags;
                            var7 = var0 != var6;
                            var3 = 0;
                            if (!var7) {
                                _fun62015_ip = 377;
                                continue _fun62015
                            }
                        case 374:
                            var3 = var6;
                        case 377:
                            var2 = _closure1_slot8;
                            var2 = var2.IS_ANIMATED;
                            var2 = var4.bind(var5)(var3, var2);
                            var1.srcIsAnimated = var2;
                            return var1;
                        case 400:
                            return var0;
                        case 402:
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.filter;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 10;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.isNotNullish;
                var0 = var1.bind(var2)(var0);
                _fun62014_ip = 247;
                continue _fun62014;
            case 243:
                var0 = new Array(0);
            case 247:
                return var0;
        }
    };
    var _closure1_slot14 = var5;
    var0 = function arg0() {
        var3 = _closure1_slot14;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 7;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.InlineAttachmentMedia;
        var0 = var1.useSetting;
        var1 = var0.bind(var1)();
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun62017: for (var _fun62017_ip = 0;;) switch (_fun62017_ip) {
            case 0:
                var7 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 7;
                var6 = var4[var0];
                var5 = undefined;
                var6 = var3.bind(var5)(var6);
                var8 = var6.InlineEmbedMedia;
                var6 = var8.useSetting;
                var6 = var6.bind(var8)();
                var0 = var4[var0];
                var0 = var3.bind(var5)(var0);
                var3 = var0.RenderEmbeds;
                var0 = var3.useSetting;
                var3 = var0.bind(var3)();
                var0 = null;
                if (!(var0 != var7)) {
                    _fun62017_ip = 228;
                    continue _fun62017
                }
            case 87:
                var4 = var7.messageSnapshots;
                var8 = 0;
                var9 = var4[var8];
                var10 = var0 == var9;
                var4 = undefined;
                if (var10) {
                    _fun62017_ip = 114;
                    continue _fun62017
                }
            case 108:
                var4 = var9.moderatorReport;
            case 114:
                if (!(var0 == var4)) {
                    _fun62017_ip = 126;
                    continue _fun62017
                }
            case 118:
                var4 = var7.embeds;
                _fun62017_ip = 159;
                continue _fun62017;
            case 126:
                var7 = var7.messageSnapshots;
                var8 = var7[var8];
                var9 = var0 == var8;
                var7 = undefined;
                if (var9) {
                    _fun62017_ip = 156;
                    continue _fun62017
                }
            case 145:
                var8 = var8.message;
                var7 = var8.embeds;
            case 156:
                var4 = var7;
            case 159:
                if (!var6) {
                    _fun62017_ip = 169;
                    continue _fun62017
                }
            case 162:
                if (!var3) {
                    _fun62017_ip = 169;
                    continue _fun62017
                }
            case 165:
                if (!(var0 == var4)) {
                    _fun62017_ip = 175;
                    continue _fun62017
                }
            case 169:
                var0 = new Array(0);
                _fun62017_ip = 226;
                continue _fun62017;
            case 175:
                var3 = var4.map;
                var2 = function(arg0, arg1) { // Environment: var2
                    _fun62018: for (var _fun62018_ip = 0;;) switch (_fun62018_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4.image;
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun62018_ip = 21;
                                continue _fun62018
                            }
                        case 15:
                            var0 = var4.thumbnail;
                        case 21:
                            var1 = var2 == var0;
                            if (!var1) {
                                _fun62018_ip = 38;
                                continue _fun62018
                            }
                        case 28:
                            var3 = var4.images;
                            var1 = var2 != var3;
                        case 38:
                            if (!var1) {
                                _fun62018_ip = 53;
                                continue _fun62018
                            }
                        case 41:
                            var3 = var4.images;
                            var1 = 0;
                            var0 = var3[var1];
                        case 53:
                            if (!(var2 != var0)) {
                                _fun62018_ip = 66;
                                continue _fun62018
                            }
                        case 57:
                            var1 = var0.url;
                            if (!(var2 == var1)) {
                                _fun62018_ip = 70;
                                continue _fun62018
                            }
                        case 66:
                            var1 = undefined;
                            return var1;
                        case 70:
                            var7 = var0.height;
                            var9 = var0.proxyURL;
                            var11 = var0.url;
                            var6 = var0.width;
                            var5 = var0.flags;
                            var3 = var2 != var9;
                            if (!var3) {
                                _fun62018_ip = 139;
                                continue _fun62018
                            }
                        case 103:
                            var8 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var8.bind(var0)(var1);
                            var0 = var1.isVideoUrl;
                            var3 = var0.bind(var1)(var9);
                        case 139:
                            var0 = {};
                            var8 = _closure1_slot10;
                            var8 = var8.EMBED;
                            var0.type = var8;
                            var8 = var11;
                            if (!(var2 != var9)) {
                                _fun62018_ip = 179;
                                continue _fun62018
                            }
                        case 165:
                            var10 = '';
                            var8 = var11;
                            if (!(var10 !== var9)) {
                                _fun62018_ip = 179;
                                continue _fun62018
                            }
                        case 176:
                            var8 = var9;
                        case 179:
                            var0.src = var8;
                            var0.height = var7;
                            var0.width = var6;
                            var6 = _closure2_slot0;
                            var0.spoiler = var6;
                            var6 = var4.flags;
                            var0.flags = var6;
                            var4 = var4.contentScanVersion;
                            var0.contentScanVersion = var4;
                            var0.isVideo = var3;
                            var3 = arg1;
                            var0.mediaIndex = var3;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 8;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var6.bind(var3)(var4);
                            var3 = var4.hasFlag;
                            var6 = var2 != var5;
                            var2 = 0;
                            if (!var6) {
                                _fun62018_ip = 277;
                                continue _fun62018
                            }
                        case 274:
                            var2 = var5;
                        case 277:
                            var1 = _closure1_slot9;
                            var1 = var1.IS_ANIMATED;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.srcIsAnimated = var1;
                            return var0;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 10;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.isNotNullish;
                var0 = var2.bind(var3)(var1);
            case 226:
                return var0;
            case 228:
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var4 = function arg0() {
        _fun62019: for (var _fun62019_ip = 0;;) switch (_fun62019_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var2 = var0.InlineEmbedMedia;
                var0 = var2.useSetting;
                var2 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var3)) {
                    _fun62019_ip = 178;
                    continue _fun62019
                }
            case 53:
                var8 = var3.components;
                if (!var2) {
                    _fun62019_ip = 66;
                    continue _fun62019
                }
            case 62:
                if (!(var0 == var8)) {
                    _fun62019_ip = 72;
                    continue _fun62019
                }
            case 66:
                var0 = new Array(0);
                _fun62019_ip = 176;
                continue _fun62019;
            case 72:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.from;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 11;
                var1 = var6[var1];
                var7 = var4.bind(var5)(var1);
                var1 = var7.flattenComponents;
                var7 = var1.bind(var7)(var8);
                var1 = var7.values;
                var1 = var1.bind(var7)();
                var3 = var2.bind(var3)(var1);
                var2 = var3.flatMap;
                var1 = function(arg0) { // Environment: var1
                    _fun62020: for (var _fun62020_ip = 0;;) switch (_fun62020_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.type;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var6 = 12;
                            var2 = var2[var6];
                            var3 = undefined;
                            var2 = var5.bind(var3)(var2);
                            var2 = var2.ComponentType;
                            var2 = var2.THUMBNAIL;
                            if (!(var2 !== var4)) {
                                _fun62020_ip = 110;
                                continue _fun62020
                            }
                        case 49:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var5.bind(var3)(var2);
                            var2 = var2.ComponentType;
                            var2 = var2.MEDIA_GALLERY;
                            if (!(var2 !== var4)) {
                                _fun62020_ip = 86;
                                continue _fun62020
                            }
                        case 82:
                            var2 = null;
                            return var2;
                        case 86:
                            var5 = var0.items;
                            var4 = var5.map;
                            var2 = function(arg0) { // Environment: var2
                                _fun62021: for (var _fun62021_ip = 0;;) switch (_fun62021_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = _closure1_slot18;
                                        var2 = var0.media;
                                        var0 = var0.spoiler;
                                        var1 = null;
                                        var1 = var1 != var0;
                                        if (!var1) {
                                            _fun62021_ip = 34;
                                            continue _fun62021
                                        }
                                    case 31:
                                        var1 = var0;
                                    case 34:
                                        var0 = undefined;
                                        var0 = var3.bind(var0)(var2, var1);
                                        return var0;
                                }
                            };
                            var2 = var4.bind(var5)(var2);
                            return var2;
                        case 110:
                            var2 = _closure1_slot18;
                            var1 = var0.media;
                            var4 = var0.spoiler;
                            var0 = null;
                            var0 = var0 != var4;
                            if (!var0) {
                                _fun62020_ip = 138;
                                continue _fun62020
                            }
                        case 135:
                            var0 = var4;
                        case 138:
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = 10;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.isNotNullish;
                var0 = var2.bind(var3)(var1);
            case 176:
                return var0;
            case 178:
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot17 = var4;
    var0 = function arg0, arg1() {
        _fun62022: for (var _fun62022_ip = 0;;) switch (_fun62022_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var11 = 13;
                var0 = var0[var11];
                var10 = undefined;
                var1 = var1.bind(var10)(var0);
                var0 = var1.getUnfurledMediaItemType;
                var5 = var0.bind(var1)(var2);
                var6 = null;
                var1 = 'INVALID';
                var0 = null;
                if (!(var1 !== var5)) {
                    _fun62022_ip = 252;
                    continue _fun62022
                }
            case 54:
                var1 = {};
                var3 = _closure1_slot10;
                var3 = var3.COMPONENT;
                var1.type = var3;
                var3 = var2.proxyUrl;
                var1.src = var3;
                var8 = var2.height;
                var9 = var6 != var8;
                var3 = 0;
                var7 = 0;
                if (!var9) {
                    _fun62022_ip = 100;
                    continue _fun62022
                }
            case 97:
                var7 = var8;
            case 100:
                var1.height = var7;
                var8 = var2.width;
                var9 = var6 != var8;
                var7 = 0;
                if (!var9) {
                    _fun62022_ip = 121;
                    continue _fun62022
                }
            case 118:
                var7 = var8;
            case 121:
                var1.width = var7;
                var7 = arg1;
                var1.spoiler = var7;
                var7 = var2.contentScanMetadata;
                var8 = var6 == var7;
                var6 = undefined;
                if (var8) {
                    _fun62022_ip = 154;
                    continue _fun62022
                }
            case 148:
                var6 = var7.version;
            case 154:
                var1.contentScanVersion = var6;
                var1.flags = var3;
                var9 = _closure1_slot0;
                var4 = _closure1_slot2;
                var6 = 8;
                var6 = var4[var6];
                var8 = var9.bind(var10)(var6);
                var7 = var8.hasFlag;
                var6 = var2.flags;
                var4 = var4[var11];
                var4 = var9.bind(var10)(var4);
                var4 = var4.UnfurledMediaItemFlags;
                var4 = var4.IS_ANIMATED;
                var4 = var7.bind(var8)(var6, var4);
                var1.srcIsAnimated = var4;
                var4 = 'VIDEO';
                var4 = var4 === var5;
                var1.isVideo = var4;
                var1.mediaIndex = var3;
                var1.srcUnfurledMediaItem = var2;
                var0 = var1;
            case 252:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var3 = function arg0, arg1() {
        var4 = arg0;
        var0 = _closure1_slot15;
        var3 = undefined;
        var8 = var0.bind(var3)(var4);
        var0 = new Array(0);
        var7 = 0;
        var9 = var0;
        var7 = arraySpread(var9, var8, var7);
        var6 = _closure1_slot16;
        var2 = arg1;
        var8 = var6.bind(var3)(var4, var2);
        var9 = var0;
        var7 = arraySpread(var9, var8, var7);
        var1 = _closure1_slot17;
        var8 = var1.bind(var3)(var4);
        var9 = var0;
        var1 = arraySpread(var9, var8, var7);
        return var0;
    };
    var _closure1_slot19 = var3;
    var0 = global;
    var14 = var0.Object;
    var13 = var14.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var13.bind(var14)(var2, var0, var6);
    var0 = 0;
    var13 = var12[var0];
    var6 = arg3;
    var0 = undefined;
    var6 = var6.bind(var0)(var13);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var12[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var12[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var12[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var12[var6];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var12[var6];
    var6 = var11.bind(var0)(var6);
    var10 = var6.MessageAttachmentFlags;
    var _closure1_slot8 = var10;
    var6 = var6.MessageEmbedMediaFlags;
    var _closure1_slot9 = var6;
    var6 = {};
    var10 = 'embed';
    var6.EMBED = var10;
    var10 = 'attachment';
    var6.ATTACHMENT = var10;
    var10 = 'component';
    var6.COMPONENT = var10;
    var _closure1_slot10 = var6;
    var10 = 15;
    var10 = var12[var10];
    var12 = var11.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/forums/ForumPostMediaUtils.tsx';
    var10 = var11.bind(var12)(var10);
    var10 = function arg0, arg1() {
        _fun62024: for (var _fun62024_ip = 0;;) switch (_fun62024_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun62024_ip = 25;
                    continue _fun62024
                }
            case 9:
                var3 = var1.embeds;
                var2 = 0;
                var3 = var3[var2];
                if (!(var0 == var3)) {
                    _fun62024_ip = 29;
                    continue _fun62024
                }
            case 25:
                var3 = undefined;
                return var3;
            case 29:
                var1 = var1.embeds;
                var1 = var1[var2];
                var1 = var1.color;
                if (!(var0 != var1)) {
                    _fun62024_ip = 70;
                    continue _fun62024
                }
            case 48:
                var0 = var1.toLowerCase;
                var3 = var0.bind(var1)();
                var2 = '#ffffff';
                var0 = undefined;
                if (!(var2 !== var3)) {
                    _fun62024_ip = 81;
                    continue _fun62024
                }
            case 70:
                var0 = undefined;
                var2 = arg1;
                if (var2) {
                    _fun62024_ip = 81;
                    continue _fun62024
                }
            case 78:
                var0 = var1;
            case 81:
                return var0;
        }
    };
    var2.getEmbedColor = var10;
    var2.isValidImageAttachment = var9;
    var2.isValidVideoAttachment = var8;
    var2.isMediaAttachment = var7;
    var2.ForumPostMediaTypes = var6;
    var2.getForumPostMedia = var5;
    var2.useForumPostComponentsMedia = var4;
    var4 = function arg0, arg1() {
        _fun62025: for (var _fun62025_ip = 0;;) switch (_fun62025_ip) {
            case 0:
                var5 = arg1;
                var6 = arguments[2];
                var _closure2_slot0 = var5;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun62025_ip = 20;
                    continue _fun62025
                }
            case 18:
                var6 = false;
            case 20:
                var _closure2_slot1 = var4;
                var3 = _closure1_slot19;
                var2 = arg0;
                var4 = var3.bind(var4)(var2, var6);
                _closure2_slot1 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var0 = function() { // Environment: var0
                    _fun62026: for (var _fun62026_ip = 0;;) switch (_fun62026_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun62026_ip = 76;
                                continue _fun62026
                            }
                        case 13:
                            var3 = _closure2_slot0;
                            var2 = var3.isMediaChannel;
                            var2 = var2.bind(var3)();
                            var4 = _closure2_slot1;
                            if (var2) {
                                _fun62026_ip = 36;
                                continue _fun62026
                            }
                        case 34:
                            return var4;
                        case 36:
                            var3 = var4.find;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var0 = var0.isThumbnail;
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2);
                            if (!(var1 == var2)) {
                                _fun62026_ip = 63;
                                continue _fun62026
                            }
                        case 57:
                            var0 = _closure2_slot1;
                            _fun62026_ip = 74;
                            continue _fun62026;
                        case 63:
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 74:
                            return var0;
                        case 76:
                            var0 = new Array(0);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useForumPostMediaThumbnail = var4;
    var2.useForumPostMediaProperties = var3;
    var3 = function arg0, arg1() {
        _fun62028: for (var _fun62028_ip = 0;;) switch (_fun62028_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot15;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                var5 = _closure1_slot16;
                var4 = arg1;
                var4 = var5.bind(var2)(var3, var4);
                var1 = _closure1_slot17;
                var3 = var1.bind(var2)(var3);
                var2 = 0;
                var1 = var0[var2];
                var0 = null;
                if (!(var0 == var1)) {
                    _fun62028_ip = 55;
                    continue _fun62028
                }
            case 51:
                var1 = var4[var2];
            case 55:
                if (!(var0 == var1)) {
                    _fun62028_ip = 63;
                    continue _fun62028
                }
            case 59:
                var1 = var3[var2];
            case 63:
                var2 = var0 != var1;
                var0 = null;
                if (!var2) {
                    _fun62028_ip = 75;
                    continue _fun62028
                }
            case 72:
                var0 = var1;
            case 75:
                return var0;
        }
    };
    var2.useFindFirstMediaProperties = var3;
    var3 = function arg0, arg1() {
        _fun62029: for (var _fun62029_ip = 0;;) switch (_fun62029_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot15;
                var2 = undefined;
                var0 = var0.bind(var2)(var4);
                var5 = _closure1_slot16;
                var3 = arg1;
                var3 = var5.bind(var2)(var4, var3);
                var1 = _closure1_slot17;
                var4 = var1.bind(var2)(var4);
                var1 = 0;
                var0 = var0[var1];
                var2 = null;
                var0 = var2 == var0;
                if (!var0) {
                    _fun62029_ip = 62;
                    continue _fun62029
                }
            case 54:
                var4 = var4[var1];
                var0 = var2 == var4;
            case 62:
                if (!var0) {
                    _fun62029_ip = 73;
                    continue _fun62029
                }
            case 65:
                var1 = var3[var1];
                var0 = var2 != var1;
            case 73:
                return var0;
        }
    };
    var2.useFirstMediaIsEmbed = var3;
    var3 = function arg0, arg1() {
        _fun62030: for (var _fun62030_ip = 0;;) switch (_fun62030_ip) {
            case 0:
                var11 = arg0;
                var2 = _closure1_slot5;
                var1 = var2.getChannel;
                var0 = arg1;
                var2 = var1.bind(var2)(var0);
                var4 = null;
                if (!(var4 != var2)) {
                    _fun62030_ip = 270;
                    continue _fun62030
                }
            case 34:
                var6 = _closure1_slot6;
                var5 = var6.getMessage;
                var1 = var2.id;
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 14;
                var0 = var8[var0];
                var8 = undefined;
                var10 = var9.bind(var8)(var0);
                var9 = var10.castChannelIdAsMessageId;
                var0 = var2.id;
                var0 = var9.bind(var10)(var0);
                var5 = var5.bind(var6)(var1, var0);
                var0 = var4 != var5;
                if (!var0) {
                    _fun62030_ip = 268;
                    continue _fun62030
                }
            case 103:
                var1 = var11.length;
                var6 = 0;
                var1 = var1 > var6;
                if (!var1) {
                    _fun62030_ip = 136;
                    continue _fun62030
                }
            case 117:
                var10 = var11.find;
                var9 = function(arg0) { // Environment: var3
                    _fun62031: for (var _fun62031_ip = 0;;) switch (_fun62031_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.isImage;
                            if (var0) {
                                _fun62031_ip = 18;
                                continue _fun62031
                            }
                        case 12:
                            var0 = var1.isVideo;
                        case 18:
                            return var0;
                    }
                };
                var9 = var10.bind(var11)(var9);
                var1 = var4 != var9;
            case 136:
                if (!var1) {
                    _fun62030_ip = 149;
                    continue _fun62030
                }
            case 139:
                var9 = var2.isForumPost;
                var1 = var9.bind(var2)();
            case 149:
                if (!var1) {
                    _fun62030_ip = 189;
                    continue _fun62030
                }
            case 152:
                var9 = var2.ownerId;
                var11 = _closure1_slot7;
                var10 = var11.getCurrentUser;
                var10 = var10.bind(var11)();
                var11 = var4 == var10;
                var8 = undefined;
                if (var11) {
                    _fun62030_ip = 185;
                    continue _fun62030
                }
            case 180:
                var8 = var10.id;
            case 185:
                var1 = var9 === var8;
            case 189:
                if (!var1) {
                    _fun62030_ip = 216;
                    continue _fun62030
                }
            case 192:
                var8 = _closure1_slot4;
                var7 = var8.getCount;
                var2 = var2.id;
                var2 = var7.bind(var8)(var2);
                var1 = var6 === var2;
            case 216:
                if (!var1) {
                    _fun62030_ip = 265;
                    continue _fun62030
                }
            case 219:
                var2 = var5.attachments;
                var2 = var2.length;
                var2 = var6 === var2;
                if (var2) {
                    _fun62030_ip = 262;
                    continue _fun62030
                }
            case 237:
                var6 = var5.attachments;
                var5 = var6.find;
                var3 = function(arg0) { // Environment: var3
                    _fun62032: for (var _fun62032_ip = 0;;) switch (_fun62032_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure1_slot11;
                            var2 = undefined;
                            var0 = var0.bind(var2)(var3);
                            if (var0) {
                                _fun62032_ip = 29;
                                continue _fun62032
                            }
                        case 20:
                            var1 = _closure1_slot12;
                            var0 = var1.bind(var2)(var3);
                        case 29:
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var3);
                var2 = var4 == var3;
            case 262:
                var1 = var2;
            case 265:
                var0 = var1;
            case 268:
                return var0;
            case 270:
                var0 = false;
                return var0;
        }
    };
    var2.shouldShowAddMediaToOriginalPostModal = var3;
    var1 = function arg0() {
        var3 = arg0;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun62034: for (var _fun62034_ip = 0;;) switch (_fun62034_ip) {
                case 0:
                    var1 = arg0;
                    var2 = arg1;
                    var0 = {};
                    var3 = var1.containsVideo;
                    if (var3) {
                        _fun62034_ip = 23;
                        continue _fun62034
                    }
                case 17:
                    var3 = var2.isVideo;
                case 23:
                    var0.containsVideo = var3;
                    var1 = var1.containsGif;
                    if (var1) {
                        _fun62034_ip = 79;
                        continue _fun62034
                    }
                case 37:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 6;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.isAnimatedImageUrl;
                    var2 = var2.src;
                    var1 = var3.bind(var4)(var2);
                case 79:
                    var0.containsGif = var1;
                    return var0;
            }
        };
        var0 = {
            'containsVideo': false,
            'containsGif': false
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.messageContainsGifOrVideo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6566, 1372, 4257, 1621, 660, 3975, 1348, 1384, 1457, 1304, 3969, 1647, 3974, 21, 2]);