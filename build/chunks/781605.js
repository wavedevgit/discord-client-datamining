/** Chunk was on web.js **/
/** chunk id: 781605, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
}), n(321073);
var r = n(627968);
n(64700);
var i = n(735438),
    a = n.n(i),
    o = n(397927),
    s = n(707606),
    l = n(403362),
    c = n(88445);
let u = 99,
    d = e => {
        let {
            member: t,
            empty: n,
            guildId: i
        } = e;
        return n || null == t ? (0, r.jsx)("div", {
            className: c.pO
        }) : (0, r.jsx)("div", {
            className: c.pO,
            children: (0, r.jsx)(o.euF, {
                src: t.getAvatarURL(i, 16),
                "aria-label": t.username,
                size: o._3J.SIZE_16,
                className: c.pO
            })
        })
    },
    f = (0, s.A)(d),
    p = e => {
        let {
            partySize: t,
            members: n,
            minAvatarsShown: i = 1,
            maxAvatarsShown: o = 2,
            guildId: s
        } = e, {
            totalSize: d,
            knownSize: p
        } = t;
        if (d < i) return null;
        let _ = a()(n).filter(l.Vq).take(o).map(e => (0, r.jsx)(f, {
                member: e,
                guildId: s
            }, e.id)).value(),
            h = d - p;
        for (let e = 0; e < h && _.length < o; e++) _.push((0, r.jsx)(f, {
            empty: !0,
            guildId: s
        }, "empty-member-".concat(e)));
        let m = Math.max(Math.min(d - _.length, u), 0);
        if (1 === m) {
            let e = n[o];
            _.push((0, r.jsx)(f, {
                member: e,
                guildId: s
            }, e.id))
        }
        return (0, r.jsx)("div", {
            className: c.iE,
            children: (0, r.jsxs)("div", {
                className: c.S3,
                children: [_, m > 1 ? (0, r.jsxs)("div", {
                    className: c.Hi,
                    children: ["+", m]
                }) : null]
            })
        })
    }