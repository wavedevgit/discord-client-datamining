// actions/GIFPickerActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function arg0() {
        _fun73257: for (var _fun73257_ip = 0;;) switch (_fun73257_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun73257_ip = 13;
                    continue _fun73257
                }
            case 9:
                var6 = {};
                _fun73257_ip = 26;
                continue _fun73257;
            case 13:
                var0 = {};
                var1 = 1;
                var0[var2] = var1;
                var6 = var0;
            case 26:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 4;
                var1 = var7[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot5;
                var2 = var1.SEARCH_STARTED;
                var1 = {};
                var8 = _closure1_slot7;
                var8 = var8.GIF;
                var1.search_type = var8;
                var9 = _closure1_slot4;
                var8 = var9.getAnalyticsID;
                var8 = var8.bind(var9)();
                var1.load_id = var8;
                var8 = global;
                var9 = var8.Object;
                var8 = var9.keys;
                var8 = var8.bind(var9)(var6);
                var8 = var8.length;
                var1.num_modifiers = var8;
                var1.modifiers = var6;
                var6 = _closure1_slot0;
                var5 = 5;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.getProviderForAPIRequest;
                var5 = var5.bind(var6)();
                var1.gif_provider = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot13 = var6;
    var5 = function arg0, arg1() {
        _fun73258: for (var _fun73258_ip = 0;;) switch (_fun73258_ip) {
            case 0:
                var3 = arg0;
                var6 = arguments[2];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun73258_ip = 14;
                    continue _fun73258
                }
            case 12:
                var6 = {};
            case 14:
                var2 = var6.startTime;
                var1 = null;
                var5 = Object.create(var1);
                var4 = 0;
                var5.startTime = var4;
                var13 = {};
                var12 = var6;
                var11 = var5;
                var9 = copyDataProperties(var13, var12, var11);
                var10 = {
                    'offset': 0,
                    'limit': null
                };
                var4 = var3.length;
                var10.totalResults = var4;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 6;
                var4 = var7[var4];
                var8 = var6.bind(var0)(var4);
                var7 = var8.calculateAnalyticsMetadata;
                var6 = _closure1_slot4;
                var4 = var6.getAnalyticsID;
                var6 = var4.bind(var6)();
                var4 = {};
                var13 = var4;
                var12 = var10;
                var10 = copyDataProperties(var13, var12);
                var13 = var4;
                var12 = var9;
                var9 = copyDataProperties(var13, var12);
                var9 = var3.length;
                var3 = 'results';
                var4[var3] = var9;
                var3 = arg1;
                var8 = var7.bind(var8)(var6, var3, var4);
                if (!(var1 != var2)) {
                    _fun73258_ip = 191;
                    continue _fun73258
                }
            case 161:
                var6 = {};
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var1 = var1 - var2;
                var6.load_duration_ms = var1;
                _fun73258_ip = 193;
                continue _fun73258;
            case 191:
                var6 = {};
            case 193:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 4;
                var1 = var7[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.trackWithMetadata;
                var1 = _closure1_slot5;
                var2 = var1.SEARCH_RESULT_VIEWED;
                var1 = {};
                var13 = var1;
                var12 = var8;
                var8 = copyDataProperties(var13, var12);
                var13 = var1;
                var12 = var6;
                var6 = copyDataProperties(var13, var12);
                var6 = _closure1_slot0;
                var5 = 5;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.getProviderForAPIRequest;
                var6 = var5.bind(var6)();
                var5 = 'gif_provider';
                var1[var5] = var6;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot14 = var5;
    var12 = function arg0, arg1, arg2() {
        var8 = arg0;
        var3 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var3;
        var _closure2_slot2 = var6;
        var0 = global;
        var2 = var0.Date;
        var0 = var2.now;
        var0 = var0.bind(var2)();
        var _closure2_slot3 = var0;
        var2 = _closure1_slot13;
        var0 = undefined;
        var2 = var2.bind(var0)(var3);
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 7;
        var2 = var10[var2];
        var2 = var9.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {};
        var5 = _closure1_slot6;
        var5 = var5.GIFS_SEARCH;
        var2.url = var5;
        var5 = {};
        var5.q = var8;
        var11 = _closure1_slot4;
        var8 = var11.getSelectedFormat;
        var8 = var8.bind(var11)();
        var5.media_format = var8;
        var8 = 5;
        var8 = var10[var8];
        var9 = var9.bind(var0)(var8);
        var8 = var9.getProviderForAPIRequest;
        var8 = var8.bind(var9)();
        var5.provider = var8;
        var7 = _closure1_slot3;
        var7 = var7.locale;
        var5.locale = var7;
        var5.limit = var6;
        var2.query = var5;
        var5 = true;
        var2.oldFormErrors = var5;
        var2.rejectWithError = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg0) { // Environment: var1
            var0 = arg0;
            var4 = var0.body;
            var6 = _closure1_slot14;
            var3 = _closure2_slot1;
            var2 = {};
            var0 = _closure2_slot3;
            var2.startTime = var0;
            var0 = _closure2_slot2;
            var2.limit = var0;
            var0 = undefined;
            var2 = var6.bind(var0)(var4, var3, var2);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var6 = 'GIF_PICKER_QUERY_SUCCESS';
            var1.type = var6;
            var5 = _closure2_slot0;
            var1.query = var5;
            var1.items = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'GIF_PICKER_QUERY_FAILURE';
            var0.type = var3;
            var3 = _closure2_slot0;
            var0.query = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot15 = var12;
    var4 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {
            'type': 'GIF_PICKER_QUERY',
            'query': ''
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot16 = var4;
    var3 = function arg0() {
        _fun73263: for (var _fun73263_ip = 0;;) switch (_fun73263_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var5 = undefined;
                var3 = var3.bind(var5)(var0);
                var0 = var3.toURLSafe;
                var4 = var0.bind(var3)(var1);
                var3 = null;
                var0 = var1;
                if (!(var3 != var4)) {
                    _fun73263_ip = 122;
                    continue _fun73263
                }
            case 48:
                var7 = _closure1_slot0;
                var3 = _closure1_slot2;
                var6 = 12;
                var3 = var3[var6];
                var7 = var7.bind(var5)(var3);
                var3 = var7.isAttachmentUrl;
                var3 = var3.bind(var7)(var4);
                if (!var3) {
                    _fun73263_ip = 119;
                    continue _fun73263
                }
            case 82:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var3 = var3.bind(var5)(var2);
                var2 = var3.removeSignedUrlParameters;
                var3 = var2.bind(var3)(var4);
                var2 = var3.toString;
                var1 = var2.bind(var3)();
            case 119:
                var0 = var1;
            case 122:
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var0 = function arg0() {
        _fun73264: for (var _fun73264_ip = 0;;) switch (_fun73264_ip) {
            case 0:
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 11;
                var0 = var3[var0];
                var5 = undefined;
                var3 = var1.bind(var5)(var0);
                var1 = var3.toURLSafe;
                var0 = arg0;
                var0 = var0.src;
                var4 = var1.bind(var3)(var0);
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun73264_ip = 119;
                    continue _fun73264
                }
            case 54:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 12;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.isExternalProxiedAttachmentUrl;
                var1 = var1.bind(var3)(var4);
                if (var1) {
                    _fun73264_ip = 116;
                    continue _fun73264
                }
            case 88:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var3 = var3.bind(var5)(var2);
                var2 = var3.isAttachmentUrl;
                var1 = var2.bind(var3)(var4);
            case 116:
                var0 = var1;
            case 119:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var13 = var0.Object;
    var11 = var13.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var13)(var2, var0, var7);
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var10.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var11 = var7.AnalyticEvents;
    var _closure1_slot5 = var11;
    var11 = var7.Endpoints;
    var _closure1_slot6 = var11;
    var11 = var7.SearchTypes;
    var _closure1_slot7 = var11;
    var7 = var7.GIFPickerResultTypes;
    var _closure1_slot8 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var11 = var7.MAX_FAVORITE_GIFS_SIZE;
    var _closure1_slot9 = var11;
    var7 = var7.UserSettingsDelay;
    var _closure1_slot10 = var7;
    var7 = /-/g;
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var9[var7];
    var11 = var10.bind(var0)(var7);
    var10 = var11.debounce;
    var7 = 250;
    var7 = var10.bind(var11)(var12, var7);
    var _closure1_slot12 = var7;
    var7 = 18;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'actions/GIFPickerActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var2.trackSearchStart = var6;
    var2.trackSearchResultViewed = var5;
    var5 = function arg0, arg1() {
        _fun73265: for (var _fun73265_ip = 0;;) switch (_fun73265_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var5 = arguments[2];
                var2 = arguments[3];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun73265_ip = 20;
                    continue _fun73265
                }
            case 18:
                var5 = false;
            case 20:
                var1 = '';
                if (!(var1 !== var4)) {
                    _fun73265_ip = 107;
                    continue _fun73265
                }
            case 28:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 8;
                var6 = var8[var6];
                var8 = var7.bind(var0)(var6);
                var7 = var8.dispatch;
                var6 = {};
                var9 = 'GIF_PICKER_QUERY';
                var6.type = var9;
                var6.query = var4;
                var6 = var7.bind(var8)(var6);
                if (var5) {
                    _fun73265_ip = 94;
                    continue _fun73265
                }
            case 81:
                var5 = _closure1_slot12;
                var5 = var5.bind(var0)(var4, var3, var2);
                _fun73265_ip = 118;
                continue _fun73265;
            case 94:
                var1 = _closure1_slot15;
                var1 = var1.bind(var0)(var4, var3, var2);
                _fun73265_ip = 118;
                continue _fun73265;
            case 107:
                var1 = _closure1_slot16;
                var1 = var1.bind(var0)();
            case 118:
                return var0;
        }
    };
    var2.search = var5;
    var5 = function arg0() {
        _fun73266: for (var _fun73266_ip = 0;;) switch (_fun73266_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                var1 = '';
                var1 = var1 !== var6;
                if (!var1) {
                    _fun73266_ip = 26;
                    continue _fun73266
                }
            case 20:
                var2 = null;
                var1 = var2 != var6;
            case 26:
                if (!var1) {
                    _fun73266_ip = 174;
                    continue _fun73266
                }
            case 32:
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var8 = undefined;
                var1 = var9.bind(var8)(var1);
                var3 = var1.HTTP;
                var2 = var3.get;
                var1 = {};
                var4 = _closure1_slot6;
                var4 = var4.GIFS_SUGGEST;
                var1.url = var4;
                var4 = {};
                var4.q = var6;
                var6 = 5;
                var7 = var7[var6];
                var8 = var9.bind(var8)(var7);
                var7 = var8.getProviderForAPIRequest;
                var7 = var7.bind(var8)();
                var4.provider = var7;
                var4.limit = var6;
                var5 = _closure1_slot3;
                var5 = var5.locale;
                var4.locale = var5;
                var1.query = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var1.rejectWithError = var4;
                var2 = var2.bind(var3)(var1);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var4 = var0.body;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'GIF_PICKER_SUGGESTIONS_SUCCESS';
                    var1.type = var5;
                    var5 = _closure2_slot0;
                    var1.query = var5;
                    var1.items = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 174:
                var0 = undefined;
                return var0;
        }
    };
    var2.fetchSuggestions = var5;
    var2.resetSearch = var4;
    var4 = function arg0() {
        _fun73268: for (var _fun73268_ip = 0;;) switch (_fun73268_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.type;
                var9 = var0.index;
                var14 = var0.offset;
                var13 = var0.limit;
                var12 = var0.results;
                var11 = var0.totalResults;
                var6 = var0.query;
                var7 = var0.gifId;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 6;
                var1 = var3[var0];
                var0 = undefined;
                var8 = var2.bind(var0)(var1);
                var5 = var8.calculateAnalyticsMetadata;
                var2 = _closure1_slot4;
                var1 = var2.getAnalyticsID;
                var2 = var1.bind(var2)();
                var1 = {};
                var1.offset = var14;
                var1.limit = var13;
                var1.results = var12;
                var1.totalResults = var11;
                var16 = var5.bind(var8)(var2, var10, var1);
                var2 = _closure1_slot1;
                var1 = 4;
                var1 = var3[var1];
                var5 = var2.bind(var0)(var1);
                var3 = var5.trackWithMetadata;
                var1 = _closure1_slot5;
                var2 = var1.SEARCH_RESULT_SELECTED;
                var1 = {};
                var17 = var1;
                var8 = copyDataProperties(var17, var16);
                var8 = 'index_num';
                var1[var8] = var9;
                var9 = 'GIF Picker';
                var8 = 'source_object';
                var1[var8] = var9;
                var8 = 'query';
                var1[var8] = var6;
                var1 = var3.bind(var5)(var2, var1);
                var1 = null;
                if (!(var1 != var7)) {
                    _fun73268_ip = 314;
                    continue _fun73268
                }
            case 209:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var5 = var2.bind(var0)(var1);
                var1 = var5.getProviderForAPIRequest;
                var5 = var1.bind(var5)();
                var1 = 7;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var3 = var1.HTTP;
                var2 = var3.post;
                var1 = {};
                var4 = _closure1_slot6;
                var4 = var4.GIFS_SELECT;
                var1.url = var4;
                var4 = {};
                var4.id = var7;
                var4.q = var6;
                var4.provider = var5;
                var1.body = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var1.rejectWithError = var4;
                var1 = var2.bind(var3)(var1);
            case 314:
                return var0;
        }
    };
    var2.trackSelectGIF = var4;
    var4 = function() {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 10;
        var2 = var4[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.v4;
        var6 = var2.bind(var3)();
        var5 = var6.replace;
        var3 = _closure1_slot11;
        var2 = '';
        var8 = var5.bind(var6)(var3, var2);
        var _closure2_slot0 = var8;
        var3 = _closure1_slot1;
        var2 = 4;
        var2 = var4[var2];
        var7 = var3.bind(var0)(var2);
        var6 = var7.trackWithMetadata;
        var2 = _closure1_slot5;
        var5 = var2.SEARCH_OPENED;
        var2 = {};
        var9 = _closure1_slot7;
        var9 = var9.GIF;
        var2.search_type = var9;
        var2.load_id = var8;
        var2 = var6.bind(var7)(var5, var2);
        var2 = 8;
        var2 = var4[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.wait;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GIF_PICKER_INITIALIZE';
            var1.type = var4;
            var4 = _closure2_slot0;
            var1.analyticsID = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.initializeSearch = var4;
    var4 = function() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 7;
        var1 = var8[var0];
        var0 = undefined;
        var1 = var7.bind(var0)(var1);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {};
        var4 = _closure1_slot6;
        var4 = var4.GIFS_TRENDING;
        var1.url = var4;
        var4 = {};
        var6 = 5;
        var6 = var8[var6];
        var7 = var7.bind(var0)(var6);
        var6 = var7.getProviderForAPIRequest;
        var6 = var6.bind(var7)();
        var4.provider = var6;
        var6 = _closure1_slot3;
        var6 = var6.locale;
        var4.locale = var6;
        var6 = _closure1_slot4;
        var5 = var6.getSelectedFormat;
        var5 = var5.bind(var6)();
        var4.media_format = var5;
        var1.query = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.body;
            var4 = var0.categories;
            var5 = var0.gifs;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var6 = 'GIF_PICKER_TRENDING_FETCH_SUCCESS';
            var1.type = var6;
            var1.trendingCategories = var4;
            var4 = 0;
            var4 = var5[var4];
            var1.trendingGIFPreview = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.fetchTrending = var4;
    var4 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var0 = global;
        var2 = var0.Date;
        var0 = var2.now;
        var0 = var0.bind(var2)();
        var _closure2_slot1 = var0;
        var3 = _closure1_slot13;
        var0 = _closure1_slot8;
        var2 = var0.TRENDING_GIFS;
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 7;
        var2 = var10[var2];
        var2 = var9.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {};
        var5 = _closure1_slot6;
        var5 = var5.GIFS_TRENDING_GIFS;
        var2.url = var5;
        var5 = {};
        var11 = _closure1_slot4;
        var8 = var11.getSelectedFormat;
        var8 = var8.bind(var11)();
        var5.media_format = var8;
        var8 = 5;
        var8 = var10[var8];
        var9 = var9.bind(var0)(var8);
        var8 = var9.getProviderForAPIRequest;
        var8 = var8.bind(var9)();
        var5.provider = var8;
        var7 = _closure1_slot3;
        var7 = var7.locale;
        var5.locale = var7;
        var5.limit = var6;
        var2.query = var5;
        var5 = true;
        var2.oldFormErrors = var5;
        var2.rejectWithError = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg0) { // Environment: var1
            var0 = arg0;
            var4 = var0.body;
            var5 = _closure1_slot14;
            var0 = _closure1_slot8;
            var3 = var0.TRENDING_GIFS;
            var2 = {};
            var6 = _closure2_slot1;
            var2.startTime = var6;
            var0 = _closure2_slot0;
            var2.limit = var0;
            var0 = undefined;
            var2 = var5.bind(var0)(var4, var3, var2);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'GIF_PICKER_QUERY_SUCCESS';
            var1.type = var5;
            var1.items = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GIF_PICKER_QUERY_FAILURE';
            var1.type = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.fetchTrendingGIFs = var4;
    var2.gifUrlKey = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 13;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var5 = var3.FrecencyUserSettingsActionCreators;
        var4 = var5.updateAsync;
        var2 = _closure1_slot10;
        var3 = var2.INFREQUENT_USER_ACTION;
        var2 = 'favoriteGifs';
        var1 = function(arg0) { // Environment: var1
            _fun73277: for (var _fun73277_ip = 0;;) switch (_fun73277_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var4 = 9;
                    var0 = var0[var4];
                    var7 = undefined;
                    var5 = var2.bind(var7)(var0);
                    var2 = var5.max;
                    var0 = global;
                    var8 = var0.Object;
                    var6 = var8.values;
                    var0 = var1.gifs;
                    var8 = var6.bind(var8)(var0);
                    var6 = var8.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.order;
                        return var0;
                    };
                    var0 = var6.bind(var8)(var0);
                    var0 = var2.bind(var5)(var0);
                    var9 = null;
                    var2 = var9 != var0;
                    var8 = 0;
                    if (!var2) {
                        _fun73277_ip = 95;
                        continue _fun73277
                    }
                case 92:
                    var8 = var0;
                case 95:
                    var5 = _closure2_slot0;
                    var2 = _closure1_slot18;
                    var2 = var2.bind(var7)(var5);
                    if (!var2) {
                        _fun73277_ip = 124;
                        continue _fun73277
                    }
                case 114:
                    var2 = var5.gifSrc;
                    if (!(var9 == var2)) {
                        _fun73277_ip = 132;
                        continue _fun73277
                    }
                case 124:
                    var6 = var5.src;
                    _fun73277_ip = 138;
                    continue _fun73277;
                case 132:
                    var6 = var5.gifSrc;
                case 138:
                    var2 = _closure1_slot18;
                    var2 = var2.bind(var7)(var5);
                    if (!var2) {
                        _fun73277_ip = 269;
                        continue _fun73277
                    }
                case 150:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 11;
                    var5 = var11[var5];
                    var10 = var10.bind(var7)(var5);
                    var5 = var10.toURLSafe;
                    var10 = var5.bind(var10)(var6);
                    var11 = var9 == var10;
                    var5 = false;
                    if (var11) {
                        _fun73277_ip = 266;
                        continue _fun73277
                    }
                case 190:
                    var11 = var10.pathname;
                    var10 = var11.toLowerCase;
                    var13 = var10.bind(var11)();
                    var11 = var13.endsWith;
                    var10 = '.webp';
                    var10 = var11.bind(var13)(var10);
                    if (var10) {
                        _fun73277_ip = 243;
                        continue _fun73277
                    }
                case 226:
                    var12 = var13.endsWith;
                    var11 = '.avif';
                    var10 = var12.bind(var13)(var11);
                case 243:
                    if (var10) {
                        _fun73277_ip = 263;
                        continue _fun73277
                    }
                case 246:
                    var12 = var13.endsWith;
                    var11 = '.gif';
                    var10 = var12.bind(var13)(var11);
                case 263:
                    var5 = var10;
                case 266:
                    var2 = var5;
                case 269:
                    var10 = var6;
                    if (!var2) {
                        _fun73277_ip = 471;
                        continue _fun73277
                    }
                case 278:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var5 = 11;
                    var5 = var12[var5];
                    var11 = var11.bind(var7)(var5);
                    var5 = var11.toURLSafe;
                    var11 = var5.bind(var11)(var6);
                    var5 = var6;
                    if (!(var9 != var11)) {
                        _fun73277_ip = 468;
                        continue _fun73277
                    }
                case 319:
                    var12 = var11.pathname;
                    var9 = var12.toLowerCase;
                    var15 = var9.bind(var12)();
                    var12 = var15.endsWith;
                    var9 = '.webp';
                    var13 = var12.bind(var15)(var9);
                    var12 = var15.endsWith;
                    var9 = '.avif';
                    var9 = var12.bind(var15)(var9);
                    var14 = var15.endsWith;
                    var12 = '.gif';
                    var12 = var14.bind(var15)(var12);
                    if (var13) {
                        _fun73277_ip = 395;
                        continue _fun73277
                    }
                case 389:
                    if (var9) {
                        _fun73277_ip = 395;
                        continue _fun73277
                    }
                case 392:
                    if (!var12) {
                        _fun73277_ip = 465;
                        continue _fun73277
                    }
                case 395:
                    if (var9) {
                        _fun73277_ip = 401;
                        continue _fun73277
                    }
                case 398:
                    var9 = var12;
                case 401:
                    if (!var9) {
                        _fun73277_ip = 431;
                        continue _fun73277
                    }
                case 404:
                    var14 = var11.searchParams;
                    var13 = var14.set;
                    var12 = 'format';
                    var9 = 'webp';
                    var9 = var13.bind(var14)(var12, var9);
                case 431:
                    var14 = var11.searchParams;
                    var13 = var14.set;
                    var12 = 'animated';
                    var9 = 'true';
                    var9 = var13.bind(var14)(var12, var9);
                    var9 = var11.toString;
                    var6 = var9.bind(var11)();
                case 465:
                    var5 = var6;
                case 468:
                    var10 = var5;
                case 471:
                    if (var2) {
                        _fun73277_ip = 485;
                        continue _fun73277
                    }
                case 474:
                    var2 = _closure2_slot0;
                    var9 = var2.format;
                    _fun73277_ip = 517;
                    continue _fun73277;
                case 485:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 14;
                    var2 = var6[var2];
                    var2 = var5.bind(var7)(var2);
                    var2 = var2.GIFType;
                    var9 = var2.IMAGE;
                case 517:
                    var5 = var1.gifs;
                    var2 = _closure1_slot17;
                    var6 = _closure2_slot0;
                    var0 = var6.url;
                    var2 = var2.bind(var7)(var0);
                    var0 = {};
                    var17 = var0;
                    var16 = var6;
                    var6 = copyDataProperties(var17, var16);
                    var6 = 'src';
                    var0[var6] = var10;
                    var6 = 'format';
                    var0[var6] = var9;
                    var6 = 1;
                    var8 = var8 + var6;
                    var6 = 'order';
                    var0[var6] = var8;
                    var5[var2] = var0;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 14;
                    var0 = var5[var0];
                    var0 = var2.bind(var7)(var0);
                    var2 = var0.FavoriteGIFs;
                    var0 = var2.toBinary;
                    var0 = var0.bind(var2)(var1);
                    var2 = var0.length;
                    var0 = _closure1_slot9;
                    if (!(!(var2 > var0))) {
                        _fun73277_ip = 739;
                        continue _fun73277
                    }
                case 641:
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var0 = var0[var4];
                    var4 = var2.bind(var7)(var0);
                    var2 = var4.size;
                    var0 = var1.gifs;
                    var5 = var2.bind(var4)(var0);
                    var0 = 2;
                    if (!(var5 > var0)) {
                        _fun73277_ip = 689;
                        continue _fun73277
                    }
                case 681:
                    var0 = true;
                    var1.hideTooltip = var0;
                case 689:
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 17;
                    var0 = var2[var0];
                    var4 = var1.bind(var7)(var0);
                    var2 = var4.track;
                    var0 = _closure1_slot5;
                    var1 = var0.GIF_FAVORITED;
                    var0 = {};
                    var0.total_num_favorited = var5;
                    var0 = var2.bind(var4)(var1, var0);
                    return var7;
                case 739:
                    var1 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 15;
                    var0 = var8[var0];
                    var2 = var1.bind(var7)(var0);
                    var1 = var2.show;
                    var0 = {};
                    var6 = _closure1_slot0;
                    var3 = 16;
                    var4 = var8[var3];
                    var4 = var6.bind(var7)(var4);
                    var9 = var4.intl;
                    var5 = var9.string;
                    var4 = var8[var3];
                    var4 = var6.bind(var7)(var4);
                    var4 = var4.t;
                    var4 = var4["+XYXtZ"];
                    var4 = var5.bind(var9)(var4);
                    var0.title = var4;
                    var4 = var8[var3];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.t;
                    var3 = var3.YSDH9n;
                    var3 = var4.bind(var5)(var3);
                    var0.body = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = false;
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var2.addFavoriteGIF = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 13;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var5 = var3.FrecencyUserSettingsActionCreators;
        var4 = var5.updateAsync;
        var2 = _closure1_slot10;
        var3 = var2.INFREQUENT_USER_ACTION;
        var2 = 'favoriteGifs';
        var1 = function(arg0) { // Environment: var1
            _fun73280: for (var _fun73280_ip = 0;;) switch (_fun73280_ip) {
                case 0:
                    var5 = arg0;
                    var2 = _closure2_slot0;
                    var1 = var5.gifs;
                    var2 = var2 in var1;
                    var1 = var5.gifs;
                    if (var2) {
                        _fun73280_ip = 53;
                        continue _fun73280
                    }
                case 29:
                    var4 = _closure1_slot17;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = delete var1[var2];
                    _fun73280_ip = 61;
                    continue _fun73280;
                case 53:
                    var0 = _closure2_slot0;
                    var0 = delete var1[var0];
                case 61:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 17;
                    var2 = var8[var0];
                    var0 = undefined;
                    var4 = var7.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot5;
                    var2 = var1.GIF_UNFAVORITED;
                    var1 = {};
                    var6 = 9;
                    var6 = var8[var6];
                    var7 = var7.bind(var0)(var6);
                    var6 = var7.size;
                    var5 = var5.gifs;
                    var5 = var6.bind(var7)(var5);
                    var1.total_num_favorited = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var2, var1, var3);
        return var0;
    };
    var2.removeFavoriteGIF = var3;
    var1 = function() {
        var8 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 7;
        var1 = var7[var0];
        var0 = undefined;
        var1 = var8.bind(var0)(var1);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {};
        var4 = _closure1_slot6;
        var4 = var4.GIFS_TRENDING_SEARCH;
        var1.url = var4;
        var4 = {};
        var6 = 5;
        var7 = var7[var6];
        var8 = var8.bind(var0)(var7);
        var7 = var8.getProviderForAPIRequest;
        var7 = var7.bind(var8)();
        var4.provider = var7;
        var4.limit = var6;
        var5 = _closure1_slot3;
        var5 = var5.locale;
        var4.locale = var5;
        var1.query = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var1.rejectWithError = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var4 = var0.body;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS';
            var1.type = var5;
            var1.items = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.fetchTrendingSearchTerms = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1685, 9208, 660, 665, 4302, 9209, 9212, 507, 806, 22, 491, 1457, 8447, 1355, 1343, 4003, 1234, 795, 2]);