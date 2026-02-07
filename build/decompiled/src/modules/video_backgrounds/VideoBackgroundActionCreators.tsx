// modules/video_backgrounds/VideoBackgroundActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun67068: for (var _fun67068_ip = 0;;) switch (_fun67068_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun67068_ip = 195;
                            continue _fun67068
                        }
                    case 10: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 4;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {};
                        var6 = _closure1_slot6;
                        var6 = var6.VIDEO_FILTER_ASSETS;
                        var1.url = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 76);
                    case 74:
                        return var1;
                    case 76:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun67068_ip = 137;
                            continue _fun67068
                        }
                    case 82:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 5;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'VIDEO_FILTER_ASSETS_FETCH_SUCCESS';
                        var2.type = var5;
                        var5 = var1.body;
                        var2.assets = var5;
                        var2 = var3.bind(var4)(var2);
                    case 134: // try_end0
                        return var1;
                    case 137:
                        return var1;
                    case 140: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 5;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'VIDEO_FILTER_ASSETS_FETCH_FAILURE';
                        var2.type = var5;
                        var2.error = var1;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 195:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun67071: for (var _fun67071_ip = 0;;) switch (_fun67071_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun67071_ip = 254;
                            continue _fun67071
                        }
                    case 10:
                        var7 = arg0;
                        var9 = arg1;
                        var8 = arg2;
                    case 19: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 4;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.post;
                        var1 = {};
                        var6 = _closure1_slot6;
                        var6 = var6.VIDEO_FILTER_ASSETS;
                        var1.url = var6;
                        var6 = {};
                        var6.type = var9;
                        var6.asset = var7;
                        var9 = var8;
                        var7 = null;
                        var9 = var7 == var9;
                        var7 = undefined;
                        if (var9) {
                            _fun67071_ip = 109;
                            continue _fun67071
                        }
                    case 96:
                        var9 = var8;
                        var8 = var9.toISOString;
                        var7 = var8.bind(var9)();
                    case 109:
                        var6.last_used = var7;
                        var1.body = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 133);
                    case 131:
                        return var1;
                    case 133:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun67071_ip = 199;
                            continue _fun67071
                        }
                    case 139:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 5;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'VIDEO_FILTER_ASSET_UPLOAD_SUCCESS';
                        var2.type = var5;
                        var5 = var1.body;
                        var2.videoFilterAsset = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = var1.body;
                    case 196: // try_end0
                        return var2;
                    case 199:
                        return var1;
                    case 202: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var11 = var2;
                        var10 = var3;
                        var1 = new var11[var1](var10, var9);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 254:
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
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun67074: for (var _fun67074_ip = 0;;) switch (_fun67074_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun67074_ip = 250;
                            continue _fun67074
                        }
                    case 13:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var5 = var1.HTTP;
                        var4 = var5.del;
                        var1 = {};
                        var9 = _closure1_slot6;
                        var8 = var9.VIDEO_FILTER_ASSET;
                        var7 = var6.id;
                        var7 = var8.bind(var9)(var7);
                        var1.url = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 90);
                    case 88:
                        return var1;
                    case 90:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun67074_ip = 247;
                            continue _fun67074
                        }
                    case 99:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 7;
                        var4 = var8[var4];
                        var9 = var7.bind(var2)(var4);
                        var5 = var9.getLastUsedVideoBackgroundOption;
                        var10 = _closure1_slot5;
                        var4 = var10.getCurrentUser;
                        var4 = var4.bind(var10)();
                        var5 = var5.bind(var9)(var4);
                        var4 = 8;
                        var4 = var8[var4];
                        var7 = var7.bind(var2)(var4);
                        var4 = var7.isCustomBackgroundOption;
                        var4 = var4.bind(var7)(var5);
                        if (!var4) {
                            _fun67074_ip = 183;
                            continue _fun67074
                        }
                    case 169:
                        var7 = var5.id;
                        var5 = var6.id;
                        var4 = var7 === var5;
                    case 183:
                        if (!var4) {
                            _fun67074_ip = 197;
                            continue _fun67074
                        }
                    case 186:
                        var5 = _closure1_slot10;
                        var4 = null;
                        var4 = var5.bind(var2)(var4);
                    case 197:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 5;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'VIDEO_FILTER_ASSET_DELETE_SUCCESS';
                        var3.type = var7;
                        var3.videoFilterAsset = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 247:
                        return var1;
                    case 250:
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
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun67078: for (var _fun67078_ip = 0;;) switch (_fun67078_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun67078_ip = 333;
                            continue _fun67078
                        }
                    case 15:
                        var _closure4_slot0 = var7;
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 9;
                        var6 = var9[var2];
                        var3 = undefined;
                        var6 = var5.bind(var3)(var6);
                        var8 = var6.PreloadedUserSettingsActionCreators;
                        var6 = var8.updateAsync;
                        var2 = var9[var2];
                        var2 = var5.bind(var3)(var2);
                        var2 = var2.UserSettingsDelay;
                        var5 = var2.FREQUENT_USER_ACTION;
                        var2 = 'voiceAndVideo';
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.getVideoBackgroundProtoFromOption;
                            var1 = _closure4_slot0;
                            var2 = var2.bind(var3)(var1);
                            var1 = arg0;
                            var1.videoBackgroundFilterDesktop = var2;
                            return var0;
                        };
                        var1 = var6.bind(var8)(var2, var1, var5);
                        SaveGenerator(address = 99);
                    case 97:
                        return var1;
                    case 99:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun67078_ip = 330;
                            continue _fun67078
                        }
                    case 108:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 8;
                        var2 = var6[var2];
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.isCustomBackgroundOption;
                        var2 = var2.bind(var5)(var7);
                        if (var2) {
                            _fun67078_ip = 194;
                            continue _fun67078
                        }
                    case 142:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 5;
                        var2 = var6[var2];
                        var6 = var5.bind(var3)(var2);
                        var5 = var6.dispatch;
                        var2 = {};
                        var8 = 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION';
                        var2.type = var8;
                        var2.backgroundOption = var7;
                        var2 = var5.bind(var6)(var2);
                        _fun67078_ip = 324;
                        continue _fun67078;
                    case 194:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 4;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var6 = var2.HTTP;
                        var5 = var6.post;
                        var2 = {};
                        var9 = _closure1_slot6;
                        var8 = var9.VIDEO_FILTER_ASSET_LAST_USED;
                        var7 = var7.id;
                        var7 = var8.bind(var9)(var7);
                        var2.url = var7;
                        var7 = false;
                        var2.rejectWithError = var7;
                        var2 = var5.bind(var6)(var2);
                        SaveGenerator(address = 266);
                    case 264:
                        return var2;
                    case 266:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun67078_ip = 327;
                            continue _fun67078
                        }
                    case 272:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 5;
                        var4 = var6[var4];
                        var6 = var5.bind(var3)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION';
                        var4.type = var7;
                        var7 = var2.body;
                        var4.backgroundOption = var7;
                        var4 = var5.bind(var6)(var4);
                    case 324:
                        return var3;
                    case 327:
                        return var2;
                    case 330:
                        return var1;
                    case 333:
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
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_backgrounds/VideoBackgroundActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchVideoFilterAssets = var4;
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
    var2.uploadVideoFilterAsset = var4;
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
    var2.deleteVideoFilterAsset = var4;
    var2.saveLastUsedBackgroundOption = var3;
    var3 = function arg0() {
        _fun67083: for (var _fun67083_ip = 0;;) switch (_fun67083_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.isSupported;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun67083_ip = 70;
                    continue _fun67083
                }
            case 20:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var3 = 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS';
                var0.type = var3;
                var3 = arg0;
                var0.settings = var3;
                var0 = var1.bind(var2)(var0);
            case 70:
                var0 = undefined;
                return var0;
        }
    };
    var2.applyMediaFilterSettings = var3;
    var3 = function() {
        _fun67084: for (var _fun67084_ip = 0;;) switch (_fun67084_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.isSupported;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun67084_ip = 64;
                    continue _fun67084
                }
            case 20:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var3 = 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START';
                var0.type = var3;
                var0 = var1.bind(var2)(var0);
            case 64:
                var0 = undefined;
                return var0;
        }
    };
    var2.startApplyMediaFilterSettings = var3;
    var1 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.errorApplyingMediaFilterSettings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3477, 1621, 660, 507, 806, 8291, 8292, 8287, 1355, 2]);