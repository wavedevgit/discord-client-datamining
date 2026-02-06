// modules/stage_channels/native/components/StageActionBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.Fragment;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var6 = {};
    var3 = 12;
    var10 = {
        'paddingHorizontal': 12,
        'justifyContent': 'center',
        'alignItems': 'center',
        'flexDirection': 'row',
        'position': 'relative'
    };
    var6.container = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot8 = var6;
    var6 = var7.memo;
    var1 = function(arg0) { // Environment: var1
        _fun68090: for (var _fun68090_ip = 0;;) switch (_fun68090_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.channel;
                var _closure2_slot0 = var12;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var2 = _closure1_slot8;
                var5 = var2.bind(var3)();
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 4;
                var2 = var8[var2];
                var7 = var6.bind(var3)(var2);
                var4 = var7.useCanModerateRequestToSpeak;
                var2 = var12.id;
                var11 = var4.bind(var7)(var2);
                var _closure2_slot1 = var11;
                var2 = 5;
                var2 = var8[var2];
                var7 = var6.bind(var3)(var2);
                var4 = var7.useActionBarPrimaryButton;
                var2 = {};
                var2.channel = var12;
                var2 = var4.bind(var7)(var2);
                var _closure2_slot2 = var2;
                var4 = 6;
                var4 = var8[var4];
                var9 = var6.bind(var3)(var4);
                var7 = var9.useGetActionBarHeight;
                var4 = var12.id;
                var7 = var7.bind(var9)(var4);
                var9 = _closure1_slot1;
                var4 = 7;
                var4 = var8[var4];
                var9 = var9.bind(var3)(var4);
                var4 = var12.id;
                var10 = var9.bind(var3)(var4);
                var _closure2_slot3 = var10;
                var4 = 8;
                var4 = var8[var4];
                var8 = var6.bind(var3)(var4);
                var6 = var8.useShowStageMusicMuteButton;
                var4 = var12.id;
                var13 = var6.bind(var8)(var4);
                if (!var13) {
                    _fun68090_ip = 204;
                    continue _fun68090
                }
            case 201:
                var13 = !var10;
            case 204:
                _closure2_slot4 = var13;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 9;
                var4 = var8[var4];
                var8 = var6.bind(var3)(var4);
                var6 = var8.isStageVideoEnabled;
                var4 = var12.guild_id;
                var8 = var6.bind(var8)(var4);
                _closure2_slot5 = var8;
                var6 = _closure1_slot3;
                var9 = var6.useCallback;
                var4 = new Array(2);
                var4[0] = var2;
                var4[1] = var12;
                var2 = function(arg0) { // Environment: var1
                    _fun68091: for (var _fun68091_ip = 0;;) switch (_fun68091_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = _closure2_slot2;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var7 = 5;
                            var0 = var0[var7];
                            var4 = undefined;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.ActionBarPrimaryButton;
                            var0 = var0.END_STREAM;
                            if (!(var2 !== var0)) {
                                _fun68091_ip = 143;
                                continue _fun68091
                            }
                        case 51:
                            var3 = _closure2_slot2;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var7];
                            var0 = var2.bind(var4)(var0);
                            var0 = var0.ActionBarPrimaryButton;
                            var2 = var0.END_CALL;
                            var0 = null;
                            if (!(var3 === var2)) {
                                _fun68091_ip = 141;
                                continue _fun68091
                            }
                        case 90:
                            var8 = _closure1_slot5;
                            var3 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var2 = 10;
                            var2 = var9[var2];
                            var2 = var3.bind(var4)(var2);
                            var3 = var2.DisconnectStageButton;
                            var2 = {};
                            var9 = _closure2_slot0;
                            var2.channel = var9;
                            var2.isSmallSize = var5;
                            var0 = var8.bind(var4)(var3, var2);
                        case 141:
                            _fun68091_ip = 191;
                            continue _fun68091;
                        case 143:
                            var3 = _closure1_slot5;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var7];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.DisconnectStreamButton;
                            var1 = {};
                            var6 = _closure2_slot0;
                            var1.channel = var6;
                            var1.isSmallSize = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 191:
                            return var0;
                    }
                };
                var9 = var9.bind(var6)(var2, var4);
                _closure2_slot6 = var9;
                var4 = var6.useMemo;
                var2 = new Array(6);
                var2[0] = var13;
                var2[1] = var12;
                var2[2] = var11;
                var2[3] = var10;
                var2[4] = var9;
                var2[5] = var8;
                var1 = function() { // Environment: var1
                    _fun68092: for (var _fun68092_ip = 0;;) switch (_fun68092_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun68092_ip = 301;
                                continue _fun68092
                            }
                        case 13:
                            var7 = _closure2_slot4;
                            if (!var7) {
                                _fun68092_ip = 24;
                                continue _fun68092
                            }
                        case 20:
                            var7 = _closure2_slot1;
                        case 24:
                            var3 = _closure1_slot7;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var0 = _closure2_slot4;
                            if (!var0) {
                                _fun68092_ip = 97;
                                continue _fun68092
                            }
                        case 44:
                            var10 = _closure1_slot5;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var4 = 10;
                            var4 = var9[var4];
                            var9 = undefined;
                            var4 = var8.bind(var9)(var4);
                            var8 = var4.MusicMuteButton;
                            var4 = {};
                            var11 = _closure2_slot0;
                            var4.channel = var11;
                            var4.isSmallSize = var7;
                            var0 = var10.bind(var9)(var8, var4);
                        case 97:
                            var4 = new Array(5);
                            var4[0] = var0;
                            var11 = _closure1_slot5;
                            var9 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var10 = 10;
                            var8 = var0[var10];
                            var0 = undefined;
                            var8 = var9.bind(var0)(var8);
                            var9 = var8.RequestToSpeakButton;
                            var8 = {};
                            var12 = _closure2_slot0;
                            var8.channel = var12;
                            var8.isSmallSize = var7;
                            var8 = var11.bind(var0)(var9, var8);
                            var4[1] = var8;
                            var8 = _closure2_slot1;
                            if (!var8) {
                                _fun68092_ip = 217;
                                continue _fun68092
                            }
                        case 169:
                            var12 = _closure1_slot5;
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var10];
                            var9 = var11.bind(var0)(var9);
                            var11 = var9.RequestToSpeakListButton;
                            var9 = {};
                            var13 = _closure2_slot0;
                            var9.channel = var13;
                            var9.isSmallSize = var7;
                            var8 = var12.bind(var0)(var11, var9);
                        case 217:
                            var4[2] = var8;
                            var9 = _closure1_slot5;
                            var8 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var10];
                            var5 = var8.bind(var0)(var5);
                            var8 = var5.ChatButton;
                            var5 = {};
                            var10 = _closure2_slot0;
                            var5.channel = var10;
                            var5.isSmallSize = var7;
                            var5 = var9.bind(var0)(var8, var5);
                            var4[3] = var5;
                            var5 = _closure2_slot6;
                            var5 = var5.bind(var0)(var7);
                            var4[4] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            _fun68092_ip = 579;
                            continue _fun68092;
                        case 301:
                            var7 = _closure2_slot5;
                            var4 = _closure1_slot7;
                            var3 = _closure1_slot6;
                            var2 = {};
                            var1 = var7;
                            if (!var1) {
                                _fun68092_ip = 377;
                                continue _fun68092
                            }
                        case 324:
                            var11 = _closure1_slot5;
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var5 = 5;
                            var5 = var10[var5];
                            var10 = undefined;
                            var5 = var9.bind(var10)(var5);
                            var9 = var5.VideoButton;
                            var5 = {};
                            var12 = _closure2_slot0;
                            var5.channel = var12;
                            var5.isSmallSize = var7;
                            var1 = var11.bind(var10)(var9, var5);
                        case 377:
                            var5 = new Array(5);
                            var5[0] = var1;
                            var13 = _closure1_slot5;
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var1 = 11;
                            var9 = var9[var1];
                            var1 = undefined;
                            var9 = var10.bind(var1)(var9);
                            var10 = var9.ChannelCallMicButton;
                            var9 = {};
                            var11 = _closure2_slot0;
                            var9.channel = var11;
                            var9.isSmallSize = var7;
                            var9 = var13.bind(var1)(var10, var9);
                            var5[1] = var9;
                            var10 = _closure2_slot1;
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var12 = 10;
                            var9 = var9[var12];
                            var9 = var11.bind(var1)(var9);
                            if (var10) {
                                _fun68092_ip = 477;
                                continue _fun68092
                            }
                        case 469:
                            var10 = var9.MoveToAudienceButton;
                            _fun68092_ip = 483;
                            continue _fun68092;
                        case 477:
                            var10 = var9.RequestToSpeakListButton;
                        case 483:
                            var9 = {};
                            var11 = _closure2_slot0;
                            var9.channel = var11;
                            var9.isSmallSize = var7;
                            var9 = var13.bind(var1)(var10, var9);
                            var5[2] = var9;
                            var10 = _closure1_slot5;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var8 = var8[var12];
                            var8 = var9.bind(var1)(var8);
                            var9 = var8.ChatButton;
                            var8 = {};
                            var8.channel = var11;
                            var8.isSmallSize = var7;
                            var8 = var10.bind(var1)(var9, var8);
                            var5[3] = var8;
                            var6 = _closure2_slot6;
                            var6 = var6.bind(var1)(var7);
                            var5[4] = var6;
                            var2.children = var5;
                            var0 = var4.bind(var1)(var3, var2);
                        case 579:
                            return var0;
                    }
                };
                var4 = var4.bind(var6)(var1, var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = 'box-none';
                var0.pointerEvents = var6;
                var6 = var5.container;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var6.height = var7;
                var5[1] = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/StageActionBar.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 4243, 8477, 8527, 8017, 8432, 4245, 8429, 8515, 2]);