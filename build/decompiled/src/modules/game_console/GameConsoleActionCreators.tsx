// modules/game_console/GameConsoleActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var0 = function arg0, arg1() {
        _fun67564: for (var _fun67564_ip = 0;;) switch (_fun67564_ip) {
            case 0:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot7;
                var2 = var1.REMOTE_COMMAND_SENT;
                var1 = {};
                var6 = arg0;
                var1.command_type = var6;
                var7 = _closure1_slot5;
                var6 = var7.getSessionById;
                var5 = arg1;
                var6 = var6.bind(var7)(var5);
                var7 = null;
                var8 = var7 == var6;
                var5 = undefined;
                if (var8) {
                    _fun67564_ip = 100;
                    continue _fun67564
                }
            case 79:
                var6 = var6.clientInfo;
                var7 = var7 == var6;
                var5 = undefined;
                if (var7) {
                    _fun67564_ip = 100;
                    continue _fun67564
                }
            case 94:
                var5 = var6.os;
            case 100:
                var1.remote_platform = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var6 = function() {
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun67568: for (var _fun67568_ip = 0;;) switch (_fun67568_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun67568_ip = 447;
                            continue _fun67568
                        }
                    case 10:
                        var1 = undefined;
                        var2 = undefined;
                        var4 = _closure1_slot6;
                        var3 = var4.getAwaitingRemoteSessionInfo;
                        var4 = var3.bind(var4)();
                        var3 = null;
                        var6 = var3 == var4;
                        var7 = undefined;
                        if (var6) {
                            _fun67568_ip = 48;
                            continue _fun67568
                        }
                    case 42:
                        var7 = var4.nonce;
                    case 48:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 6;
                        var6 = var9[var6];
                        var9 = var8.bind(var1)(var6);
                        var8 = var9.dispatch;
                        var6 = {};
                        var10 = 'REMOTE_SESSION_DISCONNECT';
                        var6.type = var10;
                        var6 = var8.bind(var9)(var6);
                        var2 = new Array(0);
                        var6 = var3 == var4;
                        var8 = undefined;
                        if (var6) {
                            _fun67568_ip = 106;
                            continue _fun67568
                        }
                    case 101:
                        var8 = var4.type;
                    case 106:
                        var6 = _closure1_slot9;
                        var6 = var6.PLAYSTATION;
                        var6 = var8 !== var6;
                        if (!var6) {
                            _fun67568_ip = 151;
                            continue _fun67568
                        }
                    case 123:
                        var8 = var3 == var4;
                        var9 = undefined;
                        if (var8) {
                            _fun67568_ip = 137;
                            continue _fun67568
                        }
                    case 132:
                        var9 = var4.type;
                    case 137:
                        var8 = _closure1_slot9;
                        var8 = var8.PLAYSTATION_STAGING;
                        var6 = var9 !== var8;
                    case 151:
                        if (var6) {
                            _fun67568_ip = 173;
                            continue _fun67568
                        }
                    case 154:
                        var9 = var3 == var4;
                        var8 = undefined;
                        if (var9) {
                            _fun67568_ip = 169;
                            continue _fun67568
                        }
                    case 163:
                        var8 = var4.commandId;
                    case 169:
                        var6 = var3 == var8;
                    case 173:
                        if (var6) {
                            _fun67568_ip = 195;
                            continue _fun67568
                        }
                    case 176:
                        var9 = var3 == var4;
                        var8 = undefined;
                        if (var9) {
                            _fun67568_ip = 191;
                            continue _fun67568
                        }
                    case 185:
                        var8 = var4.deviceId;
                    case 191:
                        var6 = var3 == var8;
                    case 195:
                        if (var6) {
                            _fun67568_ip = 239;
                            continue _fun67568
                        }
                    case 198:
                        var8 = var2;
                        var6 = var8.push;
                        var11 = _closure1_slot18;
                        var10 = var4.type;
                        var9 = var4.deviceId;
                        var4 = var4.commandId;
                        var4 = var11.bind(var1)(var10, var9, var4);
                        var4 = var6.bind(var8)(var4);
                    case 239:
                        if (!(var3 != var7)) {
                            _fun67568_ip = 265;
                            continue _fun67568
                        }
                    case 243:
                        var6 = var2;
                        var4 = var6.push;
                        var3 = _closure1_slot15;
                        var3 = var3.bind(var1)(var7);
                        var3 = var4.bind(var6)(var3);
                    case 265: // try_start_0
                        var3 = global;
                        var4 = var3.Promise;
                        var3 = var4.all;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 288);
                    case 286:
                        return var2;
                    case 288:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun67568_ip = 299;
                            continue _fun67568
                        }
                    case 294: // try_end0
                        _fun67568_ip = 444;
                        continue _fun67568;
                    case 299:
                        return var2;
                    case 302: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 7;
                        var2 = var9[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.show;
                        var2 = {};
                        var8 = _closure1_slot0;
                        var5 = 8;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var10 = var6.intl;
                        var7 = var10.string;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var6 = var6.t;
                        var6 = var6.LNhXcL;
                        var6 = var7.bind(var10)(var6);
                        var2.title = var6;
                        var6 = var9[var5];
                        var6 = var8.bind(var1)(var6);
                        var7 = var6.intl;
                        var6 = var7.string;
                        var5 = var9[var5];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.t;
                        var5 = var5.QnKxtP;
                        var5 = var6.bind(var7)(var5);
                        var2.body = var5;
                        var2 = var3.bind(var4)(var2);
                    case 444:
                        return var1;
                    case 447:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var5 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun67572: for (var _fun67572_ip = 0;;) switch (_fun67572_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun67572_ip = 248;
                            continue _fun67572
                        }
                    case 10:
                        var5 = undefined;
                        var1 = undefined;
                    case 14: // try_start_0
                        var3 = _closure1_slot4;
                        var2 = var3.getRTCConnectionId;
                        var3 = var2.bind(var3)();
                        var2 = null;
                        if (!(var2 == var3)) {
                            _fun67572_ip = 71;
                            continue _fun67572
                        }
                    case 37:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 10;
                        var2 = var4[var2];
                        var2 = var3.bind(var5)(var2);
                        var2 = var2.ConsoleHandoffType;
                        var8 = var2.CREATE_NEW_CALL;
                        _fun67572_ip = 103;
                        continue _fun67572;
                    case 71:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 10;
                        var2 = var4[var2];
                        var2 = var3.bind(var5)(var2);
                        var2 = var2.ConsoleHandoffType;
                        var8 = var2.TRANSFER_EXISTING_CALL;
                    case 103:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 11;
                        var2 = var4[var2];
                        var2 = var3.bind(var5)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.post;
                        var2 = {};
                        var6 = _closure1_slot8;
                        var6 = var6.CONNECT_REQUEST_CREATE;
                        var2.url = var6;
                        var6 = {};
                        var7 = {};
                        var7.handoff_type = var8;
                        var6.analytics_properties = var7;
                        var2.body = var6;
                        var6 = false;
                        var2.rejectWithError = var6;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 187);
                    case 185:
                        return var2;
                    case 187:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun67572_ip = 206;
                            continue _fun67572
                        }
                    case 193:
                        var3 = var2.body;
                        var1 = var3.nonce;
                    case 204: // try_end0
                        _fun67572_ip = 245;
                        continue _fun67572;
                    case 206:
                        return var2;
                    case 209: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 12;
                        var2 = var6[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.captureException;
                        var2 = var2.bind(var3)(var4);
                    case 245:
                        return var1;
                    case 248:
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
    var4 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {};
        var5 = _closure1_slot8;
        var4 = var5.CONNECT_REQUEST;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot15 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun67576: for (var _fun67576_ip = 0;;) switch (_fun67576_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun67576_ip = 269;
                            continue _fun67576
                        }
                    case 13:
                        var5 = var9;
                        var4 = undefined;
                        var3 = undefined;
                        var7 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var6 = 6;
                        var1 = var1[var6];
                        var8 = var7.bind(var4)(var1);
                        var7 = var8.dispatch;
                        var1 = {};
                        var10 = 'GAME_CONSOLE_FETCH_DEVICES_START';
                        var1.type = var10;
                        var1.platform = var9;
                        var1 = var7.bind(var8)(var1);
                    case 70: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 11;
                        var1 = var8[var1];
                        var1 = var7.bind(var4)(var1);
                        var8 = var1.HTTP;
                        var7 = var8.get;
                        var1 = {};
                        var11 = _closure1_slot8;
                        var10 = var11.CONSOLES_DEVICES;
                        var9 = var5;
                        var9 = var10.bind(var11)(var9);
                        var1.url = var9;
                        var9 = false;
                        var1.rejectWithError = var9;
                        var1 = var7.bind(var8)(var1);
                        SaveGenerator(address = 139);
                    case 137:
                        return var1;
                    case 139:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun67576_ip = 214;
                            continue _fun67576
                        }
                    case 145:
                        var3 = var1;
                    case 148: // try_end0
                        var3 = var3.body;
                        var3 = var3.devices;
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var6];
                        var9 = var8.bind(var4)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'GAME_CONSOLE_FETCH_DEVICES_SUCCESS';
                        var7.type = var10;
                        var10 = var5;
                        var7.platform = var10;
                        var7.devices = var3;
                        var7 = var8.bind(var9)(var7);
                        return var3;
                    case 214:
                        return var1;
                    case 217: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'GAME_CONSOLE_FETCH_DEVICES_FAIL';
                        var2.type = var6;
                        var2.platform = var5;
                        var2.error = var1;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 269:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun67579: for (var _fun67579_ip = 0;;) switch (_fun67579_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun67579_ip = 363;
                            continue _fun67579
                        }
                    case 13:
                        var5 = var9;
                        var10 = arg1;
                        var11 = arg2;
                        var12 = arg3;
                        var4 = undefined;
                        var3 = undefined;
                        var7 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var6 = 6;
                        var1 = var1[var6];
                        var8 = var7.bind(var4)(var1);
                        var7 = var8.dispatch;
                        var1 = {};
                        var13 = 'GAME_CONSOLE_DEVICE_SEND_COMMAND_START';
                        var1.type = var13;
                        var1.platform = var9;
                        var1 = var7.bind(var8)(var1);
                    case 79: // try_start_0
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var1 = 11;
                        var1 = var15[var1];
                        var1 = var14.bind(var4)(var1);
                        var8 = var1.HTTP;
                        var7 = var8.post;
                        var1 = {};
                        var17 = _closure1_slot8;
                        var16 = var17.CONSOLES_DEVICES_COMMANDS;
                        var13 = var5;
                        var9 = var10;
                        var9 = var16.bind(var17)(var13, var9);
                        var1.url = var9;
                        var9 = {};
                        var13 = 13;
                        var13 = var15[var13];
                        var13 = var14.bind(var4)(var13);
                        var13 = var13.ConsoleCommands;
                        var13 = var13.CONNECT_VOICE;
                        var9.command = var13;
                        var13 = var11;
                        var14 = var13.id;
                        var9.channel_id = var14;
                        var13 = var13.guild_id;
                        var9.guild_id = var13;
                        var13 = var12;
                        var9.nonce = var13;
                        var1.body = var9;
                        var9 = false;
                        var1.rejectWithError = var9;
                        var1 = var7.bind(var8)(var1);
                        SaveGenerator(address = 217);
                    case 215:
                        return var1;
                    case 217:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun67579_ip = 308;
                            continue _fun67579
                        }
                    case 223:
                        var3 = var1;
                    case 226: // try_end0
                        var3 = var3.body;
                        var3 = var3.id;
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var7 = var7[var6];
                        var9 = var8.bind(var4)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var13 = 'WAIT_FOR_REMOTE_SESSION';
                        var7.type = var13;
                        var13 = var5;
                        var7.sessionType = var13;
                        var7.nonce = var12;
                        var11 = var11.id;
                        var7.channelId = var11;
                        var7.deviceId = var10;
                        var7.commandId = var3;
                        var7 = var8.bind(var9)(var7);
                        return var3;
                    case 308:
                        return var1;
                    case 311: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var6];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL';
                        var2.type = var6;
                        var2.platform = var5;
                        var2.error = var1;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 363:
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
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot19;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun67583: for (var _fun67583_ip = 0;;) switch (_fun67583_ip) {
                    case 0:
                        StartGenerator();
                        var12 = arg0;
                        var11 = arg1;
                        var10 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun67583_ip = 305;
                            continue _fun67583
                        }
                    case 19:
                        var7 = var12;
                        var6 = var11;
                        var5 = var10;
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var8 = 6;
                        var1 = var1[var8];
                        var4 = undefined;
                        var9 = var3.bind(var4)(var1);
                        var3 = var9.dispatch;
                        var1 = {};
                        var13 = 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START';
                        var1.type = var13;
                        var1.platform = var12;
                        var1.deviceId = var11;
                        var1.commandId = var10;
                        var1 = var3.bind(var9)(var1);
                    case 90: // try_start_0
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 11;
                        var1 = var9[var1];
                        var1 = var3.bind(var4)(var1);
                        var9 = var1.HTTP;
                        var3 = var9.del;
                        var1 = {};
                        var14 = _closure1_slot8;
                        var13 = var14.CONSOLES_DEVICES_COMMAND;
                        var12 = var7;
                        var11 = var6;
                        var10 = var5;
                        var10 = var13.bind(var14)(var12, var11, var10);
                        var1.url = var10;
                        var10 = false;
                        var1.rejectWithError = var10;
                        var1 = var3.bind(var9)(var1);
                        SaveGenerator(address = 168);
                    case 166:
                        return var1;
                    case 168:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun67583_ip = 240;
                            continue _fun67583
                        }
                    case 174: // try_end0
                        var9 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var8];
                        var10 = var9.bind(var4)(var3);
                        var9 = var10.dispatch;
                        var3 = {};
                        var11 = 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS';
                        var3.type = var11;
                        var11 = var7;
                        var3.platform = var11;
                        var11 = var6;
                        var3.deviceId = var11;
                        var11 = var5;
                        var3.commandId = var11;
                        var3 = var9.bind(var10)(var3);
                        return var4;
                    case 240:
                        return var1;
                    case 243: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var8];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var8 = 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL';
                        var2.type = var8;
                        var2.platform = var7;
                        var2.deviceId = var6;
                        var2.commandId = var5;
                        var2.error = var1;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 305:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot19 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun67586: for (var _fun67586_ip = 0;;) switch (_fun67586_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        var6 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun67586_ip = 181;
                            continue _fun67586
                        }
                    case 16:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 14;
                        var1 = var3[var1];
                        var5 = undefined;
                        var2 = var2.bind(var5)(var1);
                        var1 = var2.maybeShowPTTAlert;
                        var1 = var1.bind(var2)(var8);
                        SaveGenerator(address = 56);
                    case 54:
                        return var1;
                    case 56:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun67586_ip = 178;
                            continue _fun67586
                        }
                    case 62:
                        var2 = _closure1_slot11;
                        var2 = var2.bind(var5)();
                        SaveGenerator(address = 74);
                    case 72:
                        return var2;
                    case 74:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun67586_ip = 175;
                            continue _fun67586
                        }
                    case 80:
                        var3 = _closure1_slot13;
                        var3 = var3.bind(var5)();
                        SaveGenerator(address = 92);
                    case 90:
                        return var3;
                    case 92:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun67586_ip = 172;
                            continue _fun67586
                        }
                    case 98:
                        var9 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot17;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var13 = arg1;
                        var15 = undefined;
                        var14 = var8;
                        var12 = var6;
                        var11 = var3;
                        var4 = var15[var9](var14, var13, var12, var11, var10);
                        SaveGenerator(address = 129);
                    case 127:
                        return var4;
                    case 129:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 9);
                        if (var9) {
                            _fun67586_ip = 169;
                            continue _fun67586
                        }
                    case 135:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var7 = 15;
                        var7 = var10[var7];
                        var7 = var9.bind(var5)(var7);
                        var6 = var6.id;
                        var6 = var7.bind(var5)(var6, var8);
                        return var5;
                    case 169:
                        return var4;
                    case 172:
                        return var3;
                    case 175:
                        return var2;
                    case 178:
                        return var1;
                    case 181:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot20 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var12 = var0.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var7);
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var10.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var10 = var7.AnalyticEvents;
    var _closure1_slot7 = var10;
    var10 = var7.Endpoints;
    var _closure1_slot8 = var10;
    var7 = var7.PlatformTypes;
    var _closure1_slot9 = var7;
    var7 = 16;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/game_console/GameConsoleActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'WAIT_FOR_REMOTE_SESSION';
        var1.type = var4;
        var4 = arg0;
        var1.sessionType = var4;
        var4 = arg2;
        var1.nonce = var4;
        var4 = arg1;
        var1.channelId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.waitForSession = var7;
    var2.disconnectRemote = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'REMOTE_SESSION_CONNECT';
        var1.type = var4;
        var4 = arg0;
        var1.sessionId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.connectToRemote = var6;
    var6 = function arg0, arg1() {
        var3 = arg0;
        var0 = arg1;
        var9 = var0.selfMute;
        var8 = var0.selfDeaf;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var6 = var4.bind(var0)(var2);
        var5 = var6.dispatch;
        var4 = {};
        var2 = 'REMOTE_COMMAND';
        var4.type = var2;
        var4.sessionId = var3;
        var7 = {};
        var2 = 'VOICE_STATE_UPDATE';
        var7.type = var2;
        var7.self_mute = var9;
        var7.self_deaf = var8;
        var4.payload = var7;
        var4 = var5.bind(var6)(var4);
        var1 = _closure1_slot10;
        var1 = var1.bind(var0)(var2, var3);
        return var0;
    };
    var2.remoteVoiceStateUpdate = var6;
    var6 = function arg0() {
        var4 = arg0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var6 = var3.bind(var0)(var2);
        var5 = var6.dispatch;
        var2 = {};
        var3 = 'REMOTE_COMMAND';
        var2.type = var3;
        var2.sessionId = var4;
        var7 = {};
        var3 = 'DISCONNECT';
        var7.type = var3;
        var2.payload = var7;
        var2 = var5.bind(var6)(var2);
        var2 = _closure1_slot10;
        var2 = var2.bind(var0)(var3, var4);
        var1 = _closure1_slot11;
        var1 = var1.bind(var0)();
        return var0;
    };
    var2.remoteDisconnect = var6;
    var6 = function arg0, arg1, arg2, arg3() {
        _fun67592: for (var _fun67592_ip = 0;;) switch (_fun67592_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var2);
                var4 = var5.coerceAudioContextForProto;
                var2 = arg2;
                var8 = var4.bind(var5)(var2);
                var2 = null;
                if (!(var2 != var8)) {
                    _fun67592_ip = 141;
                    continue _fun67592
                }
            case 48:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var6 = var4.bind(var0)(var2);
                var5 = var6.dispatch;
                var4 = {};
                var2 = 'REMOTE_COMMAND';
                var4.type = var2;
                var4.sessionId = var3;
                var7 = {};
                var2 = 'AUDIO_SETTINGS_UPDATE';
                var7.type = var2;
                var7.context = var8;
                var8 = arg1;
                var7.id = var8;
                var10 = arg3;
                var11 = var7;
                var8 = copyDataProperties(var11, var10);
                var4.payload = var7;
                var4 = var5.bind(var6)(var4);
                var1 = _closure1_slot10;
                var1 = var1.bind(var0)(var2, var3);
            case 141:
                return var0;
        }
    };
    var2.remoteAudioSettingsUpdate = var6;
    var2.getConnectNonce = var5;
    var2.cancelConnectRequest = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot16;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchDevices = var4;
    var4 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GAME_CONSOLE_SELECT_DEVICE';
        var1.type = var4;
        var4 = arg0;
        var1.platform = var4;
        var4 = arg1;
        var1.deviceId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.persistSelectedDeviceId = var4;
    var2.cancelCommand = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot20;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.transferToPlayStation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3519, 3521, 3520, 660, 795, 806, 4002, 1234, 8282, 8367, 507, 1207, 8368, 8369, 8372, 2]);