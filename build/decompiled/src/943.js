// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = function(arg0) { // Original name: extractPromptResultAttributes, environment: var1
        _fun9784: for (var _fun9784_ip = 0;;) switch (_fun9784_ip) {
            case 0:
                var1 = arg0;
                var7 = undefined;
                var9 = undefined;
                var0 = {};
                var _closure2_slot0 = var0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var2 = var4[var2];
                var3 = var3.bind(var7)(var2);
                var2 = var3.isValidContentItem;
                var2 = var2.bind(var3)(var1);
                if (var2) {
                    _fun9784_ip = 54;
                    continue _fun9784
                }
            case 52:
                return var0;
            case 54:
                var2 = var1.description;
                var3 = 'string';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun9784_ip = 105;
                    continue _fun9784
                }
            case 70:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 2;
                var2 = var4[var2];
                var2 = var3.bind(var7)(var2);
                var3 = var2.MCP_PROMPT_RESULT_DESCRIPTION_ATTRIBUTE;
                var2 = var1.description;
                var0[var3] = var2;
            case 105:
                var2 = global;
                var4 = var2.Array;
                var3 = var4.isArray;
                var2 = var1.messages;
                var2 = var3.bind(var4)(var2);
                if (!var2) {
                    _fun9784_ip = 265;
                    continue _fun9784
                }
            case 135:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = 2;
                var2 = var2[var5];
                var2 = var3.bind(var7)(var2);
                var3 = var2.MCP_PROMPT_RESULT_MESSAGE_COUNT_ATTRIBUTE;
                var2 = var1.messages;
                var2 = var2.length;
                var0[var3] = var2;
                var2 = var1.messages;
                var _closure2_slot1 = var2;
                var9 = function() { // Original name: _loop2, environment: var8
                    _fun9785: for (var _fun9785_ip = 0;;) switch (_fun9785_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var6 = 3;
                            var2 = var0[var6];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.isValidContentItem;
                            var3 = _closure2_slot3;
                            var3 = var4.bind(var5)(var3);
                            var4 = 1;
                            if (var3) {
                                _fun9785_ip = 51;
                                continue _fun9785
                            }
                        case 49:
                            return var4;
                        case 51:
                            var3 = _closure2_slot1;
                            var3 = var3.length;
                            var7 = 'mcp.prompt.result';
                            if (!(var4 !== var3)) {
                                _fun9785_ip = 98;
                                continue _fun9785
                            }
                        case 70:
                            var8 = _closure2_slot2;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var5 = var3.concat;
                            var3 = 'mcp.prompt.result.';
                            var7 = var5.bind(var3)(var8);
                        case 98:
                            var3 = _closure2_slot3;
                            var9 = var3.role;
                            var5 = 'string';
                            var3 = typeof var9;
                            if (!(var5 === var3)) {
                                _fun9785_ip = 208;
                                continue _fun9785
                            }
                        case 119:
                            var3 = _closure2_slot1;
                            var3 = var3.length;
                            if (!(var4 !== var3)) {
                                _fun9785_ip = 166;
                                continue _fun9785
                            }
                        case 132:
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var11 = var3.concat;
                            var10 = '';
                            var8 = '.';
                            var3 = 'role';
                            var8 = var11.bind(var10)(var7, var8, var3);
                            _fun9785_ip = 200;
                            continue _fun9785;
                        case 166:
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var12 = var3.concat;
                            var11 = '';
                            var10 = '.message_';
                            var3 = 'role';
                            var8 = var12.bind(var11)(var7, var10, var3);
                        case 200:
                            var3 = _closure2_slot0;
                            var3[var8] = var9;
                        case 208:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var6];
                            var6 = var3.bind(var0)(var1);
                            var3 = var6.isValidContentItem;
                            var1 = _closure2_slot3;
                            var1 = var1.content;
                            var1 = var3.bind(var6)(var1);
                            if (!var1) {
                                _fun9785_ip = 355;
                                continue _fun9785
                            }
                        case 248:
                            var1 = _closure2_slot3;
                            var1 = var1.content;
                            var3 = var1.text;
                            var3 = typeof var3;
                            if (!(var5 === var3)) {
                                _fun9785_ip = 355;
                                continue _fun9785
                            }
                        case 269:
                            var3 = _closure2_slot1;
                            var3 = var3.length;
                            if (!(var4 !== var3)) {
                                _fun9785_ip = 313;
                                continue _fun9785
                            }
                        case 282:
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var5 = var3.concat;
                            var4 = '';
                            var3 = '.content';
                            var3 = var5.bind(var4)(var7, var3);
                            _fun9785_ip = 342;
                            continue _fun9785;
                        case 313:
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var6 = var4.concat;
                            var5 = '';
                            var4 = '.message_content';
                            var3 = var6.bind(var5)(var7, var4);
                        case 342:
                            var2 = _closure2_slot0;
                            var1 = var1.text;
                            var2[var3] = var1;
                        case 355:
                            return var0;
                    }
                };
                var1 = var2.entries;
                var1 = var1.bind(var2)();
                var4 = var1;
                var2 = var4[Symbol.iterator];
                var4 = var2().next;
                var3 = 0;
                var1 = 1;
            case 212:
                var11 = var4().value;
                var10 = var2;
                if (!(var10 !== var7)) {
                    _fun9784_ip = 265;
                    continue _fun9784
                }
            case 223: // try_start_0
                var10 = _closure1_slot2;
                var10 = var10.bind(var7)(var11, var5);
                var11 = var10[var3];
                var _closure2_slot2 = var11;
                var10 = var10[var1];
                var _closure2_slot3 = var10;
                var10 = var9;
                var10 = var10.bind(var7)();
            case 256: // try_end0
                _fun9784_ip = 212;
                continue _fun9784;
            case 258: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 265:
                return var0;
        }
    };
    var2.extractPromptResultAttributes = var3;
    var1 = function(arg0) { // Original name: extractToolResultAttributes, environment: var1
        _fun9786: for (var _fun9786_ip = 0;;) switch (_fun9786_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 3;
                var0 = var4[var0];
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = var3.isValidContentItem;
                var0 = var0.bind(var3)(var1);
                if (var0) {
                    _fun9786_ip = 46;
                    continue _fun9786
                }
            case 42:
                var0 = {};
                return var0;
            case 46:
                var0 = global;
                var5 = var0.Array;
                var3 = var5.isArray;
                var0 = var1.content;
                var0 = var3.bind(var5)(var0);
                if (var0) {
                    _fun9786_ip = 76;
                    continue _fun9786
                }
            case 72:
                var0 = {};
                _fun9786_ip = 93;
                continue _fun9786;
            case 76:
                var5 = var1.content;
                var3 = function(arg0) { // Original name: buildAllContentItemAttributes, environment: var3
                    _fun9787: for (var _fun9787_ip = 0;;) switch (_fun9787_ip) {
                        case 0:
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var7 = undefined;
                            var9 = undefined;
                            var4 = _closure1_slot3;
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var5 = 2;
                            var0 = var0[var5];
                            var0 = var1.bind(var7)(var0);
                            var3 = var0.MCP_TOOL_RESULT_CONTENT_COUNT_ATTRIBUTE;
                            var1 = var2.length;
                            var0 = {};
                            var0 = var4.bind(var7)(var0, var3, var1);
                            var _closure3_slot1 = var0;
                            var9 = function() { // Original name: _loop, environment: var8
                                _fun9788: for (var _fun9788_ip = 0;;) switch (_fun9788_ip) {
                                    case 0:
                                        var4 = _closure1_slot0;
                                        var0 = _closure1_slot1;
                                        var5 = 3;
                                        var1 = var0[var5];
                                        var0 = undefined;
                                        var7 = var4.bind(var0)(var1);
                                        var6 = var7.isValidContentItem;
                                        var4 = _closure3_slot3;
                                        var4 = var6.bind(var7)(var4);
                                        var6 = 1;
                                        if (var4) {
                                            _fun9788_ip = 53;
                                            continue _fun9788
                                        }
                                    case 51:
                                        return var6;
                                    case 53:
                                        var4 = _closure3_slot0;
                                        var4 = var4.length;
                                        var9 = 'mcp.tool.result';
                                        if (!(var6 !== var4)) {
                                            _fun9788_ip = 100;
                                            continue _fun9788
                                        }
                                    case 72:
                                        var7 = _closure3_slot2;
                                        var4 = global;
                                        var4 = var4.HermesInternal;
                                        var6 = var4.concat;
                                        var4 = 'mcp.tool.result.';
                                        var9 = var6.bind(var4)(var7);
                                    case 100:
                                        var _closure4_slot0 = var9;
                                        var3 = function(arg0, arg1) { // Original name: safeSet, environment: var3
                                            _fun9789: for (var _fun9789_ip = 0;;) switch (_fun9789_ip) {
                                                case 0:
                                                    var2 = arg1;
                                                    var1 = 'string';
                                                    var0 = typeof var2;
                                                    if (!(var1 === var0)) {
                                                        _fun9789_ip = 63;
                                                        continue _fun9789
                                                    }
                                                case 14:
                                                    var1 = _closure3_slot1;
                                                    var6 = _closure4_slot0;
                                                    var0 = global;
                                                    var0 = var0.HermesInternal;
                                                    var5 = var0.concat;
                                                    var4 = '';
                                                    var3 = '.';
                                                    var0 = arg0;
                                                    var0 = var5.bind(var4)(var6, var3, var0);
                                                    var1[var0] = var2;
                                                case 63:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var4 = _closure3_slot3;
                                        var6 = var4.type;
                                        var4 = 'content_type';
                                        var4 = var3.bind(var0)(var4, var6);
                                        var4 = _closure3_slot3;
                                        var6 = var4.mimeType;
                                        var4 = 'mime_type';
                                        var4 = var3.bind(var0)(var4, var6);
                                        var4 = _closure3_slot3;
                                        var6 = var4.uri;
                                        var4 = 'uri';
                                        var4 = var3.bind(var0)(var4, var6);
                                        var4 = _closure3_slot3;
                                        var6 = var4.name;
                                        var4 = 'name';
                                        var4 = var3.bind(var0)(var4, var6);
                                        var4 = _closure3_slot3;
                                        var4 = var4.text;
                                        var6 = 'string';
                                        var4 = typeof var4;
                                        if (!(var6 === var4)) {
                                            _fun9788_ip = 252;
                                            continue _fun9788
                                        }
                                    case 206:
                                        var8 = _closure3_slot1;
                                        var4 = global;
                                        var4 = var4.HermesInternal;
                                        var10 = var4.concat;
                                        var7 = '';
                                        var4 = '.content';
                                        var7 = var10.bind(var7)(var9, var4);
                                        var4 = _closure3_slot3;
                                        var4 = var4.text;
                                        var8[var7] = var4;
                                    case 252:
                                        var4 = _closure3_slot3;
                                        var4 = var4.data;
                                        var4 = typeof var4;
                                        if (!(var6 === var4)) {
                                            _fun9788_ip = 319;
                                            continue _fun9788
                                        }
                                    case 268:
                                        var7 = _closure3_slot1;
                                        var4 = global;
                                        var4 = var4.HermesInternal;
                                        var8 = var4.concat;
                                        var6 = '';
                                        var4 = '.data_size';
                                        var6 = var8.bind(var6)(var9, var4);
                                        var4 = _closure3_slot3;
                                        var4 = var4.data;
                                        var4 = var4.length;
                                        var7[var6] = var4;
                                    case 319:
                                        var1 = _closure3_slot3;
                                        var1 = var1.resource;
                                        var4 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var2 = var2[var5];
                                        var4 = var4.bind(var0)(var2);
                                        var2 = var4.isValidContentItem;
                                        var2 = var2.bind(var4)(var1);
                                        if (!var2) {
                                            _fun9788_ip = 393;
                                            continue _fun9788
                                        }
                                    case 360:
                                        var4 = var1.uri;
                                        var2 = 'resource_uri';
                                        var2 = var3.bind(var0)(var2, var4);
                                        var2 = var1.mimeType;
                                        var1 = 'resource_mime_type';
                                        var1 = var3.bind(var0)(var1, var2);
                                    case 393:
                                        return var0;
                                }
                            };
                            var1 = var2.entries;
                            var1 = var1.bind(var2)();
                            var4 = var1;
                            var2 = var4[Symbol.iterator];
                            var4 = var2().next;
                            var3 = 0;
                            var1 = 1;
                        case 90:
                            var11 = var4().value;
                            var10 = var2;
                            if (!(var10 !== var7)) {
                                _fun9787_ip = 143;
                                continue _fun9787
                            }
                        case 101: // try_start_0
                            var10 = _closure1_slot2;
                            var10 = var10.bind(var7)(var11, var5);
                            var11 = var10[var3];
                            var _closure3_slot2 = var11;
                            var10 = var10[var1];
                            var _closure3_slot3 = var10;
                            var10 = var9;
                            var10 = var10.bind(var7)();
                        case 134: // try_end0
                            _fun9787_ip = 90;
                            continue _fun9787;
                        case 136: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 143:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var5);
            case 93:
                var3 = var1.isError;
                var5 = 'boolean';
                var3 = typeof var3;
                if (!(var5 === var3)) {
                    _fun9786_ip = 146;
                    continue _fun9786
                }
            case 110:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.MCP_TOOL_RESULT_IS_ERROR_ATTRIBUTE;
                var1 = var1.isError;
                var0[var2] = var1;
            case 146:
                return var0;
        }
    };
    var2.extractToolResultAttributes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 77, 937, 933]);