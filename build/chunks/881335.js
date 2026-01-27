/** Chunk was on web.js **/
/** chunk id: 881335, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(729937),
    i = n(981616),
    a = n(285933),
    o = n(227005);
async function s(e, t, n) {
    let {
        hasSpotifyAccount: s,
        activity: l,
        user: c
    } = e;
    (0, o.A)(s) && null != l && null != l.sync_id && (await (0, i.dM)(), r.ZH(l, c.id), (0, a.A)(t, c, l, n))
}