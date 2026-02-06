// modules/user_profile/native/UserProfileActivityBadges.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityTypes;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 4
    };
    var3.container = var8;
    var8 = {};
    var9 = 'bold';
    var8.fontWeight = var9;
    var3.bold = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileActivityBadges.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun62628: for (var _fun62628_ip = 0;;) switch (_fun62628_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.activity;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var7 = var0.ActiveTimestampStylingExperiment;
                var5 = var7.useConfig;
                var0 = {};
                var8 = 'active_timestamp';
                var0.location = var8;
                var0 = var5.bind(var7)(var0);
                var11 = var0.enabled;
                var0 = _closure1_slot7;
                var10 = var0.bind(var4)();
                var0 = 12;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useTimestampTickedNow;
                var0 = var0.bind(var2)();
                var3 = var0.now;
                var2 = var1.timestamps;
                var0 = null;
                var5 = var0 == var2;
                var14 = undefined;
                if (var5) {
                    _fun62628_ip = 125;
                    continue _fun62628
                }
            case 120:
                var14 = var2.start;
            case 125:
                if (!(var0 == var14)) {
                    _fun62628_ip = 135;
                    continue _fun62628
                }
            case 129:
                var14 = var1.created_at;
            case 135:
                if (!(var0 != var14)) {
                    _fun62628_ip = 623;
                    continue _fun62628
                }
            case 142:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.bind(var4)(var1);
                if (var2) {
                    _fun62628_ip = 623;
                    continue _fun62628
                }
            case 173:
                var2 = var1.timestamps;
                var5 = var0 == var2;
                var13 = undefined;
                if (var5) {
                    _fun62628_ip = 193;
                    continue _fun62628
                }
            case 188:
                var13 = var2.end;
            case 193:
                var5 = var1.timestamps;
                var7 = var0 == var5;
                var2 = undefined;
                if (var7) {
                    _fun62628_ip = 214;
                    continue _fun62628
                }
            case 208:
                var2 = var5.isCountDown;
            case 214:
                var12 = var0 != var2;
                if (!var12) {
                    _fun62628_ip = 224;
                    continue _fun62628
                }
            case 221:
                var12 = var2;
            case 224:
                var2 = var12;
                if (!var2) {
                    _fun62628_ip = 234;
                    continue _fun62628
                }
            case 230:
                var2 = var0 != var13;
            case 234:
                if (!var2) {
                    _fun62628_ip = 241;
                    continue _fun62628
                }
            case 237:
                var2 = var13 > var3;
            case 241:
                if (!(var2 === var4)) {
                    _fun62628_ip = 247;
                    continue _fun62628
                }
            case 245:
                var2 = false;
            case 247:
                if (var2) {
                    _fun62628_ip = 434;
                    continue _fun62628
                }
            case 253:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)(var1);
                if (var2) {
                    _fun62628_ip = 406;
                    continue _fun62628
                }
            case 284:
                var3 = var1.type;
                var2 = _closure1_slot4;
                var2 = var2.WATCHING;
                if (!(var3 !== var2)) {
                    _fun62628_ip = 378;
                    continue _fun62628
                }
            case 303:
                var2 = var1.type;
                var1 = _closure1_slot4;
                var1 = var1.LISTENING;
                if (!(var2 !== var1)) {
                    _fun62628_ip = 350;
                    continue _fun62628
                }
            case 322:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var7 = var1.GameControllerIcon;
                _fun62628_ip = 376;
                continue _fun62628;
            case 350:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var7 = var1.MusicIcon;
            case 376:
                _fun62628_ip = 404;
                continue _fun62628;
            case 378:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var7 = var1.TvIcon;
            case 404:
                _fun62628_ip = 432;
                continue _fun62628;
            case 406:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var7 = var1.AppsIcon;
            case 432:
                _fun62628_ip = 460;
                continue _fun62628;
            case 434:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var7 = var1.HourglassIcon;
            case 460:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var10.container;
                var1.style = var5;
                var8 = _closure1_slot5;
                var5 = {};
                var9 = 'xxs';
                var5.size = var9;
                var16 = _closure1_slot1;
                var9 = _closure1_slot2;
                var15 = 14;
                var15 = var9[var15];
                var15 = var16.bind(var4)(var15);
                var15 = var15.colors;
                var15 = var15.TEXT_FEEDBACK_POSITIVE;
                var5.color = var15;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = _closure1_slot0;
                var6 = 15;
                var6 = var9[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.ActiveTimestamp;
                var6 = {};
                var9 = {};
                var9.start = var14;
                var9.end = var13;
                var9.isCountDown = var12;
                var6.entry = var9;
                var9 = undefined;
                if (var11) {
                    _fun62628_ip = 597;
                    continue _fun62628
                }
            case 591:
                var9 = var10.bold;
            case 597:
                var6.style = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 623:
                return var0;
        }
    };
    var2.TimestampBadge = var3;
    var3 = function arg0() {
        _fun62629: for (var _fun62629_ip = 0;;) switch (_fun62629_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.activity;
                var0 = _closure1_slot7;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)(var1);
                if (var0) {
                    _fun62629_ip = 284;
                    continue _fun62629
                }
            case 53:
                var2 = var1.party;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun62629_ip = 284;
                    continue _fun62629
                }
            case 68:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 16;
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.getRichGameStateBadgeText;
                var2 = var1.state;
                var1 = var1.party;
                var9 = var3.bind(var6)(var2, var1);
                var1 = var0 == var9;
                var0 = null;
                if (var1) {
                    _fun62629_ip = 282;
                    continue _fun62629
                }
            case 123:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var5.container;
                var1.style = var5;
                var8 = _closure1_slot5;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 17;
                var5 = var10[var5];
                var5 = var7.bind(var4)(var5);
                var6 = var5.GroupIcon;
                var5 = {};
                var12 = 'xxs';
                var5.size = var12;
                var12 = _closure1_slot1;
                var11 = 14;
                var11 = var10[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.colors;
                var11 = var11.TEXT_MUTED;
                var5.color = var11;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 18;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 282:
                return var0;
            case 284:
                var0 = null;
                return var0;
        }
    };
    var2.PartyBadge = var3;
    var1 = function arg0() {
        _fun62630: for (var _fun62630_ip = 0;;) switch (_fun62630_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.activity;
                var1 = _closure1_slot7;
                var4 = undefined;
                var5 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 16;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.getEpisodeBadgeText;
                var6 = var0.assets;
                var0 = null;
                var7 = var0 == var6;
                var1 = undefined;
                if (var7) {
                    _fun62630_ip = 71;
                    continue _fun62630
                }
            case 65:
                var1 = var6.large_text;
            case 71:
                var9 = var2.bind(var3)(var1);
                var1 = var0 == var9;
                var0 = null;
                if (var1) {
                    _fun62630_ip = 247;
                    continue _fun62630
                }
            case 88:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var5.container;
                var1.style = var5;
                var8 = _closure1_slot5;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 19;
                var5 = var10[var5];
                var5 = var7.bind(var4)(var5);
                var6 = var5.TopicsIcon;
                var5 = {};
                var12 = 'xxs';
                var5.size = var12;
                var12 = _closure1_slot1;
                var11 = 14;
                var11 = var10[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.colors;
                var11 = var11.TEXT_MUTED;
                var5.color = var11;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 18;
                var6 = var10[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 247:
                return var0;
        }
    };
    var2.EpisodeBadge = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 7873, 5678, 7800, 7795, 7801, 5332, 7875, 7876, 7877, 671, 7878, 6870, 4856, 3943, 7889, 2]);