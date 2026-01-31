// modules/oauth2/Authorize.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var6 = var3.EMPTY_NUX_SERVER;
    var _closure1_slot5 = var6;
    var6 = var3.FAVORITES;
    var _closure1_slot6 = var6;
    var3 = var3.ME;
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/oauth2/Authorize.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun28661: for (var _fun28661_ip = 0;;) switch (_fun28661_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.RemovedScopes;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var3 = var0.includes;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 4;
                var2 = var2[var5];
                var4 = undefined;
                var2 = var6.bind(var4)(var2);
                var2 = var2.OAuth2Scopes;
                var2 = var2.BOT;
                var2 = var3.bind(var0)(var2);
                if (!var2) {
                    _fun28661_ip = 112;
                    continue _fun28661
                }
            case 70:
                var6 = var0.includes;
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var3 = var7.bind(var4)(var3);
                var3 = var3.OAuth2Scopes;
                var3 = var3.APPLICATIONS_COMMANDS;
                var3 = var6.bind(var0)(var3);
                var2 = !var3;
            case 112:
                if (!var2) {
                    _fun28661_ip = 154;
                    continue _fun28661
                }
            case 115:
                var2 = var0.push;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.OAuth2Scopes;
                var1 = var1.APPLICATIONS_COMMANDS;
                var1 = var2.bind(var0)(var1);
            case 154:
                return var0;
        }
    };
    var2.filterScopes = var3;
    var1 = function arg0() {
        _fun28663: for (var _fun28663_ip = 0;;) switch (_fun28663_ip) {
            case 0:
                var5 = undefined;
                var10 = undefined;
                var11 = undefined;
                var12 = undefined;
                var9 = undefined;
                var2 = undefined;
                var1 = undefined;
                var7 = undefined;
                var6 = undefined;
                var4 = undefined;
                var3 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 5;
                var0 = var13[var0];
                var15 = var3.bind(var5)(var0);
                var14 = var15.parse;
                var3 = {};
                var0 = 'bracket';
                var3.arrayFormat = var0;
                var0 = arg0;
                var1 = var14.bind(var15)(var0, var3);
                var3 = _closure1_slot1;
                var0 = 6;
                var0 = var13[var0];
                var0 = var3.bind(var5)(var0);
                var7 = var0.NONE;
            case 93: // try_start_0
                var3 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 7;
                var0 = var13[var0];
                var13 = var3.bind(var5)(var0);
                var3 = var13.deserialize;
                var0 = var1;
                var14 = var0.permissions;
                var0 = null;
                var14 = var0 != var14;
                var16 = '0';
                var0 = var16;
                if (!var14) {
                    _fun28663_ip = 175;
                    continue _fun28663
                }
            case 146:
                var14 = var1;
                var15 = var14.permissions;
                var14 = '';
                var0 = var16;
                if (!(var14 !== var15)) {
                    _fun28663_ip = 175;
                    continue _fun28663
                }
            case 166:
                var14 = var1;
                var0 = var14.permissions;
            case 175:
                var7 = var3.bind(var13)(var0);
            case 180: // try_end0
                _fun28663_ip = 184;
                continue _fun28663;
            case 182: // catch_target0
                CatchBlockStart(arg_register = 0);
            case 184:
                var0 = var1;
                var6 = var0.channel_id;
                var0 = var0.guild_id;
                var11 = var0;
                var3 = null;
                if (!(var3 == var0)) {
                    _fun28663_ip = 242;
                    continue _fun28663
                }
            case 206:
                var14 = _closure1_slot3;
                var13 = var14.getChannel;
                var0 = var6;
                var0 = var13.bind(var14)(var0);
                var12 = var0;
                var13 = var3 == var0;
                var0 = undefined;
                if (var13) {
                    _fun28663_ip = 240;
                    continue _fun28663
                }
            case 235:
                var0 = var12.guild_id;
            case 240:
                _fun28663_ip = 245;
                continue _fun28663;
            case 242:
                var0 = var11;
            case 245:
                var10 = var0;
                if (!(var3 == var0)) {
                    _fun28663_ip = 268;
                    continue _fun28663
                }
            case 252:
                var11 = _closure1_slot4;
                var0 = var11.getGuildId;
                var0 = var0.bind(var11)();
                _fun28663_ip = 271;
                continue _fun28663;
            case 268:
                var0 = var10;
            case 271:
                var11 = _closure1_slot7;
                var10 = new Array(3);
                var10[0] = var11;
                var11 = _closure1_slot6;
                var10[1] = var11;
                var8 = _closure1_slot5;
                var10[2] = var8;
                var8 = var10.includes;
                var8 = var8.bind(var10)(var0);
                var10 = var0;
                var0 = undefined;
                if (var8) {
                    _fun28663_ip = 332;
                    continue _fun28663
                }
            case 317:
                var11 = var3 != var10;
                var8 = undefined;
                if (!var11) {
                    _fun28663_ip = 329;
                    continue _fun28663
                }
            case 326:
                var8 = var10;
            case 329:
                var0 = var8;
            case 332:
                var4 = var0;
                var0 = {};
                var8 = var1;
                var8 = var8.client_id;
                var9 = var8;
                var11 = var3 != var8;
                var10 = '';
                var8 = var10;
                if (!var11) {
                    _fun28663_ip = 366;
                    continue _fun28663
                }
            case 363:
                var8 = var9;
            case 366:
                var0.clientId = var8;
                var8 = var1;
                var8 = var8.scope;
                var2 = var8;
                var8 = var3 != var8;
                if (!var8) {
                    _fun28663_ip = 393;
                    continue _fun28663
                }
            case 390:
                var10 = var2;
            case 393:
                var8 = var10.replace;
                var2 = /\+/g;
                var9 = ' ';
                var8 = var8.bind(var10)(var2, var9);
                var2 = var8.split;
                var9 = var2.bind(var8)(var9);
                var8 = var9.filter;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var2 = var8.bind(var9)(var2);
                var0.scopes = var2;
                var2 = var1;
                var8 = var2.response_type;
                var0.responseType = var8;
                var8 = var2.redirect_uri;
                var0.redirectUri = var8;
                var8 = var2.code_challenge;
                var0.codeChallenge = var8;
                var8 = var2.code_challenge_method;
                var0.codeChallengeMethod = var8;
                var8 = var2.state;
                var0.state = var8;
                var0.permissions = var7;
                var0.channelId = var6;
                var0.guildId = var4;
                var4 = var2.prompt;
                var0.prompt = var4;
                var6 = var2.disable_guild_select;
                var4 = 'true';
                var4 = var4 === var6;
                var0.disableGuildSelect = var4;
                var2 = var2.integration_type;
                var3 = var3 == var2;
                var2 = undefined;
                if (var3) {
                    _fun28663_ip = 592;
                    continue _fun28663
                }
            case 570:
                var3 = global;
                var4 = var3.Number;
                var3 = var1;
                var3 = var3.integration_type;
                var2 = var4.bind(var5)(var3);
            case 592:
                var0.integrationType = var2;
                var1 = var1.nonce;
                var0.nonce = var1;
                return var0;
        }
    };
    var2.parseOAuth2AuthorizeProps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3172, 660, 3297, 3298, 3299, 3055, 484, 2]);