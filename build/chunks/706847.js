/** chunk id: 706847 params = (module,exports,require) **/
n.d(t, {
    p: () => g,
    z: () => p
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(397927),
    o = n(58149),
    c = n(954571),
    d = n(867455),
    u = n(406704),
    h = n(652215),
    m = n(985018),
    A = n(916168);

function g(e) {
    let {
        channel: t,
        narrow: n
    } = e, s = (0, u.lK)(t);
    return l.useEffect(() => {
        c.default.track(h.HAw.CHANNEL_BANNER_VIEWED, {
            ...(0, o.H$)(t.getGuildId()),
            ...(0, o.dI)(t),
            banner_type: "thread"
        })
    }, [t]), (0, i.jsxs)("div", {
        className: a()(A.JD, {
            [A.sc]: n
        }),
        children: [(0, i.jsx)(r.Text, {
            className: A.E5,
            variant: "text-sm/normal",
            color: "text-default",
            children: t.isForumPost() ? m.intl.string(m.t["833FDn"]) : m.intl.string(m.t.rEeodK)
        }), s ? (0, i.jsx)(r.Button, {
            variant: "secondary",
            text: m.intl.string(m.t["0dvvEi"]),
            onClick: () => {
                c.default.track(h.HAw.CHANNEL_BANNER_CTA_CLICKED, {
                    ...(0, o.H$)(t.getGuildId()),
                    ...(0, o.dI)(t),
                    banner_type: "thread",
                    cta_type: "unarchive"
                }), d.A.unarchiveThread(t, !1)
            },
            size: "sm"
        }) : null]
    })
}

function p(e) {
    let {
        channel: t,
        narrow: n
    } = e, s = (0, u.H_)(t);
    return l.useEffect(() => {
        c.default.track(h.HAw.CHANNEL_BANNER_VIEWED, {
            ...(0, o.H$)(t.getGuildId()),
            ...(0, o.dI)(t),
            banner_type: "thread"
        })
    }, [t]), (0, i.jsxs)("div", {
        className: a()(A.JD, {
            [A.sc]: n
        }),
        children: [(0, i.jsx)(r.Text, {
            className: A.E5,
            variant: "text-sm/normal",
            color: "text-default",
            children: t.isForumPost() ? m.intl.string(m.t.E7oO8u) : m.intl.string(m.t["V/JF2N"])
        }), s ? (0, i.jsx)(r.Button, {
            variant: "secondary",
            text: m.intl.string(m.t.zA9d1J),
            onClick: () => {
                c.default.track(h.HAw.CHANNEL_BANNER_CTA_CLICKED, {
                    ...(0, o.H$)(t.getGuildId()),
                    ...(0, o.dI)(t),
                    banner_type: "thread",
                    cta_type: "unlock"
                }), d.A.unlockThread(t)
            },
            size: "sm"
        }) : null]
    })
}