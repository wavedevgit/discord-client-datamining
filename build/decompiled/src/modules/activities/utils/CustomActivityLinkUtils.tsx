// modules/activities/utils/CustomActivityLinkUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun92418: for (var _fun92418_ip = 0;;) switch (_fun92418_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        var4 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun92418_ip = 348;
                            continue _fun92418
                        }
                    case 16:
                        var1 = null;
                        if (!(var1 != var10)) {
                            _fun92418_ip = 345;
                            continue _fun92418
                        }
                    case 25:
                        if (!(var1 != var4)) {
                            _fun92418_ip = 345;
                            continue _fun92418
                        }
                    case 32:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var9 = 3;
                        var2 = var2[var9];
                        var6 = undefined;
                        var3 = var3.bind(var6)(var2);
                        var2 = var3.decodeCustomActivityLink;
                        var7 = var2.bind(var3)(var4);
                        var3 = var1 == var7;
                        var2 = null;
                        if (var3) {
                            _fun92418_ip = 342;
                            continue _fun92418
                        }
                    case 80:
                        var4 = var7.type;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var9];
                        var3 = var5.bind(var6)(var3);
                        var3 = var3.CustomLinkType;
                        var3 = var3.MANAGED;
                        if (!(var4 !== var3)) {
                            _fun92418_ip = 250;
                            continue _fun92418
                        }
                    case 121:
                        var5 = var7.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var9];
                        var3 = var4.bind(var6)(var3);
                        var3 = var3.CustomLinkType;
                        var3 = var3.QUICK;
                        var4 = null;
                        if (!(var5 === var3)) {
                            _fun92418_ip = 245;
                            continue _fun92418
                        }
                    case 161:
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 4;
                        var3 = var9[var3];
                        var3 = var5.bind(var6)(var3);
                        var9 = var3.HTTP;
                        var5 = var9.get;
                        var3 = {};
                        var13 = _closure1_slot5;
                        var12 = var13.APPLICATION_QUICK_ACTIVITY_LINK;
                        var11 = var7.decodedLinkId;
                        var11 = var12.bind(var13)(var10, var11);
                        var3.url = var11;
                        var11 = false;
                        var3.rejectWithError = var11;
                        var3 = var5.bind(var9)(var3);
                        SaveGenerator(address = 234);
                    case 232:
                        return var3;
                    case 234:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun92418_ip = 247;
                            continue _fun92418
                        }
                    case 240:
                        var4 = var3.body;
                    case 245:
                        _fun92418_ip = 334;
                        continue _fun92418;
                    case 247:
                        return var3;
                    case 250:
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 4;
                        var3 = var9[var3];
                        var3 = var5.bind(var6)(var3);
                        var6 = var3.HTTP;
                        var5 = var6.get;
                        var3 = {};
                        var9 = _closure1_slot5;
                        var8 = var9.APPLICATION_MANAGED_ACTIVITY_LINK;
                        var7 = var7.decodedLinkId;
                        var7 = var8.bind(var9)(var10, var7);
                        var3.url = var7;
                        var7 = false;
                        var3.rejectWithError = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 323);
                    case 321:
                        return var3;
                    case 323:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun92418_ip = 339;
                            continue _fun92418
                        }
                    case 329:
                        var4 = var3.body;
                    case 334:
                        var2 = var4;
                        _fun92418_ip = 342;
                        continue _fun92418;
                    case 339:
                        return var3;
                    case 342:
                        return var2;
                    case 345:
                        return var1;
                    case 348:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun92421: for (var _fun92421_ip = 0;;) switch (_fun92421_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 5);
                        if (var5) {
                            _fun92421_ip = 170;
                            continue _fun92421
                        }
                    case 13:
                        var3 = arg0;
                        var1 = arg1;
                        var7 = undefined;
                        var2 = undefined;
                        var4 = undefined;
                        var6 = null;
                        var9 = var6 != var8;
                        var5 = undefined;
                        if (!var9) {
                            _fun92421_ip = 39;
                            continue _fun92421
                        }
                    case 36:
                        var5 = var8;
                    case 39:
                        var2 = var5;
                        var5 = var1;
                        if (!(var6 != var5)) {
                            _fun92421_ip = 160;
                            continue _fun92421
                        }
                    case 49:
                        var5 = var2;
                        if (!(var6 == var5)) {
                            _fun92421_ip = 147;
                            continue _fun92421
                        }
                    case 56: // try_start_0
                        var5 = _closure1_slot7;
                        var1 = var5.bind(var7)(var3, var1);
                        SaveGenerator(address = 73);
                    case 71:
                        return var1;
                    case 73:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun92421_ip = 129;
                            continue _fun92421
                        }
                    case 79:
                        var4 = var1;
                        if (!(var6 != var1)) {
                            _fun92421_ip = 113;
                            continue _fun92421
                        }
                    case 86:
                        var3 = {};
                        var5 = var2;
                        if (!(var6 == var5)) {
                            _fun92421_ip = 103;
                            continue _fun92421
                        }
                    case 95:
                        var4 = var4.custom_id;
                        _fun92421_ip = 106;
                        continue _fun92421;
                    case 103:
                        var4 = var2;
                    case 106:
                        var3.customId = var4;
                        _fun92421_ip = 126;
                        continue _fun92421;
                    case 113:
                        var4 = {};
                        var5 = var2;
                        var4.customId = var5;
                        var3 = var4;
                    case 126: // try_end0
                        return var3;
                    case 129:
                        return var1;
                    case 132: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var1 = {};
                        var3 = var2;
                        var1.customId = var3;
                        return var1;
                    case 147:
                        var1 = {};
                        var3 = var2;
                        var1.customId = var3;
                        return var1;
                    case 160:
                        var1 = {};
                        var1.customId = var2;
                        return var1;
                    case 170:
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
    var _closure1_slot10 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun92425: for (var _fun92425_ip = 0;;) switch (_fun92425_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var5 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun92425_ip = 168;
                            continue _fun92425
                        }
                    case 16:
                        var4 = null;
                        if (!(var4 != var6)) {
                            _fun92425_ip = 140;
                            continue _fun92425
                        }
                    case 22:
                        if (!(var4 != var5)) {
                            _fun92425_ip = 140;
                            continue _fun92425
                        }
                    case 26:
                        var1 = _closure1_slot7;
                        var2 = undefined;
                        var1 = var1.bind(var2)(var6, var5);
                        SaveGenerator(address = 45);
                    case 43:
                        return var1;
                    case 45:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun92425_ip = 137;
                            continue _fun92425
                        }
                    case 51:
                        if (!(var4 != var1)) {
                            _fun92425_ip = 109;
                            continue _fun92425
                        }
                    case 55:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 5;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS';
                        var3.type = var7;
                        var3.applicationId = var6;
                        var3.link = var1;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 109:
                        var2 = global;
                        var4 = var2.Promise;
                        var3 = var4.reject;
                        var2 = 'fetchCustomActivityLink body is null';
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 137:
                        return var1;
                    case 140:
                        var1 = global;
                        var3 = var1.Promise;
                        var2 = var3.reject;
                        var1 = 'appId or linkId null';
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    case 168:
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
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var8);
    var0 = 0;
    var8 = var7[var0];
    var0 = undefined;
    var8 = var9.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var7[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var7[var8];
    var8 = var6.bind(var0)(var8);
    var8 = var8.Endpoints;
    var _closure1_slot5 = var8;
    var5 = var5.Set;
    var8 = var5.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var5
        }
    });
    var15 = var8;
    var5 = new var15[var5](var14);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot6 = var5;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/utils/CustomActivityLinkUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.fetchCustomActivityLink = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getCustomActivityLinkParams = var4;
    var4 = function arg0() {
        _fun92427: for (var _fun92427_ip = 0;;) switch (_fun92427_ip) {
            case 0:
                var6 = arg0;
                var0 = null;
                if (!(var0 == var6)) {
                    _fun92427_ip = 13;
                    continue _fun92427
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = global;
                var1 = var0.location;
                var11 = var1.protocol;
                var1 = var0.window;
                var1 = var1.GLOBAL_ENV;
                var9 = var1.CDN_HOST;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var12 = '';
                var10 = '//';
                var8 = '/attachments-quick-links/';
                var7 = var6;
                var0 = var12[var3](var11, var10, var9, var8, var7, var6);
                return var0;
        }
    };
    var2.getQuickLinkImage = var4;
    var2.loadCustomActivityLink = var3;
    var1 = function arg0, arg1() {
        _fun92428: for (var _fun92428_ip = 0;;) switch (_fun92428_ip) {
            case 0:
                var6 = arg0;
                var4 = arg1;
                var1 = _closure1_slot4;
                var0 = var1.getOne;
                var0 = var0.bind(var1)(var6, var4);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun92428_ip = 80;
                    continue _fun92428
                }
            case 33:
                var5 = _closure1_slot6;
                var3 = var5.has;
                var3 = var3.bind(var5)(var4);
                var0 = null;
                if (var3) {
                    _fun92428_ip = 80;
                    continue _fun92428
                }
            case 52:
                var5 = _closure1_slot10;
                var3 = undefined;
                var3 = var5.bind(var3)(var6, var4);
                var3 = _closure1_slot6;
                var2 = var3.add;
                var2 = var2.bind(var3)(var4);
                var0 = null;
            case 80:
                return var0;
        }
    };
    var2.getOrFetchCustomActivityLink = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 12058, 660, 12060, 507, 806, 2]);