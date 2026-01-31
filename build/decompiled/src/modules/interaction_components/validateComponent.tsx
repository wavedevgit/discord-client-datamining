// modules/interaction_components/validateComponent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = function arg0, arg1, arg2() {
        _fun56242: for (var _fun56242_ip = 0;;) switch (_fun56242_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var4 = var0.minValues;
                var9 = var0.maxValues;
                var3 = var0.required;
                var1 = null;
                var5 = var1 == var6;
                var2 = 0;
                var0 = 0;
                if (var5) {
                    _fun56242_ip = 106;
                    continue _fun56242
                }
            case 37:
                var7 = var6.type;
                var10 = _closure1_slot0;
                var5 = _closure1_slot2;
                var8 = var5[var2];
                var5 = undefined;
                var5 = var10.bind(var5)(var8);
                var5 = var5.ComponentType;
                var5 = var5.STRING_SELECT;
                if (!(var7 !== var5)) {
                    _fun56242_ip = 93;
                    continue _fun56242
                }
            case 80:
                var5 = var6.selectedOptions;
                var5 = var5.length;
                _fun56242_ip = 103;
                continue _fun56242;
            case 93:
                var6 = var6.values;
                var5 = var6.length;
            case 103:
                var0 = var5;
            case 106:
                if (!(var2 !== var0)) {
                    _fun56242_ip = 266;
                    continue _fun56242
                }
            case 113:
                if (!(!(var0 < var4))) {
                    _fun56242_ip = 196;
                    continue _fun56242
                }
            case 117:
                var5 = var0 > var9;
                var0 = null;
                if (!var5) {
                    _fun56242_ip = 194;
                    continue _fun56242
                }
            case 126:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 1;
                var7 = var11[var5];
                var6 = undefined;
                var7 = var10.bind(var6)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var5 = var11[var5];
                var5 = var10.bind(var6)(var5);
                var5 = var5.t;
                var6 = var5.LDvfRP;
                var5 = {};
                var5.count = var9;
                var0 = var7.bind(var8)(var6, var5);
            case 194:
                _fun56242_ip = 264;
                continue _fun56242;
            case 196:
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 1;
                var7 = var10[var5];
                var6 = undefined;
                var7 = var9.bind(var6)(var7);
                var8 = var7.intl;
                var7 = var8.formatToPlainString;
                var5 = var10[var5];
                var5 = var9.bind(var6)(var5);
                var5 = var5.t;
                var6 = var5.Jmwzdx;
                var5 = {};
                var5.count = var4;
                var0 = var7.bind(var8)(var6, var5);
            case 264:
                _fun56242_ip = 354;
                continue _fun56242;
            case 266:
                var6 = 'modal';
                var5 = arg2;
                if (!(var6 !== var5)) {
                    _fun56242_ip = 283;
                    continue _fun56242
                }
            case 277:
                var2 = var2 === var4;
                _fun56242_ip = 286;
                continue _fun56242;
            case 283:
                var2 = !var3;
            case 286:
                var1 = null;
                if (var2) {
                    _fun56242_ip = 351;
                    continue _fun56242
                }
            case 291:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 1;
                var3 = var7[var2];
                var5 = undefined;
                var3 = var6.bind(var5)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.t;
                var2 = var2.eJEUvD;
                var1 = var3.bind(var4)(var2);
            case 351:
                var0 = var1;
            case 354:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/validateComponent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun56243: for (var _fun56243_ip = 0;;) switch (_fun56243_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun56243_ip = 63;
                    continue _fun56243
                }
            case 12:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var6 = undefined;
                var3 = var2.bind(var6)(var1);
                var2 = var4.type;
                var1 = var5.type;
                var2 = var2 === var1;
                var1 = 'component type matches state';
                var1 = var3.bind(var6)(var2, var1);
            case 63:
                var7 = var5.type;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 0;
                var2 = var2[var6];
                var3 = undefined;
                var2 = var8.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.BUTTON;
                if (!(var2 !== var7)) {
                    _fun56243_ip = 1340;
                    continue _fun56243
                }
            case 111:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var8.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.STRING_SELECT;
                if (!(var2 !== var7)) {
                    _fun56243_ip = 1324;
                    continue _fun56243
                }
            case 147:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var8.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.USER_SELECT;
                if (!(var2 !== var7)) {
                    _fun56243_ip = 1324;
                    continue _fun56243
                }
            case 183:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var8.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.ROLE_SELECT;
                if (!(var2 !== var7)) {
                    _fun56243_ip = 1324;
                    continue _fun56243
                }
            case 219:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var8.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.MENTIONABLE_SELECT;
                if (!(var2 !== var7)) {
                    _fun56243_ip = 1324;
                    continue _fun56243
                }
            case 255:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var8.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CHANNEL_SELECT;
                if (!(var2 !== var7)) {
                    _fun56243_ip = 1324;
                    continue _fun56243
                }
            case 291:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var8.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.TEXT_INPUT;
                if (!(var2 !== var7)) {
                    _fun56243_ip = 1120;
                    continue _fun56243
                }
            case 327:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var8.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.FILE_UPLOAD;
                if (!(var2 !== var7)) {
                    _fun56243_ip = 853;
                    continue _fun56243
                }
            case 363:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var8.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.RADIO_GROUP;
                if (!(var2 !== var7)) {
                    _fun56243_ip = 767;
                    continue _fun56243
                }
            case 399:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var8.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CHECKBOX_GROUP;
                if (!(var2 !== var7)) {
                    _fun56243_ip = 503;
                    continue _fun56243
                }
            case 432:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var8.bind(var3)(var2);
                var2 = var2.ComponentType;
                var2 = var2.CHECKBOX;
                if (!(var2 !== var7)) {
                    _fun56243_ip = 501;
                    continue _fun56243
                }
            case 465:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 2;
                var2 = var8[var2];
                var8 = var7.bind(var3)(var2);
                var7 = false;
                var2 = 'missing validator for this component';
                var2 = var8.bind(var3)(var7, var2);
                return var3;
            case 501:
                return var0;
            case 503:
                var12 = var5.minValues;
                var13 = var5.maxValues;
                var8 = var5.required;
                var2 = var0 == var4;
                var7 = undefined;
                if (var2) {
                    _fun56243_ip = 540;
                    continue _fun56243
                }
            case 530:
                var2 = var4.values;
                var7 = var2.length;
            case 540:
                var9 = var0 != var7;
                var2 = 0;
                if (!var9) {
                    _fun56243_ip = 552;
                    continue _fun56243
                }
            case 549:
                var2 = var7;
            case 552:
                if (!(var6 !== var2)) {
                    _fun56243_ip = 702;
                    continue _fun56243
                }
            case 559:
                if (!(!(var2 < var12))) {
                    _fun56243_ip = 637;
                    continue _fun56243
                }
            case 563:
                var7 = var2 > var13;
                var2 = null;
                if (!var7) {
                    _fun56243_ip = 635;
                    continue _fun56243
                }
            case 572:
                var9 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 1;
                var10 = var14[var7];
                var10 = var9.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var7 = var14[var7];
                var7 = var9.bind(var3)(var7);
                var7 = var7.t;
                var9 = var7.LDvfRP;
                var7 = {};
                var7.count = var13;
                var2 = var10.bind(var11)(var9, var7);
            case 635:
                _fun56243_ip = 700;
                continue _fun56243;
            case 637:
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 1;
                var10 = var13[var7];
                var10 = var9.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var7 = var13[var7];
                var7 = var9.bind(var3)(var7);
                var7 = var7.t;
                var9 = var7.Jmwzdx;
                var7 = {};
                var7.count = var12;
                var2 = var10.bind(var11)(var9, var7);
            case 700:
                _fun56243_ip = 765;
                continue _fun56243;
            case 702:
                var7 = null;
                if (!var8) {
                    _fun56243_ip = 762;
                    continue _fun56243
                }
            case 707:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 1;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.eJEUvD;
                var7 = var9.bind(var10)(var8);
            case 762:
                var2 = var7;
            case 765:
                return var2;
            case 767:
                var7 = var5.required;
                if (!(var0 != var4)) {
                    _fun56243_ip = 791;
                    continue _fun56243
                }
            case 777:
                var2 = var4.value;
                var8 = var0 != var2;
                var2 = null;
                if (var8) {
                    _fun56243_ip = 851;
                    continue _fun56243
                }
            case 791:
                var2 = null;
                if (!var7) {
                    _fun56243_ip = 851;
                    continue _fun56243
                }
            case 796:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 1;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.eJEUvD;
                var2 = var8.bind(var9)(var7);
            case 851:
                return var2;
            case 853:
                var12 = var5.minValues;
                var13 = var5.maxValues;
                var8 = var5.required;
                var2 = var0 == var4;
                var7 = undefined;
                if (var2) {
                    _fun56243_ip = 891;
                    continue _fun56243
                }
            case 880:
                var2 = var4.uploadIds;
                var7 = var2.length;
            case 891:
                var9 = var0 != var7;
                var2 = 0;
                if (!var9) {
                    _fun56243_ip = 903;
                    continue _fun56243
                }
            case 900:
                var2 = var7;
            case 903:
                if (!(var6 !== var2)) {
                    _fun56243_ip = 1055;
                    continue _fun56243
                }
            case 910:
                if (!(!(var2 < var12))) {
                    _fun56243_ip = 988;
                    continue _fun56243
                }
            case 914:
                var7 = var2 > var13;
                var2 = null;
                if (!var7) {
                    _fun56243_ip = 986;
                    continue _fun56243
                }
            case 923:
                var9 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 1;
                var10 = var14[var7];
                var10 = var9.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var7 = var14[var7];
                var7 = var9.bind(var3)(var7);
                var7 = var7.t;
                var9 = var7.dy6viJ;
                var7 = {};
                var7.maxValues = var13;
                var2 = var10.bind(var11)(var9, var7);
            case 986:
                _fun56243_ip = 1053;
                continue _fun56243;
            case 988:
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 1;
                var10 = var13[var7];
                var10 = var9.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var7 = var13[var7];
                var7 = var9.bind(var3)(var7);
                var7 = var7.t;
                var9 = var7.pmAt62;
                var7 = {};
                var7.minValues = var12;
                var2 = var10.bind(var11)(var9, var7);
            case 1053:
                _fun56243_ip = 1118;
                continue _fun56243;
            case 1055:
                var7 = null;
                if (!var8) {
                    _fun56243_ip = 1115;
                    continue _fun56243
                }
            case 1060:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 1;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.eJEUvD;
                var7 = var9.bind(var10)(var8);
            case 1115:
                var2 = var7;
            case 1118:
                return var2;
            case 1120:
                var12 = var5.minLength;
                var11 = var5.maxLength;
                var7 = var5.required;
                if (!(var0 != var4)) {
                    _fun56243_ip = 1259;
                    continue _fun56243
                }
            case 1142:
                var2 = var4.value;
                var2 = var2.length;
                if (!(var6 !== var2)) {
                    _fun56243_ip = 1259;
                    continue _fun56243
                }
            case 1156:
                var2 = var4.value;
                var2 = var2.length;
                if (!(!(var2 < var12))) {
                    _fun56243_ip = 1189;
                    continue _fun56243
                }
            case 1170:
                var2 = var4.value;
                var2 = var2.length;
                var6 = var2 > var11;
                var2 = null;
                if (!var6) {
                    _fun56243_ip = 1257;
                    continue _fun56243
                }
            case 1189:
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 1;
                var9 = var13[var6];
                var9 = var8.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.formatToPlainString;
                var6 = var13[var6];
                var6 = var8.bind(var3)(var6);
                var6 = var6.t;
                var8 = var6.ONSqYd;
                var6 = {};
                var6.min = var12;
                var6.max = var11;
                var2 = var9.bind(var10)(var8, var6);
            case 1257:
                _fun56243_ip = 1322;
                continue _fun56243;
            case 1259:
                var6 = null;
                if (!var7) {
                    _fun56243_ip = 1319;
                    continue _fun56243
                }
            case 1264:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 1;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.eJEUvD;
                var6 = var8.bind(var9)(var7);
            case 1319:
                var2 = var6;
            case 1322:
                return var2;
            case 1324:
                var2 = _closure1_slot3;
                var1 = arg2;
                var1 = var2.bind(var3)(var5, var4, var1);
                return var1;
            case 1340:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1636, 1234, 44, 2]);