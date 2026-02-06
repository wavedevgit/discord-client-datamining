// modules/guild_progress/native/components/GuildProgressOverview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        var0 = arg0;
        var21 = var0.titleStyle;
        var6 = var0.onPress;
        var4 = var0.onLongPress;
        var19 = var0.title;
        var18 = var0.subtitle;
        var8 = var0.percentComplete;
        var0 = _closure1_slot7;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var16 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 10;
        var0 = var10[var0];
        var0 = var16.bind(var3)(var0);
        var1 = var0.PressableOpacity;
        var0 = {
            'accessibilityRole': 'button',
            'activeOpacity': 0.4
        };
        var7 = var9.container;
        var0.style = var7;
        var0.onPress = var6;
        var0.onLongPress = var4;
        var11 = _closure1_slot6;
        var7 = _closure1_slot4;
        var4 = {};
        var6 = var9.horizontal;
        var4.style = var6;
        var13 = _closure1_slot6;
        var12 = _closure1_slot4;
        var6 = {};
        var17 = _closure1_slot5;
        var14 = 11;
        var14 = var10[var14];
        var14 = var16.bind(var3)(var14);
        var15 = var14.LegacyText;
        var14 = {};
        var22 = var9.title;
        var20 = new Array(2);
        var20[0] = var22;
        var20[1] = var21;
        var14.style = var20;
        var14.children = var19;
        var15 = var17.bind(var3)(var15, var14);
        var14 = new Array(2);
        var14[0] = var15;
        var17 = _closure1_slot5;
        var15 = 12;
        var15 = var10[var15];
        var15 = var16.bind(var3)(var15);
        var16 = var15.Text;
        var15 = {
            'style': null,
            'variant': 'text-xs/medium',
            'color': 'text-default'
        };
        var19 = var9.step;
        var15.style = var19;
        var15.children = var18;
        var15 = var17.bind(var3)(var16, var15);
        var14[1] = var15;
        var6.children = var14;
        var6 = var13.bind(var3)(var12, var6);
        var12 = new Array(2);
        var12[0] = var6;
        var15 = _closure1_slot5;
        var6 = _closure1_slot1;
        var13 = 13;
        var13 = var10[var13];
        var14 = var6.bind(var3)(var13);
        var13 = {};
        var16 = 14;
        var16 = var10[var16];
        var16 = var6.bind(var3)(var16);
        var13.source = var16;
        var13 = var15.bind(var3)(var14, var13);
        var12[1] = var13;
        var4.children = var12;
        var7 = var11.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot5;
        var5 = 15;
        var5 = var10[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var9 = var9.progressBar;
        var5.style = var9;
        var5.percent = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var11 = var4.Fonts;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {};
    var4 = 16;
    var10.padding = var4;
    var7.container = var10;
    var10 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var7.horizontal = var10;
    var10 = {
        'fontSize': 16,
        'lineHeight': 20,
        'fontFamily': null,
        'color': null,
        'marginBottom': 2
    };
    var11 = var11.PRIMARY_SEMIBOLD;
    var10.fontFamily = var11;
    var11 = 5;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_TEXT_HEADING_PRIMARY;
    var10.color = var11;
    var7.title = var10;
    var10 = {};
    var10.lineHeight = var4;
    var7.step = var10;
    var10 = {};
    var11 = 8;
    var10.marginTop = var11;
    var7.progressBar = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_progress/native/components/GuildProgressOverview.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun96680: for (var _fun96680_ip = 0;;) switch (_fun96680_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.guild;
                var _closure2_slot0 = var0;
                var9 = var1.titleStyle;
                var2 = var1.longPressDisabled;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun96680_ip = 34;
                    continue _fun96680
                }
            case 32:
                var2 = false;
            case 34:
                var _closure2_slot1 = var2;
                var6 = var1.resume;
                if (!(var6 === var3)) {
                    _fun96680_ip = 50;
                    continue _fun96680
                }
            case 48:
                var6 = false;
            case 50:
                var _closure2_slot2 = var3;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useGuildProgressStep;
                var1 = var1.bind(var2)(var0);
                var4 = var1.percentComplete;
                var5 = var1.subtitle;
                var11 = var1.completed;
                _closure2_slot2 = var11;
                var10 = _closure1_slot3;
                var2 = var10.useEffect;
                var1 = new Array(2);
                var1[0] = var11;
                var0 = var0.id;
                var1[1] = var0;
                var0 = function() { // Environment: var8
                    _fun96681: for (var _fun96681_ip = 0;;) switch (_fun96681_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun96681_ip = 55;
                                continue _fun96681
                            }
                        case 10:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.markCompletedProgressSeen;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var10)(var0, var1);
                var2 = _closure1_slot5;
                var1 = _closure1_slot8;
                var0 = {};
                var0.titleStyle = var9;
                var9 = function() {
                    _fun96682: for (var _fun96682_ip = 0;;) switch (_fun96682_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun96682_ip = 55;
                                continue _fun96682
                            }
                        case 10:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 7;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.createProgress;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var0);
                        case 55:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.openActionSheet;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var0.onPress = var9;
                var8 = function() {
                    _fun96683: for (var _fun96683_ip = 0;;) switch (_fun96683_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun96683_ip = 141;
                                continue _fun96683
                            }
                        case 13:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var0 = 8;
                            var0 = var9[var0];
                            var7 = undefined;
                            var2 = var8.bind(var7)(var0);
                            var1 = var2.showSimpleActionSheet;
                            var0 = {};
                            var3 = 'GuildProgressOverviewLongPress';
                            var0.key = var3;
                            var4 = {};
                            var3 = 9;
                            var5 = var9[var3];
                            var5 = var8.bind(var7)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var3 = var9[var3];
                            var3 = var8.bind(var7)(var3);
                            var3 = var3.t;
                            var3 = var3.PbNxaW;
                            var3 = var5.bind(var6)(var3);
                            var4.label = var3;
                            var3 = function() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 7;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.dismissProgress;
                                var1 = _closure2_slot0;
                                var1 = var1.id;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var4.onPress = var3;
                            var3 = new Array(1);
                            var3[0] = var4;
                            var0.options = var3;
                            var0 = var1.bind(var2)(var0);
                        case 141:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onLongPress = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 9;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                if (var6) {
                    _fun96680_ip = 247;
                    continue _fun96680
                }
            case 234:
                var6 = var7.o3HK3d;
                var6 = var8.bind(var9)(var6);
                _fun96680_ip = 260;
                continue _fun96680;
            case 247:
                var7 = var7.NzxWjb;
                var6 = var8.bind(var9)(var7);
            case 260:
                var0.title = var6;
                var0.subtitle = var5;
                var0.percentComplete = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.GuildProgressOverviewView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 10275, 10279, 7756, 1234, 4905, 4879, 3943, 4087, 8472, 12618, 2]);