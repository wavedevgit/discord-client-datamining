// modules/directory_channels/native/components/GuildDirectoryEditDescriptionModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var11 = var1.entry;
        var _closure2_slot0 = var11;
        var1 = _closure1_slot9;
        var3 = undefined;
        var12 = var1.bind(var3)();
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0, arg1) { // Environment: var0
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun71442: for (var _fun71442_ip = 0;;) switch (_fun71442_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun71442_ip = 114;
                                continue _fun71442
                            }
                        case 7:
                            var4 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var1 = 6;
                            var1 = var2[var1];
                            var2 = undefined;
                            var8 = var4.bind(var2)(var1);
                            var7 = var8.updateDirectoryEntry;
                            var1 = _closure2_slot0;
                            var12 = var1.channelId;
                            var11 = var1.guildId;
                            var10 = arg0;
                            var9 = arg1;
                            var13 = var8;
                            var1 = var13[var7](var12, var11, var10, var9, var8);
                            SaveGenerator(address = 72);
                        case 70:
                            return var1;
                        case 72:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                            if (var4) {
                                _fun71442_ip = 111;
                                continue _fun71442
                            }
                        case 78:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var3 = 7;
                            var3 = var5[var3];
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.close;
                            var3 = var3.bind(var4)();
                            return var2;
                        case 111:
                            return var1;
                        case 114:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var13 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var15 = _closure1_slot0;
        var16 = _closure1_slot3;
        var0 = 8;
        var0 = var16[var0];
        var0 = var15.bind(var3)(var0);
        var1 = var0.SafeAreaPaddingView;
        var0 = {};
        var4 = true;
        var0.top = var4;
        var4 = var12.safeArea;
        var0.style = var4;
        var6 = _closure1_slot8;
        var5 = _closure1_slot6;
        var4 = {};
        var7 = var12.container;
        var4.style = var7;
        var7 = 'handled';
        var4.keyboardShouldPersistTaps = var7;
        var10 = _closure1_slot7;
        var9 = _closure1_slot5;
        var7 = {};
        var14 = var12.header;
        var7.style = var14;
        var18 = _closure1_slot7;
        var14 = 9;
        var14 = var16[var14];
        var14 = var15.bind(var3)(var14);
        var17 = var14.Text;
        var14 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var12 = var12.title;
        var14.style = var12;
        var12 = 10;
        var19 = var16[var12];
        var19 = var15.bind(var3)(var19);
        var22 = var19.intl;
        var21 = var22.format;
        var19 = var16[var12];
        var19 = var15.bind(var3)(var19);
        var19 = var19.t;
        var20 = var19.w9tsNk;
        var19 = {};
        var23 = var11.name;
        var19.guildName = var23;
        var19 = var21.bind(var22)(var20, var19);
        var14.children = var19;
        var14 = var18.bind(var3)(var17, var14);
        var7.children = var14;
        var9 = var10.bind(var3)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var10 = _closure1_slot7;
        var9 = _closure1_slot1;
        var8 = 11;
        var8 = var16[var8];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var8.onSubmit = var13;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12["R3BPH+"];
        var12 = var13.bind(var14)(var12);
        var8.buttonLabel = var12;
        var8.entry = var11;
        var11 = var11.channelId;
        var8.directoryChannelId = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = _closure1_slot10;
        var1 = {};
        var5 = true;
        var1.fullscreen = var5;
        var6 = _closure1_slot0;
        var9 = _closure1_slot3;
        var5 = 12;
        var5 = var9[var5];
        var8 = undefined;
        var6 = var6.bind(var8)(var5);
        var5 = var6.getHeaderCloseButton;
        var7 = _closure1_slot1;
        var4 = 7;
        var4 = var9[var4];
        var4 = var7.bind(var8)(var4);
        var4 = var4.close;
        var4 = var5.bind(var6)(var4);
        var1.headerLeft = var4;
        var4 = function() {
            var0 = null;
            return var0;
        };
        var1.headerTitle = var4;
        var3 = function() {
            var3 = _closure1_slot7;
            var2 = _closure1_slot11;
            var1 = {};
            var4 = _closure2_slot0;
            var5 = var1;
            var0 = copyDataProperties(var5, var4);
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var1.render = var3;
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var6.bind(var0)(var3);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
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
    var8 = {};
    var10 = 5;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var8.marginTop = var10;
    var8.flex = var9;
    var3.safeArea = var8;
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var9 = 8;
    var8 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'padding': 16
    };
    var3.header = var8;
    var8 = {};
    var8.marginLeft = var9;
    var3.closeIcon = var8;
    var8 = {
        'backgroundColor': 'transparent',
        'borderBottomWidth': 0
    };
    var3.navbar = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 'EDIT_DESCRIPTION';
    var _closure1_slot10 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/native/components/GuildDirectoryEditDescriptionModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = _closure1_slot7;
        var1 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 13;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var6 = _closure1_slot12;
        var5 = arg0;
        var5 = var6.bind(var2)(var5);
        var0.screens = var5;
        var4 = _closure1_slot10;
        var0.initialRouteName = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 33, 1297, 4698, 8922, 8920, 4729, 3932, 1234, 8923, 4700, 5781, 2]);