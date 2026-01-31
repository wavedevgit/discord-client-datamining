// modules/applications/getApplicationInstallURL.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Routes;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/getApplicationInstallURL.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: getActivityLaunchURL, environment: var1
        _fun62178: for (var _fun62178_ip = 0;;) switch (_fun62178_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.applicationId;
                var4 = var0.customId;
                var6 = var0.referrerId;
                var7 = var0.linkId;
                var0 = global;
                var3 = var0.URL;
                var2 = _closure1_slot0;
                var1 = var2.ACTIVITY_DETAILS;
                var2 = var1.bind(var2)(var5);
                var1 = var0.location;
                var9 = var1.protocol;
                var1 = var0.location;
                var8 = var1.host;
                var0 = var0.HermesInternal;
                var5 = var0.concat;
                var1 = '';
                var0 = '//';
                var11 = var5.bind(var1)(var9, var0, var8);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var13 = var1;
                var12 = var2;
                var0 = new var13[var3](var12, var11, var10);
                var1 = var0 instanceof Object ? var0 : var1;
                var3 = var1.searchParams;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun62178_ip = 154;
                    continue _fun62178
                }
            case 139:
                var5 = var3.set;
                var2 = 'link_id';
                var2 = var5.bind(var3)(var2, var7);
            case 154:
                if (!(var0 != var6)) {
                    _fun62178_ip = 173;
                    continue _fun62178
                }
            case 158:
                var5 = var3.set;
                var2 = 'referrer_id';
                var2 = var5.bind(var3)(var2, var6);
            case 173:
                if (!(var0 != var4)) {
                    _fun62178_ip = 192;
                    continue _fun62178
                }
            case 177:
                var2 = var3.set;
                var0 = 'custom_id';
                var0 = var2.bind(var3)(var0, var4);
            case 192:
                var0 = var1.toString;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.getActivityLaunchURL = var3;
    var1 = function(arg0) { // Original name: getApplicationInstallURL, environment: var1
        _fun62179: for (var _fun62179_ip = 0;;) switch (_fun62179_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.id;
                var0 = var1.customInstallUrl;
                var4 = var1.installParams;
                var8 = var1.integrationTypesConfig;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun62179_ip = 269;
                    continue _fun62179
                }
            case 35:
                var1 = global;
                var3 = var1.URLSearchParams;
                var5 = var3.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var3
                    }
                });
                var15 = var5;
                var3 = new var15[var3](var14);
                var3 = var3 instanceof Object ? var3 : var5;
                var6 = var3.set;
                var5 = 'client_id';
                var5 = var6.bind(var3)(var5, var7);
                var5 = var2 != var8;
                if (!var5) {
                    _fun62179_ip = 119;
                    continue _fun62179
                }
            case 85:
                var7 = var1.Object;
                var6 = var7.values;
                var8 = var6.bind(var7)(var8);
                var7 = var8.some;
                var6 = function(arg0) { // Environment: var6
                    _fun62180: for (var _fun62180_ip = 0;;) switch (_fun62180_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = null;
                            var4 = var2 == var3;
                            var0 = undefined;
                            if (var4) {
                                _fun62180_ip = 20;
                                continue _fun62180
                            }
                        case 14:
                            var0 = var3.oauth2_install_params;
                        case 20:
                            var0 = var2 != var0;
                            if (var0) {
                                _fun62180_ip = 46;
                                continue _fun62180
                            }
                        case 27:
                            var4 = var2 == var3;
                            var1 = undefined;
                            if (var4) {
                                _fun62180_ip = 42;
                                continue _fun62180
                            }
                        case 36:
                            var1 = var3.oauth2InstallParams;
                        case 42:
                            var0 = var2 != var1;
                        case 46:
                            return var0;
                    }
                };
                var5 = var7.bind(var8)(var6);
            case 119:
                if (!(var2 != var4)) {
                    _fun62179_ip = 192;
                    continue _fun62179
                }
            case 123:
                if (var5) {
                    _fun62179_ip = 192;
                    continue _fun62179
                }
            case 126:
                var7 = var4.permissions;
                var6 = var4.scopes;
                if (!(var2 != var7)) {
                    _fun62179_ip = 157;
                    continue _fun62179
                }
            case 142:
                var5 = var3.set;
                var4 = 'permissions';
                var4 = var5.bind(var3)(var4, var7);
            case 157:
                if (!(var2 != var6)) {
                    _fun62179_ip = 192;
                    continue _fun62179
                }
            case 161:
                var5 = var3.set;
                var4 = var6.join;
                var2 = ' ';
                var4 = var4.bind(var6)(var2);
                var2 = 'scope';
                var2 = var5.bind(var3)(var2, var4);
            case 192:
                var2 = var1.location;
                var14 = var2.protocol;
                var2 = var1.location;
                var12 = var2.host;
                var2 = _closure1_slot0;
                var11 = var2.OAUTH2_AUTHORIZE;
                var2 = var3.toString;
                var9 = var2.bind(var3)();
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var15 = '';
                var13 = '//';
                var10 = '?';
                var1 = var15[var4](var14, var13, var12, var11, var10, var9, var8);
                return var1;
            case 269:
                return var0;
        }
    };
    var2.getApplicationInstallURL = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);