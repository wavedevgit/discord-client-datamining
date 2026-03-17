/** chunk id: 539548 params = (module,exports,require) **/
t.d(n, {
    A: () => v
});
var i = t(627968);
t(64700);
var s = t(311907),
    r = t(397927),
    l = t(517164),
    a = t(290863),
    o = t(461213),
    d = t(975571),
    c = t(622543),
    u = t(146655),
    A = t(489379),
    m = t(900179),
    _ = t(837924),
    x = t(558628),
    p = t(842241),
    f = t(282797),
    h = t(518477),
    g = t(652215),
    I = t(985018),
    j = t(78702),
    b = t(781425);

function v(e) {
    let {
        user: n,
        currentUser: t,
        guildId: v,
        onClose: N
    } = e, {
        live: C,
        recent: y,
        stream: T
    } = (0, u.A)(n.id), {
        voiceChannel: E,
        voiceActivity: L
    } = (0, A.A)({
        userId: n.id,
        guildId: v
    }), P = (0, s.bG)([l.A], () => l.A.isFetchingUserOutbox(n.id)), R = n.id === t.id, O = (0, s.bG)([o.A, a.A], () => {
        let e = R ? o.A.getStatus() : a.A.getStatus(n.id);
        return e === r.clD.OFFLINE || e === r.clD.INVISIBLE
    }), S = (0, s.bG)([c.A], () => c.A.getUserProfile(n.id)?.private === !0), M = C.length > 0 || null != T, G = !S && null == T && null == L && null != E, k = !O && (M || G), B = y.length > 0;
    return k || B || !P ? (0, i.jsxs)(r.IpV, {
        className: j.XG,
        fade: !0,
        children: [k ? (0, i.jsx)(m.A, {
            "aria-label": I.intl.string(I.t.J6STd9),
            children: (0, i.jsxs)("ul", {
                className: j.Ci,
                children: [null != T && (0, i.jsx)("li", {
                    children: (0, i.jsx)(p.A, {
                        user: n,
                        currentUser: t,
                        stream: T,
                        onClose: N
                    })
                }), C.map((e, s) => (0, i.jsx)("li", {
                    children: (0, i.jsx)(_.A, {
                        user: n,
                        currentUser: t,
                        activity: e,
                        onClose: N
                    })
                }, `live-${s}`)), G && (0, i.jsx)("li", {
                    children: (0, i.jsx)(f.A, {
                        user: n,
                        currentUser: t,
                        voiceChannel: E,
                        onClose: N
                    })
                })]
            })
        }) : null, B ? (0, i.jsx)(m.A, {
            heading: I.intl.string(I.t.M0zgnT),
            introText: R ? I.intl.format(I.t["4bk9Ak"], {
                learnMoreHook: (e, n) => (0, i.jsx)(r.MzZ, {
                    href: d.A.getArticleURL(g.MVz.ACTIVITY_STATUS_SETTINGS),
                    children: e
                }, n)
            }) : void 0,
            scrollTargetId: h.bk.RECENT_ACTIVITY,
            children: (0, i.jsx)("ul", {
                className: j.Ci,
                children: y.map(e => (0, i.jsx)("li", {
                    children: (0, i.jsx)(x.A, {
                        user: n,
                        entry: e,
                        onClose: N
                    })
                }, e.id))
            })
        }) : null]
    }) : (0, i.jsx)("div", {
        className: b.Ie,
        children: (0, i.jsx)(r.y$y, {})
    })
}