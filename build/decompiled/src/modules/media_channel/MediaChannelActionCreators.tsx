// modules/media_channel/MediaChannelActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _fetchMediaPostEmbed, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun79207: for (var _fun79207_ip = 0;;) switch (_fun79207_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79207_ip = 254;
                            continue _fun79207
                        }
                    case 13:
                        var5 = var8;
                        var6 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 2;
                        var3 = var1[var4];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var9 = 'MEDIA_POST_EMBED_FETCH';
                        var3.type = var9;
                        var3.threadId = var8;
                        var3 = var6.bind(var7)(var3);
                    case 68: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 3;
                        var3 = var7[var3];
                        var3 = var6.bind(var1)(var3);
                        var7 = var3.HTTP;
                        var6 = var7.get;
                        var3 = {};
                        var10 = _closure1_slot4;
                        var9 = var10.MEDIA_POST_RESHARE_GET_PREVIEW;
                        var8 = var5;
                        var8 = var9.bind(var10)(var8);
                        var3.url = var8;
                        var8 = true;
                        var3.rejectWithError = var8;
                        var3 = var6.bind(var7)(var3);
                        SaveGenerator(address = 137);
                    case 135:
                        return var3;
                    case 137:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun79207_ip = 202;
                            continue _fun79207
                        }
                    case 143:
                        var9 = var3.body;
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var4];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var10 = 'MEDIA_POST_EMBED_FETCH_SUCCESS';
                        var6.type = var10;
                        var10 = var5;
                        var6.threadId = var10;
                        var6.mediaPostEmbed = var9;
                        var6 = var7.bind(var8)(var6);
                    case 200: // try_end0
                        _fun79207_ip = 251;
                        continue _fun79207;
                    case 202:
                        return var3;
                    case 205: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'MEDIA_POST_EMBED_FETCH_FAILURE';
                        var2.type = var6;
                        var2.threadId = var5;
                        var2 = var3.bind(var4)(var2);
                    case 251:
                        return var1;
                    case 254:
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
    var0 = function() { // Original name: _unfurlEmbedUrl, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun79210: for (var _fun79210_ip = 0;;) switch (_fun79210_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79210_ip = 166;
                            continue _fun79210
                        }
                    case 10:
                        var5 = arg0;
                    case 13: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot4;
                        var4 = var4.UNFURL_EMBED_URLS;
                        var1.url = var4;
                        var4 = {};
                        var4.urls = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 91);
                    case 89:
                        return var1;
                    case 91:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun79210_ip = 105;
                            continue _fun79210
                        }
                    case 97:
                        var2 = var1.body;
                    case 102: // try_end0
                        return var2;
                    case 105:
                        return var1;
                    case 108: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var1 = var1.APIError;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var7 = var2;
                        var6 = var3;
                        var1 = new var7[var1](var6, var5);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 166:
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_channel/MediaChannelActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: dismissMediaPostSharePrompt, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'DISMISS_MEDIA_POST_SHARE_PROMPT';
        var1.type = var4;
        var4 = arg0;
        var1.threadId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.dismissMediaPostSharePrompt = var3;
    var3 = function() { // Original name: fetchMediaPostEmbed, environment: var1
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchMediaPostEmbed = var3;
    var1 = function() { // Original name: unfurlEmbedUrl, environment: var1
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.unfurlEmbedUrl = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 806, 507, 3309, 2]);