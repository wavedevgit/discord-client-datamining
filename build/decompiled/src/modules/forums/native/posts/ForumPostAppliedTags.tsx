// modules/forums/native/posts/ForumPostAppliedTags.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var6 = var3.jsxs;
    var _closure1_slot4 = var6;
    var3 = var3.Fragment;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.pillTagsContainer = var8;
    var8 = {};
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var3.tag = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.tagsContainer = var8;
    var8 = {
        'backgroundColor': null,
        'height': 4,
        'width': 4,
        'borderRadius': 10,
        'marginHorizontal': 8
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.backgroundColor = var9;
    var3.dot = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/posts/ForumPostAppliedTags.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: ForumPostAppliedTagPills, environment: var1
        _fun89927: for (var _fun89927_ip = 0;;) switch (_fun89927_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.appliedTags;
                var9 = var0.hasUnreads;
                var _closure2_slot0 = var9;
                var14 = var0.additionalTagsCount;
                var3 = undefined;
                if (!(var14 === var3)) {
                    _fun89927_ip = 35;
                    continue _fun89927
                }
            case 33:
                var14 = 0;
            case 35:
                var8 = var0.containerStyle;
                var _closure2_slot1 = var3;
                var0 = _closure1_slot6;
                var10 = var0.bind(var3)();
                _closure2_slot1 = var10;
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var5 = new Array(2);
                var5[0] = var8;
                var8 = var10.pillTagsContainer;
                var5[1] = var8;
                var0.style = var5;
                var5 = var7.map;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var4 = _closure1_slot3;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 5;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.AppliedForumTagPill;
                    var1 = {};
                    var1.tag = var0;
                    var6 = _closure2_slot1;
                    var6 = var6.tag;
                    var1.containerStyle = var6;
                    var5 = _closure2_slot0;
                    var1.hasUnreads = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var5 = var5.bind(var7)(var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 0;
                var5 = var14 > var5;
                if (!var5) {
                    _fun89927_ip = 219;
                    continue _fun89927
                }
            case 126:
                var8 = _closure1_slot3;
                var7 = _closure1_slot0;
                var11 = _closure1_slot1;
                var6 = 5;
                var6 = var11[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.AppliedForumTagPill;
                var6 = {};
                var11 = {};
                var12 = '-1';
                var11.id = var12;
                var12 = global;
                var12 = var12.HermesInternal;
                var13 = var12.concat;
                var12 = '+';
                var12 = var13.bind(var12)(var14);
                var11.name = var12;
                var6.tag = var11;
                var10 = var10.tag;
                var6.containerStyle = var10;
                var6.hasUnreads = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 219:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ForumPostAppliedTagPills = var3;
    var1 = function(arg0) { // Original name: ForumPostAppliedTags, environment: var1
        _fun89929: for (var _fun89929_ip = 0;;) switch (_fun89929_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.appliedTags;
                var _closure2_slot0 = var6;
                var13 = var0.hasUnreads;
                var _closure2_slot1 = var13;
                var17 = var0.additionalTagsCount;
                var3 = undefined;
                if (!(var17 === var3)) {
                    _fun89929_ip = 39;
                    continue _fun89929
                }
            case 37:
                var17 = 0;
            case 39:
                var7 = var0.containerStyle;
                var _closure2_slot2 = var3;
                var0 = _closure1_slot6;
                var14 = var0.bind(var3)();
                _closure2_slot2 = var14;
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var5 = new Array(2);
                var5[0] = var7;
                var7 = var14.tagsContainer;
                var5[1] = var7;
                var0.style = var5;
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    _fun89930: for (var _fun89930_ip = 0;;) switch (_fun89930_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = _closure1_slot4;
                            var2 = _closure1_slot5;
                            var1 = {};
                            var8 = _closure1_slot3;
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var0 = 5;
                            var5 = var5[var0];
                            var0 = undefined;
                            var5 = var7.bind(var0)(var5);
                            var7 = var5.AppliedForumTag;
                            var5 = {};
                            var5.tag = var4;
                            var10 = _closure2_slot1;
                            var5.hasUnreads = var10;
                            var4 = var4.id;
                            var5 = var8.bind(var0)(var7, var5, var4);
                            var4 = new Array(2);
                            var4[0] = var5;
                            var5 = _closure2_slot0;
                            var7 = var5.length;
                            var5 = 1;
                            var7 = var7 - var5;
                            var5 = arg1;
                            var5 = var5 !== var7;
                            if (!var5) {
                                _fun89930_ip = 142;
                                continue _fun89930
                            }
                        case 112:
                            var8 = _closure1_slot3;
                            var7 = _closure1_slot2;
                            var6 = {};
                            var9 = _closure2_slot2;
                            var9 = var9.dot;
                            var6.style = var9;
                            var5 = var8.bind(var0)(var7, var6);
                        case 142:
                            var4[1] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var5 = var5.bind(var6)(var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 0;
                var5 = var17 > var5;
                if (!var5) {
                    _fun89929_ip = 270;
                    continue _fun89929
                }
            case 133:
                var8 = _closure1_slot4;
                var7 = _closure1_slot5;
                var6 = {};
                var12 = _closure1_slot3;
                var11 = _closure1_slot2;
                var9 = {};
                var14 = var14.dot;
                var9.style = var14;
                var11 = var12.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var11 = _closure1_slot0;
                var14 = _closure1_slot1;
                var10 = 5;
                var10 = var14[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.AppliedForumTag;
                var10 = {};
                var14 = {};
                var15 = '-1';
                var14.id = var15;
                var15 = global;
                var15 = var15.HermesInternal;
                var16 = var15.concat;
                var15 = '+';
                var15 = var16.bind(var15)(var17);
                var14.name = var15;
                var10.tag = var14;
                var10.hasUnreads = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 270:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ForumPostAppliedTags = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 9351, 2]);