// utils/AvatarUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
        var28 = require;
        var2 = exports;
        var29 = dependencyMap;
        var _closure1_slot0 = var28;
        var0 = metroImportDefault;
        var _closure1_slot1 = var0;
        var _closure1_slot2 = var29;
        var0 = function arg0() {
            _fun16604: for (var _fun16604_ip = 0;;) switch (_fun16604_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1.endpoint;
                    var17 = var1.path;
                    var16 = var1.id;
                    var6 = var1.hash;
                    var13 = var1.size;
                    var2 = var1.lossless;
                    var5 = undefined;
                    if (!(var2 === var5)) {
                        _fun16604_ip = 44;
                        continue _fun16604
                    }
                case 42:
                    var2 = false;
                case 44:
                    var3 = var1.canAnimate;
                    if (!(var3 === var5)) {
                        _fun16604_ip = 56;
                        continue _fun16604
                    }
                case 54:
                    var3 = false;
                case 56:
                    var8 = var1.keepAspectRatio;
                    var12 = var1.format;
                    if (!(var12 === var5)) {
                        _fun16604_ip = 73;
                        continue _fun16604
                    }
                case 71:
                    var12 = null;
                case 73:
                    var11 = var1.canWebP;
                    if (!(var11 === var5)) {
                        _fun16604_ip = 90;
                        continue _fun16604
                    }
                case 83:
                    var11 = _closure1_slot8;
                case 90:
                    var9 = null;
                    if (!(var9 != var16)) {
                        _fun16604_ip = 100;
                        continue _fun16604
                    }
                case 96:
                    if (!(var9 == var6)) {
                        _fun16604_ip = 102;
                        continue _fun16604
                    }
                case 100:
                    return var5;
                case 102:
                    if (!(var9 == var12)) {
                        _fun16604_ip = 148;
                        continue _fun16604
                    }
                case 106:
                    var10 = 'jpg';
                    var1 = var10;
                    if (!var3) {
                        _fun16604_ip = 145;
                        continue _fun16604
                    }
                case 118:
                    var7 = _closure1_slot25;
                    var7 = var7.bind(var5)(var6);
                    var1 = var10;
                    if (!var7) {
                        _fun16604_ip = 145;
                        continue _fun16604
                    }
                case 136:
                    var4 = _closure1_slot30;
                    var1 = var4.bind(var5)(var11);
                case 145:
                    var12 = var1;
                case 148:
                    var1 = var3;
                    if (!var3) {
                        _fun16604_ip = 166;
                        continue _fun16604
                    }
                case 154:
                    var4 = _closure1_slot26;
                    var1 = var4.bind(var5)(var6);
                case 166:
                    if (!var1) {
                        _fun16604_ip = 175;
                        continue _fun16604
                    }
                case 169:
                    var12 = 'mp4';
                case 175:
                    var1 = global;
                    var4 = var1.window;
                    var4 = var4.GLOBAL_ENV;
                    var15 = var4.CDN_HOST;
                    if (!(var9 == var15)) {
                        _fun16604_ip = 249;
                        continue _fun16604
                    }
                case 199:
                    var4 = var1.location;
                    var7 = var4.protocol;
                    var4 = var1.window;
                    var4 = var4.GLOBAL_ENV;
                    var4 = var4.API_ENDPOINT;
                    var4 = var7 + var4;
                    var0 = var0.bind(var5)(var16, var6, var12);
                    var0 = var4 + var0;
                    var7 = var12;
                    _fun16604_ip = 334;
                    continue _fun16604;
                case 249:
                    var10 = 'jpg';
                    var4 = var12;
                    if (!(var10 === var12)) {
                        _fun16604_ip = 278;
                        continue _fun16604
                    }
                case 262:
                    var10 = 'png';
                    if (!var11) {
                        _fun16604_ip = 275;
                        continue _fun16604
                    }
                case 269:
                    var10 = 'webp';
                case 275:
                    var4 = var10;
                case 278:
                    var10 = var1.HermesInternal;
                    var14 = var10.concat;
                    var27 = 'https://';
                    var11 = '/';
                    var19 = '.';
                    var26 = var15;
                    var25 = var11;
                    var24 = var17;
                    var23 = var11;
                    var22 = var16;
                    var21 = var11;
                    var20 = var6;
                    var18 = var4;
                    var0 = var27[var14](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17);
                    var7 = var4;
                case 334:
                    var4 = 'mp4';
                    if (!(var4 !== var7)) {
                        _fun16604_ip = 541;
                        continue _fun16604
                    }
                case 347:
                    var4 = {};
                    if (!(var9 != var13)) {
                        _fun16604_ip = 416;
                        continue _fun16604
                    }
                case 353:
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var10 = 3;
                    var11 = var15[var10];
                    var12 = var14.bind(var5)(var11);
                    var11 = var12.getBestMediaProxySize;
                    var10 = var15[var10];
                    var14 = var14.bind(var5)(var10);
                    var10 = var14.getDevicePixelRatio;
                    var10 = var10.bind(var14)();
                    var10 = var13 * var10;
                    var10 = var11.bind(var12)(var10);
                    var4.size = var10;
                case 416:
                    if (!(var9 != var8)) {
                        _fun16604_ip = 426;
                        continue _fun16604
                    }
                case 420:
                    var4.keep_aspect_ratio = var8;
                case 426:
                    if (!var2) {
                        _fun16604_ip = 439;
                        continue _fun16604
                    }
                case 429:
                    var2 = 'lossless';
                    var4.quality = var2;
                case 439:
                    var2 = 'webp';
                    var2 = var2 === var7;
                    if (!var2) {
                        _fun16604_ip = 455;
                        continue _fun16604
                    }
                case 452:
                    var2 = var3;
                case 455:
                    if (!var2) {
                        _fun16604_ip = 470;
                        continue _fun16604
                    }
                case 458:
                    var3 = _closure1_slot25;
                    var2 = var3.bind(var5)(var6);
                case 470:
                    if (!var2) {
                        _fun16604_ip = 481;
                        continue _fun16604
                    }
                case 473:
                    var2 = true;
                    var4.animated = var2;
                case 481:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 4;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.stringify;
                    var3 = var2.bind(var3)(var4);
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = '?';
                    var1 = var2.bind(var1)(var3);
                    var1 = var0 + var1;
                    return var1;
                case 541:
                    return var0;
            }
        };
        var _closure1_slot10 = var0;
        var20 = function arg0() {
            _fun16605: for (var _fun16605_ip = 0;;) switch (_fun16605_ip) {
                case 0:
                    var0 = arg0;
                    var5 = var0.id;
                    var10 = var0.animated;
                    var9 = var0.size;
                    var12 = var0.forcePNG;
                    var11 = undefined;
                    if (!(var12 === var11)) {
                        _fun16605_ip = 33;
                        continue _fun16605
                    }
                case 31:
                    var12 = false;
                case 33:
                    var4 = undefined;
                    var2 = undefined;
                    var3 = undefined;
                    var6 = undefined;
                    var1 = undefined;
                    var7 = undefined;
                    var8 = 'png';
                    var0 = var8;
                    if (var12) {
                        _fun16605_ip = 95;
                        continue _fun16605
                    }
                case 55:
                    var13 = _closure1_slot8;
                    if (var10) {
                        _fun16605_ip = 76;
                        continue _fun16605
                    }
                case 65:
                    if (!var13) {
                        _fun16605_ip = 74;
                        continue _fun16605
                    }
                case 68:
                    var8 = 'webp';
                case 74:
                    _fun16605_ip = 92;
                    continue _fun16605;
                case 76:
                    var12 = 'gif';
                    if (!var13) {
                        _fun16605_ip = 89;
                        continue _fun16605
                    }
                case 83:
                    var12 = 'webp';
                case 89:
                    var8 = var12;
                case 92:
                    var0 = var8;
                case 95:
                    var4 = var0;
                    var13 = _closure1_slot8;
                    var12 = '';
                    var0 = var12;
                    if (!var13) {
                        _fun16605_ip = 127;
                        continue _fun16605
                    }
                case 115:
                    var0 = var12;
                    if (!var10) {
                        _fun16605_ip = 127;
                        continue _fun16605
                    }
                case 121:
                    var0 = '&animated=true';
                case 127:
                    var2 = var0;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var0 = 3;
                    var10 = var15[var0];
                    var13 = var14.bind(var11)(var10);
                    var10 = var13.getBestMediaProxySize;
                    var0 = var15[var0];
                    var14 = var14.bind(var11)(var0);
                    var0 = var14.getDevicePixelRatio;
                    var0 = var0.bind(var14)();
                    var9 = var9 * var0;
                    var0 = _closure1_slot9;
                    var13 = var10.bind(var13)(var9, var0);
                    var0 = global;
                    var9 = var0.HermesInternal;
                    var10 = var9.concat;
                    var9 = 'size=';
                    var3 = var10.bind(var9)(var13);
                    var6 = false;
                case 215: // try_start_0
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 5;
                    var9 = var13[var9];
                    var9 = var10.bind(var11)(var9);
                    var10 = var9.getForceSdrEmojisStickersConfig;
                    var9 = {};
                    var13 = 'getEmojiURL';
                    var9.location = var13;
                    var9 = var10.bind(var11)(var9);
                    var6 = var9.enabled;
                case 261: // try_end0
                    _fun16605_ip = 265;
                    continue _fun16605;
                case 263: // catch_target0
                    CatchBlockStart(arg_register = 9);
                case 265:
                    var10 = var6;
                    var9 = var12;
                    if (!var10) {
                        _fun16605_ip = 280;
                        continue _fun16605
                    }
                case 274:
                    var9 = '&force_sdr=true';
                case 280:
                    var1 = var9;
                    var9 = var0.window;
                    var9 = var9.GLOBAL_ENV;
                    var10 = var9.CDN_HOST;
                    var9 = null;
                    if (!(var9 == var10)) {
                        _fun16605_ip = 403;
                        continue _fun16605
                    }
                case 307:
                    var9 = var0.location;
                    var10 = var9.protocol;
                    var9 = var0.window;
                    var9 = var9.GLOBAL_ENV;
                    var9 = var9.API_ENDPOINT;
                    var9 = var10 + var9;
                    var13 = _closure1_slot3;
                    var11 = var13.EMOJI;
                    var10 = var5;
                    var8 = var4;
                    var8 = var11.bind(var13)(var10, var8);
                    var7 = var9 + var8;
                    var9 = var7;
                    if (var6) {
                        _fun16605_ip = 378;
                        continue _fun16605
                    }
                case 373:
                    var6 = var9;
                    _fun16605_ip = 401;
                    continue _fun16605;
                case 378:
                    var7 = var0.HermesInternal;
                    var8 = var7.concat;
                    var7 = '?force_sdr=true';
                    var6 = var8.bind(var12)(var9, var7);
                case 401:
                    return var6;
                case 403:
                    var6 = var0.location;
                    var26 = var6.protocol;
                    var6 = var0.window;
                    var6 = var6.GLOBAL_ENV;
                    var24 = var6.CDN_HOST;
                    var22 = var5;
                    var20 = var4;
                    var18 = var3;
                    var17 = var2;
                    var16 = var1;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var25 = '//';
                    var23 = '/emojis/';
                    var21 = '.';
                    var19 = '?';
                    var27 = var12;
                    var0 = var27[var4](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15);
                    return var0;
            }
        };
        var19 = function arg0, arg1() {
            _fun16606: for (var _fun16606_ip = 0;;) switch (_fun16606_ip) {
                case 0:
                    var5 = arg0;
                    var8 = arg1;
                    var0 = arguments[2];
                    var4 = undefined;
                    if (!(var0 === var4)) {
                        _fun16606_ip = 17;
                        continue _fun16606
                    }
                case 15:
                    var0 = false;
                case 17:
                    if (var0) {
                        _fun16606_ip = 29;
                        continue _fun16606
                    }
                case 23:
                    var1 = _closure1_slot6;
                    _fun16606_ip = 33;
                    continue _fun16606;
                case 29:
                    var1 = _closure1_slot7;
                case 33:
                    var6 = null;
                    if (!(var6 == var5)) {
                        _fun16606_ip = 46;
                        continue _fun16606
                    }
                case 39:
                    if (!(var6 != var8)) {
                        _fun16606_ip = 178;
                        continue _fun16606
                    }
                case 46:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 6;
                    var0 = var7[var0];
                    var7 = var3.bind(var4)(var0);
                    var3 = var7.parseInteger;
                    var0 = 0;
                    var3 = var3.bind(var7)(var8, var0);
                    if (!(!(var3 > var0))) {
                        _fun16606_ip = 165;
                        continue _fun16606
                    }
                case 84:
                    if (!(var6 == var5)) {
                        _fun16606_ip = 94;
                        continue _fun16606
                    }
                case 88:
                    var0 = var1[var0];
                    _fun16606_ip = 163;
                    continue _fun16606;
                case 94:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 7;
                    var2 = var7[var2];
                    var2 = var6.bind(var4)(var2);
                    var5 = var2.bind(var4)(var5);
                    var4 = var5.shiftRight;
                    var2 = 22;
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.mod;
                    var2 = var1.length;
                    var4 = var4.bind(var5)(var2);
                    var2 = var4.toJSNumber;
                    var2 = var2.bind(var4)();
                    var0 = var1[var2];
                case 163:
                    _fun16606_ip = 176;
                    continue _fun16606;
                case 165:
                    var2 = 5;
                    var2 = var3 % var2;
                    var0 = var1[var2];
                case 176:
                    return var0;
                case 178:
                    var0 = 0;
                    var0 = var1[var0];
                    return var0;
            }
        };
        var _closure1_slot11 = var19;
        var0 = function arg0() {
            _fun16607: for (var _fun16607_ip = 0;;) switch (_fun16607_ip) {
                case 0:
                    var0 = arg0;
                    var7 = arguments[1];
                    var8 = arguments[2];
                    var6 = arguments[3];
                    var5 = arguments[4];
                    var10 = var0.id;
                    var9 = var0.avatar;
                    var3 = var0.discriminator;
                    var0 = var0.bot;
                    var4 = undefined;
                    if (!(var7 === var4)) {
                        _fun16607_ip = 46;
                        continue _fun16607
                    }
                case 44:
                    var7 = false;
                case 46:
                    if (!(var8 === var4)) {
                        _fun16607_ip = 57;
                        continue _fun16607
                    }
                case 50:
                    var8 = _closure1_slot4;
                case 57:
                    if (!(var6 === var4)) {
                        _fun16607_ip = 63;
                        continue _fun16607
                    }
                case 61:
                    var6 = null;
                case 63:
                    if (!(var5 === var4)) {
                        _fun16607_ip = 74;
                        continue _fun16607
                    }
                case 67:
                    var5 = _closure1_slot8;
                case 74:
                    if (!var0) {
                        _fun16607_ip = 134;
                        continue _fun16607
                    }
                case 77:
                    var2 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var0 = 1;
                    var0 = var11[var0];
                    var0 = var2.bind(var4)(var0);
                    var0 = var0.default;
                    var0 = var0.BOT_AVATARS;
                    var0 = var0[var9];
                    if (var0) {
                        _fun16607_ip = 212;
                        continue _fun16607
                    }
                case 118:
                    var2 = null;
                    if (!(var2 == var9)) {
                        _fun16607_ip = 134;
                        continue _fun16607
                    }
                case 124:
                    var2 = '0000';
                    if (!(var2 !== var3)) {
                        _fun16607_ip = 200;
                        continue _fun16607
                    }
                case 134:
                    var3 = _closure1_slot10;
                    var2 = {};
                    var11 = _closure1_slot3;
                    var11 = var11.AVATAR;
                    var2.endpoint = var11;
                    var11 = 'avatars';
                    var2.path = var11;
                    var2.id = var10;
                    var2.hash = var9;
                    var2.size = var8;
                    var2.canAnimate = var7;
                    var2.format = var6;
                    var2.canWebP = var5;
                    var2 = var3.bind(var4)(var2);
                    return var2;
                case 200:
                    var2 = _closure1_slot6;
                    var1 = 0;
                    var1 = var2[var1];
                    return var1;
                case 212:
                    return var0;
            }
        };
        var _closure1_slot12 = var0;
        var18 = function arg0() {
            _fun16608: for (var _fun16608_ip = 0;;) switch (_fun16608_ip) {
                case 0:
                    var1 = arg0;
                    var7 = arguments[1];
                    var6 = arguments[2];
                    var4 = arguments[3];
                    var3 = arguments[4];
                    var5 = undefined;
                    if (!(var7 === var5)) {
                        _fun16608_ip = 23;
                        continue _fun16608
                    }
                case 21:
                    var7 = false;
                case 23:
                    if (!(var6 === var5)) {
                        _fun16608_ip = 34;
                        continue _fun16608
                    }
                case 27:
                    var6 = _closure1_slot4;
                case 34:
                    if (!(var4 === var5)) {
                        _fun16608_ip = 40;
                        continue _fun16608
                    }
                case 38:
                    var4 = null;
                case 40:
                    if (!(var3 === var5)) {
                        _fun16608_ip = 51;
                        continue _fun16608
                    }
                case 44:
                    var3 = _closure1_slot8;
                case 51:
                    var0 = _closure1_slot12;
                    var13 = undefined;
                    var12 = var1;
                    var11 = var7;
                    var10 = var6;
                    var9 = var4;
                    var8 = var3;
                    var0 = var13[var0](var12, var11, var10, var9, var8, var7);
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun16608_ip = 113;
                        continue _fun16608
                    }
                case 85:
                    var4 = _closure1_slot11;
                    var3 = var1.id;
                    var2 = var1.discriminator;
                    var1 = var1.isProvisional;
                    var0 = var4.bind(var5)(var3, var2, var1);
                case 113:
                    return var0;
            }
        };
        var _closure1_slot13 = var18;
        var17 = function arg0() {
            _fun16609: for (var _fun16609_ip = 0;;) switch (_fun16609_ip) {
                case 0:
                    var0 = arg0;
                    var12 = var0.guildId;
                    var9 = var0.userId;
                    var7 = var0.avatar;
                    var6 = var0.canAnimate;
                    var5 = undefined;
                    if (!(var6 === var5)) {
                        _fun16609_ip = 33;
                        continue _fun16609
                    }
                case 31:
                    var6 = false;
                case 33:
                    var11 = var0.size;
                    if (!(var11 === var5)) {
                        _fun16609_ip = 49;
                        continue _fun16609
                    }
                case 42:
                    var11 = _closure1_slot4;
                case 49:
                    var4 = var0.canWebP;
                    if (!(var4 === var5)) {
                        _fun16609_ip = 66;
                        continue _fun16609
                    }
                case 59:
                    var4 = _closure1_slot8;
                case 66:
                    var13 = 'jpg';
                    var3 = var13;
                    if (!var6) {
                        _fun16609_ip = 105;
                        continue _fun16609
                    }
                case 78:
                    var1 = _closure1_slot25;
                    var1 = var1.bind(var5)(var7);
                    var3 = var13;
                    if (!var1) {
                        _fun16609_ip = 105;
                        continue _fun16609
                    }
                case 96:
                    var0 = _closure1_slot30;
                    var3 = var0.bind(var5)(var4);
                case 105:
                    var0 = global;
                    var1 = var0.window;
                    var1 = var1.GLOBAL_ENV;
                    var10 = var1.CDN_HOST;
                    var1 = null;
                    if (!(var1 == var10)) {
                        _fun16609_ip = 206;
                        continue _fun16609
                    }
                case 131:
                    var1 = var0.location;
                    var2 = var1.protocol;
                    var1 = var0.window;
                    var1 = var1.GLOBAL_ENV;
                    var1 = var1.API_ENDPOINT;
                    var2 = var2 + var1;
                    var8 = _closure1_slot3;
                    var1 = var8.GUILD_MEMBER_AVATAR;
                    var18 = var8;
                    var17 = var12;
                    var16 = var9;
                    var15 = var7;
                    var14 = var3;
                    var1 = var18[var1](var17, var16, var15, var14, var13);
                    var1 = var2 + var1;
                    var8 = var3;
                    _fun16609_ip = 287;
                    continue _fun16609;
                case 206:
                    var2 = var3;
                    if (!(var13 === var3)) {
                        _fun16609_ip = 229;
                        continue _fun16609
                    }
                case 213:
                    var3 = 'png';
                    if (!var4) {
                        _fun16609_ip = 226;
                        continue _fun16609
                    }
                case 220:
                    var3 = 'webp';
                case 226:
                    var2 = var3;
                case 229:
                    var4 = _closure1_slot3;
                    var3 = var4.GUILD_MEMBER_AVATAR;
                    var18 = var4;
                    var17 = var12;
                    var16 = var9;
                    var15 = var7;
                    var14 = var2;
                    var9 = var18[var3](var17, var16, var15, var14, var13);
                    var3 = var0.HermesInternal;
                    var4 = var3.concat;
                    var3 = 'https://';
                    var1 = var4.bind(var3)(var10, var9);
                    var8 = var2;
                case 287:
                    var4 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 3;
                    var9 = var13[var3];
                    var10 = var12.bind(var5)(var9);
                    var9 = var10.getBestMediaProxySize;
                    var3 = var13[var3];
                    var12 = var12.bind(var5)(var3);
                    var3 = var12.getDevicePixelRatio;
                    var3 = var3.bind(var12)();
                    var3 = var11 * var3;
                    var3 = var9.bind(var10)(var3);
                    var4.size = var3;
                    var3 = 'webp';
                    var3 = var3 === var8;
                    if (!var3) {
                        _fun16609_ip = 366;
                        continue _fun16609
                    }
                case 363:
                    var3 = var6;
                case 366:
                    if (!var3) {
                        _fun16609_ip = 378;
                        continue _fun16609
                    }
                case 369:
                    var6 = _closure1_slot25;
                    var3 = var6.bind(var5)(var7);
                case 378:
                    if (!var3) {
                        _fun16609_ip = 389;
                        continue _fun16609
                    }
                case 381:
                    var3 = true;
                    var4.animated = var3;
                case 389:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 4;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.stringify;
                    var3 = var2.bind(var3)(var4);
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var0 = '?';
                    var0 = var2.bind(var0)(var3);
                    var0 = var1 + var0;
                    return var0;
            }
        };
        var _closure1_slot14 = var17;
        var16 = function arg0() {
            _fun16610: for (var _fun16610_ip = 0;;) switch (_fun16610_ip) {
                case 0:
                    var0 = arg0;
                    var4 = arguments[1];
                    var7 = var0.userId;
                    var6 = var0.avatar;
                    var5 = var0.guildId;
                    var3 = undefined;
                    if (!(var4 === var3)) {
                        _fun16610_ip = 30;
                        continue _fun16610
                    }
                case 28:
                    var4 = false;
                case 30:
                    var0 = null;
                    var1 = var0 == var6;
                    if (var1) {
                        _fun16610_ip = 71;
                        continue _fun16610
                    }
                case 39:
                    var2 = _closure1_slot14;
                    var1 = {};
                    var1.userId = var7;
                    var1.avatar = var6;
                    var1.guildId = var5;
                    var1.canAnimate = var4;
                    var0 = var2.bind(var3)(var1);
                case 71:
                    return var0;
            }
        };
        var _closure1_slot15 = var16;
        var15 = function arg0, arg1() {
            _fun16611: for (var _fun16611_ip = 0;;) switch (_fun16611_ip) {
                case 0:
                    var0 = arg0;
                    var6 = arg1;
                    var5 = arguments[2];
                    var3 = undefined;
                    if (!(var5 === var3)) {
                        _fun16611_ip = 17;
                        continue _fun16611
                    }
                case 15:
                    var5 = false;
                case 17:
                    var2 = _closure1_slot15;
                    var2 = var2.bind(var3)(var0, var5);
                    var4 = null;
                    if (!(var4 == var2)) {
                        _fun16611_ip = 55;
                        continue _fun16611
                    }
                case 36:
                    var4 = var6.getAvatarSource;
                    var0 = var0.guildId;
                    var0 = var4.bind(var6)(var0, var5);
                    _fun16611_ip = 64;
                    continue _fun16611;
                case 55:
                    var1 = _closure1_slot28;
                    var0 = var1.bind(var3)(var2);
                case 64:
                    return var0;
            }
        };
        var14 = function arg0() {
            _fun16612: for (var _fun16612_ip = 0;;) switch (_fun16612_ip) {
                case 0:
                    var0 = arg0;
                    var12 = var0.id;
                    var7 = var0.banner;
                    var6 = var0.canAnimate;
                    var11 = var0.size;
                    var1 = null;
                    if (!(var1 == var7)) {
                        _fun16612_ip = 35;
                        continue _fun16612
                    }
                case 31:
                    var0 = undefined;
                    return var0;
                case 35:
                    var0 = global;
                    var2 = var0.window;
                    var2 = var2.GLOBAL_ENV;
                    var10 = var2.CDN_HOST;
                    var5 = 'png';
                    var8 = var5;
                    if (!var6) {
                        _fun16612_ip = 98;
                        continue _fun16612
                    }
                case 65:
                    var3 = _closure1_slot25;
                    var4 = undefined;
                    var3 = var3.bind(var4)(var7);
                    var8 = var5;
                    if (!var3) {
                        _fun16612_ip = 98;
                        continue _fun16612
                    }
                case 85:
                    var3 = _closure1_slot30;
                    var2 = _closure1_slot8;
                    var8 = var3.bind(var4)(var2);
                case 98:
                    if (!(var1 == var10)) {
                        _fun16612_ip = 162;
                        continue _fun16612
                    }
                case 102:
                    var1 = var0.location;
                    var2 = var1.protocol;
                    var1 = var0.window;
                    var1 = var1.GLOBAL_ENV;
                    var1 = var1.API_ENDPOINT;
                    var2 = var2 + var1;
                    var3 = _closure1_slot3;
                    var1 = var3.USER_BANNER;
                    var1 = var1.bind(var3)(var12, var7, var8);
                    var1 = var2 + var1;
                    _fun16612_ip = 209;
                    continue _fun16612;
                case 162:
                    var2 = var0.HermesInternal;
                    var9 = var2.concat;
                    var21 = 'https://';
                    var19 = '/banners/';
                    var17 = '/';
                    var15 = '.';
                    var20 = var10;
                    var18 = var12;
                    var16 = var7;
                    var14 = var8;
                    var1 = var21[var9](var20, var19, var18, var17, var16, var15, var14, var13);
                case 209:
                    var4 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 3;
                    var9 = var13[var3];
                    var5 = undefined;
                    var10 = var12.bind(var5)(var9);
                    var9 = var10.getBestMediaProxySize;
                    var3 = var13[var3];
                    var12 = var12.bind(var5)(var3);
                    var3 = var12.getDevicePixelRatio;
                    var3 = var3.bind(var12)();
                    var3 = var11 * var3;
                    var3 = var9.bind(var10)(var3);
                    var4.size = var3;
                    var3 = 'webp';
                    var3 = var3 === var8;
                    if (!var3) {
                        _fun16612_ip = 290;
                        continue _fun16612
                    }
                case 287:
                    var3 = var6;
                case 290:
                    if (!var3) {
                        _fun16612_ip = 302;
                        continue _fun16612
                    }
                case 293:
                    var6 = _closure1_slot25;
                    var3 = var6.bind(var5)(var7);
                case 302:
                    if (!var3) {
                        _fun16612_ip = 313;
                        continue _fun16612
                    }
                case 305:
                    var3 = true;
                    var4.animated = var3;
                case 313:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 4;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.stringify;
                    var3 = var2.bind(var3)(var4);
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var0 = '?';
                    var0 = var2.bind(var0)(var3);
                    var0 = var1 + var0;
                    return var0;
            }
        };
        var13 = function arg0() {
            _fun16613: for (var _fun16613_ip = 0;;) switch (_fun16613_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.avatarDecoration;
                    var10 = var0.size;
                    var7 = var0.canAnimate;
                    var0 = undefined;
                    if (!(var7 === var0)) {
                        _fun16613_ip = 28;
                        continue _fun16613
                    }
                case 26:
                    var7 = false;
                case 28:
                    var3 = null;
                    if (!(var3 != var1)) {
                        _fun16613_ip = 455;
                        continue _fun16613
                    }
                case 37:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 8;
                    var2 = var6[var2];
                    var5 = var5.bind(var0)(var2);
                    var2 = var5.isAvatarDecorationExpired;
                    var2 = var2.bind(var5)(var1);
                    if (var2) {
                        _fun16613_ip = 455;
                        continue _fun16613
                    }
                case 77:
                    var1 = var1.asset;
                    if (!(var3 != var1)) {
                        _fun16613_ip = 455;
                        continue _fun16613
                    }
                case 90:
                    var5 = /^data:/;
                    var2 = var5.test;
                    var2 = var2.bind(var5)(var1);
                    if (var2) {
                        _fun16613_ip = 453;
                        continue _fun16613
                    }
                case 120:
                    var2 = global;
                    var5 = var2.window;
                    var5 = var5.GLOBAL_ENV;
                    var11 = var5.CDN_HOST;
                    var12 = var5.API_ENDPOINT;
                    var6 = _closure1_slot3;
                    var5 = var6.AVATAR_DECORATION_PRESETS;
                    var9 = var5.bind(var6)(var1);
                    var6 = /^blob:https?:\\/\\ / [ ^ \\/]+\\/ / i;
                        var5 = var6.test;
                        var5 = var5.bind(var6)(var1);
                        if (var5) {
                            _fun16613_ip = 451;
                            continue _fun16613
                        }
                        case 191:
                        if (!(var3 == var11)) {
                            _fun16613_ip = 257;
                            continue _fun16613
                        }
                        case 195:
                        var6 = var2.URL;
                        var3 = var2.location;
                        var8 = var3.protocol;
                        var3 = var2.HermesInternal;
                        var5 = var3.concat;
                        var3 = '';
                        var15 = var5.bind(var3)(var8, var12, var9);
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var6
                            }
                        });
                        var16 = var5;
                        var3 = new var16[var6](var15, var14);
                        var3 = var3 instanceof Object ? var3 : var5;
                        _fun16613_ip = 306;
                        continue _fun16613;
                        case 257:
                        var8 = var2.URL;
                        var5 = var2.HermesInternal;
                        var6 = var5.concat;
                        var5 = 'https://';
                        var15 = var6.bind(var5)(var11, var9);
                        var6 = var8.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var8
                            }
                        });
                        var16 = var6;
                        var5 = new var16[var8](var15, var14);
                        var3 = var5 instanceof Object ? var5 : var6;
                        case 306:
                        var9 = var3.searchParams;
                        var8 = var9.set;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var4 = 3;
                        var5 = var12[var4];
                        var6 = var11.bind(var0)(var5);
                        var5 = var6.getBestMediaProxySize;
                        var4 = var12[var4];
                        var11 = var11.bind(var0)(var4);
                        var4 = var11.getDevicePixelRatio;
                        var4 = var4.bind(var11)();
                        var4 = var10 * var4;
                        var6 = var5.bind(var6)(var4);
                        var4 = var2.HermesInternal;
                        var5 = var4.concat;
                        var4 = '';
                        var6 = var5.bind(var4)(var6);
                        var5 = 'size';
                        var5 = var8.bind(var9)(var5, var6);
                        var6 = var3.searchParams;
                        var5 = var6.set;
                        var2 = var2.HermesInternal;
                        var2 = var2.concat;
                        var4 = var2.bind(var4)(var7);
                        var2 = 'passthrough';
                        var2 = var5.bind(var6)(var2, var4);
                        var2 = var3.toString;
                        var2 = var2.bind(var3)();
                        return var2;
                        case 451:
                        return var1;
                        case 453:
                        return var1;
                        case 455:
                        return var0;
                    }
            };
            var12 = function arg0() {
                _fun16614: for (var _fun16614_ip = 0;;) switch (_fun16614_ip) {
                    case 0:
                        var0 = arg0;
                        var10 = var0.id;
                        var8 = var0.guildId;
                        var7 = var0.banner;
                        var6 = var0.canAnimate;
                        var11 = var0.size;
                        var1 = null;
                        if (!(var1 != var7)) {
                            _fun16614_ip = 40;
                            continue _fun16614
                        }
                    case 36:
                        if (!(var1 == var8)) {
                            _fun16614_ip = 44;
                            continue _fun16614
                        }
                    case 40:
                        var0 = undefined;
                        return var0;
                    case 44:
                        var0 = global;
                        var2 = var0.window;
                        var2 = var2.GLOBAL_ENV;
                        var9 = var2.CDN_HOST;
                        var12 = 'png';
                        var3 = var12;
                        if (!var6) {
                            _fun16614_ip = 107;
                            continue _fun16614
                        }
                    case 74:
                        var4 = _closure1_slot25;
                        var5 = undefined;
                        var4 = var4.bind(var5)(var7);
                        var3 = var12;
                        if (!var4) {
                            _fun16614_ip = 107;
                            continue _fun16614
                        }
                    case 94:
                        var4 = _closure1_slot30;
                        var2 = _closure1_slot8;
                        var3 = var4.bind(var5)(var2);
                    case 107:
                        var5 = _closure1_slot3;
                        var4 = var5.GUILD_MEMBER_BANNER;
                        var18 = var5;
                        var17 = var8;
                        var16 = var10;
                        var15 = var7;
                        var14 = var3;
                        var5 = var18[var4](var17, var16, var15, var14, var13);
                        var8 = var3;
                        if (!(var1 == var9)) {
                            _fun16614_ip = 186;
                            continue _fun16614
                        }
                    case 146:
                        var1 = var0.location;
                        var3 = var1.protocol;
                        var1 = var0.window;
                        var1 = var1.GLOBAL_ENV;
                        var1 = var1.API_ENDPOINT;
                        var1 = var3 + var1;
                        var1 = var1 + var5;
                        _fun16614_ip = 209;
                        continue _fun16614;
                    case 186:
                        var3 = var0.HermesInternal;
                        var4 = var3.concat;
                        var3 = 'https://';
                        var1 = var4.bind(var3)(var9, var5);
                    case 209:
                        var4 = {};
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var3 = 3;
                        var9 = var13[var3];
                        var5 = undefined;
                        var10 = var12.bind(var5)(var9);
                        var9 = var10.getBestMediaProxySize;
                        var3 = var13[var3];
                        var12 = var12.bind(var5)(var3);
                        var3 = var12.getDevicePixelRatio;
                        var3 = var3.bind(var12)();
                        var3 = var11 * var3;
                        var3 = var9.bind(var10)(var3);
                        var4.size = var3;
                        var3 = 'webp';
                        var3 = var3 === var8;
                        if (!var3) {
                            _fun16614_ip = 287;
                            continue _fun16614
                        }
                    case 284:
                        var3 = var6;
                    case 287:
                        if (!var3) {
                            _fun16614_ip = 299;
                            continue _fun16614
                        }
                    case 290:
                        var6 = _closure1_slot25;
                        var3 = var6.bind(var5)(var7);
                    case 299:
                        if (!var3) {
                            _fun16614_ip = 310;
                            continue _fun16614
                        }
                    case 302:
                        var3 = true;
                        var4.animated = var3;
                    case 310:
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 4;
                        var2 = var6[var2];
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.stringify;
                        var3 = var2.bind(var3)(var4);
                        var0 = var0.HermesInternal;
                        var2 = var0.concat;
                        var0 = '?';
                        var0 = var2.bind(var0)(var3);
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var35 = function arg0() {
                _fun16615: for (var _fun16615_ip = 0;;) switch (_fun16615_ip) {
                    case 0:
                        var0 = arg0;
                        var11 = var0.id;
                        var10 = var0.splash;
                        var4 = var0.size;
                        var0 = null;
                        if (!(var0 != var10)) {
                            _fun16615_ip = 280;
                            continue _fun16615
                        }
                    case 28:
                        if (!(var0 == var4)) {
                            _fun16615_ip = 90;
                            continue _fun16615
                        }
                    case 32:
                        var1 = global;
                        var1 = var1.window;
                        var1 = var1.screen;
                        var2 = var1.width;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 3;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.getDevicePixelRatio;
                        var1 = var1.bind(var3)();
                        var4 = var2 * var1;
                    case 90:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 3;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.getBestMediaProxySize;
                        var4 = var1.bind(var3)(var4);
                        var1 = global;
                        var3 = var1.window;
                        var3 = var3.GLOBAL_ENV;
                        var9 = var3.CDN_HOST;
                        if (!(var0 == var9)) {
                            _fun16615_ip = 206;
                            continue _fun16615
                        }
                    case 150:
                        var3 = var1.location;
                        var5 = var3.protocol;
                        var3 = var1.window;
                        var3 = var3.GLOBAL_ENV;
                        var3 = var3.API_ENDPOINT;
                        var3 = var5 + var3;
                        var5 = _closure1_slot3;
                        var2 = var5.GUILD_SPLASH;
                        var2 = var2.bind(var5)(var11, var10);
                        var2 = var3 + var2;
                        _fun16615_ip = 252;
                        continue _fun16615;
                    case 206:
                        var3 = var1.HermesInternal;
                        var8 = var3.concat;
                        var18 = 'https://';
                        var16 = '/splashes/';
                        var14 = '/';
                        var12 = '.jpg';
                        var17 = var9;
                        var15 = var11;
                        var13 = var10;
                        var2 = var18[var8](var17, var16, var15, var14, var13, var12, var11);
                    case 252:
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var1 = '?size=';
                        var1 = var3.bind(var1)(var4);
                        var1 = var2 + var1;
                        return var1;
                    case 280:
                        return var0;
                }
            };
            var _closure1_slot16 = var35;
            var33 = function arg0() {
                _fun16616: for (var _fun16616_ip = 0;;) switch (_fun16616_ip) {
                    case 0:
                        var0 = arg0;
                        var7 = arguments[1];
                        var16 = var0.id;
                        var8 = var0.banner;
                        var6 = undefined;
                        if (!(var7 === var6)) {
                            _fun16616_ip = 25;
                            continue _fun16616
                        }
                    case 23:
                        var7 = false;
                    case 25:
                        var0 = null;
                        if (!(var0 != var8)) {
                            _fun16616_ip = 397;
                            continue _fun16616
                        }
                    case 34:
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 3;
                        var2 = var9[var1];
                        var4 = var5.bind(var6)(var2);
                        var2 = var4.getBestMediaProxySize;
                        var1 = var9[var1];
                        var5 = var5.bind(var6)(var1);
                        var1 = var5.getDevicePixelRatio;
                        var5 = var1.bind(var5)();
                        var1 = 360;
                        var1 = var1 * var5;
                        var10 = var2.bind(var4)(var1);
                        var1 = _closure1_slot8;
                        var4 = 'jpg';
                        var2 = var4;
                        if (!var1) {
                            _fun16616_ip = 119;
                            continue _fun16616
                        }
                    case 113:
                        var2 = 'webp';
                    case 119:
                        var9 = var2;
                        if (!var7) {
                            _fun16616_ip = 153;
                            continue _fun16616
                        }
                    case 125:
                        var1 = _closure1_slot25;
                        var1 = var1.bind(var6)(var8);
                        var9 = var2;
                        if (!var1) {
                            _fun16616_ip = 153;
                            continue _fun16616
                        }
                    case 140:
                        var2 = _closure1_slot30;
                        var1 = _closure1_slot8;
                        var9 = var2.bind(var6)(var1);
                    case 153:
                        var1 = global;
                        var2 = var1.window;
                        var2 = var2.GLOBAL_ENV;
                        var15 = var2.CDN_HOST;
                        if (!(var0 == var15)) {
                            _fun16616_ip = 234;
                            continue _fun16616
                        }
                    case 177:
                        var2 = var1.location;
                        var5 = var2.protocol;
                        var2 = var1.window;
                        var2 = var2.GLOBAL_ENV;
                        var2 = var2.API_ENDPOINT;
                        var5 = var5 + var2;
                        var11 = _closure1_slot3;
                        var2 = var11.GUILD_BANNER;
                        var2 = var2.bind(var11)(var16, var8, var9);
                        var2 = var5 + var2;
                        _fun16616_ip = 281;
                        continue _fun16616;
                    case 234:
                        var5 = var1.HermesInternal;
                        var14 = var5.concat;
                        var24 = 'https://';
                        var22 = '/banners/';
                        var20 = '/';
                        var18 = '.';
                        var23 = var15;
                        var21 = var16;
                        var19 = var8;
                        var17 = var9;
                        var2 = var24[var14](var23, var22, var21, var20, var19, var18, var17, var16);
                    case 281:
                        var5 = {};
                        var5.size = var10;
                        if (!(var4 === var9)) {
                            _fun16616_ip = 301;
                            continue _fun16616
                        }
                    case 291:
                        var4 = 'lossless';
                        var5.quality = var4;
                    case 301:
                        var4 = 'webp';
                        var4 = var4 === var9;
                        if (!var4) {
                            _fun16616_ip = 317;
                            continue _fun16616
                        }
                    case 314:
                        var4 = var7;
                    case 317:
                        if (!var4) {
                            _fun16616_ip = 329;
                            continue _fun16616
                        }
                    case 320:
                        var7 = _closure1_slot25;
                        var4 = var7.bind(var6)(var8);
                    case 329:
                        if (!var4) {
                            _fun16616_ip = 340;
                            continue _fun16616
                        }
                    case 332:
                        var4 = true;
                        var5.animated = var4;
                    case 340:
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 4;
                        var3 = var7[var3];
                        var4 = var4.bind(var6)(var3);
                        var3 = var4.stringify;
                        var4 = var3.bind(var4)(var5);
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var1 = '?';
                        var1 = var3.bind(var1)(var4);
                        var1 = var2 + var1;
                        return var1;
                    case 397:
                        return var0;
                }
            };
            var _closure1_slot17 = var33;
            var32 = function arg0() {
                _fun16617: for (var _fun16617_ip = 0;;) switch (_fun16617_ip) {
                    case 0:
                        var0 = arg0;
                        var11 = var0.id;
                        var10 = var0.homeHeader;
                        var0 = null;
                        if (!(var0 != var10)) {
                            _fun16617_ip = 242;
                            continue _fun16617
                        }
                    case 23:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 3;
                        var3 = var7[var1];
                        var5 = undefined;
                        var4 = var6.bind(var5)(var3);
                        var3 = var4.getBestMediaProxySize;
                        var1 = var7[var1];
                        var5 = var6.bind(var5)(var1);
                        var1 = var5.getDevicePixelRatio;
                        var5 = var1.bind(var5)();
                        var1 = 1096;
                        var1 = var1 * var5;
                        var4 = var3.bind(var4)(var1);
                        var1 = global;
                        var3 = var1.window;
                        var3 = var3.GLOBAL_ENV;
                        var9 = var3.CDN_HOST;
                        if (!(var0 == var9)) {
                            _fun16617_ip = 168;
                            continue _fun16617
                        }
                    case 112:
                        var3 = var1.location;
                        var5 = var3.protocol;
                        var3 = var1.window;
                        var3 = var3.GLOBAL_ENV;
                        var3 = var3.API_ENDPOINT;
                        var3 = var5 + var3;
                        var5 = _closure1_slot3;
                        var2 = var5.GUILD_HOME_HEADER;
                        var2 = var2.bind(var5)(var11, var10);
                        var2 = var3 + var2;
                        _fun16617_ip = 214;
                        continue _fun16617;
                    case 168:
                        var3 = var1.HermesInternal;
                        var8 = var3.concat;
                        var18 = 'https://';
                        var16 = '/home-headers/';
                        var14 = '/';
                        var12 = '.png';
                        var17 = var9;
                        var15 = var11;
                        var13 = var10;
                        var2 = var18[var8](var17, var16, var15, var14, var13, var12, var11);
                    case 214:
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var1 = '?size=';
                        var1 = var3.bind(var1)(var4);
                        var1 = var2 + var1;
                        return var1;
                    case 242:
                        return var0;
                }
            };
            var _closure1_slot18 = var32;
            var11 = function arg0() {
                _fun16618: for (var _fun16618_ip = 0;;) switch (_fun16618_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.channelId;
                        var4 = var0.icon;
                        var0 = null;
                        var1 = var0 == var4;
                        if (var1) {
                            _fun16618_ip = 94;
                            continue _fun16618
                        }
                    case 22:
                        var3 = _closure1_slot10;
                        var2 = {};
                        var6 = _closure1_slot3;
                        var6 = var6.GUILD_RESOURCE_CHANNELS_ICON;
                        var2.endpoint = var6;
                        var6 = 'resource-channels';
                        var2.path = var6;
                        var2.id = var5;
                        var2.hash = var4;
                        var1 = _closure1_slot4;
                        var2.size = var1;
                        var1 = true;
                        var2.canAnimate = var1;
                        var1 = false;
                        var2.canWebP = var1;
                        var1 = undefined;
                        var0 = var3.bind(var1)(var2);
                    case 94:
                        return var0;
                }
            };
            var10 = function arg0() {
                _fun16619: for (var _fun16619_ip = 0;;) switch (_fun16619_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.channelId;
                        var4 = var0.icon;
                        var0 = null;
                        var1 = var0 == var4;
                        if (var1) {
                            _fun16619_ip = 94;
                            continue _fun16619
                        }
                    case 22:
                        var3 = _closure1_slot10;
                        var2 = {};
                        var6 = _closure1_slot3;
                        var6 = var6.GUILD_NEW_MEMBER_ACTIONS_ICON;
                        var2.endpoint = var6;
                        var6 = 'new-member-actions';
                        var2.path = var6;
                        var2.id = var5;
                        var2.hash = var4;
                        var1 = _closure1_slot4;
                        var2.size = var1;
                        var1 = true;
                        var2.canAnimate = var1;
                        var1 = false;
                        var2.canWebP = var1;
                        var1 = undefined;
                        var0 = var3.bind(var1)(var2);
                    case 94:
                        return var0;
                }
            };
            var34 = function arg0() {
                _fun16620: for (var _fun16620_ip = 0;;) switch (_fun16620_ip) {
                    case 0:
                        var0 = arg0;
                        var11 = var0.id;
                        var10 = var0.splash;
                        var4 = var0.size;
                        var0 = null;
                        if (!(var0 != var10)) {
                            _fun16620_ip = 280;
                            continue _fun16620
                        }
                    case 28:
                        if (!(var0 == var4)) {
                            _fun16620_ip = 90;
                            continue _fun16620
                        }
                    case 32:
                        var1 = global;
                        var1 = var1.window;
                        var1 = var1.screen;
                        var2 = var1.width;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 3;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.getDevicePixelRatio;
                        var1 = var1.bind(var3)();
                        var4 = var2 * var1;
                    case 90:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 3;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.getBestMediaProxySize;
                        var4 = var1.bind(var3)(var4);
                        var1 = global;
                        var3 = var1.window;
                        var3 = var3.GLOBAL_ENV;
                        var9 = var3.CDN_HOST;
                        if (!(var0 == var9)) {
                            _fun16620_ip = 206;
                            continue _fun16620
                        }
                    case 150:
                        var3 = var1.location;
                        var5 = var3.protocol;
                        var3 = var1.window;
                        var3 = var3.GLOBAL_ENV;
                        var3 = var3.API_ENDPOINT;
                        var3 = var5 + var3;
                        var5 = _closure1_slot3;
                        var2 = var5.GUILD_DISCOVERY_SPLASH;
                        var2 = var2.bind(var5)(var11, var10);
                        var2 = var3 + var2;
                        _fun16620_ip = 252;
                        continue _fun16620;
                    case 206:
                        var3 = var1.HermesInternal;
                        var8 = var3.concat;
                        var18 = 'https://';
                        var16 = '/discovery-splashes/';
                        var14 = '/';
                        var12 = '.jpg';
                        var17 = var9;
                        var15 = var11;
                        var13 = var10;
                        var2 = var18[var8](var17, var16, var15, var14, var13, var12, var11);
                    case 252:
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var1 = '?size=';
                        var1 = var3.bind(var1)(var4);
                        var1 = var2 + var1;
                        return var1;
                    case 280:
                        return var0;
                }
            };
            var _closure1_slot19 = var34;
            var36 = function arg0() {
                _fun16621: for (var _fun16621_ip = 0;;) switch (_fun16621_ip) {
                    case 0:
                        var0 = arg0;
                        var8 = var0.id;
                        var7 = var0.icon;
                        var6 = var0.size;
                        var5 = var0.canAnimate;
                        var2 = undefined;
                        if (!(var5 === var2)) {
                            _fun16621_ip = 32;
                            continue _fun16621
                        }
                    case 30:
                        var5 = false;
                    case 32:
                        var4 = var0.lossless;
                        if (!(var4 === var2)) {
                            _fun16621_ip = 44;
                            continue _fun16621
                        }
                    case 42:
                        var4 = false;
                    case 44:
                        var1 = _closure1_slot10;
                        var0 = {};
                        var9 = _closure1_slot3;
                        var9 = var9.GUILD_ICON;
                        var0.endpoint = var9;
                        var9 = 'icons';
                        var0.path = var9;
                        var0.id = var8;
                        var0.hash = var7;
                        var0.size = var6;
                        var0.canAnimate = var5;
                        var0.lossless = var4;
                        var3 = _closure1_slot8;
                        var0.canWebP = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var _closure1_slot20 = var36;
            var9 = function arg0() {
                _fun16622: for (var _fun16622_ip = 0;;) switch (_fun16622_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = var0.id;
                        var5 = var0.icon;
                        var4 = var0.size;
                        var2 = undefined;
                        if (!(var4 === var2)) {
                            _fun16622_ip = 31;
                            continue _fun16622
                        }
                    case 24:
                        var4 = _closure1_slot4;
                    case 31:
                        var3 = var0.canAnimate;
                        if (!(var3 === var2)) {
                            _fun16622_ip = 43;
                            continue _fun16622
                        }
                    case 41:
                        var3 = false;
                    case 43:
                        var1 = _closure1_slot10;
                        var0 = {};
                        var7 = _closure1_slot3;
                        var7 = var7.GUILD_TEMPLATE_ICON;
                        var0.endpoint = var7;
                        var7 = 'guild-templates';
                        var0.path = var7;
                        var0.id = var6;
                        var0.hash = var5;
                        var0.size = var4;
                        var0.canAnimate = var3;
                        var3 = false;
                        var0.canWebP = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var _closure1_slot21 = var9;
            var30 = function arg0() {
                _fun16623: for (var _fun16623_ip = 0;;) switch (_fun16623_ip) {
                    case 0:
                        var0 = arg0;
                        var9 = var0.id;
                        var8 = var0.icon;
                        var7 = var0.size;
                        var5 = undefined;
                        if (!(var7 === var5)) {
                            _fun16623_ip = 31;
                            continue _fun16623
                        }
                    case 24:
                        var7 = _closure1_slot4;
                    case 31:
                        var11 = var0.bot;
                        var1 = var0.botIconFirst;
                        var4 = var0.fallbackAvatar;
                        if (!(var4 === var5)) {
                            _fun16623_ip = 55;
                            continue _fun16623
                        }
                    case 53:
                        var4 = true;
                    case 55:
                        var6 = var0.keepAspectRatio;
                        var10 = var0.guildMember;
                        var3 = null;
                        var2 = var3 == var11;
                        var0 = undefined;
                        if (var2) {
                            _fun16623_ip = 83;
                            continue _fun16623
                        }
                    case 78:
                        var0 = var11.id;
                    case 83:
                        if (!(var3 != var0)) {
                            _fun16623_ip = 162;
                            continue _fun16623
                        }
                    case 87:
                        if (!(var3 != var10)) {
                            _fun16623_ip = 162;
                            continue _fun16623
                        }
                    case 91:
                        var0 = var10.avatar;
                        if (!(var3 != var0)) {
                            _fun16623_ip = 162;
                            continue _fun16623
                        }
                    case 101:
                        var2 = _closure1_slot14;
                        var0 = {};
                        var12 = var11.id;
                        var0.userId = var12;
                        var12 = var10.guildId;
                        var0.guildId = var12;
                        var10 = var10.avatar;
                        var0.avatar = var10;
                        var10 = false;
                        var0.canAnimate = var10;
                        var0.size = var7;
                        var0 = var2.bind(var5)(var0);
                        if (!(var3 == var0)) {
                            _fun16623_ip = 340;
                            continue _fun16623
                        }
                    case 162:
                        if (!(var3 != var11)) {
                            _fun16623_ip = 192;
                            continue _fun16623
                        }
                    case 166:
                        if (!var1) {
                            _fun16623_ip = 192;
                            continue _fun16623
                        }
                    case 169:
                        var2 = _closure1_slot12;
                        var1 = false;
                        var1 = var2.bind(var5)(var11, var1, var7);
                        if (!(var3 == var1)) {
                            _fun16623_ip = 338;
                            continue _fun16623
                        }
                    case 192:
                        if (!(var3 == var8)) {
                            _fun16623_ip = 252;
                            continue _fun16623
                        }
                    case 196:
                        if (!(var3 != var11)) {
                            _fun16623_ip = 220;
                            continue _fun16623
                        }
                    case 200:
                        var10 = _closure1_slot12;
                        var2 = false;
                        var2 = var10.bind(var5)(var11, var2, var7);
                        if (!(var3 == var2)) {
                            _fun16623_ip = 250;
                            continue _fun16623
                        }
                    case 220:
                        var3 = undefined;
                        if (!var4) {
                            _fun16623_ip = 248;
                            continue _fun16623
                        }
                    case 225:
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var4 = 9;
                        var4 = var11[var4];
                        var3 = var10.bind(var5)(var4);
                    case 248:
                        return var3;
                    case 250:
                        return var2;
                    case 252:
                        var2 = _closure1_slot29;
                        var3 = var2.bind(var5)(var8);
                        var2 = var8;
                        if (var3) {
                            _fun16623_ip = 336;
                            continue _fun16623
                        }
                    case 270:
                        var4 = _closure1_slot10;
                        var3 = {};
                        var10 = _closure1_slot3;
                        var10 = var10.APPLICATION_ICON;
                        var3.endpoint = var10;
                        var10 = 'app-icons';
                        var3.path = var10;
                        var3.id = var9;
                        var3.hash = var8;
                        var3.size = var7;
                        var7 = false;
                        var3.canAnimate = var7;
                        var3.canWebP = var7;
                        var3.keepAspectRatio = var6;
                        var2 = var4.bind(var5)(var3);
                    case 336:
                        return var2;
                    case 338:
                        return var1;
                    case 340:
                        return var0;
                }
            };
            var _closure1_slot22 = var30;
            var27 = function arg0() {
                _fun16624: for (var _fun16624_ip = 0;;) switch (_fun16624_ip) {
                    case 0:
                        var0 = arg0;
                        var7 = var0.id;
                        var6 = var0.hash;
                        var3 = var0.size;
                        var2 = undefined;
                        if (!(var3 === var2)) {
                            _fun16624_ip = 31;
                            continue _fun16624
                        }
                    case 24:
                        var3 = _closure1_slot4;
                    case 31:
                        var5 = var0.keepAspectRatio;
                        if (!(var5 === var2)) {
                            _fun16624_ip = 43;
                            continue _fun16624
                        }
                    case 41:
                        var5 = false;
                    case 43:
                        var4 = var0.format;
                        var1 = _closure1_slot10;
                        var0 = {};
                        var8 = _closure1_slot3;
                        var8 = var8.APPLICATION_ICON;
                        var0.endpoint = var8;
                        var8 = 'app-icons';
                        var0.path = var8;
                        var0.id = var7;
                        var0.hash = var6;
                        var0.size = var3;
                        var3 = false;
                        var0.canAnimate = var3;
                        var0.keepAspectRatio = var5;
                        var0.format = var4;
                        var0.canWebP = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var _closure1_slot23 = var27;
            var8 = function arg0() {
                _fun16625: for (var _fun16625_ip = 0;;) switch (_fun16625_ip) {
                    case 0:
                        var0 = arg0;
                        var9 = var0.userId;
                        var _closure2_slot0 = var9;
                        var6 = var0.assetId;
                        var _closure2_slot1 = var6;
                        var5 = var0.assetHash;
                        var _closure2_slot2 = var5;
                        var4 = var0.size;
                        var3 = var0.canAnimate;
                        var2 = undefined;
                        if (!(var3 === var2)) {
                            _fun16625_ip = 53;
                            continue _fun16625
                        }
                    case 51:
                        var3 = true;
                    case 53:
                        var1 = _closure1_slot10;
                        var0 = {};
                        var7 = function arg0, arg1, arg2() {
                            var5 = _closure1_slot3;
                            var4 = var5.VIDEO_FILTER_ASSET_STORAGE;
                            var9 = _closure2_slot0;
                            var8 = _closure2_slot1;
                            var7 = _closure2_slot2;
                            var6 = arg2;
                            var10 = var5;
                            var0 = var10[var4](var9, var8, var7, var6, var5);
                            return var0;
                        };
                        var0.endpoint = var7;
                        var7 = global;
                        var7 = var7.HermesInternal;
                        var8 = var7.concat;
                        var7 = 'video-filter-assets/';
                        var7 = var8.bind(var7)(var9);
                        var0.path = var7;
                        var0.id = var6;
                        var0.hash = var5;
                        var0.size = var4;
                        var0.canAnimate = var3;
                        var3 = false;
                        var0.canWebP = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var31 = function arg0() {
                _fun16627: for (var _fun16627_ip = 0;;) switch (_fun16627_ip) {
                    case 0:
                        var0 = arg0;
                        var12 = var0.id;
                        var6 = var0.icon;
                        var7 = var0.applicationId;
                        var4 = var0.size;
                        var3 = null;
                        if (!(var3 == var7)) {
                            _fun16627_ip = 195;
                            continue _fun16627
                        }
                    case 32:
                        var1 = _closure1_slot10;
                        var0 = {};
                        var2 = _closure1_slot3;
                        var2 = var2.CHANNEL_ICON;
                        var0.endpoint = var2;
                        var2 = 'channel-icons';
                        var0.path = var2;
                        var0.id = var12;
                        var0.hash = var6;
                        var2 = false;
                        var0.canAnimate = var2;
                        var0.size = var4;
                        var0.canWebP = var2;
                        var9 = undefined;
                        var0 = var1.bind(var9)(var0);
                        if (!(var3 == var0)) {
                            _fun16627_ip = 193;
                            continue _fun16627
                        }
                    case 102:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var1 = 1;
                        var2 = var10[var1];
                        var2 = var8.bind(var9)(var2);
                        var2 = var2.default;
                        var2 = var2.DEFAULT_GROUP_DM_AVATARS;
                        var11 = _closure1_slot1;
                        var5 = 10;
                        var5 = var10[var5];
                        var11 = var11.bind(var9)(var5);
                        var5 = var11.extractTimestamp;
                        var5 = var5.bind(var11)(var12);
                        var1 = var10[var1];
                        var1 = var8.bind(var9)(var1);
                        var1 = var1.default;
                        var1 = var1.DEFAULT_GROUP_DM_AVATARS;
                        var1 = var1.length;
                        var1 = var5 % var1;
                        var0 = var2[var1];
                    case 193:
                        _fun16627_ip = 261;
                        continue _fun16627;
                    case 195:
                        var5 = _closure1_slot22;
                        var1 = {};
                        var1.id = var7;
                        var1.icon = var6;
                        var1.size = var4;
                        var4 = undefined;
                        var1 = var5.bind(var4)(var1);
                        if (!(var3 == var1)) {
                            _fun16627_ip = 258;
                            continue _fun16627
                        }
                    case 227:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 1;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.default;
                        var1 = var2.DEFAULT_CHANNEL_ICON;
                    case 258:
                        var0 = var1;
                    case 261:
                        return var0;
                }
            };
            var _closure1_slot24 = var31;
            var7 = function arg0() {
                _fun16628: for (var _fun16628_ip = 0;;) switch (_fun16628_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = _closure1_slot25;
                        var0 = null;
                        var4 = var0 == var3;
                        var1 = undefined;
                        var0 = undefined;
                        if (var4) {
                            _fun16628_ip = 28;
                            continue _fun16628
                        }
                    case 23:
                        var0 = var3.icon;
                    case 28:
                        var0 = var2.bind(var1)(var0);
                        return var0;
                }
            };
            var6 = function arg0() {
                _fun16629: for (var _fun16629_ip = 0;;) switch (_fun16629_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun16629_ip = 29;
                            continue _fun16629
                        }
                    case 12:
                        var2 = var3.startsWith;
                        var1 = 'a_';
                        var0 = var2.bind(var3)(var1);
                    case 29:
                        return var0;
                }
            };
            var _closure1_slot25 = var6;
            var5 = function arg0() {
                _fun16630: for (var _fun16630_ip = 0;;) switch (_fun16630_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun16630_ip = 29;
                            continue _fun16630
                        }
                    case 12:
                        var2 = var3.startsWith;
                        var1 = 'v_';
                        var0 = var2.bind(var3)(var1);
                    case 29:
                        return var0;
                }
            };
            var _closure1_slot26 = var5;
            var0 = function arg0() {
                _fun16631: for (var _fun16631_ip = 0;;) switch (_fun16631_ip) {
                    case 0:
                        var0 = arg0;
                    case 3: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.parse;
                        var0 = var1.bind(var2)(var0);
                        var2 = var0.pathname;
                        var1 = var2.split;
                        var0 = '/';
                        var1 = var1.bind(var2)(var0);
                        var0 = var1.pop;
                        var0 = var0.bind(var1)();
                    case 69: // try_end0
                        return var0;
                    case 71: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = null;
                        return var0;
                }
            };
            var _closure1_slot27 = var0;
            var3 = function arg0() {
                _fun16632: for (var _fun16632_ip = 0;;) switch (_fun16632_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = 'number';
                        var1 = typeof var3;
                        var0 = var3;
                        if (!(var2 !== var1)) {
                            _fun16632_ip = 40;
                            continue _fun16632
                        }
                    case 17:
                        var1 = {};
                        var2 = null;
                        var4 = var2 != var3;
                        var2 = undefined;
                        if (!var4) {
                            _fun16632_ip = 33;
                            continue _fun16632
                        }
                    case 30:
                        var2 = var3;
                    case 33:
                        var1.uri = var2;
                        var0 = var1;
                    case 40:
                        return var0;
                }
            };
            var _closure1_slot28 = var3;
            var1 = function arg0() {
                _fun16633: for (var _fun16633_ip = 0;;) switch (_fun16633_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var0 = var0 != var3;
                        if (!var0) {
                            _fun16633_ip = 29;
                            continue _fun16633
                        }
                    case 12:
                        var2 = _closure1_slot5;
                        var1 = var2.test;
                        var0 = var1.bind(var2)(var3);
                    case 29:
                        return var0;
                }
            };
            var _closure1_slot29 = var1;
            var0 = function arg0() {
                _fun16634: for (var _fun16634_ip = 0;;) switch (_fun16634_ip) {
                    case 0:
                        var0 = 'gif';
                        var1 = arg0;
                        if (!var1) {
                            _fun16634_ip = 16;
                            continue _fun16634
                        }
                    case 10:
                        var0 = 'webp';
                    case 16:
                        return var0;
                }
            };
            var _closure1_slot30 = var0;
            var0 = global;
            var23 = var0.Object;
            var22 = var23.defineProperty;
            var21 = {};
            var0 = true;
            var21.value = var0;
            var0 = '__esModule';
            var0 = var22.bind(var23)(var2, var0, var21);
            var0 = 0;
            var21 = var29[var0];
            var0 = undefined;
            var21 = var28.bind(var0)(var21);
            var22 = var21.Endpoints;
            var _closure1_slot3 = var22;
            var21 = var21.AVATAR_SIZE;
            var _closure1_slot4 = var21;
            var25 = /^data:/;
            var _closure1_slot5 = var25;
            var21 = 1;
            var22 = var29[var21];
            var22 = var28.bind(var0)(var22);
            var22 = var22.default;
            var24 = var22.DEFAULT_AVATARS;
            var _closure1_slot6 = var24;
            var22 = var29[var21];
            var22 = var28.bind(var0)(var22);
            var22 = var22.default;
            var23 = var22.DEFAULT_PROVISIONAL_AVATARS;
            var _closure1_slot7 = var23;
            var22 = var29[var21];
            var22 = var28.bind(var0)(var22);
            var22 = var22.default;
            var22 = var22.DEFAULT_GROUP_DM_AVATARS;
            var21 = var29[var21];
            var21 = var28.bind(var0)(var21);
            var26 = var21.default;
            var21 = var26.canUseWebp;
            var21 = var21.bind(var26)();
            var _closure1_slot8 = var21;
            var26 = 2;
            var26 = var29[var26];
            var37 = var28.bind(var0)(var26);
            var26 = var37.isAndroid;
            var26 = var26.bind(var37)();
            var _closure1_slot9 = var26;
            var26 = {};
            var26.getUserAvatarURL = var18;
            var26.getDefaultAvatarURL = var19;
            var26.getGuildMemberAvatarURL = var16;
            var26.getGuildMemberAvatarURLSimple = var17;
            var26.getGuildMemberAvatarSource = var15;
            var26.getGuildMemberBannerURL = var12;
            var26.getUserBannerURL = var14;
            var26.getAvatarDecorationURL = var13;
            var26.hasAnimatedGuildIcon = var7;
            var26.isAnimatedIconHash = var6;
            var37 = function arg0,
            arg1,
            arg2() {
                var2 = _closure1_slot28;
                var5 = _closure1_slot13;
                var1 = undefined;
                var4 = arg0;
                var3 = arg1;
                var0 = arg2;
                var0 = var5.bind(var1)(var4, var3, var0);
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var26.getUserAvatarSource = var37;
            var26.getGuildIconURL = var36;
            var26.getGuildSplashURL = var35;
            var35 = function arg0() {
                var2 = _closure1_slot28;
                var3 = _closure1_slot16;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0);
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var26.getGuildSplashSource = var35;
            var26.getGuildDiscoverySplashURL = var34;
            var34 = function arg0() {
                var2 = _closure1_slot28;
                var3 = _closure1_slot19;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0);
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var26.getGuildDiscoverySplashSource = var34;
            var26.getGuildBannerURL = var33;
            var26.getGuildHomeHeaderURL = var32;
            var26.getResourceChannelIconURL = var11;
            var26.getNewMemberActionIconURL = var10;
            var26.getGuildTemplateIconURL = var9;
            var26.getChannelIconURL = var31;
            var26.getEmojiURL = var20;
            var26.getApplicationIconURL = var30;
            var26.getGameAssetURL = var27;
            var26.getVideoFilterAssetURL = var8;
            var27 = function arg0() {
                var2 = _closure1_slot28;
                var3 = _closure1_slot23;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0);
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var26.getGameAssetSource = var27;
            var27 = function arg0() {
                var2 = _closure1_slot28;
                var3 = _closure1_slot20;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0);
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var26.getGuildIconSource = var27;
            var27 = function arg0() {
                var2 = _closure1_slot28;
                var3 = _closure1_slot21;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0);
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var26.getGuildTemplateIconSource = var27;
            var27 = function arg0() {
                _fun16641: for (var _fun16641_ip = 0;;) switch (_fun16641_ip) {
                    case 0:
                        var4 = arguments[1];
                        var2 = undefined;
                        if (!(var4 === var2)) {
                            _fun16641_ip = 11;
                            continue _fun16641
                        }
                    case 9:
                        var4 = false;
                    case 11:
                        var1 = _closure1_slot28;
                        var3 = _closure1_slot17;
                        var0 = arg0;
                        var0 = var3.bind(var2)(var0, var4);
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var26.getGuildBannerSource = var27;
            var27 = function arg0() {
                var2 = _closure1_slot28;
                var3 = _closure1_slot18;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0);
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var26.getGuildHomeHeaderSource = var27;
            var27 = function arg0() {
                var2 = _closure1_slot28;
                var3 = _closure1_slot24;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0);
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var26.getChannelIconSource = var27;
            var27 = function arg0() {
                var2 = _closure1_slot28;
                var3 = _closure1_slot22;
                var1 = undefined;
                var0 = arg0;
                var0 = var3.bind(var1)(var0);
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var26.getApplicationIconSource = var27;
            var26.makeSource = var3;
            var27 = function arg0,
            arg1() {
                _fun16645: for (var _fun16645_ip = 0;;) switch (_fun16645_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = arg1;
                        var3 = undefined;
                        var2 = var4.bind(var3)(var0);
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 2;
                        var1 = var6[var1];
                        var5 = var5.bind(var3)(var1);
                        var1 = var5.isAndroid;
                        var1 = var1.bind(var5)();
                        if (!var1) {
                            _fun16645_ip = 63;
                            continue _fun16645
                        }
                    case 49:
                        if (!var0) {
                            _fun16645_ip = 63;
                            continue _fun16645
                        }
                    case 52:
                        var1 = 'number';
                        var0 = typeof var2;
                        if (!(var1 === var0)) {
                            _fun16645_ip = 65;
                            continue _fun16645
                        }
                    case 63:
                        return var2;
                    case 65:
                        var0 = false;
                        var3 = var4.bind(var3)(var0);
                        var0 = typeof var3;
                        if (!(var1 !== var0)) {
                            _fun16645_ip = 96;
                            continue _fun16645
                        }
                    case 79:
                        var4 = var3.uri;
                        var1 = var2.uri;
                        var0 = var3;
                        if (!(var4 !== var1)) {
                            _fun16645_ip = 136;
                            continue _fun16645
                        }
                    case 96:
                        var1 = new Array(2);
                        var1[0] = var2;
                        var2 = {};
                        var8 = var2;
                        var7 = var3;
                        var3 = copyDataProperties(var8, var7);
                        var4 = true;
                        var3 = 'isForceCached';
                        var2[var3] = var4;
                        var1[1] = var2;
                        var0 = var1;
                    case 136:
                        return var0;
                }
            };
            var26.getAnimatableSourceWithFallback = var27;
            var27 = 12;
            var27 = var29[var27];
            var29 = var28.bind(var0)(var27);
            var28 = var29.fileFinishedImporting;
            var27 = 'utils/AvatarUtils.tsx';
            var27 = var28.bind(var29)(var27);
            var2.default = var26;
            var2.DATA_IMAGE_PREFIX = var25;
            var2.DEFAULT_AVATARS = var24;
            var2.DEFAULT_PROVISIONAL_AVATARS = var23;
            var2.DEFAULT_GROUP_DM_AVATARS = var22;
            var2.SUPPORTS_WEBP = var21;
            var21 = 5;
            var2.LEGACY_DEFAULT_AVATAR_COUNT = var21;
            var21 = 6;
            var2.DEFAULT_AVATAR_COUNT = var21;
            var2.getEmojiURL = var20;
            var2.getDefaultAvatarURL = var19;
            var2.getUserAvatarURL = var18;
            var2.getGuildMemberAvatarURLSimple = var17;
            var2.getGuildMemberAvatarURL = var16;
            var2.getGuildMemberAvatarSource = var15;
            var2.getUserBannerURL = var14;
            var2.getAvatarDecorationURL = var13;
            var2.getGuildMemberBannerURL = var12;
            var2.getResourceChannelIconURL = var11;
            var2.getNewMemberActionIconURL = var10;
            var2.getGuildTemplateIconURL = var9;
            var2.getVideoFilterAssetURL = var8;
            var2.hasAnimatedGuildIcon = var7;
            var2.isAnimatedIconHash = var6;
            var2.isVideoAssetHash = var5;
            var5 = function arg0() {
                _fun16646: for (var _fun16646_ip = 0;;) switch (_fun16646_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = null;
                        var0 = var0 != var4;
                        if (!var0) {
                            _fun16646_ip = 35;
                            continue _fun16646
                        }
                    case 12:
                        var3 = _closure1_slot25;
                        var1 = _closure1_slot27;
                        var2 = undefined;
                        var1 = var1.bind(var2)(var4);
                        var0 = var3.bind(var2)(var1);
                    case 35:
                        return var0;
                }
            };
            var2.isAnimatedImageURL = var5;
            var4 = function arg0() {
                _fun16647: for (var _fun16647_ip = 0;;) switch (_fun16647_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = null;
                        var0 = var0 != var4;
                        if (!var0) {
                            _fun16647_ip = 35;
                            continue _fun16647
                        }
                    case 12:
                        var3 = _closure1_slot26;
                        var1 = _closure1_slot27;
                        var2 = undefined;
                        var1 = var1.bind(var2)(var4);
                        var0 = var3.bind(var2)(var1);
                    case 35:
                        return var0;
                }
            };
            var2.isVideoURL = var4;
            var2.makeSource = var3;
            var2.isDataUri = var1;
            return var0;
        })(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1418, 478, 1443, 1454, 1587, 1604, 24, 1605, 1606, 21, 1459, 2]);