// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var3 = function(arg0) { // Original name: propsAndStyles, environment: var1
        _fun48287: for (var _fun48287_ip = 0;;) switch (_fun48287_ip) {
            case 0:
                var5 = arg0;
                var12 = var5.style;
                var0 = var5;
                if (!var12) {
                    _fun48287_ip = 120;
                    continue _fun48287
                }
            case 14:
                var1 = global;
                var4 = var1.Object;
                var3 = var4.assign;
                var6 = var1.Array;
                var2 = var6.isArray;
                var6 = var2.bind(var6)(var12);
                var2 = var12;
                if (!var6) {
                    _fun48287_ip = 111;
                    continue _fun48287
                }
            case 49:
                var6 = var1.Object;
                var8 = var6.assign;
                var7 = var8.apply;
                var6 = var1.Object;
                var10 = new Array(1);
                var1 = {};
                var10[0] = var1;
                var9 = var10.concat;
                var11 = _closure1_slot3;
                var1 = undefined;
                var1 = var11.bind(var1)(var12);
                var1 = var9.bind(var10)(var1);
                var2 = var7.bind(var8)(var6, var1);
            case 111:
                var1 = {};
                var0 = var3.bind(var4)(var1, var2, var5);
            case 120:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = function(arg0) { // Original name: getMarker, environment: var1
        _fun48288: for (var _fun48288_ip = 0;;) switch (_fun48288_ip) {
            case 0:
                var4 = arg0;
                if (var4) {
                    _fun48288_ip = 10;
                    continue _fun48288
                }
            case 6:
                var0 = undefined;
                return var0;
            case 10:
                var3 = var4.match;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 1;
                var1 = var0[var2];
                var0 = undefined;
                var1 = var5.bind(var0)(var1);
                var1 = var1.idPattern;
                var1 = var3.bind(var4)(var1);
                if (!var1) {
                    _fun48288_ip = 59;
                    continue _fun48288
                }
            case 55:
                var0 = var1[var2];
            case 59:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var4 = function(arg0, arg1) { // Original name: extractProps, environment: var1
        _fun48289: for (var _fun48289_ip = 0;;) switch (_fun48289_ip) {
            case 0:
                var16 = arg0;
                var11 = var16.id;
                var18 = var16.opacity;
                var8 = var16.onLayout;
                var10 = var16.clipPath;
                var3 = var16.clipRule;
                var17 = var16.display;
                var9 = var16.mask;
                var6 = var16.filter;
                var0 = var16.marker;
                var14 = var16.markerStart;
                var5 = undefined;
                if (!(var5 === var14)) {
                    _fun48289_ip = 68;
                    continue _fun48289
                }
            case 65:
                var14 = var0;
            case 68:
                var13 = var16.markerMid;
                if (!(var5 === var13)) {
                    _fun48289_ip = 81;
                    continue _fun48289
                }
            case 78:
                var13 = var0;
            case 81:
                var12 = var16.markerEnd;
                if (!(var5 === var12)) {
                    _fun48289_ip = 94;
                    continue _fun48289
                }
            case 91:
                var12 = var0;
            case 94:
                var7 = var16.testID;
                var4 = var16.accessibilityLabel;
                var2 = var16.accessible;
                var0 = {};
                var15 = new Array(0);
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 2;
                var19 = var21[var19];
                var22 = var20.bind(var5)(var19);
                var19 = arg1;
                var19 = var22.bind(var5)(var0, var16, var19);
                var19 = 3;
                var19 = var21[var19];
                var19 = var20.bind(var5)(var19);
                var19 = var19.bind(var5)(var0, var16, var15);
                var19 = 4;
                var19 = var21[var19];
                var19 = var20.bind(var5)(var19);
                var19 = var19.bind(var5)(var0, var16, var15);
                var19 = var16.color;
                if (!var19) {
                    _fun48289_ip = 206;
                    continue _fun48289
                }
            case 195:
                var19 = var16.color;
                var0.color = var19;
            case 206:
                var19 = var15.length;
                if (!var19) {
                    _fun48289_ip = 220;
                    continue _fun48289
                }
            case 214:
                var0.propList = var15;
            case 220:
                var19 = _closure1_slot1;
                var20 = _closure1_slot2;
                var15 = 5;
                var15 = var20[var15];
                var15 = var19.bind(var5)(var15);
                var16 = var15.bind(var5)(var16);
                var15 = null;
                if (!(var15 !== var16)) {
                    _fun48289_ip = 257;
                    continue _fun48289
                }
            case 251:
                var0.matrix = var16;
            case 257:
                if (!(var15 != var18)) {
                    _fun48289_ip = 292;
                    continue _fun48289
                }
            case 261:
                var19 = _closure1_slot1;
                var20 = _closure1_slot2;
                var16 = 6;
                var16 = var20[var16];
                var16 = var19.bind(var5)(var16);
                var16 = var16.bind(var5)(var18);
                var0.opacity = var16;
            case 292:
                if (!(var15 != var17)) {
                    _fun48289_ip = 315;
                    continue _fun48289
                }
            case 296:
                var16 = 'none';
                var15 = undefined;
                if (!(var16 === var17)) {
                    _fun48289_ip = 309;
                    continue _fun48289
                }
            case 306:
                var15 = var16;
            case 309:
                var0.display = var15;
            case 315:
                if (!var8) {
                    _fun48289_ip = 324;
                    continue _fun48289
                }
            case 318:
                var0.onSvgLayout = var8;
            case 324:
                if (!var14) {
                    _fun48289_ip = 342;
                    continue _fun48289
                }
            case 327:
                var8 = _closure1_slot6;
                var8 = var8.bind(var5)(var14);
                var0.markerStart = var8;
            case 342:
                if (!var13) {
                    _fun48289_ip = 360;
                    continue _fun48289
                }
            case 345:
                var8 = _closure1_slot6;
                var8 = var8.bind(var5)(var13);
                var0.markerMid = var8;
            case 360:
                if (!var12) {
                    _fun48289_ip = 378;
                    continue _fun48289
                }
            case 363:
                var8 = _closure1_slot6;
                var8 = var8.bind(var5)(var12);
                var0.markerEnd = var8;
            case 378:
                if (!var11) {
                    _fun48289_ip = 400;
                    continue _fun48289
                }
            case 381:
                var8 = global;
                var8 = var8.String;
                var8 = var8.bind(var5)(var11);
                var0.name = var8;
            case 400:
                if (!var7) {
                    _fun48289_ip = 409;
                    continue _fun48289
                }
            case 403:
                var0.testID = var7;
            case 409:
                if (!var4) {
                    _fun48289_ip = 418;
                    continue _fun48289
                }
            case 412:
                var0.accessibilityLabel = var4;
            case 418:
                if (!var2) {
                    _fun48289_ip = 427;
                    continue _fun48289
                }
            case 421:
                var0.accessible = var2;
            case 427:
                if (!var3) {
                    _fun48289_ip = 455;
                    continue _fun48289
                }
            case 430:
                var2 = _closure1_slot4;
                var4 = var2[var3];
                var2 = 1;
                var3 = 0;
                if (!(var3 === var4)) {
                    _fun48289_ip = 449;
                    continue _fun48289
                }
            case 447:
                var2 = 0;
            case 449:
                var0.clipRule = var2;
            case 455:
                if (!var10) {
                    _fun48289_ip = 546;
                    continue _fun48289
                }
            case 458:
                var4 = var10.match;
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 1;
                var2 = var2[var3];
                var2 = var7.bind(var5)(var2);
                var2 = var2.idPattern;
                var2 = var4.bind(var10)(var2);
                if (var2) {
                    _fun48289_ip = 536;
                    continue _fun48289
                }
            case 498:
                var4 = global;
                var8 = var4.console;
                var7 = var8.warn;
                var4 = 'Invalid `clipPath` prop, expected a clipPath like "#id", but got: "';
                var10 = var4 + var10;
                var4 = '"';
                var4 = var10 + var4;
                var4 = var7.bind(var8)(var4);
                _fun48289_ip = 546;
                continue _fun48289;
            case 536:
                var2 = var2[var3];
                var0.clipPath = var2;
            case 546:
                if (!var9) {
                    _fun48289_ip = 637;
                    continue _fun48289
                }
            case 549:
                var4 = var9.match;
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var3 = 1;
                var2 = var2[var3];
                var2 = var7.bind(var5)(var2);
                var2 = var2.idPattern;
                var2 = var4.bind(var9)(var2);
                if (var2) {
                    _fun48289_ip = 627;
                    continue _fun48289
                }
            case 589:
                var4 = global;
                var8 = var4.console;
                var7 = var8.warn;
                var4 = 'Invalid `mask` prop, expected a mask like "#id", but got: "';
                var9 = var4 + var9;
                var4 = '"';
                var4 = var9 + var4;
                var4 = var7.bind(var8)(var4);
                _fun48289_ip = 637;
                continue _fun48289;
            case 627:
                var2 = var2[var3];
                var0.mask = var2;
            case 637:
                if (!var6) {
                    _fun48289_ip = 728;
                    continue _fun48289
                }
            case 640:
                var3 = var6.match;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = 1;
                var1 = var1[var2];
                var1 = var4.bind(var5)(var1);
                var1 = var1.idPattern;
                var1 = var3.bind(var6)(var1);
                if (var1) {
                    _fun48289_ip = 718;
                    continue _fun48289
                }
            case 680:
                var3 = global;
                var5 = var3.console;
                var4 = var5.warn;
                var3 = 'Invalid `filter` prop, expected a filter like "#id", but got: "';
                var6 = var3 + var6;
                var3 = '"';
                var3 = var6 + var3;
                var3 = var4.bind(var5)(var3);
                _fun48289_ip = 728;
                continue _fun48289;
            case 718:
                var1 = var1[var2];
                var0.filter = var1;
            case 728:
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var5 = var5[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = {
        'evenodd': 0,
        'nonzero': 1
    };
    var _closure1_slot4 = var5;
    var2.default = var4;
    var2.propsAndStyles = var3;
    var3 = function(arg0, arg1) { // Original name: extract, environment: var1
        var3 = _closure1_slot7;
        var1 = _closure1_slot5;
        var2 = undefined;
        var0 = arg1;
        var1 = var1.bind(var2)(var0);
        var0 = arg0;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.extract = var3;
    var1 = function(arg0, arg1) { // Original name: withoutXY, environment: var1
        var3 = _closure1_slot7;
        var1 = global;
        var6 = var1.Object;
        var5 = var6.assign;
        var1 = _closure1_slot5;
        var2 = undefined;
        var0 = arg1;
        var4 = var1.bind(var2)(var0);
        var1 = {};
        var0 = {
            'x': null,
            'y': null
        };
        var1 = var5.bind(var6)(var1, var4, var0);
        var0 = arg0;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.withoutXY = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 5433, 5424, 5434, 5437, 5425, 5423]);