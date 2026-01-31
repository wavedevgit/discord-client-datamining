// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var3 = function(arg0) { // Original name: createNormalizedConfigItem, environment: var1
        _fun17165: for (var _fun17165_ip = 0;;) switch (_fun17165_ip) {
            case 0:
                var3 = arg0;
                var1 = 'object';
                var0 = typeof var3;
                if (!(var1 === var0)) {
                    _fun17165_ip = 20;
                    continue _fun17165
                }
            case 14:
                var4 = null;
                if (!(var4 == var3)) {
                    _fun17165_ip = 24;
                    continue _fun17165
                }
            case 20:
                var0 = {};
                _fun17165_ip = 80;
                continue _fun17165;
            case 24:
                var1 = {};
                var2 = var3.initialRouteName;
                var1.initialRouteName = var2;
                var2 = var3.screens;
                var4 = var4 != var2;
                var5 = undefined;
                var2 = undefined;
                if (!var4) {
                    _fun17165_ip = 72;
                    continue _fun17165
                }
            case 54:
                var4 = _closure1_slot2;
                var3 = var3.screens;
                var2 = var4.bind(var5)(var3);
            case 72:
                var1.screens = var2;
                var0 = var1;
            case 80:
                return var0;
        }
    };
    var _closure1_slot1 = var3;
    var3 = function(arg0) { // Original name: createNormalizedConfigs, environment: var1
        var0 = global;
        var2 = var0.Object;
        var1 = var2.entries;
        var0 = arg0;
        var3 = var1.bind(var2)(var0);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            var0 = arg0;
            var5 = _closure1_slot0;
            var4 = undefined;
            var3 = arg1;
            var2 = 2;
            var5 = var5.bind(var4)(var3, var2);
            var2 = 0;
            var2 = var5[var2];
            var3 = 1;
            var3 = var5[var3];
            var1 = _closure1_slot1;
            var1 = var1.bind(var4)(var3);
            var0[var2] = var1;
            return var0;
        };
        var0 = {};
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot2 = var3;
    var1 = function(arg0, arg1) { // Original name: getActionFromState, environment: var1
        _fun17168: for (var _fun17168_ip = 0;;) switch (_fun17168_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                if (var4) {
                    _fun17168_ip = 13;
                    continue _fun17168
                }
            case 9:
                var1 = {};
                _fun17168_ip = 27;
                continue _fun17168;
            case 13:
                var2 = _closure1_slot1;
                var0 = undefined;
                var1 = var2.bind(var0)(var4);
            case 27:
                var0 = var3.index;
                var12 = null;
                if (!(var12 == var0)) {
                    _fun17168_ip = 46;
                    continue _fun17168
                }
            case 38:
                var0 = var3.routes;
                _fun17168_ip = 77;
                continue _fun17168;
            case 46:
                var6 = var3.routes;
                var5 = var6.slice;
                var4 = var3.index;
                var2 = 1;
                var4 = var4 + var2;
                var2 = 0;
                var0 = var5.bind(var6)(var2, var4);
            case 77:
                var2 = var0.length;
                var11 = 0;
                if (!(var11 !== var2)) {
                    _fun17168_ip = 755;
                    continue _fun17168
                }
            case 91:
                var2 = var0.length;
                var10 = 1;
                if (!(var10 === var2)) {
                    _fun17168_ip = 118;
                    continue _fun17168
                }
            case 103:
                var2 = var0[var11];
                var4 = var2.key;
                var2 = undefined;
                if (!(var2 !== var4)) {
                    _fun17168_ip = 203;
                    continue _fun17168
                }
            case 118:
                var4 = var0.length;
                var2 = 2;
                if (!(var2 === var4)) {
                    _fun17168_ip = 186;
                    continue _fun17168
                }
            case 130:
                var2 = var0[var11];
                var4 = var2.key;
                var2 = undefined;
                if (!(var2 === var4)) {
                    _fun17168_ip = 186;
                    continue _fun17168
                }
            case 145:
                var4 = var0[var11];
                var5 = var4.name;
                var6 = var12 == var1;
                var4 = undefined;
                if (var6) {
                    _fun17168_ip = 169;
                    continue _fun17168
                }
            case 163:
                var4 = var1.initialRouteName;
            case 169:
                if (!(var5 === var4)) {
                    _fun17168_ip = 186;
                    continue _fun17168
                }
            case 173:
                var0 = var0[var10];
                var0 = var0.key;
                if (!(var2 !== var0)) {
                    _fun17168_ip = 203;
                    continue _fun17168
                }
            case 186:
                var0 = {};
                var2 = 'RESET';
                var0.type = var2;
                var0.payload = var3;
                return var0;
            case 203:
                var2 = var3.routes;
                var0 = var3.index;
                if (!(var12 == var0)) {
                    _fun17168_ip = 233;
                    continue _fun17168
                }
            case 218:
                var3 = var3.routes;
                var3 = var3.length;
                var0 = var3 - var10;
            case 233:
                var4 = var2[var0];
                var2 = var12 == var4;
                var0 = undefined;
                var9 = undefined;
                if (var2) {
                    _fun17168_ip = 253;
                    continue _fun17168
                }
            case 248:
                var9 = var4.state;
            case 253:
                var2 = var12 == var1;
                var8 = undefined;
                if (var2) {
                    _fun17168_ip = 295;
                    continue _fun17168
                }
            case 262:
                var2 = var1.screens;
                var1 = var12 == var2;
                var8 = undefined;
                if (var1) {
                    _fun17168_ip = 295;
                    continue _fun17168
                }
            case 277:
                var3 = var12 == var4;
                var1 = undefined;
                if (var3) {
                    _fun17168_ip = 291;
                    continue _fun17168
                }
            case 286:
                var1 = var4.name;
            case 291:
                var8 = var2[var1];
            case 295:
                var7 = global;
                var5 = var7.Object;
                var3 = var5.assign;
                var2 = var4.params;
                var1 = {};
                var1 = var3.bind(var5)(var1, var2);
                var2 = undefined;
                if (!var4) {
                    _fun17168_ip = 357;
                    continue _fun17168
                }
            case 327:
                var3 = {};
                var5 = var4.name;
                var3.name = var5;
                var4 = var4.path;
                var3.path = var4;
                var3.params = var1;
                var2 = var3;
            case 357:
                var6 = true;
                var5 = false;
                var4 = 2;
                var3 = var1;
                var1 = undefined;
                if (!var9) {
                    _fun17168_ip = 752;
                    continue _fun17168
                }
            case 375:
                var13 = var9.routes;
                var13 = var13.length;
                if (!(var11 !== var13)) {
                    _fun17168_ip = 778;
                    continue _fun17168
                }
            case 393:
                var13 = var9.index;
                if (!(var12 == var13)) {
                    _fun17168_ip = 410;
                    continue _fun17168
                }
            case 402:
                var13 = var9.routes;
                _fun17168_ip = 436;
                continue _fun17168;
            case 410:
                var16 = var9.routes;
                var15 = var16.slice;
                var14 = var9.index;
                var14 = var14 + var10;
                var13 = var15.bind(var16)(var11, var14);
            case 436:
                var14 = var13.length;
                var14 = var14 - var10;
                var16 = var13[var14];
                var17 = var7.Object;
                var15 = var17.assign;
                var14 = {};
                var14.initial = var0;
                var14.screen = var0;
                var14.params = var0;
                var14.state = var0;
                var14 = var15.bind(var17)(var3, var14);
                var14 = var13.length;
                if (!(var10 === var14)) {
                    _fun17168_ip = 509;
                    continue _fun17168
                }
            case 496:
                var14 = var13[var11];
                var14 = var14.key;
                if (!(var0 !== var14)) {
                    _fun17168_ip = 605;
                    continue _fun17168
                }
            case 509:
                var14 = var13.length;
                if (!(var4 === var14)) {
                    _fun17168_ip = 594;
                    continue _fun17168
                }
            case 518:
                var14 = var13[var11];
                var14 = var14.key;
                if (!(var0 === var14)) {
                    _fun17168_ip = 594;
                    continue _fun17168
                }
            case 531:
                var14 = var13[var11];
                var15 = var14.name;
                var17 = var12 == var8;
                var14 = undefined;
                if (var17) {
                    _fun17168_ip = 555;
                    continue _fun17168
                }
            case 549:
                var14 = var8.initialRouteName;
            case 555:
                if (!(var15 === var14)) {
                    _fun17168_ip = 594;
                    continue _fun17168
                }
            case 559:
                var13 = var13[var10];
                var13 = var13.key;
                if (!(var0 === var13)) {
                    _fun17168_ip = 594;
                    continue _fun17168
                }
            case 572:
                var3.initial = var5;
                var13 = var16.name;
                var3.screen = var13;
                var13 = var8;
                _fun17168_ip = 625;
                continue _fun17168;
            case 594:
                var3.state = var9;
                _fun17168_ip = 752;
                continue _fun17168;
            case 605:
                var3.initial = var6;
                var14 = var16.name;
                var3.screen = var14;
                var13 = var1;
            case 625:
                var14 = var16.state;
                if (var14) {
                    _fun17168_ip = 662;
                    continue _fun17168
                }
            case 633:
                var14 = var16.path;
                var3.path = var14;
                var14 = var16.params;
                var3.params = var14;
                var14 = var3;
                _fun17168_ip = 699;
                continue _fun17168;
            case 662:
                var19 = var7.Object;
                var18 = var19.assign;
                var17 = var16.params;
                var15 = {};
                var15 = var18.bind(var19)(var15, var17);
                var3.params = var15;
                var14 = var3.params;
            case 699:
                var9 = var16.state;
                var17 = var12 == var8;
                var15 = undefined;
                if (var17) {
                    _fun17168_ip = 737;
                    continue _fun17168
                }
            case 713:
                var17 = var8.screens;
                var18 = var12 == var17;
                var15 = undefined;
                if (var18) {
                    _fun17168_ip = 737;
                    continue _fun17168
                }
            case 728:
                var16 = var16.name;
                var15 = var17[var16];
            case 737:
                var8 = var15;
                var3 = var14;
                var1 = var13;
                if (var9) {
                    _fun17168_ip = 375;
                    continue _fun17168
                }
            case 752:
                if (var2) {
                    _fun17168_ip = 759;
                    continue _fun17168
                }
            case 755:
                var1 = undefined;
                return var1;
            case 759:
                var1 = {};
                var3 = 'NAVIGATE';
                var1.type = var3;
                var1.payload = var2;
                return var1;
            case 778:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57]);