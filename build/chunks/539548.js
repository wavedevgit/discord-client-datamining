/** chunk id: 539548 params = (module,exports,require) **/
t.d(n, {
    A: () => v
});
var i = t(627968);
t(64700);
var s = t(311907),
    a = t(397927),
    l = t(517164),
    r = t(290863),
    o = t(461213),
    d = t(975571),
    c = t(622543),
    u = t(146655),
    _ = t(489379),
    A = t(900179),
    x = t(837924),
    p = t(558628),
    m = t(842241),
    g = t(282797),
    I = t(518477),
    f = t(652215),
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
    }), P = (0, s.bG)([l.A], () => l.A.isFetchingUserOutbox(n.id)), O = n.id === t.id, S = (0, s.bG)([o.A, r.A], () => {
        let e = O ? o.A.getStatus() : r.A.getStatus(n.id);
        return e === a.clD.OFFLINE || e === a.clD.INVISIBLE
    }), R = (0, s.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), k = N.length > 0 || null != y, B = !R && null == y && null == L && null != T, M = !S && (k || B), D = E.length > 0;
    return M || D || !P ? (0, i.jsxs)(a.IpV, {
        className: b.XG,
        fade: !0,
        children: [M ? (0, i.jsx)(A.A, {
            "aria-label": h.intl.string(h.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: b.Ci,
                children: [null != y && (0, i.jsx)("li", {
                    children: (0, i.jsx)(m.A, {
                        user: n,
                        currentUser: t,
                        stream: y,
                        onClose: C
                    })
                }), N.map((e, s) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(x.A, {
                        user: n,
                        currentUser: t,
                        activity: e,
                        onClose: C
                    })
                }, `live-${s}`)), B && (0, i.jsx)("li", {
                    children: (0, i.jsx)(g.A, {
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
                learnMoreHook: (e, n) => (0, i.jsx)(a.MzZ, {
                    href: d.A.getArticleURL(f.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, n)
            }) : void 0,
            scrollTargetId: I.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: b.Ci,
                children: E.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(p.A, {
                        user: n,
                        entry: e,
                        onClose: C
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, i.jsx)("div", {
        className: j.Ie,
        children: (0, i.jsx)(a.y$y, {})
    })
}