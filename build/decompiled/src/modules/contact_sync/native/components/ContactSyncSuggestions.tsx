// modules/contact_sync/native/components/ContactSyncSuggestions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.label;
        var0 = _closure1_slot11;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot8;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var5.sectionHeader;
        var0.style = var5;
        var6 = _closure1_slot8;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var4 = 10;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'color': 'text-muted',
            'variant': 'text-sm/semibold'
        };
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
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
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SuggestedFriendSource;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.Fragment;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var11;
    var9 = 7;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var12;
    var12 = 8;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var13 = var12.NAV_BAR_HEIGHT;
    var12 = 32;
    var12 = var13 + var12;
    var8.paddingTop = var12;
    var12 = 'center';
    var8.justifyContent = var12;
    var3.container = var8;
    var8 = {};
    var8.alignItems = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingTop = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var8.paddingBottom = var12;
    var3.header = var8;
    var8 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {
        'lineHeight': 18,
        'textAlign': 'center'
    };
    var3.subtitle = var8;
    var8 = {};
    var8.flex = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.marginTop = var11;
    var3.list = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.backgroundColor = var11;
    var3.divider = var8;
    var8 = {
        'position': 'absolute',
        'width': '100%',
        'bottom': 0,
        'minHeight': 136
    };
    var3.linearGradient = var8;
    var8 = {
        'position': 'absolute',
        'width': '100%',
        'bottom': 0
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.padding = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_32;
    var8.paddingBottom = var11;
    var3.redesignButton = var8;
    var8 = {
        'flexGrow': 0,
        'borderTopWidth': 1,
        'borderTopColor': null,
        'padding': 16,
        'paddingBottom': 0
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.borderTopColor = var11;
    var3.buttonWrapper = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.paddingTop = var11;
    var3.spacer = var8;
    var8 = {
        'marginBottom': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.marginBottom = var9;
    var3.sectionHeader = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = function arg0() {
        _fun82094: for (var _fun82094_ip = 0;;) switch (_fun82094_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.start;
                var7 = var0.end;
                var17 = var0.suggestion;
                var _closure2_slot0 = var17;
                var6 = var0.selected;
                var0 = var0.onSelect;
                var _closure2_slot1 = var0;
                var1 = var17.reasons;
                var0 = 0;
                var1 = var1[var0];
                var12 = null;
                var2 = var12 == var1;
                var3 = undefined;
                var0 = undefined;
                if (var2) {
                    _fun82094_ip = 71;
                    continue _fun82094
                }
            case 66:
                var0 = var1.name;
            case 71:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 11;
                var1 = var5[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var5.getUserTag;
                var1 = var17.suggested_user;
                var14 = var2.bind(var5)(var1);
                var5 = var14;
                if (!(var12 != var0)) {
                    _fun82094_ip = 132;
                    continue _fun82094
                }
            case 118:
                var1 = '';
                var5 = var14;
                if (!(var1 !== var0)) {
                    _fun82094_ip = 132;
                    continue _fun82094
                }
            case 129:
                var5 = var0;
            case 132:
                var10 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 12;
                var0 = var8[var0];
                var2 = var10.bind(var3)(var0);
                var1 = var2.getUserAvatarSource;
                var0 = var17.suggested_user;
                var16 = var1.bind(var2)(var0);
                var2 = _closure1_slot8;
                var9 = _closure1_slot0;
                var0 = 13;
                var0 = var8[var0];
                var0 = var9.bind(var3)(var0);
                var1 = var0.TableCheckboxRow;
                var0 = {};
                var0.start = var13;
                var0.end = var7;
                var13 = _closure1_slot8;
                var15 = 14;
                var7 = var8[var15];
                var10 = var10.bind(var3)(var7);
                var7 = {};
                var7.source = var16;
                var15 = var8[var15];
                var15 = var9.bind(var3)(var15);
                var15 = var15.AvatarSizes;
                var15 = var15.REFRESH_MEDIUM_32;
                var7.size = var15;
                var7 = var13.bind(var3)(var10, var7);
                var0.icon = var7;
                var0.checked = var6;
                var0.label = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot9;
                var5 = {};
                var13 = _closure1_slot8;
                var10 = 10;
                var8 = var8[var10];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var8.children = var14;
                var9 = var13.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var17.mutual_friends_count;
                var9 = var12 != var9;
                if (!var9) {
                    _fun82094_ip = 458;
                    continue _fun82094
                }
            case 347:
                var12 = _closure1_slot8;
                var14 = _closure1_slot0;
                var18 = _closure1_slot2;
                var10 = var18[var10];
                var10 = var14.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var13 = 15;
                var15 = var18[var13];
                var15 = var14.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var13 = var18[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.t;
                var14 = var13.z7y34b;
                var13 = {};
                var17 = var17.mutual_friends_count;
                var13.count = var17;
                var13 = var15.bind(var16)(var14, var13);
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 458:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var0.subLabel = var5;
                var4 = function() {
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var0 = var0.suggested_user;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/contact_sync/native/components/ContactSyncSuggestions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var1 = var0.friendSuggestions;
        var _closure2_slot0 = var1;
        var0 = var0.onSubmit;
        var _closure2_slot1 = var0;
        var0 = _closure1_slot11;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var _closure2_slot2 = var9;
        var4 = var1.reduce;
        var2 = function(arg0, arg1) { // Environment: var12
            var0 = arg0;
            var1 = arg1;
            var1 = var1.suggested_user;
            var2 = var1.id;
            var1 = true;
            var0[var2] = var1;
            return var0;
        };
        var0 = {};
        var2 = var4.bind(var1)(var2, var0);
        var16 = _closure1_slot0;
        var17 = _closure1_slot2;
        var0 = 16;
        var0 = var17[var0];
        var5 = var16.bind(var3)(var0);
        var4 = var5.useToken;
        var6 = _closure1_slot1;
        var20 = 7;
        var0 = var17[var20];
        var0 = var6.bind(var3)(var0);
        var0 = var0.colors;
        var0 = var0.BACKGROUND_BASE_LOW;
        var7 = var4.bind(var5)(var0);
        var0 = 17;
        var4 = var17[var0];
        var5 = var16.bind(var3)(var4);
        var4 = var5.hexOpacityToRgba;
        var14 = 0;
        var4 = var4.bind(var5)(var7, var14);
        var10 = new Array(2);
        var10[0] = var4;
        var0 = var17[var0];
        var5 = var16.bind(var3)(var0);
        var4 = var5.hexOpacityToRgba;
        var0 = 100;
        var0 = var4.bind(var5)(var7, var0);
        var10[1] = var0;
        var4 = _closure1_slot4;
        var0 = var4.useState;
        var2 = var0.bind(var4)(var2);
        var0 = _closure1_slot3;
        var18 = 2;
        var5 = var0.bind(var3)(var2, var18);
        var2 = var5[var14];
        var _closure2_slot3 = var2;
        var0 = 1;
        var0 = var5[var0];
        var _closure2_slot4 = var0;
        var0 = 9;
        var0 = var17[var0];
        var5 = var16.bind(var3)(var0);
        var0 = var5.useFontScale;
        var15 = var0.bind(var5)();
        var0 = var17[var20];
        var0 = var6.bind(var3)(var0);
        var0 = var0.spacing;
        var5 = var0.PX_16;
        var0 = var17[var20];
        var0 = var6.bind(var3)(var0);
        var0 = var0.spacing;
        var0 = var0.PX_32;
        var5 = var5 + var0;
        var0 = 40;
        var7 = var5 + var0;
        var0 = global;
        var13 = var0.Math;
        var11 = var13.max;
        var5 = var0.Math;
        var0 = var5.min;
        var0 = var0.bind(var5)(var15, var18);
        var5 = 18;
        var0 = var5 * var0;
        var0 = var0 - var5;
        var0 = var11.bind(var13)(var0, var14);
        var19 = var7 + var0;
        var11 = var4.useCallback;
        var7 = new Array(1);
        var7[0] = var2;
        var0 = function(arg0) { // Environment: var12
            var3 = arg0;
            var2 = _closure2_slot4;
            var1 = {};
            var0 = _closure2_slot3;
            var6 = var1;
            var5 = var0;
            var4 = copyDataProperties(var6, var5);
            var0 = var0[var3];
            var0 = !var0;
            var1[var3] = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var11.bind(var4)(var0, var7);
        var _closure2_slot5 = var0;
        var5 = var17[var5];
        var7 = var6.bind(var3)(var5);
        var5 = var7.keys;
        var11 = var5.bind(var7)(var2);
        var7 = var11.some;
        var5 = function(arg0) { // Environment: var12
            var1 = _closure2_slot3;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var11 = var7.bind(var11)(var5);
        var7 = var4.useMemo;
        var5 = new Array(2);
        var5[0] = var1;
        var5[1] = var2;
        var2 = function() { // Environment: var12
            var0 = new Array(0);
            var _closure3_slot0 = var0;
            var3 = var0.push;
            var2 = {};
            var4 = 'header';
            var2.type = var4;
            var2 = var3.bind(var0)(var2);
            var3 = _closure2_slot0;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var4 = arg0;
                var2 = _closure3_slot0;
                var1 = var2.push;
                var0 = {};
                var3 = 'suggestedFriend';
                var0.type = var3;
                var3 = {};
                var3.friendSuggestion = var4;
                var5 = _closure2_slot3;
                var4 = var4.suggested_user;
                var4 = var4.id;
                var4 = var5[var4];
                var3.selected = var4;
                var0.props = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var15 = var7.bind(var4)(var2, var5);
        var2 = var4.useCallback;
        var5 = var1.length;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = var9.divider;
        var1[1] = var5;
        var5 = var9.header;
        var1[2] = var5;
        var5 = var9.subtitle;
        var1[3] = var5;
        var5 = var9.title;
        var1[4] = var5;
        var1[5] = var0;
        var0 = function(arg0) { // Environment: var12
            _fun82102: for (var _fun82102_ip = 0;;) switch (_fun82102_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1.item;
                    var8 = var1.index;
                    var2 = var0.type;
                    var1 = 'header';
                    if (!(var1 !== var2)) {
                        _fun82102_ip = 247;
                        continue _fun82102
                    }
                case 29:
                    var1 = var0.props;
                    var12 = var1.friendSuggestion;
                    var1 = var12.suggested_user;
                    var4 = var1.id;
                    var3 = _closure1_slot10;
                    var1 = _closure1_slot4;
                    var2 = var1.Fragment;
                    var1 = {};
                    var11 = _closure1_slot8;
                    var9 = _closure1_slot12;
                    var5 = {};
                    var6 = 1;
                    var6 = var6 === var8;
                    var5.start = var6;
                    var6 = _closure2_slot0;
                    var13 = var6.length;
                    var13 = var8 === var13;
                    var5.end = var13;
                    var5.suggestion = var12;
                    var0 = var0.props;
                    var0 = var0.selected;
                    var5.selected = var0;
                    var0 = _closure2_slot5;
                    var5.onSelect = var0;
                    var0 = undefined;
                    var9 = var11.bind(var0)(var9, var5);
                    var5 = new Array(2);
                    var5[0] = var9;
                    var6 = var6.length;
                    var8 = var8 < var6;
                    var6 = null;
                    if (!var8) {
                        _fun82102_ip = 230;
                        continue _fun82102
                    }
                case 171:
                    var9 = _closure1_slot8;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var7 = 19;
                    var7 = var11[var7];
                    var7 = var8.bind(var0)(var7);
                    var8 = var7.FormDivider;
                    var7 = {};
                    var11 = true;
                    var7.iconPush = var11;
                    var10 = _closure2_slot2;
                    var10 = var10.divider;
                    var7.style = var10;
                    var6 = var9.bind(var0)(var8, var7);
                case 230:
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                case 247:
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot9;
                    var1 = {};
                    var6 = _closure1_slot5;
                    var4 = {};
                    var14 = _closure2_slot2;
                    var0 = var14.header;
                    var4.style = var0;
                    var13 = _closure1_slot8;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var9 = 10;
                    var7 = var12[var9];
                    var0 = undefined;
                    var7 = var11.bind(var0)(var7);
                    var10 = var7.Text;
                    var7 = {
                        'style': null,
                        'accessibilityRole': 'header',
                        'variant': 'heading-xl/extrabold',
                        'color': 'mobile-text-heading-primary'
                    };
                    var8 = var14.title;
                    var7.style = var8;
                    var8 = 15;
                    var15 = var12[var8];
                    var15 = var11.bind(var0)(var15);
                    var17 = var15.intl;
                    var16 = var17.string;
                    var15 = var12[var8];
                    var15 = var11.bind(var0)(var15);
                    var15 = var15.t;
                    var15 = var15["7Fjv54"];
                    var15 = var16.bind(var17)(var15);
                    var7.children = var15;
                    var10 = var13.bind(var0)(var10, var7);
                    var7 = new Array(2);
                    var7[0] = var10;
                    var13 = _closure1_slot8;
                    var9 = var12[var9];
                    var9 = var11.bind(var0)(var9);
                    var10 = var9.Text;
                    var9 = {
                        'style': null,
                        'variant': 'text-sm/medium',
                        'color': 'text-default'
                    };
                    var14 = var14.subtitle;
                    var9.style = var14;
                    var14 = var12[var8];
                    var14 = var11.bind(var0)(var14);
                    var16 = var14.intl;
                    var15 = var16.string;
                    var14 = var12[var8];
                    var14 = var11.bind(var0)(var14);
                    var14 = var14.t;
                    var14 = var14.ait1x0;
                    var14 = var15.bind(var16)(var14);
                    var9.children = var14;
                    var9 = var13.bind(var0)(var10, var9);
                    var7[1] = var9;
                    var4.children = var7;
                    var6 = var3.bind(var0)(var6, var4);
                    var4 = new Array(2);
                    var4[0] = var6;
                    var7 = _closure1_slot8;
                    var6 = _closure1_slot13;
                    var5 = {};
                    var9 = var12[var8];
                    var9 = var11.bind(var0)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var12[var8];
                    var8 = var11.bind(var0)(var8);
                    var8 = var8.t;
                    var8 = var8["1uAmCw"];
                    var8 = var9.bind(var10)(var8);
                    var5.label = var8;
                    var5 = var7.bind(var0)(var6, var5);
                    var4[1] = var5;
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var14 = var2.bind(var4)(var0, var1);
        var0 = 20;
        var0 = var17[var0];
        var0 = var6.bind(var3)(var0);
        var13 = var0.bind(var3)();
        var2 = _closure1_slot10;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var9.container;
        var4 = new Array(2);
        var4[0] = var5;
        var5 = var9.list;
        var4[1] = var5;
        var0.style = var4;
        var7 = _closure1_slot8;
        var4 = 21;
        var4 = var17[var4];
        var4 = var16.bind(var3)(var4);
        var5 = var4.FlashList;
        var4 = {};
        var18 = {};
        var20 = var17[var20];
        var20 = var6.bind(var3)(var20);
        var20 = var20.spacing;
        var20 = var20.PX_16;
        var18.paddingHorizontal = var20;
        var18.paddingBottom = var19;
        var4.contentContainerStyle = var18;
        var4.data = var15;
        var4.renderItem = var14;
        var4.estimatedItemSize = var13;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var7 = _closure1_slot8;
        var5 = 22;
        var5 = var17[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var13 = var9.linearGradient;
        var5.style = var13;
        var13 = 23;
        var14 = var17[var13];
        var14 = var16.bind(var3)(var14);
        var14 = var14.VerticalGradient;
        var14 = var14.START;
        var5.start = var14;
        var13 = var17[var13];
        var13 = var16.bind(var3)(var13);
        var13 = var13.VerticalGradient;
        var13 = var13.END;
        var5.end = var13;
        var13 = 'none';
        var5.pointerEvents = var13;
        var5.colors = var10;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var7 = _closure1_slot8;
        var6 = _closure1_slot5;
        var5 = {};
        var9 = var9.redesignButton;
        var5.style = var9;
        var10 = _closure1_slot8;
        var8 = 24;
        var8 = var17[var8];
        var8 = var16.bind(var3)(var8);
        var9 = var8.Button;
        var8 = {
            'variant': 'primary',
            'size': 'lg'
        };
        var13 = 15;
        var14 = var17[var13];
        var14 = var16.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var17[var13];
        var13 = var16.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13["J5/69j"];
        var13 = var14.bind(var15)(var13);
        var8.text = var13;
        var12 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 18;
            var2 = var2[var0];
            var0 = undefined;
            var5 = var3.bind(var0)(var2);
            var4 = var5.keys;
            var3 = _closure2_slot3;
            var5 = var4.bind(var5)(var3);
            var4 = var5.filter;
            var3 = function(arg0) { // Environment: var1
                var1 = _closure2_slot3;
                var0 = arg0;
                var0 = var1[var0];
                return var0;
            };
            var3 = var4.bind(var5)(var3);
            var2 = _closure2_slot1;
            var2 = var2.bind(var0)(var3);
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 25;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot6;
                var2 = var1.FRIEND_SUGGESTION_ADDED;
                var1 = {};
                var6 = arg0;
                var1.suggested_user_id = var6;
                var5 = _closure1_slot7;
                var5 = var5.USER_SUGGESTIONS;
                var1.suggestion_source = var5;
                var5 = 'Contact Sync Suggestions';
                var1.location = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var8.onPress = var12;
        var11 = !var11;
        var8.disabled = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 10486, 33, 1297, 671, 4703, 4090, 3941, 3236, 1417, 8806, 5456, 1234, 3151, 3240, 21, 5382, 7581, 5757, 4098, 670, 4084, 795, 2]);