// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardLiveStage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var16 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun101630: for (var _fun101630_ip = 0;;) switch (_fun101630_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.stage;
                var1 = var0.renderingContext;
                var6 = var0.streamingUser;
                var2 = var0.guildId;
                var0 = _closure1_slot9;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var5 = var5.bind(var3)(var0);
                var0 = var5.useLiveStageData;
                var5 = var0.bind(var5)(var12);
                var0 = var5.channel;
                var9 = var5.speakers;
                var10 = var5.friends;
                var5 = null;
                var11 = var5 == var0;
                var8 = undefined;
                if (var11) {
                    _fun101630_ip = 103;
                    continue _fun101630
                }
            case 98:
                var8 = var0.name;
            case 103:
                var0 = 'guild';
                if (!(var0 === var1)) {
                    _fun101630_ip = 125;
                    continue _fun101630
                }
            case 111:
                var1 = var9.length;
                var0 = 0;
                if (!(!(var1 > var0))) {
                    _fun101630_ip = 270;
                    continue _fun101630
                }
            case 125:
                var0 = var10.length;
                var1 = 0;
                if (!(!(var0 > var1))) {
                    _fun101630_ip = 218;
                    continue _fun101630
                }
            case 136:
                var0 = var9.length;
                if (!(var0 > var1)) {
                    _fun101630_ip = 335;
                    continue _fun101630
                }
            case 148:
                var1 = _closure1_slot12;
                var0 = {};
                var11 = var9;
                if (!(var5 != var6)) {
                    _fun101630_ip = 172;
                    continue _fun101630
                }
            case 161:
                var13 = new Array(1);
                var13[0] = var6;
                var11 = var13;
            case 172:
                var0.users = var11;
                if (!(var5 == var6)) {
                    _fun101630_ip = 193;
                    continue _fun101630
                }
            case 181:
                var11 = _closure1_slot10;
                var11 = var11.ON_STAGE;
                _fun101630_ip = 203;
                continue _fun101630;
            case 193:
                var13 = _closure1_slot10;
                var11 = var13.SHARING;
            case 203:
                var0.action = var11;
                var0.guildId = var2;
                var8 = var1.bind(var3)(var0);
                _fun101630_ip = 335;
                continue _fun101630;
            case 218:
                var1 = _closure1_slot12;
                var0 = {};
                var0.users = var10;
                if (!(var5 == var6)) {
                    _fun101630_ip = 245;
                    continue _fun101630
                }
            case 233:
                var10 = _closure1_slot10;
                var10 = var10.LISTENING;
                _fun101630_ip = 255;
                continue _fun101630;
            case 245:
                var11 = _closure1_slot10;
                var10 = var11.WATCHING;
            case 255:
                var0.action = var10;
                var0.guildId = var2;
                var8 = var1.bind(var3)(var0);
                _fun101630_ip = 335;
                continue _fun101630;
            case 270:
                var1 = _closure1_slot12;
                var0 = {};
                if (!(var5 != var6)) {
                    _fun101630_ip = 291;
                    continue _fun101630
                }
            case 280:
                var10 = new Array(1);
                var10[0] = var6;
                var9 = var10;
            case 291:
                var0.users = var9;
                if (!(var5 == var6)) {
                    _fun101630_ip = 312;
                    continue _fun101630
                }
            case 300:
                var5 = _closure1_slot10;
                var5 = var5.ON_STAGE;
                _fun101630_ip = 322;
                continue _fun101630;
            case 312:
                var6 = _closure1_slot10;
                var5 = var6.SHARING;
            case 322:
                var0.action = var5;
                var0.guildId = var2;
                var8 = var1.bind(var3)(var0);
            case 335:
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var4.content;
                var0.style = var4;
                var11 = _closure1_slot7;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 13;
                var4 = var9[var5];
                var4 = var6.bind(var3)(var4);
                var10 = var4.HappeningNowCardHeader;
                var4 = {};
                var13 = 3;
                var4.lineClamp = var13;
                var12 = var12.topic;
                var4.children = var12;
                var10 = var11.bind(var3)(var10, var4);
                var4 = new Array(2);
                var4[0] = var10;
                var7 = _closure1_slot7;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.HappeningNowCardSubtitle;
                var5 = {};
                var9 = 1;
                var5.lineClamp = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var0 = function arg0() {
        _fun101631: for (var _fun101631_ip = 0;;) switch (_fun101631_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.users;
                var2 = var0.action;
                var9 = var0.guildId;
                var5 = var1.length;
                var0 = 0;
                if (!(var0 !== var5)) {
                    _fun101631_ip = 1397;
                    continue _fun101631
                }
            case 33:
                var3 = 1;
                if (!(var3 !== var5)) {
                    _fun101631_ip = 916;
                    continue _fun101631
                }
            case 43:
                var4 = 2;
                if (!(var4 !== var5)) {
                    _fun101631_ip = 483;
                    continue _fun101631
                }
            case 53:
                var5 = var1.length;
                var7 = '';
                var4 = var7;
                if (!(var0 !== var5)) {
                    _fun101631_ip = 481;
                    continue _fun101631
                }
            case 72:
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 18;
                var6 = var10[var6];
                var12 = undefined;
                var11 = var8.bind(var12)(var6);
                var10 = var11.getName;
                var8 = var1[var0];
                var6 = null;
                var11 = var10.bind(var11)(var9, var6, var8);
                var6 = var1.length;
                var10 = var6 - var3;
                var6 = _closure1_slot10;
                var6 = var6.LISTENING;
                if (!(var6 !== var2)) {
                    _fun101631_ip = 412;
                    continue _fun101631
                }
            case 142:
                var6 = _closure1_slot10;
                var6 = var6.WATCHING;
                if (!(var6 !== var2)) {
                    _fun101631_ip = 341;
                    continue _fun101631
                }
            case 159:
                var6 = _closure1_slot10;
                var6 = var6.ON_STAGE;
                if (!(var6 !== var2)) {
                    _fun101631_ip = 267;
                    continue _fun101631
                }
            case 173:
                var6 = _closure1_slot10;
                var6 = var6.SHARING;
                var4 = var7;
                if (!(var6 === var2)) {
                    _fun101631_ip = 481;
                    continue _fun101631
                }
            case 193:
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 17;
                var8 = var14[var6];
                var8 = var7.bind(var12)(var8);
                var13 = var8.intl;
                var8 = var13.formatToPlainString;
                var6 = var14[var6];
                var6 = var7.bind(var12)(var6);
                var6 = var6.t;
                var7 = var6["m+NEcC"];
                var6 = {};
                var6.name = var11;
                var6.count = var10;
                var4 = var8.bind(var13)(var7, var6);
                _fun101631_ip = 481;
                continue _fun101631;
            case 267:
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 17;
                var8 = var14[var6];
                var8 = var7.bind(var12)(var8);
                var13 = var8.intl;
                var8 = var13.formatToPlainString;
                var6 = var14[var6];
                var6 = var7.bind(var12)(var6);
                var6 = var6.t;
                var7 = var6.zRm3ZX;
                var6 = {};
                var6.name = var11;
                var6.count = var10;
                var4 = var8.bind(var13)(var7, var6);
                _fun101631_ip = 481;
                continue _fun101631;
            case 341:
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 17;
                var8 = var14[var6];
                var8 = var7.bind(var12)(var8);
                var13 = var8.intl;
                var8 = var13.formatToPlainString;
                var6 = var14[var6];
                var6 = var7.bind(var12)(var6);
                var6 = var6.t;
                var7 = var6.Iwxee0;
                var6 = {};
                var6.name = var11;
                var6.count = var10;
                var4 = var8.bind(var13)(var7, var6);
                _fun101631_ip = 481;
                continue _fun101631;
            case 412:
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 17;
                var7 = var13[var5];
                var7 = var6.bind(var12)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var5 = var13[var5];
                var5 = var6.bind(var12)(var5);
                var5 = var5.t;
                var6 = var5.CsvyMc;
                var5 = {};
                var5.name = var11;
                var5.count = var10;
                var4 = var7.bind(var8)(var6, var5);
            case 481:
                return var4;
            case 483:
                var13 = var1[var0];
                var7 = var1[var3];
                var5 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 18;
                var6 = var8[var3];
                var11 = undefined;
                var12 = var5.bind(var11)(var6);
                var10 = var12.getName;
                var6 = null;
                var10 = var10.bind(var12)(var9, var6, var13);
                var3 = var8[var3];
                var5 = var5.bind(var11)(var3);
                var3 = var5.getName;
                var8 = var3.bind(var5)(var9, var6, var7);
                var3 = _closure1_slot10;
                var3 = var3.LISTENING;
                if (!(var3 !== var2)) {
                    _fun101631_ip = 844;
                    continue _fun101631
                }
            case 570:
                var3 = _closure1_slot10;
                var3 = var3.WATCHING;
                if (!(var3 !== var2)) {
                    _fun101631_ip = 772;
                    continue _fun101631
                }
            case 587:
                var3 = _closure1_slot10;
                var3 = var3.ON_STAGE;
                if (!(var3 !== var2)) {
                    _fun101631_ip = 697;
                    continue _fun101631
                }
            case 601:
                var3 = _closure1_slot10;
                var5 = var3.SHARING;
                var3 = '';
                if (!(var5 === var2)) {
                    _fun101631_ip = 914;
                    continue _fun101631
                }
            case 622:
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 17;
                var7 = var13[var5];
                var7 = var6.bind(var11)(var7);
                var12 = var7.intl;
                var7 = var12.formatToPlainString;
                var5 = var13[var5];
                var5 = var6.bind(var11)(var5);
                var5 = var5.t;
                var6 = var5.uRjRHT;
                var5 = {};
                var5.name1 = var10;
                var5.name2 = var8;
                var3 = var7.bind(var12)(var6, var5);
                _fun101631_ip = 914;
                continue _fun101631;
            case 697:
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 17;
                var7 = var13[var5];
                var7 = var6.bind(var11)(var7);
                var12 = var7.intl;
                var7 = var12.formatToPlainString;
                var5 = var13[var5];
                var5 = var6.bind(var11)(var5);
                var5 = var5.t;
                var6 = var5.SrTuJ6;
                var5 = {};
                var5.name1 = var10;
                var5.name2 = var8;
                var3 = var7.bind(var12)(var6, var5);
                _fun101631_ip = 914;
                continue _fun101631;
            case 772:
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 17;
                var7 = var13[var5];
                var7 = var6.bind(var11)(var7);
                var12 = var7.intl;
                var7 = var12.formatToPlainString;
                var5 = var13[var5];
                var5 = var6.bind(var11)(var5);
                var5 = var5.t;
                var6 = var5.afUnti;
                var5 = {};
                var5.name1 = var10;
                var5.name2 = var8;
                var3 = var7.bind(var12)(var6, var5);
                _fun101631_ip = 914;
                continue _fun101631;
            case 844:
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 17;
                var6 = var12[var4];
                var6 = var5.bind(var11)(var6);
                var7 = var6.intl;
                var6 = var7.formatToPlainString;
                var4 = var12[var4];
                var4 = var5.bind(var11)(var4);
                var4 = var4.t;
                var5 = var4.GFMcxs;
                var4 = {};
                var4.name1 = var10;
                var4.name2 = var8;
                var3 = var6.bind(var7)(var5, var4);
            case 914:
                return var3;
            case 916:
                var8 = var1[var0];
                var0 = _closure1_slot10;
                var0 = var0.LISTENING;
                if (!(var0 !== var2)) {
                    _fun101631_ip = 1298;
                    continue _fun101631
                }
            case 940:
                var0 = _closure1_slot10;
                var0 = var0.WATCHING;
                if (!(var0 !== var2)) {
                    _fun101631_ip = 1199;
                    continue _fun101631
                }
            case 957:
                var0 = _closure1_slot10;
                var0 = var0.ON_STAGE;
                if (!(var0 !== var2)) {
                    _fun101631_ip = 1097;
                    continue _fun101631
                }
            case 974:
                var0 = _closure1_slot10;
                var1 = var0.SHARING;
                var0 = '';
                if (!(var1 === var2)) {
                    _fun101631_ip = 1395;
                    continue _fun101631
                }
            case 995:
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 17;
                var3 = var11[var1];
                var10 = undefined;
                var3 = var2.bind(var10)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var11[var1];
                var1 = var2.bind(var10)(var1);
                var1 = var1.t;
                var2 = var1["5oa7dX"];
                var1 = {};
                var7 = _closure1_slot1;
                var6 = 18;
                var6 = var11[var6];
                var10 = var7.bind(var10)(var6);
                var7 = var10.getName;
                var6 = null;
                var6 = var7.bind(var10)(var9, var6, var8);
                var1.name = var6;
                var0 = var3.bind(var4)(var2, var1);
                _fun101631_ip = 1395;
                continue _fun101631;
            case 1097:
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 17;
                var3 = var11[var1];
                var10 = undefined;
                var3 = var2.bind(var10)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var11[var1];
                var1 = var2.bind(var10)(var1);
                var1 = var1.t;
                var2 = var1["5uJ3+u"];
                var1 = {};
                var7 = _closure1_slot1;
                var6 = 18;
                var6 = var11[var6];
                var10 = var7.bind(var10)(var6);
                var7 = var10.getName;
                var6 = null;
                var6 = var7.bind(var10)(var9, var6, var8);
                var1.name = var6;
                var0 = var3.bind(var4)(var2, var1);
                _fun101631_ip = 1395;
                continue _fun101631;
            case 1199:
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 17;
                var3 = var11[var1];
                var10 = undefined;
                var3 = var2.bind(var10)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var11[var1];
                var1 = var2.bind(var10)(var1);
                var1 = var1.t;
                var2 = var1.iWY9wg;
                var1 = {};
                var7 = _closure1_slot1;
                var6 = 18;
                var6 = var11[var6];
                var10 = var7.bind(var10)(var6);
                var7 = var10.getName;
                var6 = null;
                var6 = var7.bind(var10)(var9, var6, var8);
                var1.name = var6;
                var0 = var3.bind(var4)(var2, var1);
                _fun101631_ip = 1395;
                continue _fun101631;
            case 1298:
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 17;
                var3 = var10[var1];
                var7 = undefined;
                var3 = var2.bind(var7)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var10[var1];
                var1 = var2.bind(var7)(var1);
                var1 = var1.t;
                var2 = var1.lJXKtO;
                var1 = {};
                var6 = _closure1_slot1;
                var5 = 18;
                var5 = var10[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.getName;
                var5 = null;
                var5 = var6.bind(var7)(var9, var5, var8);
                var1.name = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1395:
                return var0;
            case 1397:
                var0 = '';
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var12 = 0;
    var4 = var6[var12];
    var3 = arg3;
    var0 = undefined;
    var8 = var3.bind(var0)(var4);
    var _closure1_slot3 = var8;
    var11 = 1;
    var3 = var6[var11];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var10 = 2;
    var3 = var6[var10];
    var3 = var5.bind(var0)(var3);
    var18 = var3.HAPPENING_NOW_CONTENT_HEIGHT;
    var15 = var3.HAPPENING_NOW_STAGE_PREVIEW_HEIGHT;
    var17 = var3.HAPPENING_NOW_STAGE_PREVIEW_WIDTH;
    var3 = var3.HappeningNowCardTrackingType;
    var _closure1_slot5 = var3;
    var9 = 3;
    var3 = var6[var9];
    var3 = var5.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot7 = var4;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var6[var3];
    var13 = var5.bind(var0)(var3);
    var4 = var13.createStyles;
    var3 = {};
    var14 = {
        'flexShrink': 1,
        'gap': 2
    };
    var3.content = var14;
    var14 = {
        'marginRight': 12,
        'flexDirection': 'column',
        'justifyContent': 'space-between',
        'height': '100%'
    };
    var14.width = var17;
    var3.stagePreviewContainer = var14;
    var14 = {};
    var14.height = var15;
    var15 = 6;
    var17 = var6[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.unsafe_rawColors;
    var17 = var17.PRIMARY_800;
    var14.backgroundColor = var17;
    var17 = var6[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var14.borderRadius = var17;
    var17 = 'center';
    var14.alignItems = var17;
    var14.paddingTop = var15;
    var3.stagePreviewBackground = var14;
    var14 = {};
    var14.height = var18;
    var18 = var6[var15];
    var18 = var16.bind(var0)(var18);
    var18 = var18.unsafe_rawColors;
    var18 = var18.PRIMARY_800;
    var14.backgroundColor = var18;
    var18 = var6[var15];
    var18 = var16.bind(var0)(var18);
    var18 = var18.radii;
    var18 = var18.sm;
    var14.borderRadius = var18;
    var14.justifyContent = var17;
    var14.alignItems = var17;
    var3.stagePreviewBackgroundNoAudience = var14;
    var14 = {
        'backgroundColor': null,
        'padding': 2,
        'borderRadius': null,
        'position': 'absolute',
        'alignSelf': 'center',
        'bottom': 0
    };
    var17 = var6[var15];
    var17 = var16.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.STAGE_CARD_PILL_BG;
    var14.backgroundColor = var17;
    var15 = var6[var15];
    var15 = var16.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.xl;
    var14.borderRadius = var15;
    var3.avatarStackContainer = var14;
    var3 = var4.bind(var13)(var3);
    var _closure1_slot9 = var3;
    var4 = var8.memo;
    var3 = function(arg0) { // Environment: var7
        _fun101632: for (var _fun101632_ip = 0;;) switch (_fun101632_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.stage;
                var10 = var1.index;
                var _closure2_slot0 = var10;
                var7 = var1.fullwidth;
                var6 = var1.renderingContext;
                var5 = var1.panelVariant;
                var4 = undefined;
                if (!(var5 === var4)) {
                    _fun101632_ip = 46;
                    continue _fun101632
                }
            case 44:
                var5 = false;
            case 46:
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var2 = _closure1_slot9;
                var20 = var2.bind(var4)();
                var3 = var15.channel_id;
                _closure2_slot1 = var3;
                var9 = var15.guild_id;
                _closure2_slot2 = var9;
                var11 = _closure1_slot3;
                var8 = var11.useCallback;
                var2 = new Array(3);
                var2[0] = var3;
                var2[1] = var9;
                var2[2] = var10;
                var0 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var3 = var1[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.track;
                    var3 = _closure1_slot6;
                    var4 = var3.ACTIVITY_CARD_CLICKED;
                    var3 = {};
                    var8 = _closure2_slot0;
                    var3.order = var8;
                    var8 = _closure2_slot2;
                    var3.guild_id = var8;
                    var8 = _closure1_slot5;
                    var8 = var8.GUILD_LIVE_STAGE_CARD;
                    var3.type = var8;
                    var7 = _closure2_slot1;
                    var3.destination_channel_id = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = _closure1_slot0;
                    var2 = 9;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 8;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var3 = var0.default;
                        var2 = _closure2_slot1;
                        var0 = undefined;
                        var1 = true;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var11 = var8.bind(var11)(var0, var2);
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var12 = var2.bind(var4)(var0);
                var0 = var12.useLiveStageData;
                var0 = var0.bind(var12)(var15);
                var25 = var0.speakers;
                var26 = var0.audienceCount;
                var23 = var0.audiencePrefixedFriends;
                var0 = 11;
                var0 = var8[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useCallActivityData;
                var0 = var0.bind(var2)(var3);
                var8 = var0.stream;
                var16 = null;
                if (!(var16 == var8)) {
                    _fun101632_ip = 709;
                    continue _fun101632
                }
            case 208:
                var3 = _closure1_slot8;
                var2 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 13;
                var0 = var12[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var0.onPress = var11;
                var11 = 'large';
                if (!var7) {
                    _fun101632_ip = 249;
                    continue _fun101632
                }
            case 245:
                var11 = 'full';
            case 249:
                var0.width = var11;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 14;
                var11 = var13[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.StageIcon;
                var0.IconComponent = var11;
                var0.panelVariant = var5;
                var13 = _closure1_slot8;
                var12 = _closure1_slot4;
                var11 = {};
                var14 = var20.stagePreviewContainer;
                var11.style = var14;
                var18 = _closure1_slot7;
                var17 = _closure1_slot4;
                var14 = {};
                var24 = 0;
                if (!(var24 !== var26)) {
                    _fun101632_ip = 332;
                    continue _fun101632
                }
            case 324:
                var19 = var20.stagePreviewBackground;
                _fun101632_ip = 338;
                continue _fun101632;
            case 332:
                var19 = var20.stagePreviewBackgroundNoAudience;
            case 338:
                var14.style = var19;
                var19 = var25.length;
                var19 = var19 > var24;
                if (!var19) {
                    _fun101632_ip = 442;
                    continue _fun101632
                }
            case 354:
                var27 = _closure1_slot7;
                var22 = _closure1_slot1;
                var30 = _closure1_slot2;
                var28 = 15;
                var21 = var30[var28];
                var22 = var22.bind(var4)(var21);
                var21 = {};
                var29 = var25[var24];
                var21.user = var29;
                var29 = var25[var24];
                var29 = var29.avatarDecoration;
                var21.avatarDecoration = var29;
                var21.guildId = var9;
                var29 = _closure1_slot0;
                var28 = var30[var28];
                var28 = var29.bind(var4)(var28);
                var28 = var28.AvatarSizes;
                var28 = var28.REFRESH_MEDIUM_32;
                var21.size = var28;
                var19 = var27.bind(var4)(var22, var21);
            case 442:
                var14.children = var19;
                var17 = var18.bind(var4)(var17, var14);
                var14 = new Array(2);
                var14[0] = var17;
                var17 = var26 > var24;
                var16 = null;
                if (!var17) {
                    _fun101632_ip = 628;
                    continue _fun101632
                }
            case 472:
                var19 = _closure1_slot7;
                var18 = _closure1_slot4;
                var17 = {};
                var20 = var20.avatarStackContainer;
                var17.style = var20;
                var22 = _closure1_slot7;
                var21 = _closure1_slot0;
                var27 = _closure1_slot2;
                var20 = 16;
                var20 = var27[var20];
                var20 = var21.bind(var4)(var20);
                var21 = var20.HappeningNowAvatarStack;
                var20 = {};
                var20.users = var23;
                var20.guildId = var9;
                var23 = var25.length;
                var23 = var26 + var23;
                var25 = var25.length;
                var25 = var25 > var24;
                var24 = 0;
                if (!var25) {
                    _fun101632_ip = 559;
                    continue _fun101632
                }
            case 556:
                var24 = 1;
            case 559:
                var23 = var23 - var24;
                var20.userCount = var23;
                var23 = true;
                var20.isStage = var23;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var23 = 15;
                var23 = var25[var23];
                var23 = var24.bind(var4)(var23);
                var23 = var23.AvatarSizes;
                var23 = var23.SIZE_16;
                var20.avatarSize = var23;
                var20 = var22.bind(var4)(var21, var20);
                var17.children = var20;
                var16 = var19.bind(var4)(var18, var17);
            case 628:
                var14[1] = var16;
                var11.children = var14;
                var12 = var13.bind(var4)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var14 = _closure1_slot7;
                var13 = _closure1_slot11;
                var12 = {};
                var12.stage = var15;
                var12.renderingContext = var6;
                var16 = 'guild';
                var15 = undefined;
                if (!(var16 === var6)) {
                    _fun101632_ip = 683;
                    continue _fun101632
                }
            case 680:
                var15 = var9;
            case 683:
                var12.guildId = var15;
                var12 = var14.bind(var4)(var13, var12);
                var11[1] = var12;
                var0.children = var11;
                var0 = var3.bind(var4)(var2, var0);
                _fun101632_ip = 779;
                continue _fun101632;
            case 709:
                var3 = _closure1_slot7;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 12;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.index = var10;
                var10 = var8.ownerId;
                var1.userId = var10;
                var1.guildId = var9;
                var1.stream = var8;
                var1.fullwidth = var7;
                var1.renderingContext = var6;
                var1.panelVariant = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 779:
                return var0;
        }
    };
    var3 = var4.bind(var8)(var3);
    var4 = {};
    var4.LISTENING = var12;
    var8 = 'LISTENING';
    var4[var12] = var8;
    var4.WATCHING = var11;
    var8 = 'WATCHING';
    var4[var11] = var8;
    var4.ON_STAGE = var10;
    var8 = 'ON_STAGE';
    var4[var10] = var8;
    var4.SHARING = var9;
    var8 = 'SHARING';
    var4[var9] = var8;
    var _closure1_slot10 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardLiveStage.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.HappeningNowLiveStageContent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10920, 660, 33, 1297, 671, 795, 7988, 1307, 13260, 13261, 13262, 10921, 4862, 5456, 13270, 1234, 3960, 2]);