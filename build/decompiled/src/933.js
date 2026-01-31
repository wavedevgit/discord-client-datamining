// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = function(arg0) { // Original name: isJsonRpcNotification, environment: var0
        _fun9722: for (var _fun9722_ip = 0;;) switch (_fun9722_ip) {
            case 0:
                var2 = arg0;
                var1 = 'object';
                var0 = typeof var2;
                var0 = var1 === var0;
                if (!var0) {
                    _fun9722_ip = 23;
                    continue _fun9722
                }
            case 17:
                var1 = null;
                var0 = var1 !== var2;
            case 23:
                if (!var0) {
                    _fun9722_ip = 34;
                    continue _fun9722
                }
            case 26:
                var1 = 'jsonrpc';
                var0 = var1 in var2;
            case 34:
                if (!var0) {
                    _fun9722_ip = 53;
                    continue _fun9722
                }
            case 37:
                var3 = var2.jsonrpc;
                var1 = '2.0';
                var0 = var1 === var3;
            case 53:
                if (!var0) {
                    _fun9722_ip = 64;
                    continue _fun9722
                }
            case 56:
                var1 = 'method';
                var0 = var1 in var2;
            case 64:
                if (!var0) {
                    _fun9722_ip = 78;
                    continue _fun9722
                }
            case 67:
                var1 = 'id';
                var1 = var1 in var2;
                var0 = !var1;
            case 78:
                return var0;
        }
    };
    var1.isJsonRpcNotification = var2;
    var2 = function(arg0) { // Original name: isJsonRpcRequest, environment: var0
        _fun9723: for (var _fun9723_ip = 0;;) switch (_fun9723_ip) {
            case 0:
                var2 = arg0;
                var1 = 'object';
                var0 = typeof var2;
                var0 = var1 === var0;
                if (!var0) {
                    _fun9723_ip = 23;
                    continue _fun9723
                }
            case 17:
                var1 = null;
                var0 = var1 !== var2;
            case 23:
                if (!var0) {
                    _fun9723_ip = 34;
                    continue _fun9723
                }
            case 26:
                var1 = 'jsonrpc';
                var0 = var1 in var2;
            case 34:
                if (!var0) {
                    _fun9723_ip = 53;
                    continue _fun9723
                }
            case 37:
                var3 = var2.jsonrpc;
                var1 = '2.0';
                var0 = var1 === var3;
            case 53:
                if (!var0) {
                    _fun9723_ip = 64;
                    continue _fun9723
                }
            case 56:
                var1 = 'method';
                var0 = var1 in var2;
            case 64:
                if (!var0) {
                    _fun9723_ip = 75;
                    continue _fun9723
                }
            case 67:
                var1 = 'id';
                var0 = var1 in var2;
            case 75:
                return var0;
        }
    };
    var1.isJsonRpcRequest = var2;
    var2 = function(arg0) { // Original name: isJsonRpcResponse, environment: var0
        _fun9724: for (var _fun9724_ip = 0;;) switch (_fun9724_ip) {
            case 0:
                var3 = arg0;
                var1 = 'object';
                var0 = typeof var3;
                var0 = var1 === var0;
                if (!var0) {
                    _fun9724_ip = 23;
                    continue _fun9724
                }
            case 17:
                var1 = null;
                var0 = var1 !== var3;
            case 23:
                if (!var0) {
                    _fun9724_ip = 34;
                    continue _fun9724
                }
            case 26:
                var1 = 'jsonrpc';
                var0 = var1 in var3;
            case 34:
                if (!var0) {
                    _fun9724_ip = 53;
                    continue _fun9724
                }
            case 37:
                var2 = var3.jsonrpc;
                var1 = '2.0';
                var0 = var1 === var2;
            case 53:
                if (!var0) {
                    _fun9724_ip = 64;
                    continue _fun9724
                }
            case 56:
                var1 = 'id';
                var0 = var1 in var3;
            case 64:
                if (!var0) {
                    _fun9724_ip = 89;
                    continue _fun9724
                }
            case 67:
                var1 = 'result';
                var1 = var1 in var3;
                if (var1) {
                    _fun9724_ip = 86;
                    continue _fun9724
                }
            case 78:
                var2 = 'error';
                var1 = var2 in var3;
            case 86:
                var0 = var1;
            case 89:
                return var0;
        }
    };
    var1.isJsonRpcResponse = var2;
    var2 = function(arg0) { // Original name: isValidContentItem, environment: var0
        _fun9725: for (var _fun9725_ip = 0;;) switch (_fun9725_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun9725_ip = 23;
                    continue _fun9725
                }
            case 12:
                var2 = 'object';
                var1 = typeof var1;
                var0 = var2 === var1;
            case 23:
                return var0;
        }
    };
    var1.isValidContentItem = var2;
    var0 = function(arg0) { // Original name: validateMcpServerInstance, environment: var0
        _fun9726: for (var _fun9726_ip = 0;;) switch (_fun9726_ip) {
            case 0:
                var2 = arg0;
                var1 = 'object';
                var0 = typeof var2;
                var0 = var1 === var0;
                if (!var0) {
                    _fun9726_ip = 23;
                    continue _fun9726
                }
            case 17:
                var1 = null;
                var0 = var1 !== var2;
            case 23:
                if (!var0) {
                    _fun9726_ip = 34;
                    continue _fun9726
                }
            case 26:
                var1 = 'resource';
                var0 = var1 in var2;
            case 34:
                if (!var0) {
                    _fun9726_ip = 45;
                    continue _fun9726
                }
            case 37:
                var1 = 'tool';
                var0 = var1 in var2;
            case 45:
                if (!var0) {
                    _fun9726_ip = 56;
                    continue _fun9726
                }
            case 48:
                var1 = 'prompt';
                var0 = var1 in var2;
            case 56:
                if (!var0) {
                    _fun9726_ip = 67;
                    continue _fun9726
                }
            case 59:
                var1 = 'connect';
                var0 = var1 in var2;
            case 67:
                if (var0) {
                    _fun9726_ip = 149;
                    continue _fun9726
                }
            case 70:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var1 = var4[var1];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var3 = var1.DEBUG_BUILD;
                var0 = false;
                if (!var3) {
                    _fun9726_ip = 149;
                    continue _fun9726
                }
            case 105:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.debug;
                var3 = var4.warn;
                var2 = 'Did not patch MCP server. Interface is incompatible.';
                var2 = var3.bind(var4)(var2);
                var0 = false;
            case 149:
                return var0;
        }
    };
    var1.validateMcpServerInstance = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [823, 824]);