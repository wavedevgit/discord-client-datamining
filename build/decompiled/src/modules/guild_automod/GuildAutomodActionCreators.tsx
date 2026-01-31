// modules/guild_automod/GuildAutomodActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: _transformClientActionToApiAction, environment: var1
        var1 = arg0;
        var0 = {};
        var2 = var1.type;
        var0.type = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3._transformMetadataToSnakeCase;
        var1 = var1.metadata;
        var1 = var2.bind(var3)(var1);
        var0.metadata = var1;
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0) { // Original name: _transformClientRuleToApiRule, environment: var1
        _fun115072: for (var _fun115072_ip = 0;;) switch (_fun115072_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 4;
                var0 = var4[var0];
                var8 = undefined;
                var4 = var3.bind(var8)(var0);
                var3 = var4._transformMetadataToSnakeCase;
                var0 = var1.triggerMetadata;
                var3 = var3.bind(var4)(var0);
                var4 = null;
                if (!(var4 != var3)) {
                    _fun115072_ip = 56;
                    continue _fun115072
                }
            case 51:
                var0 = delete var3.keywordLists;
            case 56:
                var0 = {};
                var5 = var1.id;
                var0.id = var5;
                var5 = var1.name;
                var0.name = var5;
                var5 = var1.guildId;
                var0.guild_id = var5;
                var5 = var1.eventType;
                var0.event_type = var5;
                var5 = var1.triggerType;
                var0.trigger_type = var5;
                var0.trigger_metadata = var3;
                var6 = var1.actions;
                var5 = var6.filter;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 5;
                var3 = var9[var3];
                var3 = var7.bind(var8)(var3);
                var3 = var3.isNotNullish;
                var5 = var5.bind(var6)(var3);
                var3 = var5.map;
                var2 = _closure1_slot9;
                var2 = var3.bind(var5)(var2);
                var0.actions = var2;
                var2 = var1.enabled;
                var0.enabled = var2;
                var2 = var1.creatorId;
                var0.creator_id = var2;
                var2 = var1.position;
                var0.position = var2;
                var2 = global;
                var6 = var2.Array;
                var5 = var6.from;
                var3 = var1.exemptChannels;
                if (!(var4 == var3)) {
                    _fun115072_ip = 229;
                    continue _fun115072
                }
            case 225:
                var3 = new Array(0);
            case 229:
                var3 = var5.bind(var6)(var3);
                var0.exempt_channels = var3;
                var3 = var2.Array;
                var2 = var3.from;
                var1 = var1.exemptRoles;
                if (!(var4 == var1)) {
                    _fun115072_ip = 264;
                    continue _fun115072
                }
            case 260:
                var1 = new Array(0);
            case 264:
                var1 = var2.bind(var3)(var1);
                var0.exempt_roles = var1;
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0) { // Original name: _transformApiActionToClientAction, environment: var1
        var1 = arg0;
        var0 = {};
        var2 = var1.type;
        var0.type = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 4;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3._transformMetadataToCamelCase;
        var1 = var1.metadata;
        var1 = var2.bind(var3)(var1);
        var0.metadata = var1;
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: _transformApiRuletoClientRule, environment: var1
        _fun115074: for (var _fun115074_ip = 0;;) switch (_fun115074_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var3 = var1.id;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun115074_ip = 69;
                    continue _fun115074
                }
            case 16:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 6;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.fromTimestamp;
                var4 = global;
                var7 = var4.Date;
                var4 = var7.now;
                var4 = var4.bind(var7)();
                var3 = var5.bind(var6)(var4);
            case 69:
                var0.id = var3;
                var3 = var1.name;
                var0.name = var3;
                var3 = var1.guild_id;
                var0.guildId = var3;
                var3 = var1.event_type;
                var0.eventType = var3;
                var3 = var1.trigger_type;
                var0.triggerType = var3;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 4;
                var4 = var9[var4];
                var7 = undefined;
                var6 = var8.bind(var7)(var4);
                var5 = var6._transformMetadataToCamelCase;
                var4 = var1.trigger_metadata;
                var4 = var5.bind(var6)(var4);
                var0.triggerMetadata = var4;
                var6 = var1.actions;
                var5 = var6.filter;
                var4 = 5;
                var4 = var9[var4];
                var4 = var8.bind(var7)(var4);
                var4 = var4.isNotNullish;
                var5 = var5.bind(var6)(var4);
                var4 = var5.map;
                var3 = _closure1_slot11;
                var3 = var4.bind(var5)(var3);
                var0.actions = var3;
                var3 = var1.enabled;
                var0.enabled = var3;
                var3 = var1.creator_id;
                var0.creatorId = var3;
                var3 = var1.position;
                var0.position = var3;
                var3 = global;
                var6 = var3.Set;
                var4 = var1.exempt_channels;
                if (!(var2 == var4)) {
                    _fun115074_ip = 264;
                    continue _fun115074
                }
            case 260:
                var4 = new Array(0);
            case 264:
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var5;
                var10 = var4;
                var4 = new var11[var6](var10, var9);
                var4 = var4 instanceof Object ? var4 : var5;
                var0.exemptChannels = var4;
                var4 = var3.Set;
                var1 = var1.exempt_roles;
                if (!(var2 == var1)) {
                    _fun115074_ip = 312;
                    continue _fun115074
                }
            case 308:
                var1 = new Array(0);
            case 312:
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var3;
                var10 = var1;
                var1 = new var11[var4](var10, var9);
                var1 = var1 instanceof Object ? var1 : var3;
                var0.exemptRoles = var1;
                var1 = var0.triggerMetadata;
                if (!(var2 != var1)) {
                    _fun115074_ip = 361;
                    continue _fun115074
                }
            case 350:
                var1 = var0.triggerMetadata;
                var1 = delete var1.keywordLists;
            case 361:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function() { // Original name: _validateAutomodRule, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun115077: for (var _fun115077_ip = 0;;) switch (_fun115077_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun115077_ip = 151;
                            continue _fun115077
                        }
                    case 13:
                        var1 = _closure1_slot10;
                        var4 = undefined;
                        var6 = var1.bind(var4)(var7);
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.post;
                        var1 = {};
                        var9 = _closure1_slot7;
                        var8 = var9.GUILD_AUTOMOD_VALIDATE_RULE;
                        var7 = var7.guildId;
                        var7 = var8.bind(var9)(var7);
                        var1.url = var7;
                        var1.body = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 103);
                    case 101:
                        return var1;
                    case 103:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun115077_ip = 148;
                            continue _fun115077
                        }
                    case 109:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 4;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4._transformMetadataToCamelCase;
                        var2 = var1.body;
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 148:
                        return var1;
                    case 151:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot13 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function() { // Original name: _createAutomodRule, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun115080: for (var _fun115080_ip = 0;;) switch (_fun115080_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun115080_ip = 131;
                            continue _fun115080
                        }
                    case 10:
                        var1 = _closure1_slot10;
                        var4 = undefined;
                        var6 = var1.bind(var4)(var7);
                        var1 = delete var6.id;
                        var3 = _closure1_slot12;
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var1 = var2.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var2 = var5.post;
                        var1 = {};
                        var9 = _closure1_slot7;
                        var8 = var9.GUILD_AUTOMOD_RULES;
                        var7 = var7.guildId;
                        var7 = var8.bind(var9)(var7);
                        var1.url = var7;
                        var1.body = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var2.bind(var5)(var1);
                        SaveGenerator(address = 109);
                    case 107:
                        return var1;
                    case 109:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun115080_ip = 128;
                            continue _fun115080
                        }
                    case 115:
                        var2 = var1.body;
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 128:
                        return var1;
                    case 131:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function() { // Original name: _updateAutomodRule, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun115083: for (var _fun115083_ip = 0;;) switch (_fun115083_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun115083_ip = 135;
                            continue _fun115083
                        }
                    case 13:
                        var1 = _closure1_slot10;
                        var4 = undefined;
                        var6 = var1.bind(var4)(var7);
                        var3 = _closure1_slot12;
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var1 = var2.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var2 = var5.patch;
                        var1 = {};
                        var10 = _closure1_slot7;
                        var9 = var10.GUILD_AUTOMOD_RULE;
                        var8 = var7.guildId;
                        var7 = var7.id;
                        var7 = var9.bind(var10)(var8, var7);
                        var1.url = var7;
                        var1.body = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var2.bind(var5)(var1);
                        SaveGenerator(address = 113);
                    case 111:
                        return var1;
                    case 113:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun115083_ip = 132;
                            continue _fun115083
                        }
                    case 119:
                        var2 = var1.body;
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 132:
                        return var1;
                    case 135:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot15 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function() { // Original name: _deleteAutomodRule, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun115086: for (var _fun115086_ip = 0;;) switch (_fun115086_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun115086_ip = 100;
                            continue _fun115086
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.del;
                        var1 = {};
                        var7 = _closure1_slot7;
                        var6 = var7.GUILD_AUTOMOD_RULE;
                        var5 = arg1;
                        var4 = arg0;
                        var4 = var6.bind(var7)(var5, var4);
                        var1.url = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 86);
                    case 84:
                        return var1;
                    case 86:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun115086_ip = 97;
                            continue _fun115086
                        }
                    case 92:
                        var2 = true;
                        return var2;
                    case 97:
                        return var1;
                    case 100:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot16 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() { // Original name: _fetchAutomodRules, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun115089: for (var _fun115089_ip = 0;;) switch (_fun115089_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun115089_ip = 147;
                            continue _fun115089
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var4 = var1.HTTP;
                        var2 = var4.get;
                        var1 = {};
                        var7 = _closure1_slot7;
                        var6 = var7.GUILD_AUTOMOD_RULES;
                        var5 = arg0;
                        var5 = var6.bind(var7)(var5);
                        var1.url = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 84);
                    case 82:
                        return var1;
                    case 84:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun115089_ip = 144;
                            continue _fun115089
                        }
                    case 90:
                        var2 = global;
                        var5 = var2.Array;
                        var4 = var5.isArray;
                        var2 = var1.body;
                        var2 = var4.bind(var5)(var2);
                        if (var2) {
                            _fun115089_ip = 122;
                            continue _fun115089
                        }
                    case 116:
                        var2 = new Array(0);
                        _fun115089_ip = 141;
                        continue _fun115089;
                    case 122:
                        var5 = var1.body;
                        var4 = var5.map;
                        var3 = _closure1_slot12;
                        var2 = var4.bind(var5)(var3);
                    case 141:
                        return var2;
                    case 144:
                        return var1;
                    case 147:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() { // Original name: _executeAlertAction, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun115092: for (var _fun115092_ip = 0;;) switch (_fun115092_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun115092_ip = 166;
                            continue _fun115092
                        }
                    case 13:
                        var3 = _closure1_slot5;
                        var2 = var3.can;
                        var1 = _closure1_slot8;
                        var1 = var1.MANAGE_MESSAGES;
                        var1 = var2.bind(var3)(var1, var5);
                        if (!var1) {
                            _fun115092_ip = 158;
                            continue _fun115092
                        }
                    case 45:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var7 = _closure1_slot7;
                        var6 = var7.GUILD_AUTOMOD_ALERT_ACTION;
                        var4 = var5.guild_id;
                        var4 = var6.bind(var7)(var4);
                        var1.url = var4;
                        var4 = {};
                        var6 = arg0;
                        var4.message_id = var6;
                        var5 = var5.id;
                        var4.channel_id = var5;
                        var5 = arg2;
                        var4.alert_action_type = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 152);
                    case 150:
                        return var1;
                    case 152:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun115092_ip = 163;
                            continue _fun115092
                        }
                    case 158:
                        var2 = undefined;
                        return var2;
                    case 163:
                        return var1;
                    case 166:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot18 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot6 = var6;
    var6 = var3.Endpoints;
    var _closure1_slot7 = var6;
    var3 = var3.Permissions;
    var _closure1_slot8 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_automod/GuildAutomodActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: validateAutomodRule, environment: var1
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.validateAutomodRule = var3;
    var3 = function() { // Original name: createAutomodRule, environment: var1
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createAutomodRule = var3;
    var3 = function() { // Original name: updateAutomodRule, environment: var1
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.updateAutomodRule = var3;
    var3 = function() { // Original name: deleteAutomodRule, environment: var1
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.deleteAutomodRule = var3;
    var3 = function() { // Original name: fetchAutomodRules, environment: var1
        var0 = undefined;
        var3 = _closure1_slot17;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchAutomodRules = var3;
    var3 = function() { // Original name: executeAlertAction, environment: var1
        var0 = undefined;
        var3 = _closure1_slot18;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.executeAlertAction = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: removeMentionRaidRestrictionWithFeedback, environment: var1
        _fun115099: for (var _fun115099_ip = 0;;) switch (_fun115099_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var3 = _closure1_slot4;
                var2 = var3.getGuild;
                var6 = var2.bind(var3)(var4);
                var2 = null;
                var2 = var2 != var6;
                if (!var2) {
                    _fun115099_ip = 75;
                    continue _fun115099
                }
            case 49:
                var5 = _closure1_slot5;
                var4 = var5.can;
                var3 = _closure1_slot8;
                var3 = var3.MANAGE_GUILD;
                var2 = var4.bind(var5)(var3, var6);
            case 75:
                if (!var2) {
                    _fun115099_ip = 118;
                    continue _fun115099
                }
            case 78:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.openConfirmRemoveMentionRaid;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 9;
                    var1 = var4[var0];
                    var0 = undefined;
                    var8 = var3.bind(var0)(var1);
                    var7 = var8.trackWithMetadata;
                    var1 = _closure1_slot6;
                    var6 = var1.GUILD_AUTOMOD_FEEDBACK;
                    var2 = {};
                    var1 = 10;
                    var1 = var4[var1];
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.Feedback;
                    var1 = var1.MENTION_RAID_REMOVE_RESTRICTION;
                    var2.feedback_type = var1;
                    var9 = _closure2_slot1;
                    var2.decision_id = var9;
                    var2 = var7.bind(var8)(var6, var2);
                    var2 = 7;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var7 = _closure1_slot7;
                    var6 = var7.GUILD_AUTOMOD_CLEAR_MENTION_RAID;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var7)(var5);
                    var2.url = var5;
                    var5 = true;
                    var2.rejectWithError = var5;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 118:
                var0 = undefined;
                return var0;
        }
    };
    var2.removeMentionRaidRestrictionWithFeedback = var3;
    var1 = function(arg0) { // Original name: clearMentionRaidDetected, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearMentionRaidDetected = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1410, 3050, 660, 14651, 1304, 21, 507, 10033, 4266, 4504, 806, 2]);