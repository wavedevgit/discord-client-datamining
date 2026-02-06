// modules/oauth2/native/ApplicationDetails.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun48342: for (var _fun48342_ip = 0;;) switch (_fun48342_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.iconComponent;
                var8 = var0.text;
                var0 = _closure1_slot6;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var9.entry;
                var0.style = var4;
                var6 = null;
                var4 = var6 != var7;
                if (!var4) {
                    _fun48342_ip = 73;
                    continue _fun48342
                }
            case 56:
                var4 = {};
                var10 = var9.entryIcon;
                var4.style = var10;
                var6 = var7.bind(var3)(var4);
            case 73:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot4;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 18;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.TextWithIOSLinkWorkaround;
                var5 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var9 = var9.entryText;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'column',
        'gap': 16
    };
    var3.applicationDetails = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8
    };
    var3.entry = var8;
    var8 = {};
    var8.flex = var9;
    var3.entryText = var8;
    var8 = {
        'width': 16,
        'height': 16
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_MUTED;
    var8.tintColor = var9;
    var3.entryIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/oauth2/native/ApplicationDetails.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun48343: for (var _fun48343_ip = 0;;) switch (_fun48343_ip) {
            case 0:
                var1 = arg0;
                var18 = var1.application;
                var9 = var1.scopes;
                var6 = var1.redirectUri;
                var0 = var6;
                var17 = var1.approximateGuildCount;
                var2 = var1.isEmbeddedFlow;
                var8 = var1.disclosures;
                var3 = undefined;
                var19 = undefined;
                var1 = _closure1_slot6;
                var4 = var1.bind(var3)();
                var1 = global;
                var12 = var1.Date;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 8;
                var5 = var10[var5];
                var13 = var7.bind(var3)(var5);
                var7 = var13.extractTimestamp;
                var5 = var18.id;
                var23 = var7.bind(var13)(var5);
                var7 = var12.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var12
                    }
                });
                var24 = var7;
                var5 = new var24[var12](var23, var22);
                var21 = var5 instanceof Object ? var5 : var7;
                var7 = _closure1_slot0;
                var5 = 9;
                var5 = var10[var5];
                var7 = var7.bind(var3)(var5);
                var5 = var7.getSecurityMessage;
                var10 = var5.bind(var7)(var9);
                var5 = null;
                var19 = null;
                if (!(var5 != var6)) {
                    _fun48343_ip = 240;
                    continue _fun48343
                }
            case 155:
                if (var2) {
                    _fun48343_ip = 240;
                    continue _fun48343
                }
            case 158: // try_start_0
                var6 = var1.URL;
                var23 = var0;
                var2 = var6.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var6
                    }
                });
                var24 = var2;
                var1 = new var24[var6](var23, var22);
                var1 = var1 instanceof Object ? var1 : var2;
                var2 = var1.href;
                var1 = var2.split;
                var6 = '/';
                var12 = var1.bind(var2)(var6);
                var7 = var12.slice;
                var2 = 0;
                var1 = 3;
                var2 = var7.bind(var12)(var2, var1);
                var1 = var2.join;
                var19 = var1.bind(var2)(var6);
            case 233: // try_end0
                _fun48343_ip = 240;
                continue _fun48343;
            case 235: // catch_target0
                CatchBlockStart(arg_register = 1);
                var19 = var0;
            case 240:
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var4.applicationDetails;
                var0.style = var4;
                var4 = var19;
                var4 = var5 != var4;
                var6 = null;
                if (!var4) {
                    _fun48343_ip = 380;
                    continue _fun48343
                }
            case 272:
                var12 = _closure1_slot4;
                var7 = _closure1_slot7;
                var4 = {};
                var14 = _closure1_slot0;
                var20 = _closure1_slot2;
                var13 = 10;
                var13 = var20[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.LinkIcon;
                var4.iconComponent = var13;
                var13 = 11;
                var15 = var20[var13];
                var15 = var14.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var13 = var20[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.t;
                var14 = var13["5k5OKD"];
                var13 = {};
                var13.origin = var19;
                var13 = var15.bind(var16)(var14, var13);
                var4.text = var13;
                var6 = var12.bind(var3)(var7, var4);
            case 380:
                var4 = new Array(6);
                var4[0] = var6;
                var7 = _closure1_slot4;
                var14 = _closure1_slot7;
                var6 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var15 = 12;
                var15 = var13[var15];
                var15 = var12.bind(var3)(var15);
                var15 = var15.LockIcon;
                var6.iconComponent = var15;
                var15 = 13;
                var15 = var13[var15];
                var16 = var12.bind(var3)(var15);
                var15 = var16.getApplicationDetailsText;
                var15 = var15.bind(var16)(var18);
                var6.text = var15;
                var6 = var7.bind(var3)(var14, var6);
                var4[1] = var6;
                var7 = _closure1_slot4;
                var6 = {};
                var15 = 14;
                var15 = var13[var15];
                var15 = var12.bind(var3)(var15);
                var15 = var15.ClockIcon;
                var6.iconComponent = var15;
                var18 = 11;
                var15 = var13[var18];
                var15 = var12.bind(var3)(var15);
                var20 = var15.intl;
                var19 = var20.formatToPlainString;
                var15 = var13[var18];
                var15 = var12.bind(var3)(var15);
                var15 = var15.t;
                var16 = var15["+1bjc8"];
                var15 = {};
                var15.date = var21;
                var15 = var19.bind(var20)(var16, var15);
                var6.text = var15;
                var6 = var7.bind(var3)(var14, var6);
                var4[2] = var6;
                var7 = var9.includes;
                var6 = 15;
                var6 = var13[var6];
                var6 = var12.bind(var3)(var6);
                var6 = var6.OAuth2Scopes;
                var6 = var6.BOT;
                var7 = var7.bind(var9)(var6);
                var6 = null;
                if (!var7) {
                    _fun48343_ip = 719;
                    continue _fun48343
                }
            case 605:
                var7 = var5 != var17;
                var6 = null;
                if (!var7) {
                    _fun48343_ip = 719;
                    continue _fun48343
                }
            case 614:
                var12 = _closure1_slot4;
                var9 = _closure1_slot7;
                var7 = {};
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var15 = 16;
                var15 = var13[var15];
                var15 = var14.bind(var3)(var15);
                var15 = var15.RobotIcon;
                var7.iconComponent = var15;
                var15 = var13[var18];
                var15 = var14.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.formatToPlainString;
                var13 = var13[var18];
                var13 = var14.bind(var3)(var13);
                var13 = var13.t;
                var14 = var13.UHGHSP;
                var13 = {};
                var13.guildCount = var17;
                var13 = var15.bind(var16)(var14, var13);
                var7.text = var13;
                var6 = var12.bind(var3)(var9, var7);
            case 719:
                var4[3] = var6;
                var9 = _closure1_slot4;
                var7 = _closure1_slot7;
                var6 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 17;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.ShieldIcon;
                var6.iconComponent = var11;
                var6.text = var10;
                var6 = var9.bind(var3)(var7, var6);
                var4[4] = var6;
                var6 = var5 != var8;
                var5 = null;
                if (!var6) {
                    _fun48343_ip = 804;
                    continue _fun48343
                }
            case 787:
                var7 = var8.map;
                var6 = function(arg0) { // Environment: var6
                    _fun48344: for (var _fun48344_ip = 0;;) switch (_fun48344_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var3 = 5;
                            var4 = var0[var3];
                            var5 = undefined;
                            var7 = var1.bind(var5)(var4);
                            var4 = var7.getTextForDisclosure;
                            var7 = var4.bind(var7)(var6);
                            var0 = var0[var3];
                            var0 = var1.bind(var5)(var0);
                            var0 = var0.ApplicationDisclosure;
                            var0 = var0.IP_LOCATION;
                            if (!(var0 !== var6)) {
                                _fun48344_ip = 137;
                                continue _fun48344
                            }
                        case 64:
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var3];
                            var0 = var1.bind(var5)(var0);
                            var0 = var0.ApplicationDisclosure;
                            var0 = var0.DISPLAYS_ADVERTISEMENTS;
                            var1 = null;
                            if (!(var0 === var6)) {
                                _fun48344_ip = 173;
                                continue _fun48344
                            }
                        case 99:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 7;
                            var3 = var8[var3];
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.EmbedIcon;
                            var0.iconComponent = var3;
                            var1 = var0;
                            _fun48344_ip = 173;
                            continue _fun48344;
                        case 137:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 6;
                            var3 = var8[var3];
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.GlobeEarthIcon;
                            var0.iconComponent = var3;
                            var1 = var0;
                        case 173:
                            var4 = null;
                            var3 = var4 != var1;
                            var0 = null;
                            if (!var3) {
                                _fun48344_ip = 234;
                                continue _fun48344
                            }
                        case 184:
                            var3 = var4 != var7;
                            var0 = null;
                            if (!var3) {
                                _fun48344_ip = 234;
                                continue _fun48344
                            }
                        case 193:
                            var4 = _closure1_slot4;
                            var3 = _closure1_slot7;
                            var2 = {};
                            var2.text = var7;
                            var11 = var2;
                            var10 = var1;
                            var1 = copyDataProperties(var11, var10);
                            var1 = var6.toFixed;
                            var1 = var1.bind(var6)();
                            var0 = var4.bind(var5)(var3, var2, var1);
                        case 234:
                            return var0;
                    }
                };
                var5 = var7.bind(var8)(var6);
            case 804:
                var4[5] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5352, 5447, 5449, 21, 3340, 3256, 1234, 4861, 5451, 3276, 3341, 5452, 5454, 5337, 2]);