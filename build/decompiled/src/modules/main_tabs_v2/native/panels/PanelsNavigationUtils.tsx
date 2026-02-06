// modules/main_tabs_v2/native/panels/PanelsNavigationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/panels/PanelsNavigationUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        _fun100692: for (var _fun100692_ip = 0;;) switch (_fun100692_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var9 = 0;
                var2 = var0[var9];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getRootNavigationRef;
                var3 = var2.bind(var3)();
                var6 = null;
                if (!(var6 != var3)) {
                    _fun100692_ip = 498;
                    continue _fun100692
                }
            case 43:
                var2 = var3.getState;
                var10 = var2.bind(var3)();
                if (!(var6 != var10)) {
                    _fun100692_ip = 498;
                    continue _fun100692
                }
            case 60:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var8 = 1;
                var2 = var2[var8];
                var5 = var4.bind(var0)(var2);
                var4 = var5.coerceMainRoute;
                var2 = var10.routes;
                var2 = var2[var9];
                var2 = var4.bind(var5)(var2);
                if (!(var6 != var2)) {
                    _fun100692_ip = 498;
                    continue _fun100692
                }
            case 108:
                var5 = var2.state;
                if (!(var6 != var5)) {
                    _fun100692_ip = 498;
                    continue _fun100692
                }
            case 120:
                var4 = var5.index;
                if (!(var9 !== var4)) {
                    _fun100692_ip = 498;
                    continue _fun100692
                }
            case 132:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var11 = var7.bind(var0)(var4);
                var7 = var11.coerceChannelRoute;
                var4 = var5.routes;
                var4 = var4[var8];
                var4 = var7.bind(var11)(var4);
                if (!(var6 != var4)) {
                    _fun100692_ip = 498;
                    continue _fun100692
                }
            case 177:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var11 = var7.bind(var0)(var4);
                var7 = var11.coerceTabsRoute;
                var4 = var5.routes;
                var4 = var4[var9];
                var12 = var7.bind(var11)(var4);
                if (!(var6 != var12)) {
                    _fun100692_ip = 498;
                    continue _fun100692
                }
            case 222:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var11 = var7.bind(var0)(var4);
                var7 = var11.coerceGuildsRoute;
                var13 = var12.state;
                var14 = var6 == var13;
                var4 = undefined;
                if (var14) {
                    _fun100692_ip = 288;
                    continue _fun100692
                }
            case 259:
                var13 = var13.routes;
                var14 = var12.state;
                var15 = var6 == var14;
                var12 = undefined;
                if (var15) {
                    _fun100692_ip = 284;
                    continue _fun100692
                }
            case 279:
                var12 = var14.index;
            case 284:
                var4 = var13[var12];
            case 288:
                var4 = var7.bind(var11)(var4);
                if (!(var6 != var4)) {
                    _fun100692_ip = 498;
                    continue _fun100692
                }
            case 300:
                var4 = {};
                var18 = var4;
                var17 = var5;
                var6 = copyDataProperties(var18, var17);
                var6 = var5.index;
                var6 = var6 - var8;
                var7 = 'index';
                var4[var7] = var6;
                var6 = var5.routes;
                var9 = var6[var9];
                var6 = new Array(1);
                var6[0] = var9;
                var11 = var5.routes;
                var9 = var11.slice;
                var5 = 2;
                var17 = var9.bind(var11)(var5);
                var18 = var6;
                var16 = var8;
                var9 = arraySpread(var18, var17, var16);
                var9 = 'routes';
                var4[var9] = var6;
                var2.state = var4;
                var6 = new Array(1);
                var6[0] = var2;
                var4 = var10.routes;
                var2 = var4.slice;
                var17 = var2.bind(var4)(var8);
                var18 = var6;
                var2 = arraySpread(var18, var17, var16);
                var2 = var3.dispatch;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var4.bind(var0)(var1);
                var5 = var1.CommonActions;
                var4 = var5.reset;
                var1 = {};
                var18 = var1;
                var17 = var10;
                var10 = copyDataProperties(var18, var17);
                var1[var9] = var6;
                var6 = var6.length;
                var6 = var6 - var8;
                var1[var7] = var6;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
            case 498:
                return var0;
        }
    };
    var2.convertPortraitToLandscapeScreens = var3;
    var1 = function() {
        _fun100693: for (var _fun100693_ip = 0;;) switch (_fun100693_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var9 = 0;
                var2 = var0[var9];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getRootNavigationRef;
                var3 = var2.bind(var3)();
                var12 = null;
                if (!(var12 != var3)) {
                    _fun100693_ip = 661;
                    continue _fun100693
                }
            case 43:
                var2 = var3.getState;
                var10 = var2.bind(var3)();
                if (!(var12 != var10)) {
                    _fun100693_ip = 661;
                    continue _fun100693
                }
            case 60:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var8 = 1;
                var2 = var2[var8];
                var5 = var4.bind(var0)(var2);
                var4 = var5.coerceMainRoute;
                var2 = var10.routes;
                var2 = var2[var9];
                var2 = var4.bind(var5)(var2);
                if (!(var12 != var2)) {
                    _fun100693_ip = 661;
                    continue _fun100693
                }
            case 108:
                var5 = var2.state;
                if (!(var12 != var5)) {
                    _fun100693_ip = 661;
                    continue _fun100693
                }
            case 120:
                var4 = var10.index;
                if (!(var9 === var4)) {
                    _fun100693_ip = 186;
                    continue _fun100693
                }
            case 129:
                var4 = var5.index;
                if (!(var9 !== var4)) {
                    _fun100693_ip = 665;
                    continue _fun100693
                }
            case 141:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var7 = var6.bind(var0)(var4);
                var6 = var7.coerceChannelRoute;
                var4 = var5.routes;
                var4 = var4[var8];
                var4 = var6.bind(var7)(var4);
                if (!(var12 != var4)) {
                    _fun100693_ip = 663;
                    continue _fun100693
                }
            case 186:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var7 = var6.bind(var0)(var4);
                var6 = var7.coerceTabsRoute;
                var4 = var5.routes;
                var4 = var4[var9];
                var11 = var6.bind(var7)(var4);
                if (!(var12 != var11)) {
                    _fun100693_ip = 661;
                    continue _fun100693
                }
            case 231:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var8];
                var7 = var6.bind(var0)(var4);
                var6 = var7.coerceGuildsRoute;
                var13 = var11.state;
                var14 = var12 == var13;
                var4 = undefined;
                if (var14) {
                    _fun100693_ip = 297;
                    continue _fun100693
                }
            case 268:
                var13 = var13.routes;
                var14 = var11.state;
                var15 = var12 == var14;
                var11 = undefined;
                if (var15) {
                    _fun100693_ip = 293;
                    continue _fun100693
                }
            case 288:
                var11 = var14.index;
            case 293:
                var4 = var13[var11];
            case 297:
                var13 = var6.bind(var7)(var4);
                if (!(var12 != var13)) {
                    _fun100693_ip = 661;
                    continue _fun100693
                }
            case 309:
                var4 = {};
                var19 = var4;
                var18 = var5;
                var6 = copyDataProperties(var19, var18);
                var6 = var5.index;
                var6 = var6 + var8;
                var7 = 'index';
                var4[var7] = var6;
                var6 = var5.routes;
                var9 = var6[var9];
                var6 = new Array(2);
                var6[0] = var9;
                var9 = {};
                var11 = 'channel';
                var9.name = var11;
                var14 = var13.params;
                var15 = var12 == var14;
                var11 = undefined;
                if (var15) {
                    _fun100693_ip = 387;
                    continue _fun100693
                }
            case 382:
                var11 = var14.channelId;
            case 387:
                if (!(var12 == var11)) {
                    _fun100693_ip = 445;
                    continue _fun100693
                }
            case 391:
                var15 = _closure1_slot0;
                var16 = _closure1_slot1;
                var14 = 3;
                var14 = var16[var14];
                var15 = var15.bind(var0)(var14);
                var14 = var15.v4;
                var16 = var14.bind(var15)();
                var14 = global;
                var14 = var14.HermesInternal;
                var15 = var14.concat;
                var14 = 'channel-';
                var11 = var15.bind(var14)(var16);
            case 445:
                var9.key = var11;
                var11 = {};
                var15 = var13.params;
                var16 = var12 == var15;
                var14 = undefined;
                if (var16) {
                    _fun100693_ip = 471;
                    continue _fun100693
                }
            case 466:
                var14 = var15.channelId;
            case 471:
                var11.channelId = var14;
                var13 = var13.params;
                var14 = var12 == var13;
                var12 = undefined;
                if (var14) {
                    _fun100693_ip = 495;
                    continue _fun100693
                }
            case 490:
                var12 = var13.guildId;
            case 495:
                var11.guildId = var12;
                var9.params = var11;
                var6[1] = var9;
                var9 = var5.routes;
                var5 = var9.slice;
                var18 = var5.bind(var9)(var8);
                var5 = 2;
                var19 = var6;
                var17 = var5;
                var9 = arraySpread(var19, var18, var17);
                var9 = 'routes';
                var4[var9] = var6;
                var2.state = var4;
                var6 = new Array(1);
                var6[0] = var2;
                var4 = var10.routes;
                var2 = var4.slice;
                var18 = var2.bind(var4)(var8);
                var19 = var6;
                var17 = var8;
                var2 = arraySpread(var19, var18, var17);
                var2 = var3.dispatch;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var1 = var4.bind(var0)(var1);
                var5 = var1.CommonActions;
                var4 = var5.reset;
                var1 = {};
                var19 = var1;
                var18 = var10;
                var10 = copyDataProperties(var19, var18);
                var1[var9] = var6;
                var6 = var6.length;
                var6 = var6 - var8;
                var1[var7] = var6;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
            case 661:
                return var0;
            case 663:
                return var0;
            case 665:
                return var0;
        }
    };
    var2.convertLandscapeToPortraitScreens = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3922, 3921, 1474, 491, 2]);