// uikit-native/modals/AcceptGuildTemplate.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function() {
        var0 = _closure1_slot15;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot12;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var4.resolvingContainer;
        var0.style = var4;
        var6 = _closure1_slot12;
        var5 = _closure1_slot5;
        var4 = {};
        var8 = _closure1_slot1;
        var9 = _closure1_slot3;
        var7 = 8;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.unsafe_rawColors;
        var7 = var7.BRAND_500;
        var4.color = var7;
        var7 = 'large';
        var4.size = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function arg0() {
        _fun79631: for (var _fun79631_ip = 0;;) switch (_fun79631_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.guildTemplate;
                var _closure2_slot0 = var9;
                var18 = var1.createServer;
                var15 = var1.name;
                var14 = var1.setName;
                var21 = var1.icon;
                var23 = var1.chooseIcon;
                var17 = var1.errors;
                var1 = _closure1_slot15;
                var3 = undefined;
                var16 = var1.bind(var3)();
                var7 = _closure1_slot1;
                var12 = _closure1_slot3;
                var1 = 10;
                var2 = var12[var1];
                var6 = var7.bind(var3)(var2);
                var5 = null;
                var4 = var5 != var9;
                var2 = 'guild template cannot be null';
                var2 = var6.bind(var3)(var4, var2);
                var1 = var12[var1];
                var4 = var7.bind(var3)(var1);
                var2 = var9.state;
                var1 = _closure1_slot11;
                var1 = var1.RESOLVING;
                var2 = var2 !== var1;
                var1 = 'guild must be resolved';
                var1 = var4.bind(var3)(var2, var1);
                var1 = 11;
                var1 = var12[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var8 = var1.bottom;
                var1 = var9.serializedSourceGuild;
                var4 = var1.roles;
                var2 = var4.map;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = _closure1_slot3;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.fromServer;
                    var0 = _closure2_slot0;
                    var0 = var0.serializedSourceGuild;
                    var1 = var0.id;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var2.bind(var4)(var1);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    var0 = !var0;
                    return var0;
                };
                var13 = var1.bind(var2)(var0);
                var2 = _closure1_slot13;
                var1 = _closure1_slot6;
                var0 = {};
                var6 = var16.wrapper;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = {};
                var6.marginBottom = var8;
                var4[1] = var6;
                var0.contentContainerStyle = var4;
                var4 = 'handled';
                var0.keyboardShouldPersistTaps = var4;
                var8 = _closure1_slot12;
                var22 = _closure1_slot0;
                var11 = 13;
                var4 = var12[var11];
                var4 = var22.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'style': null,
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var19 = var16.header;
                var4.style = var19;
                var19 = 14;
                var20 = var12[var19];
                var20 = var22.bind(var3)(var20);
                var25 = var20.intl;
                var24 = var25.string;
                var20 = var12[var19];
                var20 = var22.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.QzUORX;
                var20 = var24.bind(var25)(var20);
                var4.children = var20;
                var6 = var8.bind(var3)(var6, var4);
                var4 = new Array(11);
                var4[0] = var6;
                var20 = _closure1_slot12;
                var6 = var12[var11];
                var6 = var22.bind(var3)(var6);
                var8 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-lg/medium',
                    'color': 'text-default'
                };
                var24 = var16.description;
                var6.style = var24;
                var24 = var9.name;
                var6.children = var24;
                var6 = var20.bind(var3)(var8, var6);
                var4[1] = var6;
                var20 = _closure1_slot12;
                var6 = 15;
                var6 = var12[var6];
                var8 = var7.bind(var3)(var6);
                var6 = {};
                var24 = var16.wrapper;
                var24 = var24.backgroundColor;
                var6.iconBackgroundColor = var24;
                var24 = var16.iconUploader;
                var6.style = var24;
                var6.onPress = var23;
                var6.icon = var21;
                var6 = var20.bind(var3)(var8, var6);
                var4[2] = var6;
                var8 = _closure1_slot12;
                var6 = 16;
                var6 = var12[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var20 = var12[var19];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var12 = var12[var19];
                var12 = var22.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.dBih7e;
                var12 = var20.bind(var21)(var12);
                var6.label = var12;
                var20 = var5 == var17;
                var12 = undefined;
                if (var20) {
                    _fun79631_ip = 574;
                    continue _fun79631
                }
            case 569:
                var12 = var17.name;
            case 574:
                var6.error = var12;
                var17 = _closure1_slot0;
                var12 = _closure1_slot3;
                var20 = var12[var19];
                var20 = var17.bind(var3)(var20);
                var23 = var20.intl;
                var22 = var23.format;
                var20 = var12[var19];
                var20 = var17.bind(var3)(var20);
                var20 = var20.t;
                var21 = var20["2bprXx"];
                var20 = {};
                var24 = _closure1_slot9;
                var24 = var24.GUIDELINES;
                var20.guidelinesURL = var24;
                var20 = var22.bind(var23)(var21, var20);
                var6.hint = var20;
                var6.value = var15;
                var6.onChangeText = var14;
                var14 = true;
                var6.autoFocus = var14;
                var15 = false;
                var6.autoCorrect = var15;
                var15 = 'done';
                var6.returnKeyType = var15;
                var6 = var8.bind(var3)(var7, var6);
                var4[3] = var6;
                var15 = _closure1_slot12;
                var7 = _closure1_slot1;
                var20 = 17;
                var6 = var12[var20];
                var8 = var7.bind(var3)(var6);
                var6 = {};
                var6.shrink = var14;
                var20 = var12[var20];
                var20 = var7.bind(var3)(var20);
                var20 = var20.Sizes;
                var20 = var20.MEDIUM;
                var6.size = var20;
                var20 = var16.createButton;
                var6.style = var20;
                var20 = var12[var19];
                var20 = var17.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var12[var19];
                var20 = var17.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20["O0p/lS"];
                var20 = var21.bind(var22)(var20);
                var6.text = var20;
                var6.onPress = var18;
                var20 = var9.state;
                var18 = _closure1_slot11;
                var18 = var18.ACCEPTING;
                var18 = var20 === var18;
                var6.loading = var18;
                var6 = var15.bind(var3)(var8, var6);
                var4[4] = var6;
                var8 = _closure1_slot12;
                var6 = 18;
                var6 = var12[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var15 = var16.divider;
                var6.style = var15;
                var6.outer = var14;
                var6 = var8.bind(var3)(var7, var6);
                var4[5] = var6;
                var8 = _closure1_slot12;
                var6 = var12[var11];
                var6 = var17.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'heading-md/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var16.sectionHeader;
                var6.style = var14;
                var14 = var12[var19];
                var14 = var17.bind(var3)(var14);
                var18 = var14.intl;
                var15 = var18.string;
                var14 = var12[var19];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.OGiMXJ;
                var14 = var15.bind(var18)(var14);
                var6.children = var14;
                var6 = var8.bind(var3)(var7, var6);
                var4[6] = var6;
                var8 = _closure1_slot12;
                var6 = var12[var11];
                var6 = var17.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var14 = var12[var19];
                var14 = var17.bind(var3)(var14);
                var18 = var14.intl;
                var15 = var18.string;
                var14 = var12[var19];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.Ztwyoz;
                var14 = var15.bind(var18)(var14);
                var6.children = var14;
                var6 = var8.bind(var3)(var7, var6);
                var4[7] = var6;
                var8 = _closure1_slot12;
                var7 = _closure1_slot18;
                var6 = {};
                var9 = var9.serializedSourceGuild;
                var9 = var9.channels;
                var6.channels = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[8] = var6;
                var8 = _closure1_slot13;
                var6 = var12[var11];
                var6 = var17.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-xs/medium',
                    'color': 'interactive-text-default'
                };
                var9 = var16.sectionTip;
                var6.style = var9;
                var15 = _closure1_slot13;
                var9 = 19;
                var9 = var12[var9];
                var9 = var17.bind(var3)(var9);
                var14 = var9.LegacyText;
                var9 = {};
                var18 = var16.protip;
                var9.style = var18;
                var18 = var12[var19];
                var18 = var17.bind(var3)(var18);
                var21 = var18.intl;
                var20 = var21.string;
                var18 = var12[var19];
                var18 = var17.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["8tvIiN"];
                var20 = var20.bind(var21)(var18);
                var18 = new Array(2);
                var18[0] = var20;
                var20 = ': ';
                var18[1] = var20;
                var9.children = var18;
                var14 = var15.bind(var3)(var14, var9);
                var9 = new Array(2);
                var9[0] = var14;
                var14 = var12[var19];
                var14 = var17.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var12 = var12[var19];
                var12 = var17.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.de7DpI;
                var12 = var14.bind(var15)(var12);
                var9[1] = var12;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[9] = var6;
                var7 = var13.length;
                var6 = 0;
                var6 = var7 > var6;
                var5 = null;
                if (!var6) {
                    _fun79631_ip = 1613;
                    continue _fun79631
                }
            case 1360:
                var8 = _closure1_slot13;
                var7 = _closure1_slot14;
                var6 = {};
                var14 = _closure1_slot12;
                var18 = _closure1_slot0;
                var15 = _closure1_slot3;
                var9 = var15[var11];
                var9 = var18.bind(var3)(var9);
                var12 = var9.Text;
                var9 = {
                    'style': null,
                    'variant': 'heading-md/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var16.sectionHeader;
                var9.style = var16;
                var16 = var15[var19];
                var16 = var18.bind(var3)(var16);
                var20 = var16.intl;
                var17 = var20.string;
                var16 = var15[var19];
                var16 = var18.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.mQ0H1p;
                var16 = var17.bind(var20)(var16);
                var9.children = var16;
                var12 = var14.bind(var3)(var12, var9);
                var9 = new Array(3);
                var9[0] = var12;
                var14 = _closure1_slot12;
                var11 = var15[var11];
                var11 = var18.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var16 = var15[var19];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var15[var19];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.jOPEYC;
                var15 = var16.bind(var17)(var15);
                var11.children = var15;
                var11 = var14.bind(var3)(var12, var11);
                var9[1] = var11;
                var12 = _closure1_slot12;
                var11 = _closure1_slot20;
                var10 = {};
                var10.roles = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[2] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1613:
                var4[10] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.channels;
        var2 = _closure1_slot15;
        var3 = undefined;
        var6 = var2.bind(var3)();
        var _closure2_slot0 = var6;
        var5 = _closure1_slot1;
        var7 = _closure1_slot3;
        var2 = 20;
        var2 = var7[var2];
        var2 = var5.bind(var3)(var2);
        var5 = var2.bind(var3)(var4);
        var4 = var5.sortBy;
        var2 = function(arg0) { // Environment: var1
            _fun79635: for (var _fun79635_ip = 0;;) switch (_fun79635_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.parent_id;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun79635_ip = 57;
                        continue _fun79635
                    }
                case 15:
                    var0 = global;
                    var3 = var0.Number;
                    var2 = var1.parent_id;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var0 = 10000;
                    var2 = var0 * var2;
                    var0 = var1.id;
                    var0 = var2 + var0;
                    _fun79635_ip = 87;
                    continue _fun79635;
                case 57:
                    var2 = global;
                    var3 = var2.Number;
                    var2 = var1.id;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = 10000;
                    var0 = var1 * var2;
                case 87:
                    return var0;
            }
        };
        var4 = var4.bind(var5)(var2);
        var2 = var4.map;
        var1 = function(arg0) { // Environment: var1
            _fun79636: for (var _fun79636_ip = 0;;) switch (_fun79636_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.type;
                    var1 = _closure1_slot10;
                    var1 = var1.GUILD_CATEGORY;
                    var12 = var2 === var1;
                    var4 = _closure1_slot13;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var9 = _closure2_slot0;
                    var1 = var9.channelRow;
                    var2.style = var1;
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var13 = 21;
                    var5 = var1[var13];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var5);
                    var5 = {};
                    var10 = var9.channelIcon;
                    var9 = new Array(2);
                    var9[0] = var10;
                    var14 = null;
                    if (!var12) {
                        _fun79636_ip = 109;
                        continue _fun79636
                    }
                case 99:
                    var15 = _closure2_slot0;
                    var14 = var15.channelCategoryIcon;
                case 109:
                    var9[1] = var14;
                    var5.style = var9;
                    var14 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var15 = 8;
                    var15 = var9[var15];
                    var15 = var14.bind(var1)(var15);
                    var15 = var15.unsafe_rawColors;
                    var15 = var15.PRIMARY_400;
                    var5.color = var15;
                    var13 = var9[var13];
                    var13 = var14.bind(var1)(var13);
                    var13 = var13.Sizes;
                    var13 = var13.CUSTOM;
                    var5.size = var13;
                    var13 = _closure1_slot19;
                    var13 = var13.bind(var1)(var0);
                    var5.source = var13;
                    var7 = var8.bind(var1)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var8 = _closure1_slot12;
                    var7 = _closure1_slot0;
                    var6 = 19;
                    var6 = var9[var6];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.LegacyText;
                    var6 = {};
                    var9 = 1;
                    var6.numberOfLines = var9;
                    var9 = _closure2_slot0;
                    var13 = var9.channelName;
                    var9 = new Array(2);
                    var9[0] = var13;
                    var10 = null;
                    if (!var12) {
                        _fun79636_ip = 273;
                        continue _fun79636
                    }
                case 263:
                    var11 = _closure2_slot0;
                    var10 = var11.channelCategoryName;
                case 273:
                    var9[1] = var10;
                    var6.style = var9;
                    var9 = var0.name;
                    var6.children = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2.children = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
            }
        };
        var2 = var2.bind(var4)(var1);
        var1 = var2.value;
        var4 = var1.bind(var2)();
        var2 = _closure1_slot12;
        var1 = _closure1_slot4;
        var0 = {};
        var7 = var6.rolesChannelsWrapper;
        var5 = new Array(2);
        var5[0] = var7;
        var6 = var6.channelsWrapper;
        var5[1] = var6;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun79637: for (var _fun79637_ip = 0;;) switch (_fun79637_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var0 = _closure1_slot7;
                var3 = undefined;
                var0 = var0.bind(var3)(var2);
                if (var0) {
                    _fun79637_ip = 83;
                    continue _fun79637
                }
            case 25:
                var0 = _closure1_slot10;
                var0 = var0.GUILD_CATEGORY;
                if (!(var2 !== var0)) {
                    _fun79637_ip = 61;
                    continue _fun79637
                }
            case 39:
                var2 = _closure1_slot1;
                var4 = _closure1_slot3;
                var0 = 24;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                _fun79637_ip = 81;
                continue _fun79637;
            case 61:
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 23;
                var2 = var5[var2];
                var0 = var4.bind(var3)(var2);
            case 81:
                _fun79637_ip = 103;
                continue _fun79637;
            case 83:
                var2 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 22;
                var1 = var4[var1];
                var0 = var2.bind(var3)(var1);
            case 103:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.roles;
        var1 = _closure1_slot15;
        var3 = undefined;
        var6 = var1.bind(var3)();
        var1 = var2.slice;
        var2 = var1.bind(var2)();
        var1 = var2.reverse;
        var4 = var1.bind(var2)();
        var2 = var4.map;
        var1 = function(arg0) { // Environment: var1
            _fun79639: for (var _fun79639_ip = 0;;) switch (_fun79639_ip) {
                case 0:
                    var0 = arg0;
                    var4 = _closure1_slot12;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var1 = 25;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var5 = true;
                    var1.disableInteraction = var5;
                    var1.role = var0;
                    var8 = var0.color;
                    var7 = 0;
                    var5 = undefined;
                    if (!(var7 !== var8)) {
                        _fun79639_ip = 95;
                        continue _fun79639
                    }
                case 59:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var6 = 26;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.int2hex;
                    var6 = var0.color;
                    var5 = var7.bind(var8)(var6);
                case 95:
                    var1.color = var5;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
            }
        };
        var4 = var2.bind(var4)(var1);
        var2 = _closure1_slot12;
        var1 = _closure1_slot4;
        var0 = {};
        var7 = var6.rolesChannelsWrapper;
        var5 = new Array(2);
        var5[0] = var7;
        var6 = var6.rolesWrapper;
        var5[1] = var6;
        var0.style = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var16 = true;
    var3.value = var16;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var6 = var3.ActivityIndicator;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildVocalChannelType;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isEveryoneRole;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MarketingURLs;
    var _closure1_slot9 = var6;
    var9 = var3.Fonts;
    var3 = var3.ChannelTypes;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildTemplateStates;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var6 = var3.jsxs;
    var _closure1_slot13 = var6;
    var3 = var3.Fragment;
    var _closure1_slot14 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 8;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var12;
    var19 = 16;
    var8.padding = var19;
    var3.wrapper = var8;
    var8 = {};
    var12 = 'center';
    var8.textAlign = var12;
    var12 = 9;
    var13 = var5[var12];
    var17 = var11.bind(var0)(var13);
    var15 = var9.DISPLAY_EXTRABOLD;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var14 = 24;
    var22 = var17.bind(var0)(var15, var13, var14);
    var23 = var8;
    var13 = copyDataProperties(var23, var22);
    var3.header = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 8,
        'marginBottom': 32
    };
    var3.description = var8;
    var15 = 12;
    var8 = {
        'alignSelf': 'center',
        'marginBottom': 12
    };
    var3.iconUploader = var8;
    var8 = {
        'width': '100%',
        'marginTop': 8
    };
    var3.createButton = var8;
    var8 = {
        'alignItems': 'center',
        'flex': 1,
        'justifyContent': 'center'
    };
    var3.resolvingContainer = var8;
    var8 = {
        'alignSelf': 'stretch',
        'padding': 16
    };
    var3.buttonWrapper = var8;
    var8 = {
        'flexGrow': 0,
        'paddingHorizontal': 8
    };
    var3.button = var8;
    var8 = {};
    var8.marginTop = var10;
    var3.divider = var8;
    var8 = {};
    var13 = var5[var12];
    var18 = var11.bind(var0)(var13);
    var17 = var9.DISPLAY_EXTRABOLD;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var22 = var18.bind(var0)(var17, var13, var19);
    var23 = var8;
    var13 = copyDataProperties(var23, var22);
    var13 = 'marginTop';
    var8[var13] = var14;
    var3.sectionHeader = var8;
    var8 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var8.borderRadius = var13;
    var8.marginTop = var10;
    var8.padding = var10;
    var3.rolesChannelsWrapper = var8;
    var8 = {
        'flexDirection': 'column',
        'paddingVertical': 0
    };
    var3.channelsWrapper = var8;
    var8 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap'
    };
    var3.rolesWrapper = var8;
    var8 = {
        'alignItems': 'center',
        'flexDirection': 'row',
        'height': 40
    };
    var3.channelRow = var8;
    var8 = {
        'marginLeft': 12,
        'marginRight': 8,
        'height': 20,
        'width': 20
    };
    var3.channelIcon = var8;
    var8 = {
        'marginLeft': 0,
        'marginRight': 2,
        'height': 12,
        'width': 12
    };
    var3.channelCategoryIcon = var8;
    var8 = {
        'color': null,
        'fontSize': 16,
        'flex': 1
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CHANNELS_DEFAULT;
    var8.color = var13;
    var3.channelName = var8;
    var8 = {};
    var12 = var5[var12];
    var14 = var11.bind(var0)(var12);
    var23 = var9.DISPLAY_EXTRABOLD;
    var12 = {};
    var12.uppercase = var16;
    var24 = undefined;
    var22 = undefined;
    var21 = var15;
    var20 = var12;
    var22 = var24[var14](var23, var22, var21, var20, var19);
    var23 = var8;
    var12 = copyDataProperties(var23, var22);
    var3.channelCategoryName = var8;
    var8 = {};
    var8.marginTop = var10;
    var3.sectionTip = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.GREEN_360;
    var8.color = var10;
    var9 = var9.PRIMARY_BOLD;
    var8.fontFamily = var9;
    var9 = 'uppercase';
    var8.textTransform = var9;
    var3.protip = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/modals/AcceptGuildTemplate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79640: for (var _fun79640_ip = 0;;) switch (_fun79640_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildTemplate;
                var2 = null;
                if (!(var2 != var1)) {
                    _fun79640_ip = 79;
                    continue _fun79640
                }
            case 15:
                var3 = var1.state;
                var2 = _closure1_slot11;
                var2 = var2.RESOLVED;
                if (!(var2 !== var3)) {
                    _fun79640_ip = 142;
                    continue _fun79640
                }
            case 37:
                var2 = _closure1_slot11;
                var2 = var2.ACCEPTING;
                if (!(var2 !== var3)) {
                    _fun79640_ip = 142;
                    continue _fun79640
                }
            case 51:
                var2 = _closure1_slot11;
                var2 = var2.ACCEPTED;
                if (!(var2 !== var3)) {
                    _fun79640_ip = 142;
                    continue _fun79640
                }
            case 65:
                var2 = _closure1_slot11;
                var2 = var2.RESOLVING;
                if (!(var2 !== var3)) {
                    _fun79640_ip = 112;
                    continue _fun79640
                }
            case 79:
                var5 = _closure1_slot12;
                var4 = _closure1_slot16;
                var3 = {};
                var7 = var3;
                var6 = var0;
                var2 = copyDataProperties(var7, var6);
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var3);
                return var2;
            case 112:
                var5 = _closure1_slot12;
                var4 = _closure1_slot16;
                var3 = {};
                var7 = var3;
                var6 = var0;
                var2 = copyDataProperties(var7, var6);
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var3);
                return var2;
            case 142:
                var3 = _closure1_slot12;
                var2 = _closure1_slot17;
                var1 = {};
                var7 = var1;
                var6 = var0;
                var0 = copyDataProperties(var7, var6);
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1376, 1677, 660, 6557, 33, 1297, 671, 4682, 44, 1568, 1680, 3942, 1234, 9035, 5933, 4875, 5436, 4878, 22, 4086, 8182, 10141, 10142, 9223, 668, 2]);