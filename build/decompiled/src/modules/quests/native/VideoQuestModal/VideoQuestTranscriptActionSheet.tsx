// modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityIndicator;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.FetchStatus;
    var _closure1_slot5 = var6;
    var3 = var3.useVideoQuestUIStore;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 'center';
    var8 = {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center'
    };
    var3.container = var8;
    var8 = {};
    var10 = 5;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var8.paddingBottom = var10;
    var3.content = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.headerText = var8;
    var8 = {};
    var9 = 100;
    var8.height = var9;
    var3.loadingSpinner = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/VideoQuestModal/VideoQuestTranscriptActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun84115: for (var _fun84115_ip = 0;;) switch (_fun84115_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.quest;
                var _closure2_slot0 = var0;
                var1 = _closure1_slot9;
                var3 = undefined;
                var15 = var1.bind(var3)();
                var2 = _closure1_slot6;
                var1 = function(arg0) { // Environment: var11
                    var0 = arg0;
                    var0 = var0.transcript;
                    return var0;
                };
                var10 = var2.bind(var3)(var1);
                var _closure2_slot1 = var10;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 6;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var8 = var1.bottom;
                var4 = _closure1_slot3;
                var2 = var4.useEffect;
                var1 = new Array(2);
                var1[0] = var0;
                var1[1] = var10;
                var0 = function() { // Environment: var11
                    _fun84117: for (var _fun84117_ip = 0;;) switch (_fun84117_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 7;
                            var1 = var8[var3];
                            var0 = undefined;
                            var7 = var4.bind(var0)(var1);
                            var6 = var7.getQuestAsset;
                            var5 = _closure2_slot0;
                            var3 = var8[var3];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.QuestAssetType;
                            var11 = var3.VIDEO_PLAYER_TRANSCRIPT;
                            var4 = true;
                            var13 = var7;
                            var12 = var5;
                            var10 = undefined;
                            var9 = true;
                            var6 = var13[var6](var12, var11, var10, var9, var8);
                            var3 = _closure2_slot1;
                            var7 = null;
                            var3 = var7 == var3;
                            if (var3) {
                                _fun84117_ip = 111;
                                continue _fun84117
                            }
                        case 88:
                            var5 = _closure2_slot1;
                            var8 = var5.questId;
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var3 = var8 !== var5;
                        case 111:
                            if (var3) {
                                _fun84117_ip = 138;
                                continue _fun84117
                            }
                        case 114:
                            var5 = _closure2_slot1;
                            var8 = var5.fetchStatus;
                            var5 = _closure1_slot5;
                            var5 = var5.NONE;
                            var3 = var8 === var5;
                        case 138:
                            if (var3) {
                                _fun84117_ip = 198;
                                continue _fun84117
                            }
                        case 141:
                            var5 = _closure2_slot1;
                            var8 = var5.fetchStatus;
                            var5 = _closure1_slot5;
                            var5 = var5.SUCCESS;
                            var5 = var8 === var5;
                            if (!var5) {
                                _fun84117_ip = 195;
                                continue _fun84117
                            }
                        case 168:
                            var8 = var7 == var6;
                            var7 = undefined;
                            if (var8) {
                                _fun84117_ip = 182;
                                continue _fun84117
                            }
                        case 177:
                            var7 = var6.url;
                        case 182:
                            var6 = _closure2_slot1;
                            var6 = var6.url;
                            var5 = var7 !== var6;
                        case 195:
                            var3 = var5;
                        case 198:
                            if (!var3) {
                                _fun84117_ip = 237;
                                continue _fun84117
                            }
                        case 201:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 8;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.fetchVideoTranscript;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1, var4);
                        case 237:
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = var4.useMemo;
                var12 = null;
                var1 = var12 == var10;
                var0 = undefined;
                if (var1) {
                    _fun84115_ip = 132;
                    continue _fun84115
                }
            case 127:
                var0 = var10.text;
            case 132:
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var11
                    _fun84118: for (var _fun84118_ip = 0;;) switch (_fun84118_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var3 = null;
                            var4 = var3 == var2;
                            var2 = undefined;
                            if (var4) {
                                _fun84118_ip = 29;
                                continue _fun84118
                            }
                        case 20:
                            var4 = _closure2_slot1;
                            var2 = var4.text;
                        case 29:
                            if (!(var3 != var2)) {
                                _fun84118_ip = 92;
                                continue _fun84118
                            }
                        case 33:
                            var1 = _closure2_slot1;
                            var3 = var1.text;
                            var2 = var3.split;
                            var1 = '\n';
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = var1.trim;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.filter;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.length;
                                var0 = 0;
                                var0 = var1 > var0;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            _fun84118_ip = 96;
                            continue _fun84118;
                        case 92:
                            var0 = new Array(0);
                        case 96:
                            return var0;
                    }
                };
                var13 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot7;
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 9;
                var0 = var14[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var4 = true;
                var0.scrollable = var4;
                var4 = 10;
                var4 = var14[var4];
                var4 = var7.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var6 = 11;
                var16 = var14[var6];
                var16 = var7.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var6 = var14[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["1YS80z"];
                var6 = var16.bind(var17)(var6);
                var4.title = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.header = var4;
                var4 = 12;
                var4 = var14[var4];
                var4 = var7.bind(var3)(var4);
                var5 = var4.BottomSheetScrollView;
                var4 = {};
                var6 = {};
                var6.paddingBottom = var8;
                var4.contentContainerStyle = var6;
                var8 = _closure1_slot8;
                var6 = 13;
                var6 = var14[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Stack;
                var6 = {};
                var14 = 16;
                var6.spacing = var14;
                var14 = var15.content;
                var6.style = var14;
                var14 = var12 == var10;
                var12 = undefined;
                if (var14) {
                    _fun84115_ip = 362;
                    continue _fun84115
                }
            case 356:
                var12 = var10.fetchStatus;
            case 362:
                var10 = _closure1_slot5;
                var10 = var10.FETCHING;
                var10 = var12 === var10;
                if (!var10) {
                    _fun84115_ip = 413;
                    continue _fun84115
                }
            case 379:
                var14 = _closure1_slot7;
                var12 = _closure1_slot4;
                var9 = {};
                var15 = var15.loadingSpinner;
                var9.style = var15;
                var15 = 'large';
                var9.size = var15;
                var10 = var14.bind(var3)(var12, var9);
            case 413:
                var9 = new Array(2);
                var9[0] = var10;
                var12 = var13.length;
                var10 = 0;
                var10 = var12 > var10;
                if (!var10) {
                    _fun84115_ip = 452;
                    continue _fun84115
                }
            case 435:
                var12 = var13.map;
                var11 = function(arg0, arg1) { // Environment: var11
                    var4 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'variant': 'heading-md/normal',
                        'color': 'text-muted'
                    };
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var10 = var12.bind(var13)(var11);
            case 452:
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5227, 33, 1297, 671, 1568, 5286, 5258, 5208, 5211, 1234, 4933, 4080, 3941, 2]);