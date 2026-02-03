// intl/IntlLoaderStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun19250: for (var _fun19250_ip = 0;;) switch (_fun19250_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun19250_ip = 297;
                            continue _fun19250
                        }
                    case 15:
                        var _closure4_slot0 = var5;
                        var2 = undefined;
                        var _closure4_slot1 = var2;
                        var6 = _closure1_slot4;
                        var4 = var6.getState;
                        var4 = var4.bind(var6)();
                        _closure4_slot1 = var4;
                        var6 = var4.setLoadingStarted;
                        var6 = var6.bind(var4)(var5);
                        var7 = new Array(0);
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var8 = 3;
                        var8 = var9[var8];
                        var8 = var6.bind(var2)(var8);
                        var10 = var8.intl;
                        var8 = var10.setLocale;
                        var8 = var8.bind(var10)(var5);
                        var8 = var7.push;
                        var8 = var8.bind(var7)();
                        var8 = var7.push;
                        var10 = _closure1_slot3;
                        var3 = function*() { // Environment: var1
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun19252: for (var _fun19252_ip = 0;;) switch (_fun19252_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun19252_ip = 109;
                                            continue _fun19252
                                        }
                                    case 7:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 4;
                                        var1 = var3[var1];
                                        var3 = undefined;
                                        var4 = var4.bind(var3)(var1);
                                        var1 = var4.preloadAllIntlMessageFiles;
                                        var1 = var1.bind(var4)();
                                        SaveGenerator(address = 46);
                                    case 44:
                                        return var1;
                                    case 46:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun19252_ip = 106;
                                            continue _fun19252
                                        }
                                    case 52:
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var2 = 5;
                                        var2 = var5[var2];
                                        var5 = var4.bind(var3)(var2);
                                        var4 = var5.loadAllMessagesInLocale;
                                        var2 = _closure4_slot0;
                                        var2 = var4.bind(var5)(var2);
                                        SaveGenerator(address = 94);
                                    case 92:
                                        return var2;
                                    case 94:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun19252_ip = 103;
                                            continue _fun19252
                                        }
                                    case 100:
                                        return var3;
                                    case 103:
                                        return var2;
                                    case 106:
                                        return var1;
                                    case 109:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var10.bind(var2)(var3);
                        var3 = var3.bind(var2)();
                        var3 = var8.bind(var7)(var3);
                        var8 = var7.push;
                        var3 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot6;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var3 = var3.bind(var2)(var5);
                        var3 = var8.bind(var7)(var3);
                        var8 = var7.push;
                        var3 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot7;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var3 = var3.bind(var2)(var5);
                        var3 = var8.bind(var7)(var3);
                        var8 = var7.push;
                        var3 = 9;
                        var3 = var9[var3];
                        var3 = var6.bind(var2)(var3);
                        var3 = var3.default;
                        var6 = var3.setTags;
                        var3 = {};
                        var3.locale = var5;
                        var3 = var6.bind(var2)(var3);
                        var3 = global;
                        var9 = var3.Promise;
                        var6 = var9.resolve;
                        var6 = var6.bind(var9)();
                        var6 = var8.bind(var7)(var6);
                        var6 = var3.Promise;
                        var3 = var6.all;
                        var6 = var3.bind(var6)(var7);
                        var3 = var6.catch;
                        var1 = function(arg0) { // Environment: var1
                            var3 = _closure4_slot1;
                            var2 = var3.setLoadingFailed;
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 274);
                    case 272:
                        return var1;
                    case 274:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun19250_ip = 294;
                            continue _fun19250
                        }
                    case 280:
                        var3 = var4.setLoadingSucceeded;
                        var3 = var3.bind(var4)(var5);
                        return var2;
                    case 294:
                        return var1;
                    case 297:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun19258: for (var _fun19258_ip = 0;;) switch (_fun19258_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun19258_ip = 132;
                            continue _fun19258
                        }
                    case 10:
                        var2 = _closure1_slot4;
                        var1 = var2.getState;
                        var4 = var1.bind(var2)();
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var5.bind(var2)(var1);
                        var5 = var1.dateFnsLocales;
                        var1 = arg0;
                        var1 = var5[var1];
                        var5 = null;
                        if (!(var5 == var1)) {
                            _fun19258_ip = 101;
                            continue _fun19258
                        }
                    case 68:
                        var5 = var4.setLocaleData;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 2;
                        var3 = var7[var3];
                        var3 = var6.bind(var2)(var3);
                        var3 = var5.bind(var4)(var3);
                        _fun19258_ip = 126;
                        continue _fun19258;
                    case 101:
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 109);
                    case 107:
                        return var1;
                    case 109:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun19258_ip = 129;
                            continue _fun19258
                        }
                    case 115:
                        var3 = var4.setLocaleData;
                        var3 = var3.bind(var4)(var1);
                    case 126:
                        return var2;
                    case 129:
                        return var1;
                    case 132:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun19261: for (var _fun19261_ip = 0;;) switch (_fun19261_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun19261_ip = 205;
                            continue _fun19261
                        }
                    case 13:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var5.bind(var2)(var1);
                        var1 = var1.momentLocales;
                        var1 = var1[var4];
                        var5 = null;
                        if (!(var5 != var1)) {
                            _fun19261_ip = 71;
                            continue _fun19261
                        }
                    case 54:
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 62);
                    case 60:
                        return var1;
                    case 62:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun19261_ip = 202;
                            continue _fun19261
                        }
                    case 71:
                        var5 = new Array(0);
                        var6 = 'nb';
                        var7 = 'no';
                        if (!(var7 !== var4)) {
                            _fun19261_ip = 90;
                            continue _fun19261
                        }
                    case 87:
                        var6 = var4;
                    case 90:
                        var4 = var6.split;
                        var8 = '-';
                        var7 = var4.bind(var6)(var8);
                        var4 = var7.length;
                        var6 = 0;
                        if (!(var4 > var6)) {
                            _fun19261_ip = 154;
                            continue _fun19261
                        }
                    case 115:
                        var9 = var5.push;
                        var4 = var7.join;
                        var4 = var4.bind(var7)(var8);
                        var4 = var9.bind(var5)(var4);
                        var4 = var7.pop;
                        var4 = var4.bind(var7)();
                        var4 = var7.length;
                        if (var4 > var6) {
                            _fun19261_ip = 115;
                            continue _fun19261
                        }
                    case 154:
                        var6 = var5.push;
                        var4 = 'en-US';
                        var4 = var6.bind(var5)(var4);
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 8;
                        var3 = var6[var3];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.locale;
                        var3 = var3.bind(var4)(var5);
                        return var2;
                    case 202:
                        return var1;
                    case 205:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createWithEqualityFn;
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {};
        var2 = false;
        var0.isLoading = var2;
        var4 = undefined;
        var0.inProgressLocale = var4;
        var0.error = var4;
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 2;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var0.localeData = var2;
        var2 = function arg0() {
            var2 = _closure2_slot0;
            var1 = {};
            var0 = true;
            var1.isLoading = var0;
            var0 = arg0;
            var1.inProgressLocale = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.setLoadingStarted = var2;
        var2 = function arg0() {
            _fun19264: for (var _fun19264_ip = 0;;) switch (_fun19264_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var3 = var2.inProgressLocale;
                    var2 = arg0;
                    if (!(var3 === var2)) {
                        _fun19264_ip = 53;
                        continue _fun19264
                    }
                case 26:
                    var2 = _closure2_slot0;
                    var1 = {};
                    var3 = false;
                    var1.isLoading = var3;
                    var1.inProgressLocale = var0;
                    var1.error = var0;
                    var1 = var2.bind(var0)(var1);
                case 53:
                    return var0;
            }
        };
        var0.setLoadingSucceeded = var2;
        var2 = function arg0, arg1() {
            _fun19265: for (var _fun19265_ip = 0;;) switch (_fun19265_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var3 = var2.inProgressLocale;
                    var2 = arg1;
                    if (!(var3 === var2)) {
                        _fun19265_ip = 56;
                        continue _fun19265
                    }
                case 26:
                    var2 = _closure2_slot0;
                    var1 = {};
                    var3 = false;
                    var1.isLoading = var3;
                    var1.inProgressLocale = var0;
                    var3 = arg0;
                    var1.error = var3;
                    var1 = var2.bind(var0)(var1);
                case 56:
                    return var0;
            }
        };
        var0.setLoadingFailed = var2;
        var1 = function arg0() {
            var2 = _closure2_slot0;
            var1 = {};
            var0 = arg0;
            var1.localeData = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.setLocaleData = var1;
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'intl/IntlLoaderStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useIntlLoaderStore = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot4;
        var1 = var2.subscribe;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun19268: for (var _fun19268_ip = 0;;) switch (_fun19268_ip) {
                case 0:
                    var2 = arg0;
                    var0 = arg1;
                    var1 = var0.inProgressLocale;
                    var3 = null;
                    var1 = var3 != var1;
                    if (!var1) {
                        _fun19268_ip = 31;
                        continue _fun19268
                    }
                case 21:
                    var4 = var2.inProgressLocale;
                    var1 = var3 == var4;
                case 31:
                    if (!var1) {
                        _fun19268_ip = 43;
                        continue _fun19268
                    }
                case 34:
                    var2 = var2.error;
                    var1 = var3 == var2;
                case 43:
                    if (!var1) {
                        _fun19268_ip = 66;
                        continue _fun19268
                    }
                case 46:
                    var2 = _closure2_slot0;
                    var1 = var0.inProgressLocale;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 66:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.subscribeToIntlLoadingSuccess = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.setAppLocale = var3;
    var1 = function() {
        _fun19270: for (var _fun19270_ip = 0;;) switch (_fun19270_ip) {
            case 0:
                var2 = _closure1_slot4;
                var3 = undefined;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.localeData;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun19270_ip = 47;
                    continue _fun19270
                }
            case 27:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var0 = var2.bind(var3)(var1);
            case 47:
                return var0;
        }
    };
    var2.useLocaleData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 797, 1687, 1234, 1697, 1272, 2568, 3043, 3045, 1207, 2]);