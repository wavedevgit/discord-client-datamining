// modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var2 = var1.nonce;
        var _closure2_slot0 = var2;
        var2 = var1.fingerprint;
        var _closure2_slot1 = var2;
        var1 = var1.handoffSource;
        var _closure2_slot2 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            _fun50536: for (var _fun50536_ip = 0;;) switch (_fun50536_ip) {
                case 0:
                    var6 = arg0;
                    var _closure3_slot0 = var6;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.popWithKey;
                    var2 = _closure1_slot8;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure1_slot4;
                    var2 = var3.isAuthenticated;
                    var2 = var2.bind(var3)();
                    if (var2) {
                        _fun50536_ip = 187;
                        continue _fun50536
                    }
                case 66:
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 6;
                    var2 = var10[var2];
                    var8 = var3.bind(var0)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot5;
                    var4 = var2.MOBILE_WEB_HANDOFF_FAILURE;
                    var3 = {};
                    var2 = 'user_not_authenticated_in_app';
                    var3.reason = var2;
                    var9 = _closure1_slot0;
                    var2 = 7;
                    var2 = var10[var2];
                    var11 = var9.bind(var0)(var2);
                    var10 = var11.maybeExtractId;
                    var9 = _closure2_slot1;
                    var10 = var10.bind(var11)(var9);
                    var3.fingerprint = var10;
                    var2 = _closure2_slot2;
                    var3.handoff_source = var2;
                    var2 = {};
                    var2.fingerprint = var9;
                    var2 = var7.bind(var8)(var4, var3, var2);
                    var2 = 'null';
                    var2 = var6.bind(var0)(var2);
                    _fun50536_ip = 250;
                    continue _fun50536;
                case 187:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 4;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.showSimpleLoadingModal;
                    var2 = _closure1_slot8;
                    var1 = {};
                    var7 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 5;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.createHandoffToken;
                        var0 = _closure2_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1.operation = var7;
                    var1.onResolved = var6;
                    var5 = function() {
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var0 = 6;
                        var2 = var7[var0];
                        var0 = undefined;
                        var5 = var3.bind(var0)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot5;
                        var3 = var2.MOBILE_WEB_HANDOFF_FAILURE;
                        var2 = {};
                        var6 = 'handoff_token_fetch_failure';
                        var2.reason = var6;
                        var6 = _closure1_slot0;
                        var1 = 7;
                        var1 = var7[var1];
                        var8 = var6.bind(var0)(var1);
                        var7 = var8.maybeExtractId;
                        var6 = _closure2_slot1;
                        var7 = var7.bind(var8)(var6);
                        var2.fingerprint = var7;
                        var1 = _closure2_slot2;
                        var2.handoff_source = var1;
                        var1 = {};
                        var1.fingerprint = var6;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        var2 = _closure3_slot0;
                        var1 = 'null';
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onRejected = var5;
                    var1 = var3.bind(var4)(var2, var1);
                case 250:
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun50541: for (var _fun50541_ip = 0;;) switch (_fun50541_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        var7 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun50541_ip = 593;
                            continue _fun50541
                        }
                    case 16:
                        var3 = undefined;
                        if (!(var7 === var3)) {
                            _fun50541_ip = 24;
                            continue _fun50541
                        }
                    case 22:
                        var7 = {};
                    case 24:
                        var5 = var7.forceExternalBrowser;
                        if (!(var5 === var3)) {
                            _fun50541_ip = 36;
                            continue _fun50541
                        }
                    case 34:
                        var5 = false;
                    case 36:
                        var2 = null;
                        var6 = Object.create(var2);
                        var1 = 0;
                        var6.forceExternalBrowser = var1;
                        var19 = {};
                        var18 = var7;
                        var17 = var6;
                        var8 = copyDataProperties(var19, var18, var17);
                        SaveGenerator(address = 64);
                    case 62:
                        return var3;
                    case 64:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun50541_ip = 590;
                            continue _fun50541
                        }
                    case 73:
                        var7 = {};
                        var19 = var7;
                        var18 = var8;
                        var4 = copyDataProperties(var19, var18);
                        var4 = var8.nonce;
                        if (!(var2 == var4)) {
                            _fun50541_ip = 128;
                            continue _fun50541
                        }
                    case 95:
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 5;
                        var2 = var9[var2];
                        var6 = var6.bind(var3)(var2);
                        var2 = var6.generateNonce;
                        var4 = var2.bind(var6)();
                    case 128:
                        var2 = 'nonce';
                        var7[var2] = var4;
                        var4 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 8;
                        var2 = var9[var2];
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.getLoginHandoffSourceFromRedirectTo;
                        var4 = var2.bind(var4)(var10);
                        var2 = 'handoffSource';
                        var7[var2] = var4;
                        var2 = _closure1_slot9;
                        var2 = var2.bind(var3)(var7);
                        SaveGenerator(address = 195);
                    case 193:
                        return var2;
                    case 195:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun50541_ip = 587;
                            continue _fun50541
                        }
                    case 204:
                        var4 = var8.skipLoginRedirect;
                        var9 = true;
                        if (!(var9 !== var4)) {
                            _fun50541_ip = 290;
                            continue _fun50541
                        }
                    case 216:
                        var4 = global;
                        var12 = var4.URL;
                        var11 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var4 = 9;
                        var4 = var13[var4];
                        var13 = var11.bind(var3)(var4);
                        var11 = var13.makeUrl;
                        var4 = _closure1_slot7;
                        var4 = var4.LOGIN_HANDOFF;
                        var19 = var11.bind(var13)(var4);
                        var11 = var12.prototype;
                        var11 = Object.create(var11, {
                            constructor: {
                                value: var12
                            }
                        });
                        var20 = var11;
                        var4 = new var20[var12](var19, var18);
                        var4 = var4 instanceof Object ? var4 : var11;
                        _fun50541_ip = 439;
                        continue _fun50541;
                    case 290:
                        var12 = global;
                        var14 = var12.URL;
                        var11 = var12.location;
                        var16 = var11.protocol;
                        var11 = var12.window;
                        var11 = var11.GLOBAL_ENV;
                        var15 = var11.WEBAPP_ENDPOINT;
                        var11 = var12.HermesInternal;
                        var13 = var11.concat;
                        var11 = '';
                        var19 = var13.bind(var11)(var16, var15);
                        var13 = var14.prototype;
                        var13 = Object.create(var13, {
                            constructor: {
                                value: var14
                            }
                        });
                        var20 = var13;
                        var11 = new var20[var14](var19, var18);
                        var11 = var11 instanceof Object ? var11 : var13;
                        var12 = var12.URL;
                        var13 = var12.prototype;
                        var13 = Object.create(var13, {
                            constructor: {
                                value: var12
                            }
                        });
                        var20 = var13;
                        var19 = var10;
                        var18 = var11;
                        var12 = new var20[var12](var19, var18, var17);
                        var12 = var12 instanceof Object ? var12 : var13;
                        var13 = var12.pathname;
                        var11.pathname = var13;
                        var13 = var12.search;
                        var11.search = var13;
                        var12 = var12.hash;
                        var11.hash = var12;
                        var4 = var11;
                    case 439:
                        var13 = var4.searchParams;
                        var12 = var13.append;
                        var11 = 'handoff_token';
                        var11 = var12.bind(var13)(var11, var2);
                        var8 = var8.skipLoginRedirect;
                        if (!(var9 !== var8)) {
                            _fun50541_ip = 525;
                            continue _fun50541
                        }
                    case 471:
                        var11 = var4.searchParams;
                        var9 = var11.append;
                        var8 = var7.nonce;
                        var7 = 'handoff_key';
                        var7 = var9.bind(var11)(var7, var8);
                        var9 = var4.searchParams;
                        var8 = var9.append;
                        var7 = 'redirect_to';
                        var7 = var8.bind(var9)(var7, var10);
                    case 525:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 10;
                        var6 = var8[var6];
                        var6 = var7.bind(var3)(var6);
                        if (var5) {
                            _fun50541_ip = 567;
                            continue _fun50541
                        }
                    case 548:
                        var7 = var6.performURLNavigation;
                        var5 = var4.href;
                        var5 = var7.bind(var6)(var5);
                        _fun50541_ip = 584;
                        continue _fun50541;
                    case 567:
                        var5 = var6.openURLExternally;
                        var4 = var4.href;
                        var4 = var5.bind(var6)(var4);
                    case 584:
                        return var3;
                    case 587:
                        return var2;
                    case 590:
                        return var1;
                    case 593:
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
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun50544: for (var _fun50544_ip = 0;;) switch (_fun50544_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun50544_ip = 301;
                            continue _fun50544
                        }
                    case 13:
                        var3 = undefined;
                        if (!(var2 === var3)) {
                            _fun50544_ip = 21;
                            continue _fun50544
                        }
                    case 19:
                        var2 = {};
                    case 21:
                        SaveGenerator(address = 25);
                    case 23:
                        return var3;
                    case 25:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun50544_ip = 298;
                            continue _fun50544
                        }
                    case 34:
                        var6 = {};
                        var14 = var6;
                        var13 = var2;
                        var4 = copyDataProperties(var14, var13);
                        var4 = var2.nonce;
                        var2 = null;
                        if (!(var2 == var4)) {
                            _fun50544_ip = 91;
                            continue _fun50544
                        }
                    case 58:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 5;
                        var2 = var7[var2];
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.generateNonce;
                        var4 = var2.bind(var5)();
                    case 91:
                        var2 = 'nonce';
                        var6[var2] = var4;
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 8;
                        var2 = var7[var2];
                        var2 = var4.bind(var3)(var2);
                        var2 = var2.LoginHandoffSource;
                        var4 = var2.ROLE_SUBSCRIPTION_SETTING;
                        var2 = 'handoffSource';
                        var6[var2] = var4;
                        var2 = _closure1_slot9;
                        var2 = var2.bind(var3)(var6);
                        SaveGenerator(address = 159);
                    case 157:
                        return var2;
                    case 159:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun50544_ip = 295;
                            continue _fun50544
                        }
                    case 168:
                        var4 = global;
                        var7 = var4.URL;
                        var8 = var4.location;
                        var9 = var8.protocol;
                        var11 = _closure1_slot6;
                        var10 = var11.DEVELOPER_PORTAL_LOGIN_HANDOFF;
                        var8 = var6.nonce;
                        var6 = arg0;
                        var8 = var10.bind(var11)(var8, var2, var6);
                        var4 = var4.HermesInternal;
                        var6 = var4.concat;
                        var4 = '';
                        var14 = var6.bind(var4)(var9, var8);
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var15 = var6;
                        var4 = new var15[var7](var14, var13);
                        var4 = var4 instanceof Object ? var4 : var6;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 10;
                        var5 = var7[var5];
                        var6 = var6.bind(var3)(var5);
                        var5 = var6.performURLNavigation;
                        var4 = var4.href;
                        var4 = var5.bind(var6)(var4);
                        return var3;
                    case 295:
                        return var2;
                    case 298:
                        return var1;
                    case 301:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.AnalyticEvents;
    var _closure1_slot5 = var6;
    var6 = var1.MarketingURLs;
    var _closure1_slot6 = var6;
    var1 = var1.Routes;
    var _closure1_slot7 = var1;
    var1 = 'mweb-handoff';
    var _closure1_slot8 = var1;
    var1 = {};
    var6 = function() {
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1.redirectWithHandoffToken = var6;
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
    var1.redirectDeveloperPortalWithHandoffToken = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1216, 660, 4525, 5644, 5646, 795, 490, 5647, 1457, 3103, 2]);