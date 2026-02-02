// modules/connections/ConnectionsRoleActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun77710: for (var _fun77710_ip = 0;;) switch (_fun77710_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        var7 = arg1;
                        var4 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun77710_ip = 327;
                            continue _fun77710
                        }
                    case 21:
                        var3 = var4.map;
                        var2 = function(arg0) { // Environment: var1
                            var2 = arg0;
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = {};
                                var2 = var1.connectionType;
                                var0.connection_type = var2;
                                var2 = var1.connectionMetadataField;
                                var0.connection_metadata_field = var2;
                                var2 = var1.applicationId;
                                var0.application_id = var2;
                                var2 = var1.operator;
                                var0.operator = var2;
                                var1 = var1.value;
                                var0.value = var1;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var6 = var3.bind(var4)(var2);
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 2;
                        var2 = var3[var2];
                        var3 = undefined;
                        var2 = var5.bind(var3)(var2);
                        var8 = var2.HTTP;
                        var5 = var8.put;
                        var2 = {};
                        var11 = _closure1_slot4;
                        var10 = var11.GUILD_ROLE_CONNECTIONS_CONFIGURATION;
                        var10 = var10.bind(var11)(var9, var7);
                        var2.url = var10;
                        var11 = var6.length;
                        var10 = 0;
                        if (!(var10 === var11)) {
                            _fun77710_ip = 111;
                            continue _fun77710
                        }
                    case 107:
                        var6 = new Array(0);
                    case 111:
                        var2.body = var6;
                        var6 = true;
                        var2.oldFormErrors = var6;
                        var6 = false;
                        var2.rejectWithError = var6;
                        var5 = var5.bind(var8)(var2);
                        var2 = var5.then;
                        var1 = function(arg0) { // Environment: var1
                            _fun77713: for (var _fun77713_ip = 0;;) switch (_fun77713_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = new Array(0);
                                    var2 = var1.body;
                                    var3 = var2.length;
                                    var2 = 0;
                                    if (!(var3 > var2)) {
                                        _fun77713_ip = 47;
                                        continue _fun77713
                                    }
                                case 23:
                                    var3 = var1.body;
                                    var2 = var3.map;
                                    var1 = function(arg0) { // Environment: var1
                                        var2 = arg0;
                                        var1 = var2.map;
                                        var0 = function(arg0) { // Environment: var0
                                            var1 = arg0;
                                            var0 = {};
                                            var2 = var1.connection_type;
                                            var0.connectionType = var2;
                                            var2 = var1.connection_metadata_field;
                                            var0.connectionMetadataField = var2;
                                            var2 = var1.application_id;
                                            var0.applicationId = var2;
                                            var2 = var1.operator;
                                            var0.operator = var2;
                                            var1 = var1.value;
                                            var0.value = var1;
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var0 = var2.bind(var3)(var1);
                                case 47:
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var5)(var1);
                        SaveGenerator(address = 154);
                    case 152:
                        return var1;
                    case 154:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun77710_ip = 324;
                            continue _fun77710
                        }
                    case 163:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 4;
                        var2 = var8[var2];
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.requestMembersForRole;
                        var2 = var2.bind(var5)(var9, var7, var6);
                        SaveGenerator(address = 200);
                    case 198:
                        return var2;
                    case 200:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun77710_ip = 321;
                            continue _fun77710
                        }
                    case 206:
                        var5 = null;
                        if (!(var5 != var2)) {
                            _fun77710_ip = 268;
                            continue _fun77710
                        }
                    case 212:
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 3;
                        var5 = var8[var5];
                        var8 = var6.bind(var3)(var5);
                        var6 = var8.dispatch;
                        var5 = {};
                        var10 = 'GUILD_ROLE_MEMBER_COUNT_UPDATE';
                        var5.type = var10;
                        var5.guildId = var9;
                        var5.roleId = var7;
                        var5.count = var2;
                        var5 = var6.bind(var8)(var5);
                    case 268:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 3;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var8 = 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS';
                        var4.type = var8;
                        var4.roleId = var7;
                        var4.roleConnectionConfigurations = var1;
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 321:
                        return var2;
                    case 324:
                        return var1;
                    case 327:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun77718: for (var _fun77718_ip = 0;;) switch (_fun77718_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun77718_ip = 90;
                            continue _fun77718
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 2;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var4 = _closure1_slot4;
                        var4 = var4.APPLICATION_USER_ROLE_CONNECTIONS;
                        var1.url = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 73);
                    case 71:
                        return var1;
                    case 73:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun77718_ip = 87;
                            continue _fun77718
                        }
                    case 79:
                        var2 = var1.body;
                        return var2;
                    case 87:
                        return var1;
                    case 90:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/connections/ConnectionsRoleActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        var8 = arg1;
        var _closure2_slot0 = var8;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 2;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {};
        var7 = _closure1_slot4;
        var6 = var7.GUILD_ROLE_CONNECTIONS_CONFIGURATION;
        var5 = arg0;
        var5 = var6.bind(var7)(var5, var8);
        var2.url = var5;
        var5 = true;
        var2.rejectWithError = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg0) { // Environment: var1
            _fun77720: for (var _fun77720_ip = 0;;) switch (_fun77720_ip) {
                case 0:
                    var0 = arg0;
                    var4 = new Array(0);
                    var1 = var0.body;
                    var2 = var1.length;
                    var1 = 0;
                    if (!(var2 > var1)) {
                        _fun77720_ip = 47;
                        continue _fun77720
                    }
                case 23:
                    var2 = var0.body;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var2 = arg0;
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var0 = {};
                            var2 = var1.connection_type;
                            var0.connectionType = var2;
                            var2 = var1.connection_metadata_field;
                            var0.connectionMetadataField = var2;
                            var2 = var1.application_id;
                            var0.applicationId = var2;
                            var2 = var1.operator;
                            var0.operator = var2;
                            var1 = var1.value;
                            var0.value = var1;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4 = var1.bind(var2)(var0);
                case 47:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS';
                    var1.type = var5;
                    var5 = _closure2_slot0;
                    var1.roleId = var5;
                    var1.roleConnectionConfigurations = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.catch;
        var1 = function() { // Environment: var1
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.fetchRoleConnectionsConfiguration = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.putRoleConnectionsConfigurations = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchUserApplicationRoleConnections = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 507, 806, 9804, 2]);