// utils/FileUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun36849: for (var _fun36849_ip = 0;;) switch (_fun36849_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun36849_ip = 46;
                    continue _fun36849
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun36849_ip = 55;
                    continue _fun36849
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun36849_ip = 343;
                    continue _fun36849
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun36849_ip = 323;
                    continue _fun36849
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun36849_ip = 283;
                    continue _fun36849
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun36849_ip = 270;
                    continue _fun36849
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
                    _fun36849_ip = 163;
                    continue _fun36849
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun36849_ip = 179;
                    continue _fun36849
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun36849_ip = 249;
                    continue _fun36849
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun36849_ip = 249;
                    continue _fun36849
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun36849_ip = 234;
                    continue _fun36849
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun36849_ip = 247;
                    continue _fun36849
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun36849_ip = 265;
                continue _fun36849;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun36849_ip = 283;
                continue _fun36849;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun36849_ip = 323;
                    continue _fun36849
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
                    _fun36849_ip = 330;
                    continue _fun36849
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun36850: for (var _fun36850_ip = 0;;) switch (_fun36850_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun36850_ip = 56;
                                continue _fun36850
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
                            _fun36850_ip = 67;
                            continue _fun36850;
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
    var _closure1_slot9 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun36851: for (var _fun36851_ip = 0;;) switch (_fun36851_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun36851_ip = 23;
                    continue _fun36851
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun36851_ip = 33;
                    continue _fun36851
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
                    _fun36851_ip = 70;
                    continue _fun36851
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun36851_ip = 55;
                    continue _fun36851
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var7 = function(arg0, arg1, arg2) { // Original name: makeFile, environment: var1
        var0 = global;
        var4 = var0.File;
        var3 = new Array(1);
        var0 = arg0;
        var3[0] = var0;
        var2 = {};
        var0 = arg2;
        var2.type = var0;
        var0 = var4.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var4
            }
        });
        var6 = arg1;
        var8 = var1;
        var7 = var3;
        var5 = var2;
        var0 = new var8[var4](var7, var6, var5, var4);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot11 = var7;
    var6 = function(arg0, arg1) { // Original name: classifyFileName, environment: var1
        _fun36853: for (var _fun36853_ip = 0;;) switch (_fun36853_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var0 = null;
                var2 = var0 == var4;
                var5 = undefined;
                var3 = undefined;
                if (var2) {
                    _fun36853_ip = 39;
                    continue _fun36853
                }
            case 29:
                var2 = var4.toLowerCase;
                var3 = var2.bind(var4)();
            case 39:
                var4 = var0 != var3;
                var2 = '';
                if (!var4) {
                    _fun36853_ip = 53;
                    continue _fun36853
                }
            case 50:
                var2 = var3;
            case 53:
                _closure2_slot0 = var2;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 4;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.find;
                var2 = _closure1_slot8;
                var1 = function(arg0) { // Environment: var1
                    _fun36854: for (var _fun36854_ip = 0;;) switch (_fun36854_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.reType;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun36854_ip = 26;
                                continue _fun36854
                            }
                        case 15:
                            var0 = _closure2_slot1;
                            if (!(var3 == var0)) {
                                _fun36854_ip = 82;
                                continue _fun36854
                            }
                        case 26:
                            var0 = var2.reName;
                            var0 = var3 != var0;
                            if (!var0) {
                                _fun36854_ip = 54;
                                continue _fun36854
                            }
                        case 39:
                            var4 = _closure2_slot0;
                            var3 = '';
                            var0 = var3 !== var4;
                        case 54:
                            if (!var0) {
                                _fun36854_ip = 80;
                                continue _fun36854
                            }
                        case 57:
                            var5 = var2.reName;
                            var4 = var5.test;
                            var3 = _closure2_slot0;
                            var0 = var4.bind(var5)(var3);
                        case 80:
                            _fun36854_ip = 102;
                            continue _fun36854;
                        case 82:
                            var3 = var2.reType;
                            var2 = var3.test;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 102:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                var2 = var0 != var1;
                var0 = 'unknown';
                if (!var2) {
                    _fun36853_ip = 117;
                    continue _fun36853
                }
            case 111:
                var0 = var1.klass;
            case 117:
                return var0;
        }
    };
    var _closure1_slot12 = var6;
    var5 = function(arg0) { // Original name: maxFileSize, environment: var1
        _fun36855: for (var _fun36855_ip = 0;;) switch (_fun36855_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot4;
                var0 = var1.getCurrentUser;
                var3 = var0.bind(var1)();
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var0 = var1.getUserMaxFileSize;
                var0 = var0.bind(var1)(var3);
                var3 = null;
                if (!(var3 != var5)) {
                    _fun36855_ip = 129;
                    continue _fun36855
                }
            case 58:
                var4 = _closure1_slot3;
                var1 = var4.getGuild;
                var1 = var1.bind(var4)(var5);
                if (!(var3 == var1)) {
                    _fun36855_ip = 82;
                    continue _fun36855
                }
            case 76:
                var3 = _closure1_slot5;
                _fun36855_ip = 108;
                continue _fun36855;
            case 82:
                var2 = _closure1_slot6;
                var1 = var1.premiumTier;
                var1 = var2[var1];
                var1 = var1.limits;
                var3 = var1.fileSize;
            case 108:
                var1 = global;
                var2 = var1.Math;
                var1 = var2.max;
                var1 = var1.bind(var2)(var3, var0);
                return var1;
            case 129:
                return var0;
        }
    };
    var _closure1_slot13 = var5;
    var4 = function(arg0) { // Original name: getUploadFileSizeSum, environment: var1
        _fun36856: for (var _fun36856_ip = 0;;) switch (_fun36856_ip) {
            case 0:
                var1 = _closure1_slot9;
                var5 = undefined;
                var0 = arg0;
                var4 = var1.bind(var5)(var0);
                var2 = var4.bind(var5)();
                var1 = var2.done;
                var3 = var2;
                var2 = 0;
                var0 = 0;
                if (var1) {
                    _fun36856_ip = 68;
                    continue _fun36856
                }
            case 36:
                var1 = var3.value;
                var1 = var1.size;
                var2 = var2 + var1;
                var7 = var4.bind(var5)();
                var1 = var7.done;
                var3 = var7;
                var0 = var2;
                if (!var1) {
                    _fun36856_ip = 36;
                    continue _fun36856
                }
            case 68:
                return var0;
        }
    };
    var _closure1_slot14 = var4;
    var3 = function() { // Original name: getMaxRequestSize, environment: var1
        _fun36857: for (var _fun36857_ip = 0;;) switch (_fun36857_ip) {
            case 0:
                var1 = _closure1_slot4;
                var0 = var1.getCurrentUser;
                var1 = var0.bind(var1)();
                var0 = null;
                if (!(var0 != var1)) {
                    _fun36857_ip = 32;
                    continue _fun36857
                }
            case 22:
                var0 = var1.isStaff;
                var0 = var0.bind(var1)();
            case 32:
                var0 = 524288000;
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var8);
    var0 = 0;
    var8 = var10[var0];
    var0 = undefined;
    var8 = var11.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.MAX_ATTACHMENT_SIZE;
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var11 = var8.BoostedGuildFeatures;
    var _closure1_slot6 = var11;
    var8 = var8.MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE;
    var _closure1_slot7 = var8;
    var11 = {};
    var8 = /^image\\/vnd.adobe.photoshop / ;
    var11.reType = var8;
    var8 = 'photoshop';
    var11.klass = var8;
    var8 = new Array(14);
    var8[0] = var11;
    var11 = {};
    var12 = /^image\\/svg\ + xml / ;
    var11.reType = var12;
    var12 = 'webcode';
    var11.klass = var12;
    var8[1] = var11;
    var11 = {};
    var13 = /^image\\/ / ;
    var11.reType = var13;
    var13 = 'image';
    var11.klass = var13;
    var8[2] = var11;
    var11 = {};
    var13 = /^video\\/ / ;
    var11.reType = var13;
    var13 = 'video';
    var11.klass = var13;
    var8[3] = var11;
    var11 = {};
    var13 = /\.pdf$/;
    var11.reName = var13;
    var13 = 'acrobat';
    var11.klass = var13;
    var8[4] = var11;
    var11 = {};
    var13 = /\.ae/;
    var11.reName = var13;
    var13 = 'ae';
    var11.klass = var13;
    var8[5] = var11;
    var11 = {};
    var13 = /\.sketch$/;
    var11.reName = var13;
    var13 = 'sketch';
    var11.klass = var13;
    var8[6] = var11;
    var11 = {};
    var13 = /\.ai$/;
    var11.reName = var13;
    var13 = 'ai';
    var11.klass = var13;
    var8[7] = var11;
    var11 = {};
    var13 = /\.(?:rar|zip|7z|tar|tar\.gz)$/;
    var11.reName = var13;
    var13 = 'archive';
    var11.klass = var13;
    var8[8] = var11;
    var11 = {};
    var13 = /\.(?:c\+\+|cpp|cc|c|h|hpp|mm|m|json|js|ts|rb|rake|py|asm|fs|pyc|dtd|cgi|bat|rss|java|graphml|idb|lua|o|gml|prl|sls|conf|cmake|make|sln|vbe|cxx|wbf|vbs|r|wml|php|bash|applescript|fcgi|yaml|ex|exs|sh|ml|actionscript)$/;
    var11.reName = var13;
    var13 = 'code';
    var11.klass = var13;
    var8[9] = var11;
    var11 = {};
    var13 = /\.(?:txt|rtf|doc|docx|md|pages|ppt|pptx|pptm|key|log)$/;
    var11.reName = var13;
    var13 = 'document';
    var11.klass = var13;
    var8[10] = var11;
    var11 = {};
    var13 = /\.(?:xls|xlsx|numbers|csv)$/;
    var11.reName = var13;
    var13 = 'spreadsheet';
    var11.klass = var13;
    var8[11] = var11;
    var11 = {};
    var13 = /\.(?:html|xhtml|htm|xml|xsd|css|styl)$/;
    var11.reName = var13;
    var11.klass = var12;
    var8[12] = var11;
    var11 = {};
    var12 = /\.(?:mp3|ogg|opus|wav|aiff|flac)$/;
    var11.reName = var12;
    var12 = 'audio';
    var11.klass = var12;
    var8[13] = var11;
    var _closure1_slot8 = var8;
    var8 = 9;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'utils/FileUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function(arg0, arg1) { // Original name: transformNativeFile, environment: var1
        _fun36858: for (var _fun36858_ip = 0;;) switch (_fun36858_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = global;
                var0 = var0.File;
                var3 = var2 instanceof var0;
                var0 = var2;
                if (var3) {
                    _fun36858_ip = 75;
                    continue _fun36858
                }
            case 24:
                var5 = _closure1_slot11;
                var3 = var2.data;
                var4 = var3.buffer;
                var3 = var2.filename;
                var2 = null;
                var6 = var2 != var1;
                var2 = 'text/plain';
                if (!var6) {
                    _fun36858_ip = 66;
                    continue _fun36858
                }
            case 63:
                var2 = var1;
            case 66:
                var1 = undefined;
                var0 = var5.bind(var1)(var4, var3, var2);
            case 75:
                return var0;
        }
    };
    var2.transformNativeFile = var8;
    var2.makeFile = var7;
    var7 = function(arg0) { // Original name: classifyFile, environment: var1
        var0 = arg0;
        var3 = _closure1_slot12;
        var2 = var0.name;
        var1 = var0.type;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.classifyFile = var7;
    var2.classifyFileName = var6;
    var6 = function(arg0) { // Original name: sizeString, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.filesize;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.sizeString = var6;
    var2.maxFileSize = var5;
    var5 = function(arg0, arg1) { // Original name: anyFileTooLarge, environment: var1
        var3 = _closure1_slot13;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var1 = global;
        var3 = var1.Array;
        var2 = var3.from;
        var1 = arg0;
        var2 = var2.bind(var3)(var1);
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.size;
            var0 = _closure2_slot0;
            var0 = var1 > var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.anyFileTooLarge = var5;
    var2.getUploadFileSizeSum = var4;
    var4 = function(arg0) { // Original name: uploadSumTooLarge, environment: var1
        var3 = _closure1_slot14;
        var2 = undefined;
        var1 = arg0;
        var1 = var3.bind(var2)(var1);
        var0 = _closure1_slot15;
        var0 = var0.bind(var2)();
        var0 = 524288000;
        var0 = var1 > var0;
        return var0;
    };
    var2.uploadSumTooLarge = var4;
    var2.getMaxRequestSize = var3;
    var1 = function(arg0) { // Original name: fileUploadLimitRoadblockDescription, environment: var1
        var0 = arg0;
        var5 = var0.guildId;
        var4 = var0.onClick;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var3 = 7;
        var2 = var8[var3];
        var1 = undefined;
        var11 = var7.bind(var1)(var2);
        var10 = var11.formatSize;
        var2 = _closure1_slot13;
        var5 = var2.bind(var1)(var5);
        var2 = 1024;
        var6 = var5 / var2;
        var5 = {};
        var9 = true;
        var5.useKibibytes = var9;
        var6 = var10.bind(var11)(var6, var5);
        var3 = var8[var3];
        var5 = var7.bind(var1)(var3);
        var3 = var5.formatSize;
        var0 = _closure1_slot7;
        var2 = var0 / var2;
        var0 = {};
        var0.useKibibytes = var9;
        var5 = var3.bind(var5)(var2, var0);
        var0 = 8;
        var2 = var8[var0];
        var2 = var7.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.format;
        var0 = var8[var0];
        var0 = var7.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.tRuxk9;
        var0 = {};
        var0.maxSize = var6;
        var0.premiumMaxSize = var5;
        var0.onClick = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.fileUploadLimitRoadblockDescription = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 1613, 660, 1615, 22, 3969, 3068, 3316, 1234, 2]);