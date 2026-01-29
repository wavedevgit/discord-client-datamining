// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var0 = function(arg0) { // Original name: extractPartyInfo, environment: var5
        _fun9743: for (var _fun9743_ip = 0;;) switch (_fun9743_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isValidContentItem;
                var2 = var2.bind(var3)(var1);
                if (!var2) {
                    _fun9743_ip = 119;
                    continue _fun9743
                }
            case 44:
                var2 = var1.name;
                var3 = 'string';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun9743_ip = 71;
                    continue _fun9743
                }
            case 60:
                var2 = var1.name;
                var0.name = var2;
            case 71:
                var2 = var1.title;
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun9743_ip = 94;
                    continue _fun9743
                }
            case 83:
                var2 = var1.title;
                var0.title = var2;
            case 94:
                var2 = var1.version;
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun9743_ip = 119;
                    continue _fun9743
                }
            case 107:
                var1 = var1.version;
                var0.version = var1;
            case 119:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var4 = function(arg0) { // Original name: getClientAttributes, environment: var5
        _fun9744: for (var _fun9744_ip = 0;;) switch (_fun9744_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getClientInfoForTransport;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = {};
                var2 = null;
                var3 = var2 != var1;
                if (!var3) {
                    _fun9744_ip = 55;
                    continue _fun9744
                }
            case 50:
                var3 = var1.name;
            case 55:
                if (!var3) {
                    _fun9744_ip = 69;
                    continue _fun9744
                }
            case 58:
                var3 = var1.name;
                var0['mcp.client.name'] = var3;
            case 69:
                var3 = var2 != var1;
                if (!var3) {
                    _fun9744_ip = 81;
                    continue _fun9744
                }
            case 76:
                var3 = var1.title;
            case 81:
                if (!var3) {
                    _fun9744_ip = 95;
                    continue _fun9744
                }
            case 84:
                var3 = var1.title;
                var0['mcp.client.title'] = var3;
            case 95:
                var2 = var2 != var1;
                if (!var2) {
                    _fun9744_ip = 108;
                    continue _fun9744
                }
            case 102:
                var2 = var1.version;
            case 108:
                if (!var2) {
                    _fun9744_ip = 123;
                    continue _fun9744
                }
            case 111:
                var1 = var1.version;
                var0['mcp.client.version'] = var1;
            case 123:
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var3 = function(arg0) { // Original name: getServerAttributes, environment: var5
        _fun9745: for (var _fun9745_ip = 0;;) switch (_fun9745_ip) {
            case 0:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var3[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var1 = var3.getSessionDataForTransport;
                var0 = arg0;
                var0 = var1.bind(var3)(var0);
                var3 = null;
                var5 = var3 == var0;
                var1 = undefined;
                if (var5) {
                    _fun9745_ip = 56;
                    continue _fun9745
                }
            case 50:
                var1 = var0.serverInfo;
            case 56:
                var0 = {};
                var5 = var3 != var1;
                if (!var5) {
                    _fun9745_ip = 70;
                    continue _fun9745
                }
            case 65:
                var5 = var1.name;
            case 70:
                if (!var5) {
                    _fun9745_ip = 108;
                    continue _fun9745
                }
            case 73:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 3;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.MCP_SERVER_NAME_ATTRIBUTE;
                var5 = var1.name;
                var0[var6] = var5;
            case 108:
                var5 = var3 != var1;
                if (!var5) {
                    _fun9745_ip = 120;
                    continue _fun9745
                }
            case 115:
                var5 = var1.title;
            case 120:
                if (!var5) {
                    _fun9745_ip = 158;
                    continue _fun9745
                }
            case 123:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 3;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.MCP_SERVER_TITLE_ATTRIBUTE;
                var5 = var1.title;
                var0[var6] = var5;
            case 158:
                var3 = var3 != var1;
                if (!var3) {
                    _fun9745_ip = 171;
                    continue _fun9745
                }
            case 165:
                var3 = var1.version;
            case 171:
                if (!var3) {
                    _fun9745_ip = 210;
                    continue _fun9745
                }
            case 174:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 3;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.MCP_SERVER_VERSION_ATTRIBUTE;
                var1 = var1.version;
                var0[var2] = var1;
            case 210:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var6 = function(arg0) { // Original name: extractClientInfo, environment: var5
        _fun9746: for (var _fun9746_ip = 0;;) switch (_fun9746_ip) {
            case 0:
                var3 = arg0;
                var0 = {};
                var4 = null;
                var2 = var4 == var3;
                var1 = undefined;
                if (var2) {
                    _fun9746_ip = 37;
                    continue _fun9746
                }
            case 16:
                var2 = var3.requestInfo;
                var6 = var4 == var2;
                var1 = undefined;
                if (var6) {
                    _fun9746_ip = 37;
                    continue _fun9746
                }
            case 31:
                var1 = var2.remoteAddress;
            case 37:
                if (var1) {
                    _fun9746_ip = 58;
                    continue _fun9746
                }
            case 40:
                var6 = var4 == var3;
                var2 = undefined;
                if (var6) {
                    _fun9746_ip = 55;
                    continue _fun9746
                }
            case 49:
                var2 = var3.clientAddress;
            case 55:
                var1 = var2;
            case 58:
                if (var1) {
                    _fun9746_ip = 93;
                    continue _fun9746
                }
            case 61:
                var6 = var4 == var3;
                var2 = undefined;
                if (var6) {
                    _fun9746_ip = 90;
                    continue _fun9746
                }
            case 70:
                var6 = var3.request;
                var7 = var4 == var6;
                var2 = undefined;
                if (var7) {
                    _fun9746_ip = 90;
                    continue _fun9746
                }
            case 85:
                var2 = var6.ip;
            case 90:
                var1 = var2;
            case 93:
                if (var1) {
                    _fun9746_ip = 144;
                    continue _fun9746
                }
            case 96:
                var6 = var4 == var3;
                var2 = undefined;
                if (var6) {
                    _fun9746_ip = 141;
                    continue _fun9746
                }
            case 105:
                var6 = var3.request;
                var7 = var4 == var6;
                var2 = undefined;
                if (var7) {
                    _fun9746_ip = 141;
                    continue _fun9746
                }
            case 120:
                var6 = var6.connection;
                var7 = var4 == var6;
                var2 = undefined;
                if (var7) {
                    _fun9746_ip = 141;
                    continue _fun9746
                }
            case 135:
                var2 = var6.remoteAddress;
            case 141:
                var1 = var2;
            case 144:
                var0.address = var1;
                var2 = var4 == var3;
                var1 = undefined;
                if (var2) {
                    _fun9746_ip = 179;
                    continue _fun9746
                }
            case 158:
                var2 = var3.requestInfo;
                var6 = var4 == var2;
                var1 = undefined;
                if (var6) {
                    _fun9746_ip = 179;
                    continue _fun9746
                }
            case 173:
                var1 = var2.remotePort;
            case 179:
                if (var1) {
                    _fun9746_ip = 200;
                    continue _fun9746
                }
            case 182:
                var6 = var4 == var3;
                var2 = undefined;
                if (var6) {
                    _fun9746_ip = 197;
                    continue _fun9746
                }
            case 191:
                var2 = var3.clientPort;
            case 197:
                var1 = var2;
            case 200:
                if (var1) {
                    _fun9746_ip = 251;
                    continue _fun9746
                }
            case 203:
                var6 = var4 == var3;
                var2 = undefined;
                if (var6) {
                    _fun9746_ip = 248;
                    continue _fun9746
                }
            case 212:
                var3 = var3.request;
                var6 = var4 == var3;
                var2 = undefined;
                if (var6) {
                    _fun9746_ip = 248;
                    continue _fun9746
                }
            case 227:
                var3 = var3.connection;
                var4 = var4 == var3;
                var2 = undefined;
                if (var4) {
                    _fun9746_ip = 248;
                    continue _fun9746
                }
            case 242:
                var2 = var3.remotePort;
            case 248:
                var1 = var2;
            case 251:
                var0.port = var1;
                return var0;
        }
    };
    var _closure1_slot6 = var6;
    var1 = function(arg0) { // Original name: getTransportTypes, environment: var5
        _fun9747: for (var _fun9747_ip = 0;;) switch (_fun9747_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun9747_ip = 162;
                    continue _fun9747
                }
            case 12:
                var2 = var0.constructor;
                if (!var2) {
                    _fun9747_ip = 162;
                    continue _fun9747
                }
            case 23:
                var2 = var0.constructor;
                var3 = var1 == var2;
                var1 = undefined;
                if (var3) {
                    _fun9747_ip = 42;
                    continue _fun9747
                }
            case 37:
                var1 = var2.name;
            case 42:
                var3 = 'unknown';
                var4 = 'string';
                var1 = typeof var1;
                var2 = var3;
                if (!(var4 === var1)) {
                    _fun9747_ip = 70;
                    continue _fun9747
                }
            case 60:
                var0 = var0.constructor;
                var2 = var0.name;
            case 70:
                var0 = var2.toLowerCase;
                var6 = var0.bind(var2)();
                var1 = var6.includes;
                var0 = 'stdio';
                var0 = var1.bind(var6)(var0);
                var1 = 'pipe';
                if (var0) {
                    _fun9747_ip = 148;
                    continue _fun9747
                }
            case 103:
                var4 = var6.includes;
                var0 = 'http';
                var0 = var4.bind(var6)(var0);
                if (var0) {
                    _fun9747_ip = 136;
                    continue _fun9747
                }
            case 120:
                var5 = var6.includes;
                var4 = 'sse';
                var0 = var5.bind(var6)(var4);
            case 136:
                var1 = var3;
                if (!var0) {
                    _fun9747_ip = 148;
                    continue _fun9747
                }
            case 142:
                var1 = 'tcp';
            case 148:
                var0 = {};
                var0.mcpTransport = var2;
                var0.networkTransport = var1;
                return var0;
            case 162:
                var0 = {
                    'mcpTransport': 'unknown',
                    'networkTransport': 'unknown'
                };
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var0 = 0;
    var7 = var7[var0];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = global;
    var10 = var7.Object;
    var9 = var10.defineProperty;
    var7 = var7.Symbol;
    var8 = var7.toStringTag;
    var7 = {};
    var11 = 'Module';
    var7.value = var11;
    var7 = var9.bind(var10)(var2, var8, var7);
    var7 = function(arg0, arg1) { // Original name: buildTransportAttributes, environment: var5
        _fun9748: for (var _fun9748_ip = 0;;) switch (_fun9748_ip) {
            case 0:
                var4 = arg0;
                var2 = arg1;
                var13 = undefined;
                var10 = undefined;
                if (!var4) {
                    _fun9748_ip = 32;
                    continue _fun9748
                }
            case 13:
                var0 = 'sessionId';
                var0 = var0 in var4;
                var10 = undefined;
                if (!var0) {
                    _fun9748_ip = 32;
                    continue _fun9748
                }
            case 26:
                var10 = var4.sessionId;
            case 32:
                if (var2) {
                    _fun9748_ip = 39;
                    continue _fun9748
                }
            case 35:
                var1 = {};
                _fun9748_ip = 51;
                continue _fun9748;
            case 39:
                var0 = _closure1_slot6;
                var1 = var0.bind(var13)(var2);
            case 51:
                var2 = _closure1_slot7;
                var2 = var2.bind(var13)(var4);
                var17 = var2.mcpTransport;
                var16 = var2.networkTransport;
                var2 = _closure1_slot4;
                var9 = var2.bind(var13)(var4);
                var2 = _closure1_slot5;
                var8 = var2.bind(var13)(var4);
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var3 = var3.bind(var13)(var2);
                var2 = var3.getProtocolVersionForTransport;
                var12 = var2.bind(var3)(var4);
                var2 = global;
                var7 = var2.Object;
                var6 = var7.assign;
                var5 = var10;
                if (!var5) {
                    _fun9748_ip = 182;
                    continue _fun9748
                }
            case 143:
                var4 = _closure1_slot2;
                var3 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 3;
                var2 = var11[var2];
                var2 = var3.bind(var13)(var2);
                var3 = var2.MCP_SESSION_ID_ATTRIBUTE;
                var2 = {};
                var5 = var4.bind(var13)(var2, var3, var10);
            case 182:
                var4 = var1.address;
                if (!var4) {
                    _fun9748_ip = 236;
                    continue _fun9748
                }
            case 191:
                var11 = _closure1_slot2;
                var3 = _closure1_slot0;
                var10 = _closure1_slot1;
                var2 = 3;
                var2 = var10[var2];
                var2 = var3.bind(var13)(var2);
                var10 = var2.CLIENT_ADDRESS_ATTRIBUTE;
                var3 = var1.address;
                var2 = {};
                var4 = var11.bind(var13)(var2, var10, var3);
            case 236:
                var3 = var1.port;
                if (!var3) {
                    _fun9748_ip = 290;
                    continue _fun9748
                }
            case 245:
                var11 = _closure1_slot2;
                var10 = _closure1_slot0;
                var14 = _closure1_slot1;
                var2 = 3;
                var2 = var14[var2];
                var2 = var10.bind(var13)(var2);
                var10 = var2.CLIENT_PORT_ATTRIBUTE;
                var2 = var1.port;
                var1 = {};
                var3 = var11.bind(var13)(var1, var10, var2);
            case 290:
                var11 = _closure1_slot2;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var14 = 3;
                var10 = var1[var14];
                var10 = var2.bind(var13)(var10);
                var15 = var10.MCP_TRANSPORT_ATTRIBUTE;
                var10 = {};
                var15 = var11.bind(var13)(var10, var15, var17);
                var10 = var1[var14];
                var10 = var2.bind(var13)(var10);
                var10 = var10.NETWORK_TRANSPORT_ATTRIBUTE;
                var10 = var11.bind(var13)(var15, var10, var16);
                var1 = var1[var14];
                var1 = var2.bind(var13)(var1);
                var2 = var1.NETWORK_PROTOCOL_VERSION_ATTRIBUTE;
                var1 = '2.0';
                var2 = var11.bind(var13)(var10, var2, var1);
                var1 = var12;
                if (!var1) {
                    _fun9748_ip = 421;
                    continue _fun9748
                }
            case 385:
                var11 = _closure1_slot2;
                var10 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var14];
                var0 = var10.bind(var13)(var0);
                var10 = var0.MCP_PROTOCOL_VERSION_ATTRIBUTE;
                var0 = {};
                var1 = var11.bind(var13)(var0, var10, var12);
            case 421:
                var25 = {};
                var26 = var7;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                var21 = var2;
                var20 = var1;
                var19 = var9;
                var18 = var8;
                var0 = var26[var6](var25, var24, var23, var22, var21, var20, var19, var18, var17);
                return var0;
        }
    };
    var2.buildTransportAttributes = var7;
    var2.extractClientInfo = var6;
    var6 = function(arg0) { // Original name: extractSessionDataFromInitializeRequest, environment: var5
        _fun9749: for (var _fun9749_ip = 0;;) switch (_fun9749_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 1;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.isValidContentItem;
                var4 = var1.params;
                var4 = var5.bind(var6)(var4);
                if (!var4) {
                    _fun9749_ip = 133;
                    continue _fun9749
                }
            case 50:
                var4 = var1.params;
                var4 = var4.protocolVersion;
                var5 = 'string';
                var4 = typeof var4;
                if (!(var5 === var4)) {
                    _fun9749_ip = 91;
                    continue _fun9749
                }
            case 73:
                var4 = var1.params;
                var4 = var4.protocolVersion;
                var0.protocolVersion = var4;
            case 91:
                var4 = var1.params;
                var4 = var4.clientInfo;
                if (!var4) {
                    _fun9749_ip = 133;
                    continue _fun9749
                }
            case 106:
                var2 = _closure1_slot3;
                var1 = var1.params;
                var1 = var1.clientInfo;
                var1 = var2.bind(var3)(var1);
                var0.clientInfo = var1;
            case 133:
                return var0;
        }
    };
    var2.extractSessionDataFromInitializeRequest = var6;
    var5 = function(arg0) { // Original name: extractSessionDataFromInitializeResponse, environment: var5
        _fun9750: for (var _fun9750_ip = 0;;) switch (_fun9750_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 1;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.isValidContentItem;
                var4 = var4.bind(var5)(var1);
                if (!var4) {
                    _fun9750_ip = 103;
                    continue _fun9750
                }
            case 44:
                var4 = var1.protocolVersion;
                var5 = 'string';
                var4 = typeof var4;
                if (!(var5 === var4)) {
                    _fun9750_ip = 73;
                    continue _fun9750
                }
            case 61:
                var4 = var1.protocolVersion;
                var0.protocolVersion = var4;
            case 73:
                var4 = var1.serverInfo;
                if (!var4) {
                    _fun9750_ip = 103;
                    continue _fun9750
                }
            case 82:
                var2 = _closure1_slot3;
                var1 = var1.serverInfo;
                var1 = var2.bind(var3)(var1);
                var0.serverInfo = var1;
            case 103:
                return var0;
        }
    };
    var2.extractSessionDataFromInitializeResponse = var5;
    var2.getClientAttributes = var4;
    var2.getServerAttributes = var3;
    var2.getTransportTypes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 933, 936, 937]);