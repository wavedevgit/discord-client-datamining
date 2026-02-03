// modules/stage_channels/native/components/StageGridRow.tsx
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var10 = 'center';
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.container = var9;
    var9 = {};
    var9.justifyContent = var10;
    var3.containerLandscape = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun69452: for (var _fun69452_ip = 0;;) switch (_fun69452_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var _closure2_slot0 = var1;
                var6 = var0.participants;
                var5 = var0.row;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var1 = _closure1_slot5;
                var8 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useIsScreenLandscape;
                var7 = var1.bind(var2)();
                var2 = 3;
                var1 = 0;
                if (!(var1 === var5)) {
                    _fun69452_ip = 87;
                    continue _fun69452
                }
            case 82:
                var2 = var6.length;
            case 87:
                var1 = 1;
                if (!(var1 !== var2)) {
                    _fun69452_ip = 169;
                    continue _fun69452
                }
            case 94:
                var1 = 2;
                if (!(var1 !== var2)) {
                    _fun69452_ip = 135;
                    continue _fun69452
                }
            case 101:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.StageTileSize;
                var1 = var1.THIRD;
                _fun69452_ip = 201;
                continue _fun69452;
            case 135:
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 4;
                var2 = var9[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.StageTileSize;
                var1 = var2.HALF;
                _fun69452_ip = 201;
                continue _fun69452;
            case 169:
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 4;
                var2 = var9[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.StageTileSize;
                var1 = var2.FULL;
            case 201:
                _closure2_slot1 = var1;
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var9 = var8.container;
                var5 = new Array(2);
                var5[0] = var9;
                if (!var7) {
                    _fun69452_ip = 237;
                    continue _fun69452
                }
            case 231:
                var7 = var8.containerLandscape;
            case 237:
                var5[1] = var7;
                var0.style = var5;
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    _fun69453: for (var _fun69453_ip = 0;;) switch (_fun69453_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = var1.type;
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var7 = 5;
                            var0 = var0[var7];
                            var5 = undefined;
                            var0 = var4.bind(var5)(var0);
                            var0 = var0.StageChannelParticipantTypes;
                            var0 = var0.STREAM;
                            var0 = var3 === var0;
                            if (var0) {
                                _fun69453_ip = 122;
                                continue _fun69453
                            }
                        case 52:
                            var4 = var1.type;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var3 = var6.bind(var5)(var3);
                            var3 = var3.StageChannelParticipantTypes;
                            var3 = var3.VOICE;
                            var3 = var4 === var3;
                            if (!var3) {
                                _fun69453_ip = 119;
                                continue _fun69453
                            }
                        case 93:
                            var6 = var1.voiceState;
                            var4 = null;
                            var7 = var4 == var6;
                            var4 = undefined;
                            if (var7) {
                                _fun69453_ip = 116;
                                continue _fun69453
                            }
                        case 110:
                            var4 = var6.selfVideo;
                        case 116:
                            var3 = var4;
                        case 119:
                            var0 = var3;
                        case 122:
                            var4 = _closure1_slot4;
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            if (var0) {
                                _fun69453_ip = 213;
                                continue _fun69453
                            }
                        case 137:
                            var0 = 8;
                            var0 = var6[var0];
                            var7 = var3.bind(var5)(var0);
                            var2 = {};
                            var8 = _closure2_slot0;
                            var2.channel = var8;
                            var2.participant = var1;
                            var0 = _closure2_slot1;
                            var2.size = var0;
                            var9 = var1.id;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var8 = var0.concat;
                            var0 = 'stage-user-participant-';
                            var0 = var8.bind(var0)(var9);
                            var0 = var4.bind(var5)(var7, var2, var0);
                            _fun69453_ip = 287;
                            continue _fun69453;
                        case 213:
                            var2 = 7;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = {};
                            var2.participant = var1;
                            var7 = _closure2_slot1;
                            var2.size = var7;
                            var6 = _closure2_slot0;
                            var2.channel = var6;
                            var7 = var1.id;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var1 = 'stage-media-participant-';
                            var1 = var6.bind(var1)(var7);
                            var0 = var4.bind(var5)(var3, var2, var1);
                        case 287:
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/StageGridRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 8668, 5662, 5362, 8676, 8667, 2]);