/** Chunk was on web.js **/
/** chunk id: 285933, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(954571),
    i = n(981616),
    a = n(272984),
    o = n(652215);
let s = [a.Qp.USER_ACTIVITY_SYNC, a.Qp.EMBED_SYNC];

function l(e, t, n, a) {
    r.default.track(o.HAw.SPOTIFY_BUTTON_CLICKED, {
        type: e,
        source: a,
        is_premium: (0, i.mD)(),
        party_id: s.includes(e) && (null == n ? void 0 : n.party) != null ? n.party.id : null,
        other_user_id: t.id
    })
}