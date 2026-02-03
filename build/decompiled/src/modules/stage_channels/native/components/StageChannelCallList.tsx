// modules/stage_channels/native/components/StageChannelCallList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var10 = 0;
    var3 = var5[var10];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = metroImportAll;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot4 = var7;
    var8 = 2;
    var3 = var5[var8];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useActiveSpeakerPillScrollHandler;
    var _closure1_slot5 = var6;
    var3 = var3.useActiveSpeakerPillState;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MAX_AUDIENCE_ROW_LIMIT;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = {
        'direction': null,
        'radius': 13,
        'inset': 4294967290
    };
    var6 = 5;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.CutoutDirection;
    var6 = var6.RIGHT;
    var3.direction = var6;
    var _closure1_slot10 = var3;
    var3 = function arg0, arg1() {
        _fun69281: for (var _fun69281_ip = 0;;) switch (_fun69281_ip) {
            case 0:
                var1 = arg1;
                var2 = arg0;
                var0 = 0;
                if (!(!(var2 > var0))) {
                    _fun69281_ip = 167;
                    continue _fun69281
                }
            case 15:
                var0 = 1;
                if (!(var0 !== var1)) {
                    _fun69281_ip = 121;
                    continue _fun69281
                }
            case 22:
                var0 = 2;
                if (!(var0 !== var1)) {
                    _fun69281_ip = 75;
                    continue _fun69281
                }
            case 29:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.SPEAKER_TILE_HEIGHTS;
                var1 = var0.THIRD;
                var0 = 8;
                var0 = var1 + var0;
                return var0;
            case 75:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.SPEAKER_TILE_HEIGHTS;
                var1 = var0.HALF;
                var0 = 8;
                var0 = var1 + var0;
                return var0;
            case 121:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.SPEAKER_TILE_HEIGHTS;
                var1 = var0.FULL;
                var0 = 8;
                var0 = var1 + var0;
                return var0;
            case 167:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.SPEAKER_TILE_HEIGHTS;
                var1 = var0.THIRD;
                var0 = 8;
                var0 = var1 + var0;
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var3 = {};
    var3.STREAM = var10;
    var6 = 'STREAM';
    var3[var10] = var6;
    var3.SPEAKER = var9;
    var6 = 'SPEAKER';
    var3[var9] = var6;
    var3.AUDIENCE = var8;
    var6 = 'AUDIENCE';
    var3[var8] = var6;
    var _closure1_slot12 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var19 = var0.channel;
        var _closure2_slot0 = var19;
        var5 = var0.listSections;
        var _closure2_slot1 = var5;
        var15 = var0.rowsBySection;
        var _closure2_slot2 = var15;
        var13 = _closure1_slot4;
        var1 = var13.useState;
        var4 = false;
        var1 = var1.bind(var13)(var4);
        var8 = _closure1_slot3;
        var3 = undefined;
        var9 = 2;
        var1 = var8.bind(var3)(var1, var9);
        var6 = 0;
        var14 = var1[var6];
        var _closure2_slot3 = var14;
        var7 = 1;
        var21 = var1[var7];
        var _closure2_slot4 = var21;
        var1 = var13.useState;
        var1 = var1.bind(var13)(var4);
        var1 = var8.bind(var3)(var1, var9);
        var4 = var1[var6];
        var _closure2_slot5 = var4;
        var20 = var1[var7];
        var _closure2_slot6 = var20;
        var1 = _closure1_slot6;
        var1 = var1.bind(var3)();
        var1 = var8.bind(var3)(var1, var9);
        var16 = var1[var6];
        var _closure2_slot7 = var16;
        var17 = var1[var7];
        var _closure2_slot8 = var17;
        var1 = _closure1_slot5;
        var1 = var1.bind(var3)();
        var1 = var8.bind(var3)(var1, var7);
        var10 = var1[var6];
        var1 = _closure1_slot1;
        var11 = _closure1_slot2;
        var6 = 8;
        var6 = var11[var6];
        var7 = var1.bind(var3)(var6);
        var6 = function() { // Environment: var2
            var0 = function() { // Environment: var0
                var2 = _closure2_slot8;
                var0 = undefined;
                var1 = false;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            return var0;
        };
        var6 = var7.bind(var3)(var6);
        var7 = var13.useMemo;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = function() { // Environment: var2
            _fun69285: for (var _fun69285_ip = 0;;) switch (_fun69285_ip) {
                case 0:
                    var4 = global;
                    var7 = var4.Math;
                    var5 = var7.max;
                    var3 = _closure2_slot1;
                    var0 = _closure1_slot12;
                    var0 = var0.STREAM;
                    var8 = var3[var0];
                    var3 = null;
                    var9 = var3 != var8;
                    var6 = 1;
                    var0 = var6;
                    if (!var9) {
                        _fun69285_ip = 55;
                        continue _fun69285
                    }
                case 52:
                    var0 = var8;
                case 55:
                    var5 = var5.bind(var7)(var0, var6);
                    var0 = new Array(3);
                    var0[0] = var5;
                    var5 = var4.Math;
                    var4 = var5.max;
                    var8 = _closure2_slot1;
                    var7 = _closure1_slot12;
                    var7 = var7.SPEAKER;
                    var7 = var8[var7];
                    var8 = var3 != var7;
                    var3 = var6;
                    if (!var8) {
                        _fun69285_ip = 111;
                        continue _fun69285
                    }
                case 108:
                    var3 = var7;
                case 111:
                    var3 = var4.bind(var5)(var3, var6);
                    var0[1] = var3;
                    var2 = _closure2_slot1;
                    var1 = _closure1_slot12;
                    var1 = var1.AUDIENCE;
                    var1 = var2[var1];
                    var0[2] = var1;
                    return var0;
            }
        };
        var9 = var7.bind(var13)(var5, var6);
        var _closure2_slot9 = var9;
        var23 = _closure1_slot0;
        var6 = 9;
        var5 = var11[var6];
        var8 = var23.bind(var3)(var5);
        var7 = var8.useActualStageSpeakerCount;
        var5 = var19.id;
        var18 = var7.bind(var8)(var5);
        var _closure2_slot10 = var18;
        var5 = var11[var6];
        var22 = var23.bind(var3)(var5);
        var12 = var22.useStageParticipantsCount;
        var8 = var19.id;
        var5 = 7;
        var7 = var11[var5];
        var7 = var23.bind(var3)(var7);
        var7 = var7.StageChannelParticipantNamedIndex;
        var7 = var7.AUDIENCE;
        var12 = var12.bind(var22)(var8, var7);
        var _closure2_slot11 = var12;
        var22 = var13.useCallback;
        var8 = new Array(2);
        var8[0] = var18;
        var8[1] = var12;
        var7 = function(arg0) { // Environment: var2
            _fun69286: for (var _fun69286_ip = 0;;) switch (_fun69286_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure1_slot12;
                    var2 = var2.STREAM;
                    if (!(var2 !== var1)) {
                        _fun69286_ip = 132;
                        continue _fun69286
                    }
                case 20:
                    var2 = _closure1_slot12;
                    var2 = var2.SPEAKER;
                    if (!(var2 !== var1)) {
                        _fun69286_ip = 112;
                        continue _fun69286
                    }
                case 34:
                    var2 = _closure1_slot12;
                    var2 = var2.AUDIENCE;
                    if (!(var2 !== var1)) {
                        _fun69286_ip = 92;
                        continue _fun69286
                    }
                case 48:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var0 = var3[var0];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var0);
                    var0 = null;
                    var1 = var0 != var1;
                    var0 = 'Section Not Found';
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = 0;
                    return var0;
                case 92:
                    var2 = _closure2_slot11;
                    var0 = 48;
                    var1 = 0;
                    if (!(var1 === var2)) {
                        _fun69286_ip = 110;
                        continue _fun69286
                    }
                case 108:
                    var0 = 0;
                case 110:
                    return var0;
                case 112:
                    var2 = _closure2_slot10;
                    var0 = 48;
                    var1 = 0;
                    if (!(var1 === var2)) {
                        _fun69286_ip = 130;
                        continue _fun69286
                    }
                case 128:
                    var0 = 0;
                case 130:
                    return var0;
                case 132:
                    var0 = 0;
                    return var0;
            }
        };
        var7 = var22.bind(var13)(var7, var8);
        var _closure2_slot12 = var7;
        var22 = var13.useCallback;
        var8 = new Array(4);
        var8[0] = var7;
        var8[1] = var15;
        var8[2] = var14;
        var8[3] = var4;
        var7 = function(arg0, arg1) { // Environment: var2
            _fun69287: for (var _fun69287_ip = 0;;) switch (_fun69287_ip) {
                case 0:
                    var6 = arg0;
                    var3 = arg1;
                    var4 = null;
                    if (!(var4 != var3)) {
                        _fun69287_ip = 260;
                        continue _fun69287
                    }
                case 15:
                    var5 = 0;
                    var2 = 0;
                    if (!(var2 === var3)) {
                        _fun69287_ip = 41;
                        continue _fun69287
                    }
                case 23:
                    var1 = _closure2_slot12;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var6);
                    var2 = var5 + var0;
                case 41:
                    var0 = _closure1_slot12;
                    var0 = var0.STREAM;
                    if (!(var0 !== var6)) {
                        _fun69287_ip = 217;
                        continue _fun69287
                    }
                case 61:
                    var0 = _closure1_slot12;
                    var0 = var0.SPEAKER;
                    if (!(var0 !== var6)) {
                        _fun69287_ip = 151;
                        continue _fun69287
                    }
                case 75:
                    var0 = _closure1_slot12;
                    var0 = var0.AUDIENCE;
                    if (!(var0 !== var6)) {
                        _fun69287_ip = 129;
                        continue _fun69287
                    }
                case 89:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 10;
                    var0 = var8[var0];
                    var9 = undefined;
                    var8 = var7.bind(var9)(var0);
                    var7 = var4 != var6;
                    var0 = 'Section Not Found';
                    var0 = var8.bind(var9)(var7, var0);
                    return var5;
                case 129:
                    var7 = _closure2_slot3;
                    var0 = var2;
                    if (var7) {
                        _fun69287_ip = 149;
                        continue _fun69287
                    }
                case 142:
                    var7 = 102;
                    var0 = var7 + var2;
                case 149:
                    return var0;
                case 151:
                    var7 = _closure2_slot2;
                    var7 = var7[var6];
                    var7 = var7[var3];
                    if (!(var4 != var7)) {
                        _fun69287_ip = 215;
                        continue _fun69287
                    }
                case 170:
                    var9 = _closure1_slot11;
                    var7 = _closure2_slot2;
                    var7 = var7[var6];
                    var7 = var7[var3];
                    var8 = var7.length;
                    var7 = undefined;
                    var7 = var9.bind(var7)(var3, var8);
                    var8 = _closure2_slot5;
                    var0 = var2;
                    if (var8) {
                        _fun69287_ip = 213;
                        continue _fun69287
                    }
                case 209:
                    var0 = var7 + var2;
                case 213:
                    return var0;
                case 215:
                    return var2;
                case 217:
                    var0 = _closure2_slot2;
                    var0 = var0[var6];
                    var3 = var0[var3];
                    var0 = var2;
                    if (!(var4 != var3)) {
                        _fun69287_ip = 258;
                        continue _fun69287
                    }
                case 239:
                    var4 = _closure1_slot11;
                    var3 = undefined;
                    var1 = 1;
                    var1 = var4.bind(var3)(var5, var1);
                    var0 = var1 + var2;
                case 258:
                    return var0;
                case 260:
                    var0 = 0;
                    return var0;
            }
        };
        var7 = var22.bind(var13)(var7, var8);
        var _closure2_slot13 = var7;
        var6 = var11[var6];
        var22 = var23.bind(var3)(var6);
        var8 = var22.useStageParticipants;
        var6 = var19.id;
        var5 = var11[var5];
        var5 = var23.bind(var3)(var5);
        var5 = var5.StageChannelParticipantNamedIndex;
        var5 = var5.SPEAKER;
        var8 = var8.bind(var22)(var6, var5);
        var6 = var8.filter;
        var5 = function(arg0) { // Environment: var2
            var0 = arg0;
            var1 = var0.type;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 7;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.StageChannelParticipantTypes;
            var0 = var0.VOICE;
            var0 = var1 === var0;
            return var0;
        };
        var8 = var6.bind(var8)(var5);
        var6 = var8.map;
        var5 = function(arg0) { // Environment: var2
            var0 = arg0;
            var0 = var0.user;
            return var0;
        };
        var5 = var6.bind(var8)(var5);
        var _closure2_slot14 = var5;
        var8 = var13.useCallback;
        var6 = new Array(7);
        var6[0] = var21;
        var6[1] = var14;
        var6[2] = var4;
        var6[3] = var20;
        var6[4] = var18;
        var6[5] = var12;
        var6[6] = var5;
        var5 = function(arg0) { // Environment: var2
            _fun69290: for (var _fun69290_ip = 0;;) switch (_fun69290_ip) {
                case 0:
                    var1 = arg0;
                    var0 = _closure1_slot12;
                    var0 = var0.STREAM;
                    if (!(var0 !== var1)) {
                        _fun69290_ip = 479;
                        continue _fun69290
                    }
                case 25:
                    var0 = _closure1_slot12;
                    var0 = var0.AUDIENCE;
                    if (!(var0 !== var1)) {
                        _fun69290_ip = 338;
                        continue _fun69290
                    }
                case 42:
                    var0 = _closure1_slot12;
                    var0 = var0.SPEAKER;
                    if (!(var0 !== var1)) {
                        _fun69290_ip = 98;
                        continue _fun69290
                    }
                case 56:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var0 = var3[var0];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    var1 = 'Section Not Found';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                case 98:
                    var2 = _closure2_slot10;
                    var1 = 0;
                    var0 = null;
                    if (!(var1 !== var2)) {
                        _fun69290_ip = 336;
                        continue _fun69290
                    }
                case 116:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var1 = 11;
                    var1 = var12[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var10 = _closure1_slot0;
                    var5 = 12;
                    var8 = var12[var5];
                    var8 = var10.bind(var3)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var5 = var12[var5];
                    var5 = var10.bind(var3)(var5);
                    var5 = var5.t;
                    var5 = var5.CduOkx;
                    var5 = var8.bind(var9)(var5);
                    var1.label = var5;
                    var5 = _closure2_slot10;
                    var1.count = var5;
                    var5 = function() {
                        var2 = _closure2_slot6;
                        var0 = _closure2_slot5;
                        var1 = !var0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onToggleCollapse = var5;
                    var8 = _closure2_slot5;
                    var1.collapsed = var8;
                    var5 = undefined;
                    if (!var8) {
                        _fun69290_ip = 326;
                        continue _fun69290
                    }
                case 236:
                    var10 = _closure1_slot8;
                    var9 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var8 = 13;
                    var8 = var13[var8];
                    var9 = var9.bind(var3)(var8);
                    var8 = {};
                    var11 = _closure2_slot14;
                    var8.users = var11;
                    var11 = 10;
                    var8.max = var11;
                    var12 = _closure1_slot0;
                    var11 = 5;
                    var11 = var13[var11];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.AvatarSizes;
                    var11 = var11.XSMALL_20;
                    var8.avatarSize = var11;
                    var11 = _closure1_slot10;
                    var8.cutout = var11;
                    var5 = var10.bind(var3)(var9, var8);
                case 326:
                    var1.children = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 336:
                    return var0;
                case 338:
                    var2 = _closure2_slot11;
                    var1 = 0;
                    var0 = null;
                    if (!(var1 !== var2)) {
                        _fun69290_ip = 477;
                        continue _fun69290
                    }
                case 356:
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var1 = 11;
                    var1 = var11[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var10 = _closure1_slot0;
                    var7 = 12;
                    var8 = var11[var7];
                    var8 = var10.bind(var3)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var3)(var7);
                    var7 = var7.t;
                    var7 = var7["3foUu5"];
                    var7 = var8.bind(var9)(var7);
                    var1.label = var7;
                    var7 = _closure2_slot11;
                    var1.count = var7;
                    var6 = function() {
                        var2 = _closure2_slot4;
                        var0 = _closure2_slot3;
                        var1 = !var0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onToggleCollapse = var6;
                    var5 = _closure2_slot3;
                    var1.collapsed = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 477:
                    return var0;
                case 479:
                    var0 = null;
                    return var0;
            }
        };
        var18 = var8.bind(var13)(var5, var6);
        var _closure2_slot15 = var18;
        var8 = var13.useCallback;
        var6 = function(arg0) { // Environment: var2
            _fun69293: for (var _fun69293_ip = 0;;) switch (_fun69293_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure1_slot12;
                    var2 = var2.SPEAKER;
                    if (!(var2 !== var1)) {
                        _fun69293_ip = 76;
                        continue _fun69293
                    }
                case 20:
                    var2 = _closure1_slot12;
                    var2 = var2.AUDIENCE;
                    if (!(var2 !== var1)) {
                        _fun69293_ip = 76;
                        continue _fun69293
                    }
                case 34:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var0 = var3[var0];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    var1 = 'Section Not Found';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                case 76:
                    var0 = null;
                    return var0;
            }
        };
        var5 = new Array(0);
        var6 = var8.bind(var13)(var6, var5);
        var12 = var13.useCallback;
        var8 = function(arg0) { // Environment: var2
            _fun69294: for (var _fun69294_ip = 0;;) switch (_fun69294_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure1_slot12;
                    var2 = var2.SPEAKER;
                    if (!(var2 !== var1)) {
                        _fun69294_ip = 83;
                        continue _fun69294
                    }
                case 20:
                    var2 = _closure1_slot12;
                    var2 = var2.AUDIENCE;
                    if (!(var2 !== var1)) {
                        _fun69294_ip = 78;
                        continue _fun69294
                    }
                case 34:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var0 = var3[var0];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var0);
                    var0 = null;
                    var1 = var0 != var1;
                    var0 = 'Section Not Found';
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = 0;
                    return var0;
                case 78:
                    var0 = 160;
                    return var0;
                case 83:
                    var0 = 0;
                    return var0;
            }
        };
        var5 = new Array(0);
        var5 = var12.bind(var13)(var8, var5);
        var12 = var13.useCallback;
        var8 = new Array(5);
        var8[0] = var19;
        var8[1] = var18;
        var8[2] = var15;
        var8[3] = var14;
        var8[4] = var4;
        var4 = function(arg0, arg1) { // Environment: var2
            _fun69295: for (var _fun69295_ip = 0;;) switch (_fun69295_ip) {
                case 0:
                    var9 = arg0;
                    var8 = arg1;
                    var2 = null;
                    var1 = 0;
                    var0 = null;
                    if (!(var1 === var8)) {
                        _fun69295_ip = 30;
                        continue _fun69295
                    }
                case 16:
                    var3 = _closure2_slot15;
                    var1 = undefined;
                    var0 = var3.bind(var1)(var9);
                case 30:
                    var1 = _closure2_slot2;
                    var1 = var1[var9];
                    var1 = var1[var8];
                    if (!(var2 != var1)) {
                        _fun69295_ip = 551;
                        continue _fun69295
                    }
                case 52:
                    var3 = _closure1_slot12;
                    var3 = var3.STREAM;
                    if (!(var3 !== var9)) {
                        _fun69295_ip = 432;
                        continue _fun69295
                    }
                case 72:
                    var3 = _closure1_slot12;
                    var3 = var3.SPEAKER;
                    if (!(var3 !== var9)) {
                        _fun69295_ip = 285;
                        continue _fun69295
                    }
                case 89:
                    var3 = _closure1_slot12;
                    var3 = var3.AUDIENCE;
                    if (!(var3 !== var9)) {
                        _fun69295_ip = 143;
                        continue _fun69295
                    }
                case 103:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 10;
                    var3 = var5[var3];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = var2 != var9;
                    var3 = 'Section Not Found';
                    var3 = var5.bind(var6)(var4, var3);
                    return var2;
                case 143:
                    var6 = _closure1_slot9;
                    var2 = _closure1_slot4;
                    var5 = var2.Fragment;
                    var4 = {};
                    var2 = new Array(2);
                    var2[0] = var0;
                    var3 = _closure2_slot3;
                    var3 = !var3;
                    if (!var3) {
                        _fun69295_ip = 236;
                        continue _fun69295
                    }
                case 177:
                    var13 = _closure1_slot8;
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 15;
                    var10 = var12[var10];
                    var12 = undefined;
                    var11 = var11.bind(var12)(var10);
                    var10 = {};
                    var14 = _closure2_slot0;
                    var10.channel = var14;
                    var14 = _closure2_slot2;
                    var14 = var14[var9];
                    var14 = var14[var8];
                    var10.participants = var14;
                    var3 = var13.bind(var12)(var11, var10);
                case 236:
                    var2[1] = var3;
                    var4.children = var2;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var10 = var2.concat;
                    var3 = 'audience-';
                    var2 = '-';
                    var3 = var10.bind(var3)(var9, var2, var8);
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5, var4, var3);
                    return var2;
                case 285:
                    var6 = _closure1_slot9;
                    var2 = _closure1_slot4;
                    var5 = var2.Fragment;
                    var4 = {};
                    var2 = new Array(2);
                    var2[0] = var0;
                    var3 = _closure2_slot5;
                    var3 = !var3;
                    if (!var3) {
                        _fun69295_ip = 383;
                        continue _fun69295
                    }
                case 319:
                    var13 = _closure1_slot8;
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var10 = 14;
                    var10 = var12[var10];
                    var12 = undefined;
                    var11 = var11.bind(var12)(var10);
                    var10 = {};
                    var14 = _closure2_slot0;
                    var10.channel = var14;
                    var14 = _closure2_slot2;
                    var14 = var14[var9];
                    var14 = var14[var8];
                    var10.participants = var14;
                    var10.row = var8;
                    var3 = var13.bind(var12)(var11, var10);
                case 383:
                    var2[1] = var3;
                    var4.children = var2;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var10 = var2.concat;
                    var3 = 'speaker-';
                    var2 = '-';
                    var3 = var10.bind(var3)(var9, var2, var8);
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5, var4, var3);
                    return var2;
                case 432:
                    var5 = _closure1_slot8;
                    var2 = _closure1_slot4;
                    var4 = var2.Fragment;
                    var3 = {};
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var1 = var2[var1];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var1);
                    var1 = {};
                    var10 = _closure2_slot0;
                    var1.channel = var10;
                    var7 = _closure2_slot2;
                    var7 = var7[var9];
                    var7 = var7[var8];
                    var1.participants = var7;
                    var1.row = var8;
                    var1 = var5.bind(var2)(var6, var1);
                    var3.children = var1;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = 'stream-';
                    var1 = '-';
                    var1 = var7.bind(var6)(var9, var1, var8);
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                case 551:
                    return var0;
            }
        };
        var8 = var12.bind(var13)(var4, var8);
        var14 = var13.useMemo;
        var12 = new Array(2);
        var12[0] = var9;
        var12[1] = var7;
        var4 = function() { // Environment: var2
            _fun69296: for (var _fun69296_ip = 0;;) switch (_fun69296_ip) {
                case 0:
                    var3 = _closure2_slot9;
                    var0 = _closure1_slot12;
                    var0 = var0.STREAM;
                    var0 = var3[var0];
                    var4 = 0;
                    var3 = var0 > var4;
                    var0 = 0;
                    if (!var3) {
                        _fun69296_ip = 57;
                        continue _fun69296
                    }
                case 35:
                    var3 = _closure2_slot13;
                    var1 = _closure1_slot12;
                    var2 = var1.STREAM;
                    var1 = undefined;
                    var0 = var3.bind(var1)(var2, var4);
                case 57:
                    return var0;
            }
        };
        var14 = var14.bind(var13)(var4, var12);
        var _closure2_slot16 = var14;
        var15 = var13.useMemo;
        var12 = new Array(2);
        var12[0] = var9;
        var12[1] = var7;
        var4 = function() { // Environment: var2
            _fun69297: for (var _fun69297_ip = 0;;) switch (_fun69297_ip) {
                case 0:
                    var1 = _closure2_slot9;
                    var0 = _closure1_slot12;
                    var0 = var0.SPEAKER;
                    var1 = var1[var0];
                    var0 = 0;
                    var1 = var0 < var1;
                    var4 = undefined;
                    var3 = 0;
                    var2 = 0;
                    if (!var1) {
                        _fun69297_ip = 87;
                        continue _fun69297
                    }
                case 39:
                    var8 = _closure2_slot13;
                    var1 = _closure1_slot12;
                    var7 = var1.SPEAKER;
                    var7 = var8.bind(var4)(var7, var2);
                    var3 = var3 + var7;
                    var2 = var2 + 1;
                    var8 = _closure2_slot9;
                    var1 = var1.SPEAKER;
                    var1 = var8[var1];
                    var0 = var3;
                    if (var2 < var1) {
                        _fun69297_ip = 39;
                        continue _fun69297
                    }
                case 87:
                    return var0;
            }
        };
        var15 = var15.bind(var13)(var4, var12);
        var _closure2_slot17 = var15;
        var12 = var13.useCallback;
        var4 = new Array(4);
        var4[0] = var17;
        var4[1] = var16;
        var4[2] = var15;
        var4[3] = var14;
        var2 = function(arg0) { // Environment: var2
            _fun69298: for (var _fun69298_ip = 0;;) switch (_fun69298_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.contentOffset;
                    var3 = var0.y;
                    var2 = _closure2_slot17;
                    var1 = _closure2_slot16;
                    var2 = var2 + var1;
                    var1 = 60;
                    var2 = var2 - var1;
                    var1 = _closure2_slot7;
                    if (var1) {
                        _fun69298_ip = 68;
                        continue _fun69298
                    }
                case 49:
                    if (!(var3 > var2)) {
                        _fun69298_ip = 68;
                        continue _fun69298
                    }
                case 53:
                    var5 = _closure2_slot8;
                    var4 = undefined;
                    var1 = true;
                    var1 = var5.bind(var4)(var1);
                    _fun69298_ip = 95;
                    continue _fun69298;
                case 68:
                    var1 = _closure2_slot7;
                    if (!var1) {
                        _fun69298_ip = 79;
                        continue _fun69298
                    }
                case 75:
                    var1 = var3 < var2;
                case 79:
                    if (!var1) {
                        _fun69298_ip = 95;
                        continue _fun69298
                    }
                case 82:
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                case 95:
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = var12.bind(var13)(var2, var4);
        var2 = _closure1_slot8;
        var0 = 16;
        var0 = var11[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.ref = var10;
        var0.sections = var9;
        var0.renderItem = var8;
        var0.itemSize = var7;
        var0.renderSectionFooter = var6;
        var0.sectionFooterSize = var5;
        var0.onScroll = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/StageChannelCallList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var6 = var0.channel;
        var2 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 17;
        var7 = var4[var1];
        var3 = undefined;
        var9 = var2.bind(var3)(var7);
        var8 = var9.useThrottleDurationForChannel;
        var7 = var6.id;
        var14 = var8.bind(var9)(var7);
        var9 = _closure1_slot1;
        var7 = 18;
        var7 = var4[var7];
        var7 = var9.bind(var3)(var7);
        var7 = var7.bind(var3)();
        var12 = var7.width;
        var _closure2_slot0 = var12;
        var7 = 19;
        var7 = var4[var7];
        var9 = var2.bind(var3)(var7);
        var7 = var9.useIsScreenLandscape;
        var11 = var7.bind(var9)();
        var _closure2_slot1 = var11;
        var10 = _closure1_slot4;
        var9 = var10.useMemo;
        var7 = new Array(2);
        var7[0] = var12;
        var7[1] = var11;
        var5 = function() { // Environment: var5
            _fun69300: for (var _fun69300_ip = 0;;) switch (_fun69300_ip) {
                case 0:
                    var12 = _closure2_slot0;
                    var6 = _closure2_slot1;
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 7;
                    var2 = var2[var5];
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.StageChannelParticipantNamedIndex;
                    var3 = var2.SPEAKER;
                    var9 = 3;
                    var2 = var9;
                    if (!var6) {
                        _fun69300_ip = 125;
                        continue _fun69300
                    }
                case 59:
                    var6 = global;
                    var8 = var6.Math;
                    var7 = var8.max;
                    var11 = var6.Math;
                    var10 = var11.floor;
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var6 = 6;
                    var6 = var14[var6];
                    var6 = var13.bind(var4)(var6);
                    var6 = var6.LANDSCAPE_MAX_TILE_WIDTH;
                    var6 = var12 / var6;
                    var6 = var10.bind(var11)(var6);
                    var2 = var7.bind(var8)(var9, var6);
                case 125:
                    var0[var3] = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var5];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.StageChannelParticipantNamedIndex;
                    var2 = var2.AUDIENCE;
                    var1 = _closure1_slot7;
                    var0[var2] = var1;
                    return var0;
            }
        };
        var15 = var9.bind(var10)(var5, var7);
        var1 = var4[var1];
        var5 = var2.bind(var3)(var1);
        var4 = var5.useStageChannelParticipantsListThrottled;
        var16 = var6.id;
        var13 = true;
        var17 = var5;
        var4 = var17[var4](var16, var15, var14, var13, var12);
        var2 = _closure1_slot3;
        var1 = 2;
        var2 = var2.bind(var3)(var4, var1);
        var1 = 0;
        var5 = var2[var1];
        var1 = 1;
        var4 = var2[var1];
        var2 = _closure1_slot8;
        var1 = _closure1_slot13;
        var0 = {};
        var0.channel = var6;
        var0.listSections = var5;
        var0.rowsBySection = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 8647, 4231, 33, 5449, 8648, 5657, 4094, 8405, 44, 8653, 1234, 8655, 8656, 8668, 6451, 8671, 1464, 5357, 2]);