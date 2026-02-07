// modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var23 = var0.user;
        var20 = var0.displayName;
        var19 = var0.displayNameStyles;
        var22 = var0.guildId;
        var0 = _closure1_slot7;
        var3 = undefined;
        var12 = var0.bind(var3)();
        var4 = _closure1_slot3;
        var2 = var4.useMemo;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.calendarFormat;
            var0 = global;
            var0 = var0.Date;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var6 = var1;
            var0 = new var6[var0](var5);
            var1 = var0 instanceof Object ? var0 : var1;
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = new Array(0);
        var21 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var12.chatContainer;
        var0.style = var4;
        var4 = 'none';
        var0.pointerEvents = var4;
        var6 = _closure1_slot5;
        var15 = _closure1_slot1;
        var16 = _closure1_slot2;
        var7 = 10;
        var4 = var16[var7];
        var5 = var15.bind(var3)(var4);
        var4 = {};
        var4.user = var23;
        var13 = _closure1_slot0;
        var7 = var16[var7];
        var7 = var13.bind(var3)(var7);
        var7 = var7.AvatarSizes;
        var7 = var7.NORMAL;
        var4.size = var7;
        var4.guildId = var22;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot6;
        var6 = _closure1_slot4;
        var5 = {};
        var8 = var12.chatContent;
        var5.style = var8;
        var14 = _closure1_slot6;
        var11 = _closure1_slot4;
        var8 = {};
        var9 = var12.chatHeader;
        var8.style = var9;
        var18 = _closure1_slot5;
        var9 = 11;
        var9 = var16[var9];
        var17 = var15.bind(var3)(var9);
        var9 = {};
        var23 = var23.id;
        var9.userId = var23;
        var9.guildId = var22;
        var9.userName = var20;
        var20 = 'text-md/semibold';
        var9.variant = var20;
        var20 = 12;
        var20 = var16[var20];
        var20 = var13.bind(var3)(var20);
        var20 = var20.EffectDisplayType;
        var20 = var20.PLAIN;
        var9.effectDisplayType = var20;
        var20 = 1;
        var9.lineClamp = var20;
        var9.pendingDisplayNameStyles = var19;
        var9 = var18.bind(var3)(var17, var9);
        var17 = new Array(2);
        var17[0] = var9;
        var20 = _closure1_slot5;
        var9 = 13;
        var18 = var16[var9];
        var18 = var13.bind(var3)(var18);
        var19 = var18.Text;
        var18 = {
            'variant': 'text-xs/medium',
            'color': 'text-muted'
        };
        var22 = var12.chatTimestamp;
        var18.style = var22;
        var18.children = var21;
        var18 = var20.bind(var3)(var19, var18);
        var17[1] = var18;
        var8.children = var17;
        var11 = var14.bind(var3)(var11, var8);
        var8 = new Array(2);
        var8[0] = var11;
        var11 = _closure1_slot5;
        var9 = var16[var9];
        var9 = var13.bind(var3)(var9);
        var10 = var9.Text;
        var9 = {
            'variant': 'text-md/normal',
            'color': 'text-default'
        };
        var12 = var12.chatMessageText;
        var9.style = var12;
        var12 = 14;
        var12 = var16[var12];
        var12 = var13.bind(var3)(var12);
        var14 = var12.intl;
        var13 = var14.string;
        var12 = 15;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.h5Cuej;
        var12 = var13.bind(var14)(var12);
        var9.children = var12;
        var9 = var11.bind(var3)(var10, var9);
        var8[1] = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var8.marginBottom = var12;
    var12 = 'center';
    var8.alignItems = var12;
    var3.previewSection = var8;
    var8 = {
        'marginTop': 4294967278,
        'alignSelf': 'flex-end',
        'width': 260,
        'borderRadius': null,
        'borderWidth': 1
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var8.borderColor = var12;
    var3.chatPreviewWrapper = var8;
    var8 = {
        'marginTop': 4294967290,
        'width': 260
    };
    var3.nameplatePreviewWrapper = var8;
    var8 = {};
    var12 = 'row';
    var8.flexDirection = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.padding = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var8.gap = var10;
    var3.chatContainer = var8;
    var8 = {};
    var8.flex = var9;
    var3.chatContent = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'baseline',
        'gap': 6
    };
    var3.chatHeader = var8;
    var8 = {};
    var9 = -8;
    var8.marginTop = var9;
    var3.chatTimestamp = var8;
    var8 = {};
    var3.chatMessageText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun85848: for (var _fun85848_ip = 0;;) switch (_fun85848_ip) {
            case 0:
                var1 = arg0;
                var18 = var1.user;
                var11 = var1.displayName;
                var13 = var1.guildId;
                var7 = var1.selectedFontId;
                var _closure2_slot0 = var7;
                var6 = var1.selectedEffectId;
                var _closure2_slot1 = var6;
                var5 = var1.selectedColors;
                var _closure2_slot2 = var5;
                var1 = _closure1_slot7;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useGuildMemberAndUserPendingNameplate;
                var1 = var1.bind(var2)(var18, var13);
                var15 = var1.userNameplate;
                var4 = var1.guildNameplate;
                var14 = var1.pendingNameplate;
                var17 = null;
                var1 = var17 != var4;
                var16 = undefined;
                if (!var1) {
                    _fun85848_ip = 155;
                    continue _fun85848
                }
            case 124:
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 6;
                var1 = var10[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getNameplateData;
                var16 = var1.bind(var2)(var4);
            case 155:
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.fontId = var2;
                    var2 = _closure2_slot1;
                    var0.effectId = var2;
                    var1 = _closure2_slot2;
                    var0.colors = var1;
                    return var0;
                };
                var12 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var9.previewSection;
                var0.style = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot1;
                var19 = _closure1_slot2;
                var4 = 7;
                var4 = var19[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.user = var18;
                var4.displayName = var11;
                var4.guildId = var13;
                var4.pendingDisplayNameStyles = var12;
                var7 = true;
                var4.compact = var7;
                var7 = 320;
                var4.maxWidth = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot4;
                var5 = {};
                var10 = var9.chatPreviewWrapper;
                var5.style = var10;
                var21 = _closure1_slot5;
                var20 = _closure1_slot8;
                var10 = {};
                var10.user = var18;
                var10.displayName = var11;
                var10.displayNameStyles = var12;
                var10.guildId = var13;
                var10 = var21.bind(var3)(var20, var10);
                var5.children = var10;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var9.nameplatePreviewWrapper;
                var5.style = var9;
                var10 = _closure1_slot5;
                var9 = _closure1_slot0;
                var8 = 8;
                var8 = var19[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.NameplatePreview;
                var8 = {};
                var8.user = var18;
                var8.nameplate = var14;
                var18 = var17 == var14;
                var14 = undefined;
                if (!var18) {
                    _fun85848_ip = 431;
                    continue _fun85848
                }
            case 421:
                if (!(var17 != var16)) {
                    _fun85848_ip = 428;
                    continue _fun85848
                }
            case 425:
                var15 = var16;
            case 428:
                var14 = var15;
            case 431:
                var8.nameplateData = var14;
                var8.guildId = var13;
                var8.pendingDisplayNameStyles = var12;
                var8.pendingGlobalName = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5636, 1641, 7031, 6991, 3134, 5504, 6992, 6993, 3942, 1234, 2182, 2]);