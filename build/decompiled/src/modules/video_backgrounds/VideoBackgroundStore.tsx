// modules/video_backgrounds/VideoBackgroundStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun66286: for (var _fun66286_ip = 0;;) switch (_fun66286_ip) {
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
                _fun66286_ip = 76;
                continue _fun66286;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: hasVideoBackgroundLive, environment: var3
        _fun66289: for (var _fun66289_ip = 0;;) switch (_fun66289_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot10;
                var0 = var1.getCurrentUser;
                var0 = var0.bind(var1)();
                var1 = null;
                if (!(var1 != var0)) {
                    _fun66289_ip = 141;
                    continue _fun66289
                }
            case 25:
                if (!(var1 == var2)) {
                    _fun66289_ip = 97;
                    continue _fun66289
                }
            case 29:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 9;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.getVideoBackgroundOptionFromProto;
                var7 = _closure1_slot7;
                var7 = var7.settings;
                var7 = var7.voiceAndVideo;
                var8 = var1 == var7;
                if (var8) {
                    _fun66289_ip = 86;
                    continue _fun66289
                }
            case 80:
                var4 = var7.videoBackgroundFilterDesktop;
            case 86:
                var0 = var0.id;
                var2 = var5.bind(var6)(var4, var0);
            case 97:
                var4 = _closure1_slot9;
                var0 = var4.getVoiceChannelId;
                var0 = var0.bind(var4)();
                var0 = var1 != var0;
                if (!var0) {
                    _fun66289_ip = 132;
                    continue _fun66289
                }
            case 118:
                var4 = _closure1_slot8;
                var3 = var4.isVideoEnabled;
                var0 = var3.bind(var4)();
            case 132:
                if (!var0) {
                    _fun66289_ip = 139;
                    continue _fun66289
                }
            case 135:
                var0 = var1 != var2;
            case 139:
                return var0;
            case 141:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function() { // Original name: handleSyncedStoresUpdate, environment: var3
        _fun66290: for (var _fun66290_ip = 0;;) switch (_fun66290_ip) {
            case 0:
                var1 = _closure1_slot12;
                var3 = _closure1_slot9;
                var0 = var3.getVoiceChannelId;
                var0 = var0.bind(var3)();
                if (!(var1 !== var0)) {
                    _fun66290_ip = 31;
                    continue _fun66290
                }
            case 25:
                var0 = false;
                _closure1_slot13 = var0;
            case 31:
                var1 = _closure1_slot16;
                var0 = undefined;
                var1 = var1.bind(var0)();
                if (!var1) {
                    _fun66290_ip = 50;
                    continue _fun66290
                }
            case 44:
                var1 = true;
                _closure1_slot13 = var1;
            case 50:
                var3 = _closure1_slot9;
                var1 = var3.getVoiceChannelId;
                var1 = var1.bind(var3)();
                _closure1_slot12 = var1;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = false;
    var _closure1_slot11 = var1;
    var7 = null;
    var _closure1_slot12 = var7;
    var _closure1_slot13 = var1;
    var1 = {};
    var _closure1_slot14 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: VideoBackgroundStore, environment: var5
            _fun66292: for (var _fun66292_ip = 0;;) switch (_fun66292_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun66292_ip = 69;
                        continue _fun66292
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun66292_ip = 105;
                    continue _fun66292;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var3 = this;
            var6 = var3.waitFor;
            var10 = _closure1_slot8;
            var9 = _closure1_slot9;
            var8 = _closure1_slot7;
            var7 = _closure1_slot10;
            var11 = var3;
            var1 = var11[var6](var10, var9, var8, var7, var6);
            var2 = var3.syncWith;
            var4 = _closure1_slot9;
            var1 = new Array(2);
            var1[0] = var4;
            var4 = _closure1_slot8;
            var1[1] = var4;
            var0 = _closure1_slot17;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'videoFilterAssets';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot14;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasBeenApplied';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasUsedBackgroundInCall';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot13;
            return var0;
        };
        var4.get = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'VideoBackgroundStore';
    var7.displayName = var1;
    var1 = 12;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleVideoFilterAssetFetchSuccess, environment: var3
        var1 = arg0;
        var3 = var1.assets;
        var1 = {};
        var _closure2_slot0 = var1;
        var2 = var3.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = _closure2_slot0;
            var1 = var0.id;
            var2[var1] = var0;
            return var0;
        };
        var0 = var2.bind(var3)(var0);
        _closure1_slot14 = var1;
        var0 = undefined;
        return var0;
    };
    var1.VIDEO_FILTER_ASSETS_FETCH_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleAddBackground, environment: var3
        var0 = arg0;
        var3 = var0.videoFilterAsset;
        var1 = {};
        var4 = _closure1_slot14;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = var3.id;
        var1[var2] = var3;
        _closure1_slot14 = var1;
        var0 = undefined;
        return var0;
    };
    var1.VIDEO_FILTER_ASSET_UPLOAD_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleRemoveBackground, environment: var3
        var0 = arg0;
        var0 = var0.videoFilterAsset;
        var1 = {};
        var4 = _closure1_slot14;
        var5 = var1;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot14 = var1;
        var0 = var0.id;
        var0 = delete var1[var0];
        var0 = undefined;
        return var0;
    };
    var1.VIDEO_FILTER_ASSET_DELETE_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleSaveLastUsedBackgroundOption, environment: var3
        _fun66301: for (var _fun66301_ip = 0;;) switch (_fun66301_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.backgroundOption;
                var1 = _closure1_slot16;
                var0 = undefined;
                var1 = var1.bind(var0)(var3);
                if (!var1) {
                    _fun66301_ip = 32;
                    continue _fun66301
                }
            case 26:
                var1 = true;
                _closure1_slot13 = var1;
            case 32:
                return var0;
        }
    };
    var1.VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION = var8;
    var8 = function(arg0) { // Original name: handleApplyMediaFilterSettings, environment: var3
        _fun66302: for (var _fun66302_ip = 0;;) switch (_fun66302_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.settings;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 10;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var1 = var1.FilterSettingsKey;
                var1 = var1.CAMERA_BACKGROUND_LIVE;
                var1 = var1 in var3;
                if (!var1) {
                    _fun66302_ip = 59;
                    continue _fun66302
                }
            case 53:
                var1 = true;
                _closure1_slot11 = var1;
            case 59:
                return var0;
        }
    };
    var1.MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS = var8;
    var3 = function() { // Original name: handleLogout, environment: var3
        var0 = false;
        _closure1_slot11 = var0;
        _closure1_slot13 = var0;
        var0 = null;
        _closure1_slot12 = var0;
        var0 = {};
        _closure1_slot14 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_backgrounds/VideoBackgroundStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1310, 3435, 1661, 1613, 8174, 3590, 566, 806, 2]);