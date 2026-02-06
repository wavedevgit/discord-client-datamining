// modules/directory_channels/native/components/GuildDirectoryRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var13 = 1;
    var3 = var5[var13];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.JoinGuildSources;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var7 = var3.Fragment;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var10 = 'row';
    var14 = 16;
    var9 = {
        'flexDirection': 'row',
        'padding': 16,
        'marginVertical': 6,
        'marginHorizontal': 8
    };
    var3.container = var9;
    var9 = {};
    var11 = 'column';
    var9.flexDirection = var11;
    var3.guildInfoContainer = var9;
    var9 = {};
    var11 = 9;
    var15 = var5[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var9.borderRadius = var15;
    var9.marginRight = var14;
    var3.guildIcon = var9;
    var9 = {};
    var9.flex = var13;
    var3.guildWrapper = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'flex': 1
    };
    var3.guildCountsWrapper = var9;
    var9 = {};
    var14 = 'visible';
    var9.overflow = var14;
    var3.guildBadgeIcon = var9;
    var9 = {};
    var9.flex = var13;
    var3.guildName = var9;
    var9 = {
        'flexShrink': 1,
        'marginBottom': 8
    };
    var3.guildDescription = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 8
    };
    var3.memberInfo = var9;
    var9 = {
        'width': 8,
        'height': 8,
        'borderRadius': null,
        'marginRight': 4
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9.borderRadius = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.GREEN_360;
    var9.backgroundColor = var13;
    var3.dotOnline = var9;
    var9 = {
        'width': 8,
        'height': 8,
        'borderRadius': null,
        'marginRight': 4,
        'marginLeft': 16
    };
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9.borderRadius = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.PRIMARY_400;
    var9.backgroundColor = var11;
    var3.dotOffline = var9;
    var9 = {
        'flexDirection': 'row',
        'marginBottom': 4,
        'justifyContent': 'space-between'
    };
    var3.headerContainer = var9;
    var9 = {};
    var9.flexDirection = var10;
    var3.titleContainer = var9;
    var9 = {
        'flex': 1,
        'height': 4
    };
    var3.flex = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun71763: for (var _fun71763_ip = 0;;) switch (_fun71763_ip) {
            case 0:
                var1 = arg0;
                var23 = var1.entry;
                var _closure2_slot0 = var23;
                var1 = _closure1_slot13;
                var3 = undefined;
                var16 = var1.bind(var3)();
                var26 = var23.name;
                var18 = var23.description;
                var38 = var23.approximateMemberCount;
                var37 = var23.approximatePresenceCount;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var1 = var2[var1];
                var6 = var4.bind(var3)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guildId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var5.bind(var6)(var4, var1);
                var9 = null;
                var13 = var9 != var1;
                var _closure2_slot1 = var13;
                var4 = _closure1_slot5;
                var1 = var4.useState;
                var19 = false;
                var5 = var1.bind(var4)(var19);
                var4 = _closure1_slot4;
                var1 = 2;
                var4 = var4.bind(var3)(var5, var1);
                var1 = 0;
                var14 = var4[var1];
                var1 = 1;
                var1 = var4[var1];
                var _closure2_slot2 = var1;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun71767: for (var _fun71767_ip = 0;;) switch (_fun71767_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun71767_ip = 345;
                                        continue _fun71767
                                    }
                                case 10:
                                    var4 = undefined;
                                    var5 = undefined;
                                    var3 = _closure2_slot2;
                                    var1 = true;
                                    var1 = var3.bind(var4)(var1);
                                case 28: // try_start_0
                                    var3 = _closure2_slot1;
                                    if (var3) {
                                        _fun71767_ip = 274;
                                        continue _fun71767
                                    }
                                case 41:
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var3 = 12;
                                    var3 = var7[var3];
                                    var8 = var6.bind(var4)(var3);
                                    var7 = var8.joinGuild;
                                    var3 = _closure2_slot0;
                                    var6 = var3.guildId;
                                    var3 = {};
                                    var9 = _closure1_slot9;
                                    var9 = var9.DIRECTORY_ENTRY;
                                    var3.source = var9;
                                    var3 = var7.bind(var8)(var6, var3);
                                    SaveGenerator(address = 102);
                                case 100:
                                    return var3;
                                case 102:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun71767_ip = 260;
                                        continue _fun71767
                                    }
                                case 111:
                                    var8 = _closure1_slot7;
                                    var7 = var8.getChannel;
                                    var6 = _closure2_slot0;
                                    var6 = var6.channelId;
                                    var6 = var7.bind(var8)(var6);
                                    var5 = var6;
                                    var9 = null;
                                    if (!(var9 != var6)) {
                                        _fun71767_ip = 246;
                                        continue _fun71767
                                    }
                                case 143:
                                    var7 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var6 = 13;
                                    var6 = var8[var6];
                                    var8 = var7.bind(var4)(var6);
                                    var7 = var8.setHubProgressActionComplete;
                                    var6 = var5;
                                    var9 = var9 == var6;
                                    var6 = undefined;
                                    if (var9) {
                                        _fun71767_ip = 194;
                                        continue _fun71767
                                    }
                                case 181:
                                    var9 = var5;
                                    var5 = var9.getGuildId;
                                    var6 = var5.bind(var9)();
                                case 194:
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var5 = 14;
                                    var5 = var10[var5];
                                    var5 = var9.bind(var4)(var5);
                                    var5 = var5.HubProgressStep;
                                    var5 = var5.JOIN_GUILD;
                                    var5 = var7.bind(var8)(var6, var5);
                                case 232: // try_end0
                                    var6 = _closure2_slot2;
                                    var5 = false;
                                    var5 = var6.bind(var4)(var5);
                                    return var4;
                                case 246:
                                    var6 = _closure2_slot2;
                                    var5 = false;
                                    var5 = var6.bind(var4)(var5);
                                    return var4;
                                case 260:
                                    var6 = _closure2_slot2;
                                    var5 = false;
                                    var5 = var6.bind(var4)(var5);
                                    return var3;
                                case 274: // try_start_1
                                    var3 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var1 = 11;
                                    var1 = var5[var1];
                                    var5 = var3.bind(var4)(var1);
                                    var3 = var5.transitionToGuild;
                                    var1 = _closure2_slot0;
                                    var1 = var1.guildId;
                                    var1 = var3.bind(var5)(var1);
                                case 314: // try_end1
                                    var5 = _closure2_slot2;
                                    var3 = false;
                                    var3 = var5.bind(var4)(var3);
                                    var1 = undefined;
                                    return var1;
                                case 330: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register = 1);
                                    var3 = _closure2_slot2;
                                    var2 = false;
                                    var2 = var3.bind(var4)(var2);
                                    throw var1;
                                case 345:
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
                var1 = _closure1_slot1;
                var0 = 15;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getGuildIconURL;
                var0 = {};
                var4 = var23.guildId;
                var0.id = var4;
                var4 = var23.icon;
                var0.icon = var4;
                var4 = 40;
                var0.size = var4;
                var0 = var1.bind(var2)(var0);
                var1 = var9 != var0;
                var20 = undefined;
                if (!var1) {
                    _fun71763_ip = 233;
                    continue _fun71763
                }
            case 230:
                var20 = var0;
            case 233:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var39 = 16;
                var1 = var0[var39];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var39];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.VJlc0S;
                var11 = var1.bind(var2)(var0);
                if (!var13) {
                    _fun71763_ip = 345;
                    continue _fun71763
                }
            case 291:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = var0[var39];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var39];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.cqWE2Z;
                var11 = var1.bind(var2)(var0);
            case 345:
                var2 = _closure1_slot10;
                var1 = _closure1_slot0;
                var21 = _closure1_slot2;
                var0 = 17;
                var0 = var21[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Card;
                var0 = {};
                var4 = var16.container;
                var0.style = var4;
                var6 = _closure1_slot12;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var16.guildWrapper;
                var4.style = var7;
                var7 = {};
                var10 = var16.headerContainer;
                var7.style = var10;
                var10 = {};
                var15 = var16.titleContainer;
                var10.style = var15;
                var17 = _closure1_slot1;
                var15 = 18;
                var15 = var21[var15];
                var17 = var17.bind(var3)(var15);
                var15 = {};
                var21 = var16.guildIcon;
                var15.style = var21;
                var15.icon = var20;
                var21 = var9 == var20;
                var20 = undefined;
                if (!var21) {
                    _fun71763_ip = 502;
                    continue _fun71763
                }
            case 471:
                var22 = _closure1_slot0;
                var24 = _closure1_slot2;
                var21 = 19;
                var21 = var24[var21];
                var22 = var22.bind(var3)(var21);
                var21 = var22.fromGuildDirectoryEntry;
                var20 = var21.bind(var22)(var23);
            case 502:
                var15.guild = var20;
                var15.selected = var19;
                var17 = var2.bind(var3)(var17, var15);
                var15 = new Array(2);
                var15[0] = var17;
                var21 = _closure1_slot12;
                var20 = _closure1_slot6;
                var17 = {};
                var19 = var16.guildInfoContainer;
                var17.style = var19;
                var25 = _closure1_slot10;
                var24 = _closure1_slot0;
                var22 = _closure1_slot2;
                var19 = 20;
                var22 = var22[var19];
                var22 = var24.bind(var3)(var22);
                var24 = var22.Text;
                var22 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var27 = var16.guildName;
                var22.style = var27;
                var22.children = var26;
                var24 = var25.bind(var3)(var24, var22);
                var22 = new Array(2);
                var22[0] = var24;
                var24 = {};
                var25 = var16.memberInfo;
                var24.style = var25;
                var25 = var9 != var37;
                var26 = null;
                if (!var25) {
                    _fun71763_ip = 798;
                    continue _fun71763
                }
            case 642:
                var28 = _closure1_slot12;
                var27 = _closure1_slot11;
                var25 = {};
                var32 = _closure1_slot10;
                var30 = _closure1_slot6;
                var29 = {};
                var31 = var16.dotOnline;
                var29.style = var31;
                var30 = var32.bind(var3)(var30, var29);
                var29 = new Array(2);
                var29[0] = var30;
                var34 = _closure1_slot0;
                var33 = _closure1_slot2;
                var30 = var33[var19];
                var30 = var34.bind(var3)(var30);
                var31 = var30.Text;
                var30 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var35 = var33[var39];
                var35 = var34.bind(var3)(var35);
                var36 = var35.intl;
                var35 = var36.format;
                var33 = var33[var39];
                var33 = var34.bind(var3)(var33);
                var33 = var33.t;
                var34 = var33["LC+S+m"];
                var33 = {};
                var33.membersOnline = var37;
                var33 = var35.bind(var36)(var34, var33);
                var30.children = var33;
                var30 = var32.bind(var3)(var31, var30);
                var29[1] = var30;
                var25.children = var29;
                var26 = var28.bind(var3)(var27, var25);
            case 798:
                var25 = new Array(2);
                var25[0] = var26;
                var27 = var9 != var38;
                var26 = null;
                if (!var27) {
                    _fun71763_ip = 974;
                    continue _fun71763
                }
            case 818:
                var29 = _closure1_slot12;
                var28 = _closure1_slot11;
                var27 = {};
                var33 = _closure1_slot10;
                var31 = _closure1_slot6;
                var30 = {};
                var32 = var16.dotOffline;
                var30.style = var32;
                var31 = var33.bind(var3)(var31, var30);
                var30 = new Array(2);
                var30[0] = var31;
                var35 = _closure1_slot0;
                var34 = _closure1_slot2;
                var31 = var34[var19];
                var31 = var35.bind(var3)(var31);
                var32 = var31.Text;
                var31 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var36 = var34[var39];
                var36 = var35.bind(var3)(var36);
                var37 = var36.intl;
                var36 = var37.format;
                var34 = var34[var39];
                var34 = var35.bind(var3)(var34);
                var34 = var34.t;
                var35 = var34.zRl6XR;
                var34 = {};
                var34.count = var38;
                var34 = var36.bind(var37)(var35, var34);
                var31.children = var34;
                var31 = var33.bind(var3)(var32, var31);
                var30[1] = var31;
                var27.children = var30;
                var26 = var29.bind(var3)(var28, var27);
            case 974:
                var25[1] = var26;
                var24.children = var25;
                var24 = var21.bind(var3)(var20, var24);
                var22[1] = var24;
                var17.children = var22;
                var17 = var21.bind(var3)(var20, var17);
                var15[1] = var17;
                var10.children = var15;
                var15 = var6.bind(var3)(var5, var10);
                var10 = new Array(2);
                var10[0] = var15;
                var20 = _closure1_slot10;
                var17 = _closure1_slot6;
                var15 = {};
                var22 = _closure1_slot1;
                var24 = _closure1_slot2;
                var21 = 21;
                var21 = var24[var21];
                var22 = var22.bind(var3)(var21);
                var21 = {};
                var21.entry = var23;
                var21 = var20.bind(var3)(var22, var21);
                var15.children = var21;
                var15 = var20.bind(var3)(var17, var15);
                var10[1] = var15;
                var7.children = var10;
                var10 = var6.bind(var3)(var5, var7);
                var7 = new Array(4);
                var7[0] = var10;
                var9 = var9 != var18;
                if (!var9) {
                    _fun71763_ip = 1114;
                    continue _fun71763
                }
            case 1106:
                var10 = '';
                var9 = var10 !== var18;
            case 1114:
                if (!var9) {
                    _fun71763_ip = 1179;
                    continue _fun71763
                }
            case 1117:
                var17 = _closure1_slot10;
                var15 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var19];
                var10 = var15.bind(var3)(var10);
                var15 = var10.Text;
                var10 = {
                    'lineClamp': 3,
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var19 = var16.guildDescription;
                var10.style = var19;
                var10.children = var18;
                var9 = var17.bind(var3)(var15, var10);
            case 1179:
                var7[1] = var9;
                var10 = _closure1_slot10;
                var15 = _closure1_slot6;
                var9 = {};
                var16 = var16.flex;
                var9.style = var16;
                var9 = var10.bind(var3)(var15, var9);
                var7[2] = var9;
                var9 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 22;
                var8 = var15[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var8.loading = var14;
                var8.onPress = var12;
                var12 = 'active';
                if (!var13) {
                    _fun71763_ip = 1260;
                    continue _fun71763
                }
            case 1256:
                var12 = 'secondary';
            case 1260:
                var8.variant = var12;
                var8.text = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/native/components/GuildDirectoryRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1372, 1410, 660, 33, 1297, 671, 566, 5619, 4680, 8371, 1311, 1417, 1234, 4903, 7420, 1598, 3943, 8965, 4085, 2]);