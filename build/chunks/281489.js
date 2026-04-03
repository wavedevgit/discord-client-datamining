/** chunk id: 281489 params = (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(435371),
    o = n(397927),
    d = n(793574),
    c = n(342296),
    u = n(988647),
    m = n(403362),
    _ = n(562153),
    h = n(13806);
let p = e => {
        let {
            member: t,
            empty: n,
            guildId: r
        } = e, s = l.useRef(null);
        return n ? (0, i.jsx)("div", {
            className: h._b
        }) : null == t ? (0, i.jsx)("div", {
            className: h.j7,
            children: (0, i.jsx)(u.A, {
                className: h.s$
            })
        }) : (0, i.jsx)("div", {
            className: h.sR,
            children: (0, i.jsx)(c.A, {
                targetElementRef: s,
                userId: t.id,
                guildId: r,
                newAnalyticsLocations: [d.A.AVATAR],
                position: "left",
                clickTrap: !0,
                children: e => (0, i.jsx)(a.m_, {
                    text: _.Ay.getName(r, void 0, t),
                    children: (0, i.jsx)(o.euF, {
                        ...e,
                        ref: s,
                        src: t.getAvatarURL(r, 24),
                        "aria-label": t.username,
                        size: o._3J.SIZE_24,
                        className: h.pO
                    })
                })
            })
        })
    },
    g = e => {
        let {
            partySize: t,
            members: n,
            minAvatarsShown: l = 1,
            maxAvatarsShown: r = 2,
            guildId: a,
            overflowRef: o
        } = e, {
            unknownSize: d,
            totalSize: c,
            knownSize: u
        } = t;
        if (c < l) return null;
        let _ = s()(n).filter(m.Vq).take(r).map(e => (0, i.jsx)(p, {
            member: e,
            guildId: a
        }, e.id)).value();
        for (let e = 0; e < d && _.length < r; e++) _.push((0, i.jsx)(p, {
            guildId: a
        }, `unknown-member-${e}`));
        let g = c - u - d;
        for (let e = 0; e < g && _.length < r; e++) _.push((0, i.jsx)(p, {
            empty: !0,
            guildId: a
        }, `empty-member-${e}`));
        let A = Math.max(Math.min(c - _.length, 99), 0);
        if (1 === A) {
            let e = n[r];
            _.push((0, i.jsx)(p, {
                member: e,
                guildId: a
            }, e.id))
        }
        return (0, i.jsx)("div", {
            className: h.iE,
            children: (0, i.jsxs)("div", {
                className: h.S3,
                children: [_, A > 1 ? (0, i.jsxs)("div", {
                    className: h.Hi,
                    ref: o,
                    children: ["+", A]
                }) : null]
            })
        })
    }