// modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: GuildList, environment: var1
        _fun92065: for (var _fun92065_ip = 0;;) switch (_fun92065_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.recipientId;
                var _closure2_slot0 = var6;
                var2 = var0.query;
                var0 = var0.source;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var0 = _closure1_slot8;
                var0 = var0.bind(var3)();
                var _closure2_slot2 = var0;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 10;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useServerInviteRows;
                var2 = var0.bind(var1)(var6, var2);
                var1 = _closure1_slot3;
                var0 = 2;
                var2 = var1.bind(var3)(var2, var0);
                var9 = 0;
                var1 = var2[var9];
                var0 = 1;
                var0 = var2[var0];
                var2 = var1.length;
                if (!(var9 === var2)) {
                    _fun92065_ip = 130;
                    continue _fun92065
                }
            case 118:
                var2 = var0.length;
                if (!(var9 !== var2)) {
                    _fun92065_ip = 267;
                    continue _fun92065
                }
            case 130:
                var2 = {};
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 7;
                var6 = var12[var7];
                var6 = var11.bind(var3)(var6);
                var10 = var6.intl;
                var8 = var10.string;
                var6 = var12[var7];
                var6 = var11.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6["u+Ithu"];
                var6 = var8.bind(var10)(var6);
                var2.title = var6;
                var2.data = var1;
                var6 = new Array(2);
                var6[0] = var2;
                var2 = {};
                var8 = var12[var7];
                var8 = var11.bind(var3)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var7 = var12[var7];
                var7 = var11.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["c5T+X/"];
                var7 = var8.bind(var10)(var7);
                var2.title = var7;
                var2.data = var0;
                var6[1] = var2;
                _fun92065_ip = 271;
                continue _fun92065;
            case 267:
                var6 = new Array(0);
            case 271:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 12;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var8 = var2.insets;
                var1 = var1.length;
                var10 = var9 === var1;
                if (var10) {
                    _fun92065_ip = 322;
                    continue _fun92065
                }
            case 313:
                var0 = var0.length;
                var10 = var9 === var0;
            case 322:
                _closure2_slot3 = var10;
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 13;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.UserProfileStackedActionSheetSectionList;
                var0 = {};
                var7 = function(arg0) { // Original name: renderItem, environment: var5
                    var0 = arg0;
                    var6 = var0.item;
                    var5 = var0.start;
                    var4 = var0.end;
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0.row = var6;
                    var7 = _closure2_slot0;
                    var0.recipientId = var7;
                    var6 = _closure2_slot1;
                    var0.source = var6;
                    var0.start = var5;
                    var0.end = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0.renderItem = var7;
                var7 = {};
                var9 = 0;
                if (!var10) {
                    _fun92065_ip = 380;
                    continue _fun92065
                }
            case 377:
                var9 = 24;
            case 380:
                var7.paddingTop = var9;
                var9 = var8.bottom;
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 5;
                var8 = var11[var8];
                var8 = var10.bind(var3)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_16;
                var8 = var9 + var8;
                var7.paddingBottom = var8;
                var0.contentContainerStyle = var7;
                var0.sections = var6;
                var6 = function(arg0) { // Original name: renderSectionHeader, environment: var5
                    _fun92067: for (var _fun92067_ip = 0;;) switch (_fun92067_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = var0.section;
                            var2 = _closure2_slot3;
                            var0 = null;
                            if (var2) {
                                _fun92067_ip = 123;
                                continue _fun92067
                            }
                        case 20:
                            var2 = var6.data;
                            var3 = var2.length;
                            var2 = 0;
                            var2 = var3 > var2;
                            var1 = null;
                            if (!var2) {
                                _fun92067_ip = 120;
                                continue _fun92067
                            }
                        case 41:
                            var5 = _closure1_slot6;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 11;
                            var2 = var4[var2];
                            var4 = undefined;
                            var2 = var3.bind(var4)(var2);
                            var3 = var2.Text;
                            var2 = {
                                'style': null,
                                'variant': 'text-sm/semibold',
                                'color': 'text-default'
                            };
                            var7 = _closure2_slot2;
                            var7 = var7.sectionTitle;
                            var2.style = var7;
                            var6 = var6.title;
                            var2.children = var6;
                            var1 = var5.bind(var4)(var3, var2);
                        case 120:
                            var0 = var1;
                        case 123:
                            return var0;
                    }
                };
                var0.renderSectionHeader = var6;
                var6 = true;
                var0.stickySectionHeadersEnabled = var6;
                var5 = function(arg0) { // Original name: keyExtractor, environment: var5
                    var0 = arg0;
                    var0 = var0.guild;
                    var0 = var0.id;
                    return var0;
                };
                var0.keyExtractor = var5;
                var4 = _closure1_slot9;
                var0.ListEmptyComponent = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 5;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingHorizontal = var9;
    var3.content = var8;
    var8 = {};
    var9 = 8;
    var8.rowGap = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.searchbarWrapper = var8;
    var8 = {
        'paddingBottom': 6,
        'paddingTop': 24
    };
    var9 = 24;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var10;
    var3.sectionTitle = var8;
    var8 = {};
    var8.margin = var9;
    var3.emptyStateContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = function() { // Original name: EmptyGuildList, environment: var1
        var0 = _closure1_slot8;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var9 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 6;
        var0 = var6[var0];
        var0 = var9.bind(var3)(var0);
        var1 = var0.ThemedEmptyState;
        var0 = {};
        var5 = var5.emptyStateContainer;
        var0.containerStyle = var5;
        var5 = 7;
        var7 = var6[var5];
        var7 = var9.bind(var3)(var7);
        var10 = var7.intl;
        var8 = var10.string;
        var7 = var6[var5];
        var7 = var9.bind(var3)(var7);
        var7 = var7.t;
        var7 = var7["2bfiLk"];
        var7 = var8.bind(var10)(var7);
        var0.title = var7;
        var7 = var6[var5];
        var7 = var9.bind(var3)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var5 = var6[var5];
        var5 = var9.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.V6nAfF;
        var5 = var7.bind(var8)(var5);
        var0.body = var5;
        var5 = _closure1_slot1;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var3)(var4);
        var0.darkSource = var4;
        var4 = 9;
        var4 = var6[var4];
        var4 = var5.bind(var3)(var4);
        var0.lightSource = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        var0 = arg0;
        var9 = var0.recipientId;
        var8 = var0.source;
        var0 = _closure1_slot8;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot4;
        var1 = var2.useState;
        var0 = '';
        var2 = var1.bind(var2)(var0);
        var1 = _closure1_slot3;
        var0 = 2;
        var1 = var1.bind(var3)(var2, var0);
        var0 = 0;
        var10 = var1[var0];
        var0 = 1;
        var0 = var1[var0];
        var _closure2_slot0 = var0;
        var2 = _closure1_slot6;
        var15 = _closure1_slot0;
        var20 = _closure1_slot2;
        var0 = 15;
        var0 = var20[var0];
        var0 = var15.bind(var3)(var0);
        var1 = var0.BottomSheetTitleHeader;
        var0 = {};
        var14 = 7;
        var4 = var20[var14];
        var4 = var15.bind(var3)(var4);
        var11 = var4.intl;
        var6 = var11.string;
        var4 = var20[var14];
        var4 = var15.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.HvoZQD;
        var4 = var6.bind(var11)(var4);
        var0.title = var4;
        var4 = var2.bind(var3)(var1, var0);
        var2 = _closure1_slot7;
        var0 = 16;
        var0 = var20[var0];
        var0 = var15.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {
            'scrollable': true,
            'startExpanded': true
        };
        var0.header = var4;
        var4 = var7.content;
        var0.contentStyles = var4;
        var6 = _closure1_slot5;
        var4 = {};
        var7 = var7.searchbarWrapper;
        var4.style = var7;
        var12 = _closure1_slot6;
        var7 = 17;
        var7 = var20[var7];
        var7 = var15.bind(var3)(var7);
        var11 = var7.SearchField;
        var7 = {};
        var13 = function(arg0) { // Original name: onChange, environment: var13
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var7.onChange = var13;
        var13 = var20[var14];
        var13 = var15.bind(var3)(var13);
        var17 = var13.intl;
        var16 = var17.string;
        var13 = var20[var14];
        var13 = var15.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.uohsSv;
        var13 = var16.bind(var17)(var13);
        var7.placeholder = var13;
        var11 = var12.bind(var3)(var11, var7);
        var7 = new Array(2);
        var7[0] = var11;
        var13 = _closure1_slot6;
        var11 = 11;
        var11 = var20[var11];
        var11 = var15.bind(var3)(var11);
        var12 = var11.Text;
        var11 = {
            'variant': 'text-xs/medium',
            'color': 'text-subtle'
        };
        var16 = var20[var14];
        var16 = var15.bind(var3)(var16);
        var17 = var16.intl;
        var16 = var17.format;
        var14 = var20[var14];
        var14 = var15.bind(var3)(var14);
        var14 = var14.t;
        var15 = var14["4UyUHh"];
        var14 = {};
        var19 = _closure1_slot1;
        var18 = 18;
        var18 = var20[var18];
        var18 = var19.bind(var3)(var18);
        var18 = var18.INVITE_OPTIONS_7_DAYS;
        var18 = var18.label;
        var14.xDays = var18;
        var14 = var16.bind(var17)(var15, var14);
        var11.children = var14;
        var11 = var13.bind(var3)(var12, var11);
        var7[1] = var11;
        var4.children = var7;
        var6 = var2.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot6;
        var6 = _closure1_slot10;
        var5 = {};
        var5.query = var10;
        var5.recipientId = var9;
        var5.source = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 8316, 1234, 11939, 11940, 11936, 3900, 4856, 7709, 11941, 5174, 4894, 6971, 8291, 2]);