// modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityTypes;
    var _closure1_slot5 = var3;
    var10 = 4;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginTop': 2,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.cardDetails = var8;
    var8 = {};
    var8.marginRight = var10;
    var3.cardDetailsIcon = var8;
    var8 = {};
    var10 = 6;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_TEXT_DEFAULT;
    var8.color = var10;
    var3.cardDetailsIconColor = var8;
    var8 = {};
    var8.flexShrink = var9;
    var3.cardDetailsText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun102186: for (var _fun102186_ip = 0;;) switch (_fun102186_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.voiceState;
                var _closure2_slot0 = var1;
                var1 = _closure1_slot7;
                var3 = undefined;
                var7 = var1.bind(var3)();
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 7;
                var1 = var9[var1];
                var4 = var5.bind(var3)(var1);
                var2 = var4.useStateFromStores;
                var6 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var2.bind(var4)(var1, var0);
                var1 = _closure1_slot1;
                var0 = 8;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var6 = var0.bind(var3)(var10);
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var7.cardDetails;
                var0.style = var4;
                var4 = 9;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.HappeningNowCardSubtitle;
                var4 = {};
                var7 = var7.cardDetailsText;
                var4.style = var7;
                var7 = 1;
                var4.lineClamp = var7;
                var7 = null;
                var9 = var7 != var10;
                var7 = undefined;
                if (!var9) {
                    _fun102186_ip = 199;
                    continue _fun102186
                }
            case 168:
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 10;
                var8 = var11[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.channel = var10;
                var7 = var9.bind(var3)(var8);
            case 199:
                var4.accessibilityLabel = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.HappeningNowVoiceCardSubtitle = var3;
    var1 = function arg0() {
        _fun102188: for (var _fun102188_ip = 0;;) switch (_fun102188_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.activity;
                var4 = var0.stream;
                var1 = _closure1_slot7;
                var3 = undefined;
                var5 = var1.bind(var3)();
                var1 = null;
                if (!(var1 != var2)) {
                    _fun102188_ip = 56;
                    continue _fun102188
                }
            case 34:
                var7 = var2.type;
                var6 = _closure1_slot5;
                var6 = var6.CUSTOM_STATUS;
                if (!(var7 !== var6)) {
                    _fun102188_ip = 349;
                    continue _fun102188
                }
            case 56:
                if (!(var1 == var4)) {
                    _fun102188_ip = 259;
                    continue _fun102188
                }
            case 63:
                var6 = var1 == var2;
                var4 = undefined;
                if (var6) {
                    _fun102188_ip = 77;
                    continue _fun102188
                }
            case 72:
                var4 = var2.name;
            case 77:
                var6 = var1 == var4;
                var4 = null;
                if (var6) {
                    _fun102188_ip = 257;
                    continue _fun102188
                }
            case 89:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 12;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.bind(var3)(var2);
                if (var6) {
                    _fun102188_ip = 214;
                    continue _fun102188
                }
            case 117:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 13;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.bind(var3)(var2);
                if (!var6) {
                    _fun102188_ip = 164;
                    continue _fun102188
                }
            case 145:
                var6 = var2.details;
                if (!(var1 != var6)) {
                    _fun102188_ip = 164;
                    continue _fun102188
                }
            case 155:
                var6 = var2.state;
                if (!(var1 == var6)) {
                    _fun102188_ip = 171;
                    continue _fun102188
                }
            case 164:
                var6 = var2.name;
                _fun102188_ip = 212;
                continue _fun102188;
            case 171:
                var11 = var2.details;
                var10 = var2.state;
                var7 = global;
                var7 = var7.HermesInternal;
                var9 = var7.concat;
                var8 = '';
                var7 = ' - ';
                var6 = var9.bind(var8)(var11, var7, var10);
            case 212:
                _fun102188_ip = 254;
                continue _fun102188;
            case 214:
                var7 = var2.details;
                if (!(var1 != var7)) {
                    _fun102188_ip = 238;
                    continue _fun102188
                }
            case 224:
                var8 = var2.details;
                var7 = '';
                if (!(var7 === var8)) {
                    _fun102188_ip = 245;
                    continue _fun102188
                }
            case 238:
                var7 = var2.name;
                _fun102188_ip = 251;
                continue _fun102188;
            case 245:
                var7 = var2.details;
            case 251:
                var6 = var7;
            case 254:
                var4 = var6;
            case 257:
                _fun102188_ip = 347;
                continue _fun102188;
            case 259:
                if (!(var1 != var2)) {
                    _fun102188_ip = 289;
                    continue _fun102188
                }
            case 263:
                var7 = var2.type;
                var6 = _closure1_slot5;
                var6 = var6.PLAYING;
                if (!(var7 === var6)) {
                    _fun102188_ip = 289;
                    continue _fun102188
                }
            case 282:
                var6 = var2.name;
                _fun102188_ip = 344;
                continue _fun102188;
            case 289:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 11;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.eXan7B;
                var6 = var8.bind(var9)(var7);
            case 344:
                var4 = var6;
            case 347:
                _fun102188_ip = 381;
                continue _fun102188;
            case 349:
                var6 = var2.state;
                var6 = var1 != var6;
                var1 = null;
                if (!var6) {
                    _fun102188_ip = 378;
                    continue _fun102188
                }
            case 363:
                var6 = var2.state;
                var2 = var6.trim;
                var1 = var2.bind(var6)();
            case 378:
                var4 = var1;
            case 381:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 9;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.HappeningNowCardSubtitle;
                var0 = {};
                var5 = var5.cardDetailsText;
                var0.style = var5;
                var5 = 1;
                var0.lineClamp = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.HappeningNowActivityCardSubtitle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 660, 33, 1297, 671, 566, 4794, 10961, 7946, 1234, 5787, 5723, 2]);