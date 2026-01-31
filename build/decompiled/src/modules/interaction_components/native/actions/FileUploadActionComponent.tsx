// modules/interaction_components/native/actions/FileUploadActionComponent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun113418: for (var _fun113418_ip = 0;;) switch (_fun113418_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun113418_ip = 46;
                    continue _fun113418
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun113418_ip = 55;
                    continue _fun113418
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun113418_ip = 345;
                    continue _fun113418
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun113418_ip = 323;
                    continue _fun113418
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun113418_ip = 283;
                    continue _fun113418
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun113418_ip = 270;
                    continue _fun113418
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
                    _fun113418_ip = 163;
                    continue _fun113418
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun113418_ip = 179;
                    continue _fun113418
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun113418_ip = 249;
                    continue _fun113418
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun113418_ip = 249;
                    continue _fun113418
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun113418_ip = 234;
                    continue _fun113418
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun113418_ip = 247;
                    continue _fun113418
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun113418_ip = 265;
                continue _fun113418;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun113418_ip = 283;
                continue _fun113418;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun113418_ip = 323;
                    continue _fun113418
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
                    _fun113418_ip = 330;
                    continue _fun113418
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun113419: for (var _fun113419_ip = 0;;) switch (_fun113419_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun113419_ip = 56;
                                continue _fun113419
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
                            _fun113419_ip = 67;
                            continue _fun113419;
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
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun113420: for (var _fun113420_ip = 0;;) switch (_fun113420_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun113420_ip = 23;
                    continue _fun113420
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun113420_ip = 33;
                    continue _fun113420
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
                    _fun113420_ip = 70;
                    continue _fun113420
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun113420_ip = 55;
                    continue _fun113420
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun113421: for (var _fun113421_ip = 0;;) switch (_fun113421_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.openFilePicker;
                var12 = var0.minValues;
                var14 = var0.maxValues;
                var1 = var0.maxSizeBytes;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 8;
                var2 = var5[var0];
                var3 = undefined;
                var8 = var6.bind(var3)(var2);
                var2 = var8.formatSize;
                var0 = var5[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.BYTE_IN_KB;
                var1 = var1 / var0;
                var4 = true;
                var0 = {
                    'useKibibytes': true,
                    'useSpace': true
                };
                var11 = var2.bind(var8)(var1, var0);
                var2 = _closure1_slot9;
                var8 = 9;
                var0 = var5[var8];
                var0 = var6.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.onPress = var9;
                var10 = _closure1_slot9;
                var8 = var5[var8];
                var8 = var6.bind(var3)(var8);
                var8 = var8.TableRow;
                var9 = var8.Icon;
                var8 = {};
                var13 = 10;
                var13 = var5[var13];
                var13 = var6.bind(var3)(var13);
                var13 = var13.FileUpIcon;
                var8.IconComponent = var13;
                var8 = var10.bind(var3)(var9, var8);
                var0.icon = var8;
                var13 = 11;
                var8 = var5[var13];
                var8 = var6.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.format;
                var5 = var5[var13];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5["/2JwTv"];
                var5 = {};
                var5.maxValues = var14;
                var5 = var8.bind(var9)(var6, var5);
                var0.label = var5;
                var5 = 1;
                if (!(!(var12 > var5))) {
                    _fun113421_ip = 326;
                    continue _fun113421
                }
            case 254:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var8 = var5[var13];
                var8 = var6.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.format;
                var5 = var5[var13];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5.tyxwW1;
                var5 = {};
                var5.maxValues = var14;
                var5.maxSize = var11;
                var5 = var8.bind(var9)(var6, var5);
                _fun113421_ip = 474;
                continue _fun113421;
            case 326:
                if (!(var12 !== var14)) {
                    _fun113421_ip = 404;
                    continue _fun113421
                }
            case 330:
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var9 = var6[var13];
                var9 = var8.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.format;
                var6 = var6[var13];
                var6 = var8.bind(var3)(var6);
                var6 = var6.t;
                var8 = var6["ZG+3Ck"];
                var6 = {};
                var6.minValues = var12;
                var6.maxValues = var14;
                var6.maxSize = var11;
                var6 = var9.bind(var10)(var8, var6);
                _fun113421_ip = 471;
                continue _fun113421;
            case 404:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var9 = var7[var13];
                var9 = var8.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.format;
                var7 = var7[var13];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var8 = var7.SAr31z;
                var7 = {};
                var7.minValues = var12;
                var7.maxSize = var11;
                var6 = var9.bind(var10)(var8, var7);
            case 471:
                var5 = var6;
            case 474:
                var0.subLabel = var5;
                var0.start = var4;
                var0.end = var4;
                var0.arrow = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function() {
        var3 = _closure1_slot9;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 9;
        var0 = var8[var4];
        var2 = undefined;
        var0 = var7.bind(var2)(var0);
        var1 = var0.TableRow;
        var0 = {
            'icon': null,
            'label': null,
            'subLabel': null,
            'disabled': true,
            'start': true,
            'end': true
        };
        var6 = _closure1_slot9;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.TableRow;
        var5 = var4.Icon;
        var4 = {};
        var9 = 12;
        var9 = var8[var9];
        var9 = var7.bind(var2)(var9);
        var9 = var9.CircleCheckIcon;
        var4.IconComponent = var9;
        var4 = var6.bind(var2)(var5, var4);
        var0.icon = var4;
        var4 = 11;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["0PhgpK"];
        var5 = var6.bind(var9)(var5);
        var0.label = var5;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4.HYg2Hn;
        var4 = var5.bind(var6)(var4);
        var0.subLabel = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun113423: for (var _fun113423_ip = 0;;) switch (_fun113423_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.upload;
                var _closure2_slot0 = var4;
                var0 = var0.handleRemoveFile;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot11;
                var3 = undefined;
                var15 = var0.bind(var3)();
                var2 = _closure1_slot9;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = 9;
                var0 = var16[var0];
                var0 = var14.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var9 = _closure1_slot9;
                var6 = _closure1_slot1;
                var13 = 13;
                var5 = var16[var13];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var10 = var4.item;
                var10 = var10.uri;
                var5.uri = var10;
                var10 = var4.isImage;
                var5.isImage = var10;
                var10 = var4.isVideo;
                var5.isVideo = var10;
                var10 = 32;
                var5.width = var10;
                var5.height = var10;
                var12 = _closure1_slot9;
                var11 = _closure1_slot5;
                var10 = {};
                var15 = var15.defaultAttachmentIconWrapper;
                var10.style = var15;
                var15 = _closure1_slot9;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.AttachmentIcon;
                var13 = {};
                var16 = var4.filename;
                var13.fileName = var16;
                var13 = var15.bind(var3)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var5.defaultPreview = var10;
                var5 = var9.bind(var3)(var6, var5);
                var0.icon = var5;
                var4 = var4.filename;
                var5 = null;
                if (!(var5 == var4)) {
                    _fun113423_ip = 291;
                    continue _fun113423
                }
            case 234:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 11;
                var6 = var11[var5];
                var6 = var10.bind(var3)(var6);
                var9 = var6.intl;
                var6 = var9.string;
                var5 = var11[var5];
                var5 = var10.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.ZMirp0;
                var4 = var6.bind(var9)(var5);
            case 291:
                var0.label = var4;
                var6 = _closure1_slot9;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 14;
                var4 = var11[var4];
                var4 = var10.bind(var3)(var4);
                var5 = var4.IconButton;
                var4 = {
                    'variant': 'tertiary',
                    'size': 'sm'
                };
                var13 = 'sm';
                var12 = _closure1_slot9;
                var8 = 15;
                var8 = var11[var8];
                var8 = var10.bind(var3)(var8);
                var9 = var8.XSmallIcon;
                var8 = {};
                var8.size = var13;
                var8 = var12.bind(var3)(var9, var8);
                var4.icon = var8;
                var7 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.onPress = var7;
                var7 = 11;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.N86XcP;
                var7 = var8.bind(var9)(var7);
                var4.accessibilityLabel = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.trailing = var4;
                var4 = true;
                var0.start = var4;
                var0.end = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': 32,
        'alignItems': 'center'
    };
    var3.defaultAttachmentIconWrapper = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 34;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/native/actions/FileUploadActionComponent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun113425: for (var _fun113425_ip = 0;;) switch (_fun113425_ip) {
            case 0:
                var9 = arg0;
                var13 = var9.minValues;
                var11 = var9.maxValues;
                var _closure2_slot0 = var11;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 16;
                var0 = var2[var0];
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = var3.useComponentStateContext;
                var5 = var0.bind(var3)();
                var3 = _closure1_slot1;
                var8 = 17;
                var0 = var2[var8];
                var10 = var3.bind(var4)(var0);
                var0 = null;
                var7 = var0 != var5;
                var6 = 'FileUploadActionComponent must be used within a ComponentStateContextProvider';
                var6 = var10.bind(var4)(var7, var6);
                var15 = var5.channelId;
                var _closure2_slot1 = var15;
                var2 = var2[var8];
                var6 = var3.bind(var4)(var2);
                var3 = var0 != var15;
                var2 = 'FileUploadActionComponent must be used inside a channel';
                var2 = var6.bind(var4)(var3, var2);
                var2 = var5.modal;
                var3 = var0 == var2;
                var16 = undefined;
                if (var3) {
                    _fun113425_ip = 145;
                    continue _fun113425
                }
            case 139:
                var16 = var2.customId;
            case 145:
                var _closure2_slot2 = var16;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = var6[var8];
                var10 = var7.bind(var4)(var2);
                var3 = var0 != var16;
                var2 = 'FileUploadActionComponent requires modalCustomId from context';
                var2 = var10.bind(var4)(var3, var2);
                var3 = _closure1_slot0;
                var2 = 18;
                var2 = var6[var2];
                var17 = var3.bind(var4)(var2);
                var14 = var17.useStateFromStores;
                var2 = _closure1_slot6;
                var10 = new Array(1);
                var10[0] = var2;
                var2 = function() { // Environment: var12
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var14.bind(var17)(var10, var2);
                var _closure2_slot3 = var14;
                var2 = var6[var8];
                var10 = var7.bind(var4)(var2);
                var7 = var0 != var14;
                var2 = 'FileUploadActionComponent requires a valid channel';
                var2 = var10.bind(var4)(var7, var2);
                var2 = 19;
                var2 = var6[var2];
                var10 = var3.bind(var4)(var2);
                var7 = var10.maxFileSize;
                var2 = var14.guild_id;
                var10 = var7.bind(var10)(var2);
                var _closure2_slot4 = var10;
                var2 = 20;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useFileUploadComponentState;
                var3 = var2.bind(var3)(var9);
                var6 = var3.uploadIds;
                var _closure2_slot5 = var6;
                var2 = var3.setUploadIds;
                var _closure2_slot6 = var2;
                var7 = var3.currentUploads;
                var _closure2_slot7 = var7;
                var3 = var5.getParents;
                var9 = var3.bind(var5)(var9);
                var5 = var0 == var9;
                var3 = undefined;
                if (var5) {
                    _fun113425_ip = 368;
                    continue _fun113425
                }
            case 362:
                var5 = 0;
                var3 = var9[var5];
            case 368:
                var5 = var0 == var3;
                var17 = undefined;
                if (var5) {
                    _fun113425_ip = 382;
                    continue _fun113425
                }
            case 377:
                var17 = var3.type;
            case 382:
                var9 = _closure1_slot0;
                var18 = _closure1_slot2;
                var5 = 21;
                var5 = var18[var5];
                var5 = var9.bind(var4)(var5);
                var5 = var5.ComponentType;
                var5 = var5.LABEL;
                var9 = undefined;
                if (!(var17 === var5)) {
                    _fun113425_ip = 423;
                    continue _fun113425
                }
            case 420:
                var9 = var3;
            case 423:
                var _closure2_slot8 = var9;
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var5 = var5.bind(var4)(var3);
                var3 = var0 != var9;
                var0 = 'FileUploadActionComponent must be used within a label Component';
                var0 = var5.bind(var4)(var3, var0);
                var8 = _closure1_slot4;
                var5 = var8.useCallback;
                var0 = function() { // Environment: var12
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun113429: for (var _fun113429_ip = 0;;) switch (_fun113429_ip) {
                                case 0:
                                    StartGenerator();
                                    var4 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun113429_ip = 409;
                                        continue _fun113429
                                    }
                                case 13:
                                    var2 = var4.length;
                                    var1 = 0;
                                    if (!(var1 !== var2)) {
                                        _fun113429_ip = 248;
                                        continue _fun113429
                                    }
                                case 27:
                                    var1 = _closure2_slot5;
                                    var2 = var1.length;
                                    var1 = var4.length;
                                    var2 = var2 + var1;
                                    var1 = _closure2_slot0;
                                    if (!(!(var2 > var1))) {
                                        _fun113429_ip = 253;
                                        continue _fun113429
                                    }
                                case 59:
                                    var1 = _closure1_slot12;
                                    var3 = undefined;
                                    var9 = var1.bind(var3)(var4);
                                    var5 = var9.bind(var3)();
                                    var1 = var5.done;
                                    var7 = 23;
                                    var6 = var5;
                                    if (var1) {
                                        _fun113429_ip = 206;
                                        continue _fun113429
                                    }
                                case 91:
                                    var1 = var6.value;
                                    var10 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var5 = var5[var7];
                                    var10 = var10.bind(var3)(var5);
                                    var5 = var10.getFileSize;
                                    var1 = var1.uri;
                                    var1 = var5.bind(var10)(var1);
                                    SaveGenerator(address = 133);
                                case 131:
                                    return var1;
                                case 133:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                    if (var5) {
                                        _fun113429_ip = 203;
                                        continue _fun113429
                                    }
                                case 139:
                                    var5 = _closure2_slot4;
                                    if (!(!(var1 > var5))) {
                                        _fun113429_ip = 164;
                                        continue _fun113429
                                    }
                                case 147:
                                    var10 = var9.bind(var3)();
                                    var5 = var10.done;
                                    var6 = var10;
                                    if (var5) {
                                        _fun113429_ip = 206;
                                        continue _fun113429
                                    }
                                case 162:
                                    _fun113429_ip = 91;
                                    continue _fun113429;
                                case 164:
                                    var5 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 24;
                                    var2 = var6[var2];
                                    var6 = var5.bind(var3)(var2);
                                    var5 = var6.showFileSizeExceededAlert;
                                    var2 = _closure2_slot4;
                                    var2 = var5.bind(var6)(var2, var1);
                                    return var2;
                                case 203:
                                    return var1;
                                case 206:
                                    var2 = var4.map;
                                    var1 = function(arg0) { // Environment: var1
                                        var1 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var0 = 25;
                                        var0 = var6[var0];
                                        var3 = undefined;
                                        var2 = var1.bind(var3)(var0);
                                        var1 = var2.makeComponentUploadId;
                                        var0 = _closure2_slot2;
                                        var0 = var1.bind(var2)(var0);
                                        var2 = _closure1_slot1;
                                        var1 = 26;
                                        var1 = var6[var1];
                                        var3 = var2.bind(var3)(var1);
                                        var2 = var3.setFile;
                                        var1 = {};
                                        var5 = _closure2_slot1;
                                        var1.channelId = var5;
                                        var1.id = var0;
                                        var5 = {};
                                        var7 = arg0;
                                        var8 = var5;
                                        var6 = copyDataProperties(var8, var7);
                                        var6 = 'id';
                                        var5[var6] = var0;
                                        var1.file = var5;
                                        var4 = _closure1_slot7;
                                        var4 = var4.InteractionModal;
                                        var1.draftType = var4;
                                        var4 = false;
                                        var1.allowOptimization = var4;
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                    };
                                    var5 = var2.bind(var4)(var1);
                                    var2 = _closure2_slot6;
                                    var4 = _closure2_slot5;
                                    var1 = var4.concat;
                                    var1 = var1.bind(var4)(var5);
                                    var1 = var2.bind(var3)(var1);
                                case 248:
                                    var1 = undefined;
                                    return var1;
                                case 253:
                                    var2 = _closure1_slot1;
                                    var10 = _closure1_slot2;
                                    var1 = 22;
                                    var1 = var10[var1];
                                    var9 = undefined;
                                    var3 = var2.bind(var9)(var1);
                                    var2 = var3.show;
                                    var1 = {};
                                    var5 = _closure1_slot0;
                                    var4 = 11;
                                    var6 = var10[var4];
                                    var6 = var5.bind(var9)(var6);
                                    var11 = var6.intl;
                                    var7 = var11.string;
                                    var6 = var10[var4];
                                    var6 = var5.bind(var9)(var6);
                                    var6 = var6.t;
                                    var6 = var6.wOr6hB;
                                    var6 = var7.bind(var11)(var6);
                                    var1.title = var6;
                                    var6 = var10[var4];
                                    var6 = var5.bind(var9)(var6);
                                    var7 = var6.intl;
                                    var6 = var7.formatToPlainString;
                                    var4 = var10[var4];
                                    var4 = var5.bind(var9)(var4);
                                    var4 = var4.t;
                                    var5 = var4.dy6viJ;
                                    var4 = {};
                                    var8 = _closure2_slot0;
                                    var4.maxValues = var8;
                                    var4 = var6.bind(var7)(var5, var4);
                                    var1.body = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                case 409:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var3 = var0.bind(var4)();
                var0 = new Array(6);
                var0[0] = var6;
                var0[1] = var11;
                var0[2] = var2;
                var0[3] = var10;
                var0[4] = var16;
                var0[5] = var15;
                var0 = var5.bind(var8)(var3, var0);
                var _closure2_slot9 = var0;
                var5 = var8.useCallback;
                var3 = new Array(3);
                var3[0] = var15;
                var3[1] = var6;
                var3[2] = var2;
                var2 = function(arg0) { // Environment: var12
                    var7 = arg0;
                    var _closure3_slot0 = var7;
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 26;
                    var1 = var1[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var1);
                    var5 = var6.remove;
                    var4 = _closure2_slot1;
                    var3 = _closure1_slot7;
                    var3 = var3.InteractionModal;
                    var3 = var5.bind(var6)(var4, var7, var3);
                    var4 = _closure2_slot5;
                    var3 = var4.filter;
                    var2 = function(arg0) { // Environment: var2
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var0 !== var1;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot6;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var5 = var5.bind(var8)(var2, var3);
                var _closure2_slot10 = var5;
                var3 = var8.useCallback;
                var2 = new Array(7);
                var2[0] = var14;
                var9 = var9.label;
                var2[1] = var9;
                var2[2] = var11;
                var2[3] = var0;
                var2[4] = var6;
                var2[5] = var7;
                var2[6] = var5;
                var0 = function() { // Environment: var12
                    var1 = _closure1_slot7;
                    var10 = var1.InteractionModal;
                    var _closure3_slot0 = var10;
                    var1 = {};
                    var2 = _closure2_slot3;
                    var1.channel = var2;
                    var9 = _closure2_slot0;
                    var1.uploadLimit = var9;
                    var2 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 27;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var0 = var1.hideMediaKeyboardActionSheet;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1.onDismissKeyboard = var2;
                    var2 = _closure1_slot8;
                    var1.onRestoreKeyboard = var2;
                    var2 = function arg0() {
                        var2 = _closure2_slot9;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onSelectFiles = var2;
                    var _closure3_slot1 = var1;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 28;
                    var1 = var6[var0];
                    var0 = undefined;
                    var2 = var5.bind(var0)(var1);
                    var1 = var2.dismissGlobalKeyboard;
                    var1 = var1.bind(var2)();
                    var4 = 27;
                    var1 = var6[var4];
                    var3 = var5.bind(var0)(var1);
                    var2 = var3.showMediaKeyboardActionSheet;
                    var1 = {};
                    var11 = _closure2_slot8;
                    var11 = var11.label;
                    var1.title = var11;
                    var11 = _closure2_slot3;
                    var1.channel = var11;
                    var1.draftType = var10;
                    var1.uploadLimit = var9;
                    var9 = true;
                    var1.disableWhenReachedLimit = var9;
                    var8 = _closure2_slot5;
                    var1.includedUploadIds = var8;
                    var8 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 29;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.handleAttachFile;
                        var1 = {};
                        var5 = _closure3_slot1;
                        var6 = var1;
                        var4 = copyDataProperties(var6, var5);
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1.onAttachPress = var8;
                    var8 = function arg0() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 29;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.handleCameraDialog;
                        var1 = {};
                        var6 = _closure3_slot1;
                        var7 = var1;
                        var4 = copyDataProperties(var7, var6);
                        var5 = arg0;
                        var4 = 'previewType';
                        var1[var4] = var5;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1.onPressCamera = var8;
                    var8 = function arg0() {
                        _fun113439: for (var _fun113439_ip = 0;;) switch (_fun113439_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.item;
                                var _closure4_slot0 = var4;
                                var3 = var0.isIncluded;
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var0 = 27;
                                var5 = var5[var0];
                                var0 = undefined;
                                var6 = var6.bind(var0)(var5);
                                var5 = var6.hideMediaKeyboardActionSheet;
                                var5 = var5.bind(var6)();
                                if (var3) {
                                    _fun113439_ip = 111;
                                    continue _fun113439
                                }
                            case 58:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 29;
                                var2 = var5[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.mediaNodeToUploadItem;
                                var4 = var2.bind(var3)(var4);
                                var3 = _closure2_slot9;
                                var2 = new Array(1);
                                var2[0] = var4;
                                var2 = var3.bind(var0)(var2);
                                _fun113439_ip = 155;
                                continue _fun113439;
                            case 111:
                                var4 = _closure2_slot7;
                                var3 = var4.find;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 30;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.doesImageMatchUpload;
                                    var0 = _closure4_slot0;
                                    var0 = var0.node;
                                    var1 = var0.image;
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var1);
                                var3 = null;
                                if (!(var3 != var1)) {
                                    _fun113439_ip = 155;
                                    continue _fun113439
                                }
                            case 141:
                                var2 = _closure2_slot10;
                                var1 = var1.id;
                                var1 = var2.bind(var0)(var1);
                            case 155:
                                return var0;
                        }
                    };
                    var1.onPressItem = var8;
                    var7 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 29;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.handleViewAllDialog;
                        var1 = {};
                        var6 = _closure3_slot1;
                        var7 = var1;
                        var5 = copyDataProperties(var7, var6);
                        var5 = _closure3_slot0;
                        var4 = 'draftType';
                        var1[var4] = var5;
                        var5 = _closure2_slot5;
                        var4 = 'includedUploadIds';
                        var1[var4] = var5;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1.onViewAll = var7;
                    var7 = var6[var4];
                    var7 = var5.bind(var0)(var7);
                    var7 = var7.hideMediaKeyboardActionSheet;
                    var1.onClose = var7;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.hideMediaKeyboardActionSheet;
                    var1.onBack = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var14 = var3.bind(var8)(var0, var2);
                var2 = 1;
                if (!(var2 === var11)) {
                    _fun113425_ip = 630;
                    continue _fun113425
                }
            case 618:
                var0 = var7.length;
                if (!(var2 !== var0)) {
                    _fun113425_ip = 853;
                    continue _fun113425
                }
            case 630:
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 31;
                var0 = var15[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.Stack;
                var0 = {};
                var9 = _closure1_slot1;
                var8 = 32;
                var8 = var15[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_12;
                var0.spacing = var8;
                var6 = var6.length;
                if (!(!(var6 >= var11))) {
                    _fun113425_ip = 740;
                    continue _fun113425
                }
            case 702:
                var9 = _closure1_slot9;
                var8 = _closure1_slot14;
                var6 = {};
                var6.openFilePicker = var14;
                var6.minValues = var13;
                var6.maxValues = var11;
                var6.maxSizeBytes = var10;
                var8 = var9.bind(var4)(var8, var6);
                _fun113425_ip = 756;
                continue _fun113425;
            case 740:
                var10 = _closure1_slot9;
                var9 = _closure1_slot15;
                var6 = {};
                var8 = var10.bind(var4)(var9, var6);
            case 756:
                var6 = new Array(2);
                var6[0] = var8;
                var9 = var7.length;
                var8 = 0;
                var8 = var9 > var8;
                if (!var8) {
                    _fun113425_ip = 837;
                    continue _fun113425
                }
            case 778:
                var11 = _closure1_slot9;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 33;
                var9 = var13[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.TableRowGroup;
                var9 = {};
                var13 = var7.map;
                var12 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var4 = _closure1_slot9;
                    var3 = _closure1_slot16;
                    var2 = {};
                    var2.upload = var0;
                    var1 = _closure2_slot10;
                    var2.handleRemoveFile = var1;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var12 = var13.bind(var7)(var12);
                var9.children = var12;
                var8 = var11.bind(var4)(var10, var9);
            case 837:
                var6[1] = var8;
                var0.children = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun113425_ip = 885;
                continue _fun113425;
            case 853:
                var3 = _closure1_slot9;
                var2 = _closure1_slot16;
                var1 = {};
                var6 = 0;
                var6 = var7[var6];
                var1.upload = var6;
                var1.handleRemoveFile = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 885:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 1372, 3960, 660, 33, 1297, 3316, 4861, 10977, 1234, 3230, 8780, 7470, 4695, 6784, 44, 566, 3968, 14506, 1636, 3962, 3972, 11568, 3933, 7569, 9530, 1582, 9364, 3970, 4039, 671, 5325, 2]);