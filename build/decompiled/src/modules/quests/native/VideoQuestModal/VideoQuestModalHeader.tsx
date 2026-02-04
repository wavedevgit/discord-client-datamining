// modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useVideoQuestUIStore;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'flex-start'
    };
    var3.videoContentHeaderWrapper = var8;
    var8 = {};
    var9 = 'column';
    var8.flexDirection = var9;
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var8.gap = var11;
    var3.videoContentHeading = var8;
    var8 = {};
    var11 = 0.6;
    var8.opacity = var11;
    var3.subheader = var8;
    var8 = {
        'margin': 4294967281,
        'padding': 15,
        'textShadowColor': null,
        'textShadowOffset': null,
        'textShadowRadius': 15
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BLACK;
    var8.textShadowColor = var9;
    var9 = {
        'width': 0,
        'height': 0
    };
    var8.textShadowOffset = var9;
    var3.textShadow = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/VideoQuestModal/VideoQuestModalHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun84112: for (var _fun84112_ip = 0;;) switch (_fun84112_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.closeButtonIconColor;
                var8 = var1.onClose;
                var6 = var1.style;
                var2 = var1.showCurrentVideoTime;
                var3 = undefined;
                var14 = var3 !== var2;
                if (!var14) {
                    _fun84112_ip = 40;
                    continue _fun84112
                }
            case 37:
                var14 = var2;
            case 40:
                var1 = var1.withTextShadow;
                var17 = var3 !== var1;
                if (!var17) {
                    _fun84112_ip = 56;
                    continue _fun84112
                }
            case 53:
                var17 = var1;
            case 56:
                var1 = _closure1_slot7;
                var18 = var1.bind(var3)();
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var2 = var4.bind(var3)(var1);
                var1 = var2.useVideoQuestModalContext;
                var1 = var1.bind(var2)();
                var13 = var1.quest;
                var _closure2_slot0 = var13;
                var1 = 7;
                var1 = var7[var1];
                var2 = var4.bind(var3)(var1);
                var1 = var2.useQuestTaskDetails;
                var1 = var1.bind(var2)(var13);
                var _closure2_slot1 = var1;
                var2 = _closure1_slot4;
                var1 = 9;
                var1 = var7[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.shallow;
                var0 = function(arg0) { // Environment: var0
                    _fun84113: for (var _fun84113_ip = 0;;) switch (_fun84113_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.videoProgress;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var1[var0];
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun84113_ip = 65;
                                continue _fun84113
                            }
                        case 31:
                            var1 = {};
                            var3 = _closure2_slot1;
                            var3 = var3.progressSeconds;
                            var1.timestampSec = var3;
                            var2 = _closure2_slot1;
                            var2 = var2.targetSeconds;
                            var1.duration = var2;
                            var0 = var1;
                        case 65:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 8;
                            var5 = var4[var1];
                            var2 = undefined;
                            var6 = var3.bind(var2)(var5);
                            var5 = var6.parseMinutesAndSecondsFromSeconds;
                            var7 = var0.duration;
                            var0 = var0.timestampSec;
                            var0 = var7 - var0;
                            var0 = var5.bind(var6)(var0);
                            var1 = var4[var1];
                            var3 = var3.bind(var2)(var1);
                            var2 = var3.formatWatchTaskTime;
                            var1 = var0.minutes;
                            var0 = var0.seconds;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var15 = var2.bind(var3)(var0, var1);
                var2 = var13.userStatus;
                var1 = null;
                var4 = var1 == var2;
                var0 = undefined;
                if (var4) {
                    _fun84112_ip = 192;
                    continue _fun84112
                }
            case 186:
                var0 = var2.completedAt;
            case 192:
                var16 = var1 != var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = var18.videoContentHeaderWrapper;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.style = var4;
                var4 = {};
                var6 = var18.videoContentHeading;
                var4.style = var6;
                var19 = _closure1_slot5;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var12 = 10;
                var6 = var6[var12];
                var6 = var7.bind(var3)(var6);
                var11 = var6.Text;
                var6 = {
                    'variant': 'heading-md/semibold',
                    'color': 'white'
                };
                var7 = var17;
                if (!var17) {
                    _fun84112_ip = 295;
                    continue _fun84112
                }
            case 289:
                var7 = var18.textShadow;
            case 295:
                var6.style = var7;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var20 = 11;
                var21 = var7[var20];
                var21 = var10.bind(var3)(var21);
                var23 = var21.intl;
                var22 = var23.formatToPlainString;
                var20 = var7[var20];
                var20 = var10.bind(var3)(var20);
                var20 = var20.t;
                var21 = var20.EQa7os;
                var20 = {};
                var24 = var13.config;
                var24 = var24.messages;
                var24 = var24.questName;
                var20.questName = var24;
                var20 = var22.bind(var23)(var21, var20);
                var6.children = var20;
                var11 = var19.bind(var3)(var11, var6);
                var6 = new Array(2);
                var6[0] = var11;
                var11 = _closure1_slot5;
                var7 = var7[var12];
                var7 = var10.bind(var3)(var7);
                var10 = var7.Text;
                var7 = {
                    'variant': 'heading-sm/semibold',
                    'color': 'white'
                };
                var19 = var18.subheader;
                var12 = new Array(2);
                var12[0] = var19;
                if (!var17) {
                    _fun84112_ip = 452;
                    continue _fun84112
                }
            case 446:
                var17 = var18.textShadow;
            case 452:
                var12[1] = var17;
                var7.style = var12;
                var12 = var15;
                if (!var16) {
                    _fun84112_ip = 489;
                    continue _fun84112
                }
            case 466:
                var12 = var15;
                if (var14) {
                    _fun84112_ip = 489;
                    continue _fun84112
                }
            case 472:
                var13 = var13.config;
                var13 = var13.messages;
                var12 = var13.gamePublisher;
            case 489:
                var7.children = var12;
                var7 = var11.bind(var3)(var10, var7);
                var6[1] = var7;
                var4.children = var6;
                var6 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 12;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.iconColor = var9;
                var5.onClose = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5227, 33, 1297, 671, 10721, 5313, 5267, 3076, 3941, 1234, 10750, 2]);