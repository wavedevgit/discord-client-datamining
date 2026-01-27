/** Chunk was on web.js **/
/** chunk id: 123166, original params: e,t,n (module,exports,require) **/
"use strict";
var r, i, a = n(860511),
    o = n(65978),
    s = a.process,
    l = a.Deno,
    c = s && s.versions || l && l.version,
    u = c && c.v8;
u && (i = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !i && o && (!(r = o.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = o.match(/Chrome\/(\d+)/)) && (i = +r[1]), e.exports = i