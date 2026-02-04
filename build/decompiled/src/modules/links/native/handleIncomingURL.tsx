// modules/links/native/handleIncomingURL.tsx
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
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun117972: for (var _fun117972_ip = 0;;) switch (_fun117972_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun117972_ip = 1630;
                            continue _fun117972
                        }
                    case 15:
                        var8 = var2;
                        var3 = undefined;
                        var1 = undefined;
                        var13 = undefined;
                        var7 = undefined;
                        var _closure4_slot0 = var3;
                        var _closure4_slot1 = var3;
                        var16 = var2.url;
                        var1 = var16;
                        var15 = var2.source;
                        var13 = var15;
                        var10 = _closure1_slot8;
                        var9 = var10.log;
                        var4 = global;
                        var6 = var4.HermesInternal;
                        var14 = var6.concat;
                        var27 = 'Opening url: ';
                        var25 = ' [';
                        var23 = ']';
                        var26 = var16;
                        var24 = var15;
                        var6 = var27[var14](var26, var25, var24, var23, var22);
                        var6 = var9.bind(var10)(var6);
                        var9 = _closure1_slot4;
                        var6 = var9.getState;
                        var9 = var6.bind(var9)();
                        var6 = _closure1_slot5;
                        var6 = var6.ACTIVE;
                        if (!(var9 !== var6)) {
                            _fun117972_ip = 187;
                            continue _fun117972
                        }
                    case 134:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 4;
                        var6 = var10[var6];
                        var10 = var9.bind(var3)(var6);
                        var9 = var10.trackAppOpened;
                        var11 = var1;
                        var6 = null;
                        var11 = var6 == var11;
                        var6 = 'deeplink';
                        if (!var11) {
                            _fun117972_ip = 182;
                            continue _fun117972
                        }
                    case 176:
                        var6 = 'launcher';
                    case 182:
                        var6 = var9.bind(var10)(var6);
                    case 187:
                        var6 = var1;
                        var12 = null;
                        if (!(var12 != var6)) {
                            _fun117972_ip = 1532;
                            continue _fun117972
                        }
                    case 199:
                        var10 = var1;
                        var9 = var10.startsWith;
                        var6 = 'discord://app/open';
                        var6 = var9.bind(var10)(var6);
                        if (!var6) {
                            _fun117972_ip = 533;
                            continue _fun117972
                        }
                    case 225:
                        var10 = var1;
                        var9 = var10.indexOf;
                        var6 = '#';
                        var11 = var9.bind(var10)(var6);
                        var6 = -1;
                        if (!(var6 === var11)) {
                            _fun117972_ip = 289;
                            continue _fun117972
                        }
                    case 253:
                        var14 = _closure1_slot8;
                        var10 = var14.warn;
                        var9 = {};
                        var6 = var1;
                        var9.originalUrl = var6;
                        var6 = 'No hash mark found in AppsFlyer legacy URL';
                        var6 = var10.bind(var14)(var6, var9);
                        _fun117972_ip = 533;
                        continue _fun117972;
                    case 289:
                        var10 = var1;
                        var9 = var10.substring;
                        var6 = 1;
                        var6 = var11 + var6;
                        var6 = var9.bind(var10)(var6);
                        var7 = var6;
                        var9 = '';
                        if (!(var9 !== var6)) {
                            _fun117972_ip = 1597;
                            continue _fun117972
                        }
                    case 324:
                        var10 = var7;
                        var6 = var10.trim;
                        var6 = var6.bind(var10)();
                        if (!(var9 !== var6)) {
                            _fun117972_ip = 1597;
                            continue _fun117972
                        }
                    case 344: // try_start_0
                        var10 = var4.URL;
                        var26 = var7;
                        var9 = var10.prototype;
                        var9 = Object.create(var9, {
                            constructor: {
                                value: var10
                            }
                        });
                        var27 = var9;
                        var6 = new var27[var10](var26, var25);
                        var6 = var6 instanceof Object ? var6 : var9;
                        _closure4_slot0 = var6;
                        var9 = ['campaign', 'deep_link_value', 'media_source'];
                        _closure4_slot1 = var9;
                        var10 = var6.searchParams;
                        var9 = var10.keys;
                        var25 = var9.bind(var10)();
                        var11 = new Array(0);
                        var24 = 0;
                        var26 = var11;
                        var9 = arraySpread(var26, var25, var24);
                        var10 = var11.filter;
                        var9 = function(arg0) { // Environment: var5
                            _fun117973: for (var _fun117973_ip = 0;;) switch (_fun117973_ip) {
                                case 0:
                                    var3 = arg0;
                                    var1 = var3.startsWith;
                                    var0 = 'af_';
                                    var0 = var1.bind(var3)(var0);
                                    if (var0) {
                                        _fun117973_ip = 40;
                                        continue _fun117973
                                    }
                                case 23:
                                    var2 = _closure4_slot1;
                                    var1 = var2.includes;
                                    var0 = var1.bind(var2)(var3);
                                case 40:
                                    return var0;
                            }
                        };
                        var10 = var10.bind(var11)(var9);
                        var9 = var10.forEach;
                        var5 = function(arg0) { // Environment: var5
                            var0 = _closure4_slot0;
                            var2 = var0.searchParams;
                            var1 = var2.delete;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var5 = var9.bind(var10)(var5);
                        var5 = var6.toString;
                        var11 = var5.bind(var6)();
                        var1 = var11;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 5;
                        var5 = var9[var5];
                        var5 = var6.bind(var3)(var5);
                        var5 = var5.DeeplinkSource;
                        var13 = var5.AppsFlyer;
                        var9 = _closure1_slot8;
                        var6 = var9.log;
                        var5 = var4.HermesInternal;
                        var10 = var5.concat;
                        var5 = 'Extracted clean URL from AppsFlyer legacy URL: ';
                        var5 = var10.bind(var5)(var11);
                        var5 = var6.bind(var9)(var5);
                    case 533: // try_end0
                        var9 = var1;
                        var6 = var9.startsWith;
                        var5 = 'discordwidget:///';
                        var5 = var6.bind(var9)(var5);
                        if (var5) {
                            _fun117972_ip = 1126;
                            continue _fun117972
                        }
                    case 559:
                        var9 = var4.URL;
                        var26 = var1;
                        var6 = var9.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var9
                            }
                        });
                        var27 = var6;
                        var5 = new var27[var9](var26, var25);
                        var5 = var5 instanceof Object ? var5 : var6;
                        var6 = var5.hostname;
                        var5 = 'l.discord.com';
                        if (!(var5 === var6)) {
                            _fun117972_ip = 683;
                            continue _fun117972
                        }
                    case 604:
                        var6 = var4.fetch;
                        var5 = var1;
                        var4 = {
                            'method': 'HEAD',
                            'redirect': 'follow'
                        };
                        var4 = var6.bind(var3)(var5, var4);
                        SaveGenerator(address = 637);
                    case 635:
                        return var4;
                    case 637:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun117972_ip = 1123;
                            continue _fun117972
                        }
                    case 646:
                        var1 = var4.url;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 5;
                        var5 = var9[var5];
                        var5 = var6.bind(var3)(var5);
                        var5 = var5.DeeplinkSource;
                        var13 = var5.Iterable;
                    case 683:
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 7;
                        var5 = var9[var5];
                        var9 = var6.bind(var3)(var5);
                        var6 = var1;
                        var5 = true;
                        var11 = var9.bind(var3)(var6, var5);
                        var16 = var11.fingerprint;
                        var14 = var11.attemptId;
                        var9 = var11.payload;
                        var10 = _closure1_slot8;
                        var6 = var10.log;
                        var5 = 'Parsed url as: ';
                        var5 = var6.bind(var10)(var5, var11);
                        var21 = var9.inviteCode;
                        var15 = var9.guildTemplateCode;
                        var17 = var9.authToken;
                        var5 = var12 == var16;
                        if (!var5) {
                            _fun117972_ip = 784;
                            continue _fun117972
                        }
                    case 780:
                        var5 = var12 == var14;
                    case 784:
                        if (!var5) {
                            _fun117972_ip = 791;
                            continue _fun117972
                        }
                    case 787:
                        var5 = var12 == var21;
                    case 791:
                        if (!var5) {
                            _fun117972_ip = 798;
                            continue _fun117972
                        }
                    case 794:
                        var5 = var12 == var15;
                    case 798:
                        if (!var5) {
                            _fun117972_ip = 805;
                            continue _fun117972
                        }
                    case 801:
                        var5 = var12 == var17;
                    case 805:
                        if (!var5) {
                            _fun117972_ip = 815;
                            continue _fun117972
                        }
                    case 808:
                        var6 = var13;
                        var5 = var12 == var6;
                    case 815:
                        if (var5) {
                            _fun117972_ip = 1066;
                            continue _fun117972
                        }
                    case 821:
                        var6 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var5 = 8;
                        var5 = var10[var5];
                        var11 = var6.bind(var3)(var5);
                        var10 = var11.track;
                        var5 = _closure1_slot6;
                        var6 = var5.EXTERNAL_DYNAMIC_LINK_RECEIVED;
                        var5 = {};
                        var19 = var12 != var21;
                        var18 = null;
                        if (!var19) {
                            _fun117972_ip = 898;
                            continue _fun117972
                        }
                    case 867:
                        var20 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var19 = 9;
                        var19 = var22[var19];
                        var20 = var20.bind(var3)(var19);
                        var19 = var20.parseInviteCodeFromInviteKey;
                        var18 = var19.bind(var20)(var21);
                    case 898:
                        var5.invite_code = var18;
                        var5.guild_template_code = var15;
                        var15 = var12 != var17;
                        if (!var15) {
                            _fun117972_ip = 926;
                            continue _fun117972
                        }
                    case 915:
                        var18 = var17.length;
                        var17 = 0;
                        var15 = var17 === var18;
                    case 926:
                        var5.has_auth_token = var15;
                        var17 = _closure1_slot4;
                        var15 = var17.getState;
                        var17 = var15.bind(var17)();
                        var15 = _closure1_slot5;
                        var15 = var15.BACKGROUND;
                        var15 = var17 === var15;
                        var5.is_backgrounded = var15;
                        var5.attempt_id = var14;
                        var5.deeplink_source = var13;
                        var13 = var9.type;
                        var5.link_type = var13;
                        var13 = arg1;
                        var5.is_cold_start = var13;
                        var13 = var12 != var16;
                        var12 = null;
                        if (!var13) {
                            _fun117972_ip = 1050;
                            continue _fun117972
                        }
                    case 1009:
                        var13 = {};
                        var15 = _closure1_slot0;
                        var17 = _closure1_slot2;
                        var14 = 10;
                        var14 = var17[var14];
                        var15 = var15.bind(var3)(var14);
                        var14 = var15.extractId;
                        var14 = var14.bind(var15)(var16);
                        var13.fingerprint = var14;
                        var12 = var13;
                    case 1050:
                        var26 = var5;
                        var25 = var12;
                        var12 = copyDataProperties(var26, var25);
                        var5 = var10.bind(var11)(var6, var5);
                    case 1066:
                        var6 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var5 = 11;
                        var5 = var10[var5];
                        var11 = var6.bind(var3)(var5);
                        var5 = var1;
                        var5 = var11.bind(var3)(var5);
                        var5 = 6;
                        var5 = var10[var5];
                        var6 = var6.bind(var3)(var5);
                        var5 = {};
                        var5.payload = var9;
                        var5 = var6.bind(var3)(var5);
                        _fun117972_ip = 1532;
                        continue _fun117972;
                    case 1123:
                        return var4;
                    case 1126:
                        var6 = var1;
                        var5 = var6.split;
                        var4 = 'voice/';
                        var4 = var5.bind(var6)(var4);
                        var6 = var4.length;
                        var5 = 2;
                        if (!(var5 === var6)) {
                            _fun117972_ip = 1538;
                            continue _fun117972
                        }
                    case 1160:
                        var6 = 1;
                        var10 = var4[var6];
                        var9 = var10.split;
                        var4 = '/';
                        var4 = var9.bind(var10)(var4);
                        var10 = var4.length;
                        var9 = 0;
                        if (!(var9 !== var10)) {
                            _fun117972_ip = 1535;
                            continue _fun117972
                        }
                    case 1195:
                        var11 = var4[var9];
                        var10 = 'user';
                        if (!(var10 !== var11)) {
                            _fun117972_ip = 1532;
                            continue _fun117972
                        }
                    case 1210:
                        var11 = var4[var9];
                        var10 = 'invite';
                        if (!(var10 !== var11)) {
                            _fun117972_ip = 1468;
                            continue _fun117972
                        }
                    case 1225:
                        var11 = var4[var9];
                        var10 = 'wave';
                        if (!(var10 !== var11)) {
                            _fun117972_ip = 1402;
                            continue _fun117972
                        }
                    case 1240:
                        var11 = var4[var9];
                        var10 = 'join';
                        if (!(var10 !== var11)) {
                            _fun117972_ip = 1333;
                            continue _fun117972
                        }
                    case 1252:
                        var10 = var4.length;
                        if (!(var5 === var10)) {
                            _fun117972_ip = 1532;
                            continue _fun117972
                        }
                    case 1264:
                        var13 = var4[var9];
                        var12 = var4[var6];
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var9 = 6;
                        var9 = var11[var9];
                        var10 = var10.bind(var3)(var9);
                        var9 = {};
                        var11 = {};
                        var14 = _closure1_slot7;
                        var14 = var14.CHANNEL;
                        var11.type = var14;
                        var11.guildId = var13;
                        var11.channelId = var12;
                        var9.payload = var11;
                        var9 = var10.bind(var3)(var9);
                        var9 = undefined;
                        return var9;
                    case 1333:
                        var13 = var4[var6];
                        var12 = var4[var5];
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var9 = 6;
                        var9 = var11[var9];
                        var10 = var10.bind(var3)(var9);
                        var9 = {};
                        var11 = {};
                        var14 = _closure1_slot7;
                        var14 = var14.CHANNEL;
                        var11.type = var14;
                        var11.guildId = var13;
                        var11.channelId = var12;
                        var9.payload = var11;
                        var9 = var10.bind(var3)(var9);
                        _fun117972_ip = 1532;
                        continue _fun117972;
                    case 1402:
                        var13 = var4[var6];
                        var12 = var4[var5];
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var9 = 6;
                        var9 = var11[var9];
                        var10 = var10.bind(var3)(var9);
                        var9 = {};
                        var11 = {};
                        var14 = _closure1_slot7;
                        var14 = var14.SEND_VOICE_HANGOUT_WAVE;
                        var11.type = var14;
                        var11.guildId = var13;
                        var11.channelId = var12;
                        var9.payload = var11;
                        var9 = var10.bind(var3)(var9);
                        _fun117972_ip = 1532;
                        continue _fun117972;
                    case 1468:
                        var10 = var4[var6];
                        var9 = var4[var5];
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 6;
                        var4 = var6[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = {};
                        var6 = {};
                        var11 = _closure1_slot7;
                        var11 = var11.CREATE_VOICE_INVITE;
                        var6.type = var11;
                        var6.guildId = var10;
                        var6.channelId = var9;
                        var4.payload = var6;
                        var4 = var5.bind(var3)(var4);
                    case 1532:
                        return var3;
                    case 1535:
                        return var3;
                    case 1538:
                        return var3;
                    case 1541: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var6 = _closure1_slot8;
                        var5 = var6.warn;
                        var4 = {};
                        var8 = var8.url;
                        var4.originalUrl = var8;
                        var4.extractedUrlString = var7;
                        var3 = var3.message;
                        var4.error = var3;
                        var3 = 'Failed to parse URL from AppsFlyer legacy URL';
                        var3 = var5.bind(var6)(var3, var4);
                        var3 = undefined;
                        return var3;
                    case 1597:
                        var4 = _closure1_slot8;
                        var3 = var4.warn;
                        var2 = {};
                        var2.originalUrl = var1;
                        var1 = 'Empty or whitespace-only URL fragment in AppsFlyer legacy URL';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = undefined;
                        return var1;
                    case 1630:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
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
    var3 = var4.bind(var0)(var3);
    var7 = var3.AppStates;
    var _closure1_slot5 = var7;
    var7 = var3.AnalyticEvents;
    var _closure1_slot6 = var7;
    var3 = var3.LinkingTypes;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'index.native.tsx';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot8 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/links/native/handleIncomingURL.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 5284, 660, 3, 4364, 15036, 3471, 3282, 795, 3324, 490, 15038, 2]);