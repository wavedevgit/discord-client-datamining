/** chunk id: 539548 params = (module,exports,require) **/
t.d(n, {
    A: () => v
});
var i = t(627968);
t(64700);
var a = t(311907),
    s = t(397927),
    r = t(517164),
    l = t(290863),
    o = t(461213),
    d = t(975571),
    c = t(622543),
    u = t(146655),
    _ = t(489379),
    A = t(900179),
    p = t(837924),
    x = t(558628),
    f = t(842241),
    m = t(282797),
    g = t(518477),
    I = t(652215),
    h = t(985018),
    b = t(379704),
    j = t(272823);

function v(e) {
    let {
        user: n,
        currentUser: t,
        guildId: v,
        onClose: C
    } = e, {
        live: N,
        recent: E,
        stream: y
    } = (0, u.A)(n.id), {
        voiceChannel: T,
        voiceActivity: L
    } = (0, _.A)({
        userId: n.id,
        guildId: v
    }), P = (0, a.bG)([r.A], () => r.A.isFetchingUserOutbox(n.id)), O = n.id === t.id, S = (0, a.bG)([o.A, l.A], () => {
        let e = O ? o.A.getStatus() : l.A.getStatus(n.id);
        return e === s.clD.OFFLINE || e === s.clD.INVISIBLE
    }), R = (0, a.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), k = N.length > 0 || null != y, B = !R && null == y && null == L && null != T, M = !S && (k || B), D = E.length > 0;
    return M || D || !P ? (0, i.jsxs)(s.IpV, {
        className: b.XG,
        fade: !0,
        children: [M ? (0, i.jsx)(A.A, {
            "aria-label": h.intl.string(h.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: b.Ci,
                children: [null != y && (0, i.jsx)("li", {
                    children: (0, i.jsx)(f.A, {
                        user: n,
                        currentUser: t,
                        stream: y,
                        onClose: C
                    })
                }), N.map((e, a) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(p.A, {
                        user: n,
                        currentUser: t,
                        activity: e,
                        onClose: C
                    })
                }, `live-${a}`)), B && (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: n,
                        currentUser: t,
                        voiceChannel: T,
                        onClose: C
                    })
                })]
            })
        }) : null, D ? (0, i.jsx)(A.A, {
            heading: h.intl.string(h.t.M0zgnT),
            introText: O ? h.intl.format(h.t["4bk9Ak"], {
                learnMoreHook: (e, n) => (0, i.jsx)(s.MzZ, {
                    href: d.A.getArticleURL(I.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, n)
            }) : void 0,
            scrollTargetId: g.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: b.Ci,
                children: E.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(x.A, {
                        user: n,
                        entry: e,
                        onClose: C
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, i.jsx)("div", {
        className: j.Ie,
        children: (0, i.jsx)(s.y$y, {})
    })
}