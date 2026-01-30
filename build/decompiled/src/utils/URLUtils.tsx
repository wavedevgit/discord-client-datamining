// utils/URLUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var14;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var13 = function(arg0, arg1) { // Original name: isOriginalContentTypeDifferent, environment: var3
        _fun16781: for (var _fun16781_ip = 0;;) switch (_fun16781_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = null;
                var0 = var3 != var2;
                if (!var0) {
                    _fun16781_ip = 19;
                    continue _fun16781
                }
            case 15:
                var0 = var3 != var1;
            case 19:
                if (!var0) {
                    _fun16781_ip = 26;
                    continue _fun16781
                }
            case 22:
                var0 = var2 !== var1;
            case 26:
                return var0;
        }
    };
    var _closure1_slot10 = var13;
    var12 = function(arg0) { // Original name: isDiscordHostname, environment: var3
        _fun16782: for (var _fun16782_ip = 0;;) switch (_fun16782_ip) {
            case 0:
                var6 = arg0;
                var2 = arguments[1];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun16782_ip = 14;
                    continue _fun16782
                }
            case 12:
                var2 = false;
            case 14:
                var0 = null;
                var0 = var0 != var6;
                if (!var0) {
                    _fun16782_ip = 76;
                    continue _fun16782
                }
            case 23:
                var4 = _closure1_slot5;
                var1 = var4.test;
                var1 = var1.bind(var4)(var6);
                if (var1) {
                    _fun16782_ip = 73;
                    continue _fun16782
                }
            case 43:
                if (!var2) {
                    _fun16782_ip = 70;
                    continue _fun16782
                }
            case 46:
                var5 = _closure1_slot9;
                var4 = var5.has;
                var3 = var6.toLowerCase;
                var3 = var3.bind(var6)();
                var2 = var4.bind(var5)(var3);
            case 70:
                var1 = var2;
            case 73:
                var0 = var1;
            case 76:
                return var0;
        }
    };
    var _closure1_slot11 = var12;
    var11 = function(arg0) { // Original name: isDiscordProtocol, environment: var3
        _fun16783: for (var _fun16783_ip = 0;;) switch (_fun16783_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun16783_ip = 22;
                    continue _fun16783
                }
            case 12:
                var1 = 'discord:';
                var0 = var1 === var2;
            case 22:
                return var0;
        }
    };
    var _closure1_slot12 = var11;
    var8 = function(arg0) { // Original name: isDiscordDirectAssetUrl, environment: var3
        _fun16784: for (var _fun16784_ip = 0;;) switch (_fun16784_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun16784_ip = 199;
                    continue _fun16784
                }
            case 12:
                var2 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 3;
                var1 = var5[var1];
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                var1 = var2.toURLSafe;
                var3 = var1.bind(var2)(var3);
                var0 = var0 != var3;
                if (!var0) {
                    _fun16784_ip = 197;
                    continue _fun16784
                }
            case 58:
                var2 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 4;
                var1 = var6[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.isDiscordBackendDevelopment;
                var1 = var1.bind(var2)();
                var2 = !var1;
                if (var2) {
                    _fun16784_ip = 132;
                    continue _fun16784
                }
            case 94:
                var5 = var3.hostname;
                var1 = 'localhost';
                var1 = var1 !== var5;
                if (!var1) {
                    _fun16784_ip = 129;
                    continue _fun16784
                }
            case 113:
                var6 = var3.hostname;
                var5 = '127.0.0.1';
                var1 = var5 !== var6;
            case 129:
                var2 = var1;
            case 132:
                var1 = !var2;
                if (!var2) {
                    _fun16784_ip = 194;
                    continue _fun16784
                }
            case 138:
                var5 = var3.hostname;
                var2 = global;
                var2 = var2.window;
                var2 = var2.GLOBAL_ENV;
                var2 = var2.CDN_HOST;
                var2 = var5 === var2;
                if (var2) {
                    _fun16784_ip = 191;
                    continue _fun16784
                }
            case 171:
                var5 = _closure1_slot6;
                var4 = var5.test;
                var3 = var3.hostname;
                var2 = var4.bind(var5)(var3);
            case 191:
                var1 = var2;
            case 194:
                var0 = var1;
            case 197:
                return var0;
            case 199:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot13 = var8;
    var7 = function(arg0, arg1, arg2) { // Original name: isDiscordProxiedAssetUrl, environment: var3
        _fun16785: for (var _fun16785_ip = 0;;) switch (_fun16785_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot10;
                var5 = undefined;
                var1 = arg1;
                var0 = arg2;
                var0 = var2.bind(var5)(var1, var0);
                if (var0) {
                    _fun16785_ip = 31;
                    continue _fun16785
                }
            case 27:
                var0 = false;
                return var0;
            case 31:
                var0 = null;
                if (!(var0 != var4)) {
                    _fun16785_ip = 205;
                    continue _fun16785
                }
            case 40:
                var2 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 3;
                var1 = var6[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.toURLSafe;
                var2 = var1.bind(var2)(var4);
                var0 = var0 != var2;
                if (!var0) {
                    _fun16785_ip = 203;
                    continue _fun16785
                }
            case 81:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 4;
                var1 = var6[var1];
                var4 = var4.bind(var5)(var1);
                var1 = var4.isDiscordBackendDevelopment;
                var1 = var1.bind(var4)();
                var4 = !var1;
                if (var4) {
                    _fun16785_ip = 155;
                    continue _fun16785
                }
            case 117:
                var5 = var2.hostname;
                var1 = 'localhost';
                var1 = var1 !== var5;
                if (!var1) {
                    _fun16785_ip = 152;
                    continue _fun16785
                }
            case 136:
                var6 = var2.hostname;
                var5 = '127.0.0.1';
                var1 = var5 !== var6;
            case 152:
                var4 = var1;
            case 155:
                if (var4) {
                    _fun16785_ip = 174;
                    continue _fun16785
                }
            case 158:
                var5 = var2.port;
                var1 = '4000';
                var4 = var1 !== var5;
            case 174:
                var1 = !var4;
                if (!var4) {
                    _fun16785_ip = 200;
                    continue _fun16785
                }
            case 180:
                var4 = _closure1_slot7;
                var3 = var4.test;
                var2 = var2.hostname;
                var1 = var3.bind(var4)(var2);
            case 200:
                var0 = var1;
            case 203:
                return var0;
            case 205:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot14 = var7;
    var6 = function(arg0) { // Original name: isAllowedGifProviderUrl, environment: var3
        _fun16786: for (var _fun16786_ip = 0;;) switch (_fun16786_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun16786_ip = 74;
                    continue _fun16786
                }
            case 9:
                var5 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var1 = var3.toURLSafe;
                var1 = var1.bind(var3)(var4);
                var0 = var0 != var1;
                if (!var0) {
                    _fun16786_ip = 72;
                    continue _fun16786
                }
            case 52:
                var3 = _closure1_slot8;
                var2 = var3.has;
                var1 = var1.hostname;
                var0 = var2.bind(var3)(var1);
            case 72:
                return var0;
            case 74:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot15 = var6;
    var10 = function(arg0) { // Original name: isDiscordUrl, environment: var3
        _fun16787: for (var _fun16787_ip = 0;;) switch (_fun16787_ip) {
            case 0:
                var6 = arg0;
                var3 = arguments[1];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun16787_ip = 14;
                    continue _fun16787
                }
            case 12:
                var3 = false;
            case 14:
                var4 = null;
                if (!(var4 != var6)) {
                    _fun16787_ip = 86;
                    continue _fun16787
                }
            case 20:
                var5 = _closure1_slot1;
                var7 = _closure1_slot3;
                var1 = 3;
                var1 = var7[var1];
                var5 = var5.bind(var2)(var1);
                var1 = var5.toURLSafe;
                var5 = var1.bind(var5)(var6);
                var6 = var4 == var5;
                var1 = undefined;
                if (var6) {
                    _fun16787_ip = 69;
                    continue _fun16787
                }
            case 63:
                var1 = var5.hostname;
            case 69:
                if (!(var4 != var1)) {
                    _fun16787_ip = 86;
                    continue _fun16787
                }
            case 73:
                var0 = _closure1_slot11;
                var0 = var0.bind(var2)(var1, var3);
                if (var0) {
                    _fun16787_ip = 90;
                    continue _fun16787
                }
            case 86:
                var0 = false;
                return var0;
            case 90:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot16 = var10;
    var9 = function(arg0) { // Original name: isDiscordUri, environment: var3
        _fun16788: for (var _fun16788_ip = 0;;) switch (_fun16788_ip) {
            case 0:
                var5 = arg0;
                var0 = null;
                var0 = var0 != var5;
                if (!var0) {
                    _fun16788_ip = 63;
                    continue _fun16788
                }
            case 12:
                var3 = _closure1_slot12;
                var4 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 2;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var4.bind(var2)(var1);
                var1 = var4.parse;
                var1 = var1.bind(var4)(var5);
                var1 = var1.protocol;
                var0 = var3.bind(var2)(var1);
            case 63:
                return var0;
        }
    };
    var _closure1_slot17 = var9;
    var15 = global;
    var17 = var15.Object;
    var16 = var17.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var16.bind(var17)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.Routes;
    var _closure1_slot4 = var1;
    var1 = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i;
    var _closure1_slot5 = var1;
    var1 = /^.*\.discordapp\.net$/;
    var _closure1_slot6 = var1;
    var1 = /^.*\.media\.discordapp\.net$/;
    var _closure1_slot7 = var1;
    var17 = var15.Set;
    var1 = var17.prototype;
    var16 = Object.create(var1, {
        constructor: {
            value: var17
        }
    });
    var21 = ['media.tenor.com', 'media.tenor.co', 'c.tenor.com', 'static.klipy.com', 'media.giphy.com', 'i.giphy.com'];
    var22 = var16;
    var1 = new var22[var17](var21, var20);
    var1 = var1 instanceof Object ? var1 : var16;
    var _closure1_slot8 = var1;
    var1 = 1;
    var1 = var5[var1];
    var14 = var14.bind(var0)(var1);
    var1 = var14.v4;
    var1 = var1.bind(var14)();
    var18 = var1.source;
    var17 = var15.RegExp;
    var1 = var15.HermesInternal;
    var16 = var1.concat;
    var14 = '(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|';
    var1 = '|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?';
    var21 = var16.bind(var14)(var18, var1);
    var1 = var17.prototype;
    var14 = Object.create(var1, {
        constructor: {
            value: var17
        }
    });
    var20 = 'ig';
    var22 = var14;
    var1 = new var22[var17](var21, var20, var19);
    var14 = var1 instanceof Object ? var1 : var14;
    var16 = var15.Set;
    var1 = var15.window;
    var1 = var1.GLOBAL_ENV;
    var17 = var1.CDN_HOST;
    var1 = new Array(4);
    var1[0] = var17;
    var17 = var15.window;
    var17 = var17.GLOBAL_ENV;
    var17 = var17.INVITE_HOST;
    var1[1] = var17;
    var17 = var15.window;
    var17 = var17.GLOBAL_ENV;
    var17 = var17.GIFT_CODE_HOST;
    var1[2] = var17;
    var15 = var15.window;
    var15 = var15.GLOBAL_ENV;
    var15 = var15.GUILD_TEMPLATE_HOST;
    var1[3] = var15;
    var15 = var16.prototype;
    var15 = Object.create(var15, {
        constructor: {
            value: var16
        }
    });
    var22 = var15;
    var21 = var1;
    var1 = new var22[var16](var21, var20);
    var1 = var1 instanceof Object ? var1 : var15;
    var _closure1_slot9 = var1;
    var1 = {};
    var1.URL_REGEX = var14;
    var14 = function(arg0, arg1) { // Original name: makeUrl, environment: var3
        _fun16789: for (var _fun16789_ip = 0;;) switch (_fun16789_ip) {
            case 0:
                var1 = arg1;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun16789_ip = 44;
                    continue _fun16789
                }
            case 9:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var0 = var2.isDiscordFrontendDevelopment;
                var1 = var0.bind(var2)();
            case 44:
                var0 = global;
                if (var1) {
                    _fun16789_ip = 63;
                    continue _fun16789
                }
            case 49:
                var1 = var0.location;
                var5 = var1.host;
                _fun16789_ip = 81;
                continue _fun16789;
            case 63:
                var1 = var0.window;
                var1 = var1.GLOBAL_ENV;
                var5 = var1.INVITE_HOST;
            case 81:
                var1 = var0.location;
                var9 = var1.protocol;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var10 = '';
                var8 = '//';
                var6 = arg0;
                var7 = var5;
                var0 = var10[var3](var9, var8, var7, var6, var5);
                return var0;
        }
    };
    var1.makeUrl = var14;
    var1.isOriginalContentTypeDifferent = var13;
    var1.isDiscordHostname = var12;
    var12 = function(arg0, arg1) { // Original name: isDiscordLocalhost, environment: var3
        _fun16790: for (var _fun16790_ip = 0;;) switch (_fun16790_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var0 = var3 != var2;
                if (!var0) {
                    _fun16790_ip = 19;
                    continue _fun16790
                }
            case 12:
                var1 = arg1;
                var0 = var3 != var1;
            case 19:
                if (!var0) {
                    _fun16790_ip = 45;
                    continue _fun16790
                }
            case 22:
                var1 = global;
                var1 = var1.window;
                var1 = var1.location;
                var1 = var1.host;
                var0 = var1 === var2;
            case 45:
                return var0;
        }
    };
    var1.isDiscordLocalhost = var12;
    var1.isDiscordProtocol = var11;
    var1.isDiscordUrl = var10;
    var1.isDiscordUri = var9;
    var9 = function(arg0) { // Original name: isDiscordCdnUrl, environment: var3
        _fun16791: for (var _fun16791_ip = 0;;) switch (_fun16791_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun16791_ip = 78;
                    continue _fun16791
                }
            case 12:
                var4 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.parse;
                var1 = var1.bind(var2)(var3);
                var2 = var1.hostname;
                var1 = global;
                var1 = var1.window;
                var1 = var1.GLOBAL_ENV;
                var1 = var1.CDN_HOST;
                var0 = var2 === var1;
            case 78:
                return var0;
        }
    };
    var1.isDiscordCdnUrl = var9;
    var1.isDiscordDirectAssetUrl = var8;
    var1.isDiscordProxiedAssetUrl = var7;
    var1.isAllowedGifProviderUrl = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: isDiscordAssetUrl, environment: var3
        _fun16792: for (var _fun16792_ip = 0;;) switch (_fun16792_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot13;
                var3 = undefined;
                var0 = var0.bind(var3)(var4);
                var1 = !var0;
                var0 = !var1;
                if (!var1) {
                    _fun16792_ip = 70;
                    continue _fun16792
                }
            case 26:
                var6 = _closure1_slot14;
                var5 = arg1;
                var1 = arg2;
                var1 = var6.bind(var3)(var4, var5, var1);
                var5 = !var1;
                var1 = !var5;
                if (!var5) {
                    _fun16792_ip = 67;
                    continue _fun16792
                }
            case 52:
                var2 = _closure1_slot15;
                var2 = var2.bind(var3)(var4);
                var2 = !var2;
                var1 = !var2;
            case 67:
                var0 = var1;
            case 70:
                return var0;
        }
    };
    var1.isDiscordAssetUrl = var6;
    var6 = function(arg0) { // Original name: isDiscordUrlOrUri, environment: var3
        _fun16793: for (var _fun16793_ip = 0;;) switch (_fun16793_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot16;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun16793_ip = 29;
                    continue _fun16793
                }
            case 20:
                var1 = _closure1_slot17;
                var0 = var1.bind(var2)(var3);
            case 29:
                return var0;
        }
    };
    var1.isDiscordUrlOrUri = var6;
    var6 = function(arg0) { // Original name: isAppRoute, environment: var3
        _fun16794: for (var _fun16794_ip = 0;;) switch (_fun16794_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.toLowerCase;
                var3 = var0.bind(var1)();
                var1 = var3.startsWith;
                var0 = '/channels/';
                var0 = var1.bind(var3)(var0);
                if (var0) {
                    _fun16794_ip = 57;
                    continue _fun16794
                }
            case 33:
                var2 = var3.startsWith;
                var1 = _closure1_slot4;
                var1 = var1.ACTIVITY;
                var0 = var2.bind(var3)(var1);
            case 57:
                return var0;
        }
    };
    var1.isAppRoute = var6;
    var6 = function(arg0) { // Original name: format, environment: var3
        var2 = _closure1_slot2;
        var1 = _closure1_slot3;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.format;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.format = var6;
    var6 = function(arg0, arg1) { // Original name: formatPathWithQuery, environment: var3
        var1 = _closure1_slot2;
        var6 = _closure1_slot3;
        var0 = 2;
        var0 = var6[var0];
        var5 = undefined;
        var2 = var1.bind(var5)(var0);
        var1 = var2.format;
        var0 = {};
        var4 = arg0;
        var0.pathname = var4;
        var4 = _closure1_slot1;
        var3 = 5;
        var3 = var6[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.pickBy;
        var3 = arg1;
        var3 = var4.bind(var5)(var3);
        var0.query = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.formatPathWithQuery = var6;
    var6 = function(arg0) { // Original name: formatSearch, environment: var3
        var1 = _closure1_slot2;
        var6 = _closure1_slot3;
        var0 = 2;
        var0 = var6[var0];
        var5 = undefined;
        var2 = var1.bind(var5)(var0);
        var1 = var2.format;
        var0 = {};
        var4 = _closure1_slot1;
        var3 = 5;
        var3 = var6[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.pickBy;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.query = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.formatSearch = var6;
    var6 = function(arg0) { // Original name: safeParseWithQuery, environment: var3
        _fun16798: for (var _fun16798_ip = 0;;) switch (_fun16798_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.parse;
                var1 = var0;
                var0 = true;
                var0 = var2.bind(var3)(var1, var0);
            case 45: // try_end0
                return var0;
            case 47: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = null;
                return var0;
        }
    };
    var1.safeParseWithQuery = var6;
    var6 = function(arg0, arg1) { // Original name: toURLSafe, environment: var3
        _fun16799: for (var _fun16799_ip = 0;;) switch (_fun16799_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
            case 6: // try_start_0
                var2 = global;
                var3 = var2.URL;
                var5 = var1;
                var4 = var0;
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = var1;
                var0 = new var6[var3](var5, var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
            case 40: // try_end0
                return var0;
            case 42: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = null;
                return var0;
        }
    };
    var1.toURLSafe = var6;
    var3 = function(arg0) { // Original name: safeDecodeURIComponent, environment: var3
        _fun16800: for (var _fun16800_ip = 0;;) switch (_fun16800_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var1 = global;
                var2 = var1.decodeURIComponent;
                var1 = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 21: // try_end0
                return var0;
            case 23: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = null;
                return var0;
        }
    };
    var1.safeDecodeURIComponent = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/URLUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1458, 1459, 1457, 1304, 22, 2]);