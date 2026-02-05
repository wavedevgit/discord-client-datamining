// modules/video-qoe/integrations/MuxIntegration.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var4 = _closure1_slot1;
        var3 = function() {
            var3 = _closure1_slot0;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var2 = 'mapDiscordToMuxMetadata';
        var0.key = var2;
        var2 = function arg0, arg1() {
            _fun83536: for (var _fun83536_ip = 0;;) switch (_fun83536_ip) {
                case 0:
                    var2 = arg0;
                    var4 = this;
                    var0 = {
                        'env_key': '1qd16mdmdjasipqg3irobln4u',
                        'session_id': null,
                        'player_name': 'discord',
                        'player_version': '1.0.0'
                    };
                    var1 = arg1;
                    var0.session_id = var1;
                    var1 = var2.contentMetadata;
                    var1 = var1.contentId;
                    var0.video_id = var1;
                    var1 = var2.contentMetadata;
                    var1 = var1.title;
                    var0.video_title = var1;
                    var1 = var2.contentMetadata;
                    var1 = var1.durationMs;
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun83536_ip = 104;
                        continue _fun83536
                    }
                case 80:
                    var5 = var2.contentMetadata;
                    var6 = var5.durationSec;
                    var5 = 1000;
                    var1 = var5 * var6;
                case 104:
                    var0.video_duration = var1;
                    var1 = var2.contentMetadata;
                    var1 = var1.contentType;
                    var0.video_content_type = var1;
                    var1 = var2.contentMetadata;
                    var1 = var1.questId;
                    var0.video_series = var1;
                    var1 = var2.contentMetadata;
                    var1 = var1.gameId;
                    var0.video_producer = var1;
                    var1 = var2.contentMetadata;
                    var5 = var1.gameName;
                    var6 = var3 != var5;
                    var1 = 'Discord';
                    if (!var6) {
                        _fun83536_ip = 188;
                        continue _fun83536
                    }
                case 185:
                    var1 = var5;
                case 188:
                    var0.video_brand = var1;
                    var1 = 'Cloudflare';
                    var0.video_cdn = var1;
                    var1 = var2.contentMetadata;
                    var1 = var1.videoStreamType;
                    var0.video_stream_type = var1;
                    var1 = var4.getBuildChannel;
                    var1 = var1.bind(var4)();
                    var0.view_client_application_name = var1;
                    var1 = var4.getAppVersion;
                    var1 = var1.bind(var4)();
                    var0.view_client_application_version = var1;
                    var5 = var2.userContext;
                    var6 = var3 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun83536_ip = 271;
                        continue _fun83536
                    }
                case 266:
                    var4 = var5.userId;
                case 271:
                    var0.viewer_user_id = var4;
                    var2 = var2.userContext;
                    var3 = var3 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun83536_ip = 299;
                        continue _fun83536
                    }
                case 291:
                    var1 = var2.userTier;
                case 299:
                    var0.viewer_plan = var1;
                    return var0;
            }
        };
        var0.value = var2;
        var2 = new Array(3);
        var2[0] = var0;
        var0 = {};
        var5 = 'getAppVersion';
        var0.key = var5;
        var5 = function() {
            _fun83537: for (var _fun83537_ip = 0;;) switch (_fun83537_ip) {
                case 0:
                    var0 = '5126';
                    return var0;
                case 8:
                    CatchBlockStart(arg_register = 0);
                    var0 = 'unknown';
                    return var0;
            }
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'getBuildChannel';
        var0.key = var5;
        var1 = function() {
            _fun83538: for (var _fun83538_ip = 0;;) switch (_fun83538_ip) {
                case 0:
                    var1 = undefined;
                    var3 = undefined;
                case 4: // try_start_0
                    var0 = global;
                    var0 = var0.window;
                    var4 = var0.GLOBAL_ENV;
                    var3 = var4;
                    var0 = null;
                    var4 = var0 == var4;
                    var2 = undefined;
                    if (var4) {
                        _fun83538_ip = 38;
                        continue _fun83538
                    }
                case 32:
                    var2 = var3.RELEASE_CHANNEL;
                case 38:
                    var1 = var2;
                    var2 = var0 != var2;
                    var0 = 'stable';
                    if (!var2) {
                        _fun83538_ip = 55;
                        continue _fun83538
                    }
                case 52:
                    var0 = var1;
                case 55: // try_end0
                    return var0;
                case 57: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var0 = 'stable';
                    return var0;
            }
        };
        var0.value = var1;
        var2[2] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var4.bind(var1)(var3, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video-qoe/integrations/MuxIntegration.tsx';
    var3 = var4.bind(var5)(var3);
    var2.MuxIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);