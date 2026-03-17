/** chunk id: 281489 params = (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(735438),
    l = n.n(r),
    s = n(397927),
    o = n(793574),
    d = n(342296),
    c = n(988647),
    u = n(403362),
    A = n(641017);
let h = e => {
        let {
            member: t,
            empty: n,
            guildId: r
        } = e, l = a.useRef(null);
        return n ? (0, i.jsx)("div", {
            className: A._b
        }) : null == t ? (0, i.jsx)("div", {
            className: A.j7,
            children: (0, i.jsx)(c.A, {
                className: A.s$
            })
        }) : (0, i.jsx)("div", {
            className: A.sR,
            children: (0, i.jsx)(d.A, {
                targetElementRef: l,
                userId: t.id,
                guildId: r,
                newAnalyticsLocations: [o.A.AVATAR],
                position: "left",
                clickTrap: !0,
                children: e => (0, i.jsx)(s.euF, {
                    ...e,
                    ref: l,
                    src: t.getAvatarURL(r, 24),
                    "aria-label": t.username,
                    size: s._3J.SIZE_24,
                    className: A.pO
                })
            })
        })
    },
    _ = e => {
        let {
            partySize: t,
            members: n,
            minAvatarsShown: a = 1,
            maxAvatarsShown: r = 2,
            guildId: s
        } = e, {
            unknownSize: o,
            totalSize: d,
            knownSize: c
        } = t;
        if (d < a) return null;
        let _ = l()(n).filter(u.Vq).take(r).map(e => (0, i.jsx)(h, {
            member: e,
            guildId: s
        }, e.id)).value();
        for (let e = 0; e < o && _.length < r; e++) _.push((0, i.jsx)(h, {
            guildId: s
        }, `unknown-member-${e}`));
        let m = d - c - o;
        for (let e = 0; e < m && _.length < r; e++) _.push((0, i.jsx)(h, {
            empty: !0,
            guildId: s
        }, `empty-member-${e}`));
        let g = Math.max(Math.min(d - _.length, 99), 0);
        if (1 === g) {
            let e = n[r];
            _.push((0, i.jsx)(h, {
                member: e,
                guildId: s
            }, e.id))
        }
        return (0, i.jsx)("div", {
            className: A.iE,
            children: (0, i.jsxs)("div", {
                className: A.S3,
                children: [_, g > 1 ? (0, i.jsxs)("div", {
                    className: A.Hi,
                    children: ["+", g]
                }) : null]
            })
        })
    }