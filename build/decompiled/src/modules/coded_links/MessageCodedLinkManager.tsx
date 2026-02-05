// modules/coded_links/MessageCodedLinkManager.tsx
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
        _fun113676: for (var _fun113676_ip = 0;;) switch (_fun113676_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun113676_ip = 76;
                continue _fun113676;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun113679: for (var _fun113679_ip = 0;;) switch (_fun113679_ip) {
            case 0:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = arg0;
                var1 = var1.content;
                var3 = var2.bind(var0)(var1);
                var1 = null;
                var1 = var1 != var3;
                if (!var1) {
                    _fun113679_ip = 58;
                    continue _fun113679
                }
            case 47:
                var4 = var3.length;
                var2 = 0;
                var1 = var2 !== var4;
            case 58:
                if (!var1) {
                    _fun113679_ip = 80;
                    continue _fun113679
                }
            case 61:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun113680: for (var _fun113680_ip = 0;;) switch (_fun113680_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = var0.type;
                            var5 = var0.code;
                            var _closure3_slot0 = var5;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var6 = 9;
                            var2 = var0[var6];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.INVITE;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 794;
                                continue _fun113680
                            }
                        case 63:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.TEMPLATE;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 745;
                                continue _fun113680
                            }
                        case 99:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.BUILD_OVERRIDE;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 135:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.MANUAL_BUILD_OVERRIDE;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 171:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.EVENT;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 207:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.CHANNEL_LINK;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 243:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.APP_DIRECTORY_PROFILE;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 712;
                                continue _fun113680
                            }
                        case 279:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.ACTIVITY_BOOKMARK;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 315:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.EMBEDDED_ACTIVITY_INVITE;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 351:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.GUILD_PRODUCT;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 387:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.SERVER_SHOP;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 423:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.SOCIAL_LAYER_STOREFRONT;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 459:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.QUESTS_EMBED;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 495:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.APP_DIRECTORY_STOREFRONT;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 531:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.APP_DIRECTORY_STOREFRONT_SKU;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 567:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.APP_OAUTH2_LINK;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 603:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.COLLECTIBLES_SHOP;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 639:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var6];
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.EXPERIMENT;
                            if (!(var7 !== var2)) {
                                _fun113680_ip = 841;
                                continue _fun113680
                            }
                        case 675:
                            var2 = global;
                            var3 = var2.Error;
                            var2 = var2.HermesInternal;
                            var6 = var2.concat;
                            var2 = 'Unknown coded link type: ';
                            var2 = var6.bind(var2)(var7);
                            var2 = var3.bind(var0)(var2);
                            throw var2;
                        case 712:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 14;
                            var2 = var6[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getEmbedApplication;
                            var2 = var2.bind(var3)(var5);
                            _fun113680_ip = 841;
                            continue _fun113680;
                        case 745:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 10;
                            var2 = var5[var2];
                            var5 = var3.bind(var0)(var2);
                            var3 = var5.queueMessageLinkFetch;
                            var6 = _closure1_slot8;
                            var2 = function*() { // Environment: var1
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun113685: for (var _fun113685_ip = 0;;) switch (_fun113685_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun113685_ip = 93;
                                                continue _fun113685
                                            }
                                        case 7:
                                            var5 = _closure1_slot9;
                                            var4 = var5.getGuildTemplate;
                                            var3 = _closure3_slot0;
                                            var4 = var4.bind(var5)(var3);
                                            var3 = null;
                                            if (!(var3 == var4)) {
                                                _fun113685_ip = 85;
                                                continue _fun113685
                                            }
                                        case 38:
                                            var4 = _closure1_slot1;
                                            var3 = _closure1_slot2;
                                            var2 = 13;
                                            var3 = var3[var2];
                                            var2 = undefined;
                                            var3 = var4.bind(var2)(var3);
                                            var2 = var3.resolveGuildTemplate;
                                            var1 = _closure3_slot0;
                                            var1 = var2.bind(var3)(var1);
                                            SaveGenerator(address = 79);
                                        case 77:
                                            return var1;
                                        case 79:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                            if (var2) {
                                                _fun113685_ip = 90;
                                                continue _fun113685
                                            }
                                        case 85:
                                            var2 = undefined;
                                            return var2;
                                        case 90:
                                            return var1;
                                        case 93:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var2 = var6.bind(var0)(var2);
                            var2 = var3.bind(var5)(var2);
                            _fun113680_ip = 841;
                            continue _fun113680;
                        case 794:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 10;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.queueMessageLinkFetch;
                            var4 = _closure1_slot8;
                            var1 = function*() { // Environment: var1
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun113682: for (var _fun113682_ip = 0;;) switch (_fun113682_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun113682_ip = 145;
                                                continue _fun113682
                                            }
                                        case 10:
                                            var5 = _closure1_slot10;
                                            var4 = var5.getInvite;
                                            var3 = _closure3_slot0;
                                            var4 = var4.bind(var5)(var3);
                                            var3 = null;
                                            if (!(var3 == var4)) {
                                                _fun113682_ip = 137;
                                                continue _fun113682
                                            }
                                        case 41:
                                            var4 = _closure1_slot1;
                                            var5 = _closure1_slot2;
                                            var1 = 11;
                                            var1 = var5[var1];
                                            var3 = undefined;
                                            var7 = var4.bind(var3)(var1);
                                            var6 = var7.dispatch;
                                            var1 = {};
                                            var8 = 'INVITE_RESOLVE';
                                            var1.type = var8;
                                            var2 = _closure3_slot0;
                                            var1.code = var2;
                                            var1 = var6.bind(var7)(var1);
                                            var1 = 12;
                                            var1 = var5[var1];
                                            var1 = var4.bind(var3)(var1);
                                            var3 = var1.bind(var3)(var2);
                                            var2 = var3.then;
                                            var1 = function(arg0) { // Environment: var1
                                                _fun113683: for (var _fun113683_ip = 0;;) switch (_fun113683_ip) {
                                                    case 0:
                                                        var0 = arg0;
                                                        var4 = var0.invite;
                                                        var3 = var0.code;
                                                        var5 = var0.banned;
                                                        var0 = null;
                                                        if (!(var0 == var4)) {
                                                            _fun113683_ip = 84;
                                                            continue _fun113683
                                                        }
                                                    case 26:
                                                        var2 = _closure1_slot1;
                                                        var1 = _closure1_slot2;
                                                        var0 = 11;
                                                        var1 = var1[var0];
                                                        var0 = undefined;
                                                        var2 = var2.bind(var0)(var1);
                                                        var1 = var2.dispatch;
                                                        var0 = {};
                                                        var6 = 'INVITE_RESOLVE_FAILURE';
                                                        var0.type = var6;
                                                        var0.code = var3;
                                                        var0.banned = var5;
                                                        var0 = var1.bind(var2)(var0);
                                                        _fun113683_ip = 138;
                                                        continue _fun113683;
                                                    case 84:
                                                        var2 = _closure1_slot1;
                                                        var1 = _closure1_slot2;
                                                        var0 = 11;
                                                        var1 = var1[var0];
                                                        var0 = undefined;
                                                        var2 = var2.bind(var0)(var1);
                                                        var1 = var2.dispatch;
                                                        var0 = {};
                                                        var5 = 'INVITE_RESOLVE_SUCCESS';
                                                        var0.type = var5;
                                                        var0.invite = var4;
                                                        var0.code = var3;
                                                        var0 = var1.bind(var2)(var0);
                                                    case 138:
                                                        var0 = undefined;
                                                        return var0;
                                                }
                                            };
                                            var1 = var2.bind(var3)(var1);
                                            SaveGenerator(address = 131);
                                        case 129:
                                            return var1;
                                        case 131:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                            if (var2) {
                                                _fun113682_ip = 142;
                                                continue _fun113682
                                            }
                                        case 137:
                                            var2 = undefined;
                                            return var2;
                                        case 142:
                                            return var1;
                                        case 145:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var1 = var4.bind(var0)(var1);
                            var1 = var2.bind(var3)(var1);
                        case 841:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 80:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function() {
            _fun113687: for (var _fun113687_ip = 0;;) switch (_fun113687_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113687_ip = 62;
                        continue _fun113687
                    }
                case 49:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun113687_ip = 100;
                    continue _fun113687;
                case 62:
                    var5 = global;
                    var8 = var5.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 100:
                    var0 = var2.bind(var3)(var4, var0);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 15;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var1 = _closure1_slot12;
                    var1 = var2.bind(var3)(var0, var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/coded_links/MessageCodedLinkManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 5, 6548, 3323, 3322, 3327, 14593, 806, 12141, 6508, 13898, 14600, 4299, 2]);