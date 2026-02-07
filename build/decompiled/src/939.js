// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var8 = var3.Object;
    var5 = var8.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var9 = 'Module';
    var3.value = var9;
    var3 = var5.bind(var8)(var2, var4, var3);
    var3 = {};
    var4 = {
        'targetField': 'name',
        'targetAttribute': null,
        'captureArguments': true,
        'argumentsField': 'arguments'
    };
    var5 = 2;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.MCP_TOOL_NAME_ATTRIBUTE;
    var4.targetAttribute = var8;
    var3['tools/call'] = var4;
    var4 = {
        'targetField': 'uri',
        'targetAttribute': null,
        'captureUri': true
    };
    var8 = 'uri';
    var9 = var7[var5];
    var9 = var6.bind(var0)(var9);
    var9 = var9.MCP_RESOURCE_URI_ATTRIBUTE;
    var4.targetAttribute = var9;
    var3['resources/read'] = var4;
    var4 = {};
    var4.targetField = var8;
    var9 = var7[var5];
    var9 = var6.bind(var0)(var9);
    var9 = var9.MCP_RESOURCE_URI_ATTRIBUTE;
    var4.targetAttribute = var9;
    var3['resources/subscribe'] = var4;
    var4 = {};
    var4.targetField = var8;
    var8 = var7[var5];
    var8 = var6.bind(var0)(var8);
    var8 = var8.MCP_RESOURCE_URI_ATTRIBUTE;
    var4.targetAttribute = var8;
    var3['resources/unsubscribe'] = var4;
    var4 = {
        'targetField': 'name',
        'targetAttribute': null,
        'captureName': true,
        'captureArguments': true,
        'argumentsField': 'arguments'
    };
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.MCP_PROMPT_NAME_ATTRIBUTE;
    var4.targetAttribute = var5;
    var3['prompts/get'] = var4;
    var _closure1_slot4 = var3;
    var3 = function arg0, arg1() {
        _fun9774: for (var _fun9774_ip = 0;;) switch (_fun9774_ip) {
            case 0:
                var1 = arg1;
                var2 = _closure1_slot4;
                var0 = arg0;
                var2 = var2[var0];
                if (var2) {
                    _fun9774_ip = 31;
                    continue _fun9774
                }
            case 20:
                var0 = {};
                var4 = {};
                var0.attributes = var4;
                return var0;
            case 31:
                var0 = var2.targetField;
                var6 = undefined;
                var5 = undefined;
                if (!var0) {
                    _fun9774_ip = 88;
                    continue _fun9774
                }
            case 44:
                var0 = null;
                var4 = var0 == var1;
                var0 = undefined;
                if (var4) {
                    _fun9774_ip = 65;
                    continue _fun9774
                }
            case 55:
                var4 = var2.targetField;
                var0 = var1[var4];
            case 65:
                var4 = 'string';
                var0 = typeof var0;
                var5 = undefined;
                if (!(var4 === var0)) {
                    _fun9774_ip = 88;
                    continue _fun9774
                }
            case 78:
                var0 = var2.targetField;
                var5 = var1[var0];
            case 88:
                var0 = {};
                var0.target = var5;
                if (!var5) {
                    _fun9774_ip = 107;
                    continue _fun9774
                }
            case 98:
                var1 = var2.targetAttribute;
                if (var1) {
                    _fun9774_ip = 111;
                    continue _fun9774
                }
            case 107:
                var1 = {};
                _fun9774_ip = 130;
                continue _fun9774;
            case 111:
                var4 = _closure1_slot3;
                var3 = var2.targetAttribute;
                var2 = {};
                var1 = var4.bind(var6)(var2, var3, var5);
            case 130:
                var0.attributes = var1;
                return var0;
        }
    };
    var2.extractTargetInfo = var3;
    var1 = function arg0, arg1() {
        _fun9775: for (var _fun9775_ip = 0;;) switch (_fun9775_ip) {
            case 0:
                var1 = arg1;
                var0 = {};
                var4 = _closure1_slot4;
                var3 = arg0;
                var3 = var4[var3];
                if (var3) {
                    _fun9775_ip = 27;
                    continue _fun9775
                }
            case 22:
                var4 = var0;
                return var4;
            case 27:
                var4 = var3.captureArguments;
                if (!var4) {
                    _fun9775_ip = 263;
                    continue _fun9775
                }
            case 39:
                var4 = var3.argumentsField;
                if (!var4) {
                    _fun9775_ip = 263;
                    continue _fun9775
                }
            case 51:
                var4 = null;
                if (!(var4 != var1)) {
                    _fun9775_ip = 263;
                    continue _fun9775
                }
            case 60:
                var5 = var3.argumentsField;
                var5 = var1[var5];
                if (!var5) {
                    _fun9775_ip = 263;
                    continue _fun9775
                }
            case 76:
                var5 = var3.argumentsField;
                var6 = var1[var5];
                var7 = 'object';
                var5 = typeof var6;
                if (!(var7 === var5)) {
                    _fun9775_ip = 263;
                    continue _fun9775
                }
            case 100:
                if (!(var4 !== var6)) {
                    _fun9775_ip = 263;
                    continue _fun9775
                }
            case 107:
                var12 = global;
                var5 = var12.Object;
                var4 = var5.entries;
                var4 = var4.bind(var5)(var6);
                var11 = var4;
                var5 = var11[Symbol.iterator];
                var11 = var5().next;
                var10 = undefined;
                var9 = 2;
                var8 = 0;
                var7 = 1;
                var6 = '';
                var4 = '.';
            case 150:
                var14 = var11().value;
                var13 = var5;
                if (!(var13 !== var10)) {
                    _fun9775_ip = 263;
                    continue _fun9775
                }
            case 161: // try_start_0
                var13 = _closure1_slot2;
                var13 = var13.bind(var10)(var14, var9);
                var14 = var13[var8];
                var17 = var13[var7];
                var15 = var0;
                var16 = _closure1_slot0;
                var13 = _closure1_slot1;
                var13 = var13[var9];
                var13 = var16.bind(var10)(var13);
                var16 = var13.MCP_REQUEST_ARGUMENT;
                var13 = var14.toLowerCase;
                var14 = var13.bind(var14)();
                var13 = var12.HermesInternal;
                var13 = var13.concat;
                var14 = var13.bind(var6)(var16, var4, var14);
                var16 = var12.JSON;
                var13 = var16.stringify;
                var13 = var13.bind(var16)(var17);
                var15[var14] = var13;
            case 254: // try_end0
                _fun9775_ip = 150;
                continue _fun9775;
            case 256: // catch_target0
                CatchBlockStart(arg_register = 4);
                var5.return();
                throw var4;
            case 263:
                var4 = var3.captureUri;
                if (!var4) {
                    _fun9775_ip = 278;
                    continue _fun9775
                }
            case 272:
                var5 = null;
                var4 = var5 != var1;
            case 278:
                if (!var4) {
                    _fun9775_ip = 286;
                    continue _fun9775
                }
            case 281:
                var4 = var1.uri;
            case 286:
                if (!var4) {
                    _fun9775_ip = 375;
                    continue _fun9775
                }
            case 289:
                var6 = var0;
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 2;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var7.bind(var4)(var5);
                var9 = var4.MCP_REQUEST_ARGUMENT;
                var4 = global;
                var5 = var4.HermesInternal;
                var8 = var5.concat;
                var7 = '';
                var5 = '.uri';
                var5 = var8.bind(var7)(var9, var5);
                var8 = var4.JSON;
                var7 = var8.stringify;
                var4 = var1.uri;
                var4 = var7.bind(var8)(var4);
                var6[var5] = var4;
            case 375:
                var3 = var3.captureName;
                if (!var3) {
                    _fun9775_ip = 390;
                    continue _fun9775
                }
            case 384:
                var4 = null;
                var3 = var4 != var1;
            case 390:
                if (!var3) {
                    _fun9775_ip = 398;
                    continue _fun9775
                }
            case 393:
                var3 = var1.name;
            case 398:
                if (!var3) {
                    _fun9775_ip = 487;
                    continue _fun9775
                }
            case 401:
                var3 = var0;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 2;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var7 = var2.MCP_REQUEST_ARGUMENT;
                var4 = global;
                var2 = var4.HermesInternal;
                var6 = var2.concat;
                var5 = '';
                var2 = '.name';
                var2 = var6.bind(var5)(var7, var2);
                var5 = var4.JSON;
                var4 = var5.stringify;
                var1 = var1.name;
                var1 = var4.bind(var5)(var1);
                var3[var2] = var1;
            case 487:
                return var0;
        }
    };
    var2.getRequestArguments = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 77, 937]);