// modules/coded_links/findCodedLinks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
_fun28190: for(var _fun28190_ip = 0; ; ) switch(_fun28190_ip) {
case 0:
            var10 = require;
            var17 = metroImportDefault;
            var2 = exports;
            var11 = dependencyMap;
            var _closure1_slot0 = var10;
            var _closure1_slot1 = var17;
            var _closure1_slot2 = var11;
            var0 = function arg0, arg1() {
                _fun28191: for(var _fun28191_ip = 0; ; ) switch(_fun28191_ip) {
case 0:
                    var2 = arg0;
                    var _closure2_slot0 = var2;
                    var4 = global;
                    var1 = var4.Symbol;
                    var3 = 'undefined';
                    var1 = typeof var1;
                    var1 = var3 !== var1;
                    if(!var1) { _fun28191_ip = 46; continue _fun28191 }
case 30:
                    var3 = var4.Symbol;
                    var3 = var3.iterator;
                    var1 = var2[var3];
case 46:
                    if(var1) { _fun28191_ip = 55; continue _fun28191 }
case 49:
                    var1 = var2["@@iterator"];
case 55:
                    if(var1) { _fun28191_ip = 343; continue _fun28191 }
case 61:
                    var5 = var4.Array;
                    var3 = var5.isArray;
                    var5 = var3.bind(var5)(var2);
                    var3 = var1;
                    if(var5) { _fun28191_ip = 323; continue _fun28191 }
case 86:
                    var7 = undefined;
                    var5 = undefined;
                    if(!var2) { _fun28191_ip = 283; continue _fun28191 }
case 96:
                    var8 = 'string';
                    var6 = typeof var2;
                    if(!(var8 !== var6)) { _fun28191_ip = 270; continue _fun28191 }
case 110:
                    var6 = {};
                    var8 = var6.toString;
                    var6 = var8.call;
                    var10 = var6.bind(var8)(var2);
                    var9 = var10.slice;
                    var8 = 8;
                    var6 = -1;
                    var8 = var9.bind(var10)(var8, var6);
                    var6 = 'Object';
                    var6 = var6 === var8;
                    if(!var6) { _fun28191_ip = 163; continue _fun28191 }
case 158:
                    var6 = var2.constructor;
case 163:
                    var9 = var8;
                    if(!var6) { _fun28191_ip = 179; continue _fun28191 }
case 169:
                    var6 = var2.constructor;
                    var9 = var6.name;
case 179:
                    var6 = 'Map';
                    if(!(var6 !== var9)) { _fun28191_ip = 249; continue _fun28191 }
case 187:
                    var6 = 'Set';
                    if(!(var6 !== var9)) { _fun28191_ip = 249; continue _fun28191 }
case 195:
                    var6 = 'Arguments';
                    if(!(var6 !== var9)) { _fun28191_ip = 234; continue _fun28191 }
case 205:
                    var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                    var6 = var8.test;
                    var8 = var6.bind(var8)(var9);
                    var6 = undefined;
                    if(!var8) { _fun28191_ip = 247; continue _fun28191 }
case 234:
                    var8 = _closure1_slot29;
                    var6 = var8.bind(var7)(var2, var7);
case 247:
                    _fun28191_ip = 265; continue _fun28191;
case 249:
                    var9 = var4.Array;
                    var8 = var9.from;
                    var6 = var8.bind(var9)(var2);
case 265:
                    var5 = var6;
                    _fun28191_ip = 283; continue _fun28191;
case 270:
                    var6 = _closure1_slot29;
                    var5 = var6.bind(var7)(var2, var7);
case 283:
                    var3 = var5;
                    if(var3) { _fun28191_ip = 323; continue _fun28191 }
case 289:
                    var6 = var4.TypeError;
                    var4 = var6.prototype;
                    var5 = Object.create(var4, {constructor: {value: var6}});
                    var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                    var13 = var5;
                    var4 = new var13[var6](var12, var11);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 323:
                    if(!var3) { _fun28191_ip = 330; continue _fun28191 }
case 326:
                    _closure2_slot0 = var3;
case 330:
                    var3 = 0;
                    var _closure2_slot1 = var3;
                    var0 = function() { // Environment: var0
                        _fun28192: for(var _fun28192_ip = 0; ; ) switch(_fun28192_ip) {
case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if(!(!(var1 >= var0))) { _fun28192_ip = 56; continue _fun28192 }
case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun28192_ip = 67; continue _fun28192;
case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
case 67:
                            return var0;
                        }
                    };
                    return var0;
case 343:
                    var0 = var1.call;
                    var2 = var0.bind(var1)(var2);
                    var1 = var2.next;
                    var0 = var1.bind;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                }
            };
            var _closure1_slot28 = var0;
            var0 = function arg0, arg1() {
                _fun28193: for(var _fun28193_ip = 0; ; ) switch(_fun28193_ip) {
case 0:
                    var3 = arg0;
                    var0 = null;
                    var2 = undefined;
                    var0 = var0 == var2;
                    if(var0) { _fun28193_ip = 23; continue _fun28193 }
case 14:
                    var1 = var3.length;
                    var0 = var2 > var1;
case 23:
                    var1 = undefined;
                    if(!var0) { _fun28193_ip = 33; continue _fun28193 }
case 28:
                    var1 = var3.length;
case 33:
                    var0 = global;
                    var0 = var0.Array;
                    var0 = var0.bind(var2)(var1);
                    var2 = 0;
                    var4 = var2 < var1;
                    if(!var4) { _fun28193_ip = 70; continue _fun28193 }
case 55:
                    var4 = var3[var2];
                    var0[var2] = var4;
                    var2 = var2 + 1;
                    if(var2 < var1) { _fun28193_ip = 55; continue _fun28193 }
case 70:
                    return var0;
                }
            };
            var _closure1_slot29 = var0;
            var15 = function arg0() {
                _fun28194: for(var _fun28194_ip = 0; ; ) switch(_fun28194_ip) {
case 0:
                    var4 = arg0;
                    var1 = null;
                    if(!(var1 != var4)) { _fun28194_ip = 110; continue _fun28194 }
case 9:
                    var2 = var4.indexOf;
                    var0 = '/';
                    var2 = var2.bind(var4)(var0);
                    var0 = 0;
                    if(!(!(var2 >= var0))) { _fun28194_ip = 44; continue _fun28194 }
case 30:
                    var0 = {};
                    var0.host = var4;
                    var0.pathPrefix = var1;
                    return var0;
case 44:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 3;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = var2.parse;
                    var0 = true;
                    var1 = var1.bind(var2)(var4, var3, var0);
                    var0 = {};
                    var2 = var1.host;
                    var0.host = var2;
                    var1 = var1.pathname;
                    var0.pathPrefix = var1;
                    return var0;
case 110:
                    var0 = {'host': null, 'pathPrefix': null};
                    return var0;
                }
            };
            var0 = function arg0, arg1() {
                _fun28195: for(var _fun28195_ip = 0; ; ) switch(_fun28195_ip) {
case 0:
                    var0 = arg1;
                    var4 = var0.host;
                    var0 = null;
                    var0 = var0 == var4;
                    var1 = undefined;
                    if(var0) { _fun28195_ip = 49; continue _fun28195 }
case 20:
                    var3 = var4.replace;
                    var2 = /^www[.]/i;
                    var0 = '';
                    var1 = var3.bind(var4)(var2, var0);
case 49:
                    var0 = arg0;
                    var0 = var0.host;
                    var0 = var1 === var0;
                    return var0;
                }
            };
            var _closure1_slot30 = var0;
            var0 = function arg0, arg1() {
                _fun28196: for(var _fun28196_ip = 0; ; ) switch(_fun28196_ip) {
case 0:
                    var1 = arg0;
                    var2 = arg1;
                    var3 = _closure1_slot30;
                    var0 = undefined;
                    var3 = var3.bind(var0)(var1, var2);
                    var0 = null;
                    if(var3) { _fun28196_ip = 28; continue _fun28196 }
case 26:
                    return var0;
case 28:
                    var3 = var2.pathname;
                    var5 = var0 != var3;
                    var2 = '';
                    var4 = var2;
                    if(!var5) { _fun28196_ip = 51; continue _fun28196 }
case 48:
                    var4 = var3;
case 51:
                    var3 = var1.pathPrefix;
                    var5 = var0 != var3;
                    var1 = var2;
                    if(!var5) { _fun28196_ip = 70; continue _fun28196 }
case 67:
                    var1 = var3;
case 70:
                    var3 = var4.startsWith;
                    var3 = var3.bind(var4)(var1);
                    if(var3) { _fun28196_ip = 86; continue _fun28196 }
case 84:
                    return var0;
case 86:
                    var3 = var4.substring;
                    var1 = var1.length;
                    var1 = var3.bind(var4)(var1);
                    var0 = null;
                    if(!(var2 !== var1)) { _fun28196_ip = 111; continue _fun28196 }
case 108:
                    var0 = var1;
case 111:
                    return var0;
                }
            };
            var _closure1_slot31 = var0;
            var5 = function arg0() {
                _fun28197: for(var _fun28197_ip = 0; ; ) switch(_fun28197_ip) {
case 0:
                    var1 = _closure1_slot35;
                    var5 = undefined;
                    var0 = arg0;
                    var4 = var1.bind(var5)(var0);
                    var3 = null;
                    if(!(var3 != var4)) { _fun28197_ip = 168; continue _fun28197 }
case 26:
                    var0 = var4.pathname;
                    if(!(var3 != var0)) { _fun28197_ip = 168; continue _fun28197 }
case 39:
                    var0 = {};
                    var0.url = var4;
                    var6 = _closure1_slot31;
                    var1 = _closure1_slot18;
                    var1 = var6.bind(var5)(var1, var4);
                    var0.inviteHostRemainingPath = var1;
                    var1 = _closure1_slot19;
                    var1 = var6.bind(var5)(var1, var4);
                    var0.templateHostRemainingPath = var1;
                    var1 = _closure1_slot20;
                    var1 = var6.bind(var5)(var1, var4);
                    if(!(var3 == var1)) { _fun28197_ip = 107; continue _fun28197 }
case 93:
                    var7 = _closure1_slot31;
                    var6 = _closure1_slot21;
                    var1 = var7.bind(var5)(var6, var4);
case 107:
                    if(!(var3 == var1)) { _fun28197_ip = 125; continue _fun28197 }
case 111:
                    var7 = _closure1_slot31;
                    var6 = _closure1_slot22;
                    var1 = var7.bind(var5)(var6, var4);
case 125:
                    if(!(var3 == var1)) { _fun28197_ip = 143; continue _fun28197 }
case 129:
                    var7 = _closure1_slot31;
                    var6 = _closure1_slot23;
                    var1 = var7.bind(var5)(var6, var4);
case 143:
                    if(!(var3 == var1)) { _fun28197_ip = 161; continue _fun28197 }
case 147:
                    var3 = _closure1_slot31;
                    var2 = _closure1_slot24;
                    var1 = var3.bind(var5)(var2, var4);
case 161:
                    var0.primaryHostRemainingPath = var1;
                    _fun28197_ip = 178; continue _fun28197;
case 168:
                    var0 = {'url': null, 'inviteHostRemainingPath': null, 'templateHostRemainingPath': null, 'primaryHostRemainingPath': null};
case 178:
                    return var0;
                }
            };
            var _closure1_slot32 = var5;
            var8 = function arg0() {
                _fun28198: for(var _fun28198_ip = 0; ; ) switch(_fun28198_ip) {
case 0:
                    var7 = arg0;
                    var4 = null;
                    if(!(var4 != var7)) { _fun28198_ip = 247; continue _fun28198 }
case 14:
                    var0 = global;
                    var0 = var0.Set;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {constructor: {value: var0}});
                    var13 = var1;
                    var0 = new var13[var0](var12);
                    var0 = var0 instanceof Object ? var0 : var1;
                    var _closure2_slot0 = var0;
                    var0 = new Array(0);
                    var _closure2_slot1 = var0;
                    var6 = var7.replace;
                    var5 = _closure1_slot25;
                    var2 = function(arg0, arg1, arg2, arg3) { // Environment: var3
                        _fun28199: for(var _fun28199_ip = 0; ; ) switch(_fun28199_ip) {
case 0:
                            var0 = arg0;
                            var2 = null;
                            var1 = arg2;
                            if(!(var2 == var1)) { _fun28199_ip = 48; continue _fun28199 }
case 12:
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var4 = '';
                            var3 = arg1;
                            var2 = 'http://';
                            var1 = arg3;
                            var0 = var5.bind(var4)(var3, var2, var1);
case 48:
                            return var0;
                        }
                    };
                    var8 = var6.bind(var7)(var5, var2);
                    var2 = _closure1_slot26;
                    var6 = undefined;
                    var7 = var2.bind(var6)(var8);
                    var5 = var7.match;
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 7;
                    var2 = var10[var2];
                    var2 = var9.bind(var6)(var2);
                    var2 = var2.URL_REGEX;
                    var5 = var5.bind(var7)(var2);
                    var7 = var8.match;
                    var2 = _closure1_slot17;
                    var2 = var7.bind(var8)(var2);
                    var7 = var5;
                    if(!(var4 == var7)) { _fun28198_ip = 151; continue _fun28198 }
case 147:
                    var7 = new Array(0);
case 151:
                    var5 = var7.concat;
                    if(!(var4 == var2)) { _fun28198_ip = 164; continue _fun28198 }
case 160:
                    var2 = new Array(0);
case 164:
                    var2 = var5.bind(var7)(var2);
                    if(!(var4 != var2)) { _fun28198_ip = 241; continue _fun28198 }
case 173:
                    var4 = var2.length;
                    var5 = 0;
                    if(!(var5 !== var4)) { _fun28198_ip = 241; continue _fun28198 }
case 184:
                    var4 = function arg0() {
                        _fun28200: for(var _fun28200_ip = 0; ; ) switch(_fun28200_ip) {
case 0:
                            var8 = arg0;
                            var _closure3_slot0 = var8;
                            var0 = _closure2_slot1;
                            var0 = var0.length;
                            var9 = 10;
                            if(!(!(var0 >= var9))) { _fun28200_ip = 2180; continue _fun28200 }
case 31:
                            var0 = _closure1_slot32;
                            var1 = undefined;
                            var0 = var0.bind(var1)(var8);
                            var6 = var0.url;
                            var10 = var0.inviteHostRemainingPath;
                            var12 = var0.templateHostRemainingPath;
                            var7 = var0.primaryHostRemainingPath;
                            var5 = null;
                            if(!(var5 != var6)) { _fun28200_ip = 2175; continue _fun28200 }
case 77:
                            var0 = var6.pathname;
                            if(!(var5 != var0)) { _fun28200_ip = 2175; continue _fun28200 }
case 90:
                            var4 = function arg0, arg1() {
                                _fun28201: for(var _fun28201_ip = 0; ; ) switch(_fun28201_ip) {
case 0:
                                    var3 = arg1;
                                    var2 = _closure2_slot0;
                                    var1 = var2.has;
                                    var1 = var1.bind(var2)(var3);
                                    if(var1) { _fun28201_ip = 75; continue _fun28201 }
case 23:
                                    var2 = _closure2_slot0;
                                    var1 = var2.add;
                                    var1 = var1.bind(var2)(var3);
                                    var2 = _closure2_slot1;
                                    var1 = var2.push;
                                    var0 = {};
                                    var4 = arg0;
                                    var0.type = var4;
                                    var0.code = var3;
                                    var3 = _closure3_slot0;
                                    var0.url = var3;
                                    var0 = var1.bind(var2)(var0);
case 75:
                                    var0 = undefined;
                                    return var0;
                                }
                            };
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var13 = 8;
                            var0 = var0[var13];
                            var2 = var2.bind(var1)(var0);
                            var0 = var2.isBuildOverrideLink;
                            var0 = var0.bind(var2)(var8);
                            if(!var0) { _fun28200_ip = 167; continue _fun28200 }
case 129:
                            var2 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var0 = 6;
                            var0 = var14[var0];
                            var0 = var2.bind(var1)(var0);
                            var0 = var0.CodedLinkType;
                            var0 = var0.BUILD_OVERRIDE;
                            var0 = var4.bind(var1)(var0, var8);
case 167:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var13];
                            var2 = var2.bind(var1)(var0);
                            var0 = var2.isManualBuildOverrideLink;
                            var0 = var0.bind(var2)(var8);
                            if(!var0) { _fun28200_ip = 236; continue _fun28200 }
case 198:
                            var2 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var0 = 6;
                            var0 = var13[var0];
                            var0 = var2.bind(var1)(var0);
                            var0 = var0.CodedLinkType;
                            var0 = var0.MANUAL_BUILD_OVERRIDE;
                            var0 = var4.bind(var1)(var0, var8);
case 236:
                            var2 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var0 = 9;
                            var0 = var13[var0];
                            var2 = var2.bind(var1)(var0);
                            var0 = var2.isExperimentEmbedURL;
                            var0 = var0.bind(var2)(var8);
                            if(!var0) { _fun28200_ip = 308; continue _fun28200 }
case 270:
                            var2 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var0 = 6;
                            var0 = var13[var0];
                            var0 = var2.bind(var1)(var0);
                            var0 = var0.CodedLinkType;
                            var0 = var0.EXPERIMENT;
                            var0 = var4.bind(var1)(var0, var8);
case 308:
                            var2 = var5 == var10;
                            var0 = undefined;
                            if(var2) { _fun28200_ip = 332; continue _fun28200 }
case 317:
                            var13 = var10.match;
                            var2 = _closure1_slot4;
                            var0 = var13.bind(var10)(var2);
case 332:
                            if(!(var5 != var0)) { _fun28200_ip = 569; continue _fun28200 }
case 339:
                            var2 = var6.protocol;
                            var0 = 'https:';
                            if(!(var0 !== var2)) { _fun28200_ip = 370; continue _fun28200 }
case 353:
                            var2 = var6.protocol;
                            var0 = 'http:';
                            if(!(var0 === var2)) { _fun28200_ip = 569; continue _fun28200 }
case 370:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var9];
                            var14 = var2.bind(var1)(var0);
                            var13 = var14.generateInviteKeyFromUrlParams;
                            var2 = var10.substring;
                            var0 = 1;
                            var10 = var2.bind(var10)(var0);
                            var2 = var6.search;
                            var2 = var13.bind(var14)(var10, var2);
                            var13 = _closure1_slot3;
                            var10 = var13.getInvite;
                            var14 = var10.bind(var13)(var2);
                            if(!(var5 != var14)) { _fun28200_ip = 472; continue _fun28200 }
case 438:
                            var13 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var10 = 11;
                            var10 = var15[var10];
                            var13 = var13.bind(var1)(var10);
                            var10 = var13.isEmbeddedApplicationInvite;
                            var10 = var10.bind(var13)(var14);
                            if(var10) { _fun28200_ip = 531; continue _fun28200 }
case 472:
                            var13 = var8.includes;
                            var10 = '\\';
                            var10 = var13.bind(var8)(var10);
                            if(var10) { _fun28200_ip = 529; continue _fun28200 }
case 489:
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var10 = 6;
                            var10 = var14[var10];
                            var10 = var13.bind(var1)(var10);
                            var10 = var10.CodedLinkType;
                            var10 = var10.INVITE;
                            var10 = var4.bind(var1)(var10, var2);
                            _fun28200_ip = 569; continue _fun28200;
case 529:
                            return var0;
case 531:
                            var10 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var0 = 6;
                            var0 = var13[var0];
                            var0 = var10.bind(var1)(var0);
                            var0 = var0.CodedLinkType;
                            var0 = var0.EMBEDDED_ACTIVITY_INVITE;
                            var0 = var4.bind(var1)(var0, var2);
case 569:
                            var2 = var5 == var12;
                            var0 = undefined;
                            if(var2) { _fun28200_ip = 593; continue _fun28200 }
case 578:
                            var10 = var12.match;
                            var2 = _closure1_slot4;
                            var0 = var10.bind(var12)(var2);
case 593:
                            if(!(var5 != var0)) { _fun28200_ip = 649; continue _fun28200 }
case 597:
                            var2 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var0 = 6;
                            var0 = var10[var0];
                            var0 = var2.bind(var1)(var0);
                            var0 = var0.CodedLinkType;
                            var2 = var0.TEMPLATE;
                            var10 = var12.substring;
                            var0 = 1;
                            var0 = var10.bind(var12)(var0);
                            var0 = var4.bind(var1)(var2, var0);
case 649:
                            var0 = var5 == var7;
                            var13 = undefined;
                            if(var0) { _fun28200_ip = 673; continue _fun28200 }
case 658:
                            var2 = var7.match;
                            var0 = _closure1_slot6;
                            var13 = var2.bind(var7)(var0);
case 673:
                            if(!(var5 != var13)) { _fun28200_ip = 837; continue _fun28200 }
case 680:
                            var0 = 1;
                            var10 = var13[var0];
                            var2 = var10.toUpperCase;
                            var10 = var2.bind(var10)();
                            var14 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var12 = 6;
                            var2 = var2[var12];
                            var2 = var14.bind(var1)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.INVITE;
                            if(!(var10 !== var2)) { _fun28200_ip = 748; continue _fun28200 }
case 733:
                            var2 = 2;
                            var2 = var13[var2];
                            var2 = var4.bind(var1)(var10, var2);
                            _fun28200_ip = 837; continue _fun28200;
case 748:
                            var10 = var8.includes;
                            var2 = '\\';
                            var2 = var10.bind(var8)(var2);
                            if(var2) { _fun28200_ip = 2173; continue _fun28200 }
case 768:
                            var10 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var9 = var2[var9];
                            var15 = var10.bind(var1)(var9);
                            var14 = var15.generateInviteKeyFromUrlParams;
                            var9 = 2;
                            var13 = var13[var9];
                            var9 = var6.search;
                            var9 = var14.bind(var15)(var13, var9);
                            var2 = var2[var12];
                            var2 = var10.bind(var1)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.INVITE;
                            var2 = var4.bind(var1)(var2, var9);
case 837:
                            var9 = var5 == var7;
                            var2 = undefined;
                            if(var9) { _fun28200_ip = 861; continue _fun28200 }
case 846:
                            var10 = var7.match;
                            var9 = _closure1_slot5;
                            var2 = var10.bind(var7)(var9);
case 861:
                            if(!(var5 != var2)) { _fun28200_ip = 924; continue _fun28200 }
case 865:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 6;
                            var2 = var10[var2];
                            var2 = var9.bind(var1)(var2);
                            var2 = var2.CodedLinkType;
                            var9 = var2.CHANNEL_LINK;
                            var12 = var7.replace;
                            var10 = '/channels/';
                            var2 = '';
                            var2 = var12.bind(var7)(var10, var2);
                            var2 = var4.bind(var1)(var9, var2);
case 924:
                            var10 = var6.pathname;
                            var2 = var5 == var10;
                            var13 = null;
                            if(var2) { _fun28200_ip = 1020; continue _fun28200 }
case 939:
                            var9 = var10.match;
                            var2 = _closure1_slot7;
                            var12 = var9.bind(var10)(var2);
                            var9 = var5 != var12;
                            var2 = null;
                            if(!var9) { _fun28200_ip = 1017; continue _fun28200 }
case 963:
                            var9 = var12.length;
                            var10 = 4;
                            var9 = var9 >= var10;
                            var2 = null;
                            if(!var9) { _fun28200_ip = 1017; continue _fun28200 }
case 980:
                            var9 = {};
                            var14 = 1;
                            var14 = var12[var14];
                            var9.guildId = var14;
                            var14 = 2;
                            var14 = var12[var14];
                            var9.guildEventId = var14;
                            var10 = var12[var10];
                            var9.recurrenceId = var10;
                            var2 = var9;
case 1017:
                            var13 = var2;
case 1020:
                            if(!(var5 != var13)) { _fun28200_ip = 1140; continue _fun28200 }
case 1024:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 6;
                            var2 = var10[var2];
                            var2 = var9.bind(var1)(var2);
                            var2 = var2.CodedLinkType;
                            var9 = var2.EVENT;
                            var16 = var13.guildId;
                            var15 = var13.guildEventId;
                            var12 = global;
                            var2 = var12.HermesInternal;
                            var10 = var2.concat;
                            var2 = '';
                            var14 = '-';
                            var10 = var10.bind(var2)(var16, var14, var15);
                            var15 = var13.recurrenceId;
                            var15 = var5 != var15;
                            if(!var15) { _fun28200_ip = 1130; continue _fun28200 }
case 1108:
                            var13 = var13.recurrenceId;
                            var12 = var12.HermesInternal;
                            var12 = var12.concat;
                            var2 = var12.bind(var14)(var13);
case 1130:
                            var2 = var10 + var2;
                            var2 = var4.bind(var1)(var9, var2);
case 1140:
                            var9 = var5 == var7;
                            var2 = undefined;
                            if(var9) { _fun28200_ip = 1164; continue _fun28200 }
case 1149:
                            var10 = var7.match;
                            var9 = _closure1_slot15;
                            var2 = var10.bind(var7)(var9);
case 1164:
                            if(!(var5 != var2)) { _fun28200_ip = 1318; continue _fun28200 }
case 1171:
                            var2 = var6.query;
                            if(!(var5 != var2)) { _fun28200_ip = 1318; continue _fun28200 }
case 1184:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 12;
                            var2 = var10[var2];
                            var10 = var9.bind(var1)(var2);
                            var9 = var10.parseOAuth2AuthorizeProps;
                            var2 = var6.query;
                            var10 = var9.bind(var10)(var2);
                            var9 = var10.clientId;
                            var2 = var5 == var9;
                            if(var2) { _fun28200_ip = 1242; continue _fun28200 }
case 1234:
                            var12 = '';
                            var2 = var12 === var9;
case 1242:
                            if(var2) { _fun28200_ip = 1277; continue _fun28200 }
case 1245:
                            var13 = var10.scopes;
                            var10 = var5 != var13;
                            if(!var10) { _fun28200_ip = 1274; continue _fun28200 }
case 1258:
                            var12 = var13.some;
                            var11 = function(arg0) { // Environment: var11
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                var0 = var0.OAuth2Scopes;
                                var1 = var0.APPLICATIONS_COMMANDS;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var10 = var12.bind(var13)(var11);
case 1274:
                            var2 = var10;
case 1277:
                            if(var2) { _fun28200_ip = 1318; continue _fun28200 }
case 1280:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var2 = 6;
                            var2 = var11[var2];
                            var2 = var10.bind(var1)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.APP_OAUTH2_LINK;
                            var2 = var4.bind(var1)(var2, var9);
case 1318:
                            var2 = var5 == var7;
                            var9 = undefined;
                            if(var2) { _fun28200_ip = 1342; continue _fun28200 }
case 1327:
                            var10 = var7.match;
                            var2 = _closure1_slot8;
                            var9 = var10.bind(var7)(var2);
case 1342:
                            if(!(var5 != var9)) { _fun28200_ip = 1391; continue _fun28200 }
case 1346:
                            var2 = 2;
                            var9 = var9[var2];
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var2 = 6;
                            var2 = var11[var2];
                            var2 = var10.bind(var1)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.APP_DIRECTORY_PROFILE;
                            var2 = var4.bind(var1)(var2, var9);
case 1391:
                            var2 = var5 == var7;
                            var9 = undefined;
                            if(var2) { _fun28200_ip = 1415; continue _fun28200 }
case 1400:
                            var10 = var7.match;
                            var2 = _closure1_slot9;
                            var9 = var10.bind(var7)(var2);
case 1415:
                            if(!(var5 != var9)) { _fun28200_ip = 1539; continue _fun28200 }
case 1419:
                            var2 = 2;
                            var13 = var9[var2];
                            var2 = 3;
                            var12 = var9[var2];
                            if(!(var5 == var12)) { _fun28200_ip = 1477; continue _fun28200 }
case 1437:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 6;
                            var2 = var10[var2];
                            var2 = var9.bind(var1)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.APP_DIRECTORY_STOREFRONT;
                            var2 = var4.bind(var1)(var2, var13);
                            _fun28200_ip = 1539; continue _fun28200;
case 1477:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var2 = 14;
                            var2 = var11[var2];
                            var9 = var10.bind(var1)(var2);
                            var2 = var9.makeStorefrontSKUCodedLink;
                            var9 = var2.bind(var9)(var13, var12);
                            var2 = 6;
                            var2 = var11[var2];
                            var2 = var10.bind(var1)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.APP_DIRECTORY_STOREFRONT_SKU;
                            var2 = var4.bind(var1)(var2, var9);
case 1539:
                            var2 = var5 == var7;
                            var9 = undefined;
                            if(var2) { _fun28200_ip = 1563; continue _fun28200 }
case 1548:
                            var10 = var7.match;
                            var2 = _closure1_slot10;
                            var9 = var10.bind(var7)(var2);
case 1563:
                            if(!(var5 != var9)) { _fun28200_ip = 1612; continue _fun28200 }
case 1567:
                            var2 = 1;
                            var9 = var9[var2];
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var2 = 6;
                            var2 = var11[var2];
                            var2 = var10.bind(var1)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.ACTIVITY_BOOKMARK;
                            var2 = var4.bind(var1)(var2, var9);
case 1612:
                            var2 = var5 == var7;
                            var10 = undefined;
                            if(var2) { _fun28200_ip = 1636; continue _fun28200 }
case 1621:
                            var9 = var7.match;
                            var2 = _closure1_slot11;
                            var10 = var9.bind(var7)(var2);
case 1636:
                            if(!(var5 != var10)) { _fun28200_ip = 1720; continue _fun28200 }
case 1640:
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var2 = 6;
                            var2 = var11[var2];
                            var2 = var9.bind(var1)(var2);
                            var2 = var2.CodedLinkType;
                            var9 = var2.GUILD_PRODUCT;
                            var2 = 1;
                            var13 = var10[var2];
                            var2 = 2;
                            var12 = var10[var2];
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var11 = var2.concat;
                            var10 = '';
                            var2 = '-';
                            var2 = var11.bind(var10)(var13, var2, var12);
                            var2 = var4.bind(var1)(var9, var2);
case 1720:
                            var2 = var5 == var7;
                            var10 = undefined;
                            if(var2) { _fun28200_ip = 1744; continue _fun28200 }
case 1729:
                            var9 = var7.match;
                            var2 = _closure1_slot13;
                            var10 = var9.bind(var7)(var2);
case 1744:
                            if(!(var5 != var10)) { _fun28200_ip = 1793; continue _fun28200 }
case 1748:
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var2 = 6;
                            var2 = var11[var2];
                            var2 = var9.bind(var1)(var2);
                            var2 = var2.CodedLinkType;
                            var9 = var2.SERVER_SHOP;
                            var2 = 1;
                            var2 = var10[var2];
                            var2 = var4.bind(var1)(var9, var2);
case 1793:
                            var2 = var5 == var7;
                            var10 = undefined;
                            if(var2) { _fun28200_ip = 1817; continue _fun28200 }
case 1802:
                            var9 = var7.match;
                            var2 = _closure1_slot12;
                            var10 = var9.bind(var7)(var2);
case 1817:
                            if(!(var5 != var10)) { _fun28200_ip = 1912; continue _fun28200 }
case 1821:
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var2 = 6;
                            var2 = var11[var2];
                            var2 = var9.bind(var1)(var2);
                            var2 = var2.CodedLinkType;
                            var9 = var2.SOCIAL_LAYER_STOREFRONT;
                            var2 = 3;
                            var13 = var10[var2];
                            var2 = 1;
                            var12 = var10[var2];
                            if(!(var5 == var12)) { _fun28200_ip = 1878; continue _fun28200 }
case 1871:
                            var2 = 2;
                            var12 = var10[var2];
case 1878:
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var11 = var2.concat;
                            var10 = '';
                            var2 = '-';
                            var2 = var11.bind(var10)(var13, var2, var12);
                            var2 = var4.bind(var1)(var9, var2);
case 1912:
                            var2 = _closure1_slot34;
                            var8 = var2.bind(var1)(var8);
                            if(!(var5 != var8)) { _fun28200_ip = 1963; continue _fun28200 }
case 1925:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = 6;
                            var2 = var10[var2];
                            var2 = var9.bind(var1)(var2);
                            var2 = var2.CodedLinkType;
                            var2 = var2.QUESTS_EMBED;
                            var2 = var4.bind(var1)(var2, var8);
case 1963:
                            var2 = '/shop';
                            if(!(var2 === var7)) { _fun28200_ip = 2171; continue _fun28200 }
case 1976:
                            var2 = var6.query;
                            var7 = var5 != var2;
                            var2 = null;
                            if(!var7) { _fun28200_ip = 2034; continue _fun28200 }
case 1991:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 15;
                            var7 = var9[var7];
                            var9 = var8.bind(var1)(var7);
                            var8 = var9.parse;
                            var7 = var6.query;
                            var7 = var8.bind(var9)(var7);
                            var2 = var7.tab;
case 2034:
                            var8 = var6.hash;
                            var6 = var5 == var8;
                            var9 = undefined;
                            if(var6) { _fun28200_ip = 2063; continue _fun28200 }
case 2048:
                            var7 = var8.match;
                            var6 = _closure1_slot16;
                            var9 = var7.bind(var8)(var6);
case 2063:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 6;
                            var3 = var7[var3];
                            var3 = var6.bind(var1)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.COLLECTIBLES_SHOP;
                            var6 = var5 != var2;
                            var8 = '';
                            var7 = var8;
                            if(!var6) { _fun28200_ip = 2112; continue _fun28200 }
case 2109:
                            var7 = var2;
case 2112:
                            var6 = var5 == var9;
                            var2 = undefined;
                            if(var6) { _fun28200_ip = 2128; continue _fun28200 }
case 2121:
                            var6 = 1;
                            var2 = var9[var6];
case 2128:
                            var5 = var5 != var2;
                            var6 = var8;
                            if(!var5) { _fun28200_ip = 2141; continue _fun28200 }
case 2138:
                            var6 = var2;
case 2141:
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var5 = var2.concat;
                            var2 = '-';
                            var2 = var5.bind(var8)(var7, var2, var6);
                            var2 = var4.bind(var1)(var3, var2);
case 2171:
                            return var1;
case 2173:
                            return var0;
case 2175:
                            var0 = 1;
                            return var0;
case 2180:
                            var0 = 0;
                            return var0;
                        }
                    };
                    var1 = _closure1_slot28;
                    var3 = var1.bind(var6)(var2);
                    var2 = var3.bind(var6)();
                    var1 = var2.done;
                    if(var1) { _fun28198_ip = 239; continue _fun28198 }
case 210:
                    var1 = var2.value;
                    var1 = var4.bind(var6)(var1);
                    if(!(var5 !== var1)) { _fun28198_ip = 239; continue _fun28198 }
case 224:
                    var7 = var3.bind(var6)();
                    var1 = var7.done;
                    var2 = var7;
                    if(!var1) { _fun28198_ip = 210; continue _fun28198 }
case 239:
                    return var0;
case 241:
                    var0 = new Array(0);
                    return var0;
case 247:
                    var0 = new Array(0);
                    return var0;
                }
            };
            var _closure1_slot33 = var8;
            var4 = function arg0() {
                _fun28203: for(var _fun28203_ip = 0; ; ) switch(_fun28203_ip) {
case 0:
                    var3 = _closure1_slot32;
                    var1 = undefined;
                    var0 = arg0;
                    var4 = var3.bind(var1)(var0);
                    var0 = null;
                    var5 = var0 == var4;
                    var3 = undefined;
                    if(var5) { _fun28203_ip = 58; continue _fun28203 }
case 28:
                    var5 = var4.primaryHostRemainingPath;
                    var4 = var0 == var5;
                    var3 = undefined;
                    if(var4) { _fun28203_ip = 58; continue _fun28203 }
case 43:
                    var4 = var5.match;
                    var2 = _closure1_slot14;
                    var3 = var4.bind(var5)(var2);
case 58:
                    var2 = var0 == var3;
                    var1 = undefined;
                    if(var2) { _fun28203_ip = 74; continue _fun28203 }
case 67:
                    var2 = 1;
                    var1 = var3[var2];
case 74:
                    var2 = var0 != var1;
                    var0 = null;
                    if(!var2) { _fun28203_ip = 86; continue _fun28203 }
case 83:
                    var0 = var1;
case 86:
                    return var0;
                }
            };
            var _closure1_slot34 = var4;
            var3 = function arg0() {
                _fun28204: for(var _fun28204_ip = 0; ; ) switch(_fun28204_ip) {
case 0:
                    var0 = arg0;
case 3: // try_start_0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.parse;
                    var0 = var1.bind(var2)(var0);
case 39: // try_end0
                    return var0;
case 41: // catch_target0
                    CatchBlockStart(arg_register=0);
                    var0 = null;
                    return var0;
                }
            };
            var _closure1_slot35 = var3;
            var9 = global;
            var12 = var9.Object;
            var7 = var12.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var12)(var2, var0, var6);
            var12 = 0;
            var6 = var11[var12];
            var0 = undefined;
            var6 = var17.bind(var0)(var6);
            var _closure1_slot3 = var6;
            var16 = 1;
            var6 = var11[var16];
            var6 = var10.bind(var0)(var6);
            var19 = var6.PRIMARY_DOMAIN;
            var6 = /^\\/([a-zA-Z0-9-]+)$/;
            var _closure1_slot4 = var6;
            var6 = /^\\/channels\\/([0-9]+|@me)\\/([0-9]+)$/;
            var _closure1_slot5 = var6;
            var6 = /^\\/(invite|template)\\/([a-zA-Z0-9-]+)\\/?\.?$/;
            var _closure1_slot6 = var6;
            var13 = var9.RegExp;
            var6 = var13.prototype;
            var7 = Object.create(var6, {constructor: {value: var13}});
            var28 = '^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?';
            var29 = var7;
            var6 = new var29[var13](var28, var27);
            var6 = var6 instanceof Object ? var6 : var7;
            var _closure1_slot7 = var6;
            var6 = /^\\/(application-directory|discovery\\/applications)\\/([0-9-]+)\\/?((about|images|privacy)\\/?)?$/;
            var _closure1_slot8 = var6;
            var6 = /^\\/(application-directory|discovery\\/applications)\\/([0-9-]+)\\/store\\/?([0-9-]+)?\\/?$/;
            var _closure1_slot9 = var6;
            var6 = /^\\/activities\\/([0-9-]+)\\/?$/;
            var _closure1_slot10 = var6;
            var6 = /^\\/channels\\/([0-9]+)\\/shop\\/([0-9]+)$/;
            var _closure1_slot11 = var6;
            var6 = /^(?:\\/game-shop\\/([0-9]+)|\\/channels\\/([0-9]+)\\/game-shop\\/(?:[0-9]+))\\/([0-9]+)(?:\\/([^\\/]+))?$/;
            var _closure1_slot12 = var6;
            var6 = /^\\/channels\\/([0-9]+)\\/shop$/;
            var _closure1_slot13 = var6;
            var6 = /^\\/quests\\/([0-9-]+)\\/?$/;
            var _closure1_slot14 = var6;
            var6 = /^\\/oauth2\\/authorize/;
            var _closure1_slot15 = var6;
            var6 = /^#itemSkuId=([0-9]+)$/;
            var _closure1_slot16 = var6;
            var7 = /dev:\\/\\/[\w-.~:\\/?#\[\]@!$&'()*+,;=%]+/i;
            var _closure1_slot17 = var7;
            var6 = var9.window;
            var6 = var6.GLOBAL_ENV;
            var6 = var6.INVITE_HOST;
            var14 = var15.bind(var0)(var6);
            var _closure1_slot18 = var14;
            var6 = var9.window;
            var6 = var6.GLOBAL_ENV;
            var6 = var6.GUILD_TEMPLATE_HOST;
            var21 = var15.bind(var0)(var6);
            var _closure1_slot19 = var21;
            var6 = var9.window;
            var6 = var6.GLOBAL_ENV;
            var6 = var6.WEBAPP_ENDPOINT;
            var18 = null;
            if(!(var18 == var6)) { _fun28190_ip = 540; continue _fun28190 }
case 518:
            var13 = var9.HermesInternal;
            var20 = var13.concat;
            var13 = '//canary.';
            var6 = var20.bind(var13)(var19);
case 540:
            var20 = var15.bind(var0)(var6);
            var _closure1_slot20 = var20;
            var6 = var9.HermesInternal;
            var13 = var6.concat;
            var6 = '//canary.';
            var6 = var13.bind(var6)(var19);
            var6 = var15.bind(var0)(var6);
            var _closure1_slot21 = var6;
            var6 = var9.HermesInternal;
            var13 = var6.concat;
            var6 = '//ptb.';
            var6 = var13.bind(var6)(var19);
            var6 = var15.bind(var0)(var6);
            var _closure1_slot22 = var6;
            var6 = 'discordapp.com';
            var13 = var15.bind(var0)(var6);
            var _closure1_slot23 = var13;
            var6 = 'discord.com';
            var19 = var15.bind(var0)(var6);
            var _closure1_slot24 = var19;
            var6 = 2;
            var15 = var11[var6];
            var23 = var17.bind(var0)(var15);
            var22 = var23.escape;
            var24 = var14.host;
            var25 = var18 != var24;
            var15 = '';
            var14 = var15;
            if(!var25) { _fun28190_ip = 682; continue _fun28190 }
case 679:
            var14 = var24;
case 682:
            var22 = var22.bind(var23)(var14);
            var14 = new Array(5);
            var14[0] = var22;
            var22 = var11[var6];
            var23 = var17.bind(var0)(var22);
            var22 = var23.escape;
            var24 = var21.host;
            var25 = var18 != var24;
            var21 = var15;
            if(!var25) { _fun28190_ip = 729; continue _fun28190 }
case 726:
            var21 = var24;
case 729:
            var21 = var22.bind(var23)(var21);
            var14[1] = var21;
            var21 = var11[var6];
            var22 = var17.bind(var0)(var21);
            var21 = var22.escape;
            var23 = var20.host;
            var24 = var18 != var23;
            var20 = var15;
            if(!var24) { _fun28190_ip = 772; continue _fun28190 }
case 769:
            var20 = var23;
case 772:
            var20 = var21.bind(var22)(var20);
            var14[2] = var20;
            var20 = var11[var6];
            var21 = var17.bind(var0)(var20);
            var20 = var21.escape;
            var22 = var13.host;
            var23 = var18 != var22;
            var13 = var15;
            if(!var23) { _fun28190_ip = 815; continue _fun28190 }
case 812:
            var13 = var22;
case 815:
            var13 = var20.bind(var21)(var13);
            var14[3] = var13;
            var6 = var11[var6];
            var13 = var17.bind(var0)(var6);
            var6 = var13.escape;
            var19 = var19.host;
            var20 = var18 != var19;
            if(!var20) { _fun28190_ip = 855; continue _fun28190 }
case 852:
            var15 = var19;
case 855:
            var6 = var6.bind(var13)(var15);
            var14[4] = var6;
            var13 = var14.filter;
            var6 = var9.Boolean;
            var14 = var13.bind(var14)(var6);
            var15 = var9.RegExp;
            var13 = var14.join;
            var6 = '|';
            var19 = var13.bind(var14)(var6);
            var6 = var9.HermesInternal;
            var14 = var6.concat;
            var13 = '((https?://[^ ]*)|^|[^/][^/.])(';
            var6 = ')';
            var28 = var14.bind(var13)(var19, var6);
            var13 = var15.prototype;
            var13 = Object.create(var13, {constructor: {value: var15}});
            var14 = 'g';
            var29 = var13;
            var27 = var14;
            var6 = new var29[var15](var28, var27, var26);
            var6 = var6 instanceof Object ? var6 : var13;
            var _closure1_slot25 = var6;
            var6 = function arg0() {
                var3 = arg0;
                var2 = var3.replaceAll;
                var1 = _closure1_slot27;
                var0 = ' $2 ';
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var _closure1_slot26 = var6;
            var13 = 4;
            var13 = var11[var13];
            var13 = var17.bind(var0)(var13);
            var13 = var13.defaultRules;
            var15 = var13.link;
            var19 = var18 == var15;
            var13 = undefined;
            if(var19) { _fun28190_ip = 1035; continue _fun28190 }
case 1000:
            var15 = var15.match;
            var19 = var18 == var15;
            var13 = undefined;
            if(var19) { _fun28190_ip = 1035; continue _fun28190 }
case 1015:
            var15 = var15.regex;
            var18 = var18 == var15;
            var13 = undefined;
            if(var18) { _fun28190_ip = 1035; continue _fun28190 }
case 1030:
            var13 = var15.source;
case 1035:
            var15 = 5;
            var15 = var11[var15];
            var17 = var17.bind(var0)(var15);
            var15 = 'SimpleMarkdown link regex is not set.';
            var15 = var17.bind(var0)(var13, var15);
            var17 = var13[var12];
            var12 = '^';
            var15 = var13;
            var13 = var15;
            if(!(var12 === var17)) { _fun28190_ip = 1088; continue _fun28190 }
case 1077:
            var12 = var15.substring;
            var13 = var12.bind(var15)(var16);
case 1088:
            var9 = var9.RegExp;
            var12 = var9.prototype;
            var12 = Object.create(var12, {constructor: {value: var9}});
            var29 = var12;
            var28 = var13;
            var27 = var14;
            var9 = new var29[var9](var28, var27, var26);
            var9 = var9 instanceof Object ? var9 : var12;
            var _closure1_slot27 = var9;
            var9 = 16;
            var9 = var11[var9];
            var11 = var10.bind(var0)(var9);
            var10 = var11.fileFinishedImporting;
            var9 = 'modules/coded_links/findCodedLinks.tsx';
            var9 = var10.bind(var11)(var9);
            var2.default = var8;
            var2.DEVLINK_REGEX = var7;
            var2.stripMarkdownLinkSyntax = var6;
            var6 = function arg0() {
                _fun28206: for(var _fun28206_ip = 0; ; ) switch(_fun28206_ip) {
case 0:
                    var4 = arg0;
                    var2 = _closure1_slot31;
                    var0 = _closure1_slot20;
                    var3 = undefined;
                    var0 = var2.bind(var3)(var0, var4);
                    var2 = null;
                    if(!(var2 == var0)) { _fun28206_ip = 42; continue _fun28206 }
case 28:
                    var6 = _closure1_slot31;
                    var5 = _closure1_slot21;
                    var0 = var6.bind(var3)(var5, var4);
case 42:
                    if(!(var2 == var0)) { _fun28206_ip = 60; continue _fun28206 }
case 46:
                    var6 = _closure1_slot31;
                    var5 = _closure1_slot22;
                    var0 = var6.bind(var3)(var5, var4);
case 60:
                    if(!(var2 == var0)) { _fun28206_ip = 78; continue _fun28206 }
case 64:
                    var6 = _closure1_slot31;
                    var5 = _closure1_slot23;
                    var0 = var6.bind(var3)(var5, var4);
case 78:
                    if(!(var2 == var0)) { _fun28206_ip = 96; continue _fun28206 }
case 82:
                    var2 = _closure1_slot31;
                    var1 = _closure1_slot24;
                    var0 = var2.bind(var3)(var1, var4);
case 96:
                    return var0;
                }
            };
            var2.remainingPathFromDiscordHostMatch = var6;
            var2.getPathsFromURL = var5;
            var5 = function arg0() {
                _fun28207: for(var _fun28207_ip = 0; ; ) switch(_fun28207_ip) {
case 0:
                    var1 = arg0;
                    var2 = var1.includes;
                    var0 = '\\';
                    var0 = var2.bind(var1)(var0);
                    if(!var0) { _fun28207_ip = 132; continue _fun28207 }
case 22:
                    var0 = _closure1_slot35;
                    var6 = undefined;
                    var1 = var0.bind(var6)(var1);
                    var _closure2_slot0 = var1;
                    var0 = null;
                    if(!(var0 != var1)) { _fun28207_ip = 219; continue _fun28207 }
case 49:
                    var5 = _closure1_slot30;
                    var4 = _closure1_slot18;
                    var4 = var5.bind(var6)(var4, var1);
                    if(var4) { _fun28207_ip = 215; continue _fun28207 }
case 69:
                    var4 = _closure1_slot20;
                    var5 = new Array(5);
                    var5[0] = var4;
                    var4 = _closure1_slot21;
                    var5[1] = var4;
                    var4 = _closure1_slot22;
                    var5[2] = var4;
                    var4 = _closure1_slot23;
                    var5[3] = var4;
                    var4 = _closure1_slot24;
                    var5[4] = var4;
                    var4 = var5.some;
                    var3 = function(arg0) { // Environment: var3
                        var3 = _closure1_slot30;
                        var2 = _closure2_slot0;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var3.bind(var1)(var0, var2);
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun28207_ip = 136; continue _fun28207 }
case 132:
                    var3 = false;
                    return var3;
case 136:
                    var4 = var1.pathname;
                    var3 = var0 == var4;
                    var1 = undefined;
                    if(var3) { _fun28207_ip = 203; continue _fun28207 }
case 151:
                    var3 = var4.toUpperCase;
                    var4 = var3.bind(var4)();
                    var3 = var4.includes;
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 6;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.CodedLinkType;
                    var2 = var2.INVITE;
                    var1 = var3.bind(var4)(var2);
case 203:
                    var0 = var0 != var1;
                    if(!var0) { _fun28207_ip = 213; continue _fun28207 }
case 210:
                    var0 = var1;
case 213:
                    return var0;
case 215:
                    var0 = true;
                    return var0;
case 219:
                    var0 = false;
                    return var0;
                }
            };
            var2.isSuspiciousCodedLink = var5;
            var2.parseQuestsEmbedCode = var4;
            var2.parseURLSafely = var3;
            var1 = function arg0() {
                var2 = _closure1_slot33;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = 0;
                var0 = var1[var0];
                return var0;
            };
            var2.findCodedLink = var1;
            return var0;
        }})(undefined,undefined,undefined,undefined,undefined,undefined,[3284,660,3287,1459,3107,44,3288,1457,1592,3289,3285,3294,3298,3300,3304,3301,2]);