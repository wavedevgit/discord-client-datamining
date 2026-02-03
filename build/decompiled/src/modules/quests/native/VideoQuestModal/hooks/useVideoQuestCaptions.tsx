// modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = {};
    var6 = 'none';
    var3.NONE = var6;
    var6 = 'loading';
    var3.LOADING = var6;
    var6 = 'success';
    var3.SUCCESS = var6;
    var6 = 'error';
    var3.ERROR = var6;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/VideoQuestModal/hooks/useVideoQuestCaptions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun83891: for (var _fun83891_ip = 0;;) switch (_fun83891_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var9 = 2;
                var4 = var1[var9];
                var8 = undefined;
                var6 = var3.bind(var8)(var4);
                var5 = var6.getQuestAsset;
                var1 = var1[var9];
                var1 = var3.bind(var8)(var1);
                var1 = var1.QuestAssetType;
                var13 = var1.VIDEO_PLAYER_CAPTION;
                var14 = arg0;
                var11 = true;
                var15 = var6;
                var12 = undefined;
                var1 = var15[var5](var14, var13, var12, var11, var10);
                var10 = null;
                var3 = var10 == var1;
                var6 = undefined;
                if (var3) {
                    _fun83891_ip = 84;
                    continue _fun83891
                }
            case 79:
                var6 = var1.url;
            case 84:
                var _closure2_slot0 = var6;
                var5 = _closure1_slot3;
                var3 = var5.useState;
                var1 = _closure1_slot4;
                var1 = var1.NONE;
                var1 = var3.bind(var5)(var1);
                var7 = _closure1_slot2;
                var3 = var7.bind(var8)(var1, var9);
                var2 = 0;
                var1 = var3[var2];
                var4 = 1;
                var3 = var3[var4];
                var _closure2_slot1 = var3;
                var3 = var5.useState;
                var3 = var3.bind(var5)(var10);
                var3 = var7.bind(var8)(var3, var9);
                var2 = var3[var2];
                var3 = var3[var4];
                var _closure2_slot2 = var3;
                var4 = var5.useEffect;
                var3 = new Array(1);
                var3[0] = var6;
                var0 = function() { // Environment: var0
                    _fun83892: for (var _fun83892_ip = 0;;) switch (_fun83892_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun83892_ip = 41;
                                continue _fun83892
                            }
                        case 15:
                            var3 = _closure2_slot1;
                            var1 = _closure1_slot4;
                            var2 = var1.NONE;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun83892_ip = 132;
                            continue _fun83892;
                        case 41:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 3;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var3 = var1.HTTP;
                            var2 = var3.get;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var1.url = var4;
                            var4 = true;
                            var1.rejectWithError = var4;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var0
                                _fun83893: for (var _fun83893_ip = 0;;) switch (_fun83893_ip) {
                                    case 0:
                                        var1 = arg0;
                                    case 3: // try_start_0
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var2 = 4;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var4 = var4.bind(var2)(var3);
                                        var3 = var4.parseVtt;
                                        var1 = var1.text;
                                        var3 = var3.bind(var4)(var1);
                                        var4 = _closure2_slot2;
                                        var3 = var3.cues;
                                        var3 = var4.bind(var2)(var3);
                                        var1 = _closure2_slot1;
                                        var0 = _closure1_slot4;
                                        var0 = var0.SUCCESS;
                                        var0 = var1.bind(var2)(var0);
                                    case 81: // try_end0
                                        _fun83893_ip = 112;
                                        continue _fun83893;
                                    case 83: // catch_target0
                                        CatchBlockStart(arg_register = 0);
                                        var2 = _closure2_slot1;
                                        var0 = _closure1_slot4;
                                        var1 = var0.ERROR;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 112:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.catch;
                            var0 = function() { // Environment: var0
                                var2 = _closure2_slot1;
                                var0 = _closure1_slot4;
                                var1 = var0.ERROR;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 132:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var0, var3);
                var0 = {};
                var0.captions = var2;
                var0.status = var1;
                return var0;
        }
    };
    var2.useVideoQuestCaptions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 5281, 507, 10717, 2]);