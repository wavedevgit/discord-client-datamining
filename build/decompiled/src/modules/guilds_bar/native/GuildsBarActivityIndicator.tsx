// modules/guilds_bar/native/GuildsBarActivityIndicator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var8;
    var3 = function arg0() {
        _fun101093: for (var _fun101093_ip = 0;;) switch (_fun101093_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.audio;
                var2 = var1.video;
                var3 = var1.screenshare;
                var4 = var1.liveStage;
                var5 = var1.activeEvent;
                var1 = var1.activity;
                if (var5) {
                    _fun101093_ip = 381;
                    continue _fun101093
                }
            case 45:
                if (var4) {
                    _fun101093_ip = 319;
                    continue _fun101093
                }
            case 51:
                if (var3) {
                    _fun101093_ip = 257;
                    continue _fun101093
                }
            case 57:
                if (var2) {
                    _fun101093_ip = 195;
                    continue _fun101093
                }
            case 63:
                if (var0) {
                    _fun101093_ip = 133;
                    continue _fun101093
                }
            case 66:
                var0 = null;
                if (!var1) {
                    _fun101093_ip = 131;
                    continue _fun101093
                }
            case 71:
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 16;
                var3 = var5[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.AppsIcon;
                var1.icon = var3;
                var3 = _closure1_slot1;
                var2 = 17;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var1.source = var2;
                var0 = var1;
            case 131:
                _fun101093_ip = 193;
                continue _fun101093;
            case 133:
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 14;
                var3 = var5[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.VoiceNormalIcon;
                var1.icon = var3;
                var3 = _closure1_slot1;
                var2 = 15;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var1.source = var2;
                var0 = var1;
            case 193:
                _fun101093_ip = 255;
                continue _fun101093;
            case 195:
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 12;
                var3 = var5[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.VideoIcon;
                var1.icon = var3;
                var3 = _closure1_slot1;
                var2 = 13;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var1.source = var2;
                var0 = var1;
            case 255:
                _fun101093_ip = 317;
                continue _fun101093;
            case 257:
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 10;
                var3 = var5[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.ScreenIcon;
                var1.icon = var3;
                var3 = _closure1_slot1;
                var2 = 11;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var1.source = var2;
                var0 = var1;
            case 317:
                _fun101093_ip = 379;
                continue _fun101093;
            case 319:
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 8;
                var3 = var5[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.StageIcon;
                var1.icon = var3;
                var3 = _closure1_slot1;
                var2 = 9;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var1.source = var2;
                var0 = var1;
            case 379:
                _fun101093_ip = 441;
                continue _fun101093;
            case 381:
                var1 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 6;
                var3 = var5[var3];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.CalendarIcon;
                var1.icon = var3;
                var3 = _closure1_slot1;
                var2 = 7;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var1.source = var2;
                var0 = var1;
            case 441:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var1 = function arg0() {
        _fun101094: for (var _fun101094_ip = 0;;) switch (_fun101094_ip) {
            case 0:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 18;
                var2 = var4[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = arg0;
                var4 = var3.bind(var5)(var2);
                var _closure2_slot0 = var4;
                var2 = _closure1_slot7;
                var6 = var2.bind(var5)(var4);
                var _closure2_slot1 = var6;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var7 = null;
                var1 = var7 == var6;
                var8 = undefined;
                if (var1) {
                    _fun101094_ip = 77;
                    continue _fun101094
                }
            case 72:
                var8 = var6.icon;
            case 77:
                var1 = new Array(3);
                var1[0] = var8;
                var7 = var7 == var6;
                var5 = undefined;
                if (var7) {
                    _fun101094_ip = 99;
                    continue _fun101094
                }
            case 94:
                var5 = var6.source;
            case 99:
                var1[1] = var5;
                var4 = var4.isCurrentUserConnected;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    _fun101095: for (var _fun101095_ip = 0;;) switch (_fun101095_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot1;
                            var2 = null;
                            var5 = var2 == var3;
                            var4 = undefined;
                            if (var5) {
                                _fun101095_ip = 29;
                                continue _fun101095
                            }
                        case 20:
                            var5 = _closure2_slot1;
                            var4 = var5.icon;
                        case 29:
                            var0.IconComponent = var4;
                            var4 = _closure2_slot1;
                            var4 = var2 == var4;
                            var3 = undefined;
                            if (var4) {
                                _fun101095_ip = 55;
                                continue _fun101095
                            }
                        case 46:
                            var4 = _closure2_slot1;
                            var3 = var4.source;
                        case 55:
                            var4 = var2 != var3;
                            var2 = null;
                            if (!var4) {
                                _fun101095_ip = 67;
                                continue _fun101095
                            }
                        case 64:
                            var2 = var3;
                        case 67:
                            var0.source = var2;
                            var1 = _closure2_slot0;
                            var1 = var1.isCurrentUserConnected;
                            var0.isCurrentUserConnected = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var4);
    var0 = 0;
    var6 = var8[var0];
    var4 = arg3;
    var0 = undefined;
    var9 = var4.bind(var0)(var6);
    var _closure1_slot3 = var9;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var10 = var7.bind(var0)(var4);
    var6 = var10.createStyles;
    var4 = {};
    var11 = {
        'position': 'absolute',
        'top': 4294967293,
        'right': 4294967293,
        'justifyContent': 'center',
        'width': 22,
        'height': 22,
        'padding': 3
    };
    var12 = 3;
    var14 = var8[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var11.borderRadius = var14;
    var14 = var8[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWEST;
    var11.backgroundColor = var14;
    var4.activityWrapper = var11;
    var11 = {
        'justifyContent': 'center',
        'width': 16,
        'height': 16,
        'padding': 2
    };
    var14 = var8[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11.borderRadius = var14;
    var14 = var8[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_STRONG;
    var11.backgroundColor = var14;
    var4.activityIconWrapper = var11;
    var11 = {};
    var14 = var8[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.GREEN_360;
    var11.backgroundColor = var14;
    var4.activityIconWrapperActive = var11;
    var11 = {
        'width': 12,
        'height': 12
    };
    var12 = var8[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.none;
    var11.borderRadius = var12;
    var4.activityIcon = var11;
    var4 = var6.bind(var10)(var4);
    var _closure1_slot5 = var4;
    var6 = var9.memo;
    var4 = function(arg0) { // Environment: var5
        _fun101096: for (var _fun101096_ip = 0;;) switch (_fun101096_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.IconComponent;
                var8 = var0.style;
                var12 = var0.source;
                var13 = var0.isCurrentUserConnected;
                var0 = _closure1_slot5;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 4;
                var0 = var6[var4];
                var1 = var5.bind(var3)(var0);
                var0 = {};
                var14 = var10.activityWrapper;
                var7 = new Array(2);
                var7[0] = var14;
                var7[1] = var8;
                var0.style = var7;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var6 = var10.activityIconWrapper;
                var7 = new Array(2);
                var7[0] = var6;
                var6 = null;
                var8 = null;
                if (!var13) {
                    _fun101096_ip = 123;
                    continue _fun101096
                }
            case 117:
                var8 = var10.activityIconWrapperActive;
            case 123:
                var7[1] = var8;
                var4.style = var7;
                if (!(var6 == var9)) {
                    _fun101096_ip = 210;
                    continue _fun101096
                }
            case 135:
                var8 = _closure1_slot4;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var6 = 5;
                var6 = var14[var6];
                var7 = var13.bind(var3)(var6);
                var6 = {};
                var6.source = var12;
                var12 = 3;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.unsafe_rawColors;
                var12 = var12.WHITE;
                var6.color = var12;
                var12 = var10.activityIcon;
                var6.style = var12;
                var6 = var8.bind(var3)(var7, var6);
                _fun101096_ip = 275;
                continue _fun101096;
            case 210:
                var8 = _closure1_slot4;
                var7 = {};
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var11 = 3;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.colors;
                var11 = var11.WHITE;
                var7.color = var11;
                var11 = 'xxs';
                var7.size = var11;
                var10 = var10.activityIcon;
                var7.style = var10;
                var6 = var8.bind(var3)(var9, var7);
            case 275:
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var6.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var6 = var9.memo;
    var5 = function arg0() {
        _fun101097: for (var _fun101097_ip = 0;;) switch (_fun101097_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var7 = var0.style;
                var0 = _closure1_slot8;
                var4 = undefined;
                var0 = var0.bind(var4)(var2);
                var8 = var0.IconComponent;
                var6 = var0.source;
                var5 = var0.isCurrentUserConnected;
                var0 = null;
                var2 = var0 != var6;
                if (!var2) {
                    _fun101097_ip = 85;
                    continue _fun101097
                }
            case 52:
                var3 = _closure1_slot4;
                var2 = _closure1_slot6;
                var1 = {};
                var1.IconComponent = var8;
                var1.style = var7;
                var1.source = var6;
                var1.isCurrentUserConnected = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 85:
                return var0;
        }
    };
    var5 = var6.bind(var9)(var5);
    var6 = 19;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guilds_bar/native/GuildsBarActivityIndicator.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.GuildsBarActivityIndicatorBase = var4;
    var2.getMediaIcon = var3;
    var2.useActivityIndicatorState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 6477, 4086, 8203, 8200, 4862, 6482, 10598, 13186, 8811, 13187, 4865, 13188, 7795, 6868, 13183, 2]);