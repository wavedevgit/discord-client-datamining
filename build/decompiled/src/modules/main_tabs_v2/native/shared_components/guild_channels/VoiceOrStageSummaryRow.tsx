// modules/main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx
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
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        var6 = arg0;
        var0 = {};
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'marginLeft': 4294967294
        };
        var0.container = var1;
        var1 = {
            'backgroundColor': null,
            'borderRadius': null,
            'display': 'flex',
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'center'
        };
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 4;
        var7 = var5[var2];
        var3 = undefined;
        var7 = var4.bind(var3)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_MOD_STRONG;
        var1.backgroundColor = var7;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.radii;
        var7 = var7.round;
        var1.borderRadius = var7;
        var1.height = var6;
        var1.width = var6;
        var0.overflowCircle = var1;
        var1 = {};
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.radii;
        var7 = var7.round;
        var1.borderRadius = var7;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_BASE_LOW;
        var1.borderColor = var7;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_BASE_LOW;
        var1.backgroundColor = var7;
        var7 = 2;
        var1.borderWidth = var7;
        var0.wrapper = var1;
        var1 = {
            'borderRadius': null,
            'paddingHorizontal': 8,
            'display': 'flex',
            'flexDirection': 'row',
            'alignItems': 'center'
        };
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.radii;
        var7 = var7.round;
        var1.borderRadius = var7;
        var1.height = var6;
        var0.badge = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.BACKGROUND_FEEDBACK_NOTIFICATION;
        var1.backgroundColor = var6;
        var0.liveBadge = var1;
        var1 = {};
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.BACKGROUND_BASE_LOWER;
        var1.backgroundColor = var2;
        var0.audienceBadge = var1;
        return var0;
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: VoiceOrStageSummaryRow, environment: var1
        _fun106100: for (var _fun106100_ip = 0;;) switch (_fun106100_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.users;
                var5 = var0.max;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun106100_ip = 25;
                    continue _fun106100
                }
            case 22:
                var5 = 5;
            case 25:
                var _closure2_slot0 = var5;
                var1 = var0.guildId;
                var _closure2_slot1 = var1;
                var2 = var0.layout;
                var16 = var0.audienceCount;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 5;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getLayoutStyles;
                var0 = var0.bind(var1)(var2);
                _closure2_slot2 = var0;
                var0 = var0.voiceOrStageSummaryRow;
                var7 = var0.size;
                var0 = global;
                var2 = var0.Math;
                var1 = var2.max;
                var0 = var10.length;
                var0 = var0 - var5;
                var11 = 0;
                var0 = var1.bind(var2)(var0, var11);
                _closure2_slot3 = var0;
                var0 = _closure1_slot6;
                var14 = var0.bind(var3)(var7);
                _closure2_slot4 = var14;
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var6 = var14.container;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var18 = 4;
                var7 = var7 + var18;
                var6.height = var7;
                var5[1] = var6;
                var0.style = var5;
                var5 = var10.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    _fun106101: for (var _fun106101_ip = 0;;) switch (_fun106101_ip) {
                        case 0:
                            var7 = arg1;
                            var0 = _closure2_slot0;
                            if (!(!(var7 >= var0))) {
                                _fun106101_ip = 386;
                                continue _fun106101
                            }
                        case 17:
                            var0 = _closure2_slot0;
                            var11 = 1;
                            var0 = var0 - var11;
                            if (!(var7 === var0)) {
                                _fun106101_ip = 45;
                                continue _fun106101
                            }
                        case 32:
                            var0 = _closure2_slot3;
                            var6 = 0;
                            if (!(!(var0 > var6))) {
                                _fun106101_ip = 194;
                                continue _fun106101
                            }
                        case 45:
                            var3 = _closure1_slot4;
                            var2 = _closure1_slot3;
                            var1 = {};
                            var4 = _closure2_slot4;
                            var5 = var4.wrapper;
                            var4 = new Array(2);
                            var4[0] = var5;
                            var5 = 0;
                            var5 = var5 !== var7;
                            if (!var5) {
                                _fun106101_ip = 101;
                                continue _fun106101
                            }
                        case 85:
                            var8 = {};
                            var9 = -12;
                            var8.marginLeft = var9;
                            var5 = var8;
                        case 101:
                            var4[1] = var5;
                            var1.style = var4;
                            var8 = _closure1_slot4;
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var0 = 7;
                            var4 = var4[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var4);
                            var4 = {};
                            var9 = arg0;
                            var4.user = var9;
                            var9 = _closure2_slot1;
                            var4.guildId = var9;
                            var9 = _closure2_slot2;
                            var9 = var9.voiceOrStageSummaryRow;
                            var9 = var9.avatarSize;
                            var4.size = var9;
                            var4 = var8.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1, var7);
                            _fun106101_ip = 384;
                            continue _fun106101;
                        case 194:
                            var5 = _closure1_slot4;
                            var4 = _closure1_slot3;
                            var3 = {};
                            var1 = _closure2_slot4;
                            var8 = var1.wrapper;
                            var1 = new Array(2);
                            var1[0] = var8;
                            var6 = var6 !== var7;
                            if (!var6) {
                                _fun106101_ip = 248;
                                continue _fun106101
                            }
                        case 232:
                            var7 = {};
                            var8 = -12;
                            var7.marginLeft = var8;
                            var6 = var7;
                        case 248:
                            var1[1] = var6;
                            var3.style = var1;
                            var7 = _closure1_slot4;
                            var6 = _closure1_slot3;
                            var1 = {};
                            var8 = _closure2_slot4;
                            var8 = var8.overflowCircle;
                            var1.style = var8;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 6;
                            var8 = var8[var2];
                            var2 = undefined;
                            var8 = var9.bind(var2)(var8);
                            var9 = var8.Text;
                            var8 = {};
                            var12 = 'text-xs/medium';
                            var8.variant = var12;
                            var10 = _closure2_slot3;
                            var12 = var10 + var11;
                            var10 = global;
                            var10 = var10.HermesInternal;
                            var11 = var10.concat;
                            var10 = '+';
                            var10 = var11.bind(var10)(var12);
                            var8.children = var10;
                            var8 = var7.bind(var2)(var9, var8);
                            var1.children = var8;
                            var1 = var7.bind(var2)(var6, var1);
                            var3.children = var1;
                            var1 = 'overflow';
                            var0 = var5.bind(var2)(var4, var3, var1);
                        case 384:
                            return var0;
                        case 386:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var5.bind(var10)(var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                var5 = var5 != var16;
                if (!var5) {
                    _fun106100_ip = 240;
                    continue _fun106100
                }
            case 236:
                var5 = var16 > var11;
            case 240:
                if (!var5) {
                    _fun106100_ip = 521;
                    continue _fun106100
                }
            case 246:
                var8 = _closure1_slot4;
                var7 = _closure1_slot3;
                var6 = {};
                var12 = var14.wrapper;
                var9 = new Array(2);
                var9[0] = var12;
                var10 = var10.length;
                var10 = var10 > var11;
                if (!var10) {
                    _fun106100_ip = 298;
                    continue _fun106100
                }
            case 282:
                var11 = {};
                var12 = -12;
                var11.marginLeft = var12;
                var10 = var11;
            case 298:
                var9[1] = var10;
                var6.style = var9;
                var11 = _closure1_slot5;
                var10 = _closure1_slot3;
                var9 = {};
                var15 = var14.badge;
                var12 = new Array(2);
                var12[0] = var15;
                var14 = var14.audienceBadge;
                var12[1] = var14;
                var9.style = var12;
                var15 = _closure1_slot4;
                var20 = _closure1_slot1;
                var17 = _closure1_slot2;
                var19 = 8;
                var12 = var17[var19];
                var14 = var20.bind(var3)(var12);
                var12 = {};
                var19 = var17[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.Sizes;
                var19 = var19.CUSTOM;
                var12.size = var19;
                var19 = {
                    'height': 14,
                    'width': 14
                };
                var12.style = var19;
                var19 = 9;
                var19 = var17[var19];
                var19 = var20.bind(var3)(var19);
                var12.source = var19;
                var14 = var15.bind(var3)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var14 = _closure1_slot0;
                var13 = 6;
                var13 = var17[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {};
                var17 = 'text-sm/bold';
                var13.variant = var17;
                var17 = {};
                var17.marginLeft = var18;
                var13.style = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 521:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/guild_channels/VoiceOrStageSummaryRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 8748, 3901, 5413, 4045, 13766, 2]);