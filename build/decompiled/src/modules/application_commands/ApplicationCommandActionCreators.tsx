// modules/application_commands/ApplicationCommandActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'APPLICATION_COMMAND_UPDATE_OPTIONS';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.changedOptionStates = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot6 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/ApplicationCommandActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun53655: for (var _fun53655_ip = 0;;) switch (_fun53655_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.channelId;
                var14 = var0.command;
                var13 = var0.section;
                var11 = var0.location;
                var12 = var0.initialValues;
                var10 = var0.triggerSection;
                var9 = var0.queryLength;
                var8 = var0.sectionName;
                var7 = var0.query;
                var6 = var0.searchResultsPosition;
                var5 = var0.source;
                var4 = var0.commandOrigin;
                var0 = null;
                if (!(var0 != var14)) {
                    _fun53655_ip = 152;
                    continue _fun53655
                }
            case 77:
                var2 = _closure1_slot1;
                var17 = _closure1_slot2;
                var1 = 3;
                var1 = var17[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var14.inputType;
                var16 = _closure1_slot0;
                var0 = 4;
                var0 = var17[var0];
                var0 = var16.bind(var3)(var0);
                var0 = var0.ApplicationCommandInputType;
                var0 = var0.PLACEHOLDER;
                var1 = var1 !== var0;
                var0 = 'command should not be placeholder';
                var0 = var2.bind(var3)(var1, var0);
            case 152:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var16 = 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND';
                var1.type = var16;
                var1.channelId = var15;
                var1.command = var14;
                var1.section = var13;
                var1.initialValues = var12;
                var1.location = var11;
                var1.triggerSection = var10;
                var1.queryLength = var9;
                var1.sectionName = var8;
                var1.query = var7;
                var1.searchResultsPosition = var6;
                var1.source = var5;
                var1.commandOrigin = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setActiveCommand = var4;
    var4 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var4 = arg1;
        var1.commandId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPreferredCommandId = var4;
    var2.updateOptionStates = var3;
    var3 = function arg0, arg1() {
        var3 = _closure1_slot6;
        var0 = global;
        var2 = var0.Object;
        var1 = var2.fromEntries;
        var5 = var0.Object;
        var4 = var5.entries;
        var0 = arg1;
        var5 = var4.bind(var5)(var0);
        var4 = var5.map;
        var0 = function(arg0) { // Environment: var0
            _fun53658: for (var _fun53658_ip = 0;;) switch (_fun53658_ip) {
                case 0:
                    var4 = arg0;
                    var0 = var4[Symbol.iterator];
                    var4 = var0().next;
                    var2 = var4().value;
                    var1 = var0;
                    var6 = undefined;
                    var3 = var1 === var6;
                    var1 = undefined;
                    if (var3) {
                        _fun53658_ip = 27;
                        continue _fun53658
                    }
                case 24:
                    var1 = var2;
                case 27:
                    var2 = undefined;
                    if (var3) {
                        _fun53658_ip = 57;
                        continue _fun53658
                    }
                case 32:
                    var5 = var4().value;
                    var4 = var0;
                    var4 = var4 === var6;
                    var2 = undefined;
                    var3 = var4;
                    if (var4) {
                        _fun53658_ip = 57;
                        continue _fun53658
                    }
                case 51:
                    var2 = var5;
                    var3 = var4;
                case 57:
                    if (var3) {
                        _fun53658_ip = 63;
                        continue _fun53658
                    }
                case 60:
                    var0.return();
                case 63:
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var1.lastValidationResult = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var0 = var4.bind(var5)(var0);
        var2 = var1.bind(var2)(var0);
        var0 = undefined;
        var1 = arg0;
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var2.updateOptionValidationStates = var3;
    var3 = function arg0() {
        var0 = arg0;
        var9 = var0.channelId;
        var8 = var0.command;
        var7 = var0.section;
        var6 = var0.preferredCommandId;
        var5 = var0.location;
        var4 = var0.changedOptionStates;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var10 = 'APPLICATION_COMMAND_UPDATE_CHANNEL_STATE';
        var1.type = var10;
        var1.channelId = var9;
        var1.command = var8;
        var1.section = var7;
        var1.preferredCommandId = var6;
        var1.location = var5;
        var1.changedOptionStates = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateChannelState = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.put;
        var0 = {};
        var4 = {};
        var5 = arg3;
        var4.permissions = var5;
        var0.body = var4;
        var7 = _closure1_slot5;
        var6 = var7.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS;
        var5 = arg0;
        var4 = arg1;
        var3 = arg2;
        var3 = var6.bind(var7)(var5, var4, var3);
        var0.url = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.updateApplicationGuildCommandPermissions = var3;
    var3 = function arg0, arg1, arg2() {
        _fun53661: for (var _fun53661_ip = 0;;) switch (_fun53661_ip) {
            case 0:
                var8 = arg1;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 3;
                var2 = var4[var0];
                var0 = undefined;
                var6 = var3.bind(var0)(var2);
                var2 = var8.autocomplete;
                var9 = null;
                var5 = var9 != var2;
                var2 = 'Missing autocomplete context';
                var2 = var6.bind(var0)(var5, var2);
                var2 = var8.autocomplete;
                var10 = var2.query;
                var5 = var2.name;
                var2 = 7;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.fromTimestamp;
                var2 = global;
                var6 = var2.Date;
                var2 = var6.now;
                var2 = var2.bind(var6)();
                var6 = var3.bind(var4)(var2);
                var _closure2_slot0 = var6;
                var2 = var8.channel;
                if (!(var9 != var2)) {
                    _fun53661_ip = 431;
                    continue _fun53661
                }
            case 127:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 5;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var11 = 'APPLICATION_COMMAND_AUTOCOMPLETE_REQUEST';
                var2.type = var11;
                var2.nonce = var6;
                var11 = var8.channel;
                var11 = var11.id;
                var2.channelId = var11;
                var2.query = var10;
                var2.name = var5;
                var2 = var3.bind(var4)(var2);
                var4 = _closure1_slot4;
                var3 = var4.getAutocompleteChoices;
                var2 = var8.channel;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2, var5, var10);
                if (!(var9 == var2)) {
                    _fun53661_ip = 431;
                    continue _fun53661
                }
            case 231:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 6;
                var2 = var12[var2];
                var2 = var11.bind(var0)(var2);
                var4 = var2.HTTP;
                var3 = var4.post;
                var2 = {};
                var5 = _closure1_slot5;
                var5 = var5.INTERACTIONS;
                var2.url = var5;
                var5 = {};
                var10 = 8;
                var10 = var12[var10];
                var10 = var11.bind(var0)(var10);
                var10 = var10.InteractionTypes;
                var10 = var10.APPLICATION_COMMAND_AUTOCOMPLETE;
                var5.type = var10;
                var10 = arg0;
                var10 = var10.applicationId;
                var5.application_id = var10;
                var10 = var8.guild;
                var11 = var9 == var10;
                var9 = undefined;
                if (var11) {
                    _fun53661_ip = 340;
                    continue _fun53661
                }
            case 335:
                var9 = var10.id;
            case 340:
                var5.guild_id = var9;
                var8 = var8.channel;
                var8 = var8.id;
                var5.channel_id = var8;
                var8 = _closure1_slot3;
                var7 = var8.getSessionId;
                var7 = var7.bind(var8)();
                var5.session_id = var7;
                var7 = arg2;
                var5.data = var7;
                var5.nonce = var6;
                var2.body = var5;
                var5 = 3000;
                var2.timeout = var5;
                var5 = true;
                var2.rejectWithError = var5;
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'INTERACTION_FAILURE';
                    var1.type = var4;
                    var4 = _closure2_slot0;
                    var1.nonce = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 431:
                return var0;
        }
    };
    var2.performAutocomplete = var3;
    var3 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'APPLICATION_COMMAND_FETCH';
        var1.type = var4;
        var4 = arg1;
        var1.channelId = var4;
        var4 = arg2;
        var1.commandId = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.fetchCommand = var3;
    var3 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'APPLICATION_COMMANDS_FETCH';
        var1.type = var4;
        var4 = arg1;
        var1.channelId = var4;
        var4 = arg2;
        var1.commandIds = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.fetchCommands = var3;
    var3 = function arg0() {
        var0 = arg0;
        var5 = var0.guildId;
        var6 = var0.channelId;
        var4 = var0.applicationId;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var7 = 'APPLICATION_COMMANDS_FETCH_FOR_APPLICATION';
        var1.type = var7;
        var1.channelId = var6;
        var1.guildId = var5;
        var1.applicationId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.fetchCommandsForApplication = var3;
    var3 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'APPLICATION_COMMAND_REGISTRY_UPDATE';
        var1.type = var4;
        var4 = arg1;
        var1.applications = var4;
        var4 = arg0;
        var1.commands = var4;
        var4 = arg2;
        var1.channelId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateRegistry = var3;
    var1 = function arg0, arg1() {
        _fun53667: for (var _fun53667_ip = 0;;) switch (_fun53667_ip) {
            case 0:
                var4 = arg1;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun53667_ip = 84;
                    continue _fun53667
                }
            case 9:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 3;
                var1 = var6[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var4.inputType;
                var5 = _closure1_slot0;
                var0 = 4;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.ApplicationCommandInputType;
                var0 = var0.PLACEHOLDER;
                var1 = var1 !== var0;
                var0 = 'command should not be placeholder';
                var0 = var2.bind(var3)(var1, var0);
            case 84:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'APP_LAUNCHER_SET_ACTIVE_COMMAND';
                var1.type = var5;
                var5 = arg0;
                var1.channelId = var5;
                var1.command = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setAppLauncherActiveCommand = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 6483, 660, 44, 4547, 806, 507, 21, 1645, 2]);