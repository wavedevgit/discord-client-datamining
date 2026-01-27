/** Chunk was on web.js **/
/** chunk id: 249790, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    o = n(994500),
    s = n(231156);

function l(e) {
    let {
        user: t,
        guildId: n,
        iconColor: l
    } = e, c = (0, i.bG)([o.A], () => o.A.isBlocked(t.id));
    return (0, r.jsxs)("div", {
        className: s.kL,
        children: [(0, r.jsx)(a.euF, {
            className: s.my,
            size: a._3J.SIZE_56,
            src: t.getAvatarURL(n, 64),
            "aria-label": t.username
        }), (0, r.jsx)("div", {
            className: s.mI,
            children: c ? (0, r.jsx)(a.KTN, {
                color: l
            }) : (0, r.jsx)(a.G3N, {
                color: l
            })
        })]
    })
}