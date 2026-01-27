/** Chunk was on web.js **/
/** chunk id: 27548, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    qA: () => o
}), n(734057);
var r = n(498642),
    i = n(652215);
let a = 1e4;

function o(e) {
    var t;
    let n = null != (t = r.A.getMemberCount(null == e ? void 0 : e.guild_id)) ? t : 0;
    return null != e && e.type !== i.rbe.DM && e.type !== i.rbe.GROUP_DM && n >= a
}