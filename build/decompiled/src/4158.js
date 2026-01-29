// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun38121: for (var _fun38121_ip = 0;;) switch (_fun38121_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun38121_ip = 74;
                continue _fun38121;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0, arg1) { // Original name: combineChunks, environment: var4
        _fun38124: for (var _fun38124_ip = 0;;) switch (_fun38124_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var1 = var5.reduce;
                var0 = function(arg0, arg1) { // Environment: var0
                    var0 = arg1;
                    var1 = var0.length;
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
                };
                var3 = 0;
                var13 = var1.bind(var5)(var0, var3);
                var1 = global;
                var0 = var1.Uint8Array;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var14 = var2;
                var0 = new var14[var0](var13, var12);
                var0 = var0 instanceof Object ? var0 : var2;
                var2 = var5.length;
                var2 = var3 < var2;
                var4 = 0;
                if (!var2) {
                    _fun38124_ip = 169;
                    continue _fun38124
                }
            case 69:
                var2 = var5[var3];
                var10 = var6.buffer;
                var9 = var10.slice;
                var8 = var2.dataOffset;
                var11 = var2.dataOffset;
                var7 = var2.length;
                var7 = var11 + var7;
                var13 = var9.bind(var10)(var8, var7);
                var8 = var0.set;
                var7 = var1.Uint8Array;
                var9 = var7.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var7
                    }
                });
                var14 = var9;
                var7 = new var14[var7](var13, var12);
                var7 = var7 instanceof Object ? var7 : var9;
                var7 = var8.bind(var0)(var7, var4);
                var2 = var2.length;
                var4 = var4 + var2;
                var3 = var3 + 1;
                var2 = var5.length;
                if (var3 < var2) {
                    _fun38124_ip = 69;
                    continue _fun38124
                }
            case 169:
                var2 = var1.DataView;
                var13 = var0.buffer;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: readTags, environment: var4
        _fun38126: for (var _fun38126_ip = 0;;) switch (_fun38126_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var3 = arg2;
                var6 = undefined;
                var2 = undefined;
                var0 = undefined;
            case 15: // try_start_0
                var5 = var4;
                var4 = var3;
                var3 = function(arg0, arg1) { // Original name: getDocument, environment: var3
                    _fun38127: for (var _fun38127_ip = 0;;) switch (_fun38127_ip) {
                        case 0:
                            var8 = arg0;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 8;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.get;
                            var1 = arg1;
                            var3 = var2.bind(var3)(var1);
                            if (var3) {
                                _fun38127_ip = 96;
                                continue _fun38127
                            }
                        case 44:
                            var1 = global;
                            var6 = var1.console;
                            var5 = var6.warn;
                            var2 = 'Warning: DOMParser is not available. It is needed to be able to parse XMP tags.';
                            var2 = var5.bind(var6)(var2);
                            var1 = var1.Error;
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var12 = var2;
                            var1 = new var12[var1](var11);
                            var1 = var1 instanceof Object ? var1 : var2;
                            throw var1;
                        case 96:
                            var5 = 'string';
                            var2 = typeof var8;
                            var1 = var8;
                            if (!(var5 !== var2)) {
                                _fun38127_ip = 151;
                                continue _fun38127
                            }
                        case 110:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 7;
                            var2 = var6[var2];
                            var7 = var5.bind(var4)(var2);
                            var6 = var7.getStringFromDataView;
                            var5 = var8.byteLength;
                            var2 = 0;
                            var1 = var6.bind(var7)(var8, var2, var5);
                        case 151:
                            var2 = _closure1_slot13;
                            var5 = var1.replace;
                            var0 = /^.+(<\?xpacket begin)/;
                            var7 = '$1';
                            var6 = var5.bind(var1)(var0, var7);
                            var5 = var6.replace;
                            var0 = /(<\?xpacket end=".*"\?>).+$/;
                            var0 = var5.bind(var6)(var0, var7);
                            var2 = var2.bind(var4)(var3, var0);
                            var0 = {};
                            var0.doc = var2;
                            var0.raw = var1;
                            return var0;
                    }
                };
                var3 = var3.bind(var6)(var5, var4);
                var2 = var3.doc;
                var0 = var3.raw;
                var3 = var1;
                var5 = var3._raw;
                var4 = var5;
                if (var5) {
                    _fun38126_ip = 64;
                    continue _fun38126
                }
            case 60:
                var4 = '';
            case 64:
                var0 = var4 + var0;
                var3._raw = var0;
                var3 = _closure1_slot14;
                var7 = var3.bind(var6)(var2);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var4 = var3.bind(var6)(var2);
                var3 = var4.objectAssign;
                var2 = var1;
                var5 = _closure1_slot17;
                var1 = _closure1_slot15;
                var0 = true;
                var1 = var1.bind(var6)(var7, var0);
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var2, var1);
            case 142: // try_end0
                return var0;
            case 144: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1) { // Original name: parseFromString, environment: var4
        _fun38128: for (var _fun38128_ip = 0;;) switch (_fun38128_ip) {
            case 0:
                var5 = undefined;
                var9 = undefined;
                var3 = arg0;
                var1 = arg1;
                var4 = undefined;
                var7 = undefined;
                var2 = undefined;
                var10 = arguments.length;
                var8 = 2;
                var10 = var10 > var8;
                if (!var10) {
                    _fun38128_ip = 37;
                    continue _fun38128
                }
            case 29:
                var11 = arguments[var8];
                var10 = var5 !== var11;
            case 37:
                var6 = var10;
                if (!var10) {
                    _fun38128_ip = 47;
                    continue _fun38128
                }
            case 43:
                var6 = arguments[var8];
            case 47:
                var4 = var6;
            case 50: // try_start_0
                var10 = var3;
                var9 = var10.parseFromString;
                var8 = var1;
                var6 = 'application/xml';
                var9 = var9.bind(var10)(var8, var6);
                var7 = var9;
                var8 = var9.getElementsByTagName;
                var6 = 'parsererror';
                var6 = var8.bind(var9)(var6);
                var2 = var6;
                var8 = var6.length;
                var6 = 0;
                if (!(!(var8 > var6))) {
                    _fun38128_ip = 112;
                    continue _fun38128
                }
            case 110: // try_end0
                return var7;
            case 112: // try_start_1
                var7 = _closure1_slot9;
                var2 = var2[var6];
                var14 = var2.textContent;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var15 = var6;
                var2 = new var15[var7](var14, var13);
                var2 = var2 instanceof Object ? var2 : var6;
                throw var2;
            case 151: // try_end1 // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 2);
                var0 = var2;
                var6 = var2.name;
                var2 = 'ParseError';
                if (!(var2 === var6)) {
                    _fun38128_ip = 257;
                    continue _fun38128
                }
            case 171:
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = 9;
                var6 = var6[var7];
                var9 = var8.bind(var5)(var6);
                var8 = var9.isMissingNamespaceError;
                var6 = var0;
                var6 = var8.bind(var9)(var6);
                if (!var6) {
                    _fun38128_ip = 257;
                    continue _fun38128
                }
            case 211:
                if (var4) {
                    _fun38128_ip = 257;
                    continue _fun38128
                }
            case 214:
                var4 = _closure1_slot13;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var6 = var6.bind(var5)(var2);
                var2 = var6.addMissingNamespaces;
                var2 = var2.bind(var6)(var1);
                var1 = true;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            case 257:
                throw var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: getRDF, environment: var4
        _fun38129: for (var _fun38129_ip = 0;;) switch (_fun38129_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.childNodes;
                var1 = var1.length;
                var5 = 0;
                var1 = var5 < var1;
                var4 = 'rdf:RDF';
                var3 = 'x:xmpmeta';
                if (!var1) {
                    _fun38129_ip = 96;
                    continue _fun38129
                }
            case 35:
                var1 = var0.childNodes;
                var1 = var1[var5];
                var2 = var1.tagName;
                var1 = var5;
                if (!(var3 !== var2)) {
                    _fun38129_ip = 138;
                    continue _fun38129
                }
            case 58:
                var2 = var0.childNodes;
                var2 = var2[var1];
                var2 = var2.tagName;
                if (!(var4 !== var2)) {
                    _fun38129_ip = 126;
                    continue _fun38129
                }
            case 78:
                var5 = var1 + 1;
                var2 = var0.childNodes;
                var2 = var2.length;
                if (var5 < var2) {
                    _fun38129_ip = 35;
                    continue _fun38129
                }
            case 96:
                var2 = global;
                var2 = var2.Error;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var3;
                var2 = new var7[var2](var6);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 126:
                var2 = var0.childNodes;
                var2 = var2[var1];
                return var2;
            case 138:
                var2 = _closure1_slot14;
                var0 = var0.childNodes;
                var1 = var0[var1];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: convertToObject, environment: var4
        _fun38130: for (var _fun38130_ip = 0;;) switch (_fun38130_ip) {
            case 0:
                var7 = arg0;
                var4 = undefined;
                var0 = undefined;
                var1 = arguments.length;
                var5 = 1;
                var3 = var1 > var5;
                if (!var3) {
                    _fun38130_ip = 28;
                    continue _fun38130
                }
            case 20:
                var1 = arguments[var5];
                var3 = var4 !== var1;
            case 28:
                if (!var3) {
                    _fun38130_ip = 35;
                    continue _fun38130
                }
            case 31:
                var3 = arguments[var5];
            case 35:
                var2 = new Array(0);
                var0 = var7.childNodes;
                var0 = var0.length;
                var1 = 0;
                var0 = var1 < var0;
                var6 = 0;
                if (!var0) {
                    _fun38130_ip = 99;
                    continue _fun38130
                }
            case 61:
                var8 = var2.push;
                var0 = var7.childNodes;
                var0 = var0[var6];
                var0 = var8.bind(var2)(var0);
                var6 = var6 + 1;
                var0 = var7.childNodes;
                var0 = var0.length;
                if (var6 < var0) {
                    _fun38130_ip = 61;
                    continue _fun38130
                }
            case 99:
                var0 = var2.length;
                var0 = var5 === var0;
                if (!var0) {
                    _fun38130_ip = 131;
                    continue _fun38130
                }
            case 111:
                var5 = var2[var1];
                var6 = var5.nodeName;
                var5 = '#text';
                var0 = var5 === var6;
            case 131:
                if (var0) {
                    _fun38130_ip = 148;
                    continue _fun38130
                }
            case 134:
                var0 = function(arg0) { // Original name: getElementsFromNodes, environment: var0
                    var3 = arg0;
                    var0 = {};
                    var _closure3_slot0 = var0;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun38132: for (var _fun38132_ip = 0;;) switch (_fun38132_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.nodeName;
                                if (!var1) {
                                    _fun38132_ip = 28;
                                    continue _fun38132
                                }
                            case 12:
                                var3 = var0.nodeName;
                                var2 = '#text';
                                var1 = var2 !== var3;
                            case 28:
                                if (!var1) {
                                    _fun38132_ip = 196;
                                    continue _fun38132
                                }
                            case 34:
                                var2 = {};
                                var3 = _closure1_slot16;
                                var4 = undefined;
                                var3 = var3.bind(var4)(var0);
                                var2.attributes = var3;
                                var1 = _closure1_slot15;
                                var1 = var1.bind(var4)(var0);
                                var2.value = var1;
                                var5 = _closure3_slot0;
                                var3 = var0.nodeName;
                                var3 = var5[var3];
                                if (!(var4 === var3)) {
                                    _fun38132_ip = 105;
                                    continue _fun38132
                                }
                            case 89:
                                var4 = _closure3_slot0;
                                var3 = var0.nodeName;
                                var4[var3] = var2;
                                _fun38132_ip = 196;
                                continue _fun38132;
                            case 105:
                                var3 = global;
                                var5 = var3.Array;
                                var4 = var5.isArray;
                                var6 = _closure3_slot0;
                                var3 = var0.nodeName;
                                var3 = var6[var3];
                                var3 = var4.bind(var5)(var3);
                                if (var3) {
                                    _fun38132_ip = 172;
                                    continue _fun38132
                                }
                            case 140:
                                var5 = _closure3_slot0;
                                var4 = var0.nodeName;
                                var3 = var0.nodeName;
                                var6 = var5[var3];
                                var3 = new Array(1);
                                var3[0] = var6;
                                var5[var4] = var3;
                            case 172:
                                var1 = _closure3_slot0;
                                var0 = var0.nodeName;
                                var1 = var1[var0];
                                var0 = var1.push;
                                var0 = var0.bind(var1)(var2);
                            case 196:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var0.bind(var4)(var2);
                _fun38130_ip = 168;
                continue _fun38130;
            case 148:
                if (var3) {
                    _fun38130_ip = 163;
                    continue _fun38130
                }
            case 151:
                var1 = var2[var1];
                var1 = var1.nodeValue;
                _fun38130_ip = 165;
                continue _fun38130;
            case 163:
                var1 = {};
            case 165:
                var0 = var1;
            case 168:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: getAttributes, environment: var4
        _fun38133: for (var _fun38133_ip = 0;;) switch (_fun38133_ip) {
            case 0:
                var5 = arg0;
                var0 = {};
                var1 = var5.attributes;
                var1 = var1.length;
                var4 = 0;
                var1 = var4 < var1;
                var3 = global;
                var2 = undefined;
                if (!var1) {
                    _fun38133_ip = 104;
                    continue _fun38133
                }
            case 29:
                var1 = var5.attributes;
                var1 = var1[var4];
                var6 = var1.nodeName;
                var7 = var3.decodeURIComponent;
                var8 = var3.escape;
                var1 = var5.attributes;
                var1 = var1[var4];
                var1 = var1.value;
                var1 = var8.bind(var2)(var1);
                var1 = var7.bind(var2)(var1);
                var0[var6] = var1;
                var4 = var4 + 1;
                var1 = var5.attributes;
                var1 = var1.length;
                if (var4 < var1) {
                    _fun38133_ip = 29;
                    continue _fun38133
                }
            case 104:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: parseXMPObject, environment: var4
        _fun38134: for (var _fun38134_ip = 0;;) switch (_fun38134_ip) {
            case 0:
                var0 = arg0;
                var1 = {};
                var _closure2_slot0 = var1;
                var3 = 'string';
                var2 = typeof var0;
                if (!(var3 !== var2)) {
                    _fun38134_ip = 103;
                    continue _fun38134
                }
            case 22:
                var6 = var0;
                var2 = global;
                for (var3 in var6)
                    case 35: {
                        case 44: var9 = var3;
                        var10 = var0[var9];
                        var11 = var2.Array;
                        var9 = var11.isArray;
                        var9 = var9.bind(var11)(var10);
                        var11 = var10;
                        if (var9) {
                            _fun38134_ip = 84;
                            continue _fun38134
                        }
                        case 73: var9 = new Array(1);
                        var9[0] = var10;
                        var11 = var9;
                        case 84: var10 = var11.forEach;
                        var9 = function(arg0) { // Environment: var8
                            _fun38135: for (var _fun38135_ip = 0;;) switch (_fun38135_ip) {
                                case 0:
                                    var1 = arg0;
                                    var3 = _closure1_slot0;
                                    var0 = _closure1_slot2;
                                    var6 = 7;
                                    var2 = var0[var6];
                                    var0 = undefined;
                                    var8 = var3.bind(var0)(var2);
                                    var7 = var8.objectAssign;
                                    var4 = _closure2_slot0;
                                    var9 = _closure1_slot18;
                                    var3 = var1.attributes;
                                    var3 = var9.bind(var0)(var3);
                                    var3 = var7.bind(var8)(var4, var3);
                                    var3 = var1.value;
                                    var4 = 'object';
                                    var3 = typeof var3;
                                    if (!(var4 === var3)) {
                                        _fun38135_ip = 125;
                                        continue _fun38135
                                    }
                                case 78:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var3 = var3[var6];
                                    var4 = var4.bind(var0)(var3);
                                    var3 = var4.objectAssign;
                                    var2 = _closure2_slot0;
                                    var5 = _closure1_slot24;
                                    var1 = var1.value;
                                    var1 = var5.bind(var0)(var1);
                                    var1 = var3.bind(var4)(var2, var1);
                                case 125:
                                    return var0;
                            }
                        };
                        var9 = var10.bind(var11)(var9);
                        _fun38134_ip = 35;
                        continue _fun38134;
                    }
            case 101:
                return var1;
            case 103:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0) { // Original name: parseNodeAttributesAsTags, environment: var4
        _fun38136: for (var _fun38136_ip = 0;;) switch (_fun38136_ip) {
            case 0:
                var1 = arg0;
                var8 = var1;
                var7 = undefined;
                var9 = undefined;
                var0 = {};
                var5 = var1;
                for (var2 in var5)
                    case 26: {
                        case 35: var9 = var2;
                        case 38: // try_start_0
                            var11 = _closure1_slot19;
                        var10 = var9;
                        var10 = var11.bind(var7)(var10);
                        if (!var10) {
                            _fun38136_ip = 110;
                            continue _fun38136
                        }
                        case 53: var12 = var0;
                        var10 = _closure1_slot21;
                        var15 = var9;
                        var11 = var10.bind(var7)(var15);
                        var10 = {};
                        var13 = var8;
                        var14 = var13[var15];
                        var10.value = var14;
                        var14 = {};
                        var10.attributes = var14;
                        var14 = _closure1_slot22;
                        var13 = var13[var15];
                        var13 = var14.bind(var7)(var13, var15);
                        var10.description = var13;
                        var12[var11] = var10;
                        case 110: // try_end0
                            _fun38136_ip = 26;
                        continue _fun38136;
                        case 112: // catch_target0
                            CatchBlockStart(arg_register = 10);
                        _fun38136_ip = 26;
                        continue _fun38136;
                    }
            case 116:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0) { // Original name: isTagAttribute, environment: var4
        _fun38137: for (var _fun38137_ip = 0;;) switch (_fun38137_ip) {
            case 0:
                var3 = arg0;
                var0 = 'rdf:parseType';
                var0 = var0 !== var3;
                if (!var0) {
                    _fun38137_ip = 31;
                    continue _fun38137
                }
            case 14:
                var2 = _closure1_slot20;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                var0 = !var1;
            case 31:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0) { // Original name: isNamespaceDefinition, environment: var4
        var2 = arg0;
        var1 = var2.split;
        var0 = ':';
        var1 = var1.bind(var2)(var0);
        var0 = 0;
        var1 = var1[var0];
        var0 = 'xmlns';
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0) { // Original name: getLocalName, environment: var4
        _fun38139: for (var _fun38139_ip = 0;;) switch (_fun38139_ip) {
            case 0:
                var3 = arg0;
                var1 = /^MicrosoftPhoto(_\d+_)?:Rating$/i;
                var0 = var1.test;
                var1 = var0.bind(var1)(var3);
                var0 = 'RatingPercent';
                if (var1) {
                    _fun38139_ip = 57;
                    continue _fun38139
                }
            case 36:
                var2 = var3.split;
                var1 = ':';
                var2 = var2.bind(var3)(var1);
                var1 = 1;
                var0 = var2[var1];
            case 57:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0) { // Original name: getDescription, environment: var4
        _fun38140: for (var _fun38140_ip = 0;;) switch (_fun38140_ip) {
            case 0:
                var6 = undefined;
                var4 = undefined;
                var1 = arg0;
                var2 = undefined;
                var0 = arguments.length;
                var3 = 1;
                var5 = var0 > var3;
                var0 = undefined;
                if (!var5) {
                    _fun38140_ip = 38;
                    continue _fun38140
                }
            case 24:
                var5 = arguments[var3];
                var0 = undefined;
                if (!(var0 !== var5)) {
                    _fun38140_ip = 38;
                    continue _fun38140
                }
            case 34:
                var0 = arguments[var3];
            case 38:
                var2 = var0;
                var14 = global;
                var4 = var14.Array;
                var3 = var4.isArray;
                var0 = var1;
                var0 = var3.bind(var4)(var0);
                var3 = var1;
                if (var0) {
                    _fun38140_ip = 315;
                    continue _fun38140
                }
            case 71:
                var4 = 'object';
                var0 = typeof var3;
                if (!(var4 !== var0)) {
                    _fun38140_ip = 197;
                    continue _fun38140
                }
            case 82: // try_start_0
                var0 = var2;
                if (!var0) {
                    _fun38140_ip = 129;
                    continue _fun38140
                }
            case 88:
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var7 = 10;
                var0 = var0[var7];
                var5 = var5.bind(var6)(var0);
                var0 = var2;
                var0 = var5[var0];
                var5 = 'function';
                var0 = typeof var0;
                if (!(var5 !== var0)) {
                    _fun38140_ip = 156;
                    continue _fun38140
                }
            case 129:
                var5 = var14.decodeURIComponent;
                var8 = var14.escape;
                var0 = var1;
                var0 = var8.bind(var6)(var0);
                var0 = var5.bind(var6)(var0);
                _fun38140_ip = 188;
                continue _fun38140;
            case 156:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var7 = var5.bind(var6)(var4);
                var4 = var2;
                var5 = var7[var4];
                var4 = var1;
                var0 = var5.bind(var7)(var4);
            case 188: // try_end0
                return var0;
            case 190: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = var1;
                return var0;
            case 197:
                var13 = var1;
                var5 = new Array(0);
                var11 = var13;
                var4 = '';
                var0 = ': ';
                for (var8 in var11)
                    case 228: {
                        case 237: var15 = var8;
                        var16 = var5.push;
                        var17 = _closure1_slot23;
                        var18 = var17.bind(var6)(var15);
                        var17 = _closure1_slot22;
                        var15 = var13[var15];
                        var15 = var15.value;
                        var17 = var17.bind(var6)(var15);
                        var15 = var14.HermesInternal;
                        var15 = var15.concat;
                        var15 = var15.bind(var4)(var18, var0, var17);
                        var15 = var16.bind(var5)(var15);
                        _fun38140_ip = 228;
                        continue _fun38140;
                    }
            case 297:
                var4 = var5.join;
                var0 = '; ';
                var0 = var4.bind(var5)(var0);
                return var0;
            case 315:
                var0 = function(arg0) { // Original name: getDescriptionOfArray, environment: var0
                    var2 = arg0;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun38142: for (var _fun38142_ip = 0;;) switch (_fun38142_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.value;
                                var3 = undefined;
                                if (!(var3 === var0)) {
                                    _fun38142_ip = 28;
                                    continue _fun38142
                                }
                            case 14:
                                var0 = _closure1_slot22;
                                var0 = var0.bind(var3)(var1);
                                _fun38142_ip = 45;
                                continue _fun38142;
                            case 28:
                                var2 = _closure1_slot22;
                                var1 = var1.value;
                                var0 = var2.bind(var3)(var1);
                            case 45:
                                return var0;
                        }
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.join;
                    var0 = ', ';
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var0.bind(var6)(var3);
                var3 = var2;
                var0 = var4;
                if (!var3) {
                    _fun38140_ip = 407;
                    continue _fun38140
                }
            case 336:
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var7 = 10;
                var5 = var5[var7];
                var8 = var8.bind(var6)(var5);
                var5 = var2;
                var5 = var8[var5];
                var8 = 'function';
                var5 = typeof var5;
                var0 = var4;
                if (!(var8 === var5)) {
                    _fun38140_ip = 407;
                    continue _fun38140
                }
            case 380:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var2 = var3[var2];
                var0 = var2.bind(var3)(var1, var4);
            case 407:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0) { // Original name: getClearTextKey, environment: var4
        _fun38143: for (var _fun38143_ip = 0;;) switch (_fun38143_ip) {
            case 0:
                var8 = arg0;
                var0 = 'CreatorCity';
                var1 = 'CiAdrCity';
                if (!(var1 !== var8)) {
                    _fun38143_ip = 158;
                    continue _fun38143
                }
            case 22:
                var1 = 'CreatorCountry';
                var2 = 'CiAdrCtry';
                if (!(var2 !== var8)) {
                    _fun38143_ip = 155;
                    continue _fun38143
                }
            case 38:
                var2 = 'CreatorAddress';
                var3 = 'CiAdrExtadr';
                if (!(var3 !== var8)) {
                    _fun38143_ip = 152;
                    continue _fun38143
                }
            case 54:
                var3 = 'CreatorPostalCode';
                var4 = 'CiAdrPcode';
                if (!(var4 !== var8)) {
                    _fun38143_ip = 149;
                    continue _fun38143
                }
            case 70:
                var4 = 'CreatorRegion';
                var5 = 'CiAdrRegion';
                if (!(var5 !== var8)) {
                    _fun38143_ip = 146;
                    continue _fun38143
                }
            case 86:
                var5 = 'CreatorWorkEmail';
                var6 = 'CiEmailWork';
                if (!(var6 !== var8)) {
                    _fun38143_ip = 143;
                    continue _fun38143
                }
            case 102:
                var6 = 'CreatorWorkPhone';
                var7 = 'CiTelWork';
                if (!(var7 !== var8)) {
                    _fun38143_ip = 140;
                    continue _fun38143
                }
            case 118:
                var7 = 'CreatorWorkUrl';
                var9 = 'CiUrlWork';
                if (!(var9 !== var8)) {
                    _fun38143_ip = 137;
                    continue _fun38143
                }
            case 134:
                var7 = var8;
            case 137:
                var6 = var7;
            case 140:
                var5 = var6;
            case 143:
                var4 = var5;
            case 146:
                var3 = var4;
            case 149:
                var2 = var3;
            case 152:
                var1 = var2;
            case 155:
                var0 = var1;
            case 158:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function(arg0) { // Original name: parseNodeChildrenAsTags, environment: var4
        _fun38144: for (var _fun38144_ip = 0;;) switch (_fun38144_ip) {
            case 0:
                var1 = arg0;
                var8 = var1;
                var7 = undefined;
                var9 = undefined;
                var0 = {};
                var5 = var1;
                for (var2 in var5)
                    case 26: {
                        case 35: var9 = var2;
                        case 38: // try_start_0
                            var11 = _closure1_slot20;
                        var10 = var9;
                        var10 = var11.bind(var7)(var10);
                        if (var10) {
                            _fun38144_ip = 89;
                            continue _fun38144
                        }
                        case 53: var12 = var0;
                        var10 = _closure1_slot21;
                        var14 = var9;
                        var11 = var10.bind(var7)(var14);
                        var13 = _closure1_slot25;
                        var10 = var8;
                        var10 = var10[var14];
                        var10 = var13.bind(var7)(var10, var14);
                        var12[var11] = var10;
                        case 89: // try_end0
                            _fun38144_ip = 26;
                        continue _fun38144;
                        case 91: // catch_target0
                            CatchBlockStart(arg_register = 10);
                        _fun38144_ip = 26;
                        continue _fun38144;
                    }
            case 95:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0, arg1) { // Original name: parseNodeAsTag, environment: var4
        _fun38145: for (var _fun38145_ip = 0;;) switch (_fun38145_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var0 = var0.bind(var1)(var2);
                if (var0) {
                    _fun38145_ip = 252;
                    continue _fun38145
                }
            case 30:
                var0 = var2.attributes;
                var1 = var0["rdf:parseType"];
                var0 = 'Resource';
                var0 = var0 === var1;
                if (!var0) {
                    _fun38145_ip = 71;
                    continue _fun38145
                }
            case 55:
                var1 = var2.value;
                var3 = 'string';
                var1 = typeof var1;
                var0 = var3 === var1;
            case 71:
                if (!var0) {
                    _fun38145_ip = 97;
                    continue _fun38145
                }
            case 74:
                var3 = var2.value;
                var1 = var3.trim;
                var3 = var1.bind(var3)();
                var1 = '';
                var0 = var1 === var3;
            case 97:
                if (var0) {
                    _fun38145_ip = 225;
                    continue _fun38145
                }
            case 103:
                var0 = _closure1_slot26;
                var3 = undefined;
                var0 = var0.bind(var3)(var2);
                if (var0) {
                    _fun38145_ip = 213;
                    continue _fun38145
                }
            case 120:
                var0 = _closure1_slot29;
                var0 = var0.bind(var3)(var2);
                if (var0) {
                    _fun38145_ip = 201;
                    continue _fun38145
                }
            case 132:
                var0 = _closure1_slot31;
                var0 = var0.bind(var3)(var2);
                if (var0) {
                    _fun38145_ip = 189;
                    continue _fun38145
                }
            case 144:
                var5 = _closure1_slot33;
                var0 = var2.value;
                var0 = var5.bind(var3)(var0);
                if (!(var3 === var0)) {
                    _fun38145_ip = 174;
                    continue _fun38145
                }
            case 162:
                var0 = _closure1_slot34;
                var0 = var0.bind(var3)(var2, var4);
                _fun38145_ip = 187;
                continue _fun38145;
            case 174:
                var5 = function(arg0, arg1) { // Original name: parseNodeAsArray, environment: var5
                    _fun38146: for (var _fun38146_ip = 0;;) switch (_fun38146_ip) {
                        case 0:
                            var3 = arg0;
                            var5 = _closure1_slot33;
                            var2 = var3.value;
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var2 = var2.value;
                            var7 = var2["rdf:li"];
                            var2 = _closure1_slot28;
                            var2 = var2.bind(var4)(var3);
                            var3 = new Array(0);
                            var _closure3_slot0 = var3;
                            if (!(var4 !== var7)) {
                                _fun38146_ip = 95;
                                continue _fun38146
                            }
                        case 58:
                            var5 = global;
                            var6 = var5.Array;
                            var5 = var6.isArray;
                            var5 = var5.bind(var6)(var7);
                            var6 = var7;
                            if (var5) {
                                _fun38146_ip = 99;
                                continue _fun38146
                            }
                        case 82:
                            var5 = new Array(1);
                            var5[0] = var7;
                            var6 = var5;
                            _fun38146_ip = 99;
                            continue _fun38146;
                        case 95:
                            var6 = new Array(0);
                        case 99:
                            var5 = var6.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun38147: for (var _fun38147_ip = 0;;) switch (_fun38147_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var3 = _closure3_slot0;
                                        var2 = var3.push;
                                        var1 = _closure1_slot26;
                                        var0 = undefined;
                                        var1 = var1.bind(var0)(var5);
                                        if (var1) {
                                            _fun38147_ip = 99;
                                            continue _fun38147
                                        }
                                    case 32:
                                        var1 = _closure1_slot29;
                                        var1 = var1.bind(var0)(var5);
                                        if (var1) {
                                            _fun38147_ip = 83;
                                            continue _fun38147
                                        }
                                    case 44:
                                        var1 = _closure1_slot31;
                                        var1 = var1.bind(var0)(var5);
                                        if (var1) {
                                            _fun38147_ip = 67;
                                            continue _fun38147
                                        }
                                    case 56:
                                        var1 = _closure1_slot34;
                                        var1 = var1.bind(var0)(var5);
                                        _fun38147_ip = 108;
                                        continue _fun38147;
                                    case 67:
                                        var6 = _closure1_slot32;
                                        var6 = var6.bind(var0)(var5);
                                        var1 = var6.value;
                                        _fun38147_ip = 108;
                                        continue _fun38147;
                                    case 83:
                                        var6 = _closure1_slot30;
                                        var6 = var6.bind(var0)(var5);
                                        var1 = var6.value;
                                        _fun38147_ip = 108;
                                        continue _fun38147;
                                    case 99:
                                        var4 = _closure1_slot27;
                                        var1 = var4.bind(var0)(var5);
                                    case 108:
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                }
                            };
                            var0 = var5.bind(var6)(var0);
                            var0 = {};
                            var0.value = var3;
                            var0.attributes = var2;
                            var2 = _closure1_slot22;
                            var1 = arg1;
                            var1 = var2.bind(var4)(var3, var1);
                            var0.description = var1;
                            return var0;
                    }
                };
                var0 = var5.bind(var3)(var2, var4);
            case 187:
                _fun38145_ip = 199;
                continue _fun38145;
            case 189:
                var5 = _closure1_slot32;
                var0 = var5.bind(var3)(var2, var4);
            case 199:
                _fun38145_ip = 211;
                continue _fun38145;
            case 201:
                var5 = _closure1_slot30;
                var0 = var5.bind(var3)(var2, var4);
            case 211:
                _fun38145_ip = 223;
                continue _fun38145;
            case 213:
                var1 = _closure1_slot27;
                var0 = var1.bind(var3)(var2, var4);
            case 223:
                _fun38145_ip = 250;
                continue _fun38145;
            case 225:
                var1 = {
                    'value': '',
                    'attributes': null,
                    'description': ''
                };
                var3 = {};
                var1.attributes = var3;
                var0 = var1;
            case 250:
                _fun38145_ip = 283;
                continue _fun38145;
            case 252:
                var3 = _closure1_slot34;
                var5 = var2.length;
                var1 = 1;
                var1 = var5 - var1;
                var2 = var2[var1];
                var1 = undefined;
                var0 = var3.bind(var1)(var2, var4);
            case 283:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0) { // Original name: hasNestedSimpleRdfDescription, environment: var4
        _fun38148: for (var _fun38148_ip = 0;;) switch (_fun38148_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.attributes;
                var1 = var0["rdf:parseType"];
                var0 = 'Resource';
                var0 = var0 === var1;
                if (!var0) {
                    _fun38148_ip = 45;
                    continue _fun38148
                }
            case 28:
                var1 = var2.value;
                var3 = var1["rdf:value"];
                var1 = undefined;
                var0 = var1 !== var3;
            case 45:
                if (var0) {
                    _fun38148_ip = 97;
                    continue _fun38148
                }
            case 48:
                var1 = var2.value;
                var1 = var1["rdf:Description"];
                var3 = undefined;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun38148_ip = 94;
                    continue _fun38148
                }
            case 68:
                var2 = var2.value;
                var2 = var2["rdf:Description"];
                var2 = var2.value;
                var2 = var2["rdf:value"];
                var1 = var3 !== var2;
            case 94:
                var0 = var1;
            case 97:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0, arg1) { // Original name: parseNodeAsSimpleRdfDescription, environment: var4
        _fun38149: for (var _fun38149_ip = 0;;) switch (_fun38149_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot28;
                var4 = undefined;
                var2 = var0.bind(var4)(var3);
                var0 = var3.value;
                var5 = var0["rdf:Description"];
                var0 = var3;
                if (!(var4 !== var5)) {
                    _fun38149_ip = 46;
                    continue _fun38149
                }
            case 35:
                var3 = var3.value;
                var0 = var3["rdf:Description"];
            case 46:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var7 = var5.bind(var4)(var3);
                var6 = var7.objectAssign;
                var3 = _closure1_slot28;
                var5 = var3.bind(var4)(var0);
                var3 = {};
                var12 = var0.value;
                var8 = 'rdf:value';
                for (var9 in var12)
                    case 100: {
                        case 109: var16 = var9;
                        var14 = var8 === var16;
                        if (var14) {
                            _fun38149_ip = 128;
                            continue _fun38149
                        }
                        case 119: var15 = _closure1_slot20;
                        var14 = var15.bind(var4)(var16);
                        case 128: if (var14) {
                            _fun38149_ip = 100;
                            continue _fun38149
                        }
                        case 131: var14 = _closure1_slot21;
                        var15 = var14.bind(var4)(var16);
                        var14 = var0.value;
                        var14 = var14[var16];
                        var14 = var14.value;
                        var3[var15] = var14;
                        _fun38149_ip = 100;
                        continue _fun38149;
                    }
            case 160:
                var3 = var6.bind(var7)(var2, var5, var3);
                var5 = _closure1_slot35;
                var3 = var0.value;
                var3 = var3["rdf:value"];
                var3 = var5.bind(var4)(var3);
                if (var3) {
                    _fun38149_ip = 206;
                    continue _fun38149
                }
            case 190:
                var0 = var0.value;
                var0 = var0["rdf:value"];
                var3 = var0.value;
            case 206:
                var0 = {};
                var0.value = var3;
                var0.attributes = var2;
                var2 = _closure1_slot22;
                var1 = arg1;
                var1 = var2.bind(var4)(var3, var1);
                var0.description = var1;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function(arg0) { // Original name: parseNodeAttributes, environment: var4
        _fun38150: for (var _fun38150_ip = 0;;) switch (_fun38150_ip) {
            case 0:
                var10 = arg0;
                var0 = {};
                var8 = var10.attributes;
                var3 = undefined;
                var2 = 'rdf:resource';
                var1 = 'rdf:parseType';
                for (var5 in var8)
                    case 32: {
                        case 41: var13 = var5;
                        var11 = var1 === var13;
                        if (var11) {
                            _fun38150_ip = 55;
                            continue _fun38150
                        }
                        case 51: var11 = var2 === var13;
                        case 55: if (var11) {
                            _fun38150_ip = 67;
                            continue _fun38150
                        }
                        case 58: var12 = _closure1_slot20;
                        var11 = var12.bind(var3)(var13);
                        case 67: if (var11) {
                            _fun38150_ip = 32;
                            continue _fun38150
                        }
                        case 70: var11 = _closure1_slot21;
                        var12 = var11.bind(var3)(var13);
                        var11 = var10.attributes;
                        var11 = var11[var13];
                        var0[var12] = var11;
                        _fun38150_ip = 32;
                        continue _fun38150;
                    }
            case 95:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function(arg0) { // Original name: hasNestedStructureRdfDescription, environment: var4
        _fun38151: for (var _fun38151_ip = 0;;) switch (_fun38151_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.attributes;
                var1 = var0["rdf:parseType"];
                var0 = 'Resource';
                var0 = var0 === var1;
                if (var0) {
                    _fun38151_ip = 77;
                    continue _fun38151
                }
            case 28:
                var1 = var2.value;
                var1 = var1["rdf:Description"];
                var3 = undefined;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun38151_ip = 74;
                    continue _fun38151
                }
            case 48:
                var2 = var2.value;
                var2 = var2["rdf:Description"];
                var2 = var2.value;
                var2 = var2["rdf:value"];
                var1 = var3 === var2;
            case 74:
                var0 = var1;
            case 77:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function(arg0, arg1) { // Original name: parseNodeAsStructureRdfDescription, environment: var4
        _fun38152: for (var _fun38152_ip = 0;;) switch (_fun38152_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = {};
                var0.value = var2;
                var2 = {};
                var0.attributes = var2;
                var2 = var1.value;
                var3 = var2["rdf:Description"];
                var4 = undefined;
                var2 = var1;
                if (!(var4 !== var3)) {
                    _fun38152_ip = 151;
                    continue _fun38152
                }
            case 38:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 7;
                var8 = var7[var5];
                var11 = var6.bind(var4)(var8);
                var10 = var11.objectAssign;
                var9 = var0.value;
                var12 = _closure1_slot18;
                var8 = var1.value;
                var8 = var8["rdf:Description"];
                var8 = var8.attributes;
                var8 = var12.bind(var4)(var8);
                var8 = var10.bind(var11)(var9, var8);
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.objectAssign;
                var5 = var0.attributes;
                var3 = _closure1_slot28;
                var3 = var3.bind(var4)(var1);
                var3 = var6.bind(var7)(var5, var3);
                var1 = var1.value;
                var2 = var1["rdf:Description"];
            case 151:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var6 = var5.bind(var4)(var3);
                var5 = var6.objectAssign;
                var3 = var0.value;
                var7 = _closure1_slot24;
                var2 = var2.value;
                var2 = var7.bind(var4)(var2);
                var2 = var5.bind(var6)(var3, var2);
                var3 = _closure1_slot22;
                var2 = var0.value;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                var0.description = var1;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function(arg0) { // Original name: isCompactStructure, environment: var4
        _fun38153: for (var _fun38153_ip = 0;;) switch (_fun38153_ip) {
            case 0:
                var1 = arg0;
                var0 = global;
                var3 = var0.Object;
                var2 = var3.keys;
                var0 = var1.value;
                var0 = var2.bind(var3)(var0);
                var2 = var0.length;
                var0 = 0;
                var0 = var0 === var2;
                if (!var0) {
                    _fun38153_ip = 60;
                    continue _fun38153
                }
            case 40:
                var2 = var1.attributes;
                var3 = var2["xml:lang"];
                var2 = undefined;
                var0 = var2 === var3;
            case 60:
                if (!var0) {
                    _fun38153_ip = 81;
                    continue _fun38153
                }
            case 63:
                var1 = var1.attributes;
                var2 = var1["rdf:resource"];
                var1 = undefined;
                var0 = var1 === var2;
            case 81:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function(arg0, arg1) { // Original name: parseNodeAsCompactStructure, environment: var4
        var2 = _closure1_slot18;
        var0 = arg0;
        var0 = var0.attributes;
        var4 = undefined;
        var3 = var2.bind(var4)(var0);
        var0 = {};
        var0.value = var3;
        var2 = {};
        var0.attributes = var2;
        var2 = _closure1_slot22;
        var1 = arg1;
        var1 = var2.bind(var4)(var3, var1);
        var0.description = var1;
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = function(arg0) { // Original name: getArrayChild, environment: var4
        _fun38155: for (var _fun38155_ip = 0;;) switch (_fun38155_ip) {
            case 0:
                var1 = arg0;
                var0 = var1["rdf:Bag"];
                if (var0) {
                    _fun38155_ip = 22;
                    continue _fun38155
                }
            case 14:
                var0 = var1["rdf:Seq"];
            case 22:
                if (var0) {
                    _fun38155_ip = 33;
                    continue _fun38155
                }
            case 25:
                var0 = var1["rdf:Alt"];
            case 33:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function(arg0, arg1) { // Original name: parseNodeAsSimpleValue, environment: var4
        _fun38156: for (var _fun38156_ip = 0;;) switch (_fun38156_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot35;
                var4 = undefined;
                var3 = var0.bind(var4)(var5);
                if (var3) {
                    _fun38156_ip = 34;
                    continue _fun38156
                }
            case 20:
                var2 = _closure1_slot17;
                var0 = var5.value;
                var3 = var2.bind(var4)(var0);
            case 34:
                var0 = {};
                var0.value = var3;
                var2 = _closure1_slot28;
                var2 = var2.bind(var4)(var5);
                var0.attributes = var2;
                var2 = _closure1_slot22;
                var1 = arg1;
                var1 = var2.bind(var4)(var3, var1);
                var0.description = var1;
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function(arg0) { // Original name: getURIValue, environment: var4
        _fun38157: for (var _fun38157_ip = 0;;) switch (_fun38157_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.attributes;
                if (!var0) {
                    _fun38157_ip = 24;
                    continue _fun38157
                }
            case 12:
                var1 = var1.attributes;
                var0 = var1["rdf:resource"];
            case 24:
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var3 = global;
    var8 = var3.Object;
    var5 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = {};
    var5 = function(arg0, arg1, arg2) { // Original name: read, environment: var4
        _fun38158: for (var _fun38158_ip = 0;;) switch (_fun38158_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var3 = arg2;
                var0 = {};
                var2 = 'string';
                var1 = typeof var4;
                if (!(var2 !== var1)) {
                    _fun38158_ip = 215;
                    continue _fun38158
                }
            case 25:
                var1 = var6.length;
                var2 = 0;
                if (!(var2 !== var1)) {
                    _fun38158_ip = 120;
                    continue _fun38158
                }
            case 36:
                var7 = _closure1_slot11;
                var1 = var6.slice;
                var11 = 1;
                var1 = var1.bind(var6)(var2, var11);
                var10 = undefined;
                var7 = var7.bind(var10)(var4, var1);
                var1 = new Array(1);
                var1[0] = var7;
                var7 = var6.length;
                var9 = var1;
                if (!(var7 > var11)) {
                    _fun38158_ip = 124;
                    continue _fun38158
                }
            case 85:
                var7 = var1.push;
                var8 = _closure1_slot11;
                var5 = var6.slice;
                var5 = var5.bind(var6)(var11);
                var5 = var8.bind(var10)(var4, var5);
                var5 = var7.bind(var1)(var5);
                var9 = var1;
                _fun38158_ip = 124;
                continue _fun38158;
            case 120:
                var9 = new Array(0);
            case 124:
                var8 = _closure1_slot3;
                var5 = undefined;
                var7 = 2;
                var8 = var8.bind(var5)(var9, var7);
                var7 = var8[var2];
                var2 = 1;
                var8 = var8[var2];
                var2 = _closure1_slot12;
                var2 = var2.bind(var5)(var0, var7, var3);
                if (!var8) {
                    _fun38158_ip = 213;
                    continue _fun38158
                }
            case 167:
                var7 = _closure1_slot12;
                var7 = var7.bind(var5)(var0, var8, var3);
                if (var2) {
                    _fun38158_ip = 184;
                    continue _fun38158
                }
            case 181:
                var2 = var7;
            case 184:
                if (var2) {
                    _fun38158_ip = 213;
                    continue _fun38158
                }
            case 187:
                var2 = delete var0._raw;
                var2 = _closure1_slot12;
                var1 = _closure1_slot11;
                var1 = var1.bind(var5)(var4, var6);
                var1 = var2.bind(var5)(var0, var1, var3);
            case 213:
                return var0;
            case 215:
                var2 = _closure1_slot12;
                var1 = undefined;
                var1 = var2.bind(var1)(var0, var4, var3);
                return var0;
        }
    };
    var1.read = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var3 = var3.Error;
    var5 = var5.bind(var0)(var3);
    var3 = function(arg0) { // Environment: var4
        var2 = function(arg0) { // Original name: ParseError, environment: var0
            _fun38160: for (var _fun38160_ip = 0;;) switch (_fun38160_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var8 = new Array(1);
                    var0 = arg0;
                    var8[0] = var0;
                    var0 = _closure1_slot7;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun38160_ip = 73;
                        continue _fun38160
                    }
                case 60:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun38160_ip = 107;
                    continue _fun38160;
                case 73:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot7;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 107:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = 'ParseError';
                    var0.name = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot8;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot4;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var3 = var3.bind(var0)(var5);
    var _closure1_slot9 = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 7, 6, 15, 17, 18, 162, 4123, 4159, 4160, 4161]);