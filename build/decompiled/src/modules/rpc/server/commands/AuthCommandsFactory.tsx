// modules/rpc/server/commands/AuthCommandsFactory.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot18;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun98290: for (var _fun98290_ip = 0;;) switch (_fun98290_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun98290_ip = 1929;
                            continue _fun98290
                        }
                    case 15:
                        var20 = var1.client_id;
                        var2 = var1.response_type;
                        var5 = undefined;
                        if (!(var2 === var5)) {
                            _fun98290_ip = 37;
                            continue _fun98290
                        }
                    case 33:
                        var2 = 'code';
                    case 37:
                        var18 = var2;
                        var17 = var1.redirect_uri;
                        var16 = var1.code_challenge;
                        var15 = var1.code_challenge_method;
                        var14 = var1.state;
                        var13 = var1.nonce;
                        var32 = var1.scope;
                        var33 = var1.permissions;
                        var28 = var1.guild_id;
                        var27 = var1.channel_id;
                        var26 = var1.prompt;
                        var25 = var1.disable_guild_select;
                        var4 = var1.integration_type;
                        var23 = var1.pid;
                        var22 = var1.signal;
                        var2 = var1.isSocketRpcPrivateScope;
                        var7 = arg1;
                        var21 = arg2;
                        var11 = undefined;
                        var6 = undefined;
                        var24 = undefined;
                        var31 = undefined;
                        var19 = undefined;
                        var8 = undefined;
                        var12 = undefined;
                        var29 = undefined;
                        var30 = undefined;
                        SaveGenerator(address = 155);
                    case 153:
                        return var5;
                    case 155:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 9);
                        if (var9) {
                            _fun98290_ip = 1926;
                            continue _fun98290
                        }
                    case 164:
                        var10 = var22;
                        var9 = null;
                        if (!(var9 != var10)) {
                            _fun98290_ip = 188;
                            continue _fun98290
                        }
                    case 173:
                        var10 = var22;
                        var10 = var10.aborted;
                        if (var10) {
                            _fun98290_ip = 1855;
                            continue _fun98290
                        }
                    case 188:
                        var10 = var20;
                        if (!(var9 != var10)) {
                            _fun98290_ip = 1784;
                            continue _fun98290
                        }
                    case 198:
                        if (var2) {
                            _fun98290_ip = 279;
                            continue _fun98290
                        }
                    case 201:
                        var2 = var17;
                        if (!(var9 != var2)) {
                            _fun98290_ip = 279;
                            continue _fun98290
                        }
                    case 208:
                        var34 = _closure1_slot1;
                        var35 = _closure1_slot3;
                        var10 = 10;
                        var10 = var35[var10];
                        var35 = var34.bind(var5)(var10);
                        var34 = {};
                        var2 = _closure1_slot15;
                        var2 = var2.OAUTH2_ERROR;
                        var34.errorCode = var2;
                        var2 = var35.prototype;
                        var10 = Object.create(var2, {
                            constructor: {
                                value: var35
                            }
                        });
                        var42 = 'Redirect URI cannot be used in the RPC OAuth2 Authorization flow';
                        var44 = var10;
                        var43 = var34;
                        var2 = new var44[var35](var43, var42, var41);
                        var2 = var2 instanceof Object ? var2 : var10;
                        throw var2;
                    case 279:
                        var19 = new Array(0);
                        var10 = 'string';
                        var2 = typeof var32;
                        if (!(var10 !== var2)) {
                            _fun98290_ip = 320;
                            continue _fun98290
                        }
                    case 294:
                        var2 = global;
                        var10 = var2.Array;
                        var2 = var10.isArray;
                        var2 = var2.bind(var10)(var32);
                        if (!var2) {
                            _fun98290_ip = 353;
                            continue _fun98290
                        }
                    case 315:
                        var19 = var32;
                        _fun98290_ip = 353;
                        continue _fun98290;
                    case 320:
                        var10 = var32.split;
                        var2 = ' ';
                        var32 = var10.bind(var32)(var2);
                        var10 = var32.filter;
                        var2 = function(arg0) { // Environment: var3
                            var0 = arg0;
                            var1 = var0.length;
                            var0 = 0;
                            var0 = var1 > var0;
                            return var0;
                        };
                        var19 = var10.bind(var32)(var2);
                    case 353:
                        var32 = _closure1_slot8;
                        var10 = var32.getCurrentUser;
                        var10 = var10.bind(var32)();
                        if (!(var9 != var10)) {
                            _fun98290_ip = 1716;
                            continue _fun98290
                        }
                    case 376:
                        if (!(var9 == var4)) {
                            _fun98290_ip = 561;
                            continue _fun98290
                        }
                    case 383:
                        var32 = function arg0() {
                            _fun98292: for (var _fun98292_ip = 0;;) switch (_fun98292_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = null;
                                    var0 = var2 != var1;
                                    if (!var0) {
                                        _fun98292_ip = 64;
                                        continue _fun98292
                                    }
                                case 12:
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot3;
                                    var4 = 11;
                                    var5 = var5[var4];
                                    var4 = undefined;
                                    var6 = var6.bind(var4)(var5);
                                    var5 = var6.hasFlag;
                                    var4 = var1.flags;
                                    var3 = _closure1_slot12;
                                    var3 = var3.EMBEDDED;
                                    var0 = var5.bind(var6)(var4, var3);
                                case 64:
                                    if (!var0) {
                                        _fun98292_ip = 127;
                                        continue _fun98292
                                    }
                                case 67:
                                    var4 = var1.integrationTypesConfig;
                                    var3 = var2 == var4;
                                    var6 = undefined;
                                    var1 = undefined;
                                    if (var3) {
                                        _fun98292_ip = 123;
                                        continue _fun98292
                                    }
                                case 84:
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot3;
                                    var3 = 12;
                                    var3 = var7[var3];
                                    var3 = var5.bind(var6)(var3);
                                    var3 = var3.ApplicationIntegrationType;
                                    var3 = var3.USER_INSTALL;
                                    var1 = var4[var3];
                                case 123:
                                    var0 = var2 != var1;
                                case 127:
                                    return var0;
                            }
                        };
                        var34 = _closure1_slot6;
                        var10 = var34.getApplication;
                        var3 = var20;
                        var3 = var10.bind(var34)(var3);
                        var3 = var32.bind(var5)(var3);
                        if (var3) {
                            _fun98290_ip = 524;
                            continue _fun98290
                        }
                    case 416:
                        var34 = _closure1_slot7;
                        var3 = var34.createFromServer;
                        var35 = _closure1_slot0;
                        var36 = _closure1_slot3;
                        var10 = 13;
                        var10 = var36[var10];
                        var37 = var35.bind(var5)(var10);
                        var36 = var37.fetchApplication;
                        var35 = var20;
                        var10 = var22;
                        var10 = var36.bind(var37)(var35, var10);
                        SaveGenerator(address = 468);
                    case 466:
                        return var10;
                    case 468:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 35);
                        if (var35) {
                            _fun98290_ip = 521;
                            continue _fun98290
                        }
                    case 474:
                        var3 = var3.bind(var34)(var10);
                        var3 = var32.bind(var5)(var3);
                        if (var3) {
                            _fun98290_ip = 524;
                            continue _fun98290
                        }
                    case 487:
                        var32 = _closure1_slot0;
                        var34 = _closure1_slot3;
                        var3 = 12;
                        var3 = var34[var3];
                        var3 = var32.bind(var5)(var3);
                        var3 = var3.ApplicationIntegrationType;
                        var3 = var3.GUILD_INSTALL;
                        _fun98290_ip = 556;
                        continue _fun98290;
                    case 521:
                        return var10;
                    case 524:
                        var32 = _closure1_slot0;
                        var34 = _closure1_slot3;
                        var10 = 12;
                        var10 = var34[var10];
                        var10 = var32.bind(var5)(var10);
                        var10 = var10.ApplicationIntegrationType;
                        var3 = var10.USER_INSTALL;
                    case 556:
                        var11 = var3;
                        _fun98290_ip = 574;
                        continue _fun98290;
                    case 561:
                        var3 = global;
                        var3 = var3.Number;
                        var11 = var3.bind(var5)(var4);
                    case 574: // try_start_0
                        var4 = global;
                        var34 = var4.Promise;
                        var32 = var34.all;
                        var36 = _closure1_slot0;
                        var38 = _closure1_slot3;
                        var10 = 14;
                        var3 = var38[var10];
                        var39 = var36.bind(var5)(var3);
                        var35 = var39.fetchAuthorization;
                        var3 = {};
                        var37 = var20;
                        var3.clientId = var37;
                        var40 = var19;
                        var3.scopes = var40;
                        var40 = var18;
                        var3.responseType = var40;
                        var40 = var17;
                        var3.redirectUri = var40;
                        var40 = var16;
                        var3.codeChallenge = var40;
                        var40 = var15;
                        var3.codeChallengeMethod = var40;
                        var40 = var14;
                        var3.state = var40;
                        var40 = var11;
                        var3.integrationType = var40;
                        var40 = var22;
                        var3.signal = var40;
                        var35 = var35.bind(var39)(var3);
                        var3 = new Array(2);
                        var3[0] = var35;
                        var35 = 15;
                        var35 = var38[var35];
                        var36 = var36.bind(var5)(var35);
                        var35 = var36.getDisclosures;
                        var35 = var35.bind(var36)(var37);
                        var3[1] = var35;
                        var3 = var32.bind(var34)(var3);
                        SaveGenerator(address = 736);
                    case 734:
                        return var3;
                    case 736:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 32);
                        if (var32) {
                            _fun98290_ip = 1588;
                            continue _fun98290
                        }
                    case 745:
                        var34 = _closure1_slot4;
                        var32 = 2;
                        var35 = var34.bind(var5)(var3, var32);
                        var32 = 0;
                        var6 = var35[var32];
                        var34 = 1;
                        var34 = var35[var34];
                        var24 = var34.disclosures;
                        var31 = var34.allAcked;
                    case 783: // try_end0
                        var35 = var26;
                        var36 = _closure1_slot0;
                        var37 = _closure1_slot3;
                        var34 = 16;
                        var34 = var37[var34];
                        var34 = var36.bind(var5)(var34);
                        var34 = var34.OAuth2Prompts;
                        var34 = var34.NONE;
                        if (!(var35 === var34)) {
                            _fun98290_ip = 847;
                            continue _fun98290
                        }
                    case 822:
                        var34 = var6;
                        if (!(var9 != var34)) {
                            _fun98290_ip = 847;
                            continue _fun98290
                        }
                    case 829:
                        var34 = var6;
                        var34 = var34.authorized;
                        if (!var34) {
                            _fun98290_ip = 847;
                            continue _fun98290
                        }
                    case 841:
                        if (var31) {
                            _fun98290_ip = 1363;
                            continue _fun98290
                        }
                    case 847:
                        var31 = var21;
                        if (!(var9 != var31)) {
                            _fun98290_ip = 878;
                            continue _fun98290
                        }
                    case 854:
                        var35 = var21;
                        var21 = var6;
                        var34 = var21.application;
                        var31 = var27;
                        var21 = var23;
                        var21 = var35.bind(var5)(var34, var31, var21);
                    case 878:
                        var31 = _closure1_slot2;
                        var34 = _closure1_slot3;
                        var21 = 17;
                        var21 = var34[var21];
                        var21 = var31.bind(var5)(var21);
                        var29 = var21.NONE;
                    case 904: // try_start_1
                        var31 = _closure1_slot2;
                        var34 = _closure1_slot3;
                        var21 = 18;
                        var21 = var34[var21];
                        var31 = var31.bind(var5)(var21);
                        var21 = var31.deserialize;
                        var34 = var33;
                        var34 = var9 != var34;
                        var32 = 0;
                        if (!var34) {
                            _fun98290_ip = 945;
                            continue _fun98290
                        }
                    case 942:
                        var32 = var33;
                    case 945:
                        var29 = var21.bind(var31)(var32);
                    case 950: // try_end1
                        _fun98290_ip = 954;
                        continue _fun98290;
                    case 952: // catch_target1
                        CatchBlockStart(arg_register = 21);
                    case 954:
                        var30 = undefined;
                        var31 = var6;
                        var31 = var31.integration_type;
                        var31 = var9 != var31;
                        var21 = var31;
                        if (!var31) {
                            _fun98290_ip = 1036;
                            continue _fun98290
                        }
                    case 975:
                        var33 = var4.Object;
                        var32 = var33.values;
                        var34 = _closure1_slot0;
                        var35 = _closure1_slot3;
                        var31 = 12;
                        var31 = var35[var31];
                        var31 = var34.bind(var5)(var31);
                        var31 = var31.ApplicationIntegrationType;
                        var33 = var32.bind(var33)(var31);
                        var32 = var33.includes;
                        var31 = var6;
                        var31 = var31.integration_type;
                        var21 = var32.bind(var33)(var31);
                    case 1036:
                        if (!var21) {
                            _fun98290_ip = 1088;
                            continue _fun98290
                        }
                    case 1039:
                        var21 = var4.Map;
                        var31 = var21.prototype;
                        var31 = Object.create(var31, {
                            constructor: {
                                value: var21
                            }
                        });
                        var44 = var31;
                        var21 = new var44[var21](var43);
                        var33 = var21 instanceof Object ? var21 : var31;
                        var30 = var33;
                        var32 = var33.set;
                        var31 = var6;
                        var21 = var31.integration_type;
                        var21 = var32.bind(var33)(var21, var31);
                    case 1088:
                        var31 = _closure1_slot16;
                        var21 = var6;
                        var21 = var21.application;
                        var21 = var21.id;
                        var21 = var31[var21];
                        if (!(var9 != var21)) {
                            _fun98290_ip = 1173;
                            continue _fun98290
                        }
                    case 1113:
                        var21 = _closure1_slot16;
                        var6 = var6.application;
                        var6 = var6.id;
                        var21 = var21[var6];
                        var6 = var21.process;
                        var6 = var6.bind(var21)();
                        SaveGenerator(address = 1145);
                    case 1143:
                        return var6;
                    case 1145:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 21);
                        if (var21) {
                            _fun98290_ip = 1360;
                            continue _fun98290
                        }
                    case 1154:
                        var21 = var22;
                        if (!(var9 != var21)) {
                            _fun98290_ip = 1173;
                            continue _fun98290
                        }
                    case 1161:
                        var21 = var22;
                        var21 = var21.aborted;
                        if (var21) {
                            _fun98290_ip = 1292;
                            continue _fun98290
                        }
                    case 1173:
                        var21 = var7;
                        var7 = {};
                        var31 = var20;
                        var7.clientId = var31;
                        var7.authorizations = var30;
                        var30 = var19;
                        var7.scopes = var30;
                        var7.parsedPermissions = var29;
                        var29 = var18;
                        var7.responseType = var29;
                        var29 = var17;
                        var7.redirectUri = var29;
                        var29 = var16;
                        var7.codeChallenge = var29;
                        var29 = var15;
                        var7.codeChallengeMethod = var29;
                        var29 = var14;
                        var7.state = var29;
                        var7.guildId = var28;
                        var7.channelId = var27;
                        var7.prompt = var26;
                        var7.disableGuildSelect = var25;
                        var7.disclosures = var24;
                        var24 = var11;
                        var7.integrationType = var24;
                        var7.pid = var23;
                        var7.signal = var22;
                        var7 = var21.bind(var5)(var7);
                        return var7;
                    case 1292:
                        var21 = _closure1_slot1;
                        var22 = _closure1_slot3;
                        var7 = 10;
                        var7 = var22[var7];
                        var23 = var21.bind(var5)(var7);
                        var22 = {};
                        var7 = _closure1_slot15;
                        var7 = var7.UNKNOWN_ERROR;
                        var22.errorCode = var7;
                        var7 = var23.prototype;
                        var21 = Object.create(var7, {
                            constructor: {
                                value: var23
                            }
                        });
                        var42 = 'Request aborted';
                        var44 = var21;
                        var43 = var22;
                        var7 = new var44[var23](var43, var42, var41);
                        var7 = var7 instanceof Object ? var7 : var21;
                        throw var7;
                    case 1360:
                        return var6;
                    case 1363: // try_start_2
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var6 = var6[var10];
                        var10 = var7.bind(var5)(var6);
                        var7 = var10.authorize;
                        var6 = {};
                        var21 = true;
                        var6.authorize = var21;
                        var6.clientId = var20;
                        var6.scopes = var19;
                        var6.responseType = var18;
                        var6.redirectUri = var17;
                        var6.codeChallenge = var16;
                        var6.codeChallengeMethod = var15;
                        var6.state = var14;
                        var6.nonce = var13;
                        var6.integrationType = var11;
                        var6 = var7.bind(var10)(var6);
                        SaveGenerator(address = 1448);
                    case 1446:
                        return var6;
                    case 1448:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                        if (var7) {
                            _fun98290_ip = 1462;
                            continue _fun98290
                        }
                    case 1454:
                        var7 = var6.location;
                    case 1459: // try_end2
                        return var7;
                    case 1462:
                        return var6;
                    case 1465: // catch_target2
                        CatchBlockStart(arg_register = 6);
                        var11 = var6.body;
                        var12 = var11;
                        var7 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var6 = 10;
                        var6 = var10[var6];
                        var10 = var7.bind(var5)(var6);
                        var7 = {};
                        var6 = _closure1_slot15;
                        var6 = var6.OAUTH2_ERROR;
                        var7.errorCode = var6;
                        var13 = var9 == var11;
                        var11 = undefined;
                        if (var13) {
                            _fun98290_ip = 1526;
                            continue _fun98290
                        }
                    case 1521:
                        var11 = var12.message;
                    case 1526:
                        var6 = var11;
                        if (var11) {
                            _fun98290_ip = 1538;
                            continue _fun98290
                        }
                    case 1532:
                        var6 = 'Unknown Error';
                    case 1538:
                        var11 = var6;
                        var4 = var4.HermesInternal;
                        var6 = var4.concat;
                        var4 = 'OAuth2 Authorize Error: ';
                        var42 = var6.bind(var4)(var11);
                        var6 = var10.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var10
                            }
                        });
                        var44 = var6;
                        var43 = var7;
                        var4 = new var44[var10](var43, var42, var41);
                        var4 = var4 instanceof Object ? var4 : var6;
                        throw var4;
                    case 1588:
                        return var3;
                    case 1591: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = var3.body;
                        var8 = var4;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var3 = 10;
                        var3 = var7[var3];
                        var7 = var6.bind(var5)(var3);
                        var6 = {};
                        var3 = _closure1_slot15;
                        var3 = var3.OAUTH2_ERROR;
                        var6.errorCode = var3;
                        var9 = var9 == var4;
                        var4 = undefined;
                        if (var9) {
                            _fun98290_ip = 1652;
                            continue _fun98290
                        }
                    case 1647:
                        var4 = var8.message;
                    case 1652:
                        var3 = var4;
                        if (var4) {
                            _fun98290_ip = 1664;
                            continue _fun98290
                        }
                    case 1658:
                        var3 = 'Unknown Error';
                    case 1664:
                        var8 = var3;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var4 = var3.concat;
                        var3 = 'OAuth2 Authorization Error: ';
                        var42 = var4.bind(var3)(var8);
                        var4 = var7.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var7
                            }
                        });
                        var44 = var4;
                        var43 = var6;
                        var3 = new var44[var7](var43, var42, var41);
                        var3 = var3 instanceof Object ? var3 : var4;
                        throw var3;
                    case 1716:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 10;
                        var3 = var6[var3];
                        var6 = var4.bind(var5)(var3);
                        var4 = {};
                        var2 = _closure1_slot15;
                        var2 = var2.OAUTH2_ERROR;
                        var4.errorCode = var2;
                        var2 = var6.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var6
                            }
                        });
                        var42 = 'Client is not logged in';
                        var44 = var3;
                        var43 = var4;
                        var2 = new var44[var6](var43, var42, var41);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 1784:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 10;
                        var3 = var6[var3];
                        var6 = var4.bind(var5)(var3);
                        var4 = {};
                        var2 = _closure1_slot15;
                        var2 = var2.OAUTH2_ERROR;
                        var4.errorCode = var2;
                        var2 = var6.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var6
                            }
                        });
                        var42 = 'No Client ID provided';
                        var44 = var3;
                        var43 = var4;
                        var2 = new var44[var6](var43, var42, var41);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 1855:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 10;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = {};
                        var2 = _closure1_slot15;
                        var2 = var2.UNKNOWN_ERROR;
                        var4.errorCode = var2;
                        var2 = var5.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var5
                            }
                        });
                        var42 = 'Request aborted';
                        var44 = var3;
                        var43 = var4;
                        var2 = new var44[var5](var43, var42, var41);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 1926:
                        return var1;
                    case 1929:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var0 = function arg0, arg1() {
        _fun98293: for (var _fun98293_ip = 0;;) switch (_fun98293_ip) {
            case 0:
                var2 = arg0;
                var9 = arg1;
                var _closure2_slot0 = var2;
                var _closure2_slot1 = var9;
                var0 = var2.authorization;
                var3 = var0.accessToken;
                if (var3) {
                    _fun98293_ip = 284;
                    continue _fun98293
                }
            case 37:
                var3 = var2.authorization;
                var3 = var3.authing;
                if (var3) {
                    _fun98293_ip = 214;
                    continue _fun98293
                }
            case 55:
                var2 = var2.authorization;
                var5 = true;
                var2.authing = var5;
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 19;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.HTTP;
                var3 = var4.get;
                var2 = {};
                var6 = _closure1_slot13;
                var6 = var6.OAUTH2_CURRENT_AUTH;
                var2.url = var6;
                var6 = {};
                var7 = global;
                var7 = var7.HermesInternal;
                var8 = var7.concat;
                var7 = 'Bearer ';
                var7 = var8.bind(var7)(var9);
                var6.Authorization = var7;
                var2.headers = var6;
                var2.oldFormErrors = var5;
                var5 = false;
                var2.rejectWithError = var5;
                var5 = var3.bind(var4)(var2);
                var4 = var5.then;
                var3 = function(arg0) { // Environment: var1
                    _fun98294: for (var _fun98294_ip = 0;;) switch (_fun98294_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = _closure2_slot0;
                            var1 = var4.authorization;
                            var0 = false;
                            var1.authing = var0;
                            var5 = var2.body;
                            var0 = var5.application;
                            var1 = var5.user;
                            var8 = var5.scopes;
                            var7 = var5.expires;
                            var4 = var4.application;
                            var4 = var4.id;
                            var0 = var0.id;
                            if (!(var4 === var0)) {
                                _fun98294_ip = 405;
                                continue _fun98294
                            }
                        case 73:
                            var5 = _closure1_slot8;
                            var4 = var5.getCurrentUser;
                            var4 = var4.bind(var5)();
                            var5 = null;
                            if (!(var5 != var4)) {
                                _fun98294_ip = 335;
                                continue _fun98294
                            }
                        case 98:
                            if (!var1) {
                                _fun98294_ip = 335;
                                continue _fun98294
                            }
                        case 104:
                            var4 = var4.id;
                            var1 = var1.id;
                            if (!(var4 === var1)) {
                                _fun98294_ip = 335;
                                continue _fun98294
                            }
                        case 121:
                            var6 = _closure2_slot0;
                            var4 = var6.authorization;
                            var1 = var6.authorization;
                            var11 = var1.scopes;
                            var1 = new Array(1);
                            var10 = 0;
                            var12 = var1;
                            var10 = arraySpread(var12, var11, var10);
                            var12 = var1;
                            var11 = var8;
                            var8 = arraySpread(var12, var11, var10);
                            var5 = _closure1_slot10;
                            var1[var8] = var5;
                            var5 = 1;
                            var5 = var8 + var5;
                            var4.scopes = var1;
                            var1 = var6.authorization;
                            var3 = _closure2_slot1;
                            var1.accessToken = var3;
                            var4 = var6.authorization;
                            var1 = global;
                            var1 = var1.Date;
                            var5 = var1.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var13 = var5;
                            var12 = var7;
                            var1 = new var13[var1](var12, var11);
                            var1 = var1 instanceof Object ? var1 : var5;
                            var4.expires = var1;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var1 = 20;
                            var4 = var4[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.dispatch;
                            var1 = {};
                            var7 = 'RPC_APP_AUTHENTICATED';
                            var1.type = var7;
                            var7 = var6.id;
                            var1.socketId = var7;
                            var6 = var6.application;
                            var1.application = var6;
                            var1 = var4.bind(var5)(var1);
                            var1 = {};
                            var11 = var2.body;
                            var12 = var1;
                            var2 = copyDataProperties(var12, var11);
                            var2 = 'access_token';
                            var1[var2] = var3;
                            return var1;
                        case 335:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = {};
                            var0 = _closure1_slot15;
                            var0 = var0.INVALID_TOKEN;
                            var2.errorCode = var0;
                            var0 = var3.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var11 = 'Token does not match current user';
                            var13 = var1;
                            var12 = var2;
                            var0 = new var13[var3](var12, var11, var10);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                        case 405:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = {};
                            var0 = _closure1_slot15;
                            var0 = var0.INVALID_CLIENTID;
                            var2.errorCode = var0;
                            var0 = var3.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var11 = "Application does not match the connection's";
                            var13 = var1;
                            var12 = var2;
                            var0 = new var13[var3](var12, var11, var10);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = {};
                    var0 = _closure1_slot15;
                    var0 = var0.INVALID_TOKEN;
                    var2.errorCode = var0;
                    var4 = _closure2_slot1;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'Invalid access token: ';
                    var5 = var1.bind(var0)(var4);
                    var1 = var3.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var7 = var1;
                    var6 = var2;
                    var0 = new var7[var3](var6, var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var3 = var4.bind(var5)(var3, var2);
                var2 = var3.catch;
                var1 = function(arg0) { // Environment: var1
                    var0 = _closure2_slot0;
                    var1 = var0.authorization;
                    var0 = false;
                    var1.authing = var0;
                    var0 = arg0;
                    throw var0;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            case 214:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = {};
                var1 = _closure1_slot15;
                var1 = var1.INVALID_COMMAND;
                var3.errorCode = var1;
                var1 = var4.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var10 = 'Already authenticating';
                var12 = var2;
                var11 = var3;
                var1 = new var12[var4](var11, var10, var9);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 284:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var0 = _closure1_slot15;
                var0 = var0.INVALID_COMMAND;
                var2.errorCode = var0;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = 'Already authenticated';
                var12 = var1;
                var11 = var2;
                var0 = new var12[var3](var11, var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var10.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var7 = 1;
    var1 = var6[var7];
    var1 = var10.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var9 = 2;
    var1 = var6[var9];
    var1 = var10.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var10.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var10.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.TransportTypes;
    var _closure1_slot9 = var4;
    var4 = var1.RPC_AUTHENTICATED_SCOPE;
    var _closure1_slot10 = var4;
    var1 = var1.RPC_PRIVATE_SCOPE;
    var _closure1_slot11 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.ApplicationFlags;
    var _closure1_slot12 = var4;
    var4 = var1.Endpoints;
    var _closure1_slot13 = var4;
    var4 = var1.RPCCommands;
    var _closure1_slot14 = var4;
    var1 = var1.RPCErrors;
    var _closure1_slot15 = var1;
    var1 = {};
    var4 = 7;
    var4 = var6[var4];
    var8 = var10.bind(var0)(var4);
    var4 = 8;
    var4 = var6[var4];
    var4 = var10.bind(var0)(var4);
    var4 = var4.Millis;
    var4 = var4.MINUTE;
    var12 = var7 * var4;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var14 = var7;
    var13 = var9;
    var4 = new var14[var8](var13, var12, var11);
    var7 = var4 instanceof Object ? var4 : var7;
    var4 = '1273616940451102832';
    var1[var4] = var7;
    var _closure1_slot16 = var1;
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/server/commands/AuthCommandsFactory.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {};
        var1 = _closure1_slot14;
        var4 = var1.AUTHENTICATE;
        var6 = _closure1_slot0;
        var5 = _closure1_slot3;
        var2 = 21;
        var5 = var5[var2];
        var2 = undefined;
        var7 = var6.bind(var2)(var5);
        var6 = var7.createRPCCommand;
        var5 = var1.AUTHENTICATE;
        var2 = {};
        var8 = function arg0() {
            _fun98298: for (var _fun98298_ip = 0;;) switch (_fun98298_ip) {
                case 0:
                    var0 = arg0;
                    var6 = var0.socket;
                    var _closure3_slot0 = var6;
                    var1 = var0.signal;
                    var _closure3_slot1 = var1;
                    var0 = var0.args;
                    var5 = var0.access_token;
                    var3 = undefined;
                    var _closure3_slot2 = var3;
                    var _closure3_slot3 = var3;
                    var _closure3_slot4 = var3;
                    var4 = null;
                    if (!(var4 == var5)) {
                        _fun98298_ip = 80;
                        continue _fun98298
                    }
                case 57:
                    var7 = var6.transport;
                    var1 = _closure1_slot9;
                    var1 = var1.IPC;
                    if (!(var7 !== var1)) {
                        _fun98298_ip = 170;
                        continue _fun98298
                    }
                case 80:
                    if (!(var4 != var5)) {
                        _fun98298_ip = 99;
                        continue _fun98298
                    }
                case 84:
                    var1 = _closure1_slot19;
                    var1 = var1.bind(var3)(var6, var5);
                    return var1;
                case 99:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var5 = 10;
                    var5 = var8[var5];
                    var8 = var7.bind(var3)(var5);
                    var7 = {};
                    var1 = _closure1_slot15;
                    var1 = var1.INVALID_TOKEN;
                    var7.errorCode = var1;
                    var1 = var8.prototype;
                    var5 = Object.create(var1, {
                        constructor: {
                            value: var8
                        }
                    });
                    var15 = 'No access token provided';
                    var17 = var5;
                    var16 = var7;
                    var1 = new var17[var8](var16, var15, var14);
                    var1 = var1 instanceof Object ? var1 : var5;
                    throw var1;
                case 170:
                    var1 = var6.application;
                    var7 = var1.id;
                    _closure3_slot2 = var7;
                    if (!(var4 != var7)) {
                        _fun98298_ip = 423;
                        continue _fun98298
                    }
                case 191:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 22;
                    var1 = var5[var1];
                    var1 = var8.bind(var3)(var1);
                    var1 = var1.OAuth2Scopes;
                    var13 = var1.IDENTIFY;
                    _closure3_slot3 = var13;
                    var1 = function() {
                        var4 = _closure1_slot17;
                        var3 = {};
                        var1 = _closure3_slot2;
                        var3.client_id = var1;
                        var1 = _closure3_slot3;
                        var3.scope = var1;
                        var1 = 'token';
                        var3.response_type = var1;
                        var0 = _closure3_slot1;
                        var3.signal = var0;
                        var0 = false;
                        var3.isSocketRpcPrivateScope = var0;
                        var2 = _closure2_slot0;
                        var1 = _closure2_slot1;
                        var0 = undefined;
                        var2 = var4.bind(var0)(var3, var2, var1);
                        var1 = var2.then;
                        var0 = function(arg0) { // Environment: var0
                            _fun98300: for (var _fun98300_ip = 0;;) switch (_fun98300_ip) {
                                case 0:
                                    var3 = arg0;
                                    var1 = null;
                                    if (!(var1 != var3)) {
                                        _fun98300_ip = 394;
                                        continue _fun98300
                                    }
                                case 12:
                                    var2 = var3.split;
                                    var0 = /#|\?/;
                                    var6 = var2.bind(var3)(var0);
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot3;
                                    var0 = 23;
                                    var0 = var3[var0];
                                    var5 = undefined;
                                    var3 = var2.bind(var5)(var0);
                                    var2 = var3.parse;
                                    var7 = var6.length;
                                    var0 = 1;
                                    var0 = var7 - var0;
                                    var0 = var6[var0];
                                    var0 = var2.bind(var3)(var0);
                                    var2 = var0.error;
                                    if (!(var1 == var2)) {
                                        _fun98300_ip = 273;
                                        continue _fun98300
                                    }
                                case 100:
                                    var6 = _closure3_slot2;
                                    var12 = var0.access_token;
                                    var10 = var0.scope;
                                    var11 = var0.expires_in;
                                    var7 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var9 = 9;
                                    var3 = var3[var9];
                                    var3 = var7.bind(var5)(var3);
                                    var7 = var3.Storage;
                                    var3 = var7.get;
                                    var8 = 'CachedTokens';
                                    var7 = var3.bind(var7)(var8);
                                    if (!(var1 == var7)) {
                                        _fun98300_ip = 175;
                                        continue _fun98300
                                    }
                                case 173:
                                    var7 = {};
                                case 175:
                                    var3 = {};
                                    var3.accessToken = var12;
                                    var3.scope = var10;
                                    var10 = global;
                                    var12 = var10.Date;
                                    var10 = var12.now;
                                    var10 = var10.bind(var12)();
                                    var10 = var10 + var11;
                                    var3.expires = var10;
                                    var7[var6] = var3;
                                    var6 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var3 = var3[var9];
                                    var3 = var6.bind(var5)(var3);
                                    var6 = var3.Storage;
                                    var3 = var6.set;
                                    var3 = var3.bind(var6)(var8, var7);
                                    var6 = _closure1_slot19;
                                    var3 = _closure3_slot0;
                                    var2 = var0.access_token;
                                    var2 = var6.bind(var5)(var3, var2);
                                    return var2;
                                case 273:
                                    var3 = _closure1_slot1;
                                    var6 = _closure1_slot3;
                                    var2 = 10;
                                    var2 = var6[var2];
                                    var3 = var3.bind(var5)(var2);
                                    var2 = {};
                                    var4 = _closure1_slot15;
                                    var4 = var4.OAUTH2_ERROR;
                                    var2.errorCode = var4;
                                    var6 = var0.error;
                                    var0 = var0.error_description;
                                    var1 = var1 != var0;
                                    var5 = 'unknown error';
                                    if (!var1) {
                                        _fun98300_ip = 337;
                                        continue _fun98300
                                    }
                                case 334:
                                    var5 = var0;
                                case 337:
                                    var0 = global;
                                    var0 = var0.HermesInternal;
                                    var4 = var0.concat;
                                    var1 = 'OAuth2 Error: ';
                                    var0 = ': ';
                                    var14 = var4.bind(var1)(var6, var0, var5);
                                    var1 = var3.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var16 = var1;
                                    var15 = var2;
                                    var0 = new var16[var3](var15, var14, var13);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                                case 394:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot3;
                                    var1 = 10;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var3 = var3.bind(var1)(var2);
                                    var2 = {};
                                    var0 = _closure1_slot15;
                                    var0 = var0.UNKNOWN_ERROR;
                                    var2.errorCode = var0;
                                    var0 = var3.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var14 = 'Unknown error occurred';
                                    var16 = var1;
                                    var15 = var2;
                                    var0 = new var16[var3](var15, var14, var13);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    _closure3_slot4 = var1;
                    var11 = 9;
                    var5 = var5[var11];
                    var5 = var8.bind(var3)(var5);
                    var8 = var5.Storage;
                    var5 = var8.get;
                    var10 = 'CachedTokens';
                    var9 = var5.bind(var8)(var10);
                    var8 = var4 != var9;
                    var5 = undefined;
                    if (!var8) {
                        _fun98298_ip = 383;
                        continue _fun98298
                    }
                case 281:
                    var8 = var9[var7];
                    var8 = var4 != var8;
                    var5 = undefined;
                    if (!var8) {
                        _fun98298_ip = 383;
                        continue _fun98298
                    }
                case 294:
                    var8 = var9[var7];
                    var12 = var8.scope;
                    if (!(var12 === var13)) {
                        _fun98298_ip = 343;
                        continue _fun98298
                    }
                case 308:
                    var13 = var8.expires;
                    var12 = global;
                    var14 = var12.Date;
                    var12 = var14.now;
                    var12 = var12.bind(var14)();
                    if (!(!(var13 <= var12))) {
                        _fun98298_ip = 343;
                        continue _fun98298
                    }
                case 335:
                    var5 = var8.accessToken;
                    _fun98298_ip = 383;
                    continue _fun98298;
                case 343:
                    var7 = delete var9[var7];
                    var8 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var7 = var7[var11];
                    var7 = var8.bind(var3)(var7);
                    var8 = var7.Storage;
                    var7 = var8.set;
                    var7 = var7.bind(var8)(var10, var9);
                    var5 = undefined;
                case 383:
                    if (!(var4 == var5)) {
                        _fun98298_ip = 393;
                        continue _fun98298
                    }
                case 387:
                    var1 = var1.bind(var3)();
                    _fun98298_ip = 421;
                    continue _fun98298;
                case 393:
                    var4 = _closure1_slot19;
                    var5 = var4.bind(var3)(var6, var5);
                    var4 = var5.catch;
                    var2 = function() { // Environment: var2
                        _fun98301: for (var _fun98301_ip = 0;;) switch (_fun98301_ip) {
                            case 0:
                                var3 = _closure3_slot2;
                                var5 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var6 = 9;
                                var4 = var1[var6];
                                var1 = undefined;
                                var4 = var5.bind(var1)(var4);
                                var7 = var4.Storage;
                                var4 = var7.get;
                                var5 = 'CachedTokens';
                                var4 = var4.bind(var7)(var5);
                                var7 = null;
                                if (!(var7 == var4)) {
                                    _fun98301_ip = 62;
                                    continue _fun98301
                                }
                            case 60:
                                var4 = {};
                            case 62:
                                var3 = delete var4[var3];
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var2 = var2[var6];
                                var2 = var3.bind(var1)(var2);
                                var3 = var2.Storage;
                                var2 = var3.set;
                                var2 = var2.bind(var3)(var5, var4);
                                var0 = _closure3_slot4;
                                var0 = var0.bind(var1)();
                                return var0;
                        }
                    };
                    var1 = var4.bind(var5)(var2);
                case 421:
                    return var1;
                case 423:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 10;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = {};
                    var0 = _closure1_slot15;
                    var0 = var0.INVALID_COMMAND;
                    var2.errorCode = var0;
                    var0 = var3.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var3
                        }
                    });
                    var15 = 'No application.';
                    var17 = var1;
                    var16 = var2;
                    var0 = new var17[var3](var16, var15, var14);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var2.handler = var8;
        var2 = var6.bind(var7)(var5, var2);
        var0[var4] = var2;
        var2 = var1.AUTHORIZE;
        var1 = {};
        var3 = function arg0() {
            _fun98302: for (var _fun98302_ip = 0;;) switch (_fun98302_ip) {
                case 0:
                    var2 = arg0;
                    var0 = var2.socket;
                    var _closure3_slot0 = var0;
                    var7 = var2.signal;
                    var2 = var2.args;
                    var3 = undefined;
                    var _closure3_slot1 = var3;
                    var8 = var2.client_id;
                    if (var8) {
                        _fun98302_ip = 113;
                        continue _fun98302
                    }
                case 42:
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var5 = 10;
                    var5 = var9[var5];
                    var9 = var6.bind(var3)(var5);
                    var6 = {};
                    var4 = _closure1_slot15;
                    var4 = var4.INVALID_CLIENTID;
                    var6.errorCode = var4;
                    var4 = var9.prototype;
                    var5 = Object.create(var4, {
                        constructor: {
                            value: var9
                        }
                    });
                    var12 = 'No client id provided';
                    var14 = var5;
                    var13 = var6;
                    var4 = new var14[var9](var13, var12, var11);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
                case 113:
                    var4 = var0.authorization;
                    var5 = var4.accessToken;
                    var4 = null;
                    if (!(var4 == var5)) {
                        _fun98302_ip = 589;
                        continue _fun98302
                    }
                case 134:
                    var4 = var0.authorization;
                    var4 = var4.authing;
                    if (var4) {
                        _fun98302_ip = 518;
                        continue _fun98302
                    }
                case 152:
                    var5 = var0.authorization;
                    var4 = true;
                    var5.authing = var4;
                    var5 = var2.response_type;
                    var4 = 'token';
                    if (!(var4 !== var5)) {
                        _fun98302_ip = 433;
                        continue _fun98302
                    }
                case 183:
                    var4 = var0.authorization;
                    var9 = var4.scopes;
                    var6 = var9.includes;
                    var4 = _closure1_slot11;
                    var4 = var6.bind(var9)(var4);
                    _closure3_slot1 = var4;
                    if (var4) {
                        _fun98302_ip = 315;
                        continue _fun98302
                    }
                case 219:
                    var6 = var0.application;
                    var6 = var6.id;
                    if (!(var6 !== var8)) {
                        _fun98302_ip = 315;
                        continue _fun98302
                    }
                case 233:
                    var8 = var0.authorization;
                    var6 = false;
                    var8.authing = var6;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var6 = 10;
                    var6 = var9[var6];
                    var10 = var8.bind(var3)(var6);
                    var9 = {};
                    var6 = _closure1_slot15;
                    var6 = var6.INVALID_CLIENTID;
                    var9.errorCode = var6;
                    var6 = var10.prototype;
                    var8 = Object.create(var6, {
                        constructor: {
                            value: var10
                        }
                    });
                    var12 = "Application does not match the connection's";
                    var14 = var8;
                    var13 = var9;
                    var6 = new var14[var10](var13, var12, var11);
                    var6 = var6 instanceof Object ? var6 : var8;
                    throw var6;
                case 315:
                    var8 = var2.scopes;
                    if (var8) {
                        _fun98302_ip = 330;
                        continue _fun98302
                    }
                case 324:
                    var8 = var2.scope;
                case 330:
                    var6 = delete var2.scopes;
                    var6 = _closure1_slot17;
                    var5 = {};
                    var13 = var5;
                    var12 = var2;
                    var2 = copyDataProperties(var13, var12);
                    var2 = 'scope';
                    var5[var2] = var8;
                    var2 = 'signal';
                    var5[var2] = var7;
                    var2 = 'isSocketRpcPrivateScope';
                    var5[var2] = var4;
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var5 = var6.bind(var3)(var5, var4, var2);
                    var4 = var5.then;
                    var2 = function(arg0) { // Environment: var1
                        _fun98303: for (var _fun98303_ip = 0;;) switch (_fun98303_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = _closure3_slot0;
                                var2 = var0.authorization;
                                var0 = false;
                                var2.authing = var0;
                                var4 = null;
                                if (!(var4 != var1)) {
                                    _fun98303_ip = 356;
                                    continue _fun98303
                                }
                            case 33:
                                var0 = global;
                                var2 = var0.URL;
                                var3 = var2.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var13 = var3;
                                var12 = var1;
                                var2 = new var13[var2](var12, var11);
                                var3 = var2 instanceof Object ? var2 : var3;
                                var7 = var3.searchParams;
                                var6 = var7.get;
                                var2 = 'code';
                                var2 = var6.bind(var7)(var2);
                                var5 = _closure3_slot1;
                                if (var5) {
                                    _fun98303_ip = 344;
                                    continue _fun98303
                                }
                            case 94:
                                var7 = var3.searchParams;
                                var6 = var7.get;
                                var5 = 'error';
                                var8 = var6.bind(var7)(var5);
                                if (!(var4 != var8)) {
                                    _fun98303_ip = 126;
                                    continue _fun98303
                                }
                            case 118:
                                var5 = '';
                                if (!(var5 === var8)) {
                                    _fun98303_ip = 211;
                                    continue _fun98303
                                }
                            case 126:
                                if (!(var4 != var2)) {
                                    _fun98303_ip = 138;
                                    continue _fun98303
                                }
                            case 130:
                                var5 = {};
                                var5.code = var2;
                                return var5;
                            case 138:
                                var9 = _closure1_slot1;
                                var7 = _closure1_slot3;
                                var6 = 10;
                                var7 = var7[var6];
                                var6 = undefined;
                                var9 = var9.bind(var6)(var7);
                                var7 = {};
                                var5 = _closure1_slot15;
                                var5 = var5.OAUTH2_ERROR;
                                var7.errorCode = var5;
                                var5 = var9.prototype;
                                var6 = Object.create(var5, {
                                    constructor: {
                                        value: var9
                                    }
                                });
                                var11 = 'OAuth2 Error: Unable to find auth code';
                                var13 = var6;
                                var12 = var7;
                                var5 = new var13[var9](var12, var11, var10);
                                var5 = var5 instanceof Object ? var5 : var6;
                                throw var5;
                            case 211:
                                var6 = var3.searchParams;
                                var5 = var6.get;
                                var3 = 'error_description';
                                var3 = var5.bind(var6)(var3);
                                var4 = var4 != var3;
                                var7 = 'unknown error';
                                if (!var4) {
                                    _fun98303_ip = 247;
                                    continue _fun98303
                                }
                            case 244:
                                var7 = var3;
                            case 247:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot3;
                                var4 = 10;
                                var5 = var5[var4];
                                var4 = undefined;
                                var5 = var6.bind(var4)(var5);
                                var4 = {};
                                var3 = _closure1_slot15;
                                var3 = var3.OAUTH2_ERROR;
                                var4.errorCode = var3;
                                var0 = var0.HermesInternal;
                                var6 = var0.concat;
                                var3 = 'OAuth2 Error: ';
                                var0 = ': ';
                                var11 = var6.bind(var3)(var8, var0, var7);
                                var3 = var5.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var13 = var3;
                                var12 = var4;
                                var0 = new var13[var5](var12, var11, var10);
                                var0 = var0 instanceof Object ? var0 : var3;
                                throw var0;
                            case 344:
                                var0 = {};
                                var0.code = var2;
                                var0.location = var1;
                                return var0;
                            case 356:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var1 = 10;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = {};
                                var0 = _closure1_slot15;
                                var0 = var0.UNKNOWN_ERROR;
                                var2.errorCode = var0;
                                var0 = var3.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var11 = 'Unknown error occurred';
                                var13 = var1;
                                var12 = var2;
                                var0 = new var13[var3](var12, var11, var10);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                        }
                    };
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.catch;
                    var1 = function(arg0) { // Environment: var1
                        var0 = _closure3_slot0;
                        var1 = var0.authorization;
                        var0 = false;
                        var1.authing = var0;
                        var0 = arg0;
                        throw var0;
                    };
                    var1 = var2.bind(var4)(var1);
                    return var1;
                case 433:
                    var1 = var0.authorization;
                    var0 = false;
                    var1.authing = var0;
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 10;
                    var1 = var4[var1];
                    var4 = var2.bind(var3)(var1);
                    var2 = {};
                    var0 = _closure1_slot15;
                    var0 = var0.INVALID_COMMAND;
                    var2.errorCode = var0;
                    var0 = var4.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var4
                        }
                    });
                    var12 = 'Authorization response_type "token" is not supported';
                    var14 = var1;
                    var13 = var2;
                    var0 = new var14[var4](var13, var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 518:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 10;
                    var1 = var4[var1];
                    var4 = var2.bind(var3)(var1);
                    var2 = {};
                    var0 = _closure1_slot15;
                    var0 = var0.INVALID_COMMAND;
                    var2.errorCode = var0;
                    var0 = var4.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var4
                        }
                    });
                    var12 = 'Already authing';
                    var14 = var1;
                    var13 = var2;
                    var0 = new var14[var4](var13, var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 589:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 10;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = {};
                    var0 = _closure1_slot15;
                    var0 = var0.INVALID_COMMAND;
                    var2.errorCode = var0;
                    var0 = var3.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var3
                        }
                    });
                    var12 = 'Already authenticated';
                    var14 = var1;
                    var13 = var2;
                    var0 = new var14[var3](var13, var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var1.handler = var3;
        var0[var2] = var1;
        return var0;
    };
    var2.default = var3;
    var2.AUTHORIZE_PROMPT_THROTTLERS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 3413, 3414, 1613, 3315, 660, 7896, 667, 587, 7889, 1384, 5312, 7930, 5311, 5309, 5315, 3055, 484, 507, 806, 12751, 3298, 1454, 2]);