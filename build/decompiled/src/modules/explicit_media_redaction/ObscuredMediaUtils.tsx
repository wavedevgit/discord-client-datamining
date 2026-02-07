// modules/explicit_media_redaction/ObscuredMediaUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var17 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var18 = dependencyMap;
    var _closure1_slot0 = var17;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var18;
    var0 = function arg0, arg1() {
        _fun39407: for (var _fun39407_ip = 0;;) switch (_fun39407_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun39407_ip = 46;
                    continue _fun39407
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun39407_ip = 55;
                    continue _fun39407
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun39407_ip = 343;
                    continue _fun39407
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun39407_ip = 323;
                    continue _fun39407
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun39407_ip = 283;
                    continue _fun39407
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun39407_ip = 270;
                    continue _fun39407
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
                    _fun39407_ip = 163;
                    continue _fun39407
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun39407_ip = 179;
                    continue _fun39407
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun39407_ip = 249;
                    continue _fun39407
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun39407_ip = 249;
                    continue _fun39407
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun39407_ip = 234;
                    continue _fun39407
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun39407_ip = 247;
                    continue _fun39407
                }
            case 234:
                var8 = _closure1_slot15;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun39407_ip = 265;
                continue _fun39407;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun39407_ip = 283;
                continue _fun39407;
            case 270:
                var6 = _closure1_slot15;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun39407_ip = 323;
                    continue _fun39407
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
                    _fun39407_ip = 330;
                    continue _fun39407
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun39408: for (var _fun39408_ip = 0;;) switch (_fun39408_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun39408_ip = 56;
                                continue _fun39408
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
                            _fun39408_ip = 67;
                            continue _fun39408;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun39409: for (var _fun39409_ip = 0;;) switch (_fun39409_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun39409_ip = 23;
                    continue _fun39409
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun39409_ip = 33;
                    continue _fun39409
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
                    _fun39409_ip = 70;
                    continue _fun39409
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun39409_ip = 55;
                    continue _fun39409
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var11 = function arg0, arg1() {
        _fun39410: for (var _fun39410_ip = 0;;) switch (_fun39410_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var5;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var0 = var0.ContentHarmTypeBitMask;
                var0 = var0.NONE;
                if (!(var5 !== var0)) {
                    _fun39410_ip = 273;
                    continue _fun39410
                }
            case 56:
                var0 = null;
                if (!(var0 != var2)) {
                    _fun39410_ip = 273;
                    continue _fun39410
                }
            case 65:
                var9 = var2.attachments;
                var7 = var0 == var9;
                var1 = undefined;
                if (var7) {
                    _fun39410_ip = 96;
                    continue _fun39410
                }
            case 80:
                var8 = var9.some;
                var7 = function(arg0) { // Environment: var6
                    var3 = _closure1_slot18;
                    var2 = {};
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.ObscuredMediaTypes;
                    var0 = var0.Attachment;
                    var2.type = var0;
                    var0 = arg0;
                    var2.media = var0;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var1)(var2, var0);
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var1 = var8.bind(var9)(var7);
            case 96:
                if (var1) {
                    _fun39410_ip = 269;
                    continue _fun39410
                }
            case 102:
                var8 = var2.embeds;
                var7 = var0 == var8;
                var1 = undefined;
                if (var7) {
                    _fun39410_ip = 133;
                    continue _fun39410
                }
            case 117:
                var7 = var8.some;
                var6 = function(arg0) { // Environment: var6
                    var3 = _closure1_slot18;
                    var2 = {};
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.ObscuredMediaTypes;
                    var0 = var0.Embed;
                    var2.type = var0;
                    var0 = arg0;
                    var2.media = var0;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var1)(var2, var0);
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var1 = var7.bind(var8)(var6);
            case 133:
                if (var1) {
                    _fun39410_ip = 265;
                    continue _fun39410
                }
            case 139:
                var1 = 'messageSnapshots';
                var1 = var1 in var2;
                if (var1) {
                    _fun39410_ip = 171;
                    continue _fun39410
                }
            case 150:
                var1 = 'message_snapshots';
                var6 = var1 in var2;
                var1 = null;
                if (!var6) {
                    _fun39410_ip = 177;
                    continue _fun39410
                }
            case 163:
                var1 = var2.message_snapshots;
                _fun39410_ip = 177;
                continue _fun39410;
            case 171:
                var1 = var2.messageSnapshots;
            case 177:
                if (!(var0 != var1)) {
                    _fun39410_ip = 261;
                    continue _fun39410
                }
            case 181:
                var2 = var1.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun39410_ip = 261;
                    continue _fun39410
                }
            case 192:
                var0 = _closure1_slot14;
                var2 = var0.bind(var3)(var1);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun39410_ip = 257;
                    continue _fun39410
                }
            case 213:
                var6 = _closure1_slot16;
                var0 = var1.value;
                var0 = var0.message;
                var0 = var6.bind(var3)(var0, var5);
                if (var0) {
                    _fun39410_ip = 253;
                    continue _fun39410
                }
            case 236:
                var6 = var2.bind(var3)();
                var0 = var6.done;
                var1 = var6;
                if (var0) {
                    _fun39410_ip = 257;
                    continue _fun39410
                }
            case 251:
                _fun39410_ip = 213;
                continue _fun39410;
            case 253:
                var0 = true;
                return var0;
            case 257:
                var0 = false;
                return var0;
            case 261:
                var0 = false;
                return var0;
            case 265:
                var0 = true;
                return var0;
            case 269:
                var0 = true;
                return var0;
            case 273:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot16 = var11;
    var0 = function arg0() {
        _fun39413: for (var _fun39413_ip = 0;;) switch (_fun39413_ip) {
            case 0:
                var2 = arg0;
                var1 = global;
                var3 = var1.Array;
                var1 = var3.isArray;
                var1 = var1.bind(var3)(var2);
                var3 = var2;
                if (var1) {
                    _fun39413_ip = 40;
                    continue _fun39413
                }
            case 29:
                var1 = new Array(1);
                var1[0] = var2;
                var3 = var1;
            case 40:
                var2 = var3.flatMap;
                var1 = function(arg0) { // Environment: var0
                    _fun39414: for (var _fun39414_ip = 0;;) switch (_fun39414_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.type;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var6 = 10;
                            var2 = var2[var6];
                            var5 = undefined;
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.ComponentType;
                            var2 = var2.MEDIA_GALLERY;
                            if (!(var2 !== var3)) {
                                _fun39414_ip = 232;
                                continue _fun39414
                            }
                        case 52:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.ComponentType;
                            var2 = var2.THUMBNAIL;
                            if (!(var2 !== var3)) {
                                _fun39414_ip = 224;
                                continue _fun39414
                            }
                        case 88:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.ComponentType;
                            var2 = var2.FILE;
                            if (!(var2 !== var3)) {
                                _fun39414_ip = 216;
                                continue _fun39414
                            }
                        case 121:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.ComponentType;
                            var2 = var2.SECTION;
                            if (!(var2 !== var3)) {
                                _fun39414_ip = 193;
                                continue _fun39414
                            }
                        case 154:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.ComponentType;
                            var2 = var2.ACTION_ROW;
                            if (!(var2 !== var3)) {
                                _fun39414_ip = 193;
                                continue _fun39414
                            }
                        case 187:
                            var2 = new Array(0);
                            return var2;
                        case 193:
                            var3 = var0.components;
                            var2 = var3.flatMap;
                            var1 = _closure1_slot17;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 216:
                            var1 = var0.file;
                            return var1;
                        case 224:
                            var1 = var0.media;
                            return var1;
                        case 232:
                            var2 = var0.items;
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var0 = var0.media;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun39416: for (var _fun39416_ip = 0;;) switch (_fun39416_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = 'proxy_url';
                            var1 = var0 in var3;
                            var0 = var3;
                            if (!var1) {
                                _fun39416_ip = 53;
                                continue _fun39416
                            }
                        case 17:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.toUnfurledMediaItem;
                            var0 = var1.bind(var2)(var3);
                        case 53:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var10 = function arg0, arg1() {
        _fun39417: for (var _fun39417_ip = 0;;) switch (_fun39417_ip) {
            case 0:
                var3 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var4 = var4.ContentHarmTypeBitMask;
                var4 = var4.NONE;
                if (!(var3 !== var4)) {
                    _fun39417_ip = 111;
                    continue _fun39417
                }
            case 53:
                var1 = _closure1_slot22;
                var3 = var1.bind(var2)(var3);
                var2 = var3.length;
                var1 = 0;
                if (!(var1 !== var2)) {
                    _fun39417_ip = 105;
                    continue _fun39417
                }
            case 73:
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot20;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.CONTENT_SCAN_TYPE_REGISTRY;
                    var0 = arg0;
                    var0 = var1[var0];
                    var0 = var0.obscureReason;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                _fun39417_ip = 109;
                continue _fun39417;
            case 105:
                var0 = new Array(0);
            case 109:
                return var0;
            case 111:
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot18 = var10;
    var8 = function arg0, arg1() {
        _fun39420: for (var _fun39420_ip = 0;;) switch (_fun39420_ip) {
            case 0:
                var1 = arg0;
                var5 = arg1;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 7;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var6.bind(var3)(var2);
                var2 = var2.ContentHarmTypeBitMask;
                var2 = var2.NONE;
                if (!(var5 !== var2)) {
                    _fun39420_ip = 277;
                    continue _fun39420
                }
            case 52:
                var7 = _closure1_slot4;
                var6 = var7.get;
                var2 = 'explicit_media_redaction_ignore_pending_scan';
                var2 = var6.bind(var7)(var2);
                if (var2) {
                    _fun39420_ip = 273;
                    continue _fun39420
                }
            case 78:
                var2 = _closure1_slot22;
                var2 = var2.bind(var3)(var5);
                var6 = var2.length;
                var5 = 0;
                if (!(var5 !== var6)) {
                    _fun39420_ip = 269;
                    continue _fun39420
                }
            case 101:
                var5 = var1.type;
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = 9;
                var6 = var6[var7];
                var6 = var8.bind(var3)(var6);
                var6 = var6.ObscuredMediaTypes;
                var6 = var6.Embed;
                if (!(var6 !== var5)) {
                    _fun39420_ip = 250;
                    continue _fun39420
                }
            case 142:
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var7];
                var6 = var8.bind(var3)(var6);
                var6 = var6.ObscuredMediaTypes;
                var6 = var6.Attachment;
                if (!(var6 !== var5)) {
                    _fun39420_ip = 231;
                    continue _fun39420
                }
            case 175:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var6.bind(var3)(var4);
                var4 = var4.ObscuredMediaTypes;
                var4 = var4.GenericMedia;
                if (!(var4 !== var5)) {
                    _fun39420_ip = 212;
                    continue _fun39420
                }
            case 208:
                var4 = false;
                return var4;
            case 212:
                var5 = var1.media;
                var4 = function arg0, arg1() {
                    _fun39426: for (var _fun39426_ip = 0;;) switch (_fun39426_ip) {
                        case 0:
                            var2 = arg0;
                            var5 = arg1;
                            var _closure3_slot0 = var2;
                            var0 = var5.length;
                            var3 = 0;
                            var0 = var3 !== var0;
                            if (!var0) {
                                _fun39426_ip = 94;
                                continue _fun39426
                            }
                        case 26:
                            var4 = var5.filter;
                            var1 = function(arg0) { // Environment: var1
                                var3 = _closure1_slot20;
                                var2 = {};
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 9;
                                var0 = var1[var0];
                                var1 = undefined;
                                var0 = var4.bind(var1)(var0);
                                var0 = var0.ObscuredMediaTypes;
                                var0 = var0.GenericMedia;
                                var2.type = var0;
                                var0 = _closure3_slot0;
                                var2.media = var0;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0, var2);
                                var0 = !var0;
                                return var0;
                            };
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.length;
                            var1 = var3 !== var1;
                            if (!var1) {
                                _fun39426_ip = 91;
                                continue _fun39426
                            }
                        case 53:
                            var4 = _closure1_slot24;
                            var6 = var2.contentScanMetadata;
                            var2 = null;
                            var7 = var2 == var6;
                            var3 = undefined;
                            var2 = undefined;
                            if (var7) {
                                _fun39426_ip = 85;
                                continue _fun39426
                            }
                        case 79:
                            var2 = var6.version;
                        case 85:
                            var1 = var4.bind(var3)(var2, var5);
                        case 91:
                            var0 = var1;
                        case 94:
                            return var0;
                    }
                };
                var4 = var4.bind(var3)(var5, var2);
                return var4;
            case 231:
                var5 = var1.media;
                var4 = function arg0, arg1() {
                    _fun39424: for (var _fun39424_ip = 0;;) switch (_fun39424_ip) {
                        case 0:
                            var2 = arg0;
                            var5 = arg1;
                            var _closure3_slot0 = var2;
                            var0 = var5.length;
                            var3 = 0;
                            var0 = var3 !== var0;
                            if (!var0) {
                                _fun39424_ip = 89;
                                continue _fun39424
                            }
                        case 26:
                            var4 = var5.filter;
                            var1 = function(arg0) { // Environment: var1
                                var3 = _closure1_slot20;
                                var2 = {};
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 9;
                                var0 = var1[var0];
                                var1 = undefined;
                                var0 = var4.bind(var1)(var0);
                                var0 = var0.ObscuredMediaTypes;
                                var0 = var0.Attachment;
                                var2.type = var0;
                                var0 = _closure3_slot0;
                                var2.media = var0;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0, var2);
                                var0 = !var0;
                                return var0;
                            };
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.length;
                            var1 = var3 !== var1;
                            if (!var1) {
                                _fun39424_ip = 86;
                                continue _fun39424
                            }
                        case 53:
                            var4 = _closure1_slot24;
                            var3 = var2.content_scan_version;
                            var6 = null;
                            if (!(var6 == var3)) {
                                _fun39424_ip = 78;
                                continue _fun39424
                            }
                        case 72:
                            var3 = var2.contentScanVersion;
                        case 78:
                            var2 = undefined;
                            var1 = var4.bind(var2)(var3, var5);
                        case 86:
                            var0 = var1;
                        case 89:
                            return var0;
                    }
                };
                var4 = var4.bind(var3)(var5, var2);
                return var4;
            case 250:
                var1 = var1.media;
                var0 = function arg0, arg1() {
                    _fun39421: for (var _fun39421_ip = 0;;) switch (_fun39421_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = arg1;
                            var _closure3_slot0 = var0;
                            var2 = var3.length;
                            var5 = 0;
                            if (!(var5 !== var2)) {
                                _fun39421_ip = 409;
                                continue _fun39421
                            }
                        case 26:
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun39421_ip = 409;
                                continue _fun39421
                            }
                        case 35:
                            var6 = var3.filter;
                            var4 = function(arg0) { // Environment: var1
                                var3 = _closure1_slot20;
                                var2 = {};
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 9;
                                var0 = var1[var0];
                                var1 = undefined;
                                var0 = var4.bind(var1)(var0);
                                var0 = var0.ObscuredMediaTypes;
                                var0 = var0.Embed;
                                var2.type = var0;
                                var0 = _closure3_slot0;
                                var2.media = var0;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0, var2);
                                var0 = !var0;
                                return var0;
                            };
                            var4 = var6.bind(var3)(var4);
                            var4 = var4.length;
                            if (!(var5 !== var4)) {
                                _fun39421_ip = 405;
                                continue _fun39421
                            }
                        case 62:
                            var4 = 'video';
                            var4 = var4 in var0;
                            if (!var4) {
                                _fun39421_ip = 134;
                                continue _fun39421
                            }
                        case 73:
                            var4 = var0.video;
                            if (!(var2 != var4)) {
                                _fun39421_ip = 134;
                                continue _fun39421
                            }
                        case 83:
                            var7 = var0.video;
                            var8 = var2 == var7;
                            var6 = undefined;
                            if (var8) {
                                _fun39421_ip = 103;
                                continue _fun39421
                            }
                        case 98:
                            var6 = var7.width;
                        case 103:
                            if (!(var5 === var6)) {
                                _fun39421_ip = 134;
                                continue _fun39421
                            }
                        case 107:
                            var6 = var0.video;
                            var7 = var2 == var6;
                            var4 = undefined;
                            if (var7) {
                                _fun39421_ip = 127;
                                continue _fun39421
                            }
                        case 122:
                            var4 = var6.height;
                        case 127:
                            if (!(var5 !== var4)) {
                                _fun39421_ip = 401;
                                continue _fun39421
                            }
                        case 134:
                            var4 = 'thumbnail';
                            var4 = var4 in var0;
                            if (!var4) {
                                _fun39421_ip = 206;
                                continue _fun39421
                            }
                        case 145:
                            var4 = var0.thumbnail;
                            if (!(var2 != var4)) {
                                _fun39421_ip = 206;
                                continue _fun39421
                            }
                        case 155:
                            var7 = var0.thumbnail;
                            var8 = var2 == var7;
                            var6 = undefined;
                            if (var8) {
                                _fun39421_ip = 175;
                                continue _fun39421
                            }
                        case 170:
                            var6 = var7.width;
                        case 175:
                            if (!(var5 === var6)) {
                                _fun39421_ip = 206;
                                continue _fun39421
                            }
                        case 179:
                            var6 = var0.thumbnail;
                            var7 = var2 == var6;
                            var4 = undefined;
                            if (var7) {
                                _fun39421_ip = 199;
                                continue _fun39421
                            }
                        case 194:
                            var4 = var6.height;
                        case 199:
                            if (!(var5 !== var4)) {
                                _fun39421_ip = 397;
                                continue _fun39421
                            }
                        case 206:
                            var4 = 'image';
                            var4 = var4 in var0;
                            if (!var4) {
                                _fun39421_ip = 275;
                                continue _fun39421
                            }
                        case 217:
                            var4 = var0.image;
                            if (!(var2 != var4)) {
                                _fun39421_ip = 275;
                                continue _fun39421
                            }
                        case 227:
                            var7 = var0.image;
                            var8 = var2 == var7;
                            var6 = undefined;
                            if (var8) {
                                _fun39421_ip = 247;
                                continue _fun39421
                            }
                        case 242:
                            var6 = var7.width;
                        case 247:
                            if (!(var5 === var6)) {
                                _fun39421_ip = 275;
                                continue _fun39421
                            }
                        case 251:
                            var6 = var0.image;
                            var7 = var2 == var6;
                            var4 = undefined;
                            if (var7) {
                                _fun39421_ip = 271;
                                continue _fun39421
                            }
                        case 266:
                            var4 = var6.height;
                        case 271:
                            if (!(var5 !== var4)) {
                                _fun39421_ip = 393;
                                continue _fun39421
                            }
                        case 275:
                            var4 = 'images';
                            var4 = var4 in var0;
                            if (!var4) {
                                _fun39421_ip = 315;
                                continue _fun39421
                            }
                        case 286:
                            var5 = var0.images;
                            if (!(var2 != var5)) {
                                _fun39421_ip = 315;
                                continue _fun39421
                            }
                        case 296:
                            var4 = var5.some;
                            var1 = function(arg0) { // Environment: var1
                                _fun39423: for (var _fun39423_ip = 0;;) switch (_fun39423_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = null;
                                        var0 = var0 != var1;
                                        if (!var0) {
                                            _fun39423_ip = 23;
                                            continue _fun39423
                                        }
                                    case 12:
                                        var3 = var1.width;
                                        var2 = 0;
                                        var0 = var2 === var3;
                                    case 23:
                                        if (!var0) {
                                            _fun39423_ip = 37;
                                            continue _fun39423
                                        }
                                    case 26:
                                        var2 = var1.height;
                                        var1 = 0;
                                        var0 = var1 === var2;
                                    case 37:
                                        return var0;
                                }
                            };
                            var1 = var4.bind(var5)(var1);
                            if (var1) {
                                _fun39421_ip = 389;
                                continue _fun39421
                            }
                        case 315:
                            var1 = _closure1_slot24;
                            var4 = var0.content_scan_version;
                            if (!(var2 == var4)) {
                                _fun39421_ip = 373;
                                continue _fun39421
                            }
                        case 332:
                            var4 = var0.contentScanVersion;
                            if (!(var2 == var4)) {
                                _fun39421_ip = 365;
                                continue _fun39421
                            }
                        case 342:
                            var4 = var0.contentScanVersion;
                            var4 = var2 != var4;
                            var2 = null;
                            if (!var4) {
                                _fun39421_ip = 379;
                                continue _fun39421
                            }
                        case 357:
                            var2 = var0.contentScanVersion;
                            _fun39421_ip = 379;
                            continue _fun39421;
                        case 365:
                            var2 = var0.contentScanVersion;
                            _fun39421_ip = 379;
                            continue _fun39421;
                        case 373:
                            var2 = var0.content_scan_version;
                        case 379:
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2, var3);
                            return var0;
                        case 389:
                            var0 = false;
                            return var0;
                        case 393:
                            var0 = false;
                            return var0;
                        case 397:
                            var0 = false;
                            return var0;
                        case 401:
                            var0 = false;
                            return var0;
                        case 405:
                            var0 = false;
                            return var0;
                        case 409:
                            var0 = false;
                            return var0;
                    }
                };
                var0 = var0.bind(var3)(var1, var2);
                return var0;
            case 269:
                var0 = false;
                return var0;
            case 273:
                var0 = false;
                return var0;
            case 277:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot19 = var8;
    var7 = function arg0, arg1() {
        _fun39428: for (var _fun39428_ip = 0;;) switch (_fun39428_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun39428_ip = 408;
                    continue _fun39428
                }
            case 15:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 7;
                var0 = var5[var0];
                var5 = undefined;
                var0 = var6.bind(var5)(var0);
                var0 = var0.CONTENT_SCAN_TYPE_REGISTRY;
                var0 = var0[var3];
                var3 = var0.devSettingKey;
                if (!(var1 != var3)) {
                    _fun39428_ip = 86;
                    continue _fun39428
                }
            case 60:
                var7 = _closure1_slot4;
                var6 = var7.get;
                var3 = var0.devSettingKey;
                var3 = var6.bind(var7)(var3);
                if (var3) {
                    _fun39428_ip = 404;
                    continue _fun39428
                }
            case 86:
                var6 = var4.type;
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var8 = 9;
                var3 = var3[var8];
                var3 = var7.bind(var5)(var3);
                var3 = var3.ObscuredMediaTypes;
                var3 = var3.Embed;
                if (!(var3 !== var6)) {
                    _fun39428_ip = 341;
                    continue _fun39428
                }
            case 130:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var7.bind(var5)(var3);
                var3 = var3.ObscuredMediaTypes;
                var3 = var3.Attachment;
                if (!(var3 !== var6)) {
                    _fun39428_ip = 278;
                    continue _fun39428
                }
            case 163:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var7.bind(var5)(var3);
                var3 = var3.ObscuredMediaTypes;
                var3 = var3.GenericMedia;
                if (!(var3 !== var6)) {
                    _fun39428_ip = 200;
                    continue _fun39428
                }
            case 196:
                var3 = false;
                return var3;
            case 200:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 12;
                var3 = var7[var3];
                var8 = var6.bind(var5)(var3);
                var7 = var8.hasFlag;
                var3 = var4.media;
                var6 = var3.contentScanMetadata;
                var9 = var1 == var6;
                var3 = undefined;
                if (var9) {
                    _fun39428_ip = 252;
                    continue _fun39428
                }
            case 247:
                var3 = var6.flags;
            case 252:
                var9 = var1 != var3;
                var6 = 0;
                if (!var9) {
                    _fun39428_ip = 264;
                    continue _fun39428
                }
            case 261:
                var6 = var3;
            case 264:
                var3 = var0.genericMediaFlag;
                var3 = var7.bind(var8)(var6, var3);
                return var3;
            case 278:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 12;
                var3 = var7[var3];
                var8 = var6.bind(var5)(var3);
                var7 = var8.hasFlag;
                var3 = var4.media;
                var3 = var3.flags;
                var9 = var1 != var3;
                var6 = 0;
                if (!var9) {
                    _fun39428_ip = 327;
                    continue _fun39428
                }
            case 324:
                var6 = var3;
            case 327:
                var3 = var0.attachmentFlag;
                var3 = var7.bind(var8)(var6, var3);
                return var3;
            case 341:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 12;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.hasFlag;
                var4 = var4.media;
                var4 = var4.flags;
                var5 = var1 != var4;
                var1 = 0;
                if (!var5) {
                    _fun39428_ip = 390;
                    continue _fun39428
                }
            case 387:
                var1 = var4;
            case 390:
                var0 = var0.embedFlag;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 404:
                var0 = true;
                return var0;
            case 408:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot20 = var7;
    var6 = function arg0() {
        _fun39429: for (var _fun39429_ip = 0;;) switch (_fun39429_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 7;
                var0 = var0[var6];
                var5 = undefined;
                var0 = var1.bind(var5)(var0);
                var0 = var0.ContentHarmTypeBitMask;
                var0 = var0.NONE;
                var2 = _closure1_slot14;
                var1 = arg0;
                var4 = var2.bind(var5)(var1);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = var2;
                var2 = var0;
                var0 = var2;
                if (var1) {
                    _fun39429_ip = 310;
                    continue _fun39429
                }
            case 73:
                var9 = var3.value;
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var8.bind(var5)(var1);
                var1 = var1.ContentHarmType;
                var1 = var1.EXPLICIT;
                if (!(var1 !== var9)) {
                    _fun39429_ip = 253;
                    continue _fun39429
                }
            case 114:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var8.bind(var5)(var1);
                var1 = var1.ContentHarmType;
                var1 = var1.GORE;
                if (!(var1 !== var9)) {
                    _fun39429_ip = 218;
                    continue _fun39429
                }
            case 147:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var8.bind(var5)(var1);
                var1 = var1.ContentHarmType;
                var1 = var1.SELF_HARM;
                var8 = var2;
                if (!(var1 === var9)) {
                    _fun39429_ip = 286;
                    continue _fun39429
                }
            case 183:
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var9.bind(var5)(var1);
                var1 = var1.ContentHarmTypeBitMask;
                var1 = var1.SELF_HARM;
                var8 = var2 | var1;
                _fun39429_ip = 286;
                continue _fun39429;
            case 218:
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var9.bind(var5)(var1);
                var1 = var1.ContentHarmTypeBitMask;
                var1 = var1.GORE;
                var8 = var2 | var1;
                _fun39429_ip = 286;
                continue _fun39429;
            case 253:
                var9 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var1 = var9.bind(var5)(var1);
                var1 = var1.ContentHarmTypeBitMask;
                var1 = var1.EXPLICIT;
                var8 = var2 | var1;
            case 286:
                var9 = var4.bind(var5)();
                var1 = var9.done;
                var2 = var8;
                var3 = var9;
                var0 = var2;
                if (!var1) {
                    _fun39429_ip = 73;
                    continue _fun39429
                }
            case 310:
                return var0;
        }
    };
    var _closure1_slot21 = var6;
    var5 = function arg0() {
        _fun39430: for (var _fun39430_ip = 0;;) switch (_fun39430_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var0 = var0.ContentHarmTypeBitMask;
                var0 = var0.NONE;
                if (!(var6 !== var0)) {
                    _fun39430_ip = 131;
                    continue _fun39430
                }
            case 44:
                var0 = new Array(0);
                var2 = _closure1_slot14;
                var1 = _closure1_slot10;
                var1 = var1.bind(var5)();
                var4 = var2.bind(var5)(var1);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = 0;
                if (var1) {
                    _fun39430_ip = 129;
                    continue _fun39430
                }
            case 79:
                var1 = var2.value;
                var7 = var1.bitmask;
                var7 = var6 & var7;
                if (!(var7 > var3)) {
                    _fun39430_ip = 114;
                    continue _fun39430
                }
            case 98:
                var7 = var0.push;
                var1 = var1.harmType;
                var1 = var7.bind(var0)(var1);
            case 114:
                var7 = var4.bind(var5)();
                var1 = var7.done;
                var2 = var7;
                if (!var1) {
                    _fun39430_ip = 79;
                    continue _fun39430
                }
            case 129:
                return var0;
            case 131:
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot22 = var5;
    var4 = function arg0, arg1() {
        _fun39431: for (var _fun39431_ip = 0;;) switch (_fun39431_ip) {
            case 0:
                var6 = arg1;
                var2 = arguments[2];
                var5 = undefined;
                if (!(var2 === var5)) {
                    _fun39431_ip = 42;
                    continue _fun39431
                }
            case 12:
                var1 = _closure1_slot9;
                var0 = new Array(2);
                var0[0] = var1;
                var1 = global;
                var1 = var1.l;
                var0[1] = var1;
                var2 = var0;
            case 42:
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var5)(var2, var0);
                var0 = 0;
                var2 = var1[var0];
                var0 = 1;
                var4 = var1[var0];
                var1 = var2.getChannel;
                var0 = arg0;
                var7 = var1.bind(var2)(var0);
                var1 = _closure1_slot8;
                var0 = var1.getCurrentUser;
                var1 = var0.bind(var1)();
                var2 = null;
                var8 = var2 == var1;
                var0 = null;
                if (var8) {
                    _fun39431_ip = 296;
                    continue _fun39431
                }
            case 111:
                var1 = var1.id;
                var0 = null;
                if (!(var6 !== var1)) {
                    _fun39431_ip = 296;
                    continue _fun39431
                }
            case 125:
                var1 = var2 == var7;
                var0 = null;
                if (var1) {
                    _fun39431_ip = 296;
                    continue _fun39431
                }
            case 137:
                var1 = var7.isDM;
                var1 = var1.bind(var7)();
                if (var1) {
                    _fun39431_ip = 197;
                    continue _fun39431
                }
            case 150:
                var1 = var7.isGroupDM;
                var1 = var1.bind(var7)();
                if (var1) {
                    _fun39431_ip = 197;
                    continue _fun39431
                }
            case 163:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 9;
                var1 = var8[var1];
                var1 = var7.bind(var5)(var1);
                var1 = var1.ContentHarmTypeChannel;
                var1 = var1.GUILD;
                _fun39431_ip = 293;
                continue _fun39431;
            case 197:
                if (!(var2 != var6)) {
                    _fun39431_ip = 224;
                    continue _fun39431
                }
            case 201:
                var2 = var4.getFriendIDs;
                var4 = var2.bind(var4)();
                var2 = var4.includes;
                var2 = var2.bind(var4)(var6);
                if (var2) {
                    _fun39431_ip = 258;
                    continue _fun39431
                }
            case 224:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 9;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ContentHarmTypeChannel;
                var2 = var2.NON_FRIEND_DM;
                _fun39431_ip = 290;
                continue _fun39431;
            case 258:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 9;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.ContentHarmTypeChannel;
                var2 = var3.FRIEND_DM;
            case 290:
                var1 = var2;
            case 293:
                var0 = var1;
            case 296:
                return var0;
        }
    };
    var _closure1_slot23 = var4;
    var0 = function arg0, arg1() {
        _fun39432: for (var _fun39432_ip = 0;;) switch (_fun39432_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var0 = _closure1_slot9;
                var3 = var0.validContentScanVersion;
                var0 = -1;
                var0 = var0 !== var4;
                if (!var0) {
                    _fun39432_ip = 148;
                    continue _fun39432
                }
            case 32:
                var6 = var5.includes;
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 7;
                var2 = var2[var8];
                var7 = undefined;
                var2 = var9.bind(var7)(var2);
                var2 = var2.ContentHarmType;
                var2 = var2.GORE;
                var2 = var6.bind(var5)(var2);
                if (var2) {
                    _fun39432_ip = 129;
                    continue _fun39432
                }
            case 79:
                var2 = var5.includes;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var8];
                var1 = var6.bind(var7)(var1);
                var1 = var1.ContentHarmType;
                var1 = var1.SELF_HARM;
                var1 = var2.bind(var5)(var1);
                if (var1) {
                    _fun39432_ip = 129;
                    continue _fun39432
                }
            case 121:
                var1 = null;
                var1 = var1 == var4;
                _fun39432_ip = 145;
                continue _fun39432;
            case 129:
                var2 = null;
                var2 = var2 == var4;
                if (var2) {
                    _fun39432_ip = 142;
                    continue _fun39432
                }
            case 138:
                var2 = var4 < var3;
            case 142:
                var1 = var2;
            case 145:
                var0 = var1;
            case 148:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var3 = function arg0() {
        _fun39433: for (var _fun39433_ip = 0;;) switch (_fun39433_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun39433_ip = 92;
                    continue _fun39433
                }
            case 12:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 13;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var2 = var2.ExplicitContentRedaction;
                var7 = var2.BLOCK;
                var2 = new Array(2);
                var2[0] = var7;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.ExplicitContentRedaction;
                var1 = var1.BLUR;
                var2[1] = var1;
                var1 = var2.includes;
                var0 = var1.bind(var2)(var3);
            case 92:
                return var0;
        }
    };
    var _closure1_slot25 = var3;
    var1 = function arg0() {
        _fun39434: for (var _fun39434_ip = 0;;) switch (_fun39434_ip) {
            case 0:
                var3 = arg0;
                var4 = null;
                if (!(var4 != var3)) {
                    _fun39434_ip = 225;
                    continue _fun39434
                }
            case 12:
                var0 = 'channel_id';
                var0 = var0 in var3;
                var2 = null;
                if (!var0) {
                    _fun39434_ip = 30;
                    continue _fun39434
                }
            case 25:
                var2 = var3.channel_id;
            case 30:
                var0 = 'messageReference';
                var0 = var0 in var3;
                if (!var0) {
                    _fun39434_ip = 84;
                    continue _fun39434
                }
            case 41:
                var6 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 14;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var6.bind(var0)(var1);
                var1 = var1.bind(var0)(var3);
                if (!var1) {
                    _fun39434_ip = 84;
                    continue _fun39434
                }
            case 74:
                var1 = var3.messageReference;
                if (!(var4 == var1)) {
                    _fun39434_ip = 141;
                    continue _fun39434
                }
            case 84:
                var1 = 'author';
                var1 = var1 in var3;
                if (var1) {
                    _fun39434_ip = 116;
                    continue _fun39434
                }
            case 95:
                var1 = 'author_id';
                var6 = var1 in var3;
                var1 = null;
                if (!var6) {
                    _fun39434_ip = 212;
                    continue _fun39434
                }
            case 108:
                var1 = var3.author_id;
                _fun39434_ip = 212;
                continue _fun39434;
            case 116:
                var7 = var3.author;
                var8 = var4 == var7;
                var6 = undefined;
                if (var8) {
                    _fun39434_ip = 136;
                    continue _fun39434
                }
            case 131:
                var6 = var7.id;
            case 136:
                var1 = var6;
                _fun39434_ip = 212;
                continue _fun39434;
            case 141:
                var7 = _closure1_slot6;
                var6 = var7.getMessage;
                var5 = var3.messageReference;
                var5 = var5.channel_id;
                var3 = var3.messageReference;
                var3 = var3.message_id;
                var3 = var6.bind(var7)(var5, var3);
                var5 = var4 != var3;
                var1 = null;
                if (!var5) {
                    _fun39434_ip = 212;
                    continue _fun39434
                }
            case 189:
                var3 = var3.author;
                var4 = var4 == var3;
                var0 = undefined;
                if (var4) {
                    _fun39434_ip = 209;
                    continue _fun39434
                }
            case 204:
                var0 = var3.id;
            case 209:
                var1 = var0;
            case 212:
                var0 = {};
                var0.channelId = var2;
                var0.authorId = var1;
                return var0;
            case 225:
                var0 = {
                    'channelId': null,
                    'authorId': null
                };
                return var0;
        }
    };
    var _closure1_slot26 = var1;
    var0 = global;
    var15 = var0.Object;
    var14 = var15.defineProperty;
    var12 = {};
    var0 = true;
    var12.value = var0;
    var0 = '__esModule';
    var0 = var14.bind(var15)(var2, var0, var12);
    var0 = 0;
    var12 = var18[var0];
    var0 = undefined;
    var12 = var13.bind(var0)(var12);
    var _closure1_slot3 = var12;
    var12 = 1;
    var12 = var18[var12];
    var12 = var13.bind(var0)(var12);
    var _closure1_slot4 = var12;
    var12 = 2;
    var12 = var18[var12];
    var12 = var13.bind(var0)(var12);
    var _closure1_slot5 = var12;
    var12 = 3;
    var12 = var18[var12];
    var12 = var13.bind(var0)(var12);
    var _closure1_slot6 = var12;
    var12 = 4;
    var12 = var18[var12];
    var12 = var13.bind(var0)(var12);
    var _closure1_slot7 = var12;
    var12 = 5;
    var12 = var18[var12];
    var12 = var13.bind(var0)(var12);
    var _closure1_slot8 = var12;
    var12 = 6;
    var12 = var18[var12];
    var12 = var13.bind(var0)(var12);
    var _closure1_slot9 = var12;
    var15 = function() {
        var0 = global;
        var2 = var0.Object;
        var1 = var2.values;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 7;
        var3 = var3[var0];
        var0 = undefined;
        var0 = var4.bind(var0)(var3);
        var0 = var0.CONTENT_SCAN_TYPE_REGISTRY;
        var2 = var1.bind(var2)(var0);
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun39436: for (var _fun39436_ip = 0;;) switch (_fun39436_ip) {
                case 0:
                    var3 = arg0;
                    var0 = var3.isEligible;
                    var2 = null;
                    var0 = var2 == var0;
                    if (var0) {
                        _fun39436_ip = 46;
                        continue _fun39436
                    }
                case 18:
                    var1 = var3.isEligible;
                    var2 = var2 == var1;
                    var1 = undefined;
                    if (var2) {
                        _fun39436_ip = 43;
                        continue _fun39436
                    }
                case 33:
                    var2 = var3.isEligible;
                    var1 = var2.bind(var3)();
                case 43:
                    var0 = var1;
                case 46:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot10 = var15;
    var14 = function arg0() {
        _fun39437: for (var _fun39437_ip = 0;;) switch (_fun39437_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot26;
                var3 = undefined;
                var0 = var0.bind(var3)(var5);
                var4 = var0.channelId;
                var2 = var0.authorId;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun39437_ip = 50;
                    continue _fun39437
                }
            case 34:
                if (!(var0 != var5)) {
                    _fun39437_ip = 50;
                    continue _fun39437
                }
            case 38:
                var0 = _closure1_slot12;
                var0 = var0.bind(var3)(var4, var2);
                _fun39437_ip = 82;
                continue _fun39437;
            case 50:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ContentHarmTypeBitMask;
                var0 = var1.NONE;
            case 82:
                return var0;
        }
    };
    var _closure1_slot11 = var14;
    var13 = function arg0, arg1() {
        _fun39438: for (var _fun39438_ip = 0;;) switch (_fun39438_ip) {
            case 0:
                var6 = arg1;
                var2 = _closure1_slot8;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var2)) {
                    _fun39438_ip = 119;
                    continue _fun39438
                }
            case 25:
                var2 = var2.id;
                if (!(var6 !== var2)) {
                    _fun39438_ip = 119;
                    continue _fun39438
                }
            case 34:
                var5 = _closure1_slot23;
                var2 = _closure1_slot5;
                var3 = new Array(2);
                var3[0] = var2;
                var2 = _closure1_slot7;
                var3[1] = var2;
                var4 = undefined;
                var2 = arg0;
                var2 = var5.bind(var4)(var2, var6, var3);
                if (!(var1 != var2)) {
                    _fun39438_ip = 85;
                    continue _fun39438
                }
            case 74:
                var1 = _closure1_slot13;
                var1 = var1.bind(var4)(var2);
                _fun39438_ip = 117;
                continue _fun39438;
            case 85:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.ContentHarmTypeBitMask;
                var1 = var2.NONE;
            case 117:
                return var1;
            case 119:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.ContentHarmTypeBitMask;
                var0 = var0.NONE;
                return var0;
        }
    };
    var _closure1_slot12 = var13;
    var12 = function arg0() {
        _fun39439: for (var _fun39439_ip = 0;;) switch (_fun39439_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var2 = _closure1_slot10;
                var3 = undefined;
                var5 = var2.bind(var3)();
                var2 = null;
                if (!(var2 != var4)) {
                    _fun39439_ip = 90;
                    continue _fun39439
                }
            case 28:
                var2 = _closure1_slot21;
                var4 = var5.map;
                var0 = function(arg0) { // Environment: var0
                    _fun39440: for (var _fun39440_ip = 0;;) switch (_fun39440_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot25;
                            var0 = var1.getUserSettingsWithDefaults;
                            var2 = var0.bind(var1)();
                            var0 = _closure2_slot0;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var0 = null;
                            if (!var2) {
                                _fun39440_ip = 49;
                                continue _fun39440
                            }
                        case 43:
                            var0 = var1.harmType;
                        case 49:
                            return var0;
                    }
                };
                var5 = var4.bind(var5)(var0);
                var4 = var5.filter;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.isNotNullish;
                var0 = var4.bind(var5)(var0);
                var0 = var2.bind(var3)(var0);
                _fun39439_ip = 122;
                continue _fun39439;
            case 90:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ContentHarmTypeBitMask;
                var0 = var1.NONE;
            case 122:
                return var0;
        }
    };
    var _closure1_slot13 = var12;
    var16 = 15;
    var16 = var18[var16];
    var18 = var17.bind(var0)(var16);
    var17 = var18.fileFinishedImporting;
    var16 = 'modules/explicit_media_redaction/ObscuredMediaUtils.tsx';
    var16 = var17.bind(var18)(var16);
    var2.getEligibleHarmTypesConfigsForContext = var15;
    var2.getEnabledHarmTypesForMessage = var14;
    var2.getEnabledHarmTypesForChannelAndAuthorId = var13;
    var2.getEnabledHarmTypesBitmaskForChannelType = var12;
    var12 = function arg0() {
        var3 = arg0;
        var2 = _closure1_slot16;
        var0 = _closure1_slot11;
        var1 = undefined;
        var0 = var0.bind(var1)(var3);
        var0 = var2.bind(var1)(var3, var0);
        return var0;
    };
    var2.messageHasObscurableMedia = var12;
    var2.messageHasObscurableMediaForBitmask = var11;
    var11 = function arg0, arg1() {
        _fun39442: for (var _fun39442_ip = 0;;) switch (_fun39442_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var0 = null;
                if (!(var0 == var5)) {
                    _fun39442_ip = 28;
                    continue _fun39442
                }
            case 14:
                var4 = _closure1_slot11;
                var3 = undefined;
                var5 = var4.bind(var3)(var2);
            case 28:
                var _closure2_slot0 = var5;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 7;
                var6 = var6[var3];
                var3 = undefined;
                var6 = var7.bind(var3)(var6);
                var6 = var6.ContentHarmTypeBitMask;
                var6 = var6.NONE;
                if (!(var5 !== var6)) {
                    _fun39442_ip = 335;
                    continue _fun39442
                }
            case 76:
                var9 = var2.attachments;
                var7 = var0 == var9;
                var6 = undefined;
                if (var7) {
                    _fun39442_ip = 107;
                    continue _fun39442
                }
            case 91:
                var8 = var9.some;
                var7 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot19;
                    var2 = {};
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.ObscuredMediaTypes;
                    var0 = var0.Attachment;
                    var2.type = var0;
                    var0 = arg0;
                    var2.media = var0;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var6 = var8.bind(var9)(var7);
            case 107:
                if (var6) {
                    _fun39442_ip = 331;
                    continue _fun39442
                }
            case 113:
                var9 = var2.embeds;
                var7 = var0 == var9;
                var6 = undefined;
                if (var7) {
                    _fun39442_ip = 144;
                    continue _fun39442
                }
            case 128:
                var8 = var9.some;
                var7 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot19;
                    var2 = {};
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.ObscuredMediaTypes;
                    var0 = var0.Embed;
                    var2.type = var0;
                    var0 = arg0;
                    var2.media = var0;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var6 = var8.bind(var9)(var7);
            case 144:
                if (var6) {
                    _fun39442_ip = 327;
                    continue _fun39442
                }
            case 150:
                var6 = var2.components;
                if (!(var0 != var6)) {
                    _fun39442_ip = 197;
                    continue _fun39442
                }
            case 160:
                var7 = _closure1_slot17;
                var6 = var2.components;
                var7 = var7.bind(var3)(var6);
                var6 = var7.some;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot19;
                    var2 = {};
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.ObscuredMediaTypes;
                    var0 = var0.GenericMedia;
                    var2.type = var0;
                    var0 = arg0;
                    var2.media = var0;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var1 = var6.bind(var7)(var1);
                if (var1) {
                    _fun39442_ip = 323;
                    continue _fun39442
                }
            case 197:
                var1 = 'messageSnapshots';
                var1 = var1 in var2;
                if (var1) {
                    _fun39442_ip = 229;
                    continue _fun39442
                }
            case 208:
                var1 = 'message_snapshots';
                var6 = var1 in var2;
                var1 = null;
                if (!var6) {
                    _fun39442_ip = 235;
                    continue _fun39442
                }
            case 221:
                var1 = var2.message_snapshots;
                _fun39442_ip = 235;
                continue _fun39442;
            case 229:
                var1 = var2.messageSnapshots;
            case 235:
                if (!(var0 != var1)) {
                    _fun39442_ip = 319;
                    continue _fun39442
                }
            case 239:
                var2 = var1.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun39442_ip = 319;
                    continue _fun39442
                }
            case 250:
                var0 = _closure1_slot14;
                var2 = var0.bind(var3)(var1);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun39442_ip = 315;
                    continue _fun39442
                }
            case 271:
                var6 = _closure1_slot27;
                var0 = var1.value;
                var0 = var0.message;
                var0 = var6.bind(var3)(var0, var5);
                if (var0) {
                    _fun39442_ip = 311;
                    continue _fun39442
                }
            case 294:
                var6 = var2.bind(var3)();
                var0 = var6.done;
                var1 = var6;
                if (var0) {
                    _fun39442_ip = 315;
                    continue _fun39442
                }
            case 309:
                _fun39442_ip = 271;
                continue _fun39442;
            case 311:
                var0 = true;
                return var0;
            case 315:
                var0 = false;
                return var0;
            case 319:
                var0 = false;
                return var0;
            case 323:
                var0 = true;
                return var0;
            case 327:
                var0 = true;
                return var0;
            case 331:
                var0 = true;
                return var0;
            case 335:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot27 = var11;
    var2.hasUnscannedMedia = var11;
    var11 = function arg0() {
        _fun39446: for (var _fun39446_ip = 0;;) switch (_fun39446_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.components;
                var0 = null;
                var0 = var0 == var2;
                if (var0) {
                    _fun39446_ip = 59;
                    continue _fun39446
                }
            case 18:
                var3 = _closure1_slot17;
                var2 = var1.components;
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.loadingState;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.UnfurledMediaLoadingState;
                    var0 = var0.LOADING;
                    var0 = var1 === var0;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 59:
                return var0;
        }
    };
    var2.isEligibleForScanning = var11;
    var11 = function arg0() {
        _fun39448: for (var _fun39448_ip = 0;;) switch (_fun39448_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot11;
                var1 = undefined;
                var4 = var4.bind(var1)(var0);
                var _closure2_slot0 = var4;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.ContentHarmTypeBitMask;
                var2 = var2.NONE;
                if (!(var4 !== var2)) {
                    _fun39448_ip = 238;
                    continue _fun39448
                }
            case 62:
                var6 = var0.attachments;
                var2 = null;
                var4 = var2 == var6;
                var8 = undefined;
                if (var4) {
                    _fun39448_ip = 94;
                    continue _fun39448
                }
            case 79:
                var5 = var6.filter;
                var4 = function(arg0) { // Environment: var3
                    var3 = _closure1_slot19;
                    var2 = {};
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.ObscuredMediaTypes;
                    var0 = var0.Attachment;
                    var2.type = var0;
                    var0 = arg0;
                    var2.media = var0;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var8 = var5.bind(var6)(var4);
            case 94:
                var6 = var0.embeds;
                var0 = var2 == var6;
                var5 = undefined;
                if (var0) {
                    _fun39448_ip = 124;
                    continue _fun39448
                }
            case 109:
                var4 = var6.filter;
                var0 = function(arg0) { // Environment: var3
                    var3 = _closure1_slot19;
                    var2 = {};
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var4.bind(var1)(var0);
                    var0 = var0.ObscuredMediaTypes;
                    var0 = var0.Embed;
                    var2.type = var0;
                    var0 = arg0;
                    var2.media = var0;
                    var0 = _closure2_slot0;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var5 = var4.bind(var6)(var0);
            case 124:
                var0 = {};
                var6 = var2 == var8;
                var4 = undefined;
                if (var6) {
                    _fun39448_ip = 168;
                    continue _fun39448
                }
            case 135:
                var7 = var8.map;
                var6 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var8 = var7.bind(var8)(var6);
                var7 = var8.filter;
                var6 = global;
                var6 = var6.Boolean;
                var4 = var7.bind(var8)(var6);
            case 168:
                if (!(var2 == var4)) {
                    _fun39448_ip = 176;
                    continue _fun39448
                }
            case 172:
                var4 = new Array(0);
            case 176:
                var0.attachmentIds = var4;
                var4 = var2 == var5;
                var1 = undefined;
                if (var4) {
                    _fun39448_ip = 223;
                    continue _fun39448
                }
            case 190:
                var4 = var5.map;
                var3 = function(arg0, arg1) { // Environment: var3
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = 'embed_';
                    var0 = arg1;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.filter;
                var3 = global;
                var3 = var3.Boolean;
                var1 = var4.bind(var5)(var3);
            case 223:
                if (!(var2 == var1)) {
                    _fun39448_ip = 231;
                    continue _fun39448
                }
            case 227:
                var1 = new Array(0);
            case 231:
                var0.embedIds = var1;
                return var0;
            case 238:
                var0 = {};
                var1 = new Array(0);
                var0.attachmentIds = var1;
                var1 = new Array(0);
                var0.embedIds = var1;
                return var0;
        }
    };
    var2.getUnscannedMediaIds = var11;
    var2.getMediaObscuredReasonFromBitmask = var10;
    var9 = function arg0, arg1() {
        _fun39453: for (var _fun39453_ip = 0;;) switch (_fun39453_ip) {
            case 0:
                var3 = arg1;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var4 = var4.ContentHarmTypeBitMask;
                var4 = var4.NONE;
                if (!(var3 !== var4)) {
                    _fun39453_ip = 102;
                    continue _fun39453
                }
            case 53:
                var0 = _closure1_slot22;
                var4 = var0.bind(var2)(var3);
                var0 = var4.length;
                var2 = 0;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun39453_ip = 100;
                    continue _fun39453
                }
            case 76:
                var3 = var4.filter;
                var1 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot20;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                var1 = var1.length;
                var0 = var1 > var2;
            case 100:
                return var0;
            case 102:
                var0 = false;
                return var0;
        }
    };
    var2.isMediaObscuredForHarmTypes = var9;
    var2.isMediaScanPending = var8;
    var2.isMediaFlaggedForHarmType = var7;
    var2.contentHarmTypesToFlags = var6;
    var2.getHarmTypeFromBitmask = var5;
    var2.getChannelTypeById = var4;
    var2.shouldRedactForSettingValue = var3;
    var2.getChannelIdAndAuthorIdFromMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 4004, 1372, 4251, 3102, 1621, 4259, 4273, 1304, 4275, 1647, 3978, 1384, 1311, 4282, 2]);