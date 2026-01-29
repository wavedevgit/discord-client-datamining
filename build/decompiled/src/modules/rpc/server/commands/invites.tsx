// modules/rpc/server/commands/invites.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var12 = var1.RPC_SCOPE_CONFIG;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.InstantInviteSources;
    var _closure1_slot5 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.RPCCommands;
    var1 = var1.RPCErrors;
    var _closure1_slot6 = var1;
    var1 = {};
    var6 = var3.INVITE_USER_EMBEDDED;
    var7 = 6;
    var7 = var5[var7];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createRPCCommand;
    var7 = var3.INVITE_USER_EMBEDDED;
    var3 = {};
    var11 = {};
    var13 = var12.ANY;
    var12 = 7;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var12 = var12.OAuth2Scopes;
    var14 = var12.RELATIONSHIPS_READ;
    var12 = new Array(1);
    var12[0] = var14;
    var11[var13] = var12;
    var3.scope = var11;
    var10 = function(arg0) { // Original name: handler, environment: var10
        var1 = arg0;
        var2 = var1.socket;
        var _closure2_slot0 = var2;
        var1 = var1.args;
        var2 = var1.user_id;
        var _closure2_slot1 = var2;
        var1 = var1.content;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot2;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun98390: for (var _fun98390_ip = 0;;) switch (_fun98390_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun98390_ip = 884;
                            continue _fun98390
                        }
                    case 10:
                        var4 = undefined;
                        var7 = undefined;
                        var8 = undefined;
                        var1 = _closure2_slot0;
                        var1 = var1.application;
                        var1 = var1.id;
                        var7 = var1;
                        var3 = null;
                        if (!(var3 != var1)) {
                            _fun98390_ip = 807;
                            continue _fun98390
                        }
                    case 45:
                        var5 = _closure1_slot3;
                        var2 = var5.getConnectedActivityLocation;
                        var2 = var2.bind(var5)();
                        if (!(var3 != var2)) {
                            _fun98390_ip = 733;
                            continue _fun98390
                        }
                    case 69:
                        var9 = var2.kind;
                        var10 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var11 = 9;
                        var5 = var5[var11];
                        var5 = var10.bind(var4)(var5);
                        var5 = var5.EmbeddedActivityLocationKind;
                        var5 = var5.GUILD_CHANNEL;
                        if (!(var5 !== var9)) {
                            _fun98390_ip = 512;
                            continue _fun98390
                        }
                    case 113:
                        var10 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var5 = var5[var11];
                        var5 = var10.bind(var4)(var5);
                        var5 = var5.EmbeddedActivityLocationKind;
                        var5 = var5.GUILD_CHANNEL_MESSAGE;
                        if (!(var5 !== var9)) {
                            _fun98390_ip = 512;
                            continue _fun98390
                        }
                    case 149:
                        var10 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var5 = var5[var11];
                        var5 = var10.bind(var4)(var5);
                        var5 = var5.EmbeddedActivityLocationKind;
                        var5 = var5.PRIVATE_CHANNEL;
                        if (!(var5 !== var9)) {
                            _fun98390_ip = 289;
                            continue _fun98390
                        }
                    case 182:
                        var10 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var5 = var5[var11];
                        var5 = var10.bind(var4)(var5);
                        var5 = var5.EmbeddedActivityLocationKind;
                        var5 = var5.PRIVATE_CHANNEL_MESSAGE;
                        if (!(var5 !== var9)) {
                            _fun98390_ip = 289;
                            continue _fun98390
                        }
                    case 215:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var5 = 8;
                        var5 = var10[var5];
                        var5 = var9.bind(var4)(var5);
                        var11 = var5.RPCError;
                        var10 = {};
                        var5 = _closure1_slot6;
                        var5 = var5.NO_ELIGIBLE_ACTIVITY;
                        var10.errorCode = var5;
                        var5 = var11.prototype;
                        var9 = Object.create(var5, {
                            constructor: {
                                value: var11
                            }
                        });
                        var12 = 'Unsupported activity location';
                        var14 = var9;
                        var13 = var10;
                        var5 = new var14[var11](var13, var12, var11);
                        var5 = var5 instanceof Object ? var5 : var9;
                        throw var5;
                    case 289:
                        var9 = _closure1_slot4;
                        var5 = var9.getChannel;
                        var2 = var2.channel_id;
                        var2 = var5.bind(var9)(var2);
                        if (!(var3 != var2)) {
                            _fun98390_ip = 438;
                            continue _fun98390
                        }
                    case 315:
                        var5 = var2.type;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot1;
                        var3 = 11;
                        var3 = var10[var3];
                        var3 = var9.bind(var4)(var3);
                        var3 = var3.ChannelTypes;
                        var3 = var3.DM;
                        if (!(var5 !== var3)) {
                            _fun98390_ip = 364;
                            continue _fun98390
                        }
                    case 356:
                        var8 = var2;
                        _fun98390_ip = 547;
                        continue _fun98390;
                    case 364:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 8;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var9 = var2.RPCError;
                        var5 = {};
                        var2 = _closure1_slot6;
                        var2 = var2.INVALID_CHANNEL;
                        var5.errorCode = var2;
                        var2 = var9.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var9
                            }
                        });
                        var12 = 'Cannot send invite to a DM';
                        var14 = var3;
                        var13 = var5;
                        var2 = new var14[var9](var13, var12, var11);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 438:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 8;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var9 = var2.RPCError;
                        var5 = {};
                        var2 = _closure1_slot6;
                        var2 = var2.INVALID_CHANNEL;
                        var5.errorCode = var2;
                        var2 = var9.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var9
                            }
                        });
                        var12 = 'Invalid channel';
                        var14 = var3;
                        var13 = var5;
                        var2 = new var14[var9](var13, var12, var11);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 512:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 10;
                        var2 = var5[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.validateOpenInviteDialog;
                        var2 = var2.bind(var3)();
                        var8 = var2.channel;
                    case 547: // try_start_0
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 12;
                        var2 = var5[var2];
                        var5 = var3.bind(var4)(var2);
                        var3 = var5.sendEmbeddedActivityInviteUser;
                        var2 = {};
                        var8 = var8.id;
                        var2.channelId = var8;
                        var2.applicationId = var7;
                        var7 = _closure2_slot1;
                        var2.userId = var7;
                        var6 = _closure2_slot2;
                        var2.prefixedContent = var6;
                        var6 = 'RPC_ACTIVITY_INVITE_USER';
                        var2.location = var6;
                        var6 = {};
                        var7 = _closure1_slot5;
                        var7 = var7.ACTIVITY_INVITE;
                        var6.source = var7;
                        var2.inviteAnalyticsMetadata = var6;
                        var2 = var3.bind(var5)(var2);
                        SaveGenerator(address = 645);
                    case 643:
                        return var2;
                    case 645:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun98390_ip = 654;
                            continue _fun98390
                        }
                    case 651: // try_end0
                        return var4;
                    case 654:
                        return var2;
                    case 657: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 8;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var6 = var2.RPCError;
                        var5 = {};
                        var2 = _closure1_slot6;
                        var2 = var2.UNKNOWN_ERROR;
                        var5.errorCode = var2;
                        var2 = var6.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var6
                            }
                        });
                        var12 = 'Failed to invite user';
                        var14 = var3;
                        var13 = var5;
                        var2 = new var14[var6](var13, var12, var11);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 733:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 8;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var5 = var2.RPCError;
                        var3 = {};
                        var1 = _closure1_slot6;
                        var1 = var1.NO_ELIGIBLE_ACTIVITY;
                        var3.errorCode = var1;
                        var1 = var5.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var5
                            }
                        });
                        var12 = 'No eligible activity for application. Ensure an activity was set using setActivity.';
                        var14 = var2;
                        var13 = var3;
                        var1 = new var14[var5](var13, var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 807:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 8;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.RPCError;
                        var3 = {};
                        var1 = _closure1_slot6;
                        var1 = var1.INVALID_COMMAND;
                        var3.errorCode = var1;
                        var1 = var4.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var4
                            }
                        });
                        var12 = 'No application.';
                        var14 = var2;
                        var13 = var3;
                        var1 = new var14[var4](var13, var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 884:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.handler = var10;
    var3 = var8.bind(var9)(var7, var3);
    var1[var6] = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/server/commands/invites.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1371, 1372, 3315, 660, 483, 12790, 3298, 7888, 7930, 12793, 790, 7872, 2]);