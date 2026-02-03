// modules/oauth2/actions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function() {
        _fun47853: for (var _fun47853_ip = 0;;) switch (_fun47853_ip) {
            case 0:
                var1 = _closure1_slot5;
                var0 = var1.getChannelId;
                var3 = var0.bind(var1)();
                var1 = _closure1_slot4;
                var0 = var1.getBasicChannel;
                var4 = var0.bind(var1)(var3);
                var0 = {};
                var3 = null;
                var5 = var3 == var4;
                var7 = undefined;
                if (var5) {
                    _fun47853_ip = 50;
                    continue _fun47853
                }
            case 45:
                var7 = var4.guild_id;
            case 50:
                var8 = var3 != var7;
                var5 = '10000';
                var6 = var5;
                if (!var8) {
                    _fun47853_ip = 69;
                    continue _fun47853
                }
            case 66:
                var6 = var7;
            case 69:
                var0.guild_id = var6;
                var7 = var3 == var4;
                var6 = undefined;
                if (var7) {
                    _fun47853_ip = 87;
                    continue _fun47853
                }
            case 82:
                var6 = var4.id;
            case 87:
                var7 = var3 != var6;
                if (!var7) {
                    _fun47853_ip = 97;
                    continue _fun47853
                }
            case 94:
                var5 = var6;
            case 97:
                var0.channel_id = var5;
                var5 = var3 == var4;
                var1 = undefined;
                if (var5) {
                    _fun47853_ip = 115;
                    continue _fun47853
                }
            case 110:
                var1 = var4.type;
            case 115:
                if (!(var3 == var1)) {
                    _fun47853_ip = 129;
                    continue _fun47853
                }
            case 119:
                var2 = _closure1_slot6;
                var1 = var2.UNKNOWN;
            case 129:
                var0.channel_type = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun47856: for (var _fun47856_ip = 0;;) switch (_fun47856_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47856_ip = 385;
                            continue _fun47856
                        }
                    case 13:
                        var11 = var1.authorize;
                        var21 = var1.clientId;
                        var18 = var1.scopes;
                        var20 = var1.responseType;
                        var19 = var1.redirectUri;
                        var17 = var1.codeChallenge;
                        var16 = var1.codeChallengeMethod;
                        var15 = var1.state;
                        var12 = var1.permissions;
                        var13 = var1.guildId;
                        var14 = var1.channelId;
                        var10 = var1.integrationType;
                        var9 = var1.nonce;
                        var8 = var1.dmSettings;
                        var7 = undefined;
                        SaveGenerator(address = 100);
                    case 98:
                        return var7;
                    case 100:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47856_ip = 382;
                            continue _fun47856
                        }
                    case 109:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 4;
                        var2 = var4[var2];
                        var2 = var3.bind(var7)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.post;
                        var2 = {};
                        var5 = _closure1_slot7;
                        var5 = var5.OAUTH2_AUTHORIZE;
                        var2.url = var5;
                        var5 = {};
                        var5.client_id = var21;
                        var5.response_type = var20;
                        var5.redirect_uri = var19;
                        var5.code_challenge = var17;
                        var5.code_challenge_method = var16;
                        var17 = var18.join;
                        var16 = ' ';
                        var16 = var17.bind(var18)(var16);
                        var5.scope = var16;
                        var5.state = var15;
                        var5.nonce = var9;
                        var2.query = var5;
                        var5 = {};
                        var5.guild_id = var13;
                        var9 = null;
                        var16 = var9 != var13;
                        var15 = undefined;
                        if (!var16) {
                            _fun47856_ip = 250;
                            continue _fun47856
                        }
                    case 238:
                        var16 = var9 != var14;
                        var15 = undefined;
                        if (!var16) {
                            _fun47856_ip = 250;
                            continue _fun47856
                        }
                    case 247:
                        var15 = var14;
                    case 250:
                        var5.webhook_channel_id = var15;
                        var15 = var9 == var13;
                        var13 = undefined;
                        if (!var15) {
                            _fun47856_ip = 276;
                            continue _fun47856
                        }
                    case 264:
                        var15 = var9 != var14;
                        var13 = undefined;
                        if (!var15) {
                            _fun47856_ip = 276;
                            continue _fun47856
                        }
                    case 273:
                        var13 = var14;
                    case 276:
                        var5.channel_id = var13;
                        var5.permissions = var12;
                        var5.authorize = var11;
                        var5.integration_type = var10;
                        var6 = _closure1_slot8;
                        var6 = var6.bind(var7)();
                        var5.location_context = var6;
                        var6 = {};
                        var9 = var9 == var8;
                        var7 = undefined;
                        if (var9) {
                            _fun47856_ip = 327;
                            continue _fun47856
                        }
                    case 321:
                        var7 = var8.allowMobilePush;
                    case 327:
                        var6.allow_mobile_push = var7;
                        var5.dm_settings = var6;
                        var2.body = var5;
                        var5 = true;
                        var2.oldFormErrors = var5;
                        var5 = false;
                        var2.rejectWithError = var5;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 365);
                    case 363:
                        return var2;
                    case 365:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun47856_ip = 379;
                            continue _fun47856
                        }
                    case 371:
                        var3 = var2.body;
                        return var3;
                    case 379:
                        return var2;
                    case 382:
                        return var1;
                    case 385:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun47859: for (var _fun47859_ip = 0;;) switch (_fun47859_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47859_ip = 253;
                            continue _fun47859
                        }
                    case 13:
                        var15 = var1.clientId;
                        var12 = var1.scopes;
                        var14 = var1.responseType;
                        var13 = var1.redirectUri;
                        var11 = var1.codeChallenge;
                        var10 = var1.codeChallengeMethod;
                        var9 = var1.state;
                        var8 = var1.integrationType;
                        var7 = var1.nonce;
                        var5 = var1.signal;
                        var4 = undefined;
                        SaveGenerator(address = 78);
                    case 76:
                        return var4;
                    case 78:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47859_ip = 250;
                            continue _fun47859
                        }
                    case 87:
                        var3 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var2 = 4;
                        var2 = var16[var2];
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.get;
                        var2 = {
                            'url': null,
                            'query': null,
                            'signal': null,
                            'retries': 3,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var6 = _closure1_slot7;
                        var6 = var6.OAUTH2_AUTHORIZE;
                        var2.url = var6;
                        var6 = {};
                        var6.client_id = var15;
                        var6.response_type = var14;
                        var6.redirect_uri = var13;
                        var6.code_challenge = var11;
                        var6.code_challenge_method = var10;
                        var11 = var12.join;
                        var10 = ' ';
                        var10 = var11.bind(var12)(var10);
                        var6.scope = var10;
                        var6.state = var9;
                        var6.integration_type = var8;
                        var6.nonce = var7;
                        var2.query = var6;
                        var2.signal = var5;
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 233);
                    case 231:
                        return var2;
                    case 233:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun47859_ip = 247;
                            continue _fun47859
                        }
                    case 239:
                        var3 = var2.body;
                        return var3;
                    case 247:
                        return var2;
                    case 250:
                        return var1;
                    case 253:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2, arg3, arg4) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3, arg4) { // Original name: ?anon_0_, environment: var0
                _fun47862: for (var _fun47862_ip = 0;;) switch (_fun47862_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun47862_ip = 159;
                            continue _fun47862
                        }
                    case 13:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.get;
                        var1 = {};
                        var5 = _closure1_slot7;
                        var5 = var5.OAUTH2_AUTHORIZE_SAMSUNG;
                        var1.url = var5;
                        var5 = {};
                        var6 = arg0;
                        var5.client_id = var6;
                        var6 = arg4;
                        var5.state = var6;
                        var6 = arg2;
                        var5.response_type = var6;
                        var6 = arg3;
                        var5.redirect_uri = var6;
                        var6 = 'consent';
                        var5.prompt = var6;
                        var7 = var8.join;
                        var6 = ' ';
                        var6 = var7.bind(var8)(var6);
                        var5.scope = var6;
                        var1.query = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 147);
                    case 145:
                        return var1;
                    case 147:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun47862_ip = 156;
                            continue _fun47862
                        }
                    case 153:
                        return var2;
                    case 156:
                        return var1;
                    case 159:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun47865: for (var _fun47865_ip = 0;;) switch (_fun47865_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun47865_ip = 111;
                            continue _fun47865
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {};
                        var4 = _closure1_slot7;
                        var4 = var4.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS;
                        var1.url = var4;
                        var4 = {};
                        var5 = arg0;
                        var4.guild_id = var5;
                        var1.query = var4;
                        var4 = true;
                        var1.oldFormErrors = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 94);
                    case 92:
                        return var1;
                    case 94:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47865_ip = 108;
                            continue _fun47865
                        }
                    case 100:
                        var2 = var1.body;
                        return var2;
                    case 108:
                        return var1;
                    case 111:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun47868: for (var _fun47868_ip = 0;;) switch (_fun47868_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun47868_ip = 100;
                            continue _fun47868
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot7;
                        var4 = var4.OAUTH2_DEVICE_VERIFY;
                        var1.url = var4;
                        var4 = {};
                        var5 = arg0;
                        var4.user_code = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 88);
                    case 86:
                        return var1;
                    case 88:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47868_ip = 97;
                            continue _fun47868
                        }
                    case 94:
                        return var1;
                    case 97:
                        return var1;
                    case 100:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun47871: for (var _fun47871_ip = 0;;) switch (_fun47871_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun47871_ip = 108;
                            continue _fun47871
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot7;
                        var4 = var4.OAUTH2_DEVICE_FINISH;
                        var1.url = var4;
                        var4 = {};
                        var5 = arg0;
                        var4.user_code = var5;
                        var5 = arg1;
                        var4.result = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 96);
                    case 94:
                        return var1;
                    case 96:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47871_ip = 105;
                            continue _fun47871
                        }
                    case 102:
                        return var1;
                    case 105:
                        return var1;
                    case 108:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun47874: for (var _fun47874_ip = 0;;) switch (_fun47874_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun47874_ip = 132;
                            continue _fun47874
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot7;
                        var4 = var4.OAUTH2_DEVICE_FINISH;
                        var1.url = var4;
                        var4 = {};
                        var5 = arg0;
                        var4.user_code = var5;
                        var5 = 'two_way_link_error';
                        var4.result = var5;
                        var5 = arg1;
                        var4.error_code = var5;
                        var5 = arg2;
                        var4.error_source = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 120);
                    case 118:
                        return var1;
                    case 120:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun47874_ip = 129;
                            continue _fun47874
                        }
                    case 126:
                        return var1;
                    case 129:
                        return var1;
                    case 132:
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
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot6 = var7;
    var4 = var4.Endpoints;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/actions.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getLocationContextServer = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot7;
        var3 = var3.OAUTH2_WHITELIST_ACCEPT;
        var0.url = var3;
        var3 = {};
        var4 = arg0;
        var3.token = var4;
        var0.query = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.acceptWhitelist = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.authorize = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchAuthorization = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.startSamsungAuthorization = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchChannels = var3;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 5;
        var3 = var6[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.logout;
        var5 = _closure1_slot0;
        var2 = 6;
        var2 = var6[var2];
        var6 = var5.bind(var0)(var2);
        var5 = var6.getLoginPath;
        var2 = var1.pathname;
        var1 = var1.search;
        var2 = var2 + var1;
        var1 = false;
        var2 = var5.bind(var6)(var2, var1);
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.logoutWithRedirect = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot13;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.verifyUserCode = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.finishUserCode = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot15;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.finishUserCodeTwoWayLinkError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1372, 1670, 660, 507, 4557, 485, 2]);