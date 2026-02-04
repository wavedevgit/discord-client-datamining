// modules/directory_channels/native/components/GuildDirectoryCreateOrAddDescription.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
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
    var8.flex = var9;
    var3.container = var8;
    var9 = 'center';
    var8 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.description = var8;
    var8 = {
        'alignItems': 'center',
        'justifyContent': 'center',
        'padding': 16
    };
    var3.header = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/native/components/GuildDirectoryCreateOrAddDescription.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var10 = var1.directoryChannelId;
        var _closure2_slot0 = var10;
        var2 = var1.directoryGuildName;
        var _closure2_slot1 = var2;
        var2 = var1.guild;
        var _closure2_slot2 = var2;
        var1 = var1.createGuild;
        var _closure2_slot3 = var1;
        var1 = _closure1_slot8;
        var3 = undefined;
        var18 = var1.bind(var3)();
        var0 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0, arg1) { // Environment: var0
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun71660: for (var _fun71660_ip = 0;;) switch (_fun71660_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun71660_ip = 276;
                                continue _fun71660
                            }
                        case 10:
                            var1 = _closure2_slot3;
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun71660_ip = 136;
                                continue _fun71660
                            }
                        case 23:
                            var1 = _closure2_slot3;
                            var9 = var1.name;
                            var8 = var1.icon;
                            var7 = var1.template;
                            if (!(var3 != var7)) {
                                _fun71660_ip = 271;
                                continue _fun71660
                            }
                        case 50:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 5;
                            var1 = var5[var1];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var1);
                            var1 = var4.createGuildFromTemplate;
                            var1 = var1.bind(var4)(var9, var8, var7);
                            SaveGenerator(address = 92);
                        case 90:
                            return var1;
                        case 92:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                            if (var4) {
                                _fun71660_ip = 268;
                                continue _fun71660
                            }
                        case 101:
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 6;
                            var2 = var7[var2];
                            var4 = var4.bind(var5)(var2);
                            var2 = var4.fromGuild;
                            var2 = var2.bind(var4)(var1);
                            _closure2_slot2 = var2;
                        case 136:
                            var2 = _closure2_slot2;
                            if (!(var3 != var2)) {
                                _fun71660_ip = 260;
                                continue _fun71660
                            }
                        case 144:
                            var3 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 7;
                            var2 = var8[var2];
                            var7 = undefined;
                            var4 = var3.bind(var7)(var2);
                            var3 = var4.onAddDirectoryGuildEntry;
                            var2 = {};
                            var9 = _closure2_slot0;
                            var2.directoryChannelId = var9;
                            var9 = _closure2_slot1;
                            var2.directoryGuildName = var9;
                            var6 = _closure2_slot2;
                            var2.guild = var6;
                            var6 = arg0;
                            var2.description = var6;
                            var6 = arg1;
                            var2.category = var6;
                            var6 = _closure1_slot1;
                            var5 = 8;
                            var5 = var8[var5];
                            var5 = var6.bind(var7)(var5);
                            var5 = var5.close;
                            var2.onClose = var5;
                            var2 = var3.bind(var4)(var2);
                            SaveGenerator(address = 254);
                        case 252:
                            return var2;
                        case 254:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                            if (var3) {
                                _fun71660_ip = 265;
                                continue _fun71660
                            }
                        case 260:
                            var3 = undefined;
                            return var3;
                        case 265:
                            return var2;
                        case 268:
                            return var1;
                        case 271:
                            var1 = undefined;
                            return var1;
                        case 276:
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
        var12 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var14 = _closure1_slot0;
        var15 = _closure1_slot2;
        var0 = 9;
        var0 = var15[var0];
        var0 = var14.bind(var3)(var0);
        var1 = var0.GuildDirectoryAddModalScreen;
        var0 = {};
        var6 = _closure1_slot7;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var18.container;
        var4.style = var7;
        var7 = 'handled';
        var4.keyboardShouldPersistTaps = var7;
        var9 = _closure1_slot4;
        var7 = {};
        var11 = var18.header;
        var7.style = var11;
        var16 = 10;
        var11 = var15[var16];
        var11 = var14.bind(var3)(var11);
        var17 = var11.Text;
        var13 = {
            'style': null,
            'accessibilityRole': 'header',
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var11 = var18.title;
        var13.style = var11;
        var11 = 11;
        var19 = var15[var11];
        var19 = var14.bind(var3)(var19);
        var21 = var19.intl;
        var20 = var21.string;
        var19 = var15[var11];
        var19 = var14.bind(var3)(var19);
        var19 = var19.t;
        var19 = var19["5bQcoa"];
        var19 = var20.bind(var21)(var19);
        var13.children = var19;
        var17 = var2.bind(var3)(var17, var13);
        var13 = new Array(2);
        var13[0] = var17;
        var16 = var15[var16];
        var16 = var14.bind(var3)(var16);
        var17 = var16.Text;
        var16 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var18 = var18.description;
        var16.style = var18;
        var18 = var15[var11];
        var18 = var14.bind(var3)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var15[var11];
        var18 = var14.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18.Ie60Wc;
        var18 = var19.bind(var20)(var18);
        var16.children = var18;
        var16 = var2.bind(var3)(var17, var16);
        var13[1] = var16;
        var7.children = var13;
        var9 = var6.bind(var3)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var9 = _closure1_slot1;
        var8 = 12;
        var8 = var15[var8];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var8.onSubmit = var12;
        var12 = var15[var11];
        var12 = var14.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.H9jxS1;
        var11 = var12.bind(var13)(var11);
        var8.buttonLabel = var11;
        var8.directoryChannelId = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 33, 1297, 8952, 1598, 8953, 8936, 8937, 3941, 1234, 8945, 2]);