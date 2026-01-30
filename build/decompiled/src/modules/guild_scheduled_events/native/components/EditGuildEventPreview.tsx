// modules/guild_scheduled_events/native/components/EditGuildEventPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun65885: for (var _fun65885_ip = 0;;) switch (_fun65885_ip) {
        case 0:
            var4 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var10;
            var _closure1_slot2 = var5;
            var0 = function(arg0) { // Original name: PreviewBody, environment: var1
                _fun65886: for (var _fun65886_ip = 0;;) switch (_fun65886_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = var0.event;
                        var3 = undefined;
                        var _closure2_slot2 = var3;
                        var _closure2_slot3 = var3;
                        var0 = _closure1_slot8;
                        var11 = var0.bind(var3)();
                        var _closure2_slot0 = var11;
                        var0 = var4.channel_id;
                        var _closure2_slot1 = var0;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var5 = 8;
                        var5 = var2[var5];
                        var8 = var1.bind(var3)(var5);
                        var7 = var8.useStateFromStores;
                        var5 = _closure1_slot5;
                        var6 = new Array(1);
                        var6[0] = var5;
                        var5 = new Array(1);
                        var5[0] = var0;
                        var0 = function() { // Environment: var13
                            var2 = _closure1_slot5;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var10 = var7.bind(var8)(var6, var0, var5);
                        var0 = 9;
                        var0 = var2[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.getLocationFromEvent;
                        var1 = var0.bind(var1)(var4);
                        var8 = null;
                        var2 = var8 == var10;
                        var0 = undefined;
                        if (var2) {
                            _fun65886_ip = 143;
                            continue _fun65886
                        }
                    case 138:
                        var0 = var10.name;
                    case 143:
                        var14 = var1;
                        if (!(var8 != var0)) {
                            _fun65886_ip = 153;
                            continue _fun65886
                        }
                    case 150:
                        var14 = var0;
                    case 153:
                        _closure2_slot2 = var14;
                        var6 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var0 = 10;
                        var0 = var12[var0];
                        var2 = var6.bind(var3)(var0);
                        var1 = var2.getEventLocationIconSource;
                        var0 = true;
                        var0 = var1.bind(var2)(var4, var10, var0);
                        _closure2_slot3 = var0;
                        var2 = _closure1_slot7;
                        var1 = _closure1_slot4;
                        var0 = {};
                        var4 = var11.header;
                        var0.style = var4;
                        var7 = _closure1_slot6;
                        var4 = 11;
                        var4 = var12[var4];
                        var4 = var6.bind(var3)(var4);
                        var5 = var4.LegacyText;
                        var4 = {};
                        var15 = var11.headerTitle;
                        var4.style = var15;
                        var15 = 12;
                        var16 = var12[var15];
                        var16 = var6.bind(var3)(var16);
                        var18 = var16.intl;
                        var17 = var18.string;
                        var16 = var12[var15];
                        var16 = var6.bind(var3)(var16);
                        var16 = var16.t;
                        var16 = var16.yBsFE3;
                        var16 = var17.bind(var18)(var16);
                        var4.children = var16;
                        var5 = var7.bind(var3)(var5, var4);
                        var4 = new Array(2);
                        var4[0] = var5;
                        var7 = _closure1_slot6;
                        var5 = 13;
                        var5 = var12[var5];
                        var5 = var6.bind(var3)(var5);
                        var6 = var5.Text;
                        var5 = {};
                        var11 = var11.headerSubtitle;
                        var5.style = var11;
                        var12 = var8 != var10;
                        var11 = undefined;
                        if (!var12) {
                            _fun65886_ip = 447;
                            continue _fun65886
                        }
                    case 358:
                        var16 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var12 = var21[var15];
                        var12 = var16.bind(var3)(var12);
                        var18 = var12.intl;
                        var17 = var18.formatToPlainString;
                        var12 = var21[var15];
                        var12 = var16.bind(var3)(var12);
                        var12 = var12.t;
                        var16 = var12.sxcQPE;
                        var12 = {};
                        var20 = _closure1_slot1;
                        var19 = 14;
                        var19 = var21[var19];
                        var20 = var20.bind(var3)(var19);
                        var19 = {};
                        var19.channel = var10;
                        var19 = var20.bind(var3)(var19);
                        var12.channelName = var19;
                        var11 = var17.bind(var18)(var16, var12);
                    case 447:
                        var5.accessibilityLabel = var11;
                        var11 = 'text-sm/medium';
                        var5.variant = var11;
                        var11 = 'text-default';
                        var5.color = var11;
                        if (!(var8 == var10)) {
                            _fun65886_ip = 529;
                            continue _fun65886
                        }
                    case 473:
                        var12 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var10 = var8[var15];
                        var10 = var12.bind(var3)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var8 = var8[var15];
                        var8 = var12.bind(var3)(var8);
                        var8 = var8.t;
                        var8 = var8.KDPFi9;
                        var8 = var10.bind(var11)(var8);
                        _fun65886_ip = 603;
                        continue _fun65886;
                    case 529:
                        var10 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var11 = var9[var15];
                        var11 = var10.bind(var3)(var11);
                        var12 = var11.intl;
                        var11 = var12.format;
                        var9 = var9[var15];
                        var9 = var10.bind(var3)(var9);
                        var9 = var9.t;
                        var10 = var9.f55NX0;
                        var9 = {};
                        var9.channelName = var14;
                        var13 = function() { // Original name: channelHook, environment: var13
                            _fun65888: for (var _fun65888_ip = 0;;) switch (_fun65888_ip) {
                                case 0:
                                    var4 = _closure1_slot7;
                                    var0 = _closure1_slot3;
                                    var3 = var0.Fragment;
                                    var2 = {};
                                    var8 = _closure1_slot6;
                                    var7 = _closure1_slot4;
                                    var0 = {};
                                    var1 = _closure2_slot0;
                                    var1 = var1.channelContainer;
                                    var0.style = var1;
                                    var1 = _closure2_slot3;
                                    var6 = null;
                                    var1 = var6 != var1;
                                    if (!var1) {
                                        _fun65888_ip = 140;
                                        continue _fun65888
                                    }
                                case 59:
                                    var13 = _closure1_slot6;
                                    var15 = _closure1_slot1;
                                    var16 = _closure1_slot2;
                                    var14 = 15;
                                    var9 = var16[var14];
                                    var12 = undefined;
                                    var10 = var15.bind(var12)(var9);
                                    var9 = {};
                                    var17 = _closure2_slot3;
                                    var9.source = var17;
                                    var14 = var16[var14];
                                    var14 = var15.bind(var12)(var14);
                                    var14 = var14.Sizes;
                                    var14 = var14.EXTRA_SMALL;
                                    var9.size = var14;
                                    var14 = _closure2_slot0;
                                    var14 = var14.channelIcon;
                                    var9.style = var14;
                                    var1 = var13.bind(var12)(var10, var9);
                                case 140:
                                    var0.children = var1;
                                    var1 = undefined;
                                    var7 = var8.bind(var1)(var7, var0);
                                    var0 = new Array(2);
                                    var0[0] = var7;
                                    var9 = _closure1_slot6;
                                    var8 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var7 = 13;
                                    var7 = var10[var7];
                                    var7 = var8.bind(var1)(var7);
                                    var8 = var7.Text;
                                    var7 = {
                                        'accessibilityElementsHidden': true,
                                        'importantForAccessibility': 'no',
                                        'variant': 'text-sm/medium',
                                        'color': 'text-default'
                                    };
                                    var14 = true;
                                    var10 = _closure2_slot2;
                                    var12 = var6 != var10;
                                    var10 = null;
                                    if (!var12) {
                                        _fun65888_ip = 254;
                                        continue _fun65888
                                    }
                                case 218:
                                    var12 = _closure1_slot0;
                                    var13 = _closure1_slot2;
                                    var11 = 16;
                                    var11 = var13[var11];
                                    var13 = var12.bind(var1)(var11);
                                    var12 = var13.guildEventDetailsParser;
                                    var11 = _closure2_slot2;
                                    var10 = var12.bind(var13)(var11, var14);
                                case 254:
                                    var7.children = var10;
                                    var7 = var9.bind(var1)(var8, var7);
                                    var0[1] = var7;
                                    var2.children = var0;
                                    var0 = _closure2_slot2;
                                    var6 = var6 != var0;
                                    var0 = 'preview-body';
                                    if (!var6) {
                                        _fun65888_ip = 293;
                                        continue _fun65888
                                    }
                                case 289:
                                    var0 = _closure2_slot2;
                                case 293:
                                    var0 = var4.bind(var1)(var3, var2, var0);
                                    return var0;
                            }
                        };
                        var9.channelHook = var13;
                        var8 = var11.bind(var12)(var10, var9);
                    case 603:
                        var5.children = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot9 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var12 = 0;
            var6 = var5[var12];
            var3 = arg3;
            var0 = undefined;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot3 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot4 = var3;
            var14 = 2;
            var3 = var5[var14];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var11 = var3.Fonts;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot6 = var6;
            var3 = var3.jsxs;
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {
                'flex': 1,
                'padding': 16,
                'paddingBottom': 0,
                'backgroundColor': null,
                'flexDirection': 'column',
                'height': '100%',
                'overflow': 'visible'
            };
            var9 = 6;
            var13 = var5[var9];
            var13 = var10.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.BACKGROUND_BASE_LOW;
            var8.backgroundColor = var13;
            var13 = 'visible';
            var3.container = var8;
            var15 = 'center';
            var8 = {
                'flexDirection': 'column',
                'alignItems': 'center',
                'justifyContent': 'center'
            };
            var3.centered = var8;
            var8 = {
                'flexGrow': 0,
                'width': '100%'
            };
            var3.centerContainer = var8;
            var8 = {
                'flex': 1,
                'overflow': 'visible'
            };
            var3.flex = var8;
            var8 = {
                'alignItems': 'center',
                'paddingBottom': 24
            };
            var3.header = var8;
            var8 = {
                'fontSize': 24,
                'fontFamily': null,
                'lineHeight': 30,
                'marginTop': 16,
                'marginBottom': 8
            };
            var16 = var11.PRIMARY_BOLD;
            var8.fontFamily = var16;
            var16 = var5[var9];
            var16 = var10.bind(var0)(var16);
            var16 = var16.colors;
            var16 = var16.MOBILE_TEXT_HEADING_PRIMARY;
            var8.color = var16;
            var3.headerTitle = var8;
            var8 = {};
            var8.textAlign = var15;
            var3.headerSubtitle = var8;
            var8 = {
                'padding': 16,
                'backgroundColor': null,
                'marginBottom': 24,
                'borderColor': null,
                'borderWidth': 1,
                'borderRadius': null,
                'shadowOpacity': 0.2,
                'elevation': 2,
                'shadowRadius': 16
            };
            var15 = var5[var9];
            var15 = var10.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.BACKGROUND_SURFACE_HIGH;
            var8.backgroundColor = var15;
            var15 = var5[var9];
            var15 = var10.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.BORDER_SUBTLE;
            var8.borderColor = var15;
            var15 = var5[var9];
            var15 = var10.bind(var0)(var15);
            var15 = var15.radii;
            var15 = var15.sm;
            var8.borderRadius = var15;
            var15 = {
                'height': 8,
                'width': 0
            };
            var8.shadowOffset = var15;
            var8.overflow = var13;
            var3.eventContainer = var8;
            var8 = {
                'flexDirection': 'row',
                'alignItems': 'center',
                'justifyContent': 'center',
                'height': 14
            };
            var3.channelContainer = var8;
            var8 = {
                'tintColor': null,
                'marginRight': 4,
                'height': 14
            };
            var13 = var5[var9];
            var13 = var10.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.TEXT_SUBTLE;
            var8.tintColor = var13;
            var13 = {};
            var15 = 7;
            var15 = var5[var15];
            var16 = var4.bind(var0)(var15);
            var15 = var16.isAndroid;
            var15 = var15.bind(var16)();
            if (!var15) {
                _fun65885_ip = 594;
                continue _fun65885
            }
        case 591:
            var12 = var14;
        case 594:
            var13.translateY = var12;
            var12 = new Array(1);
            var12[0] = var13;
            var8.transform = var12;
            var3.channelIcon = var8;
            var8 = {
                'position': 'absolute',
                'bottom': 16,
                'left': 0,
                'right': 0
            };
            var3.buttonContainer = var8;
            var8 = {
                'paddingBottom': 8,
                'fontSize': 14
            };
            var11 = var11.PRIMARY_MEDIUM;
            var8.fontFamily = var11;
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.RED_400;
            var8.color = var9;
            var3.error = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot8 = var3;
            var3 = 25;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/guild_scheduled_events/native/components/EditGuildEventPreview.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function(arg0) { // Original name: EditGuildEventPreview, environment: var1
                _fun65889: for (var _fun65889_ip = 0;;) switch (_fun65889_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1.guild;
                        var _closure2_slot0 = var0;
                        var2 = var1.initialGuildEvent;
                        var _closure2_slot1 = var2;
                        var5 = var1.guildEvent;
                        var _closure2_slot2 = var5;
                        var6 = var1.isEdit;
                        var _closure2_slot3 = var6;
                        var15 = var1.loading;
                        var20 = var1.error;
                        var1 = var1.onSave;
                        var _closure2_slot4 = var1;
                        var1 = _closure1_slot8;
                        var3 = undefined;
                        var19 = var1.bind(var3)();
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 12;
                        var2 = var8[var1];
                        var2 = var7.bind(var3)(var2);
                        var4 = var2.intl;
                        var2 = var4.string;
                        var1 = var8[var1];
                        var1 = var7.bind(var3)(var1);
                        var1 = var1.t;
                        if (var6) {
                            _fun65889_ip = 138;
                            continue _fun65889
                        }
                    case 125:
                        var6 = var1["60lJ0C"];
                        var17 = var2.bind(var4)(var6);
                        _fun65889_ip = 151;
                        continue _fun65889;
                    case 138:
                        var1 = var1.e5VEcE;
                        var17 = var2.bind(var4)(var1);
                    case 151:
                        var4 = _closure1_slot3;
                        var2 = var4.useMemo;
                        var1 = new Array(2);
                        var1[0] = var5;
                        var0 = var0.id;
                        var1[1] = var0;
                        var0 = function() { // Environment: var16
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.convertToFakeGuildEvent;
                            var1 = _closure2_slot2;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var18 = var2.bind(var4)(var0, var1);
                        var2 = _closure1_slot6;
                        var22 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var0 = 18;
                        var0 = var24[var0];
                        var0 = var22.bind(var3)(var0);
                        var1 = var0.SafeAreaPaddingView;
                        var0 = {};
                        var27 = true;
                        var0.bottom = var27;
                        var4 = var19.container;
                        var0.style = var4;
                        var6 = _closure1_slot7;
                        var5 = _closure1_slot4;
                        var4 = {};
                        var8 = var19.flex;
                        var7 = new Array(2);
                        var7[0] = var8;
                        var8 = var19.centered;
                        var7[1] = var8;
                        var4.style = var7;
                        var9 = _closure1_slot7;
                        var8 = _closure1_slot4;
                        var7 = {};
                        var10 = var19.centerContainer;
                        var7.style = var10;
                        var13 = _closure1_slot7;
                        var11 = _closure1_slot4;
                        var10 = {};
                        var14 = var19.eventContainer;
                        var10.style = var14;
                        var25 = _closure1_slot6;
                        var21 = 19;
                        var14 = var24[var21];
                        var14 = var22.bind(var3)(var14);
                        var23 = var14.GuildEventCardImageHeader;
                        var14 = {};
                        var14.event = var18;
                        var23 = var25.bind(var3)(var23, var14);
                        var14 = new Array(4);
                        var14[0] = var23;
                        var26 = _closure1_slot6;
                        var23 = var24[var21];
                        var23 = var22.bind(var3)(var23);
                        var25 = var23.GuildEventCardHeader;
                        var23 = {};
                        var23.event = var18;
                        var23.isPreview = var27;
                        var23 = var26.bind(var3)(var25, var23);
                        var14[1] = var23;
                        var26 = _closure1_slot6;
                        var23 = var24[var21];
                        var23 = var22.bind(var3)(var23);
                        var25 = var23.GuildEventCardMetaInfo;
                        var23 = {};
                        var23.event = var18;
                        var23 = var26.bind(var3)(var25, var23);
                        var14[2] = var23;
                        var23 = _closure1_slot6;
                        var21 = var24[var21];
                        var21 = var22.bind(var3)(var21);
                        var22 = var21.GuildEventSimpleLocation;
                        var21 = {};
                        var21.event = var18;
                        var21 = var23.bind(var3)(var22, var21);
                        var14[3] = var21;
                        var10.children = var14;
                        var11 = var13.bind(var3)(var11, var10);
                        var10 = new Array(2);
                        var10[0] = var11;
                        var14 = _closure1_slot6;
                        var13 = _closure1_slot9;
                        var11 = {};
                        var11.event = var18;
                        var11 = var14.bind(var3)(var13, var11);
                        var10[1] = var11;
                        var7.children = var10;
                        var8 = var9.bind(var3)(var8, var7);
                        var7 = new Array(2);
                        var7[0] = var8;
                        var10 = _closure1_slot7;
                        var9 = _closure1_slot4;
                        var8 = {};
                        var11 = var19.buttonContainer;
                        var8.style = var11;
                        var13 = null;
                        var11 = var13 != var20;
                        if (!var11) {
                            _fun65889_ip = 621;
                            continue _fun65889
                        }
                    case 560:
                        var18 = _closure1_slot6;
                        var14 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var11 = 11;
                        var11 = var21[var11];
                        var11 = var14.bind(var3)(var11);
                        var14 = var11.LegacyText;
                        var11 = {};
                        var19 = var19.error;
                        var11.style = var19;
                        var19 = var20.getAnyErrorMessage;
                        var19 = var19.bind(var20)();
                        var11.children = var19;
                        var13 = var18.bind(var3)(var14, var11);
                    case 621:
                        var11 = new Array(2);
                        var11[0] = var13;
                        var14 = _closure1_slot6;
                        var13 = _closure1_slot0;
                        var18 = _closure1_slot2;
                        var12 = 20;
                        var12 = var18[var12];
                        var12 = var13.bind(var3)(var12);
                        var13 = var12.Button;
                        var12 = {};
                        var12.text = var17;
                        var17 = 'primary';
                        var12.variant = var17;
                        var16 = function() { // Original name: onPress, environment: var16
                            _fun65891: for (var _fun65891_ip = 0;;) switch (_fun65891_ip) {
                                case 0:
                                    var0 = _closure2_slot2;
                                    var2 = var0.recurrenceRule;
                                    var0 = null;
                                    if (!(var0 != var2)) {
                                        _fun65891_ip = 74;
                                        continue _fun65891
                                    }
                                case 19:
                                    var0 = _closure2_slot3;
                                    if (!var0) {
                                        _fun65891_ip = 74;
                                        continue _fun65891
                                    }
                                case 26:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 21;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var6 = var4.bind(var2)(var3);
                                    var5 = var6.hasScheduleChanges;
                                    var4 = _closure2_slot1;
                                    var3 = _closure2_slot2;
                                    var3 = var5.bind(var6)(var4, var3);
                                    if (var3) {
                                        _fun65891_ip = 86;
                                        continue _fun65891
                                    }
                                case 74:
                                    var3 = _closure2_slot4;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)();
                                    _fun65891_ip = 133;
                                    continue _fun65891;
                                case 86:
                                    var1 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var0 = 22;
                                    var0 = var3[var0];
                                    var2 = var1.bind(var2)(var0);
                                    var1 = var2.openLazy;
                                    var0 = {};
                                    var3 = function() { // Original name: importer, environment: var3
                                        var2 = _closure1_slot0;
                                        var0 = _closure1_slot2;
                                        var1 = 24;
                                        var1 = var0[var1];
                                        var3 = undefined;
                                        var2 = var2.bind(var3)(var1);
                                        var1 = 23;
                                        var1 = var0[var1];
                                        var0 = var0.paths;
                                        var2 = var2.bind(var3)(var1, var0);
                                        var1 = var2.then;
                                        var0 = function(arg0) { // Environment: var0
                                            var1 = arg0;
                                            var1 = var1.default;
                                            var _closure5_slot0 = var1;
                                            var0 = function(arg0) { // Environment: var0
                                                var3 = _closure1_slot6;
                                                var2 = _closure5_slot0;
                                                var1 = {};
                                                var5 = arg0;
                                                var6 = var1;
                                                var0 = copyDataProperties(var6, var5);
                                                var4 = _closure2_slot4;
                                                var0 = 'onConfirm';
                                                var1[var0] = var4;
                                                var0 = undefined;
                                                var0 = var3.bind(var0)(var2, var1);
                                                return var0;
                                            };
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var0.importer = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 133:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var12.onPress = var16;
                        var12.disabled = var15;
                        var12.loading = var15;
                        var12 = var14.bind(var3)(var13, var12);
                        var11[1] = var12;
                        var8.children = var11;
                        var8 = var10.bind(var3)(var9, var8);
                        var7[1] = var8;
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 660, 33, 1297, 671, 478, 566, 8065, 8124, 4838, 1234, 3901, 7838, 4045, 8125, 8064, 4696, 8126, 4043, 8046, 3896, 8145, 1307, 2]);