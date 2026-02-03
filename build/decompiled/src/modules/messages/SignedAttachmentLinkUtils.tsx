// modules/messages/SignedAttachmentLinkUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun67931: for (var _fun67931_ip = 0;;) switch (_fun67931_ip) {
        case 0:
            var6 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var10;
            var _closure1_slot2 = var7;
            var4 = function arg0() {
                _fun67932: for (var _fun67932_ip = 0;;) switch (_fun67932_ip) {
                    case 0:
                        var0 = arg0;
                        var _closure2_slot0 = var0;
                        var4 = _closure1_slot8;
                        var3 = var4.has;
                        var0 = var0.hostname;
                        var0 = var3.bind(var4)(var0);
                        var3 = global;
                        var4 = var3.Array;
                        var3 = var4.from;
                        var2 = _closure1_slot5;
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.some;
                        var1 = function(arg0) { // Environment: var1
                            var0 = _closure2_slot0;
                            var2 = var0.pathname;
                            var1 = var2.startsWith;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        var2 = !var0;
                        var0 = !var2;
                        if (var2) {
                            _fun67932_ip = 84;
                            continue _fun67932
                        }
                    case 81:
                        var0 = var1;
                    case 84:
                        return var0;
                }
            };
            var _closure1_slot10 = var4;
            var3 = function arg0() {
                _fun67934: for (var _fun67934_ip = 0;;) switch (_fun67934_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.searchParams;
                        var1 = var2.get;
                        var0 = 'ex';
                        var1 = var1.bind(var2)(var0);
                        var0 = global;
                        var3 = var0.parseInt;
                        var2 = null;
                        var4 = var2 != var1;
                        var2 = '';
                        if (!var4) {
                            _fun67934_ip = 49;
                            continue _fun67934
                        }
                    case 46:
                        var2 = var1;
                    case 49:
                        var4 = undefined;
                        var1 = 16;
                        var2 = var3.bind(var4)(var2, var1);
                        var0 = var0.isNaN;
                        var1 = var0.bind(var4)(var2);
                        var0 = undefined;
                        if (var1) {
                            _fun67934_ip = 115;
                            continue _fun67934
                        }
                    case 76:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 2;
                        var1 = var5[var1];
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.Millis;
                        var1 = var1.SECOND;
                        var0 = var2 * var1;
                    case 115:
                        return var0;
                }
            };
            var _closure1_slot11 = var3;
            var0 = function arg0() {
                _fun67935: for (var _fun67935_ip = 0;;) switch (_fun67935_ip) {
                    case 0:
                        var3 = _closure1_slot11;
                        var2 = undefined;
                        var0 = arg0;
                        var2 = var3.bind(var2)(var0);
                        var0 = null;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun67935_ip = 55;
                            continue _fun67935
                        }
                    case 26:
                        var3 = global;
                        var4 = var3.Date;
                        var3 = var4.now;
                        var3 = var3.bind(var4)();
                        var1 = _closure1_slot7;
                        var1 = var3 + var1;
                        var0 = var2 <= var1;
                    case 55:
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var0 = function arg0() {
                _fun67936: for (var _fun67936_ip = 0;;) switch (_fun67936_ip) {
                    case 0:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 3;
                        var0 = var3[var0];
                        var3 = undefined;
                        var4 = var2.bind(var3)(var0);
                        var2 = var4.toURLSafe;
                        var0 = arg0;
                        var0 = var0.url;
                        var2 = var2.bind(var4)(var0);
                        var0 = null;
                        var0 = var0 != var2;
                        if (!var0) {
                            _fun67936_ip = 62;
                            continue _fun67936
                        }
                    case 53:
                        var1 = _closure1_slot12;
                        var0 = var1.bind(var3)(var2);
                    case 62:
                        return var0;
                }
            };
            var _closure1_slot13 = var0;
            var0 = function arg0() {
                _fun67937: for (var _fun67937_ip = 0;;) switch (_fun67937_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = null;
                        if (!(var0 != var1)) {
                            _fun67937_ip = 89;
                            continue _fun67937
                        }
                    case 9:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 3;
                        var3 = var4[var3];
                        var4 = undefined;
                        var5 = var5.bind(var4)(var3);
                        var3 = var5.toURLSafe;
                        var1 = var1.url;
                        var3 = var3.bind(var5)(var1);
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun67937_ip = 87;
                            continue _fun67937
                        }
                    case 57:
                        var1 = _closure1_slot10;
                        var1 = var1.bind(var4)(var3);
                        var5 = !var1;
                        var1 = !var5;
                        if (var5) {
                            _fun67937_ip = 84;
                            continue _fun67937
                        }
                    case 75:
                        var2 = _closure1_slot12;
                        var1 = var2.bind(var4)(var3);
                    case 84:
                        var0 = var1;
                    case 87:
                        return var0;
                    case 89:
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot14 = var0;
            var0 = function arg0() {
                _fun67938: for (var _fun67938_ip = 0;;) switch (_fun67938_ip) {
                    case 0:
                        var1 = arg0;
                        var4 = _closure1_slot14;
                        var0 = var1.image;
                        var3 = undefined;
                        var0 = var4.bind(var3)(var0);
                        if (var0) {
                            _fun67938_ip = 61;
                            continue _fun67938
                        }
                    case 26:
                        var7 = var1.images;
                        var4 = null;
                        var5 = var4 == var7;
                        var4 = undefined;
                        if (var5) {
                            _fun67938_ip = 58;
                            continue _fun67938
                        }
                    case 43:
                        var6 = var7.some;
                        var5 = _closure1_slot14;
                        var4 = var6.bind(var7)(var5);
                    case 58:
                        var0 = var4;
                    case 61:
                        if (var0) {
                            _fun67938_ip = 79;
                            continue _fun67938
                        }
                    case 64:
                        var2 = _closure1_slot14;
                        var1 = var1.video;
                        var0 = var2.bind(var3)(var1);
                    case 79:
                        return var0;
                }
            };
            var _closure1_slot15 = var0;
            var0 = function() {
                var4 = undefined;
                var0 = undefined;
                var3 = _closure1_slot3;
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun67941: for (var _fun67941_ip = 0;;) switch (_fun67941_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun67941_ip = 151;
                                    continue _fun67941
                                }
                            case 10:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 4;
                                var1 = var2[var1];
                                var2 = undefined;
                                var1 = var3.bind(var2)(var1);
                                var4 = var1.HTTP;
                                var3 = var4.post;
                                var1 = {};
                                var5 = _closure1_slot4;
                                var5 = var5.ATTACHMENTS_REFRESH_URLS;
                                var1.url = var5;
                                var5 = {};
                                var6 = new Array(1);
                                var7 = arg0;
                                var6[0] = var7;
                                var5.attachment_urls = var6;
                                var1.body = var5;
                                var5 = false;
                                var1.rejectWithError = var5;
                                var1 = var3.bind(var4)(var1);
                                SaveGenerator(address = 101);
                            case 99:
                                return var1;
                            case 101:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun67941_ip = 148;
                                    continue _fun67941
                                }
                            case 107:
                                var3 = var1.ok;
                                var2 = undefined;
                                if (!var3) {
                                    _fun67941_ip = 145;
                                    continue _fun67941
                                }
                            case 118:
                                var3 = var1.body;
                                var4 = var3.refreshed_urls;
                                var3 = 0;
                                var3 = var4[var3];
                                var2 = var3.refreshed;
                            case 145:
                                return var2;
                            case 148:
                                return var1;
                            case 151:
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
                var2 = function*(arg0) { // Environment: var2
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun67944: for (var _fun67944_ip = 0;;) switch (_fun67944_ip) {
                            case 0:
                                StartGenerator();
                                var1 = arg0;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun67944_ip = 110;
                                    continue _fun67944
                                }
                            case 10:
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var3 = 3;
                                var4 = var4[var3];
                                var3 = undefined;
                                var5 = var5.bind(var3)(var4);
                                var4 = var5.toURLSafe;
                                var5 = var4.bind(var5)(var1);
                                var4 = null;
                                if (!(var4 != var5)) {
                                    _fun67944_ip = 107;
                                    continue _fun67944
                                }
                            case 52:
                                var2 = _closure1_slot12;
                                var2 = var2.bind(var3)(var5);
                                if (var2) {
                                    _fun67944_ip = 67;
                                    continue _fun67944
                                }
                            case 64:
                                return var1;
                            case 67:
                                var2 = function() {
                                    var0 = undefined;
                                    var3 = _closure1_slot16;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                var2 = var2.bind(var3)(var1);
                                SaveGenerator(address = 85);
                            case 83:
                                return var2;
                            case 85:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun67944_ip = 104;
                                    continue _fun67944
                                }
                            case 91:
                                var3 = var1;
                                if (!(var4 != var2)) {
                                    _fun67944_ip = 101;
                                    continue _fun67944
                                }
                            case 98:
                                var3 = var2;
                            case 101:
                                return var3;
                            case 104:
                                return var2;
                            case 107:
                                return var1;
                            case 110:
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
            var5 = global;
            var11 = var5.Object;
            var9 = var11.defineProperty;
            var8 = {};
            var0 = true;
            var8.value = var0;
            var0 = '__esModule';
            var0 = var9.bind(var11)(var2, var0, var8);
            var0 = 0;
            var8 = var7[var0];
            var0 = undefined;
            var8 = var10.bind(var0)(var8);
            var _closure1_slot3 = var8;
            var9 = 1;
            var8 = var7[var9];
            var8 = var6.bind(var0)(var8);
            var8 = var8.Endpoints;
            var _closure1_slot4 = var8;
            var11 = function arg0() {
                _fun67946: for (var _fun67946_ip = 0;;) switch (_fun67946_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var1 = var0 == var3;
                        var0 = undefined;
                        if (var1) {
                            _fun67946_ip = 34;
                            continue _fun67946
                        }
                    case 14:
                        var2 = var3.split;
                        var1 = ':';
                        var2 = var2.bind(var3)(var1);
                        var1 = 0;
                        var0 = var2[var1];
                    case 34:
                        return var0;
                }
            };
            var13 = var5.Set;
            var8 = var13.prototype;
            var12 = Object.create(var8, {
                constructor: {
                    value: var13
                }
            });
            var18 = ['/attachments/', '/ephemeral-attachments/'];
            var19 = var12;
            var8 = new var19[var13](var18, var17);
            var8 = var8 instanceof Object ? var8 : var12;
            var _closure1_slot5 = var8;
            var13 = var5.Set;
            var8 = var13.prototype;
            var12 = Object.create(var8, {
                constructor: {
                    value: var13
                }
            });
            var18 = ['/external/'];
            var19 = var12;
            var8 = new var19[var13](var18, var17);
            var8 = var8 instanceof Object ? var8 : var12;
            var _closure1_slot6 = var8;
            var15 = 2;
            var8 = var7[var15];
            var8 = var10.bind(var0)(var8);
            var8 = var8.Millis;
            var8 = var8.HOUR;
            var8 = var9 * var8;
            var _closure1_slot7 = var8;
            var12 = var5.Set;
            var8 = var5.window;
            var8 = var8.GLOBAL_ENV;
            var8 = var8.CDN_HOST;
            var10 = new Array(2);
            var10[0] = var8;
            var8 = var5.window;
            var8 = var8.GLOBAL_ENV;
            var14 = var8.MEDIA_PROXY_ENDPOINT;
            var8 = null;
            var13 = var8 == var14;
            var9 = undefined;
            if (var13) {
                _fun67931_ip = 376;
                continue _fun67931
            }
        case 365:
            var13 = var14.substring;
            var9 = var13.bind(var14)(var15);
        case 376:
            var10[1] = var9;
            var9 = var10.map;
            var13 = var9.bind(var10)(var11);
            var10 = var13.filter;
            var9 = var5.Boolean;
            var18 = var10.bind(var13)(var9);
            var10 = var12.prototype;
            var10 = Object.create(var10, {
                constructor: {
                    value: var12
                }
            });
            var19 = var10;
            var9 = new var19[var12](var18, var17);
            var9 = var9 instanceof Object ? var9 : var10;
            var _closure1_slot8 = var9;
            var9 = var5.Set;
            var10 = var5.window;
            var10 = var10.GLOBAL_ENV;
            var14 = var10.IMAGE_PROXY_ENDPOINTS;
            var10 = var8 == var14;
            var12 = undefined;
            if (var10) {
                _fun67931_ip = 477;
                continue _fun67931
            }
        case 463:
            var13 = var14.split;
            var10 = ',';
            var12 = var13.bind(var14)(var10);
        case 477:
            if (!(var8 == var12)) {
                _fun67931_ip = 485;
                continue _fun67931
            }
        case 481:
            var12 = new Array(0);
        case 485:
            var10 = var12.map;
            var8 = function(arg0) { // Environment: var1
                var2 = arg0;
                var1 = var2.substring;
                var0 = 2;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var10 = var10.bind(var12)(var8);
            var8 = var10.map;
            var10 = var8.bind(var10)(var11);
            var8 = var10.filter;
            var5 = var5.Boolean;
            var18 = var8.bind(var10)(var5);
            var8 = var9.prototype;
            var8 = Object.create(var8, {
                constructor: {
                    value: var9
                }
            });
            var19 = var8;
            var5 = new var19[var9](var18, var17);
            var5 = var5 instanceof Object ? var5 : var8;
            var _closure1_slot9 = var5;
            var5 = 5;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = 'modules/messages/SignedAttachmentLinkUtils.tsx';
            var5 = var6.bind(var7)(var5);
            var2.isAttachmentUrl = var4;
            var4 = function arg0() {
                _fun67948: for (var _fun67948_ip = 0;;) switch (_fun67948_ip) {
                    case 0:
                        var0 = arg0;
                        var _closure2_slot0 = var0;
                        var4 = _closure1_slot9;
                        var3 = var4.has;
                        var0 = var0.hostname;
                        var0 = var3.bind(var4)(var0);
                        var3 = global;
                        var4 = var3.Array;
                        var3 = var4.from;
                        var2 = _closure1_slot6;
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.some;
                        var1 = function(arg0) { // Environment: var1
                            var0 = _closure2_slot0;
                            var2 = var0.pathname;
                            var1 = var2.startsWith;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        var2 = !var0;
                        var0 = !var2;
                        if (var2) {
                            _fun67948_ip = 84;
                            continue _fun67948
                        }
                    case 81:
                        var0 = var1;
                    case 84:
                        return var0;
                }
            };
            var2.isExternalProxiedAttachmentUrl = var4;
            var4 = function arg0() {
                _fun67950: for (var _fun67950_ip = 0;;) switch (_fun67950_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.toURLSafe;
                        var1 = var1.bind(var2)(var0);
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun67950_ip = 103;
                            continue _fun67950
                        }
                    case 45:
                        var4 = ['ex', 'is', 'hm'];
                        var2 = var4.length;
                        var3 = 0;
                        var2 = var3 < var2;
                        if (!var2) {
                            _fun67950_ip = 101;
                            continue _fun67950
                        }
                    case 69:
                        var6 = var4[var3];
                        var5 = var1.searchParams;
                        var2 = var5.delete;
                        var2 = var2.bind(var5)(var6);
                        var3 = var3 + 1;
                        var2 = var4.length;
                        if (var3 < var2) {
                            _fun67950_ip = 69;
                            continue _fun67950
                        }
                    case 101:
                        return var1;
                    case 103:
                        return var0;
                }
            };
            var2.removeSignedUrlParameters = var4;
            var2.getSignedAttachmentExpiration = var3;
            var3 = function arg0() {
                _fun67951: for (var _fun67951_ip = 0;;) switch (_fun67951_ip) {
                    case 0:
                        var2 = arg0;
                        var4 = var2.attachments;
                        var3 = var4.some;
                        var0 = _closure1_slot13;
                        var0 = var3.bind(var4)(var0);
                        if (var0) {
                            _fun67951_ip = 51;
                            continue _fun67951
                        }
                    case 30:
                        var3 = var2.embeds;
                        var2 = var3.some;
                        var1 = _closure1_slot15;
                        var0 = var2.bind(var3)(var1);
                    case 51:
                        return var0;
                }
            };
            var2.messageHasExpiredAttachmentUrl = var3;
            var1 = function() {
                var0 = undefined;
                var3 = _closure1_slot17;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var2.maybeRefreshAttachmentUrl = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 667, 1457, 507, 2]);