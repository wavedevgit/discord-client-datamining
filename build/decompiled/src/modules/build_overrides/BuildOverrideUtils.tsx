// modules/build_overrides/BuildOverrideUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun17716: for (var _fun17716_ip = 0;;) switch (_fun17716_ip) {
        case 0:
            var8 = require;
            var2 = exports;
            var9 = dependencyMap;
            var _closure1_slot0 = var8;
            var0 = metroImportDefault;
            var _closure1_slot1 = var0;
            var0 = metroImportAll;
            var _closure1_slot2 = var0;
            var _closure1_slot3 = var9;
            var5 = function(arg0) { // Original name: getAPIEndpoint, environment: var1
                var0 = global;
                var1 = var0.location;
                var9 = var1.protocol;
                var1 = var0.location;
                var7 = var1.host;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var10 = '';
                var8 = '//';
                var6 = arg0;
                var0 = var10[var3](var9, var8, var7, var6, var5);
                return var0;
            };
            var _closure1_slot10 = var5;
            var4 = function(arg0) { // Original name: isManualBuildOverrideLink, environment: var1
                _fun17718: for (var _fun17718_ip = 0;;) switch (_fun17718_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun17718_ip = 29;
                            continue _fun17718
                        }
                    case 12:
                        var2 = _closure1_slot7;
                        var1 = var2.test;
                        var0 = var1.bind(var2)(var3);
                    case 29:
                        return var0;
                }
            };
            var _closure1_slot11 = var4;
            var3 = function(arg0) { // Original name: manualOverrideLinkMeta, environment: var1
                _fun17719: for (var _fun17719_ip = 0;;) switch (_fun17719_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = var3.match;
                        var0 = _closure1_slot7;
                        var2 = var2.bind(var3)(var0);
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun17719_ip = 155;
                            continue _fun17719
                        }
                    case 30:
                        var4 = var2.length;
                        var3 = 2;
                        if (!(var3 === var4)) {
                            _fun17719_ip = 155;
                            continue _fun17719
                        }
                    case 42:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 3;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var1 = var3.getNativePlatform;
                        var6 = var1.bind(var3)();
                        var1 = 1;
                        var5 = var2[var1];
                        var1 = {};
                        var2 = {};
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var4 = var3.concat;
                        var3 = 'discord_';
                        var4 = var4.bind(var3)(var6);
                        var3 = {};
                        var6 = 'branch';
                        var3.type = var6;
                        var3.id = var5;
                        var2[var4] = var3;
                        var1.targetBuildOverride = var2;
                        var2 = new Array(0);
                        var1.validForUserIds = var2;
                        var2 = 'Mon, 1 Jan 2038 00:00:00 GMT';
                        var1.expiresAt = var2;
                        return var1;
                    case 155:
                        return var0;
                }
            };
            var _closure1_slot12 = var3;
            var7 = global;
            var11 = var7.Object;
            var10 = var11.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var10.bind(var11)(var2, var0, var6);
            var11 = 0;
            var6 = var9[var11];
            var0 = undefined;
            var6 = var8.bind(var0)(var6);
            var6 = var6.BUILD_OVERRIDE_COOKIE_NAME;
            var _closure1_slot4 = var6;
            var6 = 1;
            var6 = var9[var6];
            var6 = var8.bind(var0)(var6);
            var6 = var6.PRIMARY_DOMAIN;
            var6 = 2;
            var6 = var9[var6];
            var10 = var8.bind(var0)(var6);
            var6 = var10.getConstants;
            var10 = var6.bind(var10)();
            var6 = 3;
            var12 = var9[var6];
            var13 = var8.bind(var0)(var12);
            var12 = var13.isAndroid;
            var12 = var12.bind(var13)();
            if (var12) {
                _fun17716_ip = 212;
                continue _fun17716
            }
        case 180:
            var6 = var9[var6];
            var12 = var8.bind(var0)(var6);
            var6 = var12.isIOS;
            var12 = var6.bind(var12)();
            var6 = undefined;
            if (!var12) {
                _fun17716_ip = 210;
                continue _fun17716
            }
        case 204:
            var6 = var10.Version;
        case 210:
            _fun17716_ip = 238;
            continue _fun17716;
        case 212:
            var13 = var10.Version;
            var12 = var13.split;
            var10 = ' - ';
            var10 = var12.bind(var13)(var10);
            var6 = var10[var11];
        case 238:
            var _closure1_slot5 = var6;
            var12 = var7.RegExp;
            var10 = var12.prototype;
            var11 = Object.create(var10, {
                constructor: {
                    value: var12
                }
            });
            var16 = '^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$';
            var13 = 'i';
            var17 = var11;
            var15 = var13;
            var10 = new var17[var12](var16, var15, var14);
            var10 = var10 instanceof Object ? var10 : var11;
            var _closure1_slot6 = var10;
            var12 = var7.RegExp;
            var10 = var12.prototype;
            var11 = Object.create(var10, {
                constructor: {
                    value: var12
                }
            });
            var16 = '^dev://branch/([\\w-./]+)$';
            var17 = var11;
            var10 = new var17[var12](var16, var15, var14);
            var10 = var10 instanceof Object ? var10 : var11;
            var _closure1_slot7 = var10;
            var12 = var7.Set;
            var10 = var12.prototype;
            var11 = Object.create(var10, {
                constructor: {
                    value: var12
                }
            });
            var16 = ['canary.discord.com', 'ptb.discord.com', 'discord.com', 'canary.discordapp.com', 'ptb.discordapp.com', 'discordapp.com'];
            var17 = var11;
            var10 = new var17[var12](var16, var15);
            var10 = var10 instanceof Object ? var10 : var11;
            var _closure1_slot8 = var10;
            var11 = var7.Set;
            var7 = var11.prototype;
            var10 = Object.create(var7, {
                constructor: {
                    value: var11
                }
            });
            var16 = ['/__development/link', '/__development/link/'];
            var17 = var10;
            var7 = new var17[var11](var16, var15);
            var7 = var7 instanceof Object ? var7 : var10;
            var _closure1_slot9 = var7;
            var7 = 8;
            var7 = var9[var7];
            var9 = var8.bind(var0)(var7);
            var8 = var9.fileFinishedImporting;
            var7 = 'modules/build_overrides/BuildOverrideUtils.tsx';
            var7 = var8.bind(var9)(var7);
            var2.APP_VERSION = var6;
            var2.getAPIEndpoint = var5;
            var5 = function() { // Original name: getBuildOverride, environment: var1
                _fun17720: for (var _fun17720_ip = 0;;) switch (_fun17720_ip) {
                    case 0:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 4;
                        var1 = var3[var1];
                        var8 = undefined;
                        var3 = var2.bind(var8)(var1);
                        var2 = var3.safeParseWithQuery;
                        var4 = _closure1_slot10;
                        var1 = '/__development/build_overrides';
                        var1 = var4.bind(var8)(var1);
                        var7 = var2.bind(var3)(var1);
                        var3 = null;
                        if (!(var3 != var7)) {
                            _fun17720_ip = 191;
                            continue _fun17720
                        }
                    case 62:
                        var7.search = var3;
                        var1 = _closure1_slot5;
                        if (!var1) {
                            _fun17720_ip = 91;
                            continue _fun17720
                        }
                    case 75:
                        var2 = var7.query;
                        var1 = _closure1_slot5;
                        var2.version = var1;
                    case 91:
                        var2 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 5;
                        var1 = var9[var1];
                        var1 = var2.bind(var8)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var6 = _closure1_slot2;
                        var5 = 6;
                        var5 = var9[var5];
                        var6 = var6.bind(var8)(var5);
                        var5 = var6.format;
                        var5 = var5.bind(var6)(var7);
                        var1.url = var5;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.then;
                        var1 = function(arg0) { // Environment: var0
                            _fun17721: for (var _fun17721_ip = 0;;) switch (_fun17721_ip) {
                                case 0:
                                    var0 = arg0;
                                    var0 = var0.body;
                                    if (var0) {
                                        _fun17721_ip = 13;
                                        continue _fun17721
                                    }
                                case 11:
                                    var0 = null;
                                case 13:
                                    return var0;
                            }
                        };
                        var0 = function() { // Environment: var0
                            var0 = null;
                            return var0;
                        };
                        var0 = var2.bind(var4)(var1, var0);
                        _fun17720_ip = 210;
                        continue _fun17720;
                    case 191:
                        var1 = global;
                        var2 = var1.Promise;
                        var1 = var2.resolve;
                        var0 = var1.bind(var2)(var3);
                    case 210:
                        return var0;
                }
            };
            var2.getBuildOverride = var5;
            var5 = function(arg0) { // Original name: getBuildOverrideMeta, environment: var1
                _fun17723: for (var _fun17723_ip = 0;;) switch (_fun17723_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = _closure1_slot11;
                        var3 = undefined;
                        var2 = var2.bind(var3)(var4);
                        if (var2) {
                            _fun17723_ip = 256;
                            continue _fun17723
                        }
                    case 25:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var2 = 4;
                        var2 = var6[var2];
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.safeParseWithQuery;
                        var10 = var2.bind(var5)(var4);
                        var6 = null;
                        if (!(var6 != var10)) {
                            _fun17723_ip = 235;
                            continue _fun17723
                        }
                    case 65:
                        var10.search = var6;
                        var5 = var10.query;
                        var2 = 'true';
                        var5.meta = var2;
                        var2 = _closure1_slot5;
                        if (!var2) {
                            _fun17723_ip = 110;
                            continue _fun17723
                        }
                    case 94:
                        var5 = var10.query;
                        var2 = _closure1_slot5;
                        var5.version = var2;
                    case 110:
                        var2 = global;
                        var2 = var2.window;
                        var2 = var2.location;
                        var2 = var2.host;
                        var10.host = var2;
                        var5 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var2 = 5;
                        var2 = var11[var2];
                        var2 = var5.bind(var3)(var2);
                        var7 = var2.HTTP;
                        var5 = var7.get;
                        var2 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var9 = _closure1_slot2;
                        var8 = 6;
                        var8 = var11[var8];
                        var9 = var9.bind(var3)(var8);
                        var8 = var9.format;
                        var8 = var8.bind(var9)(var10);
                        var2.url = var8;
                        var7 = var5.bind(var7)(var2);
                        var5 = var7.then;
                        var2 = function(arg0) { // Environment: var1
                            _fun17724: for (var _fun17724_ip = 0;;) switch (_fun17724_ip) {
                                case 0:
                                    var0 = arg0;
                                    var0 = var0.body;
                                    if (var0) {
                                        _fun17724_ip = 13;
                                        continue _fun17724
                                    }
                                case 11:
                                    var0 = null;
                                case 13:
                                    return var0;
                            }
                        };
                        var1 = function() { // Environment: var1
                            var0 = null;
                            return var0;
                        };
                        var1 = var5.bind(var7)(var2, var1);
                        _fun17723_ip = 254;
                        continue _fun17723;
                    case 235:
                        var2 = global;
                        var5 = var2.Promise;
                        var2 = var5.resolve;
                        var1 = var2.bind(var5)(var6);
                    case 254:
                        return var1;
                    case 256:
                        var1 = global;
                        var2 = var1.Promise;
                        var1 = var2.resolve;
                        var0 = _closure1_slot12;
                        var0 = var0.bind(var3)(var4);
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var2.getBuildOverrideMeta = var5;
            var5 = function() { // Original name: probablyHasBuildOverride, environment: var1
                var0 = global;
                var1 = var0.window;
                var1 = var1.document;
                var2 = var1.cookie;
                var1 = var2.indexOf;
                var5 = _closure1_slot4;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '';
                var0 = '=';
                var0 = var4.bind(var3)(var5, var0);
                var1 = var1.bind(var2)(var0);
                var0 = -1;
                var0 = var0 !== var1;
                return var0;
            };
            var2.probablyHasBuildOverride = var5;
            var5 = function() { // Original name: getBuildOverrideExperiments, environment: var1
                _fun17727: for (var _fun17727_ip = 0;;) switch (_fun17727_ip) {
                    case 0:
                        var6 = undefined;
                        var1 = undefined;
                        var0 = undefined;
                    case 6: // try_start_0
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 7;
                        var3 = var5[var3];
                        var7 = var4.bind(var6)(var3);
                        var4 = var7.parse;
                        var5 = global;
                        var3 = var5.window;
                        var3 = var3.document;
                        var3 = var3.cookie;
                        var3 = var4.bind(var7)(var3);
                        var2 = _closure1_slot4;
                        var3 = var3[var2];
                        var0 = var3;
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun17727_ip = 169;
                            continue _fun17727
                        }
                    case 77:
                        var4 = var5.JSON;
                        var3 = var4.parse;
                        var5 = var5.atob;
                        var8 = var0;
                        var7 = var8.substring;
                        var9 = var8.indexOf;
                        var0 = '.';
                        var9 = var9.bind(var8)(var0);
                        var0 = 1;
                        var0 = var9 + var0;
                        var0 = var7.bind(var8)(var0);
                        var0 = var5.bind(var6)(var0);
                        var0 = var3.bind(var4)(var0);
                        var0 = var0.$meta;
                        var0 = var0.experiments;
                        var1 = var0;
                        if (!(var2 == var0)) {
                            _fun17727_ip = 164;
                            continue _fun17727
                        }
                    case 160:
                        var0 = {};
                        _fun17727_ip = 167;
                        continue _fun17727;
                    case 164:
                        var0 = var1;
                    case 167:
                        _fun17727_ip = 171;
                        continue _fun17727;
                    case 169:
                        var0 = {};
                    case 171: // try_end0
                        return var0;
                    case 173: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = {};
                        return var0;
                }
            };
            var2.getBuildOverrideExperiments = var5;
            var5 = function(arg0) { // Original name: isBuildOverrideLink, environment: var1
                _fun17728: for (var _fun17728_ip = 0;;) switch (_fun17728_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun17728_ip = 29;
                            continue _fun17728
                        }
                    case 12:
                        var2 = _closure1_slot6;
                        var1 = var2.test;
                        var0 = var1.bind(var2)(var3);
                    case 29:
                        return var0;
                }
            };
            var2.isBuildOverrideLink = var5;
            var2.isManualBuildOverrideLink = var4;
            var2.manualOverrideLinkMeta = var3;
            var1 = function(arg0) { // Original name: validateURL, environment: var1
                _fun17729: for (var _fun17729_ip = 0;;) switch (_fun17729_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = _closure1_slot11;
                        var6 = undefined;
                        var0 = var0.bind(var6)(var1);
                        if (var0) {
                            _fun17729_ip = 226;
                            continue _fun17729
                        }
                    case 23:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var0 = 4;
                        var0 = var4[var0];
                        var2 = var2.bind(var6)(var0);
                        var0 = var2.safeParseWithQuery;
                        var5 = var0.bind(var2)(var1);
                        var0 = null;
                        if (!(var0 != var5)) {
                            _fun17729_ip = 224;
                            continue _fun17729
                        }
                    case 63:
                        var7 = _closure1_slot8;
                        var4 = var7.has;
                        var2 = var5.hostname;
                        var2 = var4.bind(var7)(var2);
                        if (!var2) {
                            _fun17729_ip = 126;
                            continue _fun17729
                        }
                    case 86:
                        var2 = var5.query;
                        var10 = 's';
                        var2 = var10 in var2;
                        if (!var2) {
                            _fun17729_ip = 126;
                            continue _fun17729
                        }
                    case 103:
                        var7 = _closure1_slot9;
                        var4 = var7.has;
                        var2 = var5.pathname;
                        var2 = var4.bind(var7)(var2);
                        if (var2) {
                            _fun17729_ip = 128;
                            continue _fun17729
                        }
                    case 126:
                        return var0;
                    case 128:
                        var8 = var5.query;
                        for (var2 in var8)
                            case 142: {
                                case 151: var12 = var2;
                                if (var10 === var12) {
                                    _fun17729_ip = 142;
                                    continue _fun17729
                                }
                                case 158: var11 = var5.query;
                                var11 = delete var11[var12];
                                _fun17729_ip = 142;
                                continue _fun17729;
                            }
                    case 170:
                        var2 = {};
                        var4 = var5.query;
                        var4 = var4.s;
                        var2.payload = var4;
                        var4 = _closure1_slot2;
                        var7 = _closure1_slot3;
                        var3 = 6;
                        var3 = var7[var3];
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.format;
                        var3 = var3.bind(var4)(var5);
                        var2.url = var3;
                        return var2;
                    case 224:
                        return var0;
                    case 226:
                        var0 = {};
                        var2 = null;
                        var0.payload = var2;
                        var0.url = var1;
                        return var0;
                }
            };
            var2.validateURL = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1593, 660, 1594, 478, 1457, 507, 1459, 1595, 2]);